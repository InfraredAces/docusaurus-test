"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3267],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>N});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),p=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=p(t.components);return a.createElement(o.Provider,{value:n},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(e),k=r,N=m["".concat(o,".").concat(k)]||m[k]||g[k]||l;return e?a.createElement(N,i(i({ref:n},d),{},{components:e})):a.createElement(N,i({ref:n},d))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=t,u[m]="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=e[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},7676:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=e(7462),r=(e(7294),e(3905));const l={title:"Extra Button Configuration",pagination_next:null,pagination_prev:null},i="Extra Button Configuration",u={unversionedId:"add-ons/extra-button",id:"add-ons/extra-button",title:"Extra Button Configuration",description:"Purpose: This add-on is intended to allow an additional GPIO pin to be assigned to a gamepad input, granting an independently remappable button.",source:"@site/docs/add-ons/extra-button.mdx",sourceDirName:"add-ons",slug:"/add-ons/extra-button",permalink:"/docusaurus-test/add-ons/extra-button",draft:!1,tags:[],version:"current",frontMatter:{title:"Extra Button Configuration",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},o={},p=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],d={toc:p},m="wrapper";function g(t){let{components:n,...l}=t;return(0,r.kt)(m,(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extra-button-configuration"},"Extra Button Configuration"),(0,r.kt)("p",null,"Purpose: This add-on is intended to allow an additional GPIO pin to be assigned to a gamepad input, granting an independently remappable button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE Configurator - Extra Button",src:e(1114).Z,width:"805",height:"186"})),(0,r.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Extra Button Pin")," - The GPIO pin used for the extra instance of a button."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Extra Button")," - The button that will have an extra instance.")),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This add-on requires an additional button to be mapped to a GPIO pin."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"For both arcade buttons and keyboard switches, one side of the contacts needs to be connected to the GPIO pin (i.e. by wire or trace on a PCB) and the other connected to ground (i.e. by wire or trace on a PCB)."),(0,r.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,r.kt)("p",null,"The Extra Button add-on is limited to the following gamepad inputs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GP2040-CE"),(0,r.kt)("th",{parentName:"tr",align:null},"XInput"),(0,r.kt)("th",{parentName:"tr",align:null},"Switch"),(0,r.kt)("th",{parentName:"tr",align:null},"PS4"),(0,r.kt)("th",{parentName:"tr",align:null},"PS3"),(0,r.kt)("th",{parentName:"tr",align:null},"DirectInput"),(0,r.kt)("th",{parentName:"tr",align:null},"Arcade"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B1"),(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"K1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B2"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"K2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B3"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Square"),(0,r.kt)("td",{parentName:"tr",align:null},"Square"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"P1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B4"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"Triangle"),(0,r.kt)("td",{parentName:"tr",align:null},"Triangle"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"P2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1"),(0,r.kt)("td",{parentName:"tr",align:null},"LB"),(0,r.kt)("td",{parentName:"tr",align:null},"L"),(0,r.kt)("td",{parentName:"tr",align:null},"L1"),(0,r.kt)("td",{parentName:"tr",align:null},"L1"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"P4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"R1"),(0,r.kt)("td",{parentName:"tr",align:null},"RB"),(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},"R1"),(0,r.kt)("td",{parentName:"tr",align:null},"R1"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"P3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2"),(0,r.kt)("td",{parentName:"tr",align:null},"LT"),(0,r.kt)("td",{parentName:"tr",align:null},"ZL"),(0,r.kt)("td",{parentName:"tr",align:null},"L2"),(0,r.kt)("td",{parentName:"tr",align:null},"L2"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"K4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"R2"),(0,r.kt)("td",{parentName:"tr",align:null},"RT"),(0,r.kt)("td",{parentName:"tr",align:null},"ZR"),(0,r.kt)("td",{parentName:"tr",align:null},"R2"),(0,r.kt)("td",{parentName:"tr",align:null},"R2"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"K3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S1"),(0,r.kt)("td",{parentName:"tr",align:null},"Back"),(0,r.kt)("td",{parentName:"tr",align:null},"Minus"),(0,r.kt)("td",{parentName:"tr",align:null},"Share"),(0,r.kt)("td",{parentName:"tr",align:null},"Select"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S2"),(0,r.kt)("td",{parentName:"tr",align:null},"Start"),(0,r.kt)("td",{parentName:"tr",align:null},"Plus"),(0,r.kt)("td",{parentName:"tr",align:null},"Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Start"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L3"),(0,r.kt)("td",{parentName:"tr",align:null},"LS"),(0,r.kt)("td",{parentName:"tr",align:null},"LS"),(0,r.kt)("td",{parentName:"tr",align:null},"L3"),(0,r.kt)("td",{parentName:"tr",align:null},"L3"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"LS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"R3"),(0,r.kt)("td",{parentName:"tr",align:null},"RS"),(0,r.kt)("td",{parentName:"tr",align:null},"RS"),(0,r.kt)("td",{parentName:"tr",align:null},"R3"),(0,r.kt)("td",{parentName:"tr",align:null},"R3"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"RS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A1"),(0,r.kt)("td",{parentName:"tr",align:null},"Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Home"),(0,r.kt)("td",{parentName:"tr",align:null},"PS"),(0,r.kt)("td",{parentName:"tr",align:null},"PS"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Home")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture"),(0,r.kt)("td",{parentName:"tr",align:null},"Touchpad"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0},1114:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/gpc-add-ons-extra-button-4ce1e3f4c4850ef9795ae02db42b4367.png"}}]);