(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},19:function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},20:function(e,t,n){"use strict";var r=n(11),c=n(4),a=n.n(c),s=n(9),o=n(22),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),c=Object(o.a)(n,2),d=c[0],l=c[1],j=Object(u.useCallback)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},d)}},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(4),c=n.n(r),a=n(11),s=n(9),o="https://react-ro-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(c.a.mark((function e(){var t,n,r,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)u=Object(a.a)({id:s},n[s]),r.push(u);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function e(t){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(a.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t){var n,r,s,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(u in s=[],r)i=Object(a.a)({id:u},r[u]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},27:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},28:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n.n(r),a=n(8),s=(n(33),n(2)),o=n(1),u=n.n(o),i=n(24),d=n.n(i),l=n(0),j=function(e){return Object(l.jsxs)("li",{className:d.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("figcaption",{children:e.author})]}),Object(l.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},p=n(19),h=n.n(p),b=function(e){var t,n,r=Object(s.h)(),c=Object(s.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),u=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(l.jsxs)(o.Fragment,{children:[Object(l.jsx)("div",{className:h.a.sorting,children:Object(l.jsxs)("button",{onClick:function(){r.push("".concat(c.pathname,"?sort=").concat(a?"desc":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),Object(l.jsx)("ul",{className:h.a.list,children:u.map((function(e){return Object(l.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},f=n(14),x=n(20),O=n(21),m=n(27),v=n.n(m),g=function(){return Object(l.jsxs)("div",{className:v.a.noquotes,children:[Object(l.jsx)("p",{children:"No quotes found!"}),Object(l.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};function w(){var e=Object(x.a)(O.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(f.a,{})}):c?Object(l.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(l.jsx)(b,{quotes:r}):Object(l.jsx)(g,{})}var _=n(28),y=n.n(_),q=n(12),N=n.n(q);function k(){return Object(l.jsxs)("header",{className:N.a.header,children:[Object(l.jsx)("div",{className:N.a.logo,children:"Great quotes"}),Object(l.jsx)("nav",{className:N.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{activeClassName:N.a.active,to:"/quotes",children:"All Quotes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{activeClassName:N.a.active,to:"/new-quote",children:"Add a quote"})})]})})]})}function S(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{}),Object(l.jsx)("main",{className:y.a.main,children:e.children})]})}var C=u.a.lazy((function(){return n.e(4).then(n.bind(null,54))})),E=u.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),R=u.a.lazy((function(){return n.e(5).then(n.bind(null,52))}));var D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(S,{children:Object(l.jsx)(o.Suspense,{fallback:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(f.a,{})}),children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.c,{path:"/",exact:!0,children:Object(l.jsx)(s.b,{to:"/quotes"})}),Object(l.jsx)(s.c,{path:"/quotes",exact:!0,children:Object(l.jsx)(w,{})}),Object(l.jsx)(s.c,{path:"/quotes/:quoteId",children:Object(l.jsx)(E,{})}),Object(l.jsx)(s.c,{path:"/new-quote",children:Object(l.jsx)(C,{})}),Object(l.jsx)(s.c,{path:"*",children:Object(l.jsx)(R,{})})]})})})})};c.a.render(Object(l.jsx)(a.a,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.39168307.chunk.js.map