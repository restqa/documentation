(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(110)),o={id:"plugins",sidebar_label:"Plugins",title:"Extend RestQA capabilies"},l={unversionedId:"getting-started/plugins",id:"getting-started/plugins",isDocsHomePage:!1,title:"Extend RestQA capabilies",description:"Introduction",source:"@site/docs/getting-started/plugins.md",slug:"/getting-started/plugins",permalink:"/getting-started/plugins",editUrl:"https://github.com/restqa/documentation/edit/master/docs/getting-started/plugins.md",version:"current",sidebar_label:"Plugins",sidebar:"someSidebar",previous:{title:"Test execution",permalink:"/getting-started/run"},next:{title:"Versions",permalink:"/getting-started/version"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Finding plugins",id:"finding-plugins",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The RestQA promise is to be able to fit to your project, however this a huge challenge. Each user has a different need.\nBy tackling this challenge we decided to build RestQA on Plugin system.\nThis plugin system enable the modularity requied in order to extend the initial capababilities of RestQA."),Object(i.b)("p",null,"A plugin will import built-in step definition. For your information all the step definition added by default into RestQA are coming from the plugin ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/restqa/restqapi"}),"RestQapi")),Object(i.b)("p",null,"Since RestQA aims to be a community driven tool, we can imagine that at some point we will have the plugin available to cover the needs of everyone."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Plugin are based on NodeJs, then it means they should be availabe on a package directory (usually Npm).\nAs any npm package you will need to install into your project directory such as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @restqa/faker-plugin\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @restqa/faker-plugin\n")),Object(i.b)("p",null,"Once the module is installed you have to edit your ",Object(i.b)("inlineCode",{parentName:"p"},".restqa.yml")," in order to enable the plugin into your project.\nExample:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".restqa.yml" {13-16}',title:'".restqa.yml"',"{13-16}":!0}),"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: @restqa/restqapi\n        config:\n          url: https://uat.api.restqa.io\n      - name: @restqa/faker-plugin\n       config:\n         locale: 'fr' # default en\n         prefix: 'faker' # the prefix used for the place holders\n    outputs:\n      - type: discord\n        enabled: true\n        config: \n          url: http://example.discord.com\n")),Object(i.b)("p",null,"As you can see under the section plugin we added the lines:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- name: @restqa/faker-plugin\n  config:\n    locale: 'en' \n    prefix: 'faker'\n")),Object(i.b)("p",null,"It means from now, you can use all the built-in step definition from the ",Object(i.b)("inlineCode",{parentName:"p"},"@restqa/faker-plugin")," into your feature files."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When you are installing plugin do not forget to save the plugin into the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and update your continuous integration tool to add the step ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," before running your tests.")),Object(i.b)("h2",{id:"finding-plugins"},"Finding plugins"),Object(i.b)("p",null,"You will be able to find the all the official RestQA plugin within this documentation under the section ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../tests/introduction"}),"Step Definition")),Object(i.b)("p",null,"However to access to a larger list of plugin mostly created by the community, you should take a look at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=keywords:restqa-plugin"}),"restqa plugin available on npmjs.com")))}u.isMDXComponent=!0}}]);