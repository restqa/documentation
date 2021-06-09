(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[1160],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i=["components"],l={id:"introduction",title:"Performance Testing Integration",sidebar_label:"Introduction"},s={unversionedId:"performance/introduction",id:"performance/introduction",isDocsHomePage:!1,title:"Performance Testing Integration",description:"I think you'll agree with me when I say:",source:"@site/docs/performance/introduction.md",sourceDirName:"performance",slug:"/performance/introduction",permalink:"/performance/introduction",editUrl:"https://github.com/restqa/documentation/edit/master/docs/performance/introduction.md",version:"current",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Performance Testing Integration",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"Grafana",permalink:"/monitoring/grafana"},next:{title:"Artillery integration",permalink:"/performance/artillery"}},p=[{value:"1. Select the scenario to be translated",id:"1-select-the-scenario-to-be-translated",children:[]},{value:"2. Define your load testing tool",id:"2-define-your-load-testing-tool",children:[]},{value:"3. Generate the performance test scenario",id:"3-generate-the-performance-test-scenario",children:[]},{value:"4. Run your performance test",id:"4-run-your-performance-test",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I think you'll agree with me when I say:"),(0,o.kt)("p",null,"It's ",(0,o.kt)("strong",{parentName:"p"},"REALLY")," hard to maintain load test scenario."),(0,o.kt)("p",null,"This is why RestQA is offering you the way to maintain them for you by reusing your Gherkin scenario. And translate them into a your favorite load testing tool scenario \ud83e\udd17."),(0,o.kt)("h3",{id:"1-select-the-scenario-to-be-translated"},"1. Select the scenario to be translated"),(0,o.kt)("p",null,"Firstly, you need to have a few scenario written in the gherkin format.\nAnd then you simple need to add the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"@perfomance")," on top of each scenario that you want to reuse for your performance test."),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin",metastring:'title="tests/integration/get-product.feature" {1-1}',title:'"tests/integration/get-product.feature"',"{1-1}":!0},'@performance\nScenario Outline: The product doesn\'t exist into the database\nGiven I have the api gateway\n  And I have the path "/api/products/111112222233333"\n  And I have the method "GET"\n  And the header contains "accept-language" as "<language>"\n  And the header contains "content-type" as "application/json"\nWhen I run the API\nThen I should receive a response with the status 404\n  And the response body at "message" should equal "<message>"\n  And the response time is under 1000 ms\nExamples:\n| language | message                    |\n| en       | The product doesn\'t exist. |\n| fr       | Le produit n\'existe pas.   |\n| it       | Le produit n\'existe pas.   |\n| default  | Le produit n\'existe pas.   |\n\n')),(0,o.kt)("p",null,"When we wiil run the test RestQA will detect the tag and translate the current scenario into your load testing scenario format."),(0,o.kt)("h3",{id:"2-define-your-load-testing-tool"},"2. Define your load testing tool"),(0,o.kt)("p",null,"In order to define your testing tool you will need to specify it under the ",(0,o.kt)("inlineCode",{parentName:"p"},"@restqa/restqapi")," plugin section.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{13-14} title=".restqa.yml"',"{13-14}":!0,title:'".restqa.yml"'},"version: 0.0.1\nmetadata:\n  code: EXAMPLE\n  name: Example app\n  description: This is the example app description\nenvironments:\n  - name: local\n    default: true\n    plugins:\n      - name: restqapi\n        config:\n          url: https://api.restqa.io\n          performance:\n            tool: artillery \n    outputs:\n      - type: html\n        enabled: true\n")),(0,o.kt)("p",null,"As you can see we just need to specify the name of the tool that you are using to run your performance test."),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"performance")," setting a few option are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Property")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"th"},"Required")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Default")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The tool that you plan to use for your load testing"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"outputFolder")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specify the folder where the scenario should be generated"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tests/performance"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"onlySuccess")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Define if you want to generate the performance scenario only for the functional scenario that passed"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"true"))))),(0,o.kt)("h3",{id:"3-generate-the-performance-test-scenario"},"3. Generate the performance test scenario"),(0,o.kt)("p",null,"Once the configuration has been setup, everytime you will launch the test using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"restqa run\n")),(0,o.kt)("p",null,"This will generate the expected performance scenario respection the format of your performance test tool."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Tips: If you just want to run to generate the performance scenario without running the full suite of test, use the command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"restqa run -t @performance\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is avaiiable only if you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"@restqa/restqapi")," plugin enabled"))),(0,o.kt)("h3",{id:"4-run-your-performance-test"},"4. Run your performance test"),(0,o.kt)("p",null,"Once your performance test scenario has been generated, the last step for you is just to reuse those scenarios into your favorite performance test and that is!"))}u.isMDXComponent=!0}}]);