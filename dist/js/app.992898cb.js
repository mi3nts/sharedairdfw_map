(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("19b3"),n=a.n(r);n.a},"19b3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"align-center",attrs:{app:"",dark:"",color:"primary"}},[a("img",{staticClass:"mr-2",attrs:{height:"50px",src:"/img/logo_white.png"}}),a("v-toolbar-title",{staticClass:"display-1 mr-10"},[a("span",[t._v("SharedAirDFW")])]),a("v-btn",{attrs:{"x-large":"",depressed:"",exact:"",text:""},on:{click:function(e){t.showPM=!0}}},[a("span",{staticClass:"mr-2"},[t._v("What is Particulate Matter?")])]),a("v-dialog",{attrs:{"max-width":"50%"},model:{value:t.showPM,callback:function(e){t.showPM=e},expression:"showPM"}},[a("particulate-matter",{on:{close:function(e){t.showPM=!1}}})],1),a("v-spacer"),a("v-btn",{attrs:{"x-large":"",exact:"",text:""},on:{click:function(e){t.showAbout=!0}}},[a("span",{staticClass:"mr-2"},[t._v("About")])]),a("v-dialog",{attrs:{"max-width":"50%"},model:{value:t.showAbout,callback:function(e){t.showAbout=e},expression:"showAbout"}},[a("about",{on:{close:function(e){t.showAbout=!1}}})],1)],1),a("v-content",[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-layout",[a("v-flex",{attrs:{xs10:""}},[t._v("About")]),a("v-flex",{staticClass:"text-right",attrs:{xs2:""}},[a("v-icon",{on:{click:function(e){return t.$emit("close")}}},[t._v("mdi-close")])],1)],1)],1),a("v-card-text",[a("p",{staticClass:"text-justify"},[t._v(" Under the working title of “ "),a("b",[t._v("SharedAirDFW")]),t._v("” over 100 new custom-built air quality monitors are being distributed throughout the DFW region in the next 12 months that will be able to give residents real time information about the air they breathe for the first time. When it’s up and running, "),a("b",[t._v("it’ll be the first network of its kind in Texas and one of the largest in the U.S.")]),a("br"),a("br"),t._v("Based out of the "),a("b",[t._v("University of Texas at Dallas")]),t._v(" laboratories and built and calibrated by its graduate and undergraduate students, and supported by grants from the NSF, Earth Day Texas, the US Army, Downwinders at Risk, the City of Plano, TX, and the US EPA. These monitors will offer real time information every few seconds through a "),a("b",[t._v("easily accessible app.")]),t._v(" In addition, all data is made available in "),a("b",[t._v("real-time.")]),a("br"),a("br"),t._v("Right now a handful of official EPA regulatory grade monitors provide hourly average air quality information with a latency of a few hours behind real time conditions. "),a("b",[t._v("SharedAirDFW will increase the number of calibrated air quality monitors in DFW by a factor of about forty while giving readings updated every few seconds.")]),a("br"),a("br"),t._v("Some of the first monitor deployments will be across the campus of UT Dallas in Joppa (South Dallas), West Dallas, and Midlothian, around Paul Quinn College for the Southern Dallas neighborhoods surrounding its campus, and across the City of Plano. ")])])],1)},s=[],l={data:function(){return{}},created:function(){},methods:{}},c=l,d=(a("5926"),a("2877")),p=a("6544"),u=a.n(p),h=a("b0af"),m=a("99d9"),f=a("0e8f"),v=a("132d"),y=a("a722"),b=Object(d["a"])(c,i,s,!1,null,"344dcbf2",null),g=b.exports;u()(b,{VCard:h["a"],VCardText:m["b"],VCardTitle:m["c"],VFlex:f["a"],VIcon:v["a"],VLayout:y["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-layout",[a("v-flex",{attrs:{xs10:""}},[t._v("What is Particulate Matter?")]),a("v-flex",{staticClass:"text-right",attrs:{xs2:""}},[a("v-icon",{on:{click:function(e){return t.$emit("close")}}},[t._v("mdi-close")])],1)],1)],1),a("v-card-text",[a("p",{staticClass:"text-justify"},[t._v(" Particulate matter are microscopic solid or liquid matter suspended in the air. They have impacts on climate and precipitation that adversely affect human health, in addition to direct inhalation. Particulate matter smaller than about 10 micrometers, can settle in the bronchi and lungs and cause health problems. Fine particulate matter (PM2.5), tend to penetrate into the gas exchange regions of the lung, and very small particles may pass through the lungs to affect other organs. ")])])],1)},C=[],w={name:"particulate-matter",data:function(){return{}},created:function(){}},k=w,_=(a("cd8a"),Object(d["a"])(k,x,C,!1,null,"c2961bfa",null)),M=_.exports;u()(_,{VCard:h["a"],VCardText:m["b"],VCardTitle:m["c"],VFlex:f["a"],VIcon:v["a"],VLayout:y["a"]});var S={name:"App",components:{About:g,ParticulateMatter:M},data:function(){return{showAbout:!1,showPM:!1}}},T=S,F=(a("034f"),a("7496")),E=a("40dc"),P=a("8336"),A=a("a75b"),D=a("169a"),V=a("2fa4"),U=a("2a7f"),j=Object(d["a"])(T,n,o,!1,null,null,null),I=j.exports;u()(j,{VApp:F["a"],VAppBar:E["a"],VBtn:P["a"],VContent:A["a"],VDialog:D["a"],VSpacer:V["a"],VToolbarTitle:U["a"]});var O=a("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var W=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home fill-height"},[a("div",{staticClass:"fill-height",attrs:{id:"map"}}),a("div",{staticClass:"side-drawer"},[a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"primary"},on:{click:function(e){t.howToUse=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-help")]),t._v(" How To Use ")],1)],1),a("v-expansion-panels",{staticStyle:{width:"300px"},attrs:{multiple:"",accordion:""},model:{value:t.panels,callback:function(e){t.panels=e},expression:"panels"}},[a("v-expansion-panel",[a("v-expansion-panel-header",{attrs:{color:"primary"}},[t._v("Layers")]),a("v-expansion-panel-content",[a("div",[a("v-checkbox",{staticClass:"my-0",attrs:{"hide-details":"",color:"primary",label:"Radar"},model:{value:t.radarLayer,callback:function(e){t.radarLayer=e},expression:"radarLayer"}}),t.windControl?a("v-checkbox",{staticClass:"my-0",attrs:{"hide-labels":"","hide-details":"",color:"primary",label:"Wind"},model:{value:t.windLayer,callback:function(e){t.windLayer=e},expression:"windLayer"}}):t._e()],1)])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Sensor Data")]),a("v-expansion-panel-content",[a("div",[a("v-radio-group",{staticClass:"my-0",attrs:{"hide-details":""},model:{value:t.pmType,callback:function(e){t.pmType=e},expression:"pmType"}},[a("v-radio",{attrs:{color:"primary",label:"PM1",value:"pm1"}}),a("v-radio",{attrs:{color:"primary",label:"PM2.5",value:"pm2_5"}}),a("v-radio",{attrs:{color:"primary",label:"PM10",value:"pm10"}})],1),a("div",{staticClass:"scale"},[a("img",{attrs:{src:"/img/colorscale1.png"}})])],1)])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("OpenAQ")]),a("v-expansion-panel-content",[a("div",[t._v(" Coming soon... ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("EPA")]),a("v-expansion-panel-content",[a("div",[t._v(" Coming soon... ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("PurpleAir")]),a("v-expansion-panel-content",[a("div",[t._v(" Coming soon... ")])])],1)],1)],1),t.selectedSensor?a("div",{staticClass:"side-window"},[a("Sensor",{attrs:{spot:t.selectedSensor},on:{close:function(e){t.selectedSensor=null}}})],1):t._e(),a("v-dialog",{attrs:{"max-width":"50%"},model:{value:t.howToUse,callback:function(e){t.howToUse=e},expression:"howToUse"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Instructions")]),a("v-card-text",[a("ul",[a("li",[t._v("Single Click a Map Marker to view the Real Time Sensor Information")]),a("br"),a("li",[t._v('Use left side "Layers" options to add different layers like Wind or Radar')]),a("br"),a("li",[t._v("Use The Top Right Button to change map styles")]),a("br")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.howToUse=!1}}},[t._v("Close")])],1)],1)],1)],1)},N=[],$=(a("99af"),a("4160"),a("d81d"),a("a9e3"),a("ac1f"),a("5319"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",tile:""}},[a("v-list",{attrs:{flat:""}},[a("v-layout",[a("v-flex",{attrs:{xs10:""}},[a("div",{staticClass:"text-center primary--text"},[t._v(" "+t._s(t.spot.id)+" ")])]),a("v-icon",{on:{click:t.closeIt}},[t._v("mdi-close")])],1),a("div",{staticClass:"list-container"},[a("p",{attrs:{id:"title"}},[t._v("Current Senser Data")]),a("ul",[a("p"),a("li",[t._v("PM1: "+t._s(t.formatNumber(t.spot.pm1))+" Micrograms Per Cubic Meter")]),a("p"),a("p"),a("li",[t._v("PM2.5: "+t._s(t.formatNumber(t.spot.pm2_5))+" Micrograms Per Cubic Meter ")]),a("p"),a("p"),a("li",[t._v("PM10: "+t._s(t.formatNumber(t.spot.pm10))+" Micrograms Per Cubic Meter ")]),a("p"),a("p"),a("li",[t._v("Temperature: "+t._s(t.formatNumber(t.spot.temperature))+" Degree Celcius")]),a("p"),a("p"),a("li",[t._v("Humidity: "+t._s(t.formatNumber(t.spot.humidity))+"% ")]),a("p")])])],1),a("div",{staticClass:"caption text-right"},[t._v("Last Updated : "+t._s(t.spot.timestamp)+" UTC")])],1)],1)}),G=[],z=(a("b680"),{props:["spot"],data:function(){return{}},created:function(){},methods:{formatNumber:function(t){return Number(t).toFixed(1)},closeIt:function(){this.$emit("close")}}}),R=z,H=(a("c838"),a("a523")),Z=a("8860"),q=Object(d["a"])(R,$,G,!1,null,"50df49cf",null),J=q.exports;u()(q,{VCard:h["a"],VContainer:H["a"],VFlex:f["a"],VIcon:v["a"],VLayout:y["a"],VList:Z["a"]});var Q=new r["a"]({data:function(){return{baseUrl:"http://mintsdata.utdallas.edu:3000"}},methods:{getSensors:function(){return this.$axios.get(this.baseUrl+"/sensor_id_list")},getSensorData:function(t){return this.$axios.get(this.baseUrl+"/latest/"+t)},getWindData:function(){return this.$axios.get(this.baseUrl+"/wind_data/latest")}}}),K={name:"home",components:{Sensor:J},data:function(){return{map:null,selectedSensor:null,layerControl:L.control.layers([],[]),layers:{},windControl:null,radarLayer:!1,windLayer:!1,howToUse:!1,pmType:"pm2_5",panels:[1,1,0,0],sensors:[]}},watch:{pmType:function(){this.refreshIcons()},radarLayer:function(t){t?this.layers.radar.addTo(this.map):this.map.removeLayer(this.layers.radar)},windLayer:function(t){t?(this.layers.wind_layer.addTo(this.map),this.windControl.addTo(this.map)):(this.map.removeLayer(this.layers.wind_layer),this.map.removeControl(this.windControl))}},created:function(){},mounted:function(){this.buildLayers(),this.initMap(),this.loadData()},methods:{buildLayers:function(){this.layers.bright=L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}),this.layerControl.addBaseLayer(this.layers.bright,"Carto Positron"),this.layers.dark_mode=L.tileLayer("http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/{z}/{x}/{y}.png",{attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"}),this.layerControl.addBaseLayer(this.layers.dark_mode,"Dark Mode"),this.layers.satellite=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}),this.layerControl.addBaseLayer(this.layers.satellite,"Satellite"),this.layers.streets=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'}),this.layerControl.addBaseLayer(this.layers.streets,"Street Maps"),this.layers.radar=L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",{layers:"nexrad-n0r",format:"image/png",transparent:!0,attribution:"Weather data &copy; 2015 IEM Nexrad",zIndex:1e3}),this.buildWindControl(),this.buildWindLayer()},buildWindControl:function(){L.Control.WindControl=L.Control.extend({onAdd:function(){var t=L.DomUtil.create("div");return t.class="wind-display-control",t.innerHTML="<div><b>Wind Data Time</b> : "+this.options.data_time+"</div>",t.innerHTML+="<div><b>Wind Updated Last</b> : "+this.options.updated_time+"</div>",t.style.width="260px",t.style.background="white",t.style.padding="5px",t},onRemove:function(){}})},buildWindLayer:function(){var t=this;Q.getWindData().then((function(e){t.layers.wind_layer=L.velocityLayer({displayValues:!0,displayOptions:{velocityType:"GBR Wind",position:"topright",emptyString:"No velocity data",angleConvention:"bearingCW",displayPosition:"topright",displayEmptyString:"No velocity data",speedUnit:"m/s"},data:e.data,maxVelocity:10}),t.windControl=new L.Control.WindControl({position:"bottomright",data_time:e.data[0].recorded_time.replace(".000Z",""),updated_time:e.data[0].header.refTime.replace(".000Z","")})}))},initMap:function(){this.map=L.map("map",{center:[32.89746164575043,-97.04086303710938],zoom:10,layers:this.layers.bright,zoomControl:!1}),window["lmap"]=this.map,this.map.addControl(L.control.zoom({position:"bottomright"})),this.map.doubleClickZoom.disable(),this.layerControl.addTo(this.map)},loadData:function(){var t=this;Q.getSensors().then((function(e){e.data.forEach((function(e){Q.getSensorData(e).then((function(a){a.data.id=e,t.sensors.push(a.data[0]),t.renderSensor(a.data[0])}))}))}))},renderSensor:function(t){var e=this;t.marker=L.marker([t.latitude,t.longitude],{icon:this.buildMarkerIcon(t)}),t.marker.addTo(this.map),t.marker.on("click",(function(){e.selectedSensor=t}))},buildMarkerIcon:function(t){return L.divIcon({className:"svg-icon",html:this.getSVGMarker(this.getMarkerColor(t)),iconAnchor:[20,45],iconSize:[30,32],popupAnchor:[0,-30]})},refreshIcons:function(){var t=this;this.sensors.forEach((function(e){e.marker.setIcon(t.buildMarkerIcon(e))}))},getMarkerColor:function(t){var e=Number(t[this.pmType]);return e>=0&&e<=25?"#ffff66":e>25&&e<=50?"#ff6600":e>50&&e<=100?"#cc0000":e>100&&e<=150?"#990099":e>150?"#732626":void 0},getSVGMarker:function(t){var e='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30pt" height="32pt" viewBox="0 0 30 32" version="1.1">\n            <g id="surface1">\n            <path style="fill-rule:nonzero;fill:'.concat(t,";fill-opacity:1;stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round;stroke:").concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 99.709245 31.002122 C 98.581293 27.183586 96.711674 19.48417 90.716532 19.48417 C 84.72139 19.48417 82.712708 27.168 81.708367 31.002122 L 65.716172 84.726592 C 70.722424 92.410423 110.710639 92.410423 115.624183 84.726592 Z M 99.709245 31.002122 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:nonzero;fill:').concat(t,";fill-opacity:1;stroke-width:5.46;stroke-linecap:round;stroke-linejoin:round;stroke:").concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 98.643098 1.482498 C 98.643098 5.628338 95.274694 8.979298 91.133719 8.979298 C 86.992745 8.979298 83.639792 5.628338 83.639792 1.482498 C 83.639792 -2.663342 86.992745 -6.014302 91.133719 -6.014302 C 95.274694 -6.014302 98.643098 -2.663342 98.643098 1.482498 Z M 98.643098 1.482498 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 105.920706 -10.175728 C 105.920706 -10.175728 109.999875 -5.998716 109.999875 1.934488 M 105.920706 13.98236 C 105.920706 13.98236 109.999875 9.805349 109.999875 1.872145 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 119.811512 -22.254771 C 119.811512 -22.254771 127.954398 -13.916335 127.954398 1.950074 M 119.811512 26.061404 C 119.811512 26.061404 127.954398 17.707381 127.954398 1.856559 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 134.953881 -34.333815 C 134.953881 -34.333815 147.175935 -21.818367 147.175935 1.981246 M 134.953881 38.124862 C 134.953881 38.124862 147.175935 25.625 147.175935 1.825387 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 75.635969 -10.175728 C 75.635969 -10.175728 71.572251 -5.998716 71.572251 1.934488 M 75.635969 13.98236 C 75.635969 13.98236 71.572251 9.805349 71.572251 1.872145 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 62.177802 -22.254771 C 62.177802 -22.254771 54.034916 -13.916335 54.034916 1.950074 M 62.177802 26.061404 C 62.177802 26.061404 54.034916 17.707381 54.034916 1.856559 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            <path style="fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:6.370155;stroke-linecap:round;stroke-linejoin:miter;stroke:').concat(t,';stroke-opacity:1;stroke-miterlimit:4;" d="M 47.019982 -34.333815 C 47.019982 -34.333815 34.813378 -21.818367 34.813378 1.981246 M 47.019982 38.124862 C 47.019982 38.124862 34.813378 25.625 34.813378 1.825387 " transform="matrix(0.252809,0,0,0.250628,-7.996443,9.401882)"/>\n            </g>');return e}}},X=K,Y=(a("817a"),a("ac7c")),tt=a("cd55"),et=a("49e2"),at=a("c865"),rt=a("0393"),nt=a("67b6"),ot=a("43a6"),it=Object(d["a"])(X,B,N,!1,null,"7487874a",null),st=it.exports;u()(it,{VBtn:P["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCheckbox:Y["a"],VDialog:D["a"],VExpansionPanel:tt["a"],VExpansionPanelContent:et["a"],VExpansionPanelHeader:at["a"],VExpansionPanels:rt["a"],VIcon:v["a"],VRadio:nt["a"],VRadioGroup:ot["a"],VSpacer:V["a"]}),r["a"].use(W["a"]);var lt=[{path:"/",name:"home",component:st}],ct=new W["a"]({routes:lt}),dt=ct,pt=(a("dca8"),a("f309"));r["a"].use(pt["a"]);var ut=new pt["a"]({icons:{iconfont:"mdi"},options:{customProperties:!0},theme:{themes:{light:{primary:Object.freeze({base:"#38b5e6",lighten5:"#E7F6FC",lighten4:"#C3E9F8",lighten3:"#9CDAF3",lighten2:"#74CBEE",lighten1:"#56C0EA",darken1:"#32AEE3",darken2:"#2BA5DF",darken3:"#249DDB",darken4:"#178DD5",accent1:"#FFFFFF",accent2:"#D4EDFF",accent3:"#A1D9FF",accent4:"#87CEFF"}),secondary:Object.freeze({base:"#c3ef21",lighten5:"#F8FDE4",lighten4:"#EDFABC",lighten3:"#E1F790",lighten2:"#D5F464",lighten1:"#CCF142",darken1:"#BDED1D",darken2:"#B5EB18",darken3:"#AEE814",darken4:"#A1E40B",accent1:"#FFFFFF",accent2:"#F3FFDB",accent3:"#E1FFA8",accent4:"#D9FF8F"})}}}}),ht=a("bc3a"),mt=a.n(ht);a("bf44"),a("07fb");r["a"].config.productionTip=!1,r["a"].prototype.$axios=mt.a,new r["a"]({router:dt,vuetify:ut,render:function(t){return t(I)}}).$mount("#app")},5926:function(t,e,a){"use strict";var r=a("e475"),n=a.n(r);n.a},"5eeb":function(t,e,a){},"817a":function(t,e,a){"use strict";var r=a("5eeb"),n=a.n(r);n.a},8923:function(t,e,a){},"980d":function(t,e,a){},c838:function(t,e,a){"use strict";var r=a("980d"),n=a.n(r);n.a},cd8a:function(t,e,a){"use strict";var r=a("8923"),n=a.n(r);n.a},e475:function(t,e,a){}});
//# sourceMappingURL=app.992898cb.js.map