webpackJsonp([1],{101:function(t,e,n){"use strict";function a(t){n(102)}var r=n(42),i=n(103),s=n(11),o=a,u=s(r.a,i.a,!1,o,null,null);e.a=u.exports},102:function(t,e){},103:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.movies.length?n("div",{staticClass:"search-results"},t._l(t.movies,function(e){return n("ul",{key:e.episode_id},[n("li",[n("div",[t._v(t._s(e.title))]),t._v(" "),n("router-link",{attrs:{to:{name:"movie",params:{id:e.episode_id}}}},[t._v("More read")])],1)])}),0):t._e()},r=[],i={render:a,staticRenderFns:r};e.a=i},105:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[t.loading?n("p",[t._v("Please wait, loading movies...")]):n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type what looking for are you"},domProps:{value:t.searchValue},on:{input:[function(e){e.target.composing||(t.searchValue=e.target.value)},t.onInputChange]}}),t._v(" "),n("search-results",{attrs:{movies:t.moviesSearch}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},106:function(t,e,n){"use strict";function a(t){n(107)}var r=n(43),i=n(108),s=n(11),o=a,u=s(r.a,i.a,!1,o,null,null);e.a=u.exports},107:function(t,e){},108:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie"},[n("h2",[t._v(t._s(t.movie.title))]),t._v(" "),n("h3",[t._v("Episode "+t._s(t.romanNumbers[t.movie.episode_id]))]),t._v(" "),n("button",{staticClass:"movie-back movie-back__primary",on:{click:t.goBack}},[t._v("Go back")]),t._v(" "),n("div",{staticClass:"movie-details"},[n("div",{staticClass:"movie-details-row"},[n("label",[t._v("Producer:")]),t._v(" "),n("span",[t._v(t._s(t.movie.producer))])]),t._v(" "),n("div",{staticClass:"movie-details-row"},[n("label",[t._v("Director:")]),t._v(" "),n("span",[t._v(t._s(t.movie.director))])]),t._v(" "),n("div",{staticClass:"movie-details-row"},[n("label",[t._v("Release date:")]),t._v(" "),n("span",[t._v(t._s(t.movie.release_date))])]),t._v(" "),n("div",{staticClass:"movie-details-row"},[n("label",[t._v("Opening crawl:")]),t._v(" "),n("span",[t._v(t._s(t.movie.opening_crawl))])])]),t._v(" "),n("button",{staticClass:"movie-back movie-back__secondary",on:{click:t.goBack}},[t._v("Go back")])])},r=[],i={render:a,staticRenderFns:r};e.a=i},25:function(t,e,n){"use strict";e.a={name:"app"}},26:function(t,e,n){"use strict";var a=n(27),r=n(101),i=n(104),s=n.n(i);e.a={name:"search",data:function(){return{loading:!1,moviesList:[],moviesSearch:[],searchValue:"",test:""}},components:{SearchResults:r.a},methods:{onInputChange:function(){s()(this.search.bind(this),500)()},search:function(){var t=this;this.moviesSearch=this.moviesList.filter(function(e){return e.title.toLowerCase().match(t.searchValue.toLowerCase())})}},created:function(){var t=this;this.loading=!0,a.a.getList().then(function(e){t.moviesList=e,t.loading=!1})}}},27:function(t,e,n){"use strict";var a=n(56),r=n.n(a),i=n(28),s=n.n(i),o=n(94),u=n.n(o),c=n(95),l=n.n(c),v=n(96),p=n.n(v),f=n(100),m=n.n(f),d=function(){function t(){l()(this,t)}return p()(t,null,[{key:"loadData",value:function(){var t=this;return function(){var e=u()(r.a.mark(function e(){var n,a,i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,m.a.getItem("moviesList");case 3:if(null===(a=t.sent)){t.next=6;break}return t.abrupt("return",a);case 6:for(i=1;i<=7;i+=1)n.push(fetch("https://swapi.co/api/films/"+i+"/"));return t.next=9,s.a.all(n).then(function(t){return t.map(function(t){return t.json()})});case 9:return o=t.sent,t.abrupt("return",s.a.all(o).then(function(t){return m.a.setItem("moviesList",t)}));case 11:case"end":return t.stop()}},e,t)}));return function(){return e.apply(this,arguments)}}()()}},{key:"getMovieById",value:function(t){var e=this;return function(){var n=u()(r.a.mark(function n(){var a,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getList();case 2:if(a=n.sent,i=a.filter(function(e){return+e.episode_id==+t}),!i.length){n.next=6;break}return n.abrupt("return",i[0]);case 6:return n.abrupt("return",null);case 7:case"end":return n.stop()}},n,e)}));return function(){return n.apply(this,arguments)}}()()}},{key:"getList",value:function(){var t=this;return function(){var e=u()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,t)}));return function(){return e.apply(this,arguments)}}()()}}]),t}();e.a=d},42:function(t,e,n){"use strict";e.a={name:"movie",props:{movies:{type:Array,default:[]}},data:function(){return{title:"Search results"}}}},43:function(t,e,n){"use strict";var a=n(27);e.a={name:"movie",data:function(){return{romanNumbers:{1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII"},movie:{}}},methods:{goBack:function(){return window.history.length>1?this.$router.go(-1):this.$router.push("/")}},created:function(){var t=this;a.a.getMovieById(this.$route.params.id).then(function(e){t.movie=e})}}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(24),r=n(48),i=n(52);a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},48:function(t,e,n){"use strict";function a(t){n(49)}var r=n(25),i=n(51),s=n(11),o=a,u=s(r.a,i.a,!1,o,null,null);e.a=u.exports},49:function(t,e){},51:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("main",[n("router-view")],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("img",{staticClass:"logo",attrs:{src:"https://pluspng.com/img-png/star-wars-png-black-and-white-open-2000.png",alt:"Star Wars Rulez"}}),t._v(" "),n("h1",[t._v("A long time ago in a galaxy far, far away...")])])}],i={render:a,staticRenderFns:r};e.a=i},52:function(t,e,n){"use strict";var a=n(24),r=n(53),i=n(54),s=n(106);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"search",component:i.a},{path:"/movie/:id",name:"movie",component:s.a}]})},54:function(t,e,n){"use strict";function a(t){n(55)}var r=n(26),i=n(105),s=n(11),o=a,u=s(r.a,i.a,!1,o,null,null);e.a=u.exports},55:function(t,e){}},[44]);
//# sourceMappingURL=app.2c2072fa3507e3d26c32.js.map