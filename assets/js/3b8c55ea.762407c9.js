"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Firmware Installation",pagination_next:null,pagination_prev:null},i="Firmware Installation",l={unversionedId:"installation",id:"installation",title:"Firmware Installation",description:"General Process",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/next/installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Firmware Installation",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},p={},s=[{value:"General Process",id:"general-process",level:2},{value:"Example Process (Raspberry Pi Pico)",id:"example-process-raspberry-pi-pico",level:3},{value:"Flash Nuke process",id:"flash-nuke-process",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firmware-installation"},"Firmware Installation"),(0,a.kt)("h2",{id:"general-process"},"General Process"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the device has been previously used for something other than GP2040-CE, you will need to follow the ",(0,a.kt)("a",{parentName:"p",href:"#flash-nuke-process"},"Flash Nuke Process")," below first to clear the memory entirely in preparation for installing GP2040-CE.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the compiled firmware (.uf2 file) for your device"),(0,a.kt)("li",{parentName:"ol"},"Unplug your device."),(0,a.kt)("li",{parentName:"ol"},"Put your device into Bootsel/USB mode. A new removable drive named ",(0,a.kt)("inlineCode",{parentName:"li"},"RPI-RP2")," should appear in your file explorer."),(0,a.kt)("li",{parentName:"ol"},"Drag and Drag and drop the compiled firmware (.uf2 file) downloaded in step 1 into the removable drive"),(0,a.kt)("li",{parentName:"ol"},"Wait for the device to automatically disconnect.")),(0,a.kt)("p",null,"Congratulations! The board is now running the GP2040-CE firmware and will appear as a controller on your computer. You can test it in a game, using the website like ",(0,a.kt)("a",{parentName:"p",href:"https://gamepad-tester.com/"},"Gamepad Tester"),", or in another application such as the Steam Input Overlay."),(0,a.kt)("p",null,"If you would like to customize your device, check out the built-in ",(0,a.kt)("a",{parentName:"p",href:"/next/web-configurator"},"Web Configurator"),"."),(0,a.kt)("h3",{id:"example-process-raspberry-pi-pico"},"Example Process (Raspberry Pi Pico)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The instructions will slightly vary based on your device. These instructions are for a Raspberry Pi Pico.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"GP2040-CE_X.X.X_Pico.uf2")," file for the Raspberry Pi Pico from the ",(0,a.kt)("a",{parentName:"li",href:"/next/downloads/download-page"},"Download")," page."),(0,a.kt)("li",{parentName:"ol"},"Unplug your Pico."),(0,a.kt)("li",{parentName:"ol"},"Hold the BOOTSEL button on the Pico and plug into your computer."),(0,a.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,a.kt)("inlineCode",{parentName:"li"},"GP2040-CE_X.X.X_Pico.uf2")," file into the removable drive."),(0,a.kt)("li",{parentName:"ol"},"Wait for the Pico to automatically disconnect.")),(0,a.kt)("h2",{id:"flash-nuke-process"},"Flash Nuke process"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Warning")," - Flash nuking your board wipes all your custom configuration for pin mappings and addons.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/docs/downloads/flash_nuke.uf2"},"flash_nuke.uf2 file")),(0,a.kt)("li",{parentName:"ol"},"Boot into bootsel/RPI drive (multiple methods to do so)"),(0,a.kt)("li",{parentName:"ol"},"Drag ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/docs/downloads/flash_nuke.uf2"},"flash_nuke.uf2 file")," onto the drive"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Wait for the drive to disconnect and reconnect without unplugging"))),(0,a.kt)("li",{parentName:"ol"},"Drag your firmware onto the RPI drive and wait for disconnect"),(0,a.kt)("li",{parentName:"ol"},"Check that the controller connects using this ",(0,a.kt)("a",{parentName:"li",href:"https://hardwaretester.com/gamepad"},"gamepad tester")," and pressing a button.")))}m.isMDXComponent=!0}}]);