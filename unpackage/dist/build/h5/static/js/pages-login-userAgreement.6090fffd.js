(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-userAgreement"],{"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,r.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.default)(t,e):void 0}}},"0b35":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},o=[]},"0daf":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uParse:n("d368").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"conent"},[n("u-parse",{attrs:{html:t.content}})],1)},o=[]},"208e":function(t,e,n){var r=n("db0e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("03950be5",r,!0,{sourceMap:!1,shadowMode:!1})},3187:function(t,e,n){"use strict";var r=n("208e"),i=n.n(r);i.a},"31fe":function(t,e,n){n("ac1f"),n("1276");var r={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:i(" , ,\t,\r,\n,\f"),boolAttrs:i("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:i("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:i("a,colgroup,fieldset,legend"),selfClosingTags:i("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function i(t){for(var e=Object.create(null),n=t.split(","),r=n.length;r--;)e[n[r]]=!0;return e}t.exports=r},3359:function(t,e,n){"use strict";var r=n("64ec"),i=n.n(r);i.a},"3ba7":function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("e25e"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("841c"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=r(n("b85c")),a=uni.getSystemInfoSync(),s=a.windowWidth,c=(a.platform,n("31fe")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,r=e.split("://")[0],i=r.length;n=e[i];i++){if("/"==n&&"/"!=e[i-1]&&"/"!=e[i+1])break;r+=Math.random()>.5?n.toUpperCase():n}return r+=e.substr(i),this[t]=r}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),i&&(this.search=function(e){return i(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var i,a=this.rtf.getElementsByTagName("style"),l=0;i=a[l++];)i.innerHTML=i.innerHTML.replace(/body/g,"#rtf"+this._uid),i.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),m=0,v=0;h=p[m];m++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=v++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){c.errorImg&&(u.imgList[this.i]=this.src=c.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,b=this.rtf.getElementsByTagName("a"),y=(0,o.default)(b);try{for(y.s();!(g=y.n()).done;){var _=g.value;_.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(u.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])u.useAnchor&&u.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(j){y.e(j)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");u.videoContexts=x;for(var w,T=0;w=x[T++];)f(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,C,k=this.rtf.getElementsByTagName("audio"),O=(0,o.default)(k);try{for(O.s();!(A=O.n()).done;){var S=A.value;f(S),S.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(j){O.e(j)}finally{O.f()}if(this.autoscroll){var I,B=this.rtf.getElementsByTagName("table"),M=(0,o.default)(B);try{for(M.s();!(I=M.n()).done;){var L=I.value,E=document.createElement("div");E.style.overflow="scroll",L.parentNode.replaceChild(E,L),E.appendChild(L)}}catch(j){M.e(j)}finally{M.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==C&&(n.$emit("ready",n.rect),clearInterval(n._timer)),C=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=" ",r=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(n,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(n,".").concat(t.id):"")).boundingClientRect();this._in?r.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var r=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=r:uni.pageScrollTo({scrollTop:r,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in c.userAgentStyles)n+="".concat(r,"{").concat(c.userAgentStyles[r],"}");for(r in this.tagStyle)n+="".concat(r,"{").concat(this.tagStyle[r],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},"64ec":function(t,e,n){var r=n("debe");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("68d106d4",r,!0,{sourceMap:!1,shadowMode:!1})},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"83c7":function(t,e,n){"use strict";n.r(e);var r=n("3ba7"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},9111:function(t,e,n){"use strict";n.r(e);var r=n("0daf"),i=n("bbee");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3187");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"7401beed",null,!1,r["a"],a);e["default"]=c.exports},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=i(n("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,r.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}},bbee:function(t,e,n){"use strict";n.r(e);var r=n("e619"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d368:function(t,e,n){"use strict";n.r(e);var r=n("0b35"),i=n("83c7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3359");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"c95c97b2",null,!1,r["a"],a);e["default"]=c.exports},db0e:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".conent[data-v-7401beed]{box-sizing:border-box;padding:0 %?32?%;padding-top:%?100?%}",""]),t.exports=e},debe:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},e619:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{content:""}},onLoad:function(){var t=this;t.richtext()},methods:{richtext:function(){var t=this;this.$u.post("common/richtext",{id:1}).then((function(e){1==e.code?t.content=e.data.content:uni.showToast({title:e.msg,icon:"none"})}))}}};e.default=r}}]);