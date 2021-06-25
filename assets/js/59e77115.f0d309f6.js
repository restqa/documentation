(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[6312],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},627:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],l={id:"plugins",sidebar_label:"Plugins",title:"Extend RestQA capabilies"},s=void 0,u={unversionedId:"getting-started/plugins",id:"getting-started/plugins",isDocsHomePage:!1,title:"Extend RestQA capabilies",description:"Introduction",source:"@site/docs/getting-started/plugins.md",sourceDirName:"getting-started",slug:"/getting-started/plugins",permalink:"/getting-started/plugins",editUrl:"https://github.com/restqa/documentation/edit/master/docs/getting-started/plugins.md",version:"current",frontMatter:{id:"plugins",sidebar_label:"Plugins",title:"Extend RestQA capabilies"},sidebar:"someSidebar",previous:{title:"Dashboard",permalink:"/getting-started/dashboard"},next:{title:"Versions",permalink:"/getting-started/version"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Finding plugins",id:"finding-plugins",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The RestQA promise is to be able to fit to your project, however this a huge challenge. Each user has a different need.\nBy tackling this challenge we decided to build RestQA on Plugin system.\nThis plugin system enable the modularity requied in order to extend the initial capababilities of RestQA."),(0,a.kt)("p",null,"A plugin will import built-in step definition. For your information all the step definition added by default into RestQA are coming from the plugin ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/restqa/restqapi"},"RestQapi")),(0,a.kt)("p",null,"Since RestQA aims to be a community driven tool, we can imagine that at some point we will have the plugin available to cover the needs of everyone."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Plugin are based on NodeJs, then it means they should be availabe on a package directory (usually Npm).\nAs any npm package you will need to install into your project directory such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @restqa/faker-plugin\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @restqa/faker-plugin\n")),(0,a.kt)("p",null,"Once the module is installed you have to edit your ",(0,a.kt)("inlineCode",{parentName:"p"},".restqa.yml")," in order to enable the plugin into your project.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".restqa.yml" {13-16}',title:'".restqa.yml"',"{13-16}":!0},"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: uat\n    default: true\n    plugins:\n      - name: @restqa/restqapi\n        config:\n          url: https://uat.api.restqa.io\n      - name: @restqa/faker-plugin\n       config:\n         locale: 'fr' # default en\n         prefix: 'faker' # the prefix used for the place holders\n    outputs:\n      - type: discord\n        enabled: true\n        config: \n          url: http://example.discord.com\n")),(0,a.kt)("p",null,"As you can see under the section plugin we added the lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: @restqa/faker-plugin\n  config:\n    locale: 'en' \n    prefix: 'faker'\n")),(0,a.kt)("p",null,"It means from now, you can use all the built-in step definition from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@restqa/faker-plugin")," into your feature files."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When you are installing plugin do not forget to save the plugin into the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and update your continuous integration tool to add the step ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," before running your tests.")),(0,a.kt)("h2",{id:"finding-plugins"},"Finding plugins"),(0,a.kt)("p",null,"You will be able to find the all the official RestQA plugin within this documentation under the section ",(0,a.kt)("a",{parentName:"p",href:"../tests/introduction"},"Step Definition")),(0,a.kt)("p",null,"However to access to a larger list of plugin mostly created by the community, you should take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=keywords:restqa-plugin"},"restqa plugin available on npmjs.com")))}d.isMDXComponent=!0}}]);