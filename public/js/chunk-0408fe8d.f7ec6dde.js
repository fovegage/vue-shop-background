(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0408fe8d"],{"0aef":function(t,i,s){"use strict";var e=s("4382");t.exports=function(){var t=e(this),i="";return t.global&&(i+="g"),t.ignoreCase&&(i+="i"),t.multiline&&(i+="m"),t.dotAll&&(i+="s"),t.unicode&&(i+="u"),t.sticky&&(i+="y"),i}},"0cea":function(t,i,s){"use strict";var e=s("9f87"),r=s("1905"),a=s("f17f"),n=s("56a8"),o=s("eeea"),c=s("a1f8"),l=s("eff6"),u=s("d874"),d=s("6597"),v=s("6187"),p=s("8dc5"),f=[],h=f.sort,g=o((function(){f.sort(void 0)})),m=o((function(){f.sort(null)})),b=l("sort"),C=!o((function(){if(v)return v<70;if(!(u&&u>3)){if(d)return!0;if(p)return p<603;var t,i,s,e,r="";for(t=65;t<76;t++){switch(i=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(e=0;e<47;e++)f.push({k:i+e,v:s})}for(f.sort((function(t,i){return i.v-t.v})),e=0;e<f.length;e++)i=f[e].k.charAt(0),r.charAt(r.length-1)!==i&&(r+=i);return"DGBEFHACIJK"!==r}})),_=g||!m||!b||!C,w=function(t){return function(i,s){return void 0===s?-1:void 0===i?1:void 0!==t?+t(i,s)||0:String(i)>String(s)?1:-1}};e({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&r(t);var i=a(this);if(C)return void 0===t?h.call(i):h.call(i,t);var s,e,o=[],l=n(i.length);for(e=0;e<l;e++)e in i&&o.push(i[e]);o=c(o,w(t)),s=o.length,e=0;while(e<s)i[e]=o[e++];while(e<l)delete i[e++];return i}})},"1eb1":function(t,i,s){},"239c":function(t,i,s){"use strict";var e=s("6f63"),r=s("4382"),a=s("eeea"),n=s("0aef"),o="toString",c=RegExp.prototype,l=c[o],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&e(RegExp.prototype,o,(function(){var t=r(this),i=String(t.source),s=t.flags,e=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?n.call(t):s);return"/"+i+"/"+e}),{unsafe:!0})},"2c5b":function(t,i,s){"use strict";s("1eb1")},6597:function(t,i,s){var e=s("b579");t.exports=/MSIE|Trident/.test(e)},"8d7e":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"detail"},[t.errorFlag?s("div",{staticClass:"container"},[s("div",{staticClass:"product"},[s("div",{staticClass:"crumb"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v(t._s(t.good.cateName))]),s("el-breadcrumb-item",[t._v(t._s(t.good.title))])],1)],1),s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.sliderList,(function(t,i){return s("swiper-slide",{key:i},[s("a",{attrs:{href:"javascript:;"}},[s("img",{attrs:{src:t}})])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),s("div",{staticClass:"right"},[s("h2",{staticClass:"item-title",domProps:{innerHTML:t._s(t.good.title)}}),s("p",{staticClass:"item-info"},[t._v(" "+t._s(t.good.desc)+" ")]),s("div",{staticClass:"item-price"},[t._v(t._s(t.soldPrice)+"元 ")]),s("div",{staticClass:"line"}),s("div",{staticClass:"item-version"},[s("h2",[t._v("产品")]),s("div",{staticClass:"info-list"},t._l(t.good.params,(function(i){return s("div",{key:i.id,staticClass:"phone",class:{checked:t.version===i.id},on:{click:function(s){return t.getVersion(i.id)}}},[t._l(i.params,(function(i){return[t._v(" "+t._s(i["value"])+" ")]}))],2)})),0)]),s("div",{staticClass:"item-nums"},[s("h2",[t._v("数量")]),s("el-input-number",{staticClass:"num-right",attrs:{min:1,max:10},on:{change:t.handleChange},model:{value:t.num,callback:function(i){t.num=i},expression:"num"}})],1),t.productName?[s("div",{staticClass:"total"},[s("div",{staticClass:"phone-info"},[s("div",{staticClass:"fl",domProps:{innerHTML:t._s(t.productName)}}),s("div",{staticClass:"fr"},[t._v("价格："+t._s(t.productPrice*t.num)+"元")])])])]:t._e(),s("div",{staticClass:"btn-submit"},[0===t.stockStatus?[s("div",{staticClass:"btn-1",on:{click:function(i){return t.goToOrder(t.version)}}},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("立即购买")])]),s("div",{staticClass:"btn-2",on:{click:function(i){return t.addCart(t.version)}}},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("加入购物车")])])]:[s("div",{staticClass:"btn-1",staticStyle:{"background-color":"#999999"}},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(i){return t.outStcok(t.good.id)}}},[t._v("库存不足")])]),s("div",{staticClass:"btn-2",on:{click:function(i){return t.notifyGood(t.good.id)}}},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("到货通知")])])],this.$store.state.token?[t.good.is_col?[s("div",{staticClass:"btn-3"},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:t.collected}},[t._v("已搜藏")])])]:[s("div",{staticClass:"btn-3",on:{click:function(i){return t.collectProduct(t.good.id)}}},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("搜藏")])])]]:t._e()],2)],2)])]),s("div",{staticClass:"line"}),s("div",{staticClass:"desc"},[s("div",{staticClass:"left"},[s("div",{staticClass:"hot"},[s("div",{staticClass:"hot-title"},[t._v("热卖推荐")]),s("div",{staticClass:"new-list"},t._l(t.sortList,(function(i,e){return s("div",{key:e,staticClass:"shop-item"},[s("div",{staticClass:"item-img"},[s("a",{attrs:{href:"/product/"+i.id,target:"_blank"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.cover,expression:"hot.cover"}],attrs:{alt:i.title}})])]),s("div",{staticClass:"item-info"},[s("a",{attrs:{href:"/product/"+i.id,target:"_blank"}},[s("h3",{staticClass:"title"},[t._v(t._s(i.title))])]),s("p",{staticClass:"price"},[t._v(t._s(i.price)+"元")])])])})),0)])]),s("div",{staticClass:"right"},[s("div",{staticClass:"right-title"},[t._v("商品详情")]),s("div",{staticClass:"right-content",domProps:{innerHTML:t._s(t.good.detail)}})])])]):s("div",{staticClass:"error"},[t._m(0)]),s("modal",{attrs:{title:"提示",sureText:"查看购物车",btnType:"1",modalType:"middle",showModal:t.showModal},on:{submit:t.goToCart,cancel:function(i){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[s("p",[t._v("商品添加成功！")])]},proxy:!0}])})],1)},r=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"message"},[s("div",{staticClass:"l1"},[t._v("商品已失效，请看看其他商品吧~")]),s("div",{staticClass:"l2"},[s("p",[t._v("建议您：")]),s("p",[t._v(" 1、适当减少筛选条件，可以获得更多结果")]),s("p",[t._v(" 2、尝试其他产品ID")])])])}],a=(s("12c4"),s("7c3e"),s("06f5")),n=s.n(a),o=(s("147f"),s("239c"),s("6931"),s("bedb"),s("5580"),s("389c"),s("0cea"),s("714b")),c=s("6fe8"),l=(s("488c"),{name:"product",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],Modal:o["a"]},data:function(){return{t1:[{"版本类型":"中国大陆","存储容量":"16GB","套餐类型":"套餐一","机身颜色":"黑色",skuId:111},{"版本类型":"中国大陆","存储容量":"32GB","套餐类型":"套餐二","机身颜色":"红色",skuId:222}],t2:["版本类型","存储容量","套餐类型","机身颜色"],showModal:!1,num:1,version:"",swiperOptions:{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},sliderList:[],good:{marketPrice:[""],soldPrice:[""],params:[]},errorFlag:!0,sortList:[]}},computed:{marketPrice:function(){var t=this.good.marketPrice;return 1===t.length?t[0][0]:t[0].toString()+"~"+t.pop().toString()},soldPrice:function(){var t=this.good.soldPrice;return 1===t.length?t[0][0]:t[0].toString()+"~"+t.pop().toString()},productName:function(){var t=this;try{return this.getTitle(this.good.params.filter((function(i){return i.id===t.version}))[0]["params"])}catch(i){return""}},productPrice:function(){var t=this;try{return this.good.params.filter((function(i){return i.id===t.version}))[0]["sold_price"]}catch(i){return""}},stockStatus:function(){var t=this;try{return this.good.params.filter((function(i){return i.id===t.version}))[0]["status"]}catch(i){return 0}}},methods:{getVersion:function(t){var i=this;this.version=t,this.axios.get("/goods/".concat(t,"/")).then((function(t){i.sliderList=[t.data.cover]}))},getTitle:function(t){return console.log(t),t["value"]},swapGood:function(t){console.log(t)},getDict:function(t){var i=[{"版本类型":"中国大陆","存储容量":"16GB","套餐类型":"套餐一","机身颜色":"黑色"},{"版本类型":"中国大陆","存储容量":"32GB","套餐类型":"套餐二","机身颜色":"红色"}],s={"存储类型":["16GB","32GB"],"套餐类型":["套餐一","套餐二"],"机身颜色":["红色","黑色"],skuId:[]};console.log(t);var e=Object.keys(i[0]);console.log(e);for(var r={},a=[],n=0;n<i.length;n++){console.log(i[n]);for(var o=0;o<e.length;o++)Object.prototype.hasOwnProperty.call(r,e[o])?(a.push(i[n][e[o]]),r[e[o]]=a):r[e[o]]=a}return console.log(r),s},getSortProduct:function(){var t=this;this.axios.get("/products/",{params:{is_new:1}}).then((function(i){t.sortList=i.data.list.map((function(t){return{id:t.id,title:t.title,cover:t.pic,price:t.min_price}}))}))},goToOrder:function(t){if(""!==t){console.log(t,this.num);var i=this.$router.resolve({name:"confirm",query:{gid:t,num:this.num}});window.open(i.href)}else n.a.warning("请选择产品或规格")},outStcok:function(t){console.log(t),n.a.warning("该商品已售罄，正在补货")},notifyGood:function(t){console.log(t),n.a.success("商品到货后我们将以短信的形式通知您")},collectProduct:function(t){var i=this;console.log(t),this.axios.post("/collect/",{product:t}).then((function(){n.a.success("搜藏成功"),i.getProduct(t)}))},collected:function(){n.a.warning("该商品已收藏")},getCartNum:function(){var t=this;this.axios.get("/carts/").then((function(i){t.$store.dispatch("saveCartNums",i.data.total)}))},addCart:function(t){var i=this;""!==t?this.axios.post("/carts/",{csrftoken:this.$cookie.get("csrftoken"),goods:t,nums:this.num,is_select:!0}).then((function(t){console.log(t),i.showModal=!0,i.getCartNum()})):n.a.warning("请选择产品或规格")},goToCart:function(){var t=this.$router.resolve({path:"/cart"});window.open(t.href,"_blank")},handleChange:function(t){10===t&&n.a.warning("最大购买数量为10"),this.num=t},getProduct:function(t){var i=this;this.axios.get("/products/"+t+"/").then((function(t){i.good=[t.data].map((function(t){return{id:t.id,cateName:t.category.name,params:t.goods.map((function(t){return{id:t.id,params:t.params,status:t.is_sold,sold_price:t.sold_price}})),brandId:t.brand.id,brandLogo:t.brand.image,brandName:t.brand.en_name,title:t.title,sn:t.sn,desc:"",is_col:t.is_col,detail:t.detail,marketPrice:t.goods.map((function(t){return[t.market_price].sort()})),soldPrice:t.goods.map((function(t){return[t.sold_price].sort()}))}}))[0],i.sliderList=[t.data.pic],document.title=t.data.title+" - JapanHui"}))},init:function(){var t=this.$route.params;Object.prototype.hasOwnProperty.call(t,"id")&&""!==t.id?this.getProduct(t.id):this.errorFlag=!1}},mounted:function(){this.init(),this.getSortProduct()}}),u=l,d=(s("2c5b"),s("4ac2")),v=Object(d["a"])(u,e,r,!1,null,null,null);i["default"]=v.exports},"8dc5":function(t,i,s){var e=s("b579"),r=e.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},a1f8:function(t,i){var s=Math.floor,e=function(t,i){var n=t.length,o=s(n/2);return n<8?r(t,i):a(e(t.slice(0,o),i),e(t.slice(o),i),i)},r=function(t,i){var s,e,r=t.length,a=1;while(a<r){e=a,s=t[a];while(e&&i(t[e-1],s)>0)t[e]=t[--e];e!==a++&&(t[e]=s)}return t},a=function(t,i,s){var e=t.length,r=i.length,a=0,n=0,o=[];while(a<e||n<r)a<e&&n<r?o.push(s(t[a],i[n])<=0?t[a++]:i[n++]):o.push(a<e?t[a++]:i[n++]);return o};t.exports=e},d874:function(t,i,s){var e=s("b579"),r=e.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]}}]);
//# sourceMappingURL=chunk-0408fe8d.f7ec6dde.js.map