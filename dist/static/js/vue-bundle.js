webpackJsonp([1],[,function(t,e,i){i(14);var n=i(12)(i(4),i(13),"data-v-2ddc4b1e",null);t.exports=n.exports},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),o=function(t){return t&&t.__esModule?t:{default:t}}(n);weex.requireModule("modal");e.default={name:"home",data:function(){return{basic:"http://cdn4.videos.motherlessmedia.com/videos/",key:"3B349BC",param:".mp4?fs=opencloud"}},mounted:function(){var t=this;o.default.ready(function(){var e=o.default.apis;e.biz.navigation.setRight({show:!0,control:!0,text:"设置"}),e.biz.navigation.setLeft({show:!0,control:!1,text:"返回",android:!0}),o.default.on("navRightButton",function(){t.$router.push("config")}),e.util.domainStorage.getItem({name:"key",onSuccess:function(e){t.key=e.value.key},onFail:function(t){alert(JSON.stringify(t))}})})},methods:{getClick:function(){this.$router.push("config")}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=i(2),a=n(o),s=i(3),c=n(s),r=i(1),d=n(r);c.default.init(a.default),new a.default(a.default.util.extend({el:"#root"},d.default))},function(t,e,i){e=t.exports=i(7)(),e.push([t.i,".wrapper[data-v-2ddc4b1e]{display:flex;flex-direction:column;justify-content:center;width:750px;align-items:center}.title[data-v-2ddc4b1e]{font-size:60px;color:#505050;text-align:center}.subtitle[data-v-2ddc4b1e]{display:block;font-size:30px;color:#aaa;text-align:center;margin-top:20px}.bind-vue-container[data-v-2ddc4b1e]{width:702px;height:88px;justify-content:center;align-items:center;border-radius:6px;background-color:#4fc08d}.bind-vue[data-v-2ddc4b1e]{font-size:34px;color:#fff;text-align:center}.page[data-v-2ddc4b1e]{width:750px;height:750px}",""])},,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[i("text",{staticClass:"title",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:t.getClick}},[t._v(" "+t._s(t.key))]),t._v(" "),i("web",{staticClass:"page",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.basic+t.key+t.param}})],1)},staticRenderFns:[]}},function(t,e,i){var n=i(6);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("11a67ab1",n,!0)}],[5]);