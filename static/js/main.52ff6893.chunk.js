(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),o=n(17),a=n.n(o),s=(n(26),n(8)),l=n(2),u=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper indigo darken-1 px1",children:[Object(c.jsx)("a",{href:"/",className:"brand-logo",children:"React + Typescript"}),Object(c.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(c.jsx)("li",{children:Object(c.jsx)(s.b,{to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(c.jsx)("li",{children:Object(c.jsx)(s.b,{to:"/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},j=n(19),d=n(20),b=function(e){var t=Object(r.useRef)(null);return Object(c.jsxs)("div",{className:"input-field mt2",children:[Object(c.jsx)("input",{ref:t,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430",onKeyPress:function(n){""!==n.target.value&&"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),Object(c.jsx)("label",{htmlFor:"title",className:"active",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"})]})},h=function(e){var t=e.todos,n=e.onRemove,r=e.onToggle;if(0===t.length)return Object(c.jsx)("p",{className:"center",children:"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442!"});return Object(c.jsx)("ul",{children:t.map((function(e){var t,i=["todo"];return e.completed&&i.push("completed"),Object(c.jsx)("li",{className:i.join(" "),children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:e.completed,onChange:(t=e.id,function(e){return r(e.target.checked,t)})}),Object(c.jsx)("span",{children:e.title}),Object(c.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},p=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");o(e)}),[]),Object(r.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(b,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};o((function(e){return[t].concat(Object(j.a)(e))}))}}),Object(c.jsx)(h,{todos:n,onToggle:function(e,t){o((function(n){return n.map((function(n){return n.id===t&&(n.completed=e),n}))}))},onRemove:function(e){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?")&&o((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},O=function(){var e=Object(l.f)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum vero, repudiandae expedita beatae iure? Mollitia tempore quae qui voluptatum."}),Object(c.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"})]})},f=function(){return Object(c.jsxs)(s.a,{children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{component:p,path:"/",exact:!0}),Object(c.jsx)(l.a,{component:O,path:"/about"})]})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.52ff6893.chunk.js.map