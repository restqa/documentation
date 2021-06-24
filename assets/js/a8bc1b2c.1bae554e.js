(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[1618],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),p=r,f=c["".concat(u,".").concat(p)]||c[p]||d[p]||o;return t?a.createElement(f,s(s({ref:n},m),{},{components:t})):a.createElement(f,s({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3407:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=t(4034),r=t(9973),o=(t(7294),t(3905)),s=["components"],i={id:"webhook",title:"Webhook"},u=void 0,l={unversionedId:"alerting/webhook",id:"alerting/webhook",isDocsHomePage:!1,title:"Webhook",description:"Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider.",source:"@site/docs/alerting/webhook.md",sourceDirName:"alerting",slug:"/alerting/webhook",permalink:"/alerting/webhook",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/webhook.md",version:"current",frontMatter:{id:"webhook",title:"Webhook"},sidebar:"someSidebar",previous:{title:"Line",permalink:"/alerting/line"},next:{title:"Html (default)",permalink:"/reporting/html"}},d=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Command",id:"command",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider.\nThis will allow you to :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create your own alerting to a non supported tool from RestQa"),(0,o.kt)("li",{parentName:"ul"},"Create your own dashboard"),(0,o.kt)("li",{parentName:"ul"},"Trigger a job"),(0,o.kt)("li",{parentName:"ul"},"Etc...")),(0,o.kt)("p",null,"Setting a ",(0,o.kt)("strong",{parentName:"p"},"webhook")," url is simple:"),(0,o.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),(0,o.kt)("li",{parentName:"ul"},"Get your custom endpoint"),(0,o.kt)("li",{parentName:"ul"},"Valid RestQA config file")),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("p",null,"In order to install this integration, you can use the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"restqa install webhook\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".restqa.yml"',title:'".restqa.yml"'},"environments:\n  - name: sandbox\n    outputs:\n      - type: 'webhook'\n        enabled: true\n        config: \n          url: !env-var WEBHOOK_URL\n          method: POST\n          headers:\n            apikey: 'xxx-yyy-zzz'\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Property")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Required")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"th"},"Default")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The webhook url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The http method to use in order to send the request body"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"POST"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"headers")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Object containing the headers to be added into the request"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"About the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.url")," we recommend to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"!env-var")," keyword. In order to use an ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/environment-variable"},"environment variable")," and not expose a sensitive url into your configuration.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The request body should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n  "startTime": "2020-07-18T02:11:37+00:00",\n  "name": "Payment API",\n  "key": "PAY-API",\n  "env": "uat",\n  "repository": "restqa/super-test",\n  "sha": "0cc25f7f1f0df7d83f5983234801ffcbf4d489a0",\n  "duration": 11.988,\n  "success": false,\n  "durationFormat": "00:00",\n  "timestamp": "2020-07-18T02:11:37+00:00",\n  "type": "testSuite",\n  "total": 2,\n  "passed": 0,\n  "failed": 2,\n  "scenarios": {\n    "passed": 0,\n    "failed": 4,\n    "skipped": 0,\n    "undefined": 0\n  },\n  "features": [\n    {\n      "keyword": "Feature",\n      "line": 1,\n      "id": "as-a-user-i-can-manage-my-account",\n      "tags": [],\n      "uri": "features/test.feature",\n      "elements": [\n        {\n          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-dashboad-page",\n          "keyword": "Scenario",\n          "line": 3,\n          "name": "Access to my account from the dashboad page",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 4,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3009000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 5,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 1000000,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 6,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.01,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        },\n        {\n          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-menu",\n          "keyword": "Scenario",\n          "line": 8,\n          "name": "Access to my account from the menu",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 9,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 2969000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 10,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 11,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 2.969,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        }\n      ],\n      "total": 2,\n      "passed": 0,\n      "failed": 2,\n      "skipped": 0,\n      "undefined": 0,\n      "result": false,\n      "duration": 5.978999999999999,\n      "timestamp": "2020-07-18T02:11:37+00:00",\n      "type": "feature",\n      "feature_name": "As a user i can manage my account",\n      "metadata": {\n        "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n        "startTime": "2020-07-18T02:11:37+00:00",\n        "name": "Payment API",\n        "key": "PAY-API",\n        "env": "uat",\n        "duration": 11.988,\n        "success": false,\n        "durationFormat": "00:00"\n      }\n    },\n    {\n      "keyword": "Feature",\n      "line": 1,\n      "id": "as-a-user-i-can-manage-my-orders",\n      "tags": [],\n      "uri": "features/test2.feature",\n      "elements": [\n        {\n          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-dashboad-page",\n          "keyword": "Scenario",\n          "line": 3,\n          "name": "Access to my orders from the dashboad page",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 4,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3002000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 5,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 6,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.002,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        },\n        {\n          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-menu",\n          "keyword": "Scenario",\n          "line": 8,\n          "name": "Access to my orders from the menu",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 9,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3007000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 10,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 0,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.007,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        }\n      ],\n      "total": 2,\n      "passed": 0,\n      "failed": 2,\n      "skipped": 0,\n      "undefined": 0,\n      "result": false,\n      "duration": 6.009,\n      "timestamp": "2020-07-18T02:11:37+00:00",\n      "type": "feature",\n      "feature_name": "As a user i can manage my orders",\n      "metadata": {\n        "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n        "startTime": "2020-07-18T02:11:37+00:00",\n        "name": "Payment API",\n        "key": "PAY-API",\n        "env": "uat",\n        "duration": 11.988,\n        "success": false,\n        "durationFormat": "00:00"\n      }\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);