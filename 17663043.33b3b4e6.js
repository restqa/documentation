(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(h,l(l({ref:t},o),{},{components:n})):a.a.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(112)),c={id:"features",sidebar_label:"Gherkin References",title:"Gherkin References"},l={unversionedId:"tests/restqapi/features",id:"tests/restqapi/features",isDocsHomePage:!1,title:"Gherkin References",description:"Features",source:"@site/docs/tests/restqapi/features.md",slug:"/tests/restqapi/features",permalink:"/tests/restqapi/features",editUrl:"https://github.com/restqa/documentation/edit/master/docs/tests/restqapi/features.md",version:"current",sidebar_label:"Gherkin References",sidebar:"someSidebar",previous:{title:"Understand the test suites",permalink:"/tests/introduction"},next:{title:"Given: Describe your context",permalink:"/tests/restqapi/given"}},s=[{value:"Tags",id:"tags",children:[{value:"@skip",id:"skip",children:[]},{value:"@wip",id:"wip",children:[]},{value:"@insecure",id:"insecure",children:[]}]}],o={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"features"},"Features"),Object(i.b)("p",null,"In order to undertand better the best way to write scenario, you should first be comfortable with cucumber, take a look at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cucumber.io/docs/gherkin/reference/"}),"cucumber documentation")," to fully understand the diifferent definition on the current page."),Object(i.b)("h2",{id:"tags"},"Tags"),Object(i.b)("h3",{id:"skip"},"@skip"),Object(i.b)("p",null,"Skip the actual scenario"),Object(i.b)("p",null,"At the Scenario level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@skip\nScenario: This Scenario will be skipped\nGiven I have the api gateway\n...\n")),Object(i.b)("p",null,"At the Feature level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@skip\nFeature: All the scenario in this feature will be skipped\n\nScenario: I will be skipped\nGiven I have the api gateway\n...\n\n\nScenario: I will be skipped as well\nGiven I have the api gateway\n...\n")),Object(i.b)("h3",{id:"wip"},"@wip"),Object(i.b)("p",null,"Define the current scenario as work in progress. (alias @skip)"),Object(i.b)("p",null,"At the Scenario level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@wip\nScenario: This Scenario will be skipped \nGiven I have the api gateway\n...\n")),Object(i.b)("p",null,"At the Feature level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@wip\nFeature: All the scenario in this feature will be skipped\n\nScenario: I will be skipped\nGiven I have the api gateway\n...\n\n\nScenario: I will be skipped as well\nGiven I have the api gateway\n...\n")),Object(i.b)("h3",{id:"insecure"},"@insecure"),Object(i.b)("p",null,"On some case, the api call might face some ssl validation issue, in ordert ignore the ssl certificate validity you can use the tag ",Object(i.b)("inlineCode",{parentName:"p"},"@insecure")),Object(i.b)("p",null,"At the Scenario level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@insecure\nScenario: This scenario will ignore the ssl certificate\nGiven I have the api gateway\n...\n")),Object(i.b)("p",null,"At the Feature level: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gherkin"}),"\n@wip\nFeature: All the scenario in this feature will ignore the ssl certificate\n\nScenario: I will ignore the ssl certifiicate\nGiven I have the api gateway\n...\n\n\nScenario: I will ignore the ssl certificate  as well\nGiven I have the api gateway\n...\n")))}p.isMDXComponent=!0}}]);