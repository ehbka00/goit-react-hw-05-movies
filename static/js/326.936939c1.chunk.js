"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[326],{326:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(861),a=r(439),c=r(757),i=r.n(c),o=r(791),u=r(689),s=r(390),h=r(534),l="reviews_feedback__S7PNr",d=r(184),f=function(){var e=(0,o.useState)(),n=(0,a.Z)(e,2),r=n[0],c=n[1],f=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Hx)(f);case 3:if(200!==(n=e.sent).status){e.next=8;break}c(n.data.results),e.next=9;break;case 8:throw new Error("Error");case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),(0,h.Z)(e.t0.message),c([]);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,d.jsxs)("div",{children:[Array.isArray(r)&&0===r.length&&(0,d.jsx)("div",{children:(0,d.jsx)("h3",{children:"We don't have any reviews for this movie."})}),Array.isArray(r)&&r.map((function(e){return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Author"}),": ",e.author]}),(0,d.jsx)("p",{children:e.content})]}),(0,d.jsx)("hr",{})]},e.id)}))]})}},390:function(e,n,r){r.d(n,{Hx:function(){return o},PY:function(){return a},Y5:function(){return c},uV:function(){return i},vw:function(){return u}});var t=r(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTA3YTdlODE5Zjg3N2M0ZDQxZjUxMDY2N2JlMzcwMSIsInN1YiI6IjY1YTkzMWY2N2QyYmMxMDEyNmVhNzgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMcJHNqVy-cC3arQvSZwuCc208umnP39oIcNPIsmtKU")}}),a=function(){return t.get("/trending/movie/day?language=en-US")},c=function(e){return t.get("/movie/".concat(e,"?language=en-US"))},i=function(e){return t.get("/movie/".concat(e,"/credits?language=en-US"))},o=function(e){return t.get("/movie/".concat(e,"/reviews?language=en-US"))},u=function(e){return t.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))}},534:function(e,n,r){var t=r(616);n.Z=function(e){return t.Am.error(e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:"Zoom"})}}}]);
//# sourceMappingURL=326.936939c1.chunk.js.map