"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{504:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(439),c=t(791),o=t(689),u=t(437),i="Reviews_title__t265C",a=t(184);function s(){var e=(0,c.useState)(null),n=(0,r.Z)(e,2),t=n[0],s=n[1],f=(0,o.UO)().movieId;if((0,c.useEffect)((function(){u.Z.fetchMovieById(f,"/reviews").then((function(e){return s(e.results)}))}),[f]),t)return t.length<1?(0,a.jsx)("p",{children:"We dont have any reviews for this movie"}):(0,a.jsx)("ul",{children:t.map((function(e){var n=e.author,t=e.content;return(0,a.jsx)("li",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{className:i,children:"Author: ".concat(n)}),(0,a.jsxs)("p",{children:[t," "]})]})},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}(5))}))})}},437:function(e,n,t){function r(e,n,t,r,c,o,u){try{var i=e[o](u),a=i.value}catch(s){return void t(s)}i.done?n(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,o){var u=e.apply(n,t);function i(e){r(u,c,o,i,a,"next",e)}function a(e){r(u,c,o,i,a,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return h}});var o=t(687),u=t.n(o);function i(){return(i=c(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=6dae3b5437a0148dbe5d61c3832fc6ad").then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return a=c(u().mark((function e(n){var t,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n).concat(t,"?api_key=6dae3b5437a0148dbe5d61c3832fc6ad")).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.error(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function s(){return(s=c(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=6dae3b5437a0148dbe5d61c3832fc6ad&query=".concat(n)).then((function(e){if(e.ok)return e.json()})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={fetchTrendingMovies:function(){return i.apply(this,arguments)},fetchMovieById:function(e){return a.apply(this,arguments)},fetchMovieOnQuery:function(e){return s.apply(this,arguments)}},h=f}}]);
//# sourceMappingURL=504.03e23aa9.chunk.js.map