(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__1m44e"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},54:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c(1),o=c(22),r=c(2),s=c(45),a=c.n(s),i=c(0),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{when:s,message:function(e){return"Are you sure you want to leave? Info will be lost"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(20),h=c(21);function x(){var e=Object(r.h)(),t=Object(f.a)(h.b),c=t.sendRequest,o=t.status;Object(n.useEffect)((function(){"completed"===o&&e.push("/quotes")}),[o,e]);return Object(i.jsx)("div",{children:Object(i.jsx)(b,{isLoading:"pending"===o,onAddQuote:function(e){c(e)}})})}}}]);
//# sourceMappingURL=4.d6a8892f.chunk.js.map