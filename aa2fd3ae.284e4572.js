(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},146:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-excel-4783fa4f59ea0155ea545e4d201dbd0f.png"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(107)),c={id:"excel",sidebar_label:"Excel",title:"Integrate with Excel (CSV)"},o={unversionedId:"data/excel",id:"data/excel",isDocsHomePage:!1,title:"Integrate with Excel (CSV)",description:"Data Reuseability to avoid the manual work is what RestQA assures to its users.",source:"@site/docs/data/excel.md",slug:"/data/excel",permalink:"/data/excel",editUrl:"https://github.com/restqa/documentation/edit/master/docs/data/excel.md",version:"current",sidebar_label:"Excel",sidebar:"someSidebar",previous:{title:"Integrate with Google Spreadsheet",permalink:"/data/google-spreadsheet"},next:{title:"Github Action",permalink:"/ci-cd/github-action"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Command",id:"command",children:[{value:"Options",id:"options",children:[]}]}],b={rightToc:i};function s(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Data Reuseability to avoid the manual work is what RestQA assures to its users. "),Object(l.b)("p",null,"The test data plays a vital role for the API testing as it contain majority of the test case data that is passed as parameters to the API."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Excel (csv)")," is one of the many data sources that RestQA integrates without any hassle."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"See the following dataset example locate on the file : ",Object(l.b)("strong",{parentName:"p"},"./tests/data/users.csv"),":"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Excell",src:a(146).default})),Object(l.b)("p",null,"We want to access to the ",Object(l.b)("em",{parentName:"p"},"Cooper")," lastname, as you can see it's located into :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"filename : ",Object(l.b)("em",{parentName:"li"},"users")),Object(l.b)("li",{parentName:"ul"},"row : ",Object(l.b)("em",{parentName:"li"},"4")),Object(l.b)("li",{parentName:"ul"},"Column name : ",Object(l.b)("em",{parentName:"li"},"lastname"))),Object(l.b)("p",null,"This means if we want to use this information into one of our scenario we will need to proceed the following way :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gherkin"}),'Then the response body at "firstname" should equal "{{ users.4.lastname }}"\n')),Object(l.b)("p",null,"During the processing it will be interpreted as :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'Then the response body at "firstname" should equal "Cooper"\n')),Object(l.b)("p",null,"The format should follow the pattern : ",Object(l.b)("inlineCode",{parentName:"p"},"{{ <FILENAME>.<ROW>.<COLUMN NAME> }}")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you want to use a custom interpolation charaters on the placeholder instead of ",Object(l.b)("inlineCode",{parentName:"p"},"{{"),"  you can change the ",Object(l.b)("inlineCode",{parentName:"p"},"data.startSymbol")," and ",Object(l.b)("inlineCode",{parentName:"p"},"data.endSymbol")," into you ",Object(l.b)("inlineCode",{parentName:"p"},".restqa.yaml"))),Object(l.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"1 minute  \ud83d\ude80"),Object(l.b)("li",{parentName:"ul"},"Create new csv file on a specific folder (example : ./tests/data)"),Object(l.b)("li",{parentName:"ul"},"Valid RestQA config file.")),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"The parameters per call are just required to be entered in form of rows. Each rows represent a set of parameters being passed to API during a single call."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The Project's ",Object(l.b)("strong",{parentName:"p"},"restqa.yml")," file will contain the details about the Google Spreadsheet as shown below ",Object(l.b)("strong",{parentName:"p"},"environments.data"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'{11-15} title=".restqa.yml"',"{11-15}":!0,title:'".restqa.yml"'}),"---\n\nversion: 0.0.1\nmetadata:\n  code: SAMPLE\n  name: Sample running on example.com\n  description: E2E test of the public api\nenvironments:\n  - name: sandbox\n    default: true\n    data:\n      channel: 'csv'\n      config:\n        folder: 'test/data'\n        delimiter: ','\n    plugins:\n      - name: restqapi\n        config:\n          url: https://api-sandbox.example.com\n")),Object(l.b)("p",null,"Once the ",Object(l.b)("strong",{parentName:"p"},"restqa.yml")," is updated as per the Csv, the Test Suite takes it up for the next process where the columns and rows are defined accordingly."),Object(l.b)("h2",{id:"command"},"Command"),Object(l.b)("p",null,"If you don't want configure this part manually you can also use the command line :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"restqa install excel\n")),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("em",{parentName:"th"},"Property")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("em",{parentName:"th"},"Description")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("em",{parentName:"th"},"Default")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"channel")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The data channel (csv in our case)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"config.folder")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The folder where the csv files are located"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"config.delimiter")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The csv column delimiter character"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},","))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"startSymbol")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used for configuring the interpolation markup"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"{{"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"endSymbol")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"how the error message within slack"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"}}"))))))}s.isMDXComponent=!0}}]);