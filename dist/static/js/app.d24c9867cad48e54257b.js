webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return u});var i=r(109),s=r.n(i),a=r(18),n=a.a.observable({movies:{},reviews:{}}),o={setMovies:function(e){e.forEach(function(e){n.movies[e.episode_id]=e})},addReview:function(e,t){n.reviews[e]||(n.reviews[e]=[]),n.reviews[e].push({id:n.reviews[e].length,name:t.name||"Anonymous",review:t.review,stars:t.stars})}},u={getMovieById:function(e){return n.movies[e]},searchByTitle:function(e){return s()(n.movies).filter(function(t){return t.title.toLowerCase().match(e.toLowerCase())})},getReviews:function(e){return n.reviews[e]},getMovies:function(){return n.movies}}},,,,,,,,,function(e,t,r){"use strict";t.a={name:"app"}},function(e,t,r){"use strict";var i=r(61),s=r(106),a=r(108),n=r.n(a),o=r(17);t.a={name:"search",data:function(){return{loading:!1,moviesList:[],moviesSearch:[],searchValue:"",test:""}},components:{SearchResults:s.a},methods:{onInputChange:function(){n()(this.search.bind(this),500)()},search:function(){this.moviesSearch=o.a.searchByTitle(this.searchValue)},storeMovies:o.b.setMovies},created:function(){var e=this;this.loading=!0,i.a.getList().then(function(t){e.storeMovies(t),e.loading=!1,e.search()})}}},,,,,,,,,,,,,,,,function(e,t,r){"use strict";t.a={name:"movie",props:{movies:{type:Array,default:[]}}}},function(e,t,r){"use strict";var i=r(17),s=r(45);t.a={name:"movie",data:function(){return{romanNumbers:{1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII"},movie:i.a.getMovieById(this.$route.params.id),reviews:i.a.getReviews(this.$route.params.id)}},components:{Review:s.a},methods:{goBack:function(){return window.history.length>1?this.$router.go(-1):this.$router.push("/")}}}},function(e,t,r){"use strict";var i=r(46),s=r(117),a=r(3),n=a(i.a,s.a,!1,null,null,null);t.a=n.exports},function(e,t,r){"use strict";t.a={name:"review",props:{review:{type:Object}}}},function(e,t,r){"use strict";var i=r(121),s=(r.n(i),r(17));t.a={name:"reviewForm",data:function(){return{movie:{},name:"",review:"",stars:3,submitted:!1}},components:{"vue-stars":i.VueStars},methods:{goBack:function(){return window.history.length>1?this.$router.go(-1):this.$router.push("/")},onSubmit:function(e){e.preventDefault(),s.b.addReview(this.$route.params.id,{name:this.name,review:this.review,stars:this.stars}),this.submitted=!0}},created:function(){this.movie=s.a.getMovieById(this.$route.params.id)}}},function(e,t,r){"use strict";var i=r(17),s=r(45);t.a={name:"reviews",data:function(){return{movies:[]}},components:{Review:s.a},methods:{getReviews:i.a.getReviews},created:function(){this.movies=i.a.getMovies()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(18),s=r(53),a=r(57);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},,,,function(e,t,r){"use strict";function i(e){r(54)}var s=r(26),a=r(56),n=r(3),o=i,u=n(s.a,a.a,!1,o,null,null);t.a=u.exports},function(e,t){},,function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("router-link",{attrs:{to:{name:"search"}}},[r("img",{staticClass:"logo",attrs:{src:"https://pluspng.com/img-png/star-wars-png-black-and-white-open-2000.png",alt:"Star Wars Rulez"}})]),e._v(" "),r("h1",[e._v("A long time ago in a galaxy far, far away...")]),e._v(" "),r("nav",{staticClass:"menu"},[r("router-link",{attrs:{to:{name:"search"}}},[e._v("Home")]),e._v(" "),r("router-link",{attrs:{to:{name:"reviews"}}},[e._v("My reviews")])],1)],1),e._v(" "),r("main",[r("router-view")],1)])},s=[],a={render:i,staticRenderFns:s};t.a=a},function(e,t,r){"use strict";var i=r(18),s=r(58),a=r(59),n=r(115),o=r(119),u=r(123);i.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"search",component:a.a},{path:"/movie/:id",name:"movie",component:n.a},{path:"/review/:id",name:"review",component:o.a},{path:"/reviews",name:"reviews",component:u.a}]})},,function(e,t,r){"use strict";function i(e){r(60)}var s=r(27),a=r(114),n=r(3),o=i,u=n(s.a,a.a,!1,o,null,null);t.a=u.exports},function(e,t){},function(e,t,r){"use strict";var i=r(62),s=r.n(i),a=r(28),n=r.n(a),o=r(99),u=r.n(o),v=r(100),c=r.n(v),l=r(101),m=r.n(l),d=r(105),f=r.n(d),p=function(){function e(){c()(this,e)}return m()(e,null,[{key:"loadData",value:function(){var e=this;return function(){var t=u()(s.a.mark(function t(){var r,i,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,f.a.getItem("moviesList");case 3:if(null===(i=e.sent)){e.next=6;break}return e.abrupt("return",i);case 6:for(a=1;a<=7;a+=1)r.push(fetch("https://swapi.co/api/films/"+a+"/"));return e.next=9,n.a.all(r).then(function(e){return e.map(function(e){return e.json()})});case 9:return o=e.sent,e.abrupt("return",n.a.all(o).then(function(e){return f.a.setItem("moviesList",e)}));case 11:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}()()}},{key:"getList",value:function(){var e=this;return function(){var t=u()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadData();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}()()}}]),e}();t.a=p},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var i=r(43),s=r(107),a=r(3),n=a(i.a,s.a,!1,null,null,null);t.a=n.exports},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.movies.length?r("div",{staticClass:"search-results"},[r("ul",e._l(e.movies,function(t){return r("li",{key:t.episode_id},[r("div",[e._v(e._s(t.title))]),e._v(" "),r("router-link",{attrs:{to:{name:"movie",params:{id:t.episode_id}}}},[e._v("More read")]),e._v(" "),r("router-link",{attrs:{to:{name:"review",params:{id:t.episode_id}}}},[e._v("Review add")])],1)}),0)]):e._e()},s=[],a={render:i,staticRenderFns:s};t.a=a},,,,,,,function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[e.loading?r("p",[e._v("Please wait, loading movies...")]):r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type what looking for are you"},domProps:{value:e.searchValue},on:{input:[function(t){t.target.composing||(e.searchValue=t.target.value)},e.onInputChange]}}),e._v(" "),r("search-results",{attrs:{movies:e.moviesSearch}})],1)},s=[],a={render:i,staticRenderFns:s};t.a=a},function(e,t,r){"use strict";function i(e){r(116)}var s=r(44),a=r(118),n=r(3),o=i,u=n(s.a,a.a,!1,o,null,null);t.a=u.exports},function(e,t){},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review"},[r("strong",[e._v(e._s(e.review.name))]),e._v(" gave "),r("strong",[e._v(e._s(e.review.stars)+"/5")]),e._v(" note and said: "),r("i",[e._v(e._s(e.review.review))])])},s=[],a={render:i,staticRenderFns:s};t.a=a},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"movie"},[r("h2",[e._v(e._s(e.movie.title))]),e._v(" "),r("h3",[e._v("Episode "+e._s(e.romanNumbers[e.movie.episode_id]))]),e._v(" "),r("button",{staticClass:"btn btn-back__primary movie-back",on:{click:e.goBack}},[e._v("Back go")]),e._v(" "),r("div",{staticClass:"movie-details"},[r("div",{staticClass:"movie-details-row"},[r("label",[e._v("Producer:")]),e._v(" "),r("span",[e._v(e._s(e.movie.producer))])]),e._v(" "),r("div",{staticClass:"movie-details-row"},[r("label",[e._v("Director:")]),e._v(" "),r("span",[e._v(e._s(e.movie.director))])]),e._v(" "),r("div",{staticClass:"movie-details-row"},[r("label",[e._v("Release date:")]),e._v(" "),r("span",[e._v(e._s(e.movie.release_date))])]),e._v(" "),r("div",{staticClass:"movie-details-row"},[r("label",[e._v("Opening crawl:")]),e._v(" "),r("span",[e._v(e._s(e.movie.opening_crawl))])]),e._v(" "),r("div",{staticClass:"movie-details-row"},[r("label",[e._v("Reviews:")]),e._v(" "),e.reviews?r("ul",e._l(e.reviews,function(e){return r("li",{key:e.id},[r("review",{attrs:{review:e}})],1)}),0):r("div",[e._v("No reviews found.")])]),e._v(" "),r("div",{staticClass:"movie-details-row"},[r("router-link",{attrs:{to:{name:"review",params:{id:e.$route.params.id}}}},[r("button",{staticClass:"btn"},[e._v("Review add")])])],1)])])},s=[],a={render:i,staticRenderFns:s};t.a=a},function(e,t,r){"use strict";function i(e){r(120)}var s=r(47),a=r(122),n=r(3),o=i,u=n(s.a,a.a,!1,o,null,null);t.a=u.exports},function(e,t){},,function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-form-wrapper"},[r("h2",[e._v(e._s(e.movie.title))]),e._v(" "),e.submitted?r("div",{staticClass:"review-msg review-msg__success"},[r("p",[e._v("For your review thank you. Yeesssssss.")])]):r("form",{staticClass:"review-form",on:{submit:e.onSubmit}},[r("h3",[e._v("Your review add")]),e._v(" "),r("div",{staticClass:"review-form-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"review-form-field review-form-field__input",attrs:{type:"text",placeholder:"Your name (optional)"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"review-form-row"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"review-form-field review-form-field__textarea",attrs:{placeholder:"Your review"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"review-form-row review-form-row__stars"},[r("vue-stars",{attrs:{name:"demo","active-color":"#ffdd00","inactive-color":"#999999","shadow-color":"#ffff00","hover-color":"#dddd00",max:5,value:3,readonly:!1,char:"★"},model:{value:e.stars,callback:function(t){e.stars=t},expression:"stars"}})],1),e._v(" "),e._m(0)]),e._v(" "),r("button",{staticClass:"btn btn-back__secondary review-back",on:{click:e.goBack}},[e._v("Back go")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-form-row"},[r("input",{staticClass:"btn btn-submit",attrs:{type:"submit",value:"Submit"}})])}],a={render:i,staticRenderFns:s};t.a=a},function(e,t,r){"use strict";function i(e){r(124)}var s=r(48),a=r(125),n=r(3),o=i,u=n(s.a,a.a,!1,o,null,null);t.a=u.exports},function(e,t){},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews"},[r("h3",[e._v("My Reviews")]),e._v(" "),e._l(e.movies,function(t){return r("ul",{key:t.episode_id},[e.getReviews(t.episode_id)?r("li",[r("div",{staticClass:"reviews-movie-title"},[e._v(e._s(t.title))]),e._v(" "),r("ul",e._l(e.getReviews(t.episode_id),function(e){return r("li",{key:e.id},[r("review",{attrs:{review:e}})],1)}),0)]):e._e()])})],2)},s=[],a={render:i,staticRenderFns:s};t.a=a}],[49]);
//# sourceMappingURL=app.d24c9867cad48e54257b.js.map