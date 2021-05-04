(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(d,l(l({ref:n},c),{},{components:t})):i.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(110)),o={id:"config-restqapi",sidebar_label:"Configuration",title:"Enable RestQapi"},l={unversionedId:"tests/plugins/config-restqapi",id:"tests/plugins/config-restqapi",isDocsHomePage:!1,title:"Enable RestQapi",description:"Description",source:"@site/docs/tests/plugins/config-restqapi.md",slug:"/tests/plugins/config-restqapi",permalink:"/tests/plugins/config-restqapi",editUrl:"https://github.com/restqa/documentation/edit/master/docs/tests/plugins/config-restqapi.md",version:"current",sidebar_label:"Configuration",sidebar:"someSidebar",previous:{title:"Understand the step definition",permalink:"/tests/introduction"},next:{title:"Gherkin References",permalink:"/tests/restqapi/features"}},s=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[{value:"environments[].plugins.name",id:"environmentspluginsname",children:[]},{value:"environments[].plugins.config.url",id:"environmentspluginsconfigurl",children:[]}]}],c={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"By using the RestQapi plugin you'll get access to many step definition suppporting you on create test scenario for your ",Object(a.b)("strong",{parentName:"p"},"Rest API"),"."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".restqa.yml" {9-12}',title:'".restqa.yml"',"{9-12}":!0}),"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: @restqa/restqapi\n        config:\n          url: https://uat.api.restqa.io\n    outputs:\n      - type: slack\n        enabled: true\n        config: \n          url: http://example.slack.com\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"environmentspluginsname"},"environments[].plugins.name"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Type:")," ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Required:")," ",Object(a.b)("inlineCode",{parentName:"li"},"yes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"value")," ",Object(a.b)("inlineCode",{parentName:"li"},"@restqa/restqapi"))),Object(a.b)("p",null,"Define plugin name"),Object(a.b)("h3",{id:"environmentspluginsconfigurl"},"environments[].plugins.config.url"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Type:")," ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Required:")," ",Object(a.b)("inlineCode",{parentName:"li"},"yes"))),Object(a.b)("p",null,"Define the Url host of your API gateway for the selected environment."))}p.isMDXComponent=!0}}]);