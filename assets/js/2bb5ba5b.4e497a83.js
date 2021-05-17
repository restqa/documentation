(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[9995],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5144:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var r=t(4034),i=t(9973),a=(t(7294),t(3905)),l={id:"config-faker-plugin",sidebar_label:"Configuration",title:"Enable the Faker Plugin"},o={unversionedId:"tests/plugins/config-faker-plugin",id:"tests/plugins/config-faker-plugin",isDocsHomePage:!1,title:"Enable the Faker Plugin",description:"Generate fake data for Test Scenarios",source:"@site/docs/tests/plugins/config-faker-plugin.md",sourceDirName:"tests/plugins",slug:"/tests/plugins/config-faker-plugin",permalink:"/tests/plugins/config-faker-plugin",editUrl:"https://github.com/restqa/documentation/edit/master/docs/tests/plugins/config-faker-plugin.md",version:"current",sidebar_label:"Configuration",frontMatter:{id:"config-faker-plugin",sidebar_label:"Configuration",title:"Enable the Faker Plugin"},sidebar:"someSidebar",previous:{title:"Then: Describe an expected outcome",permalink:"/tests/restqapi/then"},next:{title:"Features",permalink:"/tests/faker-plugin/features"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[{value:"Example",id:"example",children:[]}]},{value:"Options",id:"options",children:[{value:"environments[].plugins.name",id:"environmentspluginsname",children:[]},{value:"environments[].plugins.config.locale",id:"environmentspluginsconfiglocale",children:[]},{value:"environments[].plugins.config.prefix",id:"environmentspluginsconfigprefix",children:[]}]}],u={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generate fake data for Test Scenarios")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Are you not fed up of using John Doe in your test automation? \ud83d\ude06 "),(0,a.kt)("p",null,"Or What will be the behavior of your product  on the production while using real data?"),(0,a.kt)("p",null,"Thjs a good question right? And The best way to answer to it is to start thinking of having test scenario that are using different data each time."),(0,a.kt)("p",null,"This should help you on doint more exploration testing... And this exactly how this plugin want to help you."),(0,a.kt)("p",null,"Once installed this plugin will extend the RestQA capability in order to generate fake data on your scenario."),(0,a.kt)("p",null,"This plugins is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Marak/faker.js"},"faker.js")," library"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You will need to use npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @restqa/faker-plugin\n")),(0,a.kt)("p",null,"Then in your ",(0,a.kt)("inlineCode",{parentName:"p"},".restqa.yml")," configuration file you will have to add the follow snippet under the ",(0,a.kt)("inlineCode",{parentName:"p"},"environments.*.plugins")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: @restqa/faker-plugin\n  config:\n    locale: 'en' \n    prefix: 'faker'\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".restqa.yml" {13-16}',title:'".restqa.yml"',"{13-16}":!0},"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: @restqa/restqapi\n        config:\n          url: https://uat.api.restqa.io\n      - name: @restqa/faker-plugin\n       config:\n         locale: 'fr' # default en\n         prefix: 'faker' # the prefix used for the place holders\n    outputs:\n      - type: discord\n        enabled: true\n        config: \n          url: http://example.discord.com\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"environmentspluginsname"},"environments[].plugins.name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"yes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," ",(0,a.kt)("inlineCode",{parentName:"li"},"@restqa/faker-plugin"))),(0,a.kt)("p",null,"Define plugin name"),(0,a.kt)("h3",{id:"environmentspluginsconfiglocale"},"environments[].plugins.config.locale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default")," ",(0,a.kt)("inlineCode",{parentName:"li"},"en"))),(0,a.kt)("p",null,"The local to use in order to generate fake data ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Marak/Faker.js#Localization"},"available values")),(0,a.kt)("h3",{id:"environmentspluginsconfigprefix"},"environments[].plugins.config.prefix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default")," ",(0,a.kt)("inlineCode",{parentName:"li"},"faker"))),(0,a.kt)("p",null,"The prefix to identify the placeholder that required to be faked (example: ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ faker.music.genre }}"),")"))}s.isMDXComponent=!0}}]);