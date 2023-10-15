"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,i(i({ref:n},s),{},{components:t})):o.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={title:"Focus Mode Configuration",pagination_next:null,pagination_prev:null},i="Focus Mode Configuration",c={unversionedId:"add-ons/focus-mode",id:"add-ons/focus-mode",title:"Focus Mode Configuration",description:"GP2040-CE Configurator - Focus Mode",source:"@site/docs/add-ons/focus-mode.md",sourceDirName:"add-ons",slug:"/add-ons/focus-mode",permalink:"/next/add-ons/focus-mode",draft:!1,tags:[],version:"current",frontMatter:{title:"Focus Mode Configuration",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},l={},u=[],s={toc:u},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"focus-mode-configuration"},"Focus Mode Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE Configurator - Focus Mode",src:t(4611).Z,width:"2360",height:"508"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Focus Mode Pin")," - The GPIO pin used to enable Focus Mode (this needs to always be held so a slider or latching switch is recommended)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lock OLED Screen")," - When enabled the OLED screen will not display anything during Focus Mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lock RGB LED")," - When enabled the RGB LEDs that are controlled by the RP2040 device will not display anything during Focus Mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lock Buttons")," - When enabled the You can specify specific buttons to not function during Focus Mode.  You can add as many additional buttons as needed here.")))}p.isMDXComponent=!0},4611:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/gpc-add-ons-focus-mode-6198c7133695be3ef66ad7dcfb8b5096.png"}}]);