(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(110)),o={id:"discord",title:"Discord"},c={unversionedId:"alerting/discord",id:"alerting/discord",isDocsHomePage:!1,title:"Discord",description:"Setting a Discord alerting is simple:",source:"@site/docs/alerting/discord.md",slug:"/alerting/discord",permalink:"/alerting/discord",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/discord.md",version:"current",sidebar:"someSidebar",previous:{title:"Slack",permalink:"/alerting/slack"},next:{title:"Mattermost",permalink:"/alerting/mattermost"}},b=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Command",id:"command",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:b};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Setting a ",Object(i.b)("strong",{parentName:"p"},"Discord")," alerting is simple:"),Object(i.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),Object(i.b)("li",{parentName:"ul"},"Create a Discord webhook : ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"}),"Guide to create a webhook on Discord")),Object(i.b)("li",{parentName:"ul"},"Valid RestQA configuration file")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"environments:\n  - name: sandbox\n    outputs:\n      - type: 'discord'\n        enabled: true\n        config: \n          url: !env-var DISCORD_WEBHOOK_URL\n          onlyFailed: false\n          showErrors: false\n          reportUrl: 'http://example.com/test-report/{uuid}'\n          username: 'bot-name'\n")),Object(i.b)("h2",{id:"command"},"Command"),Object(i.b)("p",null,"If you don't want configure this part manually you can also use the command line :"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"restqa install discord\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Description")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Default")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"url")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The discord webhook url"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"onlyFailed")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Trigger the hook only for test failure"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"true"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"showErrors")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the error message within discord"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"reportUrl")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The url to access to your detail test report if you have one (",Object(i.b)("inlineCode",{parentName:"td"},"{uuid}")," is a placeholder)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"tts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"enable TTS for the message"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"false"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"username")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alternative name for bot, uses the name it has in discord UI by default if nothing specified"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"About the ",Object(i.b)("inlineCode",{parentName:"p"},"config.url")," we recommend to use ",Object(i.b)("inlineCode",{parentName:"p"},"!env-var")," keyword in order to use an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/environment-variable"}),"environment variable")," and not expose a sensitve url into your configuration.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"discord example",src:r(151).default})))}d.isMDXComponent=!0},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,u=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},151:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/cucumber-export-discord-96aaf64fabfbf7039ef1f2e4f77d48bb.png"}}]);