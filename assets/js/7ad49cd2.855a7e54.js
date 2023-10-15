"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6260],{6770:(t,e,n)=>{n.d(e,{q:()=>u,Z:()=>p});var a=n(7294),o=n(4740);const i={labelSelector:"labelSelector_RmTm"},l="SelectedInputLabel";"undefined"!=typeof window&&window,"undefined"!=typeof window&&null==localStorage.getItem(l)&&localStorage.setItem(l,JSON.stringify({value:"GP2040",label:"GP2040"}));const r=[{value:"GP2040",label:"GP2040"},{value:"XInput",label:"XInput"},{value:"DirectInput",label:"DirectInput"},{value:"Nintendo Switch",label:"Nintendo Switch"},{value:"PS3",label:"PS3"},{value:"PS4",label:"PS4"},{value:"Arcade",label:"Arcade"}],d={GP2040:{name:"GP2040",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B1",B2:"B2",B3:"B3",B4:"B4",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"S1",S2:"S2",L3:"L3",R3:"R3",A1:"A1",A2:"A2"},XInput:{name:"XInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"A",B2:"B",B3:"X",B4:"Y",L1:"LB",R1:"RB",L2:"LT",R2:"RT",S1:"Back",S2:"Start",L3:"LS",R3:"RS",A1:"Guide",A2:"(A2)"},DirectInput:{name:"DirectInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"2",B2:"3",B3:"1",B4:"4",L1:"5",R1:"6",L2:"7",R2:"8",S1:"9",S2:"10",L3:"11",R3:"12",A1:"13",A2:"14"},"Nintendo Switch":{name:"Nintendo Switch",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B",B2:"A",B3:"Y",B4:"X",L1:"L",R1:"R",L2:"ZL",R2:"ZR",S1:"Minus",S2:"Plus",L3:"LS",R3:"RS",A1:"Home",A2:"Capture"},PS4:{name:"PS4",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Share",S2:"Options",L3:"L3",R3:"R3",A1:"PS",A2:"Touchpad"},PS3:{name:"PS3",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Select",S2:"Start",L3:"L3",R3:"R3",A1:"PS",A2:"(A2)"},Arcade:{name:"Arcade",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"K1",B2:"K2",B3:"P1",B4:"P2",L1:"P4",R1:"P3",L2:"K4",R2:"K3",S1:"Select",S2:"Start",L3:"LS",R3:"RS",A1:"Home",A2:"(A2)"}},s={option:(t,e)=>{let{data:n,isDisabled:a,isSelected:o}=e;return{...t,color:a?"#ccc":o?"white":"black",":active":{...t[":active"],backgroundColor:a?void 0:o?n.color:0}}}};function p(){const[t,e]=(0,a.useState)("");return(0,a.useEffect)((()=>{if("undefined"!=typeof window){const t=JSON.parse(localStorage.getItem(l)??"[]");e(t)}}),[]),a.createElement(o.ZP,{value:t,className:i.labelSelector,options:r,onChange:t=>{"undefined"!=typeof window&&(localStorage.setItem(l,JSON.stringify(t)),window.dispatchEvent(new Event("inputLabelChange"))),e(t)},styles:s})}function u(t){const[e,n]=(0,a.useState)(null);var o={value:"GP2040",label:"GP2040"};"undefined"!=typeof window&&(o=JSON.parse(localStorage.getItem(l)));const i=()=>{let e="";return t.buttons.forEach((function(t,n,a){let i=d[o.value][t];n===a.length-1?e+=i:e+=i+" + "})),e};return(0,a.useEffect)((()=>(n(i()),window.addEventListener("inputLabelChange",(()=>{"undefined"!=typeof window&&(o=JSON.parse(localStorage.getItem(l)));let t=i();n(t)})),()=>window.removeEventListener("inputLabelChange",n)))),a.createElement("code",null,e)}},8301:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=n(6770);const l={title:"Hotkeys",pagination_next:null,pagination_prev:null},r="Hotkeys",d={unversionedId:"hotkeys",id:"hotkeys",title:"Hotkeys",description:"Select the button labels to be displayed in the usage guide:",source:"@site/docs/hotkeys.mdx",sourceDirName:".",slug:"/hotkeys",permalink:"/docusaurus-test/next/hotkeys",draft:!1,tags:[],version:"current",frontMatter:{title:"Hotkeys",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},s={},p=[{value:"No Action",id:"no-action",level:2},{value:"DPad Digital",id:"dpad-digital",level:2},{value:"DPad Left Analog",id:"dpad-left-analog",level:2},{value:"DPad Right Analog",id:"dpad-right-analog",level:2},{value:"Home Button",id:"home-button",level:2},{value:"Capture Button",id:"capture-button",level:2},{value:"SOCD Up Priority",id:"socd-up-priority",level:2},{value:"SOCD Neutral",id:"socd-neutral",level:2},{value:"SOCD Last Win",id:"socd-last-win",level:2},{value:"SOCD First Wins",id:"socd-first-wins",level:2},{value:"SOCD Cleaning Off",id:"socd-cleaning-off",level:2},{value:"Invert X Axis",id:"invert-x-axis",level:2},{value:"Invert Y Axis",id:"invert-y-axis",level:2},{value:"Toggle 4-Way Joystick Mode",id:"toggle-4-way-joystick-mode",level:2},{value:"Toggle DDI 4-Way Joystick Mode",id:"toggle-ddi-4-way-joystick-mode",level:2},{value:"Load Profile # 1-4",id:"load-profile--1-4",level:2},{value:"L3 Button",id:"l3-button",level:2},{value:"R3 Button",id:"r3-button",level:2},{value:"Touchpad Button",id:"touchpad-button",level:2},{value:"Restart GP2040-CE",id:"restart-gp2040-ce",level:2}],u={toc:p},h="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hotkeys"},"Hotkeys"),(0,o.kt)("p",null,"Select the button labels to be displayed in the usage guide:"),(0,o.kt)(i.Z,{mdxType:"InputLabelSelector"}),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All of the following hotkey bindings can be changed or assigned to different button combinations in ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-test/next/web-configurator#hotkey-settings"},"Hotkeys Settings")," section of the Web Configurator.")),(0,o.kt)("h2",{id:"no-action"},"No Action"),(0,o.kt)("p",null,"This hotkey does nothing. Use this hotkey to disable a specific hotkey combination."),(0,o.kt)("h2",{id:"dpad-digital"},"DPad Digital"),(0,o.kt)("p",null,"This hotkey changes the DPad mode such the directions to be read as digital inputs on the DPad."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": ",(0,o.kt)(i.q,{buttons:["S1","S2","Down"],mdxType:"Hotkey"})),(0,o.kt)("h2",{id:"dpad-left-analog"},"DPad Left Analog"),(0,o.kt)("p",null,"This hotkey changes the DPad mode to such the directions to be read as inputs on the Left Analog Stick. The directional input is always the minimum, maximum, or zero value on that axis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": ",(0,o.kt)(i.q,{buttons:["S1","S2","Left"],mdxType:"Hotkey"})),(0,o.kt)("h2",{id:"dpad-right-analog"},"DPad Right Analog"),(0,o.kt)("p",null,"This hotkey changes the DPad mode to such the directions to be read as inputs on the Right Analog Stick. The directional input is always the minimum, maximum, or zero value on that axis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": ",(0,o.kt)(i.q,{buttons:["S1","S2","Right"],mdxType:"Hotkey"})),(0,o.kt)("h2",{id:"home-button"},"Home Button"),(0,o.kt)("p",null,"This hotkey emulates a press of the ",(0,o.kt)(i.q,{buttons:["A1"],mdxType:"Hotkey"})," button as not all controllers may have this button natively on the controller."),(0,o.kt)("h2",{id:"capture-button"},"Capture Button"),(0,o.kt)("p",null,"This hotkey emulates a press of the ",(0,o.kt)(i.q,{buttons:["A2"],mdxType:"Hotkey"})," button as not all controllers may have this button natively on the controller."),(0,o.kt)("h2",{id:"socd-up-priority"},"SOCD Up Priority"),(0,o.kt)("p",null,"This hotkey changes the SOCD cleaning method to resolve to a neutral input (no input) on the X-axis, but prioritize the ",(0,o.kt)("inlineCode",{parentName:"p"},"Up")," input on the Y-axis when both directions are pressed simultaneously. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"1st Input + 2nd Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Left + Right"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Right + Left"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Up + Down"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Down + Up"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up")))),(0,o.kt)("h2",{id:"socd-neutral"},"SOCD Neutral"),(0,o.kt)("p",null,"This hotkey changes the SOCD cleaning method to resolve to a neutral input (no input) on both the X-axis and Y-axis when both directions are pressed simultaneously. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"1st Input + 2nd Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Left + Right"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Right + Left"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Up + Down"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Down + Up"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Neutral")))),(0,o.kt)("h2",{id:"socd-last-win"},"SOCD Last Win"),(0,o.kt)("p",null,"This hotkey changes the SOCD cleaning method to prioritize the second directional input on both the X-axis and Y-axis when both directions are pressed simultaneously. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"1st Input + 2nd Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Left + Right"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Right + Left"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Left")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Up + Down"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Down")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Down + Up"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up")))),(0,o.kt)("h2",{id:"socd-first-wins"},"SOCD First Wins"),(0,o.kt)("p",null,"This hotkey changes the SOCD cleaning method to prioritize the first directional input on both the X-axis and Y-axis when both directions are pressed simultaneously. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"1st Input + 2nd Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Left + Right"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Left")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Right + Left"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Up + Down"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Down + Up"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Down")))),(0,o.kt)("h2",{id:"socd-cleaning-off"},"SOCD Cleaning Off"),(0,o.kt)("p",null,"This hotkey changes the SOCD cleaning method to not resolve any directional inputs on both the X-axis and Y-axis when both directions are pressed simultaneously. The controller will send both directional inputs. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This cleaning mode is only available in XInput mode as PS3/DirectInput, PS4 and Nintendo Switch modes do not support setting SOCD Cleaning to Off and will default to Neutral SOCD Cleaning mode.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"1st Input + 2nd Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Left + Right"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Left and Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Right + Left"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Left and Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Up + Down"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up and Down")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Down + Up"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up and Down")))),(0,o.kt)("h2",{id:"invert-x-axis"},"Invert X Axis"),(0,o.kt)("p",null,"This hotkey will invert the X-axis of your controller (i.e. pressing the Right button will result a Left input and vice versa)."),(0,o.kt)("h2",{id:"invert-y-axis"},"Invert Y Axis"),(0,o.kt)("p",null,"This hotkey will invert the Y-axis of your controller (i.e. pressing the Up button will result in a Down input and vice versa)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": ",(0,o.kt)(i.q,{buttons:["S2","A1","Right"],mdxType:"Hotkey"})),(0,o.kt)("h2",{id:"toggle-4-way-joystick-mode"},"Toggle 4-Way Joystick Mode"),(0,o.kt)("p",null,"This hotkey will alter the behavior of the directional buttons such that only the cardinal directions will register as inputs and diagonal directions will be disabled and ignored."),(0,o.kt)("h2",{id:"toggle-ddi-4-way-joystick-mode"},"Toggle DDI 4-Way Joystick Mode"),(0,o.kt)("p",null,"This hotkey will alter the behavior of the directional buttons mapped with the ",(0,o.kt)("a",{parentName:"p",href:"./add-ons/dual-direction-input"},"Dual Direction Input")," add-on such that only the cardinal directions will register as inputs and diagonal directions will be disabled and ignored."),(0,o.kt)("h2",{id:"load-profile--1-4"},"Load Profile # 1-4"),(0,o.kt)("p",null,"This hotkey will load various input to pin mapping profiles set in ",(0,o.kt)("a",{parentName:"p",href:"./web-configurator#profile-settings"},"Profile Settings")," in the Web Configurator."),(0,o.kt)("h2",{id:"l3-button"},"L3 Button"),(0,o.kt)("p",null,"This hotkey emulates a press of the ",(0,o.kt)(i.q,{buttons:["L3"],mdxType:"Hotkey"})," button as not all controllers may have this button natively on the controller."),(0,o.kt)("h2",{id:"r3-button"},"R3 Button"),(0,o.kt)("p",null,"This hotkey emulates a press of the ",(0,o.kt)(i.q,{buttons:["R3"],mdxType:"Hotkey"})," button as not all controllers may have this button natively on the controller."),(0,o.kt)("h2",{id:"touchpad-button"},"Touchpad Button"),(0,o.kt)("p",null,"This hotkey emulates a press of the <Hotkey buttons={",'["A2"]',">/> button as not all controllers may have this button natively on the controller."),(0,o.kt)("h2",{id:"restart-gp2040-ce"},"Restart GP2040-CE"),(0,o.kt)("p",null,"This hotkey will restart the controller without pressing the hardware reset button on the board (if present) or requiring the controller to be unplugged from the PC or game console."))}c.isMDXComponent=!0}}]);