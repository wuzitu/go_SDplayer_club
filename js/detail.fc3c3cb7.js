(function(t){function a(a){for(var n,s,l=a[0],i=a[1],d=a[2],g=0,u=[];g<l.length;g++)s=l[g],r[s]&&u.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(a);while(u.length)u.shift()();return o.push.apply(o,d||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,l=1;l<e.length;l++){var i=e[l];0!==r[i]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={detail:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var c=i;o.push([2,"chunk-vendors"]),e()})({"196e":function(t,a,e){"use strict";var n=e("9023"),r=e.n(n);r.a},2:function(t,a,e){t.exports=e("d97a")},3352:function(t,a,e){"use strict";var n=e("3808"),r=e.n(n);r.a},3808:function(t,a,e){},"869c":function(t,a,e){"use strict";e("eee6");var n=e("7eeb"),r=n.enc.Utf8.parse("1234123412ABCDEF"),o=n.enc.Utf8.parse("ABCDEF1234123412");function s(t){var a=n.enc.Hex.parse(t),e=n.enc.Base64.stringify(a),s=n.AES.decrypt(e,r,{iv:o,mode:n.mode.CBC,padding:n.pad.Pkcs7}),l=s.toString(n.enc.Utf8);return l.toString()}function l(t){var a=n.enc.Utf8.parse(t),e=n.AES.encrypt(a,r,{iv:o,mode:n.mode.CBC,padding:n.pad.Pkcs7});return e.ciphertext.toString().toUpperCase()}a["a"]={Decrypt:s,Encrypt:l}},9023:function(t,a,e){},d97a:function(t,a,e){"use strict";e.r(a);e("cd2e");var n=e("8c56"),r=e.n(n),o=(e("ff66"),e("ea23"),e("dbff"),e("3a00")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("el-row",{attrs:{type:"flex",justify:"start"}},[e("el-button",{attrs:{type:"text",icon:"el-icon-arrow-left"},on:{click:t.backMain}},[t._v("返回首页")])],1),e("el-row",{attrs:{type:"flex",justify:"start"}},[e("h2",[t._v("SD玩家要塞-机体详情")])]),e("br"),e("detail")],1)},l=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e("el-row",[e("el-col",{attrs:{lg:8,xs:8}},[e("v-img",{staticClass:"grey lighten-2",attrs:{id:"Avatar_dlg",src:"img/avatar/"+t.getUrlKey("id")+".gif","lazy-src":"img/avatar/"+t.getUrlKey("id")+".gif","aspect-ratio":"1","max-width":"120"}},[e("el-col",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1),e("el-col",{attrs:{lg:6,xs:14}},[e("h2",{staticClass:"h2"},[t._v(t._s(t.gundam.Name||t.gundam.model))]),e("div",[t._v("\n        Rank:\n        "),e("strong",{staticClass:"h3"},[t._v(t._s(t.gundam.rank))])]),e("div",[t._v("\n        机体ID：\n        "),e("strong",[t._v(t._s(t.gundam.ID))])]),e("div",[t._v(t._s(t.gundam.landType)+" "+t._s(t.gundam.fightType))]),e("div",[t._v("评分： "+t._s(t.gundam.rating))]),t._e(),t._e()]),e("el-col",{attrs:{lg:10}},[e("div",{staticStyle:{color:"#C0C4CC"}},[t._v("梦服状态：梦中沉睡")]),e("br"),t.gundam.coding?e("div",[t._v("代码："+t._s(t.gundam.coding))]):t._e(),e("br"),t.gundam.needReview?e("div",[t._v("(代码审核中)")]):t._e(),t.gundam.needReview?t._e():e("div",[t.gundam.needReview?t._e():e("el-button",{attrs:{type:"success",size:"small"},on:{click:t.openCodeDlg}},[t._v("代码提交/纠错")])],1)])],1),e("br"),e("el-row",[e("el-col",{attrs:{lg:12,xs:24}},[e("table",{attrs:{width:"90%"}},[e("tbody",[e("tr",[e("td",{attrs:{colspan:"6",align:"center",bgcolor:"#FFFFFF"}},[t._v("机体数值")])]),e("tr",[e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("攻击")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("防御")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("机动")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("操控")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("4D综合")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("3D综合")])],1)]),e("tr",[e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.att))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.def))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.fly))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.ctl))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.D4sum))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.D3sum))])])])])]),e("el-col",{attrs:{lg:12,xs:24}},[e("table",[e("tbody",[e("tr",[e("td",{staticStyle:{width:"120px"},attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("繁体名称")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("冲刺时间")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("跳跃时间")])],1),e("td",{attrs:{bgcolor:"#666699"}},[e("font",{attrs:{color:"#FFFFFF"}},[t._v("索敌距离")])],1)]),e("tr",[e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.nameCN_G))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.rushTime))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.jumpTime))]),e("td",{attrs:{bgcolor:"#FFFFFF"}},[t._v(t._s(t.gundam.Radar_distance))])])])])])],1),t.gundam.showWeaponBlock?t._e():e("el-row",[e("el-col",{attrs:{lg:12,xs:24}},[e("table",{domProps:{innerHTML:t._s(t.gundam.weaponTable)}})]),e("el-col",{attrs:{lg:12,xs:24}},[e("el-table",{attrs:{data:t.gundam.skill,"show-header":!1}},[e("el-table-column",{attrs:{prop:"skill_name",label:"skill_name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("v-img",{attrs:{src:"img/skill/"+a.row.img_local.match(/\d+\.gif/),"lazy-src":"img/skill/"+a.row.img_local.match(/\d+\.gif/),"aspect-ratio":"1","max-width":"30"}}),e("strong",[t._v(t._s(a.row.skill_name))]),e("br"),e("span",[t._v(t._s(a.row.skill_detail))])]}}])})],1)],1)],1),t.gundam.showWeaponBlock?e("el-row",[e("el-col",{attrs:{lg:12,xs:24}},[e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[e("tr",{staticClass:"txt_1"},[e("td",{staticClass:"border1",attrs:{colspan:"3",align:"left",bgcolor:"#FFFFCC"}},[t._v("武装一")]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[t._v("\n              必杀：\n              "),e("span",[t._v(t._s(t.specialWeapon(1)))])]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("span",{staticClass:"border2"},[e("img",{attrs:{src:"img/skill/"+t.gundam.weapon1.special+".gif"}})])])])])]),e("table",{staticClass:"table_border",attrs:{width:"90%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[t._l(t.gundam.weapon1.arms,function(a,n){return e("div",{key:n,staticStyle:{height:"90px"}},[e("tr",[e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFFF"}},[e("img",{attrs:{src:a.imgID&&"img/weapon/"+a.imgID+".gif"||"img/weapon/0.gif",border:"0"}})]),e("td",{attrs:{align:"left",bgcolor:"#FFFFFF"}},[e("b",[t._v(t._s(a.name))]),e("font",{attrs:{color:"#FF6600"}}),e("br"),e("font",{attrs:{color:"#0000FF"}},[a.panding?e("span",[t._v("\n                    判定：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.panding))])],1):t._e(),a.distance?e("span",[t._v("\n                    射程：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.distance))])],1):t._e(),a.xishu?e("span",[e("br"),t._v("系数：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.xishu))])],1):t._e(),a.attSpeed?e("span",[t._v("\n                    攻速倍率:\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.attSpeed))])],1):t._e()])],1)]),e("br"),e("tr",[e("td",[a.ping?e("span",[t._v("\n                  延迟：\n                  "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.ping))])],1):t._e(),a.shotNum?e("span",[t._v("\n                  弹数：\n                  "),e("font",[t._v(t._s(a.shotNum))])],1):t._e(),e("br"),a.huidan?e("span",[t._v("\n                  回弹：\n                  "),e("font",[t._v(t._s(a.huidan))])],1):t._e(),a.cold?e("span",[t._v("\n                  冷却：\n                  "),e("font",[t._v(t._s(a.cold))])],1):t._e()])]),e("tr",{attrs:{width:"100%"}},[e("td",{staticClass:"border1",attrs:{height:"2",colspan:"5",bgcolor:"#66CCFF",width:"300"}})])])}),e("div",[e("tr",[e("td",{staticClass:"border1",attrs:{align:"center",bgcolor:"#FFFFFF"}},[e("img",{attrs:{src:"img/weapon/999.gif"}})]),t._v("盾牌血量：\n              "),e("span",[t._v(t._s(t.gundam.weapon1.shield.life))]),t._v("\n              盾牌防御：\n              "),e("span",[t._v(t._s(t.gundam.weapon1.shield.def))])])])],2)])]),t.gundam.weapon2.arms.length&&t.gundam.weapon2.special?e("el-col",{attrs:{lg:12,xs:24}},[e("table",{staticClass:"table_border",attrs:{width:"100%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[e("tr",{staticClass:"txt_1"},[e("td",{staticClass:"border1",attrs:{colspan:"3",align:"left",bgcolor:"#FFFFCC"}},[t._v("武装二")]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[t._v("\n              必杀：\n              "),e("span",[t._v(t._s(t.specialWeapon(2)))])]),e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFCC"}},[e("span",{staticClass:"border2"},[e("img",{attrs:{src:"img/skill/"+t.gundam.weapon2.special+".gif"}})])])])])]),e("table",{staticClass:"table_border",attrs:{width:"90%",border:"0",cellpadding:"3",cellspacing:"0"}},[e("tbody",[t._l(t.gundam.weapon2.arms,function(a,n){return e("div",{key:n,staticStyle:{height:"90px"}},[e("tr",[e("td",{staticClass:"border1",attrs:{bgcolor:"#FFFFFF"}},[e("img",{attrs:{src:a.imgID&&"img/weapon/"+a.imgID+".gif"||"img/weapon/0.gif",border:"0"}})]),e("td",{attrs:{align:"left",bgcolor:"#FFFFFF"}},[e("b",[t._v(t._s(a.name))]),e("font",{attrs:{color:"#FF6600"}}),e("br"),e("font",{attrs:{color:"#0000FF"}},[a.panding?e("span",[t._v("\n                    判定：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.panding))])],1):t._e(),a.distance?e("span",[t._v("\n                    射程：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.distance))])],1):t._e(),a.xishu?e("span",[e("br"),t._v("系数：\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.xishu))])],1):t._e(),a.attSpeed?e("span",[t._v("\n                    攻速倍率:\n                    "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.attSpeed))])],1):t._e()])],1)]),e("br"),e("tr",[e("td",[a.ping?e("span",[t._v("\n                  延迟：\n                  "),e("font",{attrs:{color:"#008000"}},[t._v(t._s(a.ping))])],1):t._e(),a.shotNum?e("span",[t._v("\n                  弹数：\n                  "),e("font",[t._v(t._s(a.shotNum))])],1):t._e(),e("br"),a.huidan?e("span",[t._v("\n                  回弹：\n                  "),e("font",[t._v(t._s(a.huidan))])],1):t._e(),a.cold?e("span",[t._v("\n                  冷却：\n                  "),e("font",[t._v(t._s(a.cold))])],1):t._e()])]),e("tr",{attrs:{width:"100%"}},[e("td",{staticClass:"border1",attrs:{height:"2",colspan:"5",bgcolor:"#66CCFF",width:"300"}})])])}),e("div",[e("tr",[e("td",{staticClass:"border1",attrs:{align:"center",bgcolor:"#FFFFFF"}},[e("img",{attrs:{src:"img/weapon/999.gif"}})]),t._v("盾牌血量：\n              "),e("span",[t._v(t._s(t.gundam.weapon2.shield.life))]),t._v("\n              盾牌防御：\n              "),e("span",[t._v(t._s(t.gundam.weapon2.shield.def))])])])],2)])]):t._e()],1):t._e(),t.gundam.showWeaponBlock?e("el-row",[e("el-col",{attrs:{lg:24,xs:24}},[e("el-table",{attrs:{data:t.gundam.skill,"show-header":!1}},[e("el-table-column",{attrs:{prop:"skill_name",label:"skill_name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticStyle:{float:"left"},attrs:{src:a.row.id&&"img/skill/"+t.skill.id+".gif"||"img/skill/"+a.row.img_local.match(/\d+\.gif/),width:"35"}}),e("div",{staticStyle:{float:"left","padding-left":"3px"}},[e("strong",[t._v(t._s(a.row.skill_name))]),e("br"),e("span",[t._v(t._s(a.row.skill_detail))])])]}}])})],1)],1)],1):t._e(),t.gundam.makeNeed&&t.gundam.makeNeed.length?e("p",[t._v("合成需要：")]):t._e(),e("el-row",[e("el-col",t._l(t.gundam.makeNeed,function(a){return e("el-card",{key:a.id,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"/detail.html?id="+a.id}},[e("v-img",{class:a.role&&"key"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)],1),t.gundam.makeNeed_CN&&t.gundam.makeNeed_CN.length?e("p",[t._v("国服合成需要：")]):t._e(),e("el-row",[e("div",t._l(t.gundam.makeNeed_CN,function(a){return e("el-card",{key:a.id,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"/detail.html?id="+a.id}},[e("v-img",{class:a.role&&"key"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)]),t.gundam.toMake&&t.gundam.toMake.length?e("p",[t._v("用于合成：")]):t._e(),t.gundam.toMake&&t.gundam.toMake.length?e("el-row",[e("div",t._l(t.gundam.toMake,function(a){return e("el-card",{key:a.id,staticClass:"mk-card"},[e("a",{attrs:{title:a.name,href:"/detail.html?id="+a.id}},[e("v-img",{class:a.role&&"as-ke"==a.role?"as-key":"",attrs:{src:"img/avatar/"+a.id+".gif","lazy-src":"img/avatar/"+a.id+".gif","aspect-ratio":"1","max-width":"60"}}),e("br"),e("span",{staticClass:"mkcard-word"},[t._v(t._s(a.name)+"："+t._s(a.Level))])],1)])}),1)]):t._e(),e("el-row",[t.gundam.Machine&&t.gundam.Machine.length?e("span",[t._v("扭蛋机：")]):t._e(),t._l(t.gundam.Machine,function(a,n){return e("el-tag",{key:n},[t._v(t._s(a))])})],2),e("el-row",[e("p",[t._v("其他信息：")]),e("p",[t._v("-势力："+t._s(t.gundam.force))]),e("p",[t._v("-"+t._s(t.gundam.feature))]),e("p",[t._v("-出自作品："+t._s(t.gundam.from))]),e("p",[t._v("-驾驶员："+t._s(t.gundam.pilot))]),t.gundam.comment?e("p",[t._v("机体简评："+t._s(t.gundam.comment))]):t._e(),e("p",[t._v("机体story：\n      "),e("br"),t._v("\n      "+t._s(t.gundam.story)+"\n    ")])]),t.gundam.contributor&&t.gundam.contributor.length?e("el-row",{attrs:{type:"flex",align:"start"}},[t._v("贡献者名单：\n    "),t._l(t.gundam.contributor,function(a){return e("el-tag",{key:a,attrs:{type:"info"}},[t._v(t._s(a))])})],2):t._e(),t._v("分享页面：\n  "),t.gundam.Name?e("share",{attrs:{config:t.shareconfig}}):t._e(),e("el-dialog",{attrs:{width:"30%",title:"提交单机版机体代码",visible:t.codeDlg,"append-to-body":"",fullscreen:t.showFullDlg},on:{"update:visible":function(a){t.codeDlg=a}}},[e("p",[t._v("格式1：R1代码/R2代码 (eg: 5D 56/5E 56)")]),e("p",[t._v("格式2：R1代码/特殊代码 (eg: AB 3A/ 黄金版：E1 3A)")]),e("el-input",{attrs:{placeholder:"AB CD/EF GH",size:"small",maxlength:"30"},model:{value:t.gundam.coding,callback:function(a){t.$set(t.gundam,"coding",a)},expression:"gundam.coding"}}),e("br"),e("el-alert",{attrs:{title:"感谢贡献",type:"warning",closable:!1,description:"提交前请确认一下准确性，更新内容是为了方便大家，感谢你的贡献。"}}),t.hasCoding?t._e():e("div",[e("p",{staticStyle:{"font-size":"10px"}},[t._v("如果愿意，请留下你的名字/ID，我们会记录贡献者的名单")]),e("el-input",{attrs:{placeholder:"Name",size:"small",maxlength:"30"},model:{value:t.contributor,callback:function(a){t.contributor=a},expression:"contributor"}})],1),t.gundam.contributor&&t.gundam.contributor.length?e("el-row",{attrs:{type:"flex",align:"start"}},[t._v("贡献者名单：\n      "),t._l(t.gundam.contributor,function(a){return e("el-tag",{key:a,attrs:{type:"info"}},[t._v(t._s(a))])})],2):t._e(),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.codeDlg=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submitCoding}},[t._v("提交审核")])],1)],1)],1)},d=[],c=(e("56cc"),e("e0ba"),e("b726"),e("6134"),e("a6b5")),g=e.n(c),u=(e("eee6"),e("7f43")),m=e.n(u),_=e("869c"),p={data:function(){return{loading:!1,fullscreenLoading:!1,codeDlg:!1,hasCoding:!1,contributor:"",gundam:{ID:"",weapon1:{shield:{},arms:[{},{},{}],special:""},weapon2:{shield:{},arms:[{},{},{}],special:""},skill:[],Machine:[],makeNeed:[],toMake:[],makeNeed_CN:[],tags:[],showWeaponBlock:!1,reviewOK:!1,publicTime:""}}},computed:{getshow:{get:function(){return this.show||!1},set:function(){this.$emit("dialogData",!1)}},shareconfig:{get:function(){return{title:"".concat(this.gundam.Name,"-SD玩家要塞-SD敢达机体数据库"),image:"https://www.sdplayer.club/img/avatar/".concat(this.getUrlKey("id"),".gif"),disabled:["linkedin","diandian","google","tencent"],wechatQrcodeTitle:"",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"}}},showFullDlg:{get:function(){var t=document.body.clientWidth;return t<768},set:function(t){return t}},newState:{get:function(){return this.gundam.newState?this.gundam.newState:this.gundam.get_way?"已登场":"未知"}}},props:{show:Boolean},updated:function(){},mounted:function(){var t=this.getUrlKey("id"),a=this;a.loading=!0;var e=_["a"].Encrypt(g()({ID:t})).toString();a.axios.post("/getGundam/findOne",{text:e},{timeout:4e4}).then(function(t){var e=JSON.parse(_["a"].Decrypt(t.data));a.loading=!1,a.showDialog=!0,a.gundam=e.body}).catch(function(t){a.handleError(t)})},methods:{getUrlKey:function(t){var a="(^|&)".concat(t,"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(a);return null!=e?decodeURI(e[2]):null},openCodeDlg:function(){this.hasCoding=!!this.gundam.coding,this.codeDlg=!0},submitCoding:function(){var t=this;this.gundam.needReview=!0,this.loading=!0,this.gundam.contributor||(this.gundam.contributor=[]),this.contributor.trim()&&(this.gundam.contributor.includes(this.contributor.trim())||this.gundam.contributor.push(this.contributor)),this.axios.post("/DBmanage/commitCoding",this.gundam).then(function(a){t.loading=t.codeDlg=!1,a.data.status&&"ok"==a.data.status&&(t.gundam.needReview=!0,t.$message({showClose:!0,message:"提交成功，请耐心等待审核！",type:"success"}))}).catch(function(a){t.loading=t.codeDlg=!1,t.$message({showClose:!0,message:"提交失败，可能遇到了一些错误...",type:"error"})})},handleError:function(t){this.loading=!1,this.$message({showClose:!0,message:"网络错误，请刷新页面！",type:"error"})},specialWeapon:function(t){var a={10:"乱舞型",11:"全弹发射型",12:"地图炮型"};return a[this.gundam["weapon".concat(t)].special]||!1},updateGundam:function(t){var a=this;this.gundam.AvatarUrl_TW="img/loading.gif",this.loading=!0;var e=_["a"].Encrypt(g()(t)).toString();m.a.post("/getGundam/findOne",{text:e},{timeout:4e4}).then(function(t){var e=JSON.parse(_["a"].Decrypt(t.data));a.gundam=e.body,a.loading=!1;var n=document.querySelector("#Avatar_dlg");n.scrollTop=0})},getOwnRobot:function(){var t=this;this.$confirm("尊敬的机师，你能否确定能准确负责地进行为期<strong>3天</strong>的资料更新?<br><strong>请一定要！ <i>保存！</i> 编辑页面的网址！</strong><br>说明：每个IP只能维护一台机体，维护，资料贡献后请把名字留下来，我们会在网站上留下你的名字。","确认修改，请存储新页面的网址链接！",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){t.$message({type:"success",message:"正在认领!"}),t.loading=!0,t.axios.post("/DBmanage/getown",{ID:t.gundam.ID}).then(function(a){t.loading=!1,a.data.includes("err")&&t.$message({showClose:!0,message:a.data,type:"error"}),window.location.href=a.data})}).catch(function(){t.$message({type:"info",message:"已取消认领"})})}}},f=p,v=(e("3352"),e("c46c")),F=Object(v["a"])(f,i,d,!1,null,null,null);F.options.__file="detail.vue";var b=F.exports,h={name:"app",components:{detail:b},data:function(){return{}},methods:{backMain:function(){window.location.href="/"}}},w=h,y=(e("196e"),Object(v["a"])(w,s,l,!1,null,null,null));y.options.__file="App.vue";var k,C,x=y.exports,D="https://api.sdplayer.club:3001/",S={BASE_URL:D},N=S,B=Object(v["a"])(N,k,C,!1,null,null,null);B.options.__file="Global.vue";var O=B.exports,M=(e("9eb8"),e("615b")),A=e("fee2"),E=e("c463"),T=e("fc74"),U=e("9101"),j=e("6221"),R=e("3313"),I=e.n(R);e("e9d6");o["default"].prototype.GLOBAL=O,m.a.defaults.baseURL=O.BASE_URL,o["default"].prototype.axios=m.a,o["default"].use(r.a),o["default"].use(M["a"],{components:{VApp:A["a"],VCard:E["a"],VImg:T["a"],VDivider:U["a"],VProgressCircular:j["a"]}}),o["default"].use(I.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(x)}}).$mount("#app")}});