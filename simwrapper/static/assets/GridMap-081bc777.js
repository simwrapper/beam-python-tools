import{d as E,n as R,r as _,g as d,R as m,e as C,M as A,C as P,V as b,S as f}from"./index-d056b534.js";import{G as M}from"./lil-gui.esm-1e0f7d72.js";import{d as I}from"./index-7e0ae177.js";import{y as w}from"./index-11e30dac.js";import{c as S}from"./index-c4daa518.js";import{u as L}from"./util-52efa7a8.js";import{H as F}from"./HTTPFileSystem-6860a890.js";import{C as z}from"./Coords-23d23a7c.js";import{C as O}from"./CollapsiblePanel-848344cc.js";import{D as $}from"./DrawingTool-e87e8dd9.js";import{Z as N}from"./ZoomButtons-d41cd146.js";import{D as G,S as j}from"./set-rtl-text-plugin-91733337.js";import{G as V,u as k,U as H,_ as x}from"./layer-5c460687.js";import{C as W}from"./column-layer-0d43cd7a.js";import"./fxp-26b9b10f.js";import"./text-layer-a4888fd8.js";import"./path-layer-b47e71be.js";import"./extends-98964cd2.js";const U=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),B=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),X=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),Y=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),q={POSITION:{size:3,value:new Float32Array(B)},NORMAL:{size:3,value:new Float32Array(X)},TEXCOORD_0:{size:2,value:new Float32Array(Y)}};class Z extends V{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{id:i=k("cube-geometry")}=t;super({...t,id:i,indices:{size:1,value:new Uint16Array(U)},attributes:{...q,...t.attributes}})}}const J={cellSize:{type:"number",min:0,value:1e3},offset:{type:"array",value:[1,1]}};class D extends W{getGeometry(t){return new Z}draw({uniforms:t}){const{elevationScale:i,extruded:a,offset:l,coverage:h,cellSize:n,angle:s,radiusUnits:r}=this.props;this.state.model.setUniforms(t).setUniforms({radius:n/2,radiusUnits:H[r],angle:s,offset:l,extruded:a,coverage:h,elevationScale:i,edgeDistance:1,isWireframe:!1}).draw()}}x(D,"layerName","GridCellLayer");x(D,"defaultProps",J);const v=6,K=E({name:"TimeSliderV2",props:{range:{type:Array,required:!0},allTimes:[]},data:()=>({state:{componentWidth:0,dragStartX:0,dragType:0,isDragging:!1,isSetupComplete:!1,leftPosition:0,rightPosition:1,datasetRange:[0,86400],labels:["",""],animationElapsedTime:0,startTime:0,timeFilter:[0,3599],animator:null,timeLabels:[0,1],currentTime:0},id:"id-"+Math.floor(1e12*Math.random()),resizer:null,ANIMATE_SPEED:5,isAnimating:!1}),computed:{fullDatasetTimeSpan(){return this.state.datasetRange[1]-this.state.datasetRange[0]+this.allTimes[0]},extentLeftToRight(){return this.state.rightPosition-this.state.leftPosition},hasNonZeroTimeRange(){return!!this.fullDatasetTimeSpan},calculateActiveMargins(){const e=this.state.componentWidth-2*v,t=Math.floor(e*this.state.leftPosition),i=Math.floor(e*(1-this.state.rightPosition));return{marginLeft:`${t}px`,marginRight:`${i}px`}}},mounted(){this.getDimensions(),this.setupInitialValues(),this.setupResizer(),window.addEventListener("mouseup",this.dragEnd),window.addEventListener("mousemove",this.dragging)},beforeDestroy(){window.removeEventListener("mouseup",this.dragEnd),window.removeEventListener("mousemove",this.dragging),this.state.animator&&window.cancelAnimationFrame(this.state.animator)},watch:{"state.currentTime"(){this.updateExtent()},labels(){this.updateLabels()},"state.leftPosition"(){this.emitValues()},"state.rightPosition"(){this.emitValues()}},methods:{updateAnimation(){this.isAnimating=!this.isAnimating,this.isAnimating&&(this.state.animationElapsedTime=this.state.timeFilter[0]-this.range[0],this.state.startTime=Date.now()-this.state.animationElapsedTime/this.ANIMATE_SPEED,this.animate())},findIndexLessThanOrEqualTo(e){let t=0,i=this.allTimes.length-1,a=0;for(;t<=i;){const l=Math.floor((t+i)/2);if(this.allTimes[l]===e)return l;this.allTimes[l]<=e?(a=l,t=l+1):i=l-1}return a},animate(){if(!this.isAnimating)return;this.state.animationElapsedTime=this.ANIMATE_SPEED*(Date.now()-this.state.startTime);const e=this.state.animationElapsedTime+this.range[0];this.state.currentTime=this.findIndexLessThanOrEqualTo(e),e>this.range[1]+this.allTimes[0]&&(this.state.startTime=Date.now(),this.state.animationElapsedTime=0),this.state.timeFilter=[this.allTimes[this.state.currentTime],this.allTimes[this.state.currentTime+1]==null?0:this.allTimes[this.state.currentTime+1]],this.state.animator=window.requestAnimationFrame(this.animate)},setupResizer(){try{this.resizer=new ResizeObserver(this.getDimensions);const e=document.getElementById(`id-${this.id}`);this.resizer.observe(e)}catch(e){console.error(""+e)}},setupInitialValues(){try{this.range&&(this.state.datasetRange=this.range,this.state.timeFilter=[this.allTimes[0],this.allTimes[1]]),this.fullDatasetTimeSpan===0?(this.state.leftPosition=0,this.state.rightPosition=1):this.updateExtent()}catch(e){console.error(""+e)}finally{this.state.isSetupComplete=!0}},updateExtent(){this.state.timeFilter&&(this.state.leftPosition=1/this.fullDatasetTimeSpan*(this.allTimes[this.state.currentTime]-this.allTimes[0]),this.state.rightPosition=1/this.fullDatasetTimeSpan*(this.allTimes[this.state.currentTime+1]==null?this.allTimes[this.state.currentTime]+this.allTimes[0]:this.allTimes[this.state.currentTime+1]-this.allTimes[0]),this.state.timeLabels=[this.convertSecondsToClockTimeMinutes(this.allTimes[this.state.currentTime]),this.convertSecondsToClockTimeMinutes(this.allTimes[this.state.currentTime+1]==null?this.allTimes[this.state.currentTime]+this.allTimes[0]:this.allTimes[this.state.currentTime+1])],this.updateLabels())},updateLabels(){this.state.timeLabels&&(this.state.labels=this.state.timeLabels)},emitValues(){this.state.isSetupComplete&&this.$emit("timeExtent",this.state.timeFilter)},convertSecondsToClockTimeMinutes(e){const t=Math.floor(e/3600),i=Math.floor((e-t*3600)/60),a=e-t*3600-i*60,l={h:`${t}`,m:`${i}`.padStart(2,"0"),s:`${a}`.padStart(2,"0")};return`${l.h}:${l.m}`},getDimensions(){var e;this.state.componentWidth=((e=this.$refs.slider)==null?void 0:e.clientWidth)||0},dragStart(e){this.state.isDragging=!0,this.state.dragStartX=e.clientX;const t=this.state.componentWidth-2*v,i=Math.floor(t*this.state.leftPosition),a=Math.floor(t*(1-this.state.rightPosition)),l=this.state.componentWidth-a-i-2*v;e.offsetX>=0&&e.offsetX<l?this.state.dragType=0:e.offsetX<0?this.state.dragType=1:e.offsetX>l&&(this.state.dragType=2)},dragging(e){if(!this.state.isDragging)return;const t=e.clientX-this.state.dragStartX,i=this.state.componentWidth-2*v;if(this.state.dragType==0){const a=this.extentLeftToRight;let l=(i*this.state.leftPosition+t)/i,h=l+a;l<0&&(l=0,h=a),h>1&&(h=1,l=h-a),this.state.leftPosition=l,this.state.rightPosition=h,this.updateLabels(),this.updateData(),this.state.dragStartX=e.clientX;return}},dragEnd(e){const t=this.findIndexLessThanOrEqualTo(this.state.leftPosition*this.fullDatasetTimeSpan+this.allTimes[0]);this.state.leftPosition=1/this.fullDatasetTimeSpan*(this.allTimes[t]-this.allTimes[0]),this.state.rightPosition=1/this.fullDatasetTimeSpan*(this.allTimes[t+1]==null?this.allTimes[t]+this.allTimes[0]:this.allTimes[t+1]-this.allTimes[0]),this.state.timeFilter=[this.allTimes[t]-this.allTimes[0],this.allTimes[t+1]==null?this.allTimes[t]+this.allTimes[0]:this.allTimes[t+1]-this.allTimes[0]],this.state.isDragging=!1},updateData(){const e=this.findIndexLessThanOrEqualTo(this.state.leftPosition*this.fullDatasetTimeSpan+this.allTimes[0]),t=this.findIndexLessThanOrEqualTo(this.state.leftPosition*this.fullDatasetTimeSpan+this.allTimes[0])+1;this.state.timeLabels=[this.convertSecondsToClockTimeMinutes(this.allTimes[e]),this.convertSecondsToClockTimeMinutes(this.allTimes[t])],this.state.timeFilter=[this.allTimes[e],this.allTimes[t]]}}});var Q=function(){var t=this,i=t._self._c;return t._self._setupProxy,t.hasNonZeroTimeRange?i("div",{staticClass:"time-slider-component",attrs:{id:`id-${t.id}`}},[i("div",{staticClass:"label-area"},[i("p",{staticClass:"p1"},[t._v(t._s(t.state.labels[0]))]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.state.labels[1]!==void 0,expression:"state.labels[1] !== undefined"}],staticClass:"p2"},[t._v(" - "+t._s(t.state.labels[1]))])]),i("div",{staticClass:"slider-area"},[i("button",{staticClass:"button play-button",attrs:{size:"is-small",type:"is-link"},on:{click:t.updateAnimation}},[t._v(t._s(t.isAnimating?"| |":">"))]),i("div",{ref:"slider",staticClass:"time-slider-dragger",on:{mousemove:t.dragging}},[i("div",{staticClass:"active-region",style:t.calculateActiveMargins,on:{mousedown:t.dragStart,mouseup:function(a){return a.stopPropagation(),t.dragEnd.apply(null,arguments)},mousemove:function(a){return a.stopPropagation(),t.dragging.apply(null,arguments)}}})])])]):t._e()},tt=[];var et=R(K,Q,tt,!1,null,"96bbdbf7",null,null);const it=et.exports,st={ambient:.64,diffuse:.6,shininess:32,specularColor:[51,51,51]};function at({viewId:e=0,colorRamp:t="viridis",dark:i=!1,data:a={},currentTimeIndex:l=0,mapIsIndependent:h=!1,maxHeight:n=200,cellSize:s=200,opacity:r=.7,upperPercentile:p=100}){const[y,u]=_.useState(d.state.viewState);m[e]=o=>{u(o||d.state.viewState)};function T(o){!o||typeof o.latitude!="number"||typeof o.longitude!="number"||(o.center||(o.center=[0,0]),o.center[0]=o.longitude,o.center[1]=o.latitude,u(o),h||d.commit("setMapCamera",o))}const c=S({colormap:t,nshades:10,format:"rba",alpha:1}).map(o=>[o[0],o[1],o[2],255]),g=[new D({id:"gridlayer",data:{length:a.mapData[l].length,attributes:{getPosition:{value:a.mapData[l].centroid,size:2},getFillColor:{value:a.mapData[l].colorData,size:3},getElevation:{value:a.mapData[l].values,size:1}}},colorRange:i?c.slice(1):c.reverse().slice(1),coverage:1,autoHighlight:!0,elevationRange:[0,n],elevationScale:n,pickable:!0,opacity:r,cellSize:s,upperPercentile:p,material:st,transitions:{elevationScale:{type:"interpolation",duration:10},opacity:{type:"interpolation",duration:200}},parameters:{}})];return C.createElement(G,{layers:g,controller:!0,useDevicePixels:!1,viewState:y,onViewStateChange:o=>T(o.viewState)},C.createElement(j,{mapStyle:d.getters.mapStyle,preventStyleDiffing:!0,mapboxApiAccessToken:A}))}const lt={messages:{en:{loading:"Loading data...",sorting:"Sorting into bins...",aggregate:"Summary",maxHeight:"3D Height",showDetails:"Show Details",selection:"Selection",areas:"Areas",count:"Count"},de:{loading:"Dateien laden...",sorting:"Sortieren...",aggregate:"Daten",maxHeight:"3-D Höhe",showDetails:"Details anzeigen",selection:"Ausgewählt",areas:"Orte",count:"Anzahl"}}},ot=E({name:"GridMapPlugin",i18n:lt,components:{CollapsiblePanel:O,DrawingTool:$,GridLayer:at,ToggleButton:I.ToggleButton,ZoomButtons:N,TimeSlider:it},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean,datamanager:{type:Object,required:!0}},data:()=>{const e=["bathymetry","electric","inferno","jet","magma","par","viridis","chlorophyll"];return{id:`id-${Math.floor(1e12*Math.random())}`,standaloneYAMLconfig:{title:"",description:"",file:"",projection:"",thumbnail:"",cellSize:250,opacity:.7,maxHeight:0,center:null,zoom:9,mapIsIndependent:!1},colorRamps:e,columnLookup:[],gzipWorker:null,colorRamp:e[0],globalState:d.state,vizDetails:{title:"",description:"",file:"",projection:"",thumbnail:"",cellSize:250,opacity:.7,maxHeight:0,center:null,zoom:9,breakpoints:null},myState:{statusMessage:"",subfolder:"",yamlConfig:"",thumbnail:!1},data:null,selectedTimeData:[],allTimePeriodes:[],colors:S({colormap:"viridis",nshades:10,format:"rba",alpha:1}).map(t=>[t[0],t[1],t[2],255]),currentTime:[0,0],timeToIndex:new Map,guiConfig:{buckets:10,exponent:4,radius:5,opacity:1,height:100,"color ramp":"viridis",colorRamps:e,flip:!1},configId:`gui-config-${Math.floor(1e12*Math.random())}`,guiController:null,minRadius:50,maxRadius:300,radiusStep:5,isLoaded:!1,thumbnailUrl:"url('assets/thumbnail.jpg') no-repeat;",resizer:null,timeRange:[1/0,-1/0],allTimes:[]}},computed:{fileApi(){return new F(this.fileSystem,d)},fileSystem(){const e=this.$store.state.svnProjects.filter(t=>t.slug===this.root);if(e.length===0)throw console.log("no such project"),Error;return e[0]},urlThumbnail(){return this.thumbnailUrl},mapProps(){return{viewId:this.id,colorRamp:this.colorRamp,coverage:.65,dark:this.$store.state.isDarkMode,data:this.data,currentTimeIndex:this.timeToIndex.get(this.currentTime[0]),mapIsIndependent:this.vizDetails.mapIsIndependent,maxHeight:this.guiConfig.height,cellSize:this.guiConfig.radius,opacity:this.guiConfig.opacity,upperPercentile:100}},textColor(){const e={text:"#3498db",bg:"#eeeef480"},t={text:"white",bg:"#181518aa"};return this.$store.state.colorScheme===P.DarkMode?t:e}},watch:{"$store.state.viewState"(){this.vizDetails.mapIsIndependent||m[this.id]&&m[this.id]()}},methods:{pickColor(e){if(e<0||e>100)return console.warn("Invalid value for pickColor: Value should be between 0 and 100."),[0,0,0,0];const t=Math.floor(e/100*(this.colors.length-1));return this.colors[t]},async solveProjection(){if(console.log("solveProjection"),!this.thumbnail){console.log("WHAT PROJECTION:");try{const e=await this.fileApi.getFileText(this.myState.subfolder+"/"+this.myState.yamlConfig);this.vizDetails=w.parse(e)}catch(e){console.error(e)}}},async getVizDetails(){if(this.config){this.validateYAML(),this.vizDetails=Object.assign({},this.config),this.setRadiusAndHeight(),this.setCustomGuiConfig();return}new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig)?await this.loadStandaloneYAMLConfig():this.loadOutputTripsConfig()},loadOutputTripsConfig(){let e="EPSG:31468";this.myState.thumbnail||(e=prompt('Enter projection: e.g. "EPSG:31468"')||"EPSG:31468",parseInt(e,10)&&(e="EPSG:"+e)),this.vizDetails={title:"Output Trips",description:this.myState.yamlConfig,file:this.myState.yamlConfig,projection:e,cellSize:this.vizDetails.cellSize,opacity:this.vizDetails.opacity,maxHeight:this.vizDetails.maxHeight,center:this.vizDetails.center,zoom:this.vizDetails.zoom},this.$emit("title",this.vizDetails.title),this.solveProjection()},setRadiusAndHeight(){this.vizDetails.cellSize||b.set(this.vizDetails,"cellSize",250),this.vizDetails.maxHeight||b.set(this.vizDetails,"maxHeight",0),this.vizDetails.opacity||b.set(this.vizDetails,"opacity",.7)},async loadStandaloneYAMLConfig(){try{const e=this.myState.yamlConfig.includes("/")?this.myState.yamlConfig:`${this.myState.subfolder}/${this.myState.yamlConfig}`,t=await this.fileApi.getFileText(e);this.standaloneYAMLconfig=w.parse(t),this.validateYAML(),this.setVizDetails()}catch{const t=`File not found: ${this.myState.subfolder}/${this.myState.yamlConfig}`;this.$store.commit("setStatus",{type:f.ERROR,msg:"Error",desc:t})}},validateYAML(){const e=new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig);let t={};e?(console.log("has yaml"),t=this.standaloneYAMLconfig):(console.log("no yaml"),t=this.config),t.cellSize==0&&this.$store.commit("setStatus",{type:f.WARNING,msg:"Radius is out of the recommended range",desc:"Radius can not be zero, preset value used instead. "}),(t.opacity<=0||t.opacity>1)&&this.$store.commit("setStatus",{type:f.WARNING,msg:"Opacity set to zero",desc:"Opacity levels should be between 0 and 1. "}),(t.zoom<5||t.zoom>20)&&this.$store.commit("setStatus",{type:f.WARNING,msg:"Zoom is out of the recommended range ",desc:"Zoom levels should be between 5 and 20. "}),t.maxHeight<0&&this.$store.commit("setStatus",{type:f.WARNING,msg:"maxHeight is out of the recommended range ",desc:"maxHeight should be greater than 0"})},setVizDetails(){this.vizDetails=Object.assign({},this.vizDetails,this.standaloneYAMLconfig),this.setRadiusAndHeight();const e=this.vizDetails.title?this.vizDetails.title:"Hex Aggregation";this.$emit("title",e)},async buildThumbnail(){if(this.thumbnail&&this.vizDetails.thumbnail)try{const t=await(await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.thumbnail)).arrayBuffer(),i=L.arrayBufferToBase64(t);i&&(this.thumbnailUrl=`center / cover no-repeat url(data:image/png;base64,${i})`)}catch(e){console.error(e)}},setMapCenter(){if(this.vizDetails.center){typeof this.vizDetails.center=="string"&&(this.vizDetails.center=this.vizDetails.center.split(",").map(Number));const e={longitude:this.vizDetails.center[0],latitude:this.vizDetails.center[1],bearing:0,pitch:0,zoom:this.vizDetails.zoom||10,jump:!0,center:[this.vizDetails.center[0],this.vizDetails.center[1]]};m[this.id]&&(m[this.id](e),console.log(m)),this.$store.commit("setMapCamera",e);return}},async loadAndPrepareData(){const e={dataset:this.vizDetails.file},t=await this.datamanager.getDataset(e);let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(let s=0;s<t.allRows.value.values.length;s++)this.allTimes.includes(t.allRows.time.values[s])||this.allTimes.push(t.allRows.time.values[s]),t.allRows.value.values[s]<i&&(i=t.allRows.value.values[s]),t.allRows.value.values[s]>a&&(a=t.allRows.value.values[s]),this.allTimes.includes(t.allRows.time.values[s])||this.allTimes.push(t.allRows.time.values[s]);this.allTimes=this.allTimes.sort((s,r)=>s-r),this.timeRange[0]=Math.min.apply(Math,this.allTimes),this.timeRange[1]=Math.max.apply(Math,this.allTimes);const l=Math.ceil(t.allRows.value.values.length/this.allTimes.length),h=100/a,n={mapData:[],scaledFactor:h};if(this.allTimes.forEach((s,r)=>{this.timeToIndex.set(s,r),n.mapData.push({time:s,values:new Float32Array(l),centroid:new Float32Array(l*2),colorData:new Uint8Array(l*3),numberOfFilledValues:0,numberOfFilledCentroids:0,numberOfFilledColors:0,length:l})}),!this.vizDetails.projection){const s='No coordinate projection. Add "projection: EPSG:xxxx" to config';throw this.$emit("error",s),Error(s)}for(let s=0;s<t.allRows.value.values.length;s++){const r=this.timeToIndex.get(t.allRows.time.values[s]),p=h*t.allRows.value.values[s],y=this.pickColor(p),u=n.mapData[r].numberOfFilledValues,T=n.mapData[r].numberOfFilledColors,c=n.mapData[r].numberOfFilledCentroids;n.mapData[r].values[u]=p;for(let o=0;o<3;o++)n.mapData[r].colorData[T+o]=y[o];let g=[t.allRows.x.values[s],t.allRows.y.values[s]];this.vizDetails.projection!=="EPSG:4326"&&(g=z.toLngLat(this.vizDetails.projection,[t.allRows.x.values[s],t.allRows.y.values[s]])),n.mapData[r].centroid[c]=g[0],n.mapData[r].centroid[c+1]=g[1],n.mapData[r].numberOfFilledValues=u+1,n.mapData[r].numberOfFilledCentroids=c+2,n.mapData[r].numberOfFilledColors=T+3}return Array.from(this.allTimes.keys()).forEach(s=>{delete n.mapData[s].numberOfFilledValues,delete n.mapData[s].numberOfFilledCentroids,delete n.mapData[s].numberOfFilledColors}),this.myState.statusMessage="",n},resolveProjection(){if(this.vizDetails.projection!=="EPSG:4326")for(let e=0;e<this.data.length;e++){const t=z.toLngLat(this.vizDetails.projection,this.data[e].centroid);this.data[e].centroid=t}},handleTimeSliderValues(e){this.currentTime=e,this.selectedTimeData=[];for(let t=0;t<this.data.length;t++)this.data[t].time==e[0]&&this.selectedTimeData.push(this.data[t])},setupGui(){this.guiController=new M({title:"Settings",injectStyles:!0,width:200,container:document.getElementById(this.configId)||void 0});const e=this.guiController;e.add(this.guiConfig,"radius",this.minRadius,this.maxRadius,this.radiusStep),e.add(this.guiConfig,"opacity",0,1,.1),e.add(this.guiConfig,"height",0,250,5);const t=e.addFolder("colors");t.add(this.guiConfig,"color ramp",this.guiConfig.colorRamps).onChange(this.setColors),t.add(this.guiConfig,"flip").onChange(this.setColors)},setColors(){let e=S({colormap:this.guiConfig["color ramp"],nshades:256,format:"rba",alpha:1}).map(a=>[a[0],a[1],a[2]]);this.guiConfig.flip&&(e=e.reverse());const t=256/(this.guiConfig.buckets-1),i=[];for(let a=0;a<this.guiConfig.buckets-1;a++)i.push(e[Math.round(t*a)]);i.push(e[255]),this.colors=i;for(let a=0;a<this.data.mapData.length;a++)for(let l=0;l<this.data.mapData[a].values.length;l++){const h=this.data.mapData[a].values[l],n=this.pickColor(h);for(let s=l*3;s<=l*3+2;s++)this.data.mapData[a].colorData[s]=n[s%3]}this.currentTime=[...this.currentTime]},setCustomGuiConfig(){this.config&&(this.config.cellSize>=this.minRadius&&this.config.cellSize<=this.maxRadius&&(this.guiConfig.radius=this.config.cellSize),this.config.maxHeight&&(this.guiConfig.height=this.config.maxHeight),this.config.opacity&&(this.guiConfig.opacity=this.config.opacity))}},async mounted(){if(this.$store.commit("setFullScreen",!this.thumbnail),this.myState.thumbnail=this.thumbnail,this.myState.yamlConfig=this.yamlConfig||"",this.myState.subfolder=this.subfolder,await this.getVizDetails(),!this.thumbnail){this.setupGui(),this.myState.statusMessage=`${this.$i18n.t("loading")}`;try{this.data=await this.loadAndPrepareData()}catch{this.$emit("error","Error loading "+this.vizDetails.file)}this.buildThumbnail(),this.isLoaded=!0,this.setMapCenter()}},beforeDestroy(){m[this.id]=void 0,delete m[this.id],this.$store.commit("setFullScreen",!1)}});var nt=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{staticClass:"xy-hexagons",class:{"hide-thumbnail":!t.thumbnail},attrs:{oncontextmenu:"return false",id:`id-${t.id}`}},[!t.thumbnail&&t.isLoaded?i("grid-layer",t._b({},"grid-layer",t.mapProps,!1)):t._e(),!t.thumbnail&&t.isLoaded?i("zoom-buttons",{attrs:{corner:"bottom"}}):t._e(),i("div",{staticClass:"top-right"},[i("div",{staticClass:"gui-config",attrs:{id:t.configId}})]),t.isLoaded?i("time-slider",{staticClass:"time-slider-area",attrs:{range:t.timeRange,allTimes:t.allTimes},on:{timeExtent:t.handleTimeSliderValues}}):t._e(),!t.thumbnail&&t.myState.statusMessage?i("div",{staticClass:"message"},[i("p",{staticClass:"status-message"},[t._v(t._s(t.myState.statusMessage))])]):t._e()],1)},rt=[];var ht=R(ot,nt,rt,!1,null,"fba340de",null,null);const xt=ht.exports;export{xt as default};
//# sourceMappingURL=GridMap-081bc777.js.map
