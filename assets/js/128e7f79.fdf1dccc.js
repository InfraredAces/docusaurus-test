"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={title:"Tilt Input",pagination_next:null,pagination_prev:null},l="Tilt Input",r={unversionedId:"add-ons/tilt-input",id:"add-ons/tilt-input",title:"Tilt Input",description:"Purpose: The Tilt Input add-on allows users to send analog inputs from the Left and Right analog joysticks that are some percent of the maximum directional input (e.g. send 65% of a Down-Right input on the Right analog joystick).",source:"@site/docs/add-ons/tilt-input.mdx",sourceDirName:"add-ons",slug:"/add-ons/tilt-input",permalink:"/docusaurus-test/add-ons/tilt-input",draft:!1,tags:[],version:"current",frontMatter:{title:"Tilt Input",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},s={},p=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tilt-input"},"Tilt Input"),(0,a.kt)("p",null,"Purpose: The Tilt Input add-on allows users to send analog inputs from the Left and Right analog joysticks that are some percent of the maximum directional input (e.g. send 65% of a Down-Right input on the Right analog joystick)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GP2040-CE Configuration - Add-Ons Tilt Input",src:n(9008).Z,width:"1056",height:"780"})),(0,a.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," - The GPIO pin used for the Tilt 1 direction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left X")," - The percentage of the X-axis input for the Left analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left Y")," - The percentage of the Y-axis input for the Left analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left X")," - The percentage of the X-axis input for the Right analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left Y")," - The percentage of the Y-axis input for the Right analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," - The GPIO pin used for the Tilt 2 direction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left X")," - The percentage of the X-axis input for the Left analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left Y")," - The percentage of the Y-axis input for the Left analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left X")," - The percentage of the X-axis input for the Right analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left Y")," - The percentage of the Y-axis input for the Right analog joystick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Up Pin")," - The GPIO pin used for the Up direction on the Left analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Down Pin")," - The GPIO pin used for the Down direction on the Left analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Left Pin")," - The GPIO pin used for the Left direction on the Left analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Right Pin")," - The GPIO pin used for the Right direction on the Left analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Up Pin")," - The GPIO pin used for the Up direction on the Right analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Down Pin")," - The GPIO pin used for the Down direction on the Right analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Left Pin")," - The GPIO pin used for the Left direction on the Right analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Right Pin")," - The GPIO pin used for the Right direction on the Right analog joystick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt SOCD Mode")," - Choose the default SOCD Cleaning Mode (Neutral, Last Win, First Win).")),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"This add-on requires additional buttons or switches as this add-on entirely prevents the primary DPad from being set as the Left analog or Right analog joystick."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"For each button, connect one side of the button to their respective GPIO pin as assigned in the Web Configurator. Connect the other side of the buttons to GND."),(0,a.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because this add-on disables the DPad from being set as Left analog and Right analog, using the hotkeys ",(0,a.kt)("inlineCode",{parentName:"li"},"DPad Left Analog")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DPad Right Analog")," deactivates the DPad and using the ",(0,a.kt)("inlineCode",{parentName:"li"},"DPad Digital")," will reactivate the DPad once more."),(0,a.kt)("li",{parentName:"ul"},"Not all Tilt analog pins are required to be set, but not setting the pins will prevent you from using that input without using the Web Configurator to remap the inputs."),(0,a.kt)("li",{parentName:"ul"},"Additionally, pressing Tilt 1 and Tilt 2 simultaneously while inputting Right analog joystick directions allows the Right analog joystick to function as the D-Pad directions."),(0,a.kt)("li",{parentName:"ul"},"Pressing Tilt 1 and Tilt 2 simultaneously while inputting Left analog joystick will prioritize Tilt 1 and ignore Tilt 2.")))}c.isMDXComponent=!0},9008:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gpc-add-ons-tilt-bc728e2c2261d5a51002cc80b5bb92de.png"}}]);