"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"How to Contribute",pagination_next:null,pagination_prev:null},a="How to Contribute",l={unversionedId:"development/contribution-guide",id:"development/contribution-guide",title:"How to Contribute",description:"Thank you for taking the time to read this and contributing to the project!",source:"@site/docs/development/contribution-guide.mdx",sourceDirName:"development",slug:"/development/contribution-guide",permalink:"/docusaurus-test/development/contribution-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Contribute",pagination_next:null,pagination_prev:null},sidebar:"contributeSidebar"},u={},s=[{value:"Project Overview",id:"project-overview",level:2},{value:"How do I make a contribution?",id:"how-do-i-make-a-contribution",level:2},{value:"Coding Conventions",id:"coding-conventions",level:2},{value:"General Guidelines",id:"general-guidelines",level:2},{value:"Documentation",id:"documentation",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-contribute"},"How to Contribute"),(0,r.kt)("p",null,"Thank you for taking the time to read this and contributing to the project! "),(0,r.kt)("p",null,"Third-party contributions help us grow and improve GP2040-CE. We want to make the pull request and contribution process useful and easy for both contributors and maintainers. "),(0,r.kt)("p",null,"To this end we\u2019ve put together some guidelines for contributors to help your pull request be accepted without major changes."),(0,r.kt)("h2",{id:"project-overview"},"Project Overview"),(0,r.kt)("p",null,"GP2040-CE is largely written in C/C++, with a significant portion of the web configurator written in JavaScript within a React framework."),(0,r.kt)("h2",{id:"how-do-i-make-a-contribution"},"How do I make a contribution?"),(0,r.kt)("p",null,"Never made an open source contribution before? Wondering how contributions work in GP2040-CE? Here\u2019s a quick rundown!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up for a GitHub account."),(0,r.kt)("li",{parentName:"ol"},"Find an issue you are interested in addressing, or a feature you would like to add."),(0,r.kt)("li",{parentName:"ol"},"Fork the repository associated with the issue to your GitHub account. This means that you will have a copy of the repository under ",(0,r.kt)("inlineCode",{parentName:"li"},"your-GitHub-username/GP2040-CE"),"."),(0,r.kt)("li",{parentName:"ol"},"Clone the repository to your local machine using ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/OpenStickCommunity/GP2040-CE")),(0,r.kt)("li",{parentName:"ol"},"If you\u2019re working on a new feature consider opening an issue to talk with us about the work you\u2019re about to undertake."),(0,r.kt)("li",{parentName:"ol"},"Create a new branch for your fix using ",(0,r.kt)("inlineCode",{parentName:"li"},"git checkout -b branch-name-here"),"."),(0,r.kt)("li",{parentName:"ol"},"Make the appropriate changes for the issue you are trying to address or the feature that you want to add."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"git add insert-paths-of-changed-files-here")," to add the file contents of the changed files to the \u201csnapshot\u201d git uses to manage the state of the project, also known as the index."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "Insert a short message of the changes made here"')," to store the contents of the index with a descriptive message."),(0,r.kt)("li",{parentName:"ol"},"Push the changes to your repository on GitHub using ",(0,r.kt)("inlineCode",{parentName:"li"},"git push origin branch-name-here"),"."),(0,r.kt)("li",{parentName:"ol"},"Submit a pull request to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenStickCommunity/GP2040-CE"},"OpenStickCommunity/GP2040-CE"),"."),(0,r.kt)("li",{parentName:"ol"},"Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so \u201cAdded more log outputting to resolve #4352\u201d."),(0,r.kt)("li",{parentName:"ol"},"In the description of the pull request explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It\u2019s OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!"),(0,r.kt)("li",{parentName:"ol"},"Wait for the pull request to be reviewed by a maintainer."),(0,r.kt)("li",{parentName:"ol"},"Make changes to the pull request if the reviewing maintainer recommends them."),(0,r.kt)("li",{parentName:"ol"},"Celebrate your success after your pull request is merged!")),(0,r.kt)("h2",{id:"coding-conventions"},"Coding Conventions"),(0,r.kt)("h2",{id:"general-guidelines"},"General Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Before you contribute"),": Please make sure your fork is up to date with the upstream ",(0,r.kt)("inlineCode",{parentName:"li"},"GP2040-CE")," repo. This will help minimize CI failures that may not occur for you when compiling locally."),(0,r.kt)("li",{parentName:"ul"},"Separate PRs into logical units. For example, do not submit one PR covering two separate features, instead submit a separate PR for each feature."),(0,r.kt)("li",{parentName:"ul"},"Check for unnecessary whitespace with ",(0,r.kt)("inlineCode",{parentName:"li"},"git diff --check")," before committing."),(0,r.kt)("li",{parentName:"ul"},"Make sure your code change actually compiles."),(0,r.kt)("li",{parentName:"ul"},"Make sure commit messages are understandable on their own. You should put a short description (no more than 70 characters) on the first line, the second line should be empty, and on the 3rd and later lines you should describe your commit in detail, if required.")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Documentation is one of the easiest ways to get started contributing to GP2040-CE. Finding places where the documentation is wrong or incomplete and fixing those is easy! We also very badly need someone to edit our documentation, so if you have editing skills but aren\u2019t sure where or how to jump in please ",(0,r.kt)("a",{parentName:"p",href:"getting-help-support",title:"GP2040-CE | Getting Help"},"reach out for help"),"!"))}d.isMDXComponent=!0}}]);