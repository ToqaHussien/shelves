(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{655:function(t,l,e){"use strict";e.r(l);var o={data:function(){return{radios:null,downloadDialog:!0}},props:["activDownload"],methods:{cancel:function(){this.$emit("closeDownload")}}},c=e(69),d=e(72),n=e.n(d),r=e(456),v=e(437),_=e(436),w=e(445),C=e(634),f=e(635),x=e(446),m=e(439),component=Object(c.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[t.activDownload?e("div",{staticClass:"dialog-section"},[e("v-card",{staticClass:"card-dialog"},[e("v-card-title",{staticClass:"card-title-section"},[e("div",[e("h3",{staticClass:"text-h5"},[t._v("Download Table")]),t._v(" "),e("p",{staticClass:"sub-text"},[t._v("Please Select your download type")])])]),t._v(" "),e("v-card-text",{staticClass:"card-content"},[e("div",{staticClass:"my-3"},[e("p",{staticClass:"field-title"},[t._v("please select your download type")]),t._v(" "),e("v-radio-group",{attrs:{mandatory:""},model:{value:t.radios,callback:function(l){t.radios=l},expression:"radios"}},[e("v-radio",{attrs:{label:"PDF (.PDF)",value:"PDF"}}),t._v(" "),e("v-radio",{attrs:{label:"Excell File (.CSV)",value:"Excell"}})],1),t._v(" "),e("p",{staticClass:"field-title"},[t._v("please cgoose range for your download")]),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",md:"4"}},[e("p",{staticClass:"field-title"},[t._v("From")]),t._v(" "),e("v-text-field",{attrs:{placeholder:"Ex : 1",outlined:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("p",{staticClass:"field-title"},[t._v("To")]),t._v(" "),e("v-text-field",{attrs:{placeholder:"Ex : 15",outlined:""}})],1)],1)],1)]),t._v(" "),e("v-card-actions",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-btn",{staticClass:"solid-btn w-100"},[t._v("\n                                Send\n                            ")]),t._v(" "),e("v-btn",{staticClass:"white-btn w-100 my-3",on:{click:function(l){return t.cancel()}}},[t._v("\n                                Cancel\n                            ")])],1)],1)],1)],1)],1):t._e()])}),[],!1,null,null,null);l.default=component.exports;n()(component,{VBtn:r.a,VCard:v.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:w.a,VRadio:C.a,VRadioGroup:f.a,VRow:x.a,VTextField:m.a})}}]);