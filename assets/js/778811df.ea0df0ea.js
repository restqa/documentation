(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[8537],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2045:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i=["components"],l={id:"api-reference",title:"API Reference"},s={unversionedId:"api/api-reference",id:"api/api-reference",isDocsHomePage:!1,title:"API Reference",description:"Each method can be deconstructed from the object returned by require('@restqa/restqa').",source:"@site/docs/api/api-references.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/api/api-reference",editUrl:"https://github.com/restqa/documentation/edit/master/docs/api/api-references.md",version:"current",frontMatter:{id:"api-reference",title:"API Reference"},sidebar:"someSidebar",previous:{title:"Cli",permalink:"/api/cli"},next:{title:"Plugin API",permalink:"/api/plugin-api"}},p=[{value:"<code>Install(options)</code>",id:"installoptions",children:[]},{value:"<code>Generate(cmd)</code>",id:"generatecmd",children:[]},{value:"<code>Steps(options)</code>",id:"stepsoptions",children:[]},{value:"<code>Run(options)</code>",id:"runoptions",children:[]},{value:"<code>Dashboard(options)</code>",id:"dashboardoptions",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each method can be deconstructed from the object returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"require('@restqa/restqa')"),". "),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"installoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Install(options)")),(0,o.kt)("p",null,"Generate a configuration file output from an add on install."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (string) : The name of the addon you want to install (ex: 'slack')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configFile")," (string) : Location of the RestQA Configuration File (ex: './restqa.yml')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env")," (string) : The target environment (from your RestQA config file) (ex: 'local')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," (object) : Represent the configuration required to setup the addon ")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Install } = require('@restqa/restqa')\nconst opt = {\n  name: 'slack',\n  env: 'production',\n  configFile: './.restqa.yml',\n  config: {\n    url: 'https://slack.com/incoming-webhook'\n  }\n}\nconst result = Install(opt)\nconsole.log(result)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{20-24}","{20-24}":!0},"version: 0.0.1\nmetadata:\n  code: APP\n  name: app\n  description: Configuration generated by restqa init -y\nenvironments:\n  - name: production\n    default: true\n    plugins:\n      - name: restqapi\n        config:\n          url: https://api.restqa.io\n    outputs:\n      - type: http-html-report\n        enabled: true\n      - type: file\n        enabled: true\n        config:\n          path: restqa-result.json\n      - type: slack\n        enabled: true\n        config:\n          url: hhttps://slack.com/incoming-webhook\n          onlyFailed: false\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This method is printing the output. It will not override your current configuration file.")),(0,o.kt)("h3",{id:"generatecmd"},(0,o.kt)("inlineCode",{parentName:"h3"},"Generate(cmd)")),(0,o.kt)("p",null,"To generate a scenario from a curl command, the process will use the parameter from the curl command to call your server then catch the response and generate a valid RestQA Test Scenario (Gherkin format)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cmd")," (string) : The curl command of your request (example: curl ",(0,o.kt)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/todos/1"},"https://jsonplaceholder.typicode.com/todos/1"),")")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Generate } = require('@restqa/restqa')\n\nasync function main() {\n  let result = await Generate('curl https://jsonplaceholder.typicode.com/todos/1')\n  console.log(result)\n}\n\nmain()\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gherkin"},'Given I have the api gateway hosted on "https://jsonplaceholder.typicode.com"\n  And I have the path "/todos/1"\n  And I have the method "GET"\nWhen I run the API\nThen I should receive a response with the status 200\n  And the response body should be equal to:\n  """\n{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}\n  """\n')),(0,o.kt)("h3",{id:"stepsoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Steps(options)")),(0,o.kt)("p",null,"Retrieve the list of step definition available for a specific file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keyword")," (string) : Step definition keyword (ex: 'given')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," (string) : Specify the configuration file to use (ex: './restqa.yml')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tag")," (string) : Filter the step to a specific keyword (ex: 'cookie')")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Steps } = require('@restqa/restqa')\nconst opt = {\n  keyword: 'then',\n  configFile: './.restqa.yml',\n  tag: 'header',\n}\nconst result = Steps(opt)\nconsole.log(result)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"[\n  {\n    Plugin: '@restqa/restqapi',\n    Keyword: 'then',\n    Step: 'I should receive a response with the status {int}',\n    Comment: 'Check the response http code'\n  },\n  {\n    Plugin: '@restqa/restqapi',\n    Keyword: 'then',\n    Step: 'the response time is under {int} ms',\n    Comment: 'Check the response latency'\n  },\n  {\n    Plugin: '@restqa/restqapi',\n    Keyword: 'then',\n    Step: 'the header {string} should be {string}',\n    Comment: 'Check if a property in the response header has the exact string value'\n  },\n...\n")),(0,o.kt)("h3",{id:"runoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Run(options)")),(0,o.kt)("p",null,"Run the test suite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configFile")," (string): Specify the configuration file to use (ex: './restqa.yml')"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env")," (string): Define the target environemnt"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stream")," (",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#stream_class_stream_writable"},"Stream"),"): Write stream (default: stdOut)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," (string): Path folder of the test scenario")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Run } = require('@restqa/restqa')\nconst Stream = require('stream')\n\nconst opt = {\n  configFile: '.restqa.yml',\n  env: 'local',\n  stream: new Stream.Writable()\n}\n  \nRun(opt)\n  .then(result => {\n    console.log(result)\n  })\n  .catch(err => {\n    console.log(err)\n  })\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"{\n  id: 'c28812ec-64ed-4f8d-9538-f5d4f6be9454',\n  startTime: '2021-03-12T09:39:12+00:00',\n  name: 'app',\n  key: 'APP',\n  env: 'local',\n  duration: 0.858,\n  success: false,\n  durationFormat: '00:00',\n...\n")),(0,o.kt)("h3",{id:"dashboardoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Dashboard(options)")),(0,o.kt)("p",null,"Expose the RestQA Dashboard using a specific configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configFile")," (string): Specify the configuration file to use (ex: './restqa.yml')")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Dashboard } = require('@restqa/restqa')\n\nconst opt = {\n  configFile: '.restqa.yml',\n}\n  \nconst server = Dashboard(opt)\nserver.listen(8000, () => {\n  console.log('The dashboard is running on the port 8000')\n})\n")))}u.isMDXComponent=!0}}]);