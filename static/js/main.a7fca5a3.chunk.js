(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.f5b64330.png"},33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(38),a(31)),i=a(2),l=a(11),u=a.n(l),m=a(16),p=a(12),f=a(79),h=a(14),d=a.n(h),g=a(15),b=a.n(g),v=(a(57),a(30)),E=a.n(v);function x(e){var t=e.history;null!=localStorage.getItem("token")&&t.push("/main");var a=Object(n.useState)(!1),o=Object(p.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(""),l=Object(p.a)(i,2),h=l[0],g=l[1],v=Object(n.useState)(""),x=Object(p.a)(v,2),k=x[0],O=x[1],S=Object(n.useState)(""),j=Object(p.a)(S,2),C=j[0],w=j[1];function y(){return(y=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n={email:h,password:k},!(h.length<4||k.length<4)){e.next=5;break}return b.a.fire({icon:"error",title:"Oops...",text:"Os campos devem ter pelo menos 3 caract\xe9res!"}),e.abrupt("return");case 5:if(""===h||""===k){e.next=19;break}if(!c){e.next=15;break}if(k!==C){e.next=12;break}return e.next=10,d.a.post("https://reqres.in/api/register",n,{headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("id",a.data.id),localStorage.setItem("token",a.data.token),e.next=4,d.a.get("https://reqres.in/api/users/"+a.data.id);case 4:n=e.sent,localStorage.setItem("name",n.data.first_name),localStorage.setItem("lastName",n.data.last_name),t.push("/main");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){b.a.fire({icon:"error",title:"Oops...",text:"E-mail n\xe3o existe!"})}));case 10:e.next=13;break;case 12:b.a.fire({icon:"error",title:"Oops...",text:"As senhas n\xe3o coincidem!"});case 13:e.next=17;break;case 15:return e.next=17,d.a.post("https://reqres.in/api/login",n,{headers:{"Content-Type":"application/json"}}).then((function(e){localStorage.setItem("token",e.data.token),t.push("/main")}),(function(e){b.a.fire({icon:"error",title:"Oops...",text:"E-mail n\xe3o cadastrado!"})}));case 17:e.next=20;break;case 19:b.a.fire({icon:"error",title:"Oops...",text:"Todos os campos devem ser preenchidos!"});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",null,r.a.createElement("img",{src:E.a,alt:"logo",className:"logo"}),r.a.createElement("div",null,r.a.createElement("p",null,"Login"),r.a.createElement(f.a,{checked:c,onChange:function(){s(!c)},color:"primary"}),r.a.createElement("p",null,"Cadastro")),r.a.createElement("input",{placeholder:"E-mail",maxLength:"30",minLength:"3",value:h,onChange:function(e){g(e.target.value)}}),r.a.createElement("input",{placeholder:"Senha",className:"password",maxLength:"30",minLength:"3",value:k,onChange:function(e){O(e.target.value)}}),c?r.a.createElement("input",{placeholder:"Confirmar senha",className:"password",maxLength:"30",minLength:"3",value:C,onChange:function(e){w(e.target.value)}}):r.a.createElement(r.a.Fragment,null),r.a.createElement("button",{onClick:function(e){return y.apply(this,arguments)}},"Entrar")))}a(61);function k(e){var t=e.history,a=Object(n.useState)(""),o=Object(p.a)(a,2),c=o[0],s=o[1];function i(){return(i=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"),e.next=3,d.a.get("https://api.thecatapi.com/v1/images/search");case 3:t=e.sent,s(t.data[0].url);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"imagem",src:c}),r.a.createElement("button",{className:"botao",onClick:function(){return i.apply(this,arguments)}},"Click Aqui"),r.a.createElement("button",{className:"botao",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("lastName"),localStorage.removeItem("id"),t.push("/")}},"Sair"))}function O(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:x}),r.a.createElement(i.a,{path:"/main",component:k}))}var S=function(){return r.a.createElement("div",null,r.a.createElement(O,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a7fca5a3.chunk.js.map