(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{50:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),i=(a(55),a(18)),l=(a(56),a(98)),s=a(40),u=a.n(s),m=a(96),d=(a(57),function(e){var t=e.tasks,a=e.handleDelete,r=e.isLoading,o=e.setIsLoading,l=Object(n.useState)(!1),s=Object(i.a)(l,2),d=s[0],h=s[1],f=t.map((function(e,t){r&&o(!1),d||h(!0);var n=e.userData.important?{border:"2px solid red"}:{};return c.a.createElement("li",{onClick:a,"data-index":e._id,key:t,style:n},c.a.createElement("p",{"data-index":e._id},t+1,".",e.userData.text),c.a.createElement(u.a,{"data-index":e._id,style:{position:"relative",right:"2%"}}))}));return c.a.createElement("div",{className:"taskList"},c.a.createElement("h2",null,"Aktualne zadania"),!r&&d?c.a.createElement("ul",null," ",f," "):c.a.createElement(m.a,{style:{marginRight:"auto",marginLeft:"auto",marginTop:"10px"}}))}),h=a(97),f=a(99),p=a(43),g=a.n(p),b=a(42);var E=function(){var e="https://just-cheddar-yumberry.glitch.me",t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(1),u=Object(i.a)(s,2),m=u[0],p=u[1],E=Object(n.useState)(""),k=Object(i.a)(E,2),v=k[0],O=k[1],j=Object(n.useState)(!1),y=Object(i.a)(j,2),S=y[0],I=y[1],x=Object(n.useState)(!0),D=Object(i.a)(x,2),w=D[0],L=D[1];localStorage.getItem("userID")||localStorage.setItem("userID",Math.floor(1e9*Math.random()));var T=localStorage.getItem("userID");Object(n.useEffect)((function(){fetch("".concat(e,"/take/tasks/").concat(T)).then((function(e){return e.json()})).then((function(e){o(e),0===e.length&&(L(!1),console.log(w))}))}),[m,T]);var N=function(t){t&&t.preventDefault(),v&&(fetch("".concat(e,"/add/tasks/").concat(v,"/").concat(S,"/").concat(T),{method:"POST",mode:"no-cors"}).then((function(){return p(m+1)})),I(!1),O(""))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"refreshIcon",onClick:function(e){p(m+1),Object(b.a)({targets:".refreshIcon",rotate:{value:[0,360]},duration:2e3})}}),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"addTask"},c.a.createElement("form",{onSubmit:N,formMethod:"POST"},c.a.createElement("h1",null," Add task"),c.a.createElement(l.a,{id:"standard-basic",label:"Insert your task",style:{color:"white !important"},value:v,onChange:function(e){return O(e.target.value)}}),c.a.createElement("div",{className:"checkbox"},c.a.createElement(f.a,{checked:S,style:{width:"fit-content"},onChange:function(){I((function(e){return!e}))},inputProps:{"aria-label":"primary checkbox"}}),c.a.createElement("p",null,"Important")),c.a.createElement(h.a,{variant:"contained",type:"submit",style:{marginTop:"5px",width:"fit-content",marginLeft:"auto",marginRight:"auto"},color:"primary",onSubmit:N},"Add"))),c.a.createElement(d,{tasks:r,isLoading:w,setIsLoading:L,handleDelete:function(t){window.confirm("Are you sure about delete this task?")&&fetch("".concat(e,"/delete/tasks/").concat(t.target.dataset.index),{method:"POST"}).then((function(){return p(m+1)}))}})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ca450e81.chunk.js.map