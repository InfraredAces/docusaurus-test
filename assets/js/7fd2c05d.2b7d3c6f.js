"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5924],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Buzzer Speaker",pagination_next:null,pagination_prev:null},i="Buzzer Speaker",l={unversionedId:"add-ons/buzzer-speaker",id:"add-ons/buzzer-speaker",title:"Buzzer Speaker",description:"Purpose: The intended function and purpose of this add-on for an end user.",source:"@site/docs/add-ons/buzzer-speaker.mdx",sourceDirName:"add-ons",slug:"/add-ons/buzzer-speaker",permalink:"/docusaurus-test/add-ons/buzzer-speaker",draft:!1,tags:[],version:"current",frontMatter:{title:"Buzzer Speaker",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},u={},s=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],p={toc:s},c="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(c,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buzzer-speaker"},"Buzzer Speaker"),(0,o.kt)("p",null,"Purpose: The intended function and purpose of this add-on for an end user."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GP2040-CE Configurator - Add-Ons Buzzer",src:t(1879).Z,width:"806",height:"189"})),(0,o.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Use buzzer")," - Turns on/off the buzzer module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buzzer Pin")," - The GPIO pin used for the buzzer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buzzer Volume")," - Audio volume of buzzer. Ranges from 0-100.")),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3-3.3V Piezo speaker")),(0,o.kt)("p",null,"The speaker only needs to have pins for power (VCC) and ground (GND). If there is an I/O pin on speaker, you can jump the pins and use only the VCC connected to RP2040 GPIO pin."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug into GPIO pin on board to VCC on speaker"),(0,o.kt)("li",{parentName:"ul"},"Enter GPIO pin into web config")),(0,o.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,o.kt)("p",null,"None"))}d.isMDXComponent=!0},1879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gpc-add-ons-buzzer-5569287f3e543467bae3eef162661b0f.png"}}]);