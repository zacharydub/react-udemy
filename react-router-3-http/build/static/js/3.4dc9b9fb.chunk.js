(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return w}));var n=c(1),s=c(2),o=c(8),a=c(22),m=c(47),r=c.n(m),j=c(48),i=c.n(j),d=c(20),u=c(21),l=c(14),b=c(0),x=function(e){var t=Object(n.useRef)(),c=(Object(s.j)(),Object(d.a)(u.a)),o=c.sendRequest,a=c.status,m=c.error,r=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==a||m||r()}),[m,a,r]);var j=function(c){c.preventDefault();var n=t.current.value;o({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:i.a.form,onSubmit:j,children:["pending"===a&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}),Object(b.jsxs)("div",{className:i.a.control,onSubmit:j,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:i.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],m=Object(s.j)(),j=Object(d.a)(u.c),i=j.sendRequest,O=j.status,h=j.data,f=m.quoteId;Object(n.useEffect)((function(){i(f)}),[f,i]);var p,_=Object(n.useCallback)((function(){i(f)}),[i,f]);return"pending"===O&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(b.jsx)("div",{children:Object(b.jsx)(N,{comments:h})})),"completed"!==O||h&&0!==h.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments added yet"})),Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:m.quoteId,onAddedComment:_}),p]})},C=c(51),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};function w(){var e=Object(s.k)(),t=Object(s.j)(),c=Object(d.a)(u.e,!0),a=c.sendRequest,m=c.status,r=c.data,j=c.error,i=t.quoteId;return Object(n.useEffect)((function(){a(i)}),[a,i]),"pending"===m&&l.a,j?Object(b.jsx)("p",{children:j}):r?Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{text:r.text,author:r.author}),Object(b.jsx)(s.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote found"})}}}]);
//# sourceMappingURL=3.4dc9b9fb.chunk.js.map