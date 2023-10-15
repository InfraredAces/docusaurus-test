"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9619],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,b=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={title:"Microcontroller Board Wiring",pagination_next:null,pagination_prev:null},a="Wiring",c={unversionedId:"controller-build/wiring",id:"controller-build/wiring",title:"Microcontroller Board Wiring",description:"These are the default pin mappings for each GP2040-CE supported microcontroller board.",source:"@site/docs/controller-build/wiring.md",sourceDirName:"controller-build",slug:"/controller-build/wiring",permalink:"/next/controller-build/wiring",draft:!1,tags:[],version:"current",frontMatter:{title:"Microcontroller Board Wiring",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},l={},p=[{value:"Raspberry Pi Pico",id:"raspberry-pi-pico",level:2},{value:"SparkFun Pro Micro - RP2040",id:"sparkfun-pro-micro---rp2040",level:2},{value:"Waveshare RP2040-Zero",id:"waveshare-rp2040-zero",level:2},{value:"Adafruit KB2040",id:"adafruit-kb2040",level:2}],u={toc:p},s="wrapper";function d(e){let{components:r,...o}=e;return(0,i.kt)(s,(0,n.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"These are the default pin mappings for each GP2040-CE supported microcontroller board."),(0,i.kt)("h2",{id:"raspberry-pi-pico"},"Raspberry Pi Pico"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Raspberry Pi Pico pinout can also be used on clone boards with the same form factor and pinout, such as the Pimironi Pico LiPo and the Waveshare RP2040-Plus.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Raspberry Pi Pico Pinout",src:t(5289).Z,width:"2518",height:"2200"})),(0,i.kt)("h2",{id:"sparkfun-pro-micro---rp2040"},"SparkFun Pro Micro - RP2040"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SparkFun Pro Micro - RP2040 Pinout",src:t(2127).Z,width:"747",height:"470"})),(0,i.kt)("h2",{id:"waveshare-rp2040-zero"},"Waveshare RP2040-Zero"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Waveshare RP2040-Zero Pinout",src:t(1712).Z,width:"541",height:"482"})),(0,i.kt)("h2",{id:"adafruit-kb2040"},"Adafruit KB2040"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adafruit KB2040 Pinout",src:t(1049).Z,width:"1370",height:"862"})))}d.isMDXComponent=!0},1049:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/AdafruitKB2040_Pinout-aad1ec72ede94ed333825e3ad36acac2.png"},5289:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/RaspberryPiPico_Pinout-2723c7b2db4e025a4dba4edd83d38175.png"},2127:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/SparkFunProMicroRP2040_Pinout-c5a6ba6f852cc1e5ea04e7c3190890c8.png"},1712:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/WaveshareRP2040Zero_Pinout-0a19dcb1ca0936ecfa88f45faeb7c85a.png"}}]);