"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5354],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,g=m["".concat(d,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3795:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"I2C Analog ADS1219",pagination_next:null,pagination_prev:null,description:"Add-on to use an ADS1219 ADC for Left and Right analog joysticks on your controller"},i="I2C Analog ADS1219",o={unversionedId:"add-ons/i2c-analog-ads1219",id:"add-ons/i2c-analog-ads1219",title:"I2C Analog ADS1219",description:"Add-on to use an ADS1219 ADC for Left and Right analog joysticks on your controller",source:"@site/docs/add-ons/i2c-analog-ads1219.mdx",sourceDirName:"add-ons",slug:"/add-ons/i2c-analog-ads1219",permalink:"/docusaurus-test/add-ons/i2c-analog-ads1219",draft:!1,tags:[],version:"current",frontMatter:{title:"I2C Analog ADS1219",pagination_next:null,pagination_prev:null,description:"Add-on to use an ADS1219 ADC for Left and Right analog joysticks on your controller"},sidebar:"webConfigSidebar"},d={},p=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],c={toc:p},m="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i2c-analog-ads1219"},"I2C Analog ADS1219"),(0,r.kt)("p",null,"Purpose: This add-on is intended to allow you to add Left and Right analog joystick functionality using the ADS1219 24-bit, analog-to-digital\nconverter (ADC)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE Configurator - Add-Ons ADS1219",src:n(1471).Z,width:"808",height:"320"})),(0,r.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I2C Analog ADS1219 SDA Pin")," - The GPIO pin used for I2C Analog ADS1219 SDA."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I2C Analog ADS1219 SCL Pin")," - The GPIO pin used for I2C Analog ADS1219 SCL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I2C Analog ADS1219 Block")," - The block of I2C to use (i2c0 or i2c1)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I2C Analog ADS1219 Speed")," - Sets the speed of I2C communication. Common values are ",(0,r.kt)("inlineCode",{parentName:"li"},"100000")," for standard, ",(0,r.kt)("inlineCode",{parentName:"li"},"400000")," for fast and ",(0,r.kt)("inlineCode",{parentName:"li"},"800000")," ludicrous speed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I2C Analog ADS1219 Address")," - Sets the address for the I2C Analog ADS1219 based on the pins used for SDA and SCL according to the table below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"A0"),(0,r.kt)("th",{parentName:"tr",align:null},"A1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"I2C Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1001110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1001011")))),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This add-on requires an ADS1219 analog-to-digital converter (ADC) to function properly."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Connect the pins on the ADS1219 according to the table below"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ADS1219 Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"A0"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA or SCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"A1"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA or SCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AIN0"),(0,r.kt)("td",{parentName:"tr",align:null},"Left analog joystick X-Axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AIN1"),(0,r.kt)("td",{parentName:"tr",align:null},"Left analog joystick Y-Axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AIN2"),(0,r.kt)("td",{parentName:"tr",align:null},"Right analog joystick X-Axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AIN3"),(0,r.kt)("td",{parentName:"tr",align:null},"Right analog joystick Y-Axis")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"A0/A1 GPIO Assignment",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These pins will need to be wired to the appropriate SDA/SCL pins on the RP2040 and set the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"I2C Analog ADS1219 Block")," in Web Configurator. See the table below."),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"SDA"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SCL"),(0,r.kt)("th",{parentName:"tr",align:null},"I2C Block"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SDA"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SCL"),(0,r.kt)("th",{parentName:"tr",align:null},"I2C Block"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 1"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 3"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 5"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 7"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 9"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 11"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 13"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 14"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 15"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 17"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 18"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 19"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 21"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 22"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 23"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 24"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 25"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 26"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 27"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 28"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GPIO 29"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,r.kt)("p",null,"These installation instructions do not cover the additional circuitry required for the use of the ADS1219 ADC, only the wiring to the RP2040."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ti.com/lit/ds/symlink/ads1219.pdf"},"ADS1219 Product Sheet")))}k.isMDXComponent=!0},1471:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-ads1219-6431e9bee180ceed7f7edf66a3821406.png"}}]);