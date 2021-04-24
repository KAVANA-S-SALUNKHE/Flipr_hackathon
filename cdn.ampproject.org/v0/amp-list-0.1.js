(self.AMP=self.AMP||[]).push({n:"amp-list",ev:"0.1",l:true,v:"2104081613001",m:0,f:(function(AMP,_){
'use strict';var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca,ia;function m(){return ia?ia:ia=Promise.resolve(void 0)};function ja(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var ka=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function la(a){var b=Object.create(null);if(!a)return b;for(var c;c=ka.exec(a);){var d=ja(c[1],c[1]),e=c[2]?ja(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var ma=Object.prototype.toString;function n(a){return Array.isArray(a)}function na(a){return a?Array.prototype.slice.call(a):[]};var p=self.AMP_CONFIG||{},oa=("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function qa(a){if(!self.document||!self.document.head||self.location&&oa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var ra={thirdParty:p.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:p.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof p.thirdPartyFrameRegex?new RegExp(p.thirdPartyFrameRegex):p.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:p.cdnUrl||qa("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:oa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:p.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:p.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:p.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:p.geoApiUrl||qa("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var q=self.__AMP_LOG;function r(){if(!q.user)throw Error("failed to call initLogConstructor");return q.user}function t(){if(q.dev)return q.dev;throw Error("failed to call initLogConstructor");}function v(a,b,c,d,e){r().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function w(a){return a||{}};function sa(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(c){return b.hasAttribute(c)})};function z(){this.ia=100;this.R=this.aa=0;this.O=Object.create(null)}z.prototype.has=function(a){return!!this.O[a]};z.prototype.get=function(a){var b=this.O[a];if(b)return b.access=++this.R,b.payload};z.prototype.put=function(a,b){this.has(a)||this.aa++;this.O[a]={payload:b,access:this.R};if(!(this.aa<=this.ia)){t().warn("lru-cache","Trimming LRU cache");a=this.O;var c=this.R+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.aa--)}};var ta=w({c:!0,v:!0,a:!0,ad:!0}),ua,va,wa=/[?&]amp_js[^&]*/,xa=/[?&]amp_gsa[^&]*/,ya=/[?&]amp_r[^&]*/,za=/[?&]amp_kit[^&]*/,Aa=/[?&]usqp[^&]*/;
function B(a){ua||(ua=self.document.createElement("a"),va=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new z));var b=va,c=ua;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function Ba(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(n(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")}
function Ca(a,b){var c=void 0===c?"source":c;v(null!=a,"%s %s must be available",b,c);var d=a;"string"==typeof d&&(d=B(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);v(e||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,a)}
function Da(a){"string"==typeof a&&(a=B(a));var b=a;"string"==typeof b&&(b=B(b));if(!ra.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");v(ta[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);v(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(wa,"").replace(xa,"").replace(ya,"").replace(za,"").replace(Aa,"").replace(/^[?&]/,
""))?"?"+d:"":"";return b+d+(a.hash||"")};var Ea={"AMP-IMG":["src","srcset","layout","width","height"]};function Fa(a,b){var c=a.tagName.startsWith("AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&Ea[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}Object.freeze(w({input:{type:/(?:image|button)/i}}));Object.freeze(w({input:{type:/(?:button|file|image|password)/i}}));var Ga=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" "));
Object.freeze(w({input:Ga,textarea:Ga,select:Ga}));Object.freeze(w({"amp-anim":["controls"],form:["name"]}));function Ha(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var C;function Ia(a){var b=a.ownerDocument||a;C&&C.ownerDocument===b||(C=b.createElement("div"));return Ja}function Ja(a){var b=C;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function D(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return E(a,b)}function Ka(a,b){var c=F(a);c=G(c);return E(c,b)}function H(a,b){a=F(a);a=G(a);return La(a,b)?E(a,b):null}function F(a){return a.nodeType?D((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}function E(a,b){La(a,b);a=Ma(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function Na(a){var b=Ma(a).bind;if(b){if(b.promise)return b.promise;E(a,"bind");return b.promise=Promise.resolve(b.obj)}return null}function Ma(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function La(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Oa(){var a=new Ha,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var I,Pa="Webkit webkit Moz moz ms O o".split(" ");function Qa(a,b,c){if(b.startsWith("--"))return b;I||(I=Object.create(null));var d=I[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<Pa.length;f++){var g=Pa[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(I[b]=d)}return d}function Ra(a,b){a=a.style;for(var c in b)a.setProperty(Qa(a,c),b[c].toString(),"important")}
function J(a,b){for(var c in b){var d=a,e=b[c],f=Qa(d.style,c,void 0);f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}function Sa(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};var Ta={NODISPLAY:"nodisplay",FIXED:"fixed",FIXED_HEIGHT:"fixed-height",RESPONSIVE:"responsive",CONTAINER:"container",FILL:"fill",FLEX_ITEM:"flex-item",FLUID:"fluid",INTRINSIC:"intrinsic"};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var K;function Va(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(e){return!1}};function Wa(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function L(a,b){/^[\w-]+$/.test(b);return Xa(a,"> ["+b+"]")}function Ya(a,b){a.classList.add("i-amphtml-scoped");var c=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return b}function Xa(a,b){if(void 0!==K?K:K=Va(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));var c=Ya(a,b);return void 0===c[0]?null:c[0]};var Za=['<amp-list-load-more load-more-button class="amp-visible i-amphtml-default-ui"><button load-more-clickable class=i-amphtml-list-load-more-button><label>See More</label></button></amp-list-load-more>'],$a=["<amp-list-load-more load-more-loading class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-spinner></div></amp-list-load-more>"],ab=['<amp-list-load-more load-more-failed class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-message>Unable to Load More</div><button load-more-clickable class="i-amphtml-list-load-more-button i-amphtml-list-load-more-button-has-icon i-amphtml-list-load-more-button-small"><div class=i-amphtml-list-load-more-icon></div><label>Retry</label></button></amp-list-load-more>'];
function bb(a){this.o=a;this.L=this.V=this.I=this.J=this.U=this.C=null}l=bb.prototype;l.initializeLoadMore=function(){cb(this);db(this);eb(this);this.L||(this.L=L(this.o,"load-more-end"))&&this.o.appendChild(this.L)};function cb(a){a.C=L(a.o,"load-more-button");a.C?a.C.classList.add("amp-visible"):a.C=Ia(a.o)(Za);a.o.appendChild(a.C);J(a.C,{visibility:"hidden"})}function db(a){a.J=L(a.o,"load-more-loading");a.J||(a.J=Ia(a.o)($a));a.o.appendChild(a.J)}
l.getLoadMoreButton=function(){this.C||cb(this);return this.C};l.getLoadMoreLoadingElement=function(){this.J||db(this);return this.J};l.getLoadMoreButtonClickable=function(){if(!this.U){var a=this.getLoadMoreButton();this.U=L(a,"load-more-clickable")||a}return this.U};function eb(a){a.I=L(a.o,"load-more-failed");a.I||(a.I=Ia(a.o)(ab));a.o.appendChild(a.I)}l.getLoadMoreFailedElement=function(){this.I||eb(this);return this.I};
l.getLoadMoreFailedClickable=function(){if(!this.V){var a=this.getLoadMoreFailedElement();this.V=L(a,"load-more-clickable")||a}return this.V};l.getLoadMoreEndElement=function(){return this.L};l.setLoadMoreEnded=function(){this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);this.getLoadMoreButton().classList.toggle("amp-visible",!1);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1);var a=this.getLoadMoreEndElement();a&&a.classList.toggle("amp-visible",!0)};
l.toggleLoadMoreLoading=function(a){a&&this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);var b=this.getLoadMoreEndElement();b&&b.classList.toggle("amp-visible",!1);this.getLoadMoreButton().classList.toggle("amp-visible",!a);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",a)};
l.setLoadMoreFailed=function(){var a=this.getLoadMoreFailedElement(),b=this.getLoadMoreButton();if(a||b)a.classList.toggle("amp-visible",!0),b.classList.toggle("amp-visible",!1),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1)};
l.hideAllLoadMoreElements=function(){this.getLoadMoreButton().classList.toggle("amp-visible",!1);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1);this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);this.getLoadMoreEndElement()&&this.getLoadMoreEndElement().classList.toggle("amp-visible",!1)};function fb(a){var b=Na(G(a));if(b)return b;var c=F(a);return c.whenExtensionsKnown().then(function(){var d=c.getExtensionVersion("amp-bind");return d?D(c.win,"extensions").waitForExtension("amp-bind",d):null}).then(function(d){if(d){var e=G(a);var f=Na(e);f?e=f:(e=Ma(e),e.bind=Oa(),e=e.bind.promise)}else e=null;return e})}function M(a){var b=H(a,"bind");return b?Promise.resolve(b):fb(a)};function N(a,b){var c=this;this.fa=E(a,"timer");this.ka=b;this.ja=0;this.M=-1;this.X=0;this.$=!1;this.ha=function(){c.M=-1;c.X=0;c.$=!0;c.ka();c.$=!1}}N.prototype.isPending=function(){return-1!=this.M};N.prototype.schedule=function(a){var b=a||this.ja;this.$&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.X?(this.cancel(),this.X=c,this.M=this.fa.delay(this.ha,b),!0):!1};N.prototype.cancel=function(){this.isPending()&&(this.fa.cancel(this.M),this.M=-1)};function gb(a){return!!a&&"function"==typeof a.getFormData};var hb=["GET","POST"],ib=[n,function(a){return"[object Object]"===ma.call(a)}];function jb(a){a=a||{};var b=a.method;void 0===b?b="GET":(b=b.toUpperCase(),hb.includes(b));a.method=b;a.headers=a.headers||w({});a.headers.Accept="application/json";return a}
function kb(a){var b=jb(a);"POST"!=b.method||gb(b.body)||(ib.some(function(c){return c(b.body)}),b.headers["Content-Type"]=b.headers["Content-Type"]||"text/plain;charset=utf-8",b.body="application/x-www-form-urlencoded"===b.headers["Content-Type"]?Ba(b.body):JSON.stringify(b.body))};function O(a,b){this.P=a;this.B=b;this.la="amp-list"}O.prototype.isEnabled=function(){var a=this.P.getAmpDoc();return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.P.hasCapability("viewerRenderTemplate"):!1};O.prototype.assertTrustedViewer=function(a){return this.P.isTrustedViewer().then(function(b){v(b,"Refused to attempt SSR in untrusted viewer: ",a)})};
O.prototype.ssr=function(a,b,c,d){var e=this;c=void 0===c?null:c;d=void 0===d?{}:d;var f=c,g=d,h;f||(h=this.B.maybeFindTemplate(a));return this.assertTrustedViewer(a).then(function(){var k=e.P,x=k.sendMessageAwaitResponse,y=h;var u=g;var W=u=void 0===u?{}:u;u=w({type:e.la});(y=f&&f.successTemplate?f.successTemplate:y)&&(u.successTemplate={type:"amp-mustache",payload:y.innerHTML});(y=f&&f.errorTemplate?f.errorTemplate:null)&&(u.errorTemplate={type:"amp-mustache",payload:y.innerHTML});W&&Object.assign(u,
W);W=b.xhrUrl;var A=b.fetchOpt;y=Object.assign({},A);if(gb(A.body)){A=A.body;y.headers["Content-Type"]="multipart/form-data;charset=utf-8";A=A.entries();for(var Ua=[],pa=A.next();!pa.done;pa=A.next())Ua.push(pa.value);y.body=Ua}u=w({originalRequest:{input:W,init:y},ampComponent:u});return x.call(k,"viewerRenderTemplate",u)})};
O.prototype.applySsrOrCsrTemplate=function(a,b){var c=this;if(this.isEnabled()){v("string"===typeof b.html,"Server side html response must be defined");var d=this.assertTrustedViewer(a).then(function(){return c.B.findAndSetHtmlForTemplate(a,b.html)})}else d=n(b)?this.B.findAndRenderTemplateArray(a,b):this.B.findAndRenderTemplate(a,b);return d};function lb(a,b){if("."==b)return a;b=b.split(".");for(var c=0;c<b.length;c++){var d=b[c];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a};function mb(a,b,c){c=void 0===c?{}:c;var d=void 0===c.expr?".":c.expr,e=void 0===c.urlReplacement?0:c.urlReplacement,f=void 0===c.refresh?!1:c.refresh,g=void 0===c.xssiPrefix?void 0:c.xssiPrefix;Ca(b.getAttribute("src"),b);var h=D(a.win,"batched-xhr");return nb(b,e,f).then(function(k){return h.fetchJson(k.xhrUrl,k.fetchOpt)}).then(function(k){return D(a.win,"xhr").xssiJson(k,g)}).then(function(k){if(null==k)throw Error("Response is undefined.");return lb(k,d||".")}).catch(function(k){throw r().createError("failed fetching JSON data",
k);})}
function nb(a,b,c){var d=a.getAttribute("src"),e=H(a,"url-replace");return(1<=b?e.expandUrlAsync(d):Promise.resolve(d)).then(function(f){if(1==b){var g=e.collectDisallowedVarsSync(a);if(0<g.length)throw r().createError('URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="'+(g.join(" ")+'" to the <')+(a.tagName+"> element. See https://bit.ly/amp-var-subs."));}var h={};a.hasAttribute("credentials")&&(h.credentials=a.getAttribute("credentials"));c&&
(h.cache="reload");return{xhrUrl:f,fetchOpt:h}})};var P;function ob(a,b){var c=pb();a.addEventListener("click",function(d){try{return b(d)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},c?void 0:!1)}function pb(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function qb(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function rb(a,b){ob(a,b)};Q.KEY="data-key";Q.IGNORE="data-ignore";Q.CHECKSUM="data-checksum";var sb="_set-dom-",tb=sb+"mounted",ub=1,vb=9,wb=11,R=null;function Q(a,b){R=[];if(!a||!a.nodeType)throw Error("set-dom: You must provide a valid node to update.");a.nodeType===vb&&(a=a.documentElement);b.nodeType===wb?xb(a,b):yb(a,b);a[tb]||(a[tb]=!0,S(a));var c=R;R=null;return c}
function yb(a,b){if(a.nodeType===b.nodeType)if(a.nodeType===ub){var c=null!=a.getAttribute(Q.IGNORE)&&null!=b.getAttribute(Q.IGNORE);c&&R.push(a,b);if(!c&&(a.getAttribute(Q.CHECKSUM)||NaN)!==(b.getAttribute(Q.CHECKSUM)||NaN)&&!a.isEqualNode(b))if(xb(a,b),a.nodeName===b.nodeName){a=a.attributes;b=b.attributes;var d;for(c=a.length;c--;){var e=a[c];var f=e.namespaceURI;var g=e.localName;(d=b.getNamedItemNS(f,g))||a.removeNamedItemNS(f,g)}for(c=b.length;c--;)(e=b[c],f=e.namespaceURI,g=e.localName,d=a.getNamedItemNS(f,
g),d)?d.value!==e.value&&(d.value=e.value):(b.removeNamedItemNS(f,g),a.setNamedItemNS(e))}else{for(var h=b.cloneNode();a.firstChild;)h.appendChild(a.firstChild);a.parentNode.replaceChild(h,a)}}else a.nodeValue!==b.nodeValue&&(a.nodeValue=b.nodeValue);else a.parentNode.replaceChild(b,T(a,"dismount")),S(b)}
function xb(a,b){var c,d,e,f=a.firstChild;b=b.firstChild;for(var g=0;f;){g++;var h=f;var k=U(h);f=f.nextSibling;k&&(e||(e={}),e[k]=h)}for(f=a.firstChild;b;){g--;var x=b;b=b.nextSibling;e&&(c=U(x))&&(d=e[c])?(delete e[c],d!==f?a.insertBefore(d,f):f=f.nextSibling,yb(d,x)):f?(h=f,f=f.nextSibling,U(h)?(a.insertBefore(x,h),S(x)):yb(h,x)):(a.appendChild(x),S(x))}for(k in e)g--,a.removeChild(T(e[k],"dismount"));for(;0<=--g;)a.removeChild(T(a.lastChild,"dismount"))}
function U(a){if(a.nodeType===ub&&(a=a.getAttribute(Q.KEY)||a.id))return sb+a}function S(a){T(a,"mount")}function T(a,b){if(U(a)){var c=document.createEvent("Event"),d={value:a};c.initEvent(b,!1,!1);Object.defineProperty(c,"target",d);Object.defineProperty(c,"srcElement",d);a.dispatchEvent(c)}for(d=a.firstChild;d;)d=T(d,b).nextSibling;return a};function V(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.N=null;b.ba=!1;b.da=new N(b.win,function(){return zb(b)});b.G=null;b.ea=null;b.B=null;b.T=!1;b.A=!1;b.ca=null;b.K=null;b.H=null;b.j=!1;b.W=null;b.F=null;b.Z=!1;b.ga=null;b.registerAction("refresh",function(){if(b.T)return Ab(b),Bb(b,{refresh:!0})});b.registerAction("changeToLayoutContainer",function(){return Cb(b)});b.D=null;b.S=null;b.Y=null;return b}var X=AMP.BaseElement;V.prototype=aa(X.prototype);V.prototype.constructor=V;
if(ha)ha(V,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Db=Object.getOwnPropertyDescriptor(X,Y);Db&&Object.defineProperty(V,Y,Db)}else V[Y]=X[Y];V.ma=X.prototype;l=V.prototype;
l.isLayoutSupported=function(a){if("container"===a){a=(a=this.element.ownerDocument)&&sa(a);var b=this.getPlaceholder()||this.element.hasAttribute("diffable")&&Eb(this);if(a)return b||r().warn("amp-list","amp-list[layout=container] should have a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s",this.element),this.A=!0;var c=this.win;if(c.__AMP__EXPERIMENT_TOGGLES)a=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);
a=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var d in c.AMP_CONFIG){var e=c.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(a[d]=Math.random()<e)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(d=c.AMP_CONFIG["allow-doc-opt-in"],e=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(a[e[f]]=!0)}d=Object;e=d.assign;f="";try{"localStorage"in
c&&(f=c.localStorage.getItem("amp-experiment-toggles"))}catch(k){t().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}f=f?f.split(/\s*,\s*/g):[];for(var g=Object.create(null),h=0;h<f.length;h++)0!=f[h].length&&("-"==f[h][0]?g[f[h].substr(1)]=!1:g[f[h]]=!0);e.call(d,a,g);if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(d=c.AMP_CONFIG["allow-url-opt-in"],c=la(c.location.originalHash||c.location.hash),e=0;e<d.length;e++)f=
c["e-"+d[e]],"1"==f&&(a[d[e]]=!0),"0"==f&&(a[d[e]]=!1)}v(!!a["amp-list-layout-container"],'Experiment "amp-list-layout-container" is not turned on.');v(b,"amp-list[layout=container] should have a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s",this.element);return this.A=!0}return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
l.buildCallback=function(){var a=this;this.B=Ka(this.element,"templates");this.S=H(this.element,"action");this.Y=Ka(this.element,"owners");this.S.addToAllowlist("AMP-LIST",["changeToLayoutContainer","refresh"],["email"]);this.N=this.getViewport();var b=Ka(this.getAmpDoc(),"viewer");this.D=new O(b,this.B);this.j=this.element.hasAttribute("load-more");v(!(this.j&&this.A),"%s initialized with layout=container does not support infinite scrolling with [load-more]. %s","amp-list",this.element);this.ca=
this.element.getAttribute("src");this.element.hasAttribute("diffable")&&((this.K=Eb(this))?this.h=this.K:r().warn("amp-list","Could not find child div[role=list] for diffing.",this.element));this.h||(this.h=Fb(this),this.element.appendChild(this.h));this.element.hasAttribute("auto-resize")&&r().warn("amp-list","auto-resize attribute is deprecated and its behavior is disabled. This feature will be relaunched under a new name soon. Please see https://github.com/ampproject/amphtml/issues/18849");Q.KEY=
"i-amphtml-key";Q.IGNORE="i-amphtml-ignore";M(this.element).then(function(c){a.H=c})};l.reconstructWhenReparented=function(){return!1};l.layoutCallback=function(){var a=this;this.T=!0;var b=this.getPlaceholder();b?Gb(this,b):this.K&&Gb(this,this.h);this.N.onResize(function(){Hb(a)});this.j&&Ib(this);return Bb(this)};function Eb(a){return Xa(a.element,"> div[role=list]:not([placeholder]):not([fallback]):not([fetch-error])")}
function Ib(a){a.mutateElement(function(){Z(a).initializeLoadMore();var b=a.getOverflowElement();b&&Sa(b);a.element.warnOnMissingOverflow=!1}).then(function(){Jb(a);rb(Z(a).getLoadMoreFailedClickable(),function(){return Kb(a,!0,!0)});rb(Z(a).getLoadMoreButtonClickable(),function(){return Kb(a,!1,!0)})})}function Hb(a){if(a.j)Lb(a,a.h);else return Gb(a,a.h)}function Z(a){a.W||(a.W=new bb(a.element));return a.W}
function Jb(a){var b,c;a.measureMutateElement(function(){b=Z(a).getLoadMoreButton().offsetHeight;c=a.element.offsetHeight},function(){J(a.h,{"max-height":"calc(100% - "+(b+"px)")});a.element.applySize(c+b)})}
function Mb(a,b){return M(a.element).then(function(c){v(c,'"amp-state:" URLs require amp-bind to be installed.');v(!a.D.isEnabled(),'[amp-list]: "amp-state" URIs cannot be used in SSR mode.');var d=b.slice(10);return c.getStateAsync(d).catch(function(e){var f=d.split(".")[0];r().error("amp-list","'amp-state' element with id '"+f+"' was not found.");throw e;})}).then(function(c){v("undefined"!==typeof c,"[amp-list] No data was found at provided uri: "+b);return c})}
function Nb(a,b){return m().then(function(){v(!a.D.isEnabled(),'[amp-list]: "amp-script" URIs cannot be used in SSR mode.');var c=b.slice(11).split(".");v(2===c.length&&0<c[0].length&&0<c[1].length,'[amp-list]: "amp-script" URIs must be of the format "scriptId.functionIdentifier".');var d=c[0],e=c[1],f=a.element.getAmpDoc().getElementById(d);v(f&&"AMP-SCRIPT"===f.tagName,"[amp-list]: could not find <amp-script> with script set to "+d);return f.getImpl().then(function(g){return g.callFunction(e)})}).then(function(c){v("object"===
typeof c,"[amp-list] "+b+" must return json, but instead returned: "+typeof c);return c})}
l.mutatedAttributesCallback=function(a){function b(e){c.element.setAttribute("src","");v(!c.D.isEnabled(),'[amp-list] "[src]" may not be bound in SSR mode.');e=n(e)?e:[e];Ab(c,!1);return Ob(c,e,!1)}var c=this;t().info("amp-list","mutate:",this.element,a);var d=a.src;void 0!==d&&("string"===typeof d?this.T&&(Ab(this),Bb(this)):"object"===typeof d?b(d):this.user().error("amp-list",'Unexpected "src" type: '+d));a["is-layout-container"]&&Cb(this)};
function Fb(a){var b=a.win.document.createElement("div");a.element.hasAttribute("single-item")||b.setAttribute("role","list");a.j||a.A||a.applyFillContent(b,!0);return b}function Pb(a,b,c){b.forEach(function(d){d.hasAttribute("role")||a.element.hasAttribute("single-item")||d.setAttribute("role","listitem");c.appendChild(d)})}function Qb(a,b){if(b||a.ba)a.toggleFallback(b),a.ba=b}
function Ab(a,b){if((b=void 0===b?!0:b)&&a.element.hasAttribute("reset-on-refresh")||"always"===a.element.getAttribute("reset-on-refresh")){var c=function(){a.togglePlaceholder(!0);var d=a.element.hasAttribute("reset-on-refresh");a.toggleLoading(!0,d);Qb(a,!1);if(a.H){var e=na(a.h.children);a.H.rescan([],e,{fast:!0,update:!1})}a.Y.scheduleUnlayout(a.element,a.h);Wa(a.h)};!a.j&&a.A?Rb(a,c):a.mutateElement(function(){c();a.j&&Z(a).hideAllLoadMoreElements()})}}
function Sb(a,b){var c=a.element.getAttribute("items")||"items",d=b;"."!=c&&(d=lb(b,c));v("undefined"!==typeof d,'Response must contain an array or object at "%s". %s',c,a.element);a.element.hasAttribute("single-item")&&(n(d)?r().warn("amp-list",'Expected response to contain a non-array Object due to "single-item" attribute.',a.element):d=[d]);d=r().assertArray(d);a.element.hasAttribute("max-items")&&(b=d,a=parseInt(a.element.getAttribute("max-items"),10),a<b.length&&(b=b.slice(0,a)),d=b);return d}
function Tb(a,b){b=b?qb(a.win,"amp-list.error",w({response:b.response})):null;a.S.trigger(a.element,"fetch-error",b,1)}
function Bb(a,b){b=void 0===b?{}:b;var c=void 0===b.refresh?!1:b.refresh,d=void 0===b.append?!1:b.append,e=a.element.getAttribute("src");if(!e)return m();a.D.isEnabled()?b=Ub(a,c):(b=e.startsWith("amp-state:")?Mb(a,e):e.startsWith("amp-script:")?Nb(a,e):Vb(a,c),b=b.then(function(f){if(e===a.element.getAttribute("src")){var g=Sb(a,f);a.j&&Wb(a,f);return Ob(a,g,d,f).then(function(){return a.j?Xb(a):m()})}}));return b.catch(function(f){if(d)throw f;Tb(a,f);a.element.classList.add("i-amphtml-list-fetch-error");
L(a.element,"fetch-error")&&Gb(a,a.element);a.toggleLoading(!1);a.getFallback()&&(Qb(a,!0),a.togglePlaceholder(!1));throw f;})}function Wb(a,b){var c=a.element.getAttribute("load-more-bookmark")||"load-more-src";a.F=lb(b,c)}
function Ub(a,b){var c=a.element.getAttribute("src"),d;return nb(a.element,Yb(a),b).then(function(e){var f=d=e,g=a.win,h=d.xhrUrl;if(!1!==d.fetchOpt.ampCors){var k=B(h);k=la(k.search);v(!("__amp_source_origin"in k),"Source origin is not allowed in %s",h);g=B(Da(g.location.href)).origin;g=encodeURIComponent("__amp_source_origin")+"="+encodeURIComponent(g);g&&(h=h.split("#",2),k=h[0].split("?",2),g=k[0]+(k[1]?"?"+k[1]+"&"+g:"?"+g),h=g+=h[1]?"#"+h[1]:"")}f.xhrUrl=h;f=d;g=d.xhrUrl;h=(h=d.fetchOpt)||{};
k=a.win;k=k.origin||B(k.location.href).origin;g=B(g).origin;k==g&&(h.headers=h.headers||{},h.headers["AMP-Same-Origin"]="true");f.fetchOpt=h;kb(e.fetchOpt);e=w({ampListAttributes:{items:a.element.getAttribute("items")||"items",singleItem:a.element.hasAttribute("single-item"),maxItems:a.element.getAttribute("max-items")}});return a.D.ssr(a.element,d,null,e)}).then(function(e){v(e,"Failed fetching JSON data: XHR Failed fetching ("+(Zb(a,d)+"): received no response."));var f=e.init;if(f&&(f=f.status,
300<=f))throw r().createError("Failed fetching JSON data ("+Zb(a,d)+"): HTTP error",f);v("string"===typeof e.html,"Failed fetching JSON data: XHR Failed fetching ("+(Zb(a,d)+"): Expected response with format {html: <string>}. Received: "),e);d.fetchOpt.responseType="application/json";return e},function(e){throw r().createError("Failed fetching JSON data: XHR Failed fetching ("+(Zb(a,d)+")"),e);}).then(function(e){if(c===a.element.getAttribute("src"))return Ob(a,e,!1)})}
function Zb(a,b){return H(a.element,"url").parse(b.xhrUrl).origin+"/..."}function Ob(a,b,c,d){var e=new Ha,f=e.promise,g=e.resolve,h=e.reject;a.G||a.da.schedule();a.G={data:b,resolver:g,rejecter:h,append:c,payload:d};a.ea&&c&&(a.G.payload=d||{});return f}
function zb(a){function b(){a.G!==c?a.da.schedule(1):(a.ea=a.G.data,a.G=null)}var c=a.G;r().fine("amp-list","Rendering list",a.element,"with data",c.data);var d=a.D.isEnabled(),e=a.D.applySsrOrCsrTemplate(a.element,c.data).then(function(g){return $b(a,g,c.append)}).then(function(g){return ac(a,g,c.append)});if(!d){var f=c.payload;e=e.then(function(){if(a.j){var g=[];g.push(bc(a,Z(a).getLoadMoreButton(),f));g.push(bc(a,Z(a).getLoadMoreEndElement(),f));g=Promise.all(g)}else g=m();return g})}e.then(function(){b();
c.resolver()},function(){b();c.rejecter()})}function bc(a,b,c){return b&&a.B.hasTemplate(b)?a.B.findAndRenderTemplate(b,c).then(function(d){return a.mutateElement(function(){Wa(b);b.appendChild(d)})}):m()}
function $b(a,b,c){function d(g){return g.rescan(e,c?[]:[a.h],{fast:!0,update:!0}).then(function(){return e},function(){return e})}var e=n(b)?b:[b],f=a.element.getAttribute("binding");if("no"===f||!e.some(function(g){return g.hasAttribute("i-amphtml-binding")||!!g.querySelector("[i-amphtml-binding]")}))return Promise.resolve(e);f||r().warn("amp-list",'Missing "binding" attribute. Using binding="refresh" is recommended for performance.');if(f&&f.startsWith("refresh")){if(a.H&&a.H.signals().get("FIRST_MUTATE"))return d(a.H);
M(a.element).then(function(g){g&&g.rescan(e,[],{fast:!0,update:"refresh-evaluate"==f?"evaluate":!1})});return Promise.resolve(e)}return M(a.element).then(function(g){return g?d(g):Promise.resolve(e)})}
function ac(a,b,c){function d(){a.element.classList.remove("i-amphtml-list-fetch-error");a.toggleLoading(!1);a.getFallback()&&Qb(a,!1);a.togglePlaceholder(!1);if(a.element.hasAttribute("diffable")&&f.hasChildNodes()){var g=Fb(a);Pb(a,b,g);a.K&&cc(f);g=Q(f,g);for(var h=0;h<g.length;h+=2)dc(g[h],g[h+1])}else e||(a.Y.scheduleUnlayout(a.element,f),Wa(f)),Pb(a,b,f);g=qb(a.win,"amp:dom-update",null,{bubbles:!0});a.h.dispatchEvent(g);a.element.getResources().getResourceForElement(a.element).resetPendingChangeSize();
return Hb(a)}var e=void 0===c?!1:c,f=a.h;return!a.j&&a.A?Rb(a,function(){(d()||Promise.resolve(!0)).then(function(g){if(g){Ra(a.element,{height:"",overflow:""});var h=void 0}else h=null;return h})}):a.mutateElement(d)}function cc(a){var b=-1;na(a.querySelectorAll(".i-amphtml-element")).forEach(function(c){Fa(c,function(){return String(b--)})})}
function dc(a,b){var c=Ea[a.nodeName];if(c)if(c.some(function(g){return a.getAttribute(g)!==b.getAttribute(g)}))a.parentElement.replaceChild(b,a);else{for(var d=0;d<b.classList.length;d++)a.classList.add(b.classList[d]);for(d=0;d<a.classList.length;d++){var e=a.classList[d];e.startsWith("i-amphtml-")||b.classList.contains(e)||a.classList.remove(e)}if(b.hasAttribute("style")){var f=b.getAttribute("style");a.setAttribute("style",(a.getAttribute("style")||"")+";"+f)}}}
function Rb(a,b){if(!a.A||a.j)return t().error("amp-list","%s initialized with layout=container does not support infinite scrolling with [load-more]. %s",a.element),m();var c;return a.measureMutateElement(function(){c=a.element.offsetHeight},function(){Ra(a.element,{height:c+"px",overflow:"hidden"});return b()})}
function Gb(a,b){return"container"!=a.element.getAttribute("layout")||a.A?a.measureElement(function(){var c=b.scrollHeight;return c>a.element.offsetHeight?a.attemptChangeHeight(c).then(function(){return!0},function(){return!1}):!0}):Promise.resolve(!0)}function Lb(a,b){var c=a.F?Z(a).getLoadMoreButton():Z(a).getLoadMoreEndElement();ec(a,c,b)}
function ec(a,b,c){"container"!=a.element.getAttribute("layout")&&a.measureElement(function(){var d=c.scrollHeight,e=b?b.offsetHeight:0;d+e>a.element.offsetHeight&&a.attemptChangeHeight(d+e).then(function(){a.Z=!1;"auto"===a.element.getAttribute("load-more")&&fc(a);J(a.h,{"max-height":""})}).catch(function(){a.Z=!0;Jb(a)})})}
function Cb(a){if(a.A)return r().warn("amp-list","[is-layout-container] and changeToLayoutContainer are ineffective when an amp-list initially sets layout=container",a.element),m();var b=a.element.getAttribute("i-amphtml-layout");return"container"==b?m():a.mutateElement(function(){a:{for(c in Ta)if(Ta[c]==b){var c=Ta[c];break a}c=void 0}a.element.classList.remove("i-amphtml-layout-"+c,"i-amphtml-layout-size-defined");["fixed","flex-item","fluid","intrinsic","responsive"].includes(c)?J(a.element,{width:"",
height:""}):"fixed-height"==c&&J(a.element,{height:""});a.element.applySize();a.h.classList.remove("i-amphtml-fill-content","i-amphtml-replaced-content");(c=a.getOverflowElement())&&Sa(c);a.element.setAttribute("layout","container");a.element.setAttribute("i-amphtml-layout","container");a.element.classList.add("i-amphtml-layout-container")})}
function Xb(a){return a.F?("auto"===a.element.getAttribute("load-more")&&gc(a),a.mutateElement(function(){Z(a).toggleLoadMoreLoading(!1);J(Z(a).getLoadMoreButton(),{visibility:""})})):a.mutateElement(function(){return Z(a).setLoadMoreEnded()})}
function Kb(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=b,e=c;if(a.F)a.element.setAttribute("src",a.F),a.F=null;else if(!d)return m();var f=hc(a.h);a.mutateElement(function(){Z(a).toggleLoadMoreLoading(!0)});return Bb(a,{append:!0}).then(function(){return a.mutateElement(function(){if(a.F){if(Z(a).toggleLoadMoreLoading(!1),f&&e)try{f.focus()}catch(g){}}else Z(a).setLoadMoreEnded()})}).then(function(){Lb(a,a.h)}).catch(function(g){Tb(a,g);ic(a)})}
function ic(a){a.mutateElement(function(){return Z(a).setLoadMoreFailed()}).then(function(){ec(a,Z(a).getLoadMoreFailedElement(),a.h)})}function gc(a){a.ga||(a.ga=a.N.onChanged(function(){return fc(a)}))}function fc(a){a.Z||a.N.getClientRectAsync(a.h.lastChild||a.h).then(function(b){var c=a.N.getHeight();if(0<b.bottom&&3*c>b.bottom)return Kb(a)})}
function Vb(a,b){var c=b=void 0===b?!1:b;c=void 0===c?!1:c;return mb(a.getAmpDoc(),a.element,{expr:".",urlReplacement:Yb(a),refresh:c,xssiPrefix:a.element.getAttribute("xssi-prefix")||void 0})}function Yb(a){var b=a.element.getAttribute("src"),c=1;if(b==a.ca||B(Da(b)).origin==B(Da(a.getAmpDoc().win.location)).origin)c=2;return c}
function hc(a){return(a=(void 0!==K?K:K=Va(a))?a.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'.replace(/^|,/g,"$&:scope ")):Ya(a,'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'))?a[a.length-1]:null}(function(a){a.registerElement("amp-list",V,"amp-list.i-amphtml-list-fetch-error [fetch-error],amp-list[load-more] [load-more-button].amp-visible,amp-list[load-more] [load-more-end].amp-visible,amp-list[load-more] [load-more-failed].amp-visible,amp-list[load-more] [load-more-loading].amp-visible{display:block}amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{height:80px;padding:12px 0px;box-sizing:border-box}.i-amphtml-list-load-more-button,amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#333;text-align:center}amp-list[load-more] [load-more-loading].i-amphtml-default-ui .i-amphtml-list-load-more-spinner{display:inline-block;width:40px;height:40px;margin:8px 0px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23333' stop-opacity='.75'/%3E%3Cstop offset='100%25' stop-color='%23333' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M11 4.4A18 18 0 1038 20' fill='none' stroke='url(%23a)' stroke-width='1.725'/%3E%3C/svg%3E\");animation:amp-list-load-more-spinner 1000ms linear infinite}@keyframes amp-list-load-more-spinner{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-list-load-more-button{border:none;display:inline-block;background-color:rgba(51,51,51,0.75);color:#fff;margin:4px 0px;padding:0px 32px;box-sizing:border-box;height:48px;border-radius:24px}[load-more] div[role=list]{overflow-y:hidden}.i-amphtml-list-load-more-button,.i-amphtml-list-load-more-button label,.i-amphtml-list-load-more-icon{cursor:pointer}.i-amphtml-list-load-more-button:hover{background-color:#333}.i-amphtml-list-load-more-button.i-amphtml-list-load-more-button-small{margin:0px;padding:4px 16px;height:32px}.i-amphtml-list-load-more-button label{display:inline-block;vertical-align:middle;line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-message{line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-icon{height:24px;width:24px;display:inline-block;vertical-align:middle;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23fff' d='M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-list/0.1/amp-list.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-list-0.1.js.map
