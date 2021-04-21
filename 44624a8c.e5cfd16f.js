(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(106)),i={id:"version",title:"Versions"},c={unversionedId:"getting-started/version",id:"getting-started/version",isDocsHomePage:!1,title:"Versions",description:"RestQA is on constant improvement, we are happy to share more and more feature.",source:"@site/docs/getting-started/version.md",slug:"/getting-started/version",permalink:"/getting-started/version",editUrl:"https://github.com/restqa/documentation/edit/master/docs/getting-started/version.md",version:"current",sidebar:"someSidebar",previous:{title:"Test execution",permalink:"/getting-started/run"},next:{title:"Understand the test suites",permalink:"/tests/introduction"}},s=[],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"RestQA is on constant improvement, we are happy to share more and more feature.\nHowever from a consumer perspective, this can be difficult to keep track on the latest version."),Object(a.b)("p",null,"In order to stay up to date, run the command: "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"npm i -g @restqa/restqa@latest\n")),Object(a.b)("p",null,"This command will install the latest version of RestQA on computer"),Object(a.b)("p",null,"Take a look at the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/restqa/restqa/blob/master/CHANGELOG.md"}),"CHANGELOG")," to track the changes."))}u.isMDXComponent=!0}}]);