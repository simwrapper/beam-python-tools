import{d as o,n as i}from"./index-d056b534.js";import m from"./XyTime-92a7192a.js";import"./lil-gui.esm-1e0f7d72.js";import"./index-11e30dac.js";import"./index-c4daa518.js";import"./util-52efa7a8.js";import"./HTTPFileSystem-6860a890.js";import"./fxp-26b9b10f.js";import"./CollapsiblePanel-848344cc.js";import"./DrawingTool-e87e8dd9.js";import"./layer-5c460687.js";import"./text-layer-a4888fd8.js";import"./path-layer-b47e71be.js";import"./LegendBox-c848b6d0.js";import"./LegendStore-3aadd543.js";import"./TimeSlider-366126c9.js";import"./set-rtl-text-plugin-91733337.js";import"./extends-98964cd2.js";import"./index-5cce4a23.js";import"./data-filter-e53b1d66.js";import"./layer-extension-6bb36cea.js";import"./ZoomButtons-d41cd146.js";const n=o({name:"XyTimeÜanel",components:{XyTime:m},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},datamanager:Object},mounted(){},methods:{isLoaded(){this.$emit("isLoaded")}}});var a=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("xy-time",{staticClass:"deck-map",attrs:{root:e.fileSystemConfig.slug,subfolder:e.subfolder,config:e.config,thumbnail:!1,datamanager:e.datamanager},on:{isLoaded:e.isLoaded,error:function(r){return e.$emit("error",r)}}})},p=[];var s=i(n,a,p,!1,null,"64c48d59",null,null);const A=s.exports;export{A as default};
//# sourceMappingURL=xytime-7cbeb9f4.js.map
