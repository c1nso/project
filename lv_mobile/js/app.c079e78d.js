(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"1ac760bf"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41e1":function(e,t,n){},4360:function(e,t,n){"use strict";var r,a=n("2b0e"),o=n("2f62"),c=n("ade3"),i={IS_READY:"IS_READY",OVETLAY:"OVETLAY"},u={isLogin:!1,isReady:!1,ovarLay:!0},s={},f={setIsReady:function(e,t){var n=e.commit;return n(i.IS_READY,t)},setOvarLay:function(e,t){var n=e.commit;return n(i.OVETLAY,t)}},l=(r={},Object(c["a"])(r,i.OVETLAY,(function(e,t){u.ovarLay=t})),Object(c["a"])(r,i.IS_READY,(function(e,t){u.isReady=t})),r),p={state:u,getters:s,actions:f,mutations:l};a["a"].use(o["a"]);t["a"]=new o["a"].Store({modules:{common:p}})},4734:function(e,t,n){},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("2b28");var r=n("9ed2"),a=(n("f06a"),n("20fb")),o=(n("480b"),n("a37c")),c=(n("2994"),n("2bdd")),i=(n("c194"),n("7744")),u=(n("0653"),n("34e9")),s=(n("da3c"),n("0b33")),f=(n("bda7"),n("5e46")),l=(n("e930"),n("8f80")),p=(n("be7f"),n("565f")),d=(n("e7e5"),n("d399")),b=(n("4056"),n("44bf")),h=(n("66b9"),n("b650")),m=(n("4d48"),n("d1e1")),O=(n("81e6"),n("9ffb")),v=(n("66cf"),n("343b")),y=(n("c3a6"),n("ad06")),g=(n("5d17"),n("f9bd")),j=(n("342a"),n("1437")),w=(n("e17f"),n("2241")),P=(n("f1dc"),n("6e47")),L=(n("5f5f"),n("f253")),E=(n("8fec"),n("7bd9")),T=(n("ac1e"),n("543e")),_=(n("ab71"),n("58e6")),S=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),D=(n("499a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("head-bar"),n("router-view",{staticClass:"middle"}),n("over-lay")],1)}),k=[],$=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("1da1")),R=n("ade3"),I=n("2f62"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",[e._t("left",[e.isShowIcon?e._e():n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(t){return e.goBack()}}})],{slot:"left"}),e._t("title",[e._v(e._s(e.pageTitle||e.$route.meta.title))],{slot:"title"}),e._t("right",null,{slot:"right"})],2)],1)},A=[],M=(n("b0c0"),n("ac1f"),n("5319"),n("5246"),n("6b41"));function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(R["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={name:"HeadBar",components:Object(R["a"])({},M["a"].name,M["a"]),data:function(){return{pageTitle:"",isShowIcon:!0}},computed:B({},Object(I["b"])({isLogin:function(e){return e.common.isLogin}})),watch:{$route:{handler:function(e){var t=this;this.pageTitle=e.meta.title,setTimeout((function(){return t.isShowIcon=e.meta.leftIcon}),200)},deep:!0}},mounted:function(){var e=this;setTimeout((function(){return e.isShowIcon=e.$route.meta.leftIcon}),200),this.$on("changeTitle",(function(t){return e.pageTitle=t}))},methods:{goBack:function(){"wallet"===this.$route.name?this.$router.replace({name:this.$route.meta.parent}):this.$router.go(-1)}}},U=C,V=(n("d45d"),n("2877")),H=Object(V["a"])(U,x,A,!1,null,"323d31ea",null),J=H.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-overlay",{attrs:{show:e.overLay}},[n("van-loading",{staticClass:"over_lay",attrs:{type:"spinner",color:"#1989fa"}})],1)},z=[];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(R["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={name:"OverLay",computed:G({},Object(I["b"])({overLay:function(e){return e.common.ovarLay}}))},N=K,Q=(n("8c07"),Object(V["a"])(N,q,z,!1,null,"1f20e233",null)),W=Q.exports;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Object(R["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee={name:"App",components:{HeadBar:J,OverLay:W},data:function(){return{pageTitle:""}},computed:Z({},Object(I["b"])({ovarLay:function(e){return e.common.ovarLay}})),created:function(){this.fetchData()},methods:{fetchData:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("setIsReady",!0),this.$store.dispatch("setOvarLay",!1);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},te=ee,ne=(n("5c0b"),Object(V["a"])(te,D,k,!1,null,null,null)),re=ne.exports,ae=n("a18c"),oe=n("4360"),ce=(n("4ee2"),n("53ca")),ie={components:{Toast:d["a"],Dialog:w["a"]},created:function(){},mounted:function(){var e=this;this.$on("handleSuccess",(function(t){return e.handleToast(t,"success")})),this.$on("handleError",(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=Object(ce["a"])(t);switch(r){case"string":e.handleToast(t,"fail");break;case"object":t.hasOwnProperty("code")&&e.handleErrorEvent(t,n),t.hasOwnProperty("status")&&console.warn(t.message);break;default:}})),this.$on("handleAlert",(function(e,t){t&&t(),w["a"].alert({title:"温馨提示",message:e})})),this.$on("handleUserLoginOut",(function(){return e.handleClearLoginInformation()})),this.$on("getUserMessage",(function(){return e.handleLoadUserMessage()}))},methods:{handleLoadUserMessage:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),handleLoginOut:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),handleClearLoginInformation:function(){this.handleLoginOut()},handleToast:function(e,t){"visible"===document.visibilityState&&"undefined"!==typeof e&&e&&d["a"][t](e)},handleErrorEvent:function(e,t){1===t?this.handleToast(e.Data,"fail"):this.handleToast(e.Msg,"fail")}}};n.d(t,"Bus",(function(){return ue}));var ue=new S["a"];S["a"].use(v["a"]).use(y["a"]).use(g["a"]).use(j["a"]).use(w["a"]).use(P["a"]).use(L["a"]).use(E["a"]).use(T["a"]).use(_["a"]),S["a"].use(m["a"]).use(O["a"]),S["a"].use(b["a"]).use(h["a"]),S["a"].use(y["a"]).use(d["a"]),S["a"].use(l["a"]).use(p["a"]),S["a"].use(s["a"]).use(f["a"]),S["a"].use(c["a"]).use(i["a"]).use(u["a"]),S["a"].use(v["a"]).use(o["a"]),S["a"].use(r["a"]).use(a["a"]),S["a"].config.productionTip=!1,new S["a"]({el:"#app",components:{App:re},mixins:[ie],store:oe["a"],router:ae["a"],template:"<App/>",render:function(e){return e(re)}})},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"8c07":function(e,t,n){"use strict";var r=n("4734"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";(function(e){var r=n("2b0e"),a=n("8c4f"),o=n("4360"),c=n("cccf"),i=new a["a"]({mode:"history",base:e,routes:c["a"]});i.beforeEach((function(e,t,n){var r=function(){n()};o["a"].state.common.isReady?r():o["a"].watch((function(e){return e.common.isReady}),r)})),r["a"].use(a["a"]),t["a"]=i}).call(this,"/")},cccf:function(e,t,n){"use strict";n("d3b7");t["a"]=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{title:"首页",footBar:!0,handBar:!0,leftIcon:!0}},{path:"*",redirect:"/"}]},d45d:function(e,t,n){"use strict";var r=n("41e1"),a=n.n(r);a.a}});