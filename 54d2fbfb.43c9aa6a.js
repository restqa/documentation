(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||a;return n?i.a.createElement(d,p(p({ref:t},c),{},{components:n})):i.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(110)),o={id:"plugin-api",title:"Plugin API"},p={unversionedId:"api/plugin-api",id:"api/plugin-api",isDocsHomePage:!1,title:"Plugin API",description:"RestQA plugins are the key processor of the test execution.",source:"@site/docs/api/plugin-api.md",slug:"/api/plugin-api",permalink:"/api/plugin-api",editUrl:"https://github.com/restqa/documentation/edit/master/docs/api/plugin-api.md",version:"current",sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/api/api-reference"},next:{title:"Output API",permalink:"/api/output-api"}},l=[{value:"Simple Example",id:"simple-example",children:[]},{value:"Options",id:"options",children:[{value:"name",id:"name",children:[]},{value:"config",id:"config",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"RestQA plugins are the key processor of the test execution."),Object(a.b)("p",null,"The plugins are the component that will import all the built-in step definition."),Object(a.b)("p",null,"In order to use a specific plugin you will need to import it into your configuration file under the environment section."),Object(a.b)("h2",{id:"simple-example"},"Simple Example"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can define RestQapi plugin for the UAT environement")),Object(a.b)("p",null,"Using the template below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{9-12}","{9-12}":!0}),"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: restqapi\n        config:\n          url: https://uat.api.restqa.io\n    outputs:\n      - type: slack\n        enabled: true\n        config: \n          url: http://example.slack.com\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Type")," ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Required")," ",Object(a.b)("inlineCode",{parentName:"li"},"yes"))),Object(a.b)("p",null,"Define the name of the plugin that need to be loaded. "),Object(a.b)("h3",{id:"config"},"config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Type")," ",Object(a.b)("inlineCode",{parentName:"li"},"object")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Required")," ",Object(a.b)("inlineCode",{parentName:"li"},"yes"))),Object(a.b)("p",null,"Specific configuration for a plugin.  "))}u.isMDXComponent=!0}}]);