const Sm=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Sm();var D={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),Em=Symbol.for("react.portal"),Im=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Nm=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),Ou=Symbol.iterator;function Rm(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wf=Object.assign,Vf={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Hf}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qf(){}qf.prototype=Zn.prototype;function ll(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Hf}var ul=ll.prototype=new qf;ul.constructor=ll;Wf(ul,Zn.prototype);ul.isPureReactComponent=!0;var Nu=Array.isArray,Kf=Object.prototype.hasOwnProperty,cl={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Kf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ni,type:e,key:a,ref:o,props:i,_owner:cl.current}}function Lm(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function po(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dm(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ni:case Em:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+po(o,0):r,Nu(i)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),zi(i,t,n,"",function(u){return u})):i!=null&&(fl(i)&&(i=Lm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Au,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Nu(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+po(a,s);o+=zi(a,t,n,l,i)}else if(l=Rm(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+po(a,s++),o+=zi(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Fi={transition:null},zm={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:cl};F.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Zn;F.Fragment=Im;F.Profiler=xm;F.PureComponent=ll;F.StrictMode=Cm;F.Suspense=Om;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wf({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=cl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Kf.call(t,l)&&!Yf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ni,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tm,_context:e},e.Consumer=e};F.createElement=Gf;F.createFactory=function(e){var t=Gf.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:bm,render:e}};F.isValidElement=fl;F.lazy=function(e){return{$$typeof:Am,_payload:{_status:-1,_result:e},_init:Mm}};F.memo=function(e,t){return{$$typeof:Nm,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return he.current.useCallback(e,t)};F.useContext=function(e){return he.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return he.current.useDeferredValue(e)};F.useEffect=function(e,t){return he.current.useEffect(e,t)};F.useId=function(){return he.current.useId()};F.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return he.current.useMemo(e,t)};F.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};F.useRef=function(e){return he.current.useRef(e)};F.useState=function(e){return he.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return he.current.useTransition()};F.version="18.0.0-fc46dba67-20220329";D.exports=F;var Qf=D.exports;function ea(){return ea=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));var Ru=function(e){return e},Lu="beforeunload",Fm="popstate";function Um(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function a(){var w=r.location,S=w.pathname,N=w.search,A=w.hash,K=i.state||{};return[K.idx,Ru({pathname:S,search:N,hash:A,state:K.usr||null,key:K.key||"default"})]}var o=null;function s(){if(o)g.call(o),o=null;else{var w=Xt.Pop,S=a(),N=S[0],A=S[1];if(g.length){if(N!=null){var K=f-N;K&&(o={action:w,location:A,retry:function(){_(K*-1)}},_(K))}}else c(w)}}r.addEventListener(Fm,s);var l=Xt.Pop,u=a(),f=u[0],m=u[1],p=Mu(),g=Mu();f==null&&(f=0,i.replaceState(ea({},i.state,{idx:f}),""));function v(w){return typeof w=="string"?w:Qo(w)}function E(w,S){return S===void 0&&(S=null),Ru(ea({pathname:m.pathname,hash:"",search:""},typeof w=="string"?mn(w):w,{state:S,key:jm()}))}function P(w,S){return[{usr:w.state,key:w.key,idx:S},v(w)]}function d(w,S,N){return!g.length||(g.call({action:w,location:S,retry:N}),!1)}function c(w){l=w;var S=a();f=S[0],m=S[1],p.call({action:l,location:m})}function h(w,S){var N=Xt.Push,A=E(w,S);function K(){h(w,S)}if(d(N,A,K)){var be=P(A,f+1),Je=be[0],Vt=be[1];try{i.pushState(Je,"",Vt)}catch{r.location.assign(Vt)}c(N)}}function y(w,S){var N=Xt.Replace,A=E(w,S);function K(){y(w,S)}if(d(N,A,K)){var be=P(A,f),Je=be[0],Vt=be[1];i.replaceState(Je,"",Vt),c(N)}}function _(w){i.go(w)}var I={get action(){return l},get location(){return m},createHref:v,push:h,replace:y,go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(S){return p.push(S)},block:function(S){var N=g.push(S);return g.length===1&&r.addEventListener(Lu,Du),function(){N(),g.length||r.removeEventListener(Lu,Du)}}};return I}function Du(e){e.preventDefault(),e.returnValue=""}function Mu(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function jm(){return Math.random().toString(36).substr(2,8)}function Qo(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,a=e.hash,o=a===void 0?"":a;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function mn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const dl=D.exports.createContext(null),hl=D.exports.createContext(null),er=D.exports.createContext({outlet:null,matches:[]});function Ye(e,t){if(!e)throw new Error(t)}function $m(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mn(t):t,i=Zf(r.pathname||"/",n);if(i==null)return null;let a=Xf(e);Bm(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=Xm(a[s],i);return o}function Xf(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,a)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Ye(!1),o.relativePath=o.relativePath.slice(r.length));let s=Ot([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Ye(!1),Xf(i.children,t,l,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:Gm(s,i.index),routesMeta:l})}),t}function Bm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hm=/^:\w+$/,Wm=3,Vm=2,qm=1,Km=10,Ym=-2,zu=e=>e==="*";function Gm(e,t){let n=e.split("/"),r=n.length;return n.some(zu)&&(r+=Ym),t&&(r+=Vm),n.filter(i=>!zu(i)).reduce((i,a)=>i+(Hm.test(a)?Wm:a===""?qm:Km),r)}function Qm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Xm(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Jm({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let m=s.route;a.push({params:r,pathname:Ot([i,f.pathname]),pathnameBase:ed(Ot([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Ot([i,f.pathnameBase]))}return a}function Jm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,m)=>{if(f==="*"){let p=s[m]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[f]=ev(s[m]||""),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Zm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function ev(e,t){try{return decodeURIComponent(e)}catch{return e}}function tv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:nv(n,t):t,search:iv(r),hash:av(i)}}function nv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jf(e,t,n){let r=typeof e=="string"?mn(e):e,i=e===""||r.pathname===""?"/":r.pathname,a;if(i==null)a=n;else{let s=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),s-=1;r.pathname=l.join("/")}a=s>=0?t[s]:"/"}let o=tv(r,a);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function rv(e){return e===""||e.pathname===""?"/":typeof e=="string"?mn(e).pathname:e.pathname}function Zf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),ed=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,av=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ov(e){ri()||Ye(!1);let{basename:t,navigator:n}=D.exports.useContext(dl),{hash:r,pathname:i,search:a}=td(e),o=i;if(t!=="/"){let s=rv(e),l=s!=null&&s.endsWith("/");o=i==="/"?t+(l?"/":""):Ot([t,i])}return n.createHref({pathname:o,search:a,hash:r})}function ri(){return D.exports.useContext(hl)!=null}function za(){return ri()||Ye(!1),D.exports.useContext(hl).location}function pl(){ri()||Ye(!1);let{basename:e,navigator:t}=D.exports.useContext(dl),{matches:n}=D.exports.useContext(er),{pathname:r}=za(),i=JSON.stringify(n.map(s=>s.pathnameBase)),a=D.exports.useRef(!1);return D.exports.useEffect(()=>{a.current=!0}),D.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=Jf(s,JSON.parse(i),r);e!=="/"&&(u.pathname=Ot([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}const sv=D.exports.createContext(null);function lv(e){let t=D.exports.useContext(er).outlet;return t&&D.exports.createElement(sv.Provider,{value:e},t)}function uv(){let{matches:e}=D.exports.useContext(er),t=e[e.length-1];return t?t.params:{}}function td(e){let{matches:t}=D.exports.useContext(er),{pathname:n}=za(),r=JSON.stringify(t.map(i=>i.pathnameBase));return D.exports.useMemo(()=>Jf(e,JSON.parse(r),n),[e,r,n])}function cv(e,t){ri()||Ye(!1);let{matches:n}=D.exports.useContext(er),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let a=r?r.pathnameBase:"/";r&&r.route;let o=za(),s;if(t){var l;let p=typeof t=="string"?mn(t):t;a==="/"||((l=p.pathname)==null?void 0:l.startsWith(a))||Ye(!1),s=p}else s=o;let u=s.pathname||"/",f=a==="/"?u:u.slice(a.length)||"/",m=$m(e,{pathname:f});return fv(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:Ot([a,p.pathname]),pathnameBase:p.pathnameBase==="/"?a:Ot([a,p.pathnameBase])})),n)}function fv(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>D.exports.createElement(er.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function dv(e){return lv(e.context)}function wt(e){Ye(!1)}function hv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:a,static:o=!1}=e;ri()&&Ye(!1);let s=ed(t),l=D.exports.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=mn(r));let{pathname:u="/",search:f="",hash:m="",state:p=null,key:g="default"}=r,v=D.exports.useMemo(()=>{let E=Zf(u,s);return E==null?null:{pathname:E,search:f,hash:m,state:p,key:g}},[s,u,f,m,p,g]);return v==null?null:D.exports.createElement(dl.Provider,{value:l},D.exports.createElement(hl.Provider,{children:n,value:{location:v,navigationType:i}}))}function pv(e){let{children:t,location:n}=e;return cv(Xo(t),n)}function Xo(e){let t=[];return D.exports.Children.forEach(e,n=>{if(!D.exports.isValidElement(n))return;if(n.type===D.exports.Fragment){t.push.apply(t,Xo(n.props.children));return}n.type!==wt&&Ye(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Xo(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}function mv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const vv=["onClick","reloadDocument","replace","state","target","to"];function gv(e){let{basename:t,children:n,window:r}=e,i=D.exports.useRef();i.current==null&&(i.current=Um({window:r}));let a=i.current,[o,s]=D.exports.useState({action:a.action,location:a.location});return D.exports.useLayoutEffect(()=>a.listen(s),[a]),D.exports.createElement(hv,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}function yv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ml=D.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:a=!1,state:o,target:s,to:l}=t,u=mv(t,vv),f=ov(l),m=wv(l,{replace:a,state:o,target:s});function p(g){r&&r(g),!g.defaultPrevented&&!i&&m(g)}return D.exports.createElement("a",Jo({},u,{href:f,onClick:p,ref:n,target:s}))});function wv(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,a=pl(),o=za(),s=td(e);return D.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!yv(l)){l.preventDefault();let u=!!r||Qo(o)===Qo(s);a(e,{replace:u,state:i})}},[o,a,s,r,i,n,e])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Fu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fu(Object(n),!0).forEach(function(r){Sv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ta(e){return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ta(e)}function _v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kv(e,t,n){return t&&Uu(e.prototype,t),n&&Uu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e,t){return Iv(e)||xv(e,t)||nd(e,t)||Pv()}function Fa(e){return Ev(e)||Cv(e)||nd(e)||Tv()}function Ev(e){if(Array.isArray(e))return Zo(e)}function Iv(e){if(Array.isArray(e))return e}function Cv(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xv(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function nd(e,t){if(!!e){if(typeof e=="string")return Zo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zo(e,t)}}function Zo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ju=function(){},gl={},rd={},id=null,ad={mark:ju,measure:ju};try{typeof window!="undefined"&&(gl=window),typeof document!="undefined"&&(rd=document),typeof MutationObserver!="undefined"&&(id=MutationObserver),typeof performance!="undefined"&&(ad=performance)}catch{}var bv=gl.navigator||{},$u=bv.userAgent,Bu=$u===void 0?"":$u,zt=gl,W=rd,Hu=id,gi=ad;zt.document;var mt=!!W.documentElement&&!!W.head&&typeof W.addEventListener=="function"&&typeof W.createElement=="function",od=~Bu.indexOf("MSIE")||~Bu.indexOf("Trident/"),lt="___FONT_AWESOME___",es=16,sd="fa",ld="svg-inline--fa",ln="data-fa-i2svg",ts="data-fa-pseudo-element",Ov="data-fa-pseudo-element-pending",yl="data-prefix",wl="data-icon",Wu="fontawesome-i2svg",Nv="async",Av=["HTML","HEAD","STYLE","SCRIPT"],ud=function(){try{return!0}catch{return!1}}(),_l={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},na={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},cd={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Rv={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Lv=/fa[srltdbk\-\ ]/,fd="fa-layers-text",Dv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Mv={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},dd=[1,2,3,4,5,6,7,8,9,10],zv=dd.concat([11,12,13,14,15,16,17,18,19,20]),Fv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Uv=[].concat(Fa(Object.keys(na)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jt.GROUP,Jt.SWAP_OPACITY,Jt.PRIMARY,Jt.SECONDARY]).concat(dd.map(function(e){return"".concat(e,"x")})).concat(zv.map(function(e){return"w-".concat(e)})),hd=zt.FontAwesomeConfig||{};function jv(e){var t=W.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $v(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(W&&typeof W.querySelector=="function"){var Bv=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bv.forEach(function(e){var t=vl(e,2),n=t[0],r=t[1],i=$v(jv(n));i!=null&&(hd[r]=i)})}var Hv={familyPrefix:sd,styleDefault:"solid",replacementClass:ld,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Sr=x(x({},Hv),hd);Sr.autoReplaceSvg||(Sr.observeMutations=!1);var b={};Object.keys(Sr).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){Sr[e]=n,Ui.forEach(function(r){return r(b)})},get:function(){return Sr[e]}})});zt.FontAwesomeConfig=b;var Ui=[];function Wv(e){return Ui.push(e),function(){Ui.splice(Ui.indexOf(e),1)}}var gt=es,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vv(e){if(!(!e||!mt)){var t=W.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=W.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return W.head.insertBefore(t,r),e}}var qv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rr(){for(var e=12,t="";e-- >0;)t+=qv[Math.random()*62|0];return t}function tr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function kl(e){return e.classList?tr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kv(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(pd(e[n]),'" ')},"").trim()}function Ua(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Sl(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function Yv(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Gv(e){var t=e.transform,n=e.width,r=n===void 0?es:n,i=e.height,a=i===void 0?es:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&od?l+="translate(".concat(t.x/gt-r/2,"em, ").concat(t.y/gt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/gt,"em), calc(-50% + ").concat(t.y/gt,"em)) "):l+="translate(".concat(t.x/gt,"em, ").concat(t.y/gt,"em) "),l+="scale(".concat(t.size/gt*(t.flipX?-1:1),", ").concat(t.size/gt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qv=`:root, :host {
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
}`;function md(){var e=sd,t=ld,n=b.familyPrefix,r=b.replacementClass,i=Qv;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Vu=!1;function mo(){b.autoAddCss&&!Vu&&(Vv(md()),Vu=!0)}var Xv={mixout:function(){return{dom:{css:md,insertCss:mo}}},hooks:function(){return{beforeDOMElementCreation:function(){mo()},beforeI2svg:function(){mo()}}}},ut=zt||{};ut[lt]||(ut[lt]={});ut[lt].styles||(ut[lt].styles={});ut[lt].hooks||(ut[lt].hooks={});ut[lt].shims||(ut[lt].shims=[]);var Ue=ut[lt],vd=[],Jv=function e(){W.removeEventListener("DOMContentLoaded",e),ra=1,vd.map(function(t){return t()})},ra=!1;mt&&(ra=(W.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(W.readyState),ra||W.addEventListener("DOMContentLoaded",Jv));function Zv(e){!mt||(ra?setTimeout(e,0):vd.push(e))}function ii(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?pd(e):"<".concat(t," ").concat(Kv(r),">").concat(a.map(ii).join(""),"</").concat(t,">")}function qu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eg=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},vo=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?eg(n,i):n,l,u,f;for(r===void 0?(l=1,f=t[a[0]]):(l=0,f=r);l<o;l++)u=a[l],f=s(f,t[u],u,t);return f};function tg(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ns(e){var t=tg(e);return t.length===1?t[0].toString(16):null}function ng(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ku(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function rs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ku(t);typeof Ue.hooks.addPack=="function"&&!i?Ue.hooks.addPack(e,Ku(t)):Ue.styles[e]=x(x({},Ue.styles[e]||{}),a),e==="fas"&&rs("fa",t)}var Er=Ue.styles,rg=Ue.shims,ig=Object.values(cd),El=null,gd={},yd={},wd={},_d={},kd={},ag=Object.keys(_l);function og(e){return~Uv.indexOf(e)}function sg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!og(i)?i:null}var Sd=function(){var t=function(a){return vo(Er,function(o,s,l){return o[l]=vo(s,a,{}),o},{})};gd=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),yd=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),kd=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Er||b.autoFetchSvg,r=vo(rg,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});wd=r.names,_d=r.unicodes,El=ja(b.styleDefault)};Wv(function(e){El=ja(e.styleDefault)});Sd();function Il(e,t){return(gd[e]||{})[t]}function lg(e,t){return(yd[e]||{})[t]}function wn(e,t){return(kd[e]||{})[t]}function Ed(e){return wd[e]||{prefix:null,iconName:null}}function ug(e){var t=_d[e],n=Il("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ft(){return El}var Cl=function(){return{prefix:null,iconName:null,rest:[]}};function ja(e){var t=_l[e],n=na[e]||na[t],r=e in Ue.styles?e:null;return n||r||null}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,a=e.reduce(function(o,s){var l=sg(b.familyPrefix,s);if(Er[s]?(s=ig.includes(s)?Rv[s]:s,i=s,o.prefix=s):ag.indexOf(s)>-1?(i=s,o.prefix=ja(s)):l?o.iconName=l:s!==b.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=i==="fa"?Ed(o.iconName):{},f=wn(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||f||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Er.far&&Er.fas&&!b.autoFetchSvg&&(o.prefix="fas")}return o},Cl());return(a.prefix==="fa"||i==="fa")&&(a.prefix=Ft()||"fas"),a}var cg=function(){function e(){_v(this,e),this.definitions={}}return kv(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),rs(s,o[s]);var l=cd[s];l&&rs(l,o[s]),Sd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Yu=[],_n={},Rn={},fg=Object.keys(Rn);function dg(e,t){var n=t.mixoutsTo;return Yu=e,_n={},Object.keys(Rn).forEach(function(r){fg.indexOf(r)===-1&&delete Rn[r]}),Yu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ta(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){_n[o]||(_n[o]=[]),_n[o].push(a[o])})}r.provides&&r.provides(Rn)}),n}function is(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=_n[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_n[e]||[];i.forEach(function(a){a.apply(null,n)})}function ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rn[e]?Rn[e].apply(null,t):void 0}function as(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ft();if(!!t)return t=wn(n,t)||t,qu(Id.definitions,n,t)||qu(Ue.styles,n,t)}var Id=new cg,hg=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,un("noAuto")},pg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt?(un("beforeI2svg",t),ct("pseudoElements2svg",t),ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Zv(function(){vg({autoReplaceSvgRoot:n}),un("watch",t)})}},mg={icon:function(t){if(t===null)return null;if(ta(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ja(t[0]);return{prefix:r,iconName:wn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.familyPrefix,"-"))>-1||t.match(Lv))){var i=$a(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ft(),iconName:wn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Ft();return{prefix:a,iconName:wn(a,t)||t}}}},xe={noAuto:hg,config:b,dom:pg,parse:mg,library:Id,findIconDefinition:as,toHtml:ii},vg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?W:n;(Object.keys(Ue.styles).length>0||b.autoFetchSvg)&&mt&&b.autoReplaceSvg&&xe.dom.i2svg({node:r})};function Ba(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ii(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!mt){var r=W.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gg(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Sl(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ua(x(x({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function yg(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(b.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function xl(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,v=r.found?r:n,E=v.width,P=v.height,d=i==="fak",c=[b.replacementClass,a?"".concat(b.familyPrefix,"-").concat(a):""].filter(function(N){return m.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(m.classes).join(" "),h={children:[],attributes:x(x({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(P)})},y=d&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/P*16*.0625,"em")}:{};g&&(h.attributes[ln]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Rr())},children:[l]}),delete h.attributes.title);var _=x(x({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:x(x({},y),m.styles)}),I=r.found&&n.found?ct("generateAbstractMask",_)||{children:[],attributes:{}}:ct("generateAbstractIcon",_)||{children:[],attributes:{}},w=I.children,S=I.attributes;return _.children=w,_.attributes=S,s?yg(_):gg(_)}function Gu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ln]="");var f=x({},o.styles);Sl(i)&&(f.transform=Gv({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=Ua(f);m.length>0&&(u.style=m);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function wg(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ua(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var go=Ue.styles;function os(e){var t=e[0],n=e[1],r=e.slice(4),i=vl(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(b.familyPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var _g={found:!1,width:512,height:512};function kg(e,t){!ud&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ss(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=Ft()),new Promise(function(r,i){if(ct("missingIconAbstract"),n==="fa"){var a=Ed(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&go[t]&&go[t][e]){var o=go[t][e];return r(os(o))}kg(e,t),r(x(x({},_g),{},{icon:b.showMissingIcons&&e?ct("missingIconAbstract")||{}:{}}))})}var Qu=function(){},ls=b.measurePerformance&&gi&&gi.mark&&gi.measure?gi:{mark:Qu,measure:Qu},vr='FA "6.1.1"',Sg=function(t){return ls.mark("".concat(vr," ").concat(t," begins")),function(){return Cd(t)}},Cd=function(t){ls.mark("".concat(vr," ").concat(t," ends")),ls.measure("".concat(vr," ").concat(t),"".concat(vr," ").concat(t," begins"),"".concat(vr," ").concat(t," ends"))},Tl={begin:Sg,end:Cd},ji=function(){};function Xu(e){var t=e.getAttribute?e.getAttribute(ln):null;return typeof t=="string"}function Eg(e){var t=e.getAttribute?e.getAttribute(yl):null,n=e.getAttribute?e.getAttribute(wl):null;return t&&n}function Ig(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Cg(){if(b.autoReplaceSvg===!0)return $i.replace;var e=$i[b.autoReplaceSvg];return e||$i.replace}function xg(e){return W.createElementNS("http://www.w3.org/2000/svg",e)}function Tg(e){return W.createElement(e)}function xd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?xg:Tg:n;if(typeof e=="string")return W.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(xd(o,{ceFn:r}))}),i}function Pg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $i={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(xd(i),n)}),n.getAttribute(ln)===null&&b.keepOriginalSource){var r=W.createComment(Pg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~kl(n).indexOf(b.replacementClass))return $i.replace(t);var i=new RegExp("".concat(b.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ii(s)}).join(`
`);n.setAttribute(ln,""),n.innerHTML=o}};function Ju(e){e()}function Td(e,t){var n=typeof t=="function"?t:ji;if(e.length===0)n();else{var r=Ju;b.mutateApproach===Nv&&(r=zt.requestAnimationFrame||Ju),r(function(){var i=Cg(),a=Tl.begin("mutate");e.map(i),a(),n()})}}var Pl=!1;function Pd(){Pl=!0}function us(){Pl=!1}var ia=null;function Zu(e){if(!!Hu&&!!b.observeMutations){var t=e.treeCallback,n=t===void 0?ji:t,r=e.nodeCallback,i=r===void 0?ji:r,a=e.pseudoElementsCallback,o=a===void 0?ji:a,s=e.observeMutationsRoot,l=s===void 0?W:s;ia=new Hu(function(u){if(!Pl){var f=Ft();tr(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xu(m.addedNodes[0])&&(b.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&b.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Xu(m.target)&&~Fv.indexOf(m.attributeName))if(m.attributeName==="class"&&Eg(m.target)){var p=$a(kl(m.target)),g=p.prefix,v=p.iconName;m.target.setAttribute(yl,g||f),v&&m.target.setAttribute(wl,v)}else Ig(m.target)&&i(m.target)})}}),mt&&ia.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bg(){!ia||ia.disconnect()}function Og(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ng(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$a(kl(e));return i.prefix||(i.prefix=Ft()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=lg(i.prefix,e.innerText)||Il(i.prefix,ns(e.innerText))),i}function Ag(e){var t=tr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||Rr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Rg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ec(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ng(e),r=n.iconName,i=n.prefix,a=n.rest,o=Ag(e),s=is("parseNodeAttributes",{},e),l=t.styleParser?Og(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Lg=Ue.styles;function bd(e){var t=b.autoReplaceSvg==="nest"?ec(e,{styleParser:!1}):ec(e);return~t.extra.classes.indexOf(fd)?ct("generateLayersText",e,t):ct("generateSvgReplacementMutation",e,t)}function tc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mt)return Promise.resolve();var n=W.documentElement.classList,r=function(m){return n.add("".concat(Wu,"-").concat(m))},i=function(m){return n.remove("".concat(Wu,"-").concat(m))},a=b.autoFetchSvg?Object.keys(_l):Object.keys(Lg),o=[".".concat(fd,":not([").concat(ln,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(ln,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Tl.begin("onTree"),u=s.reduce(function(f,m){try{var p=bd(m);p&&f.push(p)}catch(g){ud||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(p){Td(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),m(p)})})}function Dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bd(e).then(function(n){n&&Td([n],t)})}function Mg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:as(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:as(i||{})),e(r,x(x({},n),{},{mask:i}))}}var zg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Be:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,m=n.title,p=m===void 0?null:m,g=n.titleId,v=g===void 0?null:g,E=n.classes,P=E===void 0?[]:E,d=n.attributes,c=d===void 0?{}:d,h=n.styles,y=h===void 0?{}:h;if(!!t){var _=t.prefix,I=t.iconName,w=t.icon;return Ba(x({type:"icon"},t),function(){return un("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(p?c["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||Rr()):(c["aria-hidden"]="true",c.focusable="false")),xl({icons:{main:os(w),mask:l?os(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:I,transform:x(x({},Be),i),symbol:o,title:p,maskId:f,titleId:v,extra:{attributes:c,styles:y,classes:P}})})}},Fg={mixout:function(){return{icon:Mg(zg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tc,n.nodeCallback=Dg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?W:r,a=n.callback,o=a===void 0?function(){}:a;return tc(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,f=r.mask,m=r.maskId,p=r.extra;return new Promise(function(g,v){Promise.all([ss(i,s),f.iconName?ss(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var P=vl(E,2),d=P[0],c=P[1];g([n,xl({icons:{main:d,mask:c},prefix:s,iconName:i,transform:l,symbol:u,maskId:m,title:a,titleId:o,extra:p,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ua(s);l.length>0&&(i.style=l);var u;return Sl(o)&&(u=ct("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Ug={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ba({type:"layer"},function(){un("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.familyPrefix,"-layers")].concat(Fa(a)).join(" ")},children:o}]})}}}},jg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,f=r.styles,m=f===void 0?{}:f;return Ba({type:"counter",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),wg({content:n.toString(),title:a,extra:{attributes:u,styles:m,classes:["".concat(b.familyPrefix,"-layers-counter")].concat(Fa(s))}})})}}}},$g={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Be:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,f=r.attributes,m=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Ba({type:"text",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),Gu({content:n,transform:x(x({},Be),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(b.familyPrefix,"-layers-text")].concat(Fa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(od){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return b.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gu({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Bg=new RegExp('"',"ug"),nc=[1105920,1112319];function Hg(e){var t=e.replace(Bg,""),n=ng(t,0),r=n>=nc[0]&&n<=nc[1],i=t.length===2?t[0]===t[1]:!1;return{value:ns(i?t[0]:t),isSecondary:r||i}}function rc(e,t){var n="".concat(Ov).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=tr(e.children),o=a.filter(function(I){return I.getAttribute(ts)===t})[0],s=zt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Dv),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?na[l[2].toLowerCase()]:Mv[u],g=Hg(m),v=g.value,E=g.isSecondary,P=l[0].startsWith("FontAwesome"),d=Il(p,v),c=d;if(P){var h=ug(v);h.iconName&&h.prefix&&(d=h.iconName,p=h.prefix)}if(d&&!E&&(!o||o.getAttribute(yl)!==p||o.getAttribute(wl)!==c)){e.setAttribute(n,c),o&&e.removeChild(o);var y=Rg(),_=y.extra;_.attributes[ts]=t,ss(d,p).then(function(I){var w=xl(x(x({},y),{},{icons:{main:I,mask:Cl()},prefix:p,iconName:c,extra:_,watchable:!0})),S=W.createElement("svg");t==="::before"?e.insertBefore(S,e.firstChild):e.appendChild(S),S.outerHTML=w.map(function(N){return ii(N)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Wg(e){return Promise.all([rc(e,"::before"),rc(e,"::after")])}function Vg(e){return e.parentNode!==document.head&&!~Av.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ts)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ic(e){if(!!mt)return new Promise(function(t,n){var r=tr(e.querySelectorAll("*")).filter(Vg).map(Wg),i=Tl.begin("searchPseudoElements");Pd(),Promise.all(r).then(function(){i(),us(),t()}).catch(function(){i(),us(),n()})})}var qg={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ic,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?W:r;b.searchPseudoElements&&ic(i)}}},ac=!1,Kg={mixout:function(){return{dom:{unwatch:function(){Pd(),ac=!0}}}},hooks:function(){return{bootstrap:function(){Zu(is("mutationObserverCallbacks",{}))},noAuto:function(){bg()},watch:function(n){var r=n.observeMutationsRoot;ac?us():Zu(is("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},oc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Yg={mixout:function(){return{parse:{transform:function(n){return oc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=oc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:x({},g.outer),children:[{tag:"g",attributes:x({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),g.path)}]}]}}}},yo={x:0,y:0,width:"100%",height:"100%"};function sc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gg(e){return e.tag==="g"?e.children:[e]}var Qg={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$a(i.split(" ").map(function(o){return o.trim()})):Cl();return a.prefix||(a.prefix=Ft()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,f=a.icon,m=o.width,p=o.icon,g=Yv({transform:l,containerWidth:m,iconWidth:u}),v={tag:"rect",attributes:x(x({},yo),{},{fill:"white"})},E=f.children?{children:f.children.map(sc)}:{},P={tag:"g",attributes:x({},g.inner),children:[sc(x({tag:f.tag,attributes:x(x({},f.attributes),g.path)},E))]},d={tag:"g",attributes:x({},g.outer),children:[P]},c="mask-".concat(s||Rr()),h="clip-".concat(s||Rr()),y={tag:"mask",attributes:x(x({},yo),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,d]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Gg(p)},y]};return r.push(_,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},yo)}),{children:r,attributes:i}}}},Xg={provides:function(t){var n=!1;zt.matchMedia&&(n=zt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jg={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zg=[Xv,Fg,Ug,jg,$g,qg,Kg,Yg,Qg,Xg,Jg];dg(Zg,{mixoutsTo:xe});xe.noAuto;xe.config;var ey=xe.library;xe.dom;var cs=xe.parse;xe.findIconDefinition;xe.toHtml;var ty=xe.icon;xe.layer;xe.text;xe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ny={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},ry={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},iy=ry,fs={},Od={exports:{}},Te={},Nd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var M=T.length;T.push(L);e:for(;0<M;){var X=M-1>>>1,ne=T[X];if(0<i(ne,L))T[X]=L,T[M]=ne,M=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],M=T.pop();if(M!==L){T[0]=M;e:for(var X=0,ne=T.length,pi=ne>>>1;X<pi;){var qt=2*(X+1)-1,ho=T[qt],Kt=qt+1,mi=T[Kt];if(0>i(ho,M))Kt<ne&&0>i(mi,ho)?(T[X]=mi,T[Kt]=M,X=Kt):(T[X]=ho,T[qt]=M,X=qt);else if(Kt<ne&&0>i(mi,M))T[X]=mi,T[Kt]=M,X=Kt;else break e}}return L}function i(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],f=1,m=null,p=3,g=!1,v=!1,E=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function y(T){if(E=!1,h(T),!v)if(n(l)!==null)v=!0,co(_);else{var L=n(u);L!==null&&fo(y,L.startTime-T)}}function _(T,L){v=!1,E&&(E=!1,d(S),S=-1),g=!0;var M=p;try{for(h(L),m=n(l);m!==null&&(!(m.expirationTime>L)||T&&!K());){var X=m.callback;if(typeof X=="function"){m.callback=null,p=m.priorityLevel;var ne=X(m.expirationTime<=L);L=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(l)&&r(l),h(L)}else r(l);m=n(l)}if(m!==null)var pi=!0;else{var qt=n(u);qt!==null&&fo(y,qt.startTime-L),pi=!1}return pi}finally{m=null,p=M,g=!1}}var I=!1,w=null,S=-1,N=5,A=-1;function K(){return!(e.unstable_now()-A<N)}function be(){if(w!==null){var T=e.unstable_now();A=T;var L=!0;try{L=w(!0,T)}finally{L?Je():(I=!1,w=null)}}else I=!1}var Je;if(typeof c=="function")Je=function(){c(be)};else if(typeof MessageChannel!="undefined"){var Vt=new MessageChannel,bu=Vt.port2;Vt.port1.onmessage=be,Je=function(){bu.postMessage(null)}}else Je=function(){P(be,0)};function co(T){w=T,I||(I=!0,Je())}function fo(T,L){S=P(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,co(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var M=p;p=L;try{return T()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=p;p=T;try{return L()}finally{p=M}},e.unstable_scheduleCallback=function(T,L,M){var X=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?X+M:X):M=X,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=M+ne,T={id:f++,callback:L,priorityLevel:T,startTime:M,expirationTime:ne,sortIndex:-1},M>X?(T.sortIndex=M,t(u,T),n(l)===null&&T===n(u)&&(E?(d(S),S=-1):E=!0,fo(y,M-X))):(T.sortIndex=ne,t(l,T),v||g||(v=!0,co(_))),T},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(T){var L=p;return function(){var M=p;p=L;try{return T.apply(this,arguments)}finally{p=M}}}})(Ad);Nd.exports=Ad;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=D.exports,Ce=Nd.exports;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,Lr={};function vn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var ft=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ds=Object.prototype.hasOwnProperty,ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},uc={};function oy(e){return ds.call(uc,e)?!0:ds.call(lc,e)?!1:ay.test(e)?uc[e]=!0:(lc[e]=!0,!1)}function sy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ly(e,t,n,r){if(t===null||typeof t=="undefined"||sy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bl=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bl,Ol);ae[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bl,Ol);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bl,Ol);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nl(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ly(t,n,i,r)&&(n=null),r||i===null?oy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),ps=Symbol.for("react.suspense"),ms=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),zd=Symbol.for("react.offscreen"),cc=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,wo;function gr(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var _o=!1;function ko(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function uy(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case hs:return"Profiler";case Al:return"StrictMode";case ps:return"Suspense";case ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case Rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:vs(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return vs(e(t))}catch{}}return null}function cy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vs(t);case 8:return t===Al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fy(e){var t=Fd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=fy(e))}function Ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jd(e,t){t=t.checked,t!=null&&Nl(e,"checked",t,!1)}function ys(e,t){jd(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&ws(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ws(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(yr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function $d(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,Hd=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dy=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){dy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hy=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(hy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Dn=null,Mn=null;function mc(e){if(e=si(e)){if(typeof Cs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ka(t),Cs(e.stateNode,e.type,t))}}function qd(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function Kd(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,mc(e),t)for(e=0;e<t.length;e++)mc(t[e])}}function Yd(e,t){return e(t)}function Gd(){}var So=!1;function Qd(e,t,n){if(So)return e(t,n);So=!0;try{return Yd(e,t,n)}finally{So=!1,(Dn!==null||Mn!==null)&&(Gd(),Kd())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var xs=!1;if(ft)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{xs=!1}function py(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Cr=!1,oa=null,sa=!1,Ts=null,my={onError:function(e){Cr=!0,oa=e}};function vy(e,t,n,r,i,a,o,s,l){Cr=!1,oa=null,py.apply(my,arguments)}function gy(e,t,n,r,i,a,o,s,l){if(vy.apply(this,arguments),Cr){if(Cr){var u=oa;Cr=!1,oa=null}else throw Error(k(198));sa||(sa=!0,Ts=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vc(e){if(gn(e)!==e)throw Error(k(188))}function yy(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return vc(i),e;if(a===r)return vc(i),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Jd(e){return e=yy(e),e!==null?Zd(e):null}function Zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zd(e);if(t!==null)return t;e=e.sibling}return null}var eh=Ce.unstable_scheduleCallback,gc=Ce.unstable_cancelCallback,wy=Ce.unstable_shouldYield,_y=Ce.unstable_requestPaint,J=Ce.unstable_now,ky=Ce.unstable_getCurrentPriorityLevel,Ml=Ce.unstable_ImmediatePriority,th=Ce.unstable_UserBlockingPriority,la=Ce.unstable_NormalPriority,Sy=Ce.unstable_LowPriority,nh=Ce.unstable_IdlePriority,Ha=null,We=null;function Ey(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:xy,Iy=Math.log,Cy=Math.LN2;function xy(e){return e>>>=0,e===0?32:31-(Iy(e)/Cy|0)|0}var ki=64,Si=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=wr(s):(a&=o,a!==0&&(r=wr(a)))}else o=n&~i,o!==0?r=wr(o):a!==0&&(r=wr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),i=1<<n,r|=e[n],t&=~i;return r}function Ty(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Py(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-je(a),s=1<<o,l=i[o];l===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ty(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function by(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-je(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function rh(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ih,Fl,ah,oh,sh,bs=!1,Ei=[],Nt=null,At=null,Rt=null,zr=new Map,Fr=new Map,St=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function ur(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=si(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ny(e,t,n,r,i){switch(t){case"focusin":return Nt=ur(Nt,e,t,n,r,i),!0;case"dragenter":return At=ur(At,e,t,n,r,i),!0;case"mouseover":return Rt=ur(Rt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return zr.set(a,ur(zr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Fr.set(a,ur(Fr.get(a)||null,e,t,n,r,i)),!0}return!1}function lh(e){var t=Zt(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xd(n),t!==null){e.blockedOn=t,sh(e.priority,function(){ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Is=r,n.target.dispatchEvent(r),Is=null}else return t=si(n),t!==null&&Fl(t),e.blockedOn=n,!1;t.shift()}return!0}function wc(e,t,n){Bi(e)&&n.delete(t)}function Ay(){bs=!1,Nt!==null&&Bi(Nt)&&(Nt=null),At!==null&&Bi(At)&&(At=null),Rt!==null&&Bi(Rt)&&(Rt=null),zr.forEach(wc),Fr.forEach(wc)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Ay)))}function Ur(e){function t(i){return cr(i,e)}if(0<Ei.length){cr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&cr(Nt,e),At!==null&&cr(At,e),Rt!==null&&cr(Rt,e),zr.forEach(t),Fr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)lh(n),n.blockedOn===null&&St.shift()}var zn=vt.ReactCurrentBatchConfig;function Ry(e,t,n,r){var i=j,a=zn.transition;zn.transition=null;try{j=1,Ul(e,t,n,r)}finally{j=i,zn.transition=a}}function Ly(e,t,n,r){var i=j,a=zn.transition;zn.transition=null;try{j=4,Ul(e,t,n,r)}finally{j=i,zn.transition=a}}function Ul(e,t,n,r){var i=Os(e,t,n,r);if(i===null)Ro(e,t,r,ca,n),yc(e,r);else if(Ny(i,e,t,n,r))r.stopPropagation();else if(yc(e,r),t&4&&-1<Oy.indexOf(e)){for(;i!==null;){var a=si(i);if(a!==null&&ih(a),a=Os(e,t,n,r),a===null&&Ro(e,t,r,ca,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ro(e,t,r,null,n)}var ca=null;function Os(e,t,n,r){if(ca=null,e=Dl(r),e=Zt(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ca=e,null}function uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ky()){case Ml:return 1;case th:return 4;case la:case Sy:return 16;case nh:return 536870912;default:return 16}default:return 16}}var Tt=null,jl=null,Hi=null;function ch(){if(Hi)return Hi;var e,t=jl,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Hi=i.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function _c(){return!1}function Pe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ii:_c,this.isPropagationStopped=_c,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Pe(nr),oi=G({},nr,{view:0,detail:0}),Dy=Pe(oi),Io,Co,fr,Wa=G({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Io=e.screenX-fr.screenX,Co=e.screenY-fr.screenY):Co=Io=0,fr=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),kc=Pe(Wa),My=G({},Wa,{dataTransfer:0}),zy=Pe(My),Fy=G({},oi,{relatedTarget:0}),xo=Pe(Fy),Uy=G({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=Pe(Uy),$y=G({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),By=Pe($y),Hy=G({},nr,{data:0}),Sc=Pe(Hy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qy[e])?!!t[e]:!1}function Bl(){return Ky}var Yy=G({},oi,{key:function(e){if(e.key){var t=Wy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=Pe(Yy),Qy=G({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Pe(Qy),Xy=G({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Jy=Pe(Xy),Zy=G({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=Pe(Zy),t0=G({},Wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Pe(t0),r0=[9,13,27,32],Hl=ft&&"CompositionEvent"in window,xr=null;ft&&"documentMode"in document&&(xr=document.documentMode);var i0=ft&&"TextEvent"in window&&!xr,fh=ft&&(!Hl||xr&&8<xr&&11>=xr),Ic=String.fromCharCode(32),Cc=!1;function dh(e,t){switch(e){case"keyup":return r0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function a0(e,t){switch(e){case"compositionend":return hh(t);case"keypress":return t.which!==32?null:(Cc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Cc?null:e;default:return null}}function o0(e,t){if(En)return e==="compositionend"||!Hl&&dh(e,t)?(e=ch(),Hi=jl=Tt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fh&&t.locale!=="ko"?null:t.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s0[e.type]:t==="textarea"}function ph(e,t,n,r){qd(r),t=fa(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,jr=null;function l0(e){Ch(e,0)}function Va(e){var t=xn(e);if(Ud(t))return e}function u0(e,t){if(e==="change")return t}var mh=!1;if(ft){var To;if(ft){var Po="oninput"in document;if(!Po){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Po=typeof Tc.oninput=="function"}To=Po}else To=!1;mh=To&&(!document.documentMode||9<document.documentMode)}function Pc(){Tr&&(Tr.detachEvent("onpropertychange",vh),jr=Tr=null)}function vh(e){if(e.propertyName==="value"&&Va(jr)){var t=[];ph(t,jr,e,Dl(e)),Qd(l0,t)}}function c0(e,t,n){e==="focusin"?(Pc(),Tr=t,jr=n,Tr.attachEvent("onpropertychange",vh)):e==="focusout"&&Pc()}function f0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Va(jr)}function d0(e,t){if(e==="click")return Va(t)}function h0(e,t){if(e==="input"||e==="change")return Va(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:p0;function $r(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ds.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var n=bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function gh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yh(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m0(e){var t=yh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gh(n.ownerDocument.documentElement,n)){if(r!==null&&Wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Oc(n,a);var o=Oc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v0=ft&&"documentMode"in document&&11>=document.documentMode,In=null,Ns=null,Pr=null,As=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||In==null||In!==aa(r)||(r=In,"selectionStart"in r&&Wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&$r(Pr,r)||(Pr=r,r=fa(Ns,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},bo={},wh={};ft&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function qa(e){if(bo[e])return bo[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wh)return bo[e]=t[n];return e}var _h=qa("animationend"),kh=qa("animationiteration"),Sh=qa("animationstart"),Eh=qa("transitionend"),Ih=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){Ih.set(e,t),vn(t,[e])}for(var Oo=0;Oo<Ac.length;Oo++){var No=Ac[Oo],g0=No.toLowerCase(),y0=No[0].toUpperCase()+No.slice(1);Bt(g0,"on"+y0)}Bt(_h,"onAnimationEnd");Bt(kh,"onAnimationIteration");Bt(Sh,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Eh,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gy(r,t,void 0,e),e.currentTarget=null}function Ch(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Rc(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Rc(i,s,u),a=l}}}if(sa)throw e=Ts,sa=!1,Ts=null,e}function H(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var r=e+"__bubble";n.has(r)||(xh(t,e,2,!1),n.add(r))}function Ao(e,t,n){var r=0;t&&(r|=4),xh(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[xi]){e[xi]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(w0.has(n)||Ao(n,!1,e),Ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Ao("selectionchange",!1,t))}}function xh(e,t,n,r){switch(uh(t)){case 1:var i=Ry;break;case 4:i=Ly;break;default:i=Ul}n=i.bind(null,t,n,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ro(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Zt(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Qd(function(){var u=a,f=Dl(n),m=[];e:{var p=Ih.get(e);if(p!==void 0){var g=$l,v=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":g=Gy;break;case"focusin":v="focus",g=xo;break;case"focusout":v="blur",g=xo;break;case"beforeblur":case"afterblur":g=xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jy;break;case _h:case kh:case Sh:g=jy;break;case Eh:g=e0;break;case"scroll":g=Dy;break;case"wheel":g=n0;break;case"copy":case"cut":case"paste":g=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ec}var E=(t&4)!==0,P=!E&&e==="scroll",d=E?p!==null?p+"Capture":null:p;E=[];for(var c=u,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,d!==null&&(y=Mr(c,d),y!=null&&E.push(Hr(c,y,h)))),P)break;c=c.return}0<E.length&&(p=new g(p,v,null,n,f),m.push({event:p,listeners:E}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Is&&(v=n.relatedTarget||n.fromElement)&&(Zt(v)||v[dt]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Zt(v):null,v!==null&&(P=gn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(E=kc,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ec,y="onPointerLeave",d="onPointerEnter",c="pointer"),P=g==null?p:xn(g),h=v==null?p:xn(v),p=new E(y,c+"leave",g,n,f),p.target=P,p.relatedTarget=h,y=null,Zt(f)===u&&(E=new E(d,c+"enter",v,n,f),E.target=h,E.relatedTarget=P,y=E),P=y,g&&v)t:{for(E=g,d=v,c=0,h=E;h;h=yn(h))c++;for(h=0,y=d;y;y=yn(y))h++;for(;0<c-h;)E=yn(E),c--;for(;0<h-c;)d=yn(d),h--;for(;c--;){if(E===d||d!==null&&E===d.alternate)break t;E=yn(E),d=yn(d)}E=null}else E=null;g!==null&&Lc(m,p,g,E,!1),v!==null&&P!==null&&Lc(m,P,v,E,!0)}}e:{if(p=u?xn(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var _=u0;else if(xc(p))if(mh)_=h0;else{_=f0;var I=c0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=d0);if(_&&(_=_(e,u))){ph(m,_,n,f);break e}I&&I(e,p,u),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&ws(p,"number",p.value)}switch(I=u?xn(u):window,e){case"focusin":(xc(I)||I.contentEditable==="true")&&(In=I,Ns=u,Pr=null);break;case"focusout":Pr=Ns=In=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,Nc(m,n,f);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Nc(m,n,f)}var w;if(Hl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else En?dh(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(fh&&n.locale!=="ko"&&(En||S!=="onCompositionStart"?S==="onCompositionEnd"&&En&&(w=ch()):(Tt=f,jl="value"in Tt?Tt.value:Tt.textContent,En=!0)),I=fa(u,S),0<I.length&&(S=new Sc(S,e,null,n,f),m.push({event:S,listeners:I}),w?S.data=w:(w=hh(n),w!==null&&(S.data=w)))),(w=i0?a0(e,n):o0(e,n))&&(u=fa(u,"onBeforeInput"),0<u.length&&(f=new Sc("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=w))}Ch(m,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Mr(e,n),a!=null&&r.unshift(Hr(e,a,i)),a=Mr(e,t),a!=null&&r.push(Hr(e,a,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Mr(n,a),l!=null&&o.unshift(Hr(n,l,s))):i||(l=Mr(n,a),l!=null&&o.push(Hr(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(_0,`
`).replace(k0,"")}function Ti(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(k(425))}function da(){}var Rs=null;function Ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,S0=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc!="undefined"?function(e){return Mc.resolve(null).then(e).catch(I0)}:Ds;function I0(e){setTimeout(function(){throw e})}function Lo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),$e="__reactFiber$"+rr,Wr="__reactProps$"+rr,dt="__reactContainer$"+rr,Ms="__reactEvents$"+rr,C0="__reactListeners$"+rr,x0="__reactHandles$"+rr;function Zt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zc(e);e!==null;){if(n=e[$e])return n;e=zc(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[$e]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ka(e){return e[Wr]||null}var zs=[],Tn=-1;function Ht(e){return{current:e}}function V(e){0>Tn||(e.current=zs[Tn],zs[Tn]=null,Tn--)}function B(e,t){Tn++,zs[Tn]=e.current,e.current=t}var jt={},ue=Ht(jt),ye=Ht(!1),cn=jt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function ha(){V(ye),V(ue)}function Fc(e,t,n){if(ue.current!==jt)throw Error(k(168));B(ue,t),B(ye,n)}function Th(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,cy(e)||"Unknown",i));return G({},n,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,cn=ue.current,B(ue,e),B(ye,ye.current),!0}function Uc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Th(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,V(ye),V(ue),B(ue,e)):V(ye),B(ye,n)}var et=null,Ya=!1,Do=!1;function Ph(e){et===null?et=[e]:et.push(e)}function T0(e){Ya=!0,Ph(e)}function Wt(){if(!Do&&et!==null){Do=!0;var e=0,t=j;try{var n=et;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Ya=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),eh(Ml,Wt),i}finally{j=t,Do=!1}}return null}var P0=vt.ReactCurrentBatchConfig;function ze(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ma=Ht(null),va=null,Pn=null,Vl=null;function ql(){Vl=Pn=va=null}function Kl(e){var t=ma.current;V(ma),e._currentValue=t}function Fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){va=e,Vl=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ee=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(va===null)throw Error(k(308));Pn=e,va.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var He=null,kt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t){var n=e.updateQueue;n!==null&&(n=n.shared,ee!==null&&(e.mode&1)!==0&&(U&2)===0?(e=n.interleaved,e===null?(t.next=t,He===null?He=[n]:He.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function Vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zl(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ga(e,t,n,r){var i=e.updateQueue;kt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(a!==null){var m=i.baseState;o=0,f=u=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,E=s;switch(p=t,g=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){m=v.call(g,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,p=typeof v=="function"?v.call(g,m,p):v,p==null)break e;m=G({},m,p);break e;case 2:kt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=g,l=m):f=f.next=g,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Gn|=o,e.lanes=o,e.memoizedState=m}}function $c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Oh=new Rd.Component().refs;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ga={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=Mt(e),a=st(r,i);a.payload=t,n!=null&&(a.callback=n),Lt(e,a),t=De(e,i,r),t!==null&&Vi(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=Mt(e),a=st(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Lt(e,a),t=De(e,i,r),t!==null&&Vi(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Mt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),Lt(e,i),t=De(e,r,n),t!==null&&Vi(t,e,r)}};function Bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,a):!0}function Nh(e,t,n){var r=!1,i=jt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(i=we(t)?cn:ue.current,r=t.contextTypes,a=(r=r!=null)?Wn(e,i):jt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ga.enqueueReplaceState(t,t.state,null)}function js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Oh,Yl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Me(a):(a=we(t)?cn:ue.current,i.context=Wn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Us(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ga.enqueueReplaceState(i,i.state,null),ga(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}var bn=[],On=0,ya=null,wa=0,Oe=[],Ne=0,fn=null,rt=1,it="";function Yt(e,t){bn[On++]=wa,bn[On++]=ya,ya=e,wa=t}function Ah(e,t,n){Oe[Ne++]=rt,Oe[Ne++]=it,Oe[Ne++]=fn,fn=e;var r=rt;e=it;var i=32-je(r)-1;r&=~(1<<i),n+=1;var a=32-je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rt=1<<32-je(t)+i|n<<i|r,it=a+e}else rt=1<<a|n<<i|r,it=e}function Gl(e){e.return!==null&&(Yt(e,1),Ah(e,1,0))}function Ql(e){for(;e===ya;)ya=bn[--On],bn[On]=null,wa=bn[--On],bn[On]=null;for(;e===fn;)fn=Oe[--Ne],Oe[Ne]=null,it=Oe[--Ne],Oe[Ne]=null,rt=Oe[--Ne],Oe[Ne]=null}var Ie=null,ve=null,q=!1,Fe=null;function Rh(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ve=nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,ve=null,!0):!1;default:return!1}}function $s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(q){var t=ve;if(t){var n=t;if(!Wc(e,t)){if($s(e))throw Error(k(418));t=nt(n.nextSibling);var r=Ie;t&&Wc(e,t)?Rh(r,n):(e.flags=e.flags&-4097|2,q=!1,Ie=e)}}else{if($s(e))throw Error(k(418));e.flags=e.flags&-4097|2,q=!1,Ie=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function dr(e){if(e!==Ie)return!1;if(!q)return Vc(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ls(e.type,e.memoizedProps)),t&&(t=ve)){if($s(e)){for(e=ve;e;)e=nt(e.nextSibling);throw Error(k(418))}for(;t;)Rh(e,t),t=nt(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=Ie?nt(e.stateNode.nextSibling):null;return!0}function Vn(){ve=Ie=null,q=!1}function Xl(e){Fe===null?Fe=[e]:Fe.push(e)}function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Oh&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qc(e){var t=e._init;return t(e._payload)}function Lh(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=$t(d,c),d.index=0,d.sibling=null,d}function a(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,h,y){return c===null||c.tag!==6?(c=$o(h,d.mode,y),c.return=d,c):(c=i(c,h),c.return=d,c)}function l(d,c,h,y){var _=h.type;return _===Sn?f(d,c,h.props.children,y,h.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_t&&qc(_)===c.type)?(y=i(c,h.props),y.ref=hr(d,c,h),y.return=d,y):(y=Qi(h.type,h.key,h.props,null,d.mode,y),y.ref=hr(d,c,h),y.return=d,y)}function u(d,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Bo(h,d.mode,y),c.return=d,c):(c=i(c,h.children||[]),c.return=d,c)}function f(d,c,h,y,_){return c===null||c.tag!==7?(c=on(h,d.mode,y,_),c.return=d,c):(c=i(c,h),c.return=d,c)}function m(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$o(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yi:return h=Qi(c.type,c.key,c.props,null,d.mode,h),h.ref=hr(d,null,c),h.return=d,h;case kn:return c=Bo(c,d.mode,h),c.return=d,c;case _t:var y=c._init;return m(d,y(c._payload),h)}if(yr(c)||sr(c))return c=on(c,d.mode,h,null),c.return=d,c;Pi(d,c)}return null}function p(d,c,h,y){var _=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:s(d,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:return h.key===_?l(d,c,h,y):null;case kn:return h.key===_?u(d,c,h,y):null;case _t:return _=h._init,p(d,c,_(h._payload),y)}if(yr(h)||sr(h))return _!==null?null:f(d,c,h,y,null);Pi(d,h)}return null}function g(d,c,h,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(h)||null,s(c,d,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yi:return d=d.get(y.key===null?h:y.key)||null,l(c,d,y,_);case kn:return d=d.get(y.key===null?h:y.key)||null,u(c,d,y,_);case _t:var I=y._init;return g(d,c,h,I(y._payload),_)}if(yr(y)||sr(y))return d=d.get(h)||null,f(c,d,y,_,null);Pi(c,y)}return null}function v(d,c,h,y){for(var _=null,I=null,w=c,S=c=0,N=null;w!==null&&S<h.length;S++){w.index>S?(N=w,w=null):N=w.sibling;var A=p(d,w,h[S],y);if(A===null){w===null&&(w=N);break}e&&w&&A.alternate===null&&t(d,w),c=a(A,c,S),I===null?_=A:I.sibling=A,I=A,w=N}if(S===h.length)return n(d,w),q&&Yt(d,S),_;if(w===null){for(;S<h.length;S++)w=m(d,h[S],y),w!==null&&(c=a(w,c,S),I===null?_=w:I.sibling=w,I=w);return q&&Yt(d,S),_}for(w=r(d,w);S<h.length;S++)N=g(w,d,S,h[S],y),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?S:N.key),c=a(N,c,S),I===null?_=N:I.sibling=N,I=N);return e&&w.forEach(function(K){return t(d,K)}),q&&Yt(d,S),_}function E(d,c,h,y){var _=sr(h);if(typeof _!="function")throw Error(k(150));if(h=_.call(h),h==null)throw Error(k(151));for(var I=_=null,w=c,S=c=0,N=null,A=h.next();w!==null&&!A.done;S++,A=h.next()){w.index>S?(N=w,w=null):N=w.sibling;var K=p(d,w,A.value,y);if(K===null){w===null&&(w=N);break}e&&w&&K.alternate===null&&t(d,w),c=a(K,c,S),I===null?_=K:I.sibling=K,I=K,w=N}if(A.done)return n(d,w),q&&Yt(d,S),_;if(w===null){for(;!A.done;S++,A=h.next())A=m(d,A.value,y),A!==null&&(c=a(A,c,S),I===null?_=A:I.sibling=A,I=A);return q&&Yt(d,S),_}for(w=r(d,w);!A.done;S++,A=h.next())A=g(w,d,S,A.value,y),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?S:A.key),c=a(A,c,S),I===null?_=A:I.sibling=A,I=A);return e&&w.forEach(function(be){return t(d,be)}),q&&Yt(d,S),_}function P(d,c,h,y){if(typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:e:{for(var _=h.key,I=c;I!==null;){if(I.key===_){if(_=h.type,_===Sn){if(I.tag===7){n(d,I.sibling),c=i(I,h.props.children),c.return=d,d=c;break e}}else if(I.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_t&&qc(_)===I.type){n(d,I.sibling),c=i(I,h.props),c.ref=hr(d,I,h),c.return=d,d=c;break e}n(d,I);break}else t(d,I);I=I.sibling}h.type===Sn?(c=on(h.props.children,d.mode,y,h.key),c.return=d,d=c):(y=Qi(h.type,h.key,h.props,null,d.mode,y),y.ref=hr(d,c,h),y.return=d,d=y)}return o(d);case kn:e:{for(I=h.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=i(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Bo(h,d.mode,y),c.return=d,d=c}return o(d);case _t:return I=h._init,P(d,c,I(h._payload),y)}if(yr(h))return v(d,c,h,y);if(sr(h))return E(d,c,h,y);Pi(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,h),c.return=d,d=c):(n(d,c),c=$o(h,d.mode,y),c.return=d,d=c),o(d)):n(d,c)}return P}var qn=Lh(!0),Dh=Lh(!1),li={},Ve=Ht(li),Vr=Ht(li),qr=Ht(li);function en(e){if(e===li)throw Error(k(174));return e}function Jl(e,t){switch(B(qr,t),B(Vr,e),B(Ve,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}V(Ve),B(Ve,t)}function Kn(){V(Ve),V(Vr),V(qr)}function Mh(e){en(qr.current);var t=en(Ve.current),n=ks(t,e.type);t!==n&&(B(Vr,e),B(Ve,n))}function Zl(e){Vr.current===e&&(V(Ve),V(Vr))}var Y=Ht(0);function _a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function eu(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var qi=vt.ReactCurrentDispatcher,Re=vt.ReactCurrentBatchConfig,Yn=0,Q=null,le=null,re=null,ka=!1,br=!1,Kr=0,b0=0;function oe(){throw Error(k(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,i,a){if(Yn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?R0:L0,e=n(r,i),br){a=0;do{if(br=!1,Kr=0,25<=a)throw Error(k(301));a+=1,re=le=null,t.updateQueue=null,qi.current=D0,e=n(r,i)}while(br)}if(qi.current=Sa,t=le!==null&&le.next!==null,Yn=0,re=le=Q=null,ka=!1,t)throw Error(k(300));return e}function ru(){var e=Kr!==0;return Kr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Xe(){if(le===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function rn(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var f=u.lane;if((Yn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=m,o=r):l=l.next=m,Q.lanes|=f,Gn|=f}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ge(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,Gn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ge(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zh(){}function Fh(e,t){var n=Q,r=Xe(),i=t(),a=!Ge(r.memoizedState,i);if(a&&(r.memoizedState=i,Ee=!0),r=r.queue,Gr($h.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Yr(9,jh.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(k(349));(Yn&30)!==0||Uh(n,t,i)}return i}function Uh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,r){t.value=n,t.getSnapshot=r,Bh(t)&&De(e,1,-1)}function $h(e,t,n){return n(function(){Bh(t)&&De(e,1,-1)})}function Bh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function zo(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:e},t.queue=e,e=e.dispatch=A0.bind(null,Q,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hh(){return Xe().memoizedState}function Ki(e,t,n,r){var i=Ze();Q.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function Qa(e,t,n,r){var i=Xe();r=r===void 0?null:r;var a=void 0;if(le!==null){var o=le.memoizedState;if(a=o.destroy,r!==null&&tu(r,o.deps)){i.memoizedState=Yr(t,n,a,r);return}}Q.flags|=e,i.memoizedState=Yr(1|t,n,a,r)}function Fo(e,t){return Ki(8390656,8,e,t)}function Gr(e,t){return Qa(2048,8,e,t)}function Wh(e,t){return Qa(4,2,e,t)}function Vh(e,t){return Qa(4,4,e,t)}function qh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kh(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4,4,qh.bind(null,t,e),n)}function iu(){}function Yh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function O0(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Re.transition;Re.transition={};try{e(!1),t()}finally{j=n,Re.transition=r}}function Qh(){return Xe().memoizedState}function N0(e,t,n){var r=Mt(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xh(e)?Jh(t,n):(Zh(e,t,n),n=de(),e=De(e,r,n),e!==null&&ep(e,t,r))}function A0(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Jh(t,i);else{Zh(e,t,i);var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,o))return}catch{}finally{}n=de(),e=De(e,r,n),e!==null&&ep(e,t,r)}}function Xh(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Jh(e,t){br=ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){ee!==null&&(e.mode&1)!==0&&(U&2)===0?(e=t.interleaved,e===null?(n.next=n,He===null?He=[t]:He.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function ep(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zl(e,n)}}var Sa={readContext:Me,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},R0={readContext:Me,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Fo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,qh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N0.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:zo,useDebugValue:iu,useDeferredValue:function(e){var t=zo(e),n=t[0],r=t[1];return Fo(function(){var i=Re.transition;Re.transition={};try{r(e)}finally{Re.transition=i}},[e]),n},useTransition:function(){var e=zo(!1),t=e[0];return e=O0.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ze();if(q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));(Yn&30)!==0||Uh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Fo($h.bind(null,r,a,e),[e]),r.flags|=2048,Yr(9,jh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ze(),t=ee.identifierPrefix;if(q){var n=it,r=rt;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=b0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L0={readContext:Me,useCallback:Yh,useContext:Me,useEffect:Gr,useImperativeHandle:Kh,useInsertionEffect:Wh,useLayoutEffect:Vh,useMemo:Gh,useReducer:bi,useRef:Hh,useState:function(){return bi(rn)},useDebugValue:iu,useDeferredValue:function(e){var t=bi(rn),n=t[0],r=t[1];return Gr(function(){var i=Re.transition;Re.transition={};try{r(e)}finally{Re.transition=i}},[e]),n},useTransition:function(){var e=bi(rn)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1},D0={readContext:Me,useCallback:Yh,useContext:Me,useEffect:Gr,useImperativeHandle:Kh,useInsertionEffect:Wh,useLayoutEffect:Vh,useMemo:Gh,useReducer:Oi,useRef:Hh,useState:function(){return Oi(rn)},useDebugValue:iu,useDeferredValue:function(e){var t=Oi(rn),n=t[0],r=t[1];return Gr(function(){var i=Re.transition;Re.transition={};try{r(e)}finally{Re.transition=i}},[e]),n},useTransition:function(){var e=Oi(rn)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1};function au(e,t){try{var n="",r=t;do n+=uy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function tp(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ca||(Ca=!0,Js=r),Hs(e,t)},n}function np(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Kc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q0.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Lt(n,t))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var rp,Ws,ip,ap;rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};ip=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(Ve.current);var a=null;switch(n){case"input":i=gs(e,i),r=gs(e,r),a=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),a=[];break;case"textarea":i=_s(e,i),r=_s(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=da)}Ss(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z0(e,t,n){var r=t.pendingProps;switch(Ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return we(t.type)&&ha(),se(t),null;case 3:return r=t.stateNode,Kn(),V(ye),V(ue),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fe!==null&&(tl(Fe),Fe=null))),Ws(e,t),se(t),null;case 5:Zl(t);var i=en(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)ip(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=en(Ve.current),dr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[$e]=t,r[Wr]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<_r.length;i++)H(_r[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":fc(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":hc(r,a),H("invalid",r)}Ss(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(Ti(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(Ti(r.textContent,s,e),i=["children",""+s]):Lr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":wi(r),dc(r,a,!0);break;case"textarea":wi(r),pc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=da)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[Wr]=r,rp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Es(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<_r.length;i++)H(_r[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":fc(e,r),i=gs(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":hc(e,r),i=_s(e,r),H("invalid",e);break;default:i=r}Ss(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Vd(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dr(e,l):typeof l=="number"&&Dr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Lr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&Nl(e,a,l,o))}switch(n){case"input":wi(e),dc(e,r,!1);break;case"textarea":wi(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ln(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=en(qr.current),en(Ve.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(a=r.nodeValue!==n)&&(e=Ie,e!==null))switch(o=(e.mode&1)!==0,e.tag){case 3:Ti(r.nodeValue,n,o);break;case 5:e.memoizedProps[void 0]!==!0&&Ti(r.nodeValue,n,o)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return se(t),null;case 13:if(V(Y),r=t.memoizedState,q&&ve!==null&&(t.mode&1)!==0&&(t.flags&128)===0){for(r=ve;r;)r=nt(r.nextSibling);return Vn(),t.flags|=98560,t}if(r!==null&&r.dehydrated!==null){if(r=dr(t),e===null){if(!r)throw Error(k(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(k(317));r[$e]=t}else Vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;return se(t),null}return Fe!==null&&(tl(Fe),Fe=null),(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?dr(t):n=e.memoizedState!==null,r&&!n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?te===0&&(te=3):fu())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Kn(),Ws(e,t),e===null&&Br(t.stateNode.containerInfo),se(t),null;case 10:return Kl(t.type._context),se(t),null;case 17:return we(t.type)&&ha(),se(t),null;case 19:if(V(Y),a=t.memoizedState,a===null)return se(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)pr(a,!1);else{if(te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=_a(e),o!==null){for(t.flags|=128,pr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>Qn&&(t.flags|=128,r=!0,pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=_a(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!q)return se(t),null}else 2*J()-a.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,pr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Se&1073741824)!==0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}var F0=vt.ReactCurrentOwner,Ee=!1;function fe(e,t,n,r){t.child=e===null?Dh(t,null,n,r):qn(t,e.child,n,r)}function Qc(e,t,n,r,i){n=n.render;var a=t.ref;return Fn(t,i),r=nu(e,t,n,r,a,i),n=ru(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(q&&n&&Gl(t),t.flags|=1,fe(e,t,r,i),t.child)}function Xc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!du(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,op(e,t,a,r,i)):(e=Qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(o,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=$t(a,r),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,r,i){if(e!==null&&$r(e.memoizedProps,r)&&e.ref===t.ref)if(Ee=!1,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ee=!0);else return t.lanes=e.lanes,ht(e,t,i);return Vs(e,t,n,r,i)}function sp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null},B(Nn,Se),Se|=n;else if((n&1073741824)!==0)t.memoizedState={baseLanes:0,cachePool:null},r=a!==null?a.baseLanes:n,B(Nn,Se),Se|=r;else return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null},t.updateQueue=null,B(Nn,Se),Se|=e,null;else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Nn,Se),Se|=r;return fe(e,t,i,n),t.child}function lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var a=we(n)?cn:ue.current;return a=Wn(t,a),Fn(t,i),n=nu(e,t,n,r,a,i),r=ru(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(q&&r&&Gl(t),t.flags|=1,fe(e,t,n,i),t.child)}function Jc(e,t,n,r,i){if(we(n)){var a=!0;pa(t)}else a=!1;if(Fn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Nh(t,n,r),js(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=we(n)?cn:ue.current,u=Wn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Hc(t,o,r,u),kt=!1;var p=t.memoizedState;o.state=p,ga(t,r,o,i),l=t.memoizedState,s!==r||p!==l||ye.current||kt?(typeof f=="function"&&(Us(t,n,f,r),l=t.memoizedState),(s=kt||Bc(t,n,s,r,p,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ze(t.type,s),o.props=u,m=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=we(n)?cn:ue.current,l=Wn(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||p!==l)&&Hc(t,o,r,l),kt=!1,p=t.memoizedState,o.state=p,ga(t,r,o,i);var v=t.memoizedState;s!==m||p!==v||ye.current||kt?(typeof g=="function"&&(Us(t,n,g,r),v=t.memoizedState),(u=kt||Bc(t,n,u,r,p,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,a,i)}function qs(e,t,n,r,i,a){lp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Uc(t,n,!1),ht(e,t,a);r=t.stateNode,F0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=qn(t,e.child,null,a),t.child=qn(t,null,s,a)):fe(e,t,s,a),t.memoizedState=r.state,i&&Uc(t,n,!0),t.child}function up(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),Jl(e,t.containerInfo)}function Zc(e,t,n,r,i){return Vn(),Xl(i),t.flags|=256,fe(e,t,n,r),t.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null}}function cp(e,t,n){var r=t.pendingProps,i=Y.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Pa(i,r,0,null),e=on(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ai(n),t.memoizedState=Ni,e):Ks(t,i));if(i=e.memoizedState,i!==null){if(s=i.dehydrated,s!==null){if(o)return t.flags&256?(t.flags&=-257,Ri(e,t,n,Error(k(422)))):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Pa({mode:"visible",children:r.children},i,0,null),a=on(a,i,n,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&qn(t,e.child,null,n),t.child.memoizedState=Ai(n),t.memoizedState=Ni,a);if((t.mode&1)===0)t=Ri(e,t,n,null);else if(s.data==="$!")t=Ri(e,t,n,Error(k(419)));else if(r=(n&e.childLanes)!==0,Ee||r){if(r=ee,r!==null){switch(n&-n){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}r=(a&(r.suspendedLanes|n))!==0?0:a,r!==0&&r!==i.retryLane&&(i.retryLane=r,De(e,r,-1))}fu(),t=Ri(e,t,n,Error(k(421)))}else s.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),s._reactRetry=t,t=null):(n=i.treeContext,ve=nt(s.nextSibling),Ie=t,q=!0,Fe=null,n!==null&&(Oe[Ne++]=rt,Oe[Ne++]=it,Oe[Ne++]=fn,rt=n.id,it=n.overflow,fn=t),t=Ks(t,t.pendingProps.children),t.flags|=4096);return t}return a?(r=tf(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?Ai(n):{baseLanes:i.baseLanes|n,cachePool:null},a.childLanes=e.childLanes&~n,t.memoizedState=Ni,r):(n=ef(e,t,r.children,n),t.memoizedState=null,n)}return a?(r=tf(e,t,r.children,r.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=i===null?Ai(n):{baseLanes:i.baseLanes|n,cachePool:null},a.childLanes=e.childLanes&~n,t.memoizedState=Ni,r):(n=ef(e,t,r.children,n),t.memoizedState=null,n)}function Ks(e,t){return t=Pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ef(e,t,n,r){var i=e.child;return e=i.sibling,n=$t(i,{mode:"visible",children:n}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function tf(e,t,n,r,i){var a=t.mode;e=e.child;var o=e.sibling,s={mode:"hidden",children:n};return(a&1)===0&&t.child!==e?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=$t(e,s),n.subtreeFlags=e.subtreeFlags&14680064),o!==null?r=$t(o,r):(r=on(r,a,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Ri(e,t,n,r){return r!==null&&Xl(r),qn(t,e.child,null,n),e=Ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fs(e.return,t,n)}function Uo(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(fe(e,t,r.children,n),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,n,t);else if(e.tag===19)nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uo(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uo(t,!0,n,null,a);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function U0(e,t,n){switch(t.tag){case 3:up(t),Vn();break;case 5:Mh(t);break;case 1:we(t.type)&&pa(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cp(e,t,n):(B(Y,Y.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,sp(e,t,n)}return ht(e,t,n)}function j0(e,t){switch(Ql(t),t.tag){case 1:return we(t.type)&&ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),V(ye),V(ue),eu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return Kn(),null;case 10:return Kl(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Li=!1,tn=!1,$0=typeof WeakSet=="function"?WeakSet:Set,C=null;function Ea(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Ys(e,t,n){try{n()}catch(r){ge(e,t,r)}}var rf=!1;function B0(e,t){if(e=yh(),Wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,f=0,m=e,p=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(s=o+i),m!==a||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++f===r&&(l=o),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rs={focusedElem:e,selectionRange:n},C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,P=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?E:ze(t.type,E),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;if(h.nodeType===1)h.textContent="";else if(h.nodeType===9){var y=h.body;y!=null&&(y.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){ge(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=rf,rf=!1,v}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ys(t,n,a)}i=i.next}while(i!==r)}}function Xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function af(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ha,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ys(t,n,a),r=r.next}while(r!==e)}break;case 1:if(Ea(t,n),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){ge(t,n,o)}break;case 5:Ea(t,n);break;case 4:pp(e,t,n)}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Wr],delete t[Ms],delete t[C0],delete t[x0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hp(e){return e.tag===5||e.tag===3||e.tag===4}function of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sf(e){e:{for(var t=e.return;t!==null;){if(hp(t))break e;t=t.return}throw Error(k(160))}var n=t;switch(n.tag){case 5:t=n.stateNode,n.flags&32&&(Dr(t,""),n.flags&=-33),n=of(e),Xs(e,n,t);break;case 3:case 4:t=n.stateNode.containerInfo,n=of(e),Qs(e,n,t);break;default:throw Error(k(161))}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=da));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xs(e,t,n),e=e.sibling;e!==null;)Xs(e,t,n),e=e.sibling}function pp(e,t,n){for(var r=t,i=!1,a,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(k(160));switch(a=i.stateNode,i.tag){case 5:o=!1;break e;case 3:a=a.containerInfo,o=!0;break e;case 4:a=a.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var s=e,l=r,u=n,f=l;;)if(af(s,f,u),f.child!==null&&f.tag!==4)f.child.return=f,f=f.child;else{if(f===l)break e;for(;f.sibling===null;){if(f.return===null||f.return===l)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}o?(s=a,l=r.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):a.removeChild(r.stateNode)}else if(r.tag===18)o?(s=a,l=r.stateNode,s.nodeType===8?Lo(s.parentNode,l):s.nodeType===1&&Lo(s,l),Ur(s)):Lo(a,r.stateNode);else if(r.tag===4){if(r.child!==null){a=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(af(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function jo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:Qr(3,t,t.return),Xa(3,t),Qr(5,t,t.return);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,i=e!==null?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,a!==null){for(e==="input"&&r.type==="radio"&&r.name!=null&&jd(n,r),Es(e,i),t=Es(e,r),i=0;i<a.length;i+=2){var o=a[i],s=a[i+1];o==="style"?Vd(n,s):o==="dangerouslySetInnerHTML"?Hd(n,s):o==="children"?Dr(n,s):Nl(n,o,s,t)}switch(e){case"input":ys(n,r);break;case"textarea":$d(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,a!=null?Ln(n,!!r.multiple,a,!1):e!==!!r.multiple&&(r.defaultValue!=null?Ln(n,!!r.multiple,r.defaultValue,!0):Ln(n,!!r.multiple,r.multiple?[]:"",!1))}n[Wr]=r}}return;case 6:if(t.stateNode===null)throw Error(k(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:e!==null&&e.memoizedState.isDehydrated&&Ur(t.stateNode.containerInfo);return;case 12:return;case 13:lf(t);return;case 19:lf(t);return;case 17:return}throw Error(k(163))}function lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $0),t.forEach(function(r){var i=J0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function H0(e,t){for(C=t;C!==null;){t=C;var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{pp(e,i,t);var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(S){ge(i,t,S)}}if(n=t.child,(t.subtreeFlags&12854)!==0&&n!==null)n.return=t,C=n;else for(;C!==null;){t=C;try{var o=t.flags;if(o&32&&Dr(t.stateNode,""),o&512){var s=t.alternate;if(s!==null){var l=s.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(t.tag){case 13:if(t.memoizedState!==null){var u=t.alternate;(u===null||u.memoizedState===null)&&(lu=J())}break;case 22:var f=t.memoizedState!==null,m=t.alternate,p=m!==null&&m.memoizedState!==null;n=t;e:{r=n,i=f;for(var g=null,v=r;;){if(v.tag===5){if(g===null){g=v;var E=v.stateNode;if(i){var P=E.style;typeof P.setProperty=="function"?P.setProperty("display","none","important"):P.display="none"}else{var d=v.stateNode,c=v.memoizedProps.style,h=c!=null&&c.hasOwnProperty("display")?c.display:null;d.style.display=Wd("display",h)}}}else if(v.tag===6)g===null&&(v.stateNode.nodeValue=i?"":v.memoizedProps);else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===r)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}if(f&&!p&&(n.mode&1)!==0){C=n;for(var y=n.child;y!==null;){for(n=C=y;C!==null;){r=C;var _=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qr(4,r,r.return);break;case 1:Ea(r,r.return);var I=r.stateNode;if(typeof I.componentWillUnmount=="function"){var w=r.return;try{I.props=r.memoizedProps,I.state=r.memoizedState,I.componentWillUnmount()}catch(S){ge(r,w,S)}}break;case 5:Ea(r,r.return);break;case 22:if(r.memoizedState!==null){cf(n);continue}}_!==null?(_.return=r,C=_):cf(n)}y=y.sibling}}}switch(o&4102){case 2:sf(t),t.flags&=-3;break;case 6:sf(t),t.flags&=-3,jo(t.alternate,t);break;case 4096:t.flags&=-4097;break;case 4100:t.flags&=-4097,jo(t.alternate,t);break;case 4:jo(t.alternate,t)}}catch(S){ge(t,t.return,S)}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}}function W0(e,t,n){C=e,mp(e)}function mp(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Li;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||tn;s=Li;var u=tn;if(Li=o,(tn=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?ff(i):l!==null?(l.return=o,C=l):ff(i);for(;a!==null;)C=a,mp(a),a=a.sibling;C=i,Li=s,tn=u}uf(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,C=a):uf(e)}}function uf(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tn||Xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&$c(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$c(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ur(m)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(k(163))}tn||t.flags&512&&Gs(t)}catch(p){ge(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function cf(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ff(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xa(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var a=t.return;try{Gs(t)}catch(l){ge(t,a,l)}break;case 5:var o=t.return;try{Gs(t)}catch(l){ge(t,o,l)}}}catch(l){ge(t,t.return,l)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var V0=Math.ceil,Ia=vt.ReactCurrentDispatcher,ou=vt.ReactCurrentOwner,Le=vt.ReactCurrentBatchConfig,U=0,ee=null,Z=null,ie=0,Se=0,Nn=Ht(0),te=0,Xr=null,Gn=0,Ja=0,su=0,Or=null,me=null,lu=0,Qn=1/0,Ca=!1,Js=null,Dt=null,Di=!1,Pt=null,xa=0,Nr=0,Zs=null,Yi=-1,Gi=0;function de(){return(U&6)!==0?J():Yi!==-1?Yi:Yi=J()}function Mt(e){return(e.mode&1)===0?1:(U&2)!==0&&ie!==0?ie&-ie:P0.transition!==null?(Gi===0&&(e=ki,ki<<=1,(ki&4194240)===0&&(ki=64),Gi=e),Gi):(e=j,e!==0||(e=window.event,e=e===void 0?16:uh(e.type)),e)}function De(e,t,n){if(50<Nr)throw Nr=0,Zs=null,Error(k(185));var r=Za(e,t);return r===null?null:(ai(r,t,n),((U&2)===0||r!==ee)&&(r===ee&&((U&2)===0&&(Ja|=t),te===4&&Et(r,ie)),_e(r,n),t===1&&U===0&&(e.mode&1)===0&&(Qn=J()+500,Ya&&Wt())),r)}function Za(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function _e(e,t){var n=e.callbackNode;Py(e,t);var r=ua(e,e===ee?ie:0);if(r===0)n!==null&&gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gc(n),t===1)e.tag===0?T0(df.bind(null,e)):Ph(df.bind(null,e)),E0(function(){U===0&&Wt()}),n=null;else{switch(rh(r)){case 1:n=Ml;break;case 4:n=th;break;case 16:n=la;break;case 536870912:n=nh;break;default:n=la}n=Ep(n,vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vp(e,t){if(Yi=-1,Gi=0,(U&6)!==0)throw Error(k(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=ua(e,e===ee?ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ta(e,r);else{t=r;var i=U;U|=2;var a=yp();(ee!==e||ie!==t)&&(Qn=J()+500,an(e,t));do try{Y0();break}catch(s){gp(e,s)}while(1);ql(),Ia.current=a,U=i,Z!==null?t=0:(ee=null,ie=0,t=te)}if(t!==0){if(t===2&&(i=Ps(e),i!==0&&(r=i,t=el(e,i))),t===1)throw n=Xr,an(e,0),Et(e,r),_e(e,J()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,(r&30)===0&&!q0(i)&&(t=Ta(e,r),t===2&&(a=Ps(e),a!==0&&(r=a,t=el(e,a))),t===1))throw n=Xr,an(e,0),Et(e,r),_e(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Gt(e,me);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=lu+500-J(),10<t)){if(ua(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ds(Gt.bind(null,e,me),t);break}Gt(e,me);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-je(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V0(r/1960))-r,10<r){e.timeoutHandle=Ds(Gt.bind(null,e,me),r);break}Gt(e,me);break;case 5:Gt(e,me);break;default:throw Error(k(329))}}}return _e(e,J()),e.callbackNode===n?vp.bind(null,e):null}function el(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ta(e,t),e!==2&&(t=me,me=n,t!==null&&tl(t)),e}function tl(e){me===null?me=e:me.push.apply(me,e)}function q0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ge(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~su,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function df(e){if((U&6)!==0)throw Error(k(327));Un();var t=ua(e,0);if((t&1)===0)return _e(e,J()),null;var n=Ta(e,t);if(e.tag!==0&&n===2){var r=Ps(e);r!==0&&(t=r,n=el(e,r))}if(n===1)throw n=Xr,an(e,0),Et(e,t),_e(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,me),_e(e,J()),null}function uu(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Qn=J()+500,Ya&&Wt())}}function dn(e){Pt!==null&&Pt.tag===0&&(U&6)===0&&Un();var t=U;U|=1;var n=Le.transition,r=j;try{if(Le.transition=null,j=1,e)return e()}finally{j=r,Le.transition=n,U=t,(U&6)===0&&Wt()}}function cu(){Se=Nn.current,V(Nn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S0(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Kn(),V(ye),V(ue),eu();break;case 5:Zl(r);break;case 4:Kn();break;case 13:V(Y);break;case 19:V(Y);break;case 10:Kl(r.type._context);break;case 22:case 23:cu()}n=n.return}if(ee=e,Z=e=$t(e.current,null),ie=Se=t,te=0,Xr=null,su=Ja=Gn=0,me=Or=null,He!==null){for(t=0;t<He.length;t++)if(n=He[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}He=null}return e}function gp(e,t){do{var n=Z;try{if(ql(),qi.current=Sa,ka){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ka=!1}if(Yn=0,re=le=Q=null,br=!1,Kr=0,ou.current=null,n===null||n.return===null){te=1,Xr=t,Z=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ie,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,m=f.tag;if((f.mode&1)===0&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Yc(o);if(g!==null){g.flags&=-257,Gc(g,o,s,a,t),g.mode&1&&Kc(a,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var E=new Set;E.add(l),t.updateQueue=E}else v.add(l);break e}else{if((t&1)===0){Kc(a,u,t),fu();break e}l=Error(k(426))}}else if(q&&s.mode&1){var P=Yc(o);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),Gc(P,o,s,a,t),Xl(l);break e}}a=l,te!==4&&(te=2),Or===null?Or=[a]:Or.push(a),l=au(l,s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=tp(s,l,t);jc(s,d);break e;case 1:a=l;var c=s.type,h=s.stateNode;if((s.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=np(s,a,t);jc(s,y);break e}}s=s.return}while(s!==null)}_p(n)}catch(_){t=_,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function yp(){var e=Ia.current;return Ia.current=Sa,e===null?Sa:e}function fu(){(te===0||te===3||te===2)&&(te=4),ee===null||(Gn&268435455)===0&&(Ja&268435455)===0||Et(ee,ie)}function Ta(e,t){var n=U;U|=2;var r=yp();ee===e&&ie===t||an(e,t);do try{K0();break}catch(i){gp(e,i)}while(1);if(ql(),U=n,Ia.current=r,Z!==null)throw Error(k(261));return ee=null,ie=0,te}function K0(){for(;Z!==null;)wp(Z)}function Y0(){for(;Z!==null&&!wy();)wp(Z)}function wp(e){var t=Sp(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?_p(e):Z=t,ou.current=null}function _p(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=z0(n,t,Se),n!==null){Z=n;return}}else{if(n=j0(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Gt(e,t){var n=j,r=Le.transition;try{Le.transition=null,j=1,G0(e,t,n)}finally{Le.transition=r,j=n}return null}function G0(e,t,n){do Un();while(Pt!==null);if((U&6)!==0)throw Error(k(327));var r=e.finishedWork,i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(by(e,a),e===ee&&(Z=ee=null,ie=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Di||(Di=!0,Ep(la,function(){return Un(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Le.transition,Le.transition=null;var o=j;j=1;var s=U;U|=4,ou.current=null,B0(e,r),H0(e,r),m0(Rs),Rs=null,e.current=r,W0(r),_y(),U=s,j=o,Le.transition=a}else e.current=r;if(Di&&(Di=!1,Pt=e,xa=i),a=e.pendingLanes,a===0&&(Dt=null),Ey(r.stateNode),_e(e,J()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)n(t[r]);if(Ca)throw Ca=!1,e=Js,Js=null,e;return(xa&1)!==0&&e.tag!==0&&Un(),a=e.pendingLanes,(a&1)!==0?e===Zs?Nr++:(Nr=0,Zs=e):Nr=0,Wt(),null}function Un(){if(Pt!==null){var e=rh(xa),t=Le.transition,n=j;try{if(Le.transition=null,j=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,xa=0,(U&6)!==0)throw Error(k(331));var i=U;for(U|=4,C=e.current;C!==null;){var a=C,o=a.child;if((C.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:Qr(8,f,a)}var m=f.child;if(m!==null)m.return=f,C=m;else for(;C!==null;){f=C;var p=f.sibling,g=f.return;if(dp(f),f===u){C=null;break}if(p!==null){p.return=g,C=p;break}C=g}}}var v=a.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var P=E.sibling;E.sibling=null,E=P}while(E!==null)}}C=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,C=o;else e:for(;C!==null;){if(a=C,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Qr(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,C=d;break e}C=a.return}}var c=e.current;for(C=c;C!==null;){o=C;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,C=h;else e:for(o=c;C!==null;){if(s=C,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Xa(9,s)}}catch(_){ge(s,s.return,_)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(U=i,Wt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ha,e)}catch{}r=!0}return r}finally{j=n,Le.transition=t}}return!1}function hf(e,t,n){t=au(n,t),t=tp(e,t,1),Lt(e,t),t=de(),e=Za(e,1),e!==null&&(ai(e,1,t),_e(e,t))}function ge(e,t,n){if(e.tag===3)hf(e,e,n);else for(;t!==null;){if(t.tag===3){hf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=au(n,e),e=np(t,e,1),Lt(t,e),e=de(),t=Za(t,1),t!==null&&(ai(t,1,e),_e(t,e));break}}t=t.return}}function Q0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ie&n)===n&&(te===4||te===3&&(ie&130023424)===ie&&500>J()-lu?an(e,0):su|=n),_e(e,t)}function kp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Si,Si<<=1,(Si&130023424)===0&&(Si=4194304)));var n=de();e=Za(e,t),e!==null&&(ai(e,t,n),_e(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kp(e,n)}function J0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),kp(e,n)}var Sp;Sp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)Ee=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ee=!1,U0(e,t,n);Ee=(e.flags&131072)!==0}else Ee=!1,q&&(t.flags&1048576)!==0&&Ah(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var i=Wn(t,ue.current);Fn(t,n),i=nu(null,t,r,e,i,n);var a=ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(a=!0,pa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yl(t),i.updater=Ga,t.stateNode=i,i._reactInternals=t,js(t,r,e,n),t=qs(null,t,r,!0,a,n)):(t.tag=0,q&&a&&Gl(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=e1(r),e=ze(r,e),i){case 0:t=Vs(null,t,r,e,n);break e;case 1:t=Jc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Xc(null,t,r,ze(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Vs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Jc(e,t,r,i,n);case 3:e:{if(up(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,i=a.element,bh(e,t),ga(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Error(k(423)),t=Zc(e,t,r,n,i);break e}else if(r!==i){i=Error(k(424)),t=Zc(e,t,r,n,i);break e}else for(ve=nt(t.stateNode.containerInfo.firstChild),Ie=t,q=!0,Fe=null,n=Dh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=ht(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Mh(t),e===null&&Bs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ls(r,i)?o=null:a!==null&&Ls(r,a)&&(t.flags|=32),lp(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&Bs(t),null;case 13:return cp(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Qc(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(ma,r._currentValue),r._currentValue=o,a!==null)if(Ge(a.value,o)){if(a.children===i.children&&!ye.current){t=ht(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=st(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Fs(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Me(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Xc(e,t,r,i,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,we(r)?(e=!0,pa(t)):e=!1,Fn(t,n),Nh(t,r,i),js(t,r,i,n),qs(null,t,r,!0,e,n);case 19:return fp(e,t,n);case 22:return sp(e,t,n)}throw Error(k(156,t.tag))};function Ep(e,t){return eh(e,t)}function Z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Z0(e,t,n,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e1(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rl)return 11;if(e===Ll)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")du(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return on(n.children,i,a,t);case Al:o=8,i|=8;break;case hs:return e=Ae(12,n,t,i|2),e.elementType=hs,e.lanes=a,e;case ps:return e=Ae(13,n,t,i),e.elementType=ps,e.lanes=a,e;case ms:return e=Ae(19,n,t,i),e.elementType=ms,e.lanes=a,e;case zd:return Pa(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:o=10;break e;case Md:o=9;break e;case Rl:o=11;break e;case Ll:o=14;break e;case _t:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function on(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Pa(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=zd,e.lanes=n,e.stateNode={},e}function $o(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function Bo(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eo(0),this.expirationTimes=Eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(e,t,n,r,i,a,o,s,l){return e=new t1(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ae(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Yl(a),e}function n1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return jt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(we(n))return Th(e,n,t)}return t}function Cp(e,t,n,r,i,a,o,s,l){return e=hu(n,r,!0,e,i,a,o,s,l),e.context=Ip(null),n=e.current,r=de(),i=Mt(n),a=st(r,i),a.callback=t!=null?t:null,Lt(n,a),e.current.lanes=i,ai(e,i,r),_e(e,r),e}function eo(e,t,n,r){var i=t.current,a=de(),o=Mt(i);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=st(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Lt(i,t),e=De(i,o,a),e!==null&&Vi(e,i,o),o}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pu(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function r1(){return null}var xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}to.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));eo(e,t,null,null)};to.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){eo(null,e,null,null)}),t[dt]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&lh(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mf(){}function i1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=ba(o);a.call(u)}}var o=Cp(t,r,e,0,null,!1,!1,"",mf);return e._reactRootContainer=o,e[dt]=o.current,Br(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ba(l);s.call(u)}}var l=hu(e,0,!1,null,null,!1,!1,"",mf);return e._reactRootContainer=l,e[dt]=l.current,Br(e.nodeType===8?e.parentNode:e),dn(function(){eo(t,l,n,r)}),l}function ro(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=ba(o);s.call(l)}}eo(t,o,e,i)}else o=i1(n,t,e,i,r);return ba(o)}ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(zl(t,n|1),_e(t,J()),(U&6)===0&&(Qn=J()+500,Wt()))}break;case 13:var r=de();dn(function(){return De(e,1,r)}),pu(e,1)}};Fl=function(e){if(e.tag===13){var t=de();De(e,134217728,t),pu(e,134217728)}};ah=function(e){if(e.tag===13){var t=de(),n=Mt(e);De(e,n,t),pu(e,n)}};oh=function(){return j};sh=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Cs=function(e,t,n){switch(t){case"input":if(ys(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ka(r);if(!i)throw Error(k(90));Ud(r),ys(r,i)}}}break;case"textarea":$d(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Yd=uu;Gd=dn;var a1={usingClientEntryPoint:!1,Events:[si,xn,Ka,qd,Kd,uu]},mr={findFiberByHostInstance:Zt,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},o1={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jd(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Ha=Mi.inject(o1),We=Mi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(k(200));return n1(e,t,null,n)};Te.createRoot=function(e,t){if(!vu(e))throw Error(k(299));var n=!1,r="",i=xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hu(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Br(e.nodeType===8?e.parentNode:e),new mu(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Jd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return dn(e)};Te.hydrate=function(e,t,n){if(!no(t))throw Error(k(200));return ro(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cp(t,null,e,1,n!=null?n:null,i,!1,a,o),e[dt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new to(t)};Te.render=function(e,t,n){if(!no(t))throw Error(k(200));return ro(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!no(e))throw Error(k(40));return e._reactRootContainer?(dn(function(){ro(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Te.unstable_batchedUpdates=uu;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!no(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ro(e,t,n,!1,r)};Te.version="18.0.0-fc46dba67-20220329";function Tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp)}catch(e){console.error(e)}}Tp(),Od.exports=Te;var vf=Od.exports;fs.createRoot=vf.createRoot,fs.hydrateRoot=vf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},s1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=a>>2,m=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[f],n[m],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||m==null)throw Error();const p=a<<2|s>>4;if(r.push(p),u!==64){const g=s<<4&240|u>>2;if(r.push(g),m!==64){const v=u<<6&192|m;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l1=function(e){const t=Pp(e);return bp.encodeByteArray(t,!0)},Op=function(e){return l1(e).replace(/\./g,"")},u1=function(e){try{return bp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f1(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function d1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function h1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p1(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m1(){return typeof indexedDB=="object"}function v1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="FirebaseError";class ir extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=g1,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?y1(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new ir(i,s,r)}}function y1(e,t){return e.replace(w1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;function _1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Oa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(gf(a)&&gf(o)){if(!Oa(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function k1(e,t){const n=new S1(e,t);return n.subscribe.bind(n)}class S1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ho),i.error===void 0&&(i.error=Ho),i.complete===void 0&&(i.complete=Ho);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ho(){}/**
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
 */function ar(e){return e&&e._delegate?e._delegate:e}/**
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
 */function kr(e,t){return new Promise((n,r)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var a;r(`${t}: ${(a=i.target.error)===null||a===void 0?void 0:a.message}`)}})}class yf{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n="readonly"){return new Np(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Ap(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Np{constructor(t){this._transaction=t,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(t){return new Ap(this._transaction.objectStore(t))}}class Ap{constructor(t){this._store=t}index(t){return new wf(this._store.index(t))}createIndex(t,n,r){return new wf(this._store.createIndex(t,n,r))}get(t){const n=this._store.get(t);return kr(n,"Error reading from IndexedDB")}put(t,n){const r=this._store.put(t,n);return kr(r,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return kr(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return kr(t,"Error clearing IndexedDB object store")}}class wf{constructor(t){this._index=t}get(t){const n=this._index.get(t);return kr(n,"Error reading from IndexedDB")}}function I1(e,t,n){return new Promise((r,i)=>{try{const a=indexedDB.open(e,t);a.onsuccess=o=>{r(new yf(o.target.result))},a.onerror=o=>{var s;i(`Error opening indexedDB: ${(s=o.target.error)===null||s===void 0?void 0:s.message}`)},a.onupgradeneeded=o=>{n(new yf(a.result),o.oldVersion,o.newVersion,new Np(a.transaction))}}catch(a){i(`Error opening indexedDB: ${a.message}`)}})}class Xn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class C1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new c1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(T1(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x1(e){return e===Qt?void 0:e}function T1(e){return e.instantiationMode==="EAGER"}/**
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
 */class P1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new C1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const b1={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},O1=$.INFO,N1={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},A1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=N1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rp{constructor(t){this.name=t,this._logLevel=O1,this._logHandler=A1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?b1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}/**
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
 */class R1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nl="@firebase/app",_f="0.7.21";/**
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
 */const gu=new Rp("@firebase/app"),D1="@firebase/app-compat",M1="@firebase/analytics-compat",z1="@firebase/analytics",F1="@firebase/app-check-compat",U1="@firebase/app-check",j1="@firebase/auth",$1="@firebase/auth-compat",B1="@firebase/database",H1="@firebase/database-compat",W1="@firebase/functions",V1="@firebase/functions-compat",q1="@firebase/installations",K1="@firebase/installations-compat",Y1="@firebase/messaging",G1="@firebase/messaging-compat",Q1="@firebase/performance",X1="@firebase/performance-compat",J1="@firebase/remote-config",Z1="@firebase/remote-config-compat",ew="@firebase/storage",tw="@firebase/storage-compat",nw="@firebase/firestore",rw="@firebase/firestore-compat",iw="firebase",aw="9.6.11";/**
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
 */const Lp="[DEFAULT]",ow={[nl]:"fire-core",[D1]:"fire-core-compat",[z1]:"fire-analytics",[M1]:"fire-analytics-compat",[U1]:"fire-app-check",[F1]:"fire-app-check-compat",[j1]:"fire-auth",[$1]:"fire-auth-compat",[B1]:"fire-rtdb",[H1]:"fire-rtdb-compat",[W1]:"fire-fn",[V1]:"fire-fn-compat",[q1]:"fire-iid",[K1]:"fire-iid-compat",[Y1]:"fire-fcm",[G1]:"fire-fcm-compat",[Q1]:"fire-perf",[X1]:"fire-perf-compat",[J1]:"fire-rc",[Z1]:"fire-rc-compat",[ew]:"fire-gcs",[tw]:"fire-gcs-compat",[nw]:"fire-fst",[rw]:"fire-fst-compat","fire-js":"fire-js",[iw]:"fire-js-all"};/**
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
 */const Na=new Map,rl=new Map;function sw(e,t){try{e.container.addComponent(t)}catch(n){gu.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jr(e){const t=e.name;if(rl.has(t))return gu.debug(`There were multiple attempts to register component ${t}.`),!1;rl.set(t,e);for(const n of Na.values())sw(n,e);return!0}function Dp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const lw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},hn=new ui("app","Firebase",lw);/**
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
 */class uw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const io=aw;function cw(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Lp,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});const i=Na.get(r);if(i){if(Oa(e,i.options)&&Oa(n,i.config))return i;throw hn.create("duplicate-app",{appName:r})}const a=new P1(r);for(const s of rl.values())a.addComponent(s);const o=new uw(e,n,a);return Na.set(r,o),o}function fw(e=Lp){const t=Na.get(e);if(!t)throw hn.create("no-app",{appName:e});return t}function jn(e,t,n){var r;let i=(r=ow[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gu.warn(s.join(" "));return}Jr(new Xn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const dw="firebase-heartbeat-database",hw=1,Zr="firebase-heartbeat-store";let Wo=null;function Mp(){return Wo||(Wo=I1(dw,hw,(e,t)=>{switch(t){case 0:e.createObjectStore(Zr)}}).catch(e=>{throw hn.create("storage-open",{originalErrorMessage:e.message})})),Wo}async function pw(e){try{return(await Mp()).transaction(Zr).objectStore(Zr).get(zp(e))}catch(t){throw hn.create("storage-get",{originalErrorMessage:t.message})}}async function kf(e,t){try{const r=(await Mp()).transaction(Zr,"readwrite");return await r.objectStore(Zr).put(t,zp(e)),r.complete}catch(n){throw hn.create("storage-set",{originalErrorMessage:n.message})}}function zp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const mw=1024,vw=30*24*60*60*1e3;class gw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ww(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=vw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sf(),{heartbeatsToSend:n,unsentEntries:r}=yw(this._heartbeatsCache.heartbeats),i=Op(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sf(){return new Date().toISOString().substring(0,10)}function yw(e,t=mw){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Ef(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ef(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ww{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m1()?v1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ef(e){return Op(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function _w(e){Jr(new Xn("platform-logger",t=>new R1(t),"PRIVATE")),Jr(new Xn("heartbeat",t=>new gw(t),"PRIVATE")),jn(nl,_f,e),jn(nl,_f,"esm2017"),jn("fire-js","")}_w("");var kw="firebase",Sw="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(kw,Sw,"app");const Ew="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",Iw="sds-butterfly.firebaseapp.com",Cw="sds-butterfly",xw="sds-butterfly.appspot.com",Tw="265457992927",Pw="1:265457992927:web:f8b8781a13dd1e4b3fd56a";function bw(){return cw({apiKey:Ew,authDomain:Iw,projectId:Cw,storageBucket:xw,messagingSenderId:Tw,appId:Pw})}const Ow=D.exports.createContext();var yu={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=D.exports,Aw=Symbol.for("react.element"),Rw=Symbol.for("react.fragment"),Lw=Object.prototype.hasOwnProperty,Dw=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mw={key:!0,ref:!0,__self:!0,__source:!0};function Fp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lw.call(t,r)&&!Mw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Aw,type:e,key:a,ref:o,props:i,_owner:Dw.current}}ao.Fragment=Rw;ao.jsx=Fp;ao.jsxs=Fp;yu.exports=ao;const O=yu.exports.jsx,ke=yu.exports.jsxs;function zw(){return O("div",{className:"Layout FullPage ",children:O(dv,{})})}function Fw(){return O("div",{className:"Layout Page Content FullPage NotFoundPage VerticalCenter",children:ke("div",{children:[O("h1",{className:"BigTitle",children:"Page Not Found"}),O("p",{children:"Sorry about that!"}),O(ml,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}function Uw(){return O("div",{className:"Page Content HomePage FullPage VerticalCenter",children:ke("div",{children:[O("h1",{className:"BigTitle",children:"Butterfly"}),O("p",{children:"Meet people in your community."}),O(ml,{to:"/login",className:"Button Primary",children:"Login"})]})})}var Up={exports:{}},jw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$w=jw,Bw=$w;function jp(){}function $p(){}$p.resetWarningCache=jp;var Hw=function(){function e(r,i,a,o,s,l){if(l!==Bw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$p,resetWarningCache:jp};return n.PropTypes=n,n};Up.exports=Hw();var z=Up.exports;function If(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?If(Object(n),!0).forEach(function(r){An(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):If(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Aa(e){return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Aa(e)}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ww(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bp(e,t){if(e==null)return{};var n=Ww(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function il(e){return Vw(e)||qw(e)||Kw(e)||Yw()}function Vw(e){if(Array.isArray(e))return al(e)}function qw(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kw(e,t){if(!!e){if(typeof e=="string")return al(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return al(e,t)}}function al(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gw(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,g=e.inverse,v=e.border,E=e.listItem,P=e.flip,d=e.size,c=e.rotation,h=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":v,"fa-li":E,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},An(t,"fa-".concat(d),typeof d!="undefined"&&d!==null),An(t,"fa-rotate-".concat(c),typeof c!="undefined"&&c!==null&&c!==0),An(t,"fa-pull-".concat(h),typeof h!="undefined"&&h!==null),An(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(_){return y[_]?_:null}).filter(function(_){return _})}function Qw(e){return e=e-0,e===e}function Hp(e){return Qw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Xw=["style"];function Jw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Zw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Hp(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[Jw(i)]=a:t[i]=a,t},{})}function Wp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Wp(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Zw(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[Hp(u)]=f}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Bp(n,Xw);return i.attrs.style=bt(bt({},i.attrs.style),o),e.apply(void 0,[t.tag,bt(bt({},i.attrs),s)].concat(il(r)))}var Vp=!1;try{Vp=!0}catch{}function e_(){if(!Vp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cf(e){if(e&&Aa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(cs.icon)return cs.icon(e);if(e===null)return null;if(e&&Aa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Vo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?An({},e,t):{}}var t_=["forwardedRef"];function or(e){var t=e.forwardedRef,n=Bp(e,t_),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,u=n.maskId,f=Cf(r),m=Vo("classes",[].concat(il(Gw(n)),il(o.split(" ")))),p=Vo("transform",typeof n.transform=="string"?cs.transform(n.transform):n.transform),g=Vo("mask",Cf(i)),v=ty(f,bt(bt(bt(bt({},m),p),g),{},{symbol:a,title:s,titleId:l,maskId:u}));if(!v)return e_("Could not find icon",f),null;var E=v.abstract,P={ref:t};return Object.keys(n).forEach(function(d){or.defaultProps.hasOwnProperty(d)||(P[d]=n[d])}),n_(E[0],P)}or.displayName="FontAwesomeIcon";or.propTypes={beat:z.bool,border:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf(["horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};or.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var n_=Wp.bind(null,Qf.createElement);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var r_={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
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
***************************************************************************** */function wu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function qp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=qp,Kp=new ui("auth","Firebase",qp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=new Rp("@firebase/auth");function Xi(e,...t){xf.logLevel<=$.ERROR&&xf.error(`Auth (${io}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,...t){throw _u(e,...t)}function qe(e,...t){return _u(e,...t)}function Yp(e,t,n){const r=Object.assign(Object.assign({},i_()),{[t]:n});return new ui("auth","Firebase",r).create(t,{appName:e.name})}function a_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qe(e,"argument-error"),Yp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kp.create(e,...t)}function R(e,t,...n){if(!e)throw _u(t,...n)}function at(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xi(t),new Error(t)}function pt(e,t){e||at(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;function ot(e){pt(e instanceof Function,"Expected a class definition");let t=Tf.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tf.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(e,t){const n=Dp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Oa(a,t!=null?t:{}))return i;Qe(i,"already-initialized")}return n.initialize({options:t})}function s_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function l_(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l_()||d1()||"connection"in navigator)?navigator.onLine:!0}function c_(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=f1()||h1()}get(){return u_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new fi(3e4,6e4);function h_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function oo(e,t,n,r,i={}){return Qp(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=ci(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Gp.fetch()(Xp(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},f_),t);try{const i=new m_(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw qo(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qo(e,"email-already-in-use",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yp(e,f,u);Qe(e,f)}}catch(i){if(i instanceof ir)throw i;Qe(e,"network-request-failed")}}async function p_(e,t,n,r,i={}){const a=await oo(e,t,n,r,i);return"mfaPendingCredential"in a&&Qe(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ku(e.config,i):`${e.config.apiScheme}://${i}`}class m_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),d_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(e,t){return oo(e,"POST","/v1/accounts:delete",t)}async function g_(e,t){return oo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function y_(e,t=!1){const n=ar(e),r=await n.getIdToken(t),i=Su(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Ar(Ko(i.auth_time)),issuedAtTime:Ar(Ko(i.iat)),expirationTime:Ar(Ko(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ko(e){return Number(e)*1e3}function Su(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=u1(n);return i?JSON.parse(i):(Xi("Failed to decode base64 JWT payload"),null)}catch(i){return Xi("Caught error parsing JWT payload as JSON",i),null}}function w_(e){const t=Su(e);return R(t,"internal-error"),R(typeof t.exp!="undefined","internal-error"),R(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ir&&__(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function __({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ei(e,g_(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?I_(a.providerUserInfo):[],s=E_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),f=l?u:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Jp(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(e,m)}async function S_(e){const t=ar(e);await Ra(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function E_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function I_(e){return e.map(t=>{var{providerId:n}=t,r=wu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(e,t){const n=await Qp(e,{},async()=>{const r=ci({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Xp(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Gp.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken!="undefined","internal-error"),R(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):w_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await C_(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new ti;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t){R(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class sn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=wu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await ei(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return y_(this,t)}reload(){return S_(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ei(this,v_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(s=n.tenantId)!==null&&s!==void 0?s:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:h,emailVerified:y,isAnonymous:_,providerData:I,stsTokenManager:w}=n;R(h&&w,t,"internal-error");const S=ti.fromJSON(this.name,w);R(typeof h=="string",t,"internal-error"),yt(m,t.name),yt(p,t.name),R(typeof y=="boolean",t,"internal-error"),R(typeof _=="boolean",t,"internal-error"),yt(g,t.name),yt(v,t.name),yt(E,t.name),yt(P,t.name),yt(d,t.name),yt(c,t.name);const N=new sn({uid:h,auth:t,email:p,emailVerified:y,displayName:m,isAnonymous:_,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:S,createdAt:d,lastLoginAt:c});return I&&Array.isArray(I)&&(N.providerData=I.map(A=>Object.assign({},A))),P&&(N._redirectEventId=P),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new ti;i.updateFromServerResponse(n);const a=new sn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ra(a),a}}/**
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
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zp.type="NONE";const bf=Zp;/**
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
 */function Ji(e,t,n){return`firebase:${e}:${t}:${n}`}class $n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ji(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ji("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $n(ot(bf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||ot(bf);const o=Ji(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const f=await u._get(o);if(f){const m=sn._fromJSON(t,f);u!==a&&(s=m),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new $n(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new $n(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(em(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(im(t))return"Blackberry";if(am(t))return"Webos";if(Eu(t))return"Safari";if((t.includes("chrome/")||tm(t))&&!t.includes("edge/"))return"Chrome";if(rm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function em(e=ce()){return/firefox\//i.test(e)}function Eu(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tm(e=ce()){return/crios\//i.test(e)}function nm(e=ce()){return/iemobile/i.test(e)}function rm(e=ce()){return/android/i.test(e)}function im(e=ce()){return/blackberry/i.test(e)}function am(e=ce()){return/webos/i.test(e)}function so(e=ce()){return/iphone|ipad|ipod/i.test(e)}function x_(e=ce()){var t;return so(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function T_(){return p1()&&document.documentMode===10}function om(e=ce()){return so(e)||rm(e)||am(e)||im(e)||/windows phone/i.test(e)||nm(e)}function P_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(e,t=[]){let n;switch(e){case"Browser":n=Of(ce());break;case"Worker":n=`${Of(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);(!i||i===a)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ra(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=c_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ar(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ui("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Iu(e){return ar(e)}class Nf{constructor(t){this.auth=t,this.observer=null,this.addObserver=k1(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(t){return at("not implemented")}_linkToIdToken(t,n){return at("not implemented")}_getReauthenticationResolver(t){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t){return p_(e,"POST","/v1/accounts:signInWithIdp",h_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="http://localhost";class pn extends lm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=wu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Bn(t,n)}buildRequest(){const t={requestUri:O_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ci(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends di{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tt.credentialFromTaggedObject(t)}static credentialFromError(t){return tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends di{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends di{constructor(){super("twitter.com")}static credential(t,n){return pn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await sn._fromIdTokenResponse(t,r,i),o=Af(r);return new Jn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Af(r);return new Jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends ir{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,La.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new La(t,n,r,i)}}function um(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(e,a,t,r):a})}async function N_(e,t,n=!1){const r=await ei(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Jn._forOperation(e,"link",r)}/**
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
 */async function A_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await ei(e,um(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=Su(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),Jn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(e,t,n=!1){const r="signIn",i=await um(e,r,t),a=await Jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}function L_(e,t,n,r){return ar(e).onAuthStateChanged(t,n,r)}function D_(e){return ar(e).signOut()}const Da="__sak";/**
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
 */class cm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){const e=ce();return Eu(e)||so(e)}const z_=1e3,F_=10;class fm extends cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=M_()&&P_(),this.fallbackToPolling=om(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);T_()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,F_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fm.type="LOCAL";const U_=fm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dm.type="SESSION";const hm=dm;/**
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
 */function j_(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new lo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await j_(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class $_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=xu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(f),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function B_(e){Ke().location.href=e}/**
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
 */function pm(){return typeof Ke().WorkerGlobalScope!="undefined"&&typeof Ke().importScripts=="function"}async function H_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function V_(){return pm()?self:null}/**
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
 */const mm="firebaseLocalStorageDb",q_=1,Ma="firebaseLocalStorage",vm="fbase_key";class hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uo(e,t){return e.transaction([Ma],t?"readwrite":"readonly").objectStore(Ma)}function K_(){const e=indexedDB.deleteDatabase(mm);return new hi(e).toPromise()}function sl(){const e=indexedDB.open(mm,q_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ma,{keyPath:vm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ma)?t(r):(r.close(),await K_(),t(await sl()))})})}async function Rf(e,t,n){const r=uo(e,!0).put({[vm]:t,value:n});return new hi(r).toPromise()}async function Y_(e,t){const n=uo(e,!1).get(t),r=await new hi(n).toPromise();return r===void 0?null:r.value}function Lf(e,t){const n=uo(e,!0).delete(t);return new hi(n).toPromise()}const G_=800,Q_=3;class gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(V_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await H_(),!this.activeServiceWorker)return;this.sender=new $_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||W_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sl();return await Rf(t,Da,"1"),await Lf(t,Da),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Y_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=uo(i,!1).getAll();return new hi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gm.type="LOCAL";const X_=gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Z_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=qe("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",J_().appendChild(r)})}function ek(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new fi(3e4,6e4);/**
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
 */function ym(e,t){return t?ot(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Tu extends lm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function tk(e){return R_(e.auth,new Tu(e),e.bypassAuthState)}function nk(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),A_(n,new Tu(e),e.bypassAuthState)}async function rk(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),N_(n,new Tu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tk;case"linkViaPopup":case"linkViaRedirect":return rk;case"reauthViaPopup":case"reauthViaRedirect":return nk;default:Qe(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new fi(2e3,1e4);async function ak(e,t,n){const r=Iu(e);a_(e,t,Cu);const i=ym(r,n);return new nn(r,"signInViaPopup",t,i).executeNotNull()}class nn extends wm{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,ik.get())};t()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="pendingRedirect",Yo=new Map;class sk extends wm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yo.get(this.auth._key());if(!t){try{const r=await lk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yo.set(this.auth._key(),t)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lk(e,t){const n=ck(t),r=uk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uk(e){return ot(e._redirectPersistence)}function ck(e){return Ji(ok,e.config.apiKey,e.name)}async function fk(e,t,n=!1){const r=Iu(e),i=ym(r,t),o=await new sk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=10*60*1e3;class hk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!_m(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Df(t))}saveEventToCache(t){this.cachedEventUids.add(Df(t)),this.lastProcessedEventTime=Date.now()}}function Df(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function _m({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _m(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(e,t={}){return oo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function yk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mk(e);for(const n of t)try{if(wk(n))return}catch{}Qe(e,"unauthorized-domain")}function wk(e){const t=ol(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gk.test(n))return!1;if(vk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _k=new fi(3e4,6e4);function Mf(){const e=Ke().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function kk(e){return new Promise((t,n)=>{var r,i,a;function o(){Mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(qe(e,"network-request-failed"))},timeout:_k.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Ke().gapi)===null||a===void 0)&&a.load)o();else{const s=ek("iframefcb");return Ke()[s]=()=>{gapi.load?o():n(qe(e,"network-request-failed"))},Z_(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Zi=null,t})}let Zi=null;function Sk(e){return Zi=Zi||kk(e),Zi}/**
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
 */const Ek=new fi(5e3,15e3),Ik="__/auth/iframe",Ck="emulator/auth/iframe",xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pk(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ku(t,Ck):`https://${e.config.authDomain}/${Ik}`,r={apiKey:t.apiKey,appName:e.name,v:io},i=Tk.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${ci(r).slice(1)}`}async function bk(e){const t=await Sk(e),n=Ke().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:Pk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xk,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=qe(e,"network-request-failed"),s=Ke().setTimeout(()=>{a(o)},Ek.get());function l(){Ke().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const Ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,Ak=600,Rk="_blank",Lk="http://localhost";class zf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dk(e,t,n,r=Nk,i=Ak){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Ok),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ce().toLowerCase();n&&(s=tm(u)?Rk:n),em(u)&&(t=t||Lk,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(x_(u)&&s!=="_self")return Mk(t||"",s),new zf(null);const m=window.open(t||"",s,f);R(m,e,"popup-blocked");try{m.focus()}catch{}return new zf(m)}function Mk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zk="__/auth/handler",Fk="emulator/auth/handler";function Ff(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:io,eventId:i};if(t instanceof Cu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",_1(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(a||{}))o[l]=u}if(t instanceof di){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${Uk(e)}?${ci(s).slice(1)}`}function Uk({config:e}){return e.emulator?ku(e,Fk):`https://${e.authDomain}/${zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hm,this._completeRedirectFn=fk}async _openPopup(t,n,r,i){var a;pt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=Ff(t,n,r,ol(),i);return Dk(t,o,xu())}async _openRedirect(t,n,r,i){return await this._originValidation(t),B_(Ff(t,n,r,ol(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(pt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await bk(t),r=new hk(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Go,{type:Go},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Go];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return om()||Eu()||so()}}const $k=jk;var Uf="@firebase/auth",jf="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wk(e){Jr(new Xn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:a,authDomain:o}=r.options;return((s,l)=>{R(a&&!a.includes(":"),"invalid-api-key",{appName:s.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:s.name});const u={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(e)},f=new b_(s,l,u);return s_(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Jr(new Xn("auth-internal",t=>{const n=Iu(t.getProvider("auth").getImmediate());return(r=>new Bk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Uf,jf,Hk(e)),jn(Uf,jf,"esm2017")}/**
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
 */function Pu(e=fw()){const t=Dp(e,"auth");return t.isInitialized()?t.getImmediate():o_(e,{popupRedirectResolver:$k,persistence:[X_,U_,hm]})}Wk("Browser");async function Vk(){try{const e=Pu(),t=new tt;return{user:(await ak(e,t)).user,signInError:null}}catch(e){return{user:null,signInError:e}}}async function $f(){try{const e=Pu();return await D_(e),{isSuccess:!0,signOutError:null}}catch(e){return{isSuccess:!1,signOutError:e}}}function km(){const e=Pu(),[t,n]=D.exports.useState(null);return L_(e,r=>{t!==r&&n(r)}),t}function qk({hasError:e,children:t}){return e&&O("div",{className:"Error",children:t})}function Kk({authUser:e,doLogOut:t}){return e&&ke("div",{children:[O("hr",{}),ke("p",{children:["Currently logged in as ",e.displayName,"."]}),O("p",{children:ke("span",{className:"Button",onClick:t,children:[O(or,{icon:iy,className:"IconBefore"}),O("span",{children:"Log Out"})]})})]})}function Yk(){const[e,t]=D.exports.useState(null),n=km(),r=pl(),i=async()=>{const{user:o,signInError:s}=await Vk();o?(console.log(`Welcome, ${o.displayName}!`),t(null),r("/chats")):(console.error(s),t(s))},a=async()=>{const{isSuccess:o,signOutError:s}=await $f();o||t($f)};return O("div",{className:"Page Content LoginPage FullPage VerticalCenter",children:ke("div",{children:[O("h1",{className:"BigTitle",children:"Butterfly"}),O("p",{children:"Meet people in your community."}),O("p",{children:ke("span",{className:"Button Primary",onClick:i,children:[O(or,{icon:r_,className:"IconBefore"}),O("span",{children:"Log in with Google"})]})}),ke(qk,{hasError:e,children:[O("p",{children:"Something went wrong:"}),O("pre",{children:e==null?void 0:e.toString()})]}),O(Kk,{authUser:n,doLogOut:a})]})})}function Gk(){return ke("div",{className:"Page Content AllChatsPage FullPage",children:[O("h1",{children:"Chats"}),O("p",{children:"Your chats will appear here."}),O(ml,{to:"/chats/123",children:"Chat 123"})]})}function Qk(){const{chatId:e}=uv();return km(),ke("div",{className:"Page Content ChatPage FullPage",children:[O("h1",{children:"Chat with Someone"}),O("p",{children:"Your messages will appear here."}),ke("pre",{children:["Chat ID: ",e]}),O("div",{className:"Message",children:"This is an example message."})]})}const Xk="/butterfly",Bf="butterfly__pathname";function Jk(){const e=pl();return D.exports.useEffect(()=>{const t=localStorage.getItem(Bf);if(t){localStorage.setItem(Bf,"");const n=t.substring(Xk.length);e(n)}},[]),O("div",{className:"App Theme",children:ke(pv,{children:[O(wt,{index:!0,element:O(Uw,{})}),ke(wt,{path:"/",element:O(zw,{}),children:[O(wt,{path:"login",element:O(Yk,{})}),ke(wt,{path:"chats",children:[O(wt,{index:!0,element:O(Gk,{})}),O(wt,{path:":chatId",element:O(Qk,{})})]})]}),O(wt,{path:"*",element:O(Fw,{})})]})})}function Zk(){const e=bw();return O("div",{className:"App Theme",children:O(Ow.Provider,{value:e,children:O(Jk,{})})})}const eS=[ny];ey.add(eS);document.title="Butterfly";fs.createRoot(document.getElementById("root")).render(O(Qf.StrictMode,{children:O(gv,{basename:"butterfly",children:O(Zk,{})})}));
