/*! For license information please see component---src-pages-backtowork-index-jsx-9a2a55d295e679479562.js.LICENSE.txt */
(self.webpackChunkmichael_personal_website=self.webpackChunkmichael_personal_website||[]).push([[159],{5900:function(n,t){var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var i=typeof e;if("string"===i||"number"===i)n.push(e);else if(Array.isArray(e)){if(e.length){var u=o.apply(null,e);u&&n.push(u)}}else if("object"===i)if(e.toString===Object.prototype.toString)for(var c in e)r.call(e,c)&&e[c]&&n.push(c);else n.push(e.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(e=function(){return o}.apply(t,[]))||(n.exports=e)}()},6921:function(n,t,e){"use strict";var r=e(7462),o=e(3366),i=e(7294),u=e(5900),c=e.n(u),a=e(3033),f=["className","cssModule","fluid","tag"],s=function(n){var t=n.className,e=n.cssModule,u=n.fluid,s=n.tag,l=(0,o.Z)(n,f),p="container";!0===u?p="container-fluid":u&&(p="container-"+u);var d=(0,a.mx)(c()(t,p),e);return i.createElement(s,(0,r.Z)({},l,{className:d}))};s.defaultProps={tag:"div"},t.Z=s},3033:function(n,t,e){"use strict";e.d(t,{CE:function(){return c},E5:function(){return y},JL:function(){return h},Kn:function(){return g},U9:function(){return w},ei:function(){return a},kQ:function(){return E},mP:function(){return O},mx:function(){return u},n5:function(){return s},qW:function(){return l},rb:function(){return d},wF:function(){return p},y_:function(){return j}});var r,o=e(5697),i=e.n(o);function u(n,t){return void 0===n&&(n=""),void 0===t&&(t=r),t?n.split(" ").map((function(n){return t[n]||n})).join(" "):n}function c(n,t){var e={};return Object.keys(n).forEach((function(r){-1===t.indexOf(r)&&(e[r]=n[r])})),e}function a(n,t){for(var e,r=Array.isArray(t)?t:[t],o=r.length,i={};o>0;)i[e=r[o-=1]]=n[e];return i}var f="object"==typeof window&&window.Element||function(){};function s(n,t,e){if(!(n[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+e+"`. Expected prop to be an instance of Element. Validation failed.")}var l=i().oneOfType([i().string,i().func,s,i().shape({current:i().any})]),p=(i().oneOfType([i().func,i().string,i().shape({$$typeof:i().symbol,render:i().func}),i().arrayOf(i().oneOfType([i().func,i().string,i().shape({$$typeof:i().symbol,render:i().func})]))]),{Fade:150,Collapse:350,Modal:300,Carousel:600}),d=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},h=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],v=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}function g(n){var t=typeof n;return null!=n&&("object"===t||"function"===t)}function E(n){if(function(n){return!(!n||"object"!=typeof n)&&"current"in n}(n))return n.current;if(function(n){if(!g(n))return!1;var t=m(n);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(n))return n();if("string"==typeof n&&v){var t=document.querySelectorAll(n);if(t.length||(t=document.querySelectorAll("#"+n)),!t.length)throw new Error("The target '"+n+"' could not be identified in the dom, tip: check spelling");return t}return n}function b(n){return null!==n&&(Array.isArray(n)||v&&"number"==typeof n.length)}function w(n,t){var e=E(n);return t?b(e)?e:null===e?[]:[e]:b(e)?e[0]:e}var O=["touchstart","click"];function j(n,t,e,r){var o=n;b(o)||(o=[o]);var i=e;if("string"==typeof i&&(i=i.split(/\s+/)),!b(o)||"function"!=typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(n){Array.prototype.forEach.call(o,(function(e){e.addEventListener(n,t,r)}))})),function(){Array.prototype.forEach.call(i,(function(n){Array.prototype.forEach.call(o,(function(e){e.removeEventListener(n,t,r)}))}))}}},2767:function(n,t,e){"use strict";e.r(t);var r=e(7294),o=e(6921);t.default=function(n){return r.createElement("div",{className:"PageContainer"},r.createElement(o.Z,null,r.createElement("div",{className:"Banner"},"You won't get much work done if you only do it when you feel like it.")))}},7462:function(n,t,e){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}e.d(t,{Z:function(){return r}})},3366:function(n,t,e){"use strict";function r(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-backtowork-index-jsx-9a2a55d295e679479562.js.map