var F1=Object.defineProperty,U1=Object.defineProperties;var z1=Object.getOwnPropertyDescriptors;var uo=Object.getOwnPropertySymbols;var Rh=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable;var Ph=(t,e,n)=>e in t?F1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ce=(t,e)=>{for(var n in e||(e={}))Rh.call(e,n)&&Ph(t,n,e[n]);if(uo)for(var n of uo(e))Ah.call(e,n)&&Ph(t,n,e[n]);return t},Ve=(t,e)=>U1(t,z1(e));var Hl=(t,e)=>{var n={};for(var r in t)Rh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&uo)for(var r of uo(t))e.indexOf(r)<0&&Ah.call(t,r)&&(n[r]=t[r]);return n};const $1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};$1();var P={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),B1=Symbol.for("react.portal"),j1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),G1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),Y1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),Oh=Symbol.iterator;function X1(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,Rg={};function ci(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||bg}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ag(){}Ag.prototype=ci.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||bg}var gd=md.prototype=new Ag;gd.constructor=md;Pg(gd,ci.prototype);gd.isPureReactComponent=!0;var Lh=Array.isArray,Og=Object.prototype.hasOwnProperty,vd={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Og.call(e,r)&&!Lg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bs,type:t,key:s,ref:o,props:i,_owner:vd.current}}function J1(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function Z1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z1(""+t.key):e.toString(36)}function Mo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bs:case B1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vl(o,0):r,Lh(i)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),Mo(i,e,n,"",function(u){return u})):i!=null&&(yd(i)&&(i=J1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vl(s,a);o+=Mo(s,e,n,l,i)}else if(l=X1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vl(s,a++),o+=Mo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function co(t,e,n){if(t==null)return t;var r=[],i=0;return Mo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ew(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},Do={transition:null},tw={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Do,ReactCurrentOwner:vd};H.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=ci;H.Fragment=j1;H.Profiler=H1;H.PureComponent=md;H.StrictMode=W1;H.Suspense=K1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tw;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Og.call(e,l)&&!Lg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bs,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:G1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V1,_context:t},t.Consumer=t};H.createElement=Mg;H.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:q1,render:t}};H.isValidElement=yd;H.lazy=function(t){return{$$typeof:Q1,_payload:{_status:-1,_result:t},_init:ew}};H.memo=function(t,e){return{$$typeof:Y1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Do.transition;Do.transition={};try{t()}finally{Do.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Le.current.useCallback(t,e)};H.useContext=function(t){return Le.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};H.useEffect=function(t,e){return Le.current.useEffect(t,e)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Le.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};H.useRef=function(t){return Le.current.useRef(t)};H.useState=function(t){return Le.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.0.0-fc46dba67-20220329";P.exports=H;var Dg=P.exports;function Jo(){return Jo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var $n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($n||($n={}));var Dh=function(t){return t},Fh="beforeunload",nw="popstate";function rw(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var C=r.location,k=C.pathname,M=C.search,D=C.hash,re=i.state||{};return[re.idx,Dh({pathname:k,search:M,hash:D,state:re.usr||null,key:re.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var C=$n.Pop,k=s(),M=k[0],D=k[1];if(g.length){if(M!=null){var re=c-M;re&&(o={action:C,location:D,retry:function(){E(re*-1)}},E(re))}}else p(C)}}r.addEventListener(nw,a);var l=$n.Pop,u=s(),c=u[0],d=u[1],f=zh(),g=zh();c==null&&(c=0,i.replaceState(Jo({},i.state,{idx:c}),""));function y(C){return typeof C=="string"?C:Fu(C)}function w(C,k){return k===void 0&&(k=null),Dh(Jo({pathname:d.pathname,hash:"",search:""},typeof C=="string"?fr(C):C,{state:k,key:iw()}))}function x(C,k){return[{usr:C.state,key:C.key,idx:k},y(C)]}function m(C,k,M){return!g.length||(g.call({action:C,location:k,retry:M}),!1)}function p(C){l=C;var k=s();c=k[0],d=k[1],f.call({action:l,location:d})}function v(C,k){var M=$n.Push,D=w(C,k);function re(){v(C,k)}if(m(M,D,re)){var tt=x(D,c+1),Rt=tt[0],On=tt[1];try{i.pushState(Rt,"",On)}catch{r.location.assign(On)}p(M)}}function _(C,k){var M=$n.Replace,D=w(C,k);function re(){_(C,k)}if(m(M,D,re)){var tt=x(D,c),Rt=tt[0],On=tt[1];i.replaceState(Rt,"",On),p(M)}}function E(C){i.go(C)}var N={get action(){return l},get location(){return d},createHref:y,push:v,replace:_,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(k){return f.push(k)},block:function(k){var M=g.push(k);return g.length===1&&r.addEventListener(Fh,Uh),function(){M(),g.length||r.removeEventListener(Fh,Uh)}}};return N}function Uh(t){t.preventDefault(),t.returnValue=""}function zh(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function iw(){return Math.random().toString(36).substr(2,8)}function Fu(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function fr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _d=P.exports.createContext(null),wd=P.exports.createContext(null),di=P.exports.createContext({outlet:null,matches:[]});function Nt(t,e){if(!t)throw new Error(e)}function sw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fr(e):e,i=zg(r.pathname||"/",n);if(i==null)return null;let s=Fg(t);ow(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mw(s[a],i);return o}function Fg(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Nt(!1),o.relativePath=o.relativePath.slice(r.length));let a=hn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Nt(!1),Fg(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:hw(a,i.index),routesMeta:l})}),e}function ow(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aw=/^:\w+$/,lw=3,uw=2,cw=1,dw=10,fw=-2,$h=t=>t==="*";function hw(t,e){let n=t.split("/"),r=n.length;return n.some($h)&&(r+=fw),e&&(r+=uw),n.filter(i=>!$h(i)).reduce((i,s)=>i+(aw.test(s)?lw:s===""?cw:dw),r)}function pw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=gw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:$g(hn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return s}function gw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=yw(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function yw(t,e){try{return decodeURIComponent(t)}catch{return t}}function _w(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fr(t):t;return{pathname:n?n.startsWith("/")?n:ww(n,e):e,search:Ew(r),hash:Sw(i)}}function ww(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ug(t,e,n){let r=typeof t=="string"?fr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=_w(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Cw(t){return t===""||t.pathname===""?"/":typeof t=="string"?fr(t).pathname:t.pathname}function zg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),$g=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ew=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kw(t){js()||Nt(!1);let{basename:e,navigator:n}=P.exports.useContext(_d),{hash:r,pathname:i,search:s}=Bg(t),o=i;if(e!=="/"){let a=Cw(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):hn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function js(){return P.exports.useContext(wd)!=null}function Ka(){return js()||Nt(!1),P.exports.useContext(wd).location}function Ya(){js()||Nt(!1);let{basename:t,navigator:e}=P.exports.useContext(_d),{matches:n}=P.exports.useContext(di),{pathname:r}=Ka(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=P.exports.useRef(!1);return P.exports.useEffect(()=>{s.current=!0}),P.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Ug(a,JSON.parse(i),r);t!=="/"&&(u.pathname=hn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const Iw=P.exports.createContext(null);function Tw(t){let e=P.exports.useContext(di).outlet;return e&&P.exports.createElement(Iw.Provider,{value:t},e)}function Cd(){let{matches:t}=P.exports.useContext(di),e=t[t.length-1];return e?e.params:{}}function Bg(t){let{matches:e}=P.exports.useContext(di),{pathname:n}=Ka(),r=JSON.stringify(e.map(i=>i.pathnameBase));return P.exports.useMemo(()=>Ug(t,JSON.parse(r),n),[t,r,n])}function Nw(t,e){js()||Nt(!1);let{matches:n}=P.exports.useContext(di),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ka(),a;if(e){var l;let f=typeof e=="string"?fr(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||Nt(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=sw(t,{pathname:c});return xw(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:hn([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:hn([s,f.pathnameBase])})),n)}function xw(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>P.exports.createElement(di.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function bw(t){return Tw(t.context)}function Ce(t){Nt(!1)}function Pw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$n.Pop,navigator:s,static:o=!1}=t;js()&&Nt(!1);let a=$g(e),l=P.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=fr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=P.exports.useMemo(()=>{let w=zg(u,a);return w==null?null:{pathname:w,search:c,hash:d,state:f,key:g}},[a,u,c,d,f,g]);return y==null?null:P.exports.createElement(_d.Provider,{value:l},P.exports.createElement(wd.Provider,{children:n,value:{location:y,navigationType:i}}))}function Rw(t){let{children:e,location:n}=t;return Nw(Uu(e),n)}function Uu(t){let e=[];return P.exports.Children.forEach(t,n=>{if(!P.exports.isValidElement(n))return;if(n.type===P.exports.Fragment){e.push.apply(e,Uu(n.props.children));return}n.type!==Ce&&Nt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Uu(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}function Aw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Ow=["onClick","reloadDocument","replace","state","target","to"];function Lw(t){let{basename:e,children:n,window:r}=t,i=P.exports.useRef();i.current==null&&(i.current=rw({window:r}));let s=i.current,[o,a]=P.exports.useState({action:s.action,location:s.location});return P.exports.useLayoutEffect(()=>s.listen(a),[s]),P.exports.createElement(Pw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Mw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ye=P.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=Aw(e,Ow),c=kw(l),d=Dw(l,{replace:s,state:o,target:a});function f(g){r&&r(g),!g.defaultPrevented&&!i&&d(g)}return P.exports.createElement("a",zu({},u,{href:c,onClick:f,ref:n,target:a}))});function Dw(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Ya(),o=Ka(),a=Bg(t);return P.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Mw(l)){l.preventDefault();let u=!!r||Fu(o)===Fu(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Bh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bh(Object(n),!0).forEach(function(r){zw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zo(t){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zo(t)}function Fw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Uw(t,e,n){return e&&jh(t.prototype,e),n&&jh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function zw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ed(t,e){return Bw(t)||Ww(t,e)||jg(t,e)||Vw()}function Qa(t){return $w(t)||jw(t)||jg(t)||Hw()}function $w(t){if(Array.isArray(t))return $u(t)}function Bw(t){if(Array.isArray(t))return t}function jw(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ww(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jg(t,e){if(!!t){if(typeof t=="string")return $u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $u(t,e)}}function $u(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wh=function(){},Sd={},Wg={},Hg=null,Vg={mark:Wh,measure:Wh};try{typeof window!="undefined"&&(Sd=window),typeof document!="undefined"&&(Wg=document),typeof MutationObserver!="undefined"&&(Hg=MutationObserver),typeof performance!="undefined"&&(Vg=performance)}catch{}var Gw=Sd.navigator||{},Hh=Gw.userAgent,Vh=Hh===void 0?"":Hh,En=Sd,ee=Wg,Gh=Hg,fo=Vg;En.document;var Qt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Gg=~Vh.indexOf("MSIE")||~Vh.indexOf("Trident/"),Wt="___FONT_AWESOME___",Bu=16,qg="fa",Kg="svg-inline--fa",Zn="data-fa-i2svg",ju="data-fa-pseudo-element",qw="data-fa-pseudo-element-pending",kd="data-prefix",Id="data-icon",qh="fontawesome-i2svg",Kw="async",Yw=["HTML","HEAD","STYLE","SCRIPT"],Yg=function(){try{return!0}catch{return!1}}(),Td={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ea={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Qg={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Qw={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Xw=/fa[srltdbk\-\ ]/,Xg="fa-layers-text",Jw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Zw={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Jg=[1,2,3,4,5,6,7,8,9,10],eC=Jg.concat([11,12,13,14,15,16,17,18,19,20]),tC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nC=[].concat(Qa(Object.keys(ea)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bn.GROUP,Bn.SWAP_OPACITY,Bn.PRIMARY,Bn.SECONDARY]).concat(Jg.map(function(t){return"".concat(t,"x")})).concat(eC.map(function(t){return"w-".concat(t)})),Zg=En.FontAwesomeConfig||{};function rC(t){var e=ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function iC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ee&&typeof ee.querySelector=="function"){var sC=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sC.forEach(function(t){var e=Ed(t,2),n=e[0],r=e[1],i=iC(rC(n));i!=null&&(Zg[r]=i)})}var oC={familyPrefix:qg,styleDefault:"solid",replacementClass:Kg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xi=R(R({},oC),Zg);Xi.autoReplaceSvg||(Xi.observeMutations=!1);var O={};Object.keys(Xi).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Xi[t]=n,Fo.forEach(function(r){return r(O)})},get:function(){return Xi[t]}})});En.FontAwesomeConfig=O;var Fo=[];function aC(t){return Fo.push(t),function(){Fo.splice(Fo.indexOf(t),1)}}var Zt=Bu,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lC(t){if(!(!t||!Qt)){var e=ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ee.head.insertBefore(e,r),t}}var uC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fs(){for(var t=12,e="";t-- >0;)e+=uC[Math.random()*62|0];return e}function fi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nd(t){return t.classList?fi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ev(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cC(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ev(t[n]),'" ')},"").trim()}function Xa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function xd(t){return t.size!==wt.size||t.x!==wt.x||t.y!==wt.y||t.rotate!==wt.rotate||t.flipX||t.flipY}function dC(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function fC(t){var e=t.transform,n=t.width,r=n===void 0?Bu:n,i=t.height,s=i===void 0?Bu:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Gg?l+="translate(".concat(e.x/Zt-r/2,"em, ").concat(e.y/Zt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Zt,"em), calc(-50% + ").concat(e.y/Zt,"em)) "):l+="translate(".concat(e.x/Zt,"em, ").concat(e.y/Zt,"em) "),l+="scale(".concat(e.size/Zt*(e.flipX?-1:1),", ").concat(e.size/Zt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hC=`:root, :host {
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
}`;function tv(){var t=qg,e=Kg,n=O.familyPrefix,r=O.replacementClass,i=hC;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Kh=!1;function Gl(){O.autoAddCss&&!Kh&&(lC(tv()),Kh=!0)}var pC={mixout:function(){return{dom:{css:tv,insertCss:Gl}}},hooks:function(){return{beforeDOMElementCreation:function(){Gl()},beforeI2svg:function(){Gl()}}}},Ht=En||{};Ht[Wt]||(Ht[Wt]={});Ht[Wt].styles||(Ht[Wt].styles={});Ht[Wt].hooks||(Ht[Wt].hooks={});Ht[Wt].shims||(Ht[Wt].shims=[]);var pt=Ht[Wt],nv=[],mC=function t(){ee.removeEventListener("DOMContentLoaded",t),ta=1,nv.map(function(e){return e()})},ta=!1;Qt&&(ta=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ta||ee.addEventListener("DOMContentLoaded",mC));function gC(t){!Qt||(ta?setTimeout(t,0):nv.push(t))}function Ws(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ev(t):"<".concat(e," ").concat(cC(r),">").concat(s.map(Ws).join(""),"</").concat(e,">")}function Yh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var vC=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ql=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?vC(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function yC(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Wu(t){var e=yC(t);return e.length===1?e[0].toString(16):null}function _C(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Qh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Qh(e);typeof pt.hooks.addPack=="function"&&!i?pt.hooks.addPack(t,Qh(e)):pt.styles[t]=R(R({},pt.styles[t]||{}),s),t==="fas"&&Hu("fa",e)}var Ji=pt.styles,wC=pt.shims,CC=Object.values(Qg),bd=null,rv={},iv={},sv={},ov={},av={},EC=Object.keys(Td);function SC(t){return~nC.indexOf(t)}function kC(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!SC(i)?i:null}var lv=function(){var e=function(s){return ql(Ji,function(o,a,l){return o[l]=ql(a,s,{}),o},{})};rv=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),iv=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),av=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ji||O.autoFetchSvg,r=ql(wC,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});sv=r.names,ov=r.unicodes,bd=Ja(O.styleDefault)};aC(function(t){bd=Ja(t.styleDefault)});lv();function Pd(t,e){return(rv[t]||{})[e]}function IC(t,e){return(iv[t]||{})[e]}function Cr(t,e){return(av[t]||{})[e]}function uv(t){return sv[t]||{prefix:null,iconName:null}}function TC(t){var e=ov[t],n=Pd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sn(){return bd}var Rd=function(){return{prefix:null,iconName:null,rest:[]}};function Ja(t){var e=Td[t],n=ea[t]||ea[e],r=t in pt.styles?t:null;return n||r||null}function Za(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=kC(O.familyPrefix,a);if(Ji[a]?(a=CC.includes(a)?Qw[a]:a,i=a,o.prefix=a):EC.indexOf(a)>-1?(i=a,o.prefix=Ja(a)):l?o.iconName=l:a!==O.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?uv(o.iconName):{},c=Cr(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ji.far&&Ji.fas&&!O.autoFetchSvg&&(o.prefix="fas")}return o},Rd());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Sn()||"fas"),s}var NC=function(){function t(){Fw(this,t),this.definitions={}}return Uw(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Hu(a,o[a]);var l=Qg[a];l&&Hu(l,o[a]),lv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Xh=[],Er={},Dr={},xC=Object.keys(Dr);function bC(t,e){var n=e.mixoutsTo;return Xh=t,Er={},Object.keys(Dr).forEach(function(r){xC.indexOf(r)===-1&&delete Dr[r]}),Xh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zo(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Er[o]||(Er[o]=[]),Er[o].push(s[o])})}r.provides&&r.provides(Dr)}),n}function Vu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Er[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function er(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Er[t]||[];i.forEach(function(s){s.apply(null,n)})}function Vt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Dr[t]?Dr[t].apply(null,e):void 0}function Gu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Sn();if(!!e)return e=Cr(n,e)||e,Yh(cv.definitions,n,e)||Yh(pt.styles,n,e)}var cv=new NC,PC=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,er("noAuto")},RC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qt?(er("beforeI2svg",e),Vt("pseudoElements2svg",e),Vt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,gC(function(){OC({autoReplaceSvgRoot:n}),er("watch",e)})}},AC={icon:function(e){if(e===null)return null;if(Zo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Cr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ja(e[0]);return{prefix:r,iconName:Cr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.familyPrefix,"-"))>-1||e.match(Xw))){var i=Za(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Sn(),iconName:Cr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Sn();return{prefix:s,iconName:Cr(s,e)||e}}}},Je={noAuto:PC,config:O,dom:RC,parse:AC,library:cv,findIconDefinition:Gu,toHtml:Ws},OC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(pt.styles).length>0||O.autoFetchSvg)&&Qt&&O.autoReplaceSvg&&Je.dom.i2svg({node:r})};function el(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ws(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Qt){var r=ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function LC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(xd(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Xa(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function MC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Ad(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,w=y.width,x=y.height,m=i==="fak",p=[O.replacementClass,s?"".concat(O.familyPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),v={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(x)})},_=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/x*16*.0625,"em")}:{};g&&(v.attributes[Zn]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||fs())},children:[l]}),delete v.attributes.title);var E=R(R({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},_),d.styles)}),N=r.found&&n.found?Vt("generateAbstractMask",E)||{children:[],attributes:{}}:Vt("generateAbstractIcon",E)||{children:[],attributes:{}},C=N.children,k=N.attributes;return E.children=C,E.attributes=k,a?MC(E):LC(E)}function Jh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zn]="");var c=R({},o.styles);xd(i)&&(c.transform=fC({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Xa(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function DC(t){var e=t.content,n=t.title,r=t.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Xa(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kl=pt.styles;function qu(t){var e=t[0],n=t[1],r=t.slice(4),i=Ed(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.familyPrefix,"-").concat(Bn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(Bn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(Bn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var FC={found:!1,width:512,height:512};function UC(t,e){!Yg&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ku(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Sn()),new Promise(function(r,i){if(Vt("missingIconAbstract"),n==="fa"){var s=uv(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Kl[e]&&Kl[e][t]){var o=Kl[e][t];return r(qu(o))}UC(t,e),r(R(R({},FC),{},{icon:O.showMissingIcons&&t?Vt("missingIconAbstract")||{}:{}}))})}var Zh=function(){},Yu=O.measurePerformance&&fo&&fo.mark&&fo.measure?fo:{mark:Zh,measure:Zh},ji='FA "6.1.1"',zC=function(e){return Yu.mark("".concat(ji," ").concat(e," begins")),function(){return dv(e)}},dv=function(e){Yu.mark("".concat(ji," ").concat(e," ends")),Yu.measure("".concat(ji," ").concat(e),"".concat(ji," ").concat(e," begins"),"".concat(ji," ").concat(e," ends"))},Od={begin:zC,end:dv},Uo=function(){};function ep(t){var e=t.getAttribute?t.getAttribute(Zn):null;return typeof e=="string"}function $C(t){var e=t.getAttribute?t.getAttribute(kd):null,n=t.getAttribute?t.getAttribute(Id):null;return e&&n}function BC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function jC(){if(O.autoReplaceSvg===!0)return zo.replace;var t=zo[O.autoReplaceSvg];return t||zo.replace}function WC(t){return ee.createElementNS("http://www.w3.org/2000/svg",t)}function HC(t){return ee.createElement(t)}function fv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?WC:HC:n;if(typeof t=="string")return ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(fv(o,{ceFn:r}))}),i}function VC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(fv(i),n)}),n.getAttribute(Zn)===null&&O.keepOriginalSource){var r=ee.createComment(VC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Nd(n).indexOf(O.replacementClass))return zo.replace(e);var i=new RegExp("".concat(O.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ws(a)}).join(`
`);n.setAttribute(Zn,""),n.innerHTML=o}};function tp(t){t()}function hv(t,e){var n=typeof e=="function"?e:Uo;if(t.length===0)n();else{var r=tp;O.mutateApproach===Kw&&(r=En.requestAnimationFrame||tp),r(function(){var i=jC(),s=Od.begin("mutate");t.map(i),s(),n()})}}var Ld=!1;function pv(){Ld=!0}function Qu(){Ld=!1}var na=null;function np(t){if(!!Gh&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?Uo:e,r=t.nodeCallback,i=r===void 0?Uo:r,s=t.pseudoElementsCallback,o=s===void 0?Uo:s,a=t.observeMutationsRoot,l=a===void 0?ee:a;na=new Gh(function(u){if(!Ld){var c=Sn();fi(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ep(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ep(d.target)&&~tC.indexOf(d.attributeName))if(d.attributeName==="class"&&$C(d.target)){var f=Za(Nd(d.target)),g=f.prefix,y=f.iconName;d.target.setAttribute(kd,g||c),y&&d.target.setAttribute(Id,y)}else BC(d.target)&&i(d.target)})}}),Qt&&na.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function GC(){!na||na.disconnect()}function qC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function KC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Za(Nd(t));return i.prefix||(i.prefix=Sn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=IC(i.prefix,t.innerText)||Pd(i.prefix,Wu(t.innerText))),i}function YC(t){var e=fi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||fs()):(e["aria-hidden"]="true",e.focusable="false")),e}function QC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=KC(t),r=n.iconName,i=n.prefix,s=n.rest,o=YC(t),a=Vu("parseNodeAttributes",{},t),l=e.styleParser?qC(t):[];return R({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var XC=pt.styles;function mv(t){var e=O.autoReplaceSvg==="nest"?rp(t,{styleParser:!1}):rp(t);return~e.extra.classes.indexOf(Xg)?Vt("generateLayersText",t,e):Vt("generateSvgReplacementMutation",t,e)}function ip(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qt)return Promise.resolve();var n=ee.documentElement.classList,r=function(d){return n.add("".concat(qh,"-").concat(d))},i=function(d){return n.remove("".concat(qh,"-").concat(d))},s=O.autoFetchSvg?Object.keys(Td):Object.keys(XC),o=[".".concat(Xg,":not([").concat(Zn,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Od.begin("onTree"),u=a.reduce(function(c,d){try{var f=mv(d);f&&c.push(f)}catch(g){Yg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){hv(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function JC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mv(t).then(function(n){n&&hv([n],e)})}function ZC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Gu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gu(i||{})),t(r,R(R({},n),{},{mask:i}))}}var eE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,w=n.classes,x=w===void 0?[]:w,m=n.attributes,p=m===void 0?{}:m,v=n.styles,_=v===void 0?{}:v;if(!!e){var E=e.prefix,N=e.iconName,C=e.icon;return el(R({type:"icon"},e),function(){return er("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(f?p["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||fs()):(p["aria-hidden"]="true",p.focusable="false")),Ad({icons:{main:qu(C),mask:l?qu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:N,transform:R(R({},wt),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:p,styles:_,classes:x}})})}},tE={mixout:function(){return{icon:ZC(eE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ip,n.nodeCallback=JC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,s=n.callback,o=s===void 0?function(){}:s;return ip(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([Ku(i,a),c.iconName?Ku(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var x=Ed(w,2),m=x[0],p=x[1];g([n,Ad({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Xa(a);l.length>0&&(i.style=l);var u;return xd(o)&&(u=Vt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},nE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return el({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.familyPrefix,"-layers")].concat(Qa(s)).join(" ")},children:o}]})}}}},rE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return el({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),DC({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(O.familyPrefix,"-layers-counter")].concat(Qa(a))}})})}}}},iE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?wt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return el({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),Jh({content:n,transform:R(R({},wt),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(O.familyPrefix,"-layers-text")].concat(Qa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Gg){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Jh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},sE=new RegExp('"',"ug"),sp=[1105920,1112319];function oE(t){var e=t.replace(sE,""),n=_C(e,0),r=n>=sp[0]&&n<=sp[1],i=e.length===2?e[0]===e[1]:!1;return{value:Wu(i?e[0]:e),isSecondary:r||i}}function op(t,e){var n="".concat(qw).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fi(t.children),o=s.filter(function(N){return N.getAttribute(ju)===e})[0],a=En.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Jw),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ea[l[2].toLowerCase()]:Zw[u],g=oE(d),y=g.value,w=g.isSecondary,x=l[0].startsWith("FontAwesome"),m=Pd(f,y),p=m;if(x){var v=TC(y);v.iconName&&v.prefix&&(m=v.iconName,f=v.prefix)}if(m&&!w&&(!o||o.getAttribute(kd)!==f||o.getAttribute(Id)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);var _=QC(),E=_.extra;E.attributes[ju]=e,Ku(m,f).then(function(N){var C=Ad(R(R({},_),{},{icons:{main:N,mask:Rd()},prefix:f,iconName:p,extra:E,watchable:!0})),k=ee.createElement("svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=C.map(function(M){return Ws(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function aE(t){return Promise.all([op(t,"::before"),op(t,"::after")])}function lE(t){return t.parentNode!==document.head&&!~Yw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ju)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ap(t){if(!!Qt)return new Promise(function(e,n){var r=fi(t.querySelectorAll("*")).filter(lE).map(aE),i=Od.begin("searchPseudoElements");pv(),Promise.all(r).then(function(){i(),Qu(),e()}).catch(function(){i(),Qu(),n()})})}var uE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ap,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;O.searchPseudoElements&&ap(i)}}},lp=!1,cE={mixout:function(){return{dom:{unwatch:function(){pv(),lp=!0}}}},hooks:function(){return{bootstrap:function(){np(Vu("mutationObserverCallbacks",{}))},noAuto:function(){GC()},watch:function(n){var r=n.observeMutationsRoot;lp?Qu():np(Vu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},up=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},dE={mixout:function(){return{parse:{transform:function(n){return up(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=up(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Yl={x:0,y:0,width:"100%",height:"100%"};function cp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fE(t){return t.tag==="g"?t.children:[t]}var hE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Za(i.split(" ").map(function(o){return o.trim()})):Rd();return s.prefix||(s.prefix=Sn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=dC({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:R(R({},Yl),{},{fill:"white"})},w=c.children?{children:c.children.map(cp)}:{},x={tag:"g",attributes:R({},g.inner),children:[cp(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},w))]},m={tag:"g",attributes:R({},g.outer),children:[x]},p="mask-".concat(a||fs()),v="clip-".concat(a||fs()),_={tag:"mask",attributes:R(R({},Yl),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:fE(f)},_]};return r.push(E,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Yl)}),{children:r,attributes:i}}}},pE={provides:function(e){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},mE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},gE=[pC,tE,nE,rE,iE,uE,cE,dE,hE,pE,mE];bC(gE,{mixoutsTo:Je});Je.noAuto;Je.config;var vE=Je.library;Je.dom;var Xu=Je.parse;Je.findIconDefinition;Je.toHtml;var yE=Je.icon;Je.layer;Je.text;Je.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var _E={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"]},wE={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"]},gv={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},CE={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},EE=CE,SE={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"]},kE={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"]},IE={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},TE={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"]},NE={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},xE=NE,vv={prefix:"fas",iconName:"user-ninja",icon:[512,512,[129399],"f504","M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"]},Ju={},yv={exports:{}},Ze={},_v={exports:{}},wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var z=A.length;A.push(U);e:for(;0<z;){var ue=z-1>>>1,me=A[ue];if(0<i(me,U))A[ue]=U,A[z]=me,z=ue;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],z=A.pop();if(z!==U){A[0]=z;e:for(var ue=0,me=A.length,ao=me>>>1;ue<ao;){var Ln=2*(ue+1)-1,Wl=A[Ln],Mn=Ln+1,lo=A[Mn];if(0>i(Wl,z))Mn<me&&0>i(lo,Wl)?(A[ue]=lo,A[Mn]=z,ue=Mn):(A[ue]=Wl,A[Ln]=z,ue=Ln);else if(Mn<me&&0>i(lo,z))A[ue]=lo,A[Mn]=z,ue=Mn;else break e}}return U}function i(A,U){var z=A.sortIndex-U.sortIndex;return z!==0?z:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function _(A){if(w=!1,v(A),!y)if(n(l)!==null)y=!0,Bl(E);else{var U=n(u);U!==null&&jl(_,U.startTime-A)}}function E(A,U){y=!1,w&&(w=!1,m(k),k=-1),g=!0;var z=f;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||A&&!re());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var me=ue(d.expirationTime<=U);U=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(l)&&r(l),v(U)}else r(l);d=n(l)}if(d!==null)var ao=!0;else{var Ln=n(u);Ln!==null&&jl(_,Ln.startTime-U),ao=!1}return ao}finally{d=null,f=z,g=!1}}var N=!1,C=null,k=-1,M=5,D=-1;function re(){return!(t.unstable_now()-D<M)}function tt(){if(C!==null){var A=t.unstable_now();D=A;var U=!0;try{U=C(!0,A)}finally{U?Rt():(N=!1,C=null)}}else N=!1}var Rt;if(typeof p=="function")Rt=function(){p(tt)};else if(typeof MessageChannel!="undefined"){var On=new MessageChannel,bh=On.port2;On.port1.onmessage=tt,Rt=function(){bh.postMessage(null)}}else Rt=function(){x(tt,0)};function Bl(A){C=A,N||(N=!0,Rt())}function jl(A,U){k=x(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Bl(E))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var z=f;f=U;try{return A()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=f;f=A;try{return U()}finally{f=z}},t.unstable_scheduleCallback=function(A,U,z){var ue=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,A){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=z+me,A={id:c++,callback:U,priorityLevel:A,startTime:z,expirationTime:me,sortIndex:-1},z>ue?(A.sortIndex=z,e(u,A),n(l)===null&&A===n(u)&&(w?(m(k),k=-1):w=!0,jl(_,z-ue))):(A.sortIndex=me,e(l,A),y||g||(y=!0,Bl(E))),A},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(A){var U=f;return function(){var z=f;f=U;try{return A.apply(this,arguments)}finally{f=z}}}})(wv);_v.exports=wv;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=P.exports,Qe=_v.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,hs={};function hr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(hs[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var Gt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Zu=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function PE(t){return Zu.call(fp,t)?!0:Zu.call(dp,t)?!1:bE.test(t)?fp[t]=!0:(dp[t]=!0,!1)}function RE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AE(t,e,n,r){if(e===null||typeof e=="undefined"||RE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Md,Dd);ke[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Md,Dd);ke[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Md,Dd);ke[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,n,i,r)&&(n=null),r||i===null?PE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xt=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),hp=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Ql;function Wi(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Xl=!1;function Jl(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wi(t):""}function OE(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function rc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Sr:return"Portal";case ec:return"Profiler";case Ud:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kv:return(t.displayName||"Context")+".Consumer";case Sv:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:rc(t.type)||"Memo";case tn:e=t._payload,t=t._init;try{return rc(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rc(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ME(t){var e=Tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=ME(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Tv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ic(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function sc(t,e){xv(t,e);var n=kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&oc(t,e.type,kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oc(t,e,n){(e!=="number"||ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hi=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ac(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Hi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kn(n)}}function bv(t,e){var n=kn(e.value),r=kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,Rv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DE=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(t){DE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zi[e]=Zi[t]})});function Av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zi.hasOwnProperty(t)&&Zi[t]?(""+e).trim():e+"px"}function Ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Av(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FE=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(t,e){if(e){if(FE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,Ur=null,zr=null;function yp(t){if(t=Gs(t)){if(typeof fc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=sl(e),fc(t.stateNode,t.type,e))}}function Lv(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function Mv(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function Dv(t,e){return t(e)}function Fv(){}var Zl=!1;function Uv(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Dv(t,e,n)}finally{Zl=!1,(Ur!==null||zr!==null)&&(Fv(),Mv())}}function ms(t,e){var n=t.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var hc=!1;if(Gt)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{hc=!1}function UE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var es=!1,ia=null,sa=!1,pc=null,zE={onError:function(t){es=!0,ia=t}};function $E(t,e,n,r,i,s,o,a,l){es=!1,ia=null,UE.apply(zE,arguments)}function BE(t,e,n,r,i,s,o,a,l){if($E.apply(this,arguments),es){if(es){var u=ia;es=!1,ia=null}else throw Error(S(198));sa||(sa=!0,pc=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _p(t){if(pr(t)!==t)throw Error(S(188))}function jE(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _p(i),t;if(s===r)return _p(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function $v(t){return t=jE(t),t!==null?Bv(t):null}function Bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bv(t);if(e!==null)return e;t=t.sibling}return null}var jv=Qe.unstable_scheduleCallback,wp=Qe.unstable_cancelCallback,WE=Qe.unstable_shouldYield,HE=Qe.unstable_requestPaint,de=Qe.unstable_now,VE=Qe.unstable_getCurrentPriorityLevel,jd=Qe.unstable_ImmediatePriority,Wv=Qe.unstable_UserBlockingPriority,oa=Qe.unstable_NormalPriority,GE=Qe.unstable_LowPriority,Hv=Qe.unstable_IdlePriority,tl=null,Et=null;function qE(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:QE,KE=Math.log,YE=Math.LN2;function QE(t){return t>>>=0,t===0?32:31-(KE(t)/YE|0)|0}var go=64,vo=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vi(a):(s&=o,s!==0&&(r=Vi(s)))}else o=n&~i,o!==0?r=Vi(o):s!==0&&(r=Vi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=XE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Vv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Gv,Hd,qv,Kv,Yv,gc=!1,yo=[],pn=null,mn=null,gn=null,gs=new Map,vs=new Map,rn=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tS(t,e,n,r,i){switch(e){case"focusin":return pn=Ri(pn,t,e,n,r,i),!0;case"dragenter":return mn=Ri(mn,t,e,n,r,i),!0;case"mouseover":return gn=Ri(gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return gs.set(s,Ri(gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Ri(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function Qv(t){var e=jn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=zv(n),e!==null){t.blockedOn=e,Yv(t.priority,function(){qv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return e=Gs(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ep(t,e,n){$o(t)&&n.delete(e)}function nS(){gc=!1,pn!==null&&$o(pn)&&(pn=null),mn!==null&&$o(mn)&&(mn=null),gn!==null&&$o(gn)&&(gn=null),gs.forEach(Ep),vs.forEach(Ep)}function Ai(t,e){t.blockedOn===e&&(t.blockedOn=null,gc||(gc=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,nS)))}function ys(t){function e(i){return Ai(i,t)}if(0<yo.length){Ai(yo[0],t);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pn!==null&&Ai(pn,t),mn!==null&&Ai(mn,t),gn!==null&&Ai(gn,t),gs.forEach(e),vs.forEach(e),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Qv(n),n.blockedOn===null&&rn.shift()}var $r=Xt.ReactCurrentBatchConfig;function rS(t,e,n,r){var i=q,s=$r.transition;$r.transition=null;try{q=1,Vd(t,e,n,r)}finally{q=i,$r.transition=s}}function iS(t,e,n,r){var i=q,s=$r.transition;$r.transition=null;try{q=4,Vd(t,e,n,r)}finally{q=i,$r.transition=s}}function Vd(t,e,n,r){var i=vc(t,e,n,r);if(i===null)cu(t,e,r,la,n),Cp(t,r);else if(tS(i,t,e,n,r))r.stopPropagation();else if(Cp(t,r),e&4&&-1<eS.indexOf(t)){for(;i!==null;){var s=Gs(i);if(s!==null&&Gv(s),s=vc(t,e,n,r),s===null&&cu(t,e,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cu(t,e,r,null,n)}var la=null;function vc(t,e,n,r){if(la=null,t=Bd(r),t=jn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return la=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case jd:return 1;case Wv:return 4;case oa:case GE:return 16;case Hv:return 536870912;default:return 16}default:return 16}}var un=null,Gd=null,Bo=null;function Jv(){if(Bo)return Bo;var t,e=Gd,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function Sp(){return!1}function et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:Sp,this.isPropagationStopped=Sp,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=et(hi),Vs=oe({},hi,{view:0,detail:0}),sS=et(Vs),tu,nu,Oi,nl=oe({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?(tu=t.screenX-Oi.screenX,nu=t.screenY-Oi.screenY):nu=tu=0,Oi=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),kp=et(nl),oS=oe({},nl,{dataTransfer:0}),aS=et(oS),lS=oe({},Vs,{relatedTarget:0}),ru=et(lS),uS=oe({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=et(uS),dS=oe({},hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=et(dS),hS=oe({},hi,{data:0}),Ip=et(hS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gS[t])?!!e[t]:!1}function Kd(){return vS}var yS=oe({},Vs,{key:function(t){if(t.key){var e=pS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_S=et(yS),wS=oe({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=et(wS),CS=oe({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),ES=et(CS),SS=oe({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=et(SS),IS=oe({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=et(IS),NS=[9,13,27,32],Yd=Gt&&"CompositionEvent"in window,ts=null;Gt&&"documentMode"in document&&(ts=document.documentMode);var xS=Gt&&"TextEvent"in window&&!ts,Zv=Gt&&(!Yd||ts&&8<ts&&11>=ts),Np=String.fromCharCode(32),xp=!1;function ey(t,e){switch(t){case"keyup":return NS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function bS(t,e){switch(t){case"compositionend":return ty(e);case"keypress":return e.which!==32?null:(xp=!0,Np);case"textInput":return t=e.data,t===Np&&xp?null:t;default:return null}}function PS(t,e){if(Ir)return t==="compositionend"||!Yd&&ey(t,e)?(t=Jv(),Bo=Gd=un=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zv&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function ny(t,e,n,r){Lv(r),e=ua(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ns=null,_s=null;function AS(t){hy(t,0)}function rl(t){var e=xr(t);if(Nv(e))return t}function OS(t,e){if(t==="change")return e}var ry=!1;if(Gt){var iu;if(Gt){var su="oninput"in document;if(!su){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),su=typeof Pp.oninput=="function"}iu=su}else iu=!1;ry=iu&&(!document.documentMode||9<document.documentMode)}function Rp(){ns&&(ns.detachEvent("onpropertychange",iy),_s=ns=null)}function iy(t){if(t.propertyName==="value"&&rl(_s)){var e=[];ny(e,_s,t,Bd(t)),Uv(AS,e)}}function LS(t,e,n){t==="focusin"?(Rp(),ns=e,_s=n,ns.attachEvent("onpropertychange",iy)):t==="focusout"&&Rp()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(_s)}function DS(t,e){if(t==="click")return rl(e)}function FS(t,e){if(t==="input"||t==="change")return rl(e)}function US(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:US;function ws(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zu.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Ap(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ap(n)}}function sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function oy(){for(var t=window,e=ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ra(t.document)}return e}function Qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zS(t){var e=oy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sy(n.ownerDocument.documentElement,n)){if(r!==null&&Qd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Op(n,s);var o=Op(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $S=Gt&&"documentMode"in document&&11>=document.documentMode,Tr=null,yc=null,rs=null,_c=!1;function Lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_c||Tr==null||Tr!==ra(r)||(r=Tr,"selectionStart"in r&&Qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&ws(rs,r)||(rs=r,r=ua(yc,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},ou={},ay={};Gt&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function il(t){if(ou[t])return ou[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ay)return ou[t]=e[n];return t}var ly=il("animationend"),uy=il("animationiteration"),cy=il("animationstart"),dy=il("transitionend"),fy=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){fy.set(t,e),hr(e,[t])}for(var au=0;au<Mp.length;au++){var lu=Mp[au],BS=lu.toLowerCase(),jS=lu[0].toUpperCase()+lu.slice(1);Pn(BS,"on"+jS)}Pn(ly,"onAnimationEnd");Pn(uy,"onAnimationIteration");Pn(cy,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(dy,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Dp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BE(r,e,void 0,t),t.currentTarget=null}function hy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,u),s=l}}}if(sa)throw t=pc,sa=!1,pc=null,t}function Z(t,e){var n=e[Sc];n===void 0&&(n=e[Sc]=new Set);var r=t+"__bubble";n.has(r)||(py(e,t,2,!1),n.add(r))}function uu(t,e,n){var r=0;e&&(r|=4),py(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Cs(t){if(!t[Co]){t[Co]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(WS.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,uu("selectionchange",!1,e))}}function py(t,e,n,r){switch(Xv(e)){case 1:var i=rS;break;case 4:i=iS;break;default:i=Vd}n=i.bind(null,e,n,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Uv(function(){var u=s,c=Bd(n),d=[];e:{var f=fy.get(t);if(f!==void 0){var g=qd,y=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":g=_S;break;case"focusin":y="focus",g=ru;break;case"focusout":y="blur",g=ru;break;case"beforeblur":case"afterblur":g=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ES;break;case ly:case uy:case cy:g=cS;break;case dy:g=kS;break;case"scroll":g=sS;break;case"wheel":g=TS;break;case"copy":case"cut":case"paste":g=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Tp}var w=(e&4)!==0,x=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,m!==null&&(_=ms(p,m),_!=null&&w.push(Es(p,_,v)))),x)break;p=p.return}0<w.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:w}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==dc&&(y=n.relatedTarget||n.fromElement)&&(jn(y)||y[qt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?jn(y):null,y!==null&&(x=pr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=kp,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Tp,_="onPointerLeave",m="onPointerEnter",p="pointer"),x=g==null?f:xr(g),v=y==null?f:xr(y),f=new w(_,p+"leave",g,n,c),f.target=x,f.relatedTarget=v,_=null,jn(c)===u&&(w=new w(m,p+"enter",y,n,c),w.target=v,w.relatedTarget=x,_=w),x=_,g&&y)t:{for(w=g,m=y,p=0,v=w;v;v=_r(v))p++;for(v=0,_=m;_;_=_r(_))v++;for(;0<p-v;)w=_r(w),p--;for(;0<v-p;)m=_r(m),v--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=_r(w),m=_r(m)}w=null}else w=null;g!==null&&Fp(d,f,g,w,!1),y!==null&&x!==null&&Fp(d,x,y,w,!0)}}e:{if(f=u?xr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=OS;else if(bp(f))if(ry)E=FS;else{E=MS;var N=LS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=DS);if(E&&(E=E(t,u))){ny(d,E,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&oc(f,"number",f.value)}switch(N=u?xr(u):window,t){case"focusin":(bp(N)||N.contentEditable==="true")&&(Tr=N,yc=u,rs=null);break;case"focusout":rs=yc=Tr=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Lp(d,n,c);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Lp(d,n,c)}var C;if(Yd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ir?ey(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Zv&&n.locale!=="ko"&&(Ir||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ir&&(C=Jv()):(un=c,Gd="value"in un?un.value:un.textContent,Ir=!0)),N=ua(u,k),0<N.length&&(k=new Ip(k,t,null,n,c),d.push({event:k,listeners:N}),C?k.data=C:(C=ty(n),C!==null&&(k.data=C)))),(C=xS?bS(t,n):PS(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(c=new Ip("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}hy(d,e)})}function Es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ms(t,n),s!=null&&r.unshift(Es(t,s,i)),s=ms(t,e),s!=null&&r.push(Es(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ms(n,s),l!=null&&o.unshift(Es(n,l,a))):i||(l=ms(n,s),l!=null&&o.push(Es(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function Up(t){return(typeof t=="string"?t:""+t).replace(HS,`
`).replace(VS,"")}function Eo(t,e,n){if(e=Up(e),Up(t)!==e&&n)throw Error(S(425))}function ca(){}var wc=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof zp!="undefined"?function(t){return zp.resolve(null).then(t).catch(KS)}:Ec;function KS(t){setTimeout(function(){throw t})}function du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ys(e)}function Mt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),_t="__reactFiber$"+pi,Ss="__reactProps$"+pi,qt="__reactContainer$"+pi,Sc="__reactEvents$"+pi,YS="__reactListeners$"+pi,QS="__reactHandles$"+pi;function jn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$p(t);t!==null;){if(n=t[_t])return n;t=$p(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[_t]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function sl(t){return t[Ss]||null}var kc=[],br=-1;function Rn(t){return{current:t}}function te(t){0>br||(t.current=kc[br],kc[br]=null,br--)}function J(t,e){br++,kc[br]=t.current,t.current=e}var In={},be=Rn(In),Be=Rn(!1),tr=In;function Kr(t,e){var n=t.type.contextTypes;if(!n)return In;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function da(){te(Be),te(be)}function Bp(t,e,n){if(be.current!==In)throw Error(S(168));J(be,e),J(Be,n)}function my(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,LE(t)||"Unknown",i));return oe({},n,r)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,tr=be.current,J(be,t),J(Be,Be.current),!0}function jp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=my(t,e,tr),r.__reactInternalMemoizedMergedChildContext=t,te(Be),te(be),J(be,t)):te(Be),J(Be,n)}var Ot=null,ol=!1,fu=!1;function gy(t){Ot===null?Ot=[t]:Ot.push(t)}function XS(t){ol=!0,gy(t)}function An(){if(!fu&&Ot!==null){fu=!0;var t=0,e=q;try{var n=Ot;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,ol=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),jv(jd,An),i}finally{q=e,fu=!1}}return null}var JS=Xt.ReactCurrentBatchConfig;function dt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ha=Rn(null),pa=null,Pr=null,Xd=null;function Jd(){Xd=Pr=pa=null}function Zd(t){var e=ha.current;te(ha),t._currentValue=e}function Ic(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){pa=t,Xd=Pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(qe=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Pr===null){if(pa===null)throw Error(S(308));Pr=t,pa.dependencies={lanes:0,firstContext:t}}else Pr=Pr.next=t;return e}var Ct=null,nn=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,he!==null&&(t.mode&1)!==0&&(V&2)===0?(t=n.interleaved,t===null?(e.next=e,Ct===null?Ct=[n]:Ct.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wd(t,n)}}function Wp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ma(t,e,n,r){var i=t.updateQueue;nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=oe({},d,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=d}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var yy=new Cv.Component().refs;function Tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var al={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=_n(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),vn(t,s),e=lt(t,i,r),e!==null&&Wo(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=_n(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),vn(t,s),e=lt(t,i,r),e!==null&&Wo(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=_n(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),vn(t,i),e=lt(t,r,n),e!==null&&Wo(e,t,r)}};function Vp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ws(n,r)||!ws(i,s):!0}function _y(t,e,n){var r=!1,i=In,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=je(e)?tr:be.current,r=e.contextTypes,s=(r=r!=null)?Kr(t,i):In),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&al.enqueueReplaceState(e,e.state,null)}function Nc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=yy,ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=je(e)?tr:be.current,i.context=Kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&al.enqueueReplaceState(i,i.state,null),ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Rr=[],Ar=0,ga=null,va=0,nt=[],rt=0,nr=null,Dt=1,Ft="";function Dn(t,e){Rr[Ar++]=va,Rr[Ar++]=ga,ga=t,va=e}function wy(t,e,n){nt[rt++]=Dt,nt[rt++]=Ft,nt[rt++]=nr,nr=t;var r=Dt;t=Ft;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var s=32-gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-gt(e)+i|n<<i|r,Ft=s+t}else Dt=1<<s|n<<i|r,Ft=t}function tf(t){t.return!==null&&(Dn(t,1),wy(t,1,0))}function nf(t){for(;t===ga;)ga=Rr[--Ar],Rr[Ar]=null,va=Rr[--Ar],Rr[Ar]=null;for(;t===nr;)nr=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null,Dt=nt[--rt],nt[rt]=null}var Ke=null,Fe=null,ne=!1,ft=null;function Cy(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Fe=Mt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Dt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Fe=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(ne){var e=Fe;if(e){var n=e;if(!qp(t,e)){if(xc(t))throw Error(S(418));e=Mt(n.nextSibling);var r=Ke;e&&qp(t,e)?Cy(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ke=t)}}else{if(xc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,Ke=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Li(t){if(t!==Ke)return!1;if(!ne)return Kp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=Fe)){if(xc(t)){for(t=Fe;t;)t=Mt(t.nextSibling);throw Error(S(418))}for(;e;)Cy(t,e),e=Mt(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=Mt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=Ke?Mt(t.stateNode.nextSibling):null;return!0}function Yr(){Fe=Ke=null,ne=!1}function rf(t){ft===null?ft=[t]:ft.push(t)}function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===yy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function Ey(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Tn(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,_){return p===null||p.tag!==6?(p=yu(v,m.mode,_),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,_){var E=v.type;return E===kr?c(m,p,v.props.children,_,v.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&Yp(E)===p.type)?(_=i(p,v.props),_.ref=Mi(m,p,v),_.return=m,_):(_=Ko(v.type,v.key,v.props,null,m.mode,_),_.ref=Mi(m,p,v),_.return=m,_)}function u(m,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=_u(v,m.mode,_),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,_,E){return p===null||p.tag!==7?(p=Yn(v,m.mode,_,E),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=yu(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ho:return v=Ko(p.type,p.key,p.props,null,m.mode,v),v.ref=Mi(m,null,p),v.return=m,v;case Sr:return p=_u(p,m.mode,v),p.return=m,p;case tn:var _=p._init;return d(m,_(p._payload),v)}if(Hi(p)||bi(p))return p=Yn(p,m.mode,v,null),p.return=m,p;So(m,p)}return null}function f(m,p,v,_){var E=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(m,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return v.key===E?l(m,p,v,_):null;case Sr:return v.key===E?u(m,p,v,_):null;case tn:return E=v._init,f(m,p,E(v._payload),_)}if(Hi(v)||bi(v))return E!==null?null:c(m,p,v,_,null);So(m,v)}return null}function g(m,p,v,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(v)||null,a(p,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ho:return m=m.get(_.key===null?v:_.key)||null,l(p,m,_,E);case Sr:return m=m.get(_.key===null?v:_.key)||null,u(p,m,_,E);case tn:var N=_._init;return g(m,p,v,N(_._payload),E)}if(Hi(_)||bi(_))return m=m.get(v)||null,c(p,m,_,E,null);So(p,_)}return null}function y(m,p,v,_){for(var E=null,N=null,C=p,k=p=0,M=null;C!==null&&k<v.length;k++){C.index>k?(M=C,C=null):M=C.sibling;var D=f(m,C,v[k],_);if(D===null){C===null&&(C=M);break}t&&C&&D.alternate===null&&e(m,C),p=s(D,p,k),N===null?E=D:N.sibling=D,N=D,C=M}if(k===v.length)return n(m,C),ne&&Dn(m,k),E;if(C===null){for(;k<v.length;k++)C=d(m,v[k],_),C!==null&&(p=s(C,p,k),N===null?E=C:N.sibling=C,N=C);return ne&&Dn(m,k),E}for(C=r(m,C);k<v.length;k++)M=g(C,m,k,v[k],_),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?k:M.key),p=s(M,p,k),N===null?E=M:N.sibling=M,N=M);return t&&C.forEach(function(re){return e(m,re)}),ne&&Dn(m,k),E}function w(m,p,v,_){var E=bi(v);if(typeof E!="function")throw Error(S(150));if(v=E.call(v),v==null)throw Error(S(151));for(var N=E=null,C=p,k=p=0,M=null,D=v.next();C!==null&&!D.done;k++,D=v.next()){C.index>k?(M=C,C=null):M=C.sibling;var re=f(m,C,D.value,_);if(re===null){C===null&&(C=M);break}t&&C&&re.alternate===null&&e(m,C),p=s(re,p,k),N===null?E=re:N.sibling=re,N=re,C=M}if(D.done)return n(m,C),ne&&Dn(m,k),E;if(C===null){for(;!D.done;k++,D=v.next())D=d(m,D.value,_),D!==null&&(p=s(D,p,k),N===null?E=D:N.sibling=D,N=D);return ne&&Dn(m,k),E}for(C=r(m,C);!D.done;k++,D=v.next())D=g(C,m,k,D.value,_),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?k:D.key),p=s(D,p,k),N===null?E=D:N.sibling=D,N=D);return t&&C.forEach(function(tt){return e(m,tt)}),ne&&Dn(m,k),E}function x(m,p,v,_){if(typeof v=="object"&&v!==null&&v.type===kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:e:{for(var E=v.key,N=p;N!==null;){if(N.key===E){if(E=v.type,E===kr){if(N.tag===7){n(m,N.sibling),p=i(N,v.props.children),p.return=m,m=p;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&Yp(E)===N.type){n(m,N.sibling),p=i(N,v.props),p.ref=Mi(m,N,v),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}v.type===kr?(p=Yn(v.props.children,m.mode,_,v.key),p.return=m,m=p):(_=Ko(v.type,v.key,v.props,null,m.mode,_),_.ref=Mi(m,p,v),_.return=m,m=_)}return o(m);case Sr:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=_u(v,m.mode,_),p.return=m,m=p}return o(m);case tn:return N=v._init,x(m,p,N(v._payload),_)}if(Hi(v))return y(m,p,v,_);if(bi(v))return w(m,p,v,_);So(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=yu(v,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return x}var Qr=Ey(!0),Sy=Ey(!1),qs={},St=Rn(qs),ks=Rn(qs),Is=Rn(qs);function Wn(t){if(t===qs)throw Error(S(174));return t}function sf(t,e){switch(J(Is,e),J(ks,t),J(St,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lc(e,t)}te(St),J(St,e)}function Xr(){te(St),te(ks),te(Is)}function ky(t){Wn(Is.current);var e=Wn(St.current),n=lc(e,t.type);e!==n&&(J(ks,t),J(St,n))}function of(t){ks.current===t&&(te(St),te(ks))}var ie=Rn(0);function ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function af(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Ho=Xt.ReactCurrentDispatcher,ot=Xt.ReactCurrentBatchConfig,Jr=0,le=null,xe=null,ve=null,_a=!1,is=!1,Ts=0,ZS=0;function Te(){throw Error(S(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function uf(t,e,n,r,i,s){if(Jr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ho.current=t===null||t.memoizedState===null?rk:ik,t=n(r,i),is){s=0;do{if(is=!1,Ts=0,25<=s)throw Error(S(301));s+=1,ve=xe=null,e.updateQueue=null,Ho.current=sk,t=n(r,i)}while(is)}if(Ho.current=wa,e=xe!==null&&xe.next!==null,Jr=0,ve=xe=le=null,_a=!1,e)throw Error(S(300));return t}function cf(){var t=Ts!==0;return Ts=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?le.memoizedState=ve=t:ve=ve.next=t,ve}function bt(){if(xe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=ve===null?le.memoizedState:ve.next;if(e!==null)ve=e,xe=t;else{if(t===null)throw Error(S(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ve===null?le.memoizedState=ve=t:ve=ve.next=t}return ve}function qn(t,e){return typeof e=="function"?e(t):e}function ko(t){var e=bt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,le.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Io(t){var e=bt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Iy(){}function Ty(t,e){var n=le,r=bt(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,qe=!0),r=r.queue,xs(by.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ns(9,xy.bind(null,n,r,i,e),void 0,null),he===null)throw Error(S(349));(Jr&30)!==0||Ny(n,e,i)}return i}function Ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Py(e)&&lt(t,1,-1)}function by(t,e,n){return n(function(){Py(e)&&lt(t,1,-1)})}function Py(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function pu(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:t},e.queue=t,t=t.dispatch=nk.bind(null,le,t),[e.memoizedState,t]}function Ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ry(){return bt().memoizedState}function Vo(t,e,n,r){var i=At();le.flags|=t,i.memoizedState=Ns(1|e,n,void 0,r===void 0?null:r)}function ll(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&lf(r,o.deps)){i.memoizedState=Ns(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ns(1|e,n,s,r)}function mu(t,e){return Vo(8390656,8,t,e)}function xs(t,e){return ll(2048,8,t,e)}function Ay(t,e){return ll(4,2,t,e)}function Oy(t,e){return ll(4,4,t,e)}function Ly(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function My(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,Ly.bind(null,e,t),n)}function df(){}function Dy(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fy(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ek(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=ot.transition;ot.transition={};try{t(!1),e()}finally{q=n,ot.transition=r}}function Uy(){return bt().memoizedState}function tk(t,e,n){var r=_n(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zy(t)?$y(e,n):(By(t,e,n),n=Ae(),t=lt(t,r,n),t!==null&&jy(t,e,r))}function nk(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zy(t))$y(e,i);else{By(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xt(a,o))return}catch{}finally{}n=Ae(),t=lt(t,r,n),t!==null&&jy(t,e,r)}}function zy(t){var e=t.alternate;return t===le||e!==null&&e===le}function $y(t,e){is=_a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function By(t,e,n){he!==null&&(t.mode&1)!==0&&(V&2)===0?(t=e.interleaved,t===null?(n.next=n,Ct===null?Ct=[e]:Ct.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function jy(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wd(t,n)}}var wa={readContext:ut,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},rk={readContext:ut,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:mu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,Ly.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tk.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:pu,useDebugValue:df,useDeferredValue:function(t){var e=pu(t),n=e[0],r=e[1];return mu(function(){var i=ot.transition;ot.transition={};try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=pu(!1),e=t[0];return t=ek.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=At();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),he===null)throw Error(S(349));(Jr&30)!==0||Ny(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mu(by.bind(null,r,s,t),[t]),r.flags|=2048,Ns(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=he.identifierPrefix;if(ne){var n=Ft,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ik={readContext:ut,useCallback:Dy,useContext:ut,useEffect:xs,useImperativeHandle:My,useInsertionEffect:Ay,useLayoutEffect:Oy,useMemo:Fy,useReducer:ko,useRef:Ry,useState:function(){return ko(qn)},useDebugValue:df,useDeferredValue:function(t){var e=ko(qn),n=e[0],r=e[1];return xs(function(){var i=ot.transition;ot.transition={};try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=ko(qn)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Ty,useId:Uy,unstable_isNewReconciler:!1},sk={readContext:ut,useCallback:Dy,useContext:ut,useEffect:xs,useImperativeHandle:My,useInsertionEffect:Ay,useLayoutEffect:Oy,useMemo:Fy,useReducer:Io,useRef:Ry,useState:function(){return Io(qn)},useDebugValue:df,useDeferredValue:function(t){var e=Io(qn),n=e[0],r=e[1];return xs(function(){var i=ot.transition;ot.transition={};try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=Io(qn)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Ty,useId:Uy,unstable_isNewReconciler:!1};function ff(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Pc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ok=typeof WeakMap=="function"?WeakMap:Map;function Wy(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,zc=r),Pc(t,e)},n}function Hy(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pc(t,e),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wk.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,vn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Vy,Rc,Gy,qy;Vy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};Gy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(St.current);var s=null;switch(n){case"input":i=ic(t,i),r=ic(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=ac(t,i),r=ac(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}uc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ak(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return je(e.type)&&da(),Ne(e),null;case 3:return r=e.stateNode,Xr(),te(Be),te(be),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Li(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ft!==null&&(jc(ft),ft=null))),Rc(t,e),Ne(e),null;case 5:of(e);var i=Wn(Is.current);if(n=e.type,t!==null&&e.stateNode!=null)Gy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ne(e),null}if(t=Wn(St.current),Li(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Ss]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":pp(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":gp(r,s),Z("invalid",r)}uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(Eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(Eo(r.textContent,a,t),i=["children",""+a]):hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":po(r),mp(r,s,!0);break;case"textarea":po(r),vp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Ss]=r,Vy(t,e,!1,!1),e.stateNode=t;e:{switch(o=cc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":pp(t,r),i=ic(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":gp(t,r),i=ac(t,r),Z("invalid",t);break;default:i=r}uc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ov(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ps(t,l):typeof l=="number"&&ps(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Fd(t,s,l,o))}switch(n){case"input":po(t),mp(t,r,!1);break;case"textarea":po(t),vp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)qy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Wn(Is.current),Wn(St.current),Li(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:Eo(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&Eo(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ne(e),null;case 13:if(te(ie),r=e.memoizedState,ne&&Fe!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=Fe;r;)r=Mt(r.nextSibling);return Yr(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Li(e),t===null){if(!r)throw Error(S(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[_t]=e}else Yr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ne(e),null}return ft!==null&&(jc(ft),ft=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Li(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ie.current&1)!==0?pe===0&&(pe=3):yf())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Xr(),Rc(t,e),t===null&&Cs(e.stateNode.containerInfo),Ne(e),null;case 10:return Zd(e.type._context),Ne(e),null;case 17:return je(e.type)&&da(),Ne(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ya(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ei&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=ya(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ne(e),null}else 2*de()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ge&1073741824)!==0&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}var lk=Xt.ReactCurrentOwner,qe=!1;function Re(t,e,n,r){e.child=t===null?Sy(e,null,n,r):Qr(e,t.child,n,r)}function Zp(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=uf(t,e,n,r,s,i),n=cf(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(ne&&n&&tf(e),e.flags|=1,Re(t,e,r,i),e.child)}function em(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ky(t,e,s,r,i)):(t=Ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(o,r)&&t.ref===e.ref)return Kt(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ky(t,e,n,r,i){if(t!==null&&ws(t.memoizedProps,r)&&t.ref===e.ref)if(qe=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(qe=!0);else return e.lanes=t.lanes,Kt(t,e,i);return Ac(t,e,n,r,i)}function Yy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},J(Or,Ge),Ge|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,J(Or,Ge),Ge|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,J(Or,Ge),Ge|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Or,Ge),Ge|=r;return Re(t,e,i,n),e.child}function Qy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ac(t,e,n,r,i){var s=je(n)?tr:be.current;return s=Kr(e,s),Br(e,i),n=uf(t,e,n,r,s,i),r=cf(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(ne&&r&&tf(e),e.flags|=1,Re(t,e,n,i),e.child)}function tm(t,e,n,r,i){if(je(n)){var s=!0;fa(e)}else s=!1;if(Br(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),_y(e,n,r),Nc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=je(n)?tr:be.current,u=Kr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gp(e,o,r,u),nn=!1;var f=e.memoizedState;o.state=f,ma(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Be.current||nn?(typeof c=="function"&&(Tc(e,n,c,r),l=e.memoizedState),(a=nn||Vp(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=je(n)?tr:be.current,l=Kr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Gp(e,o,r,l),nn=!1,f=e.memoizedState,o.state=f,ma(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Be.current||nn?(typeof g=="function"&&(Tc(e,n,g,r),y=e.memoizedState),(u=nn||Vp(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Oc(t,e,n,r,s,i)}function Oc(t,e,n,r,i,s){Qy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jp(e,n,!1),Kt(t,e,s);r=e.stateNode,lk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&jp(e,n,!0),e.child}function Xy(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),sf(t,e.containerInfo)}function nm(t,e,n,r,i){return Yr(),rf(i),e.flags|=256,Re(t,e,n,r),e.child}var To={dehydrated:null,treeContext:null,retryLane:0};function No(t){return{baseLanes:t,cachePool:null}}function Jy(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ta(i,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=No(n),e.memoizedState=To,t):Lc(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,xo(t,e,n,Error(S(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ta({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Qr(e,t.child,null,n),e.child.memoizedState=No(n),e.memoizedState=To,s);if((e.mode&1)===0)e=xo(t,e,n,null);else if(a.data==="$!")e=xo(t,e,n,Error(S(419)));else if(r=(n&t.childLanes)!==0,qe||r){if(r=he,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,lt(t,r,-1))}yf(),e=xo(t,e,n,Error(S(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=Ck.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,Fe=Mt(a.nextSibling),Ke=e,ne=!0,ft=null,n!==null&&(nt[rt++]=Dt,nt[rt++]=Ft,nt[rt++]=nr,Dt=n.id,Ft=n.overflow,nr=e),e=Lc(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=im(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=To,r):(n=rm(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=im(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=To,r):(n=rm(t,e,r.children,n),e.memoizedState=null,n)}function Lc(t,e){return e=Ta({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rm(t,e,n,r){var i=t.child;return t=i.sibling,n=Tn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function im(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Tn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Tn(o,r):(r=Yn(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function xo(t,e,n,r){return r!==null&&rf(r),Qr(e,t.child,null,n),t=Lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ic(t.return,e,n)}function gu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sm(t,n,e);else if(t.tag===19)sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uk(t,e,n){switch(e.tag){case 3:Xy(e),Yr();break;case 5:ky(e);break;case 1:je(e.type)&&fa(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(ha,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Jy(t,e,n):(J(ie,ie.current&1),t=Kt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Zy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Yy(t,e,n)}return Kt(t,e,n)}function ck(t,e){switch(nf(e),e.tag){case 1:return je(e.type)&&da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),te(Be),te(be),af(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return of(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Xr(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var bo=!1,Hn=!1,dk=typeof WeakSet=="function"?WeakSet:Set,b=null;function Ca(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Mc(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var om=!1;function fk(t,e){if(t=oy(),Qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wc={focusedElem:t,selectionRange:n},b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:dt(e.type,w),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;if(v.nodeType===1)v.textContent="";else if(v.nodeType===9){var _=v.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){Ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=om,om=!1,y}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mc(e,n,s)}i=i.next}while(i!==r)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function am(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(tl,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Mc(e,n,s),r=r.next}while(r!==t)}break;case 1:if(Ca(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){Ue(e,n,o)}break;case 5:Ca(e,n);break;case 4:n_(t,e,n)}}function e_(t){var e=t.alternate;e!==null&&(t.alternate=null,e_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Ss],delete e[Sc],delete e[YS],delete e[QS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function t_(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function um(t){e:{for(var e=t.return;e!==null;){if(t_(e))break e;e=e.return}throw Error(S(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(ps(e,""),n.flags&=-33),n=lm(t),Uc(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=lm(t),Fc(t,n,e);break;default:throw Error(S(161))}}function Fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function n_(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(S(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(am(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?du(a.parentNode,l):a.nodeType===1&&du(a,l),ys(a)):du(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(am(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function vu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:bs(3,e,e.return),ul(3,e),bs(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&xv(n,r),cc(t,i),e=cc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Ov(n,a):o==="dangerouslySetInnerHTML"?Rv(n,a):o==="children"?ps(n,a):Fd(n,o,a,e)}switch(t){case"input":sc(n,r);break;case"textarea":bv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Fr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Fr(n,!!r.multiple,r.defaultValue,!0):Fr(n,!!r.multiple,r.multiple?[]:"",!1))}n[Ss]=r}}return;case 6:if(e.stateNode===null)throw Error(S(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&ys(e.stateNode.containerInfo);return;case 12:return;case 13:cm(e);return;case 19:cm(e);return;case 17:return}throw Error(S(163))}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dk),e.forEach(function(r){var i=Ek.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hk(t,e){for(b=e;b!==null;){e=b;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{n_(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(k){Ue(i,e,k)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,b=n;else for(;b!==null;){e=b;try{var o=e.flags;if(o&32&&ps(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(mf=de())}break;case 22:var c=e.memoizedState!==null,d=e.alternate,f=d!==null&&d.memoizedState!==null;n=e;e:{r=n,i=c;for(var g=null,y=r;;){if(y.tag===5){if(g===null){g=y;var w=y.stateNode;if(i){var x=w.style;typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"}else{var m=y.stateNode,p=y.memoizedProps.style,v=p!=null&&p.hasOwnProperty("display")?p.display:null;m.style.display=Av("display",v)}}}else if(y.tag===6)g===null&&(y.stateNode.nodeValue=i?"":y.memoizedProps);else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===r)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}if(c&&!f&&(n.mode&1)!==0){b=n;for(var _=n.child;_!==null;){for(n=b=_;b!==null;){r=b;var E=r.child;switch(r.tag){case 0:case 11:case 14:case 15:bs(4,r,r.return);break;case 1:Ca(r,r.return);var N=r.stateNode;if(typeof N.componentWillUnmount=="function"){var C=r.return;try{N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(k){Ue(r,C,k)}}break;case 5:Ca(r,r.return);break;case 22:if(r.memoizedState!==null){fm(n);continue}}E!==null?(E.return=r,b=E):fm(n)}_=_.sibling}}}switch(o&4102){case 2:um(e),e.flags&=-3;break;case 6:um(e),e.flags&=-3,vu(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,vu(e.alternate,e);break;case 4:vu(e.alternate,e)}}catch(k){Ue(e,e.return,k)}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}}function pk(t,e,n){b=t,r_(t)}function r_(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Hn;a=bo;var u=Hn;if(bo=o,(Hn=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?hm(i):l!==null?(l.return=o,b=l):hm(i);for(;s!==null;)b=s,r_(s),s=s.sibling;b=i,bo=a,Hn=u}dm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,b=s):dm(t)}}function dm(t){for(;b!==null;){var e=b;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Hn||ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Hn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ys(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Hn||e.flags&512&&Dc(e)}catch(f){Ue(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function fm(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function hm(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{Dc(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{Dc(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var mk=Math.ceil,Ea=Xt.ReactCurrentDispatcher,hf=Xt.ReactCurrentOwner,at=Xt.ReactCurrentBatchConfig,V=0,he=null,fe=null,Se=0,Ge=0,Or=Rn(0),pe=0,Ps=null,Zr=0,cl=0,pf=0,ss=null,De=null,mf=0,ei=1/0,Sa=!1,zc=null,yn=null,Po=!1,cn=null,ka=0,os=0,$c=null,Go=-1,qo=0;function Ae(){return(V&6)!==0?de():Go!==-1?Go:Go=de()}function _n(t){return(t.mode&1)===0?1:(V&2)!==0&&Se!==0?Se&-Se:JS.transition!==null?(qo===0&&(t=go,go<<=1,(go&4194240)===0&&(go=64),qo=t),qo):(t=q,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t)}function lt(t,e,n){if(50<os)throw os=0,$c=null,Error(S(185));var r=dl(t,e);return r===null?null:(Hs(r,e,n),((V&2)===0||r!==he)&&(r===he&&((V&2)===0&&(cl|=e),pe===4&&sn(r,Se)),We(r,n),e===1&&V===0&&(t.mode&1)===0&&(ei=de()+500,ol&&An())),r)}function dl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function We(t,e){var n=t.callbackNode;JE(t,e);var r=aa(t,t===he?Se:0);if(r===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?XS(pm.bind(null,t)):gy(pm.bind(null,t)),qS(function(){V===0&&An()}),n=null;else{switch(Vv(r)){case 1:n=jd;break;case 4:n=Wv;break;case 16:n=oa;break;case 536870912:n=Hv;break;default:n=oa}n=d_(n,i_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i_(t,e){if(Go=-1,qo=0,(V&6)!==0)throw Error(S(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=aa(t,t===he?Se:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ia(t,r);else{e=r;var i=V;V|=2;var s=o_();(he!==t||Se!==e)&&(ei=de()+500,Kn(t,e));do try{yk();break}catch(a){s_(t,a)}while(1);Jd(),Ea.current=s,V=i,fe!==null?e=0:(he=null,Se=0,e=pe)}if(e!==0){if(e===2&&(i=mc(t),i!==0&&(r=i,e=Bc(t,i))),e===1)throw n=Ps,Kn(t,0),sn(t,r),We(t,de()),n;if(e===6)sn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!gk(i)&&(e=Ia(t,r),e===2&&(s=mc(t),s!==0&&(r=s,e=Bc(t,s))),e===1))throw n=Ps,Kn(t,0),sn(t,r),We(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Fn(t,De);break;case 3:if(sn(t,r),(r&130023424)===r&&(e=mf+500-de(),10<e)){if(aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(Fn.bind(null,t,De),e);break}Fn(t,De);break;case 4:if(sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){t.timeoutHandle=Ec(Fn.bind(null,t,De),r);break}Fn(t,De);break;case 5:Fn(t,De);break;default:throw Error(S(329))}}}return We(t,de()),t.callbackNode===n?i_.bind(null,t):null}function Bc(t,e){var n=ss;return t.current.memoizedState.isDehydrated&&(Kn(t,e).flags|=256),t=Ia(t,e),t!==2&&(e=De,De=n,e!==null&&jc(e)),t}function jc(t){De===null?De=t:De.push.apply(De,t)}function gk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sn(t,e){for(e&=~pf,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function pm(t){if((V&6)!==0)throw Error(S(327));jr();var e=aa(t,0);if((e&1)===0)return We(t,de()),null;var n=Ia(t,e);if(t.tag!==0&&n===2){var r=mc(t);r!==0&&(e=r,n=Bc(t,r))}if(n===1)throw n=Ps,Kn(t,0),sn(t,e),We(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fn(t,De),We(t,de()),null}function gf(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ei=de()+500,ol&&An())}}function rr(t){cn!==null&&cn.tag===0&&(V&6)===0&&jr();var e=V;V|=1;var n=at.transition,r=q;try{if(at.transition=null,q=1,t)return t()}finally{q=r,at.transition=n,V=e,(V&6)===0&&An()}}function vf(){Ge=Or.current,te(Or)}function Kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GS(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Xr(),te(Be),te(be),af();break;case 5:of(r);break;case 4:Xr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Zd(r.type._context);break;case 22:case 23:vf()}n=n.return}if(he=t,fe=t=Tn(t.current,null),Se=Ge=e,pe=0,Ps=null,pf=cl=Zr=0,De=ss=null,Ct!==null){for(e=0;e<Ct.length;e++)if(n=Ct[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ct=null}return t}function s_(t,e){do{var n=fe;try{if(Jd(),Ho.current=wa,_a){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_a=!1}if(Jr=0,ve=xe=le=null,is=!1,Ts=0,hf.current=null,n===null||n.return===null){pe=1,Ps=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Xp(o);if(g!==null){g.flags&=-257,Jp(g,o,a,s,e),g.mode&1&&Qp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if((e&1)===0){Qp(s,u,e),yf();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var x=Xp(o);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Jp(x,o,a,s,e),rf(l);break e}}s=l,pe!==4&&(pe=2),ss===null?ss=[s]:ss.push(s),l=ff(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=Wy(a,l,e);Wp(a,m);break e;case 1:s=l;var p=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yn===null||!yn.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=Hy(a,s,e);Wp(a,_);break e}}a=a.return}while(a!==null)}l_(n)}catch(E){e=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function o_(){var t=Ea.current;return Ea.current=wa,t===null?wa:t}function yf(){(pe===0||pe===3||pe===2)&&(pe=4),he===null||(Zr&268435455)===0&&(cl&268435455)===0||sn(he,Se)}function Ia(t,e){var n=V;V|=2;var r=o_();he===t&&Se===e||Kn(t,e);do try{vk();break}catch(i){s_(t,i)}while(1);if(Jd(),V=n,Ea.current=r,fe!==null)throw Error(S(261));return he=null,Se=0,pe}function vk(){for(;fe!==null;)a_(fe)}function yk(){for(;fe!==null&&!WE();)a_(fe)}function a_(t){var e=c_(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?l_(t):fe=e,hf.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ak(n,e,Ge),n!==null){fe=n;return}}else{if(n=ck(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,fe=null;return}}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);pe===0&&(pe=5)}function Fn(t,e){var n=q,r=at.transition;try{at.transition=null,q=1,_k(t,e,n)}finally{at.transition=r,q=n}return null}function _k(t,e,n){do jr();while(cn!==null);if((V&6)!==0)throw Error(S(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(ZE(t,s),t===he&&(fe=he=null,Se=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Po||(Po=!0,d_(oa,function(){return jr(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=at.transition,at.transition=null;var o=q;q=1;var a=V;V|=4,hf.current=null,fk(t,r),hk(t,r),zS(wc),wc=null,t.current=r,pk(r),HE(),V=a,q=o,at.transition=s}else t.current=r;if(Po&&(Po=!1,cn=t,ka=i),s=t.pendingLanes,s===0&&(yn=null),qE(r.stateNode),We(t,de()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(Sa)throw Sa=!1,t=zc,zc=null,t;return(ka&1)!==0&&t.tag!==0&&jr(),s=t.pendingLanes,(s&1)!==0?t===$c?os++:(os=0,$c=t):os=0,An(),null}function jr(){if(cn!==null){var t=Vv(ka),e=at.transition,n=q;try{if(at.transition=null,q=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,ka=0,(V&6)!==0)throw Error(S(331));var i=V;for(V|=4,b=t.current;b!==null;){var s=b,o=s.child;if((b.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var f=c.sibling,g=c.return;if(e_(c),c===u){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}b=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,b=v;else e:for(o=p;b!==null;){if(a=b,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(E){Ue(a,a.return,E)}if(a===o){b=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,b=_;break e}b=a.return}}if(V=i,An(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(tl,t)}catch{}r=!0}return r}finally{q=n,at.transition=e}}return!1}function mm(t,e,n){e=ff(n,e),e=Wy(t,e,1),vn(t,e),e=Ae(),t=dl(t,1),t!==null&&(Hs(t,1,e),We(t,e))}function Ue(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=ff(n,t),t=Hy(e,t,1),vn(e,t),t=Ae(),e=dl(e,1),e!==null&&(Hs(e,1,t),We(e,t));break}}e=e.return}}function wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,he===t&&(Se&n)===n&&(pe===4||pe===3&&(Se&130023424)===Se&&500>de()-mf?Kn(t,0):pf|=n),We(t,e)}function u_(t,e){e===0&&((t.mode&1)===0?e=1:(e=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var n=Ae();t=dl(t,e),t!==null&&(Hs(t,e,n),We(t,n))}function Ck(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u_(t,n)}function Ek(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),u_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)qe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return qe=!1,uk(t,e,n);qe=(t.flags&131072)!==0}else qe=!1,ne&&(e.flags&1048576)!==0&&wy(e,va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Kr(e,be.current);Br(e,n),i=uf(null,e,r,t,i,n);var s=cf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,fa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(e),i.updater=al,e.stateNode=i,i._reactInternals=e,Nc(e,r,t,n),e=Oc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&tf(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kk(r),t=dt(r,t),i){case 0:e=Ac(null,e,r,t,n);break e;case 1:e=tm(null,e,r,t,n);break e;case 11:e=Zp(null,e,r,t,n);break e;case 14:e=em(null,e,r,dt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Ac(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),tm(t,e,r,i,n);case 3:e:{if(Xy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vy(t,e),ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(S(423)),e=nm(t,e,r,n,i);break e}else if(r!==i){i=Error(S(424)),e=nm(t,e,r,n,i);break e}else for(Fe=Mt(e.stateNode.containerInfo.firstChild),Ke=e,ne=!0,ft=null,n=Sy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Kt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return ky(e),t===null&&bc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=32),Qy(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&bc(e),null;case 13:return Jy(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Zp(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(ha,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!Be.current){e=Kt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ic(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ic(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=ut(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=dt(r,e.pendingProps),i=dt(r.type,i),em(t,e,r,i,n);case 15:return Ky(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,je(r)?(t=!0,fa(e)):t=!1,Br(e,n),_y(e,r,i),Nc(e,r,i,n),Oc(null,e,r,!0,t,n);case 19:return Zy(t,e,n);case 22:return Yy(t,e,n)}throw Error(S(156,e.tag))};function d_(t,e){return jv(t,e)}function Sk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new Sk(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kk(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===$d)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return Yn(n.children,i,s,e);case Ud:o=8,i|=8;break;case ec:return t=it(12,n,e,i|2),t.elementType=ec,t.lanes=s,t;case tc:return t=it(13,n,e,i),t.elementType=tc,t.lanes=s,t;case nc:return t=it(19,n,e,i),t.elementType=nc,t.lanes=s,t;case Iv:return Ta(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sv:o=10;break e;case kv:o=9;break e;case zd:o=11;break e;case $d:o=14;break e;case tn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function Ta(t,e,n,r){return t=it(22,t,r,e),t.elementType=Iv,t.lanes=n,t.stateNode={},t}function yu(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,a,l){return t=new Ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},ef(s),t}function Tk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function f_(t){if(!t)return In;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(je(n))return my(t,n,e)}return e}function h_(t,e,n,r,i,s,o,a,l){return t=wf(n,r,!0,t,i,s,o,a,l),t.context=f_(null),n=t.current,r=Ae(),i=_n(n),s=Bt(r,i),s.callback=e!=null?e:null,vn(n,s),t.current.lanes=i,Hs(t,i,r),We(t,r),t}function fl(t,e,n,r){var i=e.current,s=Ae(),o=_n(i);return n=f_(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),vn(i,e),t=lt(i,o,s),t!==null&&Wo(t,i,o),o}function Na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function Nk(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}hl.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));fl(t,e,null,null)};hl.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){fl(null,t,null,null)}),e[qt]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rn.length&&e!==0&&e<rn[n].priority;n++);rn.splice(n,0,t),n===0&&Qv(t)}};function Sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function xk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Na(o);s.call(u)}}var o=h_(e,r,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[qt]=o.current,Cs(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Na(l);a.call(u)}}var l=wf(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[qt]=l.current,Cs(t.nodeType===8?t.parentNode:t),rr(function(){fl(e,l,n,r)}),l}function ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Na(o);a.call(l)}}fl(e,o,t,i)}else o=xk(n,e,t,i,r);return Na(o)}Gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vi(e.pendingLanes);n!==0&&(Wd(e,n|1),We(e,de()),(V&6)===0&&(ei=de()+500,An()))}break;case 13:var r=Ae();rr(function(){return lt(t,1,r)}),Cf(t,1)}};Hd=function(t){if(t.tag===13){var e=Ae();lt(t,134217728,e),Cf(t,134217728)}};qv=function(t){if(t.tag===13){var e=Ae(),n=_n(t);lt(t,n,e),Cf(t,n)}};Kv=function(){return q};Yv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};fc=function(t,e,n){switch(e){case"input":if(sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sl(r);if(!i)throw Error(S(90));Nv(r),sc(r,i)}}}break;case"textarea":bv(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};Dv=gf;Fv=rr;var bk={usingClientEntryPoint:!1,Events:[Gs,xr,sl,Lv,Mv,gf]},Fi={findFiberByHostInstance:jn,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},Pk={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$v(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||Nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{tl=Ro.inject(Pk),Et=Ro}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bk;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(e))throw Error(S(200));return Tk(t,e,null,n)};Ze.createRoot=function(t,e){if(!Sf(t))throw Error(S(299));var n=!1,r="",i=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[qt]=e.current,Cs(t.nodeType===8?t.parentNode:t),new Ef(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=$v(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return rr(t)};Ze.hydrate=function(t,e,n){if(!pl(e))throw Error(S(200));return ml(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!Sf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=p_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[qt]=e.current,Cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hl(e)};Ze.render=function(t,e,n){if(!pl(e))throw Error(S(200));return ml(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!pl(t))throw Error(S(40));return t._reactRootContainer?(rr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=gf;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ml(t,e,n,!1,r)};Ze.version="18.0.0-fc46dba67-20220329";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(t){console.error(t)}}m_(),yv.exports=Ze;var ym=yv.exports;Ju.createRoot=ym.createRoot,Ju.hydrateRoot=ym.hydrateRoot;const Rk=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});function Ak(t){return t&&Rk.format(t)}function g_(t){return e=>e.keyCode===13&&t&&t(e)}const v_="https://sds-butterfly-api.herokuapp.com";async function y_({route:t,options:e={}}){const n=`${v_}${t}`;return await(await fetch(n,e)).json()}function Ok({url:t,options:e={},deps:n=[],isValid:r=!0}){const[i,s]=P.exports.useState(null),[o,a]=P.exports.useState(null);return P.exports.useEffect(()=>{async function l(){try{const c=await(await fetch(t,e)).json();s(c)}catch(u){a(u)}}r&&l()},n),[i,o]}function Lk(n){var r=n,{route:t}=r,e=Hl(r,["route"]);return Ok(ce({url:`${v_}${t}`},e))}/**
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
 */const __={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+__.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const w_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},C_=function(t){const e=w_(t);return kf.encodeByteArray(e,!0)},E_=function(t){return C_(t).replace(/\./g,"")},Wc=function(t){try{return kf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dk(t){return S_(void 0,t)}function S_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fk(n)||(t[n]=S_(t[n],e[n]));return t}function Fk(t){return t!=="__proto__"}/**
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
 */function Pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function If(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Uk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zk(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I_(){return __.NODE_ADMIN===!0}function $k(){return typeof indexedDB=="object"}function Bk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const jk="FirebaseError";class gi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jk,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gi(i,a,r)}}function Wk(t,e){return t.replace(Hk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hk=/\{\$([^}]+)}/g;/**
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
 */function Rs(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const T_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Rs(Wc(s[0])||""),n=Rs(Wc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Vk=function(t){const e=T_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gk=function(t){const e=T_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_m(s)&&_m(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _m(t){return t!==null&&typeof t=="object"}/**
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
 */class qk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Kk(t,e){const n=new Yk(t,e);return n.subscribe.bind(n)}class Yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wu),i.error===void 0&&(i.error=wu),i.complete===void 0&&(i.complete=wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wu(){}function Qs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Xk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Yi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class wm{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new N_(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new x_(this._db.createObjectStore(e,n))}close(){this._db.close()}}class N_{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new x_(this._transaction.objectStore(e))}}class x_{constructor(e){this._store=e}index(e){return new Cm(this._store.index(e))}createIndex(e,n,r){return new Cm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Yi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Yi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Yi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Yi(e,"Error clearing IndexedDB object store")}}class Cm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Yi(n,"Error reading from IndexedDB")}}function Jk(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new wm(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new wm(s.result),o.oldVersion,o.newVersion,new N_(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class Zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ks;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tI(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eI(t){return t===Un?void 0:t}function tI(t){return t.instantiationMode==="EAGER"}/**
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
 */class nI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const rI={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},iI=Y.INFO,sI={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},oI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tf{constructor(e){this.name=e,this._logLevel=iI,this._logHandler=oI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}/**
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
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",Em="0.7.21";/**
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
 */const Nf=new Tf("@firebase/app"),uI="@firebase/app-compat",cI="@firebase/analytics-compat",dI="@firebase/analytics",fI="@firebase/app-check-compat",hI="@firebase/app-check",pI="@firebase/auth",mI="@firebase/auth-compat",gI="@firebase/database",vI="@firebase/database-compat",yI="@firebase/functions",_I="@firebase/functions-compat",wI="@firebase/installations",CI="@firebase/installations-compat",EI="@firebase/messaging",SI="@firebase/messaging-compat",kI="@firebase/performance",II="@firebase/performance-compat",TI="@firebase/remote-config",NI="@firebase/remote-config-compat",xI="@firebase/storage",bI="@firebase/storage-compat",PI="@firebase/firestore",RI="@firebase/firestore-compat",AI="firebase",OI="9.6.11";/**
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
 */const b_="[DEFAULT]",LI={[Vc]:"fire-core",[uI]:"fire-core-compat",[dI]:"fire-analytics",[cI]:"fire-analytics-compat",[hI]:"fire-app-check",[fI]:"fire-app-check-compat",[pI]:"fire-auth",[mI]:"fire-auth-compat",[gI]:"fire-rtdb",[vI]:"fire-rtdb-compat",[yI]:"fire-fn",[_I]:"fire-fn-compat",[wI]:"fire-iid",[CI]:"fire-iid-compat",[EI]:"fire-fcm",[SI]:"fire-fcm-compat",[kI]:"fire-perf",[II]:"fire-perf-compat",[TI]:"fire-rc",[NI]:"fire-rc-compat",[xI]:"fire-gcs",[bI]:"fire-gcs-compat",[PI]:"fire-fst",[RI]:"fire-fst-compat","fire-js":"fire-js",[AI]:"fire-js-all"};/**
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
 */const Pa=new Map,Gc=new Map;function MI(t,e){try{t.container.addComponent(e)}catch(n){Nf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Gc.has(e))return Nf.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Pa.values())MI(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const DI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},sr=new Ys("app","Firebase",DI);/**
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
 */class FI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=OI;function UI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:b_,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw sr.create("bad-app-name",{appName:String(r)});const i=Pa.get(r);if(i){if(ba(t,i.options)&&ba(n,i.config))return i;throw sr.create("duplicate-app",{appName:r})}const s=new nI(r);for(const a of Gc.values())s.addComponent(a);const o=new FI(t,n,s);return Pa.set(r,o),o}function P_(t=b_){const e=Pa.get(t);if(!e)throw sr.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=LI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nf.warn(a.join(" "));return}ni(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zI="firebase-heartbeat-database",$I=1,As="firebase-heartbeat-store";let Cu=null;function R_(){return Cu||(Cu=Jk(zI,$I,(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}).catch(t=>{throw sr.create("storage-open",{originalErrorMessage:t.message})})),Cu}async function BI(t){try{return(await R_()).transaction(As).objectStore(As).get(A_(t))}catch(e){throw sr.create("storage-get",{originalErrorMessage:e.message})}}async function Sm(t,e){try{const r=(await R_()).transaction(As,"readwrite");return await r.objectStore(As).put(e,A_(t)),r.complete}catch(n){throw sr.create("storage-set",{originalErrorMessage:n.message})}}function A_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jI=1024,WI=30*24*60*60*1e3;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=km();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=km(),{heartbeatsToSend:n,unsentEntries:r}=VI(this._heartbeatsCache.heartbeats),i=E_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function km(){return new Date().toISOString().substring(0,10)}function VI(t,e=jI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Im(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Im(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?Bk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Im(t){return E_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qI(t){ni(new ir("platform-logger",e=>new aI(e),"PRIVATE")),ni(new ir("heartbeat",e=>new HI(e),"PRIVATE")),wn(Vc,Em,t),wn(Vc,Em,"esm2017"),wn("fire-js","")}qI("");var KI="firebase",YI="9.6.11";/**
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
 */wn(KI,YI,"app");const QI="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",XI="sds-butterfly.firebaseapp.com",JI="sds-butterfly",ZI="sds-butterfly.appspot.com",e2="265457992927",t2="1:265457992927:web:f8b8781a13dd1e4b3fd56a";function n2(){return UI({apiKey:QI,authDomain:XI,projectId:JI,storageBucket:ZI,messagingSenderId:e2,appId:t2})}const r2=P.exports.createContext();function i2(t,e,n=null){const r=n||`${e}s`;return t===1?`${t} ${e}`:`${t} ${r}`}var vl={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s2=P.exports,o2=Symbol.for("react.element"),a2=Symbol.for("react.fragment"),l2=Object.prototype.hasOwnProperty,u2=s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c2={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)l2.call(e,r)&&!c2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:o2,type:t,key:s,ref:o,props:i,_owner:u2.current}}yl.Fragment=a2;yl.jsx=O_;yl.jsxs=O_;vl.exports=yl;const h=vl.exports.jsx,I=vl.exports.jsxs,mr=vl.exports.Fragment;function d2(){return h("div",{className:"Layout",children:h(bw,{})})}function f2(){return h("div",{className:"Layout Page NotFoundPage FullHeight VerticalCenter",children:I("div",{children:[h("h1",{className:"BigTitle",children:"Page Not Found"}),h("p",{children:"Sorry about that!"}),h(Ye,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}var L_={exports:{}},h2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",p2=h2,m2=p2;function M_(){}function D_(){}D_.resetWarningCache=M_;var g2=function(){function t(r,i,s,o,a,l){if(l!==m2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:D_,resetWarningCache:M_};return n.PropTypes=n,n};L_.exports=g2();var W=L_.exports;function Tm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tm(Object(n),!0).forEach(function(r){Lr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ra(t){return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(t)}function Lr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function F_(t,e){if(t==null)return{};var n=v2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function qc(t){return y2(t)||_2(t)||w2(t)||C2()}function y2(t){if(Array.isArray(t))return Kc(t)}function _2(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w2(t,e){if(!!t){if(typeof t=="string")return Kc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kc(t,e)}}function Kc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E2(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,w=t.listItem,x=t.flip,m=t.size,p=t.rotation,v=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":w,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Lr(e,"fa-".concat(m),typeof m!="undefined"&&m!==null),Lr(e,"fa-rotate-".concat(p),typeof p!="undefined"&&p!==null&&p!==0),Lr(e,"fa-pull-".concat(v),typeof v!="undefined"&&v!==null),Lr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function S2(t){return t=t-0,t===t}function U_(t){return S2(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var k2=["style"];function I2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function T2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=U_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[I2(i)]=s:e[i]=s,e},{})}function z_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return z_(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=T2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[U_(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=F_(n,k2);return i.attrs.style=dn(dn({},i.attrs.style),o),t.apply(void 0,[e.tag,dn(dn({},i.attrs),a)].concat(qc(r)))}var $_=!1;try{$_=!0}catch{}function N2(){if(!$_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Nm(t){if(t&&Ra(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xu.icon)return Xu.icon(t);if(t===null)return null;if(t&&Ra(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Eu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lr({},t,e):{}}var x2=["forwardedRef"];function Xe(t){var e=t.forwardedRef,n=F_(t,x2),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=Nm(r),d=Eu("classes",[].concat(qc(E2(n)),qc(o.split(" ")))),f=Eu("transform",typeof n.transform=="string"?Xu.transform(n.transform):n.transform),g=Eu("mask",Nm(i)),y=yE(c,dn(dn(dn(dn({},d),f),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!y)return N2("Could not find icon",c),null;var w=y.abstract,x={ref:e};return Object.keys(n).forEach(function(m){Xe.defaultProps.hasOwnProperty(m)||(x[m]=n[m])}),b2(w[0],x)}Xe.displayName="FontAwesomeIcon";Xe.propTypes={beat:W.bool,border:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf(["horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};Xe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var b2=z_.bind(null,Dg.createElement);const yi=a=>{var l=a,{label:t,primary:e=!1,iconBefore:n=null,iconAfter:r=null,role:i="button",tabIndex:s=0}=l,o=Hl(l,["label","primary","iconBefore","iconAfter","role","tabIndex"]);const c=["Button",e?"Primary":""].join(" "),d=n&&h(Xe,{icon:n,className:"IconBefore"}),f=r&&h(Xe,{icon:r,className:"IconAfter"}),g=Ve(ce({},o),{className:c,role:i,tabIndex:s,onKeyDown:(o==null?void 0:o.onKeyDown)||g_(o==null?void 0:o.onClick)});return I("span",Ve(ce({},g),{children:[d,h("span",{children:t}),f]}))};function _l({hasError:t,children:e}){return t&&h("div",{className:"Card Full Error",children:e})}function P2({visible:t,classes:e=[],children:n}){const[r,i]=P.exports.useState(t||!1),s=r?"Block":"Hidden";return P.exports.useEffect(()=>{i(t)},[t]),I("div",{className:`Notification ${e.join(" ")} ${s}`,children:[h("div",{className:"CloseHolder",children:h("span",{className:"Close",role:"button",tabIndex:0,onClick:()=>{i(!1)},onKeyDown:g_(()=>{i(!1)}),children:"x"})}),n]})}function B_({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return n&&h("div",{className:"UserDisc",children:h("img",{src:n,alt:r,className:"Image"})})}function Yc({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return I("div",{className:"UserTile",children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:r,className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:e})})]})}var R2="/butterfly/assets/logo-butterfly-rainbow.png";function bf({size:t,align:e}){return h("div",{className:`Logo ${t} ${e}`,children:h("img",{alt:"Butterfly Logo",src:R2})})}const xm="@firebase/database",bm="0.12.8";/**
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
 */let j_="";function A2(t){j_=t}/**
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
 */class O2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class L2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const W_=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new O2(e)}}catch{}return new L2},Vn=W_("localStorage"),Qc=W_("sessionStorage");/**
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
 */const Wr=new Tf("@firebase/database"),M2=function(){let t=1;return function(){return t++}}(),H_=function(t){const e=Xk(t),n=new qk;n.update(e);const r=n.digest();return kf.encodeByteArray(r)},Js=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Js.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let Qn=null,Pm=!0;const D2=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wr.logLevel=Y.VERBOSE,Qn=Wr.log.bind(Wr),e&&Qc.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,Qc.remove("logging_enabled"))},Ee=function(...t){if(Pm===!0&&(Pm=!1,Qn===null&&Qc.get("logging_enabled")===!0&&D2(!0)),Qn){const e=Js.apply(null,t);Qn(e)}},Zs=function(t){return function(...e){Ee(t,...e)}},Xc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Js(...t);Wr.error(e)},or=function(...t){const e=`FIREBASE FATAL ERROR: ${Js(...t)}`;throw Wr.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Js(...t);Wr.warn(e)},F2=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},U2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ar="[MIN_NAME]",Nn="[MAX_NAME]",gr=function(t,e){if(t===e)return 0;if(t===ar||e===Nn)return-1;if(e===ar||t===Nn)return 1;{const n=Rm(t),r=Rm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},z2=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},Rf=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=Rf(t[e[r]]);return n+="}",n},V_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const G_=function(t){T(!Pf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},$2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},B2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function j2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const W2=new RegExp("^-?(0*)\\d{1,10}$"),H2=-2147483648,V2=2147483647,Rm=function(t){if(W2.test(t)){const e=Number(t);if(e>=H2&&e<=V2)return e}return null},_i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},G2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},as=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class q2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class K2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jc.OWNER="owner";/**
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
 */const Af="5",q_="v",K_="s",Y_="r",Q_="f",X_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,J_="ls",Y2="p",Zc="ac",Z_="websocket",e0="long_polling";/**
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
 */class Q2{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function X2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function t0(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Z_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===e0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);X2(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class J2{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dk(this.counters_)}}/**
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
 */const Su={},ku={};function Of(t){const e=t.toString();return Su[e]||(Su[e]=new J2),Su[e]}function Z2(t,e){const n=t.toString();return ku[n]||(ku[n]=e()),ku[n]}/**
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
 */class eT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&_i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Am="start",tT="close",nT="pLPCommand",rT="pRTLPCB",n0="id",r0="pw",i0="ser",iT="cb",sT="seg",oT="ts",aT="d",lT="dframe",s0=1870,o0=30,uT=s0-o0,cT=25e3,dT=3e4;class Mr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zs(e),this.stats_=Of(n),this.urlFn=l=>(this.appCheckToken&&(l[Zc]=this.appCheckToken),t0(n,e0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dT)),U2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Am)this.id=a,this.password=l;else if(o===tT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Am]="t",r[i0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[q_]=Af,this.transportSessionId&&(r[K_]=this.transportSessionId),this.lastSessionId&&(r[J_]=this.lastSessionId),this.applicationId&&(r[Y2]=this.applicationId),this.appCheckToken&&(r[Zc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&X_.test(location.hostname)&&(r[Y_]=Q_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!$2()&&!B2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n),i=V_(r,uT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lT]="t",r[n0]=e,r[r0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=M2(),window[nT+this.uniqueCallbackIdentifier]=e,window[rT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lf.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[n0]=this.myID,e[r0]=this.myPW,e[i0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o0+r.length<=s0;){const o=this.pendingSegs.shift();r=r+"&"+sT+i+"="+o.seg+"&"+oT+i+"="+o.ts+"&"+aT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const fT=16384,hT=45e3;let Aa=null;typeof MozWebSocket!="undefined"?Aa=MozWebSocket:typeof WebSocket!="undefined"&&(Aa=WebSocket);class ht{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zs(this.connId),this.stats_=Of(n),this.connURL=ht.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[q_]=Af,typeof location!="undefined"&&location.hostname&&X_.test(location.hostname)&&(s[Y_]=Q_),n&&(s[K_]=n),r&&(s[J_]=r),i&&(s[Zc]=i),t0(e,Z_,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{if(!I_()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Aa(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Aa!==null&&!ht.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=V_(n,fT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
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
 */class Mf{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Mr,ht]}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of Mf.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const pT=6e4,mT=5e3,gT=10*1024,vT=100*1024,Iu="t",Om="d",yT="s",Lm="r",_T="e",Mm="o",Dm="a",Fm="n",Um="p",wT="h";class CT{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zs("c:"+this.id+":"),this.transportManager_=new Mf(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=as(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Iu in e){const n=e[Iu];n===Dm?this.upgradeIfSecondaryHealthy_():n===Lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(Iu,e);if(Om in e){const r=e[Om];if(n===wT)this.onHandshake_(r);else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yT?this.onConnectionShutdown_(r):n===Lm?this.onReset_(r):n===_T?Xc("Server Error: "+r):n===Mm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Af!==r&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),as(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):as(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class a0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class l0{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Oa extends l0{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!If()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Oa}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zm=32,$m=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new K("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Df(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ET(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Os(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function u0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return ze(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ST(t,e){const n=Os(t,0),r=Os(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=gr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ff(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kT{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gl(this.parts_[r]);c0(this)}}function IT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gl(e),c0(t)}function TT(t){const e=t.parts_.pop();t.byteLength_-=gl(e),t.parts_.length>0&&(t.byteLength_-=1)}function c0(t){if(t.byteLength_>$m)throw new Error(t.errorPrefix_+"has a key path longer than "+$m+" bytes ("+t.byteLength_+").");if(t.parts_.length>zm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zm+") or object contains a cycle "+zn(t))}function zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Uf extends l0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Uf}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zi=1e3,NT=60*5*1e3,xT=3*1e3,Bm=30*1e3,bT=1.3,PT=3e4,RT="server_kill",jm=3;class jt extends a0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=Zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=NT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!I_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Oa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ks,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},xT),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xc("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PT&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new CT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(RT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Oe(d),l())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hc(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jm&&(this.reconnectDelay_=Bm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+j_.replace(/\./g,"-")]=1,If()?e["framework.cordova"]=1:k_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oa.getInstance().currentlyOnline();return Hc(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
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
 */class wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(ar,e),i=new j(ar,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Ao;class d0 extends wl{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return gr(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Nn,Ao)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ao)}toString(){return".key"}}const Xn=new d0;/**
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
 */class Oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ye.RED,this.left=i!=null?i:$e.EMPTY_NODE,this.right=s!=null?s:$e.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class AT{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new AT;/**
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
 */function OT(t,e){return gr(t.name,e.name)}function zf(t,e){return gr(t,e)}/**
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
 */let ed;function LT(t){ed=t}const f0=function(t){return typeof t=="number"?"number:"+G_(t):"string:"+t},h0=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else T(t===ed||t.isEmpty(),"priority of unexpected type.");T(t===ed||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Wm;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),h0(this.priorityNode_)}static set __childrenNodeConstructor(e){Wm=e}static get __childrenNodeConstructor(){return Wm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:$(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=G_(this.value_):e+=this.value_,this.lazyHash_=H_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let p0,m0;function MT(t){p0=t}function DT(t){m0=t}class FT extends wl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Nn,new ge("[PRIORITY-POST]",m0))}makePost(e,n){const r=p0(e);return new j(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new FT;/**
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
 */const UT=Math.log(2);class zT{constructor(e){const n=s=>parseInt(Math.log(s)/UT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const La=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ye(f,d.node,ye.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),w=i(g+1,u);return d=t[g],f=n?n(d):d,new ye(f,d.node,ye.BLACK,y,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,w){const x=d-y,m=d;d-=y;const p=i(x+1,m),v=t[x],_=n?n(v):v;g(new ye(_,v.node,w,null,p))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));w?f(x,ye.BLACK):(f(x,ye.BLACK),f(x,ye.RED))}return c},o=new zT(t.length),a=s(o);return new $e(r||e,a)};/**
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
 */let Tu;const wr={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(wr&&se,"ChildrenNode.ts has not been loaded"),Tu=Tu||new Ut({".priority":wr},{".priority":se}),Tu}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=La(r,e.getCompare()):a=wr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Ut(c,u)}addToIndexes(e,n){const r=xa(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===wr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),La(a,o.getCompare())}else return wr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=xa(this.indexes_,i=>{if(i===wr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let $i;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&h0(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $i||($i=new L(new $e(zf),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$i:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{T($(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f0(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":H_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eo?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $T extends L{constructor(){super(new $e(zf),L.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const eo=new $T;Object.defineProperties(j,{MIN:{value:new j(ar,L.EMPTY_NODE)},MAX:{value:new j(Nn,eo)}});d0.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;LT(eo);DT(eo);/**
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
 */const BT=!0;function _e(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,_e(e))}if(!(t instanceof Array)&&BT){const n=[];let r=!1;if(Ie(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=La(n,OT,o=>o.name,zf);if(r){const o=La(n,se.getCompare());return new L(s,_e(e),new Ut({".priority":o},{".priority":se}))}else return new L(s,_e(e),Ut.Default)}else{let n=L.EMPTY_NODE;return Ie(t,(r,i)=>{if(Pt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}MT(_e);/**
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
 */class $f extends wl{constructor(e){super(),this.indexPath_=e,T(!B(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,eo);return new j(Nn,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
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
 */class jT extends wl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=_e(e);return new j(n,r)}toString(){return".value"}}const g0=new jT;/**
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
 */const Hm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",WT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Hm.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Hm.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function v0(t){return{type:"value",snapshotNode:t}}function ri(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ls(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ri(n,r)):o.trackChildChange(Ms(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ls(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ms(i,s,o))}else r.trackChildChange(ri(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new Bf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class VT{constructor(e){this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,g)=>d(g,f)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ms(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ls(n,d));const w=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ri(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ls(u.name,u.node)),s.trackChildChange(ri(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
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
 */class jf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ar}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new jf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GT(t){return t.loadsAllData()?new Bf(t.getIndex()):t.hasLimit()?new VT(t):new Ds(t)}function qT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function KT(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function YT(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function QT(t,e){const n=t.copy();return n.index_=e,n}function Vm(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===g0?n="$value":t.index_===Xn?n="$key":(T(t.index_ instanceof $f,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class Ma extends a0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Zs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ma.getListenId_(e,r),a={};this.listens_[o]=a;const l=Vm(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ti(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ma.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vm(e._queryParams),r=e._path.toString(),i=new Ks;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rs(a.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class XT{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Da(){return{value:null,children:new Map}}function y0(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,Da());const i=t.children.get(r);e=X(e),y0(i,e,n)}}function td(t,e,n){t.value!==null?n(e,t.value):JT(t,(r,i)=>{const s=new K(e.toString()+"/"+r);td(i,s,n)})}function JT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class ZT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const qm=10*1e3,eN=30*1e3,tN=5*60*1e3;class nN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ZT(e);const r=qm+(eN-qm)*Math.random();as(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ie(e,(i,s)=>{s>0&&Pt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),as(this.reportStats_.bind(this),Math.floor(Math.random()*2*tN))}}/**
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
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Wf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=Wf()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Fa(G(),n,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new Fa(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fs{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Fs(this.source,G()):new Fs(this.source,X(this.path))}}/**
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
 */class lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return B(this.path)?new lr(this.source,G(),this.snap.getImmediateChild(e)):new lr(this.source,X(this.path),this.snap)}}/**
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
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new lr(this.source,G(),n.value):new ii(this.source,G(),n)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HT(o.childName,o.snapshotNode))}),Bi(t,i,"child_removed",e,r,n),Bi(t,i,"child_added",e,r,n),Bi(t,i,"child_moved",s,r,n),Bi(t,i,"child_changed",e,r,n),Bi(t,i,"value",e,r,n),i}function Bi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>oN(t,a,l)),o.forEach(a=>{const l=sN(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function sN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oN(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Cl(t,e){return{eventCache:t,serverCache:e}}function ls(t,e,n,r){return Cl(new ur(e,n,r),t.serverCache)}function _0(t,e,n,r){return Cl(t.eventCache,new ur(e,n,r))}function nd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Nu;const aN=()=>(Nu||(Nu=new $e(z2)),Nu);class Q{constructor(e,n=aN()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ie(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(B(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ae(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Q(null)}}set(e,n){if(B(e))return new Q(n,this.children);{const r=$(e),s=(this.children.get(r)||new Q(null)).set(X(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(B(e))return n;{const r=$(e),s=(this.children.get(r)||new Q(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new Q(null))}}function us(t,e,n){if(B(e))return new vt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new vt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new vt(s)}}}function rd(t,e,n){let r=t;return Ie(n,(i,s)=>{r=us(r,ae(e,i),s)}),r}function Km(t,e){if(B(e))return vt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new vt(n)}}function id(t,e){return vr(t,e)!=null}function vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function Ym(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function Cn(t,e){if(B(e))return t;{const n=vr(t,e);return n!=null?new vt(new Q(n)):new vt(t.writeTree_.subtree(e))}}function sd(t){return t.writeTree_.isEmpty()}function si(t,e){return w0(G(),t.writeTree_,e)}function w0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=w0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Gf(t,e){return k0(e,t)}function lN(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=us(t.visibleWrites,e,n)),t.lastWriteId=r}function uN(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rd(t.visibleWrites,e,n),t.lastWriteId=r}function cN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fN(a,r.path)?i=!1:st(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return hN(t),!0;if(r.snap)t.visibleWrites=Km(t.visibleWrites,r.path);else{const a=r.children;Ie(a,l=>{t.visibleWrites=Km(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function fN(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ae(t.path,n),e))return!0;return!1}function hN(t){t.visibleWrites=C0(t.allWrites,pN,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pN(t){return t.visible}function C0(t,e,n){let r=vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)st(n,o)?(a=ze(n,o),r=us(r,a,s.snap)):st(o,n)&&(a=ze(o,n),r=us(r,G(),s.snap.getChild(a)));else if(s.children){if(st(n,o))a=ze(n,o),r=rd(r,a,s.children);else if(st(o,n))if(a=ze(o,n),B(a))r=rd(r,G(),s.children);else{const l=ti(s.children,$(a));if(l){const u=l.getChild(X(a));r=us(r,G(),u)}}}else throw mi("WriteRecord should have .snap or .children")}}return r}function E0(t,e,n,r,i){if(!r&&!i){const s=vr(t.visibleWrites,e);if(s!=null)return s;{const o=Cn(t.visibleWrites,e);if(sd(o))return n;if(n==null&&!id(o,G()))return null;{const a=n||L.EMPTY_NODE;return si(o,a)}}}else{const s=Cn(t.visibleWrites,e);if(!i&&sd(s))return n;if(!i&&n==null&&!id(s,G()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(st(u.path,e)||st(e,u.path))},a=C0(t.allWrites,o,e),l=n||L.EMPTY_NODE;return si(a,l)}}}function mN(t,e,n){let r=L.EMPTY_NODE;const i=vr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cn(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=si(Cn(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),Ym(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cn(t.visibleWrites,e);return Ym(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gN(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(id(t.visibleWrites,s))return null;{const o=Cn(t.visibleWrites,s);return sd(o)?i.getChild(n):si(o,i.getChild(n))}}function vN(t,e,n,r){const i=ae(e,n),s=vr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cn(t.visibleWrites,i);return si(o,r.getNode().getImmediateChild(n))}else return null}function yN(t,e){return vr(t.visibleWrites,e)}function _N(t,e,n,r,i,s,o){let a;const l=Cn(t.visibleWrites,e),u=vr(l,G());if(u!=null)a=u;else if(n!=null)a=si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function wN(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Ua(t,e,n,r){return E0(t.writeTree,t.treePath,e,n,r)}function qf(t,e){return mN(t.writeTree,t.treePath,e)}function Qm(t,e,n,r){return gN(t.writeTree,t.treePath,e,n,r)}function za(t,e){return yN(t.writeTree,ae(t.treePath,e))}function CN(t,e,n,r,i,s){return _N(t.writeTree,t.treePath,e,n,r,i,s)}function Kf(t,e,n){return vN(t.writeTree,t.treePath,e,n)}function S0(t,e){return k0(ae(t.treePath,e),t.writeTree)}function k0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class EN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ls(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ri(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const I0=new SN;class Yf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),s=CN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function kN(t){return{filter:t}}function IN(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TN(t,e,n,r,i){const s=new EN;let o,a;if(n.type===mt.OVERWRITE){const u=n;u.source.fromUser?o=od(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=$a(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mt.MERGE){const u=n;u.source.fromUser?o=xN(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ad(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mt.ACK_USER_WRITE){const u=n;u.revert?o=RN(t,e,u.path,r,i,s):o=bN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mt.LISTEN_COMPLETE)o=PN(t,e,n.path,r,s);else throw mi("Unknown operation type: "+n.type);const l=s.getChanges();return NN(e,o,l),{viewCache:o,changes:l}}function NN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(v0(nd(e)))}}function T0(t,e,n,r,i,s){const o=e.eventCache;if(za(r,n)!=null)return e;{let a,l;if(B(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=cr(e),c=u instanceof L?u:L.EMPTY_NODE,d=qf(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ua(r,cr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=$(n);if(u===".priority"){T(xn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Qm(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=X(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Qm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Kf(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ls(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function $a(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=$(n);if(!l.isCompleteForPath(n)&&xn(n)>1)return e;const y=X(n),x=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),x):u=c.updateChild(l.getNode(),g,x,y,I0,null)}const d=_0(e,u,l.isFullyInitialized()||B(n),c.filtersNodes()),f=new Yf(i,d,s);return T0(t,d,n,i,f,a)}function od(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Yf(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ls(e,u,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ls(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),g=a.getNode().getImmediateChild(d);let y;if(B(f))y=r;else{const w=c.getCompleteChild(d);w!=null?Df(f)===".priority"&&w.getChild(u0(f)).isEmpty()?y=w:y=w.updateChild(f,r):y=L.EMPTY_NODE}if(g.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=ls(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xm(t,e){return t.eventCache.isCompleteForChild(e)}function xN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ae(n,l);Xm(e,$(c))&&(a=od(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ae(n,l);Xm(e,$(c))||(a=od(t,a,c,u,i,s,o))}),a}function Jm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ad(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;B(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=Jm(t,g,f);l=$a(t,l,new K(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===void 0;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),w=Jm(t,y,f);l=$a(t,l,new K(d),w,i,s,o,a)}}),l}function bN(t,e,n,r,i,s,o){if(za(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $a(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let u=new Q(null);return l.getNode().forEachChild(Xn,(c,d)=>{u=u.set(new K(c),d)}),ad(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const f=ae(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),ad(t,e,n,u,i,s,a,o)}}function PN(t,e,n,r,i){const s=e.serverCache,o=_0(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return T0(t,o,n,r,I0,i)}function RN(t,e,n,r,i,s){let o;if(za(r,n)!=null)return e;{const a=new Yf(r,e,i),l=e.eventCache.getNode();let u;if(B(n)||$(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ua(r,cr(e));else{const d=e.serverCache.getNode();T(d instanceof L,"serverChildren would be complete if leaf node"),c=qf(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=$(n);let d=Kf(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,X(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,X(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ua(r,cr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||za(r,G())!=null,ls(e,u,o,t.filter.filtersNodes())}}/**
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
 */class AN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bf(r.getIndex()),s=GT(r);this.processor_=kN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new ur(l,o.isFullyInitialized(),i.filtersNodes()),d=new ur(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Cl(d,c),this.eventGenerator_=new rN(this.query_)}get query(){return this.query_}}function ON(t){return t.viewCache_.serverCache.getNode()}function LN(t,e){const n=cr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Zm(t){return t.eventRegistrations_.length===0}function MN(t,e){t.eventRegistrations_.push(e)}function eg(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tg(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(T(cr(t.viewCache_),"We should always have a full cache before handling merges"),T(nd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=TN(t.processor_,i,e,n,r);return IN(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,N0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(ri(s,o))}),n.isFullyInitialized()&&r.push(v0(n.getNode())),N0(t,r,n.getNode(),e)}function N0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return iN(t.eventGenerator_,e,n,i)}/**
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
 */let Ba;class FN{constructor(){this.views=new Map}}function UN(t){T(!Ba,"__referenceConstructor has already been defined"),Ba=t}function zN(){return T(Ba,"Reference.ts has not been loaded"),Ba}function $N(t){return t.views.size===0}function Qf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),tg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tg(o,e,n,r));return s}}function BN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ua(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=qf(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=Cl(new ur(a,l,!1),new ur(r,i,!1));return new AN(e,u)}return o}function jN(t,e,n,r,i,s){const o=BN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),MN(o,n),DN(o,n)}function WN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=bn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(eg(u,n,r)),Zm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(eg(l,n,r)),Zm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!bn(t)&&s.push(new(zN())(e._repo,e._path)),{removed:s,events:o}}function x0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||LN(r,e);return n}function b0(t,e){if(e._queryParams.loadsAllData())return El(t);{const r=e._queryIdentifier;return t.views.get(r)}}function P0(t,e){return b0(t,e)!=null}function bn(t){return El(t)!=null}function El(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ja;function HN(t){T(!ja,"__referenceConstructor has already been defined"),ja=t}function VN(){return T(ja,"Reference.ts has not been loaded"),ja}let GN=1;class ng{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=wN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function R0(t,e,n,r,i){return lN(t.pendingWriteTree_,e,n,r,i),i?wi(t,new lr(Wf(),e,n)):[]}function qN(t,e,n,r){uN(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return wi(t,new ii(Wf(),e,i))}function fn(t,e,n=!1){const r=cN(t.pendingWriteTree_,e);if(dN(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(G(),!0):Ie(r.children,o=>{s=s.set(new K(o),!0)}),wi(t,new Fa(r.path,s,n))}else return[]}function Sl(t,e,n){return wi(t,new lr(Hf(),e,n))}function KN(t,e,n){const r=Q.fromObject(n);return wi(t,new ii(Hf(),e,r))}function YN(t,e){return wi(t,new Fs(Hf(),e))}function QN(t,e,n){const r=Jf(t,n);if(r){const i=Zf(r),s=i.path,o=i.queryId,a=ze(s,e),l=new Fs(Vf(o),a);return eh(t,s,l)}else return[]}function ld(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||P0(s,e))){const a=WN(s,e,n,r);$N(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(d,f)=>bn(f));if(u&&!c){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=ZN(d);for(let g=0;g<f.length;++g){const y=f[g],w=y.query,x=L0(t,y);t.listenProvider_.startListening(cs(w),Wa(t,w),x.hashFn,x.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(cs(e),null):l.forEach(d=>{const f=t.queryToTagMap.get(kl(d));t.listenProvider_.stopListening(cs(d),f)})),ex(t,l)}return o}function XN(t,e,n,r){const i=Jf(t,r);if(i!=null){const s=Zf(i),o=s.path,a=s.queryId,l=ze(o,e),u=new lr(Vf(a),l,n);return eh(t,o,u)}else return[]}function JN(t,e,n,r){const i=Jf(t,r);if(i){const s=Zf(i),o=s.path,a=s.queryId,l=ze(o,e),u=Q.fromObject(n),c=new ii(Vf(a),l,u);return eh(t,o,c)}else return[]}function rg(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,f)=>{const g=ze(d,r);i=i||Hr(f,g),s=s||bn(f)});let o=t.syncPointTree_.get(r);o?(s=s||bn(o),i=i||Hr(o,G())):(o=new FN,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,g)=>{const y=Hr(g,G());y&&(i=i.updateImmediateChild(f,y))}));const l=P0(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=kl(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=tx();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Gf(t.pendingWriteTree_,r);let c=jN(o,e,n,u,i,a);if(!l&&!s){const d=b0(o,e);c=c.concat(nx(t,e,d))}return c}function Xf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),u=Hr(a,l);if(u)return u});return E0(i,e,s,n,!0)}function wi(t,e){return A0(e,t.syncPointTree_,null,Gf(t.pendingWriteTree_,G()))}function A0(t,e,n,r){if(B(t.path))return O0(t,e,n,r);{const i=e.get(G());n==null&&i!=null&&(n=Hr(i,G()));let s=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=S0(r,o);s=s.concat(A0(a,l,u,c))}return i&&(s=s.concat(Qf(i,t,r,n))),s}}function O0(t,e,n,r){const i=e.get(G());n==null&&i!=null&&(n=Hr(i,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=S0(r,o),c=t.operationForChild(o);c&&(s=s.concat(O0(c,a,l,u)))}),i&&(s=s.concat(Qf(i,t,r,n))),s}function L0(t,e){const n=e.query,r=Wa(t,n);return{hashFn:()=>(ON(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QN(t,n._path,r):YN(t,n._path);{const s=j2(i,n);return ld(t,n,null,s)}}}}function Wa(t,e){const n=kl(e);return t.queryToTagMap.get(n)}function kl(t){return t._path.toString()+"$"+t._queryIdentifier}function Jf(t,e){return t.tagToQueryMap.get(e)}function Zf(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function eh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Gf(t.pendingWriteTree_,e);return Qf(r,n,i,null)}function ZN(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[El(n)];{let i=[];return n&&(i=x0(n)),Ie(r,(s,o)=>{i=i.concat(o)}),i}})}function cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(VN())(t._repo,t._path):t}function ex(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=kl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function tx(){return GN++}function nx(t,e,n){const r=e._path,i=Wa(t,e),s=L0(t,n),o=t.listenProvider_.startListening(cs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!B(u)&&c&&bn(c))return[El(c).query];{let f=[];return c&&(f=f.concat(x0(c).map(g=>g.query))),Ie(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(cs(c),Wa(t,c))}}return o}/**
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
 */class th{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new th(n)}node(){return this.node_}}class nh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new nh(this.syncTree_,n)}node(){return Xf(this.syncTree_,this.path_)}}const rx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ig=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ix(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sx(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ix=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},sx=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},M0=function(t,e,n,r){return rh(e,new nh(n,t),r)},D0=function(t,e,n){return rh(t,new th(e),n)};function rh(t,e,n){const r=t.getPriority().val(),i=ig(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ig(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ge(a,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(se,(a,l)=>{const u=rh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class ih{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sh(t,e){let n=e instanceof K?e:new K(e),r=t,i=$(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new ih(i,r,s),n=X(n),i=$(n)}return r}function Ci(t){return t.node.value}function F0(t,e){t.node.value=e,ud(t)}function U0(t){return t.node.childCount>0}function ox(t){return Ci(t)===void 0&&!U0(t)}function Il(t,e){Ie(t.node.children,(n,r)=>{e(new ih(n,t,r))})}function z0(t,e,n,r){n&&!r&&e(t),Il(t,i=>{z0(i,e,!0,r)}),n&&r&&e(t)}function ax(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function to(t){return new K(t.parent===null?t.name:to(t.parent)+"/"+t.name)}function ud(t){t.parent!==null&&lx(t.parent,t.name,t)}function lx(t,e,n){const r=ox(n),i=Pt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ud(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ud(t))}/**
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
 */const ux=/[\[\].#$\/\u0000-\u001F\u007F]/,cx=/[\[\].#$\u0000-\u001F\u007F]/,xu=10*1024*1024,Tl=function(t){return typeof t=="string"&&t.length!==0&&!ux.test(t)},$0=function(t){return typeof t=="string"&&t.length!==0&&!cx.test(t)},dx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$0(t)},cd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pf(t)||t&&typeof t=="object"&&Pt(t,".sv")},no=function(t,e,n,r){r&&e===void 0||Nl(Qs(t,"value"),e,n)},Nl=function(t,e,n){const r=n instanceof K?new kT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zn(r));if(typeof e=="function")throw new Error(t+"contains a function "+zn(r)+" with contents = "+e.toString());if(Pf(e))throw new Error(t+"contains "+e.toString()+" "+zn(r));if(typeof e=="string"&&e.length>xu/3&&gl(e)>xu)throw new Error(t+"contains a string greater than "+xu+" utf8 bytes "+zn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ie(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Tl(o)))throw new Error(t+" contains an invalid key ("+o+") "+zn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IT(r,o),Nl(t,a,r),TT(r)}),i&&s)throw new Error(t+' contains ".value" child '+zn(r)+" in addition to actual children.")}},fx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Os(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Tl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ST);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},hx=function(t,e,n,r){if(r&&e===void 0)return;const i=Qs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ie(e,(o,a)=>{const l=new K(o);if(Nl(i,a,ae(n,l)),Df(l)===".priority"&&!cd(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),fx(i,s)},px=function(t,e,n,r){if(!(r&&n===void 0)&&!Tl(n))throw new Error(Qs(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},oh=function(t,e,n,r){if(!(r&&n===void 0)&&!$0(n))throw new Error(Qs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oh(t,e,n,r)},B0=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dx(n))throw new Error(Qs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class vx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ff(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function j0(t,e,n){xl(t,n),W0(t,r=>Ff(r,e))}function yt(t,e,n){xl(t,n),W0(t,r=>st(r,e)||st(e,r))}function W0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(yx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&Ee("event: "+n.toString()),_i(r)}}}/**
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
 */const _x="repo_interrupt",wx=25;class Cx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Da(),this.transactionQueueTree_=new ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ex(t,e,n){if(t.stats_=Of(t.repoInfo_),t.forceRestClient_||G2())t.server_=new Ma(t.repoInfo_,(r,i,s,o)=>{sg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>og(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jt(t.repoInfo_,e,(r,i,s,o)=>{sg(t,r,i,s,o)},r=>{og(t,r)},r=>{Sx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Z2(t.repoInfo_,()=>new nN(t.stats_,t.server_)),t.infoData_=new XT,t.infoSyncTree_=new ng({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Sl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ah(t,"connected",!1),t.serverSyncTree_=new ng({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);yt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function H0(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bl(t){return rx({timestamp:H0(t)})}function sg(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=xa(n,u=>_e(u));o=JN(t.serverSyncTree_,s,l,i)}else{const l=_e(n);o=XN(t.serverSyncTree_,s,l,i)}else if(r){const l=xa(n,u=>_e(u));o=KN(t.serverSyncTree_,s,l)}else{const l=_e(n);o=Sl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=oi(t,s)),yt(t.eventQueue_,a,o)}function og(t,e){ah(t,"connected",e),e===!1&&Tx(t)}function Sx(t,e){Ie(e,(n,r)=>{ah(t,n,r)})}function ah(t,e,n){const r=new K("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Sl(t.infoSyncTree_,r,i);yt(t.eventQueue_,r,s)}function lh(t){return t.nextWriteId_++}function kx(t,e,n,r,i){Pl(t,"set",{path:e.toString(),value:n,priority:r});const s=bl(t),o=_e(n,r),a=Xf(t.serverSyncTree_,e),l=D0(o,a,s),u=lh(t),c=R0(t.serverSyncTree_,e,l,u,!0);xl(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||Oe("set at "+e+" failed: "+f);const w=fn(t.serverSyncTree_,u,!y);yt(t.eventQueue_,e,w),dd(t,i,f,g)});const d=ch(t,e);oi(t,d),yt(t.eventQueue_,d,[])}function Ix(t,e,n,r){Pl(t,"update",{path:e.toString(),value:n});let i=!0;const s=bl(t),o={};if(Ie(n,(a,l)=>{i=!1,o[a]=M0(ae(e,a),_e(l),t.serverSyncTree_,s)}),i)Ee("update() called with empty data.  Don't do anything."),dd(t,r,"ok",void 0);else{const a=lh(t),l=qN(t.serverSyncTree_,e,o,a);xl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Oe("update at "+e+" failed: "+u);const f=fn(t.serverSyncTree_,a,!d),g=f.length>0?oi(t,e):e;yt(t.eventQueue_,g,f),dd(t,r,u,c)}),Ie(n,u=>{const c=ch(t,ae(e,u));oi(t,c)}),yt(t.eventQueue_,e,[])}}function Tx(t){Pl(t,"onDisconnectEvents");const e=bl(t),n=Da();td(t.onDisconnect_,G(),(i,s)=>{const o=M0(i,s,t.serverSyncTree_,e);y0(n,i,o)});let r=[];td(n,G(),(i,s)=>{r=r.concat(Sl(t.serverSyncTree_,i,s));const o=ch(t,i);oi(t,o)}),t.onDisconnect_=Da(),yt(t.eventQueue_,G(),r)}function Nx(t,e,n){let r;$(e._path)===".info"?r=rg(t.infoSyncTree_,e,n):r=rg(t.serverSyncTree_,e,n),j0(t.eventQueue_,e._path,r)}function ag(t,e,n){let r;$(e._path)===".info"?r=ld(t.infoSyncTree_,e,n):r=ld(t.serverSyncTree_,e,n),j0(t.eventQueue_,e._path,r)}function xx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_x)}function Pl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function dd(t,e,n,r){e&&_i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function V0(t,e,n){return Xf(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||Rl(t,e),Ci(e)){const n=q0(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bx(t,to(e),n)}else U0(e)&&Il(e,n=>{uh(t,n)})}function bx(t,e,n){const r=n.map(u=>u.currentWriteId),i=V0(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ze(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Pl(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(fn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Rl(t,sh(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),yt(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)_i(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Oe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}oi(t,e)}},o)}function oi(t,e){const n=G0(t,e),r=to(n),i=q0(t,n);return Px(t,i,r),r}function Px(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ze(n,l.path);let c=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wx)c=!0,d="maxretry",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=V0(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Nl("transaction failed: Data returned ",g,l.path);let y=_e(g);typeof g=="object"&&g!=null&&Pt(g,".priority")||(y=y.updatePriority(f.getPriority()));const x=l.currentWriteId,m=bl(t),p=D0(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=lh(t),o.splice(o.indexOf(x),1),i=i.concat(R0(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(fn(t.serverSyncTree_,x,!0))}else c=!0,d="nodata",i=i.concat(fn(t.serverSyncTree_,l.currentWriteId,!0))}yt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Rl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)_i(r[a]);uh(t,t.transactionQueueTree_)}function G0(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&Ci(r)===void 0;)r=sh(r,n),e=X(e),n=$(e);return r}function q0(t,e){const n=[];return K0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function K0(t,e,n){const r=Ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Il(e,i=>{K0(t,i,n)})}function Rl(t,e){const n=Ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,F0(e,n.length>0?n:void 0)}Il(e,r=>{Rl(t,r)})}function ch(t,e){const n=to(G0(t,e)),r=sh(t.transactionQueueTree_,e);return ax(r,i=>{bu(t,i)}),bu(t,r),z0(r,i=>{bu(t,i)}),n}function bu(t,e){const n=Ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?F0(e,void 0):n.length=s+1,yt(t.eventQueue_,to(e),i);for(let o=0;o<r.length;o++)_i(r[o])}}/**
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
 */function Rx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ax(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const lg=function(t,e){const n=Ox(t),r=n.namespace;n.domain==="firebase.com"&&or(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||F2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Q2(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},Ox=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Rx(t.substring(c,d)));const f=Ax(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Y0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Q0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Lx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Df(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=Gm(this._queryParams),n=Rf(e);return n==="{}"?"default":n}get _queryObject(){return Gm(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof yr))return!1;const n=this._repo===e._repo,r=Ff(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ET(this._path)}}function Mx(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function dh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Xn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ar)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Nn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===se){if(e!=null&&!cd(e)||n!=null&&!cd(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof $f||t.getIndex()===g0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function X0(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Jt extends yr{constructor(e,n){super(e,n,new jf,!1)}get parent(){const e=u0(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=ai(this.ref,e);return new Us(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Us(i,ai(this.ref,r),se)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ei(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?ai(t._root,e):t._root}function ai(t,e){return t=He(t),$(t._path)===null?mx("child","path",e,!1):oh("child","path",e,!1),new Jt(t._repo,ae(t._path,e))}function Dx(t,e){t=He(t),B0("push",t._path),no("push",e,t._path,!0);const n=H0(t._repo),r=WT(n),i=ai(t,r),s=ai(t,r);let o;return e!=null?o=Fx(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fx(t,e){t=He(t),B0("set",t._path),no("set",e,t._path,!1);const n=new Ks;return kx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ux(t,e){hx("update",e,t._path,!1);const n=new Ks;return Ix(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class fh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Y0("value",this,new Us(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Q0(this,e,n):null}matches(e){return e instanceof fh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Q0(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=ai(new Jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Y0(e.type,this,new Us(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function J0(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{ag(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Lx(n,s||void 0),a=e==="value"?new fh(o):new hh(e,o);return Nx(t._repo,t,a),()=>ag(t._repo,t,a)}function ph(t,e,n,r){return J0(t,"value",e,n,r)}function zx(t,e,n,r){return J0(t,"child_added",e,n,r)}class ro{}class $x extends ro{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){no("endAt",this._value,e._path,!0);const n=YT(e._queryParams,this._value,this._key);if(X0(n),dh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new yr(e._repo,e._path,n,e._orderByCalled)}}class Bx extends ro{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){no("startAt",this._value,e._path,!0);const n=KT(e._queryParams,this._value,this._key);if(X0(n),dh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new yr(e._repo,e._path,n,e._orderByCalled)}}class jx extends ro{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new yr(e._repo,e._path,qT(e._queryParams,this._limit),e._orderByCalled)}}function Wx(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new jx(t)}class Hx extends ro{constructor(e){super(),this._path=e}_apply(e){Mx(e,"orderByChild");const n=new K(this._path);if(B(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new $f(n),i=QT(e._queryParams,r);return dh(i),new yr(e._repo,e._path,i,!0)}}function Z0(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return oh("orderByChild","path",t,!1),new Hx(t)}class Vx extends ro{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(no("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $x(this._value,this._key)._apply(new Bx(this._value,this._key)._apply(e))}}function Gx(t,e){return px("equalTo","key",e,!0),new Vx(t,e)}function e1(t,...e){let n=He(t);for(const r of e)n=r._apply(n);return n}UN(Jt);HN(Jt);/**
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
 */const qx="FIREBASE_DATABASE_EMULATOR_HOST",fd={};let Kx=!1;function Yx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lg(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[qx]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=lg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Jc(Jc.OWNER):new K2(t.name,t.options,e);gx("Invalid Firebase Database URL",o),B(o.path)||or("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Xx(a,t,c,new q2(t.name,n));return new Jx(d,t)}function Qx(t,e){const n=fd[e];(!n||n[t.key]!==t)&&or(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xx(t),delete n[t.key]}function Xx(t,e,n,r){let i=fd[e.name];i||(i={},fd[e.name]=i);let s=i[t.toURLString()];return s&&or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Cx(t,Kx,n,r),i[t.toURLString()]=s,s}class Jx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ex(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&or("Cannot call "+e+" on a deleted database.")}}function Si(t=P_(),e){return xf(t,"database").getImmediate({identifier:e})}/**
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
 */function Zx(t){A2(Xs),ni(new ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Yx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wn(xm,bm,t),wn(xm,bm,"esm2017")}/**
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
 */const eb={".sv":"timestamp"};function t1(){return eb}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zx();const ki={MESSAGES:"messages",USERS:"users",MATCHES:"matches"},tb={uid:null,displayName:"Unknown User"},kt={demo:{id:"demo",name:"Demo Community",intents:[{code:"tutoring-math",name:"Get tutoring in math"},{code:"watch-recs",name:"Get show and movie recommendations"}],interests:[{code:"running",name:"Running"},{code:"biking",name:"Biking"},{code:"swimming",name:"Swimming"}]},sds:{id:"sds",name:"Scarlet Data Studio",intents:[{code:"tech-careers",name:"Learn about careers in technology"},{code:"involve-iit",name:"Get more involved at Illinois Tech"},{code:"watch-recs",name:"Get show and movie recommendations"}],interests:[]},esi:{id:"esi",name:"Exelon Summer Institute",intents:[],interests:[]}};async function nb(t){const e=await y_({route:`/core/user/${t}`});return e==null?void 0:e.data}function Al(t){const e=Si(),n=`${ki.USERS}/${t}`,r=Ei(e,n);return new Promise(i=>{ph(r,s=>{const o=s.val();i(o&&ce({uid:s.key},o))})})}function Ol(t,e=nb){const[n,r]=P.exports.useState({});return P.exports.useEffect(()=>{Object.keys(t).filter(i=>i!=="undefined"&&!(i in n)).map(e).forEach(i=>{i.then(s=>{s!=null&&s.uid&&r(o=>Ve(ce({},o),{[s.uid]:s}))}).catch(s=>{console.log("Error while fetching many user records."),console.error(s)})})},[t,n]),n}async function mh(t){try{if(!(t!=null&&t.uid))throw new Error("No user ID provided to update user details.");const{uid:e,email:n,displayName:r,photoURL:i}=t,s=Si(),o=`${ki.USERS}/${e}`,a=Ei(s,o);return await Ux(a,{uid:e,email:n,displayName:r,photoURL:i,latestLogin:t1()}),null}catch(e){return console.error("Failed to update user details."),console.log(t),console.error(e),e}}function rb(t){var o,a,l;const[e,n]=P.exports.useState(),r=(o=Ol({[t]:!0},Al))==null?void 0:o[t],i=Object.keys((r==null?void 0:r.communities)||{}).map(u=>{var c;return ce(ce({},kt==null?void 0:kt[u]),(c=r==null?void 0:r.communities)==null?void 0:c[u])}),s=(l=(a=i.filter(u=>u.active))==null?void 0:a[0])==null?void 0:l.id;return P.exports.useEffect(()=>{n(s)},[s]),[e,n,i]}function ib(t,e){const n=Si(),r=`${ki.MATCHES}/${e}`,i=Ei(n,r),s=e1(i,Z0("for"),Gx(t));return new Promise(o=>{ph(s,a=>{const l=a.val()||{},u=Object.values(l).map(c=>Ve(ce({},c),{community:e}));o({communityId:e,matches:u})})})}function sb(t,e){const[n,r]=P.exports.useState({});return P.exports.useEffect(()=>{!t||Object.keys(e).filter(i=>!(i in n)).map(i=>ib(t,i)).forEach(i=>{i.then(s=>{r(o=>Ve(ce({},o),{[s.communityId]:s.matches}))}).catch(s=>{console.log("Error while fetching many match records."),console.error(s)})})},[t,e,n]),n}function ob(t){var s;const e=(s=Ol({[t]:!0},Al))==null?void 0:s[t],n=(e==null?void 0:e.communities)||{},r=sb(t,n);return Object.values(r).reduce((o,a)=>[...o,...a],[]).filter(o=>o.release_timestamp<Date.now()).map(o=>Ve(ce({},o),{communityConfig:(kt==null?void 0:kt[o==null?void 0:o.community])||{}}))}const ab="https://sds-butterfly-api.herokuapp.com",ug="butterfly__last_ping",lb=1e3*60*5,Pu={LOADING:"Connecting to our server...",SUCCESS:"Connected successfully!",FAILURE:"Could not connect. Please reload page."};async function ub(){return new Promise(t=>{fetch(`${ab}/`).then(()=>t(!0)).catch(()=>t(!1))})}function cb(t,e){return t?"":e?"Success":"Failure"}function db(t,e){return t?Pu.LOADING:e?Pu.SUCCESS:Pu.FAILURE}function gh({pingFn:t=ub}){const[e,n]=P.exports.useState(!0),[r,i]=P.exports.useState(!0),[s,o]=P.exports.useState(!0);P.exports.useEffect(()=>{let d=!0,f=null,g=null;const y=localStorage.getItem(ug);return!y||Date.now()-y>=lb?(f=setTimeout(()=>{d&&o(!0)},1e3),t().then(x=>{d&&(i(x),n(!1)),x&&(localStorage.setItem(ug,Date.now()),g=setTimeout(()=>{d&&o(!1)},1e3))})):o(!1),()=>{d=!1,f&&clearTimeout(f),g&&clearTimeout(g)}},[]);const a=cb(e,r),l=db(e,r);return h(P2,{classes:["Bottom","Fixed","Centered",a,!e&&r?"FadeOut":"FadeIn"],visible:s,children:h("p",{children:l})})}function fb(){return I("div",{className:"Layout Page HomePage FullHeight VerticalCenter",children:[I("div",{children:[h(bf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(Ye,{to:"/login",children:h(yi,{label:"Login",primary:!0})})]}),h(gh,{})]})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vh={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
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
***************************************************************************** */function yh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function n1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hb=n1,r1=new Ys("auth","Firebase",n1());/**
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
 */const cg=new Tf("@firebase/auth");function Yo(t,...e){cg.logLevel<=Y.ERROR&&cg.error(`Auth (${Xs}): ${t}`,...e)}/**
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
 */function ct(t,...e){throw _h(t,...e)}function It(t,...e){return _h(t,...e)}function i1(t,e,n){const r=Object.assign(Object.assign({},hb()),{[e]:n});return new Ys("auth","Firebase",r).create(e,{appName:t.name})}function pb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),i1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r1.create(t,...e)}function F(t,e,...n){if(!t)throw _h(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function Yt(t,e){t||zt(e)}/**
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
 */const dg=new Map;function $t(t){Yt(t instanceof Function,"Expected a class definition");let e=dg.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dg.set(t,e),e)}/**
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
 */function mb(t,e){const n=xf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e!=null?e:{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function gb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vb(){return fg()==="http:"||fg()==="https:"}function fg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vb()||Uk()||"connection"in navigator)?navigator.onLine:!0}function _b(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=If()||k_()}get(){return yb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wh(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class s1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Cb=new io(3e4,6e4);function Ll(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,r,i={}){return o1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),s1.fetch()(a1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function o1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wb),e);try{const i=new Eb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ru(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ru(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw i1(t,c,u);ct(t,c)}}catch(i){if(i instanceof gi)throw i;ct(t,"network-request-failed")}}async function Ml(t,e,n,r,i={}){const s=await Ii(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function a1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wh(t.config,i):`${t.config.apiScheme}://${i}`}class Eb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),Cb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ru(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Sb(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function kb(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ds(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ib(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Ch(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ds(Au(i.auth_time)),issuedAtTime:ds(Au(i.iat)),expirationTime:ds(Au(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Au(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wc(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i),null}}function Tb(t){const e=Ch(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gi&&Nb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class l1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await li(t,kb(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rb(s.providerUserInfo):[],a=Pb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new l1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function bb(t){const e=He(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Rb(t){return t.map(e=>{var{providerId:n}=e,r=yh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ab(t,e){const n=await o1(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=a1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",s1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Tb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ab(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function en(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new l1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ib(this,e)}reload(){return bb(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,Sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:N,stsTokenManager:C}=n;F(v&&C,e,"internal-error");const k=zs.fromJSON(this.name,C);F(typeof v=="string",e,"internal-error"),en(d,e.name),en(f,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof E=="boolean",e,"internal-error"),en(g,e.name),en(y,e.name),en(w,e.name),en(x,e.name),en(m,e.name),en(p,e.name);const M=new Jn({uid:v,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:k,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(M.providerData=N.map(D=>Object.assign({},D))),x&&(M._redirectEventId=x),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new zs;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}}/**
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
 */class u1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u1.type="NONE";const hg=u1;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr($t(hg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$t(hg);const o=Qo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Jn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vr(s,e,r))}}/**
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
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p1(e))return"Blackberry";if(m1(e))return"Webos";if(Eh(e))return"Safari";if((e.includes("chrome/")||d1(e))&&!e.includes("edge/"))return"Chrome";if(h1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c1(t=Pe()){return/firefox\//i.test(t)}function Eh(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d1(t=Pe()){return/crios\//i.test(t)}function f1(t=Pe()){return/iemobile/i.test(t)}function h1(t=Pe()){return/android/i.test(t)}function p1(t=Pe()){return/blackberry/i.test(t)}function m1(t=Pe()){return/webos/i.test(t)}function Dl(t=Pe()){return/iphone|ipad|ipod/i.test(t)}function Ob(t=Pe()){var e;return Dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lb(){return zk()&&document.documentMode===10}function g1(t=Pe()){return Dl(t)||h1(t)||m1(t)||p1(t)||/windows phone/i.test(t)||f1(t)}function Mb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function v1(t,e=[]){let n;switch(t){case"Browser":n=pg(Pe());break;case"Worker":n=`${pg(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class Db{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Fl(t){return He(t)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kk(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function Fb(t,e){return Ii(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ub(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",Ll(t,e))}/**
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
 */async function zb(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",Ll(t,e))}async function $b(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",Ll(t,e))}/**
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
 */class $s extends Sh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ub(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zb(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Fb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $b(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",Ll(t,e))}/**
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
 */const Bb="http://localhost";class dr extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:Bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function jb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wb(t){const e=qi(Ki(t)).link,n=e?qi(Ki(e)).deep_link_id:null,r=qi(Ki(t)).deep_link_id;return(r?qi(Ki(r)).link:null)||r||n||e||t}class kh{constructor(e){var n,r,i,s,o,a;const l=qi(Ki(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=jb((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Wb(e);try{return new kh(n)}catch{return null}}}/**
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
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return $s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return F(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends so{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class an extends so{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class ln extends so{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=gg(r);return new ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gg(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Va extends gi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Va(e,n,r,i)}}function y1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(t,s,e,r):s})}async function Hb(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
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
 */async function Vb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await li(t,y1(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Ch(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function _1(t,e,n=!1){const r="signIn",i=await y1(t,r,e),s=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gb(t,e){return _1(Fl(t),e)}function qb(t,e,n){return Gb(He(t),Ti.credential(e,n))}/**
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
 */async function Kb(t,e){return Ii(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Yb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await li(r,Kb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Qb(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function Xb(t){return He(t).signOut()}const Ga="__sak";/**
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
 */class w1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Jb(){const t=Pe();return Eh(t)||Dl(t)}const Zb=1e3,eP=10;class C1 extends w1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jb()&&Mb(),this.fallbackToPolling=g1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C1.type="LOCAL";const tP=C1;/**
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
 */class E1 extends w1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E1.type="SESSION";const S1=E1;/**
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
 */function nP(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Th("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function iP(t){Tt().location.href=t}/**
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
 */function k1(){return typeof Tt().WorkerGlobalScope!="undefined"&&typeof Tt().importScripts=="function"}async function sP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aP(){return k1()?self:null}/**
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
 */const I1="firebaseLocalStorageDb",lP=1,qa="firebaseLocalStorage",T1="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function uP(){const t=indexedDB.deleteDatabase(I1);return new oo(t).toPromise()}function pd(){const t=indexedDB.open(I1,lP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qa,{keyPath:T1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qa)?e(r):(r.close(),await uP(),e(await pd()))})})}async function vg(t,e,n){const r=zl(t,!0).put({[T1]:e,value:n});return new oo(r).toPromise()}async function cP(t,e){const n=zl(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function yg(t,e){const n=zl(t,!0).delete(e);return new oo(n).toPromise()}const dP=800,fP=3;class N1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(aP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sP(),!this.activeServiceWorker)return;this.sender=new rP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await vg(e,Ga,"1"),await yg(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zl(i,!1).getAll();return new oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N1.type="LOCAL";const hP=N1;/**
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
 */function pP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pP().appendChild(r)})}function gP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new io(3e4,6e4);/**
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
 */function x1(t,e){return e?$t(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nh extends Sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vP(t){return _1(t.auth,new Nh(t),t.bypassAuthState)}function yP(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Vb(n,new Nh(t),t.bypassAuthState)}async function _P(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Hb(n,new Nh(t),t.bypassAuthState)}/**
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
 */class b1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vP;case"linkViaPopup":case"linkViaRedirect":return _P;case"reauthViaPopup":case"reauthViaRedirect":return yP;default:ct(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wP=new io(2e3,1e4);async function CP(t,e,n){const r=Fl(t);pb(t,e,Ih);const i=x1(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}class Gn extends b1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wP.get())};e()}}Gn.currentPopupAction=null;/**
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
 */const EP="pendingRedirect",Ou=new Map;class SP extends b1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ou.get(this.auth._key());if(!e){try{const r=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ou.set(this.auth._key(),e)}return this.bypassAuthState||Ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(t,e){const n=TP(e),r=IP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IP(t){return $t(t._redirectPersistence)}function TP(t){return Qo(EP,t.config.apiKey,t.name)}async function NP(t,e,n=!1){const r=Fl(t),i=x1(r,e),o=await new SP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xP=10*60*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xP&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P1(t);default:return!1}}/**
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
 */async function RP(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
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
 */const AP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function LP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RP(t);for(const n of e)try{if(MP(n))return}catch{}ct(t,"unauthorized-domain")}function MP(t){const e=hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OP.test(n))return!1;if(AP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DP=new io(3e4,6e4);function wg(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FP(t){return new Promise((e,n)=>{var r,i,s;function o(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),n(It(t,"network-request-failed"))},timeout:DP.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=gP("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},mP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function UP(t){return Xo=Xo||FP(t),Xo}/**
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
 */const zP=new io(5e3,15e3),$P="__/auth/iframe",BP="emulator/auth/iframe",jP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HP(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wh(e,BP):`https://${t.config.authDomain}/${$P}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},i=WP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vi(r).slice(1)}`}async function VP(t){const e=await UP(t),n=Tt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:HP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},zP.get());function l(){Tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const GP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,KP=600,YP="_blank",QP="http://localhost";class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XP(t,e,n,r=qP,i=KP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(a=d1(u)?YP:n),c1(u)&&(e=e||QP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(Ob(u)&&a!=="_self")return JP(e||"",a),new Cg(null);const d=window.open(e||"",a,c);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Cg(d)}function JP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZP="__/auth/handler",eR="emulator/auth/handler";function Eg(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(e instanceof Ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof so){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${tR(t)}?${vi(a).slice(1)}`}function tR({config:t}){return t.emulator?wh(t,eR):`https://${t.authDomain}/${ZP}`}/**
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
 */const Lu="webStorageSupport";class nR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S1,this._completeRedirectFn=NP}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Eg(e,n,r,hd(),i);return XP(e,o,Th())}async _openRedirect(e,n,r,i){return await this._originValidation(e),iP(Eg(e,n,r,hd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VP(e),r=new bP(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lu,{type:Lu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lu];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g1()||Eh()||Dl()}}const rR=nR;var Sg="@firebase/auth",kg="0.19.12";/**
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
 */class iR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oR(t){ni(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v1(t)},c=new Db(a,l,u);return gb(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new ir("auth-internal",e=>{const n=Fl(e.getProvider("auth").getImmediate());return(r=>new iR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Sg,kg,sR(t)),wn(Sg,kg,"esm2017")}/**
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
 */function $l(t=P_()){const e=xf(t,"auth");return e.isInitialized()?e.getImmediate():mb(t,{popupRedirectResolver:rR,persistence:[hP,tP,S1]})}oR("Browser");async function R1(){try{const t=$l(),e=new Lt,{user:n}=await CP(t,e);return{user:n,signInError:null}}catch(t){return{user:null,signInError:t}}}async function A1(){try{const t=$l();return await Xb(t),{isSuccess:!0,signOutError:null}}catch(t){return{isSuccess:!1,signOutError:t}}}function Ni(){const[t,e]=P.exports.useState(null),n=$l();return P.exports.useEffect(()=>Qb(n,i=>{e(s=>(s==null?void 0:s.uid)!==(i==null?void 0:i.uid)?i:s)}),[n]),t}function O1({authUser:t,doLogOut:e}){return t&&I("div",{children:[h("hr",{}),I("p",{children:["Currently logged in as ",t.displayName,"."]}),h("p",{children:h(Ye,{to:"/chats",children:"Go to Chats"})}),h("p",{children:I("span",{className:"Button",role:"button",tabIndex:0,onClick:e,onKeyDown:e,children:[h(Xe,{icon:xE,className:"IconBefore"}),h("span",{children:"Log Out"})]})})]})}function aR(){return h("div",{className:"FloatingButton MockLoginButton",children:I(Ye,{to:"/mocklogin",className:"NoDecorate",children:[h(Xe,{icon:vv,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Go to Mock Login"})]})})}function lR(){const[t,e]=P.exports.useState(null),n=Ni(),r=Ya(),i=async()=>{const{user:o,signInError:a}=await R1();o?(await mh(o),e(null),r("/chats")):(console.error(a),e(a))},s=async()=>{const{isSuccess:o,signOutError:a}=await A1();o||e(a)};return I("div",{className:"Page LoginPage FullHeight VerticalCenter",children:[I("div",{children:[h(bf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(yi,{label:"Log in with Google",primary:!0,iconBefore:vh,onClick:i}),I(_l,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(O1,{authUser:n,doLogOut:s})]}),h(aR,{}),h(gh,{})]})}function uR(){var i;const{uid:t}=Cd(),e=(i=Ol({[t]:!0}))==null?void 0:i[t];if(!e)return h("p",{children:"User not found."});const{photoURL:n,displayName:r}=e;return I("div",{children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:"Profile",className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:r})})]})}const L1="MESSAGE";function cR(t){const[e,n]=P.exports.useState({});return P.exports.useEffect(()=>{const r=Si(),i=`${ki.MATCHES}/${t}`,s=Ei(r,i);return ph(s,async a=>{const l=a.val(),u=(l==null?void 0:l.participants)||{},c=await Object.keys(u).reduce(async(d,f)=>{const g=await Al(f);return Ve(ce({},await d),{[f]:g})},u);n(Ve(ce({isLoaded:!0,exists:a.exists()},l),{participants:c}))})},[t]),e}function dR(t,e=50){const[n,r]=P.exports.useState({keys:{},values:[]});return P.exports.useEffect(()=>{const i=Si(),s=`${ki.MESSAGES}/${t}`,o=e1(Ei(i,s),Z0("timestamp"),Wx(e));return zx(o,l=>{const{key:u}=l,c=ce({key:u},l.val());r(d=>{if(u in d.keys)return d;const{keys:f,values:g}=d;return{isLoaded:!0,keys:Ve(ce({},f),{[u]:!0}),values:[...g,c]}})})},[t,e]),n.values}async function fR(t,e){if(!e.from)throw new Error("Missing `from` in message data.");if(!e.message)throw new Error("Missing `message` in message data.");const n={type:L1,timestamp:t1(),message:e.message,from:e.from},r=Si(),i=`${ki.MESSAGES}/${t}`,s=Ei(r,i);await Dx(s,n)}function hR(){return h("p",{className:"Centered",children:"Loading chat..."})}function pR(t,e,n){const r=(e==null?void 0:e.participants)||{};return e.isLoaded?e!=null&&e.exists?n in r?null:"You are not a participant in this chat.":`No chat found for ID: ${t}`:null}const xi=P.exports.createContext();function mR({chatId:t,header:e,conversation:n,composer:r}){const{chat:i,myUserId:s}=P.exports.useContext(xi),o=pR(t,i,s),a=i.isLoaded&&!o,l=I("div",{className:"ChatAppInner HideScroll",children:[h("div",{className:"ChatHeader HideScroll",children:e}),h("div",{className:"ChatMessages",children:n}),h("div",{className:"ChatComposer",children:r})]});return I("div",{className:"ChatApp",children:[!i.isLoaded&&h(hR,{}),a&&l,I(_l,{hasError:o,children:[h("h1",{children:"No Chat Here..."}),h("pre",{children:o})]})]})}function gR({chatId:t,header:e,conversation:n,composer:r}){const i=Ni(),s=i==null?void 0:i.uid,o=cR(`${t}~${s}`),a=dR(t),l=c=>{const d=c==null?void 0:c.trim();!s||!d||fR(t,{message:d,from:s})},u=P.exports.useMemo(()=>({chat:o,messages:a,myUserId:s,sendChatMessage:l}));return h(xi.Provider,{value:u,children:h(mR,{chatId:t,header:e,conversation:n,composer:r})})}const vR=EE,yR=gv;function xh({label:t,icon:e,onClick:n}){return I("div",{className:"FloatingButton ChatAppMenuButton",tabIndex:0,role:"button",onClick:n,onKeyDown:n,children:[h("span",{className:"FloatingButtonTooltip",children:t}),h(Xe,{icon:e,className:"IconBefore"})]})}function _R({menuConfig:t,onMenuClick:e,setOption:n}){var r;return I(mr,{children:[h(xh,{label:"Close Menu",icon:vR,onClick:e}),I("div",{className:"ChatMenu",children:[h("h2",{children:"Chat Menu"}),(r=t==null?void 0:t.options)==null?void 0:r.map(i=>h("div",{className:"MenuOption",tabIndex:0,role:"button",onClick:()=>n(i.id),onKeyDown:()=>n(i.id),children:h("span",{children:i.name})},i.id))]})]})}function wR({name:t,onClick:e,children:n}){return I(mr,{children:[h(xh,{label:"Chat Menu",icon:yR,onClick:e}),I("div",{className:"ChatMenu",children:[h("h2",{children:t}),n]})]})}function CR(){return h("p",{children:"Coming soon..."})}function ER({menuConfig:t,onMenuClick:e}){var l;const n=(l=t==null?void 0:t.options)==null?void 0:l.reduce((u,c)=>Ve(ce({},u),{[c.id]:c}),{}),[r,i]=P.exports.useState(null),s=()=>i(null),o=n==null?void 0:n[r],{chat:a}=P.exports.useContext(xi);if(o){const u=(o==null?void 0:o.component)||CR;return h(wR,{name:o==null?void 0:o.name,onClick:s,children:h(u,{chat:a,config:o})})}return h(_R,{menuConfig:t,onMenuClick:e,setOption:i})}const SR=_E,kR=gv;function IR(){return h("div",{className:"FloatingButton BackToChatsButton",children:I(Ye,{to:"/chats",className:"NoDecorate",children:[h(Xe,{icon:SR,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Back to Chats"})]})})}function TR(t,e){return Object.values((t==null?void 0:t.participants)||{}).filter(n=>n.uid!==e)}function M1(t){const[e,n]=t,[r,i]=[e==null?void 0:e.displayName,n==null?void 0:n.displayName];return r&&i?`${r} and ${i}`:r||""}function NR({chat:t,myUserId:e,onMenuClick:n}){const r=TR(t,e),i=r.map(s=>h(B_,{user:s},s.uid));return I(mr,{children:[h(IR,{}),h(xh,{label:"Open Menu",icon:kR,onClick:n}),h("div",{className:"UserRowCentered",children:i}),h("h1",{children:M1(r)})]})}function xR({menuConfig:t}){const[e,n]=P.exports.useState(!1),r=()=>n(!0),i=()=>n(!1),{chat:s,myUserId:o}=P.exports.useContext(xi);return e?h(ER,{menuConfig:t,onMenuClick:i}):h(NR,{chat:s,myUserId:o,onMenuClick:r})}function bR({match:t,users:e,community:n}){const{id:r,release_timestamp:i,participants:s}=t,o=Object.keys(s).filter(c=>c!==t.for).map(c=>(e==null?void 0:e[c])||{uid:c}),a=M1(o),l=o.map(c=>h(B_,{user:c},c.uid)),u=o.length===1?"Single":"Group";return h(Ye,{to:`/chats/${n==null?void 0:n.id}/${r}`,className:"NoDecorate",children:I("div",{className:"ChatPreview",children:[h("div",{className:`UserPreview ${u}`,children:l}),I("div",{className:"MessagePreview",children:[h("h3",{children:a}),h("p",{children:n==null?void 0:n.name})]}),h("div",{className:"ReleasePreview",children:h("p",{children:Ak(i)})})]})})}function PR(){const t=Ni(),e=ob(t==null?void 0:t.uid),n=e.reduce((s,o)=>ce(ce({},s),o.participants),{}),r=Ol(n,Al),i=e.length>0?e.sort((s,o)=>o.release_timestamp-s.release_timestamp).map(s=>h(bR,{match:s,users:r,community:s.communityConfig},s.id)):h("div",{className:"Page",children:h("p",{children:"No matches yet."})});return I("div",{className:"AllChatsPage FullHeight LightBackground",children:[I("div",{className:"Header Light",children:[h("h1",{className:"BigTitle",children:h(Ye,{to:"/",children:h("span",{children:"Butterfly Chats"})})}),h("p",{children:"Each week, you will be matched to another person in your community."}),I("p",{children:[h("span",{children:"Check back on Mondays to see who you are matched with! "}),I("span",{children:["Update ",h(Ye,{to:"/me",children:"your profile"})," for better matches."]})]})]}),h("div",{className:"Inbox",children:i})]})}function RR(){const t=P.exports.createRef(),{sendChatMessage:e}=P.exports.useContext(xi),n=()=>{e(t.current.value),t.current.value=""};return I("div",{className:"ChatComposerInner",children:[h("textarea",{ref:t,className:"Input",placeholder:"Type here...",onKeyDown:i=>{const s=i.keyCode===13,o=i.ctrlKey||i.shiftKey;s&&!o&&(i.preventDefault(),n())}}),h("button",{type:"button",onClick:n,className:"Button Send",children:h(Xe,{icon:wE,className:"IconBefore"})})]})}function AR(t,e){return Object.keys(t).filter(n=>n!==e).sort().reduce((n,r,i)=>Ve(ce({},n),{[r]:`Theirs Participant${i}`}),{[e]:"Mine"})}function Qi({data:t,myUserId:e,participants:n}){const{message:r,from:i,type:s}=t,o=AR(n,e);if(s!==L1)return null;const a=(n==null?void 0:n[i])||tb,l=r.split(`
`).map((d,f)=>h("p",{children:d},f)),u=i===e,c=h("div",{className:"ProfileImage",children:h("img",{src:a.photoURL,alt:a.displayName,className:"Image"})});return I("div",{className:`Message ${o[i]}`,children:[!u&&c,I("div",{className:"MessageInner",children:[h("p",{className:"Author",children:a.displayName}),h("div",{className:"Body",children:l})]}),u&&c]})}const OR=({commonLetters:t})=>{const e=i2(t.length,"letter"),n=t.join(", "),r=`Fun fact, your names have ${e} in common: ${n}!`,i="Fun fact, your names have no letters in common!",s=t.length>0?r:i;return h("div",{className:"CommonLettersStarter",children:h("p",{children:s})})},LR=({chat:t})=>{var e;return h(OR,{commonLetters:((e=t==null?void 0:t.metadata)==null?void 0:e.commonLetters)||[]})};const MR=({})=>h("p",{children:"Liliana Ortiz was here!"}),Ig=({chat:t})=>h(MR,{});const DR=({})=>h("div",{}),Tg=({chat:t})=>h(DR,{});const FR=({})=>h("div",{}),Ng=({chat:t})=>h(FR,{}),Mu={commonLettersGenerator:LR,rareIntentsGenerator:Ig,similarIntentsGenerator:Ig,rareInterestsGenerator:Tg,similarInterestsGenerator:Tg,limitedSchedulesGenerator:Ng,similarSchedulesGenerator:Ng};function UR(t){var r;const e=(r=t==null?void 0:t.metadata)==null?void 0:r.generator,n=Mu==null?void 0:Mu[e];return!e||!n?null:n}function zR(){const{chat:t,messages:e,myUserId:n}=P.exports.useContext(xi),r=UR(t),i=r&&h("div",{children:h(r,{chat:t})},"conversation_starter"),s=h("p",{children:"Loading chat..."}),o=h("p",{children:"No messages yet, will you start things off?"}),a=t.isLoaded&&e.map(l=>h(Qi,{data:l,myUserId:n,participants:t.participants},l.key));return t.isLoaded?i?[i,...a]:e.length>0?a:o:s}const $R=({})=>h("p",{children:"Nida Akkiswala was here!"}),BR=({chat:t,config:e})=>h($R,{});const jR=({})=>h("p",{children:"Grace was here!"}),WR=({chat:t,config:e})=>h(jR,{});const HR=({})=>h("p",{children:"Hello Amir was here!"}),VR=({chat:t,config:e})=>h(HR,{});const GR=({})=>h("div",{children:h("p",{children:"Luis was here! "})}),qR=({chat:t,config:e})=>h(GR,{}),KR={options:[{id:"search",name:"Search Messages",component:BR},{id:"block",name:"Block User",component:WR},{id:"rate",name:"Rate Match",component:VR},{id:"upvote",name:"Upvote User",component:qR}]};function YR(){const{communityId:t,chatId:e}=Cd(),n=`${t}/${e}`;return h("div",{className:"ChatPage",children:h("div",{className:"ChatContainer",children:h(gR,{chatId:n,header:h(xR,{menuConfig:KR}),conversation:h(zR,{}),composer:h(RR,{})})})})}const QR=({})=>h("p",{children:" Marilyn Elaine Flowers was here! "});const XR=({})=>h("p",{children:"Dinora Saldivar was here!"});function JR({communityId:t,communityData:e}){return!e&&I(mr,{children:[I("p",{children:["No community found for ",h("strong",{children:t}),"."]}),h("p",{children:"Check your link or ask the person who invited you for help."})]})}function ZR({authUser:t,doLogIn:e}){return!t&&I(mr,{children:[h("p",{children:"Log in to join this community on Butterfly."}),h(yi,{label:"Log in with Google",iconBefore:vh,onClick:e})]})}function eA({authUser:t,doLogIn:e}){return t&&I(mr,{children:[I("p",{children:["You are currently logged in as ",t==null?void 0:t.displayName,"."]}),h("p",{children:"Want to log in with another account?"}),h(yi,{label:"Log in with Google",iconBefore:vh,onClick:e})]})}function tA({authUser:t,handleJoin:e}){return t&&h(yi,{label:"Join Community",primary:!0,iconBefore:TE,onClick:e})}function nA({message:t=null,error:e=null}){const n=t||e;return n&&h("p",{children:n})}function rA({communityId:t,communityData:e,authUser:n,doJoin:r,doLogIn:i}){const[s,o]=P.exports.useState(null),a=Ya(),l=async()=>{if(!(n!=null&&n.uid)){o({message:"You must be logged in to join."});return}const u=await r(t,n.uid);o(u),u.success&&a("/chats")};return e&&I(mr,{children:[I("p",{children:["You are invited to join ",h("strong",{children:e.name}),"."]}),h(tA,{authUser:n,handleJoin:l}),h(nA,ce({},s)),h(ZR,{authUser:n,doLogIn:i}),h(eA,{authUser:n,doLogIn:i})]})}function iA({communityId:t,communityConfig:e,authUser:n,doJoin:r,doLogIn:i}){const s=e==null?void 0:e[t];return I("div",{className:"Centered",children:[h("h1",{className:"BigTitle",children:"Join Community"}),h(rA,{communityId:t,communityData:s,authUser:n,doJoin:r,doLogIn:i}),h(JR,{communityId:t,communityData:s}),h("p",{children:h(Ye,{to:"/",children:"Back to Home"})})]})}function sA({communities:t=[],selected:e,setCommunityId:n}){return h("div",{className:"CommunitySelector",children:t.length>0&&h("select",{onChange:r=>n(r.target.value),value:e||"",children:t.map(r=>h("option",{value:r.id,children:r.name},r.id))})})}function oA(){const t=Ni(),e=t==null?void 0:t.uid,[n,r,i]=rb(e),s=(kt==null?void 0:kt[n])||{};return t&&I("div",{className:"EditProfilePage",children:[I("div",{className:"Header",children:[h("h1",{className:"BigTitle",children:"Edit Profile"}),h("p",{children:"Update your profile to help us give you better matches!"}),h(Yc,{user:t}),h(Ye,{to:"/chats",children:h("p",{children:"Back to your matches."})})]}),I("div",{className:"Page",children:[h(sA,{communities:i,selected:n,setCommunityId:r}),h("h2",{children:"Support"}),h(QR,{allIntents:s==null?void 0:s.intents}),h("h2",{children:"Interests"}),h(XR,{allInterests:s==null?void 0:s.interests}),h("h2",{children:"Schedule"}),h("p",{children:"Coming soon..."})]})]})}async function aA(t,e){const n=`/core/community/${t}/join/${e}`;return await y_({route:n,options:{method:"POST"}})}async function lA(){const{user:t}=await R1();t&&await mh(t)}function uA(){const{communityId:t}=Cd(),e=Ni();return I("div",{className:"Layout Page",children:[h(iA,{communityId:t,communityConfig:kt,authUser:e,doJoin:aA,doLogIn:lA}),h(gh,{})]})}const cA="Contacting backend API...";function dA(t,e){return e?`Error: ${e}`:t?JSON.stringify(t,null,4):cA}function fA(){const[t,e]=Lk({route:"/"}),n=dA(t,e);return h("div",{className:"Layout Page",children:I("div",{children:[h("h1",{className:"BigTitle",children:"Status"}),h(Ye,{to:"/",children:"Back to Home"}),h("pre",{children:n})]})})}const hA="7MIFL%Jj960nT^QX",D1=[{displayName:"Pradeep Balaram",email:"scarletdatastudio+pradeep@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/45.jpg"},{displayName:"Si-Woo Yun-Seo",email:"scarletdatastudio+siwoo@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/92.jpg"},{displayName:"Ilya Viktoria",email:"scarletdatastudio+ilya@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/31.jpg"},{displayName:"Asabe Oyibo",email:"scarletdatastudio+asabe@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/89.jpg"},{displayName:"Ernesto Sa\xFAl",email:"scarletdatastudio+ernesto@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"},{displayName:"Quy\xEAn H\u01B0\u01A1ng",email:"scarletdatastudio+quyen@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}],Du=D1.reduce((t,e)=>Ve(ce({},t),{[e.email]:e}),{});async function pA(t){const e=Du==null?void 0:Du[t];if(!e)return{user:null,signInError:`No mock user for email: '${t}'`};try{const n=$l(),{email:r,displayName:i,photoURL:s}=e,{user:o}=await qb(n,r,hA);return await Yb(n.currentUser,{displayName:i,photoURL:s}),{user:o,signInError:null}}catch(n){return{user:null,signInError:n}}}function mA({mockUsers:t,doLogIn:e}){const n=P.exports.createRef(),r=()=>{const s=n.current.value;s&&e(s)},i=t.map(({email:s,displayName:o})=>h("option",{value:s,children:o},s));return I("div",{children:[h("p",{children:h("select",{ref:n,className:"LoginUserSelector",children:i})}),h(yi,{label:"Log in as Mock User",primary:!0,iconBefore:vv,onClick:r}),I("p",{children:[h(Ye,{to:"/login",children:"Back to Real Login"}),h("span",{children:" | "}),h(Ye,{to:"/status",children:"Status Page"})]})]})}function gA(){const[t,e]=P.exports.useState(null),n=Ni(),r=async s=>{const{user:o,signInError:a}=await pA(s);o?(await mh(o),e(null)):(console.error(a),e(a))},i=async()=>{const{isSuccess:s,signOutError:o}=await A1();s||e(o)};return h("div",{className:"Page LoginPage FullHeight VerticalCenter",children:I("div",{children:[h(bf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h("hr",{}),h("h2",{children:"Mock User Login"}),h(mA,{doLogIn:r,mockUsers:D1}),I(_l,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(O1,{authUser:n,doLogOut:i})]})})}const Lo={"user-a":{displayName:"Me"},"user-b":{displayName:"User B"},"user-c":{displayName:"User C"},"user-d":{displayName:"User D"}};function vA(){return I("div",{className:"Layout",children:[h("div",{className:"Header",children:h("h1",{className:"BigTitle",children:"Style Guide"})}),I("div",{className:"Page",children:[I("section",{className:"Section",children:[h("h2",{children:"Typography"}),h("hr",{}),h("h1",{children:"Heading 1"}),h("h2",{children:"Heading 2"}),h("h3",{children:"Heading 3"}),h("h4",{children:"Heading 4"}),h("h5",{children:"Heading 5"}),h("h6",{children:"Heading 6"}),h("p",{children:"Paragraph"})]}),I("section",{className:"Section",children:[h("h2",{children:"User Elements"}),h("hr",{}),I("div",{className:"UserRow",children:[h(Yc,{user:{displayName:"Ernesto Sa\xFAl",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"}}),h(Yc,{user:{displayName:"Quy\xEAn H\u01B0\u01A1ng",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}})]})]}),I("section",{className:"Section",children:[h("h2",{children:"Chat Elements"}),h("hr",{}),h(Qi,{data:{type:"MESSAGE",from:"user-a",message:`Hello,
This is a multi-paragraph message I sent!`},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-b",message:"And I am replying to you."},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-c",message:"I am another participant."},myUserId:"user-a",participants:Lo}),h(Qi,{data:{type:"MESSAGE",from:"user-d",message:"And I am yet another participant."},myUserId:"user-a",participants:Lo})]}),I("section",{className:"Section",children:[h("h2",{children:"Card Elements"}),h("hr",{}),h("h4",{children:"Full Cards"}),I("div",{className:"Card Full",children:[h("h4",{children:"Card 1"}),h("p",{children:"Card Content"})]}),I("div",{className:"Card Full",children:[h("h4",{children:"Card 2"}),h("p",{children:"Card Content"})]}),h("h3",{children:"Card Row"}),I("div",{className:"CardRow",children:[I("div",{className:"Card",children:[h("h4",{children:"Card A"}),h("p",{children:"Card Content"})]}),I("div",{className:"Card",children:[h("h4",{children:"Card B"}),h("p",{children:"Card Content"})]}),I("div",{className:"Card",children:[h("h4",{children:"Card C"}),h("p",{children:"Card Content"})]})]})]}),I("section",{className:"Section",children:[h("h2",{children:"Buttons"}),h("hr",{}),I("div",{className:"ButtonRow",children:[h("span",{className:"Button Primary",children:"Primary"}),h("span",{className:"Button",children:"Secondary"})]}),I("div",{className:"ButtonRow",children:[I("span",{className:"Button Primary",children:[h(Xe,{icon:SE,className:"IconBefore"}),h("span",{children:"With Icon"})]}),I("span",{className:"Button",children:[h(Xe,{icon:kE,className:"IconBefore"}),h("span",{children:"With Icon"})]})]}),h("span",{className:"Button",children:"Single Button"})]}),I("section",{className:"Section",children:[h("h2",{children:"Error Elements"}),h("hr",{}),I(_l,{hasError:!0,children:[h("h4",{children:"Something went wrong."}),h("p",{children:"We broke it, sorry about that!"})]})]}),I("section",{className:"Section",children:[h("h2",{children:"Lists"}),h("hr",{}),h("h3",{children:"Unordered List"}),I("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]}),h("h3",{children:"Ordered List"}),I("ol",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),I("section",{className:"Section",children:[h("h2",{children:"Columns"}),h("hr",{}),h("h3",{children:"Two Columns"}),I("div",{className:"Columns",children:[I("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("p",{children:"Column Content"})]}),I("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Three Columns"}),I("div",{className:"Columns",children:[I("div",{className:"Column Third",children:[h("h4",{children:"Col 1"}),h("p",{children:"Column Content"})]}),I("div",{className:"Column Third",children:[h("h4",{children:"Col 2"}),h("p",{children:"Column Content"})]}),I("div",{className:"Column Third",children:[h("h4",{children:"Col 3"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Columns with Elements"}),I("div",{className:"Columns",children:[I("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("h5",{children:"List"}),I("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),I("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),I("div",{className:"Card Full",children:[h("h5",{children:"Card"}),h("p",{children:"Card Content"})]})]})]})]})]})]})}const yA="/butterfly",xg="butterfly__pathname";function _A(){const t=Ya();return P.exports.useEffect(()=>{const e=localStorage.getItem(xg);if(e){localStorage.setItem(xg,"");const n=e.substring(yA.length);t(n)}},[t]),I(Rw,{children:[h(Ce,{index:!0,element:h(fb,{})}),I(Ce,{path:"/",element:h(d2,{}),children:[h(Ce,{path:"login",element:h(lR,{})}),h(Ce,{path:"me",element:h(oA,{})}),h(Ce,{path:"join",children:h(Ce,{path:":communityId",element:h(uA,{})})}),h(Ce,{path:"profile",children:h(Ce,{path:":uid",element:h(uR,{})})}),I(Ce,{path:"chats",children:[h(Ce,{index:!0,element:h(PR,{})}),h(Ce,{path:":communityId/:chatId",element:h(YR,{})})]}),h(Ce,{path:"status",element:h(fA,{})}),h(Ce,{path:"mocklogin",element:h(gA,{})}),h(Ce,{path:"resources",children:h(Ce,{path:"styleguide",element:h(vA,{})})})]}),h(Ce,{path:"*",element:h(f2,{})})]})}function wA(){const t=n2();return h("div",{className:"App Theme",children:h(r2.Provider,{value:t,children:h(_A,{})})})}const CA=[IE];vE.add(CA);document.title="Butterfly";Ju.createRoot(document.getElementById("root")).render(h(Dg.StrictMode,{children:h(Lw,{basename:"butterfly",children:h(wA,{})})}));