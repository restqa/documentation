(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,d=s["".concat(i,".").concat(O)]||s[O]||u[O]||l;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(106)),i={id:"cli",title:"Cli"},c={unversionedId:"api/cli",id:"api/cli",isDocsHomePage:!1,title:"Cli",description:"Start a new restqa project",source:"@site/docs/api/cli.md",slug:"/api/cli",permalink:"/api/cli",editUrl:"https://github.com/restqa/documentation/edit/master/docs/api/cli.md",version:"current",sidebar:"someSidebar",previous:{title:"Grafana",permalink:"/monitoring/grafana"},next:{title:"RestQA configuration file sample",permalink:"/api/restqa-config"}},b=[{value:"Start a new restqa project",id:"start-a-new-restqa-project",children:[]},{value:"Install a new plugin",id:"install-a-new-plugin",children:[]},{value:"Step definition",id:"step-definition",children:[{value:"Given",id:"given",children:[]},{value:"When",id:"when",children:[]},{value:"Then",id:"then",children:[]}]},{value:"Run the test",id:"run-the-test",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"start-a-new-restqa-project"},"Start a new restqa project"),Object(l.b)("p",null,"Test Automation\nWorkflows can not only be started by triggers, webhooks, or manually via the Editor. It is also possible to start them directly via the CLI."),Object(l.b)("p",null,"Execute a saved workflow by its ID:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa init\n")),Object(l.b)("h2",{id:"install-a-new-plugin"},"Install a new plugin"),Object(l.b)("p",null,"Retrieve the list of available plugin:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa install \n")),Object(l.b)("p",null,"If you want to install the slack plugin:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa install slack\n")),Object(l.b)("p",null,"example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa install <PLUGIN>\n")),Object(l.b)("h2",{id:"step-definition"},"Step definition"),Object(l.b)("p",null,"To get the list of different steps available for your scenario"),Object(l.b)("h3",{id:"given"},"Given"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa steps given\n")),Object(l.b)("h3",{id:"when"},"When"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa steps when\n")),Object(l.b)("h3",{id:"then"},"Then"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa steps then\n")),Object(l.b)("h2",{id:"run-the-test"},"Run the test"),Object(l.b)("p",null,"You can run the test by using the command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"restqa run\n")),Object(l.b)("p",null,"A few options are available :"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Alias"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--config")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-c")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify the configuration file to use"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},".restqa.yml"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," --env")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-e")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify the environement to pick from the configuration file"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default environment in the config")))))}p.isMDXComponent=!0}}]);