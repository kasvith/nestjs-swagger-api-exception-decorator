(self.webpackChunkapiexception=self.webpackChunkapiexception||[]).push([[613],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6089:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"v1.2.0"},l=void 0,p={unversionedId:"releasenotes/v1.2.0",id:"releasenotes/v1.2.0",isDocsHomePage:!1,title:"v1.2.0",description:"Breaking Changes",source:"@site/docs/releasenotes/v1.2.0.md",sourceDirName:"releasenotes",slug:"/releasenotes/v1.2.0",permalink:"/nestjs-swagger-api-exception-decorator/releasenotes/v1.2.0",editUrl:"https://github.com/nanogiants/nestjs-swagger-api-exception-decorator/edit/documentation/docs/releasenotes/v1.2.0.md",tags:[],version:"current",frontMatter:{title:"v1.2.0"},sidebar:"docs",previous:{title:"API Description",permalink:"/nestjs-swagger-api-exception-decorator/api"},next:{title:"v1.3.0",permalink:"/nestjs-swagger-api-exception-decorator/releasenotes/v1.3.0"}},c=[{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"New Features",id:"new-features",children:[]},{value:"Fixed Issues",id:"fixed-issues",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New decorator signature: Single exceptions or multiple exceptions in an array now have to be passed with an arrow function. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanogiants/nestjs-swagger-api-exception-decorator/issues/1"},"Issue #1"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"@ApiException(() => BadRequestException)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The old signature without an arrow function is now deprecated and will be removed in future versions")),(0,i.kt)("li",{parentName:"ul"},"Using the old signature with the ",(0,i.kt)("inlineCode",{parentName:"li"},"@TemplatedApiException"),"-decorator will be detected and a warning including the class and method names will be printed to the console")))),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exceptions for multiple status codes may now be passed within a single decorator call (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanogiants/nestjs-swagger-api-exception-decorator/issues/13"},"Issue #13"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"@TemplatedApiException(() => [UserNotFoundException, InvalidPasswordException])")),(0,i.kt)("li",{parentName:"ul"},"No warnings are printed anymore and the grouping now works properly"))),(0,i.kt)("li",{parentName:"ul"},"New option properties (",(0,i.kt)("a",{parentName:"li",href:"/api"},"see new API description"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanogiants/nestjs-swagger-api-exception-decorator/issues/1"},"Issue #1"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isArray"))))),(0,i.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"null")," as template value caused an error")))}d.isMDXComponent=!0}}]);