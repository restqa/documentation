(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),s=a,O=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return n?r.a.createElement(O,b(b({ref:t},l),{},{components:n})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cucumber-export-mattermost-9bb8aeca09886732de24222b267ae803.png"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(106)),i={id:"mattermost",title:"Mattermost"},b={unversionedId:"alerting/mattermost",id:"alerting/mattermost",isDocsHomePage:!1,title:"Mattermost",description:"Setting a Mattermost alerting is simple:",source:"@site/docs/alerting/mattermost.md",slug:"/alerting/mattermost",permalink:"/documentation/docs/alerting/mattermost",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/mattermost.md",version:"current",sidebar:"someSidebar",previous:{title:"Discord",permalink:"/documentation/docs/alerting/discord"},next:{title:"Microsoft team",permalink:"/documentation/docs/alerting/microsoft-teams"}},c=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function m(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Setting a ",Object(o.b)("strong",{parentName:"p"},"Mattermost")," alerting is simple:"),Object(o.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),Object(o.b)("li",{parentName:"ul"},"Create a slack incoming webhook : ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mattermost.com/developer/webhooks-incoming.html"}),"Webhooks incoming")),Object(o.b)("li",{parentName:"ul"},"Valid RestQA config file.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"environments:\n  - name: sandbox\n    outputs:\n      - type: 'mattermost'\n        enabled: true\n        config: \n          url: !env-var SLACK_WEBHOOK_URL\n          onlyFailed: false\n          showErrors: false\n          reportUrl: 'http://example.com/test-report/{uuid}'\n          channel: 'testing-result'\n          username: 'RestQA'\n          iconUrl: ''\n          iconEmoji: laughing\n          displayedErrorsLimit: 25\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Property")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Description")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Default")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"url")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The mattermost incoming webhook url"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"onlyFailed")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Trigger the hook only for test failure"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"true"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"showErrors")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Show the error message within slack"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"reportUrl")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The url to access to your detail test report if you have one (",Object(o.b)("inlineCode",{parentName:"td"},"{uuid}")," is a placeholder)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"channel")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The channel to send messages to"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"username")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Username to post as (only works if bot is allowed to change its name)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Link to bot profile picture (only works if bot is allowed to change image)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"iconEmoji")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An emoji tag without the ':'s for bot profile picture (only works if bot is allowed to change image)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"displayedErrorsLimit")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Limit the number of errors displayed in one message"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"25"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"About the ",Object(o.b)("inlineCode",{parentName:"p"},"config.url")," we recommend to use the ",Object(o.b)("inlineCode",{parentName:"p"},"!env-var")," keyword in order to use an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/environment-variable"}),"environment variable")," and not expose a sensitve url into your configuration.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("img",{alt:"mattermost example",src:n(138).default})))}m.isMDXComponent=!0}}]);