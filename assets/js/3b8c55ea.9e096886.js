"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Firmware Installation",pagination_next:null,pagination_prev:null},i="Firmware Installation",l={unversionedId:"installation",id:"installation",title:"Firmware Installation",description:"General Process",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docusaurus-test/next/installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Firmware Installation",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},s={},p=[{value:"General Process",id:"general-process",level:2},{value:"Example Process (Raspberry Pi Pico)",id:"example-process-raspberry-pi-pico",level:3},{value:"Flash Nuke process",id:"flash-nuke-process",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firmware-installation"},"Firmware Installation"),(0,a.kt)("h2",{id:"general-process"},"General Process"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the device has been previously used for something other than GP2040-CE, you will need to follow the ",(0,a.kt)("a",{parentName:"p",href:"#flash-nuke-process"},"Flash Nuke Process")," below first to clear the memory entirely in preparation for installing GP2040-CE.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the compiled firmware (.uf2 file) for your device"),(0,a.kt)("li",{parentName:"ol"},"Unplug your device."),(0,a.kt)("li",{parentName:"ol"},"Put your device into Bootsel/USB mode. A new removable drive named ",(0,a.kt)("inlineCode",{parentName:"li"},"RPI-RP2")," should appear in your file explorer."),(0,a.kt)("li",{parentName:"ol"},"Drag and drop the compiled firmware (.uf2 file) downloaded in step 1 into the removable drive"),(0,a.kt)("li",{parentName:"ol"},"Wait for the device to automatically disconnect.")),(0,a.kt)("p",null,"Congratulations! The board is now running the GP2040-CE firmware and will appear as a controller on your computer. You can test it in a game, using the website like ",(0,a.kt)("a",{parentName:"p",href:"https://gamepad-tester.com/"},"Gamepad Tester"),", or in another application such as the Steam Input Overlay."),(0,a.kt)("p",null,"If you would like to customize your device, check out the built-in ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus-test/next/web-configurator"},"Web Configurator"),"."),(0,a.kt)("h3",{id:"example-process-raspberry-pi-pico"},"Example Process (Raspberry Pi Pico)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The instructions will slightly vary based on your device. These instructions are for a Raspberry Pi Pico.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"GP2040-CE_X.X.X_Pico.uf2")," file for the Raspberry Pi Pico from the ",(0,a.kt)("a",{parentName:"li",href:"/docusaurus-test/next/downloads/download-page"},"Download")," page."),(0,a.kt)("li",{parentName:"ol"},"Unplug your Pico."),(0,a.kt)("li",{parentName:"ol"},"Hold the BOOTSEL button on the Pico and plug into your computer."),(0,a.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,a.kt)("inlineCode",{parentName:"li"},"GP2040-CE_X.X.X_Pico.uf2")," file into the removable drive."),(0,a.kt)("li",{parentName:"ol"},"Wait for the Pico to automatically disconnect.")),(0,a.kt)("h2",{id:"flash-nuke-process"},"Flash Nuke process"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Warning")," - Flash nuking your board wipes all your custom configuration for pin mappings and addons.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/docs/downloads/flash_nuke.uf2"},"flash_nuke.uf2 file")),(0,a.kt)("li",{parentName:"ol"},"Boot into bootsel/RPI drive (multiple methods to do so)"),(0,a.kt)("li",{parentName:"ol"},"Drag ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/docs/downloads/flash_nuke.uf2"},"flash_nuke.uf2 file")," onto the drive"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Wait for the drive to disconnect and reconnect without unplugging"))),(0,a.kt)("li",{parentName:"ol"},"Drag your firmware onto the RPI drive and wait for disconnect"),(0,a.kt)("li",{parentName:"ol"},"Check that the controller connects using this ",(0,a.kt)("a",{parentName:"li",href:"https://hardwaretester.com/gamepad"},"gamepad tester")," and pressing a button.")))}m.isMDXComponent=!0}}]);