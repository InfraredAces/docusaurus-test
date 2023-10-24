"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(1331),i=n(2099);const l={title:"Keyboard Host Configuration",pagination_next:null,pagination_prev:null},s="Keyboard Host Configuration",p={unversionedId:"add-ons/keyboard-host",id:"version-0.7.5/add-ons/keyboard-host",title:"Keyboard Host Configuration",description:"GP2040-CE Configurator - Keyboard Host Configuration",source:"@site/versioned_docs/version-0.7.5/add-ons/keyboard-host.mdx",sourceDirName:"add-ons",slug:"/add-ons/keyboard-host",permalink:"/docusaurus-test/add-ons/keyboard-host",draft:!1,tags:[],version:"0.7.5",frontMatter:{title:"Keyboard Host Configuration",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},d={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Example Wiring Diagram",id:"example-wiring-diagram",level:3}],c={toc:u},m="wrapper";function b(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboard-host-configuration"},"Keyboard Host Configuration"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GP2040-CE Configurator - Keyboard Host Configuration",src:n(2525).Z,width:"1052",height:"1119"})),(0,o.kt)(a.ZP,{mdxType:"PinOption"}),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null," This add-on requires that you have something like the ",(0,o.kt)("img",{parentName:"p",src:"https://github.com/OpenStickCommunity/Hardware/tree/main/USB%20Passthrough%20Board",alt:"USB Passthrough Board"})," or a board with a USB passthrough port on it already.  "),(0,o.kt)("h3",{id:"example-wiring-diagram"},"Example Wiring Diagram"),(0,o.kt)(i.ZP,{mdxType:"ExampleWiringDiagram"}))}b.isMDXComponent=!0},2099:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...l}=e;return(0,o.kt)(i,(0,r.Z)({},a,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"USB Host Wiring Diagram",src:n(4974).Z,width:"854",height:"540"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VCC")," - Connects to 5V power (Example: VBUS on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D+")," - Connects to the ",(0,o.kt)("inlineCode",{parentName:"li"},"D+")," GPIO Pin above, set in the Web Configurator. (Example: GPIO0 on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D-")," - Connects to the ",(0,o.kt)("inlineCode",{parentName:"li"},"D-")," GPIO Pin above, automatically set based on D+. (Example: GPIO1 on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GND")," - Connects to a ground pin, any ",(0,o.kt)("inlineCode",{parentName:"li"},"GND")," pin will work. (Example: GND on the Raspberry Pi Pico)")))}l.isMDXComponent=!0},1331:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D+")," - The GPIO Pin used to carry Data Plus between the USB Host Port and RP2040"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D-")," - The GPIO Pin used to carry Data Minus between the USB Host Port and RP2040. This cannot be set and will be automatically determined from ",(0,o.kt)("inlineCode",{parentName:"li"},"D+"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"5V Power (optional)")," - The GPIO Pin used to enable 5V power to the host port on the board. This is only applicable to a small number of boards (e.g. Adafruit RP2040 Feather USB Host) and most boards do not require this to be set.")))}l.isMDXComponent=!0},4974:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpc-add-ons-keyboard-host-configuration-wiring-diagram-d6c0cbd3372cb8da21be5486e505fdbd.png"},2525:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpc-add-ons-keyboard-host-configuration-d11b5bf6ddfb53795e50968be4a32bd0.png"}}]);