(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8,12,14,17],{446:function(t,e,r){var content=r(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("1cdf85c7",content,!0,{sourceMap:!1})},447:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=o},448:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("2fba213c",content,!0,{sourceMap:!1})},449:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=o},450:function(t,e,r){"use strict";var o=r(35),n=(r(46),r(23),r(306),r(91),r(47),r(446),r(117)),c=(r(448),r(139)),l=r(25),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(36),v=r(72),m=r(24),f="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(d,h.a).extend({name:"v-img",directives:{intersect:n.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(o.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!f||r||this.eager){if(this.normalisedSrc.lazySrc){var o=new Image;o.src=this.normalisedSrc.lazySrc,this.pollForSize(o,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var o=img.naturalHeight,n=img.naturalWidth;o||n?(t.naturalWidth=n,t.calculatedAspectRatio=n/o):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},472:function(t,e,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("34b9f4a2",content,!0,{sourceMap:!1})},473:function(t,e,r){var content=r(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("3d7649d7",content,!0,{sourceMap:!1})},474:function(t,e,r){var content=r(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("2366af73",content,!0,{sourceMap:!1})},475:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("d8ce83f2",content,!0,{sourceMap:!1})},489:function(t,e,r){"use strict";r(472)},490:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.chart-color{width:15px;height:15px;margin-right:.3rem}.chart-data-box{display:flex;margin:1rem 0}.first-color{background-color:#4472c5}.main-color{background-color:#64b0ff}.third-color{background-color:#ed7d31}.sub-text-colored{color:green;font-size:13px}.dash-box{padding:1rem 1.5rem;line-height:2;border:1px solid #dcdcdc}.dash-box .icon{font-size:45px;margin-bottom:1rem}.chart-img{width:100%;margin:1.4rem 0}",""]),t.exports=o},491:function(t,e,r){"use strict";r(473)},492:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.stok-box{padding:1rem}.chart-color-data{display:flex;justify-content:end;align-items:center}.chart-color-data .chart-box-colo{width:25px;height:25px;background-color:#dcdcdc;margin:0 1rem}.chart-color-data .in-color{background-color:#4472c5}.chart-color-data .out-color{background-color:#ed7d31}.chart-color-data .return-color{background-color:#ffd200}.chart-color-data .damaged-colro{background-color:#64b0ff}",""]),t.exports=o},493:function(t,e,r){"use strict";r(474)},494:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.fram-map{border:1px solid #dcdcdc;margin-top:10px;height:408px}",""]),t.exports=o},495:function(t,e,r){"use strict";r(475)},496:function(t,e,r){var o=r(30)(!1);o.push([t.i,".main-color{color:#64b0ff}.gray-font-color{color:grey}.dark-gray{color:#424242}.border-color{border:1px solid #dcdcdc}.bg-gray,.bg-light{background-color:#dcdcdc}.upcoming-order{font-size:12px;margin:1rem 0}",""]),t.exports=o},521:function(t,e,r){"use strict";r.r(e);var o=[["#222"],["#4472c5"],["red","orange","yellow"],["purple","violet"],["#4472c5","#ed7d31","#FF0"],["#ed7d31","#ffd200","#4472c5"]],n={data:function(){return{width:2,radius:10,padding:8,lineCap:"round",gradient:o[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:o,fill:!1,type:"trend",autoLineWidth:!1}}},c=(r(491),r(67)),l=r(71),d=r.n(l),h=r(0),v=r(35),m=(r(46),r(68),r(16),r(143),r(1),r(41),r(14),r(20),r(5),r(4),r(2),r(6),r(3),r(7),r(42)),f=r(25),_=r(38);function y(t,e){var r=e.minX,o=e.maxX,n=e.minY,c=e.maxY,l=t.length,d=Math.max.apply(Math,Object(_.a)(t)),h=Math.min.apply(Math,Object(_.a)(t)),v=(o-r)/(l-1),m=(c-n)/(d-h||1);return t.map((function(t,e){return{x:r+e*v,y:c-(t-h)*m,value:t}}))}function x(t,e){var r=e.minX,o=e.maxX,n=e.minY,c=e.maxY,l=t.length,d=Math.max.apply(Math,Object(_.a)(t)),h=Math.min.apply(Math,Object(_.a)(t));h>0&&(h=0),d<0&&(d=0);var v=o/l,m=(c-n)/(d-h||1),f=c-Math.abs(h*m);return t.map((function(t,e){var o=Math.abs(m*t);return{x:r+e*v,y:f-o+ +(t<0)*o,height:o,value:t}}))}r(23);function C(t){return parseInt(t,10)}function S(t,e,r){return C(t.x+r.x)===C(2*e.x)&&C(t.y+r.y)===C(2*e.y)}function w(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function k(t,e,r){var o=t.x-e.x,n=t.y-e.y,c=Math.sqrt(o*o+n*n),l=o/c,d=n/c;return{x:e.x+l*r,y:e.y+d*r}}function z(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,n=t.shift(),c=t[t.length-1];return(r?"M".concat(n.x," ").concat(o-n.x+2," L").concat(n.x," ").concat(n.y):"M".concat(n.x," ").concat(n.y))+t.map((function(r,o){var c=t[o+1],l=t[o-1]||n,d=c&&S(c,r,l);if(!c||d)return"L".concat(r.x," ").concat(r.y);var h=Math.min(w(l,r),w(c,r)),v=h/2<e?h/2:e,m=k(l,r,v),f=k(c,r,v);return"L".concat(m.x," ").concat(m.y,"S").concat(r.x," ").concat(r.y," ").concat(f.x," ").concat(f.y)})).join("")+(r?"L".concat(c.x," ").concat(o-n.x+2," Z"):"")}function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(f.a)(m.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,r=e.length,i=0;t.length<r;i++){var o=e[i],n=this.labels[i];n||(n="object"===Object(v.a)(o)?o.value:o),t.push({x:o.x,value:String(n)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?y(this.normalizedValues,this.boundary):x(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,r=this.gradient.slice();r.length||r.push("");var o=Math.max(r.length-1,1),n=r.reverse().map((function(e,r){return t.$createElement("stop",{attrs:{offset:r/o,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},n)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=y(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:z(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,r=this.parsedLabels.map((function(r,i){return e.$createElement("text",{attrs:{x:r.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(r,i)])}));return this.genG(r)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=x(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,r,o){var n=this,c="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(o,"-clip")}},t.map((function(t){return n.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:r,height:t.height,rx:c,ry:c}},[n.autoDraw?n.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(n.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:E(E({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-style stok-box"},[r("h2",[t._v("Stock report")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("You can keep track your inventory all over the year")]),t._v(" "),t._m(0),t._v(" "),r("v-sparkline",{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chart-color-data"},[r("div",{staticClass:"chart-box-colo in-color"}),t._v(" "),r("p",[t._v("in")]),t._v(" "),r("div",{staticClass:"chart-box-colo out-color"}),t._v(" "),r("p",[t._v("Out")]),t._v(" "),r("div",{staticClass:"chart-box-colo return-color"}),t._v(" "),r("p",[t._v("Return")]),t._v(" "),r("div",{staticClass:"chart-box-colo damaged-colro"}),t._v(" "),r("p",[t._v("Damaged")])])}],!1,null,null,null);e.default=component.exports;d()(component,{VSparkline:$})},523:function(t,e,r){"use strict";r.r(e);r(489);var o=r(67),n=r(71),c=r.n(n),l=r(443),d=r(212),h=r(450),v=r(444),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"border-style p-3 "},[r("h2",[t._v("Inventory")]),t._v(" "),r("v-img",{staticClass:"chart-img",attrs:{src:"https://www.optimizesmart.com/wp-content/uploads/2020/06/pie-chart.jpg"}}),t._v(" "),r("div",{staticClass:"chart-data-box "},[r("div",{staticClass:"chart-color first-color"}),t._v(" "),r("p",[t._v("Jeddah Warehouse")])]),t._v(" "),r("div",{staticClass:"chart-data-box "},[r("div",{staticClass:"chart-color main-color"}),t._v(" "),r("p",[t._v("Eldammam")])]),t._v(" "),r("div",{staticClass:"chart-data-box"},[r("div",{staticClass:"chart-color third-color"}),t._v(" "),r("p",[t._v("ElRiyadh")])])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"dash-box"},[r("v-icon",{staticClass:"icon"},[t._v("widgets")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("No. of Products")]),t._v(" "),r("h2",[t._v("256")]),t._v(" "),r("p",{staticClass:"sub-text-colored"},[t._v("25 NEW")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"dash-box"},[r("v-icon",{staticClass:"icon"},[t._v("groups")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("No. of Customers")]),t._v(" "),r("h2",[t._v("26")]),t._v(" "),r("p",{staticClass:"sub-text-colored"},[t._v("10 NEW")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"dash-box"},[r("v-icon",{staticClass:"icon"},[t._v("shopping_bag")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Today's Orders")]),t._v(" "),r("h2",[t._v("11")]),t._v(" "),r("p",{staticClass:"sub-text-colored"},[t._v("5")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"dash-box"},[r("v-icon",{staticClass:"icon"},[t._v("shopping_cart_checkout")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Today's Returns")]),t._v(" "),r("h2",[t._v("03")]),t._v(" "),r("p",{staticClass:"sub-text-colored"},[t._v("+ 1 % ")])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VIcon:d.a,VImg:h.a,VRow:v.a})},524:function(t,e,r){"use strict";r.r(e);r(493);var o=r(67),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h5",[t._v("inventory location")]),t._v(" "),r("iframe",{staticClass:"fram-map",attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2909981400094!2d39.17533591474007!3d21.496318885746966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf0b9bf3e461%3A0x85e3823a97e5a1b4!2sAl%20Dammam%2C%20Al-Baghdadiyah%20Al-Gharbiyah%2C%20Jeddah%2022231%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1647784863891!5m2!1sen!2seg",allowfullscreen:"",loading:"lazy"}})])}],!1,null,null,null);e.default=component.exports},525:function(t,e,r){"use strict";r.r(e);r(495);var o=r(67),n=r(71),c=r.n(n),l=r(443),d=r(212),h=r(444),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"user-controller"},[r("h3",{staticClass:"upcoming-order"},[t._v("Up coming schedule")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-icon",{staticClass:"user-icon-style"},[t._v("person")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("b",{staticClass:"upcoming-order"},[t._v("Order:#12548")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Shipped")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-icon",{staticClass:"user-icon-style"},[t._v("person")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("b",{staticClass:"upcoming-order"},[t._v("Order:#12548")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Shipped")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-icon",{staticClass:"user-icon-style"},[t._v("person")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("b",{staticClass:"upcoming-order"},[t._v("Order:#12548")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Shipped")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-icon",{staticClass:"user-icon-style"},[t._v("person")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("b",{staticClass:"upcoming-order"},[t._v("Order:#12548")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Shipped")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-icon",{staticClass:"user-icon-style"},[t._v("person")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("b",{staticClass:"upcoming-order"},[t._v("Order:#12548")]),t._v(" "),r("p",{staticClass:"sub-text"},[t._v("Shipped")])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VIcon:d.a,VRow:h.a})},661:function(t,e,r){"use strict";r.r(e);var o=r(67),n=r(71),c=r.n(n),l=r(443),d=r(444),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"my-3 "},[r("v-row",[r("v-col",{attrs:{cols:"10",md:"8"}},[r("div",{staticClass:"dash-circle-chart my-3"},[r("chart-component")],1),t._v(" "),r("div",{staticClass:"stock-report my-3"},[r("stock-report-component")],1)]),t._v(" "),r("v-col",{attrs:{cols:"10",md:"2"}},[r("div",{staticClass:"dash-map"},[r("map-component")],1),t._v(" "),r("div",{staticClass:"up-comming-shedule"},[r("up-comming-schedule-component")],1)])],1)],1),t._v(" "),r("div"),t._v(" "),r("Nuxt")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-title my-3"},[r("h2",[t._v("Welcome Back --------------")]),t._v(" "),r("p",{staticClass:"sub-text my-3"},[t._v("Manage Your Daily Orders")])])}],!1,null,null,null);e.default=component.exports;c()(component,{ChartComponent:r(523).default,StockReportComponent:r(521).default,MapComponent:r(524).default,UpCommingScheduleComponent:r(525).default}),c()(component,{VCol:l.a,VRow:d.a})}}]);