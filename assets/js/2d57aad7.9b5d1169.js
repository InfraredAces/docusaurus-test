"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3179],{2871:(e,t,a)=>{a.d(t,{A:()=>C,eU:()=>B,CL:()=>E,WT:()=>P,Wl:()=>k});var o=a(7294);const r="row_CcQE",i="box_wypo",n="boxImage_Fqax",s="boxInfo_GFb7",c="boxTitle_z655",l="downloadLinks_U9g3";var d=a(9603),m=a(9417);const p={Download:m.kwI,Pinout:m.l9D,Website:m.g4A},u=e=>{let{link:t,text:a}=e;return null===t?null:o.createElement("li",null,o.createElement("a",{href:t},o.createElement(d.G,{icon:p[a]}),a))},g={"Microcontroller Boards":[{name:"Raspberry Pi Pico",configName:"Pico",pinout:"/#/wiring?id=raspberry-pi-pico",website:"https://www.raspberrypi.com/products/raspberry-pi-pico/",image:a(7898).Z,supported:!0,desc:()=>o.createElement("p",null,"The Raspberry Pi Pico is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller. This build is the reference implementation for GP2040-CE.")},{name:"Raspberry Pi Pico W",configName:"PicoW",pinout:"/#/wiring?id=raspberry-pi-pico",website:"https://www.raspberrypi.com/products/raspberry-pi-pico/",image:a(2032).Z,supported:!0,desc:()=>o.createElement("p",null,"The Raspberry Pi Pico W is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller.")},{name:"SparkFun Pro Micro",configName:"SparkFunProMicro",pinout:"/#/wiring?id=sparkfun-pro-micro-rp2040",website:"https://learn.sparkfun.com/tutorials/pro-micro-rp2040-hookup-guide",image:a(2984).Z,supported:!0,desc:()=>o.createElement("p",null,"An RP2040 board in the Pro Micro form factor. This build is a drop-in replacement for the"," ",o.createElement("a",{href:"https://github.com/MickGyver/DaemonBite-Arcade-Encoder"},"Daemonbite Arcade Encoder"),".")},{name:"Waveshare RP2040-Zero",configName:"WaveshareZero",pinout:"/#/wiring?id=waveshare-rp2040-zero",website:"https://www.waveshare.com/wiki/RP2040-Zero",image:a(2059).Z,supported:!0,desc:()=>o.createElement("p",null,"The"," ",o.createElement("a",{href:"https://www.waveshare.com/rp2040-zero.htm"},"Waveshare RP2040-Zero")," ","is a small form factor board with castellated pins and USB-C, making this a popular choice for custom built PCBs without the need for SMT assembly.")},{name:"Adafruit KB2040",configName:"KB2040",pinout:"/#/wiring?id=adafruit-kb2040",website:"https://learn.adafruit.com/adafruit-kb2040",image:a(2317).Z,supported:!0,desc:()=>o.createElement("p",null,"Another RP2040 board in the Pro Micro form factor, with 2 additional pins for USB data. This build is configured for DIY gamepad mods.")}],"Community Devices":[{name:"Alpaca-OwO",configName:"AlpacaOwO",pinout:null,website:"https://github.com/Project-Alpaca/Alpaca-OwO/",image:a(9556).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade controller I/O platform designed by"," ",o.createElement("a",{href:"https://github.com/dogtopus"},"dogtopus"),".")},{name:"BatiKING DURAL",configName:"DURAL",pinout:null,website:"https://github.com/BatiKING/DURAL_DIY",image:a(5635).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the ScrubTier BentoBox v1 and v2 as well as the GGEZStick Keebfighters.")},{name:"Flatbox Rev 4",configName:"FlatboxRev4",pinout:null,website:"https://github.com/jfedor2/flatbox/tree/master/hardware-rev4",image:a(9098).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," using an embedded RP2040 chip.")},{name:"Flatbox Rev 5",configName:"FlatboxRev5",pinout:null,website:"https://github.com/jfedor2/flatbox/tree/master/hardware-rev5",image:a(5149).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," using the Waveshare RP2040-Zero.")},{name:"Flatbox Rev 5 RGB",configName:"FlatboxRev5RGB",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/Flatbox%20Rev%205%20RGB",image:a(7690).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," and"," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain")," using the Waveshare RP2040-Zero.")},{name:"GP2040-CE Keyboard Converter",configName:"KeyboardConverter",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/blob/main/GP2040%20Keyboard%20Converter/Waveshare%20Zero-PCB/README.md",image:a(4175).Z,category:"",desc:()=>o.createElement("p",null,"The GP2040-CE Keyboard Converter Case is designed to be a USB Host Device for the use of a keyboard with the GP2040-CE project. The end result is a device that allows you to play on a keyboard, but have it registered just as GP2040-CE controller, whether that is XInput, DInput, PS4, or Switch.")},{name:"Mavercade Keebfighter",configName:"MavercadeKeebfighter",pinout:null,website:"https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/MavercadeKeebfighter",image:a(4695).Z,category:"closed",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://mavercade.com/collections/mavercade-fightsticks"},"Mavercade Keebfighters"),". These revisions use a Waveshare RP2040-Zero board.")},{name:"PicoAnn",configName:"PicoAnn",pinout:null,website:"",image:a(5085).Z,category:"legacy",desc:()=>o.createElement("p",null,"This configuration is commonly used with Aliexpress boards. It cannot be guaranteed that this configuration will work for all devices.")},{name:"Pico Fighting Board",configName:"PicoFightingBoard",pinout:null,website:"https://github.com/FeralAI/PicoFightingBoard",image:a(6391).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade encoder board designed by"," ",o.createElement("a",{href:"https://github.com/FeralAI"},"FeralAI")," using a Raspberry Pi Pico or pin-equivalent RP2040 board.")},{name:"Reflex CTRL SNES",configName:"ReflexCtrlSNES",pinout:null,website:"https://github.com/misteraddons/Reflex-CTRL",image:a(6474).Z,category:"open",desc:()=>o.createElement("p",null,"Reflex Board Open source PCB for SNES Controller replacement PCBs designed and sold by"," ",o.createElement("a",{href:"https://github.com/misteraddons"},"MiSTerAddons")," using an embedded RP2040 chip.")},{name:"ReflexEncoder",configName:"ReflexEncoder",pinout:null,website:"https://github.com/misteraddons/ReflexFightingBoard",image:a(3954).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade encoder board designed and sold by"," ",o.createElement("a",{href:"https://github.com/misteraddons"},"MiSTerAddons")," using an embedded RP2040 chip.")},{name:"RP2040 Advanced Breakout",configName:"RP2040AdvancedBreakoutBoard",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Advanced%20Breakout%20Board",image:a(2041).Z,category:"official",desc:()=>o.createElement("p",null,"Arcade encoder board designed by"," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain")," using an embedded RP2040, and is the official board of the GP2040-CE project.")},{name:"RP2040 Mini Breakout Board",configName:"RP2040MiniBreakoutBoard",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Mini%20Breakout%20Board",image:a(5759).Z,category:"open",desc:()=>o.createElement("p",null,"A reduced-footprint spin off of the RP2040 Advanced Breakout Board designed by ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain"),".")},{name:"ScrubTier BentoBox",configName:"BentoBox",pinout:null,website:"https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/BentoBox",image:a(2869).Z,category:"closed",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://https://scrubtier.co.uk/"},"ScrubTier BentoBox v1 and v2 as well as the GGEZStick Keebfighters"),".")},{name:"SGF Flatbox",configName:"SGFDevices",pinout:null,website:"https://github.com/sgfdevices/SGFlatbox",image:a(5547).Z,category:"open",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://github.com/sgfdevices/SGFlatbox"},"SGF Flatbox-based controllers"),", based on the excellent revisions of the Flatbox design by jfedor2 powered by an RP2040 MCU.")},{name:"Stress",configName:"Stress",pinout:null,website:"https://github.com/GroooveBob/Stress",image:a(9729).Z,category:"open",desc:()=>o.createElement("p",null,"A small and portable PCB-as-a-controller designed by"," ",o.createElement("a",{href:"https://github.com/GroooveBob"},"GroooveBob")," using the Waveshare RP-2040-Zero.")},{name:"thnikk Fightboard V3",configName:"FightboardV3",pinout:null,website:"https://docs.thnikk.moe/models/fightboard/v3.html",image:a(1226).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the Fightboard v3")},{name:"thnikk Fightboard V3 (Mirrored)",configName:"FightboardV3Mirrored",pinout:null,website:"https://docs.thnikk.moe/models/fightboard/v3.html",image:a(1829).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the Fightboard v3 mirrored with directional inputs on the right hand and the action buttons on the left.")},{name:"",configName:"",pinout:null,website:"",image:a(7898).Z,category:"",desc:()=>o.createElement("p",null)}]};var b=a(4529);const f={releaseVersion:null,loading:!1},h=(0,b.Ue)()(((e,t)=>({...f,getInfo:()=>{t().loading||t().releaseVersion||(e({loading:!0}),fetch("https://api.github.com/repos/OpenStickCommunity/GP2040-CE/releases/latest").then((e=>e.json())).then((t=>{let{name:a}=t;return e({loading:!1,releaseVersion:a})})))}}))),v=e=>{let{releaseVersion:t,configName:a}=e;return t?`https://github.com/OpenStickCommunity/GP2040-CE/releases/download/${t}/GP2040-CE_${t.substring(1)}_${a}.uf2`:""},w=e=>{let{name:t,configName:a,pinout:r,desc:d,image:m,website:p}=e;const g=h((e=>e.releaseVersion));return o.createElement("div",{key:`download-${t}`,className:i},o.createElement("img",{className:n,src:m}),o.createElement("div",{className:s},o.createElement("h3",{className:c},t),o.createElement("div",null,o.createElement("ul",{className:l},o.createElement(u,{link:v({releaseVersion:g,configName:a}),text:"Download"}),o.createElement(u,{link:r,text:"Pinout"}),o.createElement(u,{link:p,text:"Website"}))),o.createElement("div",{className:"download-desc"},d())))},y=e=>{let{children:t}=e;const a=h((e=>e.getInfo));return(0,o.useEffect)((()=>{a()}),[]),o.createElement("div",{className:r},t)},E=()=>o.createElement(y,null,g["Microcontroller Boards"].map(w)),P=()=>o.createElement(y,null,g["Community Devices"].filter((e=>"official"===e.category)).map(w)),k=()=>o.createElement(y,null,g["Community Devices"].filter((e=>"open"===e.category)).map(w)),C=()=>o.createElement(y,null,g["Community Devices"].filter((e=>"closed"===e.category)).map(w)),B=()=>o.createElement(y,null,g["Community Devices"].filter((e=>"legacy"===e.category)).map(w))},3590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=a(7462),r=(a(7294),a(3905)),i=a(2871);const n={title:"Downloads",pagination_next:null,pagination_prev:null},s="Downloads",c={unversionedId:"downloads/download-page",id:"version-0.7.5/downloads/download-page",title:"Downloads",description:"Microcontroller Boards",source:"@site/versioned_docs/version-0.7.5/downloads/download-page.mdx",sourceDirName:"downloads",slug:"/downloads/download-page",permalink:"/docusaurus-test/downloads/download-page",draft:!1,tags:[],version:"0.7.5",frontMatter:{title:"Downloads",pagination_next:null,pagination_prev:null}},l={},d=[{value:"Microcontroller Boards",id:"microcontroller-boards",level:2},{value:"Official Project Boards",id:"official-project-boards",level:2},{value:"Open Source Community Devices",id:"open-source-community-devices",level:2},{value:"Closed Source Community Devices",id:"closed-source-community-devices",level:2},{value:"Legacy Devices",id:"legacy-devices",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"downloads"},"Downloads"),(0,r.kt)("h2",{id:"microcontroller-boards"},"Microcontroller Boards"),(0,r.kt)(i.CL,{mdxType:"Microcontrollers"}),(0,r.kt)("h2",{id:"official-project-boards"},"Official Project Boards"),(0,r.kt)(i.WT,{mdxType:"OfficialDevices"}),(0,r.kt)("h2",{id:"open-source-community-devices"},"Open Source Community Devices"),(0,r.kt)(i.Wl,{mdxType:"OpenSourceDevices"}),(0,r.kt)("h2",{id:"closed-source-community-devices"},"Closed Source Community Devices"),(0,r.kt)(i.A,{mdxType:"ClosedSourceDevices"}),(0,r.kt)("h2",{id:"legacy-devices"},"Legacy Devices"),(0,r.kt)("p",null,"GP2040-CE builds for these devices have been deprecated due to one or more of the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The manufacturer already provides a custom build of GP2040-CE"),(0,r.kt)("li",{parentName:"ul"},"The device is no longer available for purchase"),(0,r.kt)("li",{parentName:"ul"},"The operation of the device running an updated GP2040-CE build cannot be verified by the development team")),(0,r.kt)("p",null,"These builds remain available, however legacy devices are not supported by the GP2040-CE team."),(0,r.kt)("p",null,"Please ensure you have a backup of the original firmware and your settings before updating your device!"),(0,r.kt)(i.eU,{mdxType:"LegacyDevices"}))}u.isMDXComponent=!0},9556:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/AlpacaOwO-d9621b400c7ea56bcd4364fe4312ffbb.jpg"},2869:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/BentoBox-2bfa5daccf7e34efd3cbc1a34f2064e3.jpg"},5635:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/DURAL-d9b27e07d64123e225228adf4c1d02ee.jpg"},1226:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FightboardV3-b6faa1576c3c19a61fcf4754109fef60.jpg"},1829:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FightboardV3Mirrored-5711205dafd833a91eacbc1db0f4fa21.jpg"},9098:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev4-276249f46bd6b23d89b2b8f0289cfee4.jpg"},5149:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev5-8c4b4ed30a8bed5c56e96e96ede7b97f.jpg"},7690:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev5RGB-8b1bf2810422667adcce77f90637b714.jpg"},2317:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/KB2040-f0914c4fb508aa9e1995abe4c9835972.jpg"},4175:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/KeyboardConverter-483b147c125e317b2942618fd972f991.jpg"},4695:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/MavercadeKeebfighter-c2e563dcedff63a4d3439ef7513f4109.jpg"},7898:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Pico-bfb237f5893c3bf8106929fb25cff88e.jpg"},5085:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoAnn-5e8599d11d88ad1a061ff52898299ae0.jpg"},6391:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoFightingBoard-6c3f7f18a4db758d536cb670123d301c.jpg"},2032:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoW-78411af13fb86b9a9f755126c5088203.jpg"},2041:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/RP2040AdvancedBreakoutBoard-516264092b230a5d7a9ab0301c5ab044.jpg"},5759:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/RP2040MiniBreakoutBoard-e49f1ac102faaa9df72098e4d020a913.jpg"},6474:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ReflexCtrlSNES-329d41785cf812c4d97371024025b635.jpg"},3954:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ReflexEncoder-6ec01ae52a2e3bea762f3f530c5f5d2f.jpg"},5547:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/SGFDevices-f6ff9fa0ff81ac8e6e387a13e15d9ad5.jpg"},2984:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/SparkFunProMicro-4485b8dc8e1c68632631500f9f75bafa.jpg"},9729:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Stress-6a27a0e6b8a386cded448126fcf747e6.jpg"},2059:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/WaveshareZero-7bfb055e0bd1c65aa6c137d8cac2db27.jpg"}}]);