(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[7881],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7514:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o=["components"],u={id:"run",title:"Test execution"},l=void 0,c={unversionedId:"getting-started/run",id:"getting-started/run",isDocsHomePage:!1,title:"Test execution",description:"In order to run your test scenario you will need to ensure your project contains a valid RestQA configuration file .restqa.yml",source:"@site/docs/getting-started/run.md",sourceDirName:"getting-started",slug:"/getting-started/run",permalink:"/getting-started/run",editUrl:"https://github.com/restqa/documentation/edit/master/docs/getting-started/run.md",version:"current",frontMatter:{id:"run",title:"Test execution"},sidebar:"someSidebar",previous:{title:"Environment variable",permalink:"/getting-started/environment-variable"},next:{title:"Plugins",permalink:"/getting-started/plugins"}},p=[{value:"Specify the configuration file",id:"specify-the-configuration-file",children:[]},{value:"Specify the target environemt",id:"specify-the-target-environemt",children:[]},{value:"Specify the feature file",id:"specify-the-feature-file",children:[]},{value:"Specify the Gherkin Tag",id:"specify-the-gherkin-tag",children:[]}],s={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to run your test scenario you will need to ensure your project contains a valid RestQA configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},".restqa.yml")),(0,i.kt)("p",null,"Then from there you can run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"restqa run\n")),(0,i.kt)("p",null,"The command above will search for ",(0,i.kt)("inlineCode",{parentName:"p"},"*.feature")," files recursively from the root folder and execute them."),(0,i.kt)("h3",{id:"specify-the-configuration-file"},"Specify the configuration file"),(0,i.kt)("p",null,"You can also explicitly specify a configuration file to use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," CLI option (resolved relative to cwd):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"restqa run --config my-config.yml\n")),(0,i.kt)("p",null,"Or through the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTQA_CONFIG")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"RESTQA_CONFIG=my-config.yml restqa run\n")),(0,i.kt)("h3",{id:"specify-the-target-environemt"},"Specify the target environemt"),(0,i.kt)("p",null,"You can also specify the environment to use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--env")," CLI option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"restqa run --env uat\n")),(0,i.kt)("p",null,"Or through the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTQA_ENV")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"RESTQA_ENV=uat restqa run\n")),(0,i.kt)("h3",{id:"specify-the-feature-file"},"Specify the feature file"),(0,i.kt)("h4",{id:"glob-patterm"},"Glob patterm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"restqa run tests/integration/**/*.feature\n")),(0,i.kt)("h4",{id:"feature-directory"},"Feature directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"restqa run tests/integration/\n")),(0,i.kt)("h4",{id:"specify-a-feature-file"},"Specify a feature file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"restqa run tests/integration/welcome.feature\n")),(0,i.kt)("h3",{id:"specify-the-gherkin-tag"},"Specify the Gherkin Tag"),(0,i.kt)("p",null,"If your feature or your scenario has a tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{1,2}"},"@success\nFeature: Customer detail feature\n\nScenario: Retrieve all the customer information\n...\n")),(0,i.kt)("p",null,"You can run the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"restqa run -t @success\n")))}f.isMDXComponent=!0}}]);