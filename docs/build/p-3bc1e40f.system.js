var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),a=0,t=0;t<e;t++)for(var i=arguments[t],c=0,o=i.length;c<o;c++,a++)n[a]=i[c];return n};System.register(["./p-6109db53.system.js"],(function(r){"use strict";var t;return{setters:[function(r){t=r.h}],execute:function(){var e=function(r,t){var e=new Map;var n=r;var a=function(r,t){if(Array.isArray(r)){__spreadArrays(r).forEach((function(r){t[r]=n[r]}))}else{t[r]=Object.assign({},n)}};var i=function(r,t){if(!e.has(r)){e.set(r,t);a(t,r)}return function(){if(e.has(r)){e.delete(r)}}};var c=function(r,t){var i=r.state;n=i;e.forEach(a);return t};var o=function(r,e){return t(i,e[0])};var s=function(r,t){var n=r.prototype;var a=n.connectedCallback;var c=n.disconnectedCallback;n.connectedCallback=function(){i(this,t);if(a){return a.call(this)}};n.disconnectedCallback=function(){e.delete(this);if(c){c.call(this)}}};return{Provider:c,Consumer:o,injectProps:s}};var n=r("A",e({historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},(function(r,e){return t("context-consumer",{subscribe:r,renderer:e})})))}}}));