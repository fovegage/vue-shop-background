(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6af6"],{"1de2":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavHeader",{attrs:{category:t.category}}),a("router-view"),a("NavFooter")],1)},n=[],r=a("cce9"),c=a("f091"),i={name:"home",components:{NavFooter:c["a"],NavHeader:r["a"]},data:function(){return{category:[]}},methods:{getCategory:function(){var t=this;this.axios.get("/categories/").then((function(e){t.category=e.data.list}))}},mounted:function(){this.getCategory()}},s=i,u=a("4ac2"),d=Object(u["a"])(s,o,n,!1,null,"35392952",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b6af6.f167e7b4.js.map