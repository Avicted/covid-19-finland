(function(e){function t(t){for(var r,i,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid-19-finland/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"032e":function(e,t,a){"use strict";var r=a("2d6b"),s=a.n(r);s.a},"03ca":function(e,t,a){},"0fab":function(e,t,a){"use strict";var r=a("732f"),s=a.n(r);s.a},"1ce6":function(e,t,a){"use strict";var r=a("da8e"),s=a.n(r);s.a},"2b73":function(e,t,a){"use strict";var r=a("f6db"),s=a.n(r);s.a},"2d6b":function(e,t,a){},3654:function(e,t,a){"use strict";var r=a("74d5"),s=a.n(r);s.a},"3e45":function(e,t,a){},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},"48b9":function(e,t,a){"use strict";var r=a("de50"),s=a.n(r);s.a},"732f":function(e,t,a){},"74d5":function(e,t,a){},8529:function(e,t,a){"use strict";var r=a("b944"),s=a.n(r);s.a},b944:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"display-1 mb-0",staticStyle:{"font-family":"monospace !important"}},[e._v(" Finland COVID-19 data ")])])],1),a("v-content",{staticStyle:{"margin-bottom":"25px"}},[a("router-view")],1),a("v-footer",{staticClass:"font-weight-light",staticStyle:{background:"transparent","font-family":"monospace"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("p",{staticClass:"mb-0"},[a("a",{attrs:{href:"https://github.com/Avicted/covid-19-finland"}},[e._v("Source code")])]),a("p",{staticClass:"mb-0"},[a("a",{attrs:{href:"https://github.com/HS-Datadesk/koronavirus-avoindata"}},[e._v("Finland data source")]),e._v(" | Helsingin Sanomat ")]),a("p",{staticClass:"mb-0"},[a("a",{attrs:{href:"https://ourworldindata.org/coronavirus-source-data"}},[e._v("Global data source")]),e._v(" | World Health Organization (WHO) ")]),a("p",{staticClass:"mb-0"},[e._v(" Developed by: "),a("a",{attrs:{href:"https://twitter.com/Victoranderssen"}},[e._v("Victor Anderssén")])])])],1)],1)],1)},n=[],i=a("2f62"),o=(a("d3b7"),function(){return{confirmed:null,deaths:null,recovered:null}}),c=o(),d={confirmed:function(e){return e.confirmed},deaths:function(e){return e.deaths},recovered:function(e){return e.recovered}},l={fetchData:function(e){var t=e.commit;fetch("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData/v2").then((function(e){return e.json()})).then((function(e){t("DATA_FETCHED",e)}))}},u={DATA_FETCHED:function(e,t){e.confirmed=t.confirmed,e.deaths=t.deaths,e.recovered=t.recovered}},f={namespaced:!0,state:c,getters:d,actions:l,mutations:u},h=(a("25f0"),a("4d7c")),m=a.n(h),v=function(){return{data:null}},p=v(),b={data:function(e){return e.data}},g={fetchData:function(e){var t=e.commit;fetch("https://covid.ourworldindata.org/data/ecdc/full_data.csv").then((function(e){return e.text()})).then((function(e){m()({output:"json"}).fromString(e.toString()).then((function(e){t("DATA_FETCHED",e)}))}))}},C={DATA_FETCHED:function(e,t){e.data=t}},y={namespaced:!0,state:p,getters:b,actions:g,mutations:C};r["a"].use(i["a"]);var j=new i["a"].Store({modules:{virusCasesFinland:f,virusCasesGlobal:y}}),w=r["a"].extend({name:"App",mounted:function(){j.dispatch("virusCasesFinland/fetchData"),j.dispatch("virusCasesGlobal/fetchData")}}),D=w,x=a("2877"),k=a("6544"),_=a.n(k),S=a("7496"),T=a("62ad"),V=a("a523"),$=a("a75b"),O=a("553a"),L=a("0fd9"),z=Object(x["a"])(D,s,n,!1,null,null,null),Y=z.exports;_()(z,{VApp:S["a"],VCol:T["a"],VContainer:V["a"],VContent:$["a"],VFooter:O["a"],VRow:L["a"]});var F=a("8c4f"),A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("ConfirmedCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("RecoveredCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("DeathCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("IncreaseToday")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("CasesByDayChart")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("CumulativeChart")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("CasesPerDistrictChart")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"display-1 mb-0 mt-5",staticStyle:{"font-family":"monospace !important"}},[e._v(" Global COVID-19 data ")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("GlobalCumulativeChart")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("GlobalPerCountryChart")],1)],1)],1)},I=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"110px","max-height":"110px"}},[a("v-card-title",{staticClass:"pb-0 pt-2"},[e._v(" Confirmed cases ")]),null==e.confirmedCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-2",staticStyle:{"text-align":"center",color:"#ce93d8"}},[e._v(" "+e._s(e.confirmedCases)+" ")])])],1)},M=[],P=r["a"].extend({name:"ConfirmedCases",data:function(){return{isLoading:!0,confirmedCases:null}},methods:{fetchConfirmedCases:function(){var e=j.getters["virusCasesFinland/confirmed"],t=e.length;this.$data.confirmedCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.confirmedCases&&null!==j.getters["virusCasesFinland/confirmed"]&&this.fetchConfirmedCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchConfirmedCases()}))}}),R=P,H=(a("48b9"),a("b0af")),G=a("99d9"),B=a("490a"),W=Object(x["a"])(R,E,M,!1,null,"a9667e72",null),q=W.exports;_()(W,{VCard:H["a"],VCardText:G["a"],VCardTitle:G["b"],VProgressCircular:B["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"110px","max-height":"110px"}},[a("v-card-title",{staticClass:"pb-0 pt-2"},[e._v(" Recovered cases ")]),null==e.recoveredCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-2",staticStyle:{"text-align":"center",color:"#a5d6a7"}},[e._v(" "+e._s(e.recoveredCases)+" ")])])],1)},U=[],J=r["a"].extend({name:"recoveredCases",data:function(){return{isLoading:!0,recoveredCases:null}},methods:{fetchRecoveredCases:function(){var e=j.getters["virusCasesFinland/recovered"],t=e.length;this.$data.recoveredCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.recoveredCases&&null!==j.getters["virusCasesFinland/recovered"]&&this.fetchRecoveredCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchRecoveredCases()}))}}),X=J,K=(a("eb64"),Object(x["a"])(X,N,U,!1,null,"7da768d2",null)),Q=K.exports;_()(K,{VCard:H["a"],VCardText:G["a"],VCardTitle:G["b"],VProgressCircular:B["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"110px","max-height":"110px"}},[a("v-card-title",{staticClass:"pb-0 pt-2"},[e._v(" Deaths ")]),null==e.deathCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-2",staticStyle:{"text-align":"center",color:"#e57373"}},[e._v(" "+e._s(e.deathCases)+" ")])])],1)},ee=[],te=r["a"].extend({name:"DeathCases",data:function(){return{isLoading:!0,deathCases:null}},methods:{fetchdeathCases:function(){var e=j.getters["virusCasesFinland/deaths"],t=e.length;this.$data.deathCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.deathCases&&null!==j.getters["virusCasesFinland/deaths"]&&this.fetchdeathCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchdeathCases()}))}}),ae=te,re=(a("2b73"),Object(x["a"])(ae,Z,ee,!1,null,"95755d70",null)),se=re.exports;_()(re,{VCard:H["a"],VCardText:G["a"],VCardTitle:G["b"],VProgressCircular:B["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"110px","max-height":"110px"}},[a("v-card-title",{staticClass:"pb-0 pt-2"},[e._v(" Infections change today ")]),null==e.increaseToday||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-2",staticStyle:{"text-align":"center",color:"#cacaca"}},[e._v(" "+e._s(e.increaseToday)+" ")])])],1)},ie=[],oe=a("c1df"),ce=a.n(oe),de=r["a"].extend({name:"IncreaseToday",data:function(){return{isLoading:!0,increaseToday:null}},methods:{fetchIncreaseToday:function(){for(var e=j.getters["virusCasesFinland/confirmed"],t=e.length,a=[],r=[],s=(new Date).toISOString(),n=(new Date).toISOString(),i=0;i<t;i++){var o=e[i].date,c=new Date(o).toISOString().substr(0,10),d=new Date(c).getTime();Date.parse(o)<Date.parse(n)&&(n=o);for(var l=a.length,u=!1,f=0;f<l;f++){var h=a[f][0];if(h===d){a[f][1]=a[f][1]+1,u=!0;break}}u||a.push([d,1])}for(var m=ce()(s).format("YYYY-MM-DD"),v=ce()(n).format("YYYY-MM-DD"),p=ce()(v);p.isSameOrBefore(m);p.add(1,"days")){var b=new Date(p.format("YYYY-MM-DD")).getTime();r.push([b,0])}for(var g=0;g<r.length;g++)for(var C=0;C<a.length;C++){var y=a[C][0];y===r[g][0]&&(r[g][1]=r[g][1]+a[C][1])}var w=r[r.length-1][1],D=r[r.length-2][1],x=w-D;this.$data.increaseToday=x>0?"+ ".concat(w-D):x>0?"- ".concat(w-D):"".concat(w-D),this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.increaseToday&&null!==j.getters["virusCasesFinland/confirmed"]&&this.fetchIncreaseToday(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchIncreaseToday()}))}}),le=de,ue=(a("8529"),Object(x["a"])(le,ne,ie,!1,null,"55f2ed7d",null)),fe=ue.exports;_()(ue,{VCard:H["a"],VCardText:G["a"],VCardTitle:G["b"],VProgressCircular:B["a"]});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{id:"card"}},[a("v-card-title",[e._v(" Cases by day "),a("v-spacer"),null===e.series[0].data&&e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null==e.series[0].data||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{ref:"chart",attrs:{width:"100%",height:"75%",type:e.type,options:e.options,series:e.series}})],1)},me=[],ve=(a("96cf"),a("1da1")),pe=a("1321"),be=a.n(pe),ge=r["a"].extend({name:"CasesByDayChart",components:{apexchart:be.a},data:function(){return{isLoading:!0,type:"area",chartStyles:["area","line","bar"],options:{theme:{mode:"dark"},colors:["#ce93d8","#81c784","#e57373"],chart:{fontFamily:"monospace",stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0},legend:{show:!0,position:"bottom"},grid:{borderColor:"#525252",strokeDashArray:7}},series:[{name:"New infections",data:[]},{name:"Recovered",data:[]},{name:"Deaths",data:[]}]}},methods:{updateChartType:function(e){this.$data.type=e},fetchData:function(e){var t=this;return new Promise((function(a,r){var s="",n=0;switch(e){case"confirmed":s="confirmed",n=0;break;case"recovered":s="recovered",n=1;break;case"deaths":s="deaths",n=2;break;default:break}if(s.length<=0)r();else{for(var i=j.getters["virusCasesFinland/confirmed"],o=i.length,c=j.getters["virusCasesFinland/".concat(s)],d=c.length,l=[],u=[],f=(new Date).toISOString(),h=(new Date).toISOString(),m=0;m<o;m++){var v=i[m].date,p=new Date(v).toISOString().substr(0,10);new Date(p).getTime();Date.parse(v)<Date.parse(h)&&(h=v)}for(var b=0;b<d;b++){for(var g=c[b].date,C=new Date(g).toISOString().substr(0,10),y=new Date(C).getTime(),w=l.length,D=!1,x=0;x<w;x++){var k=l[x][0];if(k===y){l[x][1]=l[x][1]+1,D=!0;break}}D||l.push([y,1])}for(var _=ce()(f).format("YYYY-MM-DD"),S=ce()(h).format("YYYY-MM-DD"),T=ce()(S);T.isSameOrBefore(_);T.add(1,"days")){var V=new Date(T.format("YYYY-MM-DD")).getTime();u.push([V,0])}for(var $=0;$<u.length;$++)for(var O=0;O<l.length;O++){var L=l[O][0];L===u[$][0]&&(u[$][1]=u[$][1]+l[O][1])}t.$data.series[n].data=u,a()}}))}},mounted:function(){var e=this;return Object(ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(ve["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesFinland/DATA_FETCHED"!==a.type){t.next=8;break}return t.next=3,e.fetchData("confirmed");case 3:return t.next=5,e.fetchData("recovered");case 5:return t.next=7,e.fetchData("deaths");case 7:e.$data.isLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),Ce=ge,ye=(a("032e"),a("8336")),je=a("132d"),we=a("8860"),De=a("da13"),xe=a("5d23"),ke=a("e449"),_e=a("2fa4"),Se=Object(x["a"])(Ce,he,me,!1,null,"0487ab58",null),Te=Se.exports;_()(Se,{VBtn:ye["a"],VCard:H["a"],VCardTitle:G["b"],VIcon:je["a"],VList:we["a"],VListItem:De["a"],VListItemTitle:xe["b"],VMenu:ke["a"],VProgressCircular:B["a"],VSpacer:_e["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"400px","max-height":"400px"}},[a("v-card-title",[e._v(" Cases by day (cumulative) "),a("v-spacer"),null===e.series[0].data&&e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null==e.series[0].data||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{attrs:{width:"100%",height:"75%",type:e.type,options:e.options,series:e.series}})],1)},$e=[],Oe=r["a"].extend({name:"CumulativeChart",data:function(){return{isLoading:!0,type:"area",chartStyles:["area","line","bar"],options:{theme:{mode:"dark"},colors:["#ce93d8","#81c784","#e57373"],chart:{fontFamily:"monospace",stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0},legend:{show:!0,position:"bottom"},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},grid:{borderColor:"#525252",strokeDashArray:7}},series:[{name:"Infections (cumulative)",data:[]},{name:"Recovered (cumulative)",data:[]},{name:"Deaths (cumulative)",data:[]}]}},methods:{updateChartType:function(e){this.$data.type=e},fetchData:function(e){var t=this;return new Promise((function(a,r){var s="",n=0;switch(e){case"confirmed":s="confirmed",n=0;break;case"recovered":s="recovered",n=1;break;case"deaths":s="deaths",n=2;break;default:break}if(s.length<=0)r();else{for(var i=j.getters["virusCasesFinland/confirmed"],o=i.length,c=j.getters["virusCasesFinland/".concat(s)],d=c.length,l=[],u=[],f=(new Date).toISOString(),h=(new Date).toISOString(),m=0;m<o;m++){var v=i[m].date,p=new Date(v).toISOString().substr(0,10);new Date(p).getTime();Date.parse(v)<Date.parse(h)&&(h=v)}for(var b=0;b<d;b++){for(var g=c[b].date,C=new Date(g).toISOString().substr(0,10),y=new Date(C).getTime(),w=l.length,D=!1,x=0;x<w;x++){var k=l[x][0];if(k===y){l[x][1]=l[x][1]+1,D=!0;break}}D||l.push([y,1])}for(var _=ce()(f).format("YYYY-MM-DD"),S=ce()(h).format("YYYY-MM-DD"),T=ce()(S);T.isSameOrBefore(_);T.add(1,"days")){var V=new Date(T.format("YYYY-MM-DD")).getTime();u.push([V,0])}for(var $=0;$<u.length;$++){for(var O=!1,L=0;L<l.length;L++)l[L][0]===u[$][0]&&(O=!0,u[$][1]=$>0?u[$][1]+u[$-1][1]+l[L][1]:u[$][1]+l[L][1]);$>0&&!O&&(u[$][1]=u[$][1]+u[$-1][1])}t.$data.series[n].data=u,a()}}))}},mounted:function(){var e=this;return Object(ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(ve["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesFinland/DATA_FETCHED"!==a.type){t.next=8;break}return t.next=3,e.fetchData("confirmed");case 3:return t.next=5,e.fetchData("recovered");case 5:return t.next=7,e.fetchData("deaths");case 7:e.$data.isLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),Le=Oe,ze=(a("0fab"),Object(x["a"])(Le,Ve,$e,!1,null,"5d9620f6",null)),Ye=ze.exports;_()(ze,{VBtn:ye["a"],VCard:H["a"],VCardTitle:G["b"],VIcon:je["a"],VList:we["a"],VListItem:De["a"],VListItemTitle:xe["b"],VMenu:ke["a"],VProgressCircular:B["a"],VSpacer:_e["a"]});var Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{id:"card"}},[a("v-card-title",[e._v(" Infections by health care district ")]),1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{attrs:{width:"100%",height:"87%",options:e.options,series:e.series}})],1)},Ae=[],Ie=r["a"].extend({name:"CasesPerDistrictChart",data:function(){return{isLoading:!0,options:{theme:{mode:"dark"},colors:["#e57373","#f06292","#ba68c8","#9575cd","#7986cb","#64b5f6","#4fc3f7","#4dd0e1","#4db6ac","#81c784","#aed581","#dce775","#fff176","#ffd54f","#ffb74d","#ff8a65","#a1887f"],chart:{fontFamily:"monospace",stacked:!1,type:"bar",toolbar:{show:!1}},dataLabels:{enabled:!0,textAnchor:"middle",offsetY:-20},legend:{show:!0,position:"right"},grid:{borderColor:"#525252",strokeDashArray:7},xaxis:{type:"category",categories:[],labels:{show:!1}},plotOptions:{bar:{columnWidth:"100%",dataLabels:{position:"top"}}},responsive:[{breakpoint:1400,options:{legend:{show:!0,position:"bottom",itemMargin:{horizontal:3,vertical:3}},chart:{width:"100%",height:"85%"}}}],tooltip:{fillSeriesColor:!1,shared:!1,followCursor:!0,x:{show:!1}}},series:[]}},methods:{fetchCasesPerHealthCareDistrict:function(){for(var e=[],t=j.getters["virusCasesFinland/confirmed"],a=t.length,r=0;r<a;r++){for(var s=!1,n=0;n<e.length;n++)if(null===t[r].healthCareDistrict&&(t[r].healthCareDistrict="Unknown"),t[r].healthCareDistrict===e[n].healthCareDistrict){s=!0,e[n].count=e[n].count+1;break}s||e.push({healthCareDistrict:t[r].healthCareDistrict,count:1})}for(var i=[],o=[],c=0;c<e.length;c++){var d=e[c].healthCareDistrict,l=e[c].count;e[c].healthCareDistrict="".concat(d),i.push(e[c].healthCareDistrict),o.push(l)}this.$data.options.xaxis.categories=i;for(var u=0;u<i.length;u++){var f={name:i[u],data:[o[u]]};this.$data.series.push(f)}this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.series&&null!==j.getters["virusCasesFinland/confirmed"]&&this.fetchCasesPerHealthCareDistrict(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchCasesPerHealthCareDistrict()}))}}),Ee=Ie,Me=(a("fcd1"),Object(x["a"])(Ee,Fe,Ae,!1,null,"170e8dd3",null)),Pe=Me.exports;_()(Me,{VCard:H["a"],VCardTitle:G["b"],VProgressCircular:B["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"700px","max-height":"700px"}},[a("v-card-title",{staticClass:"justify-space-between"},[e._v(" Global confirmed cases (cumulative) "),a("v-spacer"),null===e.rawData||e.isLoading?e._e():a("v-select",{staticClass:"country-dropdown mr-6",attrs:{items:e.countries,"menu-props":{maxHeight:"600"},label:"Select countries",multiple:"",outlined:"","single-line":"",hint:"Select countries","persistent-hint":"",dense:""},on:{input:e.limiter},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.item,s=t.index;return[0===s?a("v-chip",{attrs:{small:""}},[a("span",[e._v(e._s(r))])]):e._e(),1===s?a("span",{staticClass:"grey--text caption"},[e._v(" (+"+e._s(e.selectedCountries.length-1)+" others) ")]):e._e()]}}],null,!1,1270146437),model:{value:e.selectedCountries,callback:function(t){e.selectedCountries=t},expression:"selectedCountries"}}),null===e.rawData||e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null!==e.rawData&&e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{ref:"chart",attrs:{width:"100%",height:"85%",type:e.type,options:e.options,series:e.series}}),a("v-snackbar",{staticStyle:{color:"black"},attrs:{color:"primary"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" "),a("v-btn",{attrs:{text:"",color:"black"},on:{click:function(t){e.snackbar=!1}}},[e._v(" Close ")])],1)],1)},He=[],Ge=(a("99af"),a("caad"),a("13d5"),a("b0c0"),a("b680"),a("2532"),a("5530")),Be=r["a"].extend({name:"GlobalPerCountryChart",data:function(){return{rawData:[],isLoading:!0,type:"line",chartStyles:["bar","line","area"],countries:[],selectedCountries:["Finland"],snackbar:!1,snackbarText:"",options:{theme:{mode:"dark"},colors:["#e57373","#f06292","#ba68c8","#9575cd","#7986cb","#64b5f6","#4fc3f7","#4dd0e1","#4db6ac","#81c784","#aed581","#dce775","#fff176","#ffd54f","#ffb74d","#ff8a65","#a1887f"],chart:{fontFamily:"monospace",stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}},selection:{enabled:!1},animations:{enabled:!1}},markers:{size:0},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},yaxis:{labels:{formatter:function(e){return e>1e3?"".concat(e/1e3,"k"):e}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0,y:{formatter:function(e,t){t.series;var a=t.seriesIndex;t.dataPointIndex,t.w;if(!(a>=10)){if(e>1e3){var r=(e/1e3).toFixed(0);return"".concat(r,"k")}return e}}}},legend:{show:!0,position:"bottom"},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},grid:{borderColor:"#525252",strokeDashArray:7}},series:[]}},watch:{selectedCountries:function(e,t){this.updateChartData(e)}},methods:{updateChartType:function(e){this.$data.type=e},updateChartData:function(e){for(var t=[],a=0;a<this.$data.rawData.length;a++){var r=this.$data.rawData[a].name;e.includes(r)&&t.push(this.$data.rawData[a])}this.$data.series=t},limiter:function(e){if(e.length>10){var t="You can only select 10 countries at a time";this.$data.snackbarText=t,this.$data.snackbar=!0,e.pop()}},groupBy:function(e,t){return e.reduce((function(e,a){var r=a[t];return e[r]=(e[r]||[]).concat(a),e}),{})},fetchData:function(){var e=this;return new Promise((function(t,a){var r=j.getters["virusCasesGlobal/data"];r||a();var s=[];s=e.groupBy(r,"location");var n=[],i=(new Date).toISOString(),o=(new Date).toISOString();for(var c in s){e.$data.countries.push(c);for(var d=0;d<s[c].length;d++){var l=s[c][d].date,u=new Date(l).toISOString().substr(0,10);new Date(u).getTime();Date.parse(l)<Date.parse(o)&&(o=l)}}for(var f=ce()(i).format("YYYY-MM-DD"),h=ce()(o).format("YYYY-MM-DD"),m=ce()(h);m.isBefore(f);m.add(1,"days")){var v=new Date(m.format("YYYY-MM-DD")).getTime();n.push([v,0])}for(var p in s){for(var b={name:p,data:[]},g=n,C=0;C<g.length;C++){for(var y=!1,w=0;w<s[p].length;w++){var D=s[p][w].date,x=new Date(D).toISOString(),k=new Date(x).getTime(),_=s[p][w].total_cases,S=[k,_];k===g[C][0]&&(y=!0,b.data.push(S))}y||b.data.push(g[C])}e.$data.rawData.push(b)}t()}))}},mounted:function(){var e=this;return Object(ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(ve["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesGlobal/DATA_FETCHED"!==a.type){t.next=6;break}return t.next=3,e.fetchData();case 3:e.updateChartData(e.selectedCountries),e.$data.options=Object(Ge["a"])({},e.$data.options,{},{noData:{text:"Select countries to view data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#ffb74d",fontSize:"16px",fontFamily:"monospace"}}}),e.$data.isLoading=!1;case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),We=Be,qe=(a("f50d"),a("cc20")),Ne=a("b974"),Ue=a("2db4"),Je=Object(x["a"])(We,Re,He,!1,null,"456d10ea",null),Xe=Je.exports;_()(Je,{VBtn:ye["a"],VCard:H["a"],VCardTitle:G["b"],VChip:qe["a"],VIcon:je["a"],VList:we["a"],VListItem:De["a"],VListItemTitle:xe["b"],VMenu:ke["a"],VProgressCircular:B["a"],VSelect:Ne["a"],VSnackbar:Ue["a"],VSpacer:_e["a"]});var Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"400px","max-height":"400px"}},[a("v-card-title",[e._v(" Cases by day (cumulative) "),a("v-spacer"),null===e.series[0].data&&e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null==e.series[0].data||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{attrs:{width:"100%",height:"75%",type:e.type,options:e.options,series:e.series}})],1)},Qe=[],Ze=r["a"].extend({name:"GlobalCumulativeChart",data:function(){return{isLoading:!0,type:"area",chartStyles:["bar","line","area"],options:{theme:{mode:"dark"},colors:["#ce93d8","#e57373"],chart:{fontFamily:"monospace",stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},yaxis:{labels:{formatter:function(e){return e>1e3?"".concat(e/1e3,"k"):e}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0,y:{formatter:function(e){if(e>1e3){var t=(e/1e3).toFixed(2);return"".concat(t,"k")}return e}}},legend:{show:!0,position:"bottom"},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},grid:{borderColor:"#525252",strokeDashArray:7}},series:[{name:"Cases World (cumulative)",data:[]},{name:"Deaths World (cumulative)",data:[]}]}},methods:{updateChartType:function(e){this.$data.type=e},fetchData:function(){var e=this;return new Promise((function(t,a){for(var r=j.getters["virusCasesGlobal/data"],s=r.length,n=[],i=[],o=0;o<s;o++)if("World"===r[o].location){var c=r[o].date,d=new Date(c).toISOString(),l=new Date(d).getTime(),u=[l,r[o].total_cases];n.push(u);var f=[l,r[o].total_deaths];i.push(f)}e.$data.series[0].data=n,e.$data.series[1].data=i,t()}))}},mounted:function(){var e=this;return Object(ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(ve["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesGlobal/DATA_FETCHED"!==a.type){t.next=4;break}return t.next=3,e.fetchData();case 3:e.$data.isLoading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),et=Ze,tt=(a("1ce6"),Object(x["a"])(et,Ke,Qe,!1,null,"3bd12e2e",null)),at=tt.exports;_()(tt,{VBtn:ye["a"],VCard:H["a"],VCardTitle:G["b"],VIcon:je["a"],VList:we["a"],VListItem:De["a"],VListItemTitle:xe["b"],VMenu:ke["a"],VProgressCircular:B["a"],VSpacer:_e["a"]});var rt={name:"Home",components:{ConfirmedCases:q,RecoveredCases:Q,DeathCases:se,IncreaseToday:fe,CasesByDayChart:Te,CumulativeChart:Ye,CasesPerDistrictChart:Pe,GlobalPerCountryChart:Xe,GlobalCumulativeChart:at}},st=rt,nt=(a("3654"),Object(x["a"])(st,A,I,!1,null,null,null)),it=nt.exports;_()(nt,{VCol:T["a"],VRow:L["a"]}),r["a"].use(F["a"]);var ot=[{path:"/",name:"Home",component:it}],ct=new F["a"]({routes:ot}),dt=ct,lt=a("f309");r["a"].use(lt["a"]);var ut=new lt["a"]({theme:{dark:!0,themes:{dark:{primary:"#40dea9",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});r["a"].config.productionTip=!1,r["a"].use(be.a),r["a"].component("apexchart",be.a),new r["a"]({router:dt,store:j,vuetify:ut,render:function(e){return e(Y)}}).$mount("#app")},da8e:function(e,t,a){},de50:function(e,t,a){},eb64:function(e,t,a){"use strict";var r=a("3e45"),s=a.n(r);s.a},ef8a:function(e,t,a){},f50d:function(e,t,a){"use strict";var r=a("03ca"),s=a.n(r);s.a},f6db:function(e,t,a){},fcd1:function(e,t,a){"use strict";var r=a("ef8a"),s=a.n(r);s.a}});
//# sourceMappingURL=app.c1e4f7c1.js.map