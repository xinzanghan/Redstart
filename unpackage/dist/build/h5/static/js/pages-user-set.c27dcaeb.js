(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-set"],{"00a8":function(t,e,i){t.exports=i.p+"static/img/ic_mess@2x.0525a7eb.png"},"12c7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list_item:{total:0,per_page:10,current_page:0,last_page:1,data:[]}}},onLoad:function(){},onShow:function(){var t=this;t.list_item={total:0,per_page:10,current_page:0,last_page:1,data:[]},t.getNoticeList()},onReachBottom:function(){var t=this;t.getNoticeList()},methods:{getDetail:function(t){this.$u.route({url:"pages/user/setDetail",params:{id:t}})},getNoticeList:function(){var t=this,e=t.list_item.current_page+1;e<=t.list_item.last_page?this.$u.post("user/getNoticeList",{page:e,category_id:t.scollItem_style+1}).then((function(e){if(1==e.data.current_page)var i=e.data.data;else{i=t.list_item.data;for(var a=0;a<e.data.data.length;a++)i.push(e.data.data[a])}e.data.data=i,t.list_item=e.data})):uni.showToast({icon:"none",title:"没有更多数据了"})}}};e.default=a},1974:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("315f").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]},"1a74":function(t,e,i){"use strict";i.r(e);var a=i("1974"),n=i("7a95");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("23c4");var s,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"67988de8",null,!1,a["a"],s);e["default"]=l.exports},"23c4":function(t,e,i){"use strict";var a=i("8cdf"),n=i.n(a);n.a},"2a50":function(t,e,i){"use strict";var a=i("a3bf"),n=i.n(a);n.a},"37cc":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\njustify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-67988de8]{flex:1;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:flex-end}.u-slot-content[data-v-67988de8]{flex:1;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center}',""]),t.exports=e},"3cc0":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-493338e3]{box-sizing:border-box;padding:0 %?32?%}.list[data-v-493338e3]{width:100%;height:%?152?%;display:flex;align-items:center}.list_l[data-v-493338e3]{width:%?88?%;height:%?88?%;position:relative;margin-right:%?24?%}.list_r[data-v-493338e3]{width:calc(100% - %?112?%);height:100%;box-sizing:border-box;\n\t/* padding: 0 36rpx;  */display:flex;flex-direction:column;align-items:center;justify-content:center}.list_r_top[data-v-493338e3]{width:100%;display:flex;align-items:center;justify-content:space-between}.top_l[data-v-493338e3]{color:#3a344e;font-size:%?28?%;font-weight:700}.top_r[data-v-493338e3]{color:#c9c8cc;font-size:%?24?%}.list_r_base[data-v-493338e3]{width:100%;color:#c9c8cc;font-size:%?24?%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;white-space:normal!important;-webkit-line-clamp:1;-webkit-box-orient:vertical}.dot[data-v-493338e3]{width:%?12?%;height:%?12?%;border-radius:50%;position:absolute;top:0;right:0;background:#d13334}",""]),t.exports=e},"4f24":function(t,e,i){"use strict";i.r(e);var a=i("6db6"),n=i("af37");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2a50");var s,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"493338e3",null,!1,a["a"],s);e["default"]=l.exports},"6db6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("1a74").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("u-navbar",{attrs:{"back-text":"",title:"消息通知","border-bottom":!1,height:"55","title-bold":!0}}),t._l(t.list_item.data,(function(e,n){return a("v-uni-view",{key:n,staticClass:"list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getDetail(e.id)}}},[a("v-uni-view",{staticClass:"list_l"},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("00a8"),mode:""}}),0==e.read_count?a("v-uni-view",{staticClass:"dot"}):t._e()],1),a("v-uni-view",{staticClass:"list_r"},[a("v-uni-view",{staticClass:"list_r_top"},[a("v-uni-view",{staticClass:"top_l"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"top_r"},[t._v(t._s(e.createtime_text))])],1),a("v-uni-view",{staticClass:"list_r_base"},[t._v(t._s(e.describe))])],1)],1)}))],2)},r=[]},"7a95":function(t,e,i){"use strict";i.r(e);var a=i("86c5"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"86c5":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync(),n={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r},"8cdf":function(t,e,i){var a=i("37cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3d66fbac",a,!0,{sourceMap:!1,shadowMode:!1})},a3bf:function(t,e,i){var a=i("3cc0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a3d3d126",a,!0,{sourceMap:!1,shadowMode:!1})},af37:function(t,e,i){"use strict";i.r(e);var a=i("12c7"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);