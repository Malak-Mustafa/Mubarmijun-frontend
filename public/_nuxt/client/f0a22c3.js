(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{528:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f7eb79b2",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(528)},553:function(t,e,n){var r=n(14)(!1);r.push([t.i,".d1{height:100vh;display:flex;grid-row-gap:1rem;row-gap:1rem;flex-direction:column;justify-content:center;align-items:center;font-size:1.5rem}@media(max-width:768px){.d1{font-size:1rem}}",""]),t.exports=r},554:function(t,e,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0cd63bd9",content,!0,{sourceMap:!1})},555:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},565:function(t,e,n){"use strict";n.r(e);var r={},o=(n(552),n(39)),l=n(41),c=n.n(l),h=n(217),d=(n(23),n(554),n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),f=n(5),v=Object(f.a)(d).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-parallax",{attrs:{src:"25332.jpg"}},[n("div",{staticClass:"d1"},[n("h1",[t._v("اسأل.")]),t._v(" "),n("h1",[t._v("أجِب.")]),t._v(" "),n("h1",[t._v("تحدَّى.")]),t._v(" "),n("h1",[t._v("تعلَّم.")]),t._v(" "),n("br"),t._v(" "),n("v-btn",{attrs:{color:"primary"}},[t._v("انضم لنا")])],1)]),t._v(" "),n("div",{staticClass:"d1"},[n("h1",[t._v("اسأل.")]),t._v(" "),n("h1",[t._v("أجِب.")]),t._v(" "),n("h1",[t._v("تحدَّى.")]),t._v(" "),n("h1",[t._v("تعلَّم.")]),t._v(" "),n("br"),t._v(" "),n("v-btn",{attrs:{color:"primary"}},[t._v("انضم لنا")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VParallax:v})}}]);