(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setInfo-setInfo"],{1974:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("315f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]},"1a74":function(t,e,n){"use strict";n.r(e);var i=n("1974"),a=n("7a95");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("23c4");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"67988de8",null,!1,i["a"],o);e["default"]=l.exports},"23c4":function(t,e,n){"use strict";var i=n("8cdf"),a=n.n(i);a.a},"37cc":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\njustify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-67988de8]{flex:1;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:flex-end}.u-slot-content[data-v-67988de8]{flex:1;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center}',""]),t.exports=e},5948:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("70cf")),r={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=r},"5f31":function(t,e,n){"use strict";var i=n("ec21"),a=n.n(i);a.a},"6cb1":function(t,e,n){"use strict";n.r(e);var i=n("a8bf"),a=n("f7bb");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("5f31");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"553578a2",null,!1,i["a"],o);e["default"]=l.exports},"70cf":function(t,e,n){"use strict";function i(t,e,n){this.$children.map((function(a){t===a.$options.name?a.$emit.apply(a,[e].concat(n)):i.apply(a,[t,e].concat(n))}))}n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{dispatch:function(t,e,n){var i=this.$parent||this.$root,a=i.$options.name;while(i&&(!a||a!==t))i=i.$parent,i&&(a=i.$options.name);i&&i.$emit.apply(i,[e].concat(n))},broadcast:function(t,e,n){i.call(this,t,e,n)}}};e.default=a},7307:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("1a74").default,uInput:n("6cb1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{"back-text":"",title:"修改昵称","border-bottom":!1,height:"55","title-bold":!0}}),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"list_l"},[t._v("昵称")]),n("v-uni-view",{staticClass:"list_r"},[n("u-input",{staticStyle:{width:"100%"},attrs:{type:t.type,border:t.border,maxlength:"10"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1),n("v-uni-view",{staticClass:"list1",staticStyle:{background:"#F7F7F7"}},[n("v-uni-text",{staticClass:"list_text"},[t._v("请不要超过10个字哦~")])],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"btn_c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.profile.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},r=[]},"7a95":function(t,e,n){"use strict";n.r(e);var i=n("86c5"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"7afb":function(t,e,n){var i=n("cbb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3d25e9a6",i,!0,{sourceMap:!1,shadowMode:!1})},"7f73":function(t,e,n){"use strict";n.r(e);var i=n("7307"),a=n("b85a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c4b9");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1a67ff3e",null,!1,i["a"],o);e["default"]=l.exports},"86c5":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync(),a={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r},"873e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-553578a2]{position:relative;flex:1;\r\ndisplay:flex;flex-direction:row\n}.u-input__input[data-v-553578a2]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-553578a2]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-553578a2]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-553578a2]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-553578a2]{margin-left:%?10?%}.u-input__right-icon--select[data-v-553578a2]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-553578a2]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"8cdf":function(t,e,n){var i=n("37cc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3d66fbac",i,!0,{sourceMap:!1,shadowMode:!1})},a8bf:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("315f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},r=[]},b85a:function(t,e,n){"use strict";n.r(e);var i=n("c4eb"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c4b9:function(t,e,n){"use strict";var i=n("7afb"),a=n.n(i);a.a},c4eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{nickname:"",type:"text",border:!1,avatar:""}},onLoad:function(){var t=this;t.index()},methods:{index:function(){var t=this;this.$u.post("user/index",{}).then((function(e){1==e.code?(t.avatar=e.data.userInfo.avatar,t.nickname=e.data.userInfo.nickname):uni.showToast({title:e.msg,icon:"none"})}))},profile:function(){var t=this;this.$u.post("user/profile",{avatar:t.avatar,nickname:t.nickname}).then((function(t){1==t.code?uni.navigateBack({delta:1}):uni.showToast({title:t.msg,icon:"none"})}))}}};e.default=i},cbb6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-1a67ff3e]{background:#f7f7f7}.list[data-v-1a67ff3e]{width:100%;height:%?104?%;box-sizing:border-box;padding:0 %?32?%;background:#fff;display:flex;align-items:center\n\t/* justify-content: space-between; */}.list_l[data-v-1a67ff3e]{color:#969799;font-size:%?28?%;\n\t/* margin-right: rpx; */width:%?250?%}.list_r[data-v-1a67ff3e]{width:100%}.list_text[data-v-1a67ff3e]{color:#969799;font-size:%?24?%\n\t/* margin-top: 20rpx; */}.list1[data-v-1a67ff3e]{width:100%;box-sizing:border-box;padding:0 %?32?%;padding-top:%?20?%}.btn[data-v-1a67ff3e]{width:100%;margin-top:%?80?%;box-sizing:border-box;padding:0 %?48?%}.btn_c[data-v-1a67ff3e]{width:100%;height:%?88?%;border-radius:%?12?%;opacity:1;border:0;background:#d13334;display:flex;align-items:center;justify-content:center;color:#fff;font-size:%?32?%;font-weight:700}body.?%PAGE?%[data-v-1a67ff3e]{background:#f7f7f7}",""]),t.exports=e},ec21:function(t,e,n){var i=n("873e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b0a197de",i,!0,{sourceMap:!1,shadowMode:!1})},f7bb:function(t,e,n){"use strict";n.r(e);var i=n("5948"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);