(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(111)),c={id:"quickstart",title:"Quickstart"},o={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Give RestQA a spin",source:"@site/docs/getting-started/quickstart.md",slug:"/getting-started/quickstart",permalink:"/getting-started/quickstart",editUrl:"https://github.com/restqa/documentation/edit/master/docs/getting-started/quickstart.md",version:"current",sidebar:"someSidebar",previous:{title:"How can I contribute ?",permalink:"/contributing"},next:{title:"Configure your first test automation pipeline",permalink:"/getting-started/configuration"}},s=[{value:"Give RestQA a spin",id:"give-restqa-a-spin",children:[]},{value:"Run with Docker",id:"run-with-docker",children:[]},{value:"Install with npm",id:"install-with-npm",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"give-restqa-a-spin"},"Give RestQA a spin"),Object(i.b)("p",null,"To spin up RestQA, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx @restqa/restqa init\n")),Object(i.b)("p",null,"It will download everything that is needed to start RestQA."),Object(i.b)("h2",{id:"run-with-docker"},"Run with Docker"),Object(i.b)("p",null,"To play around with RestQA, you can also start it using Docker:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm \\\n  --name restqa \\\n  -v $PWD:/app \\\n  restqa/restqa init\n")),Object(i.b)("h2",{id:"install-with-npm"},"Install with npm"),Object(i.b)("p",null,"To install n8n globally:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @restqa/restqa -g\n")),Object(i.b)("p",null,"After the installation n8n can be started by typing in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"restqa init\n")))}u.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);