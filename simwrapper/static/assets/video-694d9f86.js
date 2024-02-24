import{d as i,n}from"./index-405dc887.js";import{H as l}from"./HTTPFileSystem-104f8a6b.js";const a=i({name:"VideoPanel",props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0}},data:()=>({controls:"",loop:"",allowfullscreen:"",autoplay:"",muted:"",sources:{},r:new RegExp("^(?:[a-z]+:)?//","i")}),async mounted(){this.controls=this.config.controls,this.loop=this.config.loop,this.allowfullscreen=this.config.allowfullscreen,this.autoplay=this.config.autoplay,this.muted=this.config.muted,this.sources={};const s=new l(this.fileSystemConfig);for(const e in this.config.sources)try{let t=this.config.sources[e];this.r.test(t)||(t=s.cleanURL(`${this.subfolder}/${t}`)),this.sources[e]=t}catch(t){s.hasHandle()?this.$emit("error","Cannot play videos on Chrome local filesystem"):this.$emit("error",""+t)}this.$emit("isLoaded")}});var c=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("figure",{staticClass:"video_container"},[t("video",{attrs:{controls:e.controls,loop:e.loop,allowfullscreen:e.allowfullscreen,autoplay:e.autoplay},domProps:{muted:e.muted}},[e._l(e.sources,function(r,o){return t("source",{key:o,attrs:{src:r,type:o}})}),e._l(e.sources,function(r,o){return t("p",{key:o},[e._v("Video tag not supported. Download the video "),t("a",{attrs:{href:r,target:"_blank"}},[e._v("here")])])})],2)])},u=[];var f=n(a,c,u,!1,null,"3f71fccd",null,null);const h=f.exports;export{h as default};
//# sourceMappingURL=video-694d9f86.js.map