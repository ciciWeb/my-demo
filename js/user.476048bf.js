(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0eaf":function(e,t,c){"use strict";var o=c("7a8b");const a=e=>(Object(o["pushScopeId"])("data-v-81415816"),e=e(),Object(o["popScopeId"])(),e),n={class:"simple-header"},l={key:1},s={class:"simple-header-name"},r=a(()=>Object(o["createElementVNode"])("i",{class:"nbicon nbmore"},null,-1));function i(e,t,c,a,i,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("header",n,[a.isback?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",l,"      ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{key:0,class:"backicon",onClick:t[0]||(t[0]=(...e)=>a.goBack&&a.goBack(...e))})),Object(o["createElementVNode"])("div",s,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.name)+" ",1),Object(o["renderSlot"])(e.$slots,"name",{},void 0,!0)]),r])}var d=c("6a81"),b={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(e,t){const c=Object(o["ref"])(e.noback),a=Object(d["d"])(),n=()=>{e.back?a.push({path:e.back}):a.go(-1),t.emit("callback")};return{goBack:n,isback:c}}},m=(c("2f24"),c("b3f2")),O=c.n(m);const j=O()(b,[["render",i],["__scopeId","data-v-81415816"]]);t["a"]=j},1511:function(e,t,c){"use strict";c.r(t);var o=c("7a8b"),a=c("c338"),n=c.n(a),l=c("6e6d"),s=c.n(l);const r=e=>(Object(o["pushScopeId"])("data-v-830a14f6"),e=e(),Object(o["popScopeId"])(),e),i={class:"user-box"},d={class:"pageContent"},b={class:"topPage"},m={class:"message"},O=r(()=>Object(o["createElementVNode"])("img",{src:n.a},null,-1)),j={class:"user-info"},u={class:"info"},p=r(()=>Object(o["createElementVNode"])("div",{class:"avator"},[Object(o["createElementVNode"])("img",{src:s.a})],-1)),h={class:"user-desc"},v={class:"nickName"},g=Object(o["createTextVNode"])("ID"),V={class:"user-list"},k={class:"about"};function N(e,t,c,a,n,l){const s=Object(o["resolveComponent"])("van-badge"),r=Object(o["resolveComponent"])("s-header"),N=Object(o["resolveComponent"])("van-cell"),E=Object(o["resolveComponent"])("nav-bar");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(r,null,{name:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",m,[Object(o["createVNode"])(s,{dot:"",onClick:a.gotoNotice},{default:Object(o["withCtx"])(()=>[O]),_:1},8,["onClick"])])]),_:1}),Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("div",u,[p,Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",v,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.user.nickName)+" ",1),Object(o["createElementVNode"])("div",{class:"user-settings",onClick:t[0]||(t[0]=(...e)=>a.gotoSetting&&a.gotoSetting(...e))})]),Object(o["createElementVNode"])("div",null,[g,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.user.uid),1),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.user.telephone),1)])])])])]),Object(o["createElementVNode"])("div",V,[Object(o["createVNode"])(N,{title:"我的订单","is-link":"",onClick:t[1]||(t[1]=e=>a.goTo("order"))}),Object(o["createVNode"])(N,{title:"能量值","is-link":"",value:"540",onClick:t[2]||(t[2]=e=>a.goTo("power"))}),Object(o["createVNode"])(N,{title:"邀请有礼","is-link":"",onClick:t[3]||(t[3]=e=>a.goTo("Invitation"))})]),Object(o["createElementVNode"])("div",k,[Object(o["createVNode"])(N,{title:"关于燃象","is-link":"",onClick:t[4]||(t[4]=e=>a.goTo("about"))})])]),Object(o["createVNode"])(E)])}var E=c("d000"),w=c("0eaf"),y=c("6a81"),C={components:{navBar:E["a"],sHeader:w["a"]},setup(){const e=Object(y["d"])(),t=Object(o["reactive"])({user:{},loading:!0});Object(o["onMounted"])(async()=>{t.user={nickName:"Michelle",telephone:"189*****999",uid:"43888888"},t.loading=!1});const c=()=>{e.go(-1)},a=()=>{e.push({path:"/setting"})},n=(t,c)=>{e.push({path:t,query:c||{}})},l=()=>{e.push({path:"/notice"})};return{...Object(o["toRefs"])(t),goBack:c,goTo:n,gotoNotice:l,gotoSetting:a}}},f=(c("730d"),c("a879"),c("b3f2")),B=c.n(f);const x=B()(C,[["render",N],["__scopeId","data-v-830a14f6"]]);t["default"]=x},"20c6":function(e,t,c){"use strict";c("82e6")},"2f24":function(e,t,c){"use strict";c("cf75")},"3fd0":function(e,t,c){"use strict";c.r(t);var o=c("7a8b"),a=c("b824"),n=c.n(a),l=c("0967"),s=c.n(l),r=c("8474"),i=c.n(r);const d=e=>(Object(o["pushScopeId"])("data-v-378ab214"),e=e(),Object(o["popScopeId"])(),e),b={key:0,class:"resultPage"},m={key:0,class:"head-title"},O=d(()=>Object(o["createElementVNode"])("div",{class:"title"},[Object(o["createElementVNode"])("img",{src:n.a})],-1)),j={class:"subTitle"},u={key:1,class:"head-title"},p=d(()=>Object(o["createElementVNode"])("div",{class:"title"},[Object(o["createElementVNode"])("img",{src:s.a})],-1)),h=d(()=>Object(o["createElementVNode"])("div",{class:"subTitle"}," 抱歉，充值失败。请返回并重试。 ",-1)),v=[p,h],g={class:"buttonGroup"},V={class:"button"},k=Object(o["createTextVNode"])(" 返回 "),N={key:1,class:"powerPageContent"},E={class:"topcontent"},w={class:"message"},y=Object(o["createTextVNode"])(" 能量值 "),C={class:"icon"},f={class:"detail-content"},B={class:"van-image-top"},x=d(()=>Object(o["createElementVNode"])("img",{src:i.a},null,-1)),S={class:"powerValue"},_={class:"payWay"},T={class:"tab-title"},D=["src"],I=d(()=>Object(o["createElementVNode"])("div",{class:"tabContent_content"},null,-1)),A={class:"priceField"},R={class:"buttongroup"},H={class:"button"},L={key:0,class:"loading_payButton"},q=d(()=>Object(o["createElementVNode"])("p",null,"等到支付完成",-1)),M=d(()=>Object(o["createElementVNode"])("div",{class:"dotting"},[Object(o["createElementVNode"])("span"),Object(o["createElementVNode"])("span"),Object(o["createElementVNode"])("span")],-1)),P=[q,M],Y=Object(o["createTextVNode"])("充值 "),U={class:"exchangeCode"},F=Object(o["createTextVNode"])("输入兑换码"),W={class:"powerList"},$=d(()=>Object(o["createElementVNode"])("div",{class:"title"},"变动记录",-1)),z={class:"items"},J={class:"project_dialog"},G={key:0,class:"title"},Q={key:1,class:"title"},K={key:2,class:"back"},X={key:3,class:"content"},Z=d(()=>Object(o["createElementVNode"])("p",null,"兑换码最终解释权归燃象所有",-1)),ee={key:1,class:"button active"},te={key:4,class:"content captionContent"},ce={class:"items"},oe={class:"question"},ae={class:"answer"},ne={class:"handlebutton"},le={class:"captionHandleButton"};function se(e,t,c,a,n,l){const s=Object(o["resolveComponent"])("van-button"),r=Object(o["resolveComponent"])("van-overlay"),i=Object(o["resolveComponent"])("van-icon"),d=Object(o["resolveComponent"])("s-header"),p=Object(o["resolveComponent"])("van-tab"),h=Object(o["resolveComponent"])("van-tabs"),q=Object(o["resolveComponent"])("van-field"),M=Object(o["resolveComponent"])("svg-icon"),se=Object(o["resolveComponent"])("van-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["powerPage",{showOverlay:1==e.showOverlay}])},[1==e.payResult?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b,["success"==e.handletype?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[O,Object(o["createElementVNode"])("div",j," 当前能量值 "+Object(o["toDisplayString"])(e.powerValue),1)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",u,v)),Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("div",V,[Object(o["createVNode"])(s,{block:"",onClick:a.back},{default:Object(o["withCtx"])(()=>[k]),_:1},8,["onClick"])])])])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",N,[Object(o["createElementVNode"])("div",E,[Object(o["createVNode"])(r,{show:e.showOverlay},null,8,["show"]),Object(o["createVNode"])(d,null,{name:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{show:e.showOverlay},null,8,["show"]),Object(o["createElementVNode"])("div",w,[y,Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(i,{name:"question",onClick:a.showCaption},null,8,["onClick"])])])]),_:1}),Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("div",B,[x,Object(o["createElementVNode"])("div",S,Object(o["toDisplayString"])(e.powerValue),1)]),Object(o["createElementVNode"])("div",_,[Object(o["createVNode"])(h,{active:e.active,"onUpdate:active":t[0]||(t[0]=t=>e.active=t),class:"tabs",swipeable:!0},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.payWayTabs,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:t},{title:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",T,[Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("img",{src:e.img},null,8,D)]),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.title),1)])]),default:Object(o["withCtx"])(()=>[I]),_:2},1024))),128))]),_:1},8,["active"])])]),Object(o["createElementVNode"])("div",A,[Object(o["createVNode"])(q,{clearable:"",class:"cell-phone",modelValue:e.rechargeAmount,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.rechargeAmount=t),a.onRechargeAmountInput],type:"number",label:""},null,8,["modelValue","onUpdate:modelValue"]),Object(o["createVNode"])(M,{"icon-class":"money",class:"money"})])]),Object(o["createElementVNode"])("div",R,[Object(o["createVNode"])(r,{show:e.showOverlay},null,8,["show"]),Object(o["createElementVNode"])("div",H,[Object(o["createElementVNode"])("div",{class:"button-content",onClick:t[2]||(t[2]=(...e)=>a.payHandle&&a.payHandle(...e))},[1==e.showOverlay?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",L,P)):(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,class:"payButton",disabled:0==e.rechargeAmountStatus},{default:Object(o["withCtx"])(()=>[Y]),_:1},8,["disabled"]))])]),Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("span",{onClick:t[3]||(t[3]=(...e)=>a.showexchangeCode&&a.showexchangeCode(...e))},[F,Object(o["createVNode"])(i,{name:"question"})])])]),Object(o["createElementVNode"])("div",W,[Object(o["createVNode"])(r,{show:e.showOverlay},null,8,["show"]),$,Object(o["createElementVNode"])("div",z,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.powerList,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"item",key:t},[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(e.info),1),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(e.value),1)]),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(e.time),1)]))),128))])])])),Object(o["createVNode"])(se,{show:e.modal_show,"onUpdate:show":t[8]||(t[8]=t=>e.modal_show=t),title:"",className:"project_model_pop pay_model_pop",overlay:"",overlayClass:"project_model_pop_overlay",showCancelButton:!1,showConfirmButton:!1},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",J,["exchangeCode"==e.modal_show_type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",G," 兑换码 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Q," 能力值 ")),"exchangeCode"==e.modal_show_type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",K,[Object(o["createVNode"])(i,{name:"cross",size:"24",onClick:t[4]||(t[4]=t=>e.modal_show=!1)})])):Object(o["createCommentVNode"])("",!0),"exchangeCode"==e.modal_show_type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",X,[Object(o["createVNode"])(q,{modelValue:e.exchangeCode,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.exchangeCode=t),a.onInput],name:"exchangeCode",clearable:"","clear-trigger":"always",label:"",placeholder:"输入兑换码"},null,8,["modelValue","onUpdate:modelValue"]),Z,"1"==e.exchangeStatus||"0"==e.exchangeStatus?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(["button",{active:"1"==e.exchangeStatus}]),onClick:t[6]||(t[6]=(...e)=>a.exchangeCodeHandle&&a.exchangeCodeHandle(...e))},[Object(o["createVNode"])(M,{className:"arrow-right","icon-class":"arrow-right"})],2)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ee,[Object(o["createVNode"])(M,{className:"svgicon","icon-class":"2"==e.exchangeStatus?"right":"error"},null,8,["icon-class"]),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])("2"==e.exchangeStatus?"兑换成功":"兑换码错误"),1)]))])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",te,[Object(o["createElementVNode"])("div",ce,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.captionList,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"item",key:t},[Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("span",null,"Q"+Object(o["toDisplayString"])(t+1)+":",1),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.question),1)]),Object(o["createElementVNode"])("div",ae,Object(o["toDisplayString"])(e.answer),1)]))),128))]),Object(o["createElementVNode"])("div",ne,[Object(o["createElementVNode"])("div",le,[Object(o["createVNode"])(M,{className:"right",onClick:e.captionHandle,"icon-class":"right"},null,8,["onClick"])]),Object(o["createElementVNode"])("p",{onClick:t[7]||(t[7]=t=>e.modal_show=!1)},"我清楚了")])]))])]),_:1},8,["show"])],2)}c("6d73");var re=c("778e"),ie=c("6a81"),de=c("0eaf"),be={setup(){const e=Object(ie["d"])(),{appContext:t}=Object(o["getCurrentInstance"])(),a=Object(o["reactive"])({powerValue:450,rechargeAmount:"",rechargeAmountStatus:!1,payResult:!1,show:!1,modal_show_type:"",showOverlay:!1,exchangeCode:"",remindTime:0,exchangeStatus:"0",handletype:"",onsalecheck:!1,captionList:[{question:"什么是能量值？",answer:"能量值反映了您在燃象平台中的生命力指数，能量值越高，越活跃。"},{question:"能量值有什么用？",answer:"您可以通过能量值参与特别的线下活动或是兑换实物奖励。"},{question:"能量值有有效期吗？",answer:"能量值为终身有效，最终解释权归燃象所有。"}],powerList:[{info:"充值（支付宝）",value:"+200",time:"2022-09-08 11:01"},{info:"获得第一个燃身份",value:"+150",time:"2022-09-06 15:31"},{info:"消费兑换",value:"-200",time:"2022-09-03 4:21"},{info:"新用户奖励",value:"+300",time:"2022-09-01 00:01"}],product:{},modal_show:!1,active:0,payWayTabs:[{title:"银行卡",img:c("1ac9")},{title:"微信支付",img:c("1f94")},{title:"支付宝",img:c("df00")}]});Object(o["onMounted"])(async()=>{let e={author:"Mee Cats",company:"燃象",id:5,title:"Astronaut",pic:c("57f8"),price:"69.9"};const{data:t}={resultCode:200,message:"SUCCESS",data:e};a.product=t}),Object(o["nextTick"])(()=>{const e=document.querySelector(".detail-content");e.scrollTop=0});const n=()=>{e.go(-1)},l=()=>{""==a.exchangeCode?a.exchangeStatus="0":a.exchangeStatus="1"},s=()=>{"111"==a.exchangeCode?(a.exchangeStatus="2",a.powerValue=parseInt(a.powerValue)+10,a.powerList.push({info:"消费兑换",value:"+10",time:t.config.globalProperties.$moment(new Date).format("YYYY.MM.DD hh:mm")})):a.exchangeStatus="3"},r=t=>{e.push({path:"/powerPage/"+t.id})},i=e=>{a.remindTime=e},d=()=>{a.show=!0},b=()=>{a.show=!1},m=()=>{0!=a.rechargeAmountStatus&&(1!=a.showOverlay?(a.showOverlay=!0,setTimeout(()=>{a.powerValue=parseInt(a.powerValue)+parseInt(a.rechargeAmount),a.showOverlay=!1,a.payResult=!0,a.handletype="success",a.powerList.push({info:`充值（${a.payWayTabs[a.active].title}）`,value:"+"+a.rechargeAmount,time:t.config.globalProperties.$moment(new Date).format("YYYY.MM.DD hh:mm")})},5e3)):Object(re["a"])("正在处理请稍等"))},O=()=>{a.handletype="",a.payResult=!1,a.rechargeAmount=""},j=()=>{""==a.rechargeAmount?a.rechargeAmountStatus=!1:a.rechargeAmountStatus=!0},u=()=>{a.modal_show=!0,a.exchangeCode="",a.exchangeStatus="0",a.modal_show_type="exchangeCode"},p=()=>{a.modal_show=!0,a.modal_show_type=""};return{...Object(o["toRefs"])(a),goBack:n,showRemindersDialog:d,confirmRemindDialog:b,selRemindTime:i,goToArtistProducts:r,payHandle:m,back:O,onInput:l,exchangeCodeHandle:s,onRechargeAmountInput:j,showexchangeCode:u,showCaption:p}},components:{sHeader:de["a"]}},me=(c("6573"),c("20c6"),c("b3f2")),Oe=c.n(me);const je=Oe()(be,[["render",se],["__scopeId","data-v-378ab214"]]);t["default"]=je},6573:function(e,t,c){"use strict";c("e942")},"730d":function(e,t,c){"use strict";c("ad7d6")},"82e6":function(e,t,c){},a879:function(e,t,c){"use strict";c("d157")},ad7d6:function(e,t,c){},cf75:function(e,t,c){},d157:function(e,t,c){},e942:function(e,t,c){}}]);
//# sourceMappingURL=user.476048bf.js.map