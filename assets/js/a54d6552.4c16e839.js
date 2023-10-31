"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(4334);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(7462),o=n(7294),r=n(4334),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=m({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??d;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function P(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},7131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4830),l=n(6191);const i={title:"PS Passthrough",tags:["PS4","PS5"],pagination_next:null,pagination_prev:null,description:"Add-on to provide Playstation 4 and select Playstation 5 games on a GP2040 controller through the use of a passthrough authentication device attached to a USB host port"},s="PS Passthrough",u={unversionedId:"add-ons/ps-passthrough",id:"add-ons/ps-passthrough",title:"PS Passthrough",description:"Add-on to provide Playstation 4 and select Playstation 5 games on a GP2040 controller through the use of a passthrough authentication device attached to a USB host port",source:"@site/docs/add-ons/ps-passthrough.mdx",sourceDirName:"add-ons",slug:"/add-ons/ps-passthrough",permalink:"/docusaurus-test/add-ons/ps-passthrough",draft:!1,tags:[{label:"PS4",permalink:"/docusaurus-test/tags/ps-4"},{label:"PS5",permalink:"/docusaurus-test/tags/ps-5"}],version:"current",frontMatter:{title:"PS Passthrough",tags:["PS4","PS5"],pagination_next:null,pagination_prev:null,description:"Add-on to provide Playstation 4 and select Playstation 5 games on a GP2040 controller through the use of a passthrough authentication device attached to a USB host port"},sidebar:"webConfigSidebar"},c={},d=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ps-passthrough"},"PS Passthrough"),(0,o.kt)("p",null,'Purpose: This add-on is intended to allow you to use a licensed 3rd party, "categorized" device to authenticate with a Playstation 4 or Playstation 5.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GP2040-CE Configurator - PS Passthrough",src:n(7461).Z,width:"876",height:"246"})),(0,o.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,o.kt)(r.ZP,{mdxType:"PinOption"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you have PS Passthrough enabled, you must turn off the ",(0,o.kt)("inlineCode",{parentName:"p"},"PS4 Mode")," add-on as the two will not work together."),(0,o.kt)("p",{parentName:"admonition"},"Ensure that under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," section you have chosen the PS4 for the input mode in order to use the GP2040-CE device as a controller or as a fightstick.")),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"This add-on requires that you have something like the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenStickCommunity/Hardware/tree/main/USB%20Passthrough%20Board"},"USB Passthrough Board")," or a board with a USB passthrough port on it already."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)(l.ZP,{mdxType:"InstallUSBHostPort"}),(0,o.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,o.kt)("p",null,"This add-on is not compatible with the ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-test/add-ons/ps-passthrough"},"PS4 Mode")," add-on. In order to use one, the other must be disabled."))}m.isMDXComponent=!0},6191:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);n(4830);const i={toc:[{value:"Example Wiring",id:"example-wiring",level:3},{value:"Example Wiring",id:"example-wiring-1",level:3}]},s="wrapper";function u(e){let{components:t,...u}=e;return(0,o.kt)(s,(0,a.Z)({},i,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{groupId:"boards",defaultValue:"Generic USB Host Port",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Generic USB Host Port",label:"Generic USB 2.0 Host Port",default:!0,mdxType:"TabItem"},(0,o.kt)("h3",{id:"example-wiring"},"Example Wiring"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"USB Host Wiring Diagram",src:n(6800).Z,width:"854",height:"540"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VCC")," - Connects to 5V power (Example: VBUS on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D+")," - Connects to the ",(0,o.kt)("inlineCode",{parentName:"li"},"D+")," GPIO Pin above, set in the Web Configurator. (Example: GPIO0 on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D-")," - Connects to the ",(0,o.kt)("inlineCode",{parentName:"li"},"D-")," GPIO Pin above, automatically set based on D+. (Example: GPIO1 on the Raspberry Pi Pico)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GND")," - Connects to a ground pin, any ",(0,o.kt)("inlineCode",{parentName:"li"},"GND")," pin will work. (Example: GND on the Raspberry Pi Pico)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"D+")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"D-"),", any set of GPIO pins can be used from the RP2040. However, there is a requirement that ",(0,o.kt)("inlineCode",{parentName:"p"},"D-")," GPIO must immediately follow ",(0,o.kt)("inlineCode",{parentName:"p"},"D+"),"."))),(0,o.kt)(l.Z,{value:"USB Passthrough Board",label:"USB Passthrough Board",default:!0,mdxType:"TabItem"},(0,o.kt)("h3",{id:"example-wiring-1"},"Example Wiring"),(0,o.kt)("p",null,"Step 1: Take the USB passthrough board and place it on a clean surface."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 2: Take one of the cables and place it on a clean surface."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The cables are JST 2.00mm 2pin same direction cables that are 10cm (100mm) in length. They can be made by hand or purchased directly from a variety of sellers on AliExpress. If you plan on installing the USB passthrough board somewhere else in your case you may want to get longer cables. For this install guide you will need three of the cables.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 3: Connect one end of the first JST 2.00mm 2pin cable into the socket labeled 5V IN on the USB passthrough board."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The direction of the cable does not matter as they are all same direction cables.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 4: Connect the other end of the first JST 2.00mm 2pin cable to the socket labeled 5v OUT on the RP2040 Advanced Breakout Board."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 5: Connect one end of the second JST 2.00mm 2pin cable into the socket labeled D+ OUT on the USB passthrough board."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 6: Connect the other end of the second JST 2.00mm 2pin cable to the socket labeled OPTION 5 on the RP2040 Advanced Breakout Board."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can use other option sockets for this as well, but for the sake of this installation guide we will be using Option 5 and Option 6.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 7: Connect one end of the third JST 2.00mm 2pin cable into the socket labeled D- OUT on the USB passthrough board."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step 8: Connect the other end of the third JST 2.00mm 2pin cable to the socket labeled OPTION 6 on the RP2040 Advanced Breakout Board."))))}u.isMDXComponent=!0},4830:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D+")," - The GPIO Pin used to carry Data Plus between the USB Host Port and RP2040"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D-")," - The GPIO Pin used to carry Data Minus between the USB Host Port and RP2040. This cannot be set and will be automatically determined from ",(0,o.kt)("inlineCode",{parentName:"li"},"D+"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"5V Power (optional)")," - The GPIO Pin used to enable 5V power to the host port on the board.")),(0,o.kt)("admonition",{title:"5V Power",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is only applicable to a small number of boards (e.g. Adafruit RP2040 Feather USB Host) and most boards do not require this to be set.")))}i.isMDXComponent=!0},6800:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-example-wiring-diagram-usb-host-port-d6c0cbd3372cb8da21be5486e505fdbd.png"},7461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-ps-passthrough-31afc039be6583212d2dfbb78d2d587f.png"}}]);