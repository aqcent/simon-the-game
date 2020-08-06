(function(e){function t(t){for(var a,u,i=t[0],o=t[1],c=t[2],d=0,p=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15b5":function(e,t,n){"use strict";var a=n("4b93"),r=n.n(a);r.a},"4b93":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Pad",{attrs:{msg:"Welcome to Your Vue.js App",sequence:e.sequence,needToPlaySequence:e.needToPlay,delay:e.delay,active:e.isPadActive},on:{padClick:e.checkUserSequence,finishPlaySequence:e.finishPlaySequence,loadComplete:e.preloadComplete}}),n("Board",{attrs:{currentDelay:e.delay,round:e.round,status:e.status},on:{start:e.startGame}})],1)},s=[],u=n("2909"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"padWrapper"},[n("div",{staticClass:"pad",class:{disabled:!e.active}},e._l(e.samples,(function(t,a){return n("div",{key:a,staticClass:"padButton",class:{active:t.active},style:{backgroundColor:e.padColors[a]},on:{click:function(n){return e.pressPad(t,a)}}})})),0)])},o=[],c=(n("4160"),n("a9e3"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("b85c")),l=(n("96cf"),n("1da1")),d={name:"Pad",props:{active:Boolean,delay:Number,sequence:Array,needToPlaySequence:Boolean},data:function(){return{samples:[],sounds:["audio/1.mp3","./audio/2.mp3","audio/3.mp3","audio/4.mp3"],padColors:["#2c3e50","#8e44ad","#2980b9","#16a085"]}},methods:{pressPad:function(e,t){if(!this.active)return null;this.playSound(e),this.$emit("padClick",t)},playSound:function(e){e.currentTime=0,e.play()},sleep:function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},playStep:function(e){var t=this;return new Promise((function(n){Object(l["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=350,t.playSound(t.samples[e]),t.samples[e].active=!0,a.next=5,t.$forceUpdate();case 5:return a.next=7,t.sleep(r);case 7:return t.samples[e].active=!1,a.next=10,t.$forceUpdate();case 10:n();case 11:case"end":return a.stop()}}),a)})))()}))},playSequence:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=Object(c["a"])(e),n.prev=1,a.s();case 3:if((r=a.n()).done){n.next=14;break}return s=r.value,n.next=7,t.playStep(s);case 7:return n.next=9,t.sleep(1e3*t.delay);case 9:if(t.needToPlaySequence){n.next=12;break}return t.$emit("finishPlaySequence"),n.abrupt("return",null);case 12:n.next=3;break;case 14:n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](1),a.e(n.t0);case 19:return n.prev=19,a.f(),n.finish(19);case 22:t.$emit("finishPlaySequence");case 23:case"end":return n.stop()}}),n,null,[[1,16,19,22]])})))()},initAudioSamples:function(){var e=this,t=[];return this.sounds.forEach((function(n){var a=new Audio(n);a.load(),t.push(new Promise((function(e){a.addEventListener("canplaythrough",(function t(){a.active=!1,a.removeEventListener("canplaythrough",t),e()}))}))),e.samples.push(a)})),Promise.all(t)}},watch:{needToPlaySequence:function(){this.needToPlaySequence&&this.playSequence(this.sequence)}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.initAudioSamples();case 3:e.$emit("loadComplete"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},p=d,f=(n("15b5"),n("2877")),h=Object(f["a"])(p,i,o,!1,null,"545c232a",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("button",{attrs:{disabled:"Loading"==e.status},on:{click:function(t){return e.$emit("start",e.selectedDelay)}}},[e._v("Start")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDelay,expression:"selectedDelay"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedDelay=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t,a){return n("option",{key:a,domProps:{value:t.delay}},[e._v(e._s(t.title))])})),0),n("span",[e._v(" Current level:"+e._s(e.options.find((function(t){return t.delay==e.currentDelay})).title)+" ")]),n("span",[e._v("Round: "),n("b",[e._v(e._s(e.round))])]),null!=e.status?n("span",{class:e.status},[e._v(e._s(e.status))]):e._e()])},y=[],b={name:"Board",props:{currentDelay:Number,round:Number,status:String},data:function(){return{selectedDelay:.4,options:[{delay:1.5,title:"Easy"},{delay:1,title:"Normal"},{delay:.4,title:"Hard"}]}}},P=b,S=(n("f2b1"),Object(f["a"])(P,v,y,!1,null,"12ac973f",null)),g=S.exports,w={name:"App",components:{Pad:m,Board:g},data:function(){return{round:0,delay:.4,sequence:[],compareSequence:[],needToPlay:!1,isPadActive:!1,GameStatus:{Loading:"Loading",FreePad:"FreePad",Game:null,Fail:"Fail",Correct:"Correct"},status:"Loading"}},methods:{preloadComplete:function(){this.isPadActive=!0,this.status=this.GameStatus.FreePad},checkUserSequence:function(e){var t=this;if(this.status==this.GameStatus.FreePad)return null;this.compareSequence.shift()!==e?(this.isPadActive=!1,this.status=this.GameStatus.Fail,setTimeout((function(){return t.endGame()}),3e3)):0===this.compareSequence.length&&(this.isPadActive=!1,this.status=this.GameStatus.Correct,this.newRound())},playSequence:function(){this.needToPlay=!0,this.isPadActive=!1},finishPlaySequence:function(){this.needToPlay=!1,this.isPadActive=!0},startGame:function(e){this.needToPlay=!1,this.delay=e,this.round=0,this.sequence=[],this.status=this.GameStatus.Game,this.newRound()},endGame:function(){this.status=this.GameStatus.FreePad,this.isPadActive=!0},newRound:function(){var e=this;this.round++;var t=Math.floor(4*Math.random());this.sequence.push(t),this.compareSequence=Object(u["a"])(this.sequence),setTimeout((function(){e.playSequence(),e.status=e.GameStatus.Game}),1e3)}}},q=w,_=(n("5c0b"),Object(f["a"])(q,r,s,!1,null,null,null)),x=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"978d":function(e,t,n){},"9c0c":function(e,t,n){},f2b1:function(e,t,n){"use strict";var a=n("978d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.75c6e171.js.map