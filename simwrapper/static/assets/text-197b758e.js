import{d as n,n as s}from"./index-d056b534.js";import{m as i}from"./index-39837454.js";import{H as a}from"./HTTPFileSystem-6860a890.js";const o=new i({html:!0,linkify:!0,typographer:!0}),l=n({name:"TextPanel",props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0}},data:()=>({readmeContent:"",hasHeight:!1}),async mounted(){try{this.hasHeight=!!this.config.height;const t=new a(this.fileSystemConfig),e=`${this.subfolder}/${this.config.file}`,r=await t.getFileText(e);this.readmeContent=o.render(r)}catch(t){console.error({e:t});let e=""+t;t.statusText&&(e=t.statusText),this.readmeContent=`${this.config.file}: ${e}`}this.$emit("isLoaded")}});var d=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("div",{staticClass:"text-panel-element",class:{absolute:e.hasHeight}},[r("div",{staticClass:"scrollable"},[e.readmeContent?r("div",{staticClass:"curate-content markdown",domProps:{innerHTML:e._s(e.readmeContent)}}):e._e()])])},c=[];var m=s(l,d,c,!1,null,"1a4dbf9b",null,null);const p=m.exports;export{p as default};
//# sourceMappingURL=text-197b758e.js.map
