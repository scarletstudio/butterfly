var Bw=Object.defineProperty,Ww=Object.defineProperties;var Hw=Object.getOwnPropertyDescriptors;var wo=Object.getOwnPropertySymbols;var tp=Object.prototype.hasOwnProperty,np=Object.prototype.propertyIsEnumerable;var ep=(t,e,n)=>e in t?Bw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e)=>{for(var n in e||(e={}))tp.call(e,n)&&ep(t,n,e[n]);if(wo)for(var n of wo(e))np.call(e,n)&&ep(t,n,e[n]);return t},Ne=(t,e)=>Ww(t,Hw(e));var Co=(t,e)=>{var n={};for(var r in t)tp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&wo)for(var r of wo(t))e.indexOf(r)<0&&np.call(t,r)&&(n[r]=t[r]);return n};const Vw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Vw();var N={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=Symbol.for("react.element"),qw=Symbol.for("react.portal"),Gw=Symbol.for("react.fragment"),Kw=Symbol.for("react.strict_mode"),Yw=Symbol.for("react.profiler"),Qw=Symbol.for("react.provider"),Xw=Symbol.for("react.context"),Jw=Symbol.for("react.forward_ref"),Zw=Symbol.for("react.suspense"),eC=Symbol.for("react.memo"),tC=Symbol.for("react.lazy"),rp=Symbol.iterator;function nC(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cv=Object.assign,dv={};function Si(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fv(){}fv.prototype=Si.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}var Dd=Md.prototype=new fv;Dd.constructor=Md;cv(Dd,Si.prototype);Dd.isPureReactComponent=!0;var ip=Array.isArray,hv=Object.prototype.hasOwnProperty,Fd={current:null},pv={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hv.call(e,r)&&!pv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Js,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function rC(t,e){return{$$typeof:Js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Js}function iC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sp=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iC(""+t.key):e.toString(36)}function qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Js:case qw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ou(o,0):r,ip(i)?(n="",t!=null&&(n=t.replace(sp,"$&/")+"/"),qo(i,e,n,"",function(u){return u})):i!=null&&(Ud(i)&&(i=rC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ip(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ou(s,a);o+=qo(s,e,n,l,i)}else if(l=nC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ou(s,a++),o+=qo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eo(t,e,n){if(t==null)return t;var r=[],i=0;return qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},Go={transition:null},oC={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Fd};H.Children={map:Eo,forEach:function(t,e,n){Eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eo(t,function(){e++}),e},toArray:function(t){return Eo(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Si;H.Fragment=Gw;H.Profiler=Yw;H.PureComponent=Md;H.StrictMode=Kw;H.Suspense=Zw;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oC;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hv.call(e,l)&&!pv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Js,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Xw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qw,_context:t},t.Consumer=t};H.createElement=mv;H.createFactory=function(t){var e=mv.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Jw,render:t}};H.isValidElement=Ud;H.lazy=function(t){return{$$typeof:tC,_payload:{_status:-1,_result:t},_init:sC}};H.memo=function(t,e){return{$$typeof:eC,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Go.transition;Go.transition={};try{t()}finally{Go.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Fe.current.useCallback(t,e)};H.useContext=function(t){return Fe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Fe.current.useEffect(t,e)};H.useId=function(){return Fe.current.useId()};H.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Fe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};H.useRef=function(t){return Fe.current.useRef(t)};H.useState=function(t){return Fe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Fe.current.useTransition()};H.version="18.0.0-fc46dba67-20220329";N.exports=H;var gv=N.exports;function ua(){return ua=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ua.apply(this,arguments)}var qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qn||(qn={}));var op=function(t){return t},ap="beforeunload",aC="popstate";function lC(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=r.location,I=E.pathname,M=E.search,D=E.hash,ie=i.state||{};return[ie.idx,op({pathname:I,search:M,hash:D,state:ie.usr||null,key:ie.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var E=qn.Pop,I=s(),M=I[0],D=I[1];if(m.length){if(M!=null){var ie=c-M;ie&&(o={action:E,location:D,retry:function(){S(ie*-1)}},S(ie))}}else p(E)}}r.addEventListener(aC,a);var l=qn.Pop,u=s(),c=u[0],d=u[1],h=up(),m=up();c==null&&(c=0,i.replaceState(ua({},i.state,{idx:c}),""));function v(E){return typeof E=="string"?E:tc(E)}function w(E,I){return I===void 0&&(I=null),op(ua({pathname:d.pathname,hash:"",search:""},typeof E=="string"?wr(E):E,{state:I,key:uC()}))}function b(E,I){return[{usr:E.state,key:E.key,idx:I},v(E)]}function g(E,I,M){return!m.length||(m.call({action:E,location:I,retry:M}),!1)}function p(E){l=E;var I=s();c=I[0],d=I[1],h.call({action:l,location:d})}function y(E,I){var M=qn.Push,D=w(E,I);function ie(){y(E,I)}if(g(M,D,ie)){var nt=b(D,c+1),Dt=nt[0],zn=nt[1];try{i.pushState(Dt,"",zn)}catch{r.location.assign(zn)}p(M)}}function _(E,I){var M=qn.Replace,D=w(E,I);function ie(){_(E,I)}if(g(M,D,ie)){var nt=b(D,c),Dt=nt[0],zn=nt[1];i.replaceState(Dt,"",zn),p(M)}}function S(E){i.go(E)}var x={get action(){return l},get location(){return d},createHref:v,push:y,replace:_,go:S,back:function(){S(-1)},forward:function(){S(1)},listen:function(I){return h.push(I)},block:function(I){var M=m.push(I);return m.length===1&&r.addEventListener(ap,lp),function(){M(),m.length||r.removeEventListener(ap,lp)}}};return x}function lp(t){t.preventDefault(),t.returnValue=""}function up(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function uC(){return Math.random().toString(36).substr(2,8)}function tc(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function wr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zd=N.exports.createContext(null),$d=N.exports.createContext(null),ki=N.exports.createContext({outlet:null,matches:[]});function Rt(t,e){if(!t)throw new Error(e)}function cC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?wr(e):e,i=_v(r.pathname||"/",n);if(i==null)return null;let s=vv(t);dC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=wC(s[a],i);return o}function vv(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Rt(!1),o.relativePath=o.relativePath.slice(r.length));let a=yn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Rt(!1),vv(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:yC(a,i.index),routesMeta:l})}),e}function dC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_C(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fC=/^:\w+$/,hC=3,pC=2,mC=1,gC=10,vC=-2,cp=t=>t==="*";function yC(t,e){let n=t.split("/"),r=n.length;return n.some(cp)&&(r+=vC),e&&(r+=pC),n.filter(i=>!cp(i)).reduce((i,s)=>i+(fC.test(s)?hC:s===""?mC:gC),r)}function _C(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function wC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=CC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:yn([i,c.pathname]),pathnameBase:wv(yn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=yn([i,c.pathnameBase]))}return s}function CC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=SC(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function SC(t,e){try{return decodeURIComponent(t)}catch{return t}}function kC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wr(t):t;return{pathname:n?n.startsWith("/")?n:IC(n,e):e,search:NC(r),hash:bC(i)}}function IC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yv(t,e,n){let r=typeof t=="string"?wr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=kC(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function TC(t){return t===""||t.pathname===""?"/":typeof t=="string"?wr(t).pathname:t.pathname}function _v(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const yn=t=>t.join("/").replace(/\/\/+/g,"/"),wv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xC(t){Zs()||Rt(!1);let{basename:e,navigator:n}=N.exports.useContext(zd),{hash:r,pathname:i,search:s}=Cv(t),o=i;if(e!=="/"){let a=TC(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):yn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Zs(){return N.exports.useContext($d)!=null}function ol(){return Zs()||Rt(!1),N.exports.useContext($d).location}function al(){Zs()||Rt(!1);let{basename:t,navigator:e}=N.exports.useContext(zd),{matches:n}=N.exports.useContext(ki),{pathname:r}=ol(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=N.exports.useRef(!1);return N.exports.useEffect(()=>{s.current=!0}),N.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=yv(a,JSON.parse(i),r);t!=="/"&&(u.pathname=yn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const PC=N.exports.createContext(null);function RC(t){let e=N.exports.useContext(ki).outlet;return e&&N.exports.createElement(PC.Provider,{value:t},e)}function jd(){let{matches:t}=N.exports.useContext(ki),e=t[t.length-1];return e?e.params:{}}function Cv(t){let{matches:e}=N.exports.useContext(ki),{pathname:n}=ol(),r=JSON.stringify(e.map(i=>i.pathnameBase));return N.exports.useMemo(()=>yv(t,JSON.parse(r),n),[t,r,n])}function AC(t,e){Zs()||Rt(!1);let{matches:n}=N.exports.useContext(ki),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=ol(),a;if(e){var l;let h=typeof e=="string"?wr(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||Rt(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=cC(t,{pathname:c});return OC(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:yn([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:yn([s,h.pathnameBase])})),n)}function OC(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>N.exports.createElement(ki.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function LC(t){return RC(t.context)}function Ee(t){Rt(!1)}function MC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:s,static:o=!1}=t;Zs()&&Rt(!1);let a=wv(e),l=N.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=wr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,v=N.exports.useMemo(()=>{let w=_v(u,a);return w==null?null:{pathname:w,search:c,hash:d,state:h,key:m}},[a,u,c,d,h,m]);return v==null?null:N.exports.createElement(zd.Provider,{value:l},N.exports.createElement($d.Provider,{children:n,value:{location:v,navigationType:i}}))}function DC(t){let{children:e,location:n}=t;return AC(nc(e),n)}function nc(t){let e=[];return N.exports.Children.forEach(t,n=>{if(!N.exports.isValidElement(n))return;if(n.type===N.exports.Fragment){e.push.apply(e,nc(n.props.children));return}n.type!==Ee&&Rt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=nc(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rc.apply(this,arguments)}function FC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const UC=["onClick","reloadDocument","replace","state","target","to"];function zC(t){let{basename:e,children:n,window:r}=t,i=N.exports.useRef();i.current==null&&(i.current=lC({window:r}));let s=i.current,[o,a]=N.exports.useState({action:s.action,location:s.location});return N.exports.useLayoutEffect(()=>s.listen(a),[s]),N.exports.createElement(MC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function $C(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Xe=N.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=FC(e,UC),c=xC(l),d=jC(l,{replace:s,state:o,target:a});function h(m){r&&r(m),!m.defaultPrevented&&!i&&d(m)}return N.exports.createElement("a",rc({},u,{href:c,onClick:h,ref:n,target:a}))});function jC(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=al(),o=ol(),a=Cv(t);return N.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!$C(l)){l.preventDefault();let u=!!r||tc(o)===tc(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function dp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dp(Object(n),!0).forEach(function(r){HC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ca(t){return ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ca(t)}function BC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function WC(t,e,n){return e&&fp(t.prototype,e),n&&fp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function HC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bd(t,e){return qC(t)||KC(t,e)||Ev(t,e)||QC()}function ll(t){return VC(t)||GC(t)||Ev(t)||YC()}function VC(t){if(Array.isArray(t))return ic(t)}function qC(t){if(Array.isArray(t))return t}function GC(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KC(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Ev(t,e){if(!!t){if(typeof t=="string")return ic(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ic(t,e)}}function ic(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function YC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hp=function(){},Wd={},Sv={},kv=null,Iv={mark:hp,measure:hp};try{typeof window!="undefined"&&(Wd=window),typeof document!="undefined"&&(Sv=document),typeof MutationObserver!="undefined"&&(kv=MutationObserver),typeof performance!="undefined"&&(Iv=performance)}catch{}var XC=Wd.navigator||{},pp=XC.userAgent,mp=pp===void 0?"":pp,Tn=Wd,te=Sv,gp=kv,So=Iv;Tn.document;var tn=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Tv=~mp.indexOf("MSIE")||~mp.indexOf("Trident/"),Kt="___FONT_AWESOME___",sc=16,Nv="fa",bv="svg-inline--fa",or="data-fa-i2svg",oc="data-fa-pseudo-element",JC="data-fa-pseudo-element-pending",Hd="data-prefix",Vd="data-icon",vp="fontawesome-i2svg",ZC="async",eE=["HTML","HEAD","STYLE","SCRIPT"],xv=function(){try{return!0}catch{return!1}}(),qd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},da={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Pv={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},tE={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},nE=/fa[srltdbk\-\ ]/,Rv="fa-layers-text",rE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,iE={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Av=[1,2,3,4,5,6,7,8,9,10],sE=Av.concat([11,12,13,14,15,16,17,18,19,20]),oE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aE=[].concat(ll(Object.keys(da)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gn.GROUP,Gn.SWAP_OPACITY,Gn.PRIMARY,Gn.SECONDARY]).concat(Av.map(function(t){return"".concat(t,"x")})).concat(sE.map(function(t){return"w-".concat(t)})),Ov=Tn.FontAwesomeConfig||{};function lE(t){var e=te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(te&&typeof te.querySelector=="function"){var cE=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cE.forEach(function(t){var e=Bd(t,2),n=e[0],r=e[1],i=uE(lE(n));i!=null&&(Ov[r]=i)})}var dE={familyPrefix:Nv,styleDefault:"solid",replacementClass:bv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},os=R(R({},dE),Ov);os.autoReplaceSvg||(os.observeMutations=!1);var O={};Object.keys(os).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){os[t]=n,Ko.forEach(function(r){return r(O)})},get:function(){return os[t]}})});Tn.FontAwesomeConfig=O;var Ko=[];function fE(t){return Ko.push(t),function(){Ko.splice(Ko.indexOf(t),1)}}var sn=sc,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hE(t){if(!(!t||!tn)){var e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return te.head.insertBefore(e,r),t}}var pE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Es(){for(var t=12,e="";t-- >0;)e+=pE[Math.random()*62|0];return e}function Ii(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gd(t){return t.classList?Ii(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lv(t[n]),'" ')},"").trim()}function ul(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Kd(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function gE(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vE(t){var e=t.transform,n=t.width,r=n===void 0?sc:n,i=t.height,s=i===void 0?sc:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Tv?l+="translate(".concat(e.x/sn-r/2,"em, ").concat(e.y/sn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/sn,"em), calc(-50% + ").concat(e.y/sn,"em)) "):l+="translate(".concat(e.x/sn,"em, ").concat(e.y/sn,"em) "),l+="scale(".concat(e.size/sn*(e.flipX?-1:1),", ").concat(e.size/sn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var yE=`:root, :host {
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
}`;function Mv(){var t=Nv,e=bv,n=O.familyPrefix,r=O.replacementClass,i=yE;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var yp=!1;function au(){O.autoAddCss&&!yp&&(hE(Mv()),yp=!0)}var _E={mixout:function(){return{dom:{css:Mv,insertCss:au}}},hooks:function(){return{beforeDOMElementCreation:function(){au()},beforeI2svg:function(){au()}}}},Yt=Tn||{};Yt[Kt]||(Yt[Kt]={});Yt[Kt].styles||(Yt[Kt].styles={});Yt[Kt].hooks||(Yt[Kt].hooks={});Yt[Kt].shims||(Yt[Kt].shims=[]);var vt=Yt[Kt],Dv=[],wE=function t(){te.removeEventListener("DOMContentLoaded",t),fa=1,Dv.map(function(e){return e()})},fa=!1;tn&&(fa=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),fa||te.addEventListener("DOMContentLoaded",wE));function CE(t){!tn||(fa?setTimeout(t,0):Dv.push(t))}function eo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Lv(t):"<".concat(e," ").concat(mE(r),">").concat(s.map(eo).join(""),"</").concat(e,">")}function _p(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var EE=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},lu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?EE(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function SE(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ac(t){var e=SE(t);return e.length===1?e[0].toString(16):null}function kE(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function wp(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function lc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=wp(e);typeof vt.hooks.addPack=="function"&&!i?vt.hooks.addPack(t,wp(e)):vt.styles[t]=R(R({},vt.styles[t]||{}),s),t==="fas"&&lc("fa",e)}var as=vt.styles,IE=vt.shims,TE=Object.values(Pv),Yd=null,Fv={},Uv={},zv={},$v={},jv={},NE=Object.keys(qd);function bE(t){return~aE.indexOf(t)}function xE(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!bE(i)?i:null}var Bv=function(){var e=function(s){return lu(as,function(o,a,l){return o[l]=lu(a,s,{}),o},{})};Fv=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Uv=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),jv=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in as||O.autoFetchSvg,r=lu(IE,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});zv=r.names,$v=r.unicodes,Yd=cl(O.styleDefault)};fE(function(t){Yd=cl(t.styleDefault)});Bv();function Qd(t,e){return(Fv[t]||{})[e]}function PE(t,e){return(Uv[t]||{})[e]}function Lr(t,e){return(jv[t]||{})[e]}function Wv(t){return zv[t]||{prefix:null,iconName:null}}function RE(t){var e=$v[t],n=Qd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Nn(){return Yd}var Xd=function(){return{prefix:null,iconName:null,rest:[]}};function cl(t){var e=qd[t],n=da[t]||da[e],r=t in vt.styles?t:null;return n||r||null}function dl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=xE(O.familyPrefix,a);if(as[a]?(a=TE.includes(a)?tE[a]:a,i=a,o.prefix=a):NE.indexOf(a)>-1?(i=a,o.prefix=cl(a)):l?o.iconName=l:a!==O.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?Wv(o.iconName):{},c=Lr(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!as.far&&as.fas&&!O.autoFetchSvg&&(o.prefix="fas")}return o},Xd());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Nn()||"fas"),s}var AE=function(){function t(){BC(this,t),this.definitions={}}return WC(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),lc(a,o[a]);var l=Pv[a];l&&lc(l,o[a]),Bv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Cp=[],Mr={},Qr={},OE=Object.keys(Qr);function LE(t,e){var n=e.mixoutsTo;return Cp=t,Mr={},Object.keys(Qr).forEach(function(r){OE.indexOf(r)===-1&&delete Qr[r]}),Cp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ca(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Mr[o]||(Mr[o]=[]),Mr[o].push(s[o])})}r.provides&&r.provides(Qr)}),n}function uc(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Mr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ar(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Mr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Qt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qr[t]?Qr[t].apply(null,e):void 0}function cc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Nn();if(!!e)return e=Lr(n,e)||e,_p(Hv.definitions,n,e)||_p(vt.styles,n,e)}var Hv=new AE,ME=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,ar("noAuto")},DE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tn?(ar("beforeI2svg",e),Qt("pseudoElements2svg",e),Qt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,CE(function(){UE({autoReplaceSvgRoot:n}),ar("watch",e)})}},FE={icon:function(e){if(e===null)return null;if(ca(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Lr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=cl(e[0]);return{prefix:r,iconName:Lr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.familyPrefix,"-"))>-1||e.match(nE))){var i=dl(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Nn(),iconName:Lr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Nn();return{prefix:s,iconName:Lr(s,e)||e}}}},Ze={noAuto:ME,config:O,dom:DE,parse:FE,library:Hv,findIconDefinition:cc,toHtml:eo},UE=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(vt.styles).length>0||O.autoFetchSvg)&&tn&&O.autoReplaceSvg&&Ze.dom.i2svg({node:r})};function fl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return eo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!tn){var r=te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function zE(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Kd(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ul(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $E(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Jd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,m=h===void 0?!1:h,v=r.found?r:n,w=v.width,b=v.height,g=i==="fak",p=[O.replacementClass,s?"".concat(O.familyPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),y={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(b)})},_=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/b*16*.0625,"em")}:{};m&&(y.attributes[or]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Es())},children:[l]}),delete y.attributes.title);var S=R(R({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},_),d.styles)}),x=r.found&&n.found?Qt("generateAbstractMask",S)||{children:[],attributes:{}}:Qt("generateAbstractIcon",S)||{children:[],attributes:{}},E=x.children,I=x.attributes;return S.children=E,S.attributes=I,a?$E(S):zE(S)}function Ep(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[or]="");var c=R({},o.styles);Kd(i)&&(c.transform=vE({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=ul(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function jE(t){var e=t.content,n=t.title,r=t.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ul(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var uu=vt.styles;function dc(t){var e=t[0],n=t[1],r=t.slice(4),i=Bd(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.familyPrefix,"-").concat(Gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(Gn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(Gn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var BE={found:!1,width:512,height:512};function WE(t,e){!xv&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fc(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Nn()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var s=Wv(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&uu[e]&&uu[e][t]){var o=uu[e][t];return r(dc(o))}WE(t,e),r(R(R({},BE),{},{icon:O.showMissingIcons&&t?Qt("missingIconAbstract")||{}:{}}))})}var Sp=function(){},hc=O.measurePerformance&&So&&So.mark&&So.measure?So:{mark:Sp,measure:Sp},Ji='FA "6.1.1"',HE=function(e){return hc.mark("".concat(Ji," ").concat(e," begins")),function(){return Vv(e)}},Vv=function(e){hc.mark("".concat(Ji," ").concat(e," ends")),hc.measure("".concat(Ji," ").concat(e),"".concat(Ji," ").concat(e," begins"),"".concat(Ji," ").concat(e," ends"))},Zd={begin:HE,end:Vv},Yo=function(){};function kp(t){var e=t.getAttribute?t.getAttribute(or):null;return typeof e=="string"}function VE(t){var e=t.getAttribute?t.getAttribute(Hd):null,n=t.getAttribute?t.getAttribute(Vd):null;return e&&n}function qE(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function GE(){if(O.autoReplaceSvg===!0)return Qo.replace;var t=Qo[O.autoReplaceSvg];return t||Qo.replace}function KE(t){return te.createElementNS("http://www.w3.org/2000/svg",t)}function YE(t){return te.createElement(t)}function qv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?KE:YE:n;if(typeof t=="string")return te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(qv(o,{ceFn:r}))}),i}function QE(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(qv(i),n)}),n.getAttribute(or)===null&&O.keepOriginalSource){var r=te.createComment(QE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Gd(n).indexOf(O.replacementClass))return Qo.replace(e);var i=new RegExp("".concat(O.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return eo(a)}).join(`
`);n.setAttribute(or,""),n.innerHTML=o}};function Ip(t){t()}function Gv(t,e){var n=typeof e=="function"?e:Yo;if(t.length===0)n();else{var r=Ip;O.mutateApproach===ZC&&(r=Tn.requestAnimationFrame||Ip),r(function(){var i=GE(),s=Zd.begin("mutate");t.map(i),s(),n()})}}var ef=!1;function Kv(){ef=!0}function pc(){ef=!1}var ha=null;function Tp(t){if(!!gp&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?Yo:e,r=t.nodeCallback,i=r===void 0?Yo:r,s=t.pseudoElementsCallback,o=s===void 0?Yo:s,a=t.observeMutationsRoot,l=a===void 0?te:a;ha=new gp(function(u){if(!ef){var c=Nn();Ii(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!kp(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&kp(d.target)&&~oE.indexOf(d.attributeName))if(d.attributeName==="class"&&VE(d.target)){var h=dl(Gd(d.target)),m=h.prefix,v=h.iconName;d.target.setAttribute(Hd,m||c),v&&d.target.setAttribute(Vd,v)}else qE(d.target)&&i(d.target)})}}),tn&&ha.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function XE(){!ha||ha.disconnect()}function JE(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function ZE(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=dl(Gd(t));return i.prefix||(i.prefix=Nn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=PE(i.prefix,t.innerText)||Qd(i.prefix,ac(t.innerText))),i}function eS(t){var e=Ii(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Es()):(e["aria-hidden"]="true",e.focusable="false")),e}function tS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Np(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ZE(t),r=n.iconName,i=n.prefix,s=n.rest,o=eS(t),a=uc("parseNodeAttributes",{},t),l=e.styleParser?JE(t):[];return R({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var nS=vt.styles;function Yv(t){var e=O.autoReplaceSvg==="nest"?Np(t,{styleParser:!1}):Np(t);return~e.extra.classes.indexOf(Rv)?Qt("generateLayersText",t,e):Qt("generateSvgReplacementMutation",t,e)}function bp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tn)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(vp,"-").concat(d))},i=function(d){return n.remove("".concat(vp,"-").concat(d))},s=O.autoFetchSvg?Object.keys(qd):Object.keys(nS),o=[".".concat(Rv,":not([").concat(or,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(or,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ii(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Zd.begin("onTree"),u=a.reduce(function(c,d){try{var h=Yv(d);h&&c.push(h)}catch(m){xv||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){Gv(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function rS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yv(t).then(function(n){n&&Gv([n],e)})}function iS(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cc(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:cc(i||{})),t(r,R(R({},n),{},{mask:i}))}}var sS=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?It:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,m=n.titleId,v=m===void 0?null:m,w=n.classes,b=w===void 0?[]:w,g=n.attributes,p=g===void 0?{}:g,y=n.styles,_=y===void 0?{}:y;if(!!e){var S=e.prefix,x=e.iconName,E=e.icon;return fl(R({type:"icon"},e),function(){return ar("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(h?p["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||Es()):(p["aria-hidden"]="true",p.focusable="false")),Jd({icons:{main:dc(E),mask:l?dc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:x,transform:R(R({},It),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:p,styles:_,classes:b}})})}},oS={mixout:function(){return{icon:iS(sS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bp,n.nodeCallback=rS,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?te:r,s=n.callback,o=s===void 0?function(){}:s;return bp(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(m,v){Promise.all([fc(i,a),c.iconName?fc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var b=Bd(w,2),g=b[0],p=b[1];m([n,Jd({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ul(a);l.length>0&&(i.style=l);var u;return Kd(o)&&(u=Qt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},aS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return fl({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.familyPrefix,"-layers")].concat(ll(s)).join(" ")},children:o}]})}}}},lS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return fl({type:"counter",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),jE({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(O.familyPrefix,"-layers-counter")].concat(ll(a))}})})}}}},uS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?It:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return fl({type:"text",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),Ep({content:n,transform:R(R({},It),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(O.familyPrefix,"-layers-text")].concat(ll(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Tv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ep({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},cS=new RegExp('"',"ug"),xp=[1105920,1112319];function dS(t){var e=t.replace(cS,""),n=kE(e,0),r=n>=xp[0]&&n<=xp[1],i=e.length===2?e[0]===e[1]:!1;return{value:ac(i?e[0]:e),isSecondary:r||i}}function Pp(t,e){var n="".concat(JC).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ii(t.children),o=s.filter(function(x){return x.getAttribute(oc)===e})[0],a=Tn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(rE),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?da[l[2].toLowerCase()]:iE[u],m=dS(d),v=m.value,w=m.isSecondary,b=l[0].startsWith("FontAwesome"),g=Qd(h,v),p=g;if(b){var y=RE(v);y.iconName&&y.prefix&&(g=y.iconName,h=y.prefix)}if(g&&!w&&(!o||o.getAttribute(Hd)!==h||o.getAttribute(Vd)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);var _=tS(),S=_.extra;S.attributes[oc]=e,fc(g,h).then(function(x){var E=Jd(R(R({},_),{},{icons:{main:x,mask:Xd()},prefix:h,iconName:p,extra:S,watchable:!0})),I=te.createElement("svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=E.map(function(M){return eo(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fS(t){return Promise.all([Pp(t,"::before"),Pp(t,"::after")])}function hS(t){return t.parentNode!==document.head&&!~eE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(oc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Rp(t){if(!!tn)return new Promise(function(e,n){var r=Ii(t.querySelectorAll("*")).filter(hS).map(fS),i=Zd.begin("searchPseudoElements");Kv(),Promise.all(r).then(function(){i(),pc(),e()}).catch(function(){i(),pc(),n()})})}var pS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?te:r;O.searchPseudoElements&&Rp(i)}}},Ap=!1,mS={mixout:function(){return{dom:{unwatch:function(){Kv(),Ap=!0}}}},hooks:function(){return{bootstrap:function(){Tp(uc("mutationObserverCallbacks",{}))},noAuto:function(){XE()},watch:function(n){var r=n.observeMutationsRoot;Ap?pc():Tp(uc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Op=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},gS={mixout:function(){return{parse:{transform:function(n){return Op(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Op(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:h};return{tag:"g",attributes:R({},m.outer),children:[{tag:"g",attributes:R({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),m.path)}]}]}}}},cu={x:0,y:0,width:"100%",height:"100%"};function Lp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vS(t){return t.tag==="g"?t.children:[t]}var yS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?dl(i.split(" ").map(function(o){return o.trim()})):Xd();return s.prefix||(s.prefix=Nn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,m=gE({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:R(R({},cu),{},{fill:"white"})},w=c.children?{children:c.children.map(Lp)}:{},b={tag:"g",attributes:R({},m.inner),children:[Lp(R({tag:c.tag,attributes:R(R({},c.attributes),m.path)},w))]},g={tag:"g",attributes:R({},m.outer),children:[b]},p="mask-".concat(a||Es()),y="clip-".concat(a||Es()),_={tag:"mask",attributes:R(R({},cu),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:vS(h)},_]};return r.push(S,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},cu)}),{children:r,attributes:i}}}},_S={provides:function(e){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},CS=[_E,oS,aS,lS,uS,pS,mS,gS,yS,_S,wS];LE(CS,{mixoutsTo:Ze});Ze.noAuto;Ze.config;var ES=Ze.library;Ze.dom;var mc=Ze.parse;Ze.findIconDefinition;Ze.toHtml;var SS=Ze.icon;Ze.layer;Ze.text;Ze.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var kS={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"]},IS={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"]},Qv={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},TS={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},NS=TS,bS={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"]},xS={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"]},PS={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},RS={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},AS={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"]},OS={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},LS=OS,Ui={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]},MS={prefix:"fas",iconName:"unlock",icon:[448,512,[128275],"f09c","M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"]},DS={prefix:"fas",iconName:"user-lock",icon:[640,512,[],"f502","M592 288H576V212.7c0-41.84-30.03-80.04-71.66-84.27C456.5 123.6 416 161.1 416 208V288h-16C373.6 288 352 309.6 352 336v128c0 26.4 21.6 48 48 48h192c26.4 0 48-21.6 48-48v-128C640 309.6 618.4 288 592 288zM496 432c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S513.6 432 496 432zM528 288h-64V208c0-17.62 14.38-32 32-32s32 14.38 32 32V288zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM320 336c0-8.672 1.738-16.87 4.303-24.7C308.6 306.6 291.9 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h301.7C326.3 498.6 320 482.1 320 464V336z"]},Xv={prefix:"fas",iconName:"user-ninja",icon:[512,512,[129399],"f504","M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"]},gc={},Jv={exports:{}},et={},Zv={exports:{}},ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var z=A.length;A.push(U);e:for(;0<z;){var ce=z-1>>>1,ge=A[ce];if(0<i(ge,U))A[ce]=U,A[z]=ge,z=ce;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],z=A.pop();if(z!==U){A[0]=z;e:for(var ce=0,ge=A.length,yo=ge>>>1;ce<yo;){var $n=2*(ce+1)-1,su=A[$n],jn=$n+1,_o=A[jn];if(0>i(su,z))jn<ge&&0>i(_o,su)?(A[ce]=_o,A[jn]=z,ce=jn):(A[ce]=su,A[$n]=z,ce=$n);else if(jn<ge&&0>i(_o,z))A[ce]=_o,A[jn]=z,ce=jn;else break e}}return U}function i(A,U){var z=A.sortIndex-U.sortIndex;return z!==0?z:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function _(A){if(w=!1,y(A),!v)if(n(l)!==null)v=!0,ru(S);else{var U=n(u);U!==null&&iu(_,U.startTime-A)}}function S(A,U){v=!1,w&&(w=!1,g(I),I=-1),m=!0;var z=h;try{for(y(U),d=n(l);d!==null&&(!(d.expirationTime>U)||A&&!ie());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var ge=ce(d.expirationTime<=U);U=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),y(U)}else r(l);d=n(l)}if(d!==null)var yo=!0;else{var $n=n(u);$n!==null&&iu(_,$n.startTime-U),yo=!1}return yo}finally{d=null,h=z,m=!1}}var x=!1,E=null,I=-1,M=5,D=-1;function ie(){return!(t.unstable_now()-D<M)}function nt(){if(E!==null){var A=t.unstable_now();D=A;var U=!0;try{U=E(!0,A)}finally{U?Dt():(x=!1,E=null)}}else x=!1}var Dt;if(typeof p=="function")Dt=function(){p(nt)};else if(typeof MessageChannel!="undefined"){var zn=new MessageChannel,Zh=zn.port2;zn.port1.onmessage=nt,Dt=function(){Zh.postMessage(null)}}else Dt=function(){b(nt,0)};function ru(A){E=A,x||(x=!0,Dt())}function iu(A,U){I=b(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ru(S))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var z=h;h=U;try{return A()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=h;h=A;try{return U()}finally{h=z}},t.unstable_scheduleCallback=function(A,U,z){var ce=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ce+z:ce):z=ce,A){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=z+ge,A={id:c++,callback:U,priorityLevel:A,startTime:z,expirationTime:ge,sortIndex:-1},z>ce?(A.sortIndex=z,e(u,A),n(l)===null&&A===n(u)&&(w?(g(I),I=-1):w=!0,iu(_,z-ce))):(A.sortIndex=ge,e(l,A),v||m||(v=!0,ru(S))),A},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(A){var U=h;return function(){var z=h;h=U;try{return A.apply(this,arguments)}finally{h=z}}}})(ey);Zv.exports=ey;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=N.exports,Je=Zv.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ny=new Set,Ss={};function Cr(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(Ss[t]=e,t=0;t<e.length;t++)ny.add(e[t])}var Xt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),vc=Object.prototype.hasOwnProperty,FS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Dp={};function US(t){return vc.call(Dp,t)?!0:vc.call(Mp,t)?!1:FS.test(t)?Dp[t]=!0:(Mp[t]=!0,!1)}function zS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $S(t,e,n,r){if(e===null||typeof e=="undefined"||zS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ie[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($S(e,n,i,r)&&(n=null),r||i===null?US(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function zi(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,du;function Zi(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var fu=!1;function hu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zi(t):""}function jS(t){switch(t.tag){case 5:return Zi(t.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function Cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Dr:return"Portal";case yc:return"Profiler";case sf:return"StrictMode";case _c:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iy:return(t.displayName||"Context")+".Consumer";case ry:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Cc(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Cc(t(e))}catch{}}return null}function BS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cc(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WS(t){var e=oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=WS(t))}function ay(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ec(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ly(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Sc(t,e){ly(t,e);var n=bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&kc(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kc(t,e,n){(e!=="number"||pa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var es=Array.isArray;function Xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ic(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(es(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bn(n)}}function uy(t,e){var n=bn(e.value),r=bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,dy=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function hy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VS=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(t,e){if(e){if(VS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pc=null,Jr=null,Zr=null;function Bp(t){if(t=ro(t)){if(typeof Pc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=vl(e),Pc(t.stateNode,t.type,e))}}function py(t){Jr?Zr?Zr.push(t):Zr=[t]:Jr=t}function my(){if(Jr){var t=Jr,e=Zr;if(Zr=Jr=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function gy(t,e){return t(e)}function vy(){}var pu=!1;function yy(t,e,n){if(pu)return t(e,n);pu=!0;try{return gy(t,e,n)}finally{pu=!1,(Jr!==null||Zr!==null)&&(vy(),my())}}function Is(t,e){var n=t.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Rc=!1;if(Xt)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Rc=!1}function qS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var us=!1,ma=null,ga=!1,Ac=null,GS={onError:function(t){us=!0,ma=t}};function KS(t,e,n,r,i,s,o,a,l){us=!1,ma=null,qS.apply(GS,arguments)}function YS(t,e,n,r,i,s,o,a,l){if(KS.apply(this,arguments),us){if(us){var u=ma;us=!1,ma=null}else throw Error(k(198));ga||(ga=!0,Ac=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(t){if(Er(t)!==t)throw Error(k(188))}function QS(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wp(i),t;if(s===r)return Wp(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function wy(t){return t=QS(t),t!==null?Cy(t):null}function Cy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cy(t);if(e!==null)return e;t=t.sibling}return null}var Ey=Je.unstable_scheduleCallback,Hp=Je.unstable_cancelCallback,XS=Je.unstable_shouldYield,JS=Je.unstable_requestPaint,de=Je.unstable_now,ZS=Je.unstable_getCurrentPriorityLevel,uf=Je.unstable_ImmediatePriority,Sy=Je.unstable_UserBlockingPriority,va=Je.unstable_NormalPriority,ek=Je.unstable_LowPriority,ky=Je.unstable_IdlePriority,hl=null,Nt=null;function tk(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:ik,nk=Math.log,rk=Math.LN2;function ik(t){return t>>>=0,t===0?32:31-(nk(t)/rk|0)|0}var No=64,bo=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ts(a):(s&=o,s!==0&&(r=ts(s)))}else o=n&~i,o!==0?r=ts(o):s!==0&&(r=ts(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function sk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ok(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=sk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function ak(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Iy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ty,df,Ny,by,xy,Lc=!1,xo=[],_n=null,wn=null,Cn=null,Ts=new Map,Ns=new Map,un=[],lk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(e.pointerId)}}function ji(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ro(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uk(t,e,n,r,i){switch(e){case"focusin":return _n=ji(_n,t,e,n,r,i),!0;case"dragenter":return wn=ji(wn,t,e,n,r,i),!0;case"mouseover":return Cn=ji(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ts.set(s,ji(Ts.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ns.set(s,ji(Ns.get(s)||null,t,e,n,r,i)),!0}return!1}function Py(t){var e=Kn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=_y(n),e!==null){t.blockedOn=e,xy(t.priority,function(){Ny(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=ro(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Xo(t)&&n.delete(e)}function ck(){Lc=!1,_n!==null&&Xo(_n)&&(_n=null),wn!==null&&Xo(wn)&&(wn=null),Cn!==null&&Xo(Cn)&&(Cn=null),Ts.forEach(qp),Ns.forEach(qp)}function Bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,ck)))}function bs(t){function e(i){return Bi(i,t)}if(0<xo.length){Bi(xo[0],t);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Bi(_n,t),wn!==null&&Bi(wn,t),Cn!==null&&Bi(Cn,t),Ts.forEach(e),Ns.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Py(n),n.blockedOn===null&&un.shift()}var ei=nn.ReactCurrentBatchConfig;function dk(t,e,n,r){var i=G,s=ei.transition;ei.transition=null;try{G=1,ff(t,e,n,r)}finally{G=i,ei.transition=s}}function fk(t,e,n,r){var i=G,s=ei.transition;ei.transition=null;try{G=4,ff(t,e,n,r)}finally{G=i,ei.transition=s}}function ff(t,e,n,r){var i=Mc(t,e,n,r);if(i===null)Iu(t,e,r,_a,n),Vp(t,r);else if(uk(i,t,e,n,r))r.stopPropagation();else if(Vp(t,r),e&4&&-1<lk.indexOf(t)){for(;i!==null;){var s=ro(i);if(s!==null&&Ty(s),s=Mc(t,e,n,r),s===null&&Iu(t,e,r,_a,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Iu(t,e,r,null,n)}var _a=null;function Mc(t,e,n,r){if(_a=null,t=lf(r),t=Kn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _a=t,null}function Ry(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case uf:return 1;case Sy:return 4;case va:case ek:return 16;case ky:return 536870912;default:return 16}default:return 16}}var pn=null,hf=null,Jo=null;function Ay(){if(Jo)return Jo;var t,e=hf,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function Gp(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:Gp,this.isPropagationStopped=Gp,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=tt(Ti),no=ae({},Ti,{view:0,detail:0}),hk=tt(no),gu,vu,Wi,pl=ae({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(gu=t.screenX-Wi.screenX,vu=t.screenY-Wi.screenY):vu=gu=0,Wi=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),Kp=tt(pl),pk=ae({},pl,{dataTransfer:0}),mk=tt(pk),gk=ae({},no,{relatedTarget:0}),yu=tt(gk),vk=ae({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),yk=tt(vk),_k=ae({},Ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wk=tt(_k),Ck=ae({},Ti,{data:0}),Yp=tt(Ck),Ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kk[t])?!!e[t]:!1}function mf(){return Ik}var Tk=ae({},no,{key:function(t){if(t.key){var e=Ek[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nk=tt(Tk),bk=ae({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=tt(bk),xk=ae({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),Pk=tt(xk),Rk=ae({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ak=tt(Rk),Ok=ae({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lk=tt(Ok),Mk=[9,13,27,32],gf=Xt&&"CompositionEvent"in window,cs=null;Xt&&"documentMode"in document&&(cs=document.documentMode);var Dk=Xt&&"TextEvent"in window&&!cs,Oy=Xt&&(!gf||cs&&8<cs&&11>=cs),Xp=String.fromCharCode(32),Jp=!1;function Ly(t,e){switch(t){case"keyup":return Mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function My(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Fk(t,e){switch(t){case"compositionend":return My(e);case"keypress":return e.which!==32?null:(Jp=!0,Xp);case"textInput":return t=e.data,t===Xp&&Jp?null:t;default:return null}}function Uk(t,e){if(Ur)return t==="compositionend"||!gf&&Ly(t,e)?(t=Ay(),Jo=hf=pn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Oy&&e.locale!=="ko"?null:e.data;default:return null}}var zk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zk[t.type]:e==="textarea"}function Dy(t,e,n,r){py(r),e=wa(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,xs=null;function $k(t){Gy(t,0)}function ml(t){var e=jr(t);if(ay(e))return t}function jk(t,e){if(t==="change")return e}var Fy=!1;if(Xt){var _u;if(Xt){var wu="oninput"in document;if(!wu){var em=document.createElement("div");em.setAttribute("oninput","return;"),wu=typeof em.oninput=="function"}_u=wu}else _u=!1;Fy=_u&&(!document.documentMode||9<document.documentMode)}function tm(){ds&&(ds.detachEvent("onpropertychange",Uy),xs=ds=null)}function Uy(t){if(t.propertyName==="value"&&ml(xs)){var e=[];Dy(e,xs,t,lf(t)),yy($k,e)}}function Bk(t,e,n){t==="focusin"?(tm(),ds=e,xs=n,ds.attachEvent("onpropertychange",Uy)):t==="focusout"&&tm()}function Wk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(xs)}function Hk(t,e){if(t==="click")return ml(e)}function Vk(t,e){if(t==="input"||t==="change")return ml(e)}function qk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:qk;function Ps(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var t=window,e=pa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pa(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gk(t){var e=$y(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zy(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rm(n,s);var o=rm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kk=Xt&&"documentMode"in document&&11>=document.documentMode,zr=null,Dc=null,fs=null,Fc=!1;function im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||zr==null||zr!==pa(r)||(r=zr,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fs&&Ps(fs,r)||(fs=r,r=wa(Dc,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Cu={},jy={};Xt&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function gl(t){if(Cu[t])return Cu[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jy)return Cu[t]=e[n];return t}var By=gl("animationend"),Wy=gl("animationiteration"),Hy=gl("animationstart"),Vy=gl("transitionend"),qy=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){qy.set(t,e),Cr(e,[t])}for(var Eu=0;Eu<sm.length;Eu++){var Su=sm[Eu],Yk=Su.toLowerCase(),Qk=Su[0].toUpperCase()+Su.slice(1);Ln(Yk,"on"+Qk)}Ln(By,"onAnimationEnd");Ln(Wy,"onAnimationIteration");Ln(Hy,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Vy,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function Gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}}}if(ga)throw t=Ac,ga=!1,Ac=null,t}function ee(t,e){var n=e[jc];n===void 0&&(n=e[jc]=new Set);var r=t+"__bubble";n.has(r)||(Ky(e,t,2,!1),n.add(r))}function ku(t,e,n){var r=0;e&&(r|=4),Ky(n,t,r,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Rs(t){if(!t[Ao]){t[Ao]=!0,ny.forEach(function(n){n!=="selectionchange"&&(Xk.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,ku("selectionchange",!1,e))}}function Ky(t,e,n,r){switch(Ry(e)){case 1:var i=dk;break;case 4:i=fk;break;default:i=ff}n=i.bind(null,e,n,t),i=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Iu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Kn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}yy(function(){var u=s,c=lf(n),d=[];e:{var h=qy.get(t);if(h!==void 0){var m=pf,v=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":m=Nk;break;case"focusin":v="focus",m=yu;break;case"focusout":v="blur",m=yu;break;case"beforeblur":case"afterblur":m=yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Pk;break;case By:case Wy:case Hy:m=yk;break;case Vy:m=Ak;break;case"scroll":m=hk;break;case"wheel":m=Lk;break;case"copy":case"cut":case"paste":m=wk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qp}var w=(e&4)!==0,b=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,g!==null&&(_=Is(p,g),_!=null&&w.push(As(p,_,y)))),b)break;p=p.return}0<w.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==xc&&(v=n.relatedTarget||n.fromElement)&&(Kn(v)||v[Jt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Kn(v):null,v!==null&&(b=Er(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Kp,_="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Qp,_="onPointerLeave",g="onPointerEnter",p="pointer"),b=m==null?h:jr(m),y=v==null?h:jr(v),h=new w(_,p+"leave",m,n,c),h.target=b,h.relatedTarget=y,_=null,Kn(c)===u&&(w=new w(g,p+"enter",v,n,c),w.target=y,w.relatedTarget=b,_=w),b=_,m&&v)t:{for(w=m,g=v,p=0,y=w;y;y=Ar(y))p++;for(y=0,_=g;_;_=Ar(_))y++;for(;0<p-y;)w=Ar(w),p--;for(;0<y-p;)g=Ar(g),y--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Ar(w),g=Ar(g)}w=null}else w=null;m!==null&&am(d,h,m,w,!1),v!==null&&b!==null&&am(d,b,v,w,!0)}}e:{if(h=u?jr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=jk;else if(Zp(h))if(Fy)S=Vk;else{S=Wk;var x=Bk}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Hk);if(S&&(S=S(t,u))){Dy(d,S,n,c);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&kc(h,"number",h.value)}switch(x=u?jr(u):window,t){case"focusin":(Zp(x)||x.contentEditable==="true")&&(zr=x,Dc=u,fs=null);break;case"focusout":fs=Dc=zr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,im(d,n,c);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":im(d,n,c)}var E;if(gf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ur?Ly(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Oy&&n.locale!=="ko"&&(Ur||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ur&&(E=Ay()):(pn=c,hf="value"in pn?pn.value:pn.textContent,Ur=!0)),x=wa(u,I),0<x.length&&(I=new Yp(I,t,null,n,c),d.push({event:I,listeners:x}),E?I.data=E:(E=My(n),E!==null&&(I.data=E)))),(E=Dk?Fk(t,n):Uk(t,n))&&(u=wa(u,"onBeforeInput"),0<u.length&&(c=new Yp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Gy(d,e)})}function As(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Is(t,n),s!=null&&r.unshift(As(t,s,i)),s=Is(t,e),s!=null&&r.push(As(t,s,i))),t=t.return}return r}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Is(n,s),l!=null&&o.unshift(As(n,l,a))):i||(l=Is(n,s),l!=null&&o.push(As(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jk=/\r\n?/g,Zk=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(Jk,`
`).replace(Zk,"")}function Oo(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(k(425))}function Ca(){}var Uc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,eI=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,tI=typeof queueMicrotask=="function"?queueMicrotask:typeof um!="undefined"?function(t){return um.resolve(null).then(t).catch(nI)}:$c;function nI(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bs(e)}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),kt="__reactFiber$"+Ni,Os="__reactProps$"+Ni,Jt="__reactContainer$"+Ni,jc="__reactEvents$"+Ni,rI="__reactListeners$"+Ni,iI="__reactHandles$"+Ni;function Kn(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[kt])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[kt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function vl(t){return t[Os]||null}var Bc=[],Br=-1;function Mn(t){return{current:t}}function ne(t){0>Br||(t.current=Bc[Br],Bc[Br]=null,Br--)}function J(t,e){Br++,Bc[Br]=t.current,t.current=e}var xn={},Re=Mn(xn),He=Mn(!1),lr=xn;function li(t,e){var n=t.type.contextTypes;if(!n)return xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function Ea(){ne(He),ne(Re)}function dm(t,e,n){if(Re.current!==xn)throw Error(k(168));J(Re,e),J(He,n)}function Yy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,BS(t)||"Unknown",i));return ae({},n,r)}function Sa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xn,lr=Re.current,J(Re,t),J(He,He.current),!0}function fm(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Yy(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,ne(He),ne(Re),J(Re,t)):ne(He),J(He,n)}var Ut=null,yl=!1,Nu=!1;function Qy(t){Ut===null?Ut=[t]:Ut.push(t)}function sI(t){yl=!0,Qy(t)}function Dn(){if(!Nu&&Ut!==null){Nu=!0;var t=0,e=G;try{var n=Ut;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,yl=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Ey(uf,Dn),i}finally{G=e,Nu=!1}}return null}var oI=nn.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ka=Mn(null),Ia=null,Wr=null,yf=null;function _f(){yf=Wr=Ia=null}function wf(t){var e=ka.current;ne(ka),t._currentValue=e}function Wc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ti(t,e){Ia=t,yf=Wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ke=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},Wr===null){if(Ia===null)throw Error(k(308));Wr=t,Ia.dependencies={lanes:0,firstContext:t}}else Wr=Wr.next=t;return e}var Tt=null,ln=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,pe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=n.interleaved,t===null?(e.next=e,Tt===null?Tt=[n]:Tt.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ta(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=ae({},d,h);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=d}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Jy=new ty.Component().refs;function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=kn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),En(t,s),e=ut(t,i,r),e!==null&&ea(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=kn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),En(t,s),e=ut(t,i,r),e!==null&&ea(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=kn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),En(t,i),e=ut(t,r,n),e!==null&&ea(e,t,r)}};function mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ps(n,r)||!Ps(i,s):!0}function Zy(t,e,n){var r=!1,i=xn,s=e.contextType;return typeof s=="object"&&s!==null?s=ft(s):(i=Ve(e)?lr:Re.current,r=e.contextTypes,s=(r=r!=null)?li(t,i):xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function Vc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Jy,Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ft(s):(s=Ve(e)?lr:Re.current,i.context=li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_l.enqueueReplaceState(i,i.state,null),Ta(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Hr=[],Vr=0,Na=null,ba=0,rt=[],it=0,ur=null,jt=1,Bt="";function Bn(t,e){Hr[Vr++]=ba,Hr[Vr++]=Na,Na=t,ba=e}function e_(t,e,n){rt[it++]=jt,rt[it++]=Bt,rt[it++]=ur,ur=t;var r=jt;t=Bt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-_t(e)+i|n<<i|r,Bt=s+t}else jt=1<<s|n<<i|r,Bt=t}function Ef(t){t.return!==null&&(Bn(t,1),e_(t,1,0))}function Sf(t){for(;t===Na;)Na=Hr[--Vr],Hr[Vr]=null,ba=Hr[--Vr],Hr[Vr]=null;for(;t===ur;)ur=rt[--it],rt[it]=null,Bt=rt[--it],rt[it]=null,jt=rt[--it],rt[it]=null}var Ye=null,$e=null,re=!1,mt=null;function t_(t,e){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,$e=$t(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:jt,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,$e=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(re){var e=$e;if(e){var n=e;if(!vm(t,e)){if(qc(t))throw Error(k(418));e=$t(n.nextSibling);var r=Ye;e&&vm(t,e)?t_(r,n):(t.flags=t.flags&-4097|2,re=!1,Ye=t)}}else{if(qc(t))throw Error(k(418));t.flags=t.flags&-4097|2,re=!1,Ye=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function Hi(t){if(t!==Ye)return!1;if(!re)return ym(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=$e)){if(qc(t)){for(t=$e;t;)t=$t(t.nextSibling);throw Error(k(418))}for(;e;)t_(t,e),e=$t(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=$t(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ye?$t(t.stateNode.nextSibling):null;return!0}function ui(){$e=Ye=null,re=!1}function kf(t){mt===null?mt=[t]:mt.push(t)}function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Jy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _m(t){var e=t._init;return e(t._payload)}function n_(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Pn(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,_){return p===null||p.tag!==6?(p=Ou(y,g.mode,_),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,_){var S=y.type;return S===Fr?c(g,p,y.props.children,_,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&_m(S)===p.type)?(_=i(p,y.props),_.ref=Vi(g,p,y),_.return=g,_):(_=sa(y.type,y.key,y.props,null,g.mode,_),_.ref=Vi(g,p,y),_.return=g,_)}function u(g,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Lu(y,g.mode,_),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,_,S){return p===null||p.tag!==7?(p=nr(y,g.mode,_,S),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ou(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ko:return y=sa(p.type,p.key,p.props,null,g.mode,y),y.ref=Vi(g,null,p),y.return=g,y;case Dr:return p=Lu(p,g.mode,y),p.return=g,p;case an:var _=p._init;return d(g,_(p._payload),y)}if(es(p)||zi(p))return p=nr(p,g.mode,y,null),p.return=g,p;Lo(g,p)}return null}function h(g,p,y,_){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return y.key===S?l(g,p,y,_):null;case Dr:return y.key===S?u(g,p,y,_):null;case an:return S=y._init,h(g,p,S(y._payload),_)}if(es(y)||zi(y))return S!==null?null:c(g,p,y,_,null);Lo(g,y)}return null}function m(g,p,y,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(y)||null,a(p,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:return g=g.get(_.key===null?y:_.key)||null,l(p,g,_,S);case Dr:return g=g.get(_.key===null?y:_.key)||null,u(p,g,_,S);case an:var x=_._init;return m(g,p,y,x(_._payload),S)}if(es(_)||zi(_))return g=g.get(y)||null,c(p,g,_,S,null);Lo(p,_)}return null}function v(g,p,y,_){for(var S=null,x=null,E=p,I=p=0,M=null;E!==null&&I<y.length;I++){E.index>I?(M=E,E=null):M=E.sibling;var D=h(g,E,y[I],_);if(D===null){E===null&&(E=M);break}t&&E&&D.alternate===null&&e(g,E),p=s(D,p,I),x===null?S=D:x.sibling=D,x=D,E=M}if(I===y.length)return n(g,E),re&&Bn(g,I),S;if(E===null){for(;I<y.length;I++)E=d(g,y[I],_),E!==null&&(p=s(E,p,I),x===null?S=E:x.sibling=E,x=E);return re&&Bn(g,I),S}for(E=r(g,E);I<y.length;I++)M=m(E,g,I,y[I],_),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?I:M.key),p=s(M,p,I),x===null?S=M:x.sibling=M,x=M);return t&&E.forEach(function(ie){return e(g,ie)}),re&&Bn(g,I),S}function w(g,p,y,_){var S=zi(y);if(typeof S!="function")throw Error(k(150));if(y=S.call(y),y==null)throw Error(k(151));for(var x=S=null,E=p,I=p=0,M=null,D=y.next();E!==null&&!D.done;I++,D=y.next()){E.index>I?(M=E,E=null):M=E.sibling;var ie=h(g,E,D.value,_);if(ie===null){E===null&&(E=M);break}t&&E&&ie.alternate===null&&e(g,E),p=s(ie,p,I),x===null?S=ie:x.sibling=ie,x=ie,E=M}if(D.done)return n(g,E),re&&Bn(g,I),S;if(E===null){for(;!D.done;I++,D=y.next())D=d(g,D.value,_),D!==null&&(p=s(D,p,I),x===null?S=D:x.sibling=D,x=D);return re&&Bn(g,I),S}for(E=r(g,E);!D.done;I++,D=y.next())D=m(E,g,I,D.value,_),D!==null&&(t&&D.alternate!==null&&E.delete(D.key===null?I:D.key),p=s(D,p,I),x===null?S=D:x.sibling=D,x=D);return t&&E.forEach(function(nt){return e(g,nt)}),re&&Bn(g,I),S}function b(g,p,y,_){if(typeof y=="object"&&y!==null&&y.type===Fr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:e:{for(var S=y.key,x=p;x!==null;){if(x.key===S){if(S=y.type,S===Fr){if(x.tag===7){n(g,x.sibling),p=i(x,y.props.children),p.return=g,g=p;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&_m(S)===x.type){n(g,x.sibling),p=i(x,y.props),p.ref=Vi(g,x,y),p.return=g,g=p;break e}n(g,x);break}else e(g,x);x=x.sibling}y.type===Fr?(p=nr(y.props.children,g.mode,_,y.key),p.return=g,g=p):(_=sa(y.type,y.key,y.props,null,g.mode,_),_.ref=Vi(g,p,y),_.return=g,g=_)}return o(g);case Dr:e:{for(x=y.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Lu(y,g.mode,_),p.return=g,g=p}return o(g);case an:return x=y._init,b(g,p,x(y._payload),_)}if(es(y))return v(g,p,y,_);if(zi(y))return w(g,p,y,_);Lo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Ou(y,g.mode,_),p.return=g,g=p),o(g)):n(g,p)}return b}var ci=n_(!0),r_=n_(!1),io={},bt=Mn(io),Ls=Mn(io),Ms=Mn(io);function Yn(t){if(t===io)throw Error(k(174));return t}function If(t,e){switch(J(Ms,e),J(Ls,t),J(bt,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}ne(bt),J(bt,e)}function di(){ne(bt),ne(Ls),ne(Ms)}function i_(t){Yn(Ms.current);var e=Yn(bt.current),n=Tc(e,t.type);e!==n&&(J(Ls,t),J(bt,n))}function Tf(t){Ls.current===t&&(ne(bt),ne(Ls))}var se=Mn(0);function xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Nf(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var ta=nn.ReactCurrentDispatcher,at=nn.ReactCurrentBatchConfig,fi=0,ue=null,Pe=null,ye=null,Pa=!1,hs=!1,Ds=0,aI=0;function be(){throw Error(k(321))}function bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function xf(t,e,n,r,i,s){if(fi=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=t===null||t.memoizedState===null?dI:fI,t=n(r,i),hs){s=0;do{if(hs=!1,Ds=0,25<=s)throw Error(k(301));s+=1,ye=Pe=null,e.updateQueue=null,ta.current=hI,t=n(r,i)}while(hs)}if(ta.current=Ra,e=Pe!==null&&Pe.next!==null,fi=0,ye=Pe=ue=null,Pa=!1,e)throw Error(k(300));return t}function Pf(){var t=Ds!==0;return Ds=0,t}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ue.memoizedState=ye=t:ye=ye.next=t,ye}function Lt(){if(Pe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=ye===null?ue.memoizedState:ye.next;if(e!==null)ye=e,Pe=t;else{if(t===null)throw Error(k(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ye===null?ue.memoizedState=ye=t:ye=ye.next=t}return ye}function er(t,e){return typeof e=="function"?e(t):e}function Mo(t){var e=Lt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ue.lanes|=c,hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(Ke=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Do(t){var e=Lt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Ke=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s_(){}function o_(t,e){var n=ue,r=Lt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Ke=!0),r=r.queue,Us(u_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Fs(9,l_.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(k(349));(fi&30)!==0||a_(n,e,i)}return i}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,r){e.value=n,e.getSnapshot=r,c_(e)&&ut(t,1,-1)}function u_(t,e,n){return n(function(){c_(e)&&ut(t,1,-1)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function xu(t){var e=Ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},e.queue=t,t=t.dispatch=cI.bind(null,ue,t),[e.memoizedState,t]}function Fs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function d_(){return Lt().memoizedState}function na(t,e,n,r){var i=Ft();ue.flags|=t,i.memoizedState=Fs(1|e,n,void 0,r===void 0?null:r)}function wl(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&bf(r,o.deps)){i.memoizedState=Fs(e,n,s,r);return}}ue.flags|=t,i.memoizedState=Fs(1|e,n,s,r)}function Pu(t,e){return na(8390656,8,t,e)}function Us(t,e){return wl(2048,8,t,e)}function f_(t,e){return wl(4,2,t,e)}function h_(t,e){return wl(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,p_.bind(null,e,t),n)}function Rf(){}function g_(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lI(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=at.transition;at.transition={};try{t(!1),e()}finally{G=n,at.transition=r}}function y_(){return Lt().memoizedState}function uI(t,e,n){var r=kn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},__(t)?w_(e,n):(C_(t,e,n),n=Me(),t=ut(t,r,n),t!==null&&E_(t,e,r))}function cI(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(__(t))w_(e,i);else{C_(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o))return}catch{}finally{}n=Me(),t=ut(t,r,n),t!==null&&E_(t,e,r)}}function __(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function w_(t,e){hs=Pa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){pe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=e.interleaved,t===null?(n.next=n,Tt===null?Tt=[e]:Tt.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function E_(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var Ra={readContext:ft,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},dI={readContext:ft,useCallback:function(t,e){return Ft().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:Pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,na(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return na(4194308,4,t,e)},useInsertionEffect:function(t,e){return na(4,2,t,e)},useMemo:function(t,e){var n=Ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uI.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Ft();return t={current:t},e.memoizedState=t},useState:xu,useDebugValue:Rf,useDeferredValue:function(t){var e=xu(t),n=e[0],r=e[1];return Pu(function(){var i=at.transition;at.transition={};try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=xu(!1),e=t[0];return t=lI.bind(null,t[1]),Ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Ft();if(re){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),pe===null)throw Error(k(349));(fi&30)!==0||a_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Pu(u_.bind(null,r,s,t),[t]),r.flags|=2048,Fs(9,l_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ft(),e=pe.identifierPrefix;if(re){var n=Bt,r=jt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fI={readContext:ft,useCallback:g_,useContext:ft,useEffect:Us,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:v_,useReducer:Mo,useRef:d_,useState:function(){return Mo(er)},useDebugValue:Rf,useDeferredValue:function(t){var e=Mo(er),n=e[0],r=e[1];return Us(function(){var i=at.transition;at.transition={};try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=Mo(er)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1},hI={readContext:ft,useCallback:g_,useContext:ft,useEffect:Us,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:v_,useReducer:Do,useRef:d_,useState:function(){return Do(er)},useDebugValue:Rf,useDeferredValue:function(t){var e=Do(er),n=e[0],r=e[1];return Us(function(){var i=at.transition;at.transition={};try{r(t)}finally{at.transition=i}},[t]),n},useTransition:function(){var t=Do(er)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:y_,unstable_isNewReconciler:!1};function Af(t,e){try{var n="",r=e;do n+=jS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pI=typeof WeakMap=="function"?WeakMap:Map;function S_(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){La||(La=!0,rd=r),Kc(t,e)},n}function k_(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bI.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,En(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var I_,Yc,T_,N_;I_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};T_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(bt.current);var s=null;switch(n){case"input":i=Ec(t,i),r=Ec(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Ic(t,i),r=Ic(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ca)}Nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};N_=function(t,e,n,r){n!==r&&(e.flags|=4)};function qi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mI(t,e,n){var r=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Ve(e.type)&&Ea(),xe(e),null;case 3:return r=e.stateNode,di(),ne(He),ne(Re),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mt!==null&&(od(mt),mt=null))),Yc(t,e),xe(e),null;case 5:Tf(e);var i=Yn(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)T_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return xe(e),null}if(t=Yn(bt.current),Hi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kt]=e,r[Os]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<ns.length;i++)ee(ns[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Up(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":$p(r,s),ee("invalid",r)}Nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(Oo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(Oo(r.textContent,a,t),i=["children",""+a]):Ss.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Io(r),zp(r,s,!0);break;case"textarea":Io(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kt]=e,t[Os]=r,I_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ns.length;i++)ee(ns[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Up(t,r),i=Ec(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":$p(t,r),i=Ic(t,r),ee("invalid",t);break;default:i=r}Nc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ks(t,l):typeof l=="number"&&ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ss.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":Io(t),zp(t,r,!1);break;case"textarea":Io(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Yn(Ms.current),Yn(bt.current),Hi(e)){if(r=e.stateNode,n=e.memoizedProps,r[kt]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:Oo(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&Oo(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=e,e.stateNode=r}return xe(e),null;case 13:if(ne(se),r=e.memoizedState,re&&$e!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=$e;r;)r=$t(r.nextSibling);return ui(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Hi(e),t===null){if(!r)throw Error(k(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(k(317));r[kt]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return xe(e),null}return mt!==null&&(od(mt),mt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Hi(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(se.current&1)!==0?me===0&&(me=3):Uf())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return di(),Yc(t,e),t===null&&Rs(e.stateNode.containerInfo),xe(e),null;case 10:return wf(e.type._context),xe(e),null;case 17:return Ve(e.type)&&Ea(),xe(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qi(s,!1);else{if(me!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=xa(t),o!==null){for(e.flags|=128,qi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>pi&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=xa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return xe(e),null}else 2*de()-s.renderingStartTime>pi&&n!==1073741824&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,J(se,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return Ff(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ge&1073741824)!==0&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}var gI=nn.ReactCurrentOwner,Ke=!1;function Le(t,e,n,r){e.child=t===null?r_(e,null,n,r):ci(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return ti(e,i),r=xf(t,e,n,r,s,i),n=Pf(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&n&&Ef(e),e.flags|=1,Le(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b_(t,e,s,r,i)):(t=sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function b_(t,e,n,r,i){if(t!==null&&Ps(t.memoizedProps,r)&&t.ref===e.ref)if(Ke=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ke=!0);else return e.lanes=t.lanes,Zt(t,e,i);return Qc(t,e,n,r,i)}function x_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},J(qr,Ge),Ge|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,J(qr,Ge),Ge|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,J(qr,Ge),Ge|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(qr,Ge),Ge|=r;return Le(t,e,i,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qc(t,e,n,r,i){var s=Ve(n)?lr:Re.current;return s=li(e,s),ti(e,i),n=xf(t,e,n,r,s,i),r=Pf(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&r&&Ef(e),e.flags|=1,Le(t,e,n,i),e.child)}function Im(t,e,n,r,i){if(Ve(n)){var s=!0;Sa(e)}else s=!1;if(ti(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Zy(e,n,r),Vc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ve(n)?lr:Re.current,u=li(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gm(e,o,r,u),ln=!1;var h=e.memoizedState;o.state=h,Ta(e,r,o,i),l=e.memoizedState,a!==r||h!==l||He.current||ln?(typeof c=="function"&&(Hc(e,n,c,r),l=e.memoizedState),(a=ln||mm(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:pt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Ve(n)?lr:Re.current,l=li(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&gm(e,o,r,l),ln=!1,h=e.memoizedState,o.state=h,Ta(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||He.current||ln?(typeof m=="function"&&(Hc(e,n,m,r),v=e.memoizedState),(u=ln||mm(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Xc(t,e,n,r,s,i)}function Xc(t,e,n,r,i,s){P_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fm(e,n,!1),Zt(t,e,s);r=e.stateNode,gI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):Le(t,e,a,s),e.memoizedState=r.state,i&&fm(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(t,e.context,!1),If(t,e.containerInfo)}function Tm(t,e,n,r,i){return ui(),kf(i),e.flags|=256,Le(t,e,n,r),e.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Uo(t){return{baseLanes:t,cachePool:null}}function A_(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(se,i&1),t===null)return Gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Fa(i,r,0,null),t=nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uo(n),e.memoizedState=Fo,t):Jc(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,zo(t,e,n,Error(k(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fa({mode:"visible",children:r.children},i,0,null),s=nr(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ci(e,t.child,null,n),e.child.memoizedState=Uo(n),e.memoizedState=Fo,s);if((e.mode&1)===0)e=zo(t,e,n,null);else if(a.data==="$!")e=zo(t,e,n,Error(k(419)));else if(r=(n&t.childLanes)!==0,Ke||r){if(r=pe,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,ut(t,r,-1))}Uf(),e=zo(t,e,n,Error(k(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=xI.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,$e=$t(a.nextSibling),Ye=e,re=!0,mt=null,n!==null&&(rt[it++]=jt,rt[it++]=Bt,rt[it++]=ur,jt=n.id,Bt=n.overflow,ur=e),e=Jc(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=bm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Uo(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=Fo,r):(n=Nm(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=bm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Uo(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=Fo,r):(n=Nm(t,e,r.children,n),e.memoizedState=null,n)}function Jc(t,e){return e=Fa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nm(t,e,n,r){var i=t.child;return t=i.sibling,n=Pn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function bm(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Pn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Pn(o,r):(r=nr(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function zo(t,e,n,r){return r!==null&&kf(r),ci(e,t.child,null,n),t=Jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wc(t.return,e,n)}function Ru(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function O_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(se,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ru(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vI(t,e,n){switch(e.tag){case 3:R_(e),ui();break;case 5:i_(e);break;case 1:Ve(e.type)&&Sa(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(ka,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?A_(t,e,n):(J(se,se.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return O_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,x_(t,e,n)}return Zt(t,e,n)}function yI(t,e){switch(Sf(e),e.tag){case 1:return Ve(e.type)&&Ea(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return di(),ne(He),ne(Re),Nf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return di(),null;case 10:return wf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var $o=!1,Qn=!1,_I=typeof WeakSet=="function"?WeakSet:Set,P=null;function Aa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Zc(t,e,n){try{n()}catch(r){je(t,e,r)}}var Pm=!1;function wI(t,e){if(t=$y(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:t,selectionRange:n},P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:pt(e.type,w),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;if(y.nodeType===1)y.textContent="";else if(y.nodeType===9){var _=y.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){je(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=Pm,Pm=!1,v}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zc(e,n,s)}i=i.next}while(i!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rm(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(hl,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Zc(e,n,s),r=r.next}while(r!==t)}break;case 1:if(Aa(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){je(e,n,o)}break;case 5:Aa(e,n);break;case 4:D_(t,e,n)}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kt],delete e[Os],delete e[jc],delete e[rI],delete e[iI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Om(t){e:{for(var e=t.return;e!==null;){if(M_(e))break e;e=e.return}throw Error(k(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(ks(e,""),n.flags&=-33),n=Am(t),nd(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=Am(t),td(t,n,e);break;default:throw Error(k(161))}}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function D_(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(k(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(Rm(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?Tu(a.parentNode,l):a.nodeType===1&&Tu(a,l),bs(a)):Tu(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Rm(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Au(t,e){switch(e.tag){case 0:case 11:case 14:case 15:zs(3,e,e.return),Cl(3,e),zs(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&ly(n,r),bc(t,i),e=bc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?hy(n,a):o==="dangerouslySetInnerHTML"?dy(n,a):o==="children"?ks(n,a):rf(n,o,a,e)}switch(t){case"input":Sc(n,r);break;case"textarea":uy(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Xr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Xr(n,!!r.multiple,r.defaultValue,!0):Xr(n,!!r.multiple,r.multiple?[]:"",!1))}n[Os]=r}}return;case 6:if(e.stateNode===null)throw Error(k(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&bs(e.stateNode.containerInfo);return;case 12:return;case 13:Lm(e);return;case 19:Lm(e);return;case 17:return}throw Error(k(163))}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _I),e.forEach(function(r){var i=PI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function CI(t,e){for(P=e;P!==null;){e=P;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{D_(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(I){je(i,e,I)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,P=n;else for(;P!==null;){e=P;try{var o=e.flags;if(o&32&&ks(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(Mf=de())}break;case 22:var c=e.memoizedState!==null,d=e.alternate,h=d!==null&&d.memoizedState!==null;n=e;e:{r=n,i=c;for(var m=null,v=r;;){if(v.tag===5){if(m===null){m=v;var w=v.stateNode;if(i){var b=w.style;typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"}else{var g=v.stateNode,p=v.memoizedProps.style,y=p!=null&&p.hasOwnProperty("display")?p.display:null;g.style.display=fy("display",y)}}}else if(v.tag===6)m===null&&(v.stateNode.nodeValue=i?"":v.memoizedProps);else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===r)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}if(c&&!h&&(n.mode&1)!==0){P=n;for(var _=n.child;_!==null;){for(n=P=_;P!==null;){r=P;var S=r.child;switch(r.tag){case 0:case 11:case 14:case 15:zs(4,r,r.return);break;case 1:Aa(r,r.return);var x=r.stateNode;if(typeof x.componentWillUnmount=="function"){var E=r.return;try{x.props=r.memoizedProps,x.state=r.memoizedState,x.componentWillUnmount()}catch(I){je(r,E,I)}}break;case 5:Aa(r,r.return);break;case 22:if(r.memoizedState!==null){Dm(n);continue}}S!==null?(S.return=r,P=S):Dm(n)}_=_.sibling}}}switch(o&4102){case 2:Om(e),e.flags&=-3;break;case 6:Om(e),e.flags&=-3,Au(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,Au(e.alternate,e);break;case 4:Au(e.alternate,e)}}catch(I){je(e,e.return,I)}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}}function EI(t,e,n){P=t,F_(t)}function F_(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$o;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Qn;a=$o;var u=Qn;if($o=o,(Qn=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):l!==null?(l.return=o,P=l):Fm(i);for(;s!==null;)P=s,F_(s),s=s.sibling;P=i,$o=a,Qn=u}Mm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):Mm(t)}}function Mm(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Qn||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&bs(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(k(163))}Qn||e.flags&512&&ed(e)}catch(h){je(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Dm(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Fm(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{ed(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{ed(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var SI=Math.ceil,Oa=nn.ReactCurrentDispatcher,Of=nn.ReactCurrentOwner,lt=nn.ReactCurrentBatchConfig,V=0,pe=null,he=null,ke=0,Ge=0,qr=Mn(0),me=0,$s=null,hi=0,El=0,Lf=0,ps=null,ze=null,Mf=0,pi=1/0,La=!1,rd=null,Sn=null,jo=!1,mn=null,Ma=0,ms=0,id=null,ra=-1,ia=0;function Me(){return(V&6)!==0?de():ra!==-1?ra:ra=de()}function kn(t){return(t.mode&1)===0?1:(V&2)!==0&&ke!==0?ke&-ke:oI.transition!==null?(ia===0&&(t=No,No<<=1,(No&4194240)===0&&(No=64),ia=t),ia):(t=G,t!==0||(t=window.event,t=t===void 0?16:Ry(t.type)),t)}function ut(t,e,n){if(50<ms)throw ms=0,id=null,Error(k(185));var r=Sl(t,e);return r===null?null:(to(r,e,n),((V&2)===0||r!==pe)&&(r===pe&&((V&2)===0&&(El|=e),me===4&&cn(r,ke)),qe(r,n),e===1&&V===0&&(t.mode&1)===0&&(pi=de()+500,yl&&Dn())),r)}function Sl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function qe(t,e){var n=t.callbackNode;ok(t,e);var r=ya(t,t===pe?ke:0);if(r===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?sI(Um.bind(null,t)):Qy(Um.bind(null,t)),tI(function(){V===0&&Dn()}),n=null;else{switch(Iy(r)){case 1:n=uf;break;case 4:n=Sy;break;case 16:n=va;break;case 536870912:n=ky;break;default:n=va}n=V_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(ra=-1,ia=0,(V&6)!==0)throw Error(k(327));var n=t.callbackNode;if(ni()&&t.callbackNode!==n)return null;var r=ya(t,t===pe?ke:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Da(t,r);else{e=r;var i=V;V|=2;var s=$_();(pe!==t||ke!==e)&&(pi=de()+500,tr(t,e));do try{TI();break}catch(a){z_(t,a)}while(1);_f(),Oa.current=s,V=i,he!==null?e=0:(pe=null,ke=0,e=me)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=sd(t,i))),e===1)throw n=$s,tr(t,0),cn(t,r),qe(t,de()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!kI(i)&&(e=Da(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=sd(t,s))),e===1))throw n=$s,tr(t,0),cn(t,r),qe(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Wn(t,ze);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Mf+500-de(),10<e)){if(ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c(Wn.bind(null,t,ze),e);break}Wn(t,ze);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SI(r/1960))-r,10<r){t.timeoutHandle=$c(Wn.bind(null,t,ze),r);break}Wn(t,ze);break;case 5:Wn(t,ze);break;default:throw Error(k(329))}}}return qe(t,de()),t.callbackNode===n?U_.bind(null,t):null}function sd(t,e){var n=ps;return t.current.memoizedState.isDehydrated&&(tr(t,e).flags|=256),t=Da(t,e),t!==2&&(e=ze,ze=n,e!==null&&od(e)),t}function od(t){ze===null?ze=t:ze.push.apply(ze,t)}function kI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~Lf,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if((V&6)!==0)throw Error(k(327));ni();var e=ya(t,0);if((e&1)===0)return qe(t,de()),null;var n=Da(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=sd(t,r))}if(n===1)throw n=$s,tr(t,0),cn(t,e),qe(t,de()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,ze),qe(t,de()),null}function Df(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(pi=de()+500,yl&&Dn())}}function cr(t){mn!==null&&mn.tag===0&&(V&6)===0&&ni();var e=V;V|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,t)return t()}finally{G=r,lt.transition=n,V=e,(V&6)===0&&Dn()}}function Ff(){Ge=qr.current,ne(qr)}function tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eI(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ea();break;case 3:di(),ne(He),ne(Re),Nf();break;case 5:Tf(r);break;case 4:di();break;case 13:ne(se);break;case 19:ne(se);break;case 10:wf(r.type._context);break;case 22:case 23:Ff()}n=n.return}if(pe=t,he=t=Pn(t.current,null),ke=Ge=e,me=0,$s=null,Lf=El=hi=0,ze=ps=null,Tt!==null){for(e=0;e<Tt.length;e++)if(n=Tt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tt=null}return t}function z_(t,e){do{var n=he;try{if(_f(),ta.current=Ra,Pa){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(fi=0,ye=Pe=ue=null,hs=!1,Ds=0,Of.current=null,n===null||n.return===null){me=1,$s=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Cm(o);if(m!==null){m.flags&=-257,Em(m,o,a,s,e),m.mode&1&&wm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){wm(s,u,e),Uf();break e}l=Error(k(426))}}else if(re&&a.mode&1){var b=Cm(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Em(b,o,a,s,e),kf(l);break e}}s=l,me!==4&&(me=2),ps===null?ps=[s]:ps.push(s),l=Af(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var g=S_(a,l,e);hm(a,g);break e;case 1:s=l;var p=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sn===null||!Sn.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=k_(a,s,e);hm(a,_);break e}}a=a.return}while(a!==null)}B_(n)}catch(S){e=S,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function $_(){var t=Oa.current;return Oa.current=Ra,t===null?Ra:t}function Uf(){(me===0||me===3||me===2)&&(me=4),pe===null||(hi&268435455)===0&&(El&268435455)===0||cn(pe,ke)}function Da(t,e){var n=V;V|=2;var r=$_();pe===t&&ke===e||tr(t,e);do try{II();break}catch(i){z_(t,i)}while(1);if(_f(),V=n,Oa.current=r,he!==null)throw Error(k(261));return pe=null,ke=0,me}function II(){for(;he!==null;)j_(he)}function TI(){for(;he!==null&&!XS();)j_(he)}function j_(t){var e=H_(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?B_(t):he=e,Of.current=null}function B_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=mI(n,e,Ge),n!==null){he=n;return}}else{if(n=yI(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,he=null;return}}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);me===0&&(me=5)}function Wn(t,e){var n=G,r=lt.transition;try{lt.transition=null,G=1,NI(t,e,n)}finally{lt.transition=r,G=n}return null}function NI(t,e,n){do ni();while(mn!==null);if((V&6)!==0)throw Error(k(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(ak(t,s),t===pe&&(he=pe=null,ke=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||jo||(jo=!0,V_(va,function(){return ni(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=lt.transition,lt.transition=null;var o=G;G=1;var a=V;V|=4,Of.current=null,wI(t,r),CI(t,r),Gk(Uc),Uc=null,t.current=r,EI(r),JS(),V=a,G=o,lt.transition=s}else t.current=r;if(jo&&(jo=!1,mn=t,Ma=i),s=t.pendingLanes,s===0&&(Sn=null),tk(r.stateNode),qe(t,de()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(La)throw La=!1,t=rd,rd=null,t;return(Ma&1)!==0&&t.tag!==0&&ni(),s=t.pendingLanes,(s&1)!==0?t===id?ms++:(ms=0,id=t):ms=0,Dn(),null}function ni(){if(mn!==null){var t=Iy(Ma),e=lt.transition,n=G;try{if(lt.transition=null,G=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,Ma=0,(V&6)!==0)throw Error(k(331));var i=V;for(V|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:zs(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var h=c.sibling,m=c.return;if(L_(c),c===u){P=null;break}if(h!==null){h.return=m,P=h;break}P=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,P=y;else e:for(o=p;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Cl(9,a)}}catch(S){je(a,a.return,S)}if(a===o){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(V=i,Dn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{G=n,lt.transition=e}}return!1}function zm(t,e,n){e=Af(n,e),e=S_(t,e,1),En(t,e),e=Me(),t=Sl(t,1),t!==null&&(to(t,1,e),qe(t,e))}function je(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=Af(n,t),t=k_(e,t,1),En(e,t),t=Me(),e=Sl(e,1),e!==null&&(to(e,1,t),qe(e,t));break}}e=e.return}}function bI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>de()-Mf?tr(t,0):Lf|=n),qe(t,e)}function W_(t,e){e===0&&((t.mode&1)===0?e=1:(e=bo,bo<<=1,(bo&130023424)===0&&(bo=4194304)));var n=Me();t=Sl(t,e),t!==null&&(to(t,e,n),qe(t,n))}function xI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function PI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),W_(t,n)}var H_;H_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)Ke=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ke=!1,vI(t,e,n);Ke=(t.flags&131072)!==0}else Ke=!1,re&&(e.flags&1048576)!==0&&e_(e,ba,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=li(e,Re.current);ti(e,n),i=xf(null,e,r,t,i,n);var s=Pf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)?(s=!0,Sa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cf(e),i.updater=_l,e.stateNode=i,i._reactInternals=e,Vc(e,r,t,n),e=Xc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Ef(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AI(r),t=pt(r,t),i){case 0:e=Qc(null,e,r,t,n);break e;case 1:e=Im(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=km(null,e,r,pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Qc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Im(t,e,r,i,n);case 3:e:{if(R_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xy(t,e),Ta(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(k(423)),e=Tm(t,e,r,n,i);break e}else if(r!==i){i=Error(k(424)),e=Tm(t,e,r,n,i);break e}else for($e=$t(e.stateNode.containerInfo.firstChild),Ye=e,re=!0,mt=null,n=r_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){e=Zt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return i_(e),t===null&&Gc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),P_(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Gc(e),null;case 13:return A_(t,e,n);case 4:return If(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Sm(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(ka,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!He.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ti(e,n),i=ft(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),km(t,e,r,i,n);case 15:return b_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Ve(r)?(t=!0,Sa(e)):t=!1,ti(e,n),Zy(e,r,i),Vc(e,r,i,n),Xc(null,e,r,!0,t,n);case 19:return O_(t,e,n);case 22:return x_(t,e,n)}throw Error(k(156,e.tag))};function V_(t,e){return Ey(t,e)}function RI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,n,r){return new RI(t,e,n,r)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AI(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=st(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fr:return nr(n.children,i,s,e);case sf:o=8,i|=8;break;case yc:return t=st(12,n,e,i|2),t.elementType=yc,t.lanes=s,t;case _c:return t=st(13,n,e,i),t.elementType=_c,t.lanes=s,t;case wc:return t=st(19,n,e,i),t.elementType=wc,t.lanes=s,t;case sy:return Fa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ry:o=10;break e;case iy:o=9;break e;case of:o=11;break e;case af:o=14;break e;case an:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=st(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function nr(t,e,n,r){return t=st(7,t,r,e),t.lanes=n,t}function Fa(t,e,n,r){return t=st(22,t,r,e),t.elementType=sy,t.lanes=n,t.stateNode={},t}function Ou(t,e,n){return t=st(6,t,null,e),t.lanes=n,t}function Lu(t,e,n){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,i,s,o,a,l){return t=new OI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=st(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Cf(s),t}function LI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return xn;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ve(n))return Yy(t,n,e)}return e}function G_(t,e,n,r,i,s,o,a,l){return t=$f(n,r,!0,t,i,s,o,a,l),t.context=q_(null),n=t.current,r=Me(),i=kn(n),s=qt(r,i),s.callback=e!=null?e:null,En(n,s),t.current.lanes=i,to(t,i,r),qe(t,r),t}function kl(t,e,n,r){var i=e.current,s=Me(),o=kn(i);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),En(i,e),t=ut(i,o,s),t!==null&&ea(t,i,o),o}function Ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function MI(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}Il.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));kl(t,e,null,null)};Il.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cr(function(){kl(null,t,null,null)}),e[Jt]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=by();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Py(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function DI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ua(o);s.call(u)}}var o=G_(e,r,t,0,null,!1,!1,"",jm);return t._reactRootContainer=o,t[Jt]=o.current,Rs(t.nodeType===8?t.parentNode:t),cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ua(l);a.call(u)}}var l=$f(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=l,t[Jt]=l.current,Rs(t.nodeType===8?t.parentNode:t),cr(function(){kl(e,l,n,r)}),l}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ua(o);a.call(l)}}kl(e,o,t,i)}else o=DI(n,e,t,i,r);return Ua(o)}Ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ts(e.pendingLanes);n!==0&&(cf(e,n|1),qe(e,de()),(V&6)===0&&(pi=de()+500,Dn()))}break;case 13:var r=Me();cr(function(){return ut(t,1,r)}),jf(t,1)}};df=function(t){if(t.tag===13){var e=Me();ut(t,134217728,e),jf(t,134217728)}};Ny=function(t){if(t.tag===13){var e=Me(),n=kn(t);ut(t,n,e),jf(t,n)}};by=function(){return G};xy=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Pc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vl(r);if(!i)throw Error(k(90));ay(r),Sc(r,i)}}}break;case"textarea":uy(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};gy=Df;vy=cr;var FI={usingClientEntryPoint:!1,Events:[ro,jr,vl,py,my,Df]},Gi={findFiberByHostInstance:Kn,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},UI={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wy(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||MI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{hl=Bo.inject(UI),Nt=Bo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FI;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(k(200));return LI(t,e,null,n)};et.createRoot=function(t,e){if(!Wf(t))throw Error(k(299));var n=!1,r="",i=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,Rs(t.nodeType===8?t.parentNode:t),new Bf(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=wy(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return cr(t)};et.hydrate=function(t,e,n){if(!Tl(e))throw Error(k(200));return Nl(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=G_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Jt]=e.current,Rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Il(e)};et.render=function(t,e,n){if(!Tl(e))throw Error(k(200));return Nl(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(k(40));return t._reactRootContainer?(cr(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};et.unstable_batchedUpdates=Df;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Nl(t,e,n,!1,r)};et.version="18.0.0-fc46dba67-20220329";function Y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y_)}catch(t){console.error(t)}}Y_(),Jv.exports=et;var Bm=Jv.exports;gc.createRoot=Bm.createRoot,gc.hydrateRoot=Bm.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw bi(e)},bi=function(t){return new Error("Firebase Database ("+Q_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},J_=function(t){const e=X_(t);return Hf.encodeByteArray(e,!0)},Z_=function(t){return J_(t).replace(/\./g,"")},ad=function(t){try{return Hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t){return e0(void 0,t)}function e0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jI(n)||(t[n]=e0(t[n],e[n]));return t}function jI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function t0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BI(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r0(){return Q_.NODE_ADMIN===!0}function i0(){return typeof indexedDB=="object"}function s0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function WI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HI,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function VI(t,e){return t.replace(qI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=js(ad(s[0])||""),n=js(ad(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},GI=function(t){const e=o0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KI=function(t){const e=o0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ld(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function za(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wm(s)&&Wm(o)){if(!Bs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function QI(t,e){const n=new XI(t,e);return n.subscribe.bind(n)}class XI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mu),i.error===void 0&&(i.error=Mu),i.complete===void 0&&(i.complete=Mu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mu(){}function oo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const e2=1e3,t2=2,n2=4*60*60*1e3,r2=.5;function Hm(t,e=e2,n=t2){const r=e*Math.pow(n,t),i=Math.round(r2*r*(Math.random()-.5)*2);return Math.min(n2,r+i)}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ss(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Vm{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new a0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new l0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class a0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new l0(this._transaction.objectStore(e))}}class l0{constructor(e){this._store=e}index(e){return new qm(this._store.index(e))}createIndex(e,n,r){return new qm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return ss(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return ss(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ss(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ss(e,"Error clearing IndexedDB object store")}}class qm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ss(n,"Error reading from IndexedDB")}}function u0(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Vm(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Vm(s.result),o.oldVersion,o.newVersion,new a0(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class Et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class i2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new so;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o2(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s2(t){return t===Hn?void 0:t}function o2(t){return t.instantiationMode==="EAGER"}/**
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
 */class a2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const l2={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},u2=Y.INFO,c2={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},d2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=c2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=u2,this._logHandler=d2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}/**
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
 */class f2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function h2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",Gm="0.7.21";/**
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
 */const qf=new xl("@firebase/app"),p2="@firebase/app-compat",m2="@firebase/analytics-compat",g2="@firebase/analytics",v2="@firebase/app-check-compat",y2="@firebase/app-check",_2="@firebase/auth",w2="@firebase/auth-compat",C2="@firebase/database",E2="@firebase/database-compat",S2="@firebase/functions",k2="@firebase/functions-compat",I2="@firebase/installations",T2="@firebase/installations-compat",N2="@firebase/messaging",b2="@firebase/messaging-compat",x2="@firebase/performance",P2="@firebase/performance-compat",R2="@firebase/remote-config",A2="@firebase/remote-config-compat",O2="@firebase/storage",L2="@firebase/storage-compat",M2="@firebase/firestore",D2="@firebase/firestore-compat",F2="firebase",U2="9.6.11";/**
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
 */const c0="[DEFAULT]",z2={[ud]:"fire-core",[p2]:"fire-core-compat",[g2]:"fire-analytics",[m2]:"fire-analytics-compat",[y2]:"fire-app-check",[v2]:"fire-app-check-compat",[_2]:"fire-auth",[w2]:"fire-auth-compat",[C2]:"fire-rtdb",[E2]:"fire-rtdb-compat",[S2]:"fire-fn",[k2]:"fire-fn-compat",[I2]:"fire-iid",[T2]:"fire-iid-compat",[N2]:"fire-fcm",[b2]:"fire-fcm-compat",[x2]:"fire-perf",[P2]:"fire-perf-compat",[R2]:"fire-rc",[A2]:"fire-rc-compat",[O2]:"fire-gcs",[L2]:"fire-gcs-compat",[M2]:"fire-fst",[D2]:"fire-fst-compat","fire-js":"fire-js",[F2]:"fire-js-all"};/**
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
 */const $a=new Map,cd=new Map;function $2(t,e){try{t.container.addComponent(e)}catch(n){qf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(cd.has(e))return qf.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,t);for(const n of $a.values())$2(n,t);return!0}function kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const j2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dr=new Sr("app","Firebase",j2);/**
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
 */class B2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const ao=U2;function W2(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:c0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw dr.create("bad-app-name",{appName:String(r)});const i=$a.get(r);if(i){if(Bs(t,i.options)&&Bs(n,i.config))return i;throw dr.create("duplicate-app",{appName:r})}const s=new a2(r);for(const a of cd.values())s.addComponent(a);const o=new B2(t,n,s);return $a.set(r,o),o}function Gf(t=c0){const e=$a.get(t);if(!e)throw dr.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let i=(r=z2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qf.warn(a.join(" "));return}Ot(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const H2="firebase-heartbeat-database",V2=1,Ws="firebase-heartbeat-store";let Du=null;function d0(){return Du||(Du=u0(H2,V2,(t,e)=>{switch(e){case 0:t.createObjectStore(Ws)}}).catch(t=>{throw dr.create("storage-open",{originalErrorMessage:t.message})})),Du}async function q2(t){try{return(await d0()).transaction(Ws).objectStore(Ws).get(f0(t))}catch(e){throw dr.create("storage-get",{originalErrorMessage:e.message})}}async function Km(t,e){try{const r=(await d0()).transaction(Ws,"readwrite");return await r.objectStore(Ws).put(e,f0(t)),r.complete}catch(n){throw dr.create("storage-set",{originalErrorMessage:n.message})}}function f0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const G2=1024,K2=30*24*60*60*1e3;class Y2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ym();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=K2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ym(),{heartbeatsToSend:n,unsentEntries:r}=Q2(this._heartbeatsCache.heartbeats),i=Z_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ym(){return new Date().toISOString().substring(0,10)}function Q2(t,e=G2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await q2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return Z_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function J2(t){Ot(new Et("platform-logger",e=>new f2(e),"PRIVATE")),Ot(new Et("heartbeat",e=>new Y2(e),"PRIVATE")),ct(ud,Gm,t),ct(ud,Gm,"esm2017"),ct("fire-js","")}J2("");const h0="@firebase/installations",Kf="0.5.8";/**
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
 */const p0=1e4,m0=`w:${Kf}`,g0="FIS_v2",Z2="https://firebaseinstallations.googleapis.com/v1",eT=60*60*1e3,tT="installations",nT="Installations";/**
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
 */const rT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},fr=new Sr(tT,nT,rT);function v0(t){return t instanceof Fn&&t.code.includes("request-failed")}/**
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
 */function y0({projectId:t}){return`${Z2}/projects/${t}/installations`}function _0(t){return{token:t.token,requestStatus:2,expiresIn:sT(t.expiresIn),creationTime:Date.now()}}async function w0(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function C0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function iT(t,{refreshToken:e}){const n=C0(t);return n.append("Authorization",oT(e)),n}async function E0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sT(t){return Number(t.replace("s","000"))}function oT(t){return`${g0} ${t}`}/**
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
 */async function aT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=y0(t),i=C0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:g0,appId:t.appId,sdkVersion:m0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await E0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:_0(u.authToken)}}else throw await w0("Create Installation",l)}/**
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
 */function S0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function lT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uT=/^[cdef][\w-]{21}$/,dd="";function cT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dT(t);return uT.test(n)?n:dd}catch{return dd}}function dT(t){return lT(t).substr(0,22)}/**
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
 */function Pl(t){return`${t.appName}!${t.appId}`}/**
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
 */const k0=new Map;function I0(t,e){const n=Pl(t);T0(n,e),fT(n,e)}function T0(t,e){const n=k0.get(t);if(!!n)for(const r of n)r(e)}function fT(t,e){const n=hT();n&&n.postMessage({key:t,fid:e}),pT()}let Xn=null;function hT(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=t=>{T0(t.data.key,t.data.fid)}),Xn}function pT(){k0.size===0&&Xn&&(Xn.close(),Xn=null)}/**
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
 */const mT="firebase-installations-database",gT=1,hr="firebase-installations-store";let Fu=null;function Yf(){return Fu||(Fu=u0(mT,gT,(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}})),Fu}async function ja(t,e){const n=Pl(t),i=(await Yf()).transaction(hr,"readwrite"),s=i.objectStore(hr),o=await s.get(n);return await s.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&I0(t,e.fid),e}async function N0(t){const e=Pl(t),r=(await Yf()).transaction(hr,"readwrite");await r.objectStore(hr).delete(e),await r.complete}async function Rl(t,e){const n=Pl(t),i=(await Yf()).transaction(hr,"readwrite"),s=i.objectStore(hr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&I0(t,a.fid),a}/**
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
 */async function Qf(t){let e;const n=await Rl(t.appConfig,r=>{const i=vT(r),s=yT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vT(t){const e=t||{fid:cT(),registrationStatus:0};return b0(e)}function yT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_T(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wT(t)}:{installationEntry:e}}async function _T(t,e){try{const n=await aT(t,e);return ja(t.appConfig,n)}catch(n){throw v0(n)&&n.customData.serverCode===409?await N0(t.appConfig):await ja(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wT(t){let e=await Xm(t.appConfig);for(;e.registrationStatus===1;)await S0(100),e=await Xm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Qf(t);return r||n}return e}function Xm(t){return Rl(t,e=>{if(!e)throw fr.create("installation-not-found");return b0(e)})}function b0(t){return CT(t)?{fid:t.fid,registrationStatus:0}:t}function CT(t){return t.registrationStatus===1&&t.registrationTime+p0<Date.now()}/**
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
 */async function ET({appConfig:t,heartbeatServiceProvider:e},n){const r=ST(t,n),i=iT(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:m0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await E0(()=>fetch(r,a));if(l.ok){const u=await l.json();return _0(u)}else throw await w0("Generate Auth Token",l)}function ST(t,{fid:e}){return`${y0(t)}/${e}/authTokens:generate`}/**
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
 */async function Xf(t,e=!1){let n;const r=await Rl(t.appConfig,s=>{if(!x0(s))throw fr.create("not-registered");const o=s.authToken;if(!e&&TT(o))return s;if(o.requestStatus===1)return n=kT(t,e),s;{if(!navigator.onLine)throw fr.create("app-offline");const a=bT(s);return n=IT(t,a),a}});return n?await n:r.authToken}async function kT(t,e){let n=await Jm(t.appConfig);for(;n.authToken.requestStatus===1;)await S0(100),n=await Jm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xf(t,e):r}function Jm(t){return Rl(t,e=>{if(!x0(e))throw fr.create("not-registered");const n=e.authToken;return xT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function IT(t,e){try{const n=await ET(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ja(t.appConfig,r),n}catch(n){if(v0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ja(t.appConfig,r)}throw n}}function x0(t){return t!==void 0&&t.registrationStatus===2}function TT(t){return t.requestStatus===2&&!NT(t)}function NT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+eT}function bT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xT(t){return t.requestStatus===1&&t.requestTime+p0<Date.now()}/**
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
 */async function PT(t){const e=t,{installationEntry:n,registrationPromise:r}=await Qf(e);return r?r.catch(console.error):Xf(e).catch(console.error),n.fid}/**
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
 */async function RT(t,e=!1){const n=t;return await AT(n),(await Xf(n,e)).token}async function AT(t){const{registrationPromise:e}=await Qf(t);e&&await e}/**
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
 */function OT(t){if(!t||!t.options)throw Uu("App Configuration");if(!t.name)throw Uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uu(t){return fr.create("missing-app-config-values",{valueName:t})}/**
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
 */const P0="installations",LT="installations-internal",MT=t=>{const e=t.getProvider("app").getImmediate(),n=OT(e),r=kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DT=t=>{const e=t.getProvider("app").getImmediate(),n=kr(e,P0).getImmediate();return{getId:()=>PT(n),getToken:i=>RT(n,i)}};function FT(){Ot(new Et(P0,MT,"PUBLIC")),Ot(new Et(LT,DT,"PRIVATE"))}FT();ct(h0,Kf);ct(h0,Kf,"esm2017");/**
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
 */const Ba="analytics",UT="firebase_id",zT="origin",$T=60*1e3,jT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",R0="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qe=new xl("@firebase/analytics");/**
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
 */function A0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function BT(t,e){const n=document.createElement("script");n.src=`${R0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function WT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HT(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await A0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Qe.error(a)}t("config",i,s)}async function VT(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await A0(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qe.error(s)}}function qT(t,e,n,r){async function i(s,o,a){try{s==="event"?await VT(t,e,n,o,a):s==="config"?await HT(t,e,n,r,o,a):t("set",o)}catch(l){Qe.error(l)}}return i}function GT(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=qT(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function KT(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(R0))return e;return null}/**
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
 */const YT={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},dt=new Sr("analytics","Analytics",YT);/**
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
 */const QT=30,XT=1e3;class JT{constructor(e={},n=XT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const O0=new JT;function ZT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ZT(r)},s=jT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tN(t,e=O0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new iN;return setTimeout(async()=>{a.abort()},n!==void 0?n:$T),L0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function L0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=O0){const{appId:s,measurementId:o}=t;try{await nN(r,e)}catch(a){if(o)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await eN(t);return i.deleteThrottleMetadata(s),a}catch(a){if(!rN(a)){if(i.deleteThrottleMetadata(s),o)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Hm(n,i.intervalMillis,QT):Hm(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,u),Qe.debug(`Calling attemptFetch again in ${l} millis`),L0(t,u,r,i)}}function nN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rN(t){if(!(t instanceof Fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class iN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function sN(){if(i0())try{await s0()}catch(t){return Qe.warn(dt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Qe.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oN(t,e,n,r,i,s,o){var a;const l=tN(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Qe.error(m)),e.push(l);const u=sN().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);KT()||BT(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[zT]="firebase",h.update=!0,d!=null&&(h[UT]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class aN{constructor(e){this.app=e}_delete(){return delete gs[this.app.options.appId],Promise.resolve()}}let gs={},Zm=[];const eg={};let zu="dataLayer",lN="gtag",tg,M0,ng=!1;function uN(){const t=[];if(t0()&&t.push("This is a browser extension environment."),WI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:e});Qe.warn(n.message)}}function cN(t,e,n){uN();const r=t.options.appId;if(!r)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(gs[r]!=null)throw dt.create("already-exists",{id:r});if(!ng){WT(zu);const{wrappedGtag:s,gtagCore:o}=GT(gs,Zm,eg,zu,lN);M0=s,tg=o,ng=!0}return gs[r]=oN(t,Zm,eg,e,tg,zu,n),new aN(t)}/**
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
 */async function dN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}function D0(t=Gf()){t=Oe(t);const e=kr(t,Ba);return e.isInitialized()?e.getImmediate():fN(t)}function fN(t,e={}){const n=kr(t,Ba);if(n.isInitialized()){const i=n.getImmediate();if(Bs(e,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:e})}function F0(t,e,n,r){t=Oe(t),dN(M0,gs[t.app.options.appId],e,n,r).catch(i=>Qe.error(i))}const rg="@firebase/analytics",ig="0.7.8";function hN(){Ot(new Et(Ba,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cN(r,i,n)},"PUBLIC")),Ot(new Et("analytics-internal",t,"PRIVATE")),ct(rg,ig),ct(rg,ig,"esm2017");function t(e){try{const n=e.getProvider(Ba).getImmediate();return{logEvent:(r,i,s)=>F0(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}hN();const U0="https://sds-butterfly-api.herokuapp.com";async function Pi({route:t,options:e={}}){const n=`${U0}${t}`;return await(await fetch(n,e)).json()}function pN({url:t,options:e={},deps:n=[],isValid:r=!0}){const[i,s]=N.exports.useState(null),[o,a]=N.exports.useState(null);return N.exports.useEffect(()=>{async function l(){try{const c=await(await fetch(t,e)).json();s(c)}catch(u){a(u)}}r&&l()},n),[i,o]}function fd(n){var r=n,{route:t}=r,e=Co(r,["route"]);return pN(Z({url:`${U0}${t}`},e))}function mN(t,e){return Pi({route:"/analytics/collect/",options:{method:"POST",body:JSON.stringify({event_type:t,data:e})}})}const gN=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});function vN(t){return t&&gN.format(t)}function z0(t){return e=>e.keyCode===13&&t&&t(e)}var yN="firebase",_N="9.6.11";/**
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
 */ct(yN,_N,"app");const wN="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",CN="sds-butterfly.firebaseapp.com",EN="sds-butterfly",SN="sds-butterfly.appspot.com",kN="265457992927",IN="1:265457992927:web:f8b8781a13dd1e4b3fd56a",TN={}.VITE_firebase_measurementId;function NN(){return W2({apiKey:wN,authDomain:CN,projectId:EN,storageBucket:SN,messagingSenderId:kN,appId:IN,measurementId:TN})}const bN=N.exports.createContext();function xN(t,e,n=null){const r=n||`${e}s`;return t===1?`${t} ${e}`:`${t} ${r}`}var Al={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PN=N.exports,RN=Symbol.for("react.element"),AN=Symbol.for("react.fragment"),ON=Object.prototype.hasOwnProperty,LN=PN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MN={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ON.call(e,r)&&!MN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RN,type:t,key:s,ref:o,props:i,_owner:LN.current}}Ol.Fragment=AN;Ol.jsx=$0;Ol.jsxs=$0;Al.exports=Ol;const f=Al.exports.jsx,C=Al.exports.jsxs,Un=Al.exports.Fragment;function DN(){return f("div",{className:"Layout",children:f(LC,{})})}function FN(){return f("div",{className:"Layout Page NotFoundPage FullHeight VerticalCenter",children:C("div",{children:[f("h1",{className:"BigTitle",children:"Page Not Found"}),f("p",{children:"Sorry about that!"}),f(Xe,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}var j0={exports:{}},UN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zN=UN,$N=zN;function B0(){}function W0(){}W0.resetWarningCache=B0;var jN=function(){function t(r,i,s,o,a,l){if(l!==$N){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:W0,resetWarningCache:B0};return n.PropTypes=n,n};j0.exports=jN();var W=j0.exports;function sg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sg(Object(n),!0).forEach(function(r){Gr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wa(t){return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wa(t)}function Gr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function H0(t,e){if(t==null)return{};var n=BN(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function hd(t){return WN(t)||HN(t)||VN(t)||qN()}function WN(t){if(Array.isArray(t))return pd(t)}function HN(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function VN(t,e){if(!!t){if(typeof t=="string")return pd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pd(t,e)}}function pd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GN(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,m=t.inverse,v=t.border,w=t.listItem,b=t.flip,g=t.size,p=t.rotation,y=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":m,"fa-border":v,"fa-li":w,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Gr(e,"fa-".concat(g),typeof g!="undefined"&&g!==null),Gr(e,"fa-rotate-".concat(p),typeof p!="undefined"&&p!==null&&p!==0),Gr(e,"fa-pull-".concat(y),typeof y!="undefined"&&y!==null),Gr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(S){return _[S]?S:null}).filter(function(S){return S})}function KN(t){return t=t-0,t===t}function V0(t){return KN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var YN=["style"];function QN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function XN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=V0(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[QN(i)]=s:e[i]=s,e},{})}function q0(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return q0(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=XN(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[V0(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=H0(n,YN);return i.attrs.style=gn(gn({},i.attrs.style),o),t.apply(void 0,[e.tag,gn(gn({},i.attrs),a)].concat(hd(r)))}var G0=!1;try{G0=!0}catch{}function JN(){if(!G0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function og(t){if(t&&Wa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(mc.icon)return mc.icon(t);if(t===null)return null;if(t&&Wa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $u(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gr({},t,e):{}}var ZN=["forwardedRef"];function fe(t){var e=t.forwardedRef,n=H0(t,ZN),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=og(r),d=$u("classes",[].concat(hd(GN(n)),hd(o.split(" ")))),h=$u("transform",typeof n.transform=="string"?mc.transform(n.transform):n.transform),m=$u("mask",og(i)),v=SS(c,gn(gn(gn(gn({},d),h),m),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!v)return JN("Could not find icon",c),null;var w=v.abstract,b={ref:e};return Object.keys(n).forEach(function(g){fe.defaultProps.hasOwnProperty(g)||(b[g]=n[g])}),eb(w[0],b)}fe.displayName="FontAwesomeIcon";fe.propTypes={beat:W.bool,border:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf(["horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};fe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var eb=q0.bind(null,gv.createElement);const Ri=a=>{var l=a,{label:t,primary:e=!1,iconBefore:n=null,iconAfter:r=null,role:i="button",tabIndex:s=0}=l,o=Co(l,["label","primary","iconBefore","iconAfter","role","tabIndex"]);const c=["Button",e?"Primary":""].join(" "),d=n&&f(fe,{icon:n,className:"IconBefore"}),h=r&&f(fe,{icon:r,className:"IconAfter"}),m=Ne(Z({},o),{className:c,role:i,tabIndex:s,onKeyDown:(o==null?void 0:o.onKeyDown)||z0(o==null?void 0:o.onClick)});return C("span",Ne(Z({},m),{children:[d,f("span",{children:t}),h]}))};function Ll({hasError:t,children:e}){return t&&f("div",{className:"Card Full Error",children:e})}function tb({visible:t,classes:e=[],children:n}){const[r,i]=N.exports.useState(t||!1),s=r?"Block":"Hidden";return N.exports.useEffect(()=>{i(t)},[t]),C("div",{className:`Notification ${e.join(" ")} ${s}`,children:[f("div",{className:"CloseHolder",children:f("span",{className:"Close",role:"button",tabIndex:0,onClick:()=>{i(!1)},onKeyDown:z0(()=>{i(!1)}),children:"x"})}),n]})}function K0({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return n&&f("div",{className:"UserDisc",children:f("img",{src:n,alt:r,className:"Image"})})}function md({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return C("div",{className:"UserTile",children:[f("div",{className:"ProfileImage",children:f("img",{src:n,alt:r,className:"Image"})}),f("div",{className:"DisplayName",children:f("span",{children:e})})]})}var nb="/butterfly/assets/logo-butterfly-rainbow.png";function Jf({size:t,align:e}){return f("div",{className:`Logo ${t} ${e}`,children:f("img",{alt:"Butterfly Logo",src:nb})})}const ag="@firebase/database",lg="0.12.8";/**
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
 */let Y0="";function rb(t){Y0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ib(e)}}catch{}return new sb},Jn=Q0("localStorage"),gd=Q0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new xl("@firebase/database"),ob=function(){let t=1;return function(){return t++}}(),X0=function(t){const e=ZI(t),n=new YI;n.update(e);const r=n.digest();return Hf.encodeByteArray(r)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=lo.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let rr=null,ug=!0;const ab=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ri.logLevel=Y.VERBOSE,rr=ri.log.bind(ri),e&&gd.set("logging_enabled",!0)):typeof t=="function"?rr=t:(rr=null,gd.remove("logging_enabled"))},Se=function(...t){if(ug===!0&&(ug=!1,rr===null&&gd.get("logging_enabled")===!0&&ab(!0)),rr){const e=lo.apply(null,t);rr(e)}},uo=function(t){return function(...e){Se(t,...e)}},vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);ri.error(e)},pr=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw ri.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+lo(...t);ri.warn(e)},lb=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ub=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mr="[MIN_NAME]",Rn="[MAX_NAME]",Ir=function(t,e){if(t===e)return 0;if(t===mr||e===Rn)return-1;if(e===mr||t===Rn)return 1;{const n=cg(t),r=cg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cb=function(t,e){return t===e?0:t<e?-1:1},Ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},eh=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=eh(t[e[r]]);return n+="}",n},J0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Z0=function(t){T(!Zf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},db=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const pb=new RegExp("^-?(0*)\\d{1,10}$"),mb=-2147483648,gb=2147483647,cg=function(t){if(pb.test(t)){const e=Number(t);if(e>=mb&&e<=gb)return e}return null},Ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},vb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class yd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="5",e1="v",t1="s",n1="r",r1="f",i1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s1="ls",wb="p",_d="ac",o1="websocket",a1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Eb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function l1(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===o1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===a1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Eb(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $I(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={},Bu={};function nh(t){const e=t.toString();return ju[e]||(ju[e]=new Sb),ju[e]}function kb(t,e){const n=t.toString();return Bu[n]||(Bu[n]=e()),Bu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="start",Tb="close",Nb="pLPCommand",bb="pRTLPCB",u1="id",c1="pw",d1="ser",xb="cb",Pb="seg",Rb="ts",Ab="d",Ob="dframe",f1=1870,h1=30,Lb=f1-h1,Mb=25e3,Db=3e4;class Kr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uo(e),this.stats_=nh(n),this.urlFn=l=>(this.appCheckToken&&(l[_d]=this.appCheckToken),l1(n,a1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ib(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Db)),ub(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rh((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dg)this.id=a,this.password=l;else if(o===Tb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dg]="t",r[d1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[e1]=th,this.transportSessionId&&(r[t1]=this.transportSessionId),this.lastSessionId&&(r[s1]=this.lastSessionId),this.applicationId&&(r[wb]=this.applicationId),this.appCheckToken&&(r[_d]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&i1.test(location.hostname)&&(r[n1]=r1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kr.forceAllow_=!0}static forceDisallow(){Kr.forceDisallow_=!0}static isAvailable(){return Kr.forceAllow_?!0:!Kr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!db()&&!fb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=J_(n),i=J0(r,Lb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ob]="t",r[u1]=e,r[c1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ob(),window[Nb+this.uniqueCallbackIdentifier]=e,window[bb+this.uniqueCallbackIdentifier]=n,this.myIFrame=rh.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u1]=this.myID,e[c1]=this.myPW,e[d1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h1+r.length<=f1;){const o=this.pendingSegs.shift();r=r+"&"+Pb+i+"="+o.seg+"&"+Rb+i+"="+o.ts+"&"+Ab+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Mb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=16384,Ub=45e3;let Ha=null;typeof MozWebSocket!="undefined"?Ha=MozWebSocket:typeof WebSocket!="undefined"&&(Ha=WebSocket);class gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uo(this.connId),this.stats_=nh(n),this.connURL=gt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[e1]=th,typeof location!="undefined"&&location.hostname&&i1.test(location.hostname)&&(s[n1]=r1),n&&(s[t1]=n),r&&(s[s1]=r),i&&(s[_d]=i),l1(e,o1,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{if(!r0()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ha(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ha!==null&&!gt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=js(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=J0(n,Fb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ub))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kr,gt]}initTransports_(e){const n=gt&&gt.isAvailable();let r=n&&!gt.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gt];else{const i=this.transports_=[];for(const s of ih.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6e4,$b=5e3,jb=10*1024,Bb=100*1024,Wu="t",fg="d",Wb="s",hg="r",Hb="e",pg="o",mg="a",gg="n",vg="p",Vb="h";class qb{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uo("c:"+this.id+":"),this.transportManager_=new ih(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wu in e){const n=e[Wu];n===mg?this.upgradeIfSecondaryHealthy_():n===hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ki("t",e),r=Ki("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ki("t",e),r=Ki("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ki(Wu,e);if(fg in e){const r=e[fg];if(n===Vb)this.onHandshake_(r);else if(n===gg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wb?this.onConnectionShutdown_(r):n===hg?this.onReset_(r):n===Hb?vd("Server Error: "+r):n===pg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),th!==r&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),vs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($b))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends m1{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Vf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Va}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=32,_g=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new K("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function sh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return Be(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kb(t,e){const n=Hs(t,0),r=Hs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ir(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function oh(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Yb{constructor(e,n){this.errorPrefix_=n,this.parts_=Hs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bl(this.parts_[r]);v1(this)}}function Qb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bl(e),v1(t)}function Xb(t){const e=t.parts_.pop();t.byteLength_-=bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function v1(t){if(t.byteLength_>_g)throw new Error(t.errorPrefix_+"has a key path longer than "+_g+" bytes ("+t.byteLength_+").");if(t.parts_.length>yg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yg+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends m1{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ah}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=1e3,Jb=60*5*1e3,Zb=3*1e3,wg=30*1e3,ex=1.3,tx=3e4,nx="server_kill",Cg=3;class Gt extends p1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gt.nextPersistentConnectionId_++,this.log_=uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yi,this.maxReconnectDelay_=Jb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!r0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ah.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new so,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},Zb),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Gt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=mi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=GI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vd("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tx&&(this.reconnectDelay_=Yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ex)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new qb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{De(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(nx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&De(d),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ld(this.interruptReasons_)&&(this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>eh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cg&&(this.reconnectDelay_=wg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Y0.replace(/\./g,"-")]=1,Vf()?e["framework.cordova"]=1:n0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Va.getInstance().currentlyOnline();return ld(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(mr,e),i=new B(mr,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class y1 extends Ml{static get __EMPTY_NODE(){return Wo}static set __EMPTY_NODE(e){Wo=e}compare(e,n){return Ir(e.name,n.name)}isDefinedOn(e){throw bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(Rn,Wo)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,Wo)}toString(){return".key"}}const ir=new y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_e.RED,this.left=i!=null?i:We.EMPTY_NODE,this.right=s!=null?s:We.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class rx{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ho(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){return Ir(t.name,e.name)}function lh(t,e){return Ir(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;function sx(t){wd=t}const _1=function(t){return typeof t=="number"?"number:"+Z0(t):"string:"+t},w1=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else T(t===wd||t.isEmpty(),"priority of unexpected type.");T(t===wd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),w1(this.priorityNode_)}static set __childrenNodeConstructor(e){Eg=e}static get __childrenNodeConstructor(){return Eg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:$(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Z0(this.value_):e+=this.value_,this.lazyHash_=X0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C1,E1;function ox(t){C1=t}function ax(t){E1=t}class lx extends Ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ir(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Rn,new ve("[PRIORITY-POST]",E1))}makePost(e,n){const r=C1(e);return new B(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new lx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=Math.log(2);class cx{constructor(e){const n=s=>parseInt(Math.log(s)/ux,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qa=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new _e(h,d.node,_e.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),w=i(m+1,u);return d=t[m],h=n?n(d):d,new _e(h,d.node,_e.BLACK,v,w)}},s=function(l){let u=null,c=null,d=t.length;const h=function(v,w){const b=d-v,g=d;d-=v;const p=i(b+1,g),y=t[b],_=n?n(y):y;m(new _e(_,y.node,w,null,p))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),b=Math.pow(2,l.count-(v+1));w?h(b,_e.BLACK):(h(b,_e.BLACK),h(b,_e.RED))}return c},o=new cx(t.length),a=s(o);return new We(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;const Or={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Or&&oe,"ChildrenNode.ts has not been loaded"),Hu=Hu||new Wt({".priority":Or},{".priority":oe}),Hu}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qa(r,e.getCompare()):a=Or;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Wt(c,u)}addToIndexes(e,n){const r=za(this.indexes_,(i,s)=>{const o=mi(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Or)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),qa(a,o.getCompare())}else return Or;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new Wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=za(this.indexes_,i=>{if(i===Or)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new Wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&w1(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qi||(Qi=new L(new We(lh),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qi}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qi:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qi:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{T($(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_1(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":X0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===co?-1:0}withIndex(e){if(e===ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ir?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dx extends L{constructor(){super(new We(lh),L.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const co=new dx;Object.defineProperties(B,{MIN:{value:new B(mr,L.EMPTY_NODE)},MAX:{value:new B(Rn,co)}});y1.__EMPTY_NODE=L.EMPTY_NODE;ve.__childrenNodeConstructor=L;sx(co);ax(co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=!0;function we(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,we(e))}if(!(t instanceof Array)&&fx){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=we(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=qa(n,ix,o=>o.name,lh);if(r){const o=qa(n,oe.getCompare());return new L(s,we(e),new Wt({".priority":o},{".priority":oe}))}else return new L(s,we(e),Wt.Default)}else{let n=L.EMPTY_NODE;return Te(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=we(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(we(e))}}ox(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Ml{constructor(e){super(),this.indexPath_=e,T(!j(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ir(e.name,n.name):s}makePost(e,n){const r=we(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,co);return new B(Rn,e)}toString(){return Hs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx extends Ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ir(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=we(e);return new B(n,r)}toString(){return".value"}}const S1=new hx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",px=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Sg.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sg.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){return{type:"value",snapshotNode:t}}function gi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Vs(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gi(n,r)):o.trackChildChange(qs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Vs(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(qs(i,s,o))}else r.trackChildChange(gi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.indexedFilter_=new ch(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gs.getStartPost_(e),this.endPost_=Gs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.rangedFilter_=new Gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,m)=>d(m,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new B(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(qs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Vs(n,d));const w=a.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(gi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Vs(u.name,u.node)),s.trackChildChange(gi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vx(t){return t.loadsAllData()?new ch(t.getIndex()):t.hasLimit()?new gx(t):new Gs(t)}function yx(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function _x(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function wx(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Cx(t,e){const n=t.copy();return n.index_=e,n}function kg(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===S1?n="$value":t.index_===ir?n="$key":(T(t.index_ instanceof uh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_&&(e.startAt=Ce(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ce(t.indexStartName_))),t.endSet_&&(e.endAt=Ce(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ce(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ig(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends p1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=uo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ga.getListenId_(e,r),a={};this.listens_[o]=a;const l=kg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),mi(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ga.getListenId_(e,n);delete this.listens_[r]}get(e){const n=kg(e._queryParams),r=e._path.toString(),i=new so;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=js(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){return{value:null,children:new Map}}function I1(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,Ka());const i=t.children.get(r);e=X(e),I1(i,e,n)}}function Cd(t,e,n){t.value!==null?n(e,t.value):Sx(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Cd(i,s,n)})}function Sx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=10*1e3,Ix=30*1e3,Tx=5*60*1e3;class Nx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kx(e);const r=Tg+(Ix-Tg)*Math.random();vs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),vs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Tx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function fh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ph(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=fh()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Ya(q(),n,this.revert)}}else return T($(this.path)===e,"operationForChild called for unrelated child."),new Ya(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ks(this.source,q()):new Ks(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return j(this.path)?new gr(this.source,q(),this.snap.getImmediateChild(e)):new gr(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new gr(this.source,q(),n.value):new vi(this.source,q(),n)}else return T($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mx(o.childName,o.snapshotNode))}),Xi(t,i,"child_removed",e,r,n),Xi(t,i,"child_added",e,r,n),Xi(t,i,"child_moved",s,r,n),Xi(t,i,"child_changed",e,r,n),Xi(t,i,"value",e,r,n),i}function Xi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Rx(t,a,l)),o.forEach(a=>{const l=Px(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Px(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rx(t,e,n){if(e.childName==null||n.childName==null)throw bi("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){return{eventCache:t,serverCache:e}}function ys(t,e,n,r){return Dl(new vr(e,n,r),t.serverCache)}function T1(t,e,n,r){return Dl(t.eventCache,new vr(e,n,r))}function Ed(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;const Ax=()=>(Vu||(Vu=new We(cb)),Vu);class Q{constructor(e,n=Ax()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Te(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(j(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:le(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Q(null)}}set(e,n){if(j(e))return new Q(n,this.children);{const r=$(e),s=(this.children.get(r)||new Q(null)).set(X(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(j(e))return n;{const r=$(e),s=(this.children.get(r)||new Q(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(X(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),le(n,i),r):new Q(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new Q(null))}}function _s(t,e,n){if(j(e))return new wt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Be(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Sd(t,e,n){let r=t;return Te(n,(i,s)=>{r=_s(r,le(e,i),s)}),r}function Ng(t,e){if(j(e))return wt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new wt(n)}}function kd(t,e){return Tr(t,e)!=null}function Tr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function bg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function In(t,e){if(j(e))return t;{const n=Tr(t,e);return n!=null?new wt(new Q(n)):new wt(t.writeTree_.subtree(e))}}function Id(t){return t.writeTree_.isEmpty()}function yi(t,e){return N1(q(),t.writeTree_,e)}function N1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=N1(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){return R1(e,t)}function Ox(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=_s(t.visibleWrites,e,n)),t.lastWriteId=r}function Lx(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Sd(t.visibleWrites,e,n),t.lastWriteId=r}function Mx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Dx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Fx(a,r.path)?i=!1:ot(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Ux(t),!0;if(r.snap)t.visibleWrites=Ng(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=Ng(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function Fx(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(le(t.path,n),e))return!0;return!1}function Ux(t){t.visibleWrites=b1(t.allWrites,zx,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zx(t){return t.visible}function b1(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ot(n,o)?(a=Be(n,o),r=_s(r,a,s.snap)):ot(o,n)&&(a=Be(o,n),r=_s(r,q(),s.snap.getChild(a)));else if(s.children){if(ot(n,o))a=Be(n,o),r=Sd(r,a,s.children);else if(ot(o,n))if(a=Be(o,n),j(a))r=Sd(r,q(),s.children);else{const l=mi(s.children,$(a));if(l){const u=l.getChild(X(a));r=_s(r,q(),u)}}}else throw bi("WriteRecord should have .snap or .children")}}return r}function x1(t,e,n,r,i){if(!r&&!i){const s=Tr(t.visibleWrites,e);if(s!=null)return s;{const o=In(t.visibleWrites,e);if(Id(o))return n;if(n==null&&!kd(o,q()))return null;{const a=n||L.EMPTY_NODE;return yi(o,a)}}}else{const s=In(t.visibleWrites,e);if(!i&&Id(s))return n;if(!i&&n==null&&!kd(s,q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},a=b1(t.allWrites,o,e),l=n||L.EMPTY_NODE;return yi(a,l)}}}function $x(t,e,n){let r=L.EMPTY_NODE;const i=Tr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=In(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const l=yi(In(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),bg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=In(t.visibleWrites,e);return bg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jx(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(kd(t.visibleWrites,s))return null;{const o=In(t.visibleWrites,s);return Id(o)?i.getChild(n):yi(o,i.getChild(n))}}function Bx(t,e,n,r){const i=le(e,n),s=Tr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=In(t.visibleWrites,i);return yi(o,r.getNode().getImmediateChild(n))}else return null}function Wx(t,e){return Tr(t.visibleWrites,e)}function Hx(t,e,n,r,i,s,o){let a;const l=In(t.visibleWrites,e),u=Tr(l,q());if(u!=null)a=u;else if(n!=null)a=yi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function Vx(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Qa(t,e,n,r){return x1(t.writeTree,t.treePath,e,n,r)}function gh(t,e){return $x(t.writeTree,t.treePath,e)}function xg(t,e,n,r){return jx(t.writeTree,t.treePath,e,n,r)}function Xa(t,e){return Wx(t.writeTree,le(t.treePath,e))}function qx(t,e,n,r,i,s){return Hx(t.writeTree,t.treePath,e,n,r,i,s)}function vh(t,e,n){return Bx(t.writeTree,t.treePath,e,n)}function P1(t,e){return R1(le(t.treePath,e),t.writeTree)}function R1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Vs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,gi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qs(r,e.snapshotNode,i.oldSnap));else throw bi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const A1=new Kx;class yh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),s=qx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){return{filter:t}}function Qx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xx(t,e,n,r,i){const s=new Gx;let o,a;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=Td(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Ja(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=Zx(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Nd(t,e,u.path,u.children,r,i,a,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=nP(t,e,u.path,r,i,s):o=eP(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=tP(t,e,n.path,r,s);else throw bi("Unknown operation type: "+n.type);const l=s.getChanges();return Jx(e,o,l),{viewCache:o,changes:l}}function Jx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ed(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(k1(Ed(e)))}}function O1(t,e,n,r,i,s){const o=e.eventCache;if(Xa(r,n)!=null)return e;{let a,l;if(j(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=yr(e),c=u instanceof L?u:L.EMPTY_NODE,d=gh(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Qa(r,yr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=$(n);if(u===".priority"){T(An(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=xg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=X(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=xg(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=vh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ys(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ja(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=$(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const v=X(n),b=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),b):u=c.updateChild(l.getNode(),m,b,v,A1,null)}const d=T1(e,u,l.isFullyInitialized()||j(n),c.filtersNodes()),h=new yh(i,d,s);return O1(t,d,n,i,h,a)}function Td(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new yh(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ys(e,u,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ys(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=X(n),m=a.getNode().getImmediateChild(d);let v;if(j(h))v=r;else{const w=c.getCompleteChild(d);w!=null?sh(h)===".priority"&&w.getChild(g1(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=L.EMPTY_NODE}if(m.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,h,c,o);l=ys(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Pg(t,e){return t.eventCache.isCompleteForChild(e)}function Zx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=le(n,l);Pg(e,$(c))&&(a=Td(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=le(n,l);Pg(e,$(c))||(a=Td(t,a,c,u,i,s,o))}),a}function Rg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;j(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=Rg(t,m,h);l=Ja(t,l,new K(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),w=Rg(t,v,h);l=Ja(t,l,new K(d),w,i,s,o,a)}}),l}function eP(t,e,n,r,i,s,o){if(Xa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ja(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let u=new Q(null);return l.getNode().forEachChild(ir,(c,d)=>{u=u.set(new K(c),d)}),Nd(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const h=le(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Nd(t,e,n,u,i,s,a,o)}}function tP(t,e,n,r,i){const s=e.serverCache,o=T1(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return O1(t,o,n,r,A1,i)}function nP(t,e,n,r,i,s){let o;if(Xa(r,n)!=null)return e;{const a=new yh(r,e,i),l=e.eventCache.getNode();let u;if(j(n)||$(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Qa(r,yr(e));else{const d=e.serverCache.getNode();T(d instanceof L,"serverChildren would be complete if leaf node"),c=gh(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=$(n);let d=vh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,X(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,X(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qa(r,yr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xa(r,q())!=null,ys(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ch(r.getIndex()),s=vx(r);this.processor_=Yx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new vr(l,o.isFullyInitialized(),i.filtersNodes()),d=new vr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Dl(d,c),this.eventGenerator_=new bx(this.query_)}get query(){return this.query_}}function iP(t){return t.viewCache_.serverCache.getNode()}function sP(t,e){const n=yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Ag(t){return t.eventRegistrations_.length===0}function oP(t,e){t.eventRegistrations_.push(e)}function Og(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lg(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(T(yr(t.viewCache_),"We should always have a full cache before handling merges"),T(Ed(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Xx(t.processor_,i,e,n,r);return Qx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,L1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function aP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(gi(s,o))}),n.isFullyInitialized()&&r.push(k1(n.getNode())),L1(t,r,n.getNode(),e)}function L1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;class lP{constructor(){this.views=new Map}}function uP(t){T(!Za,"__referenceConstructor has already been defined"),Za=t}function cP(){return T(Za,"Reference.ts has not been loaded"),Za}function dP(t){return t.views.size===0}function _h(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),Lg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lg(o,e,n,r));return s}}function fP(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Qa(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=gh(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=Dl(new vr(a,l,!1),new vr(r,i,!1));return new rP(e,u)}return o}function hP(t,e,n,r,i,s){const o=fP(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oP(o,n),aP(o,n)}function pP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=On(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Og(u,n,r)),Ag(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Og(l,n,r)),Ag(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!On(t)&&s.push(new(cP())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ii(t,e){let n=null;for(const r of t.views.values())n=n||sP(r,e);return n}function D1(t,e){if(e._queryParams.loadsAllData())return Fl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function F1(t,e){return D1(t,e)!=null}function On(t){return Fl(t)!=null}function Fl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;function mP(t){T(!el,"__referenceConstructor has already been defined"),el=t}function gP(){return T(el,"Reference.ts has not been loaded"),el}let vP=1;class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Vx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U1(t,e,n,r,i){return Ox(t.pendingWriteTree_,e,n,r,i),i?Oi(t,new gr(fh(),e,n)):[]}function yP(t,e,n,r){Lx(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Oi(t,new vi(fh(),e,i))}function vn(t,e,n=!1){const r=Mx(t.pendingWriteTree_,e);if(Dx(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(q(),!0):Te(r.children,o=>{s=s.set(new K(o),!0)}),Oi(t,new Ya(r.path,s,n))}else return[]}function Ul(t,e,n){return Oi(t,new gr(hh(),e,n))}function _P(t,e,n){const r=Q.fromObject(n);return Oi(t,new vi(hh(),e,r))}function wP(t,e){return Oi(t,new Ks(hh(),e))}function CP(t,e,n){const r=Ch(t,n);if(r){const i=Eh(r),s=i.path,o=i.queryId,a=Be(s,e),l=new Ks(ph(o),a);return Sh(t,s,l)}else return[]}function bd(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||F1(s,e))){const a=pP(s,e,n,r);dP(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(d,h)=>On(h));if(u&&!c){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=kP(d);for(let m=0;m<h.length;++m){const v=h[m],w=v.query,b=j1(t,v);t.listenProvider_.startListening(ws(w),tl(t,w),b.hashFn,b.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(ws(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(zl(d));t.listenProvider_.stopListening(ws(d),h)})),IP(t,l)}return o}function EP(t,e,n,r){const i=Ch(t,r);if(i!=null){const s=Eh(i),o=s.path,a=s.queryId,l=Be(o,e),u=new gr(ph(a),l,n);return Sh(t,o,u)}else return[]}function SP(t,e,n,r){const i=Ch(t,r);if(i){const s=Eh(i),o=s.path,a=s.queryId,l=Be(o,e),u=Q.fromObject(n),c=new vi(ph(a),l,u);return Sh(t,o,c)}else return[]}function Dg(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const m=Be(d,r);i=i||ii(h,m),s=s||On(h)});let o=t.syncPointTree_.get(r);o?(s=s||On(o),i=i||ii(o,q())):(o=new lP,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,m)=>{const v=ii(m,q());v&&(i=i.updateImmediateChild(h,v))}));const l=F1(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=zl(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=TP();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const u=mh(t.pendingWriteTree_,r);let c=hP(o,e,n,u,i,a);if(!l&&!s){const d=D1(o,e);c=c.concat(NP(t,e,d))}return c}function wh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Be(o,e),u=ii(a,l);if(u)return u});return x1(i,e,s,n,!0)}function Oi(t,e){return z1(e,t.syncPointTree_,null,mh(t.pendingWriteTree_,q()))}function z1(t,e,n,r){if(j(t.path))return $1(t,e,n,r);{const i=e.get(q());n==null&&i!=null&&(n=ii(i,q()));let s=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=P1(r,o);s=s.concat(z1(a,l,u,c))}return i&&(s=s.concat(_h(i,t,r,n))),s}}function $1(t,e,n,r){const i=e.get(q());n==null&&i!=null&&(n=ii(i,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=P1(r,o),c=t.operationForChild(o);c&&(s=s.concat($1(c,a,l,u)))}),i&&(s=s.concat(_h(i,t,r,n))),s}function j1(t,e){const n=e.query,r=tl(t,n);return{hashFn:()=>(iP(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?CP(t,n._path,r):wP(t,n._path);{const s=hb(i,n);return bd(t,n,null,s)}}}}function tl(t,e){const n=zl(e);return t.queryToTagMap.get(n)}function zl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ch(t,e){return t.tagToQueryMap.get(e)}function Eh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Sh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=mh(t.pendingWriteTree_,e);return _h(r,n,i,null)}function kP(t){return t.fold((e,n,r)=>{if(n&&On(n))return[Fl(n)];{let i=[];return n&&(i=M1(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(gP())(t._repo,t._path):t}function IP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=zl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function TP(){return vP++}function NP(t,e,n){const r=e._path,i=tl(t,e),s=j1(t,n),o=t.listenProvider_.startListening(ws(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!On(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!j(u)&&c&&On(c))return[Fl(c).query];{let h=[];return c&&(h=h.concat(M1(c).map(m=>m.query))),Te(d,(m,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(ws(c),tl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kh(n)}node(){return this.node_}}class Ih{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Ih(this.syncTree_,n)}node(){return wh(this.syncTree_,this.path_)}}const bP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fg=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PP(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},PP=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},B1=function(t,e,n,r){return Th(e,new Ih(n,t),r)},W1=function(t,e,n){return Th(t,new kh(e),n)};function Th(t,e,n){const r=t.getPriority().val(),i=Fg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,we(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(oe,(a,l)=>{const u=Th(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bh(t,e){let n=e instanceof K?e:new K(e),r=t,i=$(n);for(;i!==null;){const s=mi(r.node.children,i)||{children:{},childCount:0};r=new Nh(i,r,s),n=X(n),i=$(n)}return r}function Li(t){return t.node.value}function H1(t,e){t.node.value=e,xd(t)}function V1(t){return t.node.childCount>0}function RP(t){return Li(t)===void 0&&!V1(t)}function $l(t,e){Te(t.node.children,(n,r)=>{e(new Nh(n,t,r))})}function q1(t,e,n,r){n&&!r&&e(t),$l(t,i=>{q1(i,e,!0,r)}),n&&r&&e(t)}function AP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fo(t){return new K(t.parent===null?t.name:fo(t.parent)+"/"+t.name)}function xd(t){t.parent!==null&&OP(t.parent,t.name,t)}function OP(t,e,n){const r=RP(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/[\[\].#$\/\u0000-\u001F\u007F]/,MP=/[\[\].#$\u0000-\u001F\u007F]/,qu=10*1024*1024,jl=function(t){return typeof t=="string"&&t.length!==0&&!LP.test(t)},G1=function(t){return typeof t=="string"&&t.length!==0&&!MP.test(t)},DP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),G1(t)},Pd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zf(t)||t&&typeof t=="object"&&Mt(t,".sv")},ho=function(t,e,n,r){r&&e===void 0||Bl(oo(t,"value"),e,n)},Bl=function(t,e,n){const r=n instanceof K?new Yb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(Zf(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>qu/3&&bl(e)>qu)throw new Error(t+"contains a string greater than "+qu+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qb(r,o),Bl(t,a,r),Xb(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},FP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Hs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!jl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Kb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ot(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},UP=function(t,e,n,r){if(r&&e===void 0)return;const i=oo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new K(o);if(Bl(i,a,le(n,l)),sh(l)===".priority"&&!Pd(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FP(i,s)},zP=function(t,e,n,r){if(!(r&&n===void 0)&&!jl(n))throw new Error(oo(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},xh=function(t,e,n,r){if(!(r&&n===void 0)&&!G1(n))throw new Error(oo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$P=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xh(t,e,n,r)},K1=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DP(n))throw new Error(oo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!oh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Y1(t,e,n){Wl(t,n),Q1(t,r=>oh(r,e))}function St(t,e,n){Wl(t,n),Q1(t,r=>ot(r,e)||ot(e,r))}function Q1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(WP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();rr&&Se("event: "+n.toString()),Ai(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="repo_interrupt",VP=25;class qP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ka(),this.transactionQueueTree_=new Nh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GP(t,e,n){if(t.stats_=nh(t.repoInfo_),t.forceRestClient_||vb())t.server_=new Ga(t.repoInfo_,(r,i,s,o)=>{Ug(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zg(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(r,i,s,o)=>{Ug(t,r,i,s,o)},r=>{zg(t,r)},r=>{KP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kb(t.repoInfo_,()=>new Nx(t.stats_,t.server_)),t.infoData_=new Ex,t.infoSyncTree_=new Mg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ul(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ph(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);St(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function X1(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hl(t){return bP({timestamp:X1(t)})}function Ug(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=za(n,u=>we(u));o=SP(t.serverSyncTree_,s,l,i)}else{const l=we(n);o=EP(t.serverSyncTree_,s,l,i)}else if(r){const l=za(n,u=>we(u));o=_P(t.serverSyncTree_,s,l)}else{const l=we(n);o=Ul(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_i(t,s)),St(t.eventQueue_,a,o)}function zg(t,e){Ph(t,"connected",e),e===!1&&XP(t)}function KP(t,e){Te(e,(n,r)=>{Ph(t,n,r)})}function Ph(t,e,n){const r=new K("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(r,i);const s=Ul(t.infoSyncTree_,r,i);St(t.eventQueue_,r,s)}function Rh(t){return t.nextWriteId_++}function YP(t,e,n,r,i){Vl(t,"set",{path:e.toString(),value:n,priority:r});const s=Hl(t),o=we(n,r),a=wh(t.serverSyncTree_,e),l=W1(o,a,s),u=Rh(t),c=U1(t.serverSyncTree_,e,l,u,!0);Wl(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||De("set at "+e+" failed: "+h);const w=vn(t.serverSyncTree_,u,!v);St(t.eventQueue_,e,w),Rd(t,i,h,m)});const d=Oh(t,e);_i(t,d),St(t.eventQueue_,d,[])}function QP(t,e,n,r){Vl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Hl(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=B1(le(e,a),we(l),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),Rd(t,r,"ok",void 0);else{const a=Rh(t),l=yP(t.serverSyncTree_,e,o,a);Wl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||De("update at "+e+" failed: "+u);const h=vn(t.serverSyncTree_,a,!d),m=h.length>0?_i(t,e):e;St(t.eventQueue_,m,h),Rd(t,r,u,c)}),Te(n,u=>{const c=Oh(t,le(e,u));_i(t,c)}),St(t.eventQueue_,e,[])}}function XP(t){Vl(t,"onDisconnectEvents");const e=Hl(t),n=Ka();Cd(t.onDisconnect_,q(),(i,s)=>{const o=B1(i,s,t.serverSyncTree_,e);I1(n,i,o)});let r=[];Cd(n,q(),(i,s)=>{r=r.concat(Ul(t.serverSyncTree_,i,s));const o=Oh(t,i);_i(t,o)}),t.onDisconnect_=Ka(),St(t.eventQueue_,q(),r)}function JP(t,e,n){let r;$(e._path)===".info"?r=Dg(t.infoSyncTree_,e,n):r=Dg(t.serverSyncTree_,e,n),Y1(t.eventQueue_,e._path,r)}function $g(t,e,n){let r;$(e._path)===".info"?r=bd(t.infoSyncTree_,e,n):r=bd(t.serverSyncTree_,e,n),Y1(t.eventQueue_,e._path,r)}function ZP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HP)}function Vl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function Rd(t,e,n,r){e&&Ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function J1(t,e,n){return wh(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ah(t,e=t.transactionQueueTree_){if(e||ql(t,e),Li(e)){const n=ew(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eR(t,fo(e),n)}else V1(e)&&$l(e,n=>{Ah(t,n)})}function eR(t,e,n){const r=n.map(u=>u.currentWriteId),i=J1(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Be(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Vl(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ql(t,bh(t.transactionQueueTree_,e)),Ah(t,t.transactionQueueTree_),St(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Ai(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{De("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}_i(t,e)}},o)}function _i(t,e){const n=Z1(t,e),r=fo(n),i=ew(t,n);return tR(t,i,r),r}function tR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Be(n,l.path);let c=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VP)c=!0,d="maxretry",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=J1(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Bl("transaction failed: Data returned ",m,l.path);let v=we(m);typeof m=="object"&&m!=null&&Mt(m,".priority")||(v=v.updatePriority(h.getPriority()));const b=l.currentWriteId,g=Hl(t),p=W1(v,h,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=Rh(t),o.splice(o.indexOf(b),1),i=i.concat(U1(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(vn(t.serverSyncTree_,b,!0))}else c=!0,d="nodata",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ql(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ai(r[a]);Ah(t,t.transactionQueueTree_)}function Z1(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&Li(r)===void 0;)r=bh(r,n),e=X(e),n=$(e);return r}function ew(t,e){const n=[];return tw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function tw(t,e,n){const r=Li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$l(e,i=>{tw(t,i,n)})}function ql(t,e){const n=Li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,H1(e,n.length>0?n:void 0)}$l(e,r=>{ql(t,r)})}function Oh(t,e){const n=fo(Z1(t,e)),r=bh(t.transactionQueueTree_,e);return AP(r,i=>{Gu(t,i)}),Gu(t,r),q1(r,i=>{Gu(t,i)}),n}function Gu(t,e){const n=Li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?H1(e,void 0):n.length=s+1,St(t.eventQueue_,fo(e),i);for(let o=0;o<r.length;o++)Ai(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const jg=function(t,e){const n=iR(t),r=n.namespace;n.domain==="firebase.com"&&pr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cb(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},iR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=nR(t.substring(c,d)));const h=rR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class rw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:sh(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Ig(this._queryParams),n=eh(e);return n==="{}"?"default":n}get _queryObject(){return Ig(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Nr))return!1;const n=this._repo===e._repo,r=oh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gb(this._path)}}function oR(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Lh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ir){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==mr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Rn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===oe){if(e!=null&&!Pd(e)||n!=null&&!Pd(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof uh||t.getIndex()===S1,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function iw(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class rn extends Nr{constructor(e,n){super(e,n,new dh,!1)}get parent(){const e=g1(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ys{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=wi(this.ref,e);return new Ys(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ys(i,wi(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function br(t,e){return t=Oe(t),t._checkNotDeleted("ref"),e!==void 0?wi(t._root,e):t._root}function wi(t,e){return t=Oe(t),$(t._path)===null?$P("child","path",e,!1):xh("child","path",e,!1),new rn(t._repo,le(t._path,e))}function aR(t,e){t=Oe(t),K1("push",t._path),ho("push",e,t._path,!0);const n=X1(t._repo),r=px(n),i=wi(t,r),s=wi(t,r);let o;return e!=null?o=lR(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lR(t,e){t=Oe(t),K1("set",t._path),ho("set",e,t._path,!1);const n=new so;return YP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function uR(t,e){UP("update",e,t._path,!1);const n=new so;return QP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Mh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new nw("value",this,new Ys(e.snapshotNode,new rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rw(this,e,n):null}matches(e){return e instanceof Mh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Dh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rw(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=wi(new rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new nw(e.type,this,new Ys(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Dh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function sw(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{$g(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new sR(n,s||void 0),a=e==="value"?new Mh(o):new Dh(e,o);return JP(t._repo,t,a),()=>$g(t._repo,t,a)}function Gl(t,e,n,r){return sw(t,"value",e,n,r)}function cR(t,e,n,r){return sw(t,"child_added",e,n,r)}class po{}class dR extends po{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){ho("endAt",this._value,e._path,!0);const n=wx(e._queryParams,this._value,this._key);if(iw(n),Lh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Nr(e._repo,e._path,n,e._orderByCalled)}}class fR extends po{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){ho("startAt",this._value,e._path,!0);const n=_x(e._queryParams,this._value,this._key);if(iw(n),Lh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Nr(e._repo,e._path,n,e._orderByCalled)}}class hR extends po{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Nr(e._repo,e._path,yx(e._queryParams,this._limit),e._orderByCalled)}}function ow(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new hR(t)}class pR extends po{constructor(e){super(),this._path=e}_apply(e){oR(e,"orderByChild");const n=new K(this._path);if(j(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new uh(n),i=Cx(e._queryParams,r);return Lh(i),new Nr(e._repo,e._path,i,!0)}}function Fh(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return xh("orderByChild","path",t,!1),new pR(t)}class mR extends po{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(ho("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new dR(this._value,this._key)._apply(new fR(this._value,this._key)._apply(e))}}function gR(t,e){return zP("equalTo","key",e,!0),new mR(t,e)}function Uh(t,...e){let n=Oe(t);for(const r of e)n=r._apply(n);return n}uP(rn);mP(rn);/**
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
 */const vR="FIREBASE_DATABASE_EMULATOR_HOST",Ad={};let yR=!1;function _R(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||pr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jg(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[vR]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=jg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new yd(yd.OWNER):new _b(t.name,t.options,e);jP("Invalid Firebase Database URL",o),j(o.path)||pr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CR(a,t,c,new yb(t.name,n));return new ER(d,t)}function wR(t,e){const n=Ad[e];(!n||n[t.key]!==t)&&pr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZP(t),delete n[t.key]}function CR(t,e,n,r){let i=Ad[e.name];i||(i={},Ad[e.name]=i);let s=i[t.toURLString()];return s&&pr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qP(t,yR,n,r),i[t.toURLString()]=s,s}class ER{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pr("Cannot call "+e+" on a deleted database.")}}function xr(t=Gf(),e){return kr(t,"database").getImmediate({identifier:e})}/**
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
 */function SR(t){rb(ao),Ot(new Et("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _R(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ct(ag,lg,t),ct(ag,lg,"esm2017")}/**
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
 */const kR={".sv":"timestamp"};function aw(){return kR}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SR();const Pr={MESSAGES:"messages",USERS:"users",MATCHES:"matches"},IR={uid:null,displayName:"Unknown User"},Ct={demo:{id:"demo",name:"Demo Community",intents:[{code:"tutoring-math",name:"Get tutoring in math"},{code:"watch-recs",name:"Get show and movie recommendations"},{code:"student-org",name:"Get information on student organizations"},{code:"commons-food",name:"Learn more about the commons food"},{code:"hobbies",name:"Learn more about different hobbies"}],interests:[{code:"running",name:"Running"},{code:"biking",name:"Biking"},{code:"swimming",name:"Swimming"}]},sds:{id:"sds",name:"Scarlet Data Studio",intents:[{code:"tech-careers",name:"Learn about careers in technology"},{code:"involve-iit",name:"Get more involved at Illinois Tech"},{code:"watch-recs",name:"Get show and movie recommendations"}],interests:[{code:"chess",name:"Chess"},{code:"art",name:"Art"},{code:"movies",name:"Movies"},{code:"fashion",name:"Fashion"},{code:"sports",name:"Sports"}]},esi:{id:"esi",name:"Exelon Summer Institute",intents:[],interests:[]}};async function TR(t){const e=await Pi({route:`/core/user/${t}`});return e==null?void 0:e.data}function Kl(t){const e=xr(),n=`${Pr.USERS}/${t}`,r=br(e,n);return new Promise(i=>{Gl(r,s=>{const o=s.val();i(o&&Z({uid:s.key},o))})})}function Yl(t,e=TR){const[n,r]=N.exports.useState({});return N.exports.useEffect(()=>{Object.keys(t).filter(i=>i!=="undefined"&&!(i in n)).map(e).forEach(i=>{i.then(s=>{s!=null&&s.uid&&r(o=>Ne(Z({},o),{[s.uid]:s}))}).catch(s=>{console.log("Error while fetching many user records."),console.error(s)})})},[t,n]),n}async function zh(t){try{if(!(t!=null&&t.uid))throw new Error("No user ID provided to update user details.");const{uid:e,email:n,displayName:r,photoURL:i}=t,s=xr(),o=`${Pr.USERS}/${e}`,a=br(s,o);return await uR(a,{uid:e,email:n,displayName:r,photoURL:i,latestLogin:aw()}),null}catch(e){return console.error("Failed to update user details."),console.log(t),console.error(e),e}}function NR(t){var o,a,l;const[e,n]=N.exports.useState(),r=(o=Yl({[t]:!0},Kl))==null?void 0:o[t],i=Object.keys((r==null?void 0:r.communities)||{}).map(u=>{var c;return Z(Z({},Ct==null?void 0:Ct[u]),(c=r==null?void 0:r.communities)==null?void 0:c[u])}),s=(l=(a=i.filter(u=>u.active))==null?void 0:a[0])==null?void 0:l.id;return N.exports.useEffect(()=>{n(s)},[s]),[e,n,i]}function bR(t,e){const n=xr(),r=`${Pr.MESSAGES}/${t}/${e}`,i=Uh(br(n,r),Fh("timestamp"),ow(1));return new Promise(s=>{Gl(i,o=>{var c;const a=o.val()||{},l=(c=Object.keys(a))==null?void 0:c[0],u=l&&Z({key:l},a==null?void 0:a[l]);s(u)})})}function xR(t,e){const n=xr(),r=`${Pr.MATCHES}/${e}`,i=br(n,r),s=Uh(i,Fh("for"),gR(t));return new Promise(o=>{Gl(s,a=>{const l=a.val()||{},c=Object.values(l).map(d=>Ne(Z({},d),{community:e})).map(async d=>{const h=await bR(e,d.id);return Ne(Z({},d),{latestMessage:h})});Promise.all(c).then(d=>{o({communityId:e,matches:d})})})})}function PR(t,e){const[n,r]=N.exports.useState({});return N.exports.useEffect(()=>{!t||Object.keys(e).filter(i=>!(i in n)).map(i=>xR(t,i)).forEach(i=>{i.then(s=>{r(o=>Ne(Z({},o),{[s.communityId]:s.matches}))}).catch(s=>{console.log("Error while fetching many match records."),console.error(s)})})},[t,e,n]),n}function RR(t){var s;const e=(s=Yl({[t]:!0},Kl))==null?void 0:s[t],n=(e==null?void 0:e.communities)||{},r=PR(t,n);return Object.values(r).reduce((o,a)=>[...o,...a],[]).filter(o=>o.release_timestamp<Date.now()).map(o=>Ne(Z({},o),{communityConfig:(Ct==null?void 0:Ct[o==null?void 0:o.community])||{}}))}const AR="https://sds-butterfly-api.herokuapp.com",Bg="butterfly__last_ping",OR=1e3*60*5,Ku={LOADING:"Connecting to our server...",SUCCESS:"Connected successfully!",FAILURE:"Could not connect. Please reload page."};async function LR(){return new Promise(t=>{fetch(`${AR}/`).then(()=>t(!0)).catch(()=>t(!1))})}function MR(t,e){return t?"":e?"Success":"Failure"}function DR(t,e){return t?Ku.LOADING:e?Ku.SUCCESS:Ku.FAILURE}function $h({pingFn:t=LR}){const[e,n]=N.exports.useState(!0),[r,i]=N.exports.useState(!0),[s,o]=N.exports.useState(!0);N.exports.useEffect(()=>{let d=!0,h=null,m=null;const v=localStorage.getItem(Bg);return!v||Date.now()-v>=OR?(h=setTimeout(()=>{d&&o(!0)},1e3),t().then(b=>{d&&(i(b),n(!1)),b&&(localStorage.setItem(Bg,Date.now()),m=setTimeout(()=>{d&&o(!1)},1e3))})):o(!1),()=>{d=!1,h&&clearTimeout(h),m&&clearTimeout(m)}},[]);const a=MR(e,r),l=DR(e,r);return f(tb,{classes:["Bottom","Fixed","Centered",a,!e&&r?"FadeOut":"FadeIn"],visible:s,children:f("p",{children:l})})}function FR(){return C("div",{className:"Layout Page HomePage FullHeight VerticalCenter",children:[C("div",{children:[f(Jf,{size:"Big",align:"Centered"}),f("h1",{className:"BigTitle",children:"Butterfly"}),f("p",{children:"Meet people in your community."}),f(Xe,{to:"/login",children:f(Ri,{label:"Login",primary:!0})})]}),f($h,{})]})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var jh={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
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
***************************************************************************** */function Bh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UR=lw,uw=new Sr("auth","Firebase",lw());/**
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
 */const Wg=new xl("@firebase/auth");function oa(t,...e){Wg.logLevel<=Y.ERROR&&Wg.error(`Auth (${ao}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Wh(t,...e)}function xt(t,...e){return Wh(t,...e)}function cw(t,e,n){const r=Object.assign(Object.assign({},UR()),{[e]:n});return new Sr("auth","Firebase",r).create(e,{appName:t.name})}function zR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),cw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uw.create(t,...e)}function F(t,e,...n){if(!t)throw Wh(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function en(t,e){t||Ht(e)}/**
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
 */const Hg=new Map;function Vt(t){en(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
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
 */function $R(t,e){const n=kr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bs(s,e!=null?e:{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function jR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Od(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BR(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BR()||t0()||"connection"in navigator)?navigator.onLine:!0}function HR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||n0()}get(){return WR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hh(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const qR=new mo(3e4,6e4);function Ql(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,i={}){return fw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),dw.fetch()(hw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VR),e);try{const i=new GR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yu(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(t,c,u);ht(t,c)}}catch(i){if(i instanceof Fn)throw i;ht(t,"network-request-failed")}}async function Xl(t,e,n,r,i={}){const s=await Mi(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hh(t.config,i):`${t.config.apiScheme}://${i}`}class GR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),qR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KR(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function YR(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QR(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Vh(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs(Qu(i.auth_time)),issuedAtTime:Cs(Qu(i.iat)),expirationTime:Cs(Qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qu(t){return Number(t)*1e3}function Vh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=ad(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i),null}}function XR(t){const e=Vh(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&JR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ci(t,YR(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?n4(s.providerUserInfo):[],a=t4(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function e4(t){const e=Oe(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function n4(t){return t.map(e=>{var{providerId:n}=e,r=Bh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function r4(t,e){const n=await fw(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):XR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await r4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function on(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QR(this,e)}reload(){return e4(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ci(this,KR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:S,providerData:x,stsTokenManager:E}=n;F(y&&E,e,"internal-error");const I=Qs.fromJSON(this.name,E);F(typeof y=="string",e,"internal-error"),on(d,e.name),on(h,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),on(m,e.name),on(v,e.name),on(w,e.name),on(b,e.name),on(g,e.name),on(p,e.name);const M=new sr({uid:y,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:I,createdAt:g,lastLoginAt:p});return x&&Array.isArray(x)&&(M.providerData=x.map(D=>Object.assign({},D))),b&&(M._redirectEventId=b),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nl(s),s}}/**
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
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const qg=mw;/**
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
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(Vt(qg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(qg);const o=aa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=sr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new si(s,e,r))}}/**
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
 */function Gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Cw(e))return"Webos";if(qh(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=Ae()){return/firefox\//i.test(t)}function qh(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(t=Ae()){return/crios\//i.test(t)}function yw(t=Ae()){return/iemobile/i.test(t)}function _w(t=Ae()){return/android/i.test(t)}function ww(t=Ae()){return/blackberry/i.test(t)}function Cw(t=Ae()){return/webos/i.test(t)}function Jl(t=Ae()){return/iphone|ipad|ipod/i.test(t)}function i4(t=Ae()){var e;return Jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s4(){return BI()&&document.documentMode===10}function Ew(t=Ae()){return Jl(t)||_w(t)||Cw(t)||ww(t)||/windows phone/i.test(t)||yw(t)}function o4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sw(t,e=[]){let n;switch(t){case"Browser":n=Gg(Ae());break;case"Worker":n=`${Gg(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${r}`}/**
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
 */class a4{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zl(t){return Oe(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Gh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function l4(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function u4(t,e){return Xl(t,"POST","/v1/accounts:signInWithPassword",Ql(t,e))}/**
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
 */async function c4(t,e){return Xl(t,"POST","/v1/accounts:signInWithEmailLink",Ql(t,e))}async function d4(t,e){return Xl(t,"POST","/v1/accounts:signInWithEmailLink",Ql(t,e))}/**
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
 */class Xs extends Gh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return u4(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c4(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return l4(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d4(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oi(t,e){return Xl(t,"POST","/v1/accounts:signInWithIdp",Ql(t,e))}/**
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
 */const f4="http://localhost";class _r extends Gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:f4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */function h4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p4(t){const e=rs(is(t)).link,n=e?rs(is(e)).deep_link_id:null,r=rs(is(t)).deep_link_id;return(r?rs(is(r)).link:null)||r||n||e||t}class Kh{constructor(e){var n,r,i,s,o,a;const l=rs(is(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=h4((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p4(e);try{return new Kh(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kh.parseLink(n);return F(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class go extends Yh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends go{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class zt extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class fn extends go{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class hn extends go{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Yg(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yg(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rl extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rl(e,n,r,i)}}function kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,s,e,r):s})}async function m4(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
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
 */async function g4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ci(t,kw(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Vh(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function Iw(t,e,n=!1){const r="signIn",i=await kw(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function v4(t,e){return Iw(Zl(t),e)}function y4(t,e,n){return v4(Oe(t),Di.credential(e,n))}/**
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
 */async function _4(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function w4(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ci(r,_4(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function C4(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function E4(t){return Oe(t).signOut()}const il="__sak";/**
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
 */class Tw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function S4(){const t=Ae();return qh(t)||Jl(t)}const k4=1e3,I4=10;class Nw extends Tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S4()&&o4(),this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,I4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},k4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const T4=Nw;/**
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
 */class bw extends Tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bw.type="SESSION";const xw=bw;/**
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
 */function N4(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await N4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eu.receivers=[];/**
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
 */function Qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class b4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pt(){return window}function x4(t){Pt().location.href=t}/**
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
 */function Pw(){return typeof Pt().WorkerGlobalScope!="undefined"&&typeof Pt().importScripts=="function"}async function P4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A4(){return Pw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",O4=1,sl="firebaseLocalStorage",Aw="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tu(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function L4(){const t=indexedDB.deleteDatabase(Rw);return new vo(t).toPromise()}function Ld(){const t=indexedDB.open(Rw,O4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:Aw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await L4(),e(await Ld()))})})}async function Qg(t,e,n){const r=tu(t,!0).put({[Aw]:e,value:n});return new vo(r).toPromise()}async function M4(t,e){const n=tu(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=tu(t,!0).delete(e);return new vo(n).toPromise()}const D4=800,F4=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eu._getInstance(A4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P4(),!this.activeServiceWorker)return;this.sender=new b4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Qg(e,il,"1"),await Xg(e,il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tu(i,!1).getAll();return new vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const U4=Ow;/**
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
 */function z4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $4(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z4().appendChild(r)})}function j4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mo(3e4,6e4);/**
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
 */function Lw(t,e){return e?Vt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xh extends Gh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function B4(t){return Iw(t.auth,new Xh(t),t.bypassAuthState)}function W4(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),g4(n,new Xh(t),t.bypassAuthState)}async function H4(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),m4(n,new Xh(t),t.bypassAuthState)}/**
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
 */class Mw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B4;case"linkViaPopup":case"linkViaRedirect":return H4;case"reauthViaPopup":case"reauthViaRedirect":return W4;default:ht(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V4=new mo(2e3,1e4);async function q4(t,e,n){const r=Zl(t);zR(t,e,Yh);const i=Lw(r,n);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}class Zn extends Mw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,V4.get())};e()}}Zn.currentPopupAction=null;/**
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
 */const G4="pendingRedirect",Xu=new Map;class K4 extends Mw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const r=await Y4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y4(t,e){const n=X4(e),r=Q4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Q4(t){return Vt(t._redirectPersistence)}function X4(t){return aa(G4,t.config.apiKey,t.name)}async function J4(t,e,n=!1){const r=Zl(t),i=Lw(r,e),o=await new K4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Z4=10*60*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dw(t);default:return!1}}/**
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
 */async function nA(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
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
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function sA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nA(t);for(const n of e)try{if(oA(n))return}catch{}ht(t,"unauthorized-domain")}function oA(t){const e=Od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iA.test(n))return!1;if(rA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aA=new mo(3e4,6e4);function Zg(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lA(t){return new Promise((e,n)=>{var r,i,s;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(xt(t,"network-request-failed"))},timeout:aA.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)o();else{const a=j4("iframefcb");return Pt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},$4(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw la=null,e})}let la=null;function uA(t){return la=la||lA(t),la}/**
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
 */const cA=new mo(5e3,15e3),dA="__/auth/iframe",fA="emulator/auth/iframe",hA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hh(e,fA):`https://${t.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:t.name,v:ao},i=pA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function gA(t){const e=await uA(t),n=Pt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:mA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Pt().setTimeout(()=>{s(o)},cA.get());function l(){Pt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const vA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yA=500,_A=600,wA="_blank",CA="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EA(t,e,n,r=yA,i=_A){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(a=vw(u)?wA:n),gw(u)&&(e=e||CA,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(i4(u)&&a!=="_self")return SA(e||"",a),new ev(null);const d=window.open(e||"",a,c);F(d,t,"popup-blocked");try{d.focus()}catch{}return new ev(d)}function SA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kA="__/auth/handler",IA="emulator/auth/handler";function tv(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ao,eventId:i};if(e instanceof Yh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ld(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof go){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${TA(t)}?${xi(a).slice(1)}`}function TA({config:t}){return t.emulator?Hh(t,IA):`https://${t.authDomain}/${kA}`}/**
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
 */const Ju="webStorageSupport";class NA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=J4}async _openPopup(e,n,r,i){var s;en((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=tv(e,n,r,Od(),i);return EA(e,o,Qh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),x4(tv(e,n,r,Od(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gA(e),r=new eA(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ju];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ew()||qh()||Jl()}}const bA=NA;var nv="@firebase/auth",rv="0.19.12";/**
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
 */class xA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RA(t){Ot(new Et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(t)},c=new a4(a,l,u);return jR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new Et("auth-internal",e=>{const n=Zl(e.getProvider("auth").getImmediate());return(r=>new xA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(nv,rv,PA(t)),ct(nv,rv,"esm2017")}/**
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
 */function nu(t=Gf()){const e=kr(t,"auth");return e.isInitialized()?e.getImmediate():$R(t,{popupRedirectResolver:bA,persistence:[U4,T4,xw]})}RA("Browser");async function Fw(){try{const t=nu(),e=new zt,{user:n}=await q4(t,e);return{user:n,signInError:null}}catch(t){return{user:null,signInError:t}}}async function Uw(){try{const t=nu();return await E4(t),{isSuccess:!0,signOutError:null}}catch(t){return{isSuccess:!1,signOutError:t}}}function Rr(){const[t,e]=N.exports.useState(null),n=nu();return N.exports.useEffect(()=>C4(n,i=>{e(s=>(s==null?void 0:s.uid)!==(i==null?void 0:i.uid)?i:s)}),[n]),t}function zw({authUser:t,doLogOut:e}){return t&&C("div",{children:[f("hr",{}),C("p",{children:["Currently logged in as ",t.displayName,"."]}),f("p",{children:f(Xe,{to:"/chats",children:"Go to Chats"})}),f("p",{children:C("span",{className:"Button",role:"button",tabIndex:0,onClick:e,onKeyDown:e,children:[f(fe,{icon:LS,className:"IconBefore"}),f("span",{children:"Log Out"})]})})]})}function AA(){return f("div",{className:"FloatingButton MockLoginButton",children:C(Xe,{to:"/mocklogin",className:"NoDecorate",children:[f(fe,{icon:Xv,className:"IconBefore"}),f("span",{className:"FloatingButtonTooltip",children:"Go to Mock Login"})]})})}function OA(){const[t,e]=N.exports.useState(null),n=Rr(),r=al(),i=async()=>{const{user:o,signInError:a}=await Fw();o?(await zh(o),e(null),r("/chats")):(console.error(a),e(a))},s=async()=>{const{isSuccess:o,signOutError:a}=await Uw();o||e(a)};return C("div",{className:"Page LoginPage FullHeight VerticalCenter",children:[C("div",{children:[f(Jf,{size:"Big",align:"Centered"}),f("h1",{className:"BigTitle",children:"Butterfly"}),f("p",{children:"Meet people in your community."}),f(Ri,{label:"Log in with Google",primary:!0,iconBefore:jh,onClick:i}),C(Ll,{hasError:t,children:[f("p",{children:"Something went wrong:"}),f("pre",{children:t==null?void 0:t.toString()})]}),f(zw,{authUser:n,doLogOut:s})]}),f(AA,{}),f($h,{})]})}function LA(){var i;const{uid:t}=jd(),e=(i=Yl({[t]:!0}))==null?void 0:i[t];if(!e)return f("p",{children:"User not found."});const{photoURL:n,displayName:r}=e;return C("div",{children:[f("div",{className:"ProfileImage",children:f("img",{src:n,alt:"Profile",className:"Image"})}),f("div",{className:"DisplayName",children:f("span",{children:r})})]})}function MA(t){const[e,n]=t,[r,i]=[e==null?void 0:e.displayName,n==null?void 0:n.displayName];return r&&i?`${r} and ${i}`:r||""}function DA({match:t,users:e,community:n}){const{id:r,release_timestamp:i,participants:s}=t,o=Object.keys(s).filter(c=>c!==t.for).map(c=>(e==null?void 0:e[c])||{uid:c}),a=MA(o),l=o.map(c=>f(K0,{user:c},c.uid)),u=o.length===1?"Single":"Group";return f(Xe,{to:`/chats/${n==null?void 0:n.id}/${r}`,className:"NoDecorate",children:C("div",{className:"ChatPreview",children:[f("div",{className:`UserPreview ${u}`,children:l}),C("div",{className:"MessagePreview",children:[f("h3",{children:a}),f("p",{children:n==null?void 0:n.name})]}),f("div",{className:"ReleasePreview",children:f("p",{children:vN(i)})})]})})}const FA=({chats:t,users:e})=>{const n=(o,a)=>a.release_timestamp-o.release_timestamp,r=t.sort(n),i=t.length===0&&f("div",{className:"Page",children:f("p",{children:"No matches yet."})}),s=r.length>0&&r.map(o=>{const a=(o==null?void 0:o.communityConfig)||{};return f(DA,{match:o,users:e,community:a},o.id)});return C("div",{className:"ChatInbox",children:[i,s]})};const UA=()=>C("div",{className:"Header Light",children:[f("h1",{className:"BigTitle",children:f(Xe,{to:"/",children:f("span",{children:"Butterfly Chats"})})}),f("p",{children:"Each week, you will be matched to another person in your community."}),C("p",{children:[f("span",{children:"Check back on Mondays to see who you are matched with! "}),C("span",{children:["Update ",f(Xe,{to:"/me",children:"your profile"})," for better matches."]})]})]});function zA(){const t=Rr(),e=RR(t==null?void 0:t.uid),n=e.reduce((i,s)=>Z(Z({},i),s.participants),{}),r=Yl(n,Kl);return C("div",{className:"AllChatsPage FullHeight LightBackground",children:[f(UA,{}),f(FA,{chats:e,users:r})]})}const $w="MESSAGE";function $A(t){const[e,n]=N.exports.useState({});return N.exports.useEffect(()=>{if(!t)return()=>{};const r=xr(),i=t.split("/")[0],s=`${Pr.MATCHES}/${t}`,o=br(r,s);return Gl(o,async l=>{const u=l.val(),c=(u==null?void 0:u.participants)||{},d=await Object.keys(c).reduce(async(h,m)=>{const v=await Kl(m);return Ne(Z({},await h),{[m]:v})},c);n(Ne(Z({isLoaded:!0,exists:l.exists(),communityId:i},u),{participants:d}))})},[t]),e}function jA(t,e=50){const[n,r]=N.exports.useState({keys:{},values:[]});return N.exports.useEffect(()=>{const i=xr(),s=`${Pr.MESSAGES}/${t}`,o=Uh(br(i,s),Fh("timestamp"),ow(e));return cR(o,l=>{const{key:u}=l,c=Z({key:u},l.val());r(d=>{if(u in d.keys)return d;const{keys:h,values:m}=d;return{isLoaded:!0,keys:Ne(Z({},h),{[u]:!0}),values:[...m,c]}})})},[t,e]),n.values}async function BA(t,e){if(!e.from)throw new Error("Missing `from` in message data.");if(!e.message)throw new Error("Missing `message` in message data.");const n={type:$w,timestamp:aw(),message:e.message,from:e.from},r=xr(),i=`${Pr.MESSAGES}/${t}`,s=br(r,i);await aR(s,n);const o=D0();F0(o,"send_chat_message",{community:e==null?void 0:e.community,release:e==null?void 0:e.release,chat:e==null?void 0:e.chat}),mN("send_chat_message",{community:e==null?void 0:e.community,release:e==null?void 0:e.release,chat:e==null?void 0:e.chat})}function WA(){return f("p",{className:"Centered",children:"Loading chat..."})}function HA(t,e,n){const r=(e==null?void 0:e.participants)||{};return e.isLoaded?e!=null&&e.exists?n in r?null:"You are not a participant in this chat.":`No chat found for ID: ${t}`:null}const Fi=N.exports.createContext();function VA({chatId:t,header:e,conversation:n,composer:r}){const{chat:i,myUserId:s}=N.exports.useContext(Fi),o=HA(t,i,s),a=i.isLoaded&&!o,l=C("div",{className:"ChatAppInner HideScroll",children:[f("div",{className:"ChatHeader HideScroll",children:e}),f("div",{className:"ChatMessages",children:n}),f("div",{className:"ChatComposer",children:r})]});return C("div",{className:"ChatApp",children:[!i.isLoaded&&f(WA,{}),a&&l,C(Ll,{hasError:o,children:[f("h1",{children:"No Chat Here..."}),f("pre",{children:o})]})]})}function qA({chatId:t,header:e,conversation:n,composer:r}){const i=Rr(),s=i==null?void 0:i.uid,o=t&&s&&`${t}~${s}`,a=$A(o),l=jA(t),u=d=>{const h=d==null?void 0:d.trim();!s||!h||BA(t,{message:h,from:s,community:a==null?void 0:a.communityId,release:a==null?void 0:a.release_tag,chat:t})},c=N.exports.useMemo(()=>({chat:a,messages:l,myUserId:s,sendChatMessage:u}));return f(Fi.Provider,{value:c,children:f(VA,{chatId:t,header:e,conversation:n,composer:r})})}function GA(){const t=N.exports.createRef(),{sendChatMessage:e}=N.exports.useContext(Fi),n=()=>{e(t.current.value),t.current.value=""};return C("div",{className:"ChatComposerInner",children:[f("textarea",{ref:t,className:"Input",placeholder:"Type here...",onKeyDown:i=>{const s=i.keyCode===13,o=i.ctrlKey||i.shiftKey;s&&!o&&(i.preventDefault(),n())}}),f("button",{type:"button",onClick:n,className:"Button Send",children:f(fe,{icon:IS,className:"IconBefore"})})]})}function KA(t,e){return Object.keys(t).filter(n=>n!==e).sort().reduce((n,r,i)=>Ne(Z({},n),{[r]:`Theirs Participant${i}`}),{[e]:"Mine"})}function Yr({data:t,myUserId:e,participants:n}){const{message:r,from:i,type:s}=t,o=KA(n,e);if(s!==$w)return null;const a=(n==null?void 0:n[i])||IR,l=r.split(`
`).map((d,h)=>f("p",{children:d},h)),u=i===e,c=f("div",{className:"ProfileImage",children:f("img",{src:a.photoURL,alt:a.displayName,className:"Image"})});return C("div",{className:`Message ${o[i]}`,children:[!u&&c,C("div",{className:"MessageInner",children:[f("p",{className:"Author",children:a.displayName}),f("div",{className:"Body",children:l})]}),u&&c]})}const YA=({commonLetters:t,community:e})=>{const n=xN(t.length,"letter"),r=t.join(", "),i=`Fun fact, your names have ${n} in common: ${r}!`,s="Fun fact, your names have no letters in common!",o=t.length>0?i:s;return f("div",{className:"CommonLettersStarter",children:f("p",{children:o})})},QA=({chat:t,community:e})=>{var n;return f(YA,{commonLetters:((n=t==null?void 0:t.metadata)==null?void 0:n.commonLetters)||[],community:e})};const XA=({})=>f("p",{children:"Liliana Ortiz was here!"}),iv=({chat:t})=>f(XA,{});const JA=({})=>f("div",{}),sv=({chat:t})=>f(JA,{});const ZA=({availabilities:t})=>C("div",{children:[f("p",{children:"You both have similar schedules! If you want to schedule a call together, you are both available at these times:"}),f("ul",{children:t.map((e,n)=>C("li",{children:[e.day," ",e.hour]},`${e.day}-${e.hour}`))})]}),ov=({chat:t})=>{var e;return f(ZA,{availabilities:((e=t==null?void 0:t.metadata)==null?void 0:e.availability)||[]})},Zu={commonLettersGenerator:QA,rareIntentsGenerator:iv,similarIntentsGenerator:iv,rareInterestsGenerator:sv,similarInterestsGenerator:sv,limitedSchedulesGenerator:ov,similarSchedulesGenerator:ov};function e3(t){var r;const e=(r=t==null?void 0:t.metadata)==null?void 0:r.generator,n=Zu==null?void 0:Zu[e];return!e||!n?null:n}function t3(){const{chat:t,messages:e,myUserId:n}=N.exports.useContext(Fi),r=e3(t),i=Ct[t.communityId],s=r&&f("div",{children:f(r,{chat:t,community:i})},"conversation_starter"),o=f("p",{children:"Loading chat..."}),a=f("p",{children:"No messages yet, will you start things off?"}),l=t.isLoaded&&e.map(u=>f(Yr,{data:u,myUserId:n,participants:t.participants},u.key));return t.isLoaded?s?[s,...l]:e.length>0?l:a:o}const n3=NS,r3=Qv;function Jh({label:t,icon:e,onClick:n}){return C("div",{className:"FloatingButton ChatAppMenuButton",tabIndex:0,role:"button",onClick:n,onKeyDown:n,children:[f("span",{className:"FloatingButtonTooltip",children:t}),f(fe,{icon:e,className:"IconBefore"})]})}function i3({menuConfig:t,onMenuClick:e,setOption:n}){var r;return C(Un,{children:[f(Jh,{label:"Close Menu",icon:n3,onClick:e}),C("div",{className:"ChatMenu",children:[f("h2",{children:"Chat Menu"}),(r=t==null?void 0:t.options)==null?void 0:r.map(i=>f("div",{className:"MenuOption",tabIndex:0,role:"button",onClick:()=>n(i.id),onKeyDown:()=>n(i.id),children:f("span",{children:i.name})},i.id))]})]})}function s3({name:t,onClick:e,children:n}){return C(Un,{children:[f(Jh,{label:"Chat Menu",icon:r3,onClick:e}),C("div",{className:"ChatMenu",children:[f("h2",{children:t}),n]})]})}function o3(){return f("p",{children:"Coming soon..."})}function a3({menuConfig:t,onMenuClick:e}){var u;const n=(u=t==null?void 0:t.options)==null?void 0:u.reduce((c,d)=>Ne(Z({},c),{[d.id]:d}),{}),[r,i]=N.exports.useState(null),s=()=>i(null),o=n==null?void 0:n[r],{chat:a,messages:l}=N.exports.useContext(Fi);if(o){const c=(o==null?void 0:o.component)||o3;return f(s3,{name:o==null?void 0:o.name,onClick:s,children:f(c,{chat:a,config:o,messages:l})})}return f(i3,{menuConfig:t,onMenuClick:e,setOption:i})}const l3=kS,u3=Qv;function c3(){return f("div",{className:"FloatingButton BackToChatsButton",children:C(Xe,{to:"/chats",className:"NoDecorate",children:[f(fe,{icon:l3,className:"IconBefore"}),f("span",{className:"FloatingButtonTooltip",children:"Back to Chats"})]})})}function d3(t,e){return Object.values((t==null?void 0:t.participants)||{}).filter(n=>n.uid!==e)}function f3(t){const[e,n]=t,[r,i]=[e==null?void 0:e.displayName,n==null?void 0:n.displayName];return r&&i?`${r} and ${i}`:r||""}function h3({chat:t,myUserId:e,onMenuClick:n}){const r=d3(t,e),i=r.map(s=>f(K0,{user:s},s.uid));return C(Un,{children:[f(c3,{}),f(Jh,{label:"Open Menu",icon:u3,onClick:n}),f("div",{className:"UserRowCentered",children:i}),f("h1",{children:f3(r)})]})}function p3({menuConfig:t}){const[e,n]=N.exports.useState(!1),r=()=>n(!0),i=()=>n(!1),{chat:s,myUserId:o}=N.exports.useContext(Fi);return e?f(a3,{menuConfig:t,onMenuClick:i}):f(h3,{chat:s,myUserId:o,onMenuClick:r})}const m3=({chat:t,filteredMessages:e,totalMessages:n})=>{let r;return(e==null?void 0:e.length)===0?r=`There were ${e==null?void 0:e.length} messages with that search. Please try again!`:(e==null?void 0:e.length)>=1&&(r=`Showing ${e==null?void 0:e.length} message(s) from ${n==null?void 0:n.length} messages`),C(Un,{children:[f("p",{children:r}),f("div",{children:e==null?void 0:e.map(i=>f(Yr,{data:i,myUserId:t==null?void 0:t.for,participants:t==null?void 0:t.participants},i.key))})]})},g3=({messages:t,chat:e})=>{const[n,r]=N.exports.useState(),[i,s]=N.exports.useState(),o=u=>{r(u.target.value)},a=()=>{s(t==null?void 0:t.filter(u=>{const c=n!=null?n:"";return u.message.toLowerCase().includes(c.toLowerCase())&&c!==""&&c.trim()})),r("")};return C("div",{className:"Search",children:[f("textarea",{className:"Input",placeholder:"Search Messages",value:n,onChange:o,onKeyDown:u=>{const c=u.keyCode===13,d=u.ctrlKey||u.shiftKey;c&&!d&&(u.preventDefault(),a())}}),f("button",{type:"button",onClick:a,className:"ButtonSearch",children:f(fe,{icon:RS})}),f("div",{children:f(m3,{chat:e,filteredMessages:i,totalMessages:t})})]})},v3=({chat:t,messages:e})=>f(g3,{chat:t,messages:e});const y3=({user:t})=>{const{uid:e,displayName:n,photoURL:r}=t,i=`Profile image for ${n}.`;return C("div",{className:"UserTile",children:[f("div",{className:"ProfileImage",children:f("img",{src:r,alt:i,className:"Image"})}),f("div",{className:"DisplayName",children:f("span",{children:n})}),C("div",{children:[C("button",{type:"button",children:[f(fe,{onClick:()=>{},icon:DS,className:"IconBeforeBlock"}),"Block"]}),C("button",{type:"button",children:[f(fe,{onClick:()=>{},icon:MS,className:"IconBeforeUnblock"}),"Unblock"]})]})]})},_3=({participants:t})=>f("div",{className:"UserRow",children:t.map(e=>f(y3,{user:e},e==null?void 0:e.uid))}),w3=({chat:t})=>f(_3,{participants:Object.values(t==null?void 0:t.participants).filter(e=>(e==null?void 0:e.uid)!==(t==null?void 0:t.for))});const C3=n=>{var r=n,{generator:t="blank"}=r,e=Co(r,["generator"]);const[i,s]=N.exports.useState(0);function o(l){s(i===l?0:l)}async function a(){if(i===0)alert("Rating can not be 0");else{const l={from_user:e.user,value:i,community:e.community,match:e.match,users:e.users,generator:t};await Pi({route:"/ratings/match_stars",options:{method:"POST",body:JSON.stringify(l)}})}}return C("div",{children:[C("p",{children:["How was your match with",C("span",{children:[" ",e.names.map((l,u)=>{const c=u;return C("span",{children:[l,e.names.length-1===u?".":","," "]},`${l}-${c}`)})]})]}),f("p",{children:"Submit a rating so we can give you better matches in the future!"}),C("div",{children:[f("button",{className:i>=1?"selected":"unselected",onClick:()=>o(1),onKeyDown:()=>o(1),type:"submit",children:f("span",{className:i>=1?"selected":"unselected",children:f(fe,{icon:Ui})})}),f("button",{className:i>=2?"selected":"unselected",onClick:()=>o(2),onKeyDown:()=>o(2),type:"submit",children:f("span",{className:i>=2?"selected":"unselected",children:f(fe,{icon:Ui})})}),f("button",{className:i>=3?"selected":"unselected",onClick:()=>o(3),onKeyDown:()=>o(3),type:"submit",children:f("span",{className:i>=3?"selected":"unselected",children:f(fe,{icon:Ui})})}),f("button",{className:i>=4?"selected":"unselected",onClick:()=>o(4),onKeyDown:()=>o(4),type:"submit",children:f("span",{className:i>=4?"selected":"unselected",children:f(fe,{icon:Ui})})}),f("button",{className:i>=5?"selected":"unselected",onClick:()=>o(5),onKeyDown:()=>o(5),type:"submit",children:f("span",{className:i>=5?"selected":"unselected",children:f(fe,{icon:Ui})})})]}),f("button",{type:"submit",onClick:a,children:"SUBMIT"})]})},E3=({chat:t})=>{var r;const e=Rr(),n=e==null?void 0:e.uid;return f(C3,{user:n,names:Object.values(t.participants).map(i=>i.displayName),users:Object.values(t.participants).map(i=>i.uid),generator:(r=t==null?void 0:t.metadata)==null?void 0:r.generator,community:t.communityId,match:t.id})};const S3=({})=>f("div",{children:f("p",{children:"Luis was here! "})}),k3=({chat:t,config:e})=>f(S3,{}),I3={options:[{id:"search",name:"Search Messages",component:v3},{id:"block",name:"Block User",component:w3},{id:"rate",name:"Rate Match",component:E3},{id:"upvote",name:"Upvote User",component:k3}]};function T3(){const{communityId:t,chatId:e}=jd(),n=`${t}/${e}`;return f("div",{className:"ChatPage",children:f("div",{className:"ChatContainer",children:f(qA,{chatId:n,header:f(p3,{menuConfig:I3}),conversation:f(t3,{}),composer:f(GA,{})})})})}const N3=({topic:t})=>f("h6",{children:t}),av=({side:t,value:e,updateIntent:n,code:r})=>{const[i,s]=N.exports.useState(e),o=()=>{const l=!i;n(r,t,l),s(l)};return N.exports.useEffect(()=>{s(e)},[e]),C("div",{children:[f("input",{type:"checkbox",checked:i,onChange:o}),f("span",{children:t==="giving"?"I can help others with this.":"I need help with this."}),f("br",{})]})};function b3(t,e){var o,a;const{code:n,name:r}=t,i=((o=e==null?void 0:e[n])==null?void 0:o.seeking)||!1,s=((a=e==null?void 0:e[n])==null?void 0:a.giving)||!1;return{code:n,name:r,isSeeking:i,isGiving:s}}const x3=({intents:t=[],userIntentMap:e={},updateIntent:n})=>{const r=t.map(i=>b3(i,e));return f("div",{children:r.map(i=>C("div",{children:[f(N3,{topic:i.name}),f(av,{side:"seeking",value:i.isSeeking,updateIntent:n,code:i.code}),f(av,{side:"giving",value:i.isGiving,updateIntent:n,code:i.code})]},i.code))})};const P3=({code:t,updateInterest:e,value:n})=>{const[r,i]=N.exports.useState(n),s=()=>{const o=!r;e(t,o),i(o)};return N.exports.useEffect(()=>{i(n)},[n]),f("input",{type:"checkbox",checked:r,onChange:s})},R3=({allInterests:t=[],userInterestsMap:e={},updateInterest:n})=>C("div",{children:[f("p",{children:"Choose the topics that you like."}),t.map(r=>C("div",{children:[f(P3,{code:r.code,updateInterest:n,value:(e==null?void 0:e[r.code])||!1}),C("span",{children:[" ",r.name," "]})]},r.code))]});function A3({communityId:t,communityData:e}){return!e&&C(Un,{children:[C("p",{children:["No community found for ",f("strong",{children:t}),"."]}),f("p",{children:"Check your link or ask the person who invited you for help."})]})}function O3({authUser:t,doLogIn:e}){return!t&&C(Un,{children:[f("p",{children:"Log in to join this community on Butterfly."}),f(Ri,{label:"Log in with Google",iconBefore:jh,onClick:e})]})}function L3({authUser:t,doLogIn:e}){return t&&C(Un,{children:[C("p",{children:["You are currently logged in as ",t==null?void 0:t.displayName,"."]}),f("p",{children:"Want to log in with another account?"}),f(Ri,{label:"Log in with Google",iconBefore:jh,onClick:e})]})}function M3({authUser:t,handleJoin:e}){return t&&f(Ri,{label:"Join Community",primary:!0,iconBefore:AS,onClick:e})}function D3({message:t=null,error:e=null}){const n=t||e;return n&&f("p",{children:n})}function F3({communityId:t,communityData:e,authUser:n,doJoin:r,doLogIn:i}){const[s,o]=N.exports.useState(null),a=al(),l=async()=>{if(!(n!=null&&n.uid)){o({message:"You must be logged in to join."});return}const u=await r(t,n.uid);o(u),u.success&&a("/chats")};return e&&C(Un,{children:[C("p",{children:["You are invited to join ",f("strong",{children:e.name}),"."]}),f(M3,{authUser:n,handleJoin:l}),f(D3,Z({},s)),f(O3,{authUser:n,doLogIn:i}),f(L3,{authUser:n,doLogIn:i})]})}function U3({communityId:t,communityConfig:e,authUser:n,doJoin:r,doLogIn:i}){const s=e==null?void 0:e[t];return C("div",{className:"Centered",children:[f("h1",{className:"BigTitle",children:"Join Community"}),f(F3,{communityId:t,communityData:s,authUser:n,doJoin:r,doLogIn:i}),f(A3,{communityId:t,communityData:s}),f("p",{children:f(Xe,{to:"/",children:"Back to Home"})})]})}function z3({communities:t=[],selected:e,setCommunityId:n}){return f("div",{className:"CommunitySelector",children:t.length>0&&f("select",{onChange:r=>n(r.target.value),value:e||"",children:t.map(r=>f("option",{value:r.id,children:r.name},r.id))})})}async function $3(t,e,n,r){const i={update:r};await Pi({route:`/attributes/community/${t}/users/${e}/interests/${n}`,options:{method:"POST",body:JSON.stringify(i)}})}async function j3(t,e,n,r,i){const s={update:{[r]:i}};await Pi({route:`/attributes/community/${t}/users/${e}/intents/${n}`,options:{method:"POST",body:JSON.stringify(s)}})}function B3(){const t=Rr(),e=t==null?void 0:t.uid,[n,r,i]=NR(e),s=(Ct==null?void 0:Ct[n])||{},[o]=fd({route:`/attributes/community/${n}/users/${e}/intents`,deps:[n,e],isValid:n&&e}),l=((o==null?void 0:o.attributes)||[]).reduce((v,w)=>Ne(Z({},v),{[w.code]:w==null?void 0:w.data}),{}),u=(v,w,b)=>j3(n,e,v,w,b),[c]=fd({route:`/attributes/community/${n}/users/${e}/interests`,deps:[n,e],isValid:n&&e}),h=((c==null?void 0:c.attributes)||[]).reduce((v,w)=>Ne(Z({},v),{[w.code]:w==null?void 0:w.data}),{}),m=(v,w)=>$3(n,e,v,w);return t&&C("div",{className:"EditProfilePage",children:[C("div",{className:"Header",children:[f("h1",{className:"BigTitle",children:"Edit Profile"}),f("p",{children:"Update your profile to help us give you better matches!"}),f(md,{user:t}),f(Xe,{to:"/chats",children:f("p",{children:"Back to your matches."})})]}),C("div",{className:"Page",children:[f(z3,{communities:i,selected:n,setCommunityId:r}),f("h2",{children:"Intents"}),f(x3,{intents:s==null?void 0:s.intents,updateIntent:u,userIntentMap:l}),f("h2",{children:"Interests"}),f(R3,{allInterests:s==null?void 0:s.interests,updateInterest:m,userInterestsMap:h}),f("h2",{children:"Schedule"}),f("p",{children:"Coming soon..."})]})]})}async function W3(t,e){const n=`/core/community/${t}/join/${e}`;return await Pi({route:n,options:{method:"POST"}})}async function H3(){const{user:t}=await Fw();t&&await zh(t)}function V3(){const{communityId:t}=jd(),e=Rr();return C("div",{className:"Layout Page",children:[f(U3,{communityId:t,communityConfig:Ct,authUser:e,doJoin:W3,doLogIn:H3}),f($h,{})]})}const q3="Contacting backend API...";function G3(t,e){return e?`Error: ${e}`:t?JSON.stringify(t,null,4):q3}function K3(){const[t,e]=fd({route:"/"}),n=G3(t,e);return f("div",{className:"Layout Page",children:C("div",{children:[f("h1",{className:"BigTitle",children:"Status"}),f(Xe,{to:"/",children:"Back to Home"}),f("pre",{children:n})]})})}const Y3="7MIFL%Jj960nT^QX",jw=[{displayName:"Pradeep Balaram",email:"scarletdatastudio+pradeep@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/45.jpg"},{displayName:"Si-Woo Yun-Seo",email:"scarletdatastudio+siwoo@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/92.jpg"},{displayName:"Ilya Viktoria",email:"scarletdatastudio+ilya@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/31.jpg"},{displayName:"Asabe Oyibo",email:"scarletdatastudio+asabe@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/89.jpg"},{displayName:"Ernesto Sa\xFAl",email:"scarletdatastudio+ernesto@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"},{displayName:"Quy\xEAn H\u01B0\u01A1ng",email:"scarletdatastudio+quyen@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}],ec=jw.reduce((t,e)=>Ne(Z({},t),{[e.email]:e}),{});async function Q3(t){const e=ec==null?void 0:ec[t];if(!e)return{user:null,signInError:`No mock user for email: '${t}'`};try{const n=nu(),{email:r,displayName:i,photoURL:s}=e,{user:o}=await y4(n,r,Y3);return await w4(n.currentUser,{displayName:i,photoURL:s}),{user:o,signInError:null}}catch(n){return{user:null,signInError:n}}}function X3({mockUsers:t,doLogIn:e}){const n=N.exports.createRef(),r=()=>{const s=n.current.value;s&&e(s)},i=t.map(({email:s,displayName:o})=>f("option",{value:s,children:o},s));return C("div",{children:[f("p",{children:f("select",{ref:n,className:"LoginUserSelector",children:i})}),f(Ri,{label:"Log in as Mock User",primary:!0,iconBefore:Xv,onClick:r}),C("p",{children:[f(Xe,{to:"/login",children:"Back to Real Login"}),f("span",{children:" | "}),f(Xe,{to:"/status",children:"Status Page"})]})]})}function J3(){const[t,e]=N.exports.useState(null),n=Rr(),r=async s=>{const{user:o,signInError:a}=await Q3(s);o?(await zh(o),e(null)):(console.error(a),e(a))},i=async()=>{const{isSuccess:s,signOutError:o}=await Uw();s||e(o)};return f("div",{className:"Page LoginPage FullHeight VerticalCenter",children:C("div",{children:[f(Jf,{size:"Big",align:"Centered"}),f("h1",{className:"BigTitle",children:"Butterfly"}),f("p",{children:"Meet people in your community."}),f("hr",{}),f("h2",{children:"Mock User Login"}),f(X3,{doLogIn:r,mockUsers:jw}),C(Ll,{hasError:t,children:[f("p",{children:"Something went wrong:"}),f("pre",{children:t==null?void 0:t.toString()})]}),f(zw,{authUser:n,doLogOut:i})]})})}const Vo={"user-a":{displayName:"Me"},"user-b":{displayName:"User B"},"user-c":{displayName:"User C"},"user-d":{displayName:"User D"}};function Z3(){return C("div",{className:"Layout",children:[f("div",{className:"Header",children:f("h1",{className:"BigTitle",children:"Style Guide"})}),C("div",{className:"Page",children:[C("section",{className:"Section",children:[f("h2",{children:"Typography"}),f("hr",{}),f("h1",{children:"Heading 1"}),f("h2",{children:"Heading 2"}),f("h3",{children:"Heading 3"}),f("h4",{children:"Heading 4"}),f("h5",{children:"Heading 5"}),f("h6",{children:"Heading 6"}),f("p",{children:"Paragraph"})]}),C("section",{className:"Section",children:[f("h2",{children:"User Elements"}),f("hr",{}),C("div",{className:"UserRow",children:[f(md,{user:{displayName:"Ernesto Sa\xFAl",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"}}),f(md,{user:{displayName:"Quy\xEAn H\u01B0\u01A1ng",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}})]})]}),C("section",{className:"Section",children:[f("h2",{children:"Chat Elements"}),f("hr",{}),f(Yr,{data:{type:"MESSAGE",from:"user-a",message:`Hello,
This is a multi-paragraph message I sent!`},myUserId:"user-a",participants:Vo}),f(Yr,{data:{type:"MESSAGE",from:"user-b",message:"And I am replying to you."},myUserId:"user-a",participants:Vo}),f(Yr,{data:{type:"MESSAGE",from:"user-c",message:"I am another participant."},myUserId:"user-a",participants:Vo}),f(Yr,{data:{type:"MESSAGE",from:"user-d",message:"And I am yet another participant."},myUserId:"user-a",participants:Vo})]}),C("section",{className:"Section",children:[f("h2",{children:"Card Elements"}),f("hr",{}),f("h4",{children:"Full Cards"}),C("div",{className:"Card Full",children:[f("h4",{children:"Card 1"}),f("p",{children:"Card Content"})]}),C("div",{className:"Card Full",children:[f("h4",{children:"Card 2"}),f("p",{children:"Card Content"})]}),f("h3",{children:"Card Row"}),C("div",{className:"CardRow",children:[C("div",{className:"Card",children:[f("h4",{children:"Card A"}),f("p",{children:"Card Content"})]}),C("div",{className:"Card",children:[f("h4",{children:"Card B"}),f("p",{children:"Card Content"})]}),C("div",{className:"Card",children:[f("h4",{children:"Card C"}),f("p",{children:"Card Content"})]})]})]}),C("section",{className:"Section",children:[f("h2",{children:"Buttons"}),f("hr",{}),C("div",{className:"ButtonRow",children:[f("span",{className:"Button Primary",children:"Primary"}),f("span",{className:"Button",children:"Secondary"})]}),C("div",{className:"ButtonRow",children:[C("span",{className:"Button Primary",children:[f(fe,{icon:bS,className:"IconBefore"}),f("span",{children:"With Icon"})]}),C("span",{className:"Button",children:[f(fe,{icon:xS,className:"IconBefore"}),f("span",{children:"With Icon"})]})]}),f("span",{className:"Button",children:"Single Button"})]}),C("section",{className:"Section",children:[f("h2",{children:"Error Elements"}),f("hr",{}),C(Ll,{hasError:!0,children:[f("h4",{children:"Something went wrong."}),f("p",{children:"We broke it, sorry about that!"})]})]}),C("section",{className:"Section",children:[f("h2",{children:"Lists"}),f("hr",{}),f("h3",{children:"Unordered List"}),C("ul",{children:[f("li",{children:"List Item 1"}),f("li",{children:"List Item 2"}),f("li",{children:"List Item 3"}),f("li",{children:"List item with a lot of content that should wrap over to the next line."})]}),f("h3",{children:"Ordered List"}),C("ol",{children:[f("li",{children:"List Item 1"}),f("li",{children:"List Item 2"}),f("li",{children:"List Item 3"}),f("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),C("section",{className:"Section",children:[f("h2",{children:"Columns"}),f("hr",{}),f("h3",{children:"Two Columns"}),C("div",{className:"Columns",children:[C("div",{className:"Column Half",children:[f("h4",{children:"Column 1"}),f("p",{children:"Column Content"})]}),C("div",{className:"Column Half",children:[f("h4",{children:"Column 2"}),f("p",{children:"Column Content"})]})]}),f("h3",{children:"Three Columns"}),C("div",{className:"Columns",children:[C("div",{className:"Column Third",children:[f("h4",{children:"Col 1"}),f("p",{children:"Column Content"})]}),C("div",{className:"Column Third",children:[f("h4",{children:"Col 2"}),f("p",{children:"Column Content"})]}),C("div",{className:"Column Third",children:[f("h4",{children:"Col 3"}),f("p",{children:"Column Content"})]})]}),f("h3",{children:"Columns with Elements"}),C("div",{className:"Columns",children:[C("div",{className:"Column Half",children:[f("h4",{children:"Column 1"}),f("h5",{children:"List"}),C("ul",{children:[f("li",{children:"List Item 1"}),f("li",{children:"List Item 2"}),f("li",{children:"List Item 3"}),f("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),C("div",{className:"Column Half",children:[f("h4",{children:"Column 2"}),C("div",{className:"Card Full",children:[f("h5",{children:"Card"}),f("p",{children:"Card Content"})]})]})]})]})]})]})}const eO="/butterfly",lv="butterfly__pathname";function tO(){const t=al();return N.exports.useEffect(()=>{const e=localStorage.getItem(lv);if(e){localStorage.setItem(lv,"");const n=e.substring(eO.length);t(n)}},[t]),C(DC,{children:[f(Ee,{index:!0,element:f(FR,{})}),C(Ee,{path:"/",element:f(DN,{}),children:[f(Ee,{path:"login",element:f(OA,{})}),f(Ee,{path:"me",element:f(B3,{})}),f(Ee,{path:"join",children:f(Ee,{path:":communityId",element:f(V3,{})})}),f(Ee,{path:"profile",children:f(Ee,{path:":uid",element:f(LA,{})})}),C(Ee,{path:"chats",children:[f(Ee,{index:!0,element:f(zA,{})}),f(Ee,{path:":communityId/:chatId",element:f(T3,{})})]}),f(Ee,{path:"status",element:f(K3,{})}),f(Ee,{path:"mocklogin",element:f(J3,{})}),f(Ee,{path:"resources",children:f(Ee,{path:"styleguide",element:f(Z3,{})})})]}),f(Ee,{path:"*",element:f(FN,{})})]})}function nO(){const t=NN();return D0(),f("div",{className:"App Theme",children:f(bN.Provider,{value:t,children:f(tO,{})})})}const rO=[PS];ES.add(rO);document.title="Butterfly";gc.createRoot(document.getElementById("root")).render(f(gv.StrictMode,{children:f(zC,{basename:"butterfly",children:f(nO,{})})}));
