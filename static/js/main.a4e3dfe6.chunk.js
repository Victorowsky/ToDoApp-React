(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{47:function(e,t,a){e.exports=a(60)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(52),a(26)),i=(a(53),a(96)),s=a(39),u=a.n(s),m=a(94),d=(a(54),function(e){var t=e.tasks,a=e.handleDelete,n=t.map((function(e,t){var n=e.userData.important?{border:"2px solid red"}:{};return r.a.createElement("li",{onClick:a,"data-index":e._id,key:t,style:n},r.a.createElement("p",{"data-index":e._id},t+1,".",e.userData.text),r.a.createElement(u.a,{"data-index":e._id,style:{position:"relative",right:"2%"}}))}));return r.a.createElement("div",{className:"taskList"},r.a.createElement("h2",null,"Aktualne zadania"),n[0]?r.a.createElement("ul",null," ",n," "):r.a.createElement(m.a,{style:{marginRight:"auto",marginLeft:"auto",marginTop:"10px"}}))}),h=a(95),p=a(97);var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];localStorage.getItem("userID")||localStorage.setItem("userID",Math.floor(1e9*Math.random()));var o=Object(n.useState)(1),s=Object(l.a)(o,2),u=s[0],m=s[1],f=Object(n.useState)(""),b=Object(l.a)(f,2),g=b[0],E=b[1],k=Object(n.useState)(!1),y=Object(l.a)(k,2),v=y[0],j=y[1],S=localStorage.getItem("userID");Object(n.useEffect)((function(){fetch("https://just-cheddar-yumberry.glitch.me/take/tasks/".concat(S)).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[u]);var O=function(e){e.preventDefault(),g&&(fetch("https://just-cheddar-yumberry.glitch.me/add/tasks/".concat(g,"/").concat(v,"/").concat(S),{method:"POST",mode:"no-cors"}).then(m(u+1)),j(!1),E(""))};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"addTask"},r.a.createElement("form",{onSubmit:O,formMethod:"POST"},r.a.createElement("h1",null," Add task"),r.a.createElement(i.a,{id:"standard-basic",label:"Insert your task",style:{color:"white !important"},value:g,onChange:function(e){return E(e.target.value)}}),r.a.createElement("div",{className:"checkbox"},r.a.createElement(p.a,{checked:v,style:{width:"fit-content"},onChange:function(){j((function(e){return!e}))},inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement("p",null,"Important")),r.a.createElement(h.a,{variant:"contained",type:"submit",style:{marginTop:"5px",width:"fit-content",marginLeft:"auto",marginRight:"auto"},color:"primary",onSubmit:O},"Add"))),r.a.createElement(d,{tasks:a,handleDelete:function(e){window.confirm("Are you sure about delete this task?")&&fetch("https://just-cheddar-yumberry.glitch.me/delete/tasks/".concat(e.target.dataset.index),{method:"POST"}).then(m(u+1))}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a4e3dfe6.chunk.js.map