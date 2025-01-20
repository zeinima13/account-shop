(()=>{"use strict";var e={26697:(e,t,n)=>{var a=n(78676),r=(n(23792),n(3362),n(69085),n(9391),n(5506),n(45130)),l=n(95835),o=(n(4188),n(56768));function u(e,t){var n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(n,null,{default:(0,o.k6)((function(e){var t=e.Component;return[((0,o.uX)(),(0,o.Wv)((0,o.$y)(t)))]})),_:1})}var i=n(71241);const c={},d=(0,i.A)(c,[["render",u]]),s=d;var m=n(81387),p=(n(62010),n(24232)),f={class:"shop-container"},v={class:"sidebar"},k={class:"main-content"},g={class:"product-grid"},b={class:"product-image"},y=["src","alt"],h={class:"product-info"},_={class:"product-meta"},C={class:"price"},F={class:"stock"},w={class:"order-form"},L={class:"order-total"},V={class:"dialog-footer"};function P(e,t,n,a,r,l){var u=(0,o.g2)("el-menu-item"),i=(0,o.g2)("el-menu"),c=(0,o.g2)("el-button"),d=(0,o.g2)("el-input"),s=(0,o.g2)("el-form-item"),m=(0,o.g2)("el-input-number"),P=(0,o.g2)("el-form"),W=(0,o.g2)("el-dialog");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",v,[t[4]||(t[4]=(0,o.Lk)("h2",null,"商品分类",-1)),(0,o.bF)(i,{"default-active":a.activeCategory,class:"category-menu",onSelect:a.handleCategorySelect},{default:(0,o.k6)((function(){return[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.categories,(function(e){return(0,o.uX)(),(0,o.Wv)(u,{key:e.id,index:e.id},{default:(0,o.k6)((function(){return[(0,o.eW)((0,p.v_)(e.name),1)]})),_:2},1032,["index"])})),128))]})),_:1},8,["default-active","onSelect"])]),(0,o.Lk)("div",k,[(0,o.Lk)("div",g,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.products,(function(e){return(0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"product-card"},[(0,o.Lk)("div",b,[(0,o.Lk)("img",{src:e.image,alt:e.name},null,8,y)]),(0,o.Lk)("div",h,[(0,o.Lk)("h3",null,(0,p.v_)(e.name),1),(0,o.Lk)("div",_,[(0,o.Lk)("span",C,"¥"+(0,p.v_)(e.price),1),(0,o.Lk)("span",F,"库存: "+(0,p.v_)(e.stock),1)]),(0,o.bF)(c,{type:"primary",size:"small",onClick:function(t){return a.handleBuyClick(e)},disabled:e.stock<=0},{default:(0,o.k6)((function(){return[(0,o.eW)((0,p.v_)(e.stock>0?"立即购买":"暂时缺货"),1)]})),_:2},1032,["onClick","disabled"])])])})),128))])]),(0,o.bF)(W,{modelValue:a.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.dialogVisible=e}),title:"确认订单",width:"30%"},{footer:(0,o.k6)((function(){return[(0,o.Lk)("span",V,[(0,o.bF)(c,{onClick:t[2]||(t[2]=function(e){return a.dialogVisible=!1})},{default:(0,o.k6)((function(){return t[5]||(t[5]=[(0,o.eW)("取消")])})),_:1}),(0,o.bF)(c,{type:"primary",onClick:a.handleOrderConfirm},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.eW)(" 确认下单 ")])})),_:1},8,["onClick"])])]})),default:(0,o.k6)((function(){return[(0,o.Lk)("div",w,[(0,o.bF)(P,{ref:"orderForm",model:a.orderForm,rules:a.orderRules,"label-width":"80px"},{default:(0,o.k6)((function(){return[(0,o.bF)(s,{label:"邮箱",prop:"email"},{default:(0,o.k6)((function(){return[(0,o.bF)(d,{modelValue:a.orderForm.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.orderForm.email=e}),placeholder:"请输入邮箱地址"},null,8,["modelValue"])]})),_:1}),(0,o.bF)(s,{label:"数量",prop:"quantity"},{default:(0,o.k6)((function(){return[(0,o.bF)(m,{modelValue:a.orderForm.quantity,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.orderForm.quantity=e}),min:1,max:a.selectedProduct?a.selectedProduct.stock:1},null,8,["modelValue","max"])]})),_:1}),(0,o.Lk)("div",L," 总价: ¥"+(0,p.v_)(a.orderTotal),1)]})),_:1},8,["model","rules"])])]})),_:1},8,["modelValue"])])}n(44114);var W=n(90144),R=n(57477);const S={name:"Shop",components:{Picture:R.Picture},setup:function(){var e=(0,m.rd)(),t=(0,W.KR)("1"),n=(0,W.KR)(!1),a=(0,W.KR)(null),r=[{id:"1",name:"游戏账号"},{id:"2",name:"会员账号"},{id:"3",name:"流媒体账号"},{id:"4",name:"其他账号"}],l=[{id:"1",name:"Steam账号",price:99,stock:10,category:"1",image:"/product-images/steam.png"},{id:"2",name:"Netflix会员",price:29,stock:20,category:"3",image:"/product-images/netflix.png"},{id:"3",name:"Spotify会员",price:19,stock:15,category:"3",image:"/product-images/spotify.png"}],u=(0,W.KR)({email:"",quantity:1}),i={email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],quantity:[{required:!0,message:"请选择购买数量",trigger:"blur"}]},c=(0,o.EW)((function(){return a.value?a.value.price*u.value.quantity:0})),d=function(e){t.value=e},s=function(e){a.value=e,u.value.quantity=1,n.value=!0},p=function(){a.value&&e.push({name:"payment",query:{productId:a.value.id,quantity:u.value.quantity,email:u.value.email,amount:c.value}})};return{activeCategory:t,categories:r,products:l,dialogVisible:n,selectedProduct:a,orderForm:u,orderRules:i,orderTotal:c,handleCategorySelect:d,handleBuyClick:s,handleOrderConfirm:p}}},x=(0,i.A)(S,[["render",P],["__scopeId","data-v-73c9f1d2"]]),E=x;var O={class:"payment-container"},K={class:"payment-card"},T={class:"order-info"},q={class:"success-icon"},X={class:"order-details"},A={class:"order-item"},j={class:"order-item"},I={class:"payment-methods"},U={class:"wallet-list"},B=["onClick"],D=["src","alt"],N={class:"wallet-info"},z={class:"wallet-name"},M={class:"wallet-type"},$={class:"wallet-status"},G={class:"payment-action"};function H(e,t,n,a,r,l){var u=(0,o.g2)("CircleCheckFilled"),i=(0,o.g2)("el-icon"),c=(0,o.g2)("el-button");return(0,o.uX)(),(0,o.CE)("div",O,[(0,o.Lk)("div",K,[(0,o.Lk)("div",T,[(0,o.Lk)("div",q,[(0,o.bF)(i,null,{default:(0,o.k6)((function(){return[(0,o.bF)(u)]})),_:1})]),(0,o.Lk)("div",X,[t[2]||(t[2]=(0,o.Lk)("div",{class:"order-title"},"订单信息",-1)),(0,o.Lk)("div",A,[t[0]||(t[0]=(0,o.Lk)("span",null,"订单号：",-1)),(0,o.Lk)("span",null,(0,p.v_)(a.orderId),1)]),(0,o.Lk)("div",j,[t[1]||(t[1]=(0,o.Lk)("span",null,"付款金额：",-1)),(0,o.Lk)("span",null,(0,p.v_)(a.amount)+" USDT",1)]),t[3]||(t[3]=(0,o.Lk)("div",{class:"warning-text"}," 由于第三方充值限制规则，目前仅支持USDT充值，请耐心等待其他支付方式的开放。 ",-1))])]),(0,o.Lk)("div",I,[t[4]||(t[4]=(0,o.Lk)("div",{class:"section-title"},"USDT - 请选择您的支付钱包",-1)),(0,o.Lk)("div",U,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.wallets,(function(e){return(0,o.uX)(),(0,o.CE)("div",{key:e.id,class:(0,p.C4)(["wallet-item",{active:a.selectedWallet===e.id}]),onClick:function(t){return a.selectWallet(e)}},[(0,o.Lk)("img",{src:e.icon,alt:e.name,class:"wallet-icon"},null,8,D),(0,o.Lk)("div",N,[(0,o.Lk)("div",z,(0,p.v_)(e.name),1),(0,o.Lk)("div",M,(0,p.v_)(e.type),1),(0,o.Lk)("div",$,(0,p.v_)(e.status),1)])],10,B)})),128))])]),(0,o.Lk)("div",G,[(0,o.bF)(c,{type:"primary",class:"pay-button",onClick:a.confirmPayment},{default:(0,o.k6)((function(){return t[5]||(t[5]=[(0,o.eW)(" 已完成支付 ")])})),_:1},8,["onClick"])])])])}n(59089);var J=n(51219);const Q={name:"Payment",components:{CircleCheckFilled:R.CircleCheckFilled},setup:function(){var e=(0,m.lq)(),t=(0,m.rd)(),n=(0,W.KR)(""),a=(0,W.KR)(0),r=(0,W.KR)(null),l=(0,W.KR)([{id:1,name:"imToken",type:"TRC20 / ERC20 / BEP20",status:"【快速支付】点击充充值，请手机浏览访问该网站",icon:"/wallet-icons/imtoken.png"},{id:2,name:"TokenPocket",type:"TRC20 / ERC20 / BEP20",status:"【快速支付】点击充充值，请手机浏览访问该网站",icon:"/wallet-icons/tokenpocket.png"},{id:3,name:"欧易web3钱包",type:"TRC20 / ERC20",status:"请使用欧易web3钱包，交易确认后系统充值到账",icon:"/wallet-icons/okx.png"}]);(0,o.sV)((function(){n.value="BL"+Date.now(),a.value=e.query.amount||0}));var u=function(e){r.value=e.id},i=function(){r.value?(J.nk.success("支付确认成功！"),t.push("/")):J.nk.error("请选择支付钱包")};return{orderId:n,amount:a,wallets:l,selectedWallet:r,selectWallet:u,confirmPayment:i}}},Y=(0,i.A)(Q,[["render",H],["__scopeId","data-v-47d7832e"]]),Z=Y;var ee={class:"admin-products"},te={class:"header"},ne={class:"dialog-footer"};function ae(e,t,n,a,r,l){var u=(0,o.g2)("el-button"),i=(0,o.g2)("el-table-column"),c=(0,o.g2)("el-tag"),d=(0,o.g2)("el-table"),s=(0,o.g2)("el-input"),m=(0,o.g2)("el-form-item"),f=(0,o.g2)("el-option"),v=(0,o.g2)("el-select"),k=(0,o.g2)("el-input-number"),g=(0,o.g2)("el-form"),b=(0,o.g2)("el-dialog");return(0,o.uX)(),(0,o.CE)("div",ee,[(0,o.Lk)("div",te,[t[7]||(t[7]=(0,o.Lk)("h2",null,"商品管理",-1)),(0,o.bF)(u,{type:"primary",onClick:a.showAddDialog},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.eW)("添加商品")])})),_:1},8,["onClick"])]),(0,o.bF)(d,{data:a.products,style:{width:"100%"}},{default:(0,o.k6)((function(){return[(0,o.bF)(i,{prop:"name",label:"商品名称"}),(0,o.bF)(i,{prop:"category",label:"分类"},{default:(0,o.k6)((function(e){var t=e.row;return[(0,o.eW)((0,p.v_)(a.getCategoryName(t.category)),1)]})),_:1}),(0,o.bF)(i,{prop:"price",label:"价格",width:"100"},{default:(0,o.k6)((function(e){var t=e.row;return[(0,o.eW)(" ¥"+(0,p.v_)(t.price),1)]})),_:1}),(0,o.bF)(i,{prop:"stock",label:"库存",width:"100"}),(0,o.bF)(i,{prop:"status",label:"状态",width:"100"},{default:(0,o.k6)((function(e){var t=e.row;return[(0,o.bF)(c,{type:"active"===t.status?"success":"info"},{default:(0,o.k6)((function(){return[(0,o.eW)((0,p.v_)("active"===t.status?"上架":"下架"),1)]})),_:2},1032,["type"])]})),_:1}),(0,o.bF)(i,{label:"操作",width:"200"},{default:(0,o.k6)((function(e){var n=e.row;return[(0,o.bF)(u,{size:"small",type:"active"===n.status?"warning":"success",onClick:function(e){return a.toggleStatus(n)}},{default:(0,o.k6)((function(){return[(0,o.eW)((0,p.v_)("active"===n.status?"下架":"上架"),1)]})),_:2},1032,["type","onClick"]),(0,o.bF)(u,{size:"small",type:"primary",onClick:function(e){return a.editProduct(n)}},{default:(0,o.k6)((function(){return t[8]||(t[8]=[(0,o.eW)(" 编辑 ")])})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),(0,o.bF)(b,{title:"add"===a.dialogType?"添加商品":"编辑商品",modelValue:a.dialogVisible,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.dialogVisible=e}),width:"500px"},{footer:(0,o.k6)((function(){return[(0,o.Lk)("span",ne,[(0,o.bF)(u,{onClick:t[4]||(t[4]=function(e){return a.dialogVisible=!1})},{default:(0,o.k6)((function(){return t[9]||(t[9]=[(0,o.eW)("取消")])})),_:1}),(0,o.bF)(u,{type:"primary",onClick:a.saveProduct},{default:(0,o.k6)((function(){return t[10]||(t[10]=[(0,o.eW)("确定")])})),_:1},8,["onClick"])])]})),default:(0,o.k6)((function(){return[(0,o.bF)(g,{model:a.currentProduct,"label-width":"100px"},{default:(0,o.k6)((function(){return[(0,o.bF)(m,{label:"商品名称"},{default:(0,o.k6)((function(){return[(0,o.bF)(s,{modelValue:a.currentProduct.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.currentProduct.name=e})},null,8,["modelValue"])]})),_:1}),(0,o.bF)(m,{label:"分类"},{default:(0,o.k6)((function(){return[(0,o.bF)(v,{modelValue:a.currentProduct.category,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.currentProduct.category=e}),style:{width:"100%"}},{default:(0,o.k6)((function(){return[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.categories,(function(e){return(0,o.uX)(),(0,o.Wv)(f,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,o.bF)(m,{label:"价格"},{default:(0,o.k6)((function(){return[(0,o.bF)(k,{modelValue:a.currentProduct.price,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.currentProduct.price=e}),min:0},null,8,["modelValue"])]})),_:1}),(0,o.bF)(m,{label:"库存"},{default:(0,o.k6)((function(){return[(0,o.bF)(k,{modelValue:a.currentProduct.stock,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.currentProduct.stock=e}),min:0},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["title","modelValue"])])}var re=n(41034);n(50113),n(48980),n(26099);const le={name:"AdminProducts",setup:function(){var e=(0,W.KR)([{id:1,name:"Steam账号",category:"game",price:99,stock:10,status:"active"},{id:2,name:"Netflix会员",category:"video",price:29,stock:20,status:"active"},{id:3,name:"Spotify会员",category:"music",price:19,stock:15,status:"active"}]),t=[{id:"game",name:"游戏账号"},{id:"video",name:"视频会员"},{id:"music",name:"音乐会员"},{id:"other",name:"其他账号"}],n=(0,W.KR)(!1),a=(0,W.KR)("add"),r=(0,W.Kh)({id:null,name:"",category:"",price:0,stock:0,status:"active"}),l=function(e){var n=t.find((function(t){return t.id===e}));return n?n.name:e},o=function(){a.value="add",Object.assign(r,{id:null,name:"",category:"",price:0,stock:0,status:"active"}),n.value=!0},u=function(e){a.value="edit",Object.assign(r,e),n.value=!0},i=function(){if("add"===a.value){var t=(0,re.A)((0,re.A)({},r),{},{id:e.value.length+1});e.value.push(t)}else{var l=e.value.findIndex((function(e){return e.id===r.id}));-1!==l&&(e.value[l]=(0,re.A)({},r))}n.value=!1,J.nk.success("".concat("add"===a.value?"添加":"编辑","商品成功"))},c=function(e){e.status="active"===e.status?"inactive":"active",J.nk.success("商品已".concat("active"===e.status?"上架":"下架"))};return{products:e,categories:t,dialogVisible:n,dialogType:a,currentProduct:r,getCategoryName:l,showAddDialog:o,editProduct:u,saveProduct:i,toggleStatus:c}}},oe=(0,i.A)(le,[["render",ae],["__scopeId","data-v-1d96aa99"]]),ue=oe;var ie=[{path:"/",name:"shop",component:E},{path:"/payment",name:"payment",component:Z},{path:"/admin/products",name:"admin-products",component:ue}],ce=(0,m.aE)({history:(0,m.Bt)("./"),routes:ie,scrollBehavior:function(e,t,n){return n||{top:0}}});const de=ce;for(var se=(0,r.Ef)(s),me=0,pe=Object.entries(R);me<pe.length;me++){var fe=(0,a.A)(pe[me],2),ve=fe[0],ke=fe[1];se.component(ve,ke)}se.use(l.A),se.use(de),se.mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,(()=>{var e=[];n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,r,l]=e[d],u=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(u=!1,l<o&&(o=l));if(u){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,r,l]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,u,i]=a,c=0;if(o.some((t=>0!==e[t]))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var d=i(n)}for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},a=self["webpackChunkaccount_shop"]=self["webpackChunkaccount_shop"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[504],(()=>n(26697)));a=n.O(a)})();
//# sourceMappingURL=app.c672786a.js.map