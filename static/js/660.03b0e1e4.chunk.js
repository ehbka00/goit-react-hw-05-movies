"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[660],{660:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),c=t(757),i=t.n(c),o=t(791),u=t(689),s=t(87),l=t(184),f=function(e){var n=e.movie,t=(0,u.TH)();return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(n.id),state:t,children:n.original_title})})},d=t(390),g=t(534),h="home_trends__3WrrU",m=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.PY)();case 3:if(200!==(n=e.sent).status){e.next=8;break}c(n.data.results),e.next=9;break;case 8:throw new Error("Something went wrong");case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),(0,g.Z)(e.t0.message),c([]);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:h,children:"Trending today"}),(0,l.jsx)("ul",{children:t.map((function(e){return(0,l.jsx)(f,{movie:e},e.id)}))})]})}},390:function(e,n,t){t.d(n,{Hx:function(){return o},PY:function(){return a},Y5:function(){return c},uV:function(){return i},vw:function(){return u}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTA3YTdlODE5Zjg3N2M0ZDQxZjUxMDY2N2JlMzcwMSIsInN1YiI6IjY1YTkzMWY2N2QyYmMxMDEyNmVhNzgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMcJHNqVy-cC3arQvSZwuCc208umnP39oIcNPIsmtKU")}}),a=function(){return r.get("/trending/movie/day?language=en-US")},c=function(e){return r.get("/movie/".concat(e,"?language=en-US"))},i=function(e){return r.get("/movie/".concat(e,"/credits?language=en-US"))},o=function(e){return r.get("/movie/".concat(e,"/reviews?language=en-US"))},u=function(e){return r.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))}},534:function(e,n,t){var r=t(616);n.Z=function(e){return r.Am.error(e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:"Zoom"})}}}]);
//# sourceMappingURL=660.03b0e1e4.chunk.js.map