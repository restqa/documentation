(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[1992],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8852:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o=["components"],l={id:"line",title:"Line"},p={unversionedId:"alerting/line",id:"alerting/line",isDocsHomePage:!1,title:"Line",description:"Setting a Line alerting is simple:",source:"@site/docs/alerting/line.md",sourceDirName:"alerting",slug:"/alerting/line",permalink:"/alerting/line",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/line.md",version:"current",frontMatter:{id:"line",title:"Line"},sidebar:"someSidebar",previous:{title:"Microsoft team",permalink:"/alerting/microsoft-teams"},next:{title:"Webhook",permalink:"/alerting/webhook"}},u=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Command",id:"command",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],m={toc:u};function c(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Setting a ",(0,i.kt)("strong",{parentName:"p"},"Line")," alerting is simple:"),(0,i.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),(0,i.kt)("li",{parentName:"ul"},"Create a line notify token here:  ",(0,i.kt)("a",{parentName:"li",href:"https://notify-bot.line.me"},"https://notify-bot.line.me")),(0,i.kt)("li",{parentName:"ul"},"Valid RestQA config file.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"environments:\n  - name: sandbox\n    outputs:\n      - type: 'line'\n        enabled: true\n        config: \n          token: !env-var LINE_TOKEN,\n          onlyFailed: false\n          reportUrl: 'http://example.com/test-report/{uuid}'\n")),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("p",null,"If you don't want to configure this part manually you can also use the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"restqa install line\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"th"},"Default")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The line notfication token"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onlyFailed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Trigger the hook only for test failure"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reportUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The url to access to your detail test report if you have one (",(0,i.kt)("inlineCode",{parentName:"td"},"{uuid}")," is a placeholder)"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"About the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," we recommend to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"!env-var")," keyword in order to use an ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/environment-variable"},"environment variable")," and not expose a sensitve token into your configuration.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"line example",src:n(8910).Z})))}c.isMDXComponent=!0},8910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cucumber-export-line-9b468d894e56b857f64bcffdb2eaf8b1.jpg"}}]);