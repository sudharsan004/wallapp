(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(0),r=t(15),s=t.n(r),o=t(46),i=t.n(o),l=(t(63),t(17)),j="https://wall-post-app.herokuapp.com/api/";var u=function(){return localStorage.username?Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)(l.b,{to:"/",children:localStorage.username})}),Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)("a",{href:"",onClick:function(){fetch("".concat(j,"user/logout")),localStorage.clear()},children:"Logout"})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)(l.b,{to:"login",children:"Login"})}),Object(c.jsx)("li",{className:"nav-link",children:Object(c.jsx)(l.b,{to:"register",children:"Register"})})]})};var d=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:Object(c.jsxs)(l.b,{to:"/",children:[Object(c.jsx)(i.a,{}),"Wall App"]})}),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)(u,{})})})]})},b=t(16),h=function(){return fetch("".concat(j,"post/"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},O=t(22),p=t(20),m=t(48),x=t.n(m),f=t(49),g=t.n(f),v=t(94),w=t(96),S=(t(74),function(e){var n=e.title,t=e.description,c=e.user_name;fetch("".concat(j,"post/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:n,description:t,user_name:c})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))});var k=function(e){var n=Object(a.useState)({title:"",description:"",user_name:localStorage.username}),t=Object(b.a)(n,2),r=t[0],s=t[1];function o(e){var n=e.target,t=n.name,c=n.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(O.a)({},t,c))}))}var i=Object(a.useState)(!1),l=Object(b.a)(i,2),j=l[0],u=l[1];return j?Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-post",children:[Object(c.jsx)("input",{onChange:o,value:r.title,name:"title",placeholder:"Title"}),Object(c.jsx)("textarea",{onChange:o,value:r.description,name:"description",placeholder:"Write on wall...",rows:"3"}),localStorage.username?Object(c.jsx)(w.a,{in:!0,children:Object(c.jsx)(v.a,{onClick:function(n){console.log(n),r.title&&r.description?(S(r),s({title:"",description:"",user_name:localStorage.username})):alert("Fill Both Fields !"),e.onAdd((function(e){return!e}))},children:Object(c.jsx)(x.a,{})})}):Object(c.jsxs)(c.Fragment,{children:["login Required To post",Object(c.jsx)(w.a,{in:!0,children:Object(c.jsx)(v.a,{children:Object(c.jsx)(g.a,{})})})]})]})}):Object(c.jsx)("div",{children:Object(c.jsx)("form",{className:"create-post",children:Object(c.jsx)("textarea",{name:"content",onClick:function(){u(!0)},placeholder:"Write on Wall...",rows:"1"})})})},C=t(50),N=t.n(C);t(75);var y=function(e){var n=e.k,t=e.title,a=e.description,r=e.user_name,s=e.date,o=e.onAdd;return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("p",{children:a}),Object(c.jsxs)("span",{className:"small",children:["~ ",r," on:",s.slice(0,10)]}),window.localStorage.username===r?Object(c.jsx)("button",{children:Object(c.jsx)(N.a,{onClick:function(){fetch("".concat(j,"post/delete/").concat(n,"/")),o((function(e){return!e}))}})}):""]})};var T=function(){var e=Object(a.useState)([]),n=Object(b.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(b.a)(s,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){h().then((function(e){r(e)})).catch((function(e){return console.log(e)}))}),[i]),Object(c.jsxs)("div",{children:[Object(c.jsx)(k,{onAdd:l}),t.map((function(e,n){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y,{onAdd:l,title:e.title,description:e.description,user_name:e.user_name,user:e.user,date:e.created_at,k:e.id},n)})}))]})},A=(t(76),t(95)),_=function(e){var n=e.username,t=e.email,c=e.password;fetch("".concat(j,"user/register/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:n,email:t,password:c})}).then((function(e){return e.json()})).catch((function(e){return e})).then((function(e){return console.log(e)})),alert("Registeration Successfull!")};var F=function(){var e=Object(a.useState)({username:"",email:"",password:""}),n=Object(b.a)(e,2),t=n[0],r=n[1];function s(e){var n=e.target,t=n.name,c=n.value;r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(O.a)({},t,c))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{}),Object(c.jsxs)("form",{id:"register-form",className:"register-form",children:[Object(c.jsx)("input",{id:"username",onChange:s,value:t.username,name:"username",placeholder:"Username"}),Object(c.jsx)("input",{id:"email",onChange:s,value:t.email,name:"email",placeholder:"email",type:"email"}),Object(c.jsx)("input",{id:"password",onChange:s,value:t.password,name:"password",placeholder:"password",type:"password"}),Object(c.jsx)(A.a,{onClick:function(){var e=_(t);console.log(e),r({username:"",email:"",password:""})},variant:"contained",color:"#eee",children:"Register"})]})]})},J=(t(77),function(e){var n=e.username,t=e.password;fetch("".concat(j,"user/login/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))});var R=function(){var e=Object(a.useState)({username:"",password:""}),n=Object(b.a)(e,2),t=n[0],r=n[1];function s(e){var n=e.target,t=n.name,c=n.value;r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(O.a)({},t,c))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{}),Object(c.jsxs)("form",{id:"login-form",className:"login-form",children:[Object(c.jsx)("input",{id:"username",onChange:s,value:t.username,name:"username",placeholder:"Username"}),Object(c.jsx)("input",{id:"password",onChange:s,value:t.password,name:"password",placeholder:"password",type:"password"}),Object(c.jsx)(A.a,{onClick:function(){var e=J(t);console.log(e),localStorage.setItem("username",t.username),r({username:"",password:""})},variant:"contained",color:"#eee",children:"Login"})]})]})};var W=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(T,{})]})},E=t(4),L=Object(c.jsx)(l.a,{children:Object(c.jsxs)(E.c,{children:[Object(c.jsx)(E.a,{exact:!0,path:"/",component:W}),Object(c.jsx)(E.a,{path:"/login",component:R}),Object(c.jsx)(E.a,{path:"/register",component:F})]})});s.a.render(L,document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.d433b024.chunk.js.map