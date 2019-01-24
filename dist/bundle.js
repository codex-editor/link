!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LinkTool=t():e.LinkTool=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(a(n(1)),a(n(6))),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){var n=t.data,r=t.config,o=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.config={endpoints:r.endpoints||""},this.nodes={wrapper:null,container:null,progress:null,input:null,inputHolder:null,linkContent:null,linkImage:null,linkTitle:null,linkDescription:null,linkText:null},this._data={link:"",linkData:{}},this.data=n}return r(e,null,[{key:"toolbox",get:function(){return{icon:o.default,title:"Link"}}}]),r(e,[{key:"render",value:function(){return this.nodes.wrapper=this.make("div",this.CSS.baseClass),this.nodes.container=this.make("div",this.CSS.container),this.nodes.inputHolder=this.makeInputHolder(),this.nodes.linkContent=this.prepareLinkPreview(),this.nodes.container.appendChild(this.nodes.linkContent),Object.keys(this._data.linkData).length?this.showLinkPreview(this._data.linkData):this.nodes.container.insertBefore(this.nodes.inputHolder,this.nodes.linkContent),this.nodes.wrapper.appendChild(this.nodes.container),this.nodes.wrapper}},{key:"save",value:function(){return this.data}},{key:"makeInputHolder",value:function(){var e=this,t=this.make("div",this.CSS.inputHolder);return this.nodes.progress=this.make("label",this.CSS.progress),this.nodes.input=this.make("div",[this.CSS.input,this.CSS.inputEl],{contentEditable:!0}),this.nodes.input.dataset.placeholder="Paste Link...",this.nodes.input.addEventListener("paste",function(t){var n=(t.clipboardData||window.clipboardData).getData("text");e.uploadByUrl(n)}),t.appendChild(this.nodes.progress),t.appendChild(this.nodes.input),t}},{key:"prepareLinkPreview",value:function(){var e=this.make("div",this.CSS.linkContent);return this.nodes.linkImage=this.make("div",this.CSS.linkImage),this.nodes.linkTitle=this.make("h2",this.CSS.linkTitle),this.nodes.linkDescription=this.make("p",this.CSS.linkDescription),this.nodes.linkText=this.make("a",this.CSS.linkText),e.appendChild(this.nodes.linkImage),e.appendChild(this.nodes.linkTitle),e.appendChild(this.nodes.linkDescription),e.appendChild(this.nodes.linkText),e}},{key:"showLinkPreview",value:function(e){e.image&&(this.nodes.linkImage.style.backgroundImage="url("+e.image.url+")"),e.title&&(this.nodes.linkTitle.innerHTML=e.title),e.description&&(this.nodes.linkDescription.innerHTML=e.description),this.nodes.linkText.innerHTML=this._data.link,this.nodes.linkText.setAttribute("href",this._data.link),this.nodes.linkContent.classList.add(this.CSS.linkContentRendered)}},{key:"showProgress",value:function(){this.nodes.progress.classList.add(this.CSS.progressLoading)}},{key:"hideProgress",value:function(){var e=this;return new Promise(function(t){e.nodes.progress.classList.remove(e.CSS.progressLoading),e.nodes.progress.classList.add(e.CSS.progressLoaded),setTimeout(function(){t()},500)})}},{key:"uploadByUrl",value:function(e){var t=this;this.showProgress(),this._data.link=e,i.default.get({url:this.config.endpoints.byUrl,data:{url:e}}).then(function(e){t.onFetch(e)}).catch(function(e){console.log("error",e)})}},{key:"onFetch",value:function(e){var t=this;if(e&&e.success){var n=e.meta;this._data.linkData=n,this.hideProgress().then(function(){t.nodes.inputHolder.remove(),t.showLinkPreview(n)})}else this.fetchingFailed("incorrect response: "+JSON.stringify(e))}},{key:"fetchingFailed",value:function(e){console.log("Link Tool: data fetching because of",e),this.api.notifier.show({message:"Can not get this link data, try another",style:"error"}),this.hideProgress()}},{key:"make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n)):n&&o.classList.add(n);for(var i in r)o[i]=r[i];return o}},{key:"data",set:function(e){this._data.link=e.link||"",this._data.linkData=e.linkData||{}},get:function(){return this._data}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"link-tool",inputEl:"link-tool__input",inputHolder:"link-tool__input-holder",linkContent:"link-tool__content",linkContentRendered:"link-tool__content--rendered",linkImage:"link-tool__image",linkTitle:"link-tool__title",linkDescription:"link-tool__description",linkText:"link-tool__anchor",progress:"link-tool__progress",progressLoading:"link-tool__progress--loading",progressLoaded:"link-tool__progress--loaded"}}}]),e}();t.default=s},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.link-tool {\n  --link-color: #415983;\n  --progress-color: #8a459b;\n  --background-color: #fafafb;\n\n  position: relative;\n  margin: 0.7em 0;\n  overflow: hidden;\n}\n\n  .link-tool__input {\n    padding: 15px 15px 15px 55px;\n    background: #fdfdfd;\n    font-size: 15px;\n    background-image: url(\'data:image/svg+xml; utf8, <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(166, 164, 168)" d="M14.758 7.25l-3.004 3.002a4.245 4.245 0 0 1-6.005 0 4.242 4.242 0 0 1-.644-.857L6.5 8c.067-.067.148-.105.227-.15.096.329.265.641.524.9a2.125 2.125 0 0 0 3.002 0l3.003-3.002a2.125 2.125 0 0 0 0-3.003 2.126 2.126 0 0 0-3.003 0L9.186 3.814a5.328 5.328 0 0 0-2.71-.295l2.276-2.275a4.247 4.247 0 0 1 6.006 6.005zm-7.94 4.936l-1.069 1.07a2.127 2.127 0 0 1-3.003 0 2.127 2.127 0 0 1 0-3.004L5.75 7.249a2.125 2.125 0 0 1 3.003 0c.259.259.427.57.525.9.078-.046.16-.083.226-.15l1.395-1.394a4.173 4.173 0 0 0-.645-.857 4.246 4.246 0 0 0-6.005 0L1.245 8.75a4.247 4.247 0 0 0 6.006 6.005l2.276-2.275a5.324 5.324 0 0 1-2.71-.295z"/></svg>\');\n    background-repeat: no-repeat;\n    background-position: 20px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  .link-tool__input-holder {\n      position: relative;\n    }\n\n  .link-tool__progress {\n    position: absolute;\n    box-shadow: inset 0 1px 3px 0 rgba(102, 85, 107, 0.04);\n    height: 100%;\n    width: 0;\n    background-color: var(--progress-color);\n    opacity: 0.08;\n  }\n\n  .link-tool__progress--loading {\n      width: 90%;\n      transition: width 1s ease;\n    }\n\n  .link-tool__progress--loaded {\n      width: 100%;\n    }\n\n  .link-tool__content {\n    padding: 25px;\n    border-radius: 2px;\n    box-shadow: 0 0 0 2px #fff;\n  }\n\n  .link-tool__content--rendered {\n      background: var(--background-color);\n    }\n\n  .link-tool__image {\n    background-position: center center;\n    background-repeat: no-repeat;\n    margin: 0 0 25px 25px;\n    background-size: auto 100%;\n    width: 70px;\n    height: 70px;\n    border-radius: 2px;\n    float: right;\n  }\n\n  .link-tool__title {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.4em;\n  }\n\n  .link-tool__description {\n    margin-top: 11px;\n    font-size: 14px;\n    line-height: 1.5em;\n  }\n\n  .link-tool__anchor {\n    display: block;\n    margin-top: 15px;\n    font-size: 11px;\n    color: var(--link-color) !important;\n    letter-spacing: 0.2px;\n    line-height: 1.25em;\n    text-decoration: none !important;\n    border: 0 !important;\n    padding: 0 !important;\n  }\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,l=0,c=[],f=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=u||(u=v(t)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t){e.exports='<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.758 7.25l-3.004 3.002a4.245 4.245 0 0 1-6.005 0 4.242 4.242 0 0 1-.644-.857L6.5 8c.067-.067.148-.105.227-.15.096.329.265.641.524.9a2.125 2.125 0 0 0 3.002 0l3.003-3.002a2.125 2.125 0 0 0 0-3.003 2.126 2.126 0 0 0-3.003 0L9.186 3.814a5.328 5.328 0 0 0-2.71-.295l2.276-2.275a4.247 4.247 0 0 1 6.006 6.005zm-7.94 4.936l-1.069 1.07a2.127 2.127 0 0 1-3.003 0 2.127 2.127 0 0 1 0-3.004L5.75 7.249a2.125 2.125 0 0 1 3.003 0c.259.259.427.57.525.9.078-.046.16-.083.226-.15l1.395-1.394a4.173 4.173 0 0 0-.645-.857 4.246 4.246 0 0 0-6.005 0L1.245 8.75a4.247 4.247 0 0 0 6.006 6.005l2.276-2.275a5.324 5.324 0 0 1-2.71-.295z"></path></svg>'},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}u(t.promise,r)}else(1===e._state?u:l)(t.promise,e._value)})):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){l(e,t)}}function l(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o=n(8),i=function(){var e={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},t=function(e){return new Promise(function(t,n){e=a(e),e=s(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(r)},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(r)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}200===r.status?t(e):n(e)}},r.send(e.data)})},n=function(e){return e.method="POST",t(e)},a=function(t){if(!t.url||"string"!=typeof t.url)throw new Error("Url must be a non-empty string");if(t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==r(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(e).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(e){},t.beforeSend=t.beforeSend||function(e){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},s=function(t){switch(t.method){case"GET":var n=u(t.data,e.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+n:t.url+"?"+n;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var r=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||e.JSON}(t);(o.isFormData(t.data)||o.isFormElement(t.data))&&(r=e.FORM),t.data=u(t.data,r),r!==i.contentType.FORM&&(t.headers["content-type"]=r)}return t},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case e.URLENCODED:return o.urlEncode(t);case e.JSON:return o.jsonEncode(t);case e.FORM:return o.formEncode(t);default:return t}};return{contentType:e,request:t,get:function(e){return e.method="GET",t(e)},post:n,transport:function(e){return e=a(e),o.transport(e).then(function(t){return o.isObject(e.data)&&Object.keys(e.data).forEach(function(n){var r=e.data[n];t.append(n,r)}),e.data=t,n(e)})}}}();e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,s=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){c(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},r=function(t){e.port2.postMessage(t)}}():s&&"onreadystatechange"in s.createElement("script")?function(){var e=s.documentElement;r=function(t){var n=s.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(c,0,e)},u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,r(o),o++},u.clearImmediate=l}function l(e){delete i[e]}function c(e){if(a)setTimeout(c,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{l(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],c=!1,f=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&r(e,n)}(e,0,[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"transport",value:function(e){return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.addEventListener("change",function(n){for(var r=n.target.files,o=new FormData,i=0;i<r.length;i++)o.append(e.fieldName,r[i],r[i].name);e.beforeSend(r),t(o)},!1),r.click()})}}]),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var s,u=a;if(i&&(u=i+"["+u+"]"),"object"==typeof e[a]&&null!==e[a])s=r(e[a],null,o,u);else{t&&(u=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}(u)?t+Number(u):u);var l=e[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",s=n(u)+"="+n(l)}return s})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])}]).default});