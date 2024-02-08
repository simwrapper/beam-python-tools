import{r as I,g as f,R as y,e as w,M as x,d as R,S as p,n as P}from"./index-d056b534.js";import{G as O}from"./lil-gui.esm-1e0f7d72.js";import{y as M}from"./index-11e30dac.js";import{c as F}from"./index-c4daa518.js";import{u as _}from"./util-52efa7a8.js";import{C as N}from"./CollapsiblePanel-848344cc.js";import{D as $}from"./DrawingTool-e87e8dd9.js";import{H as j}from"./HTTPFileSystem-6860a890.js";import{L as V}from"./LegendBox-c848b6d0.js";import{L as Y}from"./LegendStore-3aadd543.js";import{T as B}from"./TimeSlider-366126c9.js";import{D as W,S as G}from"./set-rtl-text-plugin-91733337.js";import{G as b}from"./index-a3e39363.js";import{v as U,f as H,I as q}from"./icon-manager-8b75ce51.js";import{L as X,p as Z,a as J,M as K,G as Q,l as tt}from"./layer-5c460687.js";import{D as et}from"./data-filter-e53b1d66.js";import{S as it}from"./text-layer-a4888fd8.js";import{Z as st}from"./ZoomButtons-d41cd146.js";import{D as at}from"./DashboardDataManager-222e0e95.js";import"./fxp-26b9b10f.js";import"./path-layer-b47e71be.js";import"./extends-98964cd2.js";import"./layer-extension-6bb36cea.js";import"./RoadNetworkLoader.worker-0207bb7c.js";import"./group-f6e6d4c5.js";import"./index-f6506551.js";const z=[0,0,0,255],ot={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!1,sizeUnits:"pixels",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},iconStill:{type:"object",value:null},getIcon:{type:"accessor",value:"vehicle"},getBOffsets:{type:"accessor",value:[0,0]},getBIconFrames:{type:"accessor",value:[128,128,128,128]},getBColorModes:{type:"accessor",value:1},getColor:{type:"accessor",value:z},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getPathStart:{type:"accessor",value:null},getPathEnd:{type:"accessor",value:null},getTimeStart:{type:"accessor",value:null},getTimeEnd:{type:"accessor",value:null},currentTime:{type:"number",value:0},pickable:{type:"boolean",value:!0},onIconError:{type:"function",value:null,compare:!1,optional:!0}};class C extends X{getShaders(){return super.getShaders({vs:U,fs:H,modules:[Z,J]})}initializeState(){this.state={iconManager:new q(this.context.gl,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instanceTimestamps:{size:1,accessor:"getTimeStart"},instanceTimestampsNext:{size:1,accessor:"getTimeEnd"},instanceStartPositions:{size:2,accessor:"getPathStart"},instanceEndPositions:{size:2,accessor:"getPathEnd"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceOffsets:{size:2,defaultValue:[0,0],accessor:"getBOffsets"},instanceIconFrames:{size:4,defaultValue:[0,0,128,128],accessor:"getBIconFrames"},instanceColorModes:{size:1,type:b.UNSIGNED_BYTE,defaultValue:1,accessor:"getBColorModes"},instanceColors:{size:this.props.colorFormat.length,type:b.UNSIGNED_BYTE,normalized:!0,transition:!0,accessor:"getColor",defaultValue:z},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState({oldProps:t,props:i,changeFlags:a}){var u;super.updateState({props:i,oldProps:t,changeFlags:a});const o=this.getAttributeManager(),{iconAtlas:l,iconMapping:h,data:c,getIcon:m}=i,{iconManager:n}=this.state;n.setProps({loadOptions:i.loadOptions});let s=!1;if(l||this.internalState.isAsyncPropLoading("iconAtlas")?(t.iconAtlas!==i.iconAtlas&&n.setProps({iconAtlas:l,autoPacking:!1}),t.iconMapping!==i.iconMapping&&(n.setProps({iconMapping:h}),s=!0)):n.setProps({autoPacking:!0}),(a.dataChanged||a.updateTriggersChanged&&(a.updateTriggersChanged.all||a.updateTriggersChanged.getIcon))&&n.setProps({data:c,getIcon:m}),s&&(o.invalidate("instanceOffsets"),o.invalidate("instanceIconFrames"),o.invalidate("instanceColorModes")),a.extensionsChanged){const{gl:d}=this.context;(u=this.state.model)==null||u.delete(),this.state.model=this._getModel(d),o.invalidateAll()}}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(){super.finalizeState(),this.state.iconManager.finalize()}draw({uniforms:t}){const{sizeScale:i,sizeMinPixels:a,sizeMaxPixels:o,sizeUnits:l,billboard:h,alphaCutoff:c,currentTime:m,iconStill:n,pickable:s}=this.props,{iconManager:g}=this.state,{viewport:u}=this.context,d=g.getTexture();d&&this.state.model.setUniforms(t).setUniforms({iconsTexture:d,iconsTextureDim:[d.width,d.height],sizeScale:i*(l==="pixels"?u.metersPerPixel:1),sizeMinPixels:a,sizeMaxPixels:o,billboard:h,alphaCutoff:c,currentTime:m,pickable:s,iconStillOffsets:this.getInstanceOffset(n),iconStillFrames:this.getInstanceIconFrame(n)}).draw()}_getModel(t){const i=[-1,-1,-1,1,1,1,1,-1];return new K(t,{...this.getShaders(),id:this.props.id,geometry:new Q({drawMode:b.TRIANGLE_FAN,attributes:{positions:{size:2,value:new Float32Array(i)}}}),isInstanced:!0})}_onUpdate(){this.setNeedsRedraw()}_onError(t){const{onIconError:i}=this.getCurrentLayer().props;i?i(t):tt.error(t.error)()}getInstanceOffset(t){const i=this.state.iconManager.getIconMapping(t);return[i.width/2-i.anchorX||0,i.height/2-i.anchorY||0]}getInstanceColorMode(t){return this.state.iconManager.getIconMapping(t).mask?1:0}getInstanceIconFrame(t){const i=this.state.iconManager.getIconMapping(t);return[i.x||0,i.y||0,i.width||0,i.height||0]}}C.layerName="FlatIconLayer";C.defaultProps=ot;const nt="/",rt={marker:{x:0,y:0,width:128,height:128,mask:!0},info:{x:128,y:0,width:128,height:128,mask:!0},vehicle:{x:128,y:128,width:128,height:128,mask:!0},diamond:{x:0,y:128,width:128,height:128,mask:!1}},lt=new et({filterSize:1});function ct({viewId:e=0,eventLayers:t=[],network:i={},linkIdLookup:a={},timeFilter:o=[],dark:l=!1,colors:h=[[1,0,0],[.25,.25,1]],breakpoints:c=[0],radius:m=5,mapIsIndependent:n=!1,simulationTime:s=2e4,projection:g=""}){const[u,d]=I.useState(f.state.viewState);y[e]=()=>{d(f.state.viewState)};function E(r){r.latitude&&(r.center||(r.center=[0,0]),r.center[0]=r.longitude,r.center[1]=r.latitude,d(r),n||f.commit("setMapCamera",r))}function k(r){return r.index<0?null:"hi"}const T=t.map((r,v)=>{const S=r.times[0]>o[1]||r.times[r.times.length-1]<o[0];return new it({data:{length:r.times.length,attributes:{getFilterValue:{value:r.times,size:1},getPosition:{value:r.positions,size:2}}},autoHighlight:!0,breakpoints:c,colors:h,extensions:[lt],id:"hello"+v,filled:!0,filterRange:o.length?o:null,getRadius:20,getFillColor:[240,128,10],highlightColor:[255,0,224],opacity:1,parameters:{depthTest:!1},pickable:!0,radiusScale:1,stroked:!1,updateTriggers:{getPosition:t,getFilterValue:o},visible:!S})}),A=t.map((r,v)=>{const S=r.vehicles.t0[0]>o[1]||r.vehicles.t1[r.vehicles.t1.length-1]<o[0];return new C({data:{length:r.vehicles.t0.length,attributes:{getTimeStart:{value:r.vehicles.t0,size:1},getTimeEnd:{value:r.vehicles.t1,size:1},getPathStart:{value:r.vehicles.locO,size:2},getPathEnd:{value:r.vehicles.locD,size:2}}},id:"vehicles"+v,getColor:[64,96,255],iconMoving:"vehicle",iconStill:"diamond",getSize:20,opacity:1,currentTime:s,shadowEnabled:!0,iconAtlas:nt+"/images/icon-atlas.png",iconMapping:rt,sizeScale:1,billboard:!1,pickable:!0,depthTest:!0,autoHighlight:!1,highlightColor:[255,0,255],parameters:{depthTest:!1},visible:!S})}),L=[...T,...A],D=g&&g!=="Atlantis";return w.createElement(W,{layers:L,controller:!0,useDevicePixels:!0,viewState:u,onViewStateChange:r=>E(r.viewState),pickingRadius:4,onClick:k,getTooltip:k},D&&w.createElement(G,{mapStyle:f.getters.mapStyle,preventStyleDiffing:!0,mapboxApiAccessToken:x}))}function ht(){return new Worker("/assets/MATSimEventStreamer.worker-3f4d480a.js")}const mt={messages:{en:{loading:"Loading data...",sorting:"Sorting into bins...",aggregate:"Summary",maxHeight:"3D Height",showDetails:"Show Details",selection:"Selection",areas:"Areas",count:"Count",promptCRS:`Enter the coordinate reference system, e.g. EPSG:25832

These coordinates are not in long/lat format. To fix this permanently, convert them to long/lat or add "# EPSG:xxxx" to your CSV header`},de:{loading:"Dateien laden...",sorting:"Sortieren...",aggregate:"Daten",maxHeight:"3-D Höhe",showDetails:"Details anzeigen",selection:"Ausgewählt",areas:"Orte",count:"Anzahl"}}},gt=R({name:"EventViewerPlugin",i18n:mt,components:{CollapsiblePanel:N,DrawingTool:$,EventMap:ct,LegendBox:V,TimeSlider:B,ZoomButtons:st},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean,datamanager:{type:Object}},data:()=>{const e=["bathymetry","electric","inferno","jet","magma","par","viridis"];return{myDataManager:null,network:{source:new Float32Array,dest:new Float32Array,linkIds:[],projection:""},linkIdLookup:{},guiConfig:{buckets:7,exponent:4,radius:5,"clip max":100,"color ramp":"viridis",flip:!1,colorRamps:e},viewId:"xyt-id-"+Math.floor(1e12*Math.random()),configId:"gui-config-"+Math.floor(1e12*Math.random()),timeLabels:[0,1],startTime:0,isAnimating:!1,timeFilter:[0,3599],colors:[[128,128,128],[128,128,128]],breakpoints:[0],range:[1/0,-1/0],timeRange:[1/0,-1/0],legendStore:null,standaloneYAMLconfig:{title:"",description:"",file:"",projection:"",thumbnail:"",radius:250,maxHeight:0,center:null,zoom:9},YAMLrequirementsXY:{file:""},columnLookup:[],gzipWorker:null,vizDetails:{title:"",description:"",file:"",projection:"",thumbnail:"",center:null,zoom:9},myState:{statusMessage:"",subfolder:"",yamlConfig:"",thumbnail:!1},eventLayers:[],isLoaded:!1,animator:null,guiController:null,resizer:null,thumbnailUrl:"url('assets/thumbnail.jpg') no-repeat;",ANIMATE_SPEED:.25,animationElapsedTime:0,animationClockTime:0}},computed:{fileApi(){return new j(this.fileSystem,f)},fileSystem(){const e=this.$store.state.svnProjects.filter(t=>t.slug===this.root);if(e.length===0)throw console.log("no such project"),Error;return e[0]},urlThumbnail(){return this.thumbnailUrl}},watch:{"$store.state.viewState"(){y[this.viewId]&&y[this.viewId]()}},methods:{handleTimeSliderValues(e){this.animationElapsedTime=e[0],this.timeFilter=e,this.timeLabels=[this.convertSecondsToClockTimeMinutes(e[0]),this.convertSecondsToClockTimeMinutes(e[1])]},setupLogoMover(){this.resizer=new ResizeObserver(this.moveLogo);const e=document.getElementById(`id-${this.viewId}`);this.resizer.observe(e)},moveLogo(){const e=document.getElementById(`${this.viewId}`),t=e==null?void 0:e.querySelector(".mapboxgl-ctrl-bottom-left");if(t){const i=e.clientWidth>640?"280px":"36px";t.style.right=i}},setupGui(){this.guiController=new O({title:"Color Settings",injectStyles:!0,width:200,container:document.getElementById(this.configId)||void 0});const e=this.guiController;e.add(this.guiConfig,"buckets",2,19,1).onChange(this.setColors),e.add(this.guiConfig,"exponent",1,10,1).onChange(this.setColors),e.add(this.guiConfig,"clip max",0,100,1).onChange(this.setColors),e.add(this.guiConfig,"radius",1,20,1),e.add(this.guiConfig,"color ramp",this.guiConfig.colorRamps).onChange(this.setColors),e.add(this.guiConfig,"flip").onChange(this.setColors)},async solveProjection(){if(!this.thumbnail){console.log("WHAT PROJECTION:");try{const e=await this.fileApi.getFileText(this.myState.subfolder+"/"+this.myState.yamlConfig);this.vizDetails=M.parse(e)}catch(e){console.error(e)}}},async getVizDetails(){if(this.config){this.validateYAML(),this.vizDetails=Object.assign({},this.config);return}new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig)?await this.loadStandaloneYAMLConfig():this.setConfigForRawCSV()},setConfigForRawCSV(){let e="EPSG:4326";this.vizDetails={title:"EVENTS: "+this.myState.yamlConfig,description:this.myState.yamlConfig,file:this.myState.yamlConfig,projection:e,center:this.vizDetails.center,zoom:this.vizDetails.zoom},this.$emit("title",this.vizDetails.title||this.vizDetails.file)},async loadStandaloneYAMLConfig(){if(this.fileApi)try{const e=this.myState.yamlConfig.indexOf("/")>-1?this.myState.yamlConfig:this.myState.subfolder+"/"+this.myState.yamlConfig,t=await this.fileApi.getFileText(e);this.standaloneYAMLconfig=Object.assign({},M.parse(t)),this.validateYAML(),this.setVizDetails()}catch{console.log("failed"),this.$emit("error",{type:p.ERROR,msg:"File not found",desc:`Could not find: ${this.myState.subfolder}/${this.myState.yamlConfig}`})}},validateYAML(){const e=new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig);let t;e?(console.log("has yaml"),t=this.standaloneYAMLconfig):(console.log("no yaml"),t=this.config);for(const i in this.YAMLrequirementsXY)i in t||this.$emit("error",{type:p.ERROR,msg:`EventViewer missing required key: ${i}`,desc:`Required keys: ${Object.keys(this.YAMLrequirementsXY)}`});t.radius==0&&this.$emit("error",{type:p.WARNING,msg:"Radius set to zero",desc:"Radius can not be zero, preset value used instead. "}),(t.zoom<5||t.zoom>20)&&this.$emit("error",{type:p.WARNING,msg:"Zoom is out of the recommended range ",desc:"Zoom levels should be between 5 and 20. "})},setVizDetails(){this.vizDetails=Object.assign({},this.vizDetails,this.standaloneYAMLconfig);const e=this.vizDetails.title?this.vizDetails.title:"EVENTS: "+this.vizDetails.file;this.$emit("title",e)},async buildThumbnail(){if(this.thumbnail&&this.vizDetails.thumbnail)try{const t=await(await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.thumbnail)).arrayBuffer(),i=_.arrayBufferToBase64(t);i&&(this.thumbnailUrl=`center / cover no-repeat url(data:image/png;base64,${i})`)}catch(e){console.error(e)}},async streamEventFile(e){this.myState.statusMessage="Loading file...";let t=0;this.range=[1/0,-1/0],this.timeRange=[1/0,-1/0],this.animationElapsedTime=0,this.timeFilter=[0,59],this.gzipWorker&&this.gzipWorker.terminate(),this.eventLayers=[],this.gzipWorker=new ht;const i=Intl.NumberFormat();this.gzipWorker.onmessage=async a=>{const o=a.data;if(o.status)this.myState.statusMessage=o.status;else if(o.error)this.myState.statusMessage=o.error,this.$emit("error",{type:p.ERROR,msg:"XYT Loading Error",desc:`Error loading: ${this.myState.subfolder}/${this.vizDetails.file}`});else if(o.finished)this.finishedLoadingData(t,o);else{const l=o.events;console.log(l.length),t+=l.length,this.myState.statusMessage="Loading "+i.format(t)+" events",this.timeRange=[Math.min(this.timeRange[0],l[0].time),Math.max(this.timeRange[1],l[l.length-1].time)],this.timeRange=[Math.min(this.timeRange[0],o.vehicleTrips[0].t0),Math.max(this.timeRange[1],o.vehicleTrips[o.vehicleTrips.length-1].t1)];const h=l.map(s=>({time:s.time,link:s.link})),c=new Float32Array(2*h.length).fill(NaN);for(let s=0;s<h.length;s++){const g=2*this.linkIdLookup[h[s].link];c[s*2]=this.network.source[g],c[s*2+1]=this.network.source[g+1]}const m=o.vehicleTrips.length,n={locO:new Float32Array(2*m).fill(NaN),locD:new Float32Array(2*m).fill(NaN),t0:new Float32Array(m).fill(NaN),t1:new Float32Array(m).fill(NaN)};for(let s=0;s<m;s++){const g=o.vehicleTrips[s],u=2*this.linkIdLookup[g.link];n.locO[s*2+0]=this.network.source[0+u],n.locO[s*2+1]=this.network.source[1+u],n.locD[s*2+0]=this.network.dest[0+u],n.locD[s*2+1]=this.network.dest[1+u],s==0?(n.locO[s*2+0]=.5*(n.locO[s*2+0]+n.locD[s*2+0]),n.locO[s*2+1]=.5*(n.locO[s*2+1]+n.locD[s*2+1])):s==m-1&&(n.locD[s*2+0]=.5*(n.locO[s*2+0]+n.locD[s*2+0]),n.locD[s*2+1]=.5*(n.locO[s*2+1]+n.locD[s*2+1])),n.t0[s]=g.t0,n.t1[s]=g.t1}this.eventLayers.push({events:l.slice(1,2),positions:c,vehicles:n,times:o.times})}},this.gzipWorker.postMessage({filePath:e,fileSystem:this.fileSystem,projection:this.vizDetails.projection})},setFirstZoom(e,t){const i=.5*(e[0]+e[t*2-2]),a=.5*(e[1]+e[t*2-1]);Number.isFinite(i)&&Number.isFinite(a)&&f.commit("setMapCamera",Object.assign({},f.state.viewState,{longitude:i,latitude:a,zoom:10}))},finishedLoadingData(e,t){this.isLoaded=!0,this.range=t.range,this.myState.statusMessage="",this.timeFilter=[this.timeRange[0],this.timeRange[0]+59],this.gzipWorker&&this.gzipWorker.terminate(),this.setColors(),this.moveLogo(),console.log("ALL DONE",{totalRows:e,data:t.range,time:this.timeRange,layers:this.eventLayers.length})},toggleAnimation(){this.isAnimating=!this.isAnimating,this.isAnimating&&(this.animationElapsedTime=this.timeFilter[0]-this.timeRange[0],this.startTime=Date.now()-this.animationElapsedTime/this.ANIMATE_SPEED,this.animate())},setColors(){const e=this.guiConfig.exponent;let t=F({colormap:this.guiConfig["color ramp"],nshades:256,format:"rba",alpha:1}).map(c=>[c[0],c[1],c[2]]);this.guiConfig.flip&&(t=t.reverse());const i=256/(this.guiConfig.buckets-1),a=[];for(let c=0;c<this.guiConfig.buckets-1;c++)a.push(t[Math.round(i*c)]);a.push(t[255]);const l=Math.pow(this.range[1],1/e)*this.guiConfig["clip max"]/100,h=[];for(let c=1;c<this.guiConfig.buckets;c++){const m=l*c/this.guiConfig.buckets,n=Math.pow(m,e);h.push(n)}this.isLoaded&&this.setLegend(a,h),this.colors=a,this.breakpoints=h},setLegend(e,t){this.range[1]-this.range[0]!==0&&(this.legendStore=new Y,this.legendStore.setLegendSection({section:"Legend",column:"Legend",values:e.map((i,a)=>{const o=t[a==0?a:a-1];let l=""+Math.round(1e6*o)/1e6;return a==0&&(l="< "+l),a==e.length-1&&(l="> "+l),{label:l,value:i}})}))},async loadNetwork(){if(!this.myDataManager)throw Error("event viewer: no datamanager");let e=this.vizDetails.file.replace("events.xml","network.xml");const t=await this.myDataManager.getRoadNetwork(e,this.myState.subfolder,Object.assign({},this.vizDetails));this.vizDetails.projection=""+t.projection;const i={};let a=0;for(const o of t.linkIds)i[`${o}`]=a,a++;return{network:t,linkIdLookup:i}},async loadFiles(){const{network:e,linkIdLookup:t}=await this.loadNetwork();this.network=e,this.linkIdLookup=t;let i=[];if(!this.fileApi)return{dataArray:i};try{let a=`${this.myState.subfolder}/${this.vizDetails.file}`;await this.streamEventFile(a)}catch(a){console.error(a),this.myState.statusMessage=""+a,this.$emit("error",{type:p.ERROR,msg:"Loading/Parsing Error",desc:"Error loading/parsing: ${this.myState.subfolder}/${this.vizDetails.file}"})}},animate(){if(!this.isAnimating)return;this.animationElapsedTime=this.ANIMATE_SPEED*(Date.now()-this.startTime),this.animationClockTime=this.animationElapsedTime+this.timeRange[0],this.animationClockTime>this.timeRange[1]&&(this.startTime=Date.now(),this.animationElapsedTime=0);const e=this.timeFilter[1]-this.timeFilter[0];this.timeFilter=[this.animationClockTime,this.animationClockTime+e],this.animator=window.requestAnimationFrame(this.animate)},convertSecondsToClockTimeMinutes(e){const t=Math.floor(e/3600),i=Math.floor((e-t*3600)/60),a=e-t*3600-i*60,o={h:`${t}`,m:`${i}`.padStart(2,"0"),s:`${a}`.padStart(2,"0")};return`${o.h}:${o.m}`}},async mounted(){this.$store.commit("setFullScreen",!this.thumbnail),this.myState.thumbnail=this.thumbnail,this.myState.yamlConfig=this.yamlConfig||"",this.myState.subfolder=this.subfolder,this.myDataManager=this.datamanager||new at(this.root,this.subfolder),await this.getVizDetails(),await this.buildThumbnail(),!this.thumbnail&&(this.setupLogoMover(),this.myState.statusMessage=`${this.$i18n.t("loading")}`,this.isLoaded||await this.loadFiles())},beforeDestroy(){y[this.viewId]=void 0,delete y[this.viewId];try{this.gzipWorker&&(this.gzipWorker.postMessage({terminate:!0}),this.gzipWorker.terminate()),this.guiController&&this.guiController.destroy()}catch(e){console.warn(e)}this.animator&&window.cancelAnimationFrame(this.animator),this.$store.commit("setFullScreen",!1)}});var ut=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{staticClass:"viz-plugin",attrs:{oncontextmenu:"return false",id:`id-${t.viewId}`}},[!t.thumbnail&&t.isLoaded?i("event-map",{staticClass:"map-layer",attrs:{viewId:t.viewId,eventLayers:t.eventLayers,network:t.network,linkIdLookup:t.linkIdLookup,timeFilter:t.timeFilter,dark:this.$store.state.isDarkMode,colors:this.colors,breakpoints:this.breakpoints,radius:this.guiConfig.radius,mapIsIndependent:!1,simulationTime:t.timeFilter[1],projection:t.vizDetails.projection}}):t._e(),t.thumbnail?t._e():i("zoom-buttons",{attrs:{corner:"bottom"}}),i("div",{staticClass:"top-right"},[i("div",{staticClass:"gui-config",attrs:{id:t.configId}})]),i("div",{staticClass:"bottom-right"},[t.legendStore?i("div",{staticClass:"legend-area"},[i("legend-box",{attrs:{legendStore:t.legendStore}})],1):t._e()]),t.isLoaded?i("time-slider",{staticClass:"time-slider-area",attrs:{range:t.timeRange,activeTimeExtent:t.timeFilter,labels:t.timeLabels,isAnimating:t.isAnimating},on:{timeExtent:t.handleTimeSliderValues,toggleAnimation:t.toggleAnimation,drag:function(a){t.isAnimating=!1}}}):t._e(),!t.thumbnail&&t.myState.statusMessage?i("div",{staticClass:"message"},[i("p",{staticClass:"status-message"},[t._v(t._s(t.myState.statusMessage))])]):t._e()],1)},dt=[];var ft=P(gt,ut,dt,!1,null,"51805caa",null,null);const Yt=ft.exports;export{Yt as default};
//# sourceMappingURL=EventViewer-2ef60fd7.js.map
