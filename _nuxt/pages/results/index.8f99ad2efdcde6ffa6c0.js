webpackJsonp([13],{"37o+":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[e("div",{staticClass:"navbar-start"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("BAR")]),e("div",{staticClass:"navbar-dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("BAR")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets BAR")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Ladies BAR")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior BAR")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team BAR")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-vbar"}}},[t._v("Vets Team BAR")])],1)],1),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),e("div",{staticClass:"navbar-dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._m(0)],1),e("div",{staticClass:"navbar-end"})])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"http://justinramel.com/ndca-bar/"}},[t._v("Years")]),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2018/"}},[t._v("2018")]),e("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-bar-2017/"}},[t._v("2017")])])])}],i={render:s,staticRenderFns:n};a.a=i},"57fK":function(t,a,e){"use strict";var s=e("Ivrb"),n=e("37o+"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports},"8fS7":function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO");a.a={name:"menu",methods:n()({},Object(i.mapMutations)({toggleMenu:"menu/toggle"})),computed:n()({},Object(i.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},"9YCY":function(t,a,e){"use strict";var s=e("8fS7"),n=e("u8dC"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports},CEwd:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO"),r=e("s9Qj"),l=e("htll"),c=e("npdG");a.a={name:"layout",props:["title","subtitle"],components:{NavBar:r.a,NavBarMobile:l.a,PageHeader:c.a},methods:n()({},Object(i.mapMutations)({setTitle:"title/setTitle"})),computed:n()({},Object(i.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},Ivrb:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO");a.a={name:"menu-desktop",computed:n()({},Object(i.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},MJvX:function(t,a,e){"use strict";var s=e("uZCW");a.a={name:"results",components:{Page:s.a}}},"P/gJ":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("MJvX"),n=e("ZMZX"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.default=r.exports},RJeH:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".tight[data-v-1f4be4e1]{padding:16px;padding:1rem}",""])},TJVY:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO"),r=e("9YCY"),l=e("57fK");a.a={name:"nav-bar",components:{MenuMobile:r.a,MenuDesktop:l.a},computed:n()({},Object(i.mapGetters)({title:"title/getTitle"}))}},V3Ic:function(t,a,e){"use strict";a.a={name:"header",props:["title","subtitle"]}},ZMZX:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;return(t._self._c||a)("Page",{attrs:{title:"Results"}})},n=[],i={render:s,staticRenderFns:n};a.a=i},emQi:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[t._v("\n        "+t._s(t.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},n=[],i={render:s,staticRenderFns:n};a.a=i},fL5p:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO"),r=e("57fK"),l=e("9YCY");a.a={name:"nav-bar-mobile",components:{MenuDesktop:r.a,MenuMobile:l.a},computed:n()({},Object(i.mapGetters)({title:"title/getTitle"}))}},htll:function(t,a,e){"use strict";var s=e("fL5p"),n=e("mYpS"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports},mYpS:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar hero is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[t._v("\n        "+t._s(t.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},n=[],i={render:s,staticRenderFns:n};a.a=i},mxHO:function(t,a,e){var s=e("RJeH");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("02459e22",s,!0)},npdG:function(t,a,e){"use strict";function s(t){e("mxHO")}var n=e("V3Ic"),i=e("olC7"),r=e("VU/8"),l=s,c=r(n.a,i.a,!1,l,"data-v-1f4be4e1",null);a.a=c.exports},olC7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),e("h2",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])])])])},n=[],i={render:s,staticRenderFns:n};a.a=i},"rOr+":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t.isMobile?t._e():e("NavBar"),t.isMobile?e("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[e("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[t._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[t._v("Justin Ramel")]),t._v(".")])])])])}],i={render:s,staticRenderFns:n};a.a=i},s9Qj:function(t,a,e){"use strict";var s=e("TJVY"),n=e("emQi"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports},u8dC:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-burger",class:{"is-active":t.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:t.toggleMenu}},[e("span"),e("span"),e("span")])},n=[],i={render:s,staticRenderFns:n};a.a=i},uZCW:function(t,a,e){"use strict";var s=e("CEwd"),n=e("rOr+"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports}});
//# sourceMappingURL=index.8f99ad2efdcde6ffa6c0.js.map