!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){if(void 0!==chrome.runtime.id){const e=chrome.runtime.connect(chrome.runtime.id);e.onMessage.addListener(e=>{if("[object Object]"==={}.toString.call(e))if(e.error)console.error(`[rebirth plugin]: ${JSON.stringify(e.error)}`);else if("ready"===e.type){const e=document.createElement("script");e.src=chrome.extension.getURL("injected.js"),(document.head||document.documentElement).appendChild(e)}}),window.addEventListener("message",t=>{0!==Object.keys(t.data).length&&t.data.action&&e.postMessage(t.data)},!1),e.postMessage({action:"ready"})}}]);