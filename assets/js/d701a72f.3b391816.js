(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[1623],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3037:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],c={id:"gitlab-ci",title:"Gitlab CI"},l={unversionedId:"ci-cd/gitlab-ci",id:"ci-cd/gitlab-ci",isDocsHomePage:!1,title:"Gitlab CI",description:"If you are hosting your tests scenario into Gitlab, You can easily run your test automation from your own Gitlab repository.",source:"@site/docs/ci-cd/gitlab-ci.md",sourceDirName:"ci-cd",slug:"/ci-cd/gitlab-ci",permalink:"/ci-cd/gitlab-ci",editUrl:"https://github.com/restqa/documentation/edit/master/docs/ci-cd/gitlab-ci.md",version:"current",frontMatter:{id:"gitlab-ci",title:"Gitlab CI"},sidebar:"someSidebar",previous:{title:"Github Action",permalink:"/ci-cd/github-action"},next:{title:"Circle CI",permalink:"/ci-cd/circle-ci"}},u=[{value:"Gitlab CI",id:"gitlab-ci",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you are hosting your tests scenario into Gitlab, You can easily run your test automation from your own Gitlab repository."),(0,a.kt)("h3",{id:"gitlab-ci"},"Gitlab CI"),(0,a.kt)("p",null,"If you are new to gitlab CI we are inviting you to watch this ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/1iXFbchozdY"},"video")),(0,a.kt)("p",null,"The installation is very simple :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new file in your repository : ",(0,a.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml")),(0,a.kt)("li",{parentName:"ol"},"Copy paste the informations in your ",(0,a.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"stages:\n  - e2e-test\n\nRestQa:\n  stage: e2e-test\n  image:\n    name: 'restqa/restqa'\n  script:\n    - 'restqa run .'\n#   - 'restqa run -c .restqa.yml .' # if you want to add arguments\n  artifacts:\n    paths:\n    - report\n")),(0,a.kt)("p",null,"And Voila!"),(0,a.kt)("p",null,"In order to know more about the different option from the ",(0,a.kt)("inlineCode",{parentName:"p"},"restqa")," command line,  take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/api/cli"},"RestQA CLI")," documentation"))}p.isMDXComponent=!0}}]);