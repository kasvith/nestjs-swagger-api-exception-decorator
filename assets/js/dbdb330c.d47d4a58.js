(self.webpackChunkapiexception=self.webpackChunkapiexception||[]).push([[274],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5678:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={title:"v1.5.0"},l=void 0,c={unversionedId:"releasenotes/v1.5.0",id:"releasenotes/v1.5.0",isDocsHomePage:!1,title:"v1.5.0",description:"Fixed Issues",source:"@site/docs/releasenotes/v1.5.0.md",sourceDirName:"releasenotes",slug:"/releasenotes/v1.5.0",permalink:"/nestjs-swagger-api-exception-decorator/releasenotes/v1.5.0",editUrl:"https://github.com/nanogiants/nestjs-swagger-api-exception-decorator/edit/documentation/docs/releasenotes/v1.5.0.md",tags:[],version:"current",frontMatter:{title:"v1.5.0"},sidebar:"docs",previous:{title:"v1.4.0",permalink:"/nestjs-swagger-api-exception-decorator/releasenotes/v1.4.0"}},p=[{value:"Fixed Issues",id:"fixed-issues",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restored compatibility to ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs/swagger@^4.8.1")," (",(0,i.kt)("inlineCode",{parentName:"li"},"examples")," property has been removed) when using Swagger annotated classes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/api#swagger-annotated-class"},"API Description / ",(0,i.kt)("inlineCode",{parentName:"a"},"example")))))),(0,i.kt)("h3",{id:"compatibility"},"Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs/common@^8.0.0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@nestjs/swagger@^5.0.0")," are now allowed as peer dependencies")))}d.isMDXComponent=!0}}]);