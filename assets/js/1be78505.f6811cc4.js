(self.webpackChunkrestqa=self.webpackChunkrestqa||[]).push([[9514,4608],{4221:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ae}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));p.displayName="MDXCreateElement";var m=n(2263),h=n(6291),f=n(6898),b=n(4034),y=n(9973),g=n(6010),v=n(6700),k=n(944),E=n(1839),C=n(3783),N=n(7898),_=n(6742),Z=n(3919),j=n(5537),O=function(e){return r.createElement("svg",(0,b.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},T=n(4478),x=n(4973),S="sidebar_15mo",P="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",w="sidebarLogo_3h0W",L="menu_Bmed",B="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",R="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R",M="sidebarMenuIcon_fgN0",F="sidebarMenuCloseIcon_1lpH",W="menuLinkExternal_1OhN";var H=function e(t,n){return"link"===t.type?(0,v.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},z=(0,r.memo)((function(e){var t=e.items,n=(0,y.Z)(e,["items"]);return t.map((function(e,t){return r.createElement(U,(0,b.Z)({key:t,item:e},n))}))}));function U(e){switch(e.item.type){case"category":return r.createElement($,e);case"link":default:return r.createElement(K,e)}}function $(e){var t,n,a,o=e.item,l=e.onItemClick,i=e.collapsible,c=e.activePath,s=(0,y.Z)(e,["item","onItemClick","collapsible","activePath"]),u=o.items,d=o.label,p=H(o,c),m=(n=p,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),h=(0,r.useState)((function(){return!!i&&(!p&&o.collapsed)})),f=h[0],v=h[1],k=(0,r.useRef)(null),E=(0,r.useState)(void 0),C=E[0],N=E[1],_=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){p&&!m&&f&&v(!1)}),[p,m,f]);var Z=(0,r.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[C]);return 0===u.length?null:r.createElement("li",{className:(0,g.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement("a",(0,b.Z)({className:(0,g.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&p},t[B]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},s),d),r.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){f||_(!1)}},r.createElement(z,{items:u,tabIndex:f?"-1":"0",onItemClick:l,collapsible:i,activePath:c})))}function K(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,y.Z)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,c=n.label,s=H(n,o);return r.createElement("li",{className:"menu__list-item",key:c},r.createElement(_.Z,(0,b.Z)({className:(0,g.Z)("menu__link",(t={"menu__link--active":s},t[W]=!(0,Z.Z)(i),t)),to:i},(0,Z.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),c))}function q(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,x.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,x.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,g.Z)("button button--secondary button--outline",R),onClick:t},r.createElement(O,{className:D}))}function J(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,x.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,x.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,g.Z)(M,F)},"\xd7"):r.createElement(T.Z,{className:M,height:24,width:24}))}var V=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,u=function(){var e=(0,k.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,N.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),d=(0,v.LU)(),p=d.navbar.hideOnScroll,m=d.hideableSidebar,h=(0,k.Z)().isAnnouncementBarClosed,f=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,E.Z)(t);var a=(0,C.Z)();return(0,r.useEffect)((function(){a===C.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),b=f.showResponsiveSidebar,y=f.closeResponsiveSidebar,_=f.toggleResponsiveSidebar;return r.createElement("div",{className:(0,g.Z)(S,(t={},t[P]=p,t[I]=s,t))},p&&r.createElement(j.Z,{tabIndex:-1,className:w}),r.createElement("div",{className:(0,g.Z)("menu","menu--responsive","thin-scrollbar",L,(n={"menu--show":b},n[A]=!h&&u,n))},r.createElement(J,{responsiveSidebarOpened:b,onClick:_}),r.createElement("ul",{className:"menu__list"},r.createElement(z,{items:o,onItemClick:y,collapsible:i,activePath:a}))),m&&r.createElement(q,{onClick:c}))},Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},G={Prism:n(7410).Z,theme:Y};function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ee=/\r\n|\r|\n/,te=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},ne=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},re=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=Q({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=Q({},n,{backgroundColor:null}),a};function ae(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var oe=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),X(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?re(e.theme,e.language):void 0;return t.themeDict=n})),X(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=Q({},ae(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?Q({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),X(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),X(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=Q({},ae(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?Q({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),X(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=ne(u,d.type),d.alias&&(u=ne(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(ee),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)te(i),c.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return te(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var le=n(7594),ie=n.n(le),ce={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},se=n(5350),ue=function(){var e=(0,v.LU)().prism,t=(0,se.Z)().isDarkTheme,n=e.theme||ce,r=e.darkTheme||n;return t?r:n},de="codeBlockContainer_K1bP",pe="codeBlockContent_hGly",me="codeBlockTitle_eoMF",he="codeBlock_23N8",fe="codeBlockWithTitle_2JqI",be="copyButton_Ue-o",ye="codeBlockLines_39YC",ge=/{([\d,-]+)}/,ve=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function ke(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,v.LU)().prism,i=(0,r.useState)(!1),c=i[0],s=i[1],u=(0,r.useState)(!1),d=u[0],p=u[1];(0,r.useEffect)((function(){p(!0)}),[]);var m=(0,v.bc)(a)||o,h=(0,r.useRef)(null),f=[],y=ue(),k=Array.isArray(t)?t.join(""):t;if(a&&ge.test(a)){var E=a.match(ge)[1];f=ie()(E).filter((function(e){return e>0}))}var C=n&&n.replace(/language-/,"");!C&&l.defaultLanguage&&(C=l.defaultLanguage);var N=k.replace(/\n$/,"");if(0===f.length&&void 0!==C){for(var _,Z="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ve(["js","jsBlock"]);case"jsx":case"tsx":return ve(["js","jsBlock","jsx"]);case"html":return ve(["js","jsBlock","html"]);case"python":case"py":return ve(["python"]);default:return ve()}}(C),O=k.replace(/\n$/,"").split("\n"),T=0;T<O.length;){var S=T+1,P=O[T].match(j);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":Z+=S+",";break;case"highlight-start":_=S;break;case"highlight-end":Z+=_+"-"+(S-1)+","}O.splice(T,1)}else T+=1}f=ie()(Z),N=O.join("\n")}var I=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(N),s(!0),setTimeout((function(){return s(!1)}),2e3)};return r.createElement(oe,(0,b.Z)({},G,{key:String(d),theme:y,code:N,language:C}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:de},m&&r.createElement("div",{style:a,className:me},m),r.createElement("div",{className:(0,g.Z)(pe,C)},r.createElement("div",{tabIndex:0,className:(0,g.Z)(n,he,"thin-scrollbar",(t={},t[fe]=m,t))},r.createElement("div",{className:ye,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return f.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,b.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,b.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:h,type:"button","aria-label":(0,x.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,g.Z)(be),onClick:I},c?r.createElement(x.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(x.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var Ee="enhancedAnchor_2LWZ",Ce=function(e){return function(t){var n,a=t.id,o=(0,y.Z)(t,["id"]),l=(0,v.LU)().navbar.hideOnScroll;return a?r.createElement(e,o,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,g.Z)("anchor",(n={},n[Ee]=!l,n)),id:a}),o.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,x.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,o)}},Ne={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ke,e):r.createElement("code",e)},a:function(e){return r.createElement(_.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(ke,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:Ce("h1"),h2:Ce("h2"),h3:Ce("h3"),h4:Ce("h4"),h5:Ce("h5"),h6:Ce("h6")},_e=n(4608),Ze=n(5977),je="docPage_31aa",Oe="docMainContainer_3ufF",Te="docMainContainerEnhanced_3NYZ",xe="docSidebarContainer_3Kbt",Se="docSidebarContainerHidden_3pA8",Pe="collapsedDocSidebar_2JMH",Ie="expandSidebarButtonIcon_1naQ",we="docItemWrapperEnhanced_2vyJ",Le="docItemWrapper_3FMP";function Be(e){var t,n,a,o,l,i=e.currentDocRoute,c=e.versionMetadata,s=e.children,d=(0,m.default)(),p=d.siteConfig,h=d.isClient,b=c.pluginId,y=c.permalinkToSidebar,k=c.docsSidebars,E=c.version,C=y[i.path],N=k[C],_=(0,r.useState)(!1),Z=_[0],j=_[1],T=(0,r.useState)(!1),S=T[0],P=T[1],I=(0,r.useCallback)((function(){S&&P(!1),j(!Z)}),[S]);return r.createElement(f.Z,{key:h,wrapperClassName:v.kM.wrapper.docPages,pageClassName:v.kM.page.docPage,searchMetadatas:{version:E,tag:(0,v.os)(b,E)}},r.createElement("div",{className:je},N&&r.createElement("div",{className:(0,g.Z)(xe,(t={},t[Se]=Z,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe)&&Z&&P(!0)},role:"complementary"},r.createElement(V,{key:C,sidebar:N,path:i.path,sidebarCollapsible:null==(n=null==(a=p.themeConfig)?void 0:a.sidebarCollapsible)||n,onCollapse:I,isHidden:S}),S&&r.createElement("div",{className:Pe,title:(0,x.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,x.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.createElement(O,{className:Ie}))),r.createElement("main",{className:(0,g.Z)(Oe,(o={},o[Te]=Z||!N,o))},r.createElement("div",{className:(0,g.Z)("container padding-vert--lg",Le,(l={},l[we]=Z,l))},r.createElement(u,{components:Ne},s)))))}var Ae=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,Ze.LX)(a.pathname,e)}));return o?r.createElement(Be,{currentDocRoute:o,versionMetadata:n},(0,h.Z)(t)):r.createElement(_e.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6898),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);