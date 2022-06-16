var O1=Object.defineProperty,L1=Object.defineProperties;var M1=Object.getOwnPropertyDescriptors;var uo=Object.getOwnPropertySymbols;var xh=Object.prototype.hasOwnProperty,bh=Object.prototype.propertyIsEnumerable;var Nh=(t,e,n)=>e in t?O1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ie=(t,e)=>{for(var n in e||(e={}))xh.call(e,n)&&Nh(t,n,e[n]);if(uo)for(var n of uo(e))bh.call(e,n)&&Nh(t,n,e[n]);return t},yt=(t,e)=>L1(t,M1(e));var Wl=(t,e)=>{var n={};for(var r in t)xh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&uo)for(var r of uo(t))e.indexOf(r)<0&&bh.call(t,r)&&(n[r]=t[r]);return n};const D1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};D1();var R={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),F1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),z1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),j1=Symbol.for("react.context"),W1=Symbol.for("react.forward_ref"),H1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),Ph=Symbol.iterator;function q1(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Ng={};function ci(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Ig}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=ci.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Ig}var pd=hd.prototype=new xg;pd.constructor=hd;Tg(pd,ci.prototype);pd.isPureReactComponent=!0;var Rh=Array.isArray,bg=Object.prototype.hasOwnProperty,md={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bg.call(e,r)&&!Pg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bs,type:t,key:s,ref:o,props:i,_owner:md.current}}function K1(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function Y1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ah=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y1(""+t.key):e.toString(36)}function Mo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bs:case F1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hl(o,0):r,Rh(i)?(n="",t!=null&&(n=t.replace(Ah,"$&/")+"/"),Mo(i,e,n,"",function(u){return u})):i!=null&&(gd(i)&&(i=K1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ah,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hl(s,a);o+=Mo(s,e,n,l,i)}else if(l=q1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hl(s,a++),o+=Mo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function co(t,e,n){if(t==null)return t;var r=[],i=0;return Mo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},Do={transition:null},X1={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Do,ReactCurrentOwner:md};H.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=ci;H.Fragment=U1;H.Profiler=$1;H.PureComponent=hd;H.StrictMode=z1;H.Suspense=H1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bg.call(e,l)&&!Pg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bs,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:j1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B1,_context:t},t.Consumer=t};H.createElement=Rg;H.createFactory=function(t){var e=Rg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:W1,render:t}};H.isValidElement=gd;H.lazy=function(t){return{$$typeof:G1,_payload:{_status:-1,_result:t},_init:Q1}};H.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Do.transition;Do.transition={};try{t()}finally{Do.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Le.current.useCallback(t,e)};H.useContext=function(t){return Le.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};H.useEffect=function(t,e){return Le.current.useEffect(t,e)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Le.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};H.useRef=function(t){return Le.current.useRef(t)};H.useState=function(t){return Le.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.0.0-fc46dba67-20220329";R.exports=H;var Ag=R.exports;function Jo(){return Jo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zn||(zn={}));var Oh=function(t){return t},Lh="beforeunload",J1="popstate";function Z1(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var w=r.location,k=w.pathname,M=w.search,D=w.hash,re=i.state||{};return[re.idx,Oh({pathname:k,search:M,hash:D,state:re.usr||null,key:re.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var w=zn.Pop,k=s(),M=k[0],D=k[1];if(g.length){if(M!=null){var re=c-M;re&&(o={action:w,location:D,retry:function(){E(re*-1)}},E(re))}}else p(w)}}r.addEventListener(J1,a);var l=zn.Pop,u=s(),c=u[0],d=u[1],f=Dh(),g=Dh();c==null&&(c=0,i.replaceState(Jo({},i.state,{idx:c}),""));function y(w){return typeof w=="string"?w:Mu(w)}function C(w,k){return k===void 0&&(k=null),Oh(Jo({pathname:d.pathname,hash:"",search:""},typeof w=="string"?fr(w):w,{state:k,key:ew()}))}function b(w,k){return[{usr:w.state,key:w.key,idx:k},y(w)]}function m(w,k,M){return!g.length||(g.call({action:w,location:k,retry:M}),!1)}function p(w){l=w;var k=s();c=k[0],d=k[1],f.call({action:l,location:d})}function v(w,k){var M=zn.Push,D=C(w,k);function re(){v(w,k)}if(m(M,D,re)){var et=b(D,c+1),Pt=et[0],An=et[1];try{i.pushState(Pt,"",An)}catch{r.location.assign(An)}p(M)}}function _(w,k){var M=zn.Replace,D=C(w,k);function re(){_(w,k)}if(m(M,D,re)){var et=b(D,c),Pt=et[0],An=et[1];i.replaceState(Pt,"",An),p(M)}}function E(w){i.go(w)}var N={get action(){return l},get location(){return d},createHref:y,push:v,replace:_,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(k){return f.push(k)},block:function(k){var M=g.push(k);return g.length===1&&r.addEventListener(Lh,Mh),function(){M(),g.length||r.removeEventListener(Lh,Mh)}}};return N}function Mh(t){t.preventDefault(),t.returnValue=""}function Dh(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function ew(){return Math.random().toString(36).substr(2,8)}function Mu(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function fr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vd=R.exports.createContext(null),yd=R.exports.createContext(null),di=R.exports.createContext({outlet:null,matches:[]});function Tt(t,e){if(!t)throw new Error(e)}function tw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fr(e):e,i=Mg(r.pathname||"/",n);if(i==null)return null;let s=Og(t);nw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=dw(s[a],i);return o}function Og(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Tt(!1),o.relativePath=o.relativePath.slice(r.length));let a=fn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Tt(!1),Og(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:uw(a,i.index),routesMeta:l})}),e}function nw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rw=/^:\w+$/,iw=3,sw=2,ow=1,aw=10,lw=-2,Fh=t=>t==="*";function uw(t,e){let n=t.split("/"),r=n.length;return n.some(Fh)&&(r+=lw),e&&(r+=sw),n.filter(i=>!Fh(i)).reduce((i,s)=>i+(rw.test(s)?iw:s===""?ow:aw),r)}function cw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=fw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:Dg(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function fw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=pw(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function hw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function pw(t,e){try{return decodeURIComponent(t)}catch{return t}}function mw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fr(t):t;return{pathname:n?n.startsWith("/")?n:gw(n,e):e,search:yw(r),hash:_w(i)}}function gw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lg(t,e,n){let r=typeof t=="string"?fr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=mw(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function vw(t){return t===""||t.pathname===""?"/":typeof t=="string"?fr(t).pathname:t.pathname}function Mg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),Dg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_w=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ww(t){js()||Tt(!1);let{basename:e,navigator:n}=R.exports.useContext(vd),{hash:r,pathname:i,search:s}=Fg(t),o=i;if(e!=="/"){let a=vw(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):fn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function js(){return R.exports.useContext(yd)!=null}function Ya(){return js()||Tt(!1),R.exports.useContext(yd).location}function Qa(){js()||Tt(!1);let{basename:t,navigator:e}=R.exports.useContext(vd),{matches:n}=R.exports.useContext(di),{pathname:r}=Ya(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=R.exports.useRef(!1);return R.exports.useEffect(()=>{s.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Lg(a,JSON.parse(i),r);t!=="/"&&(u.pathname=fn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const Cw=R.exports.createContext(null);function Ew(t){let e=R.exports.useContext(di).outlet;return e&&R.exports.createElement(Cw.Provider,{value:t},e)}function _d(){let{matches:t}=R.exports.useContext(di),e=t[t.length-1];return e?e.params:{}}function Fg(t){let{matches:e}=R.exports.useContext(di),{pathname:n}=Ya(),r=JSON.stringify(e.map(i=>i.pathnameBase));return R.exports.useMemo(()=>Lg(t,JSON.parse(r),n),[t,r,n])}function Sw(t,e){js()||Tt(!1);let{matches:n}=R.exports.useContext(di),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ya(),a;if(e){var l;let f=typeof e=="string"?fr(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||Tt(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=tw(t,{pathname:c});return kw(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:fn([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:fn([s,f.pathnameBase])})),n)}function kw(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>R.exports.createElement(di.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function Iw(t){return Ew(t.context)}function we(t){Tt(!1)}function Tw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zn.Pop,navigator:s,static:o=!1}=t;js()&&Tt(!1);let a=Dg(e),l=R.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=fr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=R.exports.useMemo(()=>{let C=Mg(u,a);return C==null?null:{pathname:C,search:c,hash:d,state:f,key:g}},[a,u,c,d,f,g]);return y==null?null:R.exports.createElement(vd.Provider,{value:l},R.exports.createElement(yd.Provider,{children:n,value:{location:y,navigationType:i}}))}function Nw(t){let{children:e,location:n}=t;return Sw(Du(e),n)}function Du(t){let e=[];return R.exports.Children.forEach(t,n=>{if(!R.exports.isValidElement(n))return;if(n.type===R.exports.Fragment){e.push.apply(e,Du(n.props.children));return}n.type!==we&&Tt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Du(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}function xw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const bw=["onClick","reloadDocument","replace","state","target","to"];function Pw(t){let{basename:e,children:n,window:r}=t,i=R.exports.useRef();i.current==null&&(i.current=Z1({window:r}));let s=i.current,[o,a]=R.exports.useState({action:s.action,location:s.location});return R.exports.useLayoutEffect(()=>s.listen(a),[s]),R.exports.createElement(Tw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Rw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ke=R.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=xw(e,bw),c=ww(l),d=Aw(l,{replace:s,state:o,target:a});function f(g){r&&r(g),!g.defaultPrevented&&!i&&d(g)}return R.exports.createElement("a",Fu({},u,{href:c,onClick:f,ref:n,target:a}))});function Aw(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Qa(),o=Ya(),a=Fg(t);return R.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Rw(l)){l.preventDefault();let u=!!r||Mu(o)===Mu(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Uh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uh(Object(n),!0).forEach(function(r){Mw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zo(t){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zo(t)}function Ow(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Lw(t,e,n){return e&&zh(t.prototype,e),n&&zh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wd(t,e){return Fw(t)||zw(t,e)||Ug(t,e)||Bw()}function Xa(t){return Dw(t)||Uw(t)||Ug(t)||$w()}function Dw(t){if(Array.isArray(t))return Uu(t)}function Fw(t){if(Array.isArray(t))return t}function Uw(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zw(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Ug(t,e){if(!!t){if(typeof t=="string")return Uu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(t,e)}}function Uu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $h=function(){},Cd={},zg={},$g=null,Bg={mark:$h,measure:$h};try{typeof window!="undefined"&&(Cd=window),typeof document!="undefined"&&(zg=document),typeof MutationObserver!="undefined"&&($g=MutationObserver),typeof performance!="undefined"&&(Bg=performance)}catch{}var jw=Cd.navigator||{},Bh=jw.userAgent,jh=Bh===void 0?"":Bh,Cn=Cd,ee=zg,Wh=$g,fo=Bg;Cn.document;var Yt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",jg=~jh.indexOf("MSIE")||~jh.indexOf("Trident/"),jt="___FONT_AWESOME___",zu=16,Wg="fa",Hg="svg-inline--fa",Zn="data-fa-i2svg",$u="data-fa-pseudo-element",Ww="data-fa-pseudo-element-pending",Ed="data-prefix",Sd="data-icon",Hh="fontawesome-i2svg",Hw="async",Vw=["HTML","HEAD","STYLE","SCRIPT"],Vg=function(){try{return!0}catch{return!1}}(),kd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ea={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Gg={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Gw={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},qw=/fa[srltdbk\-\ ]/,qg="fa-layers-text",Kw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Yw={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Kg=[1,2,3,4,5,6,7,8,9,10],Qw=Kg.concat([11,12,13,14,15,16,17,18,19,20]),Xw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$n={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jw=[].concat(Xa(Object.keys(ea)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$n.GROUP,$n.SWAP_OPACITY,$n.PRIMARY,$n.SECONDARY]).concat(Kg.map(function(t){return"".concat(t,"x")})).concat(Qw.map(function(t){return"w-".concat(t)})),Yg=Cn.FontAwesomeConfig||{};function Zw(t){var e=ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ee&&typeof ee.querySelector=="function"){var tC=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tC.forEach(function(t){var e=wd(t,2),n=e[0],r=e[1],i=eC(Zw(n));i!=null&&(Yg[r]=i)})}var nC={familyPrefix:Wg,styleDefault:"solid",replacementClass:Hg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xi=P(P({},nC),Yg);Xi.autoReplaceSvg||(Xi.observeMutations=!1);var O={};Object.keys(Xi).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Xi[t]=n,Fo.forEach(function(r){return r(O)})},get:function(){return Xi[t]}})});Cn.FontAwesomeConfig=O;var Fo=[];function rC(t){return Fo.push(t),function(){Fo.splice(Fo.indexOf(t),1)}}var Jt=zu,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iC(t){if(!(!t||!Yt)){var e=ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ee.head.insertBefore(e,r),t}}var sC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fs(){for(var t=12,e="";t-- >0;)e+=sC[Math.random()*62|0];return e}function fi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Id(t){return t.classList?fi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Qg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oC(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Qg(t[n]),'" ')},"").trim()}function Ja(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Td(t){return t.size!==wt.size||t.x!==wt.x||t.y!==wt.y||t.rotate!==wt.rotate||t.flipX||t.flipY}function aC(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function lC(t){var e=t.transform,n=t.width,r=n===void 0?zu:n,i=t.height,s=i===void 0?zu:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&jg?l+="translate(".concat(e.x/Jt-r/2,"em, ").concat(e.y/Jt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Jt,"em), calc(-50% + ").concat(e.y/Jt,"em)) "):l+="translate(".concat(e.x/Jt,"em, ").concat(e.y/Jt,"em) "),l+="scale(".concat(e.size/Jt*(e.flipX?-1:1),", ").concat(e.size/Jt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var uC=`:root, :host {
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
}`;function Xg(){var t=Wg,e=Hg,n=O.familyPrefix,r=O.replacementClass,i=uC;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vh=!1;function Vl(){O.autoAddCss&&!Vh&&(iC(Xg()),Vh=!0)}var cC={mixout:function(){return{dom:{css:Xg,insertCss:Vl}}},hooks:function(){return{beforeDOMElementCreation:function(){Vl()},beforeI2svg:function(){Vl()}}}},Wt=Cn||{};Wt[jt]||(Wt[jt]={});Wt[jt].styles||(Wt[jt].styles={});Wt[jt].hooks||(Wt[jt].hooks={});Wt[jt].shims||(Wt[jt].shims=[]);var ht=Wt[jt],Jg=[],dC=function t(){ee.removeEventListener("DOMContentLoaded",t),ta=1,Jg.map(function(e){return e()})},ta=!1;Yt&&(ta=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ta||ee.addEventListener("DOMContentLoaded",dC));function fC(t){!Yt||(ta?setTimeout(t,0):Jg.push(t))}function Ws(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Qg(t):"<".concat(e," ").concat(oC(r),">").concat(s.map(Ws).join(""),"</").concat(e,">")}function Gh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var hC=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Gl=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?hC(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function pC(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bu(t){var e=pC(t);return e.length===1?e[0].toString(16):null}function mC(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function qh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ju(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=qh(e);typeof ht.hooks.addPack=="function"&&!i?ht.hooks.addPack(t,qh(e)):ht.styles[t]=P(P({},ht.styles[t]||{}),s),t==="fas"&&ju("fa",e)}var Ji=ht.styles,gC=ht.shims,vC=Object.values(Gg),Nd=null,Zg={},ev={},tv={},nv={},rv={},yC=Object.keys(kd);function _C(t){return~Jw.indexOf(t)}function wC(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!_C(i)?i:null}var iv=function(){var e=function(s){return Gl(Ji,function(o,a,l){return o[l]=Gl(a,s,{}),o},{})};Zg=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ev=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),rv=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ji||O.autoFetchSvg,r=Gl(gC,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});tv=r.names,nv=r.unicodes,Nd=Za(O.styleDefault)};rC(function(t){Nd=Za(t.styleDefault)});iv();function xd(t,e){return(Zg[t]||{})[e]}function CC(t,e){return(ev[t]||{})[e]}function Cr(t,e){return(rv[t]||{})[e]}function sv(t){return tv[t]||{prefix:null,iconName:null}}function EC(t){var e=nv[t],n=xd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function En(){return Nd}var bd=function(){return{prefix:null,iconName:null,rest:[]}};function Za(t){var e=kd[t],n=ea[t]||ea[e],r=t in ht.styles?t:null;return n||r||null}function el(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=wC(O.familyPrefix,a);if(Ji[a]?(a=vC.includes(a)?Gw[a]:a,i=a,o.prefix=a):yC.indexOf(a)>-1?(i=a,o.prefix=Za(a)):l?o.iconName=l:a!==O.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?sv(o.iconName):{},c=Cr(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ji.far&&Ji.fas&&!O.autoFetchSvg&&(o.prefix="fas")}return o},bd());return(s.prefix==="fa"||i==="fa")&&(s.prefix=En()||"fas"),s}var SC=function(){function t(){Ow(this,t),this.definitions={}}return Lw(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),o[a]),ju(a,o[a]);var l=Gg[a];l&&ju(l,o[a]),iv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Kh=[],Er={},Dr={},kC=Object.keys(Dr);function IC(t,e){var n=e.mixoutsTo;return Kh=t,Er={},Object.keys(Dr).forEach(function(r){kC.indexOf(r)===-1&&delete Dr[r]}),Kh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zo(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Er[o]||(Er[o]=[]),Er[o].push(s[o])})}r.provides&&r.provides(Dr)}),n}function Wu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Er[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function er(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Er[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Dr[t]?Dr[t].apply(null,e):void 0}function Hu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||En();if(!!e)return e=Cr(n,e)||e,Gh(ov.definitions,n,e)||Gh(ht.styles,n,e)}var ov=new SC,TC=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,er("noAuto")},NC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(er("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,fC(function(){bC({autoReplaceSvgRoot:n}),er("watch",e)})}},xC={icon:function(e){if(e===null)return null;if(Zo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Cr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Za(e[0]);return{prefix:r,iconName:Cr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.familyPrefix,"-"))>-1||e.match(qw))){var i=el(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||En(),iconName:Cr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=En();return{prefix:s,iconName:Cr(s,e)||e}}}},Xe={noAuto:TC,config:O,dom:NC,parse:xC,library:ov,findIconDefinition:Hu,toHtml:Ws},bC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(ht.styles).length>0||O.autoFetchSvg)&&Yt&&O.autoReplaceSvg&&Xe.dom.i2svg({node:r})};function tl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ws(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Yt){var r=ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function PC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Td(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ja(P(P({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function RC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:r}]}]}function Pd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,C=y.width,b=y.height,m=i==="fak",p=[O.replacementClass,s?"".concat(O.familyPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),v={children:[],attributes:P(P({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(b)})},_=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/b*16*.0625,"em")}:{};g&&(v.attributes[Zn]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||fs())},children:[l]}),delete v.attributes.title);var E=P(P({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:P(P({},_),d.styles)}),N=r.found&&n.found?Ht("generateAbstractMask",E)||{children:[],attributes:{}}:Ht("generateAbstractIcon",E)||{children:[],attributes:{}},w=N.children,k=N.attributes;return E.children=w,E.attributes=k,a?RC(E):PC(E)}function Yh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=P(P(P({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zn]="");var c=P({},o.styles);Td(i)&&(c.transform=lC({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ja(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function AC(t){var e=t.content,n=t.title,r=t.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ja(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ql=ht.styles;function Vu(t){var e=t[0],n=t[1],r=t.slice(4),i=wd(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var OC={found:!1,width:512,height:512};function LC(t,e){!Vg&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gu(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=En()),new Promise(function(r,i){if(Ht("missingIconAbstract"),n==="fa"){var s=sv(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ql[e]&&ql[e][t]){var o=ql[e][t];return r(Vu(o))}LC(t,e),r(P(P({},OC),{},{icon:O.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var Qh=function(){},qu=O.measurePerformance&&fo&&fo.mark&&fo.measure?fo:{mark:Qh,measure:Qh},ji='FA "6.1.1"',MC=function(e){return qu.mark("".concat(ji," ").concat(e," begins")),function(){return av(e)}},av=function(e){qu.mark("".concat(ji," ").concat(e," ends")),qu.measure("".concat(ji," ").concat(e),"".concat(ji," ").concat(e," begins"),"".concat(ji," ").concat(e," ends"))},Rd={begin:MC,end:av},Uo=function(){};function Xh(t){var e=t.getAttribute?t.getAttribute(Zn):null;return typeof e=="string"}function DC(t){var e=t.getAttribute?t.getAttribute(Ed):null,n=t.getAttribute?t.getAttribute(Sd):null;return e&&n}function FC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function UC(){if(O.autoReplaceSvg===!0)return zo.replace;var t=zo[O.autoReplaceSvg];return t||zo.replace}function zC(t){return ee.createElementNS("http://www.w3.org/2000/svg",t)}function $C(t){return ee.createElement(t)}function lv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?zC:$C:n;if(typeof t=="string")return ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(lv(o,{ceFn:r}))}),i}function BC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(lv(i),n)}),n.getAttribute(Zn)===null&&O.keepOriginalSource){var r=ee.createComment(BC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Id(n).indexOf(O.replacementClass))return zo.replace(e);var i=new RegExp("".concat(O.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ws(a)}).join(`
`);n.setAttribute(Zn,""),n.innerHTML=o}};function Jh(t){t()}function uv(t,e){var n=typeof e=="function"?e:Uo;if(t.length===0)n();else{var r=Jh;O.mutateApproach===Hw&&(r=Cn.requestAnimationFrame||Jh),r(function(){var i=UC(),s=Rd.begin("mutate");t.map(i),s(),n()})}}var Ad=!1;function cv(){Ad=!0}function Ku(){Ad=!1}var na=null;function Zh(t){if(!!Wh&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?Uo:e,r=t.nodeCallback,i=r===void 0?Uo:r,s=t.pseudoElementsCallback,o=s===void 0?Uo:s,a=t.observeMutationsRoot,l=a===void 0?ee:a;na=new Wh(function(u){if(!Ad){var c=En();fi(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Xh(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Xh(d.target)&&~Xw.indexOf(d.attributeName))if(d.attributeName==="class"&&DC(d.target)){var f=el(Id(d.target)),g=f.prefix,y=f.iconName;d.target.setAttribute(Ed,g||c),y&&d.target.setAttribute(Sd,y)}else FC(d.target)&&i(d.target)})}}),Yt&&na.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jC(){!na||na.disconnect()}function WC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function HC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=el(Id(t));return i.prefix||(i.prefix=En()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=CC(i.prefix,t.innerText)||xd(i.prefix,Bu(t.innerText))),i}function VC(t){var e=fi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||fs()):(e["aria-hidden"]="true",e.focusable="false")),e}function GC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ep(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=HC(t),r=n.iconName,i=n.prefix,s=n.rest,o=VC(t),a=Wu("parseNodeAttributes",{},t),l=e.styleParser?WC(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var qC=ht.styles;function dv(t){var e=O.autoReplaceSvg==="nest"?ep(t,{styleParser:!1}):ep(t);return~e.extra.classes.indexOf(qg)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}function tp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=ee.documentElement.classList,r=function(d){return n.add("".concat(Hh,"-").concat(d))},i=function(d){return n.remove("".concat(Hh,"-").concat(d))},s=O.autoFetchSvg?Object.keys(kd):Object.keys(qC),o=[".".concat(qg,":not([").concat(Zn,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Rd.begin("onTree"),u=a.reduce(function(c,d){try{var f=dv(d);f&&c.push(f)}catch(g){Vg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){uv(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function KC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dv(t).then(function(n){n&&uv([n],e)})}function YC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hu(i||{})),t(r,P(P({},n),{},{mask:i}))}}var QC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,C=n.classes,b=C===void 0?[]:C,m=n.attributes,p=m===void 0?{}:m,v=n.styles,_=v===void 0?{}:v;if(!!e){var E=e.prefix,N=e.iconName,w=e.icon;return tl(P({type:"icon"},e),function(){return er("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(f?p["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||fs()):(p["aria-hidden"]="true",p.focusable="false")),Pd({icons:{main:Vu(w),mask:l?Vu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:N,transform:P(P({},wt),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:p,styles:_,classes:b}})})}},XC={mixout:function(){return{icon:YC(QC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tp,n.nodeCallback=KC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,s=n.callback,o=s===void 0?function(){}:s;return tp(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([Gu(i,a),c.iconName?Gu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var b=wd(C,2),m=b[0],p=b[1];g([n,Pd({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ja(a);l.length>0&&(i.style=l);var u;return Td(o)&&(u=Ht("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},JC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return tl({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.familyPrefix,"-layers")].concat(Xa(s)).join(" ")},children:o}]})}}}},ZC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return tl({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),AC({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(O.familyPrefix,"-layers-counter")].concat(Xa(a))}})})}}}},eE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?wt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return tl({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),Yh({content:n,transform:P(P({},wt),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(O.familyPrefix,"-layers-text")].concat(Xa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(jg){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},tE=new RegExp('"',"ug"),np=[1105920,1112319];function nE(t){var e=t.replace(tE,""),n=mC(e,0),r=n>=np[0]&&n<=np[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bu(i?e[0]:e),isSecondary:r||i}}function rp(t,e){var n="".concat(Ww).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fi(t.children),o=s.filter(function(N){return N.getAttribute($u)===e})[0],a=Cn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Kw),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ea[l[2].toLowerCase()]:Yw[u],g=nE(d),y=g.value,C=g.isSecondary,b=l[0].startsWith("FontAwesome"),m=xd(f,y),p=m;if(b){var v=EC(y);v.iconName&&v.prefix&&(m=v.iconName,f=v.prefix)}if(m&&!C&&(!o||o.getAttribute(Ed)!==f||o.getAttribute(Sd)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);var _=GC(),E=_.extra;E.attributes[$u]=e,Gu(m,f).then(function(N){var w=Pd(P(P({},_),{},{icons:{main:N,mask:bd()},prefix:f,iconName:p,extra:E,watchable:!0})),k=ee.createElement("svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=w.map(function(M){return Ws(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function rE(t){return Promise.all([rp(t,"::before"),rp(t,"::after")])}function iE(t){return t.parentNode!==document.head&&!~Vw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($u)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ip(t){if(!!Yt)return new Promise(function(e,n){var r=fi(t.querySelectorAll("*")).filter(iE).map(rE),i=Rd.begin("searchPseudoElements");cv(),Promise.all(r).then(function(){i(),Ku(),e()}).catch(function(){i(),Ku(),n()})})}var sE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ip,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;O.searchPseudoElements&&ip(i)}}},sp=!1,oE={mixout:function(){return{dom:{unwatch:function(){cv(),sp=!0}}}},hooks:function(){return{bootstrap:function(){Zh(Wu("mutationObserverCallbacks",{}))},noAuto:function(){jC()},watch:function(n){var r=n.observeMutationsRoot;sp?Ku():Zh(Wu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},op=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},aE={mixout:function(){return{parse:{transform:function(n){return op(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=op(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},Kl={x:0,y:0,width:"100%",height:"100%"};function ap(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function lE(t){return t.tag==="g"?t.children:[t]}var uE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?el(i.split(" ").map(function(o){return o.trim()})):bd();return s.prefix||(s.prefix=En()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=aC({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:P(P({},Kl),{},{fill:"white"})},C=c.children?{children:c.children.map(ap)}:{},b={tag:"g",attributes:P({},g.inner),children:[ap(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},C))]},m={tag:"g",attributes:P({},g.outer),children:[b]},p="mask-".concat(a||fs()),v="clip-".concat(a||fs()),_={tag:"mask",attributes:P(P({},Kl),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:lE(f)},_]};return r.push(E,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Kl)}),{children:r,attributes:i}}}},cE={provides:function(e){var n=!1;Cn.matchMedia&&(n=Cn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},fE=[cC,XC,JC,ZC,eE,sE,oE,aE,uE,cE,dE];IC(fE,{mixoutsTo:Xe});Xe.noAuto;Xe.config;var hE=Xe.library;Xe.dom;var Yu=Xe.parse;Xe.findIconDefinition;Xe.toHtml;var pE=Xe.icon;Xe.layer;Xe.text;Xe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var mE={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"]},gE={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"]},fv={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},vE={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},yE=vE,_E={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"]},wE={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"]},CE={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},EE={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"]},SE={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},kE=SE,hv={prefix:"fas",iconName:"user-ninja",icon:[512,512,[129399],"f504","M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"]},Qu={},pv={exports:{}},Je={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var z=A.length;A.push(U);e:for(;0<z;){var ue=z-1>>>1,pe=A[ue];if(0<i(pe,U))A[ue]=U,A[z]=pe,z=ue;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],z=A.pop();if(z!==U){A[0]=z;e:for(var ue=0,pe=A.length,ao=pe>>>1;ue<ao;){var On=2*(ue+1)-1,jl=A[On],Ln=On+1,lo=A[Ln];if(0>i(jl,z))Ln<pe&&0>i(lo,jl)?(A[ue]=lo,A[Ln]=z,ue=Ln):(A[ue]=jl,A[On]=z,ue=On);else if(Ln<pe&&0>i(lo,z))A[ue]=lo,A[Ln]=z,ue=Ln;else break e}}return U}function i(A,U){var z=A.sortIndex-U.sortIndex;return z!==0?z:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function _(A){if(C=!1,v(A),!y)if(n(l)!==null)y=!0,$l(E);else{var U=n(u);U!==null&&Bl(_,U.startTime-A)}}function E(A,U){y=!1,C&&(C=!1,m(k),k=-1),g=!0;var z=f;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||A&&!re());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var pe=ue(d.expirationTime<=U);U=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(l)&&r(l),v(U)}else r(l);d=n(l)}if(d!==null)var ao=!0;else{var On=n(u);On!==null&&Bl(_,On.startTime-U),ao=!1}return ao}finally{d=null,f=z,g=!1}}var N=!1,w=null,k=-1,M=5,D=-1;function re(){return!(t.unstable_now()-D<M)}function et(){if(w!==null){var A=t.unstable_now();D=A;var U=!0;try{U=w(!0,A)}finally{U?Pt():(N=!1,w=null)}}else N=!1}var Pt;if(typeof p=="function")Pt=function(){p(et)};else if(typeof MessageChannel!="undefined"){var An=new MessageChannel,Th=An.port2;An.port1.onmessage=et,Pt=function(){Th.postMessage(null)}}else Pt=function(){b(et,0)};function $l(A){w=A,N||(N=!0,Pt())}function Bl(A,U){k=b(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,$l(E))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var z=f;f=U;try{return A()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=f;f=A;try{return U()}finally{f=z}},t.unstable_scheduleCallback=function(A,U,z){var ue=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,A){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=z+pe,A={id:c++,callback:U,priorityLevel:A,startTime:z,expirationTime:pe,sortIndex:-1},z>ue?(A.sortIndex=z,e(u,A),n(l)===null&&A===n(u)&&(C?(m(k),k=-1):C=!0,Bl(_,z-ue))):(A.sortIndex=pe,e(l,A),y||g||(y=!0,$l(E))),A},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(A){var U=f;return function(){var z=f;f=U;try{return A.apply(this,arguments)}finally{f=z}}}})(gv);mv.exports=gv;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=R.exports,Ye=mv.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,hs={};function hr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(hs[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var Vt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Xu=Object.prototype.hasOwnProperty,IE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},up={};function TE(t){return Xu.call(up,t)?!0:Xu.call(lp,t)?!1:IE.test(t)?up[t]=!0:(lp[t]=!0,!1)}function NE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xE(t,e,n,r){if(e===null||typeof e=="undefined"||NE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Ld);Se[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Ld);Se[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Ld);Se[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Md(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xE(e,n,i,r)&&(n=null),r||i===null?TE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Cv=Symbol.for("react.offscreen"),cp=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Yl;function Wi(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var Ql=!1;function Xl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wi(t):""}function bE(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Sr:return"Portal";case Ju:return"Profiler";case Dd:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ud:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function PE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RE(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=RE(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kv(t,e){e=e.checked,e!=null&&Md(t,"checked",e,!1)}function rc(t,e){kv(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hi=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Hi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function Iv(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,Nv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AE=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(t){AE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zi[e]=Zi[t]})});function xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zi.hasOwnProperty(t)&&Zi[t]?(""+e).trim():e+"px"}function bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OE=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(OE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,Ur=null,zr=null;function mp(t){if(t=Gs(t)){if(typeof cc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ol(e),cc(t.stateNode,t.type,e))}}function Pv(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function Rv(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function Av(t,e){return t(e)}function Ov(){}var Jl=!1;function Lv(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Av(t,e,n)}finally{Jl=!1,(Ur!==null||zr!==null)&&(Ov(),Rv())}}function ms(t,e){var n=t.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var dc=!1;if(Vt)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{dc=!1}function LE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var es=!1,ia=null,sa=!1,fc=null,ME={onError:function(t){es=!0,ia=t}};function DE(t,e,n,r,i,s,o,a,l){es=!1,ia=null,LE.apply(ME,arguments)}function FE(t,e,n,r,i,s,o,a,l){if(DE.apply(this,arguments),es){if(es){var u=ia;es=!1,ia=null}else throw Error(S(198));sa||(sa=!0,fc=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if(pr(t)!==t)throw Error(S(188))}function UE(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gp(i),t;if(s===r)return gp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Dv(t){return t=UE(t),t!==null?Fv(t):null}function Fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=Ye.unstable_scheduleCallback,vp=Ye.unstable_cancelCallback,zE=Ye.unstable_shouldYield,$E=Ye.unstable_requestPaint,ce=Ye.unstable_now,BE=Ye.unstable_getCurrentPriorityLevel,$d=Ye.unstable_ImmediatePriority,zv=Ye.unstable_UserBlockingPriority,oa=Ye.unstable_NormalPriority,jE=Ye.unstable_LowPriority,$v=Ye.unstable_IdlePriority,nl=null,Et=null;function WE(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:GE,HE=Math.log,VE=Math.LN2;function GE(t){return t>>>=0,t===0?32:31-(HE(t)/VE|0)|0}var go=64,vo=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vi(a):(s&=o,s!==0&&(r=Vi(s)))}else o=n&~i,o!==0?r=Vi(o):s!==0&&(r=Vi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function qE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=qE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function YE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Bv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jv,jd,Wv,Hv,Vv,pc=!1,yo=[],hn=null,pn=null,mn=null,gs=new Map,vs=new Map,nn=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function XE(t,e,n,r,i){switch(e){case"focusin":return hn=Ri(hn,t,e,n,r,i),!0;case"dragenter":return pn=Ri(pn,t,e,n,r,i),!0;case"mouseover":return mn=Ri(mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return gs.set(s,Ri(gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Ri(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function Gv(t){var e=Bn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mv(n),e!==null){t.blockedOn=e,Vv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=Gs(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function _p(t,e,n){$o(t)&&n.delete(e)}function JE(){pc=!1,hn!==null&&$o(hn)&&(hn=null),pn!==null&&$o(pn)&&(pn=null),mn!==null&&$o(mn)&&(mn=null),gs.forEach(_p),vs.forEach(_p)}function Ai(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,JE)))}function ys(t){function e(i){return Ai(i,t)}if(0<yo.length){Ai(yo[0],t);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hn!==null&&Ai(hn,t),pn!==null&&Ai(pn,t),mn!==null&&Ai(mn,t),gs.forEach(e),vs.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&nn.shift()}var $r=Qt.ReactCurrentBatchConfig;function ZE(t,e,n,r){var i=q,s=$r.transition;$r.transition=null;try{q=1,Wd(t,e,n,r)}finally{q=i,$r.transition=s}}function eS(t,e,n,r){var i=q,s=$r.transition;$r.transition=null;try{q=4,Wd(t,e,n,r)}finally{q=i,$r.transition=s}}function Wd(t,e,n,r){var i=mc(t,e,n,r);if(i===null)uu(t,e,r,la,n),yp(t,r);else if(XE(i,t,e,n,r))r.stopPropagation();else if(yp(t,r),e&4&&-1<QE.indexOf(t)){for(;i!==null;){var s=Gs(i);if(s!==null&&jv(s),s=mc(t,e,n,r),s===null&&uu(t,e,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}var la=null;function mc(t,e,n,r){if(la=null,t=zd(r),t=Bn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return la=t,null}function qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BE()){case $d:return 1;case zv:return 4;case oa:case jE:return 16;case $v:return 536870912;default:return 16}default:return 16}}var ln=null,Hd=null,Bo=null;function Kv(){if(Bo)return Bo;var t,e=Hd,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function wp(){return!1}function Ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:wp,this.isPropagationStopped=wp,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Ze(hi),Vs=oe({},hi,{view:0,detail:0}),tS=Ze(Vs),eu,tu,Oi,rl=oe({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?(eu=t.screenX-Oi.screenX,tu=t.screenY-Oi.screenY):tu=eu=0,Oi=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Cp=Ze(rl),nS=oe({},rl,{dataTransfer:0}),rS=Ze(nS),iS=oe({},Vs,{relatedTarget:0}),nu=Ze(iS),sS=oe({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Ze(sS),aS=oe({},hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=Ze(aS),uS=oe({},hi,{data:0}),Ep=Ze(uS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fS[t])?!!e[t]:!1}function Gd(){return hS}var pS=oe({},Vs,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=Ze(pS),gS=oe({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Ze(gS),vS=oe({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),yS=Ze(vS),_S=oe({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=Ze(_S),CS=oe({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=Ze(CS),SS=[9,13,27,32],qd=Vt&&"CompositionEvent"in window,ts=null;Vt&&"documentMode"in document&&(ts=document.documentMode);var kS=Vt&&"TextEvent"in window&&!ts,Yv=Vt&&(!qd||ts&&8<ts&&11>=ts),kp=String.fromCharCode(32),Ip=!1;function Qv(t,e){switch(t){case"keyup":return SS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function IS(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(Ip=!0,kp);case"textInput":return t=e.data,t===kp&&Ip?null:t;default:return null}}function TS(t,e){if(Ir)return t==="compositionend"||!qd&&Qv(t,e)?(t=Kv(),Bo=Hd=ln=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NS[t.type]:e==="textarea"}function Jv(t,e,n,r){Pv(r),e=ua(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ns=null,_s=null;function xS(t){uy(t,0)}function il(t){var e=xr(t);if(Sv(e))return t}function bS(t,e){if(t==="change")return e}var Zv=!1;if(Vt){var ru;if(Vt){var iu="oninput"in document;if(!iu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),iu=typeof Np.oninput=="function"}ru=iu}else ru=!1;Zv=ru&&(!document.documentMode||9<document.documentMode)}function xp(){ns&&(ns.detachEvent("onpropertychange",ey),_s=ns=null)}function ey(t){if(t.propertyName==="value"&&il(_s)){var e=[];Jv(e,_s,t,zd(t)),Lv(xS,e)}}function PS(t,e,n){t==="focusin"?(xp(),ns=e,_s=n,ns.attachEvent("onpropertychange",ey)):t==="focusout"&&xp()}function RS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(_s)}function AS(t,e){if(t==="click")return il(e)}function OS(t,e){if(t==="input"||t==="change")return il(e)}function LS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:LS;function ws(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xu.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ny(){for(var t=window,e=ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ra(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MS(t){var e=ny(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ty(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pp(n,s);var o=Pp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DS=Vt&&"documentMode"in document&&11>=document.documentMode,Tr=null,gc=null,rs=null,vc=!1;function Rp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Tr==null||Tr!==ra(r)||(r=Tr,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&ws(rs,r)||(rs=r,r=ua(gc,"onSelect"),0<r.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},su={},ry={};Vt&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function sl(t){if(su[t])return su[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ry)return su[t]=e[n];return t}var iy=sl("animationend"),sy=sl("animationiteration"),oy=sl("animationstart"),ay=sl("transitionend"),ly=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(t,e){ly.set(t,e),hr(e,[t])}for(var ou=0;ou<Ap.length;ou++){var au=Ap[ou],FS=au.toLowerCase(),US=au[0].toUpperCase()+au.slice(1);bn(FS,"on"+US)}bn(iy,"onAnimationEnd");bn(sy,"onAnimationIteration");bn(oy,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(ay,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Op(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FE(r,e,void 0,t),t.currentTarget=null}function uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Op(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Op(i,a,u),s=l}}}if(sa)throw t=fc,sa=!1,fc=null,t}function Z(t,e){var n=e[Cc];n===void 0&&(n=e[Cc]=new Set);var r=t+"__bubble";n.has(r)||(cy(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),cy(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Cs(t){if(!t[Co]){t[Co]=!0,yv.forEach(function(n){n!=="selectionchange"&&(zS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,lu("selectionchange",!1,e))}}function cy(t,e,n,r){switch(qv(e)){case 1:var i=ZE;break;case 4:i=eS;break;default:i=Wd}n=i.bind(null,e,n,t),i=void 0,!dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Lv(function(){var u=s,c=zd(n),d=[];e:{var f=ly.get(t);if(f!==void 0){var g=Vd,y=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":g=mS;break;case"focusin":y="focus",g=nu;break;case"focusout":y="blur",g=nu;break;case"beforeblur":case"afterblur":g=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yS;break;case iy:case sy:case oy:g=oS;break;case ay:g=wS;break;case"scroll":g=tS;break;case"wheel":g=ES;break;case"copy":case"cut":case"paste":g=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sp}var C=(e&4)!==0,b=!C&&t==="scroll",m=C?f!==null?f+"Capture":null:f;C=[];for(var p=u,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,m!==null&&(_=ms(p,m),_!=null&&C.push(Es(p,_,v)))),b)break;p=p.return}0<C.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:C}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==uc&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[Gt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Bn(y):null,y!==null&&(b=pr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(C=Cp,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(C=Sp,_="onPointerLeave",m="onPointerEnter",p="pointer"),b=g==null?f:xr(g),v=y==null?f:xr(y),f=new C(_,p+"leave",g,n,c),f.target=b,f.relatedTarget=v,_=null,Bn(c)===u&&(C=new C(m,p+"enter",y,n,c),C.target=v,C.relatedTarget=b,_=C),b=_,g&&y)t:{for(C=g,m=y,p=0,v=C;v;v=_r(v))p++;for(v=0,_=m;_;_=_r(_))v++;for(;0<p-v;)C=_r(C),p--;for(;0<v-p;)m=_r(m),v--;for(;p--;){if(C===m||m!==null&&C===m.alternate)break t;C=_r(C),m=_r(m)}C=null}else C=null;g!==null&&Lp(d,f,g,C,!1),y!==null&&b!==null&&Lp(d,b,y,C,!0)}}e:{if(f=u?xr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=bS;else if(Tp(f))if(Zv)E=OS;else{E=RS;var N=PS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=AS);if(E&&(E=E(t,u))){Jv(d,E,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ic(f,"number",f.value)}switch(N=u?xr(u):window,t){case"focusin":(Tp(N)||N.contentEditable==="true")&&(Tr=N,gc=u,rs=null);break;case"focusout":rs=gc=Tr=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Rp(d,n,c);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Rp(d,n,c)}var w;if(qd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ir?Qv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Yv&&n.locale!=="ko"&&(Ir||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ir&&(w=Kv()):(ln=c,Hd="value"in ln?ln.value:ln.textContent,Ir=!0)),N=ua(u,k),0<N.length&&(k=new Ep(k,t,null,n,c),d.push({event:k,listeners:N}),w?k.data=w:(w=Xv(n),w!==null&&(k.data=w)))),(w=kS?IS(t,n):TS(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(c=new Ep("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}uy(d,e)})}function Es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ms(t,n),s!=null&&r.unshift(Es(t,s,i)),s=ms(t,e),s!=null&&r.push(Es(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ms(n,s),l!=null&&o.unshift(Es(n,l,a))):i||(l=ms(n,s),l!=null&&o.push(Es(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $S=/\r\n?/g,BS=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(BS,"")}function Eo(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(S(425))}function ca(){}var yc=null;function _c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp!="undefined"?function(t){return Dp.resolve(null).then(t).catch(HS)}:wc;function HS(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ys(e)}function Lt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),_t="__reactFiber$"+pi,Ss="__reactProps$"+pi,Gt="__reactContainer$"+pi,Cc="__reactEvents$"+pi,VS="__reactListeners$"+pi,GS="__reactHandles$"+pi;function Bn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[_t])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[_t]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ol(t){return t[Ss]||null}var Ec=[],br=-1;function Pn(t){return{current:t}}function te(t){0>br||(t.current=Ec[br],Ec[br]=null,br--)}function J(t,e){br++,Ec[br]=t.current,t.current=e}var kn={},be=Pn(kn),Be=Pn(!1),tr=kn;function Kr(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function da(){te(Be),te(be)}function Up(t,e,n){if(be.current!==kn)throw Error(S(168));J(be,e),J(Be,n)}function dy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,PE(t)||"Unknown",i));return oe({},n,r)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,tr=be.current,J(be,t),J(Be,Be.current),!0}function zp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=dy(t,e,tr),r.__reactInternalMemoizedMergedChildContext=t,te(Be),te(be),J(be,t)):te(Be),J(Be,n)}var At=null,al=!1,du=!1;function fy(t){At===null?At=[t]:At.push(t)}function qS(t){al=!0,fy(t)}function Rn(){if(!du&&At!==null){du=!0;var t=0,e=q;try{var n=At;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}At=null,al=!1}catch(i){throw At!==null&&(At=At.slice(t+1)),Uv($d,Rn),i}finally{q=e,du=!1}}return null}var KS=Qt.ReactCurrentBatchConfig;function ct(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ha=Pn(null),pa=null,Pr=null,Yd=null;function Qd(){Yd=Pr=pa=null}function Xd(t){var e=ha.current;te(ha),t._currentValue=e}function Sc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){pa=t,Yd=Pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ge=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},Pr===null){if(pa===null)throw Error(S(308));Pr=t,pa.dependencies={lanes:0,firstContext:t}}else Pr=Pr.next=t;return e}var Ct=null,tn=!1;function Jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,fe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=n.interleaved,t===null?(e.next=e,Ct===null?Ct=[n]:Ct.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}function $p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ma(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,C=a;switch(f=e,g=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=oe({},d,f);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=d}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var py=new vv.Component().refs;function kc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=yn(t),s=$t(r,i);s.payload=e,n!=null&&(s.callback=n),gn(t,s),e=at(t,i,r),e!==null&&Wo(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=yn(t),s=$t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),gn(t,s),e=at(t,i,r),e!==null&&Wo(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=yn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),gn(t,i),e=at(t,r,n),e!==null&&Wo(e,t,r)}};function jp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ws(n,r)||!ws(i,s):!0}function my(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=lt(s):(i=je(e)?tr:be.current,r=e.contextTypes,s=(r=r!=null)?Kr(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=py,Jd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=lt(s):(s=je(e)?tr:be.current,i.context=Kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Rr=[],Ar=0,ga=null,va=0,tt=[],nt=0,nr=null,Mt=1,Dt="";function Mn(t,e){Rr[Ar++]=va,Rr[Ar++]=ga,ga=t,va=e}function gy(t,e,n){tt[nt++]=Mt,tt[nt++]=Dt,tt[nt++]=nr,nr=t;var r=Mt;t=Dt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-mt(e)+i|n<<i|r,Dt=s+t}else Mt=1<<s|n<<i|r,Dt=t}function Zd(t){t.return!==null&&(Mn(t,1),gy(t,1,0))}function ef(t){for(;t===ga;)ga=Rr[--Ar],Rr[Ar]=null,va=Rr[--Ar],Rr[Ar]=null;for(;t===nr;)nr=tt[--nt],tt[nt]=null,Dt=tt[--nt],tt[nt]=null,Mt=tt[--nt],tt[nt]=null}var qe=null,Fe=null,ne=!1,dt=null;function vy(t,e){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qe=t,Fe=Lt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qe=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Mt,overflow:Dt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qe=t,Fe=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(ne){var e=Fe;if(e){var n=e;if(!Hp(t,e)){if(Tc(t))throw Error(S(418));e=Lt(n.nextSibling);var r=qe;e&&Hp(t,e)?vy(r,n):(t.flags=t.flags&-4097|2,ne=!1,qe=t)}}else{if(Tc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,qe=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qe=t}function Li(t){if(t!==qe)return!1;if(!ne)return Vp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_c(t.type,t.memoizedProps)),e&&(e=Fe)){if(Tc(t)){for(t=Fe;t;)t=Lt(t.nextSibling);throw Error(S(418))}for(;e;)vy(t,e),e=Lt(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=Lt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=qe?Lt(t.stateNode.nextSibling):null;return!0}function Yr(){Fe=qe=null,ne=!1}function tf(t){dt===null?dt=[t]:dt.push(t)}function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===py&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function yy(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=In(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,_){return p===null||p.tag!==6?(p=vu(v,m.mode,_),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,_){var E=v.type;return E===kr?c(m,p,v.props.children,_,v.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===en&&Gp(E)===p.type)?(_=i(p,v.props),_.ref=Mi(m,p,v),_.return=m,_):(_=Ko(v.type,v.key,v.props,null,m.mode,_),_.ref=Mi(m,p,v),_.return=m,_)}function u(m,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=yu(v,m.mode,_),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,_,E){return p===null||p.tag!==7?(p=Kn(v,m.mode,_,E),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vu(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ho:return v=Ko(p.type,p.key,p.props,null,m.mode,v),v.ref=Mi(m,null,p),v.return=m,v;case Sr:return p=yu(p,m.mode,v),p.return=m,p;case en:var _=p._init;return d(m,_(p._payload),v)}if(Hi(p)||bi(p))return p=Kn(p,m.mode,v,null),p.return=m,p;So(m,p)}return null}function f(m,p,v,_){var E=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(m,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return v.key===E?l(m,p,v,_):null;case Sr:return v.key===E?u(m,p,v,_):null;case en:return E=v._init,f(m,p,E(v._payload),_)}if(Hi(v)||bi(v))return E!==null?null:c(m,p,v,_,null);So(m,v)}return null}function g(m,p,v,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(v)||null,a(p,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ho:return m=m.get(_.key===null?v:_.key)||null,l(p,m,_,E);case Sr:return m=m.get(_.key===null?v:_.key)||null,u(p,m,_,E);case en:var N=_._init;return g(m,p,v,N(_._payload),E)}if(Hi(_)||bi(_))return m=m.get(v)||null,c(p,m,_,E,null);So(p,_)}return null}function y(m,p,v,_){for(var E=null,N=null,w=p,k=p=0,M=null;w!==null&&k<v.length;k++){w.index>k?(M=w,w=null):M=w.sibling;var D=f(m,w,v[k],_);if(D===null){w===null&&(w=M);break}t&&w&&D.alternate===null&&e(m,w),p=s(D,p,k),N===null?E=D:N.sibling=D,N=D,w=M}if(k===v.length)return n(m,w),ne&&Mn(m,k),E;if(w===null){for(;k<v.length;k++)w=d(m,v[k],_),w!==null&&(p=s(w,p,k),N===null?E=w:N.sibling=w,N=w);return ne&&Mn(m,k),E}for(w=r(m,w);k<v.length;k++)M=g(w,m,k,v[k],_),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?k:M.key),p=s(M,p,k),N===null?E=M:N.sibling=M,N=M);return t&&w.forEach(function(re){return e(m,re)}),ne&&Mn(m,k),E}function C(m,p,v,_){var E=bi(v);if(typeof E!="function")throw Error(S(150));if(v=E.call(v),v==null)throw Error(S(151));for(var N=E=null,w=p,k=p=0,M=null,D=v.next();w!==null&&!D.done;k++,D=v.next()){w.index>k?(M=w,w=null):M=w.sibling;var re=f(m,w,D.value,_);if(re===null){w===null&&(w=M);break}t&&w&&re.alternate===null&&e(m,w),p=s(re,p,k),N===null?E=re:N.sibling=re,N=re,w=M}if(D.done)return n(m,w),ne&&Mn(m,k),E;if(w===null){for(;!D.done;k++,D=v.next())D=d(m,D.value,_),D!==null&&(p=s(D,p,k),N===null?E=D:N.sibling=D,N=D);return ne&&Mn(m,k),E}for(w=r(m,w);!D.done;k++,D=v.next())D=g(w,m,k,D.value,_),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?k:D.key),p=s(D,p,k),N===null?E=D:N.sibling=D,N=D);return t&&w.forEach(function(et){return e(m,et)}),ne&&Mn(m,k),E}function b(m,p,v,_){if(typeof v=="object"&&v!==null&&v.type===kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:e:{for(var E=v.key,N=p;N!==null;){if(N.key===E){if(E=v.type,E===kr){if(N.tag===7){n(m,N.sibling),p=i(N,v.props.children),p.return=m,m=p;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===en&&Gp(E)===N.type){n(m,N.sibling),p=i(N,v.props),p.ref=Mi(m,N,v),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}v.type===kr?(p=Kn(v.props.children,m.mode,_,v.key),p.return=m,m=p):(_=Ko(v.type,v.key,v.props,null,m.mode,_),_.ref=Mi(m,p,v),_.return=m,m=_)}return o(m);case Sr:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=yu(v,m.mode,_),p.return=m,m=p}return o(m);case en:return N=v._init,b(m,p,N(v._payload),_)}if(Hi(v))return y(m,p,v,_);if(bi(v))return C(m,p,v,_);So(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=vu(v,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return b}var Qr=yy(!0),_y=yy(!1),qs={},St=Pn(qs),ks=Pn(qs),Is=Pn(qs);function jn(t){if(t===qs)throw Error(S(174));return t}function nf(t,e){switch(J(Is,e),J(ks,t),J(St,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}te(St),J(St,e)}function Xr(){te(St),te(ks),te(Is)}function wy(t){jn(Is.current);var e=jn(St.current),n=oc(e,t.type);e!==n&&(J(ks,t),J(St,n))}function rf(t){ks.current===t&&(te(St),te(ks))}var ie=Pn(0);function ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function sf(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Ho=Qt.ReactCurrentDispatcher,st=Qt.ReactCurrentBatchConfig,Jr=0,le=null,xe=null,ge=null,_a=!1,is=!1,Ts=0,YS=0;function Te(){throw Error(S(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function af(t,e,n,r,i,s){if(Jr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ho.current=t===null||t.memoizedState===null?ZS:ek,t=n(r,i),is){s=0;do{if(is=!1,Ts=0,25<=s)throw Error(S(301));s+=1,ge=xe=null,e.updateQueue=null,Ho.current=tk,t=n(r,i)}while(is)}if(Ho.current=wa,e=xe!==null&&xe.next!==null,Jr=0,ge=xe=le=null,_a=!1,e)throw Error(S(300));return t}function lf(){var t=Ts!==0;return Ts=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=t:ge=ge.next=t,ge}function xt(){if(xe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=ge===null?le.memoizedState:ge.next;if(e!==null)ge=e,xe=t;else{if(t===null)throw Error(S(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ge===null?le.memoizedState=ge=t:ge=ge.next=t}return ge}function Gn(t,e){return typeof e=="function"?e(t):e}function ko(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,le.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Io(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Cy(){}function Ey(t,e){var n=le,r=xt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,xs(Iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Ns(9,ky.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(S(349));(Jr&30)!==0||Sy(n,e,i)}return i}function Sy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ky(t,e,n,r){e.value=n,e.getSnapshot=r,Ty(e)&&at(t,1,-1)}function Iy(t,e,n){return n(function(){Ty(e)&&at(t,1,-1)})}function Ty(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function hu(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:t},e.queue=t,t=t.dispatch=JS.bind(null,le,t),[e.memoizedState,t]}function Ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ny(){return xt().memoizedState}function Vo(t,e,n,r){var i=Rt();le.flags|=t,i.memoizedState=Ns(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=Ns(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ns(1|e,n,s,r)}function pu(t,e){return Vo(8390656,8,t,e)}function xs(t,e){return ul(2048,8,t,e)}function xy(t,e){return ul(4,2,t,e)}function by(t,e){return ul(4,4,t,e)}function Py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ry(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,Py.bind(null,e,t),n)}function uf(){}function Ay(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Oy(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function QS(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=st.transition;st.transition={};try{t(!1),e()}finally{q=n,st.transition=r}}function Ly(){return xt().memoizedState}function XS(t,e,n){var r=yn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(t)?Dy(e,n):(Fy(t,e,n),n=Ae(),t=at(t,r,n),t!==null&&Uy(t,e,r))}function JS(t,e,n){var r=yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(t))Dy(e,i);else{Fy(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o))return}catch{}finally{}n=Ae(),t=at(t,r,n),t!==null&&Uy(t,e,r)}}function My(t){var e=t.alternate;return t===le||e!==null&&e===le}function Dy(t,e){is=_a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fy(t,e,n){fe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=e.interleaved,t===null?(n.next=n,Ct===null?Ct=[e]:Ct.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function Uy(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}var wa={readContext:lt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},ZS={readContext:lt,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,Py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XS.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:hu,useDebugValue:uf,useDeferredValue:function(t){var e=hu(t),n=e[0],r=e[1];return pu(function(){var i=st.transition;st.transition={};try{r(t)}finally{st.transition=i}},[t]),n},useTransition:function(){var t=hu(!1),e=t[0];return t=QS.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Rt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),fe===null)throw Error(S(349));(Jr&30)!==0||Sy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pu(Iy.bind(null,r,s,t),[t]),r.flags|=2048,Ns(9,ky.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=fe.identifierPrefix;if(ne){var n=Dt,r=Mt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ek={readContext:lt,useCallback:Ay,useContext:lt,useEffect:xs,useImperativeHandle:Ry,useInsertionEffect:xy,useLayoutEffect:by,useMemo:Oy,useReducer:ko,useRef:Ny,useState:function(){return ko(Gn)},useDebugValue:uf,useDeferredValue:function(t){var e=ko(Gn),n=e[0],r=e[1];return xs(function(){var i=st.transition;st.transition={};try{r(t)}finally{st.transition=i}},[t]),n},useTransition:function(){var t=ko(Gn)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Cy,useSyncExternalStore:Ey,useId:Ly,unstable_isNewReconciler:!1},tk={readContext:lt,useCallback:Ay,useContext:lt,useEffect:xs,useImperativeHandle:Ry,useInsertionEffect:xy,useLayoutEffect:by,useMemo:Oy,useReducer:Io,useRef:Ny,useState:function(){return Io(Gn)},useDebugValue:uf,useDeferredValue:function(t){var e=Io(Gn),n=e[0],r=e[1];return xs(function(){var i=st.transition;st.transition={};try{r(t)}finally{st.transition=i}},[t]),n},useTransition:function(){var t=Io(Gn)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Cy,useSyncExternalStore:Ey,useId:Ly,unstable_isNewReconciler:!1};function cf(t,e){try{var n="",r=e;do n+=bE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nk=typeof WeakMap=="function"?WeakMap:Map;function zy(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,Fc=r),xc(t,e)},n}function $y(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gk.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,gn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var By,bc,jy,Wy;By=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};jy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(St.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rk(t,e,n){var r=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return je(e.type)&&da(),Ne(e),null;case 3:return r=e.stateNode,Xr(),te(Be),te(be),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Li(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,dt!==null&&($c(dt),dt=null))),bc(t,e),Ne(e),null;case 5:rf(e);var i=jn(Is.current);if(n=e.type,t!==null&&e.stateNode!=null)jy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ne(e),null}if(t=jn(St.current),Li(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Ss]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":dp(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":hp(r,s),Z("invalid",r)}ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(Eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(Eo(r.textContent,a,t),i=["children",""+a]):hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":po(r),fp(r,s,!0);break;case"textarea":po(r),pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Ss]=r,By(t,e,!1,!1),e.stateNode=t;e:{switch(o=lc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":dp(t,r),i=nc(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":hp(t,r),i=sc(t,r),Z("invalid",t);break;default:i=r}ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ps(t,l):typeof l=="number"&&ps(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Md(t,s,l,o))}switch(n){case"input":po(t),fp(t,r,!1);break;case"textarea":po(t),pp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)Wy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=jn(Is.current),jn(St.current),Li(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=qe,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:Eo(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&Eo(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ne(e),null;case 13:if(te(ie),r=e.memoizedState,ne&&Fe!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=Fe;r;)r=Lt(r.nextSibling);return Yr(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Li(e),t===null){if(!r)throw Error(S(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[_t]=e}else Yr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ne(e),null}return dt!==null&&($c(dt),dt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Li(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ie.current&1)!==0?he===0&&(he=3):gf())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Xr(),bc(t,e),t===null&&Cs(e.stateNode.containerInfo),Ne(e),null;case 10:return Xd(e.type._context),Ne(e),null;case 17:return je(e.type)&&da(),Ne(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(he!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ya(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>ei&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=ya(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ne(e),null}else 2*ce()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ve&1073741824)!==0&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}var ik=Qt.ReactCurrentOwner,Ge=!1;function Re(t,e,n,r){e.child=t===null?_y(e,null,n,r):Qr(e,t.child,n,r)}function Qp(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=af(t,e,n,r,s,i),n=lf(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qt(t,e,i)):(ne&&n&&Zd(e),e.flags|=1,Re(t,e,r,i),e.child)}function Xp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hy(t,e,s,r,i)):(t=Ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(o,r)&&t.ref===e.ref)return qt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function Hy(t,e,n,r,i){if(t!==null&&ws(t.memoizedProps,r)&&t.ref===e.ref)if(Ge=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ge=!0);else return e.lanes=t.lanes,qt(t,e,i);return Pc(t,e,n,r,i)}function Vy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},J(Or,Ve),Ve|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,J(Or,Ve),Ve|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,J(Or,Ve),Ve|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Or,Ve),Ve|=r;return Re(t,e,i,n),e.child}function Gy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,r,i){var s=je(n)?tr:be.current;return s=Kr(e,s),Br(e,i),n=af(t,e,n,r,s,i),r=lf(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qt(t,e,i)):(ne&&r&&Zd(e),e.flags|=1,Re(t,e,n,i),e.child)}function Jp(t,e,n,r,i){if(je(n)){var s=!0;fa(e)}else s=!1;if(Br(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),my(e,n,r),Ic(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=je(n)?tr:be.current,u=Kr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wp(e,o,r,u),tn=!1;var f=e.memoizedState;o.state=f,ma(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Be.current||tn?(typeof c=="function"&&(kc(e,n,c,r),l=e.memoizedState),(a=tn||jp(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ct(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=je(n)?tr:be.current,l=Kr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Wp(e,o,r,l),tn=!1,f=e.memoizedState,o.state=f,ma(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Be.current||tn?(typeof g=="function"&&(kc(e,n,g,r),y=e.memoizedState),(u=tn||jp(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Rc(t,e,n,r,s,i)}function Rc(t,e,n,r,i,s){Gy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zp(e,n,!1),qt(t,e,s);r=e.stateNode,ik.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&zp(e,n,!0),e.child}function qy(t){var e=t.stateNode;e.pendingContext?Up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Up(t,e.context,!1),nf(t,e.containerInfo)}function Zp(t,e,n,r,i){return Yr(),tf(i),e.flags|=256,Re(t,e,n,r),e.child}var To={dehydrated:null,treeContext:null,retryLane:0};function No(t){return{baseLanes:t,cachePool:null}}function Ky(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ta(i,r,0,null),t=Kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=No(n),e.memoizedState=To,t):Ac(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,xo(t,e,n,Error(S(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ta({mode:"visible",children:r.children},i,0,null),s=Kn(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Qr(e,t.child,null,n),e.child.memoizedState=No(n),e.memoizedState=To,s);if((e.mode&1)===0)e=xo(t,e,n,null);else if(a.data==="$!")e=xo(t,e,n,Error(S(419)));else if(r=(n&t.childLanes)!==0,Ge||r){if(r=fe,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,at(t,r,-1))}gf(),e=xo(t,e,n,Error(S(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=vk.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,Fe=Lt(a.nextSibling),qe=e,ne=!0,dt=null,n!==null&&(tt[nt++]=Mt,tt[nt++]=Dt,tt[nt++]=nr,Mt=n.id,Dt=n.overflow,nr=e),e=Ac(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=tm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=To,r):(n=em(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=tm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=To,r):(n=em(t,e,r.children,n),e.memoizedState=null,n)}function Ac(t,e){return e=Ta({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function em(t,e,n,r){var i=t.child;return t=i.sibling,n=In(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function tm(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=In(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=In(o,r):(r=Kn(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function xo(t,e,n,r){return r!==null&&tf(r),Qr(e,t.child,null,n),t=Ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sc(t.return,e,n)}function mu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n,e);else if(t.tag===19)nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sk(t,e,n){switch(e.tag){case 3:qy(e),Yr();break;case 5:wy(e);break;case 1:je(e.type)&&fa(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(ha,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Ky(t,e,n):(J(ie,ie.current&1),t=qt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Yy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Vy(t,e,n)}return qt(t,e,n)}function ok(t,e){switch(ef(e),e.tag){case 1:return je(e.type)&&da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),te(Be),te(be),sf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Xr(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var bo=!1,Wn=!1,ak=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ca(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Oc(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var rm=!1;function lk(t,e){if(t=ny(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:t,selectionRange:n},x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,b=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?C:ct(e.type,C),b);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;if(v.nodeType===1)v.textContent="";else if(v.nodeType===9){var _=v.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){Ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=rm,rm=!1,y}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Oc(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function im(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(nl,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Oc(e,n,s),r=r.next}while(r!==t)}break;case 1:if(Ca(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){Ue(e,n,o)}break;case 5:Ca(e,n);break;case 4:Jy(t,e,n)}}function Qy(t){var e=t.alternate;e!==null&&(t.alternate=null,Qy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Ss],delete e[Cc],delete e[VS],delete e[GS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xy(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function om(t){e:{for(var e=t.return;e!==null;){if(Xy(e))break e;e=e.return}throw Error(S(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(ps(e,""),n.flags&=-33),n=sm(t),Dc(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=sm(t),Mc(t,n,e);break;default:throw Error(S(161))}}function Mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Mc(t,e,n),t=t.sibling;t!==null;)Mc(t,e,n),t=t.sibling}function Dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function Jy(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(S(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(im(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?cu(a.parentNode,l):a.nodeType===1&&cu(a,l),ys(a)):cu(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(im(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function gu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:bs(3,e,e.return),cl(3,e),bs(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&kv(n,r),lc(t,i),e=lc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?bv(n,a):o==="dangerouslySetInnerHTML"?Nv(n,a):o==="children"?ps(n,a):Md(n,o,a,e)}switch(t){case"input":rc(n,r);break;case"textarea":Iv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Fr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Fr(n,!!r.multiple,r.defaultValue,!0):Fr(n,!!r.multiple,r.multiple?[]:"",!1))}n[Ss]=r}}return;case 6:if(e.stateNode===null)throw Error(S(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&ys(e.stateNode.containerInfo);return;case 12:return;case 13:am(e);return;case 19:am(e);return;case 17:return}throw Error(S(163))}function am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ak),e.forEach(function(r){var i=yk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function uk(t,e){for(x=e;x!==null;){e=x;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{Jy(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(k){Ue(i,e,k)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,x=n;else for(;x!==null;){e=x;try{var o=e.flags;if(o&32&&ps(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(hf=ce())}break;case 22:var c=e.memoizedState!==null,d=e.alternate,f=d!==null&&d.memoizedState!==null;n=e;e:{r=n,i=c;for(var g=null,y=r;;){if(y.tag===5){if(g===null){g=y;var C=y.stateNode;if(i){var b=C.style;typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"}else{var m=y.stateNode,p=y.memoizedProps.style,v=p!=null&&p.hasOwnProperty("display")?p.display:null;m.style.display=xv("display",v)}}}else if(y.tag===6)g===null&&(y.stateNode.nodeValue=i?"":y.memoizedProps);else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===r)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}if(c&&!f&&(n.mode&1)!==0){x=n;for(var _=n.child;_!==null;){for(n=x=_;x!==null;){r=x;var E=r.child;switch(r.tag){case 0:case 11:case 14:case 15:bs(4,r,r.return);break;case 1:Ca(r,r.return);var N=r.stateNode;if(typeof N.componentWillUnmount=="function"){var w=r.return;try{N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(k){Ue(r,w,k)}}break;case 5:Ca(r,r.return);break;case 22:if(r.memoizedState!==null){um(n);continue}}E!==null?(E.return=r,x=E):um(n)}_=_.sibling}}}switch(o&4102){case 2:om(e),e.flags&=-3;break;case 6:om(e),e.flags&=-3,gu(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,gu(e.alternate,e);break;case 4:gu(e.alternate,e)}}catch(k){Ue(e,e.return,k)}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}}function ck(t,e,n){x=t,Zy(t)}function Zy(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Wn;a=bo;var u=Wn;if(bo=o,(Wn=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?cm(i):l!==null?(l.return=o,x=l):cm(i);for(;s!==null;)x=s,Zy(s),s=s.sibling;x=i,bo=a,Wn=u}lm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,x=s):lm(t)}}function lm(t){for(;x!==null;){var e=x;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Wn||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ys(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Wn||e.flags&512&&Lc(e)}catch(f){Ue(e,e.return,f)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function um(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function cm(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{Lc(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{Lc(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var dk=Math.ceil,Ea=Qt.ReactCurrentDispatcher,df=Qt.ReactCurrentOwner,ot=Qt.ReactCurrentBatchConfig,V=0,fe=null,de=null,Ee=0,Ve=0,Or=Pn(0),he=0,Ps=null,Zr=0,dl=0,ff=0,ss=null,De=null,hf=0,ei=1/0,Sa=!1,Fc=null,vn=null,Po=!1,un=null,ka=0,os=0,Uc=null,Go=-1,qo=0;function Ae(){return(V&6)!==0?ce():Go!==-1?Go:Go=ce()}function yn(t){return(t.mode&1)===0?1:(V&2)!==0&&Ee!==0?Ee&-Ee:KS.transition!==null?(qo===0&&(t=go,go<<=1,(go&4194240)===0&&(go=64),qo=t),qo):(t=q,t!==0||(t=window.event,t=t===void 0?16:qv(t.type)),t)}function at(t,e,n){if(50<os)throw os=0,Uc=null,Error(S(185));var r=fl(t,e);return r===null?null:(Hs(r,e,n),((V&2)===0||r!==fe)&&(r===fe&&((V&2)===0&&(dl|=e),he===4&&rn(r,Ee)),We(r,n),e===1&&V===0&&(t.mode&1)===0&&(ei=ce()+500,al&&Rn())),r)}function fl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function We(t,e){var n=t.callbackNode;KE(t,e);var r=aa(t,t===fe?Ee:0);if(r===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?qS(dm.bind(null,t)):fy(dm.bind(null,t)),WS(function(){V===0&&Rn()}),n=null;else{switch(Bv(r)){case 1:n=$d;break;case 4:n=zv;break;case 16:n=oa;break;case 536870912:n=$v;break;default:n=oa}n=a_(n,e_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e_(t,e){if(Go=-1,qo=0,(V&6)!==0)throw Error(S(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=aa(t,t===fe?Ee:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ia(t,r);else{e=r;var i=V;V|=2;var s=n_();(fe!==t||Ee!==e)&&(ei=ce()+500,qn(t,e));do try{pk();break}catch(a){t_(t,a)}while(1);Qd(),Ea.current=s,V=i,de!==null?e=0:(fe=null,Ee=0,e=he)}if(e!==0){if(e===2&&(i=hc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=Ps,qn(t,0),rn(t,r),We(t,ce()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!fk(i)&&(e=Ia(t,r),e===2&&(s=hc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=Ps,qn(t,0),rn(t,r),We(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Dn(t,De);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=hf+500-ce(),10<e)){if(aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wc(Dn.bind(null,t,De),e);break}Dn(t,De);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dk(r/1960))-r,10<r){t.timeoutHandle=wc(Dn.bind(null,t,De),r);break}Dn(t,De);break;case 5:Dn(t,De);break;default:throw Error(S(329))}}}return We(t,ce()),t.callbackNode===n?e_.bind(null,t):null}function zc(t,e){var n=ss;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=Ia(t,e),t!==2&&(e=De,De=n,e!==null&&$c(e)),t}function $c(t){De===null?De=t:De.push.apply(De,t)}function fk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~ff,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function dm(t){if((V&6)!==0)throw Error(S(327));jr();var e=aa(t,0);if((e&1)===0)return We(t,ce()),null;var n=Ia(t,e);if(t.tag!==0&&n===2){var r=hc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=Ps,qn(t,0),rn(t,e),We(t,ce()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,De),We(t,ce()),null}function pf(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ei=ce()+500,al&&Rn())}}function rr(t){un!==null&&un.tag===0&&(V&6)===0&&jr();var e=V;V|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,t)return t()}finally{q=r,ot.transition=n,V=e,(V&6)===0&&Rn()}}function mf(){Ve=Or.current,te(Or)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jS(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Xr(),te(Be),te(be),sf();break;case 5:rf(r);break;case 4:Xr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Xd(r.type._context);break;case 22:case 23:mf()}n=n.return}if(fe=t,de=t=In(t.current,null),Ee=Ve=e,he=0,Ps=null,ff=dl=Zr=0,De=ss=null,Ct!==null){for(e=0;e<Ct.length;e++)if(n=Ct[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ct=null}return t}function t_(t,e){do{var n=de;try{if(Qd(),Ho.current=wa,_a){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_a=!1}if(Jr=0,ge=xe=le=null,is=!1,Ts=0,df.current=null,n===null||n.return===null){he=1,Ps=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Kp(o);if(g!==null){g.flags&=-257,Yp(g,o,a,s,e),g.mode&1&&qp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var C=new Set;C.add(l),e.updateQueue=C}else y.add(l);break e}else{if((e&1)===0){qp(s,u,e),gf();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var b=Kp(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Yp(b,o,a,s,e),tf(l);break e}}s=l,he!==4&&(he=2),ss===null?ss=[s]:ss.push(s),l=cf(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=zy(a,l,e);$p(a,m);break e;case 1:s=l;var p=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vn===null||!vn.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=$y(a,s,e);$p(a,_);break e}}a=a.return}while(a!==null)}i_(n)}catch(E){e=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function n_(){var t=Ea.current;return Ea.current=wa,t===null?wa:t}function gf(){(he===0||he===3||he===2)&&(he=4),fe===null||(Zr&268435455)===0&&(dl&268435455)===0||rn(fe,Ee)}function Ia(t,e){var n=V;V|=2;var r=n_();fe===t&&Ee===e||qn(t,e);do try{hk();break}catch(i){t_(t,i)}while(1);if(Qd(),V=n,Ea.current=r,de!==null)throw Error(S(261));return fe=null,Ee=0,he}function hk(){for(;de!==null;)r_(de)}function pk(){for(;de!==null&&!zE();)r_(de)}function r_(t){var e=o_(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?i_(t):de=e,df.current=null}function i_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=rk(n,e,Ve),n!==null){de=n;return}}else{if(n=ok(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,de=null;return}}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);he===0&&(he=5)}function Dn(t,e){var n=q,r=ot.transition;try{ot.transition=null,q=1,mk(t,e,n)}finally{ot.transition=r,q=n}return null}function mk(t,e,n){do jr();while(un!==null);if((V&6)!==0)throw Error(S(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(YE(t,s),t===fe&&(de=fe=null,Ee=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Po||(Po=!0,a_(oa,function(){return jr(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=ot.transition,ot.transition=null;var o=q;q=1;var a=V;V|=4,df.current=null,lk(t,r),uk(t,r),MS(yc),yc=null,t.current=r,ck(r),$E(),V=a,q=o,ot.transition=s}else t.current=r;if(Po&&(Po=!1,un=t,ka=i),s=t.pendingLanes,s===0&&(vn=null),WE(r.stateNode),We(t,ce()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(Sa)throw Sa=!1,t=Fc,Fc=null,t;return(ka&1)!==0&&t.tag!==0&&jr(),s=t.pendingLanes,(s&1)!==0?t===Uc?os++:(os=0,Uc=t):os=0,Rn(),null}function jr(){if(un!==null){var t=Bv(ka),e=ot.transition,n=q;try{if(ot.transition=null,q=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,ka=0,(V&6)!==0)throw Error(S(331));var i=V;for(V|=4,x=t.current;x!==null;){var s=x,o=s.child;if((x.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var f=c.sibling,g=c.return;if(Qy(c),c===u){x=null;break}if(f!==null){f.return=g,x=f;break}x=g}}}var y=s.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}x=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,x=v;else e:for(o=p;x!==null;){if(a=x,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(E){Ue(a,a.return,E)}if(a===o){x=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,x=_;break e}x=a.return}}if(V=i,Rn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(nl,t)}catch{}r=!0}return r}finally{q=n,ot.transition=e}}return!1}function fm(t,e,n){e=cf(n,e),e=zy(t,e,1),gn(t,e),e=Ae(),t=fl(t,1),t!==null&&(Hs(t,1,e),We(t,e))}function Ue(t,e,n){if(t.tag===3)fm(t,t,n);else for(;e!==null;){if(e.tag===3){fm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=cf(n,t),t=$y(e,t,1),gn(e,t),t=Ae(),e=fl(e,1),e!==null&&(Hs(e,1,t),We(e,t));break}}e=e.return}}function gk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>ce()-hf?qn(t,0):ff|=n),We(t,e)}function s_(t,e){e===0&&((t.mode&1)===0?e=1:(e=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var n=Ae();t=fl(t,e),t!==null&&(Hs(t,e,n),We(t,n))}function vk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s_(t,n)}function yk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),s_(t,n)}var o_;o_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)Ge=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ge=!1,sk(t,e,n);Ge=(t.flags&131072)!==0}else Ge=!1,ne&&(e.flags&1048576)!==0&&gy(e,va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Kr(e,be.current);Br(e,n),i=af(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,fa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jd(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,Ic(e,r,t,n),e=Rc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Zd(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wk(r),t=ct(r,t),i){case 0:e=Pc(null,e,r,t,n);break e;case 1:e=Jp(null,e,r,t,n);break e;case 11:e=Qp(null,e,r,t,n);break e;case 14:e=Xp(null,e,r,ct(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Jp(t,e,r,i,n);case 3:e:{if(qy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hy(t,e),ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(S(423)),e=Zp(t,e,r,n,i);break e}else if(r!==i){i=Error(S(424)),e=Zp(t,e,r,n,i);break e}else for(Fe=Lt(e.stateNode.containerInfo.firstChild),qe=e,ne=!0,dt=null,n=_y(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=qt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return wy(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_c(r,i)?o=null:s!==null&&_c(r,s)&&(e.flags|=32),Gy(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Ky(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Qp(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(ha,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Be.current){e=qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$t(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=lt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=ct(r,e.pendingProps),i=ct(r.type,i),Xp(t,e,r,i,n);case 15:return Hy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,je(r)?(t=!0,fa(e)):t=!1,Br(e,n),my(e,r,i),Ic(e,r,i,n),Rc(null,e,r,!0,t,n);case 19:return Yy(t,e,n);case 22:return Vy(t,e,n)}throw Error(S(156,e.tag))};function a_(t,e){return Uv(t,e)}function _k(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,r){return new _k(t,e,n,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wk(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===Ud)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return Kn(n.children,i,s,e);case Dd:o=8,i|=8;break;case Ju:return t=rt(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=rt(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=rt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case Cv:return Ta(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case wv:o=9;break e;case Fd:o=11;break e;case Ud:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kn(t,e,n,r){return t=rt(7,t,r,e),t.lanes=n,t}function Ta(t,e,n,r){return t=rt(22,t,r,e),t.elementType=Cv,t.lanes=n,t.stateNode={},t}function vu(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ck(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,a,l){return t=new Ck(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Jd(s),t}function Ek(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l_(t){if(!t)return kn;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(je(n))return dy(t,n,e)}return e}function u_(t,e,n,r,i,s,o,a,l){return t=yf(n,r,!0,t,i,s,o,a,l),t.context=l_(null),n=t.current,r=Ae(),i=yn(n),s=$t(r,i),s.callback=e!=null?e:null,gn(n,s),t.current.lanes=i,Hs(t,i,r),We(t,r),t}function hl(t,e,n,r){var i=e.current,s=Ae(),o=yn(i);return n=l_(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),gn(i,e),t=at(i,o,s),t!==null&&Wo(t,i,o),o}function Na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function Sk(){return null}var c_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}pl.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));hl(t,e,null,null)};pl.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){hl(null,t,null,null)}),e[Gt]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&Gv(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pm(){}function kk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Na(o);s.call(u)}}var o=u_(e,r,t,0,null,!1,!1,"",pm);return t._reactRootContainer=o,t[Gt]=o.current,Cs(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Na(l);a.call(u)}}var l=yf(t,0,!1,null,null,!1,!1,"",pm);return t._reactRootContainer=l,t[Gt]=l.current,Cs(t.nodeType===8?t.parentNode:t),rr(function(){hl(e,l,n,r)}),l}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Na(o);a.call(l)}}hl(e,o,t,i)}else o=kk(n,e,t,i,r);return Na(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vi(e.pendingLanes);n!==0&&(Bd(e,n|1),We(e,ce()),(V&6)===0&&(ei=ce()+500,Rn()))}break;case 13:var r=Ae();rr(function(){return at(t,1,r)}),_f(t,1)}};jd=function(t){if(t.tag===13){var e=Ae();at(t,134217728,e),_f(t,134217728)}};Wv=function(t){if(t.tag===13){var e=Ae(),n=yn(t);at(t,n,e),_f(t,n)}};Hv=function(){return q};Vv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ol(r);if(!i)throw Error(S(90));Sv(r),rc(r,i)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};Av=pf;Ov=rr;var Ik={usingClientEntryPoint:!1,Events:[Gs,xr,ol,Pv,Rv,pf]},Fi={findFiberByHostInstance:Bn,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},Tk={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||Sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{nl=Ro.inject(Tk),Et=Ro}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ik;Je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(S(200));return Ek(t,e,null,n)};Je.createRoot=function(t,e){if(!Cf(t))throw Error(S(299));var n=!1,r="",i=c_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,Cs(t.nodeType===8?t.parentNode:t),new wf(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return rr(t)};Je.hydrate=function(t,e,n){if(!ml(e))throw Error(S(200));return gl(null,t,e,!0,n)};Je.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=c_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Gt]=e.current,Cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pl(e)};Je.render=function(t,e,n){if(!ml(e))throw Error(S(200));return gl(null,t,e,!1,n)};Je.unmountComponentAtNode=function(t){if(!ml(t))throw Error(S(40));return t._reactRootContainer?(rr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};Je.unstable_batchedUpdates=pf;Je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ml(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return gl(t,e,n,!1,r)};Je.version="18.0.0-fc46dba67-20220329";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),pv.exports=Je;var mm=pv.exports;Qu.createRoot=mm.createRoot,Qu.hydrateRoot=mm.hydrateRoot;const Nk=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});function xk(t){return t&&Nk.format(t)}function bk(t){return e=>e.keyCode===13&&t&&t(e)}const f_="https://sds-butterfly-api.herokuapp.com";async function h_({route:t,options:e={}}){const n=`${f_}${t}`;return await(await fetch(n,e)).json()}function Pk({url:t,options:e={},deps:n=[]}){const[r,i]=R.exports.useState(null),[s,o]=R.exports.useState(null);return R.exports.useEffect(()=>{async function a(){try{const u=await(await fetch(t,e)).json();i(u)}catch(l){o(l)}}a()},n),[r,s]}function Rk(n){var r=n,{route:t}=r,e=Wl(r,["route"]);return Pk(Ie({url:`${f_}${t}`},e))}/**
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
 */const p_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+p_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const m_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ak=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ak(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},g_=function(t){const e=m_(t);return Ef.encodeByteArray(e,!0)},v_=function(t){return g_(t).replace(/\./g,"")},Bc=function(t){try{return Ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ok(t){return y_(void 0,t)}function y_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lk(n)||(t[n]=y_(t[n],e[n]));return t}function Lk(t){return t!=="__proto__"}/**
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
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Mk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dk(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w_(){return p_.NODE_ADMIN===!0}function Fk(){return typeof indexedDB=="object"}function Uk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const zk="FirebaseError";class gi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zk,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$k(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gi(i,a,r)}}function $k(t,e){return t.replace(Bk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bk=/\{\$([^}]+)}/g;/**
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
 */function Rs(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
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
 */const C_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Rs(Bc(s[0])||""),n=Rs(Bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jk=function(t){const e=C_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wk=function(t){const e=C_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gm(s)&&gm(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gm(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Hk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Vk(t,e){const n=new Gk(t,e);return n.subscribe.bind(n)}class Gk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_u),i.error===void 0&&(i.error=_u),i.complete===void 0&&(i.complete=_u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function Qs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Kk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Yi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class vm{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new E_(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new S_(this._db.createObjectStore(e,n))}close(){this._db.close()}}class E_{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new S_(this._transaction.objectStore(e))}}class S_{constructor(e){this._store=e}index(e){return new ym(this._store.index(e))}createIndex(e,n,r){return new ym(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Yi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Yi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Yi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Yi(e,"Error clearing IndexedDB object store")}}class ym{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Yi(n,"Error reading from IndexedDB")}}function Yk(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new vm(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new vm(s.result),o.oldVersion,o.newVersion,new E_(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ks;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jk(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(t){return t===Fn?void 0:t}function Jk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const eI={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},tI=Y.INFO,nI={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kf{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}/**
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
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",_m="0.7.21";/**
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
 */const If=new kf("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",lI="@firebase/analytics",uI="@firebase/app-check-compat",cI="@firebase/app-check",dI="@firebase/auth",fI="@firebase/auth-compat",hI="@firebase/database",pI="@firebase/database-compat",mI="@firebase/functions",gI="@firebase/functions-compat",vI="@firebase/installations",yI="@firebase/installations-compat",_I="@firebase/messaging",wI="@firebase/messaging-compat",CI="@firebase/performance",EI="@firebase/performance-compat",SI="@firebase/remote-config",kI="@firebase/remote-config-compat",II="@firebase/storage",TI="@firebase/storage-compat",NI="@firebase/firestore",xI="@firebase/firestore-compat",bI="firebase",PI="9.6.11";/**
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
 */const k_="[DEFAULT]",RI={[Wc]:"fire-core",[oI]:"fire-core-compat",[lI]:"fire-analytics",[aI]:"fire-analytics-compat",[cI]:"fire-app-check",[uI]:"fire-app-check-compat",[dI]:"fire-auth",[fI]:"fire-auth-compat",[hI]:"fire-rtdb",[pI]:"fire-rtdb-compat",[mI]:"fire-fn",[gI]:"fire-fn-compat",[vI]:"fire-iid",[yI]:"fire-iid-compat",[_I]:"fire-fcm",[wI]:"fire-fcm-compat",[CI]:"fire-perf",[EI]:"fire-perf-compat",[SI]:"fire-rc",[kI]:"fire-rc-compat",[II]:"fire-gcs",[TI]:"fire-gcs-compat",[NI]:"fire-fst",[xI]:"fire-fst-compat","fire-js":"fire-js",[bI]:"fire-js-all"};/**
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
 */const Pa=new Map,Hc=new Map;function AI(t,e){try{t.container.addComponent(e)}catch(n){If.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Hc.has(e))return If.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Pa.values())AI(n,t);return!0}function Tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const OI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},sr=new Ys("app","Firebase",OI);/**
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
 */class LI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=PI;function MI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:k_,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw sr.create("bad-app-name",{appName:String(r)});const i=Pa.get(r);if(i){if(ba(t,i.options)&&ba(n,i.config))return i;throw sr.create("duplicate-app",{appName:r})}const s=new Zk(r);for(const a of Hc.values())s.addComponent(a);const o=new LI(t,n,s);return Pa.set(r,o),o}function I_(t=k_){const e=Pa.get(t);if(!e)throw sr.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=RI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),If.warn(a.join(" "));return}ni(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DI="firebase-heartbeat-database",FI=1,As="firebase-heartbeat-store";let wu=null;function T_(){return wu||(wu=Yk(DI,FI,(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}).catch(t=>{throw sr.create("storage-open",{originalErrorMessage:t.message})})),wu}async function UI(t){try{return(await T_()).transaction(As).objectStore(As).get(N_(t))}catch(e){throw sr.create("storage-get",{originalErrorMessage:e.message})}}async function wm(t,e){try{const r=(await T_()).transaction(As,"readwrite");return await r.objectStore(As).put(e,N_(t)),r.complete}catch(n){throw sr.create("storage-set",{originalErrorMessage:n.message})}}function N_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zI=1024,$I=30*24*60*60*1e3;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$I}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cm(),{heartbeatsToSend:n,unsentEntries:r}=jI(this._heartbeatsCache.heartbeats),i=v_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cm(){return new Date().toISOString().substring(0,10)}function jI(t,e=zI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Em(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Em(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fk()?Uk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await UI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Em(t){return v_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function HI(t){ni(new ir("platform-logger",e=>new iI(e),"PRIVATE")),ni(new ir("heartbeat",e=>new BI(e),"PRIVATE")),_n(Wc,_m,t),_n(Wc,_m,"esm2017"),_n("fire-js","")}HI("");var VI="firebase",GI="9.6.11";/**
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
 */_n(VI,GI,"app");const qI="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",KI="sds-butterfly.firebaseapp.com",YI="sds-butterfly",QI="sds-butterfly.appspot.com",XI="265457992927",JI="1:265457992927:web:f8b8781a13dd1e4b3fd56a";function ZI(){return MI({apiKey:qI,authDomain:KI,projectId:YI,storageBucket:QI,messagingSenderId:XI,appId:JI})}const e2=R.exports.createContext();function t2(t,e,n=null){const r=n||`${e}s`;return t===1?`${t} ${e}`:`${t} ${r}`}var yl={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n2=R.exports,r2=Symbol.for("react.element"),i2=Symbol.for("react.fragment"),s2=Object.prototype.hasOwnProperty,o2=n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a2={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)s2.call(e,r)&&!a2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:r2,type:t,key:s,ref:o,props:i,_owner:o2.current}}_l.Fragment=i2;_l.jsx=x_;_l.jsxs=x_;yl.exports=_l;const h=yl.exports.jsx,T=yl.exports.jsxs,mr=yl.exports.Fragment;function l2(){return h("div",{className:"Layout",children:h(Iw,{})})}function u2(){return h("div",{className:"Layout Page NotFoundPage FullHeight VerticalCenter",children:T("div",{children:[h("h1",{className:"BigTitle",children:"Page Not Found"}),h("p",{children:"Sorry about that!"}),h(Ke,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}var b_={exports:{}},c2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d2=c2,f2=d2;function P_(){}function R_(){}R_.resetWarningCache=P_;var h2=function(){function t(r,i,s,o,a,l){if(l!==f2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:R_,resetWarningCache:P_};return n.PropTypes=n,n};b_.exports=h2();var W=b_.exports;function Sm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sm(Object(n),!0).forEach(function(r){Lr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ra(t){return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(t)}function Lr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function A_(t,e){if(t==null)return{};var n=p2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Vc(t){return m2(t)||g2(t)||v2(t)||y2()}function m2(t){if(Array.isArray(t))return Gc(t)}function g2(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function v2(t,e){if(!!t){if(typeof t=="string")return Gc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(t,e)}}function Gc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _2(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,C=t.listItem,b=t.flip,m=t.size,p=t.rotation,v=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":C,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Lr(e,"fa-".concat(m),typeof m!="undefined"&&m!==null),Lr(e,"fa-rotate-".concat(p),typeof p!="undefined"&&p!==null&&p!==0),Lr(e,"fa-pull-".concat(v),typeof v!="undefined"&&v!==null),Lr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function w2(t){return t=t-0,t===t}function O_(t){return w2(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var C2=["style"];function E2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=O_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[E2(i)]=s:e[i]=s,e},{})}function L_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return L_(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=S2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[O_(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=A_(n,C2);return i.attrs.style=cn(cn({},i.attrs.style),o),t.apply(void 0,[e.tag,cn(cn({},i.attrs),a)].concat(Vc(r)))}var M_=!1;try{M_=!0}catch{}function k2(){if(!M_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function km(t){if(t&&Ra(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yu.icon)return Yu.icon(t);if(t===null)return null;if(t&&Ra(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Cu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lr({},t,e):{}}var I2=["forwardedRef"];function Qe(t){var e=t.forwardedRef,n=A_(t,I2),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=km(r),d=Cu("classes",[].concat(Vc(_2(n)),Vc(o.split(" ")))),f=Cu("transform",typeof n.transform=="string"?Yu.transform(n.transform):n.transform),g=Cu("mask",km(i)),y=pE(c,cn(cn(cn(cn({},d),f),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!y)return k2("Could not find icon",c),null;var C=y.abstract,b={ref:e};return Object.keys(n).forEach(function(m){Qe.defaultProps.hasOwnProperty(m)||(b[m]=n[m])}),T2(C[0],b)}Qe.displayName="FontAwesomeIcon";Qe.propTypes={beat:W.bool,border:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf(["horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};Qe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var T2=L_.bind(null,Ag.createElement);const yi=a=>{var l=a,{label:t,primary:e=!1,iconBefore:n=null,iconAfter:r=null,role:i="button",tabIndex:s=0}=l,o=Wl(l,["label","primary","iconBefore","iconAfter","role","tabIndex"]);const c=["Button",e?"Primary":""].join(" "),d=n&&h(Qe,{icon:n,className:"IconBefore"}),f=r&&h(Qe,{icon:r,className:"IconAfter"}),g=yt(Ie({},o),{className:c,role:i,tabIndex:s,onKeyDown:(o==null?void 0:o.onKeyDown)||bk(o==null?void 0:o.onClick)});return T("span",yt(Ie({},g),{children:[d,h("span",{children:t}),f]}))};function wl({hasError:t,children:e}){return t&&h("div",{className:"Card Full Error",children:e})}function D_({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return n&&h("div",{className:"UserDisc",children:h("img",{src:n,alt:r,className:"Image"})})}function qc({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return T("div",{className:"UserTile",children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:r,className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:e})})]})}var N2="/butterfly/assets/logo-butterfly-rainbow.png";function Nf({size:t,align:e}){return h("div",{className:`Logo ${t} ${e}`,children:h("img",{alt:"Butterfly Logo",src:N2})})}function x2(){return h("div",{className:"Layout Page HomePage FullHeight VerticalCenter",children:T("div",{children:[h(Nf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(Ke,{to:"/login",children:h(yi,{label:"Login",primary:!0})})]})})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var xf={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
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
***************************************************************************** */function bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function F_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b2=F_,U_=new Ys("auth","Firebase",F_());/**
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
 */const Im=new kf("@firebase/auth");function Yo(t,...e){Im.logLevel<=Y.ERROR&&Im.error(`Auth (${Xs}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw Pf(t,...e)}function kt(t,...e){return Pf(t,...e)}function z_(t,e,n){const r=Object.assign(Object.assign({},b2()),{[e]:n});return new Ys("auth","Firebase",r).create(e,{appName:t.name})}function P2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),z_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function F(t,e,...n){if(!t)throw Pf(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function Kt(t,e){t||Ft(e)}/**
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
 */const Tm=new Map;function Ut(t){Kt(t instanceof Function,"Expected a class definition");let e=Tm.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tm.set(t,e),e)}/**
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
 */function R2(t,e){const n=Tf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e!=null?e:{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function A2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function O2(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function L2(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O2()||Mk()||"connection"in navigator)?navigator.onLine:!0}function M2(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Sf()||__()}get(){return L2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rf(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const F2=new Js(3e4,6e4);function Cl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,r,i={}){return B_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$_.fetch()(j_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function B_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D2),e);try{const i=new U2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eu(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw z_(t,c,u);ut(t,c)}}catch(i){if(i instanceof gi)throw i;ut(t,"network-request-failed")}}async function El(t,e,n,r,i={}){const s=await _i(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function j_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`}class U2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),F2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function z2(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function $2(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function as(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function B2(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Af(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:as(Su(i.auth_time)),issuedAtTime:as(Su(i.iat)),expirationTime:as(Su(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Su(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bc(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i),null}}function j2(t){const e=Af(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gi&&W2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class H2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class W_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ri(t,$2(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?q2(s.providerUserInfo):[],a=G2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function V2(t){const e=He(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function q2(t){return t.map(e=>{var{providerId:n}=e,r=bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function K2(t,e){const n=await B_(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=j_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):j2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await K2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Zt(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new W_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return B2(this,e)}reload(){return V2(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,z2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:N,stsTokenManager:w}=n;F(v&&w,e,"internal-error");const k=Os.fromJSON(this.name,w);F(typeof v=="string",e,"internal-error"),Zt(d,e.name),Zt(f,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof E=="boolean",e,"internal-error"),Zt(g,e.name),Zt(y,e.name),Zt(C,e.name),Zt(b,e.name),Zt(m,e.name),Zt(p,e.name);const M=new Yn({uid:v,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:k,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(M.providerData=N.map(D=>Object.assign({},D))),b&&(M._redirectEventId=b),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Aa(s),s}}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const xm=H_;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(Ut(xm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(xm);const o=Qo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Yn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wr(s,e,r))}}/**
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
 */function bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(Q_(e))return"Webos";if(Of(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=Pe()){return/firefox\//i.test(t)}function Of(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=Pe()){return/crios\//i.test(t)}function q_(t=Pe()){return/iemobile/i.test(t)}function K_(t=Pe()){return/android/i.test(t)}function Y_(t=Pe()){return/blackberry/i.test(t)}function Q_(t=Pe()){return/webos/i.test(t)}function Sl(t=Pe()){return/iphone|ipad|ipod/i.test(t)}function Y2(t=Pe()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q2(){return Dk()&&document.documentMode===10}function X_(t=Pe()){return Sl(t)||K_(t)||Q_(t)||Y_(t)||/windows phone/i.test(t)||q_(t)}function X2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=bm(Pe());break;case"Worker":n=`${bm(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class J2{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function kl(t){return He(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vk(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Lf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function Z2(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
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
 */async function eT(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Cl(t,e))}/**
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
 */async function tT(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Cl(t,e))}async function nT(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Cl(t,e))}/**
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
 */class Ls extends Lf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ls(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ls(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tT(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Z2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nT(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hr(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",Cl(t,e))}/**
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
 */const rT="http://localhost";class or extends Lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:rT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function iT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sT(t){const e=qi(Ki(t)).link,n=e?qi(Ki(e)).deep_link_id:null,r=qi(Ki(t)).deep_link_id;return(r?qi(Ki(r)).link:null)||r||n||e||t}class Mf{constructor(e){var n,r,i,s,o,a;const l=qi(Ki(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=iT((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sT(e);try{return new Mf(n)}catch{return null}}}/**
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
 */class wi{constructor(){this.providerId=wi.PROVIDER_ID}static credential(e,n){return Ls._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mf.parseLink(n);return F(r,"argument-error"),Ls._fromEmailAndCode(e,r.code,r.tenantId)}}wi.PROVIDER_ID="password";wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zs extends Df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends Zs{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class on extends Zs{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends Zs{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=Rm(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rm(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oa extends gi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Oa(e,n,r,i)}}function Z_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(t,s,e,r):s})}async function oT(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function aT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ri(t,Z_(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Af(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
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
 */async function e0(t,e,n=!1){const r="signIn",i=await Z_(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lT(t,e){return e0(kl(t),e)}function uT(t,e,n){return lT(He(t),wi.credential(e,n))}/**
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
 */async function cT(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ri(r,cT(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fT(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function hT(t){return He(t).signOut()}const La="__sak";/**
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
 */class t0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pT(){const t=Pe();return Of(t)||Sl(t)}const mT=1e3,gT=10;class n0 extends t0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pT()&&X2(),this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Q2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n0.type="LOCAL";const vT=n0;/**
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
 */class r0 extends t0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r0.type="SESSION";const i0=r0;/**
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
 */function yT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
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
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ff("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function wT(t){It().location.href=t}/**
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
 */function s0(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function CT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ET(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ST(){return s0()?self:null}/**
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
 */const o0="firebaseLocalStorageDb",kT=1,Ma="firebaseLocalStorage",a0="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function IT(){const t=indexedDB.deleteDatabase(o0);return new eo(t).toPromise()}function Yc(){const t=indexedDB.open(o0,kT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ma,{keyPath:a0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ma)?e(r):(r.close(),await IT(),e(await Yc()))})})}async function Am(t,e,n){const r=Tl(t,!0).put({[a0]:e,value:n});return new eo(r).toPromise()}async function TT(t,e){const n=Tl(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function Om(t,e){const n=Tl(t,!0).delete(e);return new eo(n).toPromise()}const NT=800,xT=3;class l0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(ST()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CT(),!this.activeServiceWorker)return;this.sender=new _T(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ET()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await Am(e,La,"1"),await Om(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Om(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l0.type="LOCAL";const bT=l0;/**
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
 */function PT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PT().appendChild(r)})}function AT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Js(3e4,6e4);/**
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
 */function u0(t,e){return e?Ut(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uf extends Lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OT(t){return e0(t.auth,new Uf(t),t.bypassAuthState)}function LT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),aT(n,new Uf(t),t.bypassAuthState)}async function MT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),oT(n,new Uf(t),t.bypassAuthState)}/**
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
 */class c0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OT;case"linkViaPopup":case"linkViaRedirect":return MT;case"reauthViaPopup":case"reauthViaRedirect":return LT;default:ut(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DT=new Js(2e3,1e4);async function FT(t,e,n){const r=kl(t);P2(t,e,Df);const i=u0(r,n);return new Hn(r,"signInViaPopup",e,i).executeNotNull()}class Hn extends c0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DT.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const UT="pendingRedirect",ku=new Map;class zT extends c0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await $T(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $T(t,e){const n=jT(e),r=BT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BT(t){return Ut(t._redirectPersistence)}function jT(t){return Qo(UT,t.config.apiKey,t.name)}async function WT(t,e,n=!1){const r=kl(t),i=u0(r,e),o=await new zT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HT=10*60*1e3;class VT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lm(e))}saveEventToCache(e){this.cachedEventUids.add(Lm(e)),this.lastProcessedEventTime=Date.now()}}function Lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d0(t);default:return!1}}/**
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
 */async function qT(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
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
 */const KT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YT=/^https?/;async function QT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qT(t);for(const n of e)try{if(XT(n))return}catch{}ut(t,"unauthorized-domain")}function XT(t){const e=Kc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YT.test(n))return!1;if(KT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JT=new Js(3e4,6e4);function Mm(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZT(t){return new Promise((e,n)=>{var r,i,s;function o(){Mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mm(),n(kt(t,"network-request-failed"))},timeout:JT.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const a=AT("iframefcb");return It()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},RT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function eN(t){return Xo=Xo||ZT(t),Xo}/**
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
 */const tN=new Js(5e3,15e3),nN="__/auth/iframe",rN="emulator/auth/iframe",iN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oN(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,rN):`https://${t.config.authDomain}/${nN}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},i=sN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vi(r).slice(1)}`}async function aN(t){const e=await eN(t),n=It().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:oN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=It().setTimeout(()=>{s(o)},tN.get());function l(){It().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const lN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uN=500,cN=600,dN="_blank",fN="http://localhost";class Dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hN(t,e,n,r=uN,i=cN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(a=G_(u)?dN:n),V_(u)&&(e=e||fN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(Y2(u)&&a!=="_self")return pN(e||"",a),new Dm(null);const d=window.open(e||"",a,c);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Dm(d)}function pN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mN="__/auth/handler",gN="emulator/auth/handler";function Fm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(e instanceof Df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Zs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vN(t)}?${vi(a).slice(1)}`}function vN({config:t}){return t.emulator?Rf(t,gN):`https://${t.authDomain}/${mN}`}/**
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
 */const Iu="webStorageSupport";class yN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i0,this._completeRedirectFn=WT}async _openPopup(e,n,r,i){var s;Kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Fm(e,n,r,Kc(),i);return hN(e,o,Ff())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wT(Fm(e,n,r,Kc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aN(e),r=new VT(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Iu,{type:Iu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Iu];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||Of()||Sl()}}const _N=yN;var Um="@firebase/auth",zm="0.19.12";/**
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
 */class wN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EN(t){ni(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},c=new J2(a,l,u);return A2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new ir("auth-internal",e=>{const n=kl(e.getProvider("auth").getImmediate());return(r=>new wN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Um,zm,CN(t)),_n(Um,zm,"esm2017")}/**
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
 */function Nl(t=I_()){const e=Tf(t,"auth");return e.isInitialized()?e.getImmediate():R2(t,{popupRedirectResolver:_N,persistence:[bT,vT,i0]})}EN("Browser");async function f0(){try{const t=Nl(),e=new Ot,{user:n}=await FT(t,e);return{user:n,signInError:null}}catch(t){return{user:null,signInError:t}}}async function h0(){try{const t=Nl();return await hT(t),{isSuccess:!0,signOutError:null}}catch(t){return{isSuccess:!1,signOutError:t}}}function Ci(){const[t,e]=R.exports.useState(null),n=Nl();return R.exports.useEffect(()=>fT(n,i=>{e(s=>(s==null?void 0:s.uid)!==(i==null?void 0:i.uid)?i:s)}),[n]),t}function p0({authUser:t,doLogOut:e}){return t&&T("div",{children:[h("hr",{}),T("p",{children:["Currently logged in as ",t.displayName,"."]}),h("p",{children:h(Ke,{to:"/chats",children:"Go to Chats"})}),h("p",{children:T("span",{className:"Button",role:"button",tabIndex:0,onClick:e,onKeyDown:e,children:[h(Qe,{icon:kE,className:"IconBefore"}),h("span",{children:"Log Out"})]})})]})}const $m="@firebase/database",Bm="0.12.8";/**
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
 */let m0="";function SN(t){m0=t}/**
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
 */class kN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class IN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const g0=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kN(e)}}catch{}return new IN},Vn=g0("localStorage"),Qc=g0("sessionStorage");/**
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
 */const Vr=new kf("@firebase/database"),TN=function(){let t=1;return function(){return t++}}(),v0=function(t){const e=Kk(t),n=new Hk;n.update(e);const r=n.digest();return Ef.encodeByteArray(r)},to=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=to.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Qn=null,jm=!0;const NN=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vr.logLevel=Y.VERBOSE,Qn=Vr.log.bind(Vr),e&&Qc.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,Qc.remove("logging_enabled"))},Ce=function(...t){if(jm===!0&&(jm=!1,Qn===null&&Qc.get("logging_enabled")===!0&&NN(!0)),Qn){const e=to.apply(null,t);Qn(e)}},no=function(t){return function(...e){Ce(t,...e)}},Xc=function(...t){const e="FIREBASE INTERNAL ERROR: "+to(...t);Vr.error(e)},ar=function(...t){const e=`FIREBASE FATAL ERROR: ${to(...t)}`;throw Vr.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+to(...t);Vr.warn(e)},xN=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lr="[MIN_NAME]",Tn="[MAX_NAME]",gr=function(t,e){if(t===e)return 0;if(t===lr||e===Tn)return-1;if(e===lr||t===Tn)return 1;{const n=Wm(t),r=Wm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PN=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},$f=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=$f(t[e[r]]);return n+="}",n},y0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _0=function(t){I(!zf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},RN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},AN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ON(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const LN=new RegExp("^-?(0*)\\d{1,10}$"),MN=-2147483648,DN=2147483647,Wm=function(t){if(LN.test(t)){const e=Number(t);if(e>=MN&&e<=DN)return e}return null},Ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},FN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ls=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class UN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jc.OWNER="owner";/**
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
 */const Bf="5",w0="v",C0="s",E0="r",S0="f",k0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,I0="ls",$N="p",Zc="ac",T0="websocket",N0="long_polling";/**
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
 */class BN{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function x0(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===T0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===N0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jN(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class WN{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ok(this.counters_)}}/**
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
 */const Tu={},Nu={};function jf(t){const e=t.toString();return Tu[e]||(Tu[e]=new WN),Tu[e]}function HN(t,e){const n=t.toString();return Nu[n]||(Nu[n]=e()),Nu[n]}/**
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
 */class VN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ei(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hm="start",GN="close",qN="pLPCommand",KN="pRTLPCB",b0="id",P0="pw",R0="ser",YN="cb",QN="seg",XN="ts",JN="d",ZN="dframe",A0=1870,O0=30,ex=A0-O0,tx=25e3,nx=3e4;class Mr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=jf(n),this.urlFn=l=>(this.appCheckToken&&(l[Zc]=this.appCheckToken),x0(n,N0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nx)),bN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hm)this.id=a,this.password=l;else if(o===GN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Hm]="t",r[R0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[w0]=Bf,this.transportSessionId&&(r[C0]=this.transportSessionId),this.lastSessionId&&(r[I0]=this.lastSessionId),this.applicationId&&(r[$N]=this.applicationId),this.appCheckToken&&(r[Zc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&k0.test(location.hostname)&&(r[E0]=S0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!RN()&&!AN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g_(n),i=y0(r,ex);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZN]="t",r[b0]=e,r[P0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TN(),window[qN+this.uniqueCallbackIdentifier]=e,window[KN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wf.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[b0]=this.myID,e[P0]=this.myPW,e[R0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+O0+r.length<=A0;){const o=this.pendingSegs.shift();r=r+"&"+QN+i+"="+o.seg+"&"+XN+i+"="+o.ts+"&"+JN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(tx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const rx=16384,ix=45e3;let Da=null;typeof MozWebSocket!="undefined"?Da=MozWebSocket:typeof WebSocket!="undefined"&&(Da=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=jf(n),this.connURL=ft.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[w0]=Bf,typeof location!="undefined"&&location.hostname&&k0.test(location.hostname)&&(s[E0]=S0),n&&(s[C0]=n),r&&(s[I0]=r),i&&(s[Zc]=i),x0(e,T0,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{if(!w_()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Da(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Da!==null&&!ft.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=y0(n,rx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ix))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
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
 */class Hf{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Mr,ft]}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of Hf.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const sx=6e4,ox=5e3,ax=10*1024,lx=100*1024,xu="t",Vm="d",ux="s",Gm="r",cx="e",qm="o",Km="a",Ym="n",Qm="p",dx="h";class fx{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new Hf(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ax?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xu in e){const n=e[xu];n===Km?this.upgradeIfSecondaryHealthy_():n===Gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Km,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(xu,e);if(Vm in e){const r=e[Vm];if(n===dx)this.onHandshake_(r);else if(n===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ux?this.onConnectionShutdown_(r):n===Gm?this.onReset_(r):n===cx?Xc("Server Error: "+r):n===qm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bf!==r&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ox))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class L0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class M0{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Fa extends M0{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Sf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fa}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xm=32,Jm=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new K("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Vf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function D0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return ze(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function px(t,e){const n=Ms(t,0),r=Ms(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=gr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Gf(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mx{constructor(e,n){this.errorPrefix_=n,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=vl(this.parts_[r]);F0(this)}}function gx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vl(e),F0(t)}function vx(t){const e=t.parts_.pop();t.byteLength_-=vl(e),t.parts_.length>0&&(t.byteLength_-=1)}function F0(t){if(t.byteLength_>Jm)throw new Error(t.errorPrefix_+"has a key path longer than "+Jm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xm+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qf extends M0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qf}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zi=1e3,yx=60*5*1e3,_x=3*1e3,Zm=30*1e3,wx=1.3,Cx=3e4,Ex="server_kill",eg=3;class Bt extends L0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=yx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!w_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ks,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},_x),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xc("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cx&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new fx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ex)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Oe(d),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jc(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$f(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=eg&&(this.reconnectDelay_=Zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+m0.replace(/\./g,"-")]=1,Sf()?e["framework.cordova"]=1:__()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fa.getInstance().currentlyOnline();return jc(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(lr,e),i=new j(lr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Ao;class U0 extends xl{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return gr(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Tn,Ao)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ao)}toString(){return".key"}}const Xn=new U0;/**
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
 */class Oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ve.RED,this.left=i!=null?i:$e.EMPTY_NODE,this.right=s!=null?s:$e.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Sx{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new Sx;/**
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
 */function kx(t,e){return gr(t.name,e.name)}function Kf(t,e){return gr(t,e)}/**
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
 */let ed;function Ix(t){ed=t}const z0=function(t){return typeof t=="number"?"number:"+_0(t):"string:"+t},$0=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else I(t===ed||t.isEmpty(),"priority of unexpected type.");I(t===ed||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let tg;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$0(this.priorityNode_)}static set __childrenNodeConstructor(e){tg=e}static get __childrenNodeConstructor(){return tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:$(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+z0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_0(this.value_):e+=this.value_,this.lazyHash_=v0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let B0,j0;function Tx(t){B0=t}function Nx(t){j0=t}class xx extends xl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Tn,new me("[PRIORITY-POST]",j0))}makePost(e,n){const r=B0(e);return new j(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new xx;/**
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
 */const bx=Math.log(2);class Px{constructor(e){const n=s=>parseInt(Math.log(s)/bx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ua=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ve(f,d.node,ve.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),C=i(g+1,u);return d=t[g],f=n?n(d):d,new ve(f,d.node,ve.BLACK,y,C)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,C){const b=d-y,m=d;d-=y;const p=i(b+1,m),v=t[b],_=n?n(v):v;g(new ve(_,v.node,C,null,p))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(y+1));C?f(b,ve.BLACK):(f(b,ve.BLACK),f(b,ve.RED))}return c},o=new Px(t.length),a=s(o);return new $e(r||e,a)};/**
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
 */let bu;const wr={};class zt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(wr&&se,"ChildrenNode.ts has not been loaded"),bu=bu||new zt({".priority":wr},{".priority":se}),bu}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ua(r,e.getCompare()):a=wr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new zt(c,u)}addToIndexes(e,n){const r=xa(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===wr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ua(a,o.getCompare())}else return wr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new zt(r,this.indexSet_)}removeFromIndexes(e,n){const r=xa(this.indexes_,i=>{if(i===wr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new zt(r,this.indexSet_)}}/**
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
 */let $i;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $i||($i=new L(new $e(Kf),null,zt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$i:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{I($(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+z0(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":v0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rx extends L{constructor(){super(new $e(Kf),L.EMPTY_NODE,zt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const ro=new Rx;Object.defineProperties(j,{MIN:{value:new j(lr,L.EMPTY_NODE)},MAX:{value:new j(Tn,ro)}});U0.__EMPTY_NODE=L.EMPTY_NODE;me.__childrenNodeConstructor=L;Ix(ro);Nx(ro);/**
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
 */const Ax=!0;function ye(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ye(e))}if(!(t instanceof Array)&&Ax){const n=[];let r=!1;if(ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=Ua(n,kx,o=>o.name,Kf);if(r){const o=Ua(n,se.getCompare());return new L(s,ye(e),new zt({".priority":o},{".priority":se}))}else return new L(s,ye(e),zt.Default)}else{let n=L.EMPTY_NODE;return ke(t,(r,i)=>{if(bt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}Tx(ye);/**
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
 */class Yf extends xl{constructor(e){super(),this.indexPath_=e,I(!B(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,ro);return new j(Tn,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
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
 */class Ox extends xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ye(e);return new j(n,r)}toString(){return".value"}}const W0=new Ox;/**
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
 */const ng="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Lx=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ng.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ng.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function H0(t){return{type:"value",snapshotNode:t}}function si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Qf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ds(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(si(n,r)):o.trackChildChange(Fs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ds(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fs(i,s,o))}else r.trackChildChange(si(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Us{constructor(e){this.indexedFilter_=new Qf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Dx{constructor(e){this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,g)=>d(g,f)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Fs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ds(n,d));const C=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(si(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ds(u.name,u.node)),s.trackChildChange(si(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
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
 */class Xf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Xf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fx(t){return t.loadsAllData()?new Qf(t.getIndex()):t.hasLimit()?new Dx(t):new Us(t)}function Ux(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function zx(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function $x(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Bx(t,e){const n=t.copy();return n.index_=e,n}function rg(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===W0?n="$value":t.index_===Xn?n="$key":(I(t.index_ instanceof Yf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_&&(e.startAt=_e(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+_e(t.indexStartName_))),t.endSet_&&(e.endAt=_e(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+_e(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ig(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class za extends L0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=no("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=za.getListenId_(e,r),a={};this.listens_[o]=a;const l=rg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ti(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=za.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rg(e._queryParams),r=e._path.toString(),i=new Ks;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rs(a.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class jx{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $a(){return{value:null,children:new Map}}function V0(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,$a());const i=t.children.get(r);e=X(e),V0(i,e,n)}}function td(t,e,n){t.value!==null?n(e,t.value):Wx(t,(r,i)=>{const s=new K(e.toString()+"/"+r);td(i,s,n)})}function Wx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Hx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const sg=10*1e3,Vx=30*1e3,Gx=5*60*1e3;class qx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Hx(e);const r=sg+(Vx-sg)*Math.random();ls(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gx))}}/**
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
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Jf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ba{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=Jf()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Ba(G(),n,this.revert)}}else return I($(this.path)===e,"operationForChild called for unrelated child."),new Ba(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new zs(this.source,G()):new zs(this.source,X(this.path))}}/**
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
 */class ur{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return B(this.path)?new ur(this.source,G(),this.snap.getImmediateChild(e)):new ur(this.source,X(this.path),this.snap)}}/**
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
 */class oi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new ur(this.source,G(),n.value):new oi(this.source,G(),n)}else return I($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oi(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class cr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Kx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Mx(o.childName,o.snapshotNode))}),Bi(t,i,"child_removed",e,r,n),Bi(t,i,"child_added",e,r,n),Bi(t,i,"child_moved",s,r,n),Bi(t,i,"child_changed",e,r,n),Bi(t,i,"value",e,r,n),i}function Bi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Xx(t,a,l)),o.forEach(a=>{const l=Qx(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Qx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xx(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function bl(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,r){return bl(new cr(e,n,r),t.serverCache)}function G0(t,e,n,r){return bl(t.eventCache,new cr(e,n,r))}function nd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pu;const Jx=()=>(Pu||(Pu=new $e(PN)),Pu);class Q{constructor(e,n=Jx()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return ke(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(B(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ae(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Q(null)}}set(e,n){if(B(e))return new Q(n,this.children);{const r=$(e),s=(this.children.get(r)||new Q(null)).set(X(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(B(e))return n;{const r=$(e),s=(this.children.get(r)||new Q(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new Q(null))}}function cs(t,e,n){if(B(e))return new gt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function rd(t,e,n){let r=t;return ke(n,(i,s)=>{r=cs(r,ae(e,i),s)}),r}function og(t,e){if(B(e))return gt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new gt(n)}}function id(t,e){return vr(t,e)!=null}function vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function ag(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function wn(t,e){if(B(e))return t;{const n=vr(t,e);return n!=null?new gt(new Q(n)):new gt(t.writeTree_.subtree(e))}}function sd(t){return t.writeTree_.isEmpty()}function ai(t,e){return q0(G(),t.writeTree_,e)}function q0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=q0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function th(t,e){return X0(e,t)}function Zx(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=cs(t.visibleWrites,e,n)),t.lastWriteId=r}function eb(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rd(t.visibleWrites,e,n),t.lastWriteId=r}function tb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rb(a,r.path)?i=!1:it(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ib(t),!0;if(r.snap)t.visibleWrites=og(t.visibleWrites,r.path);else{const a=r.children;ke(a,l=>{t.visibleWrites=og(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function rb(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ae(t.path,n),e))return!0;return!1}function ib(t){t.visibleWrites=K0(t.allWrites,sb,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sb(t){return t.visible}function K0(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)it(n,o)?(a=ze(n,o),r=cs(r,a,s.snap)):it(o,n)&&(a=ze(o,n),r=cs(r,G(),s.snap.getChild(a)));else if(s.children){if(it(n,o))a=ze(n,o),r=rd(r,a,s.children);else if(it(o,n))if(a=ze(o,n),B(a))r=rd(r,G(),s.children);else{const l=ti(s.children,$(a));if(l){const u=l.getChild(X(a));r=cs(r,G(),u)}}}else throw mi("WriteRecord should have .snap or .children")}}return r}function Y0(t,e,n,r,i){if(!r&&!i){const s=vr(t.visibleWrites,e);if(s!=null)return s;{const o=wn(t.visibleWrites,e);if(sd(o))return n;if(n==null&&!id(o,G()))return null;{const a=n||L.EMPTY_NODE;return ai(o,a)}}}else{const s=wn(t.visibleWrites,e);if(!i&&sd(s))return n;if(!i&&n==null&&!id(s,G()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},a=K0(t.allWrites,o,e),l=n||L.EMPTY_NODE;return ai(a,l)}}}function ob(t,e,n){let r=L.EMPTY_NODE;const i=vr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wn(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=ai(wn(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),ag(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wn(t.visibleWrites,e);return ag(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ab(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(id(t.visibleWrites,s))return null;{const o=wn(t.visibleWrites,s);return sd(o)?i.getChild(n):ai(o,i.getChild(n))}}function lb(t,e,n,r){const i=ae(e,n),s=vr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wn(t.visibleWrites,i);return ai(o,r.getNode().getImmediateChild(n))}else return null}function ub(t,e){return vr(t.visibleWrites,e)}function cb(t,e,n,r,i,s,o){let a;const l=wn(t.visibleWrites,e),u=vr(l,G());if(u!=null)a=u;else if(n!=null)a=ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function db(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function ja(t,e,n,r){return Y0(t.writeTree,t.treePath,e,n,r)}function nh(t,e){return ob(t.writeTree,t.treePath,e)}function lg(t,e,n,r){return ab(t.writeTree,t.treePath,e,n,r)}function Wa(t,e){return ub(t.writeTree,ae(t.treePath,e))}function fb(t,e,n,r,i,s){return cb(t.writeTree,t.treePath,e,n,r,i,s)}function rh(t,e,n){return lb(t.writeTree,t.treePath,e,n)}function Q0(t,e){return X0(ae(t.treePath,e),t.writeTree)}function X0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class hb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ds(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,si(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fs(r,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const J0=new pb;class ih{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dr(this.viewCache_),s=fb(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function mb(t){return{filter:t}}function gb(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vb(t,e,n,r,i){const s=new hb;let o,a;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=od(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=Ha(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=_b(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ad(t,e,u.path,u.children,r,i,a,s))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=Eb(t,e,u.path,r,i,s):o=wb(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=Cb(t,e,n.path,r,s);else throw mi("Unknown operation type: "+n.type);const l=s.getChanges();return yb(e,o,l),{viewCache:o,changes:l}}function yb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(H0(nd(e)))}}function Z0(t,e,n,r,i,s){const o=e.eventCache;if(Wa(r,n)!=null)return e;{let a,l;if(B(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=dr(e),c=u instanceof L?u:L.EMPTY_NODE,d=nh(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=ja(r,dr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=$(n);if(u===".priority"){I(Nn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=lg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=X(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=lg(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=rh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return us(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ha(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=$(n);if(!l.isCompleteForPath(n)&&Nn(n)>1)return e;const y=X(n),b=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),b):u=c.updateChild(l.getNode(),g,b,y,J0,null)}const d=G0(e,u,l.isFullyInitialized()||B(n),c.filtersNodes()),f=new ih(i,d,s);return Z0(t,d,n,i,f,a)}function od(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new ih(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=us(e,u,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=us(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),g=a.getNode().getImmediateChild(d);let y;if(B(f))y=r;else{const C=c.getCompleteChild(d);C!=null?Vf(f)===".priority"&&C.getChild(D0(f)).isEmpty()?y=C:y=C.updateChild(f,r):y=L.EMPTY_NODE}if(g.equals(y))l=e;else{const C=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=us(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ug(t,e){return t.eventCache.isCompleteForChild(e)}function _b(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ae(n,l);ug(e,$(c))&&(a=od(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ae(n,l);ug(e,$(c))||(a=od(t,a,c,u,i,s,o))}),a}function cg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ad(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;B(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=cg(t,g,f);l=Ha(t,l,new K(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===void 0;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),C=cg(t,y,f);l=Ha(t,l,new K(d),C,i,s,o,a)}}),l}function wb(t,e,n,r,i,s,o){if(Wa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ha(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let u=new Q(null);return l.getNode().forEachChild(Xn,(c,d)=>{u=u.set(new K(c),d)}),ad(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const f=ae(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),ad(t,e,n,u,i,s,a,o)}}function Cb(t,e,n,r,i){const s=e.serverCache,o=G0(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Z0(t,o,n,r,J0,i)}function Eb(t,e,n,r,i,s){let o;if(Wa(r,n)!=null)return e;{const a=new ih(r,e,i),l=e.eventCache.getNode();let u;if(B(n)||$(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ja(r,dr(e));else{const d=e.serverCache.getNode();I(d instanceof L,"serverChildren would be complete if leaf node"),c=nh(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=$(n);let d=rh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,X(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,X(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ja(r,dr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Wa(r,G())!=null,us(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Sb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Qf(r.getIndex()),s=Fx(r);this.processor_=mb(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new cr(l,o.isFullyInitialized(),i.filtersNodes()),d=new cr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bl(d,c),this.eventGenerator_=new Kx(this.query_)}get query(){return this.query_}}function kb(t){return t.viewCache_.serverCache.getNode()}function Ib(t,e){const n=dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function dg(t){return t.eventRegistrations_.length===0}function Tb(t,e){t.eventRegistrations_.push(e)}function fg(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function hg(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(I(dr(t.viewCache_),"We should always have a full cache before handling merges"),I(nd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vb(t.processor_,i,e,n,r);return gb(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,e1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Nb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(si(s,o))}),n.isFullyInitialized()&&r.push(H0(n.getNode())),e1(t,r,n.getNode(),e)}function e1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Yx(t.eventGenerator_,e,n,i)}/**
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
 */let Va;class xb{constructor(){this.views=new Map}}function bb(t){I(!Va,"__referenceConstructor has already been defined"),Va=t}function Pb(){return I(Va,"Reference.ts has not been loaded"),Va}function Rb(t){return t.views.size===0}function sh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),hg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(hg(o,e,n,r));return s}}function Ab(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ja(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=nh(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=bl(new cr(a,l,!1),new cr(r,i,!1));return new Sb(e,u)}return o}function Ob(t,e,n,r,i,s){const o=Ab(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tb(o,n),Nb(o,n)}function Lb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(fg(u,n,r)),dg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(fg(l,n,r)),dg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!xn(t)&&s.push(new(Pb())(e._repo,e._path)),{removed:s,events:o}}function t1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Gr(t,e){let n=null;for(const r of t.views.values())n=n||Ib(r,e);return n}function n1(t,e){if(e._queryParams.loadsAllData())return Pl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function r1(t,e){return n1(t,e)!=null}function xn(t){return Pl(t)!=null}function Pl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ga;function Mb(t){I(!Ga,"__referenceConstructor has already been defined"),Ga=t}function Db(){return I(Ga,"Reference.ts has not been loaded"),Ga}let Fb=1;class pg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=db(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i1(t,e,n,r,i){return Zx(t.pendingWriteTree_,e,n,r,i),i?Si(t,new ur(Jf(),e,n)):[]}function Ub(t,e,n,r){eb(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Si(t,new oi(Jf(),e,i))}function dn(t,e,n=!1){const r=tb(t.pendingWriteTree_,e);if(nb(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(G(),!0):ke(r.children,o=>{s=s.set(new K(o),!0)}),Si(t,new Ba(r.path,s,n))}else return[]}function Rl(t,e,n){return Si(t,new ur(Zf(),e,n))}function zb(t,e,n){const r=Q.fromObject(n);return Si(t,new oi(Zf(),e,r))}function $b(t,e){return Si(t,new zs(Zf(),e))}function Bb(t,e,n){const r=ah(t,n);if(r){const i=lh(r),s=i.path,o=i.queryId,a=ze(s,e),l=new zs(eh(o),a);return uh(t,s,l)}else return[]}function ld(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||r1(s,e))){const a=Lb(s,e,n,r);Rb(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(d,f)=>xn(f));if(u&&!c){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=Hb(d);for(let g=0;g<f.length;++g){const y=f[g],C=y.query,b=a1(t,y);t.listenProvider_.startListening(ds(C),qa(t,C),b.hashFn,b.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(ds(e),null):l.forEach(d=>{const f=t.queryToTagMap.get(Al(d));t.listenProvider_.stopListening(ds(d),f)})),Vb(t,l)}return o}function jb(t,e,n,r){const i=ah(t,r);if(i!=null){const s=lh(i),o=s.path,a=s.queryId,l=ze(o,e),u=new ur(eh(a),l,n);return uh(t,o,u)}else return[]}function Wb(t,e,n,r){const i=ah(t,r);if(i){const s=lh(i),o=s.path,a=s.queryId,l=ze(o,e),u=Q.fromObject(n),c=new oi(eh(a),l,u);return uh(t,o,c)}else return[]}function mg(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,f)=>{const g=ze(d,r);i=i||Gr(f,g),s=s||xn(f)});let o=t.syncPointTree_.get(r);o?(s=s||xn(o),i=i||Gr(o,G())):(o=new xb,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,g)=>{const y=Gr(g,G());y&&(i=i.updateImmediateChild(f,y))}));const l=r1(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=Al(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Gb();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=th(t.pendingWriteTree_,r);let c=Ob(o,e,n,u,i,a);if(!l&&!s){const d=n1(o,e);c=c.concat(qb(t,e,d))}return c}function oh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),u=Gr(a,l);if(u)return u});return Y0(i,e,s,n,!0)}function Si(t,e){return s1(e,t.syncPointTree_,null,th(t.pendingWriteTree_,G()))}function s1(t,e,n,r){if(B(t.path))return o1(t,e,n,r);{const i=e.get(G());n==null&&i!=null&&(n=Gr(i,G()));let s=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Q0(r,o);s=s.concat(s1(a,l,u,c))}return i&&(s=s.concat(sh(i,t,r,n))),s}}function o1(t,e,n,r){const i=e.get(G());n==null&&i!=null&&(n=Gr(i,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Q0(r,o),c=t.operationForChild(o);c&&(s=s.concat(o1(c,a,l,u)))}),i&&(s=s.concat(sh(i,t,r,n))),s}function a1(t,e){const n=e.query,r=qa(t,n);return{hashFn:()=>(kb(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Bb(t,n._path,r):$b(t,n._path);{const s=ON(i,n);return ld(t,n,null,s)}}}}function qa(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function ah(t,e){return t.tagToQueryMap.get(e)}function lh(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function uh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=th(t.pendingWriteTree_,e);return sh(r,n,i,null)}function Hb(t){return t.fold((e,n,r)=>{if(n&&xn(n))return[Pl(n)];{let i=[];return n&&(i=t1(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Db())(t._repo,t._path):t}function Vb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Gb(){return Fb++}function qb(t,e,n){const r=e._path,i=qa(t,e),s=a1(t,n),o=t.listenProvider_.startListening(ds(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!xn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!B(u)&&c&&xn(c))return[Pl(c).query];{let f=[];return c&&(f=f.concat(t1(c).map(g=>g.query))),ke(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(ds(c),qa(t,c))}}return o}/**
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
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new dh(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const Kb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gg=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qb(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Qb=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},l1=function(t,e,n,r){return fh(e,new dh(n,t),r)},u1=function(t,e,n){return fh(t,new ch(e),n)};function fh(t,e,n){const r=t.getPriority().val(),i=gg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=gg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new me(a,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(se,(a,l)=>{const u=fh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class hh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ph(t,e){let n=e instanceof K?e:new K(e),r=t,i=$(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new hh(i,r,s),n=X(n),i=$(n)}return r}function ki(t){return t.node.value}function c1(t,e){t.node.value=e,ud(t)}function d1(t){return t.node.childCount>0}function Xb(t){return ki(t)===void 0&&!d1(t)}function Ol(t,e){ke(t.node.children,(n,r)=>{e(new hh(n,t,r))})}function f1(t,e,n,r){n&&!r&&e(t),Ol(t,i=>{f1(i,e,!0,r)}),n&&r&&e(t)}function Jb(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function io(t){return new K(t.parent===null?t.name:io(t.parent)+"/"+t.name)}function ud(t){t.parent!==null&&Zb(t.parent,t.name,t)}function Zb(t,e,n){const r=Xb(n),i=bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ud(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ud(t))}/**
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
 */const eP=/[\[\].#$\/\u0000-\u001F\u007F]/,tP=/[\[\].#$\u0000-\u001F\u007F]/,Ru=10*1024*1024,Ll=function(t){return typeof t=="string"&&t.length!==0&&!eP.test(t)},h1=function(t){return typeof t=="string"&&t.length!==0&&!tP.test(t)},nP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),h1(t)},cd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zf(t)||t&&typeof t=="object"&&bt(t,".sv")},so=function(t,e,n,r){r&&e===void 0||Ml(Qs(t,"value"),e,n)},Ml=function(t,e,n){const r=n instanceof K?new mx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(zf(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Ru/3&&vl(e)>Ru)throw new Error(t+"contains a string greater than "+Ru+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ll(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gx(r,o),Ml(t,a,r),vx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},rP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ms(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ll(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(px);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&it(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},iP=function(t,e,n,r){if(r&&e===void 0)return;const i=Qs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,a)=>{const l=new K(o);if(Ml(i,a,ae(n,l)),Vf(l)===".priority"&&!cd(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),rP(i,s)},sP=function(t,e,n,r){if(!(r&&n===void 0)&&!Ll(n))throw new Error(Qs(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},mh=function(t,e,n,r){if(!(r&&n===void 0)&&!h1(n))throw new Error(Qs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mh(t,e,n,r)},p1=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nP(n))throw new Error(Qs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function m1(t,e,n){Dl(t,n),g1(t,r=>Gf(r,e))}function vt(t,e,n){Dl(t,n),g1(t,r=>it(r,e)||it(e,r))}function g1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(uP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&Ce("event: "+n.toString()),Ei(r)}}}/**
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
 */const cP="repo_interrupt",dP=25;class fP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$a(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hP(t,e,n){if(t.stats_=jf(t.repoInfo_),t.forceRestClient_||FN())t.server_=new za(t.repoInfo_,(r,i,s,o)=>{vg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yg(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(r,i,s,o)=>{vg(t,r,i,s,o)},r=>{yg(t,r)},r=>{pP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HN(t.repoInfo_,()=>new qx(t.stats_,t.server_)),t.infoData_=new jx,t.infoSyncTree_=new pg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Rl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gh(t,"connected",!1),t.serverSyncTree_=new pg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);vt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function v1(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fl(t){return Kb({timestamp:v1(t)})}function vg(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=xa(n,u=>ye(u));o=Wb(t.serverSyncTree_,s,l,i)}else{const l=ye(n);o=jb(t.serverSyncTree_,s,l,i)}else if(r){const l=xa(n,u=>ye(u));o=zb(t.serverSyncTree_,s,l)}else{const l=ye(n);o=Rl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=li(t,s)),vt(t.eventQueue_,a,o)}function yg(t,e){gh(t,"connected",e),e===!1&&vP(t)}function pP(t,e){ke(e,(n,r)=>{gh(t,n,r)})}function gh(t,e,n){const r=new K("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Rl(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function vh(t){return t.nextWriteId_++}function mP(t,e,n,r,i){Ul(t,"set",{path:e.toString(),value:n,priority:r});const s=Fl(t),o=ye(n,r),a=oh(t.serverSyncTree_,e),l=u1(o,a,s),u=vh(t),c=i1(t.serverSyncTree_,e,l,u,!0);Dl(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||Oe("set at "+e+" failed: "+f);const C=dn(t.serverSyncTree_,u,!y);vt(t.eventQueue_,e,C),dd(t,i,f,g)});const d=_h(t,e);li(t,d),vt(t.eventQueue_,d,[])}function gP(t,e,n,r){Ul(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fl(t),o={};if(ke(n,(a,l)=>{i=!1,o[a]=l1(ae(e,a),ye(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),dd(t,r,"ok",void 0);else{const a=vh(t),l=Ub(t.serverSyncTree_,e,o,a);Dl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Oe("update at "+e+" failed: "+u);const f=dn(t.serverSyncTree_,a,!d),g=f.length>0?li(t,e):e;vt(t.eventQueue_,g,f),dd(t,r,u,c)}),ke(n,u=>{const c=_h(t,ae(e,u));li(t,c)}),vt(t.eventQueue_,e,[])}}function vP(t){Ul(t,"onDisconnectEvents");const e=Fl(t),n=$a();td(t.onDisconnect_,G(),(i,s)=>{const o=l1(i,s,t.serverSyncTree_,e);V0(n,i,o)});let r=[];td(n,G(),(i,s)=>{r=r.concat(Rl(t.serverSyncTree_,i,s));const o=_h(t,i);li(t,o)}),t.onDisconnect_=$a(),vt(t.eventQueue_,G(),r)}function yP(t,e,n){let r;$(e._path)===".info"?r=mg(t.infoSyncTree_,e,n):r=mg(t.serverSyncTree_,e,n),m1(t.eventQueue_,e._path,r)}function _g(t,e,n){let r;$(e._path)===".info"?r=ld(t.infoSyncTree_,e,n):r=ld(t.serverSyncTree_,e,n),m1(t.eventQueue_,e._path,r)}function _P(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cP)}function Ul(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function dd(t,e,n,r){e&&Ei(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function y1(t,e,n){return oh(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function yh(t,e=t.transactionQueueTree_){if(e||zl(t,e),ki(e)){const n=w1(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wP(t,io(e),n)}else d1(e)&&Ol(e,n=>{yh(t,n)})}function wP(t,e,n){const r=n.map(u=>u.currentWriteId),i=y1(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ze(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ul(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(dn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zl(t,ph(t.transactionQueueTree_,e)),yh(t,t.transactionQueueTree_),vt(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Ei(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Oe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}li(t,e)}},o)}function li(t,e){const n=_1(t,e),r=io(n),i=w1(t,n);return CP(t,i,r),r}function CP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ze(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dP)c=!0,d="maxretry",i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=y1(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ml("transaction failed: Data returned ",g,l.path);let y=ye(g);typeof g=="object"&&g!=null&&bt(g,".priority")||(y=y.updatePriority(f.getPriority()));const b=l.currentWriteId,m=Fl(t),p=u1(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=vh(t),o.splice(o.indexOf(b),1),i=i.concat(i1(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(dn(t.serverSyncTree_,b,!0))}else c=!0,d="nodata",i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}zl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ei(r[a]);yh(t,t.transactionQueueTree_)}function _1(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&ki(r)===void 0;)r=ph(r,n),e=X(e),n=$(e);return r}function w1(t,e){const n=[];return C1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function C1(t,e,n){const r=ki(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ol(e,i=>{C1(t,i,n)})}function zl(t,e){const n=ki(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,c1(e,n.length>0?n:void 0)}Ol(e,r=>{zl(t,r)})}function _h(t,e){const n=io(_1(t,e)),r=ph(t.transactionQueueTree_,e);return Jb(r,i=>{Au(t,i)}),Au(t,r),f1(r,i=>{Au(t,i)}),n}function Au(t,e){const n=ki(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?c1(e,void 0):n.length=s+1,vt(t.eventQueue_,io(e),i);for(let o=0;o<r.length;o++)Ei(r[o])}}/**
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
 */function EP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function SP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const wg=function(t,e){const n=kP(t),r=n.namespace;n.domain==="firebase.com"&&ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BN(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},kP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=EP(t.substring(c,d)));const f=SP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class E1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class S1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class IP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Vf(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=ig(this._queryParams),n=$f(e);return n==="{}"?"default":n}get _queryObject(){return ig(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof yr))return!1;const n=this._repo===e._repo,r=Gf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hx(this._path)}}function TP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function wh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Xn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==lr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Tn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===se){if(e!=null&&!cd(e)||n!=null&&!cd(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Yf||t.getIndex()===W0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function k1(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Xt extends yr{constructor(e,n){super(e,n,new Xf,!1)}get parent(){const e=D0(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $s{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=ui(this.ref,e);return new $s(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new $s(i,ui(this.ref,r),se)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ii(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?ui(t._root,e):t._root}function ui(t,e){return t=He(t),$(t._path)===null?oP("child","path",e,!1):mh("child","path",e,!1),new Xt(t._repo,ae(t._path,e))}function NP(t,e){t=He(t),p1("push",t._path),so("push",e,t._path,!0);const n=v1(t._repo),r=Lx(n),i=ui(t,r),s=ui(t,r);let o;return e!=null?o=xP(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function xP(t,e){t=He(t),p1("set",t._path),so("set",e,t._path,!1);const n=new Ks;return mP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bP(t,e){iP("update",e,t._path,!1);const n=new Ks;return gP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ch{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new E1("value",this,new $s(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new S1(this,e,n):null}matches(e){return e instanceof Ch?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Eh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new S1(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=ui(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new E1(e.type,this,new $s(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Eh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function I1(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{_g(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new IP(n,s||void 0),a=e==="value"?new Ch(o):new Eh(e,o);return yP(t._repo,t,a),()=>_g(t._repo,t,a)}function Sh(t,e,n,r){return I1(t,"value",e,n,r)}function PP(t,e,n,r){return I1(t,"child_added",e,n,r)}class oo{}class RP extends oo{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){so("endAt",this._value,e._path,!0);const n=$x(e._queryParams,this._value,this._key);if(k1(n),wh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yr(e._repo,e._path,n,e._orderByCalled)}}class AP extends oo{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){so("startAt",this._value,e._path,!0);const n=zx(e._queryParams,this._value,this._key);if(k1(n),wh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new yr(e._repo,e._path,n,e._orderByCalled)}}class OP extends oo{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new yr(e._repo,e._path,Ux(e._queryParams,this._limit),e._orderByCalled)}}function LP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new OP(t)}class MP extends oo{constructor(e){super(),this._path=e}_apply(e){TP(e,"orderByChild");const n=new K(this._path);if(B(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Yf(n),i=Bx(e._queryParams,r);return wh(i),new yr(e._repo,e._path,i,!0)}}function T1(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return mh("orderByChild","path",t,!1),new MP(t)}class DP extends oo{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(so("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new RP(this._value,this._key)._apply(new AP(this._value,this._key)._apply(e))}}function FP(t,e){return sP("equalTo","key",e,!0),new DP(t,e)}function N1(t,...e){let n=He(t);for(const r of e)n=r._apply(n);return n}bb(Xt);Mb(Xt);/**
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
 */const UP="FIREBASE_DATABASE_EMULATOR_HOST",fd={};let zP=!1;function $P(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wg(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[UP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=wg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Jc(Jc.OWNER):new zN(t.name,t.options,e);aP("Invalid Firebase Database URL",o),B(o.path)||ar("Database URL must point to the root of a Firebase Database (not including a child path).");const d=jP(a,t,c,new UN(t.name,n));return new WP(d,t)}function BP(t,e){const n=fd[e];(!n||n[t.key]!==t)&&ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_P(t),delete n[t.key]}function jP(t,e,n,r){let i=fd[e.name];i||(i={},fd[e.name]=i);let s=i[t.toURLString()];return s&&ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fP(t,zP,n,r),i[t.toURLString()]=s,s}class WP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ar("Cannot call "+e+" on a deleted database.")}}function Ti(t=I_(),e){return Tf(t,"database").getImmediate({identifier:e})}/**
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
 */function HP(t){SN(Xs),ni(new ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $P(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n($m,Bm,t),_n($m,Bm,"esm2017")}/**
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
 */const VP={".sv":"timestamp"};function x1(){return VP}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HP();const Ni={MESSAGES:"messages",USERS:"users",MATCHES:"matches"},GP={uid:null,displayName:"Unknown User"},Ka="demo";function qP(t,e){const[n,r]=R.exports.useState([]);return R.exports.useEffect(()=>{if(!t||!e)return;const i=Ti(),s=`${Ni.MATCHES}/${t}`,o=Ii(i,s),a=N1(o,T1("for"),FP(e));Sh(a,l=>{const u=l.val()||{},c=Object.values(u);r(c)})},[t,e]),n}async function KP(t){const e=await h_({route:`/core/user/${t}`});return e==null?void 0:e.data}function YP(t){const e=Ti(),n=`${Ni.USERS}/${t}`,r=Ii(e,n);return new Promise(i=>{Sh(r,s=>{const o=s.val();i(o&&Ie({uid:s.key},o))})})}function b1(t){const[e,n]=R.exports.useState({});return R.exports.useEffect(()=>{Object.keys(t).filter(r=>!(r in e)).map(KP).forEach(r=>{r.then(i=>{i!=null&&i.uid&&n(s=>yt(Ie({},s),{[i.uid]:i}))}).catch(i=>{console.log("Error while fetching many user records."),console.error(i)})})},[t,e]),e}async function kh(t){try{if(!(t!=null&&t.uid))throw new Error("No user ID provided to update user details.");const{uid:e,email:n,displayName:r,photoURL:i}=t,s=Ti(),o=`${Ni.USERS}/${e}`,a=Ii(s,o);return await bP(a,{uid:e,email:n,displayName:r,photoURL:i,latestLogin:x1()}),null}catch(e){return console.error("Failed to update user details."),console.log(t),console.error(e),e}}function QP(){return h("div",{className:"FloatingButton MockLoginButton",children:T(Ke,{to:"/mocklogin",className:"NoDecorate",children:[h(Qe,{icon:hv,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Go to Mock Login"})]})})}function XP(){const[t,e]=R.exports.useState(null),n=Ci(),r=Qa(),i=async()=>{const{user:o,signInError:a}=await f0();o?(await kh(o),e(null),r("/chats")):(console.error(a),e(a))},s=async()=>{const{isSuccess:o,signOutError:a}=await h0();o||e(a)};return T("div",{className:"Page LoginPage FullHeight VerticalCenter",children:[T("div",{children:[h(Nf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(yi,{label:"Log in with Google",primary:!0,iconBefore:xf,onClick:i}),T(wl,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(p0,{authUser:n,doLogOut:s})]}),h(QP,{})]})}function JP(){var i;const{uid:t}=_d(),e=(i=b1({[t]:!0}))==null?void 0:i[t];if(!e)return h("p",{children:"User not found."});const{photoURL:n,displayName:r}=e;return T("div",{children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:"Profile",className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:r})})]})}const P1="MESSAGE";function ZP(t){const[e,n]=R.exports.useState({});return R.exports.useEffect(()=>{const r=Ti(),i=`${Ni.MATCHES}/${t}`,s=Ii(r,i);return Sh(s,async a=>{const l=a.val(),u=(l==null?void 0:l.participants)||{},c=await Object.keys(u).reduce(async(d,f)=>{const g=await YP(f);return yt(Ie({},await d),{[f]:g})},u);n(yt(Ie({isLoaded:!0,exists:a.exists()},l),{participants:c}))})},[t]),e}function eR(t,e=50){const[n,r]=R.exports.useState({keys:{},values:[]});return R.exports.useEffect(()=>{const i=Ti(),s=`${Ni.MESSAGES}/${t}`,o=N1(Ii(i,s),T1("timestamp"),LP(e));return PP(o,l=>{const{key:u}=l,c=Ie({key:u},l.val());r(d=>{if(u in d.keys)return d;const{keys:f,values:g}=d;return{isLoaded:!0,keys:yt(Ie({},f),{[u]:!0}),values:[...g,c]}})})},[t,e]),n.values}async function tR(t,e){if(!e.from)throw new Error("Missing `from` in message data.");if(!e.message)throw new Error("Missing `message` in message data.");const n={type:P1,timestamp:x1(),message:e.message,from:e.from},r=Ti(),i=`${Ni.MESSAGES}/${t}`,s=Ii(r,i);await NP(s,n)}function nR(){return h("p",{className:"Centered",children:"Loading chat..."})}function rR(t,e,n){const r=(e==null?void 0:e.participants)||{};return e.isLoaded?e!=null&&e.exists?n in r?null:"You are not a participant in this chat.":`No chat found for ID: ${t}`:null}const xi=R.exports.createContext();function iR({chatId:t,header:e,conversation:n,composer:r}){const{chat:i,myUserId:s}=R.exports.useContext(xi),o=rR(t,i,s),a=i.isLoaded&&!o,l=T("div",{className:"ChatAppInner HideScroll",children:[h("div",{className:"ChatHeader HideScroll",children:e}),h("div",{className:"ChatMessages",children:n}),h("div",{className:"ChatComposer",children:r})]});return T("div",{className:"ChatApp",children:[!i.isLoaded&&h(nR,{}),a&&l,T(wl,{hasError:o,children:[h("h1",{children:"No Chat Here..."}),h("pre",{children:o})]})]})}function sR({chatId:t,header:e,conversation:n,composer:r}){const i=Ci(),s=i==null?void 0:i.uid,o=ZP(`${t}~${s}`),a=eR(t),l=c=>{const d=c==null?void 0:c.trim();!s||!d||tR(t,{message:d,from:s})},u=R.exports.useMemo(()=>({chat:o,messages:a,myUserId:s,sendChatMessage:l}));return h(xi.Provider,{value:u,children:h(iR,{chatId:t,header:e,conversation:n,composer:r})})}const oR=yE,aR=fv;function Ih({label:t,icon:e,onClick:n}){return T("div",{className:"FloatingButton ChatAppMenuButton",tabIndex:0,role:"button",onClick:n,onKeyDown:n,children:[h("span",{className:"FloatingButtonTooltip",children:t}),h(Qe,{icon:e,className:"IconBefore"})]})}function lR({menuConfig:t,onMenuClick:e,setOption:n}){var r;return T(mr,{children:[h(Ih,{label:"Close Menu",icon:oR,onClick:e}),T("div",{className:"ChatMenu",children:[h("h2",{children:"Chat Menu"}),(r=t==null?void 0:t.options)==null?void 0:r.map(i=>h("div",{className:"MenuOption",tabIndex:0,role:"button",onClick:()=>n(i.id),onKeyDown:()=>n(i.id),children:h("span",{children:i.name})},i.id))]})]})}function uR({name:t,onClick:e,children:n}){return T(mr,{children:[h(Ih,{label:"Chat Menu",icon:aR,onClick:e}),T("div",{className:"ChatMenu",children:[h("h2",{children:t}),n]})]})}function cR(){return h("p",{children:"Coming soon..."})}function dR({menuConfig:t,onMenuClick:e}){var l;const n=(l=t==null?void 0:t.options)==null?void 0:l.reduce((u,c)=>yt(Ie({},u),{[c.id]:c}),{}),[r,i]=R.exports.useState(null),s=()=>i(null),o=n==null?void 0:n[r],{chat:a}=R.exports.useContext(xi);if(o){const u=(o==null?void 0:o.component)||cR;return h(uR,{name:o==null?void 0:o.name,onClick:s,children:h(u,{chat:a,config:o})})}return h(lR,{menuConfig:t,onMenuClick:e,setOption:i})}const fR=mE,hR=fv;function pR(){return h("div",{className:"FloatingButton BackToChatsButton",children:T(Ke,{to:"/chats",className:"NoDecorate",children:[h(Qe,{icon:fR,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Back to Chats"})]})})}function mR(t,e){return Object.values((t==null?void 0:t.participants)||{}).filter(n=>n.uid!==e)}function R1(t){const[e,n]=t,[r,i]=[e==null?void 0:e.displayName,n==null?void 0:n.displayName];return r&&i?`${r} and ${i}`:r||""}function gR({chat:t,myUserId:e,onMenuClick:n}){const r=mR(t,e),i=r.map(s=>h(D_,{user:s},s.uid));return T(mr,{children:[h(pR,{}),h(Ih,{label:"Open Menu",icon:hR,onClick:n}),h("div",{className:"UserRowCentered",children:i}),h("h1",{children:R1(r)})]})}function vR({menuConfig:t}){const[e,n]=R.exports.useState(!1),r=()=>n(!0),i=()=>n(!1),{chat:s,myUserId:o}=R.exports.useContext(xi);return e?h(dR,{menuConfig:t,onMenuClick:i}):h(gR,{chat:s,myUserId:o,onMenuClick:r})}function yR({match:t,users:e,community:n}){const{id:r,release_timestamp:i,participants:s}=t,o=Object.keys(s).filter(c=>c!==t.for).map(c=>(e==null?void 0:e[c])||{uid:c}),a=R1(o),l=o.map(c=>h(D_,{user:c},c.uid)),u=o.length===1?"Single":"Group";return h(Ke,{to:`/chats/${r}`,className:"NoDecorate",children:T("div",{className:"ChatPreview",children:[h("div",{className:`UserPreview ${u}`,children:l}),T("div",{className:"MessagePreview",children:[h("h3",{children:a}),h("p",{children:n==null?void 0:n.name})]}),h("div",{className:"ReleasePreview",children:h("p",{children:xk(i)})})]})})}const Jn={demo:{id:"demo",name:"Demo Community",intents:[{code:"tutoring",name:"Tutoring"},{code:"tv-movie-recs",name:"TV/Movie Recommendations"}],interests:[{code:"running",name:"Running"},{code:"biking",name:"Biking"},{code:"swimming",name:"Swimming"}]},sds:{id:"sds",name:"Scarlet Data Studio",intents:[],interests:[]}};function _R(){const t=Ci(),e=(Jn==null?void 0:Jn[Ka])||{},n=qP(Ka,t==null?void 0:t.uid),r=n.reduce((o,a)=>Ie(Ie({},o),a.participants),{}),i=b1(r),s=n.length>0?n.sort((o,a)=>a.release_timestamp-o.release_timestamp).map(o=>h(yR,{match:o,users:i,community:e},o.id)):h("div",{className:"Page",children:h("p",{children:"No matches yet."})});return T("div",{className:"AllChatsPage FullHeight LightBackground",children:[T("div",{className:"Header Light",children:[h("h1",{className:"BigTitle",children:h(Ke,{to:"/",children:h("span",{children:"Butterfly Chats"})})}),h("p",{children:"Each week, you will be matched to another person in your community."}),T("p",{children:[h("span",{children:"Check back on Mondays to see who you are matched with! "}),T("span",{children:["Update ",h(Ke,{to:"/me",children:"your profile"})," for better matches."]})]})]}),h("div",{className:"Inbox",children:s})]})}function wR(){const t=R.exports.createRef(),{sendChatMessage:e}=R.exports.useContext(xi),n=()=>{e(t.current.value),t.current.value=""};return T("div",{className:"ChatComposerInner",children:[h("textarea",{ref:t,className:"Input",placeholder:"Type here...",onKeyDown:i=>{const s=i.keyCode===13,o=i.ctrlKey||i.shiftKey;s&&!o&&(i.preventDefault(),n())}}),h("button",{type:"button",onClick:n,className:"Button Send",children:h(Qe,{icon:gE,className:"IconBefore"})})]})}function CR(t,e){return Object.keys(t).filter(n=>n!==e).sort().reduce((n,r,i)=>yt(Ie({},n),{[r]:`Theirs Participant${i}`}),{[e]:"Mine"})}function Qi({data:t,myUserId:e,participants:n}){const{message:r,from:i,type:s}=t,o=CR(n,e);if(s!==P1)return null;const a=(n==null?void 0:n[i])||GP,l=r.split(`
`).map((d,f)=>h("p",{children:d},f)),u=i===e,c=h("div",{className:"ProfileImage",children:h("img",{src:a.photoURL,alt:a.displayName,className:"Image"})});return T("div",{className:`Message ${o[i]}`,children:[!u&&c,T("div",{className:"MessageInner",children:[h("p",{className:"Author",children:a.displayName}),h("div",{className:"Body",children:l})]}),u&&c]})}const ER=({commonLetters:t})=>{const e=t2(t.length,"letter"),n=t.join(", ");return h("div",{className:"CommonLettersStarter",children:T("p",{children:["Fun fact, your names have ",e," in common: ",n,"!"]})})},SR=({chat:t})=>{var e;return h(ER,{commonLetters:(e=t==null?void 0:t.metadata)==null?void 0:e.commonLetters})};const kR=({})=>h("div",{}),Cg=({chat:t})=>h(kR,{});const IR=({})=>h("div",{}),Eg=({chat:t})=>h(IR,{});const TR=({})=>h("div",{}),Sg=({chat:t})=>h(TR,{}),Ou={commonLettersGenerator:SR,rareIntentsGenerator:Cg,similarIntentsGenerator:Cg,rareInterestsGenerator:Eg,similarInterestsGenerator:Eg,limitedSchedulesGenerator:Sg,similarSchedulesGenerator:Sg};function NR(t){var r;const e=(r=t==null?void 0:t.metadata)==null?void 0:r.generator,n=Ou==null?void 0:Ou[e];return!e||!n?null:n}function xR(){const{chat:t,messages:e,myUserId:n}=R.exports.useContext(xi),r=NR(t),i=r&&h("div",{children:h(r,{chat:t})},"conversation_starter"),s=h("p",{children:"Loading chat..."}),o=h("p",{children:"No messages yet, will you start things off?"}),a=t.isLoaded&&e.map(l=>h(Qi,{data:l,myUserId:n,participants:t.participants},l.key));return t.isLoaded?i?[i,...a]:e.length>0?a:o:s}const bR=({})=>h("div",{}),PR=({chat:t,config:e})=>h(bR,{});const RR=({})=>h("div",{}),AR=({chat:t,config:e})=>h(RR,{});const OR=({})=>h("div",{}),LR=({chat:t,config:e})=>h(OR,{});const MR=({})=>h("div",{}),DR=({chat:t,config:e})=>h(MR,{}),FR={options:[{id:"search",name:"Search Messages",component:PR},{id:"block",name:"Block User",component:AR},{id:"rate",name:"Rate Match",component:LR},{id:"upvote",name:"Upvote User",component:DR}]};function UR(){const{chatId:t}=_d(),e=`${Ka}/${t}`;return h("div",{className:"ChatPage",children:h("div",{className:"ChatContainer",children:h(sR,{chatId:e,header:h(vR,{menuConfig:FR}),conversation:h(xR,{}),composer:h(wR,{})})})})}const zR=({})=>h("div",{});const $R=({})=>h("div",{});function BR(){const t=Ci(),e=(Jn==null?void 0:Jn[Ka])||{};return t&&T("div",{className:"EditProfilePage",children:[T("div",{className:"Header",children:[h("h1",{className:"BigTitle",children:"Edit Profile"}),h("p",{children:"Update your profile to help us give you better matches!"}),h(qc,{user:t}),h(Ke,{to:"/chats",children:h("p",{children:"Back to your matches."})})]}),T("div",{className:"Page",children:[h("h2",{children:"Support"}),h(zR,{allIntents:e==null?void 0:e.intents}),h("h2",{children:"Interests"}),h("h2",{children:"Schedule"}),h($R,{allInterests:e==null?void 0:e.interests}),h("p",{children:"Coming soon..."})]})]})}function jR({communityId:t,communityData:e}){return!e&&T(mr,{children:[T("p",{children:["No community found for ",h("strong",{children:t}),"."]}),h("p",{children:"Check your link or ask the person who invited you for help."})]})}function WR({authUser:t,doLogIn:e}){return!t&&T(mr,{children:[h("p",{children:"Log in to join this community on Butterfly."}),h(yi,{label:"Log in with Google",iconBefore:xf,onClick:e})]})}function HR({authUser:t,doLogIn:e}){return t&&T(mr,{children:[T("p",{children:["You are currently logged in as ",t==null?void 0:t.displayName,"."]}),h("p",{children:"Want to log in with another account?"}),h(yi,{label:"Log in with Google",iconBefore:xf,onClick:e})]})}function VR({authUser:t,handleJoin:e}){return t&&h(yi,{label:"Join Community",primary:!0,iconBefore:EE,onClick:e})}function GR({message:t=null,error:e=null}){const n=t||e;return n&&h("p",{children:n})}function qR({communityId:t,communityData:e,authUser:n,doJoin:r,doLogIn:i}){const[s,o]=R.exports.useState(null),a=Qa(),l=async()=>{if(!(n!=null&&n.uid)){o({message:"You must be logged in to join."});return}const u=await r(t,n.uid);o(u),u.success&&a("/chats")};return e&&T(mr,{children:[T("p",{children:["You are invited to join ",h("strong",{children:e.name}),"."]}),h(VR,{authUser:n,handleJoin:l}),h(GR,Ie({},s)),h(WR,{authUser:n,doLogIn:i}),h(HR,{authUser:n,doLogIn:i})]})}function KR({communityId:t,communityConfig:e,authUser:n,doJoin:r,doLogIn:i}){const s=e==null?void 0:e[t];return T("div",{className:"Centered",children:[h("h1",{className:"BigTitle",children:"Join Community"}),h(qR,{communityId:t,communityData:s,authUser:n,doJoin:r,doLogIn:i}),h(jR,{communityId:t,communityData:s}),h("p",{children:h(Ke,{to:"/",children:"Back to Home"})})]})}async function YR(t,e){const n=`/core/community/${t}/join/${e}`;return await h_({route:n,options:{method:"POST"}})}async function QR(){const{user:t}=await f0();t&&await kh(t)}function XR(){const{communityId:t}=_d(),e=Ci();return h("div",{className:"Layout Page",children:h(KR,{communityId:t,communityConfig:Jn,authUser:e,doJoin:YR,doLogIn:QR})})}const JR="Contacting backend API...";function ZR(t,e){return e?`Error: ${e}`:t?JSON.stringify(t,null,4):JR}function eA(){const[t,e]=Rk({route:"/"}),n=ZR(t,e);return h("div",{className:"Layout Page",children:T("div",{children:[h("h1",{className:"BigTitle",children:"Status"}),h(Ke,{to:"/",children:"Back to Home"}),h("pre",{children:n})]})})}const tA="7MIFL%Jj960nT^QX",A1=[{displayName:"Pradeep Balaram",email:"scarletdatastudio+pradeep@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/45.jpg"},{displayName:"Si-Woo Yun-Seo",email:"scarletdatastudio+siwoo@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/92.jpg"},{displayName:"Ilya Viktoria",email:"scarletdatastudio+ilya@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/31.jpg"},{displayName:"Asabe Oyibo",email:"scarletdatastudio+asabe@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/89.jpg"},{displayName:"Ernesto Sa\xFAl",email:"scarletdatastudio+ernesto@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"},{displayName:"Quy\xEAn H\u01B0\u01A1ng",email:"scarletdatastudio+quyen@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}],Lu=A1.reduce((t,e)=>yt(Ie({},t),{[e.email]:e}),{});async function nA(t){const e=Lu==null?void 0:Lu[t];if(!e)return{user:null,signInError:`No mock user for email: '${t}'`};try{const n=Nl(),{email:r,displayName:i,photoURL:s}=e,{user:o}=await uT(n,r,tA);return await dT(n.currentUser,{displayName:i,photoURL:s}),{user:o,signInError:null}}catch(n){return{user:null,signInError:n}}}function rA({mockUsers:t,doLogIn:e}){const n=R.exports.createRef(),r=()=>{const s=n.current.value;s&&e(s)},i=t.map(({email:s,displayName:o})=>h("option",{value:s,children:o},s));return T("div",{children:[h("p",{children:h("select",{ref:n,className:"LoginUserSelector",children:i})}),h(yi,{label:"Log in as Mock User",primary:!0,iconBefore:hv,onClick:r}),T("p",{children:[h(Ke,{to:"/login",children:"Back to Real Login"}),h("span",{children:" | "}),h(Ke,{to:"/status",children:"Status Page"})]})]})}function iA(){const[t,e]=R.exports.useState(null),n=Ci(),r=async s=>{const{user:o,signInError:a}=await nA(s);o?(await kh(o),e(null)):(console.error(a),e(a))},i=async()=>{const{isSuccess:s,signOutError:o}=await h0();s||e(o)};return h("div",{className:"Page LoginPage FullHeight VerticalCenter",children:T("div",{children:[h(Nf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h("hr",{}),h("h2",{children:"Mock User Login"}),h(rA,{doLogIn:r,mockUsers:A1}),T(wl,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(p0,{authUser:n,doLogOut:i})]})})}const Lo={"user-a":{displayName:"Me"},"user-b":{displayName:"User B"},"user-c":{displayName:"User C"},"user-d":{displayName:"User D"}};function sA(){return T("div",{className:"Layout",children:[h("div",{className:"Header",children:h("h1",{className:"BigTitle",children:"Style Guide"})}),T("div",{className:"Page",children:[T("section",{className:"Section",children:[h("h2",{children:"Typography"}),h("hr",{}),h("h1",{children:"Heading 1"}),h("h2",{children:"Heading 2"}),h("h3",{children:"Heading 3"}),h("h4",{children:"Heading 4"}),h("h5",{children:"Heading 5"}),h("h6",{children:"Heading 6"}),h("p",{children:"Paragraph"})]}),T("section",{className:"Section",children:[h("h2",{children:"User Elements"}),h("hr",{}),T("div",{className:"UserRow",children:[h(qc,{user:{displayName:"Ernesto Sa\xFAl",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"}}),h(qc,{user:{displayName:"Quy\xEAn H\u01B0\u01A1ng",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Chat Elements"}),h("hr",{}),h(Qi,{data:{type:"MESSAGE",from:"user-a",message:`Hello,
This is a multi-paragraph message I sent!`},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-b",message:"And I am replying to you."},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-c",message:"I am another participant."},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-d",message:"And I am yet another participant."},myUserId:"user-a",participants:Lo})]}),T("section",{className:"Section",children:[h("h2",{children:"Card Elements"}),h("hr",{}),h("h4",{children:"Full Cards"}),T("div",{className:"Card Full",children:[h("h4",{children:"Card 1"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card Full",children:[h("h4",{children:"Card 2"}),h("p",{children:"Card Content"})]}),h("h3",{children:"Card Row"}),T("div",{className:"CardRow",children:[T("div",{className:"Card",children:[h("h4",{children:"Card A"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card",children:[h("h4",{children:"Card B"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card",children:[h("h4",{children:"Card C"}),h("p",{children:"Card Content"})]})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Buttons"}),h("hr",{}),T("div",{className:"ButtonRow",children:[h("span",{className:"Button Primary",children:"Primary"}),h("span",{className:"Button",children:"Secondary"})]}),T("div",{className:"ButtonRow",children:[T("span",{className:"Button Primary",children:[h(Qe,{icon:_E,className:"IconBefore"}),h("span",{children:"With Icon"})]}),T("span",{className:"Button",children:[h(Qe,{icon:wE,className:"IconBefore"}),h("span",{children:"With Icon"})]})]}),h("span",{className:"Button",children:"Single Button"})]}),T("section",{className:"Section",children:[h("h2",{children:"Error Elements"}),h("hr",{}),T(wl,{hasError:!0,children:[h("h4",{children:"Something went wrong."}),h("p",{children:"We broke it, sorry about that!"})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Lists"}),h("hr",{}),h("h3",{children:"Unordered List"}),T("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]}),h("h3",{children:"Ordered List"}),T("ol",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Columns"}),h("hr",{}),h("h3",{children:"Two Columns"}),T("div",{className:"Columns",children:[T("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Three Columns"}),T("div",{className:"Columns",children:[T("div",{className:"Column Third",children:[h("h4",{children:"Col 1"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Third",children:[h("h4",{children:"Col 2"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Third",children:[h("h4",{children:"Col 3"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Columns with Elements"}),T("div",{className:"Columns",children:[T("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("h5",{children:"List"}),T("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),T("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),T("div",{className:"Card Full",children:[h("h5",{children:"Card"}),h("p",{children:"Card Content"})]})]})]})]})]})]})}const oA="/butterfly",kg="butterfly__pathname";function aA(){const t=Qa();return R.exports.useEffect(()=>{const e=localStorage.getItem(kg);if(e){localStorage.setItem(kg,"");const n=e.substring(oA.length);t(n)}},[t]),T(Nw,{children:[h(we,{index:!0,element:h(x2,{})}),T(we,{path:"/",element:h(l2,{}),children:[h(we,{path:"login",element:h(XP,{})}),h(we,{path:"me",element:h(BR,{})}),h(we,{path:"join",children:h(we,{path:":communityId",element:h(XR,{})})}),h(we,{path:"profile",children:h(we,{path:":uid",element:h(JP,{})})}),T(we,{path:"chats",children:[h(we,{index:!0,element:h(_R,{})}),h(we,{path:":chatId",element:h(UR,{})})]}),h(we,{path:"status",element:h(eA,{})}),h(we,{path:"mocklogin",element:h(iA,{})}),h(we,{path:"resources",children:h(we,{path:"styleguide",element:h(sA,{})})})]}),h(we,{path:"*",element:h(u2,{})})]})}function lA(){const t=ZI();return h("div",{className:"App Theme",children:h(e2.Provider,{value:t,children:h(aA,{})})})}const uA=[CE];hE.add(uA);document.title="Butterfly";Qu.createRoot(document.getElementById("root")).render(h(Ag.StrictMode,{children:h(Pw,{basename:"butterfly",children:h(lA,{})})}));