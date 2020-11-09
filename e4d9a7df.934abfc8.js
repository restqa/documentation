(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(s,l(l({ref:t},b),{},{components:n})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cucumber-export-line-9b468d894e56b857f64bcffdb2eaf8b1.jpg"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(106)),o={id:"line",title:"Line"},l={unversionedId:"alerting/line",id:"alerting/line",isDocsHomePage:!1,title:"Line",description:"Setting a Line alerting is simple:",source:"@site/docs/alerting/line.md",slug:"/alerting/line",permalink:"/alerting/line",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/line.md",version:"current",sidebar:"someSidebar",previous:{title:"Microsoft team",permalink:"/alerting/microsoft-teams"},next:{title:"Webhook",permalink:"/alerting/webhook"}},c=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],b={rightToc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Setting a ",Object(i.b)("strong",{parentName:"p"},"Line")," alerting is simple:"),Object(i.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),Object(i.b)("li",{parentName:"ul"},"Create a line notify token here:  ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://notify-bot.line.me"}),"https://notify-bot.line.me")),Object(i.b)("li",{parentName:"ul"},"Valid RestQA config file.")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"environments:\n  - name: sandbox\n    outputs:\n      - type: 'line'\n        enabled: true\n        config: \n          token: !env-var LINE_TOKEN,\n          onlyFailed: false\n          reportUrl: 'http://example.com/test-report/{uuid}'\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Property")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Description")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"th"},"Default")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"token")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The line notfication token"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"onlyFailed")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Trigger the hook only for test failure"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"true"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"reportUrl")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The url to access to your detail test report if you have one (",Object(i.b)("inlineCode",{parentName:"td"},"{uuid}")," is a placeholder)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"About the ",Object(i.b)("inlineCode",{parentName:"p"},"token")," we recommend to use the ",Object(i.b)("inlineCode",{parentName:"p"},"!env-var")," keyword in order to use an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/getting-started/environment-variable"}),"environment variable")," and not expose a sensitve token into your configuration.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"line example",src:n(144).default})))}p.isMDXComponent=!0}}]);