"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(u,".").concat(c)]||d[c]||b[c]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Turbo",pagination_next:null,pagination_prev:null},i="Turbo",l={unversionedId:"add-ons/turbo",id:"version-0.7.5/add-ons/turbo",title:"Turbo",description:"GP2040-CE Configurator - Add-Ons Turbo",source:"@site/versioned_docs/version-0.7.5/add-ons/turbo.md",sourceDirName:"add-ons",slug:"/add-ons/turbo",permalink:"/docs/add-ons/turbo",draft:!1,tags:[],version:"0.7.5",frontMatter:{title:"Turbo",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},u={},s=[{value:"Turbo - SHMUP MODE",id:"turbo---shmup-mode",level:2}],p={toc:s},d="wrapper";function b(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"turbo"},"Turbo"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GP2040-CE Configurator - Add-Ons Turbo",src:n(6579).Z,width:"803",height:"215"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Pin")," - The GPIO pin used for the Turbo button."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Pin LED")," - The GPIO pin used for the Turbo LED."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Shot Count")," - The number of of presses per second that the Turbo will activate at."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Dial (ADC ONLY)")," - The GPIO pin used for the Turbo dial.  Must be one of the ADC pins.")),(0,a.kt)("h2",{id:"turbo---shmup-mode"},"Turbo - SHMUP MODE"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GP2040-CE Configurator - Add-Ons Turbo SHMUP MODE",src:n(5218).Z,width:"808",height:"581"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Always On 1")," - The GPIO pin used for a Turbo button that will always be on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Always On 2")," - The GPIO pin used for a Turbo button that will always be on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Always On 3")," - The GPIO pin used for a Turbo button that will always be on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Turbo Always On 4")," - The GPIO pin used for a Turbo button that will always be on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 1 Pin")," - The GPIO pin used for a button that needs to be able to do a charged shot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 2 Pin")," - The GPIO pin used for a button that needs to be able to do a charged shot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 3 Pin")," - The GPIO pin used for a button that needs to be able to do a charged shot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 4 Pin")," - The GPIO pin used for a button that needs to be able to do a charged shot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 1 Assignment")," - The button that will be able to charge shot regardless of Turbo status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 2 Assignment")," - The button that will be able to charge shot regardless of Turbo status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 3 Assignment")," - The button that will be able to charge shot regardless of Turbo status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Charge Button 4 Assignment")," - The button that will be able to charge shot regardless of Turbo status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Simultaneous Priority Mode")," - In the event both the Turbo and charged buttons are pressed at the time same, which should take priority.")))}b.isMDXComponent=!0},5218:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpc-add-ons-turbo-shmup-fb6048f068328937330d200c73d2a083.png"},6579:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpc-add-ons-turbo-448b003dd06b0a94a5a1e33023fdc585.png"}}]);