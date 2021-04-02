(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(t),p=a,b=l["".concat(s,".").concat(p)]||l[p]||m[p]||o;return t?r.a.createElement(b,i(i({ref:n},c),{},{components:t})):r.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(105)),s={id:"webhook",title:"Webhook"},i={unversionedId:"alerting/webhook",id:"alerting/webhook",isDocsHomePage:!1,title:"Webhook",description:"Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider.",source:"@site/docs/alerting/webhook.md",slug:"/alerting/webhook",permalink:"/alerting/webhook",editUrl:"https://github.com/restqa/documentation/edit/master/docs/alerting/webhook.md",version:"current",sidebar:"someSidebar",previous:{title:"Line",permalink:"/alerting/line"},next:{title:"Html (default)",permalink:"/reporting/html"}},u=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]}]},{value:"Example",id:"example",children:[]}],c={rightToc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider.\nThis will allow you to :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create your own alerting to a non supported tool from RestQa"),Object(o.b)("li",{parentName:"ul"},"Create your own dashboard"),Object(o.b)("li",{parentName:"ul"},"Trigger a job"),Object(o.b)("li",{parentName:"ul"},"Etc...")),Object(o.b)("p",null,"Setting a ",Object(o.b)("strong",{parentName:"p"},"webhook")," url is simple:"),Object(o.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),Object(o.b)("li",{parentName:"ul"},"Get your cutom endpoint"),Object(o.b)("li",{parentName:"ul"},"Valid RestQA config file.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"environments:\n  - name: sandbox\n    outputs:\n      - type: 'webhook'\n        enabled: true\n        config: \n          url: !env-var WEBHOOK_URL\n          method: POST\n          headers:\n            apikey: 'xxx-yyy-zzz'\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Property")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Description")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("em",{parentName:"th"},"Default")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"url")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The webhook url"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"method")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The http method to use in order to send the request body"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"POST"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"headers")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Object containing the headers to be added into the request"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"About the ",Object(o.b)("inlineCode",{parentName:"p"},"config.url")," we recommend to use the ",Object(o.b)("inlineCode",{parentName:"p"},"!env-var")," keyword in order to use an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/getting-started/environment-variable"}),"environment variable")," and not expose a sensitve url into your configuration.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The request body should look like :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n  "startTime": "2020-07-18T02:11:37+00:00",\n  "name": "Payment API",\n  "key": "PAY-API",\n  "env": "uat",\n  "repository": "restqa/super-test",\n  "sha": "0cc25f7f1f0df7d83f5983234801ffcbf4d489a0",\n  "duration": 11.988,\n  "success": false,\n  "durationFormat": "00:00",\n  "timestamp": "2020-07-18T02:11:37+00:00",\n  "type": "testSuite",\n  "total": 2,\n  "passed": 0,\n  "failed": 2,\n  "scenarios": {\n    "passed": 0,\n    "failed": 4,\n    "skipped": 0,\n    "undefined": 0\n  },\n  "features": [\n    {\n      "keyword": "Feature",\n      "line": 1,\n      "id": "as-a-user-i-can-manage-my-account",\n      "tags": [],\n      "uri": "features/test.feature",\n      "elements": [\n        {\n          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-dashboad-page",\n          "keyword": "Scenario",\n          "line": 3,\n          "name": "Access to my account from the dashboad page",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 4,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3009000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 5,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 1000000,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 6,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.01,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        },\n        {\n          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-menu",\n          "keyword": "Scenario",\n          "line": 8,\n          "name": "Access to my account from the menu",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 9,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 2969000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 10,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 11,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 2.969,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        }\n      ],\n      "total": 2,\n      "passed": 0,\n      "failed": 2,\n      "skipped": 0,\n      "undefined": 0,\n      "result": false,\n      "duration": 5.978999999999999,\n      "timestamp": "2020-07-18T02:11:37+00:00",\n      "type": "feature",\n      "feature_name": "As a user i can manage my account",\n      "metadata": {\n        "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n        "startTime": "2020-07-18T02:11:37+00:00",\n        "name": "Payment API",\n        "key": "PAY-API",\n        "env": "uat",\n        "duration": 11.988,\n        "success": false,\n        "durationFormat": "00:00"\n      }\n    },\n    {\n      "keyword": "Feature",\n      "line": 1,\n      "id": "as-a-user-i-can-manage-my-orders",\n      "tags": [],\n      "uri": "features/test2.feature",\n      "elements": [\n        {\n          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-dashboad-page",\n          "keyword": "Scenario",\n          "line": 3,\n          "name": "Access to my orders from the dashboad page",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 4,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3002000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 5,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "Then ",\n              "line": 6,\n              "name": "The title of the page should be \\"My account\\"",\n              "match": {\n                "location": "features/setup.js:15"\n              },\n              "result": {\n                "status": "skipped"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 1,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.002,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        },\n        {\n          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-menu",\n          "keyword": "Scenario",\n          "line": 8,\n          "name": "Access to my orders from the menu",\n          "tags": [],\n          "type": "scenario",\n          "steps": [\n            {\n              "arguments": [],\n              "keyword": "Given ",\n              "line": 9,\n              "name": "I have the dashboard page",\n              "match": {\n                "location": "features/setup.js:7"\n              },\n              "result": {\n                "status": "passed",\n                "duration": 3007000000\n              }\n            },\n            {\n              "arguments": [],\n              "keyword": "When ",\n              "line": 10,\n              "name": "I click on my account",\n              "match": {\n                "location": "features/setup.js:11"\n              },\n              "result": {\n                "status": "failed",\n                "duration": 0,\n                "error_message": "Error: The button my button hasn\'t been found\\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"\n              }\n            }\n          ],\n          "step_passed": 1,\n          "step_failed": 1,\n          "step_skipped": 0,\n          "step_undefined": 0,\n          "result": false,\n          "status": "failed",\n          "duration": 3.007,\n          "timestamp": "2020-07-18T02:11:37+00:00",\n          "metadata": {\n            "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n            "startTime": "2020-07-18T02:11:37+00:00",\n            "name": "Payment API",\n            "key": "PAY-API",\n            "env": "uat",\n            "duration": 11.988,\n            "success": false,\n            "durationFormat": "00:00"\n          }\n        }\n      ],\n      "total": 2,\n      "passed": 0,\n      "failed": 2,\n      "skipped": 0,\n      "undefined": 0,\n      "result": false,\n      "duration": 6.009,\n      "timestamp": "2020-07-18T02:11:37+00:00",\n      "type": "feature",\n      "feature_name": "As a user i can manage my orders",\n      "metadata": {\n        "id": "bccfc69a-9c1b-4ab6-a85e-5d1a722e8778",\n        "startTime": "2020-07-18T02:11:37+00:00",\n        "name": "Payment API",\n        "key": "PAY-API",\n        "env": "uat",\n        "duration": 11.988,\n        "success": false,\n        "durationFormat": "00:00"\n      }\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);