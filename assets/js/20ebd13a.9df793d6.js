(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[904],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2457:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(4034),i=t(9973),a=(t(7294),t(3905)),l=["components"],o={id:"config-restqapi",sidebar_label:"Configuration",title:"Enable RestQapi"},s={unversionedId:"tests/plugins/config-restqapi",id:"tests/plugins/config-restqapi",isDocsHomePage:!1,title:"Enable RestQapi",description:"Description",source:"@site/docs/tests/plugins/config-restqapi.md",sourceDirName:"tests/plugins",slug:"/tests/plugins/config-restqapi",permalink:"/tests/plugins/config-restqapi",editUrl:"https://github.com/restqa/documentation/edit/master/docs/tests/plugins/config-restqapi.md",version:"current",sidebar_label:"Configuration",frontMatter:{id:"config-restqapi",sidebar_label:"Configuration",title:"Enable RestQapi"},sidebar:"someSidebar",previous:{title:"Understand the step definition",permalink:"/tests/introduction"},next:{title:"Features",permalink:"/tests/restqapi/features"}},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[{value:"environments[].plugins.name",id:"environmentspluginsname",children:[]},{value:"environments[].plugins.config.url",id:"environmentspluginsconfigurl",children:[]},{value:"environments[].plugins.config.insecure",id:"environmentspluginsconfiginsecure",children:[]},{value:"environments[].plugins.config.performance.tool",id:"environmentspluginsconfigperformancetool",children:[]},{value:"environments[].plugins.config.performance.outputFolder",id:"environmentspluginsconfigperformanceoutputfolder",children:[]},{value:"environments[].plugins.config.performance.onlySuccess",id:"environmentspluginsconfigperformanceonlysuccess",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"By using the RestQapi plugin you'll get access to many step definition suppporting you on create test scenario for your ",(0,a.kt)("strong",{parentName:"p"},"Rest API"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".restqa.yml" {9-12}',title:'".restqa.yml"',"{9-12}":!0},"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: @restqa/restqapi\n        config:\n          url: https://uat.api.restqa.io\n    outputs:\n      - type: slack\n        enabled: true\n        config: \n          url: http://example.slack.com\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"environmentspluginsname"},"environments[].plugins.name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," ",(0,a.kt)("inlineCode",{parentName:"li"},"@restqa/restqapi"))),(0,a.kt)("p",null,"Define plugin name"),(0,a.kt)("h3",{id:"environmentspluginsconfigurl"},"environments[].plugins.config.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"yes"))),(0,a.kt)("p",null,"Define the Url host of your API gateway for the selected environment."),(0,a.kt)("h3",{id:"environmentspluginsconfiginsecure"},"environments[].plugins.config.insecure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default:"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Define if you want to ignore the SSL certificate for this specific url."),(0,a.kt)("h3",{id:"environmentspluginsconfigperformancetool"},"environments[].plugins.config.performance.tool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Available values")," ",(0,a.kt)("inlineCode",{parentName:"li"},"artillery"))),(0,a.kt)("p",null,"Define the tool that you want to use for your load testing"),(0,a.kt)("h3",{id:"environmentspluginsconfigperformanceoutputfolder"},"environments[].plugins.config.performance.outputFolder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default:"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"tests/performance"))),(0,a.kt)("p",null,"Define the folder where the performance scenario should be generated"),(0,a.kt)("h3",{id:"environmentspluginsconfigperformanceonlysuccess"},"environments[].plugins.config.performance.onlySuccess"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default:"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"Define if you want to generate the performance scenario only for the functional scenario that passed"))}c.isMDXComponent=!0}}]);