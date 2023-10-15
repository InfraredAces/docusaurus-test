"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9697],{6770:(t,e,a)=>{a.d(e,{q:()=>m,Z:()=>p});var n=a(7294),r=a(4740);const l={labelSelector:"labelSelector_RmTm"},i="SelectedInputLabel";"undefined"!=typeof window&&window;const d=[{value:"GP2040",label:"GP2040"},{value:"XInput",label:"XInput"},{value:"DirectInput",label:"DirectInput"},{value:"Nintendo Switch",label:"Nintendo Switch"},{value:"PS3",label:"PS3"},{value:"PS4",label:"PS4"},{value:"Arcade",label:"Arcade"}],o={GP2040:{name:"GP2040",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B1",B2:"B2",B3:"B3",B4:"B4",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"S1",S2:"S2",L3:"L3",R3:"R3",A1:"A1",A2:"A2"},XInput:{name:"XInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"A",B2:"B",B3:"X",B4:"Y",L1:"LB",R1:"RB",L2:"LT",R2:"RT",S1:"Back",S2:"Start",L3:"LS",R3:"RS",A1:"Guide",A2:"(A2)"},DirectInput:{name:"DirectInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"2",B2:"3",B3:"1",B4:"4",L1:"5",R1:"6",L2:"7",R2:"8",S1:"9",S2:"10",L3:"11",R3:"12",A1:"13",A2:"14"},"Nintendo Switch":{name:"Nintendo Switch",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B",B2:"A",B3:"Y",B4:"X",L1:"L",R1:"R",L2:"ZL",R2:"ZR",S1:"Minus",S2:"Plus",L3:"LS",R3:"RS",A1:"Home",A2:"Capture"},PS4:{name:"PS4",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Share",S2:"Options",L3:"L3",R3:"R3",A1:"PS",A2:"Touchpad"},PS3:{name:"PS3",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Select",S2:"Start",L3:"L3",R3:"R3",A1:"PS",A2:"(A2)"},Arcade:{name:"Arcade",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"K1",B2:"K2",B3:"P1",B4:"P2",L1:"P4",R1:"P3",L2:"K4",R2:"K3",S1:"Select",S2:"Start",L3:"LS",R3:"RS",A1:"Home",A2:"(A2)"}},s={option:(t,e)=>{let{data:a,isDisabled:n,isSelected:r}=e;return{...t,color:n?"#ccc":r?"white":"black",":active":{...t[":active"],backgroundColor:n?void 0:r?a.color:0}}}};function p(){const[t,e]=(0,n.useState)("");return(0,n.useEffect)((()=>{if("undefined"!=typeof window){const t=JSON.parse(localStorage.getItem(i)??"[]");e(t)}}),[]),n.createElement(r.ZP,{value:t,className:l.labelSelector,options:d,onChange:t=>{"undefined"!=typeof window&&(localStorage.setItem(i,JSON.stringify(t)),window.dispatchEvent(new Event("inputLabelChange"))),e(t)},styles:s})}function m(t){const[e,a]=(0,n.useState)(null);var r={value:"GP2040",label:"GP2040"};"undefined"!=typeof window&&(r=JSON.parse(localStorage.getItem(i)));const l=()=>{let e="";return t.buttons.forEach((function(t,a,n){let l=o[r.value][t];a===n.length-1?e+=l:e+=l+" + "})),e};return(0,n.useEffect)((()=>(a(l()),window.addEventListener("inputLabelChange",(()=>{"undefined"!=typeof window&&(r=JSON.parse(localStorage.getItem(i)));let t=l();a(t)})),()=>window.removeEventListener("inputLabelChange",a)))),n.createElement("code",null,e)}},4110:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(6770);const i={title:"RGB LEDs",pagination_next:null,pagination_prev:null},d="RGB LEDs",o={unversionedId:"rgb-leds",id:"rgb-leds",title:"RGB LEDs",description:"Hardware Requirements",source:"@site/docs/rgb-leds.mdx",sourceDirName:".",slug:"/rgb-leds",permalink:"/docusaurus-test/next/rgb-leds",draft:!1,tags:[],version:"current",frontMatter:{title:"RGB LEDs",pagination_next:null,pagination_prev:null},sidebar:"docSidebar"},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"RGB LED Hotkeys",id:"rgb-led-hotkeys",level:2},{value:"RGB LED Animations",id:"rgb-led-animations",level:2},{value:"RGB LED Static Themes",id:"rgb-led-static-themes",level:2}],m={toc:p},g="wrapper";function k(t){let{components:e,...i}=t;return(0,r.kt)(g,(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgb-leds"},"RGB LEDs"),(0,r.kt)(l.Z,{mdxType:"InputLabelSelector"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"GP2040-CE requires that addressable RGB LEDs be used for nearly all LED functions."),(0,r.kt)("p",null,"The exception to this are ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus-test/next/add-ons/player-number"},"Player LEDs"),", which can use pulse width modulation (PWM) to vary the brightness of the LEDs."),(0,r.kt)("h2",{id:"rgb-led-hotkeys"},"RGB LED Hotkeys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hotkey"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","B3"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Next Animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","B1"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Previous Animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","B4"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Brightness Up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","B2"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Brightness Down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","R1"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"LED Parameter Up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","R2"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"LED Parameter Down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","L1"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Pressed Parameter Up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.q,{buttons:["S1","S2","L2"],mdxType:"Hotkey"})),(0,r.kt)("td",{parentName:"tr",align:null},"Pressed Parameter Down")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LED Parameter")," hotkeys may affect color, speed or theme depending on the current RGB LED animation. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressed Parameter")," options will change the colors/effects for the on-press animations.")),(0,r.kt)("h2",{id:"rgb-led-animations"},"RGB LED Animations"),(0,r.kt)("p",null,"The following animations are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"LED Parameter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Off"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn off per-button RGB LEDs"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Static Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets all LEDs to the same color"),(0,r.kt)("td",{parentName:"tr",align:null},"Cycle through colors: ",(0,r.kt)("em",{parentName:"td"},"Red"),", ",(0,r.kt)("em",{parentName:"td"},"Orange"),", ",(0,r.kt)("em",{parentName:"td"},"Yellow"),", ",(0,r.kt)("em",{parentName:"td"},"Lime Green"),", ",(0,r.kt)("em",{parentName:"td"},"Green"),", ",(0,r.kt)("em",{parentName:"td"},"Seafoam"),", ",(0,r.kt)("em",{parentName:"td"},"Aqua"),", ",(0,r.kt)("em",{parentName:"td"},"Sky Blue"),", ",(0,r.kt)("em",{parentName:"td"},"Blue"),", ",(0,r.kt)("em",{parentName:"td"},"Purple"),", ",(0,r.kt)("em",{parentName:"td"},"Pink"),", ",(0,r.kt)("em",{parentName:"td"},"Magenta"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rainbow Cycle"),(0,r.kt)("td",{parentName:"tr",align:null},"All LEDs cycle through the color wheel displaying the same color"),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust animation speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rainbow Chase"),(0,r.kt)("td",{parentName:"tr",align:null},"A fading, rainbow cycling lines travels across the LED chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust animation speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Static Theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the LEDs to a pre-defined static theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Cycle through themes, see ",(0,r.kt)("a",{parentName:"td",href:"#rgb-led-static-themes"},"RGB LED Static Themes")," for details.")))),(0,r.kt)("h2",{id:"rgb-led-static-themes"},"RGB LED Static Themes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Preview"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Static Rainbow")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Static Rainbow",src:a(9575).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Xbox")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Xbox",src:a(1719).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Xbox (All)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Xbox (All)",src:a(5902).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Super Famicom")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Super Famicom",src:a(7130).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Super Famicom (All)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Super Famicom (All)",src:a(2484).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PlayStation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Xbox",src:a(3413).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PlayStation (All)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Xbox (All)",src:a(4099).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Neo Geo Straight")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Neo Geo Classic",src:a(3826).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Neo Geo Curved")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Neo Geo Curved",src:a(1014).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Neo Geo Modern")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Neo Geo Modern",src:a(6805).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Six Button Fighter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Six Button Fighter",src:a(4058).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Six Button Fighter +")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Six Button Fighter +",src:a(6214).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Street Fighter 2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Street Fighter 2",src:a(8552).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tekken")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Tekken",src:a(8227).Z,width:"264",height:"152"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Guilty Gear Type-A")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Guilty Gear Type-A",src:a(8135).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Guilty Gear Type-B")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Guilty Gear Type-B",src:a(286).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Guilty Gear Type-C")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Guilty Gear Type-C",src:a(8624).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Guilty Gear Type-D")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Guilty Gear Type-D",src:a(4589).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Guilty Gear Type-E")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Guilty Gear Type-E",src:a(2176).Z,width:"264",height:"154"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Fightboard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Fightboard",src:a(3484).Z,width:"264",height:"152"}))))))}k.isMDXComponent=!0},3484:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fightboard-6862519fa36073f3020a499d396bc3f9.png"},8135:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guilty-gear-type-a-c5f621799d26371b6cfdeab3eac7de88.png"},286:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guilty-gear-type-b-ed538312c99d1297fe3b63f20547aa3e.png"},8624:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guilty-gear-type-c-0e366693abe23149550f89d95219cd6b.png"},4589:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guilty-gear-type-d-ce3890d8b2a65913c39516acbf814b33.png"},2176:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/guilty-gear-type-e-92c60e017448a83600dc5c8fcb1f3a32.png"},1014:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/neogeo-curved-c7c5a18bacb23893e9fd363687917428.png"},6805:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/neogeo-modern-aed29a0a2062517ccaac86d18dbe3ca0.png"},3826:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/neogeo-straight-29ed8dbe2d3fbb41f482b44a287b29aa.png"},4099:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/playstation-all-dda799767a086c0052a0b139e60be9d1.png"},3413:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/playstation-f19ecfb8dea0d474741b451f93cad1e9.png"},6214:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/six-button-fighter-plus-8c8772510dee4b4957761c154409d81d.png"},4058:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/six-button-fighter-31b291eab6c1b3e9b5b6b11d26e33dbf.png"},9575:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/static-rainbow-3fc1c1142b4640b1057352cc69b69aae.png"},8552:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/street-fighter-2-064bf4f2f75dd1fc301999136ac1e0b6.png"},2484:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/super-famicom-all-04bac624f9856f3f5b3ca6a465389779.png"},7130:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/super-famicom-20058e2bb2a7e56fe1bab41eff7cbeb2.png"},8227:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tekken-72474a952aef334b66c3c709d4d1faf8.png"},5902:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/xbox-all-9ccec8f7c3631b3b01526ea7cdb17441.png"},1719:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/xbox-c58c7a7bf6721fda0748cd6fb2e707a2.png"}}]);