(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25dced12"],{"0aef":function(t,e,a){"use strict";var s=a("4382");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2871:function(t,e,a){"use strict";var s=a("43b5"),i=a("4382"),r=a("8a56"),c=a("8767"),n=a("5911");s("search",1,(function(t,e,a){return[function(e){var a=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var r=i(t),o=String(this),l=r.lastIndex;c(l,0)||(r.lastIndex=0);var u=n(r,o);return c(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},"43b5":function(t,e,a){"use strict";a("9896");var s=a("6f63"),i=a("c3c5"),r=a("eeea"),c=a("b63d"),n=a("f861"),o=c("species"),l=RegExp.prototype,u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=c("replace"),h=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),v=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,p){var f=c(t),_=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=_&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!_||!g||"replace"===t&&(!u||!d||h)||"split"===t&&!v){var m=/./[f],b=a(f,""[t],(function(t,e,a,s,r){var c=e.exec;return c===i||c===l.exec?_&&!r?{done:!0,value:m.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=b[0],y=b[1];s(String.prototype,t,x),s(l,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}p&&n(l[f],"sham",!0)}},5911:function(t,e,a){var s=a("f219"),i=a("c3c5");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6fc4":function(t,e,a){},8767:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},9896:function(t,e,a){"use strict";var s=a("9f87"),i=a("c3c5");s({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},a239:function(t,e,a){"use strict";var s=a("eeea");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},c3c5:function(t,e,a){"use strict";var s=a("0aef"),i=a("a239"),r=a("d1ac"),c=RegExp.prototype.exec,n=r("native-string-replace",String.prototype.replace),o=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(o=function(t){var e,a,i,r,o=this,p=u&&o.sticky,h=s.call(o),v=o.source,f=0,_=t;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),_=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(v="(?: "+v+")",_=" "+_,f++),a=new RegExp("^(?:"+v+")",h)),d&&(a=new RegExp("^"+v+"$(?!\\s)",h)),l&&(e=o.lastIndex),i=c.call(p?a:o,_),p?i?(i.input=i.input.slice(f),i[0]=i[0].slice(f),i.index=o.lastIndex,o.lastIndex+=i[0].length):o.lastIndex=0:l&&i&&(o.lastIndex=o.global?i.index+i[0].length:e),d&&i&&i.length>1&&n.call(i[0],a,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i}),t.exports=o},e1f6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[t.errorFlag?a("div",{staticClass:"container"},[a("div",{staticClass:"crumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v(t._s(t.bread))])],1)],1),t.is_brand?a("div",{staticClass:"brand"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.brandInfo.image,alt:""}})]),a("div",{staticClass:"right"},[a("h2",[t._v(t._s(t.brandInfo.zh_name)+"（"+t._s(t.brandInfo.en_name)+"）")]),a("p",[t._v(t._s(t.brandInfo.desc))])])]):t._e(),a("div",{staticClass:"sort"},[a("div",{staticClass:"left"},[a("p",{class:{active:"default"===t.sortActive},on:{click:function(e){return t.sortRes("default")}}},[t._v(t._s(t.status1))]),a("p",{class:{active:"price"===t.sortActive},on:{click:function(e){return t.sortRes("price")}}},[t._v(t._s(t.status3))]),a("p",{class:{active:"num"===t.sortActive},on:{click:function(e){return t.sortRes("num")}}},[t._v(t._s(t.status2))])]),a("div",{staticClass:"right"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("仅看推荐")]),a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("仅看新品")]),a("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("仅看有货")])],1)]),a("div",{staticClass:"good-list"},[a("div",{staticClass:"new-list"},t._l(t.productList,(function(e,s){return a("div",{key:s,staticClass:"shop-item"},[e.is_new?a("span",{staticClass:"flag"},[t._v("新品")]):t._e(),a("div",{staticClass:"item-img"},[a("a",{attrs:{href:"/product/"+e.id,target:"_blank"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"product.cover"}],attrs:{alt:e.title}})])]),a("div",{staticClass:"item-info"},[a("h3",{staticClass:"title"},[t._v(t._s(e.title.slice(0,35))),e.title.length>38?a("span",[t._v("...")]):t._e()]),a("p",{staticClass:"price"},[t._v(t._s(e.price)+"元")])])])})),0)]),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","page-size":20,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleSizeChange}})],1),a("div",{staticClass:"shop-guess"},[a("h3",{staticClass:"cate-word"},[t._v("热卖爆品")]),a("div",{staticClass:"wrap-shop"},[a("div",{staticClass:"new-list"},t._l(t.sortList.slice(0,5),(function(e,s){return a("div",{key:s,staticClass:"shop-item"},[a("span",{staticClass:"flag"},[t._v("热卖")]),a("div",{staticClass:"item-img"},[a("a",{attrs:{href:"/product/"+e.id,target:"_blank"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"hot.cover"}],attrs:{alt:e.title}})])]),a("div",{staticClass:"item-info"},[a("a",{attrs:{href:"/product/"+e.id,target:"_blank"}},[a("h3",{staticClass:"title"},[t._v(t._s(e.title.slice(0,35))),e.title.length>38?a("span",[t._v("...")]):t._e()])]),a("p",{staticClass:"price"},[t._v(t._s(e.price)+"元")])])])})),0)])])]):a("div",{staticClass:"error"},[t._m(0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message"},[a("div",{staticClass:"l1"},[t._v("抱歉，没有找到符合条件的商品")]),a("div",{staticClass:"l2"},[a("p",[t._v("建议您：")]),a("p",[t._v(" 1、适当减少筛选条件，可以获得更多结果")]),a("p",[t._v(" 2、尝试其他关键词")])])])}],r=(a("9896"),a("2871"),a("5580"),a("389c"),{name:"search",data:function(){return{radio:"1",errorFlag:!0,productList:[],total:1,cid:0,sortActive:"default",sortList:[],is_search:!1,is_category:!1,is_brand:!1,search_key:"",price_status:!0,sold_status:!0,status1:"默认排序",status2:"销量升序",status3:"价格升序",bread:"",bid:0,brandInfo:Object}},created:function(){document.title="搜索 - JapanHui"},methods:{requestProduct:function(t){var e=this,a={top_category:this.cid,pageNum:1,ordering:t};console.log(this.is_search,this.is_category),this.is_search&&(delete a["top_category"],a["search"]=this.search_key),this.axios.get("/products/",{params:a}).then((function(t){e.productList=t.data.list.map((function(t){return{id:t.id,title:t.title,cover:t.pic,price:t.min_price}}))}))},sortRes:function(t){"default"===t?(this.sortActive="default",this.is_search?this.getSearchProduct(this.search_key):this.is_category&&this.getCategoryProduct(this.cid)):"num"===t?(this.sortActive="num",this.sold_status?(this.requestProduct("total_sold"),this.sold_status=!this.sold_status,this.status2="销量升序"):(this.requestProduct("-total_sold"),this.sold_status=!this.sold_status,this.status2="销量降序")):(this.sortActive="price",this.price_status?(this.requestProduct("min_price"),this.price_status=!this.price_status,this.status3="价格升序"):(this.requestProduct("-min_price"),this.price_status=!this.price_status,this.status3="价格降序"))},getSortProduct:function(){var t=this;this.axios.get("/goods/",{params:{pageSize:5,sold_num:"sold_num"}}).then((function(e){t.sortList=e.data.list.map((function(t){return{id:t.be_product.id,title:t.be_product.title,cover:t.cover,price:t.sold_price}}))}))},handleSizeChange:function(t){var e=this,a={top_category:this.cid,pageNum:t};console.log(this.is_search,this.is_category),this.is_search&&(delete a["top_category"],a["search"]=this.search_key),this.axios.get("/products/",{params:a}).then((function(t){e.total=t.data.total,e.productList=t.data.list.map((function(t){return{id:t.id,title:t.title,cover:t.pic,price:t.min_price}}))}))},getSearchProduct:function(t){var e=this;this.axios.get("/products/?pageNum=1&search=".concat(t)).then((function(t){e.total=t.data.total,0!==t.data.total?e.productList=t.data.list.map((function(t){return{id:t.id,title:t.title,cover:t.pic,price:t.min_price}})):e.$message.warning("暂未搜到~")}))},getCategoryProduct:function(t,e){var a=this;this.axios.get("/products/?".concat(t)).then((function(t){a.total=t.data.total,"cate"===e?a.bread=t.data.list[0].category.name:(a.bread=t.data.list[0].brand.en_name,a.brandInfo=t.data.list[0].brand),a.productList=t.data.list.map((function(t){return{id:t.id,title:t.title,cover:t.pic,price:t.min_price}}))}))}},mounted:function(){this.getSortProduct();var t=this.$route.query;Object.prototype.hasOwnProperty.call(t,"key")&&""!==t.key?(this.getSearchProduct(t.key),this.search_key=t.key,this.is_search=!0,this.bread=t.key):Object.prototype.hasOwnProperty.call(t,"categoryId")&&""!==t.categoryId?(this.getCategoryProduct("top_category=".concat(t.categoryId),"cate"),this.is_category=!0,this.cid=t.categoryId):Object.prototype.hasOwnProperty.call(t,"brandId")&&""!==t.categoryId?(this.getCategoryProduct("brandId=".concat(t.brandId),"brand"),this.is_brand=!0,this.bid=t.brandId):this.errorFlag=!1}}),c=r,n=(a("f7f7"),a("4ac2")),o=Object(n["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},f7f7:function(t,e,a){"use strict";a("6fc4")}}]);
//# sourceMappingURL=chunk-25dced12.cc9fdf27.js.map