import i from"./ShapeFile-f70feca1.js";import{n as m}from"./index-405dc887.js";import"./index-cbcca310.js";import"./Coords-23d23a7c.js";import"./index-e24927de.js";import"./turf.es-8ac32224.js";import"./index-3bdd7fd6.js";import"./set-rtl-text-plugin-079893bc.js";import"./text-layer-1c567069.js";import"./extends-98964cd2.js";import"./LineOffsetLayer-83327ebc.js";import"./line-layer-c23cb583.js";import"./PathOffsetLayer-212611a1.js";import"./path-layer-96782934.js";import"./geojson-layer-ea34a475.js";import"./cubehelix-004858ee.js";import"./data-filter-a4810f97.js";import"./layer-extension-07ef4946.js";import"./ColorsAndWidths-450f80df.js";import"./rainbow-4aaba411.js";import"./threshold-7563a86b.js";import"./index-f6506551.js";import"./VizConfigurator-e2aa2c9b.js";import"./util-0d2b0d12.js";import"./HTTPFileSystem-104f8a6b.js";import"./fxp-26b9b10f.js";import"./DashboardDataManager-13d94a64.js";import"./RoadNetworkLoader.worker-0207bb7c.js";import"./group-f6e6d4c5.js";import"./index-1d20746a.js";import"./LegendBox-3095cfaa.js";import"./ZoomButtons-5cff7a13.js";import"./DrawingTool-bd1d0a33.js";import"./LegendStore-3aadd543.js";import"./zip-96e4f4e1.js";import"./min-7292b72b.js";import"./sum-2c3bc3a6.js";const e={name:"AreaMapPanel",components:{ShapeFile:i},props:{config:Object,datamanager:Object,fileSystemConfig:Object,subfolder:String,yamlConfig:String},methods:{isLoaded(){this.$emit("isLoaded")}}};var p=function(){var o=this,r=o._self._c;return r("shape-file",{staticClass:"deck-map",attrs:{root:o.fileSystemConfig.slug,subfolder:o.subfolder,configFromDashboard:o.config,thumbnail:!1,datamanager:o.datamanager,yamlConfig:"config"},on:{isLoaded:o.isLoaded,error:function(t){return o.$emit("error",t)}}})},a=[];var n=m(e,p,a,!1,null,"e4390d58",null,null);const T=n.exports;export{T as default};
//# sourceMappingURL=area-map-dc47567a.js.map