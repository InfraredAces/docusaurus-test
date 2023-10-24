"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5708],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"Templates",pagination_next:null,pagination_prev:null},i="Templates",l={unversionedId:"development/templates",id:"development/templates",title:"Templates",description:"Configuration Templates",source:"@site/docs/development/templates.md",sourceDirName:"development",slug:"/development/templates",permalink:"/docusaurus-test/development/templates",draft:!1,tags:[],version:"current",frontMatter:{title:"Templates",pagination_next:null,pagination_prev:null},sidebar:"contributeSidebar"},s={},p=[{value:"Configuration Templates",id:"configuration-templates",level:2},{value:"README Template",id:"readme-template",level:3},{value:"Documentation Templates",id:"documentation-templates",level:2},{value:"Page Template",id:"page-template",level:3},{value:"Add-On Template",id:"add-on-template",level:3},{value:"Downloads Page Configurations",id:"downloads-page-configurations",level:3},{value:"Microcontroller Boards",id:"microcontroller-boards",level:4},{value:"Controllers",id:"controllers",level:4}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"templates"},"Templates"),(0,r.kt)("h2",{id:"configuration-templates"},"Configuration Templates"),(0,r.kt)("h3",{id:"readme-template"},"README Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"# Board Name\n\n![Image of Board](assets/board-image.jpeg)\n\nBasic description of the board\n\n(RP2040 Pinout as a markdown table)\n| GPIO Pin | Input/Function |\n|:--------:|:--------------:|\n|     0    |                |\n|     1    |                |\n|     2    |                |\n|     3    |                |\n|     4    |                |\n|     5    |                |\n|     6    |                |\n|     7    |                |\n|     8    |                |\n|     9    |                |\n|    10    |                |\n|    11    |                |\n|    12    |                |\n|    13    |                |\n|    14    |                |\n|    15    |                |\n|    16    |                |\n|    17    |                |\n|    18    |                |\n|    19    |                |\n|    20    |                |\n|    21    |                |\n|    22    |                |\n|    23    |                |\n|    24    |                |\n|    25    |                |\n|    26    |                |\n|    27    |                |\n|    28    |                |\n|    29    |                |\n\nDevice Maintainer: [Name, Username, or Business Name](https://github.com/username)\nSupported Hardware Variations: List versions/variations that share this configuration\nHardware Availability: List where one can purchase the boards that share this configuration\n")),(0,r.kt)("h2",{id:"documentation-templates"},"Documentation Templates"),(0,r.kt)("h3",{id:"page-template"},"Page Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: TITLE\n# tags:\n# - \npagination_next: null\npagination_prev: null\n---\n\n# Document Title\n\nCONTENT\n\n")),(0,r.kt)("h3",{id:"add-on-template"},"Add-On Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: ADD-ON NAME\n# tags:\n# - \npagination_next: null\npagination_prev: null\n---\n\n## Add-On Name\n\nPurpose: The intended function and purpose of this add-on for an end user.\n\n![Web Configurator Image](assets/images/gpc-add-ons-name)\n\n- Web Configurator Option 1\n- Web Configurator Option 2\n- Web Configurator Option 3\n\nHardware Requirements:\n\nList any hardware that is required for the intended functioning of this add-on.\n\nNotes\n\nProvide any miscellaneous notes that an end user may want or need to know with regard to this addon.\n")),(0,r.kt)("h3",{id:"downloads-page-configurations"},"Downloads Page Configurations"),(0,r.kt)("h4",{id:"microcontroller-boards"},"Microcontroller Boards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n    name: 'Microcontroller Board Name',\n    configName: 'ConfigName',\n    pinout: null,\n    website: 'http://www.example.com/index.html',\n    image: require('@site/docs/assets/boards/BoardName.jpg').default,\n    supported: true,\n    desc: () => (\n        <p>\n            Description of Microcontroller board and manufacturer\n        </p>\n    ),\n},\n\n")),(0,r.kt)("h4",{id:"controllers"},"Controllers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n    name: 'Controller Name',\n    configName: 'ConfigName',\n    pinout: null,\n    website: 'http://www.example.com/index.html',\n    image: require('@site/docs/assets/boards/DeviceName.jpg').default,\n    category: 'official/open/closed/legacy',\n    desc: () => \n        <p>\n            Description of the device and maker.\n        </p>,\n},\n")))}u.isMDXComponent=!0}}]);