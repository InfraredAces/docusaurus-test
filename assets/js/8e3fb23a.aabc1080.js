"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9531],{6770:(t,e,a)=>{a.d(e,{q:()=>m,Z:()=>u});var n=a(7294),l=a(4740);const r={labelSelector:"labelSelector_RmTm"},o="SelectedInputLabel";"undefined"!=typeof window&&window;const i=[{value:"GP2040",label:"GP2040"},{value:"XInput",label:"XInput"},{value:"DirectInput",label:"DirectInput"},{value:"Nintendo Switch",label:"Nintendo Switch"},{value:"PS3",label:"PS3"},{value:"PS4",label:"PS4"},{value:"Arcade",label:"Arcade"}],d={GP2040:{name:"GP2040",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B1",B2:"B2",B3:"B3",B4:"B4",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"S1",S2:"S2",L3:"L3",R3:"R3",A1:"A1",A2:"A2"},XInput:{name:"XInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"A",B2:"B",B3:"X",B4:"Y",L1:"LB",R1:"RB",L2:"LT",R2:"RT",S1:"Back",S2:"Start",L3:"LS",R3:"RS",A1:"Guide",A2:"(A2)"},DirectInput:{name:"DirectInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"2",B2:"3",B3:"1",B4:"4",L1:"5",R1:"6",L2:"7",R2:"8",S1:"9",S2:"10",L3:"11",R3:"12",A1:"13",A2:"14"},"Nintendo Switch":{name:"Nintendo Switch",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B",B2:"A",B3:"Y",B4:"X",L1:"L",R1:"R",L2:"ZL",R2:"ZR",S1:"Minus",S2:"Plus",L3:"LS",R3:"RS",A1:"Home",A2:"Capture"},PS4:{name:"PS4",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Share",S2:"Options",L3:"L3",R3:"R3",A1:"PS",A2:"Touchpad"},PS3:{name:"PS3",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Select",S2:"Start",L3:"L3",R3:"R3",A1:"PS",A2:"(A2)"},Arcade:{name:"Arcade",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"K1",B2:"K2",B3:"P1",B4:"P2",L1:"P4",R1:"P3",L2:"K4",R2:"K3",S1:"Select",S2:"Start",L3:"LS",R3:"RS",A1:"Home",A2:"(A2)"}},p={option:(t,e)=>{let{data:a,isDisabled:n,isSelected:l}=e;return{...t,color:n?"#ccc":l?"white":"black",":active":{...t[":active"],backgroundColor:n?void 0:l?a.color:0}}}};function u(){const[t,e]=(0,n.useState)("");return(0,n.useEffect)((()=>{if("undefined"!=typeof window){const t=JSON.parse(localStorage.getItem(o)??"[]");e(t)}}),[]),n.createElement(l.ZP,{value:t,className:r.labelSelector,options:i,onChange:t=>{"undefined"!=typeof window&&(localStorage.setItem(o,JSON.stringify(t)),window.dispatchEvent(new Event("inputLabelChange"))),e(t)},styles:p})}function m(t){const[e,a]=(0,n.useState)(null);var l={value:"GP2040",label:"GP2040"};"undefined"!=typeof window&&(l=JSON.parse(localStorage.getItem(o)));const r=()=>{let e="";return t.buttons.forEach((function(t,a,n){let r=d[l.value][t];a===n.length-1?e+=r:e+=r+" + "})),e};return(0,n.useEffect)((()=>(a(r()),window.addEventListener("inputLabelChange",(()=>{"undefined"!=typeof window&&(l=JSON.parse(localStorage.getItem(o)));let t=r();a(t)})),()=>window.removeEventListener("inputLabelChange",a)))),n.createElement("code",null,e)}},332:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(6770);const o={title:"GP2040-CE Usage",pagination_next:null,pagination_prev:null},i="GP2040-CE Usage",d={unversionedId:"usage",id:"version-0.7.5/usage",title:"GP2040-CE Usage",description:"Select the button labels to be displayed in the usage guide:",source:"@site/versioned_docs/version-0.7.5/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/docusaurus-test/usage",draft:!1,tags:[],version:"0.7.5",frontMatter:{title:"GP2040-CE Usage",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},p={},u=[{value:"Buttons",id:"buttons",level:2},{value:"Bootsel Mode",id:"bootsel-mode",level:2},{value:"Webconfig Mode",id:"webconfig-mode",level:2},{value:"Input Modes",id:"input-modes",level:2},{value:"Hotkeys",id:"hotkeys",level:2},{value:"Add-Ons and Additional Features",id:"add-ons-and-additional-features",level:2}],m={toc:u},k="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gp2040-ce-usage"},"GP2040-CE Usage"),(0,l.kt)("p",null,"Select the button labels to be displayed in the usage guide: "),(0,l.kt)(r.Z,{mdxType:"InputLabelSelector"}),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The v0.5+ release has some breaking changes to boards other than the Raspberry Pi Pico. If you are using such a board, do not update from an older version unless you have a backup .uf2 from a known good version, or you know what you're doing.")),(0,l.kt)("h2",{id:"buttons"},"Buttons"),(0,l.kt)("p",null,"GP2040-CE uses generic button labeling for gamepad state, which is then converted to the appropriate input type before sending. This table provides a map of GP2040-CE buttons to the supported input types and layouts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"GP2040-CE"),(0,l.kt)("th",{parentName:"tr",align:null},"XInput"),(0,l.kt)("th",{parentName:"tr",align:null},"Switch"),(0,l.kt)("th",{parentName:"tr",align:null},"PS4"),(0,l.kt)("th",{parentName:"tr",align:null},"PS3"),(0,l.kt)("th",{parentName:"tr",align:null},"DirectInput"),(0,l.kt)("th",{parentName:"tr",align:null},"Arcade"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B1"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"K1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B2"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"Circle"),(0,l.kt)("td",{parentName:"tr",align:null},"Circle"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"K2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B3"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Square"),(0,l.kt)("td",{parentName:"tr",align:null},"Square"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"P1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B4"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"Triangle"),(0,l.kt)("td",{parentName:"tr",align:null},"Triangle"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"P2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L1"),(0,l.kt)("td",{parentName:"tr",align:null},"LB"),(0,l.kt)("td",{parentName:"tr",align:null},"L"),(0,l.kt)("td",{parentName:"tr",align:null},"L1"),(0,l.kt)("td",{parentName:"tr",align:null},"L1"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"P4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"R1"),(0,l.kt)("td",{parentName:"tr",align:null},"RB"),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},"R1"),(0,l.kt)("td",{parentName:"tr",align:null},"R1"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"P3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L2"),(0,l.kt)("td",{parentName:"tr",align:null},"LT"),(0,l.kt)("td",{parentName:"tr",align:null},"ZL"),(0,l.kt)("td",{parentName:"tr",align:null},"L2"),(0,l.kt)("td",{parentName:"tr",align:null},"L2"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"K4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"R2"),(0,l.kt)("td",{parentName:"tr",align:null},"RT"),(0,l.kt)("td",{parentName:"tr",align:null},"ZR"),(0,l.kt)("td",{parentName:"tr",align:null},"R2"),(0,l.kt)("td",{parentName:"tr",align:null},"R2"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"K3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S1"),(0,l.kt)("td",{parentName:"tr",align:null},"Back"),(0,l.kt)("td",{parentName:"tr",align:null},"Minus"),(0,l.kt)("td",{parentName:"tr",align:null},"Share"),(0,l.kt)("td",{parentName:"tr",align:null},"Select"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Coin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S2"),(0,l.kt)("td",{parentName:"tr",align:null},"Start"),(0,l.kt)("td",{parentName:"tr",align:null},"Plus"),(0,l.kt)("td",{parentName:"tr",align:null},"Options"),(0,l.kt)("td",{parentName:"tr",align:null},"Start"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Start")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L3"),(0,l.kt)("td",{parentName:"tr",align:null},"LS"),(0,l.kt)("td",{parentName:"tr",align:null},"LS"),(0,l.kt)("td",{parentName:"tr",align:null},"L3"),(0,l.kt)("td",{parentName:"tr",align:null},"L3"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"LS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"R3"),(0,l.kt)("td",{parentName:"tr",align:null},"RS"),(0,l.kt)("td",{parentName:"tr",align:null},"RS"),(0,l.kt)("td",{parentName:"tr",align:null},"R3"),(0,l.kt)("td",{parentName:"tr",align:null},"R3"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"RS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A1"),(0,l.kt)("td",{parentName:"tr",align:null},"Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Home"),(0,l.kt)("td",{parentName:"tr",align:null},"PS"),(0,l.kt)("td",{parentName:"tr",align:null},"PS"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"Home")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A2"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Capture"),(0,l.kt)("td",{parentName:"tr",align:null},"Touchpad"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"If your controller is missing dedicated buttons for any specific inputs, check the ",(0,l.kt)("a",{parentName:"p",href:"/docusaurus-test/hotkeys"},"Hotkeys page")," on how to map a button combination that will emulate those missing inputs."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Unlike other controllers, Keyboard gets different keys for directional buttons. You can change the key mappings for Keyboard mode in ",(0,l.kt)("a",{parentName:"p",href:"/docusaurus-test/web-configurator#keyboard-mapping"},"Webconfig mode > Configuration > Keyboard Mapping"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Keyboard"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Up"),(0,l.kt)("td",{parentName:"tr",align:null},"Up Arrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Down Arrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Left"),(0,l.kt)("td",{parentName:"tr",align:null},"Left Arrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Right"),(0,l.kt)("td",{parentName:"tr",align:null},"Right Arrow")))),(0,l.kt)("h2",{id:"bootsel-mode"},"Bootsel Mode"),(0,l.kt)("p",null,"Bootsel Mode is the state of the board where firmware can be flashed onto the board. You will need to use this whenever there is an update or as part of the troubleshooting process."),(0,l.kt)("p",null,"You can boot into Bootsel Mode by either holding ",(0,l.kt)(r.q,{buttons:["S1","S2","Up"],mdxType:"Hotkey"})," buttons while plugging in the controller or by booting into the Web Configurator and then restarting in Bootsel Mode."),(0,l.kt)("h2",{id:"webconfig-mode"},"Webconfig Mode"),(0,l.kt)("p",null,"Webconfig Mode is the state of the board where built-in web browser-based configuration application is launched. From here, you can customize and configure your controller as needed."),(0,l.kt)("p",null,"You can boot into Webconfig Mode by holding the ",(0,l.kt)(r.q,{buttons:["S2"],mdxType:"Hotkey"})," button while plugging in the controller."),(0,l.kt)("h2",{id:"input-modes"},"Input Modes"),(0,l.kt)("p",null,"GP2040-CE is compatible with a number of systems and input modes. To change the input mode, ",(0,l.kt)("strong",{parentName:"p"},"hold one of the following buttons as the controller is plugged in:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Input Mode"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Button Held"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Nintendo Switch"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)(r.q,{buttons:["B1"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"XInput"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)(r.q,{buttons:["B2"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DirectInput/PS3"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)(r.q,{buttons:["B2"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PS4"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)(r.q,{buttons:["B4"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Keyboard"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)(r.q,{buttons:["R2"],mdxType:"Hotkey"}))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Input mode is saved across power cycles.")),(0,l.kt)("h2",{id:"hotkeys"},"Hotkeys"),(0,l.kt)("p",null,"A number of useful hotkeys exist that change the functionality of GP2040 without needing to access the Web Configurator. Commonly used hotkeys include changing the directions to emulate a digital DPad, Left Analog Stick, Right Analog Stick or to change ",(0,l.kt)("a",{parentName:"p",href:"https://glossary.infil.net/?t=SOCD"},"Simultaneous Opposite Cardinal Direction (SOCD)")," cleaning modes. Different SOCD cleaning modes will ensure the controller obeys certain directional input rules when sending inputs to the computer or game console."),(0,l.kt)("p",null,"A number of hotkeys are enabled by default and if you are encountering issues with unexpected behavior on your controller, verify that you did not accidentally trigger a hotkey."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Hotkeys Enabled By Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Inputs"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#home-button"},"Home Button")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S1","S2","Up"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#dpad-digital"},"Dpad Digital")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S1","S2","Down"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#dpad-left-analog"},"Dpad Left Analog")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S1","S2","Left"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#dpad-right-analog"},"Dpad Right Analog")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S2","A1","Right"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#socd-up-priority"},"SOCD Up Priority")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S2","A1","Up"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#socd-neutral"},"SOCD Neutral")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S2","A1","Down"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#socd-last-win"},"SOCD Last Wins")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S2","A1","Left"],mdxType:"Hotkey"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docusaurus-test/hotkeys#invert-y-axis"},"SOCD Invert Y Axis")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(r.q,{buttons:["S2","A1","Right"],mdxType:"Hotkey"}))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Selected D-Pad mode and SOCD cleaning mode are saved across power cycles.")),(0,l.kt)("h2",{id:"add-ons-and-additional-features"},"Add-Ons and Additional Features"),(0,l.kt)("p",null,"There are a number of add-ons that expand the functionality of GP2040-CE, such as ",(0,l.kt)("a",{parentName:"p",href:"./add-ons/analog"},"analog stick emulation")," and ",(0,l.kt)("a",{parentName:"p",href:"./add-ons/turbo"},"turbo functions"),". Due to the large number of add-ons created by the community, they are located in a separate documentation page. Navigate to Add-Ons page for more information on the individual add-ons."))}s.isMDXComponent=!0}}]);