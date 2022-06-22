(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(88),t.b),l=i()(o()),p=d()(s);l.push([e.id,"body {\r\n    background-image: url("+p+');\r\n    padding: 4px;\r\n}\r\n\r\n#content {\r\n    background-color: white;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 2px solid black;\r\n    border-radius: 8px;\r\n}\r\n\r\nh1 {\r\n    font-size: 64px;\r\n    font-family: "Brush Script MT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;\r\n    margin: 24px;\r\n    align-self: center;\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    font-size: 18px;\r\n}\r\n\r\n#tabs {\r\n    display: flex;\r\n    gap: 48px;\r\n    justify-content: center;\r\n    margin-bottom: -1.2px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.tab {\r\n    appearance: none;\r\n    margin: 0;\r\n    border-radius: 8px;\r\n}\r\n\r\n.selected {\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n\r\nlabel:hover {\r\n}\r\n\r\nlabel {\r\n    background-color: white;\r\n    padding: 8px 16px;\r\n    border-left: 1px solid black;\r\n    border-right: 1px solid black;\r\n    border-top: 1px solid black;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.menu {\r\n    border: 2px solid blue;\r\n    margin: 5px;\r\n    width: 90%;\r\n    padding: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n',""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"7c724629b5193338bef3.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"b5d90e8da01ac7fbd399.jpg";function v(){const e=document.createElement("div");e.id="content";const n=new Image;n.src=h,n.width*=1.5,n.height*=1.5,n.alt="Spaghetti",e.appendChild(n);const t=document.createElement("h1");t.innerText="Special Spaghet",e.appendChild(t);const r=document.createElement("p");return r.innerText="The best spaghetti in town",e.appendChild(r),e}function b(){function e(e,n){const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("div");r.innerText=e,r.classList.add("item-name");const o=document.createElement("div");return o.innerText=n,o.classList.add("item-price"),t.appendChild(r),t.appendChild(o),t}const n=document.createElement("div");n.id="content";const t=document.createElement("div");t.classList.add("menu");const r=document.createElement("h1");return r.innerText="Menu",t.appendChild(r),t.appendChild(e("Spaghetti and Meatballs","$9.99")),t.appendChild(e("Carbonara","$10.99")),t.appendChild(e("Cacio e Pepe","$11.99")),t.appendChild(e("Seafood Special","$14.99")),t.appendChild(e("Creamy Three-Cheese Spaghetti","$14.99")),t.appendChild(e("Green Spaghetti","$10.99")),n.appendChild(t),n}function g(){const e=document.createElement("div");e.id="content";const n=document.createElement("h1");n.innerText="Contact",e.appendChild(n);const t=document.createElement("p");t.innerText="Restaurant: +1 202-555-0648";const r=document.createElement("p");return r.innerText="Owner: Sean Aoki\n+1 404-555-0118",e.appendChild(t),e.appendChild(r),e}function x(e){const n=document.createElement("label"),t=document.createElement("input");return t.classList.add("tab"),t.type="radio",t.name="tabs",t.value=e,n.innerText=e.charAt(0).toUpperCase()+e.slice(1),n.appendChild(t),n}function y(){let e=this.children[0].value;!function(){for(let e of T.children)e.classList.remove("selected")}(),this.classList.add("selected");let n={home:v,menu:b,contact:g};C.removeChild(document.querySelector("#content")),C.appendChild(n[e]())}const C=document.querySelector("body"),E=x("home");E.addEventListener("change",y);const S=x("menu");S.addEventListener("change",y);const w=x("contact");w.addEventListener("change",y),E.children[0].checked=!0,E.classList.add("selected");const T=document.createElement("div");T.id="tabs",T.appendChild(E),T.appendChild(S),T.appendChild(w),C.appendChild(T),C.appendChild(v())})()})();