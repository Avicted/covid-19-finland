(function(e){function t(t){for(var r,i,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid-19-finland/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"16b6":function(e,t,a){"use strict";var r=a("6efd"),s=a.n(r);s.a},"29cd":function(e,t,a){},3654:function(e,t,a){"use strict";var r=a("74d5"),s=a.n(r);s.a},"3cea":function(e,t,a){"use strict";var r=a("5f64"),s=a.n(r);s.a},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},5771:function(e,t,a){"use strict";var r=a("dc55"),s=a.n(r);s.a},"5c9f":function(e,t,a){"use strict";var r=a("29cd"),s=a.n(r);s.a},"5f64":function(e,t,a){},6775:function(e,t,a){},"6efd":function(e,t,a){},"74d5":function(e,t,a){},a21c:function(e,t,a){"use strict";var r=a("e847"),s=a.n(r);s.a},c17b:function(e,t,a){"use strict";var r=a("6775"),s=a.n(r);s.a},cbbc:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{staticStyle:{"margin-bottom":"75px"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"display-1 mb-0",staticStyle:{"font-family":"monospace !important"}},[e._v("Finland COVID-19 data")])])],1),a("v-content",[a("router-view")],1)],1),a("v-footer",{staticClass:"font-weight-light",staticStyle:{background:"transparent","font-family":"monospace"},attrs:{absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" - "),a("strong",[a("a",{staticClass:"pink--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://github.com/Avicted"}},[e._v("Avicted")])])])],1)],1)},n=[],i=a("2f62"),o=(a("d3b7"),function(){return{confirmed:null,deaths:null,recovered:null}}),c=o(),d={confirmed:function(e){return e.confirmed},deaths:function(e){return e.deaths},recovered:function(e){return e.recovered}},l={fetchData:function(e){var t=e.commit;fetch("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData").then((function(e){return e.json()})).then((function(e){t("DATA_FETCHED",e)}))}},u={DATA_FETCHED:function(e,t){e.confirmed=t.confirmed,e.deaths=t.deaths,e.recovered=t.recovered}},f={namespaced:!0,state:c,getters:d,actions:l,mutations:u};r["a"].use(i["a"]);var h=new i["a"].Store({modules:{virusCasesFinland:f}}),v=r["a"].extend({name:"App",mounted:function(){h.dispatch("virusCasesFinland/fetchData")}}),m=v,p=a("2877"),b=a("6544"),g=a.n(b),j=a("7496"),C=a("62ad"),y=a("a523"),w=a("a75b"),D=a("553a"),x=a("0fd9"),k=Object(p["a"])(m,s,n,!1,null,null,null),_=k.exports;g()(k,{VApp:j["a"],VCol:C["a"],VContainer:y["a"],VContent:w["a"],VFooter:D["a"],VRow:x["a"]});var T=a("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("ConfirmedCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("RecoveredCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("DeathCases")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",xl:"3"}},[a("IncreaseToday")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("CasesByDayChart")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("CumulativeChart")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("CasesPerDistrictChart")],1)],1)],1)},S=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"160px","max-height":"160px"}},[a("v-card-title",[e._v(" Confirmed cases ")]),null==e.confirmedCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-3",staticStyle:{"text-align":"center",color:"#ce93d8"}},[e._v(e._s(e.confirmedCases))])])],1)},O=[],L=r["a"].extend({name:"ConfirmedCases",data:function(){return{isLoading:!0,confirmedCases:null}},methods:{fetchConfirmedCases:function(){var e=h.getters["virusCasesFinland/confirmed"],t=e.length;this.$data.confirmedCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.confirmedCases&&null!==h.getters["virusCasesFinland/confirmed"]&&this.fetchConfirmedCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchConfirmedCases()}))}}),z=L,F=(a("5c9f"),a("b0af")),E=a("99d9"),A=a("490a"),I=Object(p["a"])(z,$,O,!1,null,"08dfd9d8",null),P=I.exports;g()(I,{VCard:F["a"],VCardText:E["a"],VCardTitle:E["b"],VProgressCircular:A["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"160px","max-height":"160px"}},[a("v-card-title",[e._v(" Recovered cases ")]),null==e.recoveredCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-3",staticStyle:{"text-align":"center",color:"#a5d6a7"}},[e._v(e._s(e.recoveredCases))])])],1)},H=[],M=r["a"].extend({name:"recoveredCases",data:function(){return{isLoading:!0,recoveredCases:null}},methods:{fetchRecoveredCases:function(){var e=h.getters["virusCasesFinland/recovered"],t=e.length;this.$data.recoveredCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.recoveredCases&&null!==h.getters["virusCasesFinland/recovered"]&&this.fetchRecoveredCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchRecoveredCases()}))}}),Y=M,B=(a("c17b"),Object(p["a"])(Y,R,H,!1,null,"da30b9f8",null)),q=B.exports;g()(B,{VCard:F["a"],VCardText:E["a"],VCardTitle:E["b"],VProgressCircular:A["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"160px","max-height":"160px"}},[a("v-card-title",[e._v(" Deaths ")]),null==e.deathCases||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-3",staticStyle:{"text-align":"center",color:"#e57373"}},[e._v(e._s(e.deathCases))])])],1)},G=[],J=r["a"].extend({name:"DeathCases",data:function(){return{isLoading:!0,deathCases:null}},methods:{fetchdeathCases:function(){var e=h.getters["virusCasesFinland/deaths"],t=e.length;this.$data.deathCases=t,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.deathCases&&null!==h.getters["virusCasesFinland/deaths"]&&this.fetchdeathCases(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchdeathCases()}))}}),U=J,W=(a("fe80"),Object(p["a"])(U,N,G,!1,null,"6982b937",null)),K=W.exports;g()(W,{VCard:F["a"],VCardText:E["a"],VCardTitle:E["b"],VProgressCircular:A["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"160px","max-height":"160px"}},[a("v-card-title",[e._v(" Infections change today ")]),null==e.increaseToday||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("v-card-text",[a("p",{staticClass:"display-3",staticStyle:{"text-align":"center",color:"#cacaca"}},[e._v(e._s(e.increaseToday))])])],1)},X=[],Z=a("c1df"),ee=a.n(Z),te=r["a"].extend({name:"IncreaseToday",data:function(){return{isLoading:!0,increaseToday:null}},methods:{fetchIncreaseToday:function(){for(var e=h.getters["virusCasesFinland/confirmed"],t=e.length,a=[],r=[],s=(new Date).toISOString(),n=(new Date).toISOString(),i=0;i<t;i++){var o=e[i].date,c=new Date(o).toISOString().substr(0,10),d=new Date(c).getTime();Date.parse(o)<Date.parse(n)&&(n=o);for(var l=a.length,u=!1,f=0;f<l;f++){var v=a[f][0];if(v===d){a[f][1]=a[f][1]+1,u=!0;break}}u||a.push([d,1])}for(var m=ee()(s),p=ee()(n),b=ee()(p);b.diff(m,"days")<=0;b.add(1,"days")){var g=new Date(b.format("YYYY-MM-DD")).getTime();r.push([g,0])}for(var j=0;j<r.length;j++)for(var C=0;C<a.length;C++){var y=a[C][0];y===r[j][0]&&(r[j][1]=r[j][1]+a[C][1])}var w=r[r.length-2][1],D=r[r.length-3][1],x=w-D;this.$data.increaseToday=x>0?"+ ".concat(w-D):x>0?"- ".concat(w-D):"".concat(w-D),this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.increaseToday&&null!==h.getters["virusCasesFinland/confirmed"]&&this.fetchIncreaseToday(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchIncreaseToday()}))}}),ae=te,re=(a("16b6"),Object(p["a"])(ae,Q,X,!1,null,"6509d41f",null)),se=re.exports;g()(re,{VCard:F["a"],VCardText:E["a"],VCardTitle:E["b"],VProgressCircular:A["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{id:"card"}},[a("v-card-title",[e._v(" Cases by day "),a("v-spacer"),null===e.series[0].data&&e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null==e.series[0].data||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{ref:"chart",attrs:{width:"100%",height:"75%",type:e.type,options:e.options,series:e.series}})],1)},ie=[],oe=(a("96cf"),a("1da1")),ce=a("1321"),de=a.n(ce),le=r["a"].extend({name:"CasesByDayChart",components:{apexchart:de.a},data:function(){return{isLoading:!0,type:"bar",chartStyles:["bar","line","area"],options:{theme:{mode:"dark"},colors:["#ce93d8","#81c784","#e57373"],chart:{stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0},legend:{show:!0,position:"bottom"},grid:{borderColor:"#525252",strokeDashArray:7}},series:[{name:"New infections",data:[]},{name:"Recovered",data:[]},{name:"Deaths",data:[]}]}},methods:{updateChartType:function(e){this.$data.type=e},fetchData:function(e){var t=this;return new Promise((function(a,r){var s="",n=0;switch(e){case"confirmed":s="confirmed",n=0;break;case"recovered":s="recovered",n=1;break;case"deaths":s="deaths",n=2;break;default:break}if(s.length<=0)r();else{for(var i=h.getters["virusCasesFinland/confirmed"],o=i.length,c=h.getters["virusCasesFinland/".concat(s)],d=c.length,l=[],u=[],f=(new Date).toISOString(),v=(new Date).toISOString(),m=0;m<o;m++){var p=i[m].date,b=new Date(p).toISOString().substr(0,10);new Date(b).getTime();Date.parse(p)<Date.parse(v)&&(v=p)}for(var g=0;g<d;g++){for(var j=c[g].date,C=new Date(j).toISOString().substr(0,10),y=new Date(C).getTime(),w=l.length,D=!1,x=0;x<w;x++){var k=l[x][0];if(k===y){l[x][1]=l[x][1]+1,D=!0;break}}D||l.push([y,1])}for(var _=ee()(f),T=ee()(v),V=ee()(T);V.isBefore(_);V.add(1,"days")){var S=new Date(V.format("YYYY-MM-DD")).getTime();u.push([S,0])}for(var $=0;$<u.length;$++)for(var O=0;O<l.length;O++){var L=l[O][0];L===u[$][0]&&(u[$][1]=u[$][1]+l[O][1])}t.$data.series[n].data=u,a()}}))}},mounted:function(){var e=this;return Object(oe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(oe["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesFinland/DATA_FETCHED"!==a.type){t.next=8;break}return t.next=3,e.fetchData("confirmed");case 3:return t.next=5,e.fetchData("recovered");case 5:return t.next=7,e.fetchData("deaths");case 7:e.$data.isLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),ue=le,fe=(a("3cea"),a("8336")),he=a("132d"),ve=a("8860"),me=a("da13"),pe=a("5d23"),be=a("e449"),ge=a("2fa4"),je=Object(p["a"])(ue,ne,ie,!1,null,"7023442b",null),Ce=je.exports;g()(je,{VBtn:fe["a"],VCard:F["a"],VCardTitle:E["b"],VIcon:he["a"],VList:ve["a"],VListItem:me["a"],VListItemTitle:pe["a"],VMenu:be["a"],VProgressCircular:A["a"],VSpacer:ge["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"400px","max-height":"400px"}},[a("v-card-title",[e._v(" Cases by day (cumulative) "),a("v-spacer"),null===e.series[0].data&&e.isLoading?e._e():a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:"",outlined:"",color:"primary"}},r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,2422216577)},[a("v-list",e._l(e.chartStyles,(function(t,r){return a("v-list-item",{key:r,class:[t===e.type?"v-list-item--active":""],attrs:{dense:"",color:"primary"},on:{click:function(a){return e.updateChartType(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)],1),null==e.series[0].data||1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{attrs:{width:"100%",height:"75%",type:e.type,options:e.options,series:e.series}})],1)},we=[],De=r["a"].extend({name:"CumulativeChart",data:function(){return{isLoading:!0,type:"area",chartStyles:["bar","line","area"],options:{theme:{mode:"dark"},colors:["#ce93d8","#81c784","#e57373"],chart:{stacked:!1,toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},xaxis:{type:"datetime",crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}}},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},tooltip:{shared:!0,followCursor:!0},legend:{show:!0,position:"bottom"},stroke:{show:!0,curve:"straight",colors:void 0,width:2,dashArray:0},grid:{borderColor:"#525252",strokeDashArray:7}},series:[{name:"Infections (cumulative)",data:[]},{name:"Recovered (cumulative)",data:[]},{name:"Deaths (cumulative)",data:[]}]}},methods:{updateChartType:function(e){this.$data.type=e},fetchData:function(e){var t=this;return new Promise((function(a,r){var s="",n=0;switch(e){case"confirmed":s="confirmed",n=0;break;case"recovered":s="recovered",n=1;break;case"deaths":s="deaths",n=2;break;default:break}if(s.length<=0)r();else{for(var i=h.getters["virusCasesFinland/confirmed"],o=i.length,c=h.getters["virusCasesFinland/".concat(s)],d=c.length,l=[],u=[],f=(new Date).toISOString(),v=(new Date).toISOString(),m=0;m<o;m++){var p=i[m].date,b=new Date(p).toISOString().substr(0,10);new Date(b).getTime();Date.parse(p)<Date.parse(v)&&(v=p)}for(var g=0;g<d;g++){for(var j=c[g].date,C=new Date(j).toISOString().substr(0,10),y=new Date(C).getTime(),w=l.length,D=!1,x=0;x<w;x++){var k=l[x][0];if(k===y){l[x][1]=l[x][1]+1,D=!0;break}}D||l.push([y,1])}for(var _=ee()(f),T=ee()(v),V=ee()(T);V.isBefore(_);V.add(1,"days")){var S=new Date(V.format("YYYY-MM-DD")).getTime();u.push([S,0])}for(var $=0;$<u.length;$++){for(var O=!1,L=0;L<l.length;L++)l[L][0]===u[$][0]&&(O=!0,u[$][1]=$>0?u[$][1]+u[$-1][1]+l[L][1]:u[$][1]+l[L][1]);$>0&&!O&&(u[$][1]=u[$][1]+u[$-1][1])}t.$data.series[n].data=u,a()}}))}},mounted:function(){var e=this;return Object(oe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$data.isLoading=!0,e.$store.subscribe(function(){var t=Object(oe["a"])(regeneratorRuntime.mark((function t(a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("virusCasesFinland/DATA_FETCHED"!==a.type){t.next=8;break}return t.next=3,e.fetchData("confirmed");case 3:return t.next=5,e.fetchData("recovered");case 5:return t.next=7,e.fetchData("deaths");case 7:e.$data.isLoading=!1;case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}),xe=De,ke=(a("a21c"),Object(p["a"])(xe,ye,we,!1,null,"8c70cbe4",null)),_e=ke.exports;g()(ke,{VBtn:fe["a"],VCard:F["a"],VCardTitle:E["b"],VIcon:he["a"],VList:ve["a"],VListItem:me["a"],VListItemTitle:pe["a"],VMenu:be["a"],VProgressCircular:A["a"],VSpacer:ge["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-height":"500px","max-height":"500px"}},[a("v-card-title",[e._v(" Infections by health care district ")]),1==e.isLoading?a("v-progress-circular",{attrs:{id:"progress-loader",size:50,color:"primary",indeterminate:""}}):a("apexchart",{attrs:{width:"100%",height:"80%",options:e.options,series:e.series}})],1)},Ve=[],Se=(a("99af"),r["a"].extend({name:"CasesPerDistrictChart",data:function(){return{isLoading:!0,options:{theme:{mode:"dark",palette:"palette7"},chart:{stacked:!1,type:"donut",toolbar:{show:!1}},plotOptions:{},dataLabels:{enabled:!1},legend:{show:!0,position:"right"},responsive:[{breakpoint:600,options:{legend:{show:!0,position:"bottom"},chart:{width:"100%"}}}],labels:[]},series:[]}},methods:{fetchCasesPerHealthCareDistrict:function(){for(var e=[],t=h.getters["virusCasesFinland/confirmed"],a=t.length,r=0;r<a;r++){for(var s=!1,n=0;n<e.length;n++)if(t[r].healthCareDistrict===e[n].healthCareDistrict){s=!0,e[n].count=e[n].count+1;break}s||e.push({healthCareDistrict:t[r].healthCareDistrict,count:1})}for(var i=[],o=[],c=0;c<e.length;c++){var d=e[c].healthCareDistrict,l=e[c].count;e[c].healthCareDistrict="".concat(d," (").concat(l,")"),i.push(e[c].healthCareDistrict),o.push(l)}this.$data.options.labels=i,this.$data.series=o,this.$data.isLoading=!1}},mounted:function(){var e=this;this.$data.isLoading=!0,null===this.$data.series&&null!==h.getters["virusCasesFinland/confirmed"]&&this.fetchCasesPerHealthCareDistrict(),this.$store.subscribe((function(t,a){"virusCasesFinland/DATA_FETCHED"===t.type&&e.fetchCasesPerHealthCareDistrict()}))}})),$e=Se,Oe=(a("5771"),Object(p["a"])($e,Te,Ve,!1,null,"2b8b1750",null)),Le=Oe.exports;g()(Oe,{VCard:F["a"],VCardTitle:E["b"],VProgressCircular:A["a"]});var ze={name:"Home",components:{ConfirmedCases:P,RecoveredCases:q,DeathCases:K,IncreaseToday:se,CasesByDayChart:Ce,CumulativeChart:_e,CasesPerDistrictChart:Le}},Fe=ze,Ee=(a("3654"),Object(p["a"])(Fe,V,S,!1,null,null,null)),Ae=Ee.exports;g()(Ee,{VCol:C["a"],VRow:x["a"]}),r["a"].use(T["a"]);var Ie=[{path:"/",name:"Home",component:Ae}],Pe=new T["a"]({routes:Ie}),Re=Pe,He=a("f309");r["a"].use(He["a"]);var Me=new He["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,r["a"].use(de.a),r["a"].component("apexchart",de.a),new r["a"]({router:Re,store:h,vuetify:Me,render:function(e){return e(_)}}).$mount("#app")},dc55:function(e,t,a){},e847:function(e,t,a){},fe80:function(e,t,a){"use strict";var r=a("cbbc"),s=a.n(r);s.a}});
//# sourceMappingURL=app.2a1f412f.js.map