(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shareh5-shareh5"],{"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=r(i("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,e):void 0}}},"0736":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uParse:i("d368").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[""!=t.info.video?i("v-uni-view",{staticClass:"video_t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play(1)}}},[1==t.currentId?i("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo",autoplay:!0,src:t.info.video,controls:!0}}):[i("v-uni-image",{staticStyle:{height:"422rpx",width:"100%",display:"block"},attrs:{src:t.info.image}}),i("v-uni-view",{staticClass:" block"},[i("v-uni-view",{staticClass:"sanjia"})],1)]],2):t._e(),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.info.name))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.time))]),i("v-uni-view",{staticClass:"conent"},[i("u-parse",{attrs:{html:t.content}})],1)],1)},o=[]},"0b35":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},o=[]},"31fe":function(t,e,i){i("ac1f"),i("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=n},3359:function(t,e,i){"use strict";var n=i("64ec"),r=i.n(n);r.a},"3ba7":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=n(i("b85c")),a=uni.getSystemInfoSync(),s=a.windowWidth,l=(a.platform,i("31fe")),c={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var r,a=this.rtf.getElementsByTagName("style"),c=0;r=a[c++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),v=0,g=0;h=p[v];v++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=g++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){l.errorImg&&(u.imgList[this.i]=this.src=l.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var m,b=this.rtf.getElementsByTagName("a"),y=(0,o.default)(b);try{for(y.s();!(m=y.n()).done;){var x=m.value;x.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(u.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])u.useAnchor&&u.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(E){y.e(E)}finally{y.f()}var _=this.rtf.getElementsByTagName("video");u.videoContexts=_;for(var w,T=0;w=_[T++];)f(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,C,k=this.rtf.getElementsByTagName("audio"),I=(0,o.default)(k);try{for(I.s();!(A=I.n()).done;){var S=A.value;f(S),S.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(E){I.e(E)}finally{I.f()}if(this.autoscroll){var O,B=this.rtf.getElementsByTagName("table"),M=(0,o.default)(B);try{for(M.s();!(O=M.n()).done;){var j=O.value,L=document.createElement("div");L.style.overflow="scroll",j.parentNode.replaceChild(L,j),L.appendChild(j)}}catch(E){M.e(E)}finally{M.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==C&&(i.$emit("ready",i.rect),clearInterval(i._timer)),C=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in l.userAgentStyles)i+="".concat(n,"{").concat(l.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=c},4708:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".slot-wrap[data-v-4e0b1f26]{display:flex;align-items:center;\n\t/* 如果您想让slot内容占满整个导航栏的宽度 */flex:1;\n\t/* 如果您想让slot内容与导航栏左右有空隙 */\n\t/* padding: 0 30rpx; */box-sizing:border-box;padding-right:%?32?%;justify-content:flex-end}.video_t[data-v-4e0b1f26]{width:100%;height:%?422?%;position:relative}.title[data-v-4e0b1f26]{\n\t/* margin-top: 40rpx; */width:100%;box-sizing:border-box;padding:0 %?32?%;padding-top:%?40?%;color:rgba(28.44,25.5,38.25,1);font-size:%?36?%;font-weight:700;line-height:%?48?%}.time[data-v-4e0b1f26]{width:100%;height:%?96?%;line-height:%?96?%;color:rgba(137.82,133.58,151.94,1);font-size:%?24?%;box-sizing:border-box;padding-left:%?32?%}.conent[data-v-4e0b1f26]{color:#3a344e;font-size:%?30?%;line-height:%?48?%;box-sizing:border-box;padding:0 %?32?%}.share[data-v-4e0b1f26]{width:%?274?%;height:%?48?%;border-radius:%?8?%;opacity:1;background:#fa700c;position:fixed;right:0;top:10%;z-index:999999999}.block[data-v-4e0b1f26]{position:absolute;width:100%;height:%?422?%;background-color:rgba($color:#000000,$alpha:.3);left:0;top:0;display:flex;justify-content:center;align-items:center}.sanjia[data-v-4e0b1f26]{width:0;height:0;border-top:12px solid transparent;border-left:17px solid #fff;border-bottom:12px solid transparent}",""]),t.exports=e},"64ec":function(t,e,i){var n=i("debe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("68d106d4",n,!0,{sourceMap:!1,shadowMode:!1})},"6a94":function(t,e,i){var n=i("4708");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("bb7f5878",n,!0,{sourceMap:!1,shadowMode:!1})},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},7146:function(t,e,i){"use strict";i.r(e);var n=i("b111"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"83c7":function(t,e,i){"use strict";i.r(e);var n=i("3ba7"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},b111:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:"",info:{video:""},time:"",content:"",currentId:0}},onLoad:function(t){var e=this;t.id?(e.id=t.id,e.getCoralInfo(),uni.setNavigationBarTitle({title:e.info.name})):uni.showToast({title:"发生意外的错误",icon:"none"})},methods:{play:function(t){this.currentId=t},getCoralInfo:function(){var t=this;this.$u.post("coral/getCoralInfo",{id:t.id}).then((function(e){1==e.code?(t.info=e.data,t.time=e.data.create_time_text,t.content=e.data.content,t.is_recommend=e.data.is_recommend):uni.showToast({title:e.msg,icon:"none"})}))}}};e.default=n},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=r(i("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw a}}}}},c1ea:function(t,e,i){"use strict";i.r(e);var n=i("0736"),r=i("7146");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("ee4e");var a,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4e0b1f26",null,!1,n["a"],a);e["default"]=l.exports},d368:function(t,e,i){"use strict";i.r(e);var n=i("0b35"),r=i("83c7");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("3359");var a,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c95c97b2",null,!1,n["a"],a);e["default"]=l.exports},debe:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},ee4e:function(t,e,i){"use strict";var n=i("6a94"),r=i.n(n);r.a}}]);