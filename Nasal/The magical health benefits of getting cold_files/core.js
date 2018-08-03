Array.from||(Array.from=function(b){return[].slice.call(b)
});
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.ES6Promise=b()
}(this,function(){function aN(a){return"function"==typeof a||"object"==typeof a&&null!==a
}function a5(a){return"function"==typeof a
}function aU(a){ar=a
}function aP(a){aq=a
}function aT(){return function(){return process.nextTick(a9)
}
}function a0(){return"undefined"!=typeof at?function(){at(a9)
}:a7()
}function aO(){var a=0,b=new ae(a9),c=document.createTextNode("");
return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2
}
}function aM(){var a=new MessageChannel;
return a.port1.onmessage=a9,function(){return a.port2.postMessage(0)
}
}function a7(){var a=setTimeout;
return function(){return a(a9,1)
}
}function a9(){for(var a=0;
a<av;
a+=2){var b=aG[a],c=aG[a+1];
b(c),aG[a]=void 0,aG[a+1]=void 0
}av=0
}function a4(){try{var a=require,b=a("vertx");
return at=b.runOnLoop||b.runOnContext,a0()
}catch(c){return a7()
}}function aW(b,d){var g=arguments,c=this,f=new this.constructor(aS);
void 0===f[aR]&&aX(f);
var a=c._state;
return a?!function(){var e=g[a-1];
aq(function(){return aJ(a,f,e,c._result)
})
}():ax(c,f,b,d),f
}function a1(a){var b=this;
if(a&&"object"==typeof a&&a.constructor===b){return a
}var c=new b(aS);
return a2(c,a),c
}function aS(){}function aL(){return new TypeError("You cannot resolve a promise with itself")
}function a6(){return new TypeError("A promises callback cannot return that same promise.")
}function ba(a){try{return a.then
}catch(b){return aC.error=b,aC
}}function aI(a,c,f,b){try{a.call(c,f,b)
}catch(d){return d
}}function aV(a,b,c){aq(function(d){var e=!1,f=aI(c,b,function(g){e||(e=!0,b!==g?a2(d,g):ah(d,g))
},function(g){e||(e=!0,aZ(d,g))
},"Settle: "+(d._label||" unknown promise"));
!e&&f&&(e=!0,aZ(d,f))
},a)
}function a8(a,b){b._state===aE?ah(a,b._result):b._state===aD?aZ(a,b._result):ax(b,void 0,function(c){return a2(a,c)
},function(c){return aZ(a,c)
})
}function aK(a,c,b){c.constructor===a.constructor&&b===aW&&c.constructor.resolve===a1?a8(a,c):b===aC?(aZ(a,aC.error),aC.error=null):void 0===b?ah(a,c):a5(b)?aV(a,c,b):ah(a,c)
}function a2(a,b){a===b?aZ(a,aL()):aN(b)?aK(a,b,ba(b)):ah(a,b)
}function aB(a){a._onerror&&a._onerror(a._result),ag(a)
}function ah(a,b){a._state===aY&&(a._result=b,a._state=aE,0!==a._subscribers.length&&aq(ag,a))
}function aZ(a,b){a._state===aY&&(a._state=aD,a._result=b,aq(aB,a))
}function ax(b,d,g,c){var f=b._subscribers,a=f.length;
b._onerror=null,f[a]=d,f[a+aE]=g,f[a+aD]=c,0===a&&b._state&&aq(ag,b)
}function ag(b){var f=b._subscribers,h=b._state;
if(0!==f.length){for(var d=void 0,g=void 0,a=b._result,c=0;
c<f.length;
c+=3){d=f[c],g=f[c+h],d?aJ(h,d,g,a):g(a)
}b._subscribers.length=0
}}function an(){this.error=null
}function ak(a,b){try{return a(b)
}catch(c){return au.error=c,au
}}function aJ(k,e,b,d){var f=a5(b),l=void 0,j=void 0,g=void 0,h=void 0;
if(f){if(l=ak(b,d),l===au?(h=!0,j=l.error,l.error=null):g=!0,e===l){return void aZ(e,a6())
}}else{l=d,g=!0
}e._state!==aY||(f&&g?a2(e,l):h?aZ(e,j):k===aE?ah(e,l):k===aD&&aZ(e,l))
}function az(a,b){try{b(function(d){a2(a,d)
},function(d){aZ(a,d)
})
}catch(c){aZ(a,c)
}}function al(){return aF++
}function aX(a){a[aR]=aF++,a._state=void 0,a._result=void 0,a._subscribers=[]
}function ab(a,b){this._instanceConstructor=a,this.promise=new a(aS),this.promise[aR]||aX(this.promise),aA(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?ah(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&ah(this.promise,this._result))):aZ(this.promise,aQ())
}function aQ(){return new Error("Array Methods must be provided an Array")
}function aw(a){return new ab(this,a).promise
}function ay(a){var b=this;
return new b(aA(a)?function(f,d){for(var e=a.length,c=0;
c<e;
c++){b.resolve(a[c]).then(f,d)
}}:function(c,d){return d(new TypeError("You must pass an array to race."))
})
}function ap(a){var b=this,c=new b(aS);
return aZ(c,a),c
}function ao(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}function am(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}function af(a){this[aR]=al(),this._result=this._state=void 0,this._subscribers=[],aS!==a&&("function"!=typeof a&&ao(),this instanceof af?az(this,a):am())
}function ad(){var a=void 0;
if("undefined"!=typeof global){a=global
}else{if("undefined"!=typeof self){a=self
}else{try{a=Function("return this")()
}catch(c){throw new Error("polyfill failed because global object is unavailable in this environment")
}}}var d=a.Promise;
if(d){var b=null;
try{b=Object.prototype.toString.call(d.resolve())
}catch(c){}if("[object Promise]"===b&&!d.cast){return
}}a.Promise=af
}var aH=void 0;
aH=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)
};
var aA=aH,av=0,at=void 0,ar=void 0,aq=function(a,b){aG[av]=a,aG[av+1]=b,av+=2,2===av&&(ar?ar(a9):a3())
},aj="undefined"!=typeof window?window:void 0,ai=aj||{},ae=ai.MutationObserver||ai.WebKitMutationObserver,ac="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,aG=new Array(1000),a3=void 0;
a3=ac?aT():ae?aO():aa?aM():void 0===aj&&"function"==typeof require?a4():a7();
var aR=Math.random().toString(36).substring(16),aY=void 0,aE=1,aD=2,aC=new an,au=new an,aF=0;
return ab.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;
this._state===aY&&c<a;
c++){this._eachEntry(b[c],c)
}},ab.prototype._eachEntry=function(b,d){var g=this._instanceConstructor,c=g.resolve;
if(c===a1){var f=ba(b);
if(f===aW&&b._state!==aY){this._settledAt(b._state,d,b._result)
}else{if("function"!=typeof f){this._remaining--,this._result[d]=b
}else{if(g===af){var a=new g(aS);
aK(a,b,f),this._willSettleAt(a,d)
}else{this._willSettleAt(new g(function(h){return h(b)
}),d)
}}}}else{this._willSettleAt(c(b),d)
}},ab.prototype._settledAt=function(a,c,d){var b=this.promise;
b._state===aY&&(this._remaining--,a===aD?aZ(b,d):this._result[c]=d),0===this._remaining&&ah(b,this._result)
},ab.prototype._willSettleAt=function(a,b){var c=this;
ax(a,void 0,function(d){return c._settledAt(aE,b,d)
},function(d){return c._settledAt(aD,b,d)
})
},af.all=aw,af.race=ay,af.resolve=a1,af.reject=ap,af._setScheduler=aU,af._setAsap=aP,af._asap=aq,af.prototype={constructor:af,then:aW,"catch":function(a){return this.then(null,a)
}},af.polyfill=ad,af.Promise=af,af.polyfill(),af
});
!function(x){function N(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)){throw new TypeError("Invalid character in header field name")
}return a.toLowerCase()
}function C(a){return"string"!=typeof a&&(a=String(a)),a
}function G(a){var b={next:function(){var c=a.shift();
return{done:void 0===c,value:c}
}};
return I.iterable&&(b[Symbol.iterator]=function(){return b
}),b
}function H(a){this.map={},a instanceof H?a.forEach(function(b,c){this.append(c,b)
},this):Array.isArray(a)?a.forEach(function(b){this.append(b[0],b[1])
},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])
},this)
}function K(a){if(a.bodyUsed){return Promise.reject(new TypeError("Already read"))
}a.bodyUsed=!0
}function z(a){return new Promise(function(c,b){a.onload=function(){c(a.result)
},a.onerror=function(){b(a.error)
}
})
}function R(a){var c=new FileReader,b=z(c);
return c.readAsArrayBuffer(a),b
}function L(a){var c=new FileReader,b=z(c);
return c.readAsText(a),b
}function q(a){for(var c=new Uint8Array(a),b=new Array(c.length),d=0;
d<c.length;
d++){b[d]=String.fromCharCode(c[d])
}return b.join("")
}function M(a){if(a.slice){return a.slice(0)
}var b=new Uint8Array(a.byteLength);
return b.set(new Uint8Array(a)),b.buffer
}function O(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,a){if("string"==typeof a){this._bodyText=a
}else{if(I.blob&&Blob.prototype.isPrototypeOf(a)){this._bodyBlob=a
}else{if(I.formData&&FormData.prototype.isPrototypeOf(a)){this._bodyFormData=a
}else{if(I.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)){this._bodyText=a.toString()
}else{if(I.arrayBuffer&&I.blob&&k(a)){this._bodyArrayBuffer=M(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])
}else{if(!I.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(a)&&!D(a)){throw new Error("unsupported BodyInit type")
}this._bodyArrayBuffer=M(a)
}}}}}}else{this._bodyText=""
}this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):I.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))
},I.blob&&(this.blob=function(){var a=K(this);
if(a){return a
}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)
}if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))
}if(this._bodyFormData){throw new Error("could not read FormData body as blob")
}return Promise.resolve(new Blob([this._bodyText]))
},this.arrayBuffer=function(){return this._bodyArrayBuffer?K(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(R)
}),this.text=function(){var a=K(this);
if(a){return a
}if(this._bodyBlob){return L(this._bodyBlob)
}if(this._bodyArrayBuffer){return Promise.resolve(q(this._bodyArrayBuffer))
}if(this._bodyFormData){throw new Error("could not read FormData body as text")
}return Promise.resolve(this._bodyText)
},I.formData&&(this.formData=function(){return this.text().then(P)
}),this.json=function(){return this.text().then(JSON.parse)
},this
}function g(a){var b=a.toUpperCase();
return S.indexOf(b)>-1?b:a
}function J(a,c){var b=(c=c||{}).body;
if(a instanceof J){if(a.bodyUsed){throw new TypeError("Already read")
}this.url=a.url,this.credentials=a.credentials,c.headers||(this.headers=new H(a.headers)),this.method=a.method,this.mode=a.mode,b||null==a._bodyInit||(b=a._bodyInit,a.bodyUsed=!0)
}else{this.url=String(a)
}if(this.credentials=c.credentials||this.credentials||"omit",!c.headers&&this.headers||(this.headers=new H(c.headers)),this.method=g(c.method||this.method||"GET"),this.mode=c.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&b){throw new TypeError("Body not allowed for GET or HEAD requests")
}this._initBody(b)
}function P(a){var b=new FormData;
return a.trim().split("&").forEach(function(c){if(c){var d=c.split("="),e=d.shift().replace(/\+/g," "),f=d.join("=").replace(/\+/g," ");
b.append(decodeURIComponent(e),decodeURIComponent(f))
}}),b
}function F(a){var b=new H;
return a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(c){var d=c.split(":"),e=d.shift().trim();
if(e){var f=d.join(":").trim();
b.append(e,f)
}}),b
}function Q(a,b){b||(b={}),this.type="default",this.status="status" in b?b.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText" in b?b.statusText:"OK",this.headers=new H(b.headers),this.url=b.url||"",this._initBody(a)
}if(!x.fetch){var I={searchParams:"URLSearchParams" in x,iterable:"Symbol" in x&&"iterator" in Symbol,blob:"FileReader" in x&&"Blob" in x&&function(){try{return new Blob,!0
}catch(a){return !1
}}(),formData:"FormData" in x,arrayBuffer:"ArrayBuffer" in x};
if(I.arrayBuffer){var j=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],k=function(a){return a&&DataView.prototype.isPrototypeOf(a)
},D=ArrayBuffer.isView||function(a){return a&&j.indexOf(Object.prototype.toString.call(a))>-1
}
}H.prototype.append=function(a,b){a=N(a),b=C(b);
var c=this.map[a];
this.map[a]=c?c+","+b:b
},H.prototype["delete"]=function(a){delete this.map[N(a)]
},H.prototype.get=function(a){return a=N(a),this.has(a)?this.map[a]:null
},H.prototype.has=function(a){return this.map.hasOwnProperty(N(a))
},H.prototype.set=function(a,b){this.map[N(a)]=C(b)
},H.prototype.forEach=function(a,c){for(var b in this.map){this.map.hasOwnProperty(b)&&a.call(c,this.map[b],b,this)
}},H.prototype.keys=function(){var a=[];
return this.forEach(function(c,b){a.push(b)
}),G(a)
},H.prototype.values=function(){var a=[];
return this.forEach(function(b){a.push(b)
}),G(a)
},H.prototype.entries=function(){var a=[];
return this.forEach(function(c,b){a.push([b,c])
}),G(a)
},I.iterable&&(H.prototype[Symbol.iterator]=H.prototype.entries);
var S=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];
J.prototype.clone=function(){return new J(this,{body:this._bodyInit})
},O.call(J.prototype),O.call(Q.prototype),Q.prototype.clone=function(){return new Q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new H(this.headers),url:this.url})
},Q.error=function(){var a=new Q(null,{status:0,statusText:""});
return a.type="error",a
};
var E=[301,302,303,307,308];
Q.redirect=function(a,b){if(-1===E.indexOf(b)){throw new RangeError("Invalid status code")
}return new Q(null,{status:b,headers:{location:a}})
},x.Headers=H,x.Request=J,x.Response=Q,x.fetch=function(a,b){return new Promise(function(d,e){var f=new J(a,b),c=new XMLHttpRequest;
c.onload=function(){var h={status:c.status,statusText:c.statusText,headers:F(c.getAllResponseHeaders()||"")};
h.url="responseURL" in c?c.responseURL:h.headers.get("X-Request-URL");
var l="response" in c?c.response:c.responseText;
d(new Q(l,h))
},c.onerror=function(){e(new TypeError("Network request failed"))
},c.ontimeout=function(){e(new TypeError("Network request failed"))
},c.open(f.method,f.url,!0),"include"===f.credentials?c.withCredentials=!0:"omit"===f.credentials&&(c.withCredentials=!1),"responseType" in c&&I.blob&&(c.responseType="blob"),f.headers.forEach(function(h,l){c.setRequestHeader(l,h)
}),c.send(void 0===f._bodyInit?null:f._bodyInit)
})
},x.fetch.polyfill=!0
}}("undefined"!=typeof self?self:this);
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+yt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return kt(e.replace(z,"$1"),t,n,i)
}function st(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function lt(e){return e[b]=!0,e
}function ut(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ct(e,t){var n=e.split("|"),r=e.length;
while(r--){o.attrHandle[n[r]]=t
}}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ft(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function dt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ut(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return pt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:lt(function(e){return function(t){return at(e,t).length>0
}
}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:ht(function(){return[0]
}),last:ht(function(e,t){return[t-1]
}),eq:ht(function(e,t,n){return[0>n?n+t:n]
}),even:ht(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:ht(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}},o.pseudos.nth=o.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=ft(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=dt(n)
}function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function yt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function bt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t
},s,!0),p=vt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[vt(bt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
}f.push(n)
}}return bt(f)
}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=xt(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?lt(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=mt(e)),n=t.length;
while(n--){o=Tt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Ct(i,r))
}return o
};
function Nt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))
}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
}),ut(function(e){return null==e.getAttribute("disabled")
})||ct(B,function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return !l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];
while(t=a[r++]){o.hasClass(t)?o.removeClass(t):o.addClass(t)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
(function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
Math.uuid=function(b,e){var g=a,d=[],c;
e=e||g.length;
if(b){for(c=0;
c<b;
c++){d[c]=g[0|Math.random()*e]
}}else{var f;
d[8]=d[13]=d[18]=d[23]="-";
d[14]="4";
for(c=0;
c<36;
c++){if(!d[c]){f=0|Math.random()*16;
d[c]=g[(c==19)?(f&3)|8:f]
}}}return d.join("")
};
Math.uuidFast=function(){var f=a,d=new Array(36),c=0,e;
for(var b=0;
b<36;
b++){if(b==8||b==13||b==18||b==23){d[b]="-"
}else{if(b==14){d[b]="4"
}else{if(c<=2){c=33554432+(Math.random()*16777216)|0
}e=c&15;
c=c>>4;
d[b]=f[(b==19)?(e&3)|8:e]
}}}return d.join("")
};
Math.uuidCompact=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var d=Math.random()*16|0,b=e=="x"?d:(d&3|8);
return b.toString(16)
})
}
})();
+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.affix"),b="object"==typeof a&&a;
c||j.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.2.0",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var r=f(document).height(),q=this.$target.scrollTop(),p=this.$element.offset(),o=this.options.offset,n=o.top,m=o.bottom;
"object"!=typeof o&&(m=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof m&&(m=o.bottom(this.$element));
var l=null!=this.unpin&&q+this.unpin<=p.top?!1:null!=m&&p.top+this.$element.height()>=r-m?"bottom":null!=n&&n>=q?"top":!1;
if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");
var c="affix"+(l?"-"+l:""),a=f.Event(c+".bs.affix");
this.$element.trigger(a),a.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(c).trigger(f.Event(c.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:r-this.$element.height()-m}))
}}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},a.offsetBottom&&(a.offset.bottom=a.offsetBottom),a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
(function(a2,ad,aP){var s=["","webkit","moz","MS","ms","o"];
var A=ad.createElement("div");
var R="function";
var N=Math.round;
var aa=Math.abs;
var a3=Date.now;
function j(bi,bj,bh){return setTimeout(E(bi,bh),bj)
}function V(bh,bj,bi){if(Array.isArray(bh)){bf(bh,bi[bj],bi);
return true
}return false
}function bf(bl,bk,bj){var bi,bh;
if(!bl){return
}if(bl.forEach){bl.forEach(bk,bj)
}else{if(bl.length!==undefined){for(bi=0,bh=bl.length;
bi<bh;
bi++){bk.call(bj,bl[bi],bi,bl)
}}else{for(bi in bl){bl.hasOwnProperty(bi)&&bk.call(bj,bl[bi],bi,bl)
}}}}function aB(bi,bl,bm){var bk=Object.keys(bl);
for(var bj=0,bh=bk.length;
bj<bh;
bj++){if(!bm||(bm&&bi[bk[bj]]===undefined)){bi[bk[bj]]=bl[bk[bj]]
}}return bi
}function B(bh,bi){return aB(bh,bi,true)
}function C(bl,bj,bi){var bh=bj.prototype,bk;
bk=bl.prototype=Object.create(bh);
bk.constructor=bl;
bk._super=bh;
if(bi){aB(bk,bi)
}}function E(bj,bh){return function bi(){return bj.apply(bh,arguments)
}
}function ae(bi,bh){if(typeof bi==R){return bi.apply(bh?bh[0]||undefined:undefined,bh)
}return bi
}function az(bi,bh){return(bi===undefined)?bh:bi
}function aA(bi,bh,bj){bf(aL(bh),function(bk){bi.addEventListener(bk,bj,false)
})
}function I(bi,bh,bj){bf(aL(bh),function(bk){bi.removeEventListener(bk,bj,false)
})
}function m(bi,bh){while(bi){if(bi==bh){return true
}bi=bi.parentNode
}return false
}function h(bi,bh){return bi.indexOf(bh)>-1
}function aL(bh){return bh.trim().split(/\s+/g)
}function x(bl,bk,bj){if(bl.indexOf&&!bj){return bl.indexOf(bk)
}else{for(var bi=0,bh=bl.length;
bi<bh;
bi++){if((bj&&bl[bi][bj]==bk)||(!bj&&bl[bi]===bk)){return bi
}}return -1
}}function S(bh){return Array.prototype.slice.call(bh,0)
}function a5(bh,bo,bk){var bl=[];
var bp=[];
for(var bm=0,bn=bh.length;
bm<bn;
bm++){var bj=bo?bh[bm][bo]:bh[bm];
if(x(bp,bj)<0){bl.push(bh[bm])
}bp[bm]=bj
}if(bk){if(!bo){bl=bl.sort()
}else{bl=bl.sort(function bi(br,bq){return br[bo]>bq[bo]
})
}}return bl
}function ai(bm,bl){var bk,bn;
var bi=bl[0].toUpperCase()+bl.slice(1);
for(var bj=0,bh=s.length;
bj<bh;
bj++){bk=s[bj];
bn=(bk)?bk+bi:bl;
if(bn in bm){return bn
}}return undefined
}var r=1;
function aC(){return r++
}var t=/mobile|tablet|ip(ad|hone|od)|android/i;
var b=("ontouchstart" in a2);
var Z=ai(a2,"PointerEvent")!==undefined;
var at=b&&t.test(navigator.userAgent);
var ax="touch";
var o="pen";
var K="mouse";
var O="kinect";
var ba=25;
var aX=1;
var aT=2;
var e=4;
var u=8;
var ar=1;
var k=2;
var y=4;
var Y=8;
var aU=16;
var a6=k|y;
var ap=Y|aU;
var J=a6|ap;
var ab=["x","y"];
var ah=["clientX","clientY"];
function a(bi,bj){var bh=this;
this.manager=bi;
this.callback=bj;
this.element=bi.element;
this.target=bi.options.inputTarget;
this.domHandler=function(bk){if(ae(bi.options.enable,[bi])){bh.handler(bk)
}};
this.evEl&&aA(this.element,this.evEl,this.domHandler);
this.evTarget&&aA(this.target,this.evTarget,this.domHandler);
this.evWin&&aA(a2,this.evWin,this.domHandler)
}a.prototype={handler:function(){},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler);
this.evTarget&&I(this.target,this.evTarget,this.domHandler);
this.evWin&&I(a2,this.evWin,this.domHandler)
}};
function v(bi){var bh;
if(Z){bh=aH
}else{if(at){bh=ao
}else{if(!b){bh=aq
}else{bh=a8
}}}return new (bh)(bi,an)
}function an(bm,bl,bj){var bi=bj.pointers.length;
var bk=bj.changedPointers.length;
var bh=(bl&aX&&(bi-bk===0));
var bn=(bl&(e|u)&&(bi-bk===0));
bj.isFirst=!!bh;
bj.isFinal=!!bn;
if(bh){bm.session={}
}bj.eventType=bl;
aY(bm,bj);
bm.emit("hammer.input",bj);
bm.recognize(bj);
bm.session.prevInput=bj
}function aY(bk,bp){var bn=bk.session;
var bq=bp.pointers;
var bo=bq.length;
if(!bn.firstInput){bn.firstInput=n(bp)
}if(bo>1&&!bn.firstMultiple){bn.firstMultiple=n(bp)
}else{if(bo===1){bn.firstMultiple=false
}}var bj=bn.firstInput;
var bl=bn.firstMultiple;
var bi=bl?bl.center:bj.center;
var bh=bp.center=M(bq);
bp.timeStamp=a3();
bp.deltaTime=bp.timeStamp-bj.timeStamp;
bp.angle=ak(bi,bh);
bp.distance=bb(bi,bh);
am(bn,bp);
bp.offsetDirection=aF(bp.deltaX,bp.deltaY);
bp.scale=bl?d(bl.pointers,bq):1;
bp.rotation=bl?a4(bl.pointers,bq):0;
T(bn,bp);
var bm=bk.element;
if(m(bp.srcEvent.target,bm)){bm=bp.srcEvent.target
}bp.target=bm
}function am(bl,bj){var bi=bj.center;
var bm=bl.offsetDelta||{};
var bh=bl.prevDelta||{};
var bk=bl.prevInput||{};
if(bj.eventType===aX||bk.eventType===e){bh=bl.prevDelta={x:bk.deltaX||0,y:bk.deltaY||0};
bm=bl.offsetDelta={x:bi.x,y:bi.y}
}bj.deltaX=bh.x+(bi.x-bm.x);
bj.deltaY=bh.y+(bi.y-bm.y)
}function T(bl,bo){var br=bl.lastInterval||bo,bk=bo.timeStamp-br.timeStamp,bi,bp,bm,bn;
if(bo.eventType!=u&&(bk>ba||br.velocity===undefined)){var bj=br.deltaX-bo.deltaX;
var bh=br.deltaY-bo.deltaY;
var bq=Q(bk,bj,bh);
bp=bq.x;
bm=bq.y;
bi=(aa(bq.x)>aa(bq.y))?bq.x:bq.y;
bn=aF(bj,bh);
bl.lastInterval=bo
}else{bi=br.velocity;
bp=br.velocityX;
bm=br.velocityY;
bn=br.direction
}bo.velocity=bi;
bo.velocityX=bp;
bo.velocityY=bm;
bo.direction=bn
}function n(bi){var bh=[];
for(var bj=0;
bj<bi.pointers.length;
bj++){bh[bj]={clientX:N(bi.pointers[bj].clientX),clientY:N(bi.pointers[bj].clientY)}
}return{timeStamp:a3(),pointers:bh,center:M(bh),deltaX:bi.deltaX,deltaY:bi.deltaY}
}function M(bj){var bi=bj.length;
if(bi===1){return{x:N(bj[0].clientX),y:N(bj[0].clientY)}
}var bh=0,bl=0;
for(var bk=0;
bk<bi;
bk++){bh+=bj[bk].clientX;
bl+=bj[bk].clientY
}return{x:N(bh/bi),y:N(bl/bi)}
}function Q(bi,bh,bj){return{x:bh/bi||0,y:bj/bi||0}
}function aF(bh,bi){if(bh===bi){return ar
}if(aa(bh)>=aa(bi)){return bh>0?k:y
}return bi>0?Y:aU
}function bb(bk,bj,bi){if(!bi){bi=ab
}var bh=bj[bi[0]]-bk[bi[0]],bl=bj[bi[1]]-bk[bi[1]];
return Math.sqrt((bh*bh)+(bl*bl))
}function ak(bk,bj,bi){if(!bi){bi=ab
}var bh=bj[bi[0]]-bk[bi[0]],bl=bj[bi[1]]-bk[bi[1]];
return Math.atan2(bl,bh)*180/Math.PI
}function a4(bi,bh){return ak(bh[1],bh[0],ah)-ak(bi[1],bi[0],ah)
}function d(bi,bh){return bb(bh[0],bh[1],ah)/bb(bi[0],bi[1],ah)
}var aM={mousedown:aX,mousemove:aT,mouseup:e};
var z="mousedown";
var w="mousemove mouseup";
function aq(){this.evEl=z;
this.evWin=w;
this.allow=true;
this.pressed=false;
a.apply(this,arguments)
}C(aq,a,{handler:function P(bi){var bh=aM[bi.type];
if(bh&aX&&bi.button===0){this.pressed=true
}if(bh&aT&&bi.which!==1){bh=e
}if(!this.pressed||!this.allow){return
}if(bh&e){this.pressed=false
}this.callback(this.manager,bh,{pointers:[bi],changedPointers:[bi],pointerType:K,srcEvent:bi})
}});
var aD={pointerdown:aX,pointermove:aT,pointerup:e,pointercancel:u,pointerout:u};
var D={2:ax,3:o,4:K,5:O};
var a1="pointerdown";
var f="pointermove pointerup pointercancel";
if(a2.MSPointerEvent){a1="MSPointerDown";
f="MSPointerMove MSPointerUp MSPointerCancel"
}function aH(){this.evEl=a1;
this.evWin=f;
a.apply(this,arguments);
this.store=(this.manager.session.pointerEvents=[])
}C(aH,a,{handler:function aW(bm){var bk=this.store;
var bo=false;
var bj=bm.type.toLowerCase().replace("ms","");
var bl=aD[bj];
var bh=D[bm.pointerType]||bm.pointerType;
var bi=(bh==ax);
if(bl&aX&&(bm.button===0||bi)){bk.push(bm)
}else{if(bl&(e|u)){bo=true
}}var bn=x(bk,bm.pointerId,"pointerId");
if(bn<0){return
}bk[bn]=bm;
this.callback(this.manager,bl,{pointers:bk,changedPointers:[bm],pointerType:bh,srcEvent:bm});
if(bo){bk.splice(bn,1)
}}});
var aJ={touchstart:aX,touchmove:aT,touchend:e,touchcancel:u};
var av="touchstart touchmove touchend touchcancel";
function ao(){this.evTarget=av;
this.targetIds={};
a.apply(this,arguments)
}C(ao,a,{handler:function aG(bi){var bh=aJ[bi.type];
var bj=aw.call(this,bi,bh);
if(!bj){return
}this.callback(this.manager,bh,{pointers:bj[0],changedPointers:bj[1],pointerType:ax,srcEvent:bi})
}});
function aw(bn,bm){var bi=S(bn.touches);
var bh=this.targetIds;
if(bm&(aX|aT)&&bi.length===1){bh[bi[0].identifier]=true;
return[bi,bi]
}var bj,bk;
var bl=S(bn.targetTouches);
var bo=S(bn.changedTouches);
var bp=[];
if(bm===aX){for(bj=0,bk=bl.length;
bj<bk;
bj++){bh[bl[bj].identifier]=true
}}for(bj=0,bk=bo.length;
bj<bk;
bj++){if(bh[bo[bj].identifier]){bp.push(bo[bj])
}if(bm&(e|u)){delete bh[bo[bj].identifier]
}}if(!bp.length){return
}return[a5(bl.concat(bp),"identifier",true),bp]
}function a8(){a.apply(this,arguments);
var bh=E(this.handler,this);
this.touch=new ao(this.manager,bh);
this.mouse=new aq(this.manager,bh)
}C(a8,a,{handler:function aV(bi,bl,bk){var bh=(bk.pointerType==ax),bj=(bk.pointerType==K);
if(bh){this.mouse.allow=false
}else{if(bj&&!this.mouse.allow){return
}}if(bl&(e|u)){this.mouse.allow=true
}this.callback(bi,bl,bk)
},destroy:function l(){this.touch.destroy();
this.mouse.destroy()
}});
var aj=ai(A.style,"touchAction");
var bd=aj!==undefined;
var be="compute";
var af="auto";
var a9="manipulation";
var g="none";
var aR="pan-x";
var aQ="pan-y";
function bc(bh,bi){this.manager=bh;
this.set(bi)
}bc.prototype={set:function(bh){if(bh==be){bh=this.compute()
}if(bd){this.manager.element.style[aj]=bh
}this.actions=bh.toLowerCase().trim()
},update:function(){this.set(this.manager.options.touchAction)
},compute:function(){var bh=[];
bf(this.manager.recognizers,function(bi){if(ae(bi.options.enable,[bi])){bh=bh.concat(bi.getTouchAction())
}});
return bg(bh.join(" "))
},preventDefaults:function(bh){if(bd){return
}var bj=bh.srcEvent;
var bl=bh.offsetDirection;
if(this.manager.session.prevented){bj.preventDefault();
return
}var bm=this.actions;
var bn=h(bm,g);
var bi=h(bm,aQ);
var bk=h(bm,aR);
if(bn||(bi&&bk)||(bi&&bl&a6)||(bk&&bl&ap)){return this.preventSrc(bj)
}},preventSrc:function(bh){this.manager.session.prevented=true;
bh.preventDefault()
}};
function bg(bj){if(h(bj,g)){return g
}var bi=h(bj,aR);
var bh=h(bj,aQ);
if(bi&&bh){return aR+" "+aQ
}if(bi||bh){return bi?aR:aQ
}if(h(bj,a9)){return a9
}return af
}var W=1;
var ag=2;
var ac=4;
var aI=8;
var q=aI;
var H=16;
var aE=32;
function G(bh){this.id=aC();
this.manager=null;
this.options=B(bh||{},this.defaults);
this.options.enable=az(this.options.enable,true);
this.state=W;
this.simultaneous={};
this.requireFail=[]
}G.prototype={defaults:{},set:function(bh){aB(this.options,bh);
this.manager&&this.manager.touchAction.update();
return this
},recognizeWith:function(bh){if(V(bh,"recognizeWith",this)){return this
}var bi=this.simultaneous;
bh=X(bh,this);
if(!bi[bh.id]){bi[bh.id]=bh;
bh.recognizeWith(this)
}return this
},dropRecognizeWith:function(bh){if(V(bh,"dropRecognizeWith",this)){return this
}bh=X(bh,this);
delete this.simultaneous[bh.id];
return this
},requireFailure:function(bh){if(V(bh,"requireFailure",this)){return this
}var bi=this.requireFail;
bh=X(bh,this);
if(x(bi,bh)===-1){bi.push(bh);
bh.requireFailure(this)
}return this
},dropRequireFailure:function(bi){if(V(bi,"dropRequireFailure",this)){return this
}bi=X(bi,this);
var bh=x(this.requireFail,bi);
if(bh>-1){this.requireFail.splice(bh,1)
}return this
},hasRequireFailures:function(){return this.requireFail.length>0
},canRecognizeWith:function(bh){return !!this.simultaneous[bh.id]
},emit:function(bi){var bh=this;
var bk=this.state;
function bj(bl){bh.manager.emit(bh.options.event+(bl?a0(bk):""),bi)
}if(bk<aI){bj(true)
}bj();
if(bk>=aI){bj(true)
}},tryEmit:function(bh){if(this.canEmit()){return this.emit(bh)
}this.state=aE
},canEmit:function(){for(var bh=0;
bh<this.requireFail.length;
bh++){if(!(this.requireFail[bh].state&(aE|W))){return false
}}return true
},recognize:function(bh){var bi=aB({},bh);
if(!ae(this.options.enable,[this,bi])){this.reset();
this.state=aE;
return
}if(this.state&(q|H|aE)){this.state=W
}this.state=this.process(bi);
if(this.state&(ag|ac|aI|H)){this.tryEmit(bi)
}},process:function(bh){},getTouchAction:function(){},reset:function(){}};
function a0(bh){if(bh&H){return"cancel"
}else{if(bh&aI){return"end"
}else{if(bh&ac){return"move"
}else{if(bh&ag){return"start"
}}}}return""
}function aS(bh){if(bh==aU){return"down"
}else{if(bh==Y){return"up"
}else{if(bh==k){return"left"
}else{if(bh==y){return"right"
}}}}return""
}function X(bj,bh){var bi=bh.manager;
if(bi){return bi.get(bj)
}return bj
}function au(){G.apply(this,arguments)
}C(au,G,{defaults:{pointers:1},attrTest:function(bh){var bi=this.options.pointers;
return bi===0||bh.pointers.length===bi
},process:function(bi){var bk=this.state;
var bj=bi.eventType;
var bh=bk&(ag|ac);
var bl=this.attrTest(bi);
if(bh&&(bj&u||!bl)){return bk|H
}else{if(bh||bl){if(bj&e){return bk|aI
}else{if(!(bk&ag)){return ag
}}return bk|ac
}}return aE
}});
function p(){au.apply(this,arguments);
this.pX=null;
this.pY=null
}C(p,au,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var bh=this.options.direction;
if(bh===J){return[g]
}var bi=[];
if(bh&a6){bi.push(aQ)
}if(bh&ap){bi.push(aR)
}return bi
},directionTest:function(bj){var bk=this.options;
var bi=true;
var bn=bj.distance;
var bl=bj.direction;
var bh=bj.deltaX;
var bm=bj.deltaY;
if(!(bl&bk.direction)){if(bk.direction&a6){bl=(bh===0)?ar:(bh<0)?k:y;
bi=bh!=this.pX;
bn=Math.abs(bj.deltaX)
}else{bl=(bm===0)?ar:(bm<0)?Y:aU;
bi=bm!=this.pY;
bn=Math.abs(bj.deltaY)
}}bj.direction=bl;
return bi&&bn>bk.threshold&&bl&bk.direction
},attrTest:function(bh){return au.prototype.attrTest.call(this,bh)&&(this.state&ag||(!(this.state&ag)&&this.directionTest(bh)))
},emit:function(bh){this.pX=bh.deltaX;
this.pY=bh.deltaY;
var bi=aS(bh.direction);
if(bi){this.manager.emit(this.options.event+bi,bh)
}this._super.emit.call(this,bh)
}});
function aZ(){au.apply(this,arguments)
}C(aZ,au,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[g]
},attrTest:function(bh){return this._super.attrTest.call(this,bh)&&(Math.abs(bh.scale-1)>this.options.threshold||this.state&ag)
},emit:function(bi){this._super.emit.call(this,bi);
if(bi.scale!==1){var bh=bi.scale<1?"in":"out";
this.manager.emit(this.options.event+bh,bi)
}}});
function aK(){G.apply(this,arguments);
this._timer=null;
this._input=null
}C(aK,G,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[af]
},process:function(bi){var bj=this.options;
var bl=bi.pointers.length===bj.pointers;
var bh=bi.distance<bj.threshold;
var bk=bi.deltaTime>bj.time;
this._input=bi;
if(!bh||!bl||(bi.eventType&(e|u)&&!bk)){this.reset()
}else{if(bi.eventType&aX){this.reset();
this._timer=j(function(){this.state=q;
this.tryEmit()
},bj.time,this)
}else{if(bi.eventType&e){return q
}}}return aE
},reset:function(){clearTimeout(this._timer)
},emit:function(bh){if(this.state!==q){return
}if(bh&&(bh.eventType&e)){this.manager.emit(this.options.event+"up",bh)
}else{this._input.timeStamp=a3();
this.manager.emit(this.options.event,this._input)
}}});
function ay(){au.apply(this,arguments)
}C(ay,au,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[g]
},attrTest:function(bh){return this._super.attrTest.call(this,bh)&&(Math.abs(bh.rotation)>this.options.threshold||this.state&ag)
}});
function aN(){au.apply(this,arguments)
}C(aN,au,{defaults:{event:"swipe",threshold:10,velocity:0.65,direction:a6|ap,pointers:1},getTouchAction:function(){return p.prototype.getTouchAction.call(this)
},attrTest:function(bh){var bj=this.options.direction;
var bi;
if(bj&(a6|ap)){bi=bh.velocity
}else{if(bj&a6){bi=bh.velocityX
}else{if(bj&ap){bi=bh.velocityY
}}}return this._super.attrTest.call(this,bh)&&bj&bh.direction&&aa(bi)>this.options.velocity&&bh.eventType&e
},emit:function(bh){var bi=aS(bh.direction);
if(bi){this.manager.emit(this.options.event+bi,bh)
}this.manager.emit(this.options.event,bh)
}});
function al(){G.apply(this,arguments);
this.pTime=false;
this.pCenter=false;
this._timer=null;
this._input=null;
this.count=0
}C(al,G,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[a9]
},process:function(bj){var bl=this.options;
var bo=bj.pointers.length===bl.pointers;
var bi=bj.distance<bl.threshold;
var bk=bj.deltaTime<bl.time;
this.reset();
if((bj.eventType&aX)&&(this.count===0)){return this.failTimeout()
}if(bi&&bk&&bo){if(bj.eventType!=e){return this.failTimeout()
}var bn=this.pTime?(bj.timeStamp-this.pTime<bl.interval):true;
var bm=!this.pCenter||bb(this.pCenter,bj.center)<bl.posThreshold;
this.pTime=bj.timeStamp;
this.pCenter=bj.center;
if(!bm||!bn){this.count=1
}else{this.count+=1
}this._input=bj;
var bh=this.count%bl.taps;
if(bh===0){if(!this.hasRequireFailures()){return q
}else{this._timer=j(function(){this.state=q;
this.tryEmit()
},bl.interval,this);
return ag
}}}return aE
},failTimeout:function(){this._timer=j(function(){this.state=aE
},this.options.interval,this);
return aE
},reset:function(){clearTimeout(this._timer)
},emit:function(){if(this.state==q){this._input.tapCount=this.count;
this.manager.emit(this.options.event,this._input)
}}});
function L(bi,bh){bh=bh||{};
bh.recognizers=az(bh.recognizers,L.defaults.preset);
return new a7(bi,bh)
}L.VERSION="2.0.2";
L.defaults={domEvents:false,touchAction:be,inputTarget:null,enable:true,preset:[[ay,{enable:false}],[aZ,{enable:false},["rotate"]],[aN,{direction:a6}],[p,{direction:a6},["swipe"]],[al],[al,{event:"doubletap",taps:2},["tap"]],[aK]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
var F=1;
var aO=2;
function a7(bi,bh){bh=bh||{};
this.options=B(bh,L.defaults);
this.options.inputTarget=this.options.inputTarget||bi;
this.handlers={};
this.session={};
this.recognizers=[];
this.element=bi;
this.input=v(this);
this.touchAction=new bc(this,this.options.touchAction);
U(this,true);
bf(bh.recognizers,function(bk){var bj=this.add(new (bk[0])(bk[1]));
bk[2]&&bj.recognizeWith(bk[2]);
bk[3]&&bj.requireFailure(bk[2])
},this)
}a7.prototype={set:function(bh){aB(this.options,bh);
return this
},stop:function(bh){this.session.stopped=bh?aO:F
},recognize:function(bm){var bn=this.session;
if(bn.stopped){return
}this.touchAction.preventDefaults(bm);
var bi;
var bj=this.recognizers;
var bl=bn.curRecognizer;
if(!bl||(bl&&bl.state&q)){bl=bn.curRecognizer=null
}for(var bk=0,bh=bj.length;
bk<bh;
bk++){bi=bj[bk];
if(bn.stopped!==aO&&(!bl||bi==bl||bi.canRecognizeWith(bl))){bi.recognize(bm)
}else{bi.reset()
}if(!bl&&bi.state&(ag|ac|aI)){bl=bn.curRecognizer=bi
}}},get:function(bh){if(bh instanceof G){return bh
}var bi=this.recognizers;
for(var bj=0;
bj<bi.length;
bj++){if(bi[bj].options.event==bh){return bi[bj]
}}return null
},add:function(bh){if(V(bh,"add",this)){return this
}var bi=this.get(bh.options.event);
if(bi){this.remove(bi)
}this.recognizers.push(bh);
bh.manager=this;
this.touchAction.update();
return bh
},remove:function(bh){if(V(bh,"remove",this)){return this
}var bi=this.recognizers;
bh=this.get(bh);
bi.splice(x(bi,bh),1);
this.touchAction.update();
return this
},on:function(bi,bj){var bh=this.handlers;
bf(aL(bi),function(bk){bh[bk]=bh[bk]||[];
bh[bk].push(bj)
});
return this
},off:function(bi,bj){var bh=this.handlers;
bf(aL(bi),function(bk){if(!bj){delete bh[bk]
}else{bh[bk].splice(x(bh[bk],bj),1)
}});
return this
},emit:function(bk,bl){if(this.options.domEvents){c(bk,bl)
}var bi=this.handlers[bk]&&this.handlers[bk].slice();
if(!bi||!bi.length){return
}bl.type=bk;
bl.preventDefault=function(){bl.srcEvent.preventDefault()
};
for(var bj=0,bh=bi.length;
bj<bh;
bj++){bi[bj](bl)
}},destroy:function(){this.element&&U(this,false);
this.handlers={};
this.session={};
this.input.destroy();
this.element=null
}};
function U(bi,bj){var bh=bi.element;
bf(bi.options.cssProps,function(bl,bk){bh.style[ai(bh.style,bk)]=bj?bl:""
})
}function c(bh,bi){var bj=ad.createEvent("Event");
bj.initEvent(bh,true,true);
bj.gesture=bi;
bi.target.dispatchEvent(bj)
}aB(L,{INPUT_START:aX,INPUT_MOVE:aT,INPUT_END:e,INPUT_CANCEL:u,STATE_POSSIBLE:W,STATE_BEGAN:ag,STATE_CHANGED:ac,STATE_ENDED:aI,STATE_RECOGNIZED:q,STATE_CANCELLED:H,STATE_FAILED:aE,DIRECTION_NONE:ar,DIRECTION_LEFT:k,DIRECTION_RIGHT:y,DIRECTION_UP:Y,DIRECTION_DOWN:aU,DIRECTION_HORIZONTAL:a6,DIRECTION_VERTICAL:ap,DIRECTION_ALL:J,Manager:a7,Input:a,TouchAction:bc,Recognizer:G,AttrRecognizer:au,Tap:al,Pan:p,Swipe:aN,Pinch:aZ,Rotate:ay,Press:aK,on:aA,off:I,each:bf,merge:B,extend:aB,inherit:C,bindFn:E,prefixed:ai});
if(typeof define==R&&define.amd){define(function(){return L
})
}else{if(typeof module!="undefined"&&module.exports){module.exports=L
}else{a2[aP]=L
}}})(window,document,"Hammer");
(function(b,a,d){function c(g,e){var f=b(g);
if(!f.data(d)){f.data(d,new a(f[0],e))
}}b.fn.hammer=function(e){return this.each(function(){c(this,e)
})
};
a.Manager.prototype.emit=(function(e){return function(f,g){e.call(this,f,g);
b(this.element).trigger({type:f,gesture:g})
}
})(a.Manager.prototype.emit)
})(jQuery,Hammer,"hammer");
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b:b(jQuery)
}(function(v){function u(A){var z=A||window.event,y=n.call(arguments,1),x=0,w=0,k=0,f=0,e=0,d=0;
if(A=v.event.fix(z),A.type="mousewheel","detail" in z&&(k=-1*z.detail),"wheelDelta" in z&&(k=z.wheelDelta),"wheelDeltaY" in z&&(k=z.wheelDeltaY),"wheelDeltaX" in z&&(w=-1*z.wheelDeltaX),"axis" in z&&z.axis===z.HORIZONTAL_AXIS&&(w=-1*k,k=0),x=0===k?w:k,"deltaY" in z&&(k=-1*z.deltaY,x=k),"deltaX" in z&&(w=z.deltaX,0===k&&(x=-1*w)),0!==k||0!==w){if(1===z.deltaMode){var c=v.data(this,"mousewheel-line-height");
x*=c,k*=c,w*=c
}else{if(2===z.deltaMode){var a=v.data(this,"mousewheel-page-height");
x*=a,k*=a,w*=a
}}if(f=Math.max(Math.abs(k),Math.abs(w)),(!q||q>f)&&(q=f,s(z,f)&&(q/=40)),s(z,f)&&(x/=40,w/=40,k/=40),x=Math[x>=1?"floor":"ceil"](x/q),w=Math[w>=1?"floor":"ceil"](w/q),k=Math[k>=1?"floor":"ceil"](k/q),l.settings.normalizeOffset&&this.getBoundingClientRect){var B=this.getBoundingClientRect();
e=A.clientX-B.left,d=A.clientY-B.top
}return A.deltaX=w,A.deltaY=k,A.deltaFactor=q,A.offsetX=e,A.offsetY=d,A.deltaMode=0,y.unshift(A,x,w,k),r&&clearTimeout(r),r=setTimeout(t,200),(v.event.dispatch||v.event.handle).apply(this,y)
}}function t(){q=null
}function s(d,c){return l.settings.adjustOldDeltas&&"mousewheel"===d.type&&c%120===0
}var r,q,p=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel" in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],n=Array.prototype.slice;
if(v.event.fixHooks){for(var m=p.length;
m;
){v.event.fixHooks[p[--m]]=v.event.mouseHooks
}}var l=v.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener){for(var a=o.length;
a;
){this.addEventListener(o[--a],u,!1)
}}else{this.onmousewheel=u
}v.data(this,"mousewheel-line-height",l.getLineHeight(this)),v.data(this,"mousewheel-page-height",l.getPageHeight(this))
},teardown:function(){if(this.removeEventListener){for(var a=o.length;
a;
){this.removeEventListener(o[--a],u,!1)
}}else{this.onmousewheel=null
}v.removeData(this,"mousewheel-line-height"),v.removeData(this,"mousewheel-page-height")
},getLineHeight:function(a){var f=v(a),e=f["offsetParent" in v.fn?"offsetParent":"parent"]();
return e.length||(e=v("body")),parseInt(e.css("fontSize"),10)||parseInt(f.css("fontSize"),10)||16
},getPageHeight:function(a){return v(a).height()
},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};
v.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")
},unmousewheel:function(b){return this.unbind("mousewheel",b)
}})
});
!function(d,c,b){!function(e){var f="function"==typeof define&&define.amd,g="https:"==b.location.protocol?"https:":"http:",a="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
f||d.event.special.mousewheel||d("head").append(decodeURI("%3Cscript src="+g+"//"+a+"%3E%3C/script%3E")),e()
}(function(){var aM="mCustomScrollbar",aN="mCS",aS=".mCustomScrollbar",aI={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},aP=0,aH={},aY=c.attachEvent&&!c.addEventListener?1:0,aX=!1,aG=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],aW={init:function(g){var g=d.extend(!0,{},aI,g),f=aT.call(this);
if(g.live){var h=g.liveSelector||this.selector||aS,j=d(h);
if("off"===g.live){return void aL(h)
}aH[h]=setTimeout(function(){j.mCustomScrollbar(g),"once"===g.live&&j.length&&aL(h)
},500)
}else{aL(h)
}return g.setWidth=g.set_width?g.set_width:g.setWidth,g.setHeight=g.set_height?g.set_height:g.setHeight,g.axis=g.horizontalScroll?"x":aU(g.axis),g.scrollInertia=g.scrollInertia>0&&g.scrollInertia<17?17:g.scrollInertia,"object"!=typeof g.mouseWheel&&1==g.mouseWheel&&(g.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),g.mouseWheel.scrollAmount=g.mouseWheelPixels?g.mouseWheelPixels:g.mouseWheel.scrollAmount,g.mouseWheel.normalizeDelta=g.advanced.normalizeMouseWheelDelta?g.advanced.normalizeMouseWheelDelta:g.mouseWheel.normalizeDelta,g.scrollButtons.scrollType=aF(g.scrollButtons.scrollType),aO(g),d(f).each(function(){var k=d(this);
if(!k.data(aN)){k.data(aN,{idx:++aP,opt:g,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:k.css("direction"),cbOffsets:null,trigger:null});
var p=k.data(aN),l=p.opt,n=k.data("mcs-axis"),m=k.data("mcs-scrollbar-position"),q=k.data("mcs-theme");
n&&(l.axis=n),m&&(l.scrollbarPosition=m),q&&(l.theme=q,aO(l)),aD.call(this),d("#mCSB_"+p.idx+"_container img:not(."+aG[2]+")").addClass(aG[2]),aW.update.call(null,k)
}})
},update:function(g,f){var h=g||aT.call(this);
return d(h).each(function(){var m=d(this);
if(m.data(aN)){var q=m.data(aN),k=q.opt,p=d("#mCSB_"+q.idx+"_container"),j=[d("#mCSB_"+q.idx+"_dragger_vertical"),d("#mCSB_"+q.idx+"_dragger_horizontal")];
if(!p.length){return
}q.tweenRunning&&ab(m),m.hasClass(aG[3])&&m.removeClass(aG[3]),m.hasClass(aG[4])&&m.removeClass(aG[4]),aZ.call(this),af.call(this),"y"===k.axis||k.advanced.autoExpandHorizontalScroll||p.css("width",a0(p.children())),q.overflowed=ad.call(this),ap.call(this),k.autoDraggerLength&&ax.call(this),aC.call(this),al.call(this);
var n=[Math.abs(p[0].offsetTop),Math.abs(p[0].offsetLeft)];
"x"!==k.axis&&(q.overflowed[0]?j[0].height()>j[0].parent().height()?aQ.call(this):(ah(m,n[0].toString(),{dir:"y",dur:0,overwrite:"none"}),q.contentReset.y=null):(aQ.call(this),"y"===k.axis?aj.call(this):"yx"===k.axis&&q.overflowed[1]&&ah(m,n[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==k.axis&&(q.overflowed[1]?j[1].width()>j[1].parent().width()?aQ.call(this):(ah(m,n[1].toString(),{dir:"x",dur:0,overwrite:"none"}),q.contentReset.x=null):(aQ.call(this),"x"===k.axis?aj.call(this):"yx"===k.axis&&q.overflowed[0]&&ah(m,n[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),f&&q&&(2===f&&k.callbacks.onImageLoad&&"function"==typeof k.callbacks.onImageLoad?k.callbacks.onImageLoad.call(this):3===f&&k.callbacks.onSelectorChange&&"function"==typeof k.callbacks.onSelectorChange?k.callbacks.onSelectorChange.call(this):k.callbacks.onUpdate&&"function"==typeof k.callbacks.onUpdate&&k.callbacks.onUpdate.call(this)),t.call(this)
}})
},scrollTo:function(g,f){if("undefined"!=typeof g&&null!=g){var h=aT.call(this);
return d(h).each(function(){var q=d(this);
if(q.data(aN)){var k=q.data(aN),n=k.opt,j={trigger:"external",scrollInertia:n.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},m=d.extend(!0,{},j,f),u=aR.call(this,g),p=m.scrollInertia>0&&m.scrollInertia<17?17:m.scrollInertia;
u[0]=e.call(this,u[0],"y"),u[1]=e.call(this,u[1],"x"),m.moveDragger&&(u[0]*=k.scrollRatio.y,u[1]*=k.scrollRatio.x),m.dur=p,setTimeout(function(){null!==u[0]&&"undefined"!=typeof u[0]&&"x"!==n.axis&&k.overflowed[0]&&(m.dir="y",m.overwrite="all",ah(q,u[0].toString(),m)),null!==u[1]&&"undefined"!=typeof u[1]&&"y"!==n.axis&&k.overflowed[1]&&(m.dir="x",m.overwrite="none",ah(q,u[1].toString(),m))
},m.timeout)
}})
}},stop:function(){var f=aT.call(this);
return d(f).each(function(){var g=d(this);
g.data(aN)&&ab(g)
})
},disable:function(g){var f=aT.call(this);
return d(f).each(function(){var h=d(this);
if(h.data(aN)){h.data(aN);
t.call(this,"remove"),aj.call(this),g&&aQ.call(this),ap.call(this,!0),h.addClass(aG[3])
}})
},destroy:function(){var f=aT.call(this);
return d(f).each(function(){var h=d(this);
if(h.data(aN)){var j=h.data(aN),m=j.opt,g=d("#mCSB_"+j.idx),k=d("#mCSB_"+j.idx+"_container"),n=d(".mCSB_"+j.idx+"_scrollbar");
m.live&&aL(m.liveSelector||d(f).selector),t.call(this,"remove"),aj.call(this),aQ.call(this),h.removeData(aN),a(this,"mcs"),n.remove(),k.find("img."+aG[2]).removeClass(aG[2]),g.replaceWith(k.contents()),h.removeClass(aM+" _"+aN+"_"+j.idx+" "+aG[6]+" "+aG[7]+" "+aG[5]+" "+aG[3]).addClass(aG[4])
}})
}},aT=function(){return"object"!=typeof d(this)||d(this).length<1?aS:this
},aO=function(h){var f=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],k=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],l=["minimal","minimal-dark"],g=["minimal","minimal-dark"],j=["minimal","minimal-dark"];
h.autoDraggerLength=d.inArray(h.theme,f)>-1?!1:h.autoDraggerLength,h.autoExpandScrollbar=d.inArray(h.theme,k)>-1?!1:h.autoExpandScrollbar,h.scrollButtons.enable=d.inArray(h.theme,l)>-1?!1:h.scrollButtons.enable,h.autoHideScrollbar=d.inArray(h.theme,g)>-1?!0:h.autoHideScrollbar,h.scrollbarPosition=d.inArray(h.theme,j)>-1?"outside":h.scrollbarPosition
},aL=function(f){aH[f]&&(clearTimeout(aH[f]),a(aH,f))
},aU=function(f){return"yx"===f||"xy"===f||"auto"===f?"yx":"x"===f||"horizontal"===f?"x":"y"
},aF=function(f){return"stepped"===f||"pixels"===f||"step"===f||"click"===f?"stepped":"stepless"
},aD=function(){var A=d(this),z=A.data(aN),q=z.opt,j=q.autoExpandScrollbar?" "+aG[1]+"_expand":"",o=["<div id='mCSB_"+z.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+z.idx+"_scrollbar mCS-"+q.theme+" mCSB_scrollTools_vertical"+j+"'><div class='"+aG[12]+"'><div id='mCSB_"+z.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+z.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+z.idx+"_scrollbar mCS-"+q.theme+" mCSB_scrollTools_horizontal"+j+"'><div class='"+aG[12]+"'><div id='mCSB_"+z.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],B="yx"===q.axis?"mCSB_vertical_horizontal":"x"===q.axis?"mCSB_horizontal":"mCSB_vertical",y="yx"===q.axis?o[0]+o[1]:"x"===q.axis?o[1]:o[0],x="yx"===q.axis?"<div id='mCSB_"+z.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",w=q.autoHideScrollbar?" "+aG[6]:"",u="x"!==q.axis&&"rtl"===z.langDir?" "+aG[7]:"";
q.setWidth&&A.css("width",q.setWidth),q.setHeight&&A.css("height",q.setHeight),q.setLeft="y"!==q.axis&&"rtl"===z.langDir?"989999px":q.setLeft,A.addClass(aM+" _"+aN+"_"+z.idx+w+u).wrapInner("<div id='mCSB_"+z.idx+"' class='mCustomScrollBox mCS-"+q.theme+" "+B+"'><div id='mCSB_"+z.idx+"_container' class='mCSB_container' style='position:relative; top:"+q.setTop+"; left:"+q.setLeft+";' dir="+z.langDir+" /></div>");
var n=d("#mCSB_"+z.idx),k=d("#mCSB_"+z.idx+"_container");
"y"===q.axis||q.advanced.autoExpandHorizontalScroll||k.css("width",a0(k.children())),"outside"===q.scrollbarPosition?("static"===A.css("position")&&A.css("position","relative"),A.css("overflow","visible"),n.addClass("mCSB_outside").after(y)):(n.addClass("mCSB_inside").append(y),k.wrap(x)),aE.call(this);
var v=[d("#mCSB_"+z.idx+"_dragger_vertical"),d("#mCSB_"+z.idx+"_dragger_horizontal")];
v[0].css("min-height",v[0].height()),v[1].css("min-width",v[1].width())
},a0=function(f){return Math.max.apply(Math,f.map(function(){return d(this).outerWidth(!0)
}).get())
},af=function(){var h=d(this),f=h.data(aN),j=f.opt,g=d("#mCSB_"+f.idx+"_container");
j.advanced.autoExpandHorizontalScroll&&"y"!==j.axis&&g.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(g[0].getBoundingClientRect().right+0.4)-Math.floor(g[0].getBoundingClientRect().left),position:"relative"}).unwrap()
},aE=function(){var j=d(this),g=j.data(aN),n=g.opt,h=d(".mCSB_"+g.idx+"_scrollbar:first"),m=aV(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",f=["<a href='#' class='"+aG[13]+"' oncontextmenu='return false;' "+m+" />","<a href='#' class='"+aG[14]+"' oncontextmenu='return false;' "+m+" />","<a href='#' class='"+aG[15]+"' oncontextmenu='return false;' "+m+" />","<a href='#' class='"+aG[16]+"' oncontextmenu='return false;' "+m+" />"],k=["x"===n.axis?f[2]:f[0],"x"===n.axis?f[3]:f[1],f[2],f[3]];
n.scrollButtons.enable&&h.prepend(k[0]).append(k[1]).next(".mCSB_scrollTools").prepend(k[2]).append(k[3])
},aZ=function(){var j=d(this),g=j.data(aN),n=d("#mCSB_"+g.idx),h=j.css("max-height")||"none",m=-1!==h.indexOf("%"),f=j.css("box-sizing");
if("none"!==h){var k=m?j.parent().height()*parseInt(h)/100:parseInt(h);
"border-box"===f&&(k-=j.innerHeight()-j.height()+(j.outerHeight()-j.innerHeight())),n.css("max-height",Math.round(k))
}},ax=function(){var p=d(this),m=p.data(aN),g=d("#mCSB_"+m.idx),j=d("#mCSB_"+m.idx+"_container"),f=[d("#mCSB_"+m.idx+"_dragger_vertical"),d("#mCSB_"+m.idx+"_dragger_horizontal")],h=[g.height()/j.outerHeight(!1),g.width()/j.outerWidth(!1)],q=[parseInt(f[0].css("min-height")),Math.round(h[0]*f[0].parent().height()),parseInt(f[1].css("min-width")),Math.round(h[1]*f[1].parent().width())],k=aY&&q[1]<q[0]?q[0]:q[1],n=aY&&q[3]<q[2]?q[2]:q[3];
f[0].css({height:k,"max-height":f[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":q[0]+"px"}),f[1].css({width:n,"max-width":f[1].parent().width()-10})
},aC=function(){var j=d(this),g=j.data(aN),n=d("#mCSB_"+g.idx),h=d("#mCSB_"+g.idx+"_container"),m=[d("#mCSB_"+g.idx+"_dragger_vertical"),d("#mCSB_"+g.idx+"_dragger_horizontal")],f=[h.outerHeight(!1)-n.height(),h.outerWidth(!1)-n.width()],k=[f[0]/(m[0].parent().height()-m[0].height()),f[1]/(m[1].parent().width()-m[1].width())];
g.scrollRatio={y:k[0],x:k[1]}
},ay=function(h,g,f){var j=f?aG[0]+"_expanded":"",k=h.closest(".mCSB_scrollTools");
"active"===g?(h.toggleClass(aG[0]+" "+j),k.toggleClass(aG[1]),h[0]._draggable=h[0]._draggable?0:1):h[0]._draggable||("hide"===g?(h.removeClass(aG[0]),k.removeClass(aG[1])):(h.addClass(aG[0]),k.addClass(aG[1])))
},ad=function(){var j=d(this),g=j.data(aN),m=d("#mCSB_"+g.idx),h=d("#mCSB_"+g.idx+"_container"),k=null==g.overflowed?h.height():h.outerHeight(!1),f=null==g.overflowed?h.width():h.outerWidth(!1);
return[k>m.height(),f>m.width()]
},aQ=function(){var j=d(this),g=j.data(aN),n=g.opt,h=d("#mCSB_"+g.idx),m=d("#mCSB_"+g.idx+"_container"),f=[d("#mCSB_"+g.idx+"_dragger_vertical"),d("#mCSB_"+g.idx+"_dragger_horizontal")];
if(ab(j),("x"!==n.axis&&!g.overflowed[0]||"y"===n.axis&&g.overflowed[0])&&(f[0].add(m).css("top",0),ah(j,"_resetY")),"y"!==n.axis&&!g.overflowed[1]||"x"===n.axis&&g.overflowed[1]){var k=dx=0;
"rtl"===g.langDir&&(k=h.width()-m.outerWidth(!1),dx=Math.abs(k/g.scrollRatio.x)),m.css("left",k),f[1].css("left",dx),ah(j,"_resetX")
}},al=function(){function h(){j=setTimeout(function(){d.event.special.mousewheel?(clearTimeout(j),aa.call(f[0])):h()
},100)
}var f=d(this),k=f.data(aN),g=k.opt;
if(!k.bindEvents){if(av.call(this),g.contentTouchScroll&&aw.call(this),am.call(this),g.mouseWheel.enable){var j;
h()
}ai.call(this),aq.call(this),g.advanced.autoScrollOnFocus&&aB.call(this),g.scrollButtons.enable&&ac.call(this),g.keyboard.enable&&au.call(this),k.bindEvents=!0
}},aj=function(){var h=d(this),m=h.data(aN),g=m.opt,k=aN+"_"+m.idx,f=".mCSB_"+m.idx+"_scrollbar",j=d("#mCSB_"+m.idx+",#mCSB_"+m.idx+"_container,#mCSB_"+m.idx+"_container_wrapper,"+f+" ."+aG[12]+",#mCSB_"+m.idx+"_dragger_vertical,#mCSB_"+m.idx+"_dragger_horizontal,"+f+">a"),n=d("#mCSB_"+m.idx+"_container");
g.advanced.releaseDraggableSelectors&&j.add(d(g.advanced.releaseDraggableSelectors)),m.bindEvents&&(d(b).unbind("."+k),j.each(function(){d(this).unbind("."+k)
}),clearTimeout(h[0]._focusTimeout),a(h[0],"_focusTimeout"),clearTimeout(m.sequential.step),a(m.sequential,"step"),clearTimeout(n[0].onCompleteTimeout),a(n[0],"onCompleteTimeout"),m.bindEvents=!1)
},ap=function(j){var g=d(this),n=g.data(aN),h=n.opt,m=d("#mCSB_"+n.idx+"_container_wrapper"),f=m.length?m:d("#mCSB_"+n.idx+"_container"),k=[d("#mCSB_"+n.idx+"_scrollbar_vertical"),d("#mCSB_"+n.idx+"_scrollbar_horizontal")],p=[k[0].find(".mCSB_dragger"),k[1].find(".mCSB_dragger")];
"x"!==h.axis&&(n.overflowed[0]&&!j?(k[0].add(p[0]).add(k[0].children("a")).css("display","block"),f.removeClass(aG[8]+" "+aG[10])):(h.alwaysShowScrollbar?(2!==h.alwaysShowScrollbar&&p[0].add(k[0].children("a")).css("display","none"),f.removeClass(aG[10])):(k[0].css("display","none"),f.addClass(aG[10])),f.addClass(aG[8]))),"y"!==h.axis&&(n.overflowed[1]&&!j?(k[1].add(p[1]).add(k[1].children("a")).css("display","block"),f.removeClass(aG[9]+" "+aG[11])):(h.alwaysShowScrollbar?(2!==h.alwaysShowScrollbar&&p[1].add(k[1].children("a")).css("display","none"),f.removeClass(aG[11])):(k[1].css("display","none"),f.addClass(aG[11])),f.addClass(aG[9]))),n.overflowed[0]||n.overflowed[1]?g.removeClass(aG[5]):g.addClass(aG[5])
},ag=function(h){var g=h.type;
switch(g){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[h.originalEvent.pageY,h.originalEvent.pageX,!1];
case"touchstart":case"touchmove":case"touchend":var f=h.originalEvent.touches[0]||h.originalEvent.changedTouches[0],j=h.originalEvent.touches.length||h.originalEvent.changedTouches.length;
return[f.pageY,f.pageX,j>1];
default:return[h.pageY,h.pageX,!1]
}},av=function(){function D(h){var g=k.find("iframe");
if(g.length){var f=h?"auto":"none";
g.css("pointer-events",f)
}}function n(l,g,f,m){if(k[0].idleTimer=A.scrollInertia<233?250:0,x.attr("id")===q[1]){var p="x",h=(x[0].offsetLeft-g+m)*C.scrollRatio.x
}else{var p="y",h=(x[0].offsetTop-l+f)*C.scrollRatio.y
}ah(E,h.toString(),{dir:p,drag:!0})
}var x,j,w,E=d(this),C=E.data(aN),A=C.opt,y=aN+"_"+C.idx,q=["mCSB_"+C.idx+"_dragger_vertical","mCSB_"+C.idx+"_dragger_horizontal"],k=d("#mCSB_"+C.idx+"_container"),z=d("#"+q[0]+",#"+q[1]),B=A.advanced.releaseDraggableSelectors?z.add(d(A.advanced.releaseDraggableSelectors)):z;
z.bind("mousedown."+y+" touchstart."+y+" pointerdown."+y+" MSPointerDown."+y,function(s){if(s.stopImmediatePropagation(),s.preventDefault(),aA(s)){aX=!0,aY&&(b.onselectstart=function(){return !1
}),D(!1),ab(E),x=d(this);
var v=x.offset(),g=ag(s)[0]-v.top,l=ag(s)[1]-v.left,f=x.height()+v.top,r=x.width()+v.left;
f>g&&g>0&&r>l&&l>0&&(j=g,w=l),ay(x,"active",A.autoExpandScrollbar)
}}).bind("touchmove."+y,function(h){h.stopImmediatePropagation(),h.preventDefault();
var g=x.offset(),f=ag(h)[0]-g.top,l=ag(h)[1]-g.left;
n(j,w,f,l)
}),d(b).bind("mousemove."+y+" pointermove."+y+" MSPointerMove."+y,function(h){if(x){var g=x.offset(),f=ag(h)[0]-g.top,l=ag(h)[1]-g.left;
if(j===f){return
}n(j,w,f,l)
}}).add(B).bind("mouseup."+y+" touchend."+y+" pointerup."+y+" MSPointerUp."+y,function(){x&&(ay(x,"active",A.autoExpandScrollbar),x=null),aX=!1,aY&&(b.onselectstart=null),D(!0)
})
},aw=function(){function F(h,g){var f=[1.5*g,2*g,g/1.5,g/2];
return h>90?g>4?f[0]:f[3]:h>60?g>3?f[3]:f[2]:h>30?g>8?f[1]:g>6?f[0]:g>4?g:f[2]:g>8?g:f[3]
}function X(k,h,f,l,m,g){k&&ah(R,k.toString(),{dur:h,scrollEasing:f,dir:l,overwrite:m,drag:g})
}var L,P,I,N,G,V,E,U,Q,M,K,R=d(this),D=R.data(aN),z=D.opt,Y=aN+"_"+D.idx,n=d("#mCSB_"+D.idx),A=d("#mCSB_"+D.idx+"_container"),W=[d("#mCSB_"+D.idx+"_dragger_vertical"),d("#mCSB_"+D.idx+"_dragger_horizontal")],H=[],q=[],J=0,j="yx"===z.axis?"none":"all",O=[];
A.bind("touchstart."+Y+" pointerdown."+Y+" MSPointerDown."+Y,function(g){if(aK(g)&&!aX&&!ag(g)[2]){var f=A.offset();
L=ag(g)[0]-f.top,P=ag(g)[1]-f.left,O=[ag(g)[0],ag(g)[1]]
}}).bind("touchmove."+Y+" pointermove."+Y+" MSPointerMove."+Y,function(v){if(aK(v)&&!aX&&!ag(v)[2]){v.stopImmediatePropagation(),V=ao();
var x=n.offset(),k=ag(v)[0]-x.top,g=ag(v)[1]-x.left,m="mcsLinearOut";
if(H.push(k),q.push(g),O[2]=Math.abs(ag(v)[0]-O[0]),O[3]=Math.abs(ag(v)[1]-O[1]),D.overflowed[0]){var y=W[0].parent().height()-W[0].height(),w=L-k>0&&k-L>-(y*D.scrollRatio.y)&&(2*O[3]<O[2]||"yx"===z.axis)
}if(D.overflowed[1]){var p=W[1].parent().width()-W[1].width(),o=P-g>0&&g-P>-(p*D.scrollRatio.x)&&(2*O[2]<O[3]||"yx"===z.axis)
}(w||o)&&v.preventDefault(),M="yx"===z.axis?[L-k,P-g]:"x"===z.axis?[null,P-g]:[L-k,null],A[0].idleTimer=250,D.overflowed[0]&&X(M[0],J,m,"y","all",!0),D.overflowed[1]&&X(M[1],J,m,"x",j,!0)
}}),n.bind("touchstart."+Y+" pointerdown."+Y+" MSPointerDown."+Y,function(g){if(aK(g)&&!aX&&!ag(g)[2]){g.stopImmediatePropagation(),ab(R),G=ao();
var f=n.offset();
I=ag(g)[0]-f.top,N=ag(g)[1]-f.left,H=[],q=[]
}}).bind("touchend."+Y+" pointerup."+Y+" MSPointerUp."+Y,function(s){if(aK(s)&&!aX&&!ag(s)[2]){s.stopImmediatePropagation(),E=ao();
var h=n.offset(),l=ag(s)[0]-h.top,p=ag(s)[1]-h.left;
if(!(E-V>30)){Q=1000/(E-G);
var r="mcsEaseOut",w=2.5>Q,v=w?[H[H.length-2],q[q.length-2]]:[0,0];
U=w?[l-v[0],p-v[1]]:[l-I,p-N];
var f=[Math.abs(U[0]),Math.abs(U[1])];
Q=w?[Math.abs(U[0]/4),Math.abs(U[1]/4)]:[Q,Q];
var m=[Math.abs(A[0].offsetTop)-U[0]*F(f[0]/Q[0],Q[0]),Math.abs(A[0].offsetLeft)-U[1]*F(f[1]/Q[1],Q[1])];
M="yx"===z.axis?[m[0],m[1]]:"x"===z.axis?[null,m[1]]:[m[0],null],K=[4*f[0]+z.scrollInertia,4*f[1]+z.scrollInertia];
var u=parseInt(z.contentTouchScroll)||0;
M[0]=f[0]>u?M[0]:0,M[1]=f[1]>u?M[1]:0,D.overflowed[0]&&X(M[0],K[0],r,"y",j,!1),D.overflowed[1]&&X(M[1],K[1],r,"x",j,!1)
}}})
},am=function(){function j(){return c.getSelection?c.getSelection().toString():b.selection&&"Control"!=b.selection.type?b.selection.createRange().text:0
}function p(l,h,f){x.type=f&&g?"stepped":"stepless",x.scrollAmount=10,aJ(n,l,h,"mcsLinearOut",f?60:null)
}var g,n=d(this),y=n.data(aN),w=y.opt,x=y.sequential,v=aN+"_"+y.idx,q=d("#mCSB_"+y.idx+"_container"),k=q.parent();
q.bind("mousedown."+v,function(){g||(g=1,aX=!0)
}).add(b).bind("mousemove."+v,function(l){if(g&&j()){var h=q.offset(),f=ag(l)[0]-h.top+q[0].offsetTop,m=ag(l)[1]-h.left+q[0].offsetLeft;
f>0&&f<k.height()&&m>0&&m<k.width()?x.step&&p("off",null,"stepped"):("x"!==w.axis&&y.overflowed[0]&&(0>f?p("on",38):f>k.height()&&p("on",40)),"y"!==w.axis&&y.overflowed[1]&&(0>m?p("on",37):m>k.width()&&p("on",39)))
}}).bind("mouseup."+v,function(){g&&(g=0,p("off",null)),aX=!1
})
},aa=function(){function p(s){var r=null;
try{var l=s.contentDocument||s.contentWindow.document;
r=l.body.innerHTML
}catch(u){}return null!==r
}var m=d(this),g=m.data(aN);
if(g){var j=g.opt,f=aN+"_"+g.idx,h=d("#mCSB_"+g.idx),q=[d("#mCSB_"+g.idx+"_dragger_vertical"),d("#mCSB_"+g.idx+"_dragger_horizontal")],k=d("#mCSB_"+g.idx+"_container").find("iframe"),n=h;
k.length&&k.each(function(){var l=this;
p(l)&&(n=n.add(d(l).contents().find("body")))
}),n.bind("mousewheel."+f,function(B,s){if(ab(m),!az(m,B.target)){var l="auto"!==j.mouseWheel.deltaFactor?parseInt(j.mouseWheel.deltaFactor):aY&&B.deltaFactor<100?100:B.deltaFactor||100;
if("x"===j.axis||"x"===j.mouseWheel.axis){var z="x",A=[Math.round(l*g.scrollRatio.x),parseInt(j.mouseWheel.scrollAmount)],y="auto"!==j.mouseWheel.scrollAmount?A[1]:A[0]>=h.width()?0.9*h.width():A[0],w=Math.abs(d("#mCSB_"+g.idx+"_container")[0].offsetLeft),v=q[1][0].offsetLeft,o=q[1].parent().width()-q[1].width(),x=B.deltaX||B.deltaY||s
}else{var z="y",A=[Math.round(l*g.scrollRatio.y),parseInt(j.mouseWheel.scrollAmount)],y="auto"!==j.mouseWheel.scrollAmount?A[1]:A[0]>=h.height()?0.9*h.height():A[0],w=Math.abs(d("#mCSB_"+g.idx+"_container")[0].offsetTop),v=q[0][0].offsetTop,o=q[0].parent().height()-q[0].height(),x=B.deltaY||s
}"y"===z&&!g.overflowed[0]||"x"===z&&!g.overflowed[1]||(j.mouseWheel.invert&&(x=-x),j.mouseWheel.normalizeDelta&&(x=0>x?-1:1),(x>0&&0!==v||0>x&&v!==o||j.mouseWheel.preventDefault)&&(B.stopImmediatePropagation(),B.preventDefault()),ah(m,(w-x*y).toString(),{dir:z}))
}})
}},az=function(h,f){var k=f.nodeName.toLowerCase(),g=h.data(aN).opt.mouseWheel.disableOver,j=["select","textarea"];
return d.inArray(k,g)>-1&&!(d.inArray(k,j)>-1&&!d(f).is(":focus"))
},ai=function(){var j=d(this),g=j.data(aN),m=aN+"_"+g.idx,h=d("#mCSB_"+g.idx+"_container"),k=h.parent(),f=d(".mCSB_"+g.idx+"_scrollbar ."+aG[12]);
f.bind("touchstart."+m+" pointerdown."+m+" MSPointerDown."+m,function(){aX=!0
}).bind("touchend."+m+" pointerup."+m+" MSPointerUp."+m,function(){aX=!1
}).bind("click."+m,function(u){if(d(u.target).hasClass(aG[12])||d(u.target).hasClass("mCSB_draggerRail")){ab(j);
var w=d(this),p=w.find(".mCSB_dragger");
if(w.parent(".mCSB_scrollTools_horizontal").length>0){if(!g.overflowed[1]){return
}var q="x",v=u.pageX>p.offset().left?-1:1,r=Math.abs(h[0].offsetLeft)-0.9*v*k.width()
}else{if(!g.overflowed[0]){return
}var q="y",v=u.pageY>p.offset().top?-1:1,r=Math.abs(h[0].offsetTop)-0.9*v*k.height()
}ah(j,r.toString(),{dir:q,scrollEasing:"mcsEaseInOut"})
}})
},aB=function(){var h=d(this),m=h.data(aN),g=m.opt,k=aN+"_"+m.idx,f=d("#mCSB_"+m.idx+"_container"),j=f.parent();
f.bind("focusin."+k,function(){var p=d(b.activeElement),q=f.find(".mCustomScrollBox").length,l=0;
p.is(g.advanced.autoScrollOnFocus)&&(ab(h),clearTimeout(h[0]._focusTimeout),h[0]._focusTimer=q?(l+17)*q:0,h[0]._focusTimeout=setTimeout(function(){var r=[ae(p)[0],ae(p)[1]],o=[f[0].offsetTop,f[0].offsetLeft],u=[o[0]+r[0]>=0&&o[0]+r[0]<j.height()-p.outerHeight(!1),o[1]+r[1]>=0&&o[0]+r[1]<j.width()-p.outerWidth(!1)],s="yx"!==g.axis||u[0]||u[1]?"all":"none";
"x"===g.axis||u[0]||ah(h,r[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:s,dur:l}),"y"===g.axis||u[1]||ah(h,r[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:s,dur:l})
},h[0]._focusTimer))
})
},aq=function(){var h=d(this),f=h.data(aN),j=aN+"_"+f.idx,g=d("#mCSB_"+f.idx+"_container").parent();
g.bind("scroll."+j,function(){(0!==g.scrollTop()||0!==g.scrollLeft())&&d(".mCSB_"+f.idx+"_scrollbar").css("visibility","hidden")
})
},ac=function(){var j=d(this),g=j.data(aN),n=g.opt,h=g.sequential,m=aN+"_"+g.idx,f=".mCSB_"+g.idx+"_scrollbar",k=d(f+">a");
k.bind("mousedown."+m+" touchstart."+m+" pointerdown."+m+" MSPointerDown."+m+" mouseup."+m+" touchend."+m+" pointerup."+m+" MSPointerUp."+m+" mouseout."+m+" pointerout."+m+" MSPointerOut."+m+" click."+m,function(q){function p(r,l){h.scrollAmount=n.snapAmount||n.scrollButtons.scrollAmount,aJ(j,r,l)
}if(q.preventDefault(),aA(q)){var o=d(this).attr("class");
switch(h.type=n.scrollButtons.scrollType,q.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===h.type){return
}aX=!0,g.tweenRunning=!1,p("on",o);
break;
case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===h.type){return
}aX=!1,h.dir&&p("off",o);
break;
case"click":if("stepped"!==h.type||g.tweenRunning){return
}p("on",o)
}}})
},au=function(){var p=d(this),g=p.data(aN),j=g.opt,f=g.sequential,h=aN+"_"+g.idx,q=d("#mCSB_"+g.idx),m=d("#mCSB_"+g.idx+"_container"),k=m.parent(),n="input,textarea,select,datalist,keygen,[contenteditable='true']";
q.attr("tabindex","0").bind("blur."+h+" keydown."+h+" keyup."+h,function(y){function r(s,l){f.type=j.keyboard.scrollType,f.scrollAmount=j.snapAmount||j.keyboard.scrollAmount,"stepped"===f.type&&g.tweenRunning||aJ(p,s,l)
}switch(y.type){case"blur":g.tweenRunning&&f.dir&&r("off",null);
break;
case"keydown":case"keyup":var v=y.keyCode?y.keyCode:y.which,w="on";
if("x"!==j.axis&&(38===v||40===v)||"y"!==j.axis&&(37===v||39===v)){if((38===v||40===v)&&!g.overflowed[0]||(37===v||39===v)&&!g.overflowed[1]){return
}"keyup"===y.type&&(w="off"),d(b.activeElement).is(n)||(y.preventDefault(),y.stopImmediatePropagation(),r(w,v))
}else{if(33===v||34===v){if((g.overflowed[0]||g.overflowed[1])&&(y.preventDefault(),y.stopImmediatePropagation()),"keyup"===y.type){ab(p);
var u=34===v?-1:1;
if("x"===j.axis||"yx"===j.axis&&g.overflowed[1]&&!g.overflowed[0]){var o="x",x=Math.abs(m[0].offsetLeft)-0.9*u*k.width()
}else{var o="y",x=Math.abs(m[0].offsetTop)-0.9*u*k.height()
}ah(p,x.toString(),{dir:o,scrollEasing:"mcsEaseInOut"})
}}else{if((35===v||36===v)&&!d(b.activeElement).is(n)&&((g.overflowed[0]||g.overflowed[1])&&(y.preventDefault(),y.stopImmediatePropagation()),"keyup"===y.type)){if("x"===j.axis||"yx"===j.axis&&g.overflowed[1]&&!g.overflowed[0]){var o="x",x=35===v?Math.abs(k.width()-m.outerWidth(!1)):0
}else{var o="y",x=35===v?Math.abs(k.height()-m.outerHeight(!1)):0
}ah(p,x.toString(),{dir:o,scrollEasing:"mcsEaseInOut"})
}}}}})
},aJ=function(y,x,j,p,g){function n(B){var D="stepped"!==u.type,h=g?g:B?D?v.scrollInertia/1.5:v.scrollInertia:1000/60,l=B?D?7.5:40:2.5,G=[Math.abs(q[0].offsetTop),Math.abs(q[0].offsetLeft)],F=[w.scrollRatio.y>10?10:w.scrollRatio.y,w.scrollRatio.x>10?10:w.scrollRatio.x],r="x"===u.dir[0]?G[1]+u.dir[1]*F[1]*l:G[0]+u.dir[1]*F[0]*l,f="x"===u.dir[0]?G[1]+u.dir[1]*parseInt(u.scrollAmount):G[0]+u.dir[1]*parseInt(u.scrollAmount),A="auto"!==u.scrollAmount?f:r,E=p?p:B?D?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",C=B?!0:!1;
return B&&17>h&&(A="x"===u.dir[0]?G[1]:G[0]),ah(y,A.toString(),{dir:u.dir[0],scrollEasing:E,dur:h,onComplete:C}),B?void (u.dir=!1):(clearTimeout(u.step),void (u.step=setTimeout(function(){n()
},h)))
}function z(){clearTimeout(u.step),a(u,"step"),ab(y)
}var w=y.data(aN),v=w.opt,u=w.sequential,q=d("#mCSB_"+w.idx+"_container"),k="stepped"===u.type?!0:!1;
switch(x){case"on":if(u.dir=[j===aG[16]||j===aG[15]||39===j||37===j?"x":"y",j===aG[13]||j===aG[15]||38===j||37===j?-1:1],ab(y),aV(j)&&"stepped"===u.type){return
}n(k);
break;
case"off":z(),(k||w.tweenRunning&&u.dir)&&n(!0)
}},aR=function(g){var f=d(this).data(aN).opt,h=[];
return"function"==typeof g&&(g=g()),g instanceof Array?h=g.length>1?[g[0],g[1]]:"x"===f.axis?[null,g[0]]:[g[0],null]:(h[0]=g.y?g.y:g.x||"x"===f.axis?null:g,h[1]=g.x?g.x:g.y||"y"===f.axis?null:g),"function"==typeof h[0]&&(h[0]=h[0]()),"function"==typeof h[1]&&(h[1]=h[1]()),h
},e=function(A,y){if(null!=A&&"undefined"!=typeof A){var j=d(this),q=j.data(aN),f=q.opt,n=d("#mCSB_"+q.idx+"_container"),B=n.parent(),x=typeof A;
y||(y="x"===f.axis?"x":"y");
var w="x"===y?n.outerWidth(!1):n.outerHeight(!1),z="x"===y?n[0].offsetLeft:n[0].offsetTop,v="x"===y?"left":"top";
switch(x){case"function":return A();
case"object":var k=A.jquery?A:d(A);
if(!k.length){return
}return"x"===y?ae(k)[1]:ae(k)[0];
case"string":case"number":if(aV(A)){return Math.abs(A)
}if(-1!==A.indexOf("%")){return Math.abs(w*parseInt(A)/100)
}if(-1!==A.indexOf("-=")){return Math.abs(z-parseInt(A.split("-=")[1]))
}if(-1!==A.indexOf("+=")){var g=z+parseInt(A.split("+=")[1]);
return g>=0?0:Math.abs(g)
}if(-1!==A.indexOf("px")&&aV(A.split("px")[0])){return Math.abs(A.split("px")[0])
}if("top"===A||"left"===A){return 0
}if("bottom"===A){return Math.abs(B.height()-n.outerHeight(!1))
}if("right"===A){return Math.abs(B.width()-n.outerWidth(!1))
}if("first"===A||"last"===A){var k=n.find(":"+A);
return"x"===y?ae(k)[1]:ae(k)[0]
}return d(A).length?"x"===y?ae(d(A))[1]:ae(d(A))[0]:(n.css(v,A),void aW.update.call(null,j[0]))
}}},t=function(q){function J(){clearTimeout(E[0].autoUpdate),E[0].autoUpdate=setTimeout(function(){return G.advanced.updateOnSelectorChange&&(B=y(),B!==f)?(C(3),void (f=B)):(G.advanced.updateOnContentResize&&(z=[E.outerHeight(!1),E.outerWidth(!1),n.height(),n.width(),K()[0],K()[1]],(z[0]!==k[0]||z[1]!==k[1]||z[2]!==k[2]||z[3]!==k[3]||z[4]!==k[4]||z[5]!==k[5])&&(C(z[0]!==k[0]||z[1]!==k[1]),k=z)),G.advanced.updateOnImageLoad&&(F=A(),F!==I&&(E.find("img").each(function(){D(this)
}),I=F)),void ((G.advanced.updateOnSelectorChange||G.advanced.updateOnContentResize||G.advanced.updateOnImageLoad)&&J()))
},60)
}function A(){var g=0;
return G.advanced.updateOnImageLoad&&(g=E.find("img").length),g
}function D(h){function g(p,o){return function(){return o.apply(p,arguments)
}
}function l(){this.onload=null,d(h).addClass(aG[2]),C(2)
}if(d(h).hasClass(aG[2])){return void C()
}var m=new Image;
m.onload=g(m,l),m.src=h.src
}function y(){G.advanced.updateOnSelectorChange===!0&&(G.advanced.updateOnSelectorChange="*");
var h=0,g=E.find(G.advanced.updateOnSelectorChange);
return G.advanced.updateOnSelectorChange&&g.length>0&&g.each(function(){h+=d(this).height()+d(this).width()
}),h
}function C(g){clearTimeout(E[0].autoUpdate),aW.update.call(null,u[0],g)
}var u=d(this),H=u.data(aN),G=H.opt,E=d("#mCSB_"+H.idx+"_container");
if(q){return clearTimeout(E[0].autoUpdate),void a(E[0],"autoUpdate")
}var B,z,F,n=E.parent(),j=[d("#mCSB_"+H.idx+"_scrollbar_vertical"),d("#mCSB_"+H.idx+"_scrollbar_horizontal")],K=function(){return[j[0].is(":visible")?j[0].outerHeight(!0):0,j[1].is(":visible")?j[1].outerWidth(!0):0]
},f=y(),k=[E.outerHeight(!1),E.outerWidth(!1),n.height(),n.width(),K()[0],K()[1]],I=A();
J()
},ak=function(h,g,f){return Math.round(h/g)*g-f
},ab=function(g){var f=g.data(aN),h=d("#mCSB_"+f.idx+"_container,#mCSB_"+f.idx+"_container_wrapper,#mCSB_"+f.idx+"_dragger_vertical,#mCSB_"+f.idx+"_dragger_horizontal");
h.each(function(){an.call(this)
})
},ah=function(D,U,I){function L(f){return E&&Q.callbacks[f]&&"function"==typeof Q.callbacks[f]
}function G(){return[Q.callbacks.alwaysTriggerOffsets||V>=k[0]+R,Q.callbacks.alwaysTriggerOffsets||-F>=V]
}function K(){var h=[M[0].offsetTop,M[0].offsetLeft],f=[A[0].offsetTop,A[0].offsetLeft],l=[M.outerHeight(!1),M.outerWidth(!1)],g=[O.height(),O.width()];
D[0].mcs={content:M,top:h[0],left:h[1],draggerTop:f[0],draggerLeft:f[1],topPct:Math.round(100*Math.abs(h[0])/(Math.abs(l[0])-g[0])),leftPct:Math.round(100*Math.abs(h[1])/(Math.abs(l[1])-g[1])),direction:I.dir}
}var E=D.data(aN),Q=E.opt,P={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:Q.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},I=d.extend(P,I),B=[I.dur,I.drag?0:I.dur],O=d("#mCSB_"+E.idx),M=d("#mCSB_"+E.idx+"_container"),J=M.parent(),H=Q.callbacks.onTotalScrollOffset?aR.call(D,Q.callbacks.onTotalScrollOffset):[0,0],N=Q.callbacks.onTotalScrollBackOffset?aR.call(D,Q.callbacks.onTotalScrollBackOffset):[0,0];
if(E.trigger=I.trigger,(0!==J.scrollTop()||0!==J.scrollLeft())&&(d(".mCSB_"+E.idx+"_scrollbar").css("visibility","visible"),J.scrollTop(0).scrollLeft(0)),"_resetY"!==U||E.contentReset.y||(L("onOverflowYNone")&&Q.callbacks.onOverflowYNone.call(D[0]),E.contentReset.y=1),"_resetX"!==U||E.contentReset.x||(L("onOverflowXNone")&&Q.callbacks.onOverflowXNone.call(D[0]),E.contentReset.x=1),"_resetY"!==U&&"_resetX"!==U){switch(!E.contentReset.y&&D[0].mcs||!E.overflowed[0]||(L("onOverflowY")&&Q.callbacks.onOverflowY.call(D[0]),E.contentReset.x=null),!E.contentReset.x&&D[0].mcs||!E.overflowed[1]||(L("onOverflowX")&&Q.callbacks.onOverflowX.call(D[0]),E.contentReset.x=null),Q.snapAmount&&(U=ak(U,Q.snapAmount,Q.snapOffset)),I.dir){case"x":var A=d("#mCSB_"+E.idx+"_dragger_horizontal"),q="left",V=M[0].offsetLeft,k=[O.width()-M.outerWidth(!1),A.parent().width()-A.width()],z=[U,0===U?0:U/E.scrollRatio.x],R=H[1],F=N[1],n=R>0?R/E.scrollRatio.x:0,j=F>0?F/E.scrollRatio.x:0;
break;
case"y":var A=d("#mCSB_"+E.idx+"_dragger_vertical"),q="top",V=M[0].offsetTop,k=[O.height()-M.outerHeight(!1),A.parent().height()-A.height()],z=[U,0===U?0:U/E.scrollRatio.y],R=H[0],F=N[0],n=R>0?R/E.scrollRatio.y:0,j=F>0?F/E.scrollRatio.y:0
}z[1]<0||0===z[0]&&0===z[1]?z=[0,0]:z[1]>=k[1]?z=[k[0],k[1]]:z[0]=-z[0],D[0].mcs||(K(),L("onInit")&&Q.callbacks.onInit.call(D[0])),clearTimeout(M[0].onCompleteTimeout),(E.tweenRunning||!(0===V&&z[0]>=0||V===k[0]&&z[0]<=k[0]))&&(ar(A[0],q,Math.round(z[1]),B[1],I.scrollEasing),ar(M[0],q,Math.round(z[0]),B[0],I.scrollEasing,I.overwrite,{onStart:function(){I.callbacks&&I.onStart&&!E.tweenRunning&&(L("onScrollStart")&&(K(),Q.callbacks.onScrollStart.call(D[0])),E.tweenRunning=!0,ay(A),E.cbOffsets=G())
},onUpdate:function(){I.callbacks&&I.onUpdate&&L("whileScrolling")&&(K(),Q.callbacks.whileScrolling.call(D[0]))
},onComplete:function(){if(I.callbacks&&I.onComplete){"yx"===Q.axis&&clearTimeout(M[0].onCompleteTimeout);
var f=M[0].idleTimer||0;
M[0].onCompleteTimeout=setTimeout(function(){L("onScroll")&&(K(),Q.callbacks.onScroll.call(D[0])),L("onTotalScroll")&&z[1]>=k[1]-n&&E.cbOffsets[0]&&(K(),Q.callbacks.onTotalScroll.call(D[0])),L("onTotalScrollBack")&&z[1]<=j&&E.cbOffsets[1]&&(K(),Q.callbacks.onTotalScrollBack.call(D[0])),E.tweenRunning=!1,M[0].idleTimer=0,ay(A,"hide")
},f)
}}}))
}},ar=function(N,R,F,G,J,D,I){function A(){Q.stop||(T||E.call(),T=ao()-k,P(),T>=Q.time&&(Q.time=T>Q.time?T+K-(T-Q.time):T+K-1,Q.time<T+1&&(Q.time=T+1)),Q.time<G?Q.id=H(A):y.call())
}function P(){G>0?(Q.currVal=M(Q.time,j,B,G,J),q[R]=Math.round(Q.currVal)+"px"):q[R]=F+"px",L.call()
}function O(){K=1000/60,Q.time=T+K,H=c.requestAnimationFrame?c.requestAnimationFrame:function(f){return P(),setTimeout(f,0.01)
},Q.id=H(A)
}function z(){null!=Q.id&&(c.requestAnimationFrame?c.cancelAnimationFrame(Q.id):clearTimeout(Q.id),Q.id=null)
}function M(m,h,f,p,s){switch(s){case"linear":case"mcsLinear":return f*m/p+h;
case"mcsLinearOut":return m/=p,m--,f*Math.sqrt(1-m*m)+h;
case"easeInOutSmooth":return m/=p/2,1>m?f/2*m*m+h:(m--,-f/2*(m*(m-2)-1)+h);
case"easeInOutStrong":return m/=p/2,1>m?f/2*Math.pow(2,10*(m-1))+h:(m--,f/2*(-Math.pow(2,-10*m)+2)+h);
case"easeInOut":case"mcsEaseInOut":return m/=p/2,1>m?f/2*m*m*m+h:(m-=2,f/2*(m*m*m+2)+h);
case"easeOutSmooth":return m/=p,m--,-f*(m*m*m*m-1)+h;
case"easeOutStrong":return f*(-Math.pow(2,-10*m/p)+1)+h;
case"easeOut":case"mcsEaseOut":default:var g=(m/=p)*m,l=g*m;
return h+f*(0.499999999999997*l*g+-2.5*g*g+5.5*l+-6.5*g+4*m)
}}N._mTween||(N._mTween={top:{},left:{}});
var K,H,I=I||{},E=I.onStart||function(){},L=I.onUpdate||function(){},y=I.onComplete||function(){},k=ao(),T=0,j=N.offsetTop,q=N.style,Q=N._mTween[R];
"left"===R&&(j=N.offsetLeft);
var B=F-j;
Q.stop=0,"none"!==D&&z(),O()
},ao=function(){return c.performance&&c.performance.now?c.performance.now():c.performance&&c.performance.webkitNow?c.performance.webkitNow():Date.now?Date.now():(new Date).getTime()
},an=function(){var g=this;
g._mTween||(g._mTween={top:{},left:{}});
for(var f=["top","left"],h=0;
h<f.length;
h++){var j=f[h];
g._mTween[j].id&&(c.requestAnimationFrame?c.cancelAnimationFrame(g._mTween[j].id):clearTimeout(g._mTween[j].id),g._mTween[j].id=null,g._mTween[j].stop=1)
}},a=function(h,g){try{delete h[g]
}catch(f){h[g]=null
}},aA=function(f){return !(f.which&&1!==f.which)
},aK=function(g){var f=g.originalEvent.pointerType;
return !(f&&"touch"!==f&&2!==f)
},aV=function(f){return !isNaN(parseFloat(f))&&isFinite(f)
},ae=function(g){var f=g.parents(".mCSB_container");
return[g.offset().top-f.offset().top,g.offset().left-f.offset().left]
};
d.fn[aM]=function(f){return aW[f]?aW[f].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof f&&f?void d.error("Method "+f+" does not exist"):aW.init.apply(this,arguments)
},d[aM]=function(f){return aW[f]?aW[f].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof f&&f?void d.error("Method "+f+" does not exist"):aW.init.apply(this,arguments)
},d[aM].defaults=aI,c[aM]=!0,d(c).load(function(){d(aS)[aM](),d.extend(d.expr[":"],{mcsInView:d.expr[":"].mcsInView||function(h){var f,j,k=d(h),g=k.parents(".mCSB_container");
if(g.length){return f=g.parent(),j=[g[0].offsetTop,g[0].offsetLeft],j[0]+ae(k)[0]>=0&&j[0]+ae(k)[0]<f.height()-k.outerHeight(!1)&&j[1]+ae(k)[1]>=0&&j[1]+ae(k)[1]<f.width()-k.outerWidth(!1)
}},mcsOverflow:d.expr[":"].mcsOverflow||function(g){var f=d(g).data(aN);
if(f){return f.overflowed[0]||f.overflowed[1]
}}})
})
})
}(jQuery,window,document);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
;
!function(){function b(d){if(!d){throw new Error("No options passed to Waypoint constructor")
}if(!d.element){throw new Error("No element option passed to Waypoint constructor")
}if(!d.handler){throw new Error("No handler option passed to Waypoint constructor")
}this.key="waypoint-"+c,this.options=b.Adapter.extend({},b.defaults,d),this.element=this.options.element,this.adapter=new b.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=b.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=b.Context.findOrCreateByElement(this.options.context),b.offsetAliases[this.options.offset]&&(this.options.offset=b.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),a[this.key]=this,c+=1
}var c=0,a={};
b.prototype.queueTrigger=function(d){this.group.queueTrigger(this,d)
},b.prototype.trigger=function(d){this.enabled&&this.callback&&this.callback.apply(this,d)
},b.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete a[this.key]
},b.prototype.disable=function(){return this.enabled=!1,this
},b.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this
},b.prototype.next=function(){return this.group.next(this)
},b.prototype.previous=function(){return this.group.previous(this)
},b.invokeAll=function(d){var g=[];
for(var h in a){g.push(a[h])
}for(var j=0,f=g.length;
f>j;
j++){g[j][d]()
}},b.destroyAll=function(){b.invokeAll("destroy")
},b.disableAll=function(){b.invokeAll("disable")
},b.enableAll=function(){b.invokeAll("enable")
},b.refreshAll=function(){b.Context.refreshAll()
},b.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight
},b.viewportWidth=function(){return document.documentElement.clientWidth
},b.adapters=[],b.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},b.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()
},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()
}},window.Waypoint=b
}(),function(){function b(e){window.setTimeout(e,1000/60)
}function d(e){this.element=e,this.Adapter=g.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+a,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,f[e.waypointContextKey]=this,a+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()
}var a=0,f={},g=window.Waypoint,c=window.onload;
d.prototype.add=function(h){var j=h.options.horizontal?"horizontal":"vertical";
this.waypoints[j][h.key]=h,this.refresh()
},d.prototype.checkEmpty=function(){var h=this.Adapter.isEmptyObject(this.waypoints.horizontal),j=this.Adapter.isEmptyObject(this.waypoints.vertical);
h&&j&&(this.adapter.off(".waypoints"),delete f[this.key])
},d.prototype.createThrottledResizeHandler=function(){function h(){j.handleResize(),j.didResize=!1
}var j=this;
this.adapter.on("resize.waypoints",function(){j.didResize||(j.didResize=!0,g.requestAnimationFrame(h))
})
},d.prototype.createThrottledScrollHandler=function(){function h(){j.handleScroll(),j.didScroll=!1
}var j=this;
this.adapter.on("scroll.waypoints",function(){(!j.didScroll||g.isTouch)&&(j.didScroll=!0,g.requestAnimationFrame(h))
})
},d.prototype.handleResize=function(){g.Context.refreshAll()
},d.prototype.handleScroll=function(){var C={},y={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};
for(var w in y){var m=y[w],q=m.newScroll>m.oldScroll,j=q?m.forward:m.backward;
for(var D in this.waypoints[w]){var A=this.waypoints[w][D],v=m.oldScroll<A.triggerPoint,x=m.newScroll>=A.triggerPoint,k=v&&x,B=!v&&!x;
(k||B)&&(A.queueTrigger(j),C[A.group.id]=A.group)
}}for(var z in C){C[z].flushTriggers()
}this.oldScroll={x:y.horizontal.newScroll,y:y.vertical.newScroll}
},d.prototype.innerHeight=function(){return this.element==this.element.window?g.viewportHeight():this.adapter.innerHeight()
},d.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()
},d.prototype.innerWidth=function(){return this.element==this.element.window?g.viewportWidth():this.adapter.innerWidth()
},d.prototype.destroy=function(){var j=[];
for(var k in this.waypoints){for(var h in this.waypoints[k]){j.push(this.waypoints[k][h])
}}for(var l=0,m=j.length;
m>l;
l++){j[l].destroy()
}},d.prototype.refresh=function(){var H,A=this.element==this.element.window,q=A?void 0:this.adapter.offset(),m={};
this.handleScroll(),H={horizontal:{contextOffset:A?0:q.left,contextScroll:A?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:A?0:q.top,contextScroll:A?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};
for(var j in H){var I=H[j];
for(var E in this.waypoints[j]){var n,v,k,G,C,B=this.waypoints[j][E],z=B.options.offset,F=B.triggerPoint,D=0,x=null==F;
B.element!==B.element.window&&(D=B.adapter.offset()[I.offsetProp]),"function"==typeof z?z=z.apply(B):"string"==typeof z&&(z=parseFloat(z),B.options.offset.indexOf("%")>-1&&(z=Math.ceil(I.contextDimension*z/100))),n=I.contextScroll-I.contextOffset,B.triggerPoint=D+n-z,v=F<I.oldScroll,k=B.triggerPoint>=I.oldScroll,G=v&&k,C=!v&&!k,!x&&G?(B.queueTrigger(I.backward),m[B.group.id]=B.group):!x&&C?(B.queueTrigger(I.forward),m[B.group.id]=B.group):x&&I.oldScroll>=B.triggerPoint&&(B.queueTrigger(I.forward),m[B.group.id]=B.group)
}}return g.requestAnimationFrame(function(){for(var e in m){m[e].flushTriggers()
}}),this
},d.findOrCreateByElement=function(e){return d.findByElement(e)||new d(e)
},d.refreshAll=function(){for(var e in f){f[e].refresh()
}},d.findByElement=function(e){return f[e.waypointContextKey]
},window.onload=function(){c&&c(),d.refreshAll()
},g.requestAnimationFrame=function(j){var h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||b;
h.call(window,j)
},g.Context=d
}(),function(){function b(g,h){return g.triggerPoint-h.triggerPoint
}function c(g,h){return h.triggerPoint-g.triggerPoint
}function a(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this
}var d={vertical:{},horizontal:{}},f=window.Waypoint;
a.prototype.add=function(e){this.waypoints.push(e)
},a.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}
},a.prototype.flushTriggers=function(){for(var g in this.triggerQueues){var k=this.triggerQueues[g],l="up"===g||"left"===g;
k.sort(l?c:b);
for(var j=0,h=k.length;
h>j;
j+=1){var e=k[j];
(e.options.continuous||j===k.length-1)&&e.trigger([g])
}}this.clearTriggerQueues()
},a.prototype.next=function(h){this.waypoints.sort(b);
var g=f.Adapter.inArray(h,this.waypoints),j=g===this.waypoints.length-1;
return j?null:this.waypoints[g+1]
},a.prototype.previous=function(h){this.waypoints.sort(b);
var g=f.Adapter.inArray(h,this.waypoints);
return g?this.waypoints[g-1]:null
},a.prototype.queueTrigger=function(g,h){this.triggerQueues[h].push(g)
},a.prototype.remove=function(g){var h=f.Adapter.inArray(g,this.waypoints);
h>-1&&this.waypoints.splice(h,1)
},a.prototype.first=function(){return this.waypoints[0]
},a.prototype.last=function(){return this.waypoints[this.waypoints.length-1]
},a.findOrCreate=function(e){return d[e.axis][e.name]||new a(e)
},f.Group=a
}(),function(){function b(d){this.$element=c(d)
}var c=window.jQuery,a=window.Waypoint;
c.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(f,d){b.prototype[d]=function(){var e=Array.prototype.slice.call(arguments);
return this.$element[d].apply(this.$element,e)
}
}),c.each(["extend","inArray","isEmptyObject"],function(d,e){b[e]=c[e]
}),a.adapters.push({name:"jquery",Adapter:b}),a.Adapter=b
}(),function(){function a(c){return function(){var d=[],e=arguments[0];
return c.isFunction(arguments[0])&&(e=c.extend({},arguments[1]),e.handler=arguments[0]),this.each(function(){var f=c.extend({},e,{element:this});
"string"==typeof f.context&&(f.context=c(this).closest(f.context)[0]),d.push(new b(f))
}),d
}
}var b=window.Waypoint;
window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))
}();
(function(){var w=this;
var l=w._;
var J=Array.prototype,g=Object.prototype,o=Function.prototype;
var M=J.push,m=J.slice,c=g.toString,k=g.hasOwnProperty;
var t=Array.isArray,e=Object.keys,K=o.bind,C=Object.create;
var F=function(){};
var Q=function(R){if(R instanceof Q){return R
}if(!(this instanceof Q)){return new Q(R)
}this._wrapped=R
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=Q
}exports._=Q
}else{w._=Q
}Q.VERSION="1.8.3";
var b=function(S,R,T){if(R===void 0){return S
}switch(T==null?3:T){case 1:return function(U){return S.call(R,U)
};
case 2:return function(V,U){return S.call(R,V,U)
};
case 3:return function(V,U,W){return S.call(R,V,U,W)
};
case 4:return function(U,W,V,X){return S.call(R,U,W,V,X)
}
}return function(){return S.apply(R,arguments)
}
};
var G=function(S,R,T){if(S==null){return Q.identity
}if(Q.isFunction(S)){return b(S,R,T)
}if(Q.isObject(S)){return Q.matcher(S)
}return Q.property(S)
};
Q.iteratee=function(S,R){return G(S,R,Infinity)
};
var q=function(S,R){return function(aa){var Y=arguments.length;
if(Y<2||aa==null){return aa
}for(var U=1;
U<Y;
U++){var Z=arguments[U],X=S(Z),T=X.length;
for(var W=0;
W<T;
W++){var V=X[W];
if(!R||aa[V]===void 0){aa[V]=Z[V]
}}}return aa
}
};
var D=function(S){if(!Q.isObject(S)){return{}
}if(C){return C(S)
}F.prototype=S;
var R=new F;
F.prototype=null;
return R
};
var N=function(R){return function(S){return S==null?void 0:S[R]
}
};
var L=Math.pow(2,53)-1;
var P=N("length");
var E=function(S){var R=P(S);
return typeof R=="number"&&R>=0&&R<=L
};
Q.each=Q.forEach=function(V,W,S){W=b(W,S);
var R,U;
if(E(V)){for(R=0,U=V.length;
R<U;
R++){W(V[R],R,V)
}}else{var T=Q.keys(V);
for(R=0,U=T.length;
R<U;
R++){W(V[T[R]],T[R],V)
}}return V
};
Q.map=Q.collect=function(W,Y,T){Y=G(Y,T);
var V=!E(W)&&Q.keys(W),U=(V||W).length,S=Array(U);
for(var R=0;
R<U;
R++){var X=V?V[R]:R;
S[R]=Y(W[X],X,W)
}return S
};
function A(R){function S(X,Z,T,W,U,V){for(;
U>=0&&U<V;
U+=R){var Y=W?W[U]:U;
T=Z(T,X[Y],Y,X)
}return T
}return function(Y,Z,T,V){Z=b(Z,V,4);
var X=!E(Y)&&Q.keys(Y),W=(X||Y).length,U=R>0?0:W-1;
if(arguments.length<3){T=Y[X?X[U]:U];
U+=R
}return S(Y,Z,T,X,U,W)
}
}Q.reduce=Q.foldl=Q.inject=A(1);
Q.reduceRight=Q.foldr=A(-1);
Q.find=Q.detect=function(U,R,T){var S;
if(E(U)){S=Q.findIndex(U,R,T)
}else{S=Q.findKey(U,R,T)
}if(S!==void 0&&S!==-1){return U[S]
}};
Q.filter=Q.select=function(U,R,T){var S=[];
R=G(R,T);
Q.each(U,function(X,V,W){if(R(X,V,W)){S.push(X)
}});
return S
};
Q.reject=function(T,R,S){return Q.filter(T,Q.negate(G(R)),S)
};
Q.every=Q.all=function(W,R,T){R=G(R,T);
var V=!E(W)&&Q.keys(W),U=(V||W).length;
for(var S=0;
S<U;
S++){var X=V?V[S]:S;
if(!R(W[X],X,W)){return false
}}return true
};
Q.some=Q.any=function(W,R,T){R=G(R,T);
var V=!E(W)&&Q.keys(W),U=(V||W).length;
for(var S=0;
S<U;
S++){var X=V?V[S]:S;
if(R(W[X],X,W)){return true
}}return false
};
Q.contains=Q.includes=Q.include=function(U,T,R,S){if(!E(U)){U=Q.values(U)
}if(typeof R!="number"||S){R=0
}return Q.indexOf(U,T,R)>=0
};
Q.invoke=function(T,U){var R=m.call(arguments,2);
var S=Q.isFunction(U);
return Q.map(T,function(W){var V=S?U:W[U];
return V==null?V:V.apply(W,R)
})
};
Q.pluck=function(S,R){return Q.map(S,Q.property(R))
};
Q.where=function(S,R){return Q.filter(S,Q.matcher(R))
};
Q.findWhere=function(S,R){return Q.find(S,Q.matcher(R))
};
Q.max=function(U,W,R){var Z=-Infinity,X=-Infinity,Y,T;
if(W==null&&U!=null){U=E(U)?U:Q.values(U);
for(var V=0,S=U.length;
V<S;
V++){Y=U[V];
if(Y>Z){Z=Y
}}}else{W=G(W,R);
Q.each(U,function(ac,aa,ab){T=W(ac,aa,ab);
if(T>X||T===-Infinity&&Z===-Infinity){Z=ac;
X=T
}})
}return Z
};
Q.min=function(U,W,R){var Z=Infinity,X=Infinity,Y,T;
if(W==null&&U!=null){U=E(U)?U:Q.values(U);
for(var V=0,S=U.length;
V<S;
V++){Y=U[V];
if(Y<Z){Z=Y
}}}else{W=G(W,R);
Q.each(U,function(ac,aa,ab){T=W(ac,aa,ab);
if(T<X||T===Infinity&&Z===Infinity){Z=ac;
X=T
}})
}return Z
};
Q.shuffle=function(V){var W=E(V)?V:Q.values(V);
var U=W.length;
var R=Array(U);
for(var S=0,T;
S<U;
S++){T=Q.random(0,S);
if(T!==S){R[S]=R[T]
}R[T]=W[S]
}return R
};
Q.sample=function(S,T,R){if(T==null||R){if(!E(S)){S=Q.values(S)
}return S[Q.random(S.length-1)]
}return Q.shuffle(S).slice(0,Math.max(0,T))
};
Q.sortBy=function(S,T,R){T=G(T,R);
return Q.pluck(Q.map(S,function(W,U,V){return{value:W,index:U,criteria:T(W,U,V)}
}).sort(function(X,W){var V=X.criteria;
var U=W.criteria;
if(V!==U){if(V>U||V===void 0){return 1
}if(V<U||U===void 0){return -1
}}return X.index-W.index
}),"value")
};
var r=function(R){return function(U,V,T){var S={};
V=G(V,T);
Q.each(U,function(Y,W){var X=V(Y,W,U);
R(S,Y,X)
});
return S
}
};
Q.groupBy=r(function(R,T,S){if(Q.has(R,S)){R[S].push(T)
}else{R[S]=[T]
}});
Q.indexBy=r(function(R,T,S){R[S]=T
});
Q.countBy=r(function(R,T,S){if(Q.has(R,S)){R[S]++
}else{R[S]=1
}});
Q.toArray=function(R){if(!R){return[]
}if(Q.isArray(R)){return m.call(R)
}if(E(R)){return Q.map(R,Q.identity)
}return Q.values(R)
};
Q.size=function(R){if(R==null){return 0
}return E(R)?R.length:Q.keys(R).length
};
Q.partition=function(V,R,T){R=G(R,T);
var U=[],S=[];
Q.each(V,function(X,W,Y){(R(X,W,Y)?U:S).push(X)
});
return[U,S]
};
Q.first=Q.head=Q.take=function(T,S,R){if(T==null){return void 0
}if(S==null||R){return T[0]
}return Q.initial(T,T.length-S)
};
Q.initial=function(T,S,R){return m.call(T,0,Math.max(0,T.length-(S==null||R?1:S)))
};
Q.last=function(T,S,R){if(T==null){return void 0
}if(S==null||R){return T[T.length-1]
}return Q.rest(T,Math.max(0,T.length-S))
};
Q.rest=Q.tail=Q.drop=function(T,S,R){return m.call(T,S==null||R?1:S)
};
Q.compact=function(R){return Q.filter(R,Q.identity)
};
var y=function(X,T,Y,ab){var S=[],aa=0;
for(var V=ab||0,R=P(X);
V<R;
V++){var Z=X[V];
if(E(Z)&&(Q.isArray(Z)||Q.isArguments(Z))){if(!T){Z=y(Z,T,Y)
}var U=0,W=Z.length;
S.length+=W;
while(U<W){S[aa++]=Z[U++]
}}else{if(!Y){S[aa++]=Z
}}}return S
};
Q.flatten=function(S,R){return y(S,R,false)
};
Q.without=function(R){return Q.difference(R,m.call(arguments,1))
};
Q.uniq=Q.unique=function(Y,U,X,S){if(!Q.isBoolean(U)){S=X;
X=U;
U=false
}if(X!=null){X=G(X,S)
}var aa=[];
var R=[];
for(var W=0,T=P(Y);
W<T;
W++){var Z=Y[W],V=X?X(Z,W,Y):Z;
if(U){if(!W||R!==V){aa.push(Z)
}R=V
}else{if(X){if(!Q.contains(R,V)){R.push(V);
aa.push(Z)
}}else{if(!Q.contains(aa,Z)){aa.push(Z)
}}}}return aa
};
Q.union=function(){return Q.uniq(y(arguments,true,true))
};
Q.intersection=function(X){var R=[];
var W=arguments.length;
for(var T=0,V=P(X);
T<V;
T++){var U=X[T];
if(Q.contains(R,U)){continue
}for(var S=1;
S<W;
S++){if(!Q.contains(arguments[S],U)){break
}}if(S===W){R.push(U)
}}return R
};
Q.difference=function(S){var R=y(arguments,true,true,1);
return Q.filter(S,function(T){return !Q.contains(R,T)
})
};
Q.zip=function(){return Q.unzip(arguments)
};
Q.unzip=function(U){var T=U&&Q.max(U,P).length||0;
var R=Array(T);
for(var S=0;
S<T;
S++){R[S]=Q.pluck(U,S)
}return R
};
Q.object=function(V,S){var R={};
for(var T=0,U=P(V);
T<U;
T++){if(S){R[V[T]]=S[T]
}else{R[V[T][0]]=V[T][1]
}}return R
};
function v(R){return function(W,S,U){S=G(S,U);
var V=P(W);
var T=R>0?0:V-1;
for(;
T>=0&&T<V;
T+=R){if(S(W[T],T,W)){return T
}}return -1
}
}Q.findIndex=v(1);
Q.findLastIndex=v(-1);
Q.sortedIndex=function(Y,W,X,T){X=G(X,T,1);
var V=X(W);
var R=0,U=P(Y);
while(R<U){var S=Math.floor((R+U)/2);
if(X(Y[S])<V){R=S+1
}else{U=S
}}return R
};
function f(R,S,T){return function(Y,X,U){var V=0,W=P(Y);
if(typeof U=="number"){if(R>0){V=U>=0?U:Math.max(U+W,V)
}else{W=U>=0?Math.min(U+1,W):U+W+1
}}else{if(T&&U&&W){U=T(Y,X);
return Y[U]===X?U:-1
}}if(X!==X){U=S(m.call(Y,V,W),Q.isNaN);
return U>=0?U+V:-1
}for(U=R>0?V:W-1;
U>=0&&U<W;
U+=R){if(Y[U]===X){return U
}}return -1
}
}Q.indexOf=f(1,Q.findIndex,Q.sortedIndex);
Q.lastIndexOf=f(-1,Q.findLastIndex);
Q.range=function(W,T,V){if(T==null){T=W||0;
W=0
}V=V||1;
var U=Math.max(Math.ceil((T-W)/V),0);
var S=Array(U);
for(var R=0;
R<U;
R++,W+=V){S[R]=W
}return S
};
var z=function(W,T,V,X,U){if(!(X instanceof T)){return W.apply(V,U)
}var S=D(W.prototype);
var R=W.apply(S,U);
if(Q.isObject(R)){return R
}return S
};
Q.bind=function(U,S){if(K&&U.bind===K){return K.apply(U,m.call(arguments,1))
}if(!Q.isFunction(U)){throw new TypeError("Bind must be called on a function")
}var R=m.call(arguments,2);
var T=function(){return z(U,T,S,this,R.concat(m.call(arguments)))
};
return T
};
Q.partial=function(S){var T=m.call(arguments,1);
var R=function(){var U=0,X=T.length;
var V=Array(X);
for(var W=0;
W<X;
W++){V[W]=T[W]===Q?arguments[U++]:T[W]
}while(U<arguments.length){V.push(arguments[U++])
}return z(S,R,this,this,V)
};
return R
};
Q.bindAll=function(U){var S,T=arguments.length,R;
if(T<=1){throw new Error("bindAll must be passed function names")
}for(S=1;
S<T;
S++){R=arguments[S];
U[R]=Q.bind(U[R],U)
}return U
};
Q.memoize=function(S,R){var T=function(W){var V=T.cache;
var U=""+(R?R.apply(this,arguments):W);
if(!Q.has(V,U)){V[U]=S.apply(this,arguments)
}return V[U]
};
T.cache={};
return T
};
Q.delay=function(S,T){var R=m.call(arguments,2);
return setTimeout(function(){return S.apply(null,R)
},T)
};
Q.defer=Q.partial(Q.delay,Q,1);
Q.throttle=function(S,U,Y){var R,W,Z;
var X=null;
var V=0;
if(!Y){Y={}
}var T=function(){V=Y.leading===false?0:Q.now();
X=null;
Z=S.apply(R,W);
if(!X){R=W=null
}};
return function(){var aa=Q.now();
if(!V&&Y.leading===false){V=aa
}var ab=U-(aa-V);
R=this;
W=arguments;
if(ab<=0||ab>U){if(X){clearTimeout(X);
X=null
}V=aa;
Z=S.apply(R,W);
if(!X){R=W=null
}}else{if(!X&&Y.trailing!==false){X=setTimeout(T,ab)
}}return Z
}
};
Q.debounce=function(T,V,S){var Y,X,R,W,Z;
var U=function(){var aa=Q.now()-W;
if(aa<V&&aa>=0){Y=setTimeout(U,V-aa)
}else{Y=null;
if(!S){Z=T.apply(R,X);
if(!Y){R=X=null
}}}};
return function(){R=this;
X=arguments;
W=Q.now();
var aa=S&&!Y;
if(!Y){Y=setTimeout(U,V)
}if(aa){Z=T.apply(R,X);
R=X=null
}return Z
}
};
Q.wrap=function(R,S){return Q.partial(S,R)
};
Q.negate=function(R){return function(){return !R.apply(this,arguments)
}
};
Q.compose=function(){var R=arguments;
var S=R.length-1;
return function(){var U=S;
var T=R[S].apply(this,arguments);
while(U--){T=R[U].call(this,T)
}return T
}
};
Q.after=function(S,R){return function(){if(--S<1){return R.apply(this,arguments)
}}
};
Q.before=function(T,S){var R;
return function(){if(--T>0){R=S.apply(this,arguments)
}if(T<=1){S=null
}return R
}
};
Q.once=Q.partial(Q.before,2);
var H=!{toString:null}.propertyIsEnumerable("toString");
var a=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
function d(V,U){var R=a.length;
var S=V.constructor;
var T=(Q.isFunction(S)&&S.prototype)||g;
var W="constructor";
if(Q.has(V,W)&&!Q.contains(U,W)){U.push(W)
}while(R--){W=a[R];
if(W in V&&V[W]!==T[W]&&!Q.contains(U,W)){U.push(W)
}}}Q.keys=function(T){if(!Q.isObject(T)){return[]
}if(e){return e(T)
}var S=[];
for(var R in T){if(Q.has(T,R)){S.push(R)
}}if(H){d(T,S)
}return S
};
Q.allKeys=function(T){if(!Q.isObject(T)){return[]
}var S=[];
for(var R in T){S.push(R)
}if(H){d(T,S)
}return S
};
Q.values=function(V){var U=Q.keys(V);
var T=U.length;
var R=Array(T);
for(var S=0;
S<T;
S++){R[S]=V[U[S]]
}return R
};
Q.mapObject=function(W,Y,T){Y=G(Y,T);
var V=Q.keys(W),U=V.length,S={},X;
for(var R=0;
R<U;
R++){X=V[R];
S[X]=Y(W[X],X,W)
}return S
};
Q.pairs=function(V){var T=Q.keys(V);
var S=T.length;
var U=Array(S);
for(var R=0;
R<S;
R++){U[R]=[T[R],V[T[R]]]
}return U
};
Q.invert=function(V){var R={};
var U=Q.keys(V);
for(var S=0,T=U.length;
S<T;
S++){R[V[U[S]]]=U[S]
}return R
};
Q.functions=Q.methods=function(T){var S=[];
for(var R in T){if(Q.isFunction(T[R])){S.push(R)
}}return S.sort()
};
Q.extend=q(Q.allKeys);
Q.extendOwn=Q.assign=q(Q.keys);
Q.findKey=function(X,R,U){R=G(R,U);
var W=Q.keys(X),T;
for(var S=0,V=W.length;
S<V;
S++){T=W[S];
if(R(X[T],T,X)){return T
}}};
Q.pick=function(T,X,R){var ab={},U=T,W,aa;
if(U==null){return ab
}if(Q.isFunction(X)){aa=Q.allKeys(U);
W=b(X,R)
}else{aa=y(arguments,false,false,1);
W=function(ad,ac,ae){return ac in ae
};
U=Object(U)
}for(var V=0,S=aa.length;
V<S;
V++){var Z=aa[V];
var Y=U[Z];
if(W(Y,Z,U)){ab[Z]=Y
}}return ab
};
Q.omit=function(T,U,R){if(Q.isFunction(U)){U=Q.negate(U)
}else{var S=Q.map(y(arguments,false,false,1),String);
U=function(W,V){return !Q.contains(S,V)
}
}return Q.pick(T,U,R)
};
Q.defaults=q(Q.allKeys,true);
Q.create=function(S,T){var R=D(S);
if(T){Q.extendOwn(R,T)
}return R
};
Q.clone=function(R){if(!Q.isObject(R)){return R
}return Q.isArray(R)?R.slice():Q.extend({},R)
};
Q.tap=function(S,R){R(S);
return S
};
Q.isMatch=function(S,R){var W=Q.keys(R),V=W.length;
if(S==null){return !V
}var X=Object(S);
for(var U=0;
U<V;
U++){var T=W[U];
if(R[T]!==X[T]||!(T in X)){return false
}}return true
};
var O=function(Z,Y,S,U){if(Z===Y){return Z!==0||1/Z===1/Y
}if(Z==null||Y==null){return Z===Y
}if(Z instanceof Q){Z=Z._wrapped
}if(Y instanceof Q){Y=Y._wrapped
}var W=c.call(Z);
if(W!==c.call(Y)){return false
}switch(W){case"[object RegExp]":case"[object String]":return""+Z===""+Y;
case"[object Number]":if(+Z!==+Z){return +Y!==+Y
}return +Z===0?1/+Z===1/Y:+Z===+Y;
case"[object Date]":case"[object Boolean]":return +Z===+Y
}var T=W==="[object Array]";
if(!T){if(typeof Z!="object"||typeof Y!="object"){return false
}var X=Z.constructor,V=Y.constructor;
if(X!==V&&!(Q.isFunction(X)&&X instanceof X&&Q.isFunction(V)&&V instanceof V)&&("constructor" in Z&&"constructor" in Y)){return false
}}S=S||[];
U=U||[];
var R=S.length;
while(R--){if(S[R]===Z){return U[R]===Y
}}S.push(Z);
U.push(Y);
if(T){R=Z.length;
if(R!==Y.length){return false
}while(R--){if(!O(Z[R],Y[R],S,U)){return false
}}}else{var ab=Q.keys(Z),aa;
R=ab.length;
if(Q.keys(Y).length!==R){return false
}while(R--){aa=ab[R];
if(!(Q.has(Y,aa)&&O(Z[aa],Y[aa],S,U))){return false
}}}S.pop();
U.pop();
return true
};
Q.isEqual=function(S,R){return O(S,R)
};
Q.isEmpty=function(R){if(R==null){return true
}if(E(R)&&(Q.isArray(R)||Q.isString(R)||Q.isArguments(R))){return R.length===0
}return Q.keys(R).length===0
};
Q.isElement=function(R){return !!(R&&R.nodeType===1)
};
Q.isArray=t||function(R){return c.call(R)==="[object Array]"
};
Q.isObject=function(S){var R=typeof S;
return R==="function"||R==="object"&&!!S
};
Q.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(R){Q["is"+R]=function(S){return c.call(S)==="[object "+R+"]"
}
});
if(!Q.isArguments(arguments)){Q.isArguments=function(R){return Q.has(R,"callee")
}
}if(typeof/./!="function"&&typeof Int8Array!="object"){Q.isFunction=function(R){return typeof R=="function"||false
}
}Q.isFinite=function(R){return isFinite(R)&&!isNaN(parseFloat(R))
};
Q.isNaN=function(R){return Q.isNumber(R)&&R!==+R
};
Q.isBoolean=function(R){return R===true||R===false||c.call(R)==="[object Boolean]"
};
Q.isNull=function(R){return R===null
};
Q.isUndefined=function(R){return R===void 0
};
Q.has=function(S,R){return S!=null&&k.call(S,R)
};
Q.noConflict=function(){w._=l;
return this
};
Q.identity=function(R){return R
};
Q.constant=function(R){return function(){return R
}
};
Q.noop=function(){};
Q.property=N;
Q.propertyOf=function(R){return R==null?function(){}:function(S){return R[S]
}
};
Q.matcher=Q.matches=function(R){R=Q.extendOwn({},R);
return function(S){return Q.isMatch(S,R)
}
};
Q.times=function(V,U,T){var R=Array(Math.max(0,V));
U=b(U,T,1);
for(var S=0;
S<V;
S++){R[S]=U(S)
}return R
};
Q.random=function(S,R){if(R==null){R=S;
S=0
}return S+Math.floor(Math.random()*(R-S+1))
};
Q.now=Date.now||function(){return new Date().getTime()
};
var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var n=Q.invert(s);
var x=function(V){var S=function(W){return V[W]
};
var U="(?:"+Q.keys(V).join("|")+")";
var T=RegExp(U);
var R=RegExp(U,"g");
return function(W){W=W==null?"":""+W;
return T.test(W)?W.replace(R,S):W
}
};
Q.escape=x(s);
Q.unescape=x(n);
Q.result=function(R,T,U){var S=R==null?void 0:R[T];
if(S===void 0){S=U
}return Q.isFunction(S)?S.call(R):S
};
var B=0;
Q.uniqueId=function(R){var S=++B+"";
return R?R+S:S
};
Q.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var u=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};
var j=/\\|'|\r|\n|\u2028|\u2029/g;
var I=function(R){return"\\"+h[R]
};
Q.template=function(aa,U,X){if(!U&&X){U=X
}U=Q.defaults({},U,Q.templateSettings);
var V=RegExp([(U.escape||u).source,(U.interpolate||u).source,(U.evaluate||u).source].join("|")+"|$","g");
var W=0;
var R="__p+='";
aa.replace(V,function(ac,ad,ab,af,ae){R+=aa.slice(W,ae).replace(j,I);
W=ae+ac.length;
if(ad){R+="'+\n((__t=("+ad+"))==null?'':_.escape(__t))+\n'"
}else{if(ab){R+="'+\n((__t=("+ab+"))==null?'':__t)+\n'"
}else{if(af){R+="';\n"+af+"\n__p+='"
}}}return ac
});
R+="';\n";
if(!U.variable){R="with(obj||{}){\n"+R+"}\n"
}R="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+R+"return __p;\n";
try{var T=new Function(U.variable||"obj","_",R)
}catch(Y){Y.source=R;
throw Y
}var Z=function(ab){return T.call(this,ab,Q)
};
var S=U.variable||"obj";
Z.source="function("+S+"){\n"+R+"}";
return Z
};
Q.chain=function(S){var R=Q(S);
R._chain=true;
return R
};
var p=function(R,S){return R._chain?Q(S).chain():S
};
Q.mixin=function(R){Q.each(Q.functions(R),function(S){var T=Q[S]=R[S];
Q.prototype[S]=function(){var U=[this._wrapped];
M.apply(U,arguments);
return p(this,T.apply(Q,U))
}
})
};
Q.mixin(Q);
Q.each(["pop","push","reverse","shift","sort","splice","unshift"],function(R){var S=J[R];
Q.prototype[R]=function(){var T=this._wrapped;
S.apply(T,arguments);
if((R==="shift"||R==="splice")&&T.length===0){delete T[0]
}return p(this,T)
}
});
Q.each(["concat","join","slice"],function(R){var S=J[R];
Q.prototype[R]=function(){return p(this,S.apply(this._wrapped,arguments))
}
});
Q.prototype.value=function(){return this._wrapped
};
Q.prototype.valueOf=Q.prototype.toJSON=Q.prototype.value;
Q.prototype.toString=function(){return""+this._wrapped
};
if(typeof define==="function"&&define.amd){define("underscore",[],function(){return Q
})
}}.call(this));
(function(a){window.tmgJQ=a.noConflict();
window.$=jQuery
})(jQuery);
(function(e,m,j,h,l,k,d){var g="GlobalNav";
function b(p,o){this.$globalNavContext=e(p);
this.$links=this.$globalNavContext.find(".header-nav-global__link, .header-nav-global__drop-down-menu__link");
this.$notLogged=this.$globalNavContext.find(".header-nav-global__not-logged");
this.$loggedNotSub=this.$globalNavContext.find(".header-nav-global__logged-not-subscriber");
this.$loggedAndSub=this.$globalNavContext.find(".header-nav-global__logged-and-subscriber");
this.$dropDownWrapper=this.$globalNavContext.find(".js-has-dropdown > .header-nav-global__link");
this.$embedWrapper=this.$globalNavContext.find(".js-has-embed");
this.$embedContent=this.$embedWrapper.find(".header-nav-global__html-embed");
this.$status="notLogged"
}b.prototype={defaults:{},init:function n(){this.buttonsBehaviour();
this.getStatusString();
if(this.showStatusMenu()){return this.$links.each(function(o,p){p.href=m.updateRedirectParam(p.href,l.location.href)
})
}return false
},buttonsBehaviour:function f(){var o,p;
this.$embedWrapper.on("mouseenter",function(){var q=e(this);
clearTimeout(p);
o=setTimeout(function(){q.addClass("has-embed-visible")
},500)
});
this.$embedWrapper.on("click",function(){clearTimeout(o)
});
this.$embedWrapper.on("mouseleave",function(){var q=e(this);
clearTimeout(o);
p=setTimeout(function(){q.removeClass("has-embed-visible")
},300)
});
this.$dropDownWrapper.on("click",function(q){q.preventDefault();
e(this).closest(".header-nav-global__item").toggleClass("has-dropdown-open")
})
},getStatusString:function a(){if(d.isLoggedIn()){if(d.isSubscriber()){this.$status="loggedAndSub"
}else{this.$status="loggedNotSub"
}}return this.$status
},showStatusMenu:function c(){if(this.$status=="notLogged"){this.$loggedNotSub.remove();
this.$loggedAndSub.remove();
this.$notLogged.show();
return true
}else{if(this.$status=="loggedNotSub"){this.$notLogged.remove();
this.$loggedAndSub.remove();
this.$loggedNotSub.show();
return true
}else{if(this.$status=="loggedAndSub"){this.$notLogged.remove();
this.$loggedNotSub.remove();
this.$loggedAndSub.show();
return true
}}}return false
}};
function n(){e(".header-nav-global").each(function(){if(!e.data(this,g)){e.data(this,g,new b(this).init())
}})
}m.pageReady(n)
})(tmgJQ,tmg,Cookies,window,document,tmg.page,tmg.user);
(function(b,a){function c(){this.stickyItem=a.querySelector(".is-sticky");
if(this.stickyItem!==null){this.stickyItem.classList.remove("is-sticky");
this.stickyItem.classList.add("is-sticky-fallback");
this.stickyArticle=a.querySelector(".js-article");
this.stickySidebar=a.querySelector(".js-sidebar");
this.stickyHolding=a.createElement("div");
this.stickyRect=this.stickyItem.getBoundingClientRect();
this.stickyTop=this.stickyRect.top;
this.stickyWidth=this.stickyRect.width;
this.stickyHeight=this.stickyRect.height;
this.sidebarHeight=this.stickySidebar.offsetHeight;
this.isActive=false;
this.isArticle=this.stickyArticle!==null;
if(this.isArticle){this.isSidebar=this.stickyItem.classList.contains("js-sidebar");
this.articleHeight=this.stickyArticle.offsetHeight;
this.articleBottom=this.articleHeight-this.stickyHeight;
this.contentHeight=a.querySelector(".js-article-inner").offsetHeight
}if(this.isArticle&&this.contentHeight>this.sidebarHeight||!this.isArticle){this.init()
}}}c.prototype.init=function(){this.placeHolder();
this.scrollEvent()
};
c.prototype.placeHolder=function(){this.stickyHolding.style.display="none";
this.stickyHolding.style.width=this.stickyWidth+"px";
this.stickyHolding.style.height=this.stickyHeight+"px";
this.stickyItem.parentNode.insertBefore(this.stickyHolding,this.stickyItem)
};
c.prototype.scrollEvent=function(){var d=this;
b.addEventListener("scroll",function(){if(this.pageYOffset>=d.stickyTop&&!d.isActive){d.stickyItem.classList.add("is-sticky-fallback--active");
d.stickyHolding.style.display="block";
d.isActive=true
}else{if(this.pageYOffset<d.stickyTop&&d.isActive){d.stickyItem.classList.remove("is-sticky-fallback--active");
d.stickyHolding.style.display="none";
d.isActive=false
}}if(d.isArticle&&d.isSidebar&&d.isActive){if(this.pageYOffset>=d.articleBottom){d.stickyItem.classList.add("is-sticky-fallback--active-end")
}else{if(this.pageYOffset<d.articleBottom){d.stickyItem.classList.remove("is-sticky-fallback--active-end")
}}}})
};
if(a.querySelector("html").classList.contains("no-csspositionsticky")){new c()
}})(window,document);
(function(c,b,a){var d,f=function f(){this.init();
return this
};
f.prototype={init:function d(){this.$bodyTag=c("body.js-autorefresh");
this.$isTabletMetaTag=c("meta[name='tmg.isTablet']");
this.$isMobileMetaTag=c("meta[name='tmg.isMobile']");
this.isTablet=this.$isTabletMetaTag.length?this.$isTabletMetaTag[0].content==="true":false;
this.isMobile=this.$isMobileMetaTag.length?this.$isMobileMetaTag[0].content==="true":false;
this.triggerTime=this.$bodyTag.data("autorefresh-interval");
this.triggerTime=this.triggerTime?this.triggerTime*1000:300000;
if(!this.isMobile||this.isTablet){this.autoRefreshTrigger()
}},autoRefreshTrigger:function e(){setTimeout(function(){var h=b.location.href,g="#source=refresh";
if(b.location.hash.match(g)){h=b.location.href
}else{h=b.location.href+g
}if(!b.cancelWindowAutoRefresh){b.location.href=h;
b.location.reload(false)
}},this.triggerTime)
}};
d=function d(){if(c("body").hasClass("js-autorefresh")&&!c("body").data("js-autorefresh")){c("body").data("js-autorefresh",new f())
}};
c(a).ready(d);
c(a).on("tmg:page-loaded",d)
})(tmgJQ,window,document);
(function(f,e,a){var b=function b(m,k){this.elem=m;
this.$elem=f(m);
this.defaults={overlayClass:"tmg-modal-overlay",overlayContentClass:"tmg-modal-overlay-content",backdropClass:"tmg-modal-backdrop",closeClass:"tmg-modal-close",content:"No Content",fadeSpeed:"slow",templateRegex:/\{\{(.*?)\}\}/g,templateHTML:'<div class="{{backdropClass}}"></div><div class="{{overlayClass}}"><div class="{{overlayContentClass}}">{{content}}</div><div class="{{closeClass}}"></div></div>',templateBeforeCallback:function h(){},templateAfterCallback:function n(){},closeOnEsc:true,closeBeforeCallback:function l(){},closeAfterCallback:function j(){}};
this.options=k;
this.metadata=JSON.parse((this.$elem.data("modal-options")||"{'':''}").replace(/'/g,'"'));
this.config=f.extend({},this.defaults,this.options,this.metadata)
};
b.prototype={open:function c(){var j=this,h;
j.destroy();
j.config.templateBeforeCallback.call(j,arguments);
h=j.config.templateHTML.replace(j.config.templateRegex,function(l,k){return typeof j.config[k]==="function"?j.config[k].call(j):j.config[k]||""
});
f("body").children(":first").before(h);
j.config.templateAfterCallback.call(j,arguments);
if(j.config.closeOnEsc){f(a).on("keyup",function(k){if(k.keyCode===27){j.close()
}})
}f("."+j.config.closeClass).on("click",function(k){j.close()
})
},close:function g(){var h=this;
h.config.closeBeforeCallback.call(h,arguments);
f("."+h.config.overlayClass+", ."+h.config.backdropClass).fadeOut(h.config.fadeSpeed,function(){if(f("."+h.config.overlayClass+":animated, ."+h.config.backdropClass+":animated").length===0){h.destroy();
h.config.closeAfterCallback.call(h,arguments)
}})
},destroy:function d(){var h=this;
f("."+h.config.overlayClass+", ."+h.config.backdropClass).remove();
f(a).off("keyup");
f("."+h.config.closeClass+", ."+h.config.backdropClass).off("click")
}};
f.fn.modal=function(k,h){var j=this;
return j.each(function(){new b(j,h)[k]()
})
};
e.Modal=b
})(tmgJQ,window,document);
(function(d,c,a){var b=function b(j){var g=d(j.target).attr("class"),h=new RegExp(".*social-share_(\\w*)","i"),f=h.exec(g);
if(f&&f.length>0&&"_satellite" in c){_satellite.setVar("shareprovider",f[1]);
_satellite.track("share")
}};
var e=function e(){d(a).on("click","[class*='social-share_']",b)
};
d(a).ready(function(){e()
})
})(window.tmgJQ,window,document);
tmg.createNamespace("tmg.feature");
tmg.feature=function(h,f,c){var b={addAttributeToTurnOn:false,addClassToTurnOn:false,attributeName:"hidden",attributeValue:"",className:"",removeAttributeToTurnOn:true,removeClassToTurnOn:false,callbackFunction:false};
var l=function l(){};
var k=function k(n,m,o){n.setAttribute(m,o)
};
var e=function e(m,n){m.classList.add(n)
};
var g=function g(n,m){n.removeAttribute(m)
};
var j=function j(m,n){m.classList.remove(n)
};
var d=function d(p){var q=arguments.length>1&&arguments[1]!==undefined?arguments[1]:b,s=q.addAttributeToTurnOn,w=q.addClassToTurnOn,t=q.className,u=q.attributeName,o=q.attributeValue,n=q.removeAttributeToTurnOn,v=q.removeClassToTurnOn,r=q.callbackFunction;
var m=Array.from(document.querySelectorAll(p));
m.forEach(function(x){if(u!==""){if(s){g(x,u)
}if(n){k(x,u,o)
}}if(t!==""){if(w){j(x,t)
}if(v){e(x,t)
}}});
if(r&&typeof r==="function"){r()
}};
var a=function a(q){var o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:b,s=o.addAttributeToTurnOn,w=o.addClassToTurnOn,t=o.className,u=o.attributeName,p=o.attributeValue,n=o.removeAttributeToTurnOn,v=o.removeClassToTurnOn,r=o.callbackFunction;
var m=Array.from(document.querySelectorAll(q));
m.forEach(function(x){if(u!==""){if(s){k(x,u,p)
}if(n){g(x,u)
}}if(t!==""){if(w){e(x,t)
}if(v){j(x,t)
}}});
if(r&&typeof r==="function"){r()
}};
h.pageReady(l);
return{turnOn:a,turnOff:d}
}(tmg,tmg.page,tmg.environment);
tmg.createNamespace("tmg.firestore");
tmg.firestore=function(k,f,h,e,g){var d={databaseURL:"https://tmg-platforms-prod.firebaseio.com",projectId:"tmg-platforms-prod-aa404"};
var l=void 0;
var c=function c(){if(e.getEnvironment()!==e.getList().prod){d.databaseURL="https://tmg-platforms-preprod.firebaseio.com";
d.projectId="tmg-platforms-preprod"
}};
var j=function j(){return new Promise(function(q,p){var n=g.injectScript("//www.gstatic.com/firebasejs/5.0.4/firebase-app.js");
var o=g.injectScript("//www.gstatic.com/firebasejs/5.0.4/firebase-firestore.js");
Promise.all([n,o]).then(function(){q()
})
})
};
var b=function b(n){return n.replace(/\//g,"_")
};
var a=function a(){return new Promise(function(o,n){o()
})
};
var m=function m(){c();
return new Promise(function(o,n){j().then(function(){firebase.initializeApp(d);
l=firebase.firestore();
l.settings({timestampsInSnapshots:true});
k.firestore={characterReplace:b,init:a,store:l};
o()
})
})
};
return{init:m}
}(tmg,window,document,tmg.environment,tmg.page);
function _toConsumableArray(a){if(Array.isArray(a)){for(var c=0,b=Array(a.length);
c<a.length;
c++){b[c]=a[c]
}return b
}else{return Array.from(a)
}}tmg.createNamespace("tmg.mytelegraph");
tmg.mytelegraph=function(S,J,h,x,M,B,L,d){var p="HyOLHxhzrHME0oTZIpZ9JlVWCZRrAIzq";
var R={active:false,selectors:{saveArticle:"[data-save-article]",saveArticleText:"[data-js='save-article-text']",saveError:".error--save-article",followError:".error--follow",followList:"[data-js='follow-list']",followTags:"[data-js='follow-tag']",followText:"[data-js='follow-text']",followButton:"[data-js='follow-button']",followButtonText:"[data-js='follow-button-text']",notification:"[data-js='notification']"},classes:{activeButton:"follow-button--selected",savedArticle:"save-article--saved",selectedTag:"follow-list__link--selected",notification:"notification--new"},save:{id:"",text:{save:"",saved:""}},registration:{url:"/secure/register/"},login:{url:"/secure/login/"},api:{host:"api-prod.telegraph.co.uk",ignoreEnvironment:false,basePath:"/mytelegraph/",paths:{auth:"auth/web",feed:"feed/v0.3.0/user",preferences:{base:"preferences/v0.5.0/user",follow:"/follows",save:"/articles"}}}};
var A={auth:"",base:"",follow:"",pid:"",save:""};
var j={followTags:"",followButtonText:"",followButtonJSON:"",save:"",saveArticleText:""};
var v={authors:[],topics:[]};
var K={save:false,follow:false};
var z=function z(W){if(W.status>=200&&W.status<300){return Promise.resolve(W)
}else{if(W.status===401){}else{return Promise.reject(new Error(W.statusText))
}}};
var F=function F(W){return W.text().then(function(X){return X?L.tryParse(X):{}
})
};
var I=function I(){var W=R.api;
if(!W.ignoreEnvironment&&M.getEnvironment()!==M.getList().prod){W.host="api-preprod.telegraph.co.uk"
}return"https://"+W.host+W.basePath
};
var l=function l(){var X=R.api;
var Y=X.paths;
var W=Y.preferences;
A.pid=x.getProfile().pId;
A.base=I();
A.auth=""+A.base+Y.auth+"?response_type=token&client_id="+p;
A.follow=""+A.base+W.base+"/"+A.pid+W.follow;
A.save=""+A.base+W.base+"/"+A.pid+W.save
};
var q=function q(){var W=R.selectors;
j.followTags=Array.from(h.querySelectorAll(W.followTags));
j.followButtonText=h.querySelector(W.followButtonText);
j.save=h.querySelector(W.saveArticle);
j.saveArticleText=h.querySelector(W.saveArticleText);
if(j.followButtonText){j.followButtonJSON=L.tryParse(j.followButtonText.dataset.options).text
}};
var w=function w(){var Z=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{forceValidate:false},Y=Z.forceValidate;
var W={method:"POST",headers:{"X-TMG-session":x.getSessionId()}};
var X=x.getMyTelegraphToken();
if(X&&!Y){return Promise.resolve(X)
}return J.fetch(A.auth,W).then(z).then(F).then(function(aa){x.setMyTelegraphToken({token:aa.access_token});
return aa.access_token||{}
},function(aa){return aa
})
};
var c=function c(Z){var X=Z.url,Y=Z.method,W=Z.body;
return new Promise(function(ab,aa){w().then(function(ad){var ac={headers:{authorization:"Bearer "+ad}};
if(Y&&W){ac.method=Y;
ac.body=JSON.stringify(W)
}J.fetch(X,ac).then(z).then(F).then(function(ae){ab(ae)
})["catch"](function(ae){aa(ae)
})
})
})
};
var g=function g(){S.firestore.init().then(function(){var W=S.firestore,aa=W.store,Z=W.characterReplace;
var X=aa.collection("lastChecked").doc(A.pid).get();
var Y=aa.collection("authors");
var ad=aa.collection("topics");
var ab=Promise.all(v.authors.map(function(af){var ae=Z(af);
return Y.doc(ae).get()
}));
var ac=Promise.all(v.topics.map(function(af){var ae=Z(af);
return ad.doc(ae).get()
}));
X.then(function(ae){if(ae.exists){Promise.all([ab,ac]).then(function(af){var ah;
var ag=(ah=[]).concat.apply(ah,_toConsumableArray(af)).filter(function(ai){return ai.exists
}).map(function(ai){return ai.data().dateTime
});
return Math.max.apply(Math,_toConsumableArray(ag))
}).then(function(af){if(af>=ae.data().lastChecked){var ag=h.querySelector(R.selectors.notification);
if(ag){ag.classList.add(R.classes.notification)
}}})
}})
})
};
var f=function f(){var X=R.selectors.saveArticle.replace(/[\[\]]/gi,"");
var W=R.save;
if(j.save.getAttribute){W=j.save.getAttribute(X);
R.save=L.tryParse(W,R.save)
}return R.save
};
var G=function G(){var W=localStorage.getItem("saveArticle");
return W?L.tryParse(W).articles:[]
};
var H=function H(Y){var X=G();
var W=void 0;
if(X&&!X.includes(Y)){X.push(Y)
}W=JSON.stringify({articles:X});
return localStorage.setItem("saveArticle",W)
};
var u=function u(Z){var Y=G();
var W=void 0;
var X=void 0;
if(Y.includes(Z)){k()
}W=Y.filter(function(aa){return aa!==Z
});
X=JSON.stringify({articles:W});
return localStorage.setItem("saveArticle",X)
};
var k=function k(){var Y=arguments.length>0&&arguments[0]!==undefined?arguments[0]:R.save,Z=Y.id;
var X=[Z];
var W=R.selectors;
c({url:A.save,body:X,method:"PUT"}).then(function(aa){o(W.saveError);
E({saved:true})
},function(aa){m(W.saveError)
})["catch"](function(aa){m(W.saveError)
})
};
var t=function t(){var X=arguments.length>0&&arguments[0]!==undefined?arguments[0]:R.save,Z=X.id;
var Y=[Z];
var W=R.selectors;
return c({url:A.save,body:Y,method:"DELETE"}).then(function(aa){o(W.saveError);
E({saved:false})
},function(aa){m(W.saveError)
})["catch"](function(aa){m(W.saveError)
})
};
var s=function s(){return c({url:A.save,method:"GET"}).then(function(){var W=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
return W
},function(W){return W
})["catch"](function(W){})
};
var P=function P(){var W=arguments.length>0&&arguments[0]!==undefined?arguments[0]:R.save,X=W.id;
if(!X){return
}s().then(function(){var Y=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
if(typeof Y.includes==="function"&&Y.includes(X)){E({saved:true})
}})["catch"](function(Y){})
};
var E=function E(X){var aa=X.saved,Y=aa===undefined?false:aa;
var W=R.classes;
var Z=R.save.text;
if(Y){j.save.classList.add(W.savedArticle);
j.saveArticleText.innerText=Z.saved
}else{j.save.classList.remove(W.savedArticle);
j.saveArticleText.innerText=Z.save
}};
var m=function m(W){B.turnOn(W)
};
var o=function o(W){B.turnOff(W)
};
var a=function a(W,ab,Z){var aa={wrapperStyle:false,content:"This feature is available for registered users. Please register or log in to continue",positionY:"bottom",positionX:"left",buttons:[{label:"Register",url:U({featureName:Z,url:R.registration.url})},{label:"Log in",url:U({featureName:Z,url:R.login.url}),alternate:true}]};
var Y=h.querySelector(W);
if(Y){var X=Object.assign({},aa,ab);
K[Z]=new S.Tooltip(Y,X)
}};
var b=function b(){B.turnOn(R.selectors.saveArticle,{removeAttributeToTurnOn:true,attributeName:"hidden",callbackFunction:function W(){a(R.selectors.saveArticle,{positionX:"right"},"save")
}})
};
var r=function r(){B.turnOff(R.selectors.saveArticle)
};
var D=function D(){B.turnOn(R.selectors.followButton,{removeAttributeToTurnOn:true,attributeName:"hidden",callbackFunction:function W(){a(R.selectors.followButton,{wrapperStyle:"order: -1"},"follow")
}})
};
var V=function V(){B.turnOff(R.selectors.followButton)
};
var e=function e(Y){var X=R.selectors;
var W=R.classes;
if(Y.classList.contains(W.activeButton)){j.followButtonText.innerText=j.followButtonJSON.follow;
B.turnOff(X.followList)
}else{j.followButtonText.innerText=j.followButtonJSON.close;
B.turnOn(X.followList)
}Y.classList.toggle(W.activeButton)
};
var C=function C(Z,aa){var ab=Z.id,Y=Z.label;
var X=[];
var W={id:ab,name:Y};
if(aa){X.push(ab)
}else{X.push(W)
}return X
};
var y=function y(W){return W.classList.contains(R.classes.selectedTag)
};
var O=function O(){return new Promise(function(X,W){c({url:A.follow,method:"GET"}).then(function(Y){Y.authors.forEach(function(Z){v.authors.push(Z.id)
});
Y.topics.forEach(function(Z){v.topics.push(Z.id)
});
X(Y)
})
})
};
var n=function n(Y){var Z=y(Y);
var X=L.tryParse(Y.dataset.options);
var W=C(X,Z);
var aa={};
var ab="PUT";
aa[X.type]=W;
if(Z){ab="DELETE"
}c({url:A.follow,method:ab,body:aa}).then(function(){o(R.selectors.followError);
Y.classList.toggle(R.classes.selectedTag)
})["catch"](function(ac){m(R.selectors.followError)
})
};
var N=function N(){var W=v.authors.concat(v.topics);
j.followTags.forEach(function(X){var Y=L.tryParse(X.dataset.options).id;
if(W.includes(Y)){X.classList.add(R.classes.selectedTag)
}})
};
var T=function T(){var Z=R.selectors;
var Y=R.classes;
var X=h.querySelector(Z.saveArticle);
if(X){X.addEventListener("click",function(){if(!x.isLoggedIn()){H(R.save.id);
K.save.revealTooltip()
}else{if(this.classList.contains(Y.savedArticle)){t({id:R.save.id})
}else{k({id:R.save.id})
}}})
}var W=h.querySelector(Z.followButton);
if(W){W.addEventListener("click",function(){if(!x.isLoggedIn()){K.follow.revealTooltip()
}else{e(this)
}})
}j.followTags.forEach(function(aa){aa.addEventListener("click",function(ab){ab.preventDefault();
if(!x.isLoggedIn()){K.follow.revealTooltip()
}else{n(this)
}})
})
};
var U=function U(af){var ab=af.product,ac=ab===undefined?"mytelegraph":ab,ad=af.featureName,aa=ad===undefined?"":ad,Z=af.url,X=Z===undefined?R.registration.url:Z;
var ae="";
var W=S.setQuerystringParam(X,"redirectTo",d.getLocation().href);
var Y=J.TMG_COMPONENT_TRACKING;
if(aa&&Y&&Y.isDtmEnabled()){ae=Y.createIcid({product:ac,contentLocation:aa});
W=S.setQuerystringParam(W,"ICID",ae)
}return""+W
};
var Q=function Q(){var W=arguments.length>0&&arguments[0]!==undefined?arguments[0]:R,X=W.active;
S.mytelegraph={authenticate:w,init:Q,saveArticle:k,turnOffSave:r,turnOnSave:b,turnOffFollow:V,turnOnFollow:D,unSaveArticle:t,updateTag:n};
if(!X){S.mytelegraph={init:Q};
return
}l();
if(d.isArticle){q();
T();
if(j.save){f()
}}if(x.isLoggedIn()){O().then(function(){g();
if(d.isArticle){N()
}});
if(d.isArticle&&R.save.id){u(R.save.id);
P({id:R.save.id})
}}};
S.pageReady(Q);
return{init:Q}
}(tmg,window,document,tmg.user,tmg.environment,tmg.feature,tmg.json,tmg.page);
if(window.HTMLTemplateElement){(function(g,h,k){var e=g(".lazy-html__wrapper").parent(".component"),f=g(k),d=g(h),a=d.height(),c,b=false,m=200,l=0;
function n(p,o){if(c){clearTimeout(c)
}c=setTimeout(p,o)
}function j(o){var p=o.find(".lazy-html__wrapper").html();
o.html(p);
l+=1;
o.data("active",true);
g(k).trigger("tmg:lazy-loaded-html");
if(b){console.log("loaded",o)
}if(l>=e.length){f.off("scroll.html-embed-tracking")
}}g.fn.componentLazyLoad=function(){var s=0,p=f.scrollTop()+d.height()+a,r=f.scrollTop()-a,t,o,q,u=this.length;
for(s;
s<u;
s++){q=this.eq(s);
t=q.offset().top<p&&q.offset().top>r;
o=!q.data("active");
if(t&&o){j(q)
}}};
f.on("scroll.html-embed-tracking",function(){n(function(){e.componentLazyLoad()
},m)
});
e.componentLazyLoad()
})(tmgJQ,window,document)
}var _createClass=function(){function a(e,c){for(var b=0;
b<c.length;
b++){var d=c[b];
d.enumerable=d.enumerable||false;
d.configurable=true;
if("value" in d){d.writable=true
}Object.defineProperty(e,d.key,d)
}}return function(d,b,c){if(b){a(d.prototype,b)
}if(c){a(d,c)
}return d
}
}();
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}(function(){var a=tmg,c=a.throttle;
function f(g){return g.dataset.src
}function b(h,g){return function(){h.classList.remove("is-loading");
h.classList.add("is-loaded-prepare");
function k(){g.removeAttribute("height");
h.style.height=null;
h.style.paddingTop=null;
h.classList.add("is-loaded")
}function j(){h.classList.remove("is-loaded-prepare")
}[k,j].forEach(function(m,l){setTimeout(m,l+1)
})
}
}function e(h){var g=document.createElement("img");
g.onload=b(h,g);
g.classList.add("responsive");
g.setAttribute("height",0);
["src","srcset","sizes","alt","title"].forEach(function(j){if(h.dataset[j]){g.setAttribute(j,h.dataset[j]);
h.removeAttribute("data-"+j)
}});
h.appendChild(g);
h.classList.add("is-loading")
}var d=function(){function g(k){_classCallCheck(this,g);
this.elems=(Array.isArray(k)?k:[k]).filter(f);
this.checkPosition=this.checkPosition.bind(this)
}_createClass(g,[{key:"init",value:function j(){window.addEventListener("scroll",c(this.checkPosition,250),false);
this.checkPosition()
}},{key:"checkPosition",value:function h(){function l(m){return !(m.classList.contains("is-loading")||m.classList.contains("is-loaded"))
}function k(m){return m.getBoundingClientRect().top<window.innerHeight+500
}this.elems.filter(l).filter(k).forEach(e)
}}]);
return g
}();
window.tmg.pageReady(function(){var g=Array.prototype.slice.call(document.querySelectorAll('[data-js="LazyImage"]'));
var h=new d(g);
h.init()
})
})();
(function(b,a){b(a).on("tmg:video-autoplay-on",function(){b(a).data("video-autoplay-on",true)
});
b(a).on("tmg:video-autoplay-off",function(){b(a).data("video-autoplay-on",false)
})
})(tmgJQ,document);
(function(d,f,g){var j,e="detectAdBlocker",b=d(g),c=d("body"),a=d(".adblocker-message"),h=function h(l,k){this.elem=l;
this.$elem=d(l)
};
h.prototype.init=function(){this.checkCookies();
this.ignoreAdBlockerMessage()
};
h.prototype.checkCookies=function(){var l=Cookies.get("tmg_session"),k=Cookies.get("tmg_subs");
if(l!==undefined&&k!==undefined){return true
}else{this.detectAds()
}};
h.prototype.detectAds=function(){var l=this;
var k=g.createElement("div");
k.style.position="absolute";
k.style.left="0";
k.style.top="0";
k.style.height="10px";
k.style.zIndex="-1";
k.innerHTML="&nbsp;";
k.setAttribute("class","pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links advert");
f.requestAnimationFrame(function(){g.body.appendChild(k);
f.requestAnimationFrame(function(){var n=f.getComputedStyle(k);
var m=n.getPropertyValue("display");
if(m==="none"&&sessionStorage.getItem("message")!=="closed"){l.displayMessage()
}})
})
};
h.prototype.displayMessage=function(){a.addClass("message-active");
c.css("overflow","hidden");
if(typeof _satellite!=="undefined"){_satellite.track("TMG AdBlock Message")
}};
h.prototype.removeMessage=function(){a.remove();
c.css("overflow","visible")
};
h.prototype.closeMessageForSession=function(){sessionStorage.setItem("message","closed")
};
h.prototype.ignoreAdBlockerMessage=function(){var k=this;
c.on("click",".adblocker-message .close",function(){k.removeMessage();
k.closeMessageForSession()
});
c.on("keyup",function(l){if(l.keyCode===27){d(".adblocker-message .close").trigger("click")
}})
};
d.fn.detectAdBlocker=function(k){return this.each(function(){if(!d.data(this,e)){d.data(this,e,new h(this,k).init())
}else{return d.data(this,e)
}})
};
j=function j(){var k=tmg.getMediaQuery();
if((k==="lg"||k==="xl")&&d(".advert").length>0&&d(".adblocker-message").length>0){b.detectAdBlocker()
}};
b.ready(j);
b.on("tmg:page-loaded",j)
})(tmgJQ,window,document);
(function(b,d,g){var k,h=function h(m,l){this.elem=m;
this.$elem=b(m);
this.speed=this.$elem.attr("data-box--cycle-speed")||5000;
this.domElements={$container:this.$elem.find(" > .component-content"),$slides:this.$elem.find(".section"),$controls:this.$elem.find(".box__controls")}
};
h.prototype={init:function k(){var l=this;
if(tmg.timer&&this.domElements.$slides.length>1){this.buildControls();
this.setHeight();
this.transition(this.domElements.$slides.first());
this.domElements.$container.on("mouseover",function(){l.timeout.stop()
});
this.domElements.$container.on("mouseleave",function(){l.timeout.resume()
})
}else{this.setHeight()
}},buildControls:function j(){var m=this,l=0;
for(;
l<this.domElements.$slides.length;
l++){if(l===0){m.domElements.$controls.append('<li class="active">'+l+"</li>")
}else{m.domElements.$controls.append("<li>"+l+"</li>")
}}m.domElements.$slides.addClass("slide");
m.domElements.$controls.find("li").on("click",function(){m.timeout.stop();
m.domElements.$controls.find("li").removeClass("active");
b(this).addClass("active");
m.transition(m.domElements.$slides.eq(b(this).index()),m.$elem.find(".section:visible"))
})
},thisHeight:function a(){return b(this).outerHeight()
},setHeight:function f(){var l=this;
this.domElements.$container.height(function(){return Math.max.apply(Math,l.domElements.$slides.map(l.thisHeight))
})
},transition:function e(n,m){var l=this;
if(m){m.fadeOut(500,function(){l.next(n,m)
})
}else{this.next(n)
}},next:function c(n){var m=this;
var l;
if(n.is(":last-of-type")){l=m.domElements.$slides.first()
}else{l=n.next()
}n.fadeIn(500,function(){m.timeout=new tmg.timer(function(){m.domElements.$controls.find("li").eq(l.index()).trigger("click")
},m.speed)
})
}};
b.fn.boxCycle=function(l){return this.each(function(){if(!b.data(this,"boxCycle")){b.data(this,"boxCycle",new h(this,l).init())
}else{return b.data(this,"boxCycle")
}})
};
d.boxCycle=h;
k=function k(){b(".js-tmg-box-cycle").boxCycle()
};
b(g).ready(k);
b(g).on("tmg:page-loaded",k)
})(tmgJQ,window,document);
(function(){window.googletag=window.googletag||{};
window.googletag.cmd=window.googletag.cmd||[];
googletag.cmd.push(function(){if(googletag.hasOwnProperty("on")||googletag.hasOwnProperty("off")||googletag.hasOwnProperty("trigger")||googletag.hasOwnProperty("events")){return
}var a=googletag.debug_log.log,b=[],c=function c(e,f,d){b.push({name:e,id:f,match:d})
};
c("gpt-google_js_loaded",8,/Google service JS loaded/ig);
c("gpt-gpt_fetch",46,/Fetching GPT implementation/ig);
c("gpt-gpt_fetched",48,/GPT implementation fetched\./ig);
c("gpt-page_load_complete",1,/Page load complete/ig);
c("gpt-queue_start",31,/^Invoked queued function/ig);
c("gpt-service_add_slot",40,/Associated ([\w]*) service with slot ([\/\w]*)/ig);
c("gpt-service_add_targeting",88,/Setting targeting attribute ([\w]*) with value ([\w\W]*) for service ([\w]*)/ig);
c("gpt-service_collapse_containers_enable",78,/Enabling collapsing of containers when there is no ad content/ig);
c("gpt-service_create",35,/Created service: ([\w]*)/ig);
c("gpt-service_single_request_mode_enable",63,/Using single request mode to fetch ads/ig);
c("gpt-slot_create",2,/Created slot: ([\/\w]*)/ig);
c("gpt-slot_add_targeting",17,/Setting targeting attribute ([\w]*) with value ([\w\W]*) for slot ([\/\w]*)/ig);
c("gpt-slot_fill",50,/Calling fillslot/ig);
c("gpt-slot_fetch",3,/Fetching ad for slot ([\/\w]*)/ig);
c("gpt-slot_receiving",4,/Receiving ad for slot ([\/\w]*)/ig);
c("gpt-slot_render_delay",53,/Delaying rendering of ad slot ([\/\w]*) pending loading of the GPT implementation/ig);
c("gpt-slot_rendering",5,/^Rendering ad for slot ([\/\w]*)/ig);
c("gpt-slot_rendered",6,/Completed rendering ad for slot ([\/\w]*)/ig);
googletag.events=googletag.events||{};
googletag.on=function(d,k,g){if(!k){return this
}d=d.split(" ");
var f=g?k:undefined,l=g||k,j=0,h="";
l.data=f;
for(h=d[j=0];
j<d.length;
h=d[++j]){(this.events[h]=this.events[h]||[]).push(l)
}return this
};
googletag.off=function(d,g){d=d.split(" ");
var k=0,j="",l=0,h=function h(){};
for(j=d[k];
k<d.length;
j=d[++k]){if(!this.events.hasOwnProperty(j)){continue
}if(!g){delete this.events[j];
continue
}l=this.events[j].length-1;
for(h=this.events[j][l];
l>=0;
h=this.events[j][--l]){if(h==g){this.events[j].splice(l,1)
}}if(this.events[j].length===0){delete this.events[j]
}}return this
};
googletag.trigger=function(e,d){if(!this.events[e]||this.events[e].length===0){return this
}var d=d||[],h=0,g=this.events[e][h];
for(h,g;
h<this.events[e].length;
g=this.events[e][++h]){if(g.apply(this,[{data:g.data}].concat(d))===false){break
}}return this
};
googletag.debug_log.log=function(l,h,f,k,d){if(h&&h.getMessageId&&typeof h.getMessageId()=="number"){var g=Array.prototype.slice.call(arguments),j=0;
for(j;
j<b.length;
j++){if(b[j].id===h.getMessageId()){googletag.trigger(b[j].name,g)
}}}return a.apply(this,arguments)
}
})
})();
(function(e,h,l){var m,g="telegraph_dynamicVideoContentLoader",k="js-dynamic-video-content-loader",f=g+"_init",c="."+k,d=function d(o,n){this.options=n;
this.elem=o;
this.$elem=e(o);
this.dataOptions=this.$elem.data("options");
if(typeof this.dataOptions==="string"){this.dataOptions=this.dataOptions?e.parseJSON(this.dataOptions.replace(/'/g,'"')):{}
}else{this.dataOptions=this.dataOptions?this.dataOptions:{}
}this.options=e.extend({},this.defaults,this.dataOptions,this.options);
this.domElements={}
};
d.prototype={defaults:{videoURL:h.location.protocol+"//"+h.location.host+"/bin/telegraph/video/?area=%AREA%&playlist=%PLAYLIST%&path="+h.location.pathname.replace(".html","").replace("/content/telegraph","")},init:function m(){if(!h.tmg||!h.tmg.GET_PARAM||!h.tmg.GET_PARAM.playlist){return this
}if(!this.options.contentArea){console.log("No contentArea set",this.elem);
return this
}this.completeVideoURL();
this.loadContent();
return this
},completeVideoURL:function a(){this.options.videoURL=this.options.videoURL.replace("%PLAYLIST%",h.tmg.GET_PARAM.playlist);
this.options.videoURL=this.options.videoURL.replace("%AREA%",this.options.contentArea)
},loadContent:function j(){var n=this;
e.get(n.options.videoURL,function(o){n.$elem.html(n.prepareDataToAppend(o));
if(n.options.components){e.each(n.options.components,function(p,q){n.console({"func:":p,params:q});
if(typeof n[p]==="function"){n[p](q)
}})
}})
},prepareDataToAppend:function b(n){if(this.options.contentArea==="list"){n=n.replace(/(version-)(\d+)/g,"version-5")
}return n
},console:function(o){function n(p){return o.apply(this,arguments)
}n.toString=function(){return o.toString()
};
return n
}(function(n){if(this.options.debug==="1"){console.log(n)
}})};
e.fn[g]=function(n){return this.each(function(){if(e(this).data(g)){e(this).removeData(g)
}e(this).data(g,new d(this,n).init())
})
};
e.fn[f]=function(){e(c)[g]()
};
m=function m(){e(c)[f]()
};
e(l).ready(m);
e(l).on("tmg:page-loaded",m)
})(tmgJQ,window,document);
(function(e,b,a){var f,d="dropDown",c=function c(h,g){this.elem=h;
this.$elem=e(h);
this.domElements={$item:this.$elem.find(".dropdown__item"),$default:this.$elem.find(".dropdown__item-default")}
};
c.prototype={init:function f(){var g=this;
this.domElements.$default.on("click",function(){g.domElements.$item.toggleClass("active");
e(this).toggleClass("active")
})
}};
e.fn.dropDown=function(g){return this.each(function(){if(!e.data(this,d)){e.data(this,d,new c(this,g).init())
}else{return e.data(this,d)
}})
};
b.dropDown=c;
f=function f(){e(".js-dropdown").dropDown()
};
e(a).ready(f);
e(a).on("tmg:page-loaded",f)
})(tmgJQ,window,document);
(function(b,e,h){var n,d="telegraph_HTMLEmbed",f="html-embed",c=d+"_init",a="."+f,m="youtube.com",g="has-youtube-iframe",l=function l(p,o){this.options=o;
this.elem=p;
this.$elem=b(p);
this.dataOptions=this.$elem.data("options")?b.parseJSON(this.$elem.data("options").replace(/'/g,'"')):{}
};
l.prototype={defaults:{},init:function n(){this.options=b.extend({},this.defaults,this.dataOptions,this.options);
this.detectYoutube();
this.initEvents();
return this
},initEvents:function k(){var o=b.proxy(this.detectYoutube,this);
b(h).on("tmg:html-embed-loaded",o)
},detectYoutube:function j(){var o=this;
b(o.$elem).find("iframe").each(function(p,q){if(q.src.indexOf(m)>0){o.$elem.addClass(g)
}})
}};
b.fn[d]=function(o){return this.each(function(){if(!b.data(this,d)){b.data(this,d,new l(this,o).init())
}})
};
b.fn[c]=function(){b(a)[d]()
};
n=function n(){b(a)[d]()
};
b(h).ready(n);
b(h).on("tmg:page-loaded",n)
})(tmgJQ,window,document);
(function(y,I,h,w){var N={EXPANDED:1,COMPACT:2};
function D(S,R){this.gallery=S;
this.$gallery=y(S);
this.options=R;
this.config={};
this.slides=null;
this.thumbs=[];
this.index=0;
this.view=1;
this.init()
}D.prototype={defaults:{componentContentSelector:".component-content",settingsContainerSelector:".gallery-settings",galleryContentSelector:".gallery__image-view .gallery__content",onwardSlideSelector:".gallery__onward-slide-holder",galleryElements:".gallery__elements",thumbailsTPL:".template-Thumbail",imageTPL:".template-Image",imageViewSelector:".gallery__image-view",galleryItemSelector:".gallery__item",galleryImageSelector:".gallery__image",arrowRightSelector:".gallery__navigation .gallery__arrow-right",arrowLeftSelector:".gallery__navigation .gallery__arrow-left",paginationSelector:".gallery__pagination",paginationCurrentSelector:".gallery__pagination-current",paginationNumberSelector:".gallery__pagination-number",viewAllButtonSelector:".gallery__view-all",skipAdSelector:".gallery__skip-ad",thumbnailViewSelector:".gallery__thumbnail-view",thumbnailItemsSelector:".gallery__thumbnail-item",thumbnailListSelector:".gallery__thumbnail-items-list",thumbnailLinksSelector:".gallery__thumbnail-link",backToImageSelector:".gallery__back-to-image",canonicalMetaTagSelector:"link[rel=canonical]",VIEWS:{THUMBNAIL:0,IMAGE:1},allowArrowKeys:true,useTitleAttributes:true},init:function L(){this.config=y.extend({},this.defaults,this.options);
this.currentItem=this.gallery.querySelector(this.config.galleryItemSelector);
this.onwardSlide=this.gallery.querySelector(this.config.onwardSlideSelector);
this.slideTemplate=this.createImageSlide(this.currentItem,{});
var R=this.currentItem.querySelector(this.config.galleryImageSelector);
this.adjustImageWidth(R);
this.setIndex(parseInt(this.currentItem.getAttribute("data-slide-index"),10));
this.initData();
this.thumbTemplate=this.gallery.querySelector(this.config.thumbailsTPL).innerHTML.trim();
this.thumbnailList=this.gallery.querySelector(this.config.thumbnailListSelector);
this.$componentContent=this.$gallery.children(this.config.componentContentSelector);
this.$settingsContainer=this.$gallery.find(this.config.settingsContainerSelector);
this.$imageView=this.$gallery.find(this.config.imageViewSelector);
this.$arrowRight=this.$gallery.find(this.config.arrowRightSelector);
this.$arrowLeft=this.$gallery.find(this.config.arrowLeftSelector);
this.$pagination=this.$gallery.find(this.config.paginationSelector);
this.$paginationCurrent=this.$gallery.find(this.config.paginationCurrentSelector);
this.$paginationNumber=this.$gallery.find(this.config.paginationNumberSelector);
this.$viewAllButton=this.$gallery.find(this.config.viewAllButtonSelector);
this.$skipAd=this.$gallery.find(this.config.skipAdSelector);
this.$thumbnailView=this.$gallery.find(this.config.thumbnailViewSelector);
this.$backToImage=this.$gallery.find(this.config.backToImageSelector);
this.galleryContent=this.gallery.querySelector(this.config.galleryContentSelector);
this.$canonicalMetaTag=y(this.config.canonicalMetaTagSelector);
this.initSlides();
this.initNavigation();
this.initUrl();
this.initPagination();
this.initSkippingAd();
this.createAdvertMpu()
},setIndex:function r(R){this.lastIndex=this.index;
this.index=R
},initData:function F(){function U(X,Y){return X.replace(/[^$?\s]+(.*)/,Y+"$1")
}function W(ac){var Y=ac["image-src"];
var ab=U(this.src,Y);
var X=this.srcset.split(",").map(function(ad){return U(ad,Y)
}).join(",");
var Z=U(this.thumbSrc,Y);
var aa=this.thumbSrcset.split(",").map(function(ad){return U(ad,Y)
}).join(",");
return y.extend({},ac,{"image-src":ab,"image-srcset":X,"thumb-src":Z,"thumb-srcset":aa})
}var T=this.currentItem;
var V=T.querySelector(this.config.galleryImageSelector+" > img");
var R=this.gallery.querySelector(this.config.galleryElements).innerText;
var S=JSON.parse(R.replace(/\n/g,""));
this.data=S.map(W,{src:V.getAttribute("src"),srcset:V.getAttribute("srcset"),thumbSrc:T.getAttribute("data-thumb-src"),thumbSrcset:T.getAttribute("data-thumb-srcset")})
},initSlides:function J(){this.slides=Array(this.data.length);
this.slides[this.index]=this.currentItem;
this.preloadSlides(this.index);
if(this.onwardSlide){this.slides[this.data.length]=this.onwardSlide.firstElementChild
}},preloadSlides:function l(R){if(R>0){this.getSlide(R-1)
}if(R<this.slides.length-1){this.getSlide(R+1)
}},getSlide:function P(R){if(!this.slides[R]){this.slides[R]=this.createImageSlide(this.slideTemplate,this.data[R])
}return this.slides[R]
},createImageSlide:function p(U){var X=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var R=U.cloneNode(true);
R.setAttribute("data-url",X["slide-url"]||"");
R.setAttribute("data-title",X["image-title"]||"");
R.setAttribute("data-slide-index",X["slide-index"]||"");
var W=R.querySelector(this.config.galleryImageSelector);
W.setAttribute("data-image-ratio",X["image-ratio"]||"");
var Y=W.querySelector("img");
Y.setAttribute("src",X["image-src"]||"");
Y.setAttribute("srcset",X["image-srcset"]||"");
Y.setAttribute("alt",X["image-alt"]||"");
var T=R.querySelector(".gallery__subtitle > strong");
T.innerHTML=X["image-subtitle"]||"";
var S=R.querySelector(".gallery__caption");
S.innerHTML=X["image-caption"]||"";
var V=R.querySelector(".gallery__credits-credit");
V.innerHTML=X["image-credits"]||"";
return R
},initThumbs:function n(){var R=h.createDocumentFragment();
this.thumbs=this.data.map(this.createThumb,this);
this.thumbs.forEach(function(S){return R.appendChild(S)
});
this.thumbnailList.appendChild(R)
},createThumb:function s(S,R){var T=h.createElement("div");
T.innerHTML=this.parseTemplate(S,this.thumbTemplate);
T.firstChild.addEventListener("click",this.handleThumbClick(R).bind(this));
return T.firstChild
},handleThumbClick:function b(R){return function(S){S.preventDefault();
this.mpu.showNewAdvert({disableMobile:true});
this.handleSlides({index:R,backFromThumbnailView:true});
this.showImageView()
}
},initPagination:function t(){this.$paginationNumber.html(this.slides.length);
this.updatePagination(this.index)
},updatePagination:function c(R){this.$paginationCurrent.html(R+1)
},parseTemplate:function g(S,R){var T=R;
y.each(S,function(U,V){T=T.replace(RegExp("@{"+U+"}","g"),V)
});
return T
},createAdvertMpu:function a(){var S=this.$settingsContainer.data("gallery-ad-viewability");
var U=this.$settingsContainer.data("gallery-slides-per-ad");
var R=null;
if(y("#advert_tmg_mpu").length>0&&typeof tmgAdsBuildAd!=="undefined"){try{R=tmgAdsBuildAd("advert_tmg_mpu","","")
}catch(T){console.log(T)
}}this.mpu=new A({adViewability:S,slidesPerAd:U,advert:R})
},initNavigation:function z(){this.initSwitchingViews();
this.initNavigationArrows();
this.initKeyEvents();
this.initSwipingSlides()
},initKeyEvents:function O(){var R=this;
if(R.config.allowArrowKeys){y(h).on("keyup",function(T){var S=T.keyCode;
if(S===39){if(R.view===R.config.VIEWS.IMAGE){y(".gallery__arrow-right").trigger("click").focus()
}else{if(R.view===R.config.VIEWS.THUMBNAIL){y(".gallery__thumbnail-link:focus").closest(".gallery__thumbnail-item").next().find("a").focus()
}}}else{if(S===37){if(R.view===R.config.VIEWS.IMAGE){y(".gallery__arrow-left").trigger("click").focus()
}else{if(R.view===R.config.VIEWS.THUMBNAIL){y(".gallery__thumbnail-link:focus").closest(".gallery__thumbnail-item").prev().find("a").focus()
}}}}})
}},initUrl:function E(){var S=this;
var R=function R(T){if(T&&T.state){if(S.view===0){S.showImageView()
}S.handleSlides({index:T.state.index,sameUrl:true})
}};
I.addEventListener("popstate",R);
this.updateUrl(this.index)
},updateUrl:function q(S){if(this.data[S]&&I.history&&I.history.pushState&&!I.jasmine){var R=this.data[S]["slide-url"]||"";
h.title=this.data[S]["image-title"]||"";
I.history.pushState({index:S},"slide "+(S+1),R);
this.$canonicalMetaTag.attr("href",R)
}},initSwitchingViews:function d(){var R=this;
this.$backToImage.on("click",function(S){S.preventDefault();
R.mpu.showNewAdvert({disableMobile:true});
R.showImageView()
});
this.$viewAllButton.on("click",function(S){S.preventDefault();
R.mpu.showNewAdvert({disableMobile:true});
R.showThumbnailView()
})
},addAttribute:function x(T,S){var R;
for(R in S){if(R==="title"&&!this.config.useTitleAttributes){continue
}if(!T.attr(R)){T.attr(R,S[R])
}}},initNavigationArrows:function e(){var R=this;
if(this.index===0){this.$arrowLeft.addClass("disabled").attr("tabindex","-1")
}if(this.index>=this.slides.length-1){this.$arrowRight.addClass("disabled").attr("tabindex","-1")
}this.addAttribute(this.$arrowLeft,{title:this.$arrowLeft.find(".sr-only").text(),href:"#"});
this.addAttribute(this.$arrowRight,{title:this.$arrowRight.find(".sr-only").text()});
this.addAttribute(this.$viewAllButton,{title:this.$viewAllButton.text(),href:"#"});
this.addAttribute(this.$backToImage,{title:this.$backToImage.text(),href:"#"});
this.addAttribute(this.$skipAd,{title:this.$skipAd.text(),href:"#"});
this.$arrowLeft.click(function(S){S.preventDefault();
if(!y(this).hasClass("disabled")){R.handleSlides({index:R.index-1})
}});
this.$arrowRight.click(function(S){S.preventDefault();
if(!y(this).hasClass("disabled")){R.handleSlides({index:R.index+1})
}})
},initSwipingSlides:function Q(){var R=this;
w(this.galleryContent).on("swipeleft",function(){if(!R.$arrowRight.hasClass("disabled")){R.handleSlides({index:R.index+1})
}});
w(this.galleryContent).on("swiperight",function(){if(!R.$arrowLeft.hasClass("disabled")){R.handleSlides({index:R.index-1})
}})
},initSkippingAd:function m(){var R=this;
this.$skipAd.on("click",function(S){S.preventDefault();
R.handleSlides({index:R.index+(R.lastDirection==="forward"?1:-1)});
if(R.lastDirection==="forward"){R.$arrowRight.focus()
}else{R.$arrowLeft.focus()
}})
},handleSlides:function k(S){var T=S.sameUrl||S.backFromThumbnailView;
this.direction=this.lastIndex-S.index>0?"previous":"forward";
var R=this.compactAdvertVisible&&this.direction!==this.lastDirection;
this.$arrowLeft.removeClass("disabled").attr("tabindex","0");
this.$arrowRight.removeClass("disabled").attr("tabindex","0");
if(T){this.hideImage(this.index);
this.showImage(S);
this.handleLimits()
}else{switch(this.mpu.showNewAdvert()){case N.COMPACT:this.hideImage(this.index);
this.$viewAllButton.hide();
this.$pagination.hide();
this.$skipAd.show();
this.compactAdvertVisible=true;
y(h).trigger("slideChanged");
break;
case N.EXPANDED:this.showImage(S);
this.handleLimits();
break;
default:this.compactAdvertVisible=false;
if(R){this.showImage({index:this.index})
}else{this.showImage(S)
}this.$viewAllButton.show();
this.$pagination.show();
this.$skipAd.hide();
this.handleLimits();
break
}}this.lastIndex=this.index;
this.lastDirection=this.direction;
return true
},handleLimits:function v(){if(this.index===0){this.$arrowLeft.addClass("disabled").attr("tabindex","-1")
}if(this.index>=this.slides.length-1){this.$arrowRight.addClass("disabled").attr("tabindex","-1")
}},hideImage:function H(R){this.slides[R].classList.remove("active")
},showImageView:function j(){this.view=this.config.VIEWS.IMAGE;
this.$componentContent.removeClass("gallery__thumbnail-view-active");
this.$thumbnailView.attr("aria-hidden","true");
this.$imageView.attr("aria-hidden","false");
this.$viewAllButton.focus()
},showThumbnailView:function f(){var R=this;
this.view=this.config.VIEWS.THUMBNAIL;
if(!this.thumbs.length){this.initThumbs()
}this.$componentContent.addClass("gallery__thumbnail-view-active");
this.$imageView.attr("aria-hidden","true");
this.$thumbnailView.attr("aria-hidden","false");
this.thumbs.forEach(function(T,S){if(S===R.index){T.classList.add("active");
T.querySelector("a").focus()
}else{T.classList.remove("active")
}})
},isOnwardSlide:function K(R){return this.onwardSlide&&R===this.slides.length-1
},showImage:function C(T){var R=T.index;
if(R<0||R>this.slides.length-1){return
}while(this.galleryContent.firstChild){this.galleryContent.removeChild(this.galleryContent.firstChild)
}this.galleryContent.appendChild(this.getSlide(R));
this.currentItem=this.getSlide(R);
this.currentItem.classList.add("active");
this.setIndex(R);
this.preloadSlides(R);
this.updatePagination(R);
if(!this.isOnwardSlide(R)){var S=this.currentItem.querySelector(this.config.galleryImageSelector);
this.adjustImageWidth(S);
if(!T.sameUrl){this.updateUrl(R);
y(h).trigger("slideChanged")
}}},adjustImageWidth:function B(R){function S(V){if(!V.style.width){var U=V.getBoundingClientRect();
if(U.height>750){V.style.width=parseFloat(R.dataset.imageRatio)*750+"px"
}else{V.style.width="100%"
}}}var T=R.querySelector("img");
if(T.complete){S(T)
}else{T.onload=function(){return S(T)
}
}}};
var A=function A(R){this.config={};
this.advert=R.advert;
this.settings={adViewability:R.adViewability||5000,slidesPerAd:R.slidesPerAd||5};
this.init()
};
A.prototype={defaults:{component:".gallery__advert-mpu .advert",container:".gallery__advert-mpu",advert:".gallery__advert-mpu .ad"},init:function L(){this.config=y.extend({},this.defaults);
this.$container=y(this.config.container);
this.$component=y(this.config.component);
this.$advert=y(this.config.advert);
this.lastTime=new Date();
this.countClicks=1;
this.compactMode=false;
if(this.advert!=null){this.advert.display()
}},isExpanded:function o(){return !this.compactMode&&this.$container.is(":visible")
},displayAd:function M(){if(this.advert!=null){this.advert.refresh()
}this.lastTime=new Date()
},removeAd:function u(){this.$advert.empty()
},showNewAdvert:function G(R){if(this.isExpanded()){if(new Date()-this.lastTime>this.settings.adViewability){this.compactMode=false;
this.displayAd();
return N.EXPANDED
}}else{if(R&&R.disableMobile){return false
}if(this.countClicks>this.settings.slidesPerAd-1){this.compactMode=true;
this.displayAd();
this.countClicks=0;
this.$container.show();
return N.COMPACT
}this.compactMode=false;
this.$container.attr("style","");
this.removeAd();
this.countClicks++
}return false
}};
y.fn.telegraph_image_gallery=function(R){return this.each(function(){if(!y.data(this,"telegraph_image_gallery")){R.push(new D(this));
y.data(this,"telegraph_image_gallery",R[R.length-1])
}})
};
function L(){y(".gallery.component").telegraph_image_gallery([])
}y(h).ready(L);
y(h).on("tmg:page-loaded",L)
})(tmgJQ,window,document,Hammer);
(function(g,j){g.galleries=[];
var r=void 0;
var o=function o(s){this.container=s
};
o.prototype={selectors:{mainImageList:"grid-gallery__main-image-list",thumbnailsContainer:"grid-gallery__thumbnails-container",currentImageLabel:"grid-gallery-current",totalImagesLabel:"grid-gallery-total",galleryFooter:"grid-gallery-footer",thumbnailLink:"grid-gallery__thumbnail",prevLink:"grid-gallery__nav--prev",nextLink:"grid-gallery__nav--next"},galleryTrigger:"gallery-trigger",currentImageIndex:0,prevCurrentIndex:-1,canSlide:true,init:function r(){this.findDomElements();
this.maxImageIndex=this.thumbnails.length-1;
this.applyInitialStyles();
this.attachEvents();
return this
},findDomElements:function e(){var s=this;
Object.keys(this.selectors).map(function(u,t){s[u]=s.container.querySelectorAll("[data-js="+s.selectors[u]+"]")[0]
});
this.thumbnails=this.thumbnailsContainer.getElementsByTagName("li");
this.mainImages=this.mainImageList.getElementsByTagName("li");
this.galleryTrigger=j.querySelectorAll("[data-js="+this.galleryTrigger+"]")[0]||false
},applyInitialStyles:function b(){this.updateCurrentImage();
this.updateCurrentThumbnail();
this.updateCurrentImageLabel();
this.updateTotalImagesLabel();
this.galleryFooter.style.opacity=1
},attachEvents:function l(){var s=this;
if(this.thumbnailsContainer){[].forEach.call(this.thumbnails,function(t){t.addEventListener("click",s.onThumbnailClick.bind(s),false)
});
this.prevLink&&this.prevLink.addEventListener("click",this.onNavClick.bind(this),false);
this.nextLink&&this.nextLink.addEventListener("click",this.onNavClick.bind(this),false);
this.galleryTrigger&&this.galleryTrigger.addEventListener("click",this.onGalleryTriggerClick.bind(this),false)
}},setCurrentIndex:function f(s){if(!this.canSlide){return false
}this.delayNextSlide();
if(!s){this.currentImageIndex=0
}else{if(s<=this.maxImageIndex){this.currentImageIndex=s
}}this.updateCurrentThumbnail();
this.updateCurrentImage();
this.updateCurrentImageLabel();
this.updateTotalImagesLabel()
},updateCurrentThumbnail:function q(){var u=this;
var t="is-active";
var s=this.thumbnailsContainer.getElementsByClassName(t);
if(s.length>0){this.prevCurrentIndex=parseInt(s[0].getAttribute("data-thumbnail-id"),10);
s[0].classList.remove(t)
}[].forEach.call(this.thumbnails,function(w,v){if(v===u.currentImageIndex&&!w.classList.contains(t)){w.classList.add(t)
}})
},delayNextSlide:function d(){var s=this;
this.canSlide=false;
g.setTimeout(function(){s.canSlide=true
},500)
},updateCurrentImage:function a(){var s=this;
[].forEach.call(this.mainImages,function(u,t){if(t===s.currentImageIndex){u.style.zIndex=10;
u.style.opacity=1
}else{if(t===s.prevCurrentIndex){u.style.zIndex=5;
u.style.opacity=1
}else{u.style.zIndex=1;
u.style.opacity=0
}}if(t<s.currentImageIndex){u.style.marginLeft="-100%"
}else{if(t>s.currentImageIndex){u.style.marginLeft="100%"
}else{u.style.marginLeft=0
}}})
},updateCurrentImageLabel:function c(){this.currentImageLabel.innerHTML=this.currentImageIndex+1
},updateTotalImagesLabel:function h(){this.totalImagesLabel.innerHTML=this.maxImageIndex+1
},getGalleryPosition:function n(){var u=this.container;
var t=u.offsetTop;
var s=u;
while(s.offsetParent&&s.offsetParent!=j.body){s=s.offsetParent;
t+=s.offsetTop
}return t
},onThumbnailClick:function k(t){var s=parseInt(t.currentTarget.getAttribute("data-thumbnail-id"),10);
this.setCurrentIndex(s)
},onGalleryTriggerClick:function p(t){t.preventDefault();
var s=this.getGalleryPosition();
g.scroll(0,s)
},onNavClick:function m(s){s.preventDefault();
var t=parseInt(s.currentTarget.getAttribute("data-delta"),10)||0;
if(t===1&&this.currentImageIndex>=this.maxImageIndex){this.setCurrentIndex(0)
}else{if(t===-1&&this.currentImageIndex<=0){this.setCurrentIndex(this.maxImageIndex)
}else{this.setCurrentIndex(this.currentImageIndex+t)
}}}};
r=function r(){var s=j.querySelectorAll('[data-js="grid-gallery"]');
[].forEach.call(s,function(t,u){if(!g.galleries[u]){g.galleries[u]=new o(t).init()
}})
};
tmg.pageReady(r);
j.addEventListener("tmg:page-loaded",r())
})(window,document);
(function(b,d,f){var g=function g(l,k){this.$context=b(l);
if(!this.$context.hasClass("initialized")){this.init(k)
}};
g.prototype={defaults:function(){var k=".list-of-tags";
return{selectorShowMore:k+"__show-more",selectorItem:k+"__item",selectorSettings:".js-settings"}
}(),init:function j(k){this.findDomElements();
this.limit=k&&k.limit||this.getLimit()||this.$items.length;
if(this.limit<this.$items.length){this.$showMore.attr("aria-hidden","false")
}this.hideItemsAboveLimit();
b(this.$showMore).on("click",b.proxy(this.handleShowMore,this));
this.$context.addClass("initialized")
},findDomElements:function a(){this.$settings=this.$context.find(this.defaults.selectorSettings);
this.$showMore=this.$context.find(this.defaults.selectorShowMore);
this.$items=this.$context.find(this.defaults.selectorItem)
},getLimit:function h(){return this.$settings.data("limit")
},handleShowMore:function c(k){k.preventDefault();
this.$items.attr("aria-hidden","false");
this.$showMore.attr("aria-hidden","true")
},hideItemsAboveLimit:function e(){this.$items.slice(this.limit).attr("aria-hidden","true")
}};
function j(){if(!tmg.components){tmg.components={}
}tmg.components.ListOfTags={};
tmg.components.ListOfTags.init=function(){b(".list-of-tags").each(function(){if(!b.data(this,"ListOfTags")){b.data(this,"ListOfTags",new g(this))
}});
return this
};
tmg.components.ListOfTags.init()
}b(f).ready(j);
b(f).on("tmg:page-loaded",j)
})(tmgJQ,window,document);
(function(e,j,l){var o,h="telegraph_onOffToggler",k="js-tmg-toggler",f=h+"_init",c="."+k,a="js-button-is-on",d=".tmg-toggler__bar-button",b=null,n=function n(q,p){this.options=p;
this.elem=q;
this.$elem=e(q);
this.eventOn=this.$elem.data("on");
this.eventOff=this.$elem.data("off");
this.dataOptions=this.$elem.data("options");
this.dataOptions=this.dataOptions?e.parseJSON(this.dataOptions.replace(/'/g,'"')):{};
this.$botton=this.$elem.find(d);
b=this
};
n.prototype={defaults:{},init:function o(){this.options=e.extend({},this.defaults,this.dataOptions,this.options);
this.$botton.on("click",this.buttonClick);
this.triggerEvent(this.$botton);
return this
},triggerEvent:function m(p){if(p.hasClass(a)){e(l).trigger(b.eventOn)
}else{e(l).trigger(b.eventOff)
}},buttonClick:function g(q){q.preventDefault();
var p=e(this);
p.toggleClass(a);
b.triggerEvent(p)
}};
e.fn[h]=function(p){return this.each(function(){if(!e(this).data(h)){e(this).data(h,new n(this,p).init())
}})
};
e.fn[f]=function(){e(c)[h]()
};
o=function o(){e(c)[f]()
};
e(l).ready(o);
e(l).on("tmg:page-loaded",o)
})(tmgJQ,window,document);
(function(b,d,e){var m,c=function c(){this.init()
};
c.prototype={init:function m(){this.$loadMoreButton=b(".js-load-more__button");
if(this.$loadMoreButton.length>0){this.$loadMoreContainer=this.$loadMoreButton.parent();
this.$loadMoreList=this.$loadMoreButton.closest(".list.section").find(".js-list-of-entities__container");
this.loadMoreIndex=this.$loadMoreContainer.data("current-page-number");
this.loadMoreUrl=this.$loadMoreContainer.data("next-url");
this.wcm=b("body").hasClass("cq-wcm-edit");
this.preloaded=[];
this.retryNumber=0;
this.maxRetryNumber=2;
this.buttonDisabled=false;
this.classes={disabled:"disabled",listItem:"list-of-entities__item"};
this.setEvents();
this.btnDisable();
this.preloadMore()
}},setEvents:function f(){this.$loadMoreButton.on("click",b.proxy(this.clickEvent,this))
},clickEvent:function k(){if(!this.buttonDisabled){this.btnDisable();
this.loadMore()
}},btnDisable:function j(){this.buttonDisabled=true;
this.$loadMoreButton.addClass(this.classes.disabled)
},btnEnable:function l(){this.buttonDisabled=false;
this.$loadMoreButton.removeClass(this.classes.disabled)
},btnRemove:function h(){this.buttonDisabled=true;
this.$loadMoreContainer.remove()
},loadMore:function g(){if(this.preloaded[this.loadMoreIndex+1]){this.$loadMoreList.append(this.preloaded[this.loadMoreIndex+1]);
this.loadMoreIndex++;
this.preloadMore()
}},preloadMore:function a(){var o=this,n=o.loadMoreUrl+(o.loadMoreIndex+1);
if(this.wcm){n=n+".html"
}else{n=n+"/"
}b.ajax({url:n,method:"GET",timeout:10000,dataType:"html"}).done(function(p){var q=b(p).find("."+o.classes.listItem);
if(q.length>0){o.preloaded[o.loadMoreIndex+1]=q;
o.retryNumber=0;
o.btnEnable()
}else{o.btnRemove()
}b(".js-list-of-entities .responsive-image").each(function(){lzld(this)
})
}).fail(function(p){o.retryNumber++;
if(o.retryNumber<=o.maxRetryNumber){o.preloadMore()
}else{o.btnRemove()
}})
}};
b.fn.telegraph_pagination=function(){return this.each(function(){var n=b(this);
if(!n.data("tmg_loadMore")){n.data("tmg_loadMore",new c())
}})
};
m=function m(){b(".js-load-more__button").telegraph_pagination()
};
b(e).ready(m)
})(tmgJQ,window,document);
(function(a,j,e,d,g){var c="PremiumListFooter";
function h(){return d.CQ!==undefined
}function b(n,m){this.$element=a(n);
this.$links=this.$element.find("a[href]")
}b.prototype={init:function l(){if(!h()){this.displayFooter(this.isLoggedOut())
}this.$links.each(function(m,n){n.href=j.updateRedirectParam(n.href,g.location.href)
})
},isLoggedOut:function f(){return e.get("tmg_pid")===undefined
},displayFooter:function k(m){this.$element.toggleClass("is-visible",m).attr("aria-hidden",!m)
}};
function l(){a(".premium-list-footer").each(function(){var m=a(this).data();
if(!m[c]){m[c]=new b(this).init()
}})
}a(g).ready(l);
a(g).on("tmg:page-loaded",l)
})(tmgJQ,tmg,Cookies,window,document);
(function(e,b,c,a){var d="PremiumPaywall";
function g(j,h){this.$element=e(j);
this.$links=this.$element.find("a[href]")
}g.prototype={init:function f(){this.$links.each(function(h,j){j.href=b.updateRedirectParam(j.href,a.location.href)
})
}};
function f(){e(".premium-paywall").each(function(){var h=e(this).data();
if(!h[d]){h[d]=new g(this).init()
}})
}e(a).ready(f);
e(a).on("tmg:page-loaded",f)
})(tmgJQ,tmg,window,document);
(function(d,j,n,t){var f=function f(w,v,u){this.$map=d(w);
this.options=v;
this.translations=u;
this.markers=[];
this.positions=[];
this.infowindow;
this.styles=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{saturation:"-100"},{lightness:"-30"},{gamma:"1.00"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{lightness:"0"},{saturation:"-100"},{gamma:"1.00"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{lightness:"-4"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{saturation:"-100"},{lightness:"0"},{gamma:"1.00"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"},{weight:"1"},{saturation:"-80"},{lightness:"17"},{gamma:"1.2"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{lightness:"9"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{lightness:"0"},{gamma:"1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{lightness:"-43"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:"-90"},{lightness:"0"}]},{featureType:"transit.line",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{lightness:"-50"},{gamma:"1.00"},{visibility:"off"}]},{featureType:"transit.station.airport",elementType:"geometry",stylers:[{saturation:"-77"},{gamma:"1.79"},{lightness:"23"}]},{featureType:"transit.station.bus",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station.rail",elementType:"labels.icon",stylers:[{gamma:"1.00"},{lightness:"40"},{weight:"1"},{saturation:"-100"}]},{featureType:"water",elementType:"all",stylers:[{color:"#ccd7dc"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{visibility:"on"},{lightness:"-20"},{saturation:"-90"},{gamma:"1.00"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-39"},{saturation:"-100"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:"55"}]}];
this.travelGreen="#008385";
this.travelPurple="#86146e";
this.map;
this.infoboxHtmlTemplate=""
},q;
f.prototype={init:function p(){this.mapCanvasSelector=this.options.canvasSelector||".product-map__canvas";
this.mapCanvas=this.$map.find(this.mapCanvasSelector)[0];
this.$mapCanvas=d(this.mapCanvas);
this.infoboxHtmlTemplate=t.template(d(".product-map-popup").html());
this.popupCssClass=this.options.popupCssClass||"product-map__infobox-container";
this.initMap();
this.populateMap()
},mapIsExpanded:false,setMapExpansion:function c(u){this.mapIsExpanded=u;
this.fullScreenControl.toggleClass("product-map__fullscreen-button--expanded",u);
this.$mapCanvas.toggleClass("product-map__canvas--expanded",u);
if(this.mapIsExpanded){d(n).on("keyup",this.closeOnEscape)
}else{d(n).off("keyup",this.closeOnEscape)
}this.center=this.map.getCenter();
google.maps.event.trigger(this.map,"resize");
this.map.setCenter(this.center)
},closeOnEscapeUnbound:function e(u){if(u.keyCode===27){this.setMapExpansion(false);
u.stopImmediatePropagation()
}},initMap:function l(){var u=this;
var v={styles:u.styles,streetViewControl:false,scrollwheel:false,zoom:parseInt(u.options.zoom||16,10)};
u.fullScreenControl=d('<div class="product-map__fullscreen-button"></div>').attr({title:this.translations.fullscreenTitle||"Full screen"}).click(function(){u.setMapExpansion(!u.mapIsExpanded)
});
this.map=new google.maps.Map(u.mapCanvas,v);
this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(u.fullScreenControl[0]);
this.closeOnEscape=this.closeOnEscapeUnbound.bind(this);
this.setMapExpansion(false);
this.bounds=new google.maps.LatLngBounds();
d(this.mapCanvasSelector).on("click",function(){u.map.setOptions({scrollwheel:true})
});
d(j).on("hashchange",function(){u.isMapInHiddenTab()
})
},isMapInHiddenTab:function o(){var u=this,w=j.location.hash,v;
w=w.split("?")[0].substr(1);
v=w&&d(".tabs__container").find("#"+w).has(u.mapCanvasSelector).length>0;
if(v){u.correctMapDisplay();
u.isMapInHiddenTab=function(){}
}},correctMapDisplay:function h(v){var u=this,w;
v=v||200;
w=setTimeout(function(){google.maps.event.trigger(u.map,"resize");
if(u.markers.length>1){u.map.fitBounds(u.bounds)
}clearTimeout(w)
},v)
},populateMap:function r(){var u=this;
var w=n.querySelector(".js-product-map-marker");
var v=w?w.innerHTML:undefined;
if(this.options.label&&this.options.address&&this.options.lat&&this.options.lon){this.processItem(this.options)
}if(this.options.hotels){this.options.hotels.forEach(function(x){u.processItem(x)
})
}if(u.options.callingPoints){if(v&&n.querySelector(".luxuryTourRenderer",".partnerTourRenderer")){u.options.callingPoints.forEach(function(x){x.icon={anchor:new google.maps.Point(23,37),url:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(v)};
u.processItem(x)
})
}this.createPath(this.positions)
}if(this.markers.length>1){this.map.fitBounds(this.bounds);
this.correctMapDisplay(1000)
}},processItem:function b(y){var x=this,u=this.createPosition(y.lat,y.lon),w=this.createMarker(u,y),v;
if(y.label&&y.address){w.clickable=true;
v=this.createPopup(y);
w.addListener("click",function(){if(x.infowindow){x.infowindow.close()
}x.infowindow=v;
d.proxy(x.infowindow.open(x.map,w))
})
}this.bounds.extend(u);
if(this.markers.length===1){this.map.setCenter(u)
}w.setMap(this.map)
},createMarker:function a(u,x){var w={path:google.maps.SymbolPath.CIRCLE,fillColor:this.travelGreen,fillOpacity:1,scale:11,strokeColor:"#fff",strokeWeight:2},z={position:u,draggable:false,raiseOnDrag:false,clickable:true,icon:w};
var v;
var y=d("body");
if(x.icon&&(y.hasClass("luxuryTourRenderer")||y.hasClass("partnerTourRenderer"))){z.icon=x.icon
}if(x.title){z.title=x.title
}v=new google.maps.Marker(z);
this.markers.push(v);
return v
},createPosition:function m(w,v){var u;
w=parseFloat(w);
v=parseFloat(v);
u=new google.maps.LatLng(w,v);
this.positions.push(u);
return u
},createPopup:function k(u){var v=this.processTemplate(u);
return new InfoBox({content:v,boxClass:this.popupCssClass,pixelOffset:new google.maps.Size(-157,-26),closeBoxMargin:"12px 10px 0 0",closeBoxURL:"data:image/gif;charset=utf-8;base64,R0lGODlhDgANAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA0YWQ4ZjdiLTBmMjUtNDczNS1hMWUxLTcyOTQ1NGE3MDA3NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTVDNTRGMDM4RkExMUU1QUQwOThBNzhFMTRFMjAyRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTVDNTRFRjM4RkExMUU1QUQwOThBNzhFMTRFMjAyRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0YWQ4ZjdiLTBmMjUtNDczNS1hMWUxLTcyOTQ1NGE3MDA3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNGFkOGY3Yi0wZjI1LTQ3MzUtYTFlMS03Mjk0NTRhNzAwNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAAACwAAAAADgANAAACDISPqcvtD6OctNpXAAA7",alignBottom:true})
},createPath:function s(u){var v=d("body");
var w=new google.maps.Polyline({path:u,strokeColor:v.hasClass("luxuryTourRenderer")||v.hasClass("partnerTourRenderer")?this.travelPurple:this.travelGreen,strokeOpacity:0.8,strokeWeight:1,clickable:false});
w.setMap(this.map);
return w
},processTemplate:function g(v){var u={title:v.label,content:v.address,url:v.url};
return this.infoboxHtmlTemplate(u)
}};
d.fn.telegraph_product_map=function(){q=d(".js-product-map");
q.each(function(){var B=d(this),E,G,w,x,u,F,A,D=d.Deferred(),y=d.Deferred(),z,C=d(".travelCallingPoint");
if(!B.data("telegraph_product_map")){z=B.find(".js-component-content");
w=z.data("translations");
x=typeof w==="string"?d.parseJSON(w.replace(/'/g,'"')):w||{};
E=z.data("options");
G=typeof E==="string"?d.parseJSON(E.replace(/'/g,'"')):E||{};
u=new f(B,G,x);
F="/etc/designs/telegraph/core/clientlibs/tmgchannels/travel/libs/infobox-v1.1.13.min.js";
A=z.data("product-url");
B.data("telegraph_product_map",u)
}if(C.length>0){G.callingPoints=[];
C.each(function(K,J){var I=d(this);
var M=I.find("[data-product-long]");
var N=M.attr("data-product-long");
var L=M.attr("data-product-lat");
var H=I.find('[itemprop="name"]').text();
if(L&&N){G.callingPoints.push({lat:L,lon:N,htmlContent:"",title:H})
}})
}if(A){d.getJSON(A,function(H){G.hotels=H;
y.resolve()
})
}else{y.resolve()
}yepnope({load:F,complete:function v(){D.resolve()
}});
d.when(y,D).done(function(){u.init()
})
})
}
})(tmgJQ,window,document,_);
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(a){return typeof a
}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a
};
(function(g,l,v,H){var B,z=function z(J,I){this.$openButton=g(J);
this.options=I
};
z.prototype={defaults:{imageWidth:170,animDuration:600,startImageIndex:0,infiniteLoop:true,activeClass:"is-active",selectors:{mainImageClass:".product-gallery__main-image",overlayClass:".tmg-modal-overlay",backdropClass:".tmg-modal-backdrop",overlayWrapper:".product-gallery__wrapper",galleryContainer:".product-gallery__container",gallery:".tmg-modal-overlay .product-gallery",thumbnailBar:".product-gallery__thumbnails-bar",thumbnailLink:".js-product-gallery__thumbnail",thumbnailContainer:".product-gallery__thumbnails-container",thumbnail:".product-gallery__thumbnail",activeThumbnail:".is-active",navContainer:".product-gallery__nav",prevLink:".js-product-gallery-prev",nextLink:".js-product-gallery-next",totalCount:".js-product-gallery-total",captionText:".js-product-gallery-caption",currentText:".js-product-gallery-current"}},currentImageIndex:null,startingLeftPosCSS:0,totalImagesWidth:0,$galleryElement:null,$thumbBar:null,init:function B(){this.options=g.extend({},this.defaults,this.options);
this.selectors=this.options.selectors;
this.findDomElements();
this.attachEvents();
this.$galleryElementContainer.hide();
return this
},findDomElements:function d(){this.$galleryElementContainer=g(this.selectors.galleryContainer)
},attachEvents:function C(){this.$openButton.on("click",g.proxy(this.openModal,this))
},initModal:function p(){var I;
this.findModalDomElements();
this.attachModalEvents();
this.$galleryElement.focus();
g(this.selectors.overlayClass).attr("aria-hidden",false);
this.totalImagesWidth=this.getTotalWidth();
this.setTotalImages();
this.startImageIndex=this.options.startImageIndex;
this.displayNav();
this.infiniteLoop=this.getInfiniteLoop();
if(this.infiniteLoop){this.setupInfiniteLoop()
}this.currentImageIndex=this.startImageIndex;
I=this.$thumbBar.find(".is-active");
if(this.infiniteLoop){I.removeClass("is-active");
I.removeAttr("aria-labels");
this.$currentThumbnail=g(I[2])
}else{this.$currentThumbnail=g(I[0])
}this.setActive(this.$currentThumbnail);
this.setAriaHidden();
this.setTotalText();
this.setCountText(this.currentImageIndex)
},findModalDomElements:function f(){this.$galleryElement=g(this.selectors.gallery);
this.$thumbBar=this.$galleryElement.find(this.selectors.thumbnailBar)
},attachModalEvents:function A(){var M=g(v),J=this.selectors.prevLink,I=this.selectors.nextLink,K=J+", "+I,L=g(this.selectors.mainImageClass);
M.on("click",this.selectors.thumbnailLink,g.proxy(this.onClickThumb,this));
M.on("click",K,g.proxy(this.onClickNav,this));
L.hammer({}).bind("swiperight",function(N){tmgJQ(J).click()
});
L.hammer({}).bind("swipeleft",function(N){tmgJQ(I).click()
})
},getTotalWidth:function m(){var I=this.$thumbBar.find("li"),J=0;
for(var K=0;
K<I.length;
K++){J+=g(I[K]).outerWidth(true)
}return J
},setTotalImages:function n(){this.totalImages=this.$thumbBar.find("li").length
},displayNav:function k(){if(this.$thumbBar.find("li").length===1){g(this.selectors.navContainer).hide()
}},getInfiniteLoop:function x(){var J=g(this.selectors.thumbnailContainer),I;
if(this.totalImagesWidth>J.outerWidth(true)){I=true
}else{J.addClass("is-finite");
I=false
}return I
},setupInfiniteLoop:function w(){var M=this.$thumbBar.find("li:first"),L=this.$thumbBar.find("li:last"),N=this.$thumbBar.closest(this.selectors.thumbnailContainer),J=N.outerWidth(true)/2,K=0,I;
M.before(this.$thumbBar.children().clone(true));
L.after(this.$thumbBar.children().clone(true));
K=this.totalImagesWidth*2;
K-=J;
K+=M.width()/2;
this.startingLeftPosCSS="-"+K+"px";
this.$thumbBar.css("left",this.startingLeftPosCSS)
},setAriaHidden:function h(){var I;
this.$thumbBar.find("li").each(function(J,K){I=J>4?true:false;
g(K).attr("aria-hidden",I)
})
},setAriaLabelledBy:function b(K){var J=this.selectors.mainImageClass,I=this.$galleryElement.find(J);
I.attr("aria-labelledby",K.attr("id"));
K.attr("aria-labels",J)
},setTotalText:function e(){var I=this.$galleryElement.find(this.selectors.totalCount);
I.text(this.totalImages)
},onClickThumb:function y(K){if(this.scrolling){return
}var L=g(K.currentTarget).find("img"),J=L.closest("li"),I=J.data("thumbnail-index"),M=I-this.currentImageIndex;
if(M===this.totalImages-1){M=-1
}if(M===this.totalImages-2){M=-2
}if(M===this.totalImages-3){M=-3
}if(M===-Math.abs(this.totalImages-1)){M=1
}if(M===-Math.abs(this.totalImages-2)){M=2
}if(M===-Math.abs(this.totalImages-3)){M=3
}this.handleImageSwap(L[0],M)
},onClickNav:function D(M){if(this.scrolling){return
}var L=this.getNavDirection(g(M.currentTarget)),K,J,I;
K=this.getNewImageIndex(L);
I=this.getNewThumbnail(K);
if(this.infiniteLoop){if(L==1){J=I[2]
}else{J=I[1]
}}else{J=I
}this.handleImageSwap(J,L);
if((typeof _satellite==="undefined"?"undefined":_typeof(_satellite))==="object"&&typeof _satellite.track==="function"){_satellite.track("customPageLoad")
}},getNewImageIndex:function s(M){var K,L=this.currentImageIndex,I=L===0&&M===-1,J=L===this.totalImages&&M===1;
if(I){K=this.totalImages-1
}else{if(J){K=1
}else{K=L+M
}}if(K===this.totalImages){K=0
}return K
},getNewThumbnail:function t(K){var J=this.$thumbBar,I=this.getThumbnailAtIndex(J,K);
return I.find("img")
},getNavDirection:function E(I){return I.data("delta")
},handleImageSwap:function r(I,M){var K=g(I),L=K.closest("li"),J=L.data("thumbnail-index");
if(this.infiniteLoop){this.addInfiniteImage(M,L)
}this.setActive(L);
this.setImage(K,L);
this.setCountText(J);
this.setCaption(J);
this.setAriaHidden();
this.setAriaLabelledBy(L);
this.setCurrentImageIndex(J)
},setImage:function a(L,M){var K=L.data("frz-src-array"),J=this.$galleryElement.find(".product-gallery__main-image img"),I;
J.data("frz-src-array",K);
J.attr("src",L.attr("src"));
I=J;
I.data("lazyLoaded",false)
},setCurrentImageIndex:function c(I){this.currentImageIndex=I
},setActive:function G(M){var I=this.options.activeClass,L=this.$currentThumbnail,J=this.getThumbnailAtIndex(this.$thumbBar,this.$currentThumbnail.data("thumbnail-index")),K;
this.$currentThumbnail.removeAttr("aria-labels");
J.each(function(O,N){g(N).removeClass("is-active")
});
this.$currentThumbnail=M;
K=this.getThumbnailAtIndex(this.$thumbBar,M.data("thumbnail-index"));
K.each(function(O,N){g(N).addClass("is-active")
})
},setCaption:function o(J){var K="",I=this.getThumbnailAtIndex(this.$thumbBar,J),L=I.find("img").data("caption");
if(typeof L==="undefined"){L=K
}g(this.selectors.captionText).first().text(L)
},addInfiniteImage:function u(Y,R){if(this.$thumbBar.is(":animated")){return
}var U=this,I=this.$thumbBar,N=R,T=I.closest(this.selectors.thumbnailContainer),P=I.find("li"),W=this.totalImages,Q=null,M=this.options.imageWidth,K=this.options.animDuration,J,O=false,X=g(N).outerWidth(true),aa=g(N).prev().outerWidth(true),S=X/2+aa/2,Z,L,V;
if(Y>0){Z=1
}else{Z=-1
}L=-Math.abs(S)*Y,V="+="+-Math.abs(L)*Z;
this.scrolling=true;
if(this.currentImageIndex===this.totalImages){Q=0
}else{Q=this.currentImageIndex+1
}I.animate({left:V},K,function(){Q+=Y;
O=!!(Q===0||Q>W);
if(O){this.currentImageIndex=Q===0?W-1:1;
if(Y===1){J=U.startingLeftPosCSS
}else{J=parseInt(U.startingLeftPosCSS,10)+M
}I.css({left:J})
}U.scrolling=false
})
},getThumbnailAtIndex:function F(J,I){var K=J.find("li[data-thumbnail-index='"+I+"']");
return K
},setCountText:function q(I){g(this.selectors.currentText).text(I+1)
},openModal:function j(){var K=this;
K.$galleryElementContainer.modal("open",{templateBeforeCallback:function I(M){var L=g(K.selectors.overlayWrapper),N=L.html();
this.config.content=N;
this.config.fadeSpeed="fast";
g(".container, .container-fluid").hide().attr("aria-hidden",true).attr("tabindex","-1");
g("#imageGallery").hide()
},closeAfterCallback:function J(L){g(".container, .container-fluid").show().attr("aria-hidden",false).attr("tabindex","0");
g("#imageGallery").show();
K.$openButton.focus()
}});
this.initModal();
if((typeof _satellite==="undefined"?"undefined":_typeof(_satellite))==="object"&&typeof _satellite.track==="function"){_satellite.track("customPageLoad")
}}};
g.fn.telegraph_product_image_gallery=function(I){return this.each(function(){if(!g.data(this,"telegraph_product_image_gallery")){g.data(this,"telegraph_product_image_gallery",new z(this,I).init())
}})
};
B=function B(){g(".js-product-gallery-launch").each(function(){var I=g(this);
I.telegraph_product_image_gallery(I.data("options")?g.parseJSON(I.data("options").replace(/'/g,'"')):{})
})
};
g(v).ready(B);
g(v).on("tmg:page-loaded",B)
})(tmgJQ,window,document,Hammer);
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(a){return typeof a
}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a
};
(function(e,h,s){var w,F=h._;
var b=function b(G,H){this.$el=G;
this.defaults={jsonReference:"",selectors:{container:".js-product-search",searchInput:".js-search-input",cancelBtn:".js-cancel-button",tabItems:".js-tabs li",tabContent:".js-tab-content",tabContentItems:".js-tab-content-item",autocompleteItems:".js-autocomplete-items",destinationList:".tab-0 ul",hotelList:".tab-2 ul",articleList:".tab-1 ul",tourList:".tab-3 ul",filterList:".js-filtered-list",resultListItems:".js-tab-content-item li",selectedItem:".js-tab-content-item li.selected",selectedItemLink:".js-tab-content-item li.selected a",viewAllLabel:".js-product-search-view-all-label",noResultsDestinations:".js-product-search-no-results-tab-0-text",noResultsArticles:".js-product-search-no-results-tab-1-text",noResultsHotels:".js-product-search-no-results-tab-2-text",noResultsTours:".js-product-search-no-results-tab-3-text",errorText:".js-product-search-error-text",imageFig:".js-image-figure",imageHeading:".js-image-heading"},classNames:{fullscreen:"product-search--fullscreen",selected:"selected",hidden:"js-hidden",noresults:"product-search__item--no-results",fadeOut:"fade--out",noScroll:"noscroll"},searchTypes:{all:0,hotels:2,articles:1,tours:3},templates:{hotel:"telegraph/core/commons/renderers/hotelRenderer",article:"telegraph/core/commons/renderers/articleRenderer2",destination:"telegraph/core/commons/renderers/destinationRenderer",hotelListing:"telegraph/core/commons/renderers/hotelsListingRenderer"},lastSearch:"",minLimit:5,maxLimit:20,keyAccessIndex:-1,active:false,inFocus:false};
this.options=e.extend({},this.defaults,H)
},r;
b.prototype={defaults:{},init:function w(){this.isMobile=this.isMobileCheck();
this.searchResultHandler=F.bind(this.handleSearchResultsDesktop,this);
this.searchType=this.options.searchTypes.all;
this.$els={};
F.each(this.options.selectors,function(H,G){this.$els[G]=e(H)
},this);
this.addEventListeners();
this.dynamicPlaceholder();
return this
},addEventListeners:function j(){this.$els.searchInput.on("keydown",this.handleKeyDown);
this.$els.searchInput.on("keyup",F.bind(this.handleSearch,this));
this.$els.searchInput.on("focus",F.bind(this.handleInputFocus,this));
this.$els.searchInput.on("blur",F.bind(this.handleInputBlur,this));
this.$els.cancelBtn.on("click",F.bind(this.exitMobileView,this));
e(s).on("mouseup",F.bind(this.handleMouseUp,this));
this.$els.tabItems.on("click",F.bind(this.handleTabClick,this));
this.$els.tabItems.on("focus",F.bind(this.handleTabClick,this));
e(h).resize(F.bind(this.handleResize,this))
},handleKeyDown:function l(G){if(G.keyCode===13){G.preventDefault();
return false
}},handleMouseUp:function m(H){var G=this.$els.container;
if(!this.options.active){return
}if(!G.is(H.target)&&G.has(H.target).length===0){this.closeSearch()
}},handleInputFocus:function t(G){if(this.isMobile){this.enterMobileView()
}this.options.inFocus=true;
this.handleKeyStroke(G);
e("html, body").animate({scrollTop:this.$els.searchInput.offset().top-30},600)
},handleInputBlur:function g(){this.options.inFocus=false
},isMobileCheck:function B(){var G=h.innerWidth||s.body.clientWidth;
return G<730
},dynamicPlaceholder:function c(){var G=this.$els.searchInput.data("search-placeholder"),H=this.$els.searchInput.data("search-mobile-placeholder");
if(!this.isMobile){this.$els.searchInput.attr("placeholder",G)
}else{this.$els.searchInput.attr("placeholder",H)
}},handleResize:F.debounce(function(){var H=h.innerHeight||s.body.clientHeight,I=H-this.$els.container.offset().top-60,G=this.isMobile;
this.$els.tabContent.css({"max-height":I+"px"});
this.isMobile=this.isMobileCheck();
this.dynamicPlaceholder();
if(this.options.active||this.options.inFocus){if(this.isMobile&&!G){this.enterMobileView()
}else{if(G&&!this.isMobile){this.exitMobileView();
this.openSearch()
}}}},250),handleSearch:function n(G){switch(G.keyCode){case 13:this.handleReturnKey(G);
break;
case 27:this.handleEscapeKey(G);
break;
case 38:this.handleUpKey(G);
break;
case 40:this.handleDownKey(G);
break;
default:this.handleKeyStroke(G);
break
}},handleDownKey:function A(){var G=e(this.options.selectors.resultListItems);
this.options.keyAccessIndex=this.options.keyAccessIndex>=G.length-1?0:this.options.keyAccessIndex+1;
G.removeClass(this.options.classNames.selected);
G.eq(this.options.keyAccessIndex).addClass(this.options.classNames.selected)
},handleUpKey:function z(){var G=e(this.options.selectors.resultListItems);
this.options.keyAccessIndex=this.options.keyAccessIndex<=0?G.length-1:this.options.keyAccessIndex-1;
G.removeClass(this.options.classNames.selected);
G.eq(this.options.keyAccessIndex).addClass(this.options.classNames.selected)
},handleReturnKey:function y(){if(e(this.options.selectors.selectedItem).length>0){h.location=e(this.options.selectors.selectedItemLink).attr("href")
}},handleEscapeKey:function o(){this.options.keyAccessIndex=-1;
this.closeSearch()
},handleKeyStroke:function a(G){this.options.lastSearch=G.currentTarget.value;
this.runSearch(this.options.lastSearch)
},runSearch:F.debounce(function(K){var G=this.searchType===this.options.searchTypes.all?this.options.minLimit:this.options.maxLimit,I=e(this.options.selectors.tabItems+":first-child").data("id"),H=this,J;
if(!K){K=this.options.lastSearch
}if(this.options.jsonReference!==null,this.options.jsonReference!==""){this.options.jsonReference.abort()
}this.$els.autocompleteItems.find(this.$els.filterList).addClass(this.options.classNames.fadeOut);
this.options.jsonReference=e.getJSON(this.$els.container.data("product-search-url")+"?q="+K+"&type="+this.searchType+"&limit="+G,function(L){H.searchResultHandler(L)
}).done(function(L){H.searchResultHandler(L)
}).fail(function(){J={error:H.$els.errorText.data("product-search-error-text")};
H.searchResultHandler(J)
}).always(function(){})
},330),openSearch:function E(){if(!this.isMobile||this.$els.container.hasClass(this.options.classNames.fullscreen)){this.options.active=true;
this.$els.autocompleteItems.delay(200).slideDown(300,"swing");
if((typeof _satellite==="undefined"?"undefined":_typeof(_satellite))==="object"&&typeof _satellite.track==="function"){_satellite.track("SearchOpen")
}}},closeSearch:function D(H){var G=H?0:300;
this.options.active=false;
this.$els.autocompleteItems.delay(0).slideUp(G,"swing")
},handleTabClick:function C(G){this.changeTab(G.target.getAttribute("data-id"))
},changeTab:function x(H){var G=e('.js-tabs li[data-id="'+H+'"]');
e(this.$els.autocompleteItems).find(this.$els.filterList).addClass(this.options.classNames.fadeOut);
this.$els.tabItems.removeClass(this.options.classNames.selected);
G.addClass(this.options.classNames.selected);
if(H==="0"){this.$els.tabContentItems.removeClass(this.options.classNames.hidden);
this.searchType=this.options.searchTypes.all
}else{if(H==="2"){this.$els.tabContentItems.addClass(this.options.classNames.hidden);
e(".tab-"+H).removeClass(this.options.classNames.hidden);
this.searchType=this.options.searchTypes.hotels
}else{if(H==="1"){this.$els.tabContentItems.addClass(this.options.classNames.hidden);
e(".tab-"+H).removeClass(this.options.classNames.hidden);
this.searchType=this.options.searchTypes.articles
}else{if(H==="3"){this.$els.tabContentItems.addClass(this.options.classNames.hidden);
e(".tab-"+H).removeClass(this.options.classNames.hidden);
this.searchType=this.options.searchTypes.tours
}}}}this.runSearch(this.options.lastSearch)
},enterMobileView:function v(){this.$els.container.addClass(this.options.classNames.fullscreen);
e("body").addClass(this.options.classNames.noScroll)
},exitMobileView:function q(){this.$els.container.removeClass(this.options.classNames.fullscreen);
this.closeSearch(true);
e("body").removeClass(this.options.classNames.noScroll)
},emptyResultsContent:function k(){e(this.$els.autocompleteItems).find(this.$els.filterList).empty()
},handleSearchResultsDesktop:function d(J){var O=J,L={destinations:[],articles:[],hotels:[],hotelDestinations:[],hotelsListing:[],tours:[],hotelsUrl:[]},G={destinations:s.createDocumentFragment(),articles:s.createDocumentFragment(),hotels:s.createDocumentFragment(),hotelsListing:s.createDocumentFragment(),tours:s.createDocumentFragment()},N=new RegExp(this.options.lastSearch,"gi"),K,I,M,H;
if(J.error){}else{if(this.options.active){if(this.options.lastSearch.length<3){this.closeSearch()
}}else{if(this.options.lastSearch.length>2){this.openSearch()
}}this.emptyResultsContent();
e(this.$els.autocompleteItems).find(this.$els.filterList).removeClass(this.options.classNames.fadeOut);
F.map(O,function(Q,P){I=Q.headline,M=Q.geoLocalisationHint;
if(I&&I.length>0){I=this.replaceWithBold(N,I)
}if(M&&M.length>0){K=this.replaceWithBold(N,M);
I='<span class="headline">'+I+',</span> <span class="geoLoc">'+K+"</span>"
}H={headline:I,link:Q.uri,href:Q.url};
switch(Q.template){case this.options.templates.destination:L.destinations.push(Q);
G.destinations.appendChild(this.createListElement(H));
break;
case this.options.templates.article:L.articles.push(Q);
G.articles.appendChild(this.createListElement(H));
break;
case this.options.templates.hotel:L.hotels.push(Q);
L.hotelDestinations.push(Q.geoLocalisationHint);
break;
case this.options.templates.hotelListing:L.hotelsListing.push(Q);
break;
case this.options.templates.tours:L.tours.push(Q);
G.tours.appendChild(this.createListElement(H));
break
}},this);
F.each(L.hotelsListing,function(Q,P){G.hotels.appendChild(this.createListElement({headline:this.$els.viewAllLabel.data("product-search-view-all-label")+" "+Q.geoLocalisationHint,customClass:"product-search__result-view-all",href:Q.url}))
},this);
F.each(L.hotels,function(Q,P){I=Q.headline,M=Q.geoLocalisationHint;
if(M&&M.length>0){K=this.replaceWithBold(N,M);
I=I+', <span class="geoLoc">'+K+"</span>"
}G.hotels.appendChild(this.createListElement({headline:I,link:Q.uri,href:Q.url}))
},this);
if(L.destinations.length<1){G.destinations.appendChild(this.createNoResultsElement(this.$els.noResultsDestinations.data("product-search-no-results-text")))
}if(L.hotels.length<1){G.hotels.appendChild(this.createNoResultsElement(this.$els.noResultsHotels.data("product-search-no-results-text")))
}if(L.articles.length<1){G.articles.appendChild(this.createNoResultsElement(this.$els.noResultsArticles.data("product-search-no-results-text")))
}if(L.tours.length<1){G.tours.appendChild(this.createNoResultsElement(this.$els.noResultsTours.data("product-search-no-results-text")))
}this.$els.destinationList.append(G.destinations);
this.$els.hotelList.append(G.hotels);
this.$els.articleList.append(G.articles);
this.$els.tourList.append(G.tours)
}},createListElement:function u(G){var H=s.createElement("li");
H.className="product-search__tab-content-list-item";
if(G.customClass){H.className=G.customClass
}e(H).append('<a class="product-search__tab-content-link" href="'+G.href+'">'+G.headline+"</a>");
return H
},createNoResultsElement:function f(H){var G=s.createElement("li");
G.className=this.options.classNames.noresults;
e(G).append(H);
return G
},replaceWithBold:function p(G,H){return H.replace(G,function(I){return"<strong>"+I+"</strong>"
})
}};
e.fn.telegraph_product_search=function(G){return this.each(function(){if(!e.data(this,"telegraph_product_search")){e.data(this,"telegraph_product_search",new b(this,G).init())
}})
};
w=function w(){e(".js-product-search").each(function(){var G=e(this);
if(!e.data(this,"telegraph_product_search")){e.data(this,"telegraph_product_search",G.telegraph_product_search(G.data("options")?e.parseJSON(G.data("options").replace(/'/g,'"')):{}))
}})
};
e(s).ready(w);
e(s).on("tmg:page-loaded",w)
})(tmgJQ,window,document);
(function(b){b.extend(b.fn,{telegraph_sectionNavigation:function a(e,g,f){var j=this,h={},k={resizeDelay:100,closeOnExernalClick:true,foldedMenuClass:"has-folded-items",foldedItemClass:"is-folded",activeClass:"is-active",hasFoldedItemLabel:"hasFoldedItem",isActiveLabel:"isActive",clicked:0,keyCode:{ESCAPE:27,ENTER:13},debug:function(){var l=false;
try{l=window.location.search.indexOf("debug")>-1&&window.console?true:false
}catch(m){}return l
}()},d=b.extend(k,f);
d.index=e;
j.$el=b(g);
j.el=g;
if(j.$el.data("tmg.sectionNavigation")){return j.$el.data("tmg.sectionNavigation")
}j.init=function(){j.$el.data(d.isActiveLabel,false);
j.findDomElements();
j.attachEvents();
j.updatePopupNavigation();
return j
};
j.findDomElements=function(){h.$main=j.$el.find(".js-section-navigation-main-container");
h.$mainItems=h.$main.find(".js-section-navigation-main-item");
h.$control=j.$el.find(".js-section-navigation-popup-control");
h.$popup=j.$el.find(".js-section-navigation-popup-container");
h.$popupItems=h.$popup.find(".js-section-navigation-popup-item")
};
j.showPopupControl=function(){if(j.$el.data(d.hasFoldedItemLabel)){h.$main.addClass(d.foldedMenuClass);
h.$control.addClass(d.foldedMenuClass)
}else{h.$main.removeClass(d.foldedMenuClass);
h.$control.removeClass(d.foldedMenuClass);
j.closePopupMenu()
}};
j.checkFoldedItemStatus=function(l,m){if(b(m).position().top===0){b(h.$popupItems.get(l)).removeClass(d.foldedItemClass);
j.log("Menu element "+l+" is visible ")
}else{j.log("Menu element "+l+" is folded ");
j.$el.data(d.hasFoldedItemLabel,true);
b(h.$popupItems.get(l)).addClass(d.foldedItemClass)
}};
j.updatePopupNavigation=function(){j.$el.data(d.hasFoldedItemLabel,false);
h.$mainItems.each(function(l,m){j.checkFoldedItemStatus(l,m)
});
j.showPopupControl()
};
j.togglePopupMenu=function(){if(j.$el.data(d.isActiveLabel)){j.closePopupMenu()
}else{j.openPopupMenu();
if(d.debug){d.clicked++;
j.log("Menu "+d.index+"; was opened "+d.clicked+" times")
}}};
j.log=function(l){if(d.debug){window.console.log(l)
}};
j.openPopupMenu=function(){h.$control.addClass(d.activeClass);
h.$popup.addClass(d.activeClass);
j.$el.data(d.isActiveLabel,true);
b(document).bind("keyup",j.onEsc)
};
j.closePopupMenu=function(){h.$control.removeClass(d.activeClass);
h.$popup.removeClass(d.activeClass);
j.$el.data(d.isActiveLabel,false);
b(document).unbind("keyup",j.onEsc)
};
j.onEsc=function(l){if(l.keyCode===d.keyCode.ESCAPE){j.closePopupMenu()
}};
j.attachEvents=function(){b(window).resize(function(){clearTimeout(b.data(j.$el,"resizeTimer"));
b.data(j.$el,"resizeTimer",setTimeout(function(){j.updatePopupNavigation()
},d.resizeDelay))
});
h.$control.on("click",function(l){if(d.closeOnExernalClick){l.stopPropagation()
}j.togglePopupMenu()
});
h.$control.bind("keypress",function(l){if(l.keyCode===d.keyCode.ENTER){j.togglePopupMenu()
}});
if(d.closeOnExernalClick){b(document).click(function(){j.closePopupMenu()
})
}};
j.$el.data("tmg.sectionNavigation",j);
return j.init()
}});
var c=function c(){b(".section-navigation").each(function(e,g){var f=b(g),d;
if(!b.data(g,"telegraph_sectionNavigation")){d=f.data("options")?b.parseJSON(f.data("options").replace(/'/g,'"')):{};
b.data(g,"telegraph_sectionNavigation",f.telegraph_sectionNavigation(e,g,d))
}})
};
b(document).ready(c);
b(document).on("tmg:page-loaded",c)
})(window.tmgJQ);
(function(e,g,j){var l,f="Segment",a=function a(n,m){this.$context=e(n);
if(!this.$context.hasClass("initialized")){this.init(m)
}};
a.prototype={defaults:function(){var m=".segment-container";
return{selectorSwitchButton:m+"__switch-button",selectorItemsWitSublist:m+"__navigation-list-item--has-sublist",selectorNavigation:m+"__navigation",selectorContent:m+"__content"}
}(),init:function l(m){this.findDomElements();
this.$switchButton.on("click",e.proxy(this.toggleContentClick,this));
this.$itemsWitSublist.on("click",e.proxy(this.toggleSublistClick,this));
this.$context.addClass("initialized");
this.isMobile=e("html").hasClass("ua-mobile")
},findDomElements:function c(){this.$switchButton=this.$context.find(this.defaults.selectorSwitchButton);
this.$itemsWitSublist=this.$context.find(this.defaults.selectorItemsWitSublist);
this.$navigation=this.$context.find(this.defaults.selectorNavigation);
this.$content=this.$context.find(this.defaults.selectorContent)
},toggleContentClick:function b(o){var n=e(o.currentTarget),p=e.trim(n.text()),m=this.$content.attr("aria-hidden")==="true"?"false":"true";
o.preventDefault();
n.text(p==="Hide"?"Show":"Hide");
if(p==="Hide"){this.hideSublists()
}this.$content.attr("aria-hidden",m);
this.$content.slideToggle(this.isMobile?0:300)
},toggleSublistClick:function d(r){var o=e(r.currentTarget),q=o.children("ul"),p=o.children("a"),m=q.attr("aria-hidden")==="true"?"false":"true";
if(e(r.target.parentElement)[0]!=e(r.currentTarget)[0]){return true
}r.preventDefault();
if(this.$itemsWitSublist.filter(".revealed")[0]===o[0]){o.toggleClass("revealed");
q.attr("aria-hidden",m);
this.toggleSublist(q)
}else{if(this.$itemsWitSublist.filter(".revealed").length){var n=this;
this.hideSublists(function(){o.toggleClass("revealed");
q.attr("aria-hidden",m);
n.toggleSublist(q)
})
}else{o.toggleClass("revealed");
q.attr("aria-hidden",m);
this.toggleSublist(q)
}}},toggleSublist:function h(m){if(this.isMobile){m.slideToggle(0);
this.$navigation.css("margin-bottom",m[0].clientHeight+10)
}else{m.slideToggle(300)
}},hideSublists:function k(m){if(this.isMobile){this.$navigation.css("margin-bottom","")
}this.$itemsWitSublist.filter(".revealed").removeClass("revealed").children("ul").attr("aria-hidden","true").slideUp(this.isMobile?0:300,function(){if(typeof m==="function"){m(this)
}})
}};
l=function l(){if(!tmg.components){tmg.components={}
}tmg.components.Segment={};
tmg.components.Segment.init=function(){e(".segment-container.component").each(function(){if(!e.data(this,f)){e.data(this,f,new a(this))
}});
return this
};
tmg.components.Segment.init()
};
e(j).ready(l);
e(j).on("tmg:page-loaded",l)
})(tmgJQ,window,document);
(function(c){var f,d=function d(h,g){this.elem=h;
this.$elem=c(h);
this.options=g;
this.domElements={}
};
d.prototype={defaults:{shareButtons:[{provider:"facebook",tooltip:"Share on Facebook",iconOnly:true},{provider:"twitter",tooltip:"Tweet this page",iconOnly:true},{provider:"linkedin",tooltip:"Share on LinkedIn",iconOnly:true},{provider:"print",tooltip:"Print this page"},{provider:"email",tooltip:"Share via email"}],layout:"vertical",showCounts:"top",noButtonBorders:true},init:function f(){this.options=c.extend({},this.defaults,this.options);
this.id="js-social-"+Math.uuidFast();
this.findDomElements();
this.updateDomElements();
this.initExternalScripts();
return this
},findDomElements:function e(){this.domElements.$content=this.$elem.find(".js-content")
},updateDomElements:function a(){this.domElements.$content.attr("id",this.id)
},initExternalScripts:function b(){var g=new gigya.socialize.UserAction();
var h=c.extend({},this.options,{containerID:this.id,userAction:g});
gigya.socialize.showShareBarUI(h)
}};
d.defaults=d.prototype.defaults;
c.fn.telegraph_social=function(g){return this.each(function(){if(!c.data(this,"telegraph_social")){c.data(this,"telegraph_social",new d(this,g).init())
}else{return c.data(this,"telegraph_social")
}})
};
f=function f(){var g=c(".js-social");
if(g.length){c.ajax({url:"//cdn.gigya.com/js/socialize.js?apiKey=2_ASmwJuFXoCCY8YP8uB6mzZphj_UToZbQkeeM6bMOA8swtMk2P3Rwu2WSger_DOSt",dataType:"script",cache:true,context:this,success:function h(){g.each(function(){var j=c(this);
j.telegraph_social(j.data("options")?c.parseJSON(j.data("options").replace(/'/g,'"')):{})
})
}})
}};
c(document).ready(f);
c(document).on("tmg:page-loaded",f)
})(tmgJQ);
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(a){return typeof a
}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a
};
(function(e,g,h){var f="SocialShareING";
var d={minCounterTotal:1};
var b={facebook:"?WT.mc_id=tmg_share_fb",twitter:"?WT.mc_id=tmg_share_tw",pinterest:"?WT.mc_id=tmg_share_pi",whatsapp:"?WT.mc_id=tmg_share_wa",linkedin:"?WT.mc_id=tmg_share_li",email:"?WT.mc_id=tmg_share_em"};
function a(n,m){this.element=n;
this.$element=e(n);
this.$buttons=this.$element.find("[data-social-share-button]");
this.$counter=this.$element.find(".social-share__counter");
this.$counterValue=this.$element.find(".social-share__counter-value");
this.settings=e.extend({},d,m);
this.defaults=d;
this.name=f
}a.prototype.init=function(){this.initButtons();
if(this.$counter.length){this.initCounter(this.$counter)
}};
a.prototype.initButtons=function(){var m=this;
this.$buttons.each(function(o,n){var q=e(n);
var p=q.data("social-share-button");
q.on("click",function(r){r.preventDefault();
m.platforms[p].openPopup(m.getData(p));
m.trackClickEvent(p)
})
})
};
a.prototype.initCounter=function(n){var m=this;
var o=[];
e.each(this.settings.shareButtons,function(q,p){if(p.networkEnable){o.push(m.platforms[q].fetchCount(m.getData(q)))
}});
e.when.apply(e,o).then(function(){for(var p=arguments.length,q=Array(p),r=0;
r<p;
r++){q[r]=arguments[r]
}var s=q.reduce(function(u,t){return u+t
},0);
if(s>=m.settings.minCounterTotal){m.$counterValue.text(s);
m.$counter.addClass("is-visible")
}})
};
a.prototype.getData=function(p){function o(x){return x.split(/[?#]/)[0]
}function w(x,y){return e("meta["+x+'="'+y+'"]',"head").attr("content")
}var m=this.settings.shareButtons[p];
var n=o(w("property","og:url")||h.URL);
var r=n+b[p];
var s=w("name","twitter:title")||w("property","og:title")||h.title;
var q=w("property","og:image")||e("body").find("img:first").attr("src");
var t=w("property","og:description")||w("name","description");
var u=m.account;
var v=g.tmgFacebookAppId;
return{url:n,trackedUrl:r,title:s,image:q,description:t,via:u,appId:v}
};
a.prototype.trackClickEvent=function(m){if((typeof _satelite==="undefined"?"undefined":_typeof(_satelite))==="object"){_satellite.setVar("shareprovider",m);
_satellite.track("share")
}};
a.prototype.platforms={email:{openPopup:function c(m){var o=m.trackedUrl,n=m.title;
location.href="mailto:?subject="+encodeURIComponent(n)+"&body="+encodeURIComponent(o)
},fetchCount:function k(){return 0
}},facebook:{openPopup:function c(m){var o=m.trackedUrl,n=m.appId;
var p="https://www.facebook.com/dialog/feed?link="+encodeURIComponent(o)+"&app_id="+n;
g.open(p,"facebook","toolbar=0,status=0,width=900,height=500")
},fetchCount:function k(n){var o="https://graph.facebook.com/?id="+encodeURIComponent(n.url);
var m=e.Deferred();
e.ajax(o).done(function(p){var q=p.share?p.share.share_count:0;
m.resolve(q)
}).fail(function(){m.resolve(0)
});
return m.promise()
}},linkedin:{openPopup:function c(m){var p=m.trackedUrl,o=m.title,n=m.description;
var q="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(p)+"&title="+encodeURIComponent(o)+"&summary="+encodeURIComponent(n);
g.open(q,"linkedin","toolbar=0,status=0,width=900,height=500")
},fetchCount:function k(n){var o="https://www.linkedin.com/countserv/count/share?url="+encodeURIComponent(n.url)+"&format=json";
var m=e.Deferred();
e.ajax(o).done(function(p){var q=p.count||0;
m.resolve(q)
}).fail(function(){m.resolve(0)
});
return m.promise()
}},pinterest:{openPopup:function c(m){var p=m.trackedUrl,o=m.image,n=m.description;
var q="https://pinterest.com/pin/create/button/?url="+encodeURIComponent(p)+"&media="+encodeURIComponent(o)+"&description="+encodeURIComponent(n);
g.open(q,"pinterest","toolbar=0,status=0,width=765,height=657")
},fetchCount:function k(n){var o="https://api.pinterest.com/v1/urls/count.json?url="+encodeURIComponent(n.url);
var m=e.Deferred();
e.ajax(o).done(function(p){var q=p.count||0;
m.resolve(q)
}).fail(function(){m.resolve(0)
});
return m.promise()
}},twitter:{openPopup:function c(n){var q=n.trackedUrl,p=n.title,m=n.via;
var o=m?"&via="+m:"";
var r="https://twitter.com/intent/tweet?url="+encodeURIComponent(q)+"&text="+encodeURIComponent(p)+o;
g.open(r,"twitter","toolbar=0,status=0,width=765,height=350")
},fetchCount:function k(){return 0
}},whatsapp:{openPopup:function c(m){g.open("whatsapp://send?text="+encodeURIComponent(m.url))
},fetchCount:function k(){return 0
}}};
e.fn[f]=function(m){return this.each(function(){if(!e.data(this,f)){e.data(this,f,new a(this,m).init())
}})
};
function j(m){try{return JSON.parse(m.replace(/'/g,'"'))
}catch(n){return{}
}}function l(){e("[data-social-share]").each(function(p,o){var m=e(o);
var n=j(m.data("social-share"));
m[f](n)
})
}e(h).ready(l);
e(h).on("tmg:page-loaded",l)
})(tmgJQ,window,document);
(function(d,k,p){var s=".sponsor-slot__above-headline.sponsor-slot--active,.sponsor-slot__below-headline.sponsor-slot--active",g="sponsor-slot--sticky container",c="sponsor-slot--sticky-mobile-only",b="sponsor-slot__message--active",u="sponsor-slot--takeover",q="scroll.stickySponsor",e='<div class="sponsor-slot--sticky-container"></div>',r=d("body");
function f(v){this.$el=v;
if(!this.$el.attr("data-sponsor")){return
}this.config=this.$el.attr("data-sponsor").replace(/'/g,'"');
this.config=JSON.parse(this.config);
this.isStuck=false;
this.isTakenOver=false;
this.init();
return this
}f.prototype={init:function t(){var w=this,v=g;
d(p).off(q);
if(this.config.htmlPane&&this.config.takeOver){this.setScrollDepth(this.config.takeOverThreshold,function(x){if(x&&!w.isTakenOver){w.takeOver();
w.isTakenOver=true
}else{if(!x&&w.isTakenOver){w.unTakeOver();
w.isTakenOver=false
}}})
}if(this.config.sticky){this.setScrollDepth(0,function(x){if(w.config.stickyMobileOnly&&k.tmg.getMediaQuery()!=="xxs"){return
}v+=w.config.htmlPane?" "+b:"";
if(x&&!w.isStuck){w.stickElement(v);
w.isStuck=true
}else{if(!x&&w.isStuck){w.unStickElement(v);
w.isStuck=false
}}})
}d(p).trigger("scroll")
},takeOver:function a(){this.$el.addClass(u)
},unTakeOver:function l(){this.$el.removeClass(u)
},stickElement:function o(v){r.css({"margin-top":this.$el.outerHeight()});
this.$el.addClass(v).wrap(e)
},unStickElement:function n(v){r.css({"margin-top":0});
this.$el.removeClass(v).unwrap(e)
},onScroll:function j(x,v){var w=this.isScrollAtThreshold(x);
v(w)
},setScrollDepth:function m(w,v){var x=this;
d(p).on(q,function(){var y=x.isScrollAtThreshold(w);
v(y)
})
},isScrollAtThreshold:function h(v){if(!this.originalPosition||!this.isStuck){this.originalPosition=this.$el.offset().top+this.$el.height()
}return this.originalPosition+v<d(k).scrollTop()
}};
d.fn.sparkSlots=function(v){new f(this)
};
d(p).on("tmg:page-loaded",function(){var v=d(s);
v.sparkSlots()
});
d(p).ready(function(){var v=d(s);
v.sparkSlots()
})
})(tmgJQ,window,document);
(function(d,c,a){var f,e=function e(h,g){this.elem=h;
this.$elem=d(h);
this.domElements={$title:this.$elem.find(".product-listing-sort__title"),$title_current:this.$elem.find(".product-listing-sort__title button"),$group:this.$elem.find(".product-listing-sort__items-list"),$item:this.$elem.find(".product-listing-sort__item"),$default:this.$elem.find(".product-listing-sort__item-default")}
};
var b=function b(h,g){this.elem=h;
this.$elem=d(h);
this.domElements={$button:this.$elem.find(".product-listing-sort__filters"),$title:this.$elem.find(".product-listing-sort__filters .product-listing-sort__title"),$group:this.$elem.find(".product-listing-sort__filters-panel")}
};
e.prototype={init:function f(){var g=this;
g.domElements.$group.hide();
this.domElements.$title.on("click",function(){g.domElements.$group.stop().slideToggle(250);
g.domElements.$group.toggleClass("open")
});
this.domElements.$item.on("click",function(){g.domElements.$item.attr("aria-checked","false");
d(this).attr("aria-checked","true");
g.domElements.$group.slideUp(250);
g.domElements.$title.removeClass("open");
var h=d(this).html();
g.domElements.$title_current.html(h)
})
}};
b.prototype={init:function f(){var g=this;
g.domElements.$group.hide();
this.domElements.$title.on("click",function(){g.domElements.$group.slideToggle();
d(this).toggleClass("open");
g.domElements.$button.toggleClass("product-listing-sort__button-open")
})
}};
d.fn.dropDownSort=function(g){return this.each(function(){if(!d.data(this,"dropDownSort")){d.data(this,"dropDownSort",new e(this,g).init())
}else{return d.data(this,"dropDownSort")
}})
};
d.fn.dropDownFilter=function(g){return this.each(function(){if(!d.data(this,"dropDownFilter")){d.data(this,"dropDownFilter",new b(this,g).init())
}else{return d.data(this,"dropDownFilter")
}})
};
c.dropDownSort=e;
c.dropDownFilter=b;
f=function f(){d(".product-listing-sort__sort").dropDownSort();
d(".product-listing-sort").dropDownFilter()
};
d(a).ready(f);
d(a).on("tmg:page-loaded",f)
})(tmgJQ,window,document);
(function(d,c,a){var e={classes:{active:"is-active",tabLink:"tabs__tab-link",tabContainer:"tabs__container",tabContent:"tabs__tab-content"}};
function b(h,g){this.options=d.extend({},e,g);
this.tabWrap=d(h);
this.tabLink=this.tabWrap.find("."+this.options.classes.tabLink);
this.tabContainer=this.tabWrap.find("."+this.options.classes.tabContainer);
this.init()
}b.prototype.init=function(){this.hashCheck();
this.attachEvents()
};
b.prototype.hashCheck=function(o){var n=c.location.hash,g=d(".tabs__tab-item"),m,k,h,j,l;
n=n.split("?")[0].substr(1);
j=g.hasClass(this.options.classes.active);
k=n&&g.has('[href="#'+n+'"]').length>0;
h=n&&this.tabContainer.find("#"+n).length>0;
if(n&&j&&!k&&!h){return
}if(n){l=g.find("a:first").attr("href");
if(typeof l!=="undefined"){l=l.substr(1)
}if(!k&&h){n=this.tabContainer.find("#"+n).parents(this.options.classes.tabContent).attr("id")
}m=d("."+n+"-tab").length?n:l;
this.showTab(m,o)
}};
b.prototype.attachEvents=function(){var g=this;
this.tabLink.on("click",function(h){h.preventDefault();
g.updateHash(this.hash,true)
});
d(c).on("hashchange",function(j,h){g.hashCheck(h)
})
};
b.prototype.showTab=function(g,h){this.tabWrap.find("li."+this.options.classes.active).attr("aria-selected","false");
this.tabContainer.find(" ."+this.options.classes.tabContent).attr("aria-hidden","true");
this.tabWrap.find("."+this.options.classes.active).removeClass(this.options.classes.active);
this.tabWrap.find('a[href$="'+g+'"]').closest("li").addClass(this.options.classes.active).attr("aria-selected","true");
this.tabContainer.find("."+g+"-tab").addClass(this.options.classes.active).attr("aria-hidden","false");
if(typeof h==="undefined"){a.getElementById(g).scrollIntoView(true)
}};
b.prototype.updateHash=function(j,h){if(history.pushState){var g=c.location.origin+c.location.pathname+c.location.search+j;
history.pushState(null,null,g);
d(c).trigger("hashchange",[h])
}else{c.location.hash=j
}};
d.fn.telegraph_tabs=function(g){return this.each(function(){if(d.data(this,"telegraph_tabs")){d.data(this,"telegraph_tabs",null)
}d.data(this,"telegraph_tabs",new b(this,g))
})
};
var f=function f(){d(".js-tabs").each(function(){var g=d(this);
g.telegraph_tabs()
})
};
d(a).ready(f);
d(a).on("tmg:page-loaded",f)
})(tmgJQ,window,document);
(function(g,h,j){var o,a=function a(s,r){this.elem=s;
this.$elem=g(s);
this.options=r;
this.isMobile=cssua.ua.mobile;
this.isSafari=cssua.ua.safari;
this.initalizedEventFired=false;
this.domElements={};
this.breakpoints=[{width:0,classMin:"tmgv-bp-min-xxs",classMax:"tmgv-bp-max-xxs"},{width:480,classMin:"tmgv-bp-min-xs",classMax:"tmgv-bp-max-xs"},{width:730,classMin:"tmgv-bp-min-sm",classMax:"tmgv-bp-max-sm"},{width:980,classMin:"tmgv-bp-min-md",classMax:"tmgv-bp-max-md"},{width:1370,classMin:"tmgv-bp-min-lg",classMax:"tmgv-bp-max-lg"}]
};
a.prototype={defaults:{videoIndex:0,videoId:"",videoSupplier:"",autoplay:false,autoscale:false,type:"normal",ooyalaOptions:{pcode:h.tmgOoyala.api.pcode,playerBrandingId:h.tmgOoyala.api.playerBrandingId,platform:"html5",videoId:"",autoplay:true,debug:false,preload:true,encodingPriority:["hls","dash","mp4","hds","webm"],skin:{config:"/etc/designs/telegraph/core/clientlibs/core/vendor/ooyala/skin.json"},overlayOptions:{videoThumbnailUrl:"",videoShareTitle:""}}},init:function o(){var r=this;
this.options=g.extend(true,{},this.defaults,this.options);
this.options.ooyalaOptions.videoId=this.options.videoId;
if(g(j).data("video-autoplay-on")===true){r.options.autoplay=true
}else{if(g(j).data("video-autoplay-on")===false){r.options.autoplay=false
}}if(this.isMobile){this.options.ooyalaOptions.autoplay=false
}this.id="js-video-player-"+Math.uuidFast();
this.findDomElements();
if(this.domElements.$content.length===0){return
}this.updateDomElements();
if(this.options.autoplay||this.isMobile){this.initPlayer()
}else{this.attachEvents()
}this.setBreakpointClass();
if(this.isMobile){this.$elem.addClass("state-mobile-view")
}else{this.$elem.addClass("state-desktop-view")
}this.videoSupplier=(this.$elem.data("supplier")||"").toLowerCase().replace(/[^a-z0-9]/g,"");
return this
},findDomElements:function f(){this.domElements.$content=this.$elem.find(".js-video-player__component-content");
this.domElements.$image=this.$elem.find(".js-video-player__image");
this.domElements.$imageContainer=this.$elem.find(".js-video-player__image-container");
this.domElements.$imageContainerTitle=this.$elem.find(".js-video-player__image-controls-title");
this.domElements.$imageControlsPlay=this.$elem.find(".js-video-player__image-controls-play");
this.domElements.$player=this.$elem.find(".js-video-player__player")
},updateDomElements:function q(){this.domElements.$player.attr("id",this.id)
},attachEvents:function k(){g(h).on("resize",g.proxy(this.setBreakpointClass,this));
this.domElements.$imageControlsPlay.on("click",g.proxy(function(){this.initPlayer();
this.domElements.$imageContainer.hide()
},this))
},attachRumMarks:function m(){var r=this;
if(this.options.videoIndex!==0){return
}this.sentPerformanceMarks={};
this.player.mb.subscribe("willPlayAds","tmg",function(s){if(!r.sentPerformanceMarks[s]){RUM.mark("js_ooyala_ads-will-play");
r.sentPerformanceMarks[s]=true
}});
this.player.mb.subscribe("willPlayFromBeginning","tmg",function(s){if(!r.sentPerformanceMarks[s]){RUM.mark("js_ooyala_video-will-play");
r.sentPerformanceMarks[s]=true
}});
this.player.mb.subscribe("playbackReady","tmg",function(s){if(!r.sentPerformanceMarks[s]){RUM.mark("js_ooyala_playback-ready");
r.sentPerformanceMarks[s]=true
}});
this.player.mb.subscribe("playbackStartError","",function(){throw new Error("OOYALA_PLAYBACK_START_ERROR")
});
this.player.mb.subscribe("playbackMidstreamError","",function(){throw new Error("OOYALA_PLAYBACK_MIDSTREAM_ERROR")
});
this.player.mb.subscribe("adsError","",function(){throw new Error("OOYALA_ADS_ERROR")
})
},setBreakpointClass:function b(){var u=typeof this.domElements.$innerWrapper!="undefined"?this.domElements.$innerWrapper.width():this.domElements.$player.width();
for(var t=0;
t<this.breakpoints.length;
t++){var r=this.$elem.hasClass(this.breakpoints[t].classMin);
if(u>this.breakpoints[t].width&&!r){this.$elem.addClass(this.breakpoints[t].classMin)
}else{if(u<=this.breakpoints[t].width&&r){this.$elem.removeClass(this.breakpoints[t].classMin)
}}var s=this.$elem.hasClass(this.breakpoints[t].classMax);
if(u<=this.breakpoints[t].width&&!s){this.$elem.addClass(this.breakpoints[t].classMax)
}else{if(u>this.breakpoints[t].width&&s){this.$elem.removeClass(this.breakpoints[t].classMax)
}}}setTimeout(function(){g(j).trigger("tmg:ooyala-player-breakpoint-class-set")
},100)
},initPlayer:function n(){this.domElements.$content.off("click");
if(h.OO===undefined){this.loadExternalScripts()
}else{this.initExternalPlayer()
}},initExternalPlayer:function e(){var z="";
var v=j.querySelector('meta[name="tmgads.businessSegment"]').getAttribute("content")||"*null";
var A=j.querySelector('meta[name="DCSext.Category"]').getAttribute("content")||"*null";
if(h.tmgAds!==undefined&&tmgAds.dfp!==undefined){var x="";
if(this.options.type==="sensitive"){x+=";sv=1"
}if(this.videoSupplier!==""){x+=";vidsrc="+this.videoSupplier
}z=tmgAdsBuildAd("tmgads_body_vid"+(!!this.options.videoIndex?"_"+this.options.videoIndex:""),"vid="+this.options.videoId+(!!x?x:""),"").fetchUrl()
}var y={actualDuration:this.$elem.attr("data-video-duration"),videoType:this.$elem.attr("data-video-type"),autoplay:this.isSafari?false:this.$elem.attr("data-video-autoplay"),"google-ima-ads-manager":{useGoogleAdUI:true,useGoogleCountdown:true,iframeZIndex:0,all_ads:[{position_type:"r",tag_url:z}]},ComScoreOoyalaPlugin:{c2:"6035736",labelmapping:'c3="TheTelegraph", c4="'+v+'", c6="'+A+'", ns_st_st="Telegraph", ns_st_pu="*null", ns_st_pr="*null", ns_st_ep=VideoContentMetadata.title, ns_st_sn="*null", ns_st_en="*null", ns_st_ge="*null", ns_st_ti="*null", ns_st_ia="*null", ns_st_ce="*null", ns_st_ddt="*null", ns_st_tdt="*null"'},overlayOptions:{videoThumbnailUrl:this.domElements.$image.first().attr("src"),videoShareTitle:this.domElements.$imageContainerTitle.text()},onCreate:function w(C){var B=h._cbv||(h._cbv=[]);
B.push(C)
}};
if(j.documentElement.classList.contains("ua-ie-11")){delete y["google-ima-ads-manager"]
}this.player=h.OO.Player.create(this.id,this.options.videoId,g.extend(true,{},this.options.ooyalaOptions,y));
this.attachRumMarks();
var r=new CustomEvent("dtm:ooyala-player-initialised",{detail:{oplayer:this.player}});
h.dispatchEvent(r);
var s="",u="",t=this.options.videoId;
if(h.location.pathname.endsWith(".html")||h.CQ&&h.CQ.WCM){u=h.location.pathname.split(".html")[0]
}else{u=h.location.pathname
}s="/bin/telegraph/video/recommendation/?path="+u+"&videoId="+this.options.videoId+"&searchPath="+this.options.ooyalaOptions.overlayOptions.searchPath+"&videoType="+this.$elem.attr("data-video-type")+"";
if(this.options.ooyalaOptions.overlayOptions.autoForward==="true"&&!this.isMobile){this.getRelatedVideosData(s,function(B){h.recommendedVideos=B.results
})
}this.player.mb.subscribe("playbackReady","",g.proxy(function(B){if(this.options.autoscale){this.domElements.$content.css({height:0,"padding-bottom":(100/this.domElements.$player.data("frz-aspect")).toFixed(2)+"%"})
}if(this.isMobile){this.$elem.find(".innerWrapper .oo-state-screen-poster").click(g.proxy(function(){if(this.domElements.$imageContainer.is(":visible")){this.domElements.$imageContainer.hide()
}},this))
}this.setBreakpointClass();
this.$elem.attr("data-video-player--player-loaded",true);
this.domElements.$innerWrapper=this.$elem.find(".innerWrapper")
},this));
this.player.mb.subscribe("fullscreenChanged","",g.proxy(function(B,C){if(C){this.$elem.addClass("video-player-fullscreen")
}else{this.$elem.removeClass("video-player-fullscreen")
}this.setBreakpointClass()
},this));
this.player.mb.subscribe("played","",g.proxy(function(B){g(j).trigger("tmg:video-played");
if(h.recommendedVideos.length){for(i=0;
i<h.recommendedVideos.length;
i++){var C="";
if(h.recommendedVideos[i].embed_code!==t){C=h.recommendedVideos[i].embed_code;
h.recommendedVideos.splice(i,1);
break
}}t=C;
this.player.setEmbedCode(C,{autoplay:true})
}},this));
if(this.isMobile){this.player.subscribe("playing","",g.proxy(function(B){this.fireInitalizedEvent()
},this));
this.player.subscribe("error","",g.proxy(function(){this.domElements.$imageContainer.hide()
},this))
}if(!this.isMobile){this.fireInitalizedEvent()
}},getRelatedVideosData:function l(r,s){g.getJSON(r,function(t){s(t)
})
},fireInitalizedEvent:function c(){if(this.initalizedEventFired){return
}var r=g.Event("tmg.components.videoPlayer.initialized");
this.$elem.trigger(r);
this.initalizedEventFired=true
},loadExternalScripts:function d(){var s=this;
this.domElements.$content.off("click");
yepnope({load:h.clientlibs.js.ooyala_core.load,complete:function r(){s.initExternalScripts.call(s)
}})
},initExternalScripts:function p(){if(typeof h.OO=="undefined"){setTimeout(g.proxy(this.initExternalScripts,this),50)
}else{var r=this;
h.OO.ready(function(){r.initExternalPlayer.call(r)
})
}}};
a.defaults=a.prototype.defaults;
g.fn.telegraph_videoPlayer=function(r){return this.each(function(){if(!g(this).data("telegraph_videoPlayer")){if(!r){var s=g(this);
r=s.data("options")?g.parseJSON(s.data("options").replace(/'/g,'"')):{};
r.videoIndex=+new Date()
}g(this).data("telegraph_videoPlayer",new a(this,r).init())
}})
};
o=function o(){if(typeof h.tmg==="undefined"||typeof h.tmg!=="undefined"&&h.tmg.PAYWALL_ON!==true){g(".js-video-player").each(function(r){var s=g(this);
s.telegraph_videoPlayer(s.data("options")?g.extend(true,g.parseJSON(s.data("options").replace(/'/g,'"')),{videoIndex:r}):{videoIndex:r})
})
}};
if(h.location.href.indexOf("playlist=")===-1){g(j).ready(o)
}g(j).on("tmg:page-loaded",o)
})(tmgJQ,window,document);
(function(d,w,a,f){var v=";",c="_",n={buildAnalyticsString:function z(A,C,B,E,D){var F;
if(C){A+=c+C
}F={componentName:A,destination:B,linkType:E,pageOfUse:D};
return JSON.stringify(F)
},escapeSeparatorsInString:function q(B){var C=new RegExp("["+v+c+"]","g"),A="-";
return B.replace(C,A)
},readPagePath:function e(){var A=window.location.pathname;
A=A.replace(/\//g," ").trim().replace(/\s/g,c);
return A||"portal"
},getComponentName:function k(C){var B=C.attr("class")||"",A=B.split(/\s+/)[0];
return A||""
},readComponentWrapper:function m(B){var A=B.closest(".component");
return A
},readComponentHeading:function b(C){var B=C.find(".component-heading, .segment-container__title"),A="";
if(B.length!==0){A=B.first().text().replace(/ /g,"-")
}return this.escapeSeparatorsInString(A.trim())
},isImage:function t(A){return A.is("img")||!!A.find(".gallery-teaser__image").length
},isGalleryIcon:function p(A){return A.is(".list-of-entities__icon, .gallery-teaser__button")
},isVideoIcon:function l(A){return A.is(".video-icon__play, .video-icon__arrow, .video-icon__duration")
},isLogoBar:function x(A){return A.is(".header-logobar__img")
},readLabelFromListItemBody:function s(A){var B=A.parent().find(".list-of-entities__item-body-headline, .hero-block__item-body-headline").first();
if(B.has(".live-indicator").length!==0){B=B.find("a").first()
}if(A.hasClass("gallery-teaser__content")){B=A.find(".gallery-teaser__info").first()
}return B.text().trim().replace(/[,\s]+/g,"-")
},readLabelFromImgAlt:function g(B){var D=B.find(".header-logobar__img").first(),A=D.attr("alt"),C="";
if(A){C=A.trim().replace(/[,\s]+/g,"-")
}return C
},readLinkLabel:function y(D,C){var A,B="-View-gallery";
if(this.isLogoBar(C)){A=this.readLabelFromImgAlt(D)
}else{if(this.isImage(C)){A=this.readLabelFromListItemBody(D)
}else{if(this.isGalleryIcon(C)||this.isVideoIcon(C)){A=this.readLabelFromListItemBody(D)
}else{A=D.first().text().trim().replace(/[,\s]+/g,"-")
}}}if(A.indexOf(B)>-1){A=A.replace(B,"")
}return this.escapeSeparatorsInString(A)
},readElementClicked:function u(A){if(this.isImage(A)){return"img"
}else{if(this.isGalleryIcon(A)||this.isVideoIcon(A)){return"ico"
}else{return"txt"
}}},createIcid:function h(){var C=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},I=C.brand,A=I===undefined?f.getChannel():I,B=C.product,H=B===undefined?"generic":B,E=C.mediaType,K=E===undefined?"generic":E,J=C.contentType,G=J===undefined?f.getContentType():J,F=C.contentLocation,D=F===undefined?"generic":F;
return A+"_"+H+"_"+K+"_"+G+"_"+D
},isDtmEnabled:function o(){return !!window._satellite
},processIcids:function r(){var A=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"[data-icid]";
var B=Array.from(document.querySelectorAll(A));
B.forEach(function(F){var E=void 0;
var D=w.tryParse(F.dataset.icid);
var G=n.createIcid(D);
var C=F.getAttribute("href");
if(C){E=tmg.setQuerystringParam(C,"ICID",G);
F.setAttribute("href",E)
}})
}};
window.TMG_COMPONENT_TRACKING=window.TMG_COMPONENT_TRACKING||n;
(function j(){if(n.isDtmEnabled()){d(".component.list-of-entities a[href^=\"/\"]:not(.midArticleUnit .component.list-of-entities a), .component.hero-block a[href^='/'], .component.segment-container a[href^='/'], .component.gallery-teaser a[href^='/'], .component.article-body-image a[href^='/'], .component.article-body-text a[href^='/'], .component.list-of-tags a[href^='/'], .component.byline a[href^='/'], .component.inline-content a[href^='/'], .component.quote a[href^='/'], .component.header-breadcrumbs a[href^='/'], .component.header-nav-local a[href^='/'], .component.header-nav-primary a[href^='/'], .component.header-nav-global a[href^='/'], .component.overlay-nav-primary a[href^='/'], .component.breadcrumbs a[href^='/'], .component.header-logobar a").on("click",function(D){var E=d(D.target),H=d(this),F,I,J=n.readLinkLabel(H,E),G=n.readPagePath(),C,A,B=n.readElementClicked(E);
C=n.readComponentWrapper(H);
F=n.getComponentName(C);
I=n.readComponentHeading(C);
A=n.buildAnalyticsString(F,I,J,B,G);
window._satellite.setCookie("tmgComponentTracking",encodeURIComponent(A),1)
});
n.processIcids()
}})()
})(tmgJQ,tmg.json,tmg.hasQuerystring,tmg.page);
(function(c,g,k){var m,f="LocalNav",b=function b(o,n){this.$localNav=c(o);
this.containterWidth=0;
this.listElementsWidth=0;
this.options=n;
this.config={};
this.init()
};
b.prototype={defaults:{localNavExpandedSelector:"header-nav-local--expanded",listSelector:".header-nav-local__list",listItemsSelector:".header-nav-local__item",buttonSelector:".header-nav-local__button",buttonTextSelector:".header-nav-local__button-text",buttonShowSelector:"header-nav-local__button--show",buttonExpandedLabel:"expanded-label",buttonNoExpandedLabel:"no-expanded-label"},init:function m(){this.config=c.extend({},this.defaults,this.options);
this.$list=this.$localNav.find(this.config.listSelector);
this.$listItems=this.$localNav.find(this.config.listItemsSelector);
this.$button=this.$localNav.find(this.config.buttonSelector);
this.$buttonText=this.$localNav.find(this.config.buttonTextSelector);
this.refresh();
this.attachEvents()
},refresh:function j(){this.setButtonVisibility()
},attachEvents:function l(){this.buttonClick();
this.windowResize()
},buttonClick:function e(){this.$button.on("click",function(){this.$localNav.toggleClass(this.config.localNavExpandedSelector);
this.changeButtonLabel()
}.bind(this))
},windowResize:function a(){c(g).on("resize",function(){this.refresh()
}.bind(this))
},setButtonVisibility:function d(){this.containterWidth=this.$list.width();
this.listElementsWidth=0;
this.$listItems.each(function(n,o){this.listElementsWidth+=c(o).width()
}.bind(this));
if(this.listElementsWidth>this.containterWidth){this.$button.addClass(this.config.buttonShowSelector)
}else{this.$button.removeClass(this.config.buttonShowSelector)
}},changeButtonLabel:function h(){var o=this.$localNav.hasClass(this.config.localNavExpandedSelector),n;
if(o){n=this.$buttonText.data(this.config.buttonExpandedLabel)
}else{n=this.$buttonText.data(this.config.buttonNoExpandedLabel)
}this.$buttonText.text(n)
}};
m=function m(){var o=c(".header-nav-local"),p=[],n;
o.each(function(){if(!c.data(this,f)){n=new b(this);
p.push(n);
c.data(this,f,n)
}})
};
c(k).ready(m);
c(k).on("tmg:page-loaded",m)
})(tmgJQ,window,document);
(function(a,d,f){var j,c="PrimaryNav",h=function h(l,k){this.$primaryNav=a(l);
this.options=k;
this.config={};
this.init()
};
h.prototype={defaults:{primaryNavExpandedSelector:"header-nav-primary--expanded",buttonSelector:".header-nav-primary__button",buttonTextSelector:".header-nav-primary__button-text",buttonShowSelector:"header-nav-primary__button--show",buttonExpandedLabel:"expanded-label",buttonNoExpandedLabel:"no-expanded-label"},init:function j(){this.config=a.extend({},this.defaults,this.options);
this.$button=this.$primaryNav.find(this.config.buttonSelector);
this.$buttonText=this.$primaryNav.find(this.config.buttonTextSelector);
this.attachEvents()
},attachEvents:function g(){this.buttonClick()
},buttonClick:function b(){this.$button.on("click",function(){this.$primaryNav.toggleClass(this.config.primaryNavExpandedSelector);
this.changeButtonLabel()
}.bind(this))
},changeButtonLabel:function e(){var l=this.$primaryNav.hasClass(this.config.primaryNavExpandedSelector),k;
if(l){k=this.$buttonText.data(this.config.buttonExpandedLabel)
}else{k=this.$buttonText.data(this.config.buttonNoExpandedLabel)
}this.$buttonText.text(k)
}};
j=function j(){return a(".header-nav-primary--theme").each(function(){if(!a.data(this,c)){a.data(this,c,new h(this))
}})
};
a(f).ready(j);
a(f).on("tmg:page-loaded",j)
})(tmgJQ,window,document);
(function(b,f,h){var j,e="HeaderOverlayButton",a=function a(l,k){this.$headerOverlayButton=b(l);
this.$mainContent=null;
this.options=k;
this.config={};
this.init()
};
a.prototype={defaults:{overlayNavSelector:".snippet-overlay-nav",overlayNavShowSelector:"snippet-overlay-nav--show",overlayNavCloseButton:".overlay-nav-button__button",mainContentSelector:".main-content",mainContentOverlayOnClass:"sr-only"},init:function j(){this.config=b.extend({},this.defaults,this.options);
this.$overlayNav=b(this.config.overlayNavSelector);
this.$mainContent=b(this.config.mainContentSelector);
this.attachEvent()
},attachEvent:function d(){this.$headerOverlayButton.on("click",function(){this.showOverlayNav();
this.addFocusToCloseButton()
}.bind(this))
},showOverlayNav:function c(){this.$overlayNav.addClass(this.config.overlayNavShowSelector);
if(this.$mainContent){this.$mainContent.addClass(this.config.mainContentOverlayOnClass)
}},addFocusToCloseButton:function g(){var k=b(this.config.overlayNavCloseButton);
if(!!k.length){k[0].focus()
}}};
j=function j(){b(".header-nav-overlay-button").each(function(){if(!b.data(this,e)){b.data(this,e,new a(this))
}})
};
b(h).ready(j);
b(h).on("tmg:page-loaded",j)
})(tmgJQ,window,document);
(function(f,c,d,a){var e="Offer";
function b(j,h){this.$element=f(j);
this.$links=this.$element.find("a[href]")
}b.prototype={init:function g(){this.$links.each(function(h,j){j.href=c.updateRedirectParam(j.href,a.location.href)
})
}};
function g(){f(".offer").each(function(){var h=f(this).data();
if(!h[e]){h[e]=new b(this).init()
}})
}f(a).ready(g);
f(a).on("tmg:page-loaded",g)
})(tmgJQ,tmg,window,document);
(function(c,a){function b(){this.overlayClickElem=a.querySelector('[data-js="overlay-continuation__handler"]');
this.overlayContainer=a.querySelector('[data-js="overlay-continuation"]');
this.overlayClose=a.querySelector('[data-js="overlay-continuation__close"]');
this.overlayTimeout=null;
if(this.overlayClickElem){this.overlayAnchor=this.overlayClickElem.href;
this.events()
}}b.prototype.events=function(){var d=this;
this.overlayClickElem.addEventListener("click",function(f){f.preventDefault();
d.showOverlay()
},false);
this.overlayClose.addEventListener("click",function(){clearTimeout(d.overlayTimeout);
d.overlayContainer.classList.remove("overlay-continuation__visible")
})
};
b.prototype.showOverlay=function(){var d=this;
if(this.overlayContainer!==undefined){this.overlayContainer.classList.add("overlay-continuation__visible")
}this.overlayTimeout=setTimeout(function(){d.closeAndRedirect()
},5000)
};
b.prototype.closeAndRedirect=function(){c.location.href=this.overlayAnchor
};
a.addEventListener("DOMContentLoaded",function(){new b()
});
a.addEventListener("tmg:page-loaded",new b())
})(window,document);
(function(a,e,g){var k,f=function f(n,m){this.$overlayNavButton=a(n);
this.$mainContent=null;
this.options=m;
this.config={};
this.init()
};
f.prototype={defaults:{overlayNavButtonSelector:".overlay-nav-button__button",overlayNavSelector:".snippet-overlay-nav",overlayNavShowSelector:"snippet-overlay-nav--show",headerNavOverlayButton:".header-nav-overlay-button__button",mainContentSelector:".main-content",mainContentOverlayOnClass:"sr-only"},init:function k(){this.config=a.extend({},this.defaults,this.options);
this.$overlayNavButton=this.$overlayNavButton.find(this.config.overlayNavButtonSelector);
this.$overlayNav=a(this.config.overlayNavSelector);
this.$mainContent=a(this.config.mainContentSelector);
this.attachEvents()
},attachEvents:function h(){this.handleClick();
this.handleEsc()
},handleClick:function c(){this.$overlayNavButton.on("click",function(){this.closeNavOverlay()
}.bind(this))
},handleEsc:function l(){a(g).keydown(function(m){if(m.keyCode==27){this.closeNavOverlay()
}}.bind(this))
},closeNavOverlay:function d(){this.hideOverlayNav();
this.addFocusToHeaderNavButton()
},hideOverlayNav:function j(){if(this.$mainContent){this.$mainContent.removeClass(this.config.mainContentOverlayOnClass)
}this.$overlayNav.removeClass(this.config.overlayNavShowSelector)
},addFocusToHeaderNavButton:function b(){var m=a(this.config.headerNavOverlayButton);
if(!!m.length){m[0].focus()
}}};
k=function k(){var m=a(".overlay-nav-button"),n=[];
m.each(function(){if(!a.data(this,"overlayNavButtons")){a.data(this,"overlayNavButtons",n.push(new f(this)))
}})
};
a(g).ready(k);
a(g).on("tmg:page-loaded",k)
})(tmgJQ,window,document);
(function(f,d,a){var g,e=function e(j,h){this.$overlayNavSecondary=f(j);
this.options=h;
this.config={};
this.init()
};
e.prototype={defaults:{overlayNavPrimaryItemsSelector:".overlay-nav-primary__item",overlayNavPrimaryItemLinkClass:".overlay-nav-primary__link",overlayNavSecondaryItemsSelector:".overlay-nav-secondary__item"},init:function g(){this.config=f.extend({},this.defaults,this.options);
this.$overlayNavPrimaryItems=f(this.config.overlayNavPrimaryItemsSelector);
this.$overlayNavSecondaryItems=this.$overlayNavSecondary.find(this.config.overlayNavSecondaryItemsSelector);
this.attachEvents()
},attachEvents:function b(){this.handleBlur()
},handleBlur:function c(){this.$overlayNavSecondaryItems.last().on("focusout",function(){this.$overlayNavPrimaryItems.first().children(this.config.overlayNavPrimaryItemLinkClass).focus()
}.bind(this))
}};
f(a).on("ready tmg:page-loaded",function(){});
g=function g(){var j=f(".overlay-nav-secondary"),h=[];
j.each(function(){if(!f.data(this,"OverlayNavSecondary")){f.data(this,"OverlayNavSecondary",h.push(new e(this)))
}})
};
f(a).ready(g);
f(a).on("tmg:page-loaded",g)
})(tmgJQ,window,document);
(function(g,l,m){var f=g.fn.telegraph_listOfEntities?"noclash_":"",k=f+"telegraph_listOfEntities",j=k+"_init",d=".js-list-of-entities",o=function o(r,q){this.options=q;
this.elem=r;
this.$elem=g(r);
this.dataOptions=this.$elem.data("options");
this.dataOptions=this.dataOptions?g.parseJSON(this.dataOptions.replace(/'/g,'"')):{};
this.domElements={}
};
o.prototype={defaults:{isMobile:0,moreless:{from:-1,speed:300,breakpoint:"xxs",text:{more:"Show more",less:"Show less"}},selectors:{listItems:".list-of-entities__item",listItemsMoreless:".list-of-entities__item.is-moreless",morelessButton:".component-footer-link",root:"html"},classNames:{isMoreless:"is-moreless",uaMob:"ua-mobile"},attrs:{ariaHidden:"aria-hidden",moreless:"data-moreless"}},init:function p(){this.options=g.extend(true,{},this.defaults,this.dataOptions,this.options);
this.options.isMobile=g(this.options.selectors.root).hasClass(this.options.classNames.uaMob);
this.findDomElements();
this.attachEvents();
this.morelessInit();
return this
},findDomElements:function e(){this.domElements.$listItems=this.$elem.find(this.options.selectors.listItems);
this.domElements.$listItemsMoreless=[];
this.domElements.$morelessButton=this.$elem.find(this.options.selectors.morelessButton)
},attachEvents:function n(){},morelessInit:function a(){var t=l.tmg.getMediaQuery(),s=this.options.moreless,u=this.utils.getKeysFromHash(tmg.viewport.mediaQueriesBreakpoints),q=u.indexOf(t),v=u.indexOf(s.breakpoint),r=this.domElements.$listItems.length;
if(s.from>-1&&v>=q&&r>s.from){this.morelessApply()
}},morelessApply:function c(){var r=this,q=r.options.moreless.from;
r.options.moreless.open=true;
r.domElements.$listItems.each(function(t,u){if(t>=q){var s=g(u);
s.addClass(r.options.classNames.isMoreless)
}});
r.domElements.$listItemsMoreless=r.$elem.find(r.options.selectors.listItemsMoreless);
r.options.moreless.speed=r.options.isMobile?0:r.options.moreless.speed;
r.moreless(true);
r.$elem.on("click",r.options.selectors.morelessButton,function(s){s.preventDefault();
r.moreless()
})
},moreless:function h(q){if(this.options.moreless.busy){return
}var w=this,u=w.options.moreless,t=q?0:u.speed,r=!u.open,s=r?u.text.less:u.text.more,v=function v(){w.domElements.$listItemsMoreless.attr(w.options.attrs.ariaHidden,!r);
w.options.moreless.busy=false
};
w.options.moreless.busy=true;
w.$elem.attr(w.options.attrs.moreless,r);
w.options.moreless.open=r;
w.domElements.$morelessButton.text(s);
w.domElements.$listItemsMoreless.slideToggle(t,v)
},utils:{getKeysFromHash:function b(s){var q=[];
for(var r in s){q.push(r)
}return q
}}};
g.fn[k]=function(q){return this.each(function(){if(!g(this).data(k)){g(this).data(k,new o(this,q).init())
}})
};
g.fn[j]=function(){g(d)[k]()
};
g(m).on("ready tmg:page-loaded",function(){g(d)[k]()
})
})(tmgJQ,window,document);
(function(B,E,g){var M,R="telegraph_ListSlider",N="list-slider",F=R+"_init",j="."+N,v=N+"--mobile-only",J=N+"--active",x=N+"__arrows",O=N+"--no-arrows",L="arrow__left",Q="arrow__right",H="dragging",h="disabled",D="."+x,A=".arrow",e=".list-of-entities__container",P="div:first",s=".list-of-entities__item",U=".js-list-of-entities",q=B("html").hasClass("touch"),o=function o(X,W){this.options=W;
this.elem=X;
this.$elem=B(X);
this.$listContainer=this.$elem.find(e);
this.$listContainerContainer=this.$listContainer.parents(P);
this.$listItems=this.$elem.find(s);
this.$listJSContainer=this.$elem.find(U);
this.$tags=this.$elem.find(U);
this.dataOptions=this.$listJSContainer.data("options")?B.parseJSON(this.$listJSContainer.data("options").replace(/'/g,'"')):{};
this.domElements={}
};
o.prototype={defaults:{dictionary:{previous:"Previous",next:"Next"},animationTime:500,clickDragTime:300,dragMinimumMove:5,currentSelectedIndex:0,paddingLeft:0,noArrows:false,sliderMobileOnly:false,active:true,clickMoveAway:true,mediaQuery:"",arrowsContainerTpl:'<div class="'+x+'">',arrowTpl:'<a href="#" class="arrow"><span class="arrow__inner"><span class="arrow__text">{{TEXT}}</span></span></a>'},init:function M(){var W;
if(this.$listItems.length===0){return false
}this.options=B.extend({},this.defaults,this.dataOptions,this.options);
if(this.$elem.data("selected-item")>=0){this.options.currentSelectedIndex=this.$elem.data("selected-item")
}this.options.paddingLeft=parseInt(this.$elem.css("padding-left"));
this.$listJSContainer.wrap(this.options.arrowsContainerTpl);
this.$arrowsContainer=this.$elem.find(D);
this.$listContainer.data("margin-left",this.$listContainer.css("margin-left"));
if(this.options.noArrows===true){this.$elem.addClass(O)
}else{this.$arrowsContainer.append(this.createArrow(L,"slideLeft",this.options.dictionary.previous)).append(this.createArrow(Q,"slideRight",this.options.dictionary.next))
}this.$arrows=this.$elem.find(A);
if(this.options.sliderMobileOnly==="true"){this.$elem.addClass(v)
}this.$elem.selectItem=this.selectItem;
this.attachEvents();
W=B.proxy(this.selectNextItemEvent,this);
this.$elem.on("list-slider:select-next-item",W);
this.selectItem(this.options.currentSelectedIndex);
this.enableArrows(parseInt(this.$listContainer.css("margin-left")));
return this
},attachEvents:function w(){var ab=this,X=B.proxy(this.mouseDownEvent,this),ae=B.proxy(this.mouseMoveEvent,this),ac=B.proxy(this.dragStartEvent,this),W=B.proxy(this.clickEvent,this),aa=B.proxy(this.mouseUpEvent,this),ad=B.proxy(this.resizeEvent,this),Z=B.proxy(this.selectNextItem,this),Y=B.proxy(this.selectFirstItem,this);
ab.$listContainer.on("mousedown touchstart",X).on("mousemove",ae).on("selectFirstItem",Y).on("selectNextItem",Z);
ab.$listItems.on("click touchend",W).on("dragstart","a, img",ac);
B(g).on("mouseup touchend",aa).on("tmg:video-played",function(){if(B(g).data("video-autoplay-on")===true){ab.selectNextItem()
}});
B(E).resize(ad).trigger("resize")
},selectNextItemEvent:function T(W){this.selectNextItem()
},eventXValue:function z(X){var W=0,Y;
if(X.type.indexOf("touch")===0){Y=X.originalEvent.touches[0]||X.originalEvent.changedTouches[0];
W=Y.pageX
}else{W=X.pageX
}return W
},resizeEvent:function k(X){var W=tmg.getMediaQuery();
if(this.options.mediaQuery!=W){this.options.mediaQuery=W;
if(this.options.sliderMobileOnly!=="true"||this.options.mediaQuery==="xxs"){this.$elem.addClass(J);
this.$listContainer.width(5000);
this.$listContainer.width(this.$listItems.eq(0).width()*this.$listItems.length);
this.$listContainer.css("margin-left",0);
this.options.active=true
}else{this.$listContainer.width("auto");
this.$listContainer.css("margin-left",this.$listContainer.data("margin-left"));
this.$elem.removeClass(J);
this.options.active=false
}}},dragStartEvent:function r(W){W.preventDefault()
},clickEvent:function V(X){var W=X.currentTarget,Y=X.target;
if(this.options.active===true){X.preventDefault();
X.stopPropagation();
if(q?Math.abs(this.eventXValue(X)-this.$listContainer.data("start-move"))<this.options.dragMinimumMove:X.timeStamp-this.$listContainer.data("click-start")<this.options.clickDragTime||Math.abs(this.eventXValue(X)-this.$listContainer.data("start-move"))<this.options.dragMinimumMove){if(this.options.clickMoveAway===true){if(Y.tagName==="A"){E.location.href=Y.href
}}else{if(Y.tagName==="A"){B(g).trigger("tmg:slider-list-item-anchor-clicked",[Y])
}this.selectItem(B(W).index())
}}}},mouseUpEvent:function l(W){var X=B(j).find(e);
B.each(X,function(Y,Z){Z=B(Z);
if(Z.hasClass(H)){W.preventDefault();
W.stopPropagation();
setTimeout(function(){Z.removeClass(H)
},10)
}})
},mouseDownEvent:function c(W){if(this.options.active===true){this.$listContainer.addClass(H);
this.$listContainer.data("click-start",W.timeStamp);
this.$listContainer.data("start-move",this.eventXValue(W));
this.$listContainer.data("start-margin",parseInt(this.$listContainer.css("margin-left")))
}},mouseMoveEvent:function p(X){if(this.options.active===true&&this.$listContainer.hasClass(H)){var W=this.$listContainer.data("start-margin")+this.eventXValue(X)-this.$listContainer.data("start-move");
this.$listContainer.css("margin-left",this.validateMargin(W))
}},createArrow:function t(W,aa,Y){var X=B(this.options.arrowTpl.replace("{{TEXT}}",Y)).addClass(W),Z=this;
X.on("click",function(ab){ab.preventDefault();
Z[aa]()
});
return X
},selectItem:function y(W){this.slideTo(W)
},slideLeft:function C(W){this.slide("+")
},slideRight:function d(W){this.slide("-")
},slide:function a(X){if(q){return false
}var W=parseInt(this.$listContainer.css("margin-left"));
if(X==="+"){W+=this.$listItems.first().width()*4
}else{W-=this.$listItems.first().width()*4
}W=this.validateMargin(W);
this.setMargin(W)
},slideTo:function f(X){if(X>=0&&X<this.$listItems.length){var W=-1*(X*this.$listItems.first().width())+0;
W=this.validateMargin(W);
this.setMargin(W)
}this.highlightItem(X)
},selectPreviousItem:function b(){if(this.options.currentSelectedIndex>0){this.selectItem(this.options.currentSelectedIndex-1)
}},selectNextItem:function S(){if(this.options.currentSelectedIndex<this.$listItems.length){this.selectItem(this.options.currentSelectedIndex+1)
}},selectFirstItem:function G(){this.selectItem(0)
},selectLastItem:function n(){this.selectItem(this.$listItems.length-1)
},validateMargin:function m(W){var X=-1*this.options.paddingLeft;
if(W>X){W=X
}if(this.$listContainerContainer.width()>=this.$listContainer.width()){W=X
}else{if(-1*W+this.$arrowsContainer.width()-X>this.$listContainer.width()){W=-1*(this.$listContainer.width()-this.$arrowsContainer.width())-X
}}this.enableArrows(W);
return W
},setMargin:function I(W){var X=this;
this.$listContainer.animate({"margin-left":W},this.options.animationTime,function(){X.enableArrows(W)
})
},highlightItem:function K(W){if(W<0){W=0
}if(W===this.$listItems.length){this.selectFirstItem();
B(g).trigger("tmg:list-item-selected",[this.$listContainer,this.$listItems.eq(this.options.currentSelectedIndex)]);
return this.options.currentSelectedIndex
}if(this.options.currentSelectedIndex==W){B(g).trigger("tmg:list-item-selected",[this.$listContainer,this.$listItems.eq(this.options.currentSelectedIndex)]);
return this.options.currentSelectedIndex
}this.options.currentSelectedIndex=W;
B(g).trigger("tmg:list-item-selected",[this.$listContainer,this.$listItems.eq(this.options.currentSelectedIndex)]);
return this.options.currentSelectedIndex
},enableArrows:function u(W){var X=-1*this.options.paddingLeft+0;
if(this.$listContainerContainer.width()<this.$listContainer.width()){this.$arrows.removeClass(h);
if(W===X){this.$arrows.first().addClass(h)
}else{if(W===-1*(this.$listContainer.width()-this.$arrowsContainer.width())-X){this.$arrows.last().addClass(h)
}}}else{this.$arrows.first().addClass(h);
this.$arrows.last().addClass(h)
}}};
B.fn[R]=function(W){return this.each(function(){if(!B.data(this,R)){B.data(this,R,new o(this,W).init())
}})
};
B.fn[F]=function(){B(j)[R]()
};
M=function M(){B(j)[R]()
};
B(g).ready(M);
B(g).on("tmg:page-loaded tmg:video-sequence-loaded",M)
})(tmgJQ,window,document);
(function(c,e,k){var r,d=function d(z){this.$component=c(z);
this.defaults={classes:{disabledLiveHeadline:"headline--live-disabled"},selectors:{lifePost:".live-post.component",lifeStreamBar:".live-stream__bar",lifeStreamWrapper:".live-stream__post-wrapper",lifeStreamButton:".live-stream__bar-button",liveIndicator:".headline--live",liveHeadline:"headline--live"}};
this.dataOptions=this.$component.data("options")||"{}";
this.dataOptions=this.dataOptions?c.parseJSON(this.dataOptions.replace(/'/g,'"')):{};
this.options=c.extend({},this.defaults,this.dataOptions);
this.init()
};
d.prototype={init:function r(){this.isActive=false;
this.lifePost=this.options.selectors.lifePost;
this.$lifePublishDate=c("time.article-date-published[itemprop=datePublished]");
this.$lifeMetaPublishDate=c("meta[itemprop=datePublished]");
this.$wrapper=this.$component.find(this.options.selectors.lifeStreamWrapper);
this.$btn=this.$component.find(this.options.selectors.lifeStreamButton);
this.$window=c(e);
this.livestream_enabled=this.options.livestream_enabled==="true";
this.livestream_url=this.options.live_stream_url;
this.timeout=+this.options.refresh_interval*1000;
this.timestamp=0;
this.livePostList=[];
this.cookieName="liveStreamAutoRefresh"+e.location.pathname.replace(/\//g,"_");
this.timer=null;
this.needsRefresh=false;
if(!e.CQ&&this.livestream_enabled){this.isActive=true;
this.setEvents();
this.findNewestTimestampFromDOM();
this.populateLivepostList();
this.checkCookieSettings()
}else{this.die(e.CQ)
}},populateLivepostList:function t(){var z=this;
z.livePostList=[];
c.each(z.$component.find(z.lifePost),function(A,B){z.livePostList[A]={id:c(B).attr("id"),html:B}
})
},setEvents:function s(){var z=this;
if(z.$btn){z.$btn.on("click",function(){if(z.$btn.hasClass("js-button-is-on")){z.setCookieSetting(false);
z.stopAutoRefresh();
z.setButtonsState(false)
}else{z.setCookieSetting(true);
z.startAutoRefresh();
z.setButtonsState(true)
}})
}},setButtonsState:function g(z){if(z){this.$btn.addClass("js-button-is-on")
}else{this.$btn.removeClass("js-button-is-on")
}},checkCookieSettings:function a(){var z=Cookies.get(this.cookieName);
if(!z){this.setCookieSetting(true)
}if(z==="false"){this.stopAutoRefresh();
this.setButtonsState(false)
}else{this.startAutoRefresh();
this.setButtonsState(true)
}},die:function w(z){this.stopAutoRefresh();
if(!z){this.$component.find(this.options.selectors.lifeStreamBar).remove();
c(this.options.selectors.liveHeadline).addClass(this.options.classes.disabledLiveHeadline)
}},setCookieSetting:function x(z){this.autorefresh=z;
Cookies.set(this.cookieName,z,{expires:365,path:"/"})
},startAutoRefresh:function f(){this.autoRefresh()
},autoRefresh:function j(){var z=this;
z.liveReload();
this.timer=setTimeout(function(){z.autoRefresh()
},z.timeout)
},stopAutoRefresh:function h(){clearTimeout(this.timer);
delete this.timer
},findIndexByKeyValue:function u(z,B,C){for(var A=0;
A<z.length;
A++){if(z[A][B]==C){return A
}}return null
},liveReload:function p(){var C=this,z=C.livestream_url.replace("TIMESTAMP.json",this.timestamp+".json"),A="[]",B=0;
if(!C.isActive){return
}else{C.isActive=false
}C.populateLivepostList();
c.ajax({url:z,method:"GET",timeout:5000,cache:false,dataType:"text",isModified:true}).done(function(D){B=C.$window.scrollTop();
var E=JSON.parse(D);
C.isActive=E.refresh;
if(E.posts){C.findNewestTimestampFromJson(E.posts);
C.cleanPosts(E.posts);
C.modifyOrAddPosts(E.posts);
C.reorderPosts(E.posts);
C.initPosts();
if(E.iso8601FormattedPublicationDate){C.updatePostTimeIso(E.iso8601FormattedPublicationDate)
}if(E.dateAndTimeFormattedPublicationDate){C.updatePostTimeString(E.dateAndTimeFormattedPublicationDate)
}C.$window.scrollTop(B)
}if(!C.isActive){C.die()
}})
},updatePostTimeIso:function l(z){this.$lifePublishDate.attr("datetime",z);
this.$lifeMetaPublishDate.attr("content",z)
},updatePostTimeString:function m(z){this.$lifePublishDate.text(z)
},findNewestTimestampFromDOM:function q(){var A=this,z=A.timestamp;
A.populateLivepostList();
if(!A.needsRefresh){c.each(A.livePostList,function(B,C){var D=c(C.html).data("timestamp");
if(D>z){z=D
}})
}else{A.needsRefresh=false;
z=0
}A.timestamp=z
},findNewestTimestampFromJson:function v(z){var B=this,A=B.timestamp;
if(!B.needsRefresh){c.each(z,function(C,D){if(D.modificationTimestamp>A){A=D.modificationTimestamp
}})
}else{B.needsRefresh=false;
A=0
}B.timestamp=A
},cleanPosts:function b(z){var A=this;
c.each(A.livePostList,function(C,D){var B=A.findIndexByKeyValue(z,"postId",D.id);
if(B==null){A.livePostList[B]=undefined;
A.$wrapper.find("#"+D.id).remove()
}})
},modifyOrAddPosts:function o(z){var A=this;
c.each(z,function(C,D){var B=A.$wrapper.find("#"+D.postId);
if(D.html){if(B.length){B.replaceWith(D.html)
}else{if(A.$wrapper.find(A.lifePost).eq(C).length){A.$wrapper.find(A.lifePost).eq(C).after(D.html)
}else{A.$wrapper.append(D.html)
}}}else{if(!B.length){A.needsRefresh=true
}}})
},reorderPosts:function n(B){var C=this,A=null,z=null;
c.each(B,function(D,E){z=k.getElementById(E.postId);
A=c(C.lifePost).index(z);
if(D!=A){C.$wrapper.find(C.lifePost).eq(D).before(c(z))
}})
},initPosts:function y(){c(".js-video-player").telegraph_videoPlayer();
c(".live-post .responsive-image").each(function(){lzld(this)
});
if("$jqOpta" in e){$jqOpta.widgetStart()
}}};
c.fn.telegraph_liveStream=function(z){return this.each(function(){var A=c(this);
if(!A.data("live_stream")){A.data("live_stream",new d(this))
}})
};
r=function r(){c(".js-live-stream").telegraph_liveStream()
};
c(k).ready(r);
c(k).on("tmg:page-loaded",r)
})(tmgJQ,window,document);
(function(e,a){var f,g=function g(j,h){this.$paywall=e(j);
this.options=h;
this.config={};
this.init()
};
g.prototype={defaults:{screenReaderOnlyLinkSelector:"a.sr-only:first"},init:function f(){this.config=e.extend({},this.defaults,this.options);
this.screenReaderOnlyLink=this.$paywall.find(this.config.screenReaderOnlyLinkSelector);
this.appendReturnURL();
this.setInitialFocus();
this.attachEvents()
},attachEvents:function d(){var h=this;
e("body").on("focus blur","a",function(){if(!e(this).parents(".paywall").length){h.setInitialFocus()
}})
},appendReturnURL:function c(){var h=this.$paywall.find("a, area");
e.each(h,function(l,j){var k=e(j);
k.attr("href",k.attr("href").replace(/redirectTo=/i,"redirectTo="+encodeURIComponent(a.location.href)))
})
},setInitialFocus:function b(){if(this.screenReaderOnlyLink.length){this.screenReaderOnlyLink.focus()
}}};
f=function f(){var h=e(".paywall"),j=[];
h.each(function(){if(!e.data(this,"paywall")){e.data(this,"paywall",j.push(new g(this)))
}})
};
e(a).ready(f);
e(a).on("tmg:page-loaded",f)
})(tmgJQ,document);
(function(d,h,l){var s,a="telegraph_StickyVideo",b="sticky-video",w=a+"_init",q="."+b,u="sticky-video-init",t=".sequence-area",n=".sticky-video__outer",k=".sticky-video__container",p=".video-player",f="sticky-video--resized",e="sticky-video--sticky",v=function v(y,x){this.options=x;
this.elem=y;
this.$elem=d(y);
this.$outer=d(y).find(n);
this.$container=d(y).find(k);
this.$video=d(y).find(p);
this.$sequenceArea=d(y).closest(t);
if(this.$sequenceArea.length===0){this.$sequenceArea=this.$container
}this.dataOptions=this.$elem.data("options")?d.parseJSON(this.$elem.data("options").replace(/'/g,'"')):{};
this.domElements={};
this.eventsInitialised=false
};
v.prototype={defaults:{minVideoHeight:220,maxVideoHeight:0,maxVideoWidth:0,videoRatio:0,mediaQuery:"xs",activeViewport:{md:true,lg:true,xl:true}},init:function s(){var x=d("body"),y=this;
if(!x.data(u)){x.data(u,1)
}if(x.data(u)<=10){this.options=d.extend({},this.defaults,this.dataOptions,this.options);
this.options.maxVideoHeight=Math.floor(this.$container.height());
if(this.options.maxVideoHeight>0){this.options.maxVideoWidth=Math.floor(this.$sequenceArea.width());
this.options.videoOffsetTop=Math.floor(this.$container.offset().top);
this.options.videoRatio=this.options.maxVideoWidth/this.options.maxVideoHeight;
this.options.offSetControl=this.getSequencePositionTop();
if(this.viewportSticky()){this.$elem.css("height",this.options.maxVideoHeight+parseInt(this.$outer.css("padding-top"))+parseInt(this.$outer.css("padding-bottom")));
this.$container.css("height",this.options.maxVideoHeight)
}this.initEvents()
}else{setTimeout(function(){d(q)[a]();
x.data(u,x.data(u)+1)
},1000)
}}return this
},initEvents:function g(){var x,y=this;
if(!y.eventsInitialised){x=d.proxy(y.restart,y);
y.eventsInitialised=true;
d(l).on("tmg:ooyala-player-breakpoint-class-set",function(){y.options.mediaQuery="";
x();
y.$elem.find(".tmgv-bp-min-xxs, .tmgv-bp-min-xs, .tmgv-bp-min-sm, .tmgv-bp-min-md").removeClass("tmgv-bp-min-xs tmgv-bp-min-sm tmgv-bp-min-md tmgv-bp-max-xxs tmgv-bp-max-xs tmgv-bp-max-sm tmgv-bp-max-md").addClass("tmgv-bp-min-xs tmgv-bp-max-lg")
});
d(h).resize(x);
this.observeScroll()
}},restart:function o(){if(this.options.mediaQuery!=h.tmg.getMediaQuery()){d("body").data(u,0);
this.resetStyles();
this.init();
d(h).trigger("scroll")
}},viewportSticky:function j(){return typeof this.options.activeViewport[h.tmg.getMediaQuery()]==="boolean"&&this.options.activeViewport[h.tmg.getMediaQuery()]===true
},resetStyles:function r(){this.$elem.css("height","auto");
this.$container.css("height","auto");
this.$container.css("width","auto");
this.$video.css("height","auto");
this.$video.css("width","auto");
this.$outer.removeClass(f);
this.$outer.removeClass(e);
this.options.mediaQuery=h.tmg.getMediaQuery();
this.options.maxVideoWidth=Math.floor(this.$sequenceArea.width());
this.options.offSetControl=this.getSequencePositionTop()
},getSequencePositionTop:function m(){return this.$sequenceArea.get(0).getBoundingClientRect().top-l.body.getBoundingClientRect().top
},observeScroll:function c(){var x=this;
d(h).scroll(function(){var y=d(h).scrollTop(),D=x.options.maxVideoHeight+x.options.videoOffsetTop-y,C=false,z,B,A=d.proxy(x.restart,x);
if(x.options.offSetControl!=x.getSequencePositionTop()){x.options.mediaQuery="";
A()
}else{if(x.viewportSticky()){if(y>x.options.videoOffsetTop){x.$outer.addClass(f);
z=D;
if(z<=x.options.minVideoHeight){x.$outer.addClass(e);
z=x.options.minVideoHeight;
C=true
}else{x.$outer.removeClass(e)
}B=Math.floor(x.options.videoRatio*z)
}else{x.$outer.removeClass(f);
x.$outer.removeClass(e);
z=x.options.maxVideoHeight;
B=Math.floor(x.options.videoRatio*z)
}if(C){x.$container.css("padding-top",0).css("height","auto")
}else{x.$container.css("padding-top",x.options.maxVideoHeight-z).css("height",x.options.maxVideoHeight)
}x.$video.css("height",z).css("width",B)
}}}).trigger("scroll")
}};
d.fn[a]=function(x){return this.each(function(){if(!d.data(this,a)){d.data(this,a,new v(this,x).init())
}})
};
d.fn[w]=function(){d(q)[a]()
};
s=function s(){d(q)[a]()
};
d(l).ready(s);
d(l).on("tmg:page-loaded",s)
})(tmgJQ,window,document);
(function(e,j,q){var v,a="timelabels",w=a+"_init",b=a+"-done",u=".list-of-entities[data-timelabels='true']",p=".list-of-entities__item",l="m_meta-property__date",d="."+l,t=d+"-date",s=d+"-separator",n=d+"-time",c=l+"-descriptor",o="."+c,g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=function r(z,y){this.options=y;
this.elem=z;
this.$elem=e(z);
this.dataOptions=this.$elem.data("options")?e.parseJSON(this.$elem.data("options").replace(/'/g,'"')):{};
this.dateTimeElements={};
this.itemsElements={};
this.interval=null;
this.oneMinute=60;
this.oneHour=3600;
this.now=this.options&&this.options.now?this.options.now:Date.now();
this.date=new Date(this.now);
this.nowTimestamp=this.now/1000|0;
var x=this.date.getMonth()*1+1;
this.dateTodayZeroHours=new Date(this.date.getFullYear()+"-"+(x<10?"0":"")+x+"-"+(this.date.getDate()<10?"0":"")+this.date.getDate());
this.todayZeroHoursTimestamp=this.dateTodayZeroHours.getTime()/1000
};
r.prototype={defaults:{autoUpdate:false},init:function v(){this.options=e.extend({},this.defaults,this.dataOptions,this.options);
this.findItems();
this.findDateTimeElements();
this.addDescriptors();
this.updateDescriptorsString();
if(this.options.autoUpdate){setInterval(this.updateDescriptorsString,1000)
}return this
},findItems:function m(){this.itemsElements=this.$elem.find(p)
},findDateTimeElements:function k(){this.dateTimeElements=this.itemsElements.find(d)
},addDescriptors:function f(){this.dateTimeElements.find(o).remove();
this.dateTimeElements.append(e("<span>").addClass(c))
},updateDescriptorsString:function h(){var x=this;
e.each(this.itemsElements,function(z,B){B=e(B);
var F,E,A,y=B.data("timestamp")*1,C=y/1000,D=Math.floor(x.nowTimestamp-C);
if(C>=x.todayZeroHoursTimestamp){if(D<1){E="&lt;1m"
}else{if(Math.ceil(D/x.oneMinute)<60){E=Math.ceil(D/x.oneMinute)+"m"
}else{F=new Date(y);
E=B.find(n).text().replace(/[^0-9\:]/g,"");
if(B.find(n).text()=="12:00am"){E="00:00"
}else{if(B.find(n).text().toLowerCase().indexOf("pm")!=-1){A=parseFloat(E.replace(":","."));
if(A<12){A+=12
}E=(A.toFixed(2)+"").replace(".",":")
}}}}}else{E=B.find(t).text()
}B.find(t).hide();
B.find(s).hide();
B.find(n).hide();
B.find(o).html(E)
});
this.$elem.addClass(b)
}};
e.fn[a]=function(x){return this.each(function(){if(!e.data(this,a)){e.data(this,a,new r(this,x).init())
}})
};
e.fn[w]=function(x){e(u)[a](x)
};
v=function v(){e(u)[w]()
};
e(q).ready(v);
e(q).on("tmg:page-loaded",v)
})(tmgJQ,window,document);
(function(e,k,u){var x,a="timebreaks",G=a+"_init",c=a+"-done",q="day-splitter",h="item-has-timebreak-",v=".list-of-entities[data-timebreaks='true']",g=".list-of-entities",F=".list-of-entities__item",C=".component-header",d=".m_timebreak",E=".component-subheading",z=".m_meta-property__date-date",y=".m_meta-property__date",f='<div class="component-header m_timebreak"><h2 class="component-heading"><time class="m_meta-property__date" datetime=""><span class="m_meta-property__date-date"></span></time></h2><p class="component-subheading"></p></div>',D=0,A=0,s="",j=false,w=function w(J,I){this.options=I;
this.elem=J;
this.$elem=e(J);
this.dataOptions={};
this.dateTimeElements={};
this.itemsElements={};
this.interval=null;
this.now=this.options&&this.options.now?this.options.now:Date.now();
this.date=new Date(this.now);
this.nowHours=this.date.getHours();
this.nowTimestamp=this.now/1000|0;
var H=this.date.getMonth()*1+1;
var K=this.date.getDate()*1;
this.dateTodayZeroHours=new Date(this.date.getFullYear()+"-"+(H<10?"0":"")+H+"-"+(this.date.getDate()<10?"0":"")+this.date.getDate());
this.todayZeroHoursTimestamp=this.dateTodayZeroHours.getTime()/1000
};
w.prototype={defaults:{dictionary:{weekDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],hours:["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Twenty One","Twenty Two","Twenty Three"],labels:{timeTimebreakIntro:"",timeTimebreakMain:"timeTimebreakMain",dayTimebreakIntro:"",dayTimebreakMain:"dayTimebreakMain"}},autoUpdate:false},init:function x(){this.options=e.extend({},this.defaults,this.dataOptions,this.options);
this.findItems();
this.addTimebreaks();
if(this.options.autoUpdate){var H=this;
setInterval(function(){H.addTimebreaks()
},1000)
}return this
},findItems:function o(){this.itemsElements=this.$elem.find(F)
},removeTimebreaks:function t(){this.$elem.find(d).remove();
this.$elem.removeClass(function(H,I){var J=new RegExp("(^|s)"+h+"S+","g");
return(I.match(J)||[]).join(" ")
})
},dayNth:function r(H){if(H>3&&H<21){return H+"th"
}switch(H%10){case 1:return H+"st";
case 2:return H+"nd";
case 3:return H+"rd";
default:return H+"th"
}},getLabel:function B(H,I){if(typeof this.options.dictionary.labels[H]=="function"){return this.options.dictionary.labels[H](I)
}else{if(typeof this[this.options.dictionary.labels[H]]=="function"){return this[this.options.dictionary.labels[H]](I)
}}return this.options.dictionary.labels[H]
},firstTimebreakIntro:function n(K){var L=new Date(K),J=this.options.dictionary.weekDays[L.getDay()],I=this.dayNth(L.getDate()),H=this.options.dictionary.months[L.getMonth()];
return J+" "+I+" "+H
},timeTimebreakMain:function l(J){var K=new Date(J),I=(this.nowHours-K.getHours())%24;
return"More than "+this.options.dictionary.hours[I-1]+" hour"+(I>1?"s":"")+" ago"
},dayTimebreakMain:function b(J){var M=new Date(J),I=this.options.dictionary.weekDays[M.getDay()],H=this.options.dictionary.months[M.getMonth()],K=M.getDate(),L=M.getFullYear();
return I+" "+K+" "+H+" "+L
},timeToDatetimeAttribute:function m(H){var I=new Date(H);
return I.getFullYear()+"-"+(I.getMonth()<9?"0":"")+(I.getMonth()+1)+"-"+(I.getDate()<10?"0":"")+I.getDate()+"T00:00:00"
},addTimebreaks:function p(){var H=this;
this.removeTimebreaks();
e.each(this.itemsElements,function(L,V){D++;
if(D==1||j=="bottom"){A=V;
j=false;
return true
}V=e(V);
if(L==0&&V.closest(g+":first").find(">"+C).length&&V.closest(g+":first").find(">"+C).css("display")!="none"){A=V;
j=false;
return true
}var M,S,Q,O=V.parents(v)[0],J=V.data("timestamp")*1,U=J/1000,P=Math.floor(H.nowTimestamp-U),T=false,I="",K="",N="",R;
M=new Date(J);
if(U>=H.todayZeroHoursTimestamp){S=M.getHours();
if(s==S||(H.date.getTime()-M.getTime())/60000<60){A=V[0];
j=false;
return true
}I=H.getLabel("timeTimebreakIntro",J);
K=H.getLabel("timeTimebreakMain",J);
s=S;
T="top";
N=q
}else{K=H.getLabel("dayTimebreakMain",J);
if(s==K){A=V[0];
j=false;
return true
}I=H.getLabel("dayTimebreakIntro",J);
s=K;
T="top"
}R=e(f).addClass(N);
R.find(E).html(I);
R.find(z).html(K);
R.find("time").attr("datetime",H.timeToDatetimeAttribute(J));
if(L==0){if(e(A).find(C).length){A=V;
j=false;
return true
}T="bottom";
e(A).addClass(h+T).append(R)
}else{V.addClass(h+T).prepend(R)
}A=V[0];
j=T
});
this.$elem.addClass(c)
}};
e.fn[a]=function(H){return this.each(function(){if(!e.data(this,a)){e.data(this,a,new w(this,H).init())
}})
};
e.fn[G]=function(H){e(v)[a](H)
};
x=function x(){e(v)[G]()
};
e(u).ready(x);
e(u).on("tmg:page-loaded",x)
})(tmgJQ,window,document);
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(a){return typeof a
}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a
};
window.tmg=window.tmg||{};
if(typeof window.tmg.firstMetadataLoaded!="boolean"){window.tmg.firstMetadataLoaded=false
}(function(v,A,e){var G,J="telegraph_VideoSequence",H="js-video-sequence",B=J+"_init",f="."+H,C="list-of-entities__item-image-container",u="."+C,y=".list-of-entities__item-body-headline:first",h=".section.videoPlayer",a=".list-slider:first",M=".list-of-entities__item-series-label",n=".list-of-entities__item-body-series-title",L="#sequenceHeading",t="item__now-playing",o=".list-of-entities__item.video",F="no-played-overlay",x=A.location.pathname.endsWith(".html")||A.CQ&&A.CQ.WCM,l=function l(O,N){this.options=N;
this.elem=O;
this.$elem=v(O);
this.$document=v(e);
this.$body=v("body");
this.dataOptions=this.$elem.data("options")?v.parseJSON(this.$elem.data("options").replace(/'/g,'"')):{}
};
l.prototype={defaults:{templateSelector:"#sequenceItemTemplate",templateRegex:/{{(.*?)}}/g,sequenceURL:"/bin/telegraph/video/sequence/?path=%PATH%&playlist=%PLAYLIST%",sequenceData:null,dictionary:{headerPrefix:"Next in"},sponsoredClass:"sponsored-list-item",sponsoredReplaceSelector:".list-of-entities__item-channel-name",sponsoredLabel:'<span class="list-of-entities__item-tag sponsored-label">Sponsored</span>',currentPageURL:"",playlist:"none"},init:function G(){var N=this;
this.options=v.extend({},this.defaults,this.dataOptions,this.options);
this.rawTemplate=v(this.options.templateSelector).html();
this.playerContainer=v(h);
if(this.rawTemplate.length===0||this.playerContainer.length!==1&&!A.jasmine){return this
}if(this.options.sequenceData===null){if(!A.tmg||!A.tmg.GET_PARAM||!A.tmg.GET_PARAM.playlist){return this
}this.options.playlist=A.tmg.GET_PARAM.playlist;
this.options.sequenceURL=this.factorSequenceUrl(this.options.sequenceURL,e.location.pathname.replace(".html",""),this.options.playlist);
this.loadSequence(this.options.sequenceURL)
}else{this.sequenceData=this.options.sequenceData;
this.parseTemplate(this.options.sequenceData);
setTimeout(function(){N.$elem.trigger("selectFirstItem")
},0)
}this.initEvents();
return this
},initEvents:function g(){var O=v.proxy(this.itemSelectedEvent,this),N=v.proxy(this.videoPlayedEvent,this),P=v.proxy(this.anchorClickedEvent,this);
this.$document.on("tmg:list-item-selected",O).on("tmg:video-played",N).on("tmg:slider-list-item-anchor-clicked",P)
},reInitAds:function K(O){if(this.options.currentPageURL!==""&&this.options.currentPageURL!==O){var N=new CustomEvent("tmg:init-ads",{bubbles:false,cancelable:true,detail:undefined});
e.dispatchEvent(N);
return true
}return false
},factorSequenceUrl:function z(P,N,O){return P.replace("%PATH%",N).replace("%PLAYLIST%",O)
},factorVideoHeadMetadataUrl:function s(N,O){if(N.endsWith("/")){N=N.slice(0,N.length-1)
}if(N.endsWith(".html")){N=N.slice(0,N.length-5)
}N+=".metadata";
if(O){N+=".html"
}return N
},factorCurrentPageUrl:function j(N,O,P){if(O){if(N.endsWith("/")){N=N.slice(0,N.length-1)
}if(!N.endsWith(".html")){N+=".html"
}}return N+"?playlist="+P
},factorVideoMetadataUrl:function w(N){if(N.endsWith("/")){N=N.slice(0,N.length-1)
}if(!N.endsWith(".html")){N+=".html"
}return N
},itemSelectedEvent:function d(Q,R,P){var O,N;
if(typeof R=="undefined"||typeof P=="undefined"){return false
}O=v(R);
N=v(P);
if(typeof N.data("video-path")=="undefined"){return false
}this.loadVideoMetaData(N);
O.find(o).removeClass(t);
N.addClass(t);
return true
},videoPlayedEvent:function I(N){if(this.$document.data("video-autoplay-on")===true){this.$body.addClass(F)
}},anchorClickedEvent:function b(O,P){var N=v(P);
if(!N.hasClass(C)&&N.parents(y).length===0&&!N.parents(o).hasClass(t)&&P.tagName==="A"){A.location.href=P.href
}else{if(A.jasmine){return false
}}},loadVideoMetaData:function r(O){var S=this,N=this.sequenceData.items[O.index()],P=N.pagePath,R;
if(typeof P==="undefined"){return false
}R=this.factorVideoHeadMetadataUrl(P,x);
v.ajax({type:"GET",mimeType:"text/html",url:R,success:function Q(T){S.processResponseHeadMetadata(T,O)
}})
},loadSequence:function E(N){var O=this;
v.getJSON(N,function(P){O.processSequenceResponse(P)
}).fail(function(){A.location.href=A.location.protocol+"//"+A.location.host+A.location.pathname
})
},processSequenceResponse:function q(N){this.sequenceData=N;
this.parseTemplate(N)
},processStaticOverwrites:function D(){if((typeof metaStaticOverwrites==="undefined"?"undefined":_typeof(metaStaticOverwrites))==="object"){v.each(metaStaticOverwrites,function(N,O){v('meta[name="'+N+'"]').attr("content",O)
})
}if((typeof dataLayerStaticOverwrites==="undefined"?"undefined":_typeof(dataLayerStaticOverwrites))==="object"&&(typeof dataLayer==="undefined"?"undefined":_typeof(dataLayer))==="object"){v.each(dataLayerStaticOverwrites,function(N,O){dataLayer[N]=O
})
}},processResponseHeadMetadata:function k(O,V){var S=this,R=S.sequenceData.items[V.index()],U=R.pagePath,N=R.videoPath,W,P=S.factorVideoMetadataUrl(N),T=v("head");
v("meta").remove();
v('script[type="application/ld+json"]').remove();
if(A.history&&A.history.pushState&&!A.jasmine){e.title=R.videoTitle;
W=S.factorCurrentPageUrl(U,x,this.options.playlist);
if(S.options.currentPageURL!==W){A.history.pushState({index:V.index()},"video"+V.index()+1,W)
}}var Q=v(O.replace(/\r/g,"").replace(/\n/g,"").replace(/\t/g,""));
v.each(Q,function(X,Y){if(Y.nodeName==="SCRIPT"&&Y.getAttribute("src")===null){T.append(Y)
}else{if(Y.nodeName==="META"&&Y.getAttribute("name")!="tmgads.pagetype"&&Y.getAttribute("name")!="DCSext.Content_Type"){T.append(Y)
}}});
T.append('<meta name="tmgads.pagetype" content="video-play">').append('<meta name="DCSext.Content_Type" content="video-play">');
S.processStaticOverwrites();
v.get(P,function(X){S.processResponseVideoMetadata(X,W)
});
if((typeof _satellite==="undefined"?"undefined":_typeof(_satellite))==="object"&&A.tmg.firstMetadataLoaded===true){_satellite.track("customPageLoadVideo")
}A.tmg.firstMetadataLoaded=true
},processResponseVideoMetadata:function m(N,O){var P=this;
P.playerContainer.html(N);
setTimeout(function(){v(e).trigger("tmg:page-loaded");
P.reInitAds(O);
P.options.currentPageURL=O;
P.$body.removeClass(F)
},500)
},parseTemplate:function c(N){var P=this,O=0;
if(typeof N.playlistName==="string"){v(L).html(P.options.dictionary.headerPrefix+": "+N.playlistName)
}v.each(N.items,function(R,T){T.playlistName=N.playlistName;
var Q,S=P.rawTemplate.replace(P.options.templateRegex,function(V,U){if(U==="imageUrl"&&!T[U]){T.imageUrl="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-10116.457%20-3690%20842.903%20474.133%22%3E%3Cg%20transform%3D%22translate(-10116.431%20-3690.027)%22%3E%3Crect%20fill%3D%22%23bcbcbc%22%20width%3D%22335.266%22%20height%3D%22335.266%22%20transform%3D%22translate(184.386%20237.093)%20rotate(-45)%22%2F%3E%3Cpath%20fill%3D%22%23f0f0f0%22%20d%3D%22M70.13%2C173.67c0-32.324%2C24.807-54.875%2C46.356-64.648l.752%2C1c-8.018%2C9.271-13.03%2C19.294-13.03%2C40.342%2C0%2C22.8%2C5.763%2C38.588%2C15.034%2C49.363%2C2.756-3.257%2C4.26-9.021%2C4.26-13.782V148.112L164.6%2C118.795l.5.752c-3.759%2C5.011-5.011%2C9.772-5.011%2C18.542V164.4c0%2C13.531-25.057%2C31.071-39.841%2C36.584%2C11.025%2C12.027%2C27.062%2C17.039%2C44.1%2C17.039a111.57%2C111.57%2C0%2C0%2C0%2C13.28-.752V117.792c-15.535-.752-30.069-5.262-43.6-9.021-11.276-3.257-22.05-6.014-31.823-6.014-18.041%2C0-39.841%2C6.014-39.59%2C31.823a61.7%2C61.7%2C0%2C0%2C0%2C.5%2C6.515l-1.253.5a56.6%2C56.6%2C0%2C0%2C1-4.26-22.05C57.351%2C90.48%2C78.9%2C64.421%2C113.73%2C64.421c14.784%2C0%2C27.563%2C3.508%2C39.841%2C6.765%2C13.03%2C3.759%2C25.558%2C7.517%2C40.342%2C7.517%2C7.267%2C0%2C10.775-3.257%2C10.775-10.023S201.43%2C57.906%2C196.92%2C56.4l.251-1c13.781%2C2.255%2C30.319%2C10.775%2C30.319%2C29.317%2C0%2C24.055-16.788%2C33.326-44.1%2C33.326h-4.009v98.725c20.8-3.007%2C34.078-11.526%2C43.85-27.312l.752.5c-12.027%2C33.577-32.574%2C62.894-75.422%2C62.894-42.848.251-78.429-27.312-78.429-79.181m113.509-63.645c-31.322%2C0-58.634-15.285-81.436-15.285-14.533%2C0-31.071%2C5.763-36.834%2C21.3l.251.251C72.385%2C104.262%2C88.171%2C101%2C102.2%2C101c22.8%2C0%2C50.365%2C15.285%2C81.436%2C15.285%2C25.057%2C0%2C39.59-7.768%2C42.1-27.813h-.5c-3.759%2C15.034-16.538%2C21.549-41.595%2C21.549M93.433%2C126.562c-11.025%2C11.526-21.048%2C26.31-21.048%2C47.108%2C0%2C51.868%2C35.581%2C77.176%2C77.176%2C77.176%2C25.809%2C0%2C42.347-12.529%2C52.871-23.3l-.251-.752c-12.028%2C9.522-27.814%2C17.54-52.62%2C17.54-33.827%2C0-70.661-23.053-70.661-70.912a78.989%2C78.989%2C0%2C0%2C1%2C15.034-46.606Zm38.588%2C56.88V144.353l-6.264%2C4.51V186.7a19.967%2C19.967%2C0%2C0%2C1-2%2C9.021l.5.251c3.257-3.007%2C7.768-7.016%2C7.768-12.529%22%20transform%3D%22translate(271.154%2083.377)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
}return T[U]?T[U]:""
});
Q=v(S).appendTo(P.$elem);
P.setSponsoredState(Q,!!T.isSponsored);
if(T.currentPage===true){O=R
}});
P.$elem.parents(a).data("selected-item",O);
v.each(v(M),function(Q,R){if(v.trim(v(R).text())===""){v(R).remove()
}});
v.each(v(n),function(Q,R){if(v.trim(v(R).text())===""){v(R).remove()
}});
v(e).trigger("tmg:video-sequence-loaded")
},setSponsoredState:function p(N,O){if(O){N.addClass(this.options.sponsoredClass);
N.find(this.options.sponsoredReplaceSelector).replaceWith(this.options.sponsoredLabel)
}}};
v.fn[J]=function(N){return this.each(function(){if(!v.data(this,J)){v.data(this,J,new l(this,N).init())
}})
};
v.fn[B]=function(){v(f)[J]()
};
G=function G(){v(f)[J]()
};
v(e).ready(G);
v(e).on("tmg:page-loaded",G)
})(tmgJQ,window,document);
var _createClass=function(){function a(e,c){for(var b=0;
b<c.length;
b++){var d=c[b];
d.enumerable=d.enumerable||false;
d.configurable=true;
if("value" in d){d.writable=true
}Object.defineProperty(e,d.key,d)
}}return function(d,b,c){if(b){a(d.prototype,b)
}if(c){a(d,c)
}return d
}
}();
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}(function(e,h,k,j,d,f){var c={commentCountDelay:180000,networkConfig:{network:"",strings:{postEditButton:"Update comment",postEditAsButton:"Update comment",postAsButton:"Post comment",showMore:"Show more"}},convConfig:{siteId:"",articleId:"",collectionMeta:"",initialNumVisible:5,disableAvatars:true,readOnly:false,datetimeFormat:{minutesUntilAbsoluteTime:-1,absoluteFormat:"d MMM yyyy h:mma"}},livefyreConfiguration:{src:"//cdn.livefyre.com/Livefyre.js",commentCount:"/api/v1.1/public/comments/ncomments/",authToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJ0ZWxlZ3JhcGguZnlyZS5jbyIsInVzZXJfaWQiOiJsdWthc3pibGFzeiIsImRpc3BsYXlfbmFtZSI6Imx1a2FzemJsYXN6IiwiZXhwaXJlcyI6MTQ4MDMxMDUzNi43OTksImlhdCI6MTQ3MDMxMDUzNn0.L2nirxqXRR2kh3XW3I5l28s9bl6hawB7CQJDKHEHrpc"}};
var b=function(){function r(D){var C=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
_classCallCheck(this,r);
this.options=e.extend(true,{},c,C);
this.status="initial";
this.element=D;
this.$element=e(D);
this.links=D.querySelectorAll("a[href]");
this.loadButton=D.querySelector(".comments-block__load");
this.loginContainer=D.querySelector(".comments-block__login-cta-container");
this.livefyreId="livefyre-"+this.options.convConfig.articleId;
this.livefyreContent=D.querySelector(".livefyre-content");
this.livefyreContent.setAttribute("id",this.livefyreId);
this.jumpLinks=k.querySelectorAll(".comment-cta");
this.counts=k.querySelectorAll('[data-js="comment-count"]');
return this
}_createClass(r,[{key:"init",value:function A(){var C=f.isFeatureEnabled()&&this.options.articleCommentingConfig;
if(C){f.processCounts();
this.bindEvents();
this.initJumpLinks();
this.initCounts();
this.initLoginBox();
this.makeCommentsVisible();
if(this.checkUrlHash()){this.loadComments()
}}}},{key:"makeCommentsVisible",value:function t(){this.element.classList.add("is-visible");
var C=Array.prototype.slice.call(this.jumpLinks);
C.forEach(function(D){return D.classList.add("is-visible")
})
}},{key:"bindEvents",value:function s(){this.loadButton.addEventListener("click",this.onLoadButtonClick.bind(this));
h.addEventListener("hashchange",this.onHashChange.bind(this))
}},{key:"onLoadButtonClick",value:function v(){this.loadComments();
this.loadButton.classList.add("loading")
}},{key:"onHashChange",value:function w(){if(this.checkUrlHash()){this.loadComments()
}}},{key:"initJumpLinks",value:function u(){var D=this;
var C=Array.prototype.slice.call(this.jumpLinks);
C.forEach(function(E){E.addEventListener("click",function(){return j.scrollTo(D.element)
})
})
}},{key:"initCounts",value:function x(){var G=this.options.networkConfig.network;
var F=this.options.livefyreConfiguration.commentCount;
var E=this.options.convConfig,H=E.siteId,C=E.articleId;
var I="https://"+G+F;
var J="tmg.commenting.count-";
var D=localStorage.getItem(""+J+C);
if(I.indexOf(".bootstrap.fyre.co")===-1){I=I.replace(".fyre.co",".bootstrap.fyre.co")
}if(D){f.renderIndicatorCount(C,D,true)
}f.fetchCountsFromLiveFyre(H,[C]).then(function(K){if(!K[C]||!K[C].total){return
}if(K[C]&&K[C].total){localStorage.setItem(""+J+C,K[C].total)
}f.renderIndicatorCount(C,K[C].total,true)
})
}},{key:"renderCounts",value:function y(){var C=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;
f.renderIndicatorCount(this.options.convConfig.articleId,C,true)
}},{key:"initLoginBox",value:function p(){if(!d.isLoggedIn()){var C=Array.prototype.slice.call(this.links);
C.forEach(function(D){D.setAttribute("href",tmg.updateRedirectParam(D.href,k.location.href))
});
this.loginContainer.classList.add("is-visible")
}}},{key:"checkUrlHash",value:function z(){return location.hash.substr(1)===this.element.id
}},{key:"loadComments",value:function m(){var C=this;
if(this.status==="initial"){var D=this.options.livefyreConfiguration.src;
this.status="loading";
this.loadButton.innerHTML=this.loadButton.dataset.labelLoading;
f.loadLiveFyreLibrary(D).then(this.initLiveFyre.bind(this)).then(this.openComments.bind(this)).then(function(){C.status="loaded"
})
}}},{key:"initLiveFyre",value:function o(){var F=this;
var D=this.options,G=D.networkConfig,E=D.convConfig;
var C=e.Deferred();
this.options.convConfig.readOnly=!d.isLoggedIn();
this.options.convConfig.el=this.livefyreId;
Livefyre.require(["fyre.conv#3","auth"],function(I,H){F.conv=new I(G,[E],function(J){J.on("initialRenderComplete",function(){if(d.isLoggedIn()){F.highlightUser()
}C.resolve()
});
if(d.isLoggedIn()){J.on("userLoggedIn",F.highlightUser.bind(F));
J.on("userLoggedOut",F.highlightUser.bind(F))
}J.on("commentCountUpdated",F.renderCounts.bind(F))
});
F.authenticateUser(H)
});
return C.promise()
}},{key:"openComments",value:function q(){this.element.classList.add("is-open")
}},{key:"highlightUser",value:function B(){var E=localStorage.getItem("fyre-auth");
this.$element.find(".livefyre-user-styles").remove();
if(E){E=JSON.parse(E);
var D=E.value.profile.id;
var C=this.$element.find(".fyre-editor").css("background-color");
this.$element.append('<style class="livefyre-user-styles">[data-author-id="'+D+'"]{background-color:'+C+"}</style>")
}}},{key:"authenticateUser",value:function n(G){G.delegate({login:function D(H){},logout:function C(H){H(null)
},viewProfile:function F(){}});
var E=d.getLiveFyreToken();
if(E){G.authenticate({livefyre:E})
}else{G.logout(function(){})
}}}]);
return r
}();
var g="telegraph_commenting";
var a=".comments-block";
e.fn[g]=function(m){return this.each(function(){if(!e.data(this,g)){e.data(this,g,new b(this,m).init())
}})
};
function l(){var m=Array.prototype.slice.call(k.querySelectorAll(a));
m.filter(function(n){return e(n).attr("data-options").length>0
}).forEach(function(n){e(n)[g](JSON.parse(n.dataset.options))
})
}tmg.pageReady(l)
})(tmgJQ,window,document,tmg.page,tmg.user,tmg.commenting);
(function(b,a,d){c=function c(){var e=b('[data-js="mid-article-slot"] a');
e.click(function(l){var h=b(l.target);
var m=b(this);
var j=d.readLinkLabel(m,h);
var k=d.readPagePath();
var f=d.readElementClicked(h);
var g=encodeURIComponent(d.buildAnalyticsString("list-of-entities_mid-article-slot","",j,f,k));
if(d.isDtmEnabled()){window._satellite.setCookie("tmgComponentTracking",g,1)
}})
};
window.tmg.pageReady(c)
})(tmgJQ,document,TMG_COMPONENT_TRACKING);
var _createClass=function(){function a(e,c){for(var b=0;
b<c.length;
b++){var d=c[b];
d.enumerable=d.enumerable||false;
d.configurable=true;
if("value" in d){d.writable=true
}Object.defineProperty(e,d.key,d)
}}return function(d,b,c){if(b){a(d.prototype,b)
}if(c){a(d,c)
}return d
}
}();
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}tmg.createNamespace("tmg.Tooltip");
tmg.Tooltip=function(){function g(p,o){_classCallCheck(this,g);
this.tooltipMainClass="js-tooltip-main";
this.tooltipCloseClass="js-tooltip-close";
this.tooltipArrowClass="js-tooltip-arrow";
this.tooltipShowClass="overlay-tooltip--is-visible";
this.tooltipOffset=5;
this.target=p;
this.settings=o;
this.buildTooltip()
}_createClass(g,[{key:"buildTooltip",value:function j(){this.createWrapper();
this.createMarkup();
this.bindEvents()
}},{key:"createWrapper",value:function n(){var o=document.createElement("div");
o.className="overlay-tooltip__wrapper";
if(this.settings.wrapperStyle){o.setAttribute("style",this.settings.wrapperStyle)
}o.style.position="relative";
o.style.overflow="visible";
this.wrapElement(this.target,o);
this.tooltipWrapper=this.target.parentNode
}},{key:"createMarkup",value:function c(){var r=this.settings||false,p=r.buttons;
var q=document.createElement("div");
q.className="overlay-tooltip overlay-tooltip--"+this.settings.positionY+"-"+this.settings.positionX+" "+this.tooltipMainClass;
var o='<button class="overlay-tooltip__close '+this.tooltipCloseClass+'"></button>\n\t\t\t\t\t\t<span class="overlay-tooltip__arrow '+this.tooltipArrowClass+'"></span>\n\t\t\t\t\t\t<div class="overlay-tooltip__content">'+this.settings.content+"</div>";
if(p){o+='<div class="overlay-tooltip__btn-wrapper">';
p.forEach(function(s){o+='<a href="'+s.url+'" class="overlay-tooltip__button '+(s.alternate?"overlay-tooltip__button--alternate":"")+'">'+s.label+"</a>"
});
o+="</div>"
}q.innerHTML=o;
this.tooltipWrapper.append(q);
this.tooltip=this.tooltipWrapper.querySelector("."+this.tooltipMainClass);
this.closeTooltip=this.tooltipWrapper.querySelector("."+this.tooltipCloseClass);
this.arrowTooltip=this.tooltipWrapper.querySelector("."+this.tooltipArrowClass);
this.arrowWidth=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("border-bottom-width"),10);
this.setTooltipPosition();
this.setTooltipArrow()
}},{key:"getTooltipPosition",value:function e(r){var q=0;
var o=0;
var p=r;
while(r){q+=r.offsetLeft-r.scrollLeft+r.clientLeft;
r=r.offsetParent
}o=window.innerWidth-(q+p.offsetWidth);
return{l:q,r:o}
}},{key:"setTooltipPosition",value:function f(){var o=this.target.offsetHeight+this.arrowWidth+this.tooltipOffset+"px";
if(this.settings.positionY==="top"){this.tooltip.style.bottom=o
}if(this.settings.positionY==="bottom"){this.tooltip.style.top=o
}}},{key:"repositioningTooltip",value:function h(){var o=this.getTooltipPosition(this.tooltip);
if(o.l<0&&this.settings.positionX==="right"){this.tooltip.style.right=parseInt(window.getComputedStyle(this.tooltip).getPropertyValue("right"),10)+o.l+"px";
this.arrowTooltip.style.right=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("right"),10)-o.l+"px"
}if(o.r<0&&this.settings.positionX==="left"){this.tooltip.style.left=parseInt(window.getComputedStyle(this.tooltip).getPropertyValue("left"),10)+o.r+"px";
this.arrowTooltip.style.left=parseInt(window.getComputedStyle(this.arrowTooltip).getPropertyValue("left"),10)-o.r+"px"
}}},{key:"resetPositioningTooltip",value:function b(){this.tooltip.style.right="";
this.tooltip.style.left="";
this.setTooltipArrow()
}},{key:"setTooltipArrow",value:function a(){var o=this.target.offsetWidth/2;
if(this.settings.positionX==="left"){this.arrowTooltip.style.left=o-this.arrowWidth+"px"
}if(this.settings.positionX==="right"){this.arrowTooltip.style.right=o-this.arrowWidth/2+"px"
}}},{key:"wrapElement",value:function l(o,q){var p=o.parentNode;
p.insertBefore(q,o);
q.appendChild(o)
}},{key:"bindEvents",value:function d(){var o=this;
this.closeTooltip.addEventListener("click",function(){o.hideTooltip()
});
["orientationchange","resize"].forEach(function(p){window.addEventListener(p,function(){o.resetPositioningTooltip();
o.repositioningTooltip()
})
})
}},{key:"revealTooltip",value:function k(){this.tooltip.classList.add(this.tooltipShowClass);
this.repositioningTooltip()
}},{key:"hideTooltip",value:function m(){this.tooltip.classList.remove(this.tooltipShowClass);
this.resetPositioningTooltip()
}}]);
return g
}();
(function(g,j,l){var r=function r(t,s){this.elem=t;
this.$elem=g(t);
this.options=s;
this.domElements={};
this.customScrollEnabled=(cssua.ua.ie>=9||!cssua.ua.ie)&&!g("body").hasClass("cq-wcm-edit")&&!cssua.ua.mobile
};
r.prototype={init:function q(){this.findDomElements();
g(this.domElements.$listItem).each(function(){g(this).find("a").each(function(){var s=g(this);
s.off();
s.attr("data-url",s.attr("href"));
s.attr("href","javascript:void(0);")
})
});
this.cleanEmptyComponent();
this.attachEvents();
this.setHeadlineTags();
this.setHeaderCounters();
this.setCustomScrollbars();
j.addEventListener("orientationchange",g.proxy(function(){this.moveToHeadlineTag(g(".js-snippet-gallery__tags-wrapper .js-snippet-gallery__tags-item.js-item--active"));
this.setCustomScrollbars()
},this),false);
this.$elem.find(".list-of-entities:first-child .list-of-entities__item:first-child").trigger("click");
return this
},findDomElements:function e(){this.domElements.$listComponent=this.$elem.find(".list-of-entities");
this.domElements.$listItem=this.$elem.find(".list-of-entities__item");
this.domElements.$listWrapper=this.$elem.find(".js-snippet-gallery__list-wrapper");
this.domElements.$nextVideoControl=this.$elem.find(".js-snippet-gallery__nav-controls-next");
this.domElements.$prevVideoControl=this.$elem.find(".js-snippet-gallery__nav-controls-prev");
this.domElements.$snippetTagsWrapper=this.$elem.find(".js-snippet-gallery__tags-wrapper");
this.domElements.$videoDisplay=this.$elem.find(".js-snippet-gallery__display");
this.domElements.$videoDisplayWrapper=this.$elem.find(".js-snippet-gallery__video-wrapper");
this.domElements.$videoScreenInfo=this.$elem.find(".js-snippet-gallery__info-box");
this.domElements.$moduleEntityProperty=this.$elem.find('.m_entity-property-item[data-entity-property-item--name="Rating"]');
this.domElements.$parentContainer=this.$elem.parents(".wide-screen-container");
this.domElements.$backgroundImage=this.domElements.$parentContainer.find(".js-snippet-gallery__background")
},attachEvents:function n(){this.domElements.$listItem.on("click",g.proxy(this.getItemMetadata,this));
this.domElements.$nextVideoControl.on("click",g.proxy(this.nextVideo,this));
this.domElements.$prevVideoControl.on("click",g.proxy(this.prevVideo,this))
},setHeaderCounters:function o(){var s=this.$elem.find(".list-of-entities");
s.each(function(u){var t=s.eq(u),v=t.find(".list-of-entities__item").length;
t.find(".component-heading").first().append("<i>"+v+"</i>")
})
},setHeadlineTags:function h(){var w=g(".list-of-entities").children(".component-header").children("h2");
if(w.length>=1){for(var t=0;
t<w.length;
t++){var s=w.parents(".list-of-entities").eq(t).find(".list-of-entities__item").length;
this.domElements.$snippetTagsWrapper.append('<span class="js-snippet-gallery__tags-item snippet-gallery__tags-item">'+w.eq(t).html()+"</span>")
}this.domElements.$snippetTagsWrapper.append('<span class="js-tags-item-hover-helper tags-item-hover-helper"></span>');
var v=this.domElements.$snippetTagsWrapper.find(".js-snippet-gallery__tags-item"),u=this;
v.click(function(){var y=g(this),x=y.index();
u.moveToHeadlineTag(y);
u.domElements.$listWrapper.find(".list-of-entities:eq("+x+")").find(".list-of-entities__item").first().click()
});
v.first().addClass("js-item--active")
}},moveToHeadlineTag:function m(s){var v=s.index(),u=this.domElements.$snippetTagsWrapper.find(".js-tags-item-hover-helper");
s.addClass("js-item--active");
s.siblings("span").removeClass("js-item--active");
u.css({left:s.position().left+10+"px",width:s.width()+20+"px"});
if(this.customScrollEnabled){this.domElements.$listWrapper.mCustomScrollbar("scrollTo",this.domElements.$listWrapper.find(".list-of-entities:eq("+v+")"))
}else{if(cssua.ua.mobile){var t=g(j).width();
if(t>=tmg.viewport.mediaQueriesBreakpoints.md){this.domElements.$listWrapper.animate({scrollTop:this.domElements.$listWrapper.find(".list-of-entities:eq("+v+")").offset().top-this.domElements.$listWrapper.offset().top+this.domElements.$listWrapper.scrollTop()},200)
}if(t>=tmg.viewport.mediaQueriesBreakpoints.sm&&t<tmg.viewport.mediaQueriesBreakpoints.md){this.domElements.$listWrapper.animate({scrollLeft:this.domElements.$listWrapper.find(".list-of-entities:eq("+v+")").offset().left-this.domElements.$listWrapper.offset().left+this.domElements.$listWrapper.scrollLeft()},200)
}}}},getItemMetadata:function d(I){var S=g(I.target),O=S.hasClass("list-of-entities__item")?S:S.parents(".list-of-entities__item"),R=O.find(".list-of-entities__item-image").data("video")?g.parseJSON(O.find(".list-of-entities__item-image").data("video").replace(/'/g,'"')):{},A=O.find(".list-of-entities__item-image").data("links")?g.parseJSON(O.find(".list-of-entities__item-image").data("links").replace(/'/g,'"')):{},s=O.find(".entity-property-numeric-bar"),u=O.find(".list-of-entities__item-image").data("frz-src-array"),B=O.find(".m_meta-property__quote").text(),y="";
if(s.is(":visible")==true){var M=s.html()
}else{var M=""
}if(B.length>0){var D="'"+B+"'"
}else{var D=""
}var F="";
if(typeof A.review!="undefined"&&A.review!=""){F='<a href="'+A.review+'" class="js-snippet-gallery__info-box-item snippet-gallery__info-box-item"><strong>Read Review</strong> <span class="entity-property-numeric-bar">'+M+'</span><span class="js-item-quote">'+D+"</span></a>"
}var P="";
if(typeof A.latest!="undefined"&&A.latest.length!=""){P='<a href="'+A.latest+'" class="js-snippet-gallery__info-box-item snippet-gallery__info-box-item snippet-gallery__info-box-item-read-more"><span>Read More</span></a>'
}var G=/(\.[^.]*)$/g;
var L=JSON.parse(u.replace(/'/g,'"')).sort(function Q(T,U){return U.width-T.width
})[0];
var J=L.src.replace(G,"_filmblur$1");
var t=g('<div class="js-snippet-gallery__info-box snippet-gallery__info-box">'+F+P+"</div>");
if(typeof R.id=="undefined"){y=g('<div class="js-snippet-gallery__video-wrapper snippet-gallery__video-wrapper"><div class="js-video-player video-player component"><div class="js-video-player__component-content component-content"><span class="js-video-player__image-container video-player__image-container" onclick="window.location=\''+A.latest+'\'"><a href="javascript:void(0);"><img data-frz-src-array="'+u+'" class="js-video-player__image video-player__image" alt="video-player image"></a></span></div></div></div>')
}else{y=g('<div class="js-snippet-gallery__video-wrapper snippet-gallery__video-wrapper"><div class="js-video-player video-player component" data-options="{ \'videoId\': \''+R.id+"', 'autoplay': false, 'autoscale': false, 'type': '"+R.type+'\' }"><div class="js-video-player__component-content component-content"><span class="js-video-player__image-container video-player__image-container"><img data-frz-src-array="'+u+'" class="js-video-player__image video-player__image" alt="video-player image"><span class="video-player__image-controls-wrapper"><span class="video-player__image-controls"><span class="js-video-player__image-controls-title video-player__image-controls-title">'+O.find(".list-of-entities__item-body-headline").text()+'</span><span class="js-video-player__image-controls-play video-player__image-controls-play"></span><span class="video-player__image-controls-duration">'+R.duration+'</span></span></span></span><div class="js-video-player__player video-player__player"></div></div></div></div>')
}var v=g('<div class="js-snippet-gallery__background snippet-gallery__background"><span class="js-video-player__image-container video-player__image-container"><img class="js-video-player__image video-player__image" alt="video-player image" src="'+J+'" ></span></div>');
g(v).find("img.js-video-player__image.video-player__image").error(function(){g(this).hide()
});
this.$elem.find(".list-of-entities__item.js-item--active").removeClass("js-item--active");
O.addClass("js-item--active");
var x=O.parents(".list-of-entities").index(),H=this.domElements.$snippetTagsWrapper.find(".js-tags-item-hover-helper"),K=this.domElements.$snippetTagsWrapper.find(".js-snippet-gallery__tags-item"),E=g(".list-of-entities").children(".component-header").children("h2"),C=K.eq(x);
C.addClass("js-item--active");
C.siblings("span").removeClass("js-item--active");
if(E.length>=1){H.css({left:C.position().left+10+"px",width:C.width()+20+"px"})
}this.domElements.$videoDisplayWrapper.replaceWith(y);
this.domElements.$videoDisplayWrapper=y;
this.domElements.$videoScreenInfo.replaceWith(t);
this.domElements.$videoScreenInfo=t;
this.domElements.$backgroundImage.replaceWith(v);
this.domElements.$backgroundImage=v;
g(".js-snippet-gallery__video-wrapper .js-video-player__image").each(function(){if(this.src===""){lzld(this)
}});
this.$elem.find(".js-video-player").telegraph_videoPlayer(this.$elem.find(".js-video-player").data("options")?g.parseJSON(this.$elem.find(".js-video-player").data("options").replace(/'/g,'"')):{});
var z=g(".snippet-gallery__list-wrapper").find(".js-item--active"),N=this.domElements.$listItem.index(z);
if(N>0){var w=200;
this.domElements.$videoDisplay.addClass("js-switch-left js-hide-video").removeClass("js-switch-right");
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.addClass("js-switch-right").removeClass("js-switch-left js-hide-video")
},this),w);
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.removeClass("js-switch-right")
},this),w*3)
}return false
},navigateVideo:function k(z){var A=g(".snippet-gallery__list-wrapper").find(".js-item--active");
var B=this.domElements.$listItem.index(A);
B=z=="ltr"?B+1:B-1;
if(B>=this.domElements.$listItem.length){B=0
}if(B<0){B=this.domElements.$listItem.length-1
}var w=this.domElements.$listItem.eq(B);
w.trigger("click");
var t=w.parents(".list-of-entities").index(),v=this.domElements.$snippetTagsWrapper.find(".js-tags-item-hover-helper"),y=this.domElements.$snippetTagsWrapper.find(".js-snippet-gallery__tags-item"),x=g(".list-of-entities").children(".component-header").children("h2"),s=y.eq(t);
s.addClass("js-item--active");
s.siblings("span").removeClass("js-item--active");
if(x.length>=1){v.css({left:s.position().left+10+"px",width:s.width()+20+"px"})
}var C=200;
if(z=="ltr"){this.domElements.$videoDisplay.addClass("js-switch-left js-hide-video").removeClass("js-switch-right");
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.addClass("js-switch-right").removeClass("js-switch-left js-hide-video")
},this),C);
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.removeClass("js-switch-right")
},this),C*3)
}else{this.domElements.$videoDisplay.addClass("js-switch-right js-hide-video").removeClass("js-switch-left");
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.addClass("js-switch-left").removeClass("js-switch-right js-hide-video")
},this),C);
setTimeout(g.proxy(function(){this.domElements.$videoDisplay.removeClass("js-switch-left")
},this),C*3)
}if(this.customScrollEnabled){this.domElements.$listWrapper.mCustomScrollbar("scrollTo",this.domElements.$listWrapper.find(".mCSB_container").find(w))
}else{if(cssua.ua.mobile){var u=g(j).width();
if(u>=tmg.viewport.mediaQueriesBreakpoints.md){this.domElements.$listWrapper.animate({scrollTop:w.offset().top-this.domElements.$listWrapper.offset().top+this.domElements.$listWrapper.scrollTop()},200)
}if(u>=tmg.viewport.mediaQueriesBreakpoints.sm&&u<tmg.viewport.mediaQueriesBreakpoints.md){this.domElements.$listWrapper.animate({scrollLeft:w.offset().left-this.domElements.$listWrapper.offset().left+this.domElements.$listWrapper.scrollLeft()},200)
}}}},nextVideo:function a(){this.navigateVideo("ltr")
},prevVideo:function p(){this.navigateVideo("rtl")
},listWrapperWidth:function c(t){var s=0;
g(".js-snippet-gallery .list-of-entities").each(function(){var x=g(this).find(".list-of-entities__item").length,u=g(this).find(".list-of-entities__item").width(),v=g(this).find(".component-header").width(),w=g(this);
w.css("width",u*x+v+"px");
s+=u*x+v;
w.parent(".js-snippet-gallery__scroll-helper").css("width",s+"px")
});
this.domElements.$listWrapper.css("width",t+"px")
},setCustomScrollbars:function f(){var s=g(j).width();
if(this.customScrollEnabled){this.domElements.$listWrapper.mCustomScrollbar("destroy");
this.domElements.$listWrapper.removeClass("js-shadow-bot-active");
this.domElements.$listWrapper.css("width","370px");
if(s>=tmg.viewport.mediaQueriesBreakpoints.md){this.domElements.$listWrapper.addClass("js-shadow-bot-active");
g(".js-snippet-gallery .list-of-entities").css("width","100%");
g(".js-snippet-gallery__scroll-helper").css("width","100%");
this.domElements.$listWrapper.mCustomScrollbar({axis:"y",keyboard:{scrollType:"stepped"},mouseWheel:{scrollAmount:50},autoExpandScrollbar:true,callbacks:{whileScrolling:function t(){var u=g(this);
if(this.mcs.topPct>5){u.addClass("js-shadow-top-active")
}else{u.removeClass("js-shadow-top-active")
}if(this.mcs.topPct>=99){u.removeClass("js-shadow-bot-active")
}else{u.addClass("js-shadow-bot-active")
}},alwaysTriggerOffsets:false}})
}if(s>=tmg.viewport.mediaQueriesBreakpoints.sm&&s<tmg.viewport.mediaQueriesBreakpoints.md){this.listWrapperWidth(s);
this.domElements.$listWrapper.mCustomScrollbar({axis:"x",keyboard:{scrollType:"stepped"},mouseWheel:{scrollAmount:50},autoExpandScrollbar:true})
}}else{if(cssua.ua.mobile){this.domElements.$listWrapper.css("width","370px");
if(s>=tmg.viewport.mediaQueriesBreakpoints.md){g(".js-snippet-gallery .list-of-entities").css("width","100%");
g(".js-snippet-gallery__scroll-helper").css("width","100%");
this.domElements.$listWrapper.addClass("js-default-scroll vertical");
this.domElements.$listWrapper.removeClass("horizontal")
}if(s>=tmg.viewport.mediaQueriesBreakpoints.sm&&s<tmg.viewport.mediaQueriesBreakpoints.md){this.listWrapperWidth(s);
this.domElements.$listWrapper.addClass("js-default-scroll horizontal");
this.domElements.$listWrapper.removeClass("vertical")
}}else{this.domElements.$listWrapper.addClass("js-default-scroll")
}}},cleanEmptyComponent:function b(){var s=this.domElements.$listComponent.find(".js-list-of-entities.component-content");
s.each(function(){var t=g(this),u=t.find(".js-list-of-entities__container");
if(!u.is(":visible")){t.parent(".list-of-entities.component").remove()
}})
}};
g.fn.telegraph_snippetGallery=function(s){return this.each(function(){if(!g.data(this,"telegraph_snippetGallery")){if(g(j).width()>=tmg.viewport.mediaQueriesBreakpoints.sm){g.data(this,"telegraph_snippetGallery",new r(this,s).init())
}else{g.data(this,"telegraph_snippetGallery",new r(this,s).setHeaderCounters())
}}})
};
g(l).ready(function(){g(".js-snippet-gallery").each(function(){var s=g(this);
s.telegraph_snippetGallery()
});
if(cssua.ua.ie>=10){g(".js-snippet-gallery__display").mouseenter(function(){g(this).addClass("ua-ie-mouse-on");
g(this).mouseleave(function(){g(this).removeClass("ua-ie-mouse-on")
})
})
}})
})(tmgJQ,window,document);
(function(d,c,b){var f;
var e={classes:{jsrun:"js-run",hidden:"js-hidden",closed:"closed",block:"js-accordion-section",trigger:"js-accordion-section-trigger",content:"js-accordion-section-body",header:"js-accordion-section-header"},dataAttributes:{showSectionText:"js-accordion-show-text",closeSectionText:"js-accordion-close-text"},triggerText:{show:"Open",close:"Close"}};
function a(h,g){this.options=d.extend({},e,g);
this.$wrap=d(h);
this.$wrap.addClass(this.options.classes.jsrun);
this.options.triggerText.show=this.$wrap.data(this.options.dataAttributes.showSectionText)||this.options.triggerText.show;
this.options.triggerText.close=this.$wrap.data(this.options.dataAttributes.closeSectionText)||this.options.triggerText.close;
this.$blocks=this.$wrap.find("."+this.options.classes.block);
this.init(this.options)
}a.prototype.init=function(){var g=this;
this.$blocks.each(function(){var l=d(this);
var j=l.find("."+g.options.classes.header);
var k=l.find("."+g.options.classes.content);
var h=j.find("."+g.options.classes.trigger);
g.bindHeadersAsControls(j,h,k);
h.text(g.options.triggerText.close);
h.removeClass(g.options.classes.hidden)
})
};
a.prototype.bindHeadersAsControls=function(h,g,j){var k=this;
h.on("click",function(){k.toggleSection(g,h,j)
})
};
a.prototype.toggleSection=function(g,h,j){var k=j.hasClass(this.options.classes.hidden);
var l=k?this.options.triggerText.close:this.options.triggerText.show;
j.toggleClass(this.options.classes.hidden);
h.toggleClass(this.options.classes.closed);
g.text(l)
};
a.prototype.openAll=function(){};
a.prototype.closeAll=function(){};
d.fn.telegraph_accordion=function(g){return this.each(function(){var h=d(this);
if(h.data("telegraph_accordion")){h.data("telegraph_accordion",null)
}h.data("telegraph_accordion",new a(this,g))
})
};
f=function f(){d(".js-accordion").each(function(){var g=d(this);
g.telegraph_accordion()
})
};
d(b).ready(f);
d(b).on("tmg:page-loaded",f)
})(tmgJQ,window,document);
(function(b){function a(c){this.config={classes:{stuck:"--stuck",activeWp:"section-menu__link--active",menu:"section-menu",menuSection:"section-menu-item",menuClone:"section-menu--clone",menuOpen:"section-menu--open",toggleButtonOpen:"toggle-button--open",infoBar:"info-bar",infoBarClone:"info-bar--clone"},selectors:{menu:".section-menu",menuClone:".section-menu--clone",menuItem:".section-menu__item",menuLink:".section-menu__link",menuBarWaypoint:".page__content",menuSection:".section-menu-item",menuSectionTitle:".section-menu-item__title",infoBar:".info-bar",infoBarClone:"info-bar--clone",pricePrefix:".travel-price__prefix",toggleButton:".toggle-button",infoBarWaypoint:".keyInformationCard",leadAssetHeading:".lead-asset h1",travelCtaLink:".info-bar .travel-cta__link"}};
this.clss=this.config.classes;
this.sels=this.config.selectors;
this.eventHandlers={menu:function e(){var f=this;
b(this.sels.toggleButton+", "+this.sels.menuItem).on("click",function(){f.clones.menu.trigger("switchState",{state:!f.clones.menu.data("is-open")})
});
this.clones.menu.on("switchState",function(h,j){var g=b(this).data("is-open");
var k=j.state;
if(k!==g){b(this).data("is-open",k).toggleClass(f.clss.menuOpen);
b(f.sels.toggleButton).toggleClass(f.clss.toggleButtonOpen)
}});
b(this.sels.menu+" a").on("click",function(g){g.preventDefault();
if(history.pushState){history.pushState(null,null,b(this).attr("href"))
}f.offsetPageForHash(location.hash)
})
},infoBar:function d(){var f=this;
b(this.sels.travelCtaLink).on("click",function(g){g.preventDefault();
if(history.pushState){history.pushState(null,null,b(this).attr("href"))
}f.offsetPageForHash(location.hash)
})
}};
this.defaults={toBeStuck:[this.sels.menu,this.sels.infoBar]};
if(c){this.toBeStuck=c.map(function(f){return this.sels[f]
},this)
}else{this.toBeStuck=this.defaults.toBeStuck
}this.clones={};
this.menuWaypoints=[];
this.init()
}a.prototype.init=function(){this.createClones();
this.createWaypoints();
this.addEventHandlers();
if(location.hash){this.offsetPageForHash()
}};
a.prototype.isStickyEl=function(c){return this.toBeStuck.indexOf(c)!=-1
};
a.prototype.createIdenticalTwin=function(c,d){var e=b(c);
var f=e.clone().addClass(d);
e.parent().append(f);
return f
};
a.prototype.adjustScrollAmount=function(e,c){var d=arguments[2]?arguments[2]:e;
return this.isStickyEl(e)?c-=b(d).outerHeight():c
};
a.prototype.addEventHandlers=function(){Object.keys(this.eventHandlers).forEach(function(d){var c=this.sels[d];
if(this.isStickyEl(c)){this.eventHandlers[d].call(this)
}},this)
};
a.prototype.offsetPageForHash=function(g){var j=g||location.hash;
try{var d=b(this.sels.infoBarWaypoint).offset().top;
var h=b(this.sels.menuBarWaypoint).offset().top
}catch(f){throw new Error("Waypoint Selectors are not present")
}try{var c=b(j).offset().top
}catch(f){throw new Error("No hash string provided!")
}if(c>=h){c=this.adjustScrollAmount(this.sels.menu,c,this.sels.menuItem)
}if(c>=d){c=this.adjustScrollAmount(this.sels.infoBar,c)
}c-=21;
if(this.isStickyEl(this.sels.menu)){this.menuWaypoints.forEach(function(k,e){k.disable()
})
}scrollTo(0,c);
this.activateMenuItem(j.replace("#",""));
if(this.isStickyEl(this.sels.menu)){this.menuWaypoints.forEach(function(k,e){k.enable()
})
}};
a.prototype.activateMenuItem=function(d){var c=b(this.sels.menu).find("[href=#"+d+"]");
b(this.sels.menuLink).removeClass(this.clss.activeWp);
c.addClass(this.clss.activeWp)
};
a.prototype.createClones=function(){if(this.isStickyEl(this.sels.menu)){this.clones.menu=this.createIdenticalTwin(this.sels.menu,this.clss.menuClone);
this.clones.menu.data("is-open",false).prepend('<div class="toggle-button">More</div>')
}if(this.isStickyEl(this.sels.infoBar)){var c=b(this.sels.leadAssetHeading).text();
this.clones.infoBar=this.createIdenticalTwin(this.sels.infoBar,this.clss.infoBarClone);
this.clones.infoBar.find(".container").prepend('<h1 class="info-bar__heading">'+c+"</h1>");
this.clones.infoBar.find(this.sels.pricePrefix).text("from")
}};
a.prototype.createWaypoints=function(){var c=this;
if(this.isStickyEl(this.sels.menu)){b(this.sels.menuBarWaypoint).waypoint({handler:function d(e){c.clones.menu.toggleClass(c.clss.menu+c.clss.stuck);
if(e==="up"){c.clones.menu.trigger("switchState",{state:false})
}}});
b(this.sels.menuSection).each(function(){var e=new Waypoint({element:this,handler:function f(){c.activateMenuItem(this.element.id)
}});
c.menuWaypoints.push(e)
})
}if(this.isStickyEl(this.sels.infoBar)){b(this.sels.infoBarWaypoint).waypoint({handler:function d(){c.clones.infoBar.toggleClass(c.clss.infoBar+c.clss.stuck)
}})
}};
b("document").ready(function(){b.fn.telegraph_sticky_navs=function(c){return this.each(function(){b(this).data("telegraph_sticky_navs",new a(c))
})
};
b(".js-sticky-navs").each(function(){var d=b(this);
var c=d.data("sticky-navs");
d.telegraph_sticky_navs(c)
})
})
})(tmgJQ);
(function(b){function a(c){this.defaults=[{type:"parallax",identifier:"fullWidthImage"},{type:"fixed",identifier:"leadAsset"}];
this.config={supportedTypes:["parallax","fixed"],classes:{fixed:"js-img-fixed",parallax:"js-img-parallax"},intervalMs:200,intervalMaxCount:20,dataAttribute:"data-lazy-parallax-id"};
this.options=c?c:this.defaults;
this.firstDomEl="";
this.allSelectorsByType=[];
this.intervalCounter=0;
this.init()
}a.prototype.init=function(){this.convertIdentifiersToSelector();
this.sortByType();
if(b(this.firstDomEl).length>0){this.prepareListener()
}else{throw new Error("Lazy Parallax was not supplied a valid first element")
}};
a.prototype.convertIdentifiersToSelector=function(){this.options.forEach(function(d,c){this.options[c].identifier="["+this.config.dataAttribute+"="+d.identifier+"]"
},this)
};
a.prototype.setFirstDomEl=function(c){if(b(this.allSelectors).index(c)===0){this.firstDomEl=c
}};
a.prototype.sortByType=function(){this.config.supportedTypes.forEach(function(c){this.allSelectorsByType[c]=[];
this.options.filter(function(d){return d.type===c
}).forEach(function(e){var d=e.identifier;
this.allSelectorsByType[c].push(d);
this.setAllSelectors();
this.setFirstDomEl(d)
},this)
},this)
};
a.prototype.setAllSelectors=function(){var c=[];
Object.keys(this.allSelectorsByType).forEach(function(d){this[d].forEach(function(e){c.push(e)
})
},this.allSelectorsByType);
this.allSelectors=this.coerceToString(c)
};
a.prototype.coerceToString=function(c){return c+""
};
a.prototype.applyClasses=function(){Object.keys(this.allSelectorsByType).forEach(function(e){var d=this.config.classes[e];
var c=this.coerceToString(this.allSelectorsByType[e]);
b(c).addClass(d)
},this)
};
a.prototype.prepareListener=function(){if(b(this.firstDomEl).find("img").data("lazy-loaded")){this.applyClasses();
clearInterval(this.listenInterval)
}else{if(!this.listenInterval){var c=this;
this.listenInterval=setInterval(function(){c.intervalCounter++;
if(c.intervalCounter<c.config.intervalMaxCount){c.prepareListener()
}else{clearInterval(c.listenInterval);
console.log("%c Lazy Parallax: Max interval count reached ","background: #222; color: #bada55")
}},this.config.intervalMs)
}}};
b("document").ready(function(){b.fn.telegraph_lazy_parallax=function(c){return this.each(function(){b(this).data("telegraph_lazy_parallax",new a(c))
})
};
b(".js-lazy-parallax").each(function(){var d=b(this);
var c=d.data("lazy-parallax");
d.telegraph_lazy_parallax(c)
})
})
})(tmgJQ);