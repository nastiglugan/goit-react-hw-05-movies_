"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{577:function(n,e,t){t.d(e,{Bt:function(){return l},Y5:function(){return p},d5:function(){return d},rT:function(){return o},wr:function(){return u}});var r=t(861),a=t(687),c=t.n(a),i=t(912);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="85b0d82f9eaa6a849c70c68abc52d407",u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},43:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,c,i,s,u,o,p=t(439),d=t(689),l=t(791),f=t(577),v=t(168),x=t(934),h=t(87),m=x.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 25px;\n  font-size: 26px;\n  margin-bottom: 50px;\n  margin-top: 35px;\n"]))),g=x.Z.h3(a||(a=(0,v.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 32px;\n  color: black;\n"]))),Z=x.Z.p(c||(c=(0,v.Z)([""]))),w=x.Z.p(i||(i=(0,v.Z)([""]))),j=x.Z.div(s||(s=(0,v.Z)(["\n  margin-bottom: 50px;\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n"]))),k=(0,x.Z)(h.OL)(u||(u=(0,v.Z)(["\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  text-transform: uppercase;\n"]))),b=(0,x.Z)(h.OL)(o||(o=(0,v.Z)(["\n  border-radius: 7px;\n  text-decoration: none;\n  padding: 10px;\n  background-color: #4d994da0;\n  color: white;\n"]))),y=t(184),_=function(n){var e,t,r=n.details,a=(0,d.TH)(),c=(0,l.useRef)(null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),i=r.poster_path,s=r.title,u=r.vote_average,o=r.overview,p=r.genres,f=r.runtime,v=null!==i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://fomantic-ui.com/images/wireframe/image.png";return(0,y.jsxs)("div",{children:[(0,y.jsx)(b,{to:c.current,children:"Back to movies"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:v,alt:s,width:"470",height:"600"})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)(g,{children:[" ",s]}),(0,y.jsxs)(Z,{children:["Vote average: ",u]}),(0,y.jsxs)(w,{children:["Overview: ",o]}),(0,y.jsxs)("ul",{children:["Genres:",p.map((function(n){return(0,y.jsx)("li",{children:n.name},n.id)}))]}),(0,y.jsxs)("p",{children:["Runtime: ",f," min"]})]})]}),(0,y.jsxs)(j,{children:[(0,y.jsx)(k,{to:"cast",children:"Cast"}),(0,y.jsx)(k,{to:"reviews",children:"Reviews"})]}),(0,y.jsx)(d.j3,{})]})},O=function(){var n=(0,l.useState)(null),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,d.UO)().movieId;return(0,l.useEffect)((function(){f.Y5(a).then((function(n){return r(n)}))}),[a]),(0,y.jsx)("div",{children:null!==t&&(0,y.jsx)(_,{details:t})})}}}]);
//# sourceMappingURL=43.1228b71e.chunk.js.map