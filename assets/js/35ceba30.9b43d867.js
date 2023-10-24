"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3535],{2871:(e,t,a)=>{a.d(t,{A:()=>B,eU:()=>k,CL:()=>C,WT:()=>w,Wl:()=>v});var o=a(7294);const i="row_CcQE",n="box_wypo",r="boxImage_Fqax",s="boxInfo_GFb7",c="boxTitle_z655",l="downloadLinks_U9g3";var d=a(9603),m=a(9417);const p={Download:m.kwI,Pinout:m.l9D,Website:m.g4A},g=e=>{let{link:t,text:a}=e;return null===t?null:o.createElement("li",null,o.createElement("a",{href:t},o.createElement(d.G,{icon:p[a]}),a))},u={"Microcontroller Boards":[{name:"Raspberry Pi Pico",configName:"Pico",pinout:"/#/wiring?id=raspberry-pi-pico",website:"https://www.raspberrypi.com/products/raspberry-pi-pico/",image:a(7898).Z,supported:!0,desc:()=>o.createElement("p",null,"The Raspberry Pi Pico is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller. This build is the reference implementation for GP2040-CE.")},{name:"Raspberry Pi Pico W",configName:"PicoW",pinout:"/#/wiring?id=raspberry-pi-pico",website:"https://www.raspberrypi.com/products/raspberry-pi-pico/",image:a(2032).Z,supported:!0,desc:()=>o.createElement("p",null,"The Raspberry Pi Pico W is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller.")},{name:"Adafruit KB2040",configName:"KB2040",pinout:"/#/wiring?id=adafruit-kb2040",website:"https://learn.adafruit.com/adafruit-kb2040",image:a(2317).Z,supported:!0,desc:()=>o.createElement("p",null,"Another RP2040 board in the Pro Micro form factor, with 2 additional pins for USB data. This build is configured for DIY gamepad mods.")},{name:"Liatris",configName:"SparkFunProMicro",pinout:"/#/wiring?id=sparkfun-pro-micro-rp2040",website:"https://splitkb.com/products/liatris",image:a(8945).Z,supported:!0,desc:()=>o.createElement("p",null,"Drop in RP2040 replacement for Pro Micro builds by "," ",o.createElement("a",{href:"SplitKB.com"},"SplitKB.com"),".")},{name:"SparkFun Pro Micro",configName:"SparkFunProMicro",pinout:"/#/wiring?id=sparkfun-pro-micro-rp2040",website:"https://learn.sparkfun.com/tutorials/pro-micro-rp2040-hookup-guide",image:a(2984).Z,supported:!0,desc:()=>o.createElement("p",null,"An RP2040 board in the Pro Micro form factor. This build is a drop-in replacement for the"," ",o.createElement("a",{href:"https://github.com/MickGyver/DaemonBite-Arcade-Encoder"},"Daemonbite Arcade Encoder"),".")},{name:"Waveshare RP2040-Zero",configName:"WaveshareZero",pinout:"/#/wiring?id=waveshare-rp2040-zero",website:"https://www.waveshare.com/wiki/RP2040-Zero",image:a(2059).Z,supported:!0,desc:()=>o.createElement("p",null,"The"," ",o.createElement("a",{href:"https://www.waveshare.com/rp2040-zero.htm"},"Waveshare RP2040-Zero")," ","is a small form factor board with castellated pins and USB-C, making this a popular choice for custom built PCBs without the need for SMT assembly.")}],"Community Devices":[{name:"Alpaca-OwO",configName:"AlpacaOwO",pinout:null,website:"https://github.com/Project-Alpaca/Alpaca-OwO/",image:a(9556).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade controller I/O platform designed by"," ",o.createElement("a",{href:"https://github.com/dogtopus"},"dogtopus"),".")},{name:"BatiKING DURAL",configName:"DURAL",pinout:null,website:"https://github.com/BatiKING/DURAL_DIY",image:a(5635).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the ScrubTier BentoBox v1 and v2 as well as the GGEZStick Keebfighters.")},{name:"Flatbox Rev 4",configName:"FlatboxRev4",pinout:null,website:"https://github.com/jfedor2/flatbox/tree/master/hardware-rev4",image:a(9098).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," using an embedded RP2040 chip.")},{name:"Flatbox Rev 5",configName:"FlatboxRev5",pinout:null,website:"https://github.com/jfedor2/flatbox/tree/master/hardware-rev5",image:a(5149).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," using the Waveshare RP2040-Zero.")},{name:"Flatbox Rev 5 Southpaw",configName:"FlatboxRev5Southpaw",pinout:null,website:"https://github.com/SkylaHila/flatbox-southpaw",image:a(7107).Z,category:"open",desc:()=>o.createElement("p",null,"Mirrored version of the Flatbox Rev 5 by SkylaHila. Based on the Flatbox Rev 5 by",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2"),".")},{name:"Flatbox Rev 5 RGB",configName:"FlatboxRev5RGB",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/Flatbox%20Rev%205%20RGB",image:a(7690).Z,category:"open",desc:()=>o.createElement("p",null,"Stickless PCB designed by"," ",o.createElement("a",{href:"https://github.com/jfedor2"},"jfedor2")," and"," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain")," using the Waveshare RP2040-Zero.")},{name:"GP2040-CE Keyboard Converter",configName:"KeyboardConverter",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/blob/main/GP2040%20Keyboard%20Converter/Waveshare%20Zero-PCB/README.md",image:a(4175).Z,category:"open",desc:()=>o.createElement("p",null,"The GP2040-CE Keyboard Converter Case is designed to be a USB Host Device for the use of a keyboard with the GP2040-CE project.")},{name:"Mavercade Keebfighter",configName:"MavercadeKeebfighter",pinout:null,website:"https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/MavercadeKeebfighter",image:a(4695).Z,category:"closed",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://mavercade.com/collections/mavercade-fightsticks"},"Mavercade Keebfighters"),". These revisions use a Waveshare RP2040-Zero board.")},{name:"Open Core0",configName:"OpenCore0",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/Open_Core0",image:a(5939).Z,category:"official",desc:()=>o.createElement("p",null,"Open source stickless controller designed by "," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain"),".")},{name:"Open Core0 WASD",configName:"OpenCore0WASD",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/Open_Core0",image:a(4370).Z,category:"official",desc:()=>o.createElement("p",null,"Open source stickless WASD controller designed by "," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain"),".")},{name:"PicoAnn",configName:"PicoAnn",pinout:null,website:"",image:a(5085).Z,category:"legacy",desc:()=>o.createElement("p",null,"This configuration is commonly used with Aliexpress boards. It cannot be guaranteed that this configuration will work for all devices.")},{name:"Pico Fighting Board",configName:"PicoFightingBoard",pinout:null,website:"https://github.com/FeralAI/PicoFightingBoard",image:a(6391).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade encoder board designed by "," ",o.createElement("a",{href:"https://github.com/FeralAI"},"FeralAI")," using a Raspberry Pi Pico or pin-equivalent RP2040 board.")},{name:"Rana Tadpole",configName:"RanaTadpole",pinout:null,website:"https://github.com/rana-sylvatica/rana-tadpole",image:a(7689).Z,category:"open",desc:()=>o.createElement("p",null,"Pocket-sized digital controller from RanaLabs.")},{name:"Reflex Encode v1.2",configName:"ReflexEncodeV1.2",pinout:null,website:"https://github.com/misteraddons/ReflexFightingBoard",image:a(6968).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade encoder board designed and sold by"," ",o.createElement("a",{href:"https://github.com/misteraddons"},"MiSTerAddons")," using an embedded RP2040 chip.")},{name:"Reflex Encode v2.0",configName:"ReflexEncodeV2.0",pinout:null,website:"https://github.com/misteraddons/ReflexFightingBoard",image:a(2144).Z,category:"open",desc:()=>o.createElement("p",null,"Arcade encoder board designed and sold by "," ",o.createElement("a",{href:"https://github.com/misteraddons"},"MiSTerAddons")," using an embedded RP2040 chip.")},{name:"Reflex CTRL SNES",configName:"ReflexCtrlSNES",pinout:null,website:"https://github.com/misteraddons/Reflex-CTRL",image:a(6474).Z,category:"open",desc:()=>o.createElement("p",null,"Reflex Board Open source PCB for SNES Controller replacement PCBs designed and sold by"," ",o.createElement("a",{href:"https://github.com/misteraddons"},"MiSTerAddons")," using an embedded RP2040 chip.")},{name:"RP2040 Advanced Breakout",configName:"RP2040AdvancedBreakoutBoard",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Advanced%20Breakout%20Board",image:a(2041).Z,category:"official",desc:()=>o.createElement("p",null,"Arcade encoder board designed by "," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain")," using an embedded RP2040, and is the official board of the GP2040-CE project.")},{name:"RP2040 Advanced Breakout (USB Passthrough)",configName:"RP2040AdvancedBreakoutBoardUSBPassthrough",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Advanced%20Breakout%20Board%20-%20Passthrough",image:a(8731).Z,category:"official",desc:()=>o.createElement("p",null,"Official USB Passthrough Board of the Open Stick project.  Updated version of the RP2040 Advanced Breakout Board with USB passthrough included on the board.")},{name:"RP2040 Mini Breakout Board",configName:"RP2040MiniBreakoutBoard",pinout:null,website:"https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Mini%20Breakout%20Board",image:a(5759).Z,category:"open",desc:()=>o.createElement("p",null,"A reduced-footprint spin off of the RP2040 Advanced Breakout Board designed by "," ",o.createElement("a",{href:"https://github.com/TheTrainGoes"},"TheTrain"),".")},{name:"ScrubTier BentoBox",configName:"BentoBox",pinout:null,website:"https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/BentoBox",image:a(2869).Z,category:"closed",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://https://scrubtier.co.uk/"},"ScrubTier BentoBox v1 and v2 as well as the GGEZStick Keebfighters"),".")},{name:"SGF Flatbox",configName:"SGFDevices",pinout:null,website:"https://github.com/sgfdevices/SGFlatbox",image:a(5547).Z,category:"open",desc:()=>o.createElement("p",null,"Configuration for the"," ",o.createElement("a",{href:"https://github.com/sgfdevices/SGFlatbox"},"SGF Flatbox-based controllers"),", based on the excellent revisions of the Flatbox design by jfedor2 powered by an RP2040 MCU.")},{name:"Stress",configName:"Stress",pinout:null,website:"https://github.com/GroooveBob/Stress",image:a(9729).Z,category:"open",desc:()=>o.createElement("p",null,"A small and portable PCB-as-a-controller designed by"," ",o.createElement("a",{href:"https://github.com/GroooveBob"},"GroooveBob")," using the Waveshare RP-2040-Zero.")},{name:"thnikk Fightboard V3",configName:"FightboardV3",pinout:null,website:"https://docs.thnikk.moe/models/fightboard/v3.html",image:a(1226).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the Fightboard v3")},{name:"thnikk Fightboard V3 (Mirrored)",configName:"FightboardV3Mirrored",pinout:null,website:"https://docs.thnikk.moe/models/fightboard/v3.html",image:a(1829).Z,category:"legacy",desc:()=>o.createElement("p",null,"Configuration for the Fightboard v3 mirrored with directional inputs on the right hand and the action buttons on the left.")},{name:"",configName:"",pinout:null,website:"",image:a(7898).Z,category:"",desc:()=>o.createElement("p",null)}]};var b=a(4529);const f={releaseVersion:null,loading:!1},h=(0,b.Ue)()(((e,t)=>({...f,getInfo:()=>{t().loading||t().releaseVersion||(e({loading:!0}),fetch("https://api.github.com/repos/OpenStickCommunity/GP2040-CE/releases/latest").then((e=>e.json())).then((t=>{let{name:a}=t;return e({loading:!1,releaseVersion:a})})))}}))),A=e=>{let{releaseVersion:t,configName:a}=e;return t?`https://github.com/OpenStickCommunity/GP2040-CE/releases/download/${t}/GP2040-CE_${t.substring(1)}_${a}.uf2`:""},E=e=>{let{name:t,configName:a,pinout:i,desc:d,image:m,website:p}=e;const u=h((e=>e.releaseVersion));return o.createElement("div",{key:`download-${t}`,className:n},o.createElement("img",{className:r,src:m}),o.createElement("div",{className:s},o.createElement("h3",{className:c},t),o.createElement("div",null,o.createElement("ul",{className:l},o.createElement(g,{link:A({releaseVersion:u,configName:a}),text:"Download"}),o.createElement(g,{link:i,text:"Pinout"}),o.createElement(g,{link:p,text:"Website"}))),o.createElement("div",{className:"download-desc"},d())))},y=e=>{let{children:t}=e;const a=h((e=>e.getInfo));return(0,o.useEffect)((()=>{a()}),[]),o.createElement("div",{className:i},t)},C=()=>o.createElement(y,null,u["Microcontroller Boards"].map(E)),w=()=>o.createElement(y,null,u["Community Devices"].filter((e=>"official"===e.category)).map(E)),v=()=>o.createElement(y,null,u["Community Devices"].filter((e=>"open"===e.category)).map(E)),B=()=>o.createElement(y,null,u["Community Devices"].filter((e=>"closed"===e.category)).map(E)),k=()=>o.createElement(y,null,u["Community Devices"].filter((e=>"legacy"===e.category)).map(E))},4038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=a(7462),i=(a(7294),a(3905)),n=a(2871);const r={title:"Downloads",pagination_next:null,pagination_prev:null},s="Downloads",c={unversionedId:"downloads/download-page",id:"downloads/download-page",title:"Downloads",description:"Microcontroller Boards",source:"@site/docs/downloads/download-page.mdx",sourceDirName:"downloads",slug:"/downloads/download-page",permalink:"/docusaurus-test/next/downloads/download-page",draft:!1,tags:[],version:"current",frontMatter:{title:"Downloads",pagination_next:null,pagination_prev:null}},l={},d=[{value:"Microcontroller Boards",id:"microcontroller-boards",level:2},{value:"Official Project Boards",id:"official-project-boards",level:2},{value:"Open Source Community Devices",id:"open-source-community-devices",level:2},{value:"Closed Source Community Devices",id:"closed-source-community-devices",level:2},{value:"Legacy Devices",id:"legacy-devices",level:2}],m={toc:d},p="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"downloads"},"Downloads"),(0,i.kt)("h2",{id:"microcontroller-boards"},"Microcontroller Boards"),(0,i.kt)(n.CL,{mdxType:"Microcontrollers"}),(0,i.kt)("h2",{id:"official-project-boards"},"Official Project Boards"),(0,i.kt)(n.WT,{mdxType:"OfficialDevices"}),(0,i.kt)("h2",{id:"open-source-community-devices"},"Open Source Community Devices"),(0,i.kt)(n.Wl,{mdxType:"OpenSourceDevices"}),(0,i.kt)("h2",{id:"closed-source-community-devices"},"Closed Source Community Devices"),(0,i.kt)(n.A,{mdxType:"ClosedSourceDevices"}),(0,i.kt)("h2",{id:"legacy-devices"},"Legacy Devices"),(0,i.kt)("p",null,"GP2040-CE builds for these devices have been deprecated due to one or more of the following reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The manufacturer already provides a custom build of GP2040-CE"),(0,i.kt)("li",{parentName:"ul"},"The device is no longer available for purchase"),(0,i.kt)("li",{parentName:"ul"},"The operation of the device running an updated GP2040-CE build cannot be verified by the development team")),(0,i.kt)("p",null,"These builds remain available, however legacy devices are not supported by the GP2040-CE team."),(0,i.kt)("p",null,"Please ensure you have a backup of the original firmware and your settings before updating your device!"),(0,i.kt)(n.eU,{mdxType:"LegacyDevices"}))}g.isMDXComponent=!0},9556:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/AlpacaOwO-d9621b400c7ea56bcd4364fe4312ffbb.jpg"},2869:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/BentoBox-2bfa5daccf7e34efd3cbc1a34f2064e3.jpg"},5635:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/DURAL-d9b27e07d64123e225228adf4c1d02ee.jpg"},1226:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FightboardV3-b6faa1576c3c19a61fcf4754109fef60.jpg"},1829:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FightboardV3Mirrored-5711205dafd833a91eacbc1db0f4fa21.jpg"},9098:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev4-276249f46bd6b23d89b2b8f0289cfee4.jpg"},5149:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev5-8c4b4ed30a8bed5c56e96e96ede7b97f.jpg"},7690:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev5RGB-8b1bf2810422667adcce77f90637b714.jpg"},7107:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/FlatboxRev5Southpaw-838ab6223378d05f3c008c0d38933be4.jpg"},2317:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/KB2040-f0914c4fb508aa9e1995abe4c9835972.jpg"},4175:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/KeyboardConverter-483b147c125e317b2942618fd972f991.jpg"},8945:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Liatris-0cdb1a2a88068612f439333a584ddab9.jpg"},4695:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/MavercadeKeebfighter-c2e563dcedff63a4d3439ef7513f4109.jpg"},5939:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/OpenCore0-2cbea85e0e8a9b65b59704200c18a47f.jpg"},4370:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/OpenCore0WASD-21d49c3f4b024ab198e2c88c1de771b3.jpg"},7898:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Pico-bfb237f5893c3bf8106929fb25cff88e.jpg"},5085:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoAnn-5e8599d11d88ad1a061ff52898299ae0.jpg"},6391:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoFightingBoard-6c3f7f18a4db758d536cb670123d301c.jpg"},2032:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/PicoW-78411af13fb86b9a9f755126c5088203.jpg"},2041:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/RP2040AdvancedBreakoutBoard-516264092b230a5d7a9ab0301c5ab044.jpg"},8731:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/RP2040AdvancedBreakoutBoardUSBPassthrough-bbc8290f1aff600aca5391f8ebfdd6a3.jpg"},5759:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/RP2040MiniBreakoutBoard-e49f1ac102faaa9df72098e4d020a913.jpg"},7689:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"},6474:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ReflexCtrlSNES-329d41785cf812c4d97371024025b635.jpg"},6968:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ReflexEncode_v1.2-6ec01ae52a2e3bea762f3f530c5f5d2f.jpg"},2144:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ReflexEncode_v2.0-01206d5b28fb67f248c46a7b26bc44da.jpg"},5547:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/SGFDevices-f6ff9fa0ff81ac8e6e387a13e15d9ad5.jpg"},2984:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/SparkFunProMicro-4485b8dc8e1c68632631500f9f75bafa.jpg"},9729:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Stress-6a27a0e6b8a386cded448126fcf747e6.jpg"},2059:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/WaveshareZero-7bfb055e0bd1c65aa6c137d8cac2db27.jpg"}}]);