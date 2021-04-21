(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var h=s.a.createContext({}),d=function(e){var t=s.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return s.a.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},i=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,h=b(e,["components","mdxType","originalType","parentName"]),p=d(n),i=a,u=p["".concat(o,".").concat(i)]||p[i]||c[i]||r;return n?s.a.createElement(u,l(l({ref:t},h),{},{components:n})):s.a.createElement(u,l({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=i;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var h=2;h<r;h++)o[h]=n[h];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),s=n(6),r=(n(0),n(106)),o={id:"then",sidebar_label:"Then",title:"Then: Describe an expected outcome"},l={unversionedId:"tests/restqapi/then",id:"tests/restqapi/then",isDocsHomePage:!1,title:"Then: Describe an expected outcome",description:"Status code",source:"@site/docs/tests/restqapi/then.md",slug:"/tests/restqapi/then",permalink:"/tests/restqapi/then",editUrl:"https://github.com/restqa/documentation/edit/master/docs/tests/restqapi/then.md",version:"current",sidebar_label:"Then",sidebar:"someSidebar",previous:{title:"When: Describe an event",permalink:"/tests/restqapi/when"},next:{title:"Integrate with Google Spreadsheet",permalink:"/data/google-spreadsheet"}},b=[{value:"Status code",id:"status-code",children:[{value:"Then I should receive a response with the status {int}",id:"then-i-should-receive-a-response-with-the-status-int",children:[]}]},{value:"Latency",id:"latency",children:[{value:"Then the response time is under {int} ms",id:"then-the-response-time-is-under-int-ms",children:[]}]},{value:"Headers",id:"headers",children:[{value:"Then the header {string} should be {string}",id:"then-the-header-string-should-be-string",children:[]},{value:"Then the response header should contains:",id:"then-the-response-header-should-contains",children:[]},{value:"Then {string} should be on the response header",id:"then-string-should-be-on-the-response-header",children:[]},{value:"Then {string} should not be on the response header",id:"then-string-should-not-be-on-the-response-header",children:[]}]},{value:"JSON Response body",id:"json-response-body",children:[{value:"Then the response should be empty array",id:"then-the-response-should-be-empty-array",children:[]},{value:"Then the response should not be empty array",id:"then-the-response-should-not-be-empty-array",children:[]},{value:"Then the response should be empty",id:"then-the-response-should-be-empty",children:[]},{value:"Then the response body at {string} should equal {string | int | data }",id:"then-the-response-body-at-string-should-equal-string--int--data-",children:[]},{value:"Then the response body at {string} should not be equal to {string | int | data }",id:"then-the-response-body-at-string-should-not-be-equal-to-string--int--data-",children:[]},{value:"Then the response body at {string} should be equal to:",id:"then-the-response-body-at-string-should-be-equal-to",children:[]},{value:"Then the response body at {string} should equal true",id:"then-the-response-body-at-string-should-equal-true",children:[]},{value:"Then the response body at {string} should equal false",id:"then-the-response-body-at-string-should-equal-false",children:[]},{value:"Then the response body at {string} should equal null",id:"then-the-response-body-at-string-should-equal-null",children:[]},{value:"Then the response body at {string} should equal empty",id:"then-the-response-body-at-string-should-equal-empty",children:[]},{value:"Then the response body at {string} should be an array",id:"then-the-response-body-at-string-should-be-an-array",children:[]},{value:"Then the response body at {string} should be an array of {int} items",id:"then-the-response-body-at-string-should-be-an-array-of-int-items",children:[]},{value:"Then the response body at {string} should be close to now",id:"then-the-response-body-at-string-should-be-close-to-now",children:[]},{value:"Then the response body at {string} should not be null",id:"then-the-response-body-at-string-should-not-be-null",children:[]},{value:"Then the response body at {string} should match {string}",id:"then-the-response-body-at-string-should-match-string",children:[]},{value:"Then the response list should contains {int} items",id:"then-the-response-list-should-contains-int-items",children:[]},{value:"Then the response body should be equal to:",id:"then-the-response-body-should-be-equal-to",children:[]}]},{value:"Sort Numeric",id:"sort-numeric",children:[{value:"Then the response body at {string} should be greater than {int}",id:"then-the-response-body-at-string-should-be-greater-than-int",children:[]},{value:"Then the response body at {string} should be less than {int}",id:"then-the-response-body-at-string-should-be-less-than-int",children:[]},{value:"Then the response body at {string} should be greater than or equal to {int}",id:"then-the-response-body-at-string-should-be-greater-than-or-equal-to-int",children:[]},{value:"Then the response body at {string} should be less than or equal to {int}",id:"then-the-response-body-at-string-should-be-less-than-or-equal-to-int",children:[]}]},{value:"Date",id:"date",children:[{value:"Then the response body at {string} should be a date before {string}",id:"then-the-response-body-at-string-should-be-a-date-before-string",children:[]},{value:"Then the response body at {string} should be a date before today",id:"then-the-response-body-at-string-should-be-a-date-before-today",children:[]},{value:"Then the response body at {string} should be a date after {string}",id:"then-the-response-body-at-string-should-be-a-date-after-string",children:[]},{value:"Then the response body at {string} should be a date after today",id:"then-the-response-body-at-string-should-be-a-date-after-today",children:[]}]},{value:"Validation",id:"validation",children:[{value:"Then the response body at {string} should match the json schema from {string}",id:"then-the-response-body-at-string-should-match-the-json-schema-from-string",children:[]}]},{value:"Dataset",id:"dataset",children:[{value:"Then add the value {string} from the response header to the dataset as {string}",id:"then-add-the-value-string-from-the-response-header-to-the-dataset-as-string",children:[]},{value:"Then add the value {string} from the response body to the dataset as {string}",id:"then-add-the-value-string-from-the-response-body-to-the-dataset-as-string",children:[]}]},{value:"Cookie",id:"cookie",children:[{value:"Then I add the cookie to the jar",id:"then-i-add-the-cookie-to-the-jar",children:[]}]},{value:"Debug",id:"debug",children:[{value:"Then I print the request",id:"then-i-print-the-request",children:[]},{value:"Then I print the response",id:"then-i-print-the-response",children:[]},{value:"Then I print the value {string}",id:"then-i-print-the-value-string",children:[]}]}],h={rightToc:b};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"status-code"},"Status code"),Object(r.b)("h3",{id:"then-i-should-receive-a-response-with-the-status-int"},"Then I should receive a response with the status {int}"),Object(r.b)("p",null,"Ensure the response was received with a given status."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen I should receive a response with the status 200\nThen I should receive a response with the status 404\n\n")),Object(r.b)("h2",{id:"latency"},"Latency"),Object(r.b)("h3",{id:"then-the-response-time-is-under-int-ms"},"Then the response time is under {int} ms"),Object(r.b)("p",null,"Ensure the response time is lower than the given time (in microseconds)"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response time is under 100 ms\n\n")),Object(r.b)("h2",{id:"headers"},"Headers"),Object(r.b)("h3",{id:"then-the-header-string-should-be-string"},"Then the header {string} should be {string}"),Object(r.b)("p",null,"Ensure a response header equals the expect value"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the header "Content-Type" should be "application/json"\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-header-should-contains"},"Then the response header should contains:"),Object(r.b)("p",null,"Ensure a response header equals the list of values"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response headers should contains:\n| Content-Type   | application/json |\n| Content-Length | 1458             |\n\n")),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using placeholders")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response headers should contains:\n| Content-Type   | {{ contentType}} |\n| Content-Length | 1458             |\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-string-should-be-on-the-response-header"},"Then {string} should be on the response header"),Object(r.b)("p",null,"Ensure a response header contains one specific property"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen "Content-Length" should be on the response header\nThen "X-response-time" should be on the response header\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-string-should-not-be-on-the-response-header"},"Then {string} should not be on the response header"),Object(r.b)("p",null,"Ensure a response header doesn't contain one specific property"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen "X-response-time" should not be on the response header\nThen "poweered-by" should not be on the response header\n\n')),Object(r.b)("h2",{id:"json-response-body"},"JSON Response body"),Object(r.b)("h3",{id:"then-the-response-should-be-empty-array"},"Then the response should be empty array"),Object(r.b)("p",null,"Ensure a response body contains an empty array"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response should be empty array\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-should-not-be-empty-array"},"Then the response should not be empty array"),Object(r.b)("p",null,"Ensure a response body doesn't contain an empty array"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response should not be empty array\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-should-be-empty"},"Then the response should be empty"),Object(r.b)("p",null,"Ensure a response body is empty"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response should be empty\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-equal-string--int--data-"},"Then the response body at {string} should equal {string | int | data }"),Object(r.b)("p",null,"Ensure a JSON response body equals a given value at the JSON path. Equality is determined"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "id" should equal 10\nThen the response body at "user.firstname" should equal "john"\nThen the response body at "user.lastname" should equal {{ lastname }}\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.id" should equal 10\nThen the response body at "$.user.firstname" should equal "john"\nThen the response body at "$.user.lastname" should equal {{ lastname }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-not-be-equal-to-string--int--data-"},"Then the response body at {string} should not be equal to {string | int | data }"),Object(r.b)("p",null,"Ensure a JSON response body not equals a given value at the JSON path. Equality is not determined"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "id" should not be equal to 10\nThen the response body at "user.firstname" should not be equal to "john"\nThen the response body at "user.lastname" should not be equal to {{ lastname }}\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.id" should not be equal to 10\nThen the response body at "$.user.firstname" should not be equal to "john"\nThen the response body at "$.user.lastname" should not be equal to {{ lastname }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-equal-to"},"Then the response body at {string} should be equal to:"),Object(r.b)("p",null,"Verify a specific property from the response body against a JSON object"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person" should equal:\n"""\n{\n"firstName": "John",\n"lastName": "Doe"\n}\n"""\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-equal-true"},"Then the response body at {string} should equal true"),Object(r.b)("p",null,"Ensure a JSON response body equals a given boolean value as true"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "active" should equal true\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.active" should equal true\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-equal-false"},"Then the response body at {string} should equal false"),Object(r.b)("p",null,"Ensure a JSON response body equals a given boolean value as false"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "active" should equal false\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.active" should equal false\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-equal-null"},"Then the response body at {string} should equal null"),Object(r.b)("p",null,"Ensure a JSON response body equals a given null value"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "active" should equal null\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.active" should equal null\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-equal-empty"},"Then the response body at {string} should equal empty"),Object(r.b)("p",null,"Ensure a JSON response body equals an empty string"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "active" should equal empty\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.active" should equal empty\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-an-array"},"Then the response body at {string} should be an array"),Object(r.b)("p",null,"Ensure a JSON response body equals an array type"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "user.list" should be an array\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.user.list" should be an array\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-an-array-of-int-items"},"Then the response body at {string} should be an array of {int} items"),Object(r.b)("p",null,"Ensure a JSON response body equals an array containing a given items"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "user.list" should be an array of 10 items\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.user.list" should be an array of 10 items\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-close-to-now"},"Then the response body at {string} should be close to now"),Object(r.b)("p",null,"Ensure a JSON response body has a time set close to now ( -/+ 1 minute)"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "user.createdAt" should equal close to now\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.user.list" should equal close to now\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-not-be-null"},"Then the response body at {string} should not be null"),Object(r.b)("p",null,"Ensure a JSON response body is not null"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "user.children" should not be null\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.user.childern" should not be null\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-match-string"},"Then the response body at {string} should match {string}"),Object(r.b)("p",null,"Ensure a JSON response body matches a given regexp"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "user.occupation" should match "/pilot/"\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.user.occupation" should match "/pilot/"\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-list-should-contains-int-items"},"Then the response list should contains {int} items"),Object(r.b)("p",null,"Ensure a JSON response body has an array at the root level an contains a given number of items"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen the response list should contain 12 items\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-should-be-equal-to"},"Then the response body should be equal to:"),Object(r.b)("p",null,"Verify the response body against a JSON object"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body should be equal to:\n"""\n{\n"firstName": "John"\n}\n"""\n\n')),Object(r.b)("h2",{id:"sort-numeric"},"Sort Numeric"),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-greater-than-int"},"Then the response body at {string} should be greater than {int}"),Object(r.b)("p",null,"Verify if a specific value from the response body is greater than the expected value"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be greater than 10\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be greater than {{ age }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-less-than-int"},"Then the response body at {string} should be less than {int}"),Object(r.b)("p",null,"Verify if a specific value from the response body is less than an expected value"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be less than 10\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be less than {{ age }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-greater-than-or-equal-to-int"},"Then the response body at {string} should be greater than or equal to {int}"),Object(r.b)("p",null,"Verify if a specific value from the response body is greater than or equal to an expected value"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be greater than or equal to 10\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be greater than or equal to {{ age }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-less-than-or-equal-to-int"},"Then the response body at {string} should be less than or equal to {int}"),Object(r.b)("p",null,"Verify if a specific value from the response body is less than or equal to an expected value"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be less than or equal to 10\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person.age" should be less than or equal to {{ age }}\n\n')),Object(r.b)("h2",{id:"date"},"Date"),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-a-date-before-string"},"Then the response body at {string} should be a date before {string}"),Object(r.b)("p",null,"Verify and compare if a specific date from the response body comes before the expected date\nThe expected date should follow the pattern 'YYYY/MM/DD' (reference: RFC2822)"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date before "2020/12/01"\nThen the response body at "$.createdAt" should be a date before "2020/12/01 23:30:00"\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date before {{ my-date }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-a-date-before-today"},"Then the response body at {string} should be a date before today"),Object(r.b)("p",null,"Verify and compare if a specific date from the response body is comes before the current day"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date before today\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-a-date-after-string"},"Then the response body at {string} should be a date after {string}"),Object(r.b)("p",null,"Verify and compare if a specific date from the response body comes after an expected date\nThe expected date should follow the pattern 'YYYY/MM/DD' (reference: RFC2822)"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date after "2020/12/01"\nThen the response body at "$.createdAt" should be a date after "2020/12/01 23:30:00"\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date after {{ my-date }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-be-a-date-after-today"},"Then the response body at {string} should be a date after today"),Object(r.b)("p",null,"Verify and compare if a specific date from the response body comes after the current day"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.createdAt" should be a date after today\n\n')),Object(r.b)("h2",{id:"validation"},"Validation"),Object(r.b)("h3",{id:"then-the-response-body-at-string-should-match-the-json-schema-from-string"},"Then the response body at {string} should match the json schema from {string}"),Object(r.b)("p",null,"Validate the format of a specific value from the response body using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON Schema")," definition.\nThe JSON need to be defined on a .json file.\nIn order to use this feature you need to specify the location of you test data storage.\nThe validation is based on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ajv.js.org/"}),"Ajv"),", feel free to look at the options."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person" should match the json schema from "person.json"\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Placeholder from datasets")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen the response body at "$.person" should match the json schema from {{ file }}\n\n')),Object(r.b)("h2",{id:"dataset"},"Dataset"),Object(r.b)("h3",{id:"then-add-the-value-string-from-the-response-header-to-the-dataset-as-string"},"Then add the value {string} from the response header to the dataset as {string}"),Object(r.b)("p",null,"Pick of the reponse header value and add it into the dataset storage\nThis will allow you to reuse value in another step"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen add the value "Content-Type" from the response header to the dataset as "contentType"\nGiven I have the api gateway\nAnd the header contains "Content-Type" as {{ contentType }}\n\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-add-the-value-string-from-the-response-body-to-the-dataset-as-string"},"Then add the value {string} from the response body to the dataset as {string}"),Object(r.b)("p",null,"Pick of the reponse body value and add it into the dataset storage\nThis will allow you to reuse value in another step"),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using dot object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen add the value "user.id" from the response body to the dataset as "userId"\nGiven I have the api gateway\nAnd I have the path "/users/{userId}"\n\n')),Object(r.b)("p",null,"Example: ",Object(r.b)("em",{parentName:"p"},"Using json path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen add the value "$.user.id" from the response body to the dataset as "userId"\nGiven I have the api gateway\nAnd I have the path "/users/{{userId}}"\n\n')),Object(r.b)("h2",{id:"cookie"},"Cookie"),Object(r.b)("p",null,"By adding the cookie into the jar the following request will contains the cookie into the header"),Object(r.b)("h3",{id:"then-i-add-the-cookie-to-the-jar"},"Then I add the cookie to the jar"),Object(r.b)("p",null,"Add the cookie into the Jar ^^"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen I add the cookie to the jar\n\n")),Object(r.b)("h2",{id:"debug"},"Debug"),Object(r.b)("h3",{id:"then-i-print-the-request"},"Then I print the request"),Object(r.b)("p",null,"Print the Request information (url, headers, body, method) into the console\nThis will allow you to debug your scenario."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen I print the request\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-i-print-the-response"},"Then I print the response"),Object(r.b)("p",null,"Print the Response information (headers, response time,  body) into the console\nThis will allow you to debug your scenario."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),"\nThen I print the response\n\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"then-i-print-the-value-string"},"Then I print the value {string}"),Object(r.b)("p",null,"Print the a specific information value into the console\nThis will allow you to debug your scenario."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gherkin"}),'\nThen I print the value "{{ userId }}"\n\n')))}d.isMDXComponent=!0}}]);