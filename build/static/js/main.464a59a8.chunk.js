(this["webpackJsonpadmin-frontend"]=this["webpackJsonpadmin-frontend"]||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},124:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),s=n.n(a),i=(n(70),n(71),n(11)),r=n(9),o=n(27),l=n(6),j=n(2),d=function(e){var t=e.component;return console.log(e),Object(j.jsx)(r.b,{render:function(e){return localStorage.authToken?Object(j.jsx)(t,Object(l.a)({},e)):Object(j.jsx)(r.a,{to:"/"})}})},u=function(e){var t=e.component;return Object(j.jsx)(r.b,{render:function(e){return localStorage.authToken?Object(j.jsx)(r.a,{to:"/users"}):Object(j.jsx)(t,Object(l.a)({},e))}})},b=n(41),h=n(56),O=n(32),m=n(23),p=(n(83),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"desktopVerticalBar",className:"shadow bg-white rounded",children:[Object(j.jsx)("div",{className:"headerImage",children:Object(j.jsx)("img",{src:"./logo.png",width:"50",height:"50",alt:"logo"})}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsxs)(i.c,{to:"/users",children:[Object(j.jsx)(b.a,{}),"Users"]}),Object(j.jsxs)(i.c,{to:"/news",children:[Object(j.jsx)(O.b,{}),"News"]}),Object(j.jsxs)(i.c,{to:"/events",children:[Object(j.jsx)(m.a,{}),"Event"]}),Object(j.jsxs)(i.c,{to:"/videos",children:[Object(j.jsx)(m.c,{}),"Video"]}),Object(j.jsxs)(i.c,{to:"/whitelist",children:[Object(j.jsx)(h.a,{}),"Whitelist"]}),Object(j.jsxs)(i.c,{to:"/fee",children:[Object(j.jsx)(O.a,{}),"Fee Control"]}),Object(j.jsxs)(i.c,{to:"/logout",children:[Object(j.jsx)(m.b,{}),"Logout"]})]})]}),Object(j.jsxs)("div",{id:"mobileVerticalBar",children:[Object(j.jsx)("div",{className:"headerImage",children:Object(j.jsx)("img",{src:"./logo512.png",width:"40",height:"40"})}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(i.c,{to:"/users",children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(i.c,{to:"/news",children:Object(j.jsx)(O.b,{})}),Object(j.jsx)(i.c,{to:"/events",children:Object(j.jsx)(m.a,{})}),Object(j.jsx)(i.c,{to:"/videos",children:Object(j.jsx)(m.c,{})}),Object(j.jsx)(i.c,{to:"/signin",children:Object(j.jsx)(m.b,{})})]})]})]})}),f=n(5),x=n(137),v=n(57),g=n(3),w=n.n(g),N=n(8),k=n(25),S=n.n(k),T=S.a.create();T.defaults.baseURL="https://apiadmin.plethori.com/",T.setAuthToken=function(e){T.defaults.headers.common.Authorization="Bearer ".concat(e)};var C=T,E=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.post("/auth",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/admins/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=(n(102),function(){var e=Object(c.useState)({}),t=Object(f.a)(e,2),n=(t[0],t[1]);return Object(c.useEffect)((function(){localStorage.authToken&&L(Object(v.a)(localStorage.authToken).userId).then((function(e){n(e)}))})),Object(j.jsx)(x.a,{expand:"lg",id:"headerBar",className:"shadow rounded",children:Object(j.jsx)("div",{className:"searchBar"})})}),y=n(20),B=n.n(y),A=(n(105),function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.get("/users");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()),D=function(){var e=Object(c.useState)("40%"),t=Object(f.a)(e,2),n=t[0],a=(t[1],Object(c.useState)("60%")),s=Object(f.a)(a,2),i=s[0],r=(s[1],Object(c.useState)([])),o=Object(f.a)(r,2),l=o[0],d=o[1];Object(c.useEffect)((function(){document.getElementsByClassName("mainContainer")[0].style.display="flex",A().then((function(e){d(e)})).catch((function(e){console.log(e)}))}),[]);var u=[{name:"Id",selector:"id",sortable:!0,width:n},{name:"Address",selector:"walletAddress",sortable:!0,width:i}];return Object(j.jsx)("div",{className:"user",children:Object(j.jsx)(B.a,{title:"User List",columns:u,data:l,defaultSortFieldId:1,pagination:!0,striped:!0,highlightOnHover:!0,responsive:!0})})},I=function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.post("/news",t,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,C.setAuthToken(localStorage.authToken),e.next=5,C.get("/news?id=".concat(t));case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0.response.data;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,C.setAuthToken(localStorage.authToken),e.next=5,C.delete("/news?id=".concat(t));case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0.response.data;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),V=(n(106),function(){var e=Object(r.g)(),t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(f.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){R("all").then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[l]);var u=[{name:"Id",selector:"id",sortable:!0,width:"8%"},{name:"Image",selector:"image",cell:function(e){return Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:"".concat("https://apiadmin.plethori.com/","/news/image?name=").concat(e.image),alt:"new_img",width:"50",height:"50"})})},width:"12%"},{name:"Title",selector:"title",sortable:!0,width:"10%"},{name:"Description",selector:"description",cell:function(e){return Object(j.jsx)("div",{className:"descriptionClass",children:e.description})},width:"38%"},{name:"Article Link",selector:"artLink",width:"20%"},{name:"Action",cell:function(t){return Object(j.jsxs)("div",{className:"actionButtons","data-tag":"allowRowEvents",children:[Object(j.jsx)("button",{className:"editButton",onClick:function(){return function(t){e.push({pathname:"/newsForm",search:"?id=".concat(t.id),state:{newsDetail:t}})}(t)},children:"Edit"}),Object(j.jsx)("button",{className:"deleteButton",onClick:function(){!function(e){M(e.id).then((function(e){window.openNotification("success","Success!","News"),d(!l)})).catch((function(e){window.openNotification("error","Error","News")}))}(t)},children:"Delete"})]})},button:!0,width:"12%"}];return Object(j.jsxs)("div",{className:"news",children:[Object(j.jsx)("button",{className:"createButton",onClick:function(){e.push("/newsForm")},children:"Create"}),Object(j.jsx)(B.a,{title:"News List",columns:u,data:a,defaultSortFieldId:1,pagination:!0,striped:!0,highlightOnHover:!0,responsive:!0})]})}),U=(n(107),function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.post("/events",t,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),q=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.get("/events?id=".concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.delete("/events?id=".concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.g)(),t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(f.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){q("all").then((function(e){console.log(e),s(e)})).catch((function(e){console.log(e)}))}),[l]);var u=[{name:"Id",selector:"id",sortable:!0,width:"10%"},{name:"Image",cell:function(e){return Object(j.jsx)("img",{src:"".concat("https://apiadmin.plethori.com/","/news/image?name=").concat(e.image),alt:"event",width:"50",height:"50"})}},{name:"Title",selector:"title",sortable:!0},{name:"Event Link",selector:"eventLink"},{name:"Time",selector:"time"},{name:"Action",cell:function(t){return Object(j.jsxs)("div",{className:"actionButtons","data-tag":"allowRowEvents",children:[Object(j.jsx)("button",{className:"editButton",onClick:function(){return function(t){e.push({pathname:"/eventsForm",search:"?id=".concat(t.id),state:{eventDetail:t}})}(t)},children:"Edit"}),Object(j.jsx)("button",{className:"deleteButton",onClick:function(){!function(e){Y(e.id).then((function(e){window.openNotification("success","Success!","Event"),d(!l)})).catch((function(e){window.openNotification("error","Error","Event")}))}(t)},children:"Delete"})]})},button:!0,width:"12%"}];return Object(j.jsxs)("div",{className:"events",children:[Object(j.jsx)("button",{className:"createButton",onClick:function(){e.push("/eventsForm")},children:"Create"}),Object(j.jsx)(B.a,{title:"Events List",columns:u,data:a,defaultSortFieldId:1,pagination:!0,striped:!0,highlightOnHover:!0,responsive:!0})]})},z=(n(108),function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.post("/video",t,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),P=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.get("/video?id=".concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.setAuthToken(localStorage.authToken),e.next=4,C.delete("/video?id=".concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(f.a)(s,2),o=i[0],l=i[1],d=Object(r.g)();Object(c.useEffect)((function(){P("all").then((function(e){a(e)})).catch((function(e){console.log(e)}))}),[o]);var u=[{name:"Id",selector:"id",sortable:!0,width:"8%"},{name:"Title",selector:"title",sortable:!0,width:"12%"},{name:"Video Link",selector:"videoLink",width:"30%"},{name:"Time",selector:"time",width:"20%"},{name:"Action",cell:function(e){return Object(j.jsxs)("div",{className:"actionButtons","data-tag":"allowRowEvents",children:[Object(j.jsx)("button",{className:"editButton",onClick:function(){return function(e){d.push({pathname:"/videosForm",search:"?id=".concat(e.id),state:{videosDetail:e}})}(e)},children:"Edit"}),Object(j.jsx)("button",{className:"deleteButton",onClick:function(){return function(e){W(e.id).then((function(e){window.openNotification("success","Success!","Video"),l(!o)})).catch((function(e){window.openNotification("error","Error","Video")}))}(e)},children:"Delete"})]})},button:!0,width:"12%"}];return Object(j.jsxs)("div",{className:"videos",children:[Object(j.jsx)("button",{className:"createButton",onClick:function(){d.push("/videosForm")},children:"Create"}),Object(j.jsx)(B.a,{title:"Videos List",columns:u,data:n,defaultSortFieldId:1,pagination:!0,striped:!0,highlightOnHover:!0,responsive:!0})]})},_=n(21),G=n(26),K=n.n(G),Q=function(e){var t=Object(c.useState)(null),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)("save"),o=Object(f.a)(i,2),d=o[0],u=(o[1],Object(c.useState)("Save")),b=Object(f.a)(u,2),h=b[0],O=(b[1],Object(c.useState)(null)),m=Object(f.a)(O,2),p=m[0],x=m[1],v=Object(c.useState)({id:"",title:"",description:"",artLink:""}),g=Object(f.a)(v,2),w=g[0],N=g[1],k=(Object(r.g)(),Object(_.a)()),S=k.register,T=k.handleSubmit,C=k.formState.errors;Object(c.useEffect)((function(){var t=K.a.parse(e.history.location.search).id;t&&R(t).then((function(e){N(e[0]),s("".concat("https://apiadmin.plethori.com/","/news/image?name=").concat(e[0].image))})).catch((function(e){console.log(e)}))}),[]);return Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("h4",{className:"headingForm",children:["News ",d]}),Object(j.jsx)("div",{className:"newsForm",children:Object(j.jsxs)("form",{onSubmit:T((function(e){var t=new FormData;t.append("file",p),t.append("id",w.id),t.append("image",w.image),t.append("title",e.title),t.append("description",e.description),t.append("artLink",e.artLink),I(t,e).then((function(e){window.openNotification("success","Success!","News")})).catch((function(e){window.openNotification("error","Error","News")}))})),children:[Object(j.jsxs)("div",{className:"imageUpload",children:[Object(j.jsx)("label",{htmlFor:"file-upload",className:"custom-file-upload",children:Object(j.jsx)("b",{children:"Upload Image"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},S("file")),{},{onChange:function(e){if(x(e.target.files[0]),e.target.files[0]){var t=new FileReader;t.addEventListener("load",(function(){s(t.result)})),t.readAsDataURL(e.target.files[0])}},id:"file-upload",type:"file"})),Object(j.jsx)("img",{className:"uploadedImage",width:"200",height:"200",src:a,alt:""})]}),Object(j.jsxs)("div",{className:"detailsForm",children:[Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Title"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},S("title",{required:!0})),{},{defaultValue:w.title,className:"form-control",placeholder:"Title"})),C.title&&Object(j.jsx)("p",{className:"errorMsg",children:"Title is required."})]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Description"})}),Object(j.jsx)("textarea",Object(l.a)(Object(l.a)({},S("description")),{},{defaultValue:w.description,className:"form-control",placeholder:"Description"}))]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Atricle Link"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},S("artLink")),{},{defaultValue:w.artLink,className:"form-control",placeholder:"Article link"}))]}),Object(j.jsx)("button",{type:"submit",className:"submitButton",children:h})]})]})})]})},X=n(18),Z=n(31),$=n.n(Z),ee=function(e){var t=Object(c.useState)(null),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(null),r=Object(f.a)(i,2),o=r[0],d=r[1],u=Object(c.useState)("save"),b=Object(f.a)(u,2),h=b[0],O=b[1],m=Object(c.useState)("Save"),p=Object(f.a)(m,2),x=p[0],v=p[1],g=Object(c.useState)({id:"",title:"",description:"",eventLink:"",time:$()().format("YYYY-MM-DD"),image:""}),w=Object(f.a)(g,2),N=w[0],k=w[1],S=Object(_.a)(),T=S.register,C=S.handleSubmit,E=S.formState.errors,L=function(e){k(Object(l.a)(Object(l.a)({},N),Object(X.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){var t=K.a.parse(e.history.location.search).id;t&&(q(t).then((function(e){k(e[0]),s("".concat("https://apiadmin.plethori.com/","/news/image?name=").concat(e[0].image))})).catch((function(e){console.log(e)})),O("update"),v("Update"))}),[e.history.location.search]),Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("h4",{className:"headingForm",children:["Event ",h]}),Object(j.jsxs)("div",{className:"eventsForm",children:[console.log(N),Object(j.jsxs)("form",{onSubmit:C((function(e){var t=new FormData;t.append("file",o),t.append("title",e.title),t.append("description",e.description),t.append("eventLink",e.eventLink),t.append("time",e.time),t.append("image",N.image),t.append("id",N.id),U(t).then((function(e){window.openNotification("success","Success!","Event")})).catch((function(e){window.openNotification("error","Error","Event")}))})),children:[Object(j.jsxs)("div",{className:"imageUpload",children:[Object(j.jsx)("label",{htmlFor:"file-upload",className:"custom-file-upload",children:Object(j.jsx)("b",{children:"Upload Image"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},T("image")),{},{onChange:function(e){if(d(e.target.files[0]),e.target.files[0]){var t=new FileReader;t.addEventListener("load",(function(){s(t.result)})),t.readAsDataURL(e.target.files[0])}},id:"file-upload",type:"file"})),Object(j.jsx)("img",{className:"uploadedImage",width:"200",height:"200",src:a,alt:""})]}),Object(j.jsxs)("div",{className:"detailsForm",children:[Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Title"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},T("title",{required:!0})),{},{value:N.title,className:"form-control",placeholder:"Title",name:"title",onChange:L})),E.title&&Object(j.jsx)("p",{className:"errorMsg",children:"Title is required."})]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Description"})}),Object(j.jsx)("textarea",Object(l.a)(Object(l.a)({},T("description")),{},{value:N.description,className:"form-control",placeholder:"Description",name:"description",onChange:L}))]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Event Link"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},T("eventLink")),{},{value:N.eventLink,className:"form-control",placeholder:"Event link",name:"eventLink",onChange:L}))]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Event Link"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},T("time")),{},{value:N.time,className:"form-control",type:"date",name:"time",onChange:L}))]}),Object(j.jsx)("button",{type:"submit",className:"submitButton",children:x})]})]})]})]})},te=function(e){var t=Object(c.useState)("save"),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)("Save"),r=Object(f.a)(i,2),o=r[0],d=r[1],u=Object(c.useState)({id:"",title:"",description:"",videoLink:"",time:$()().format("YYYY-MM-DD")}),b=Object(f.a)(u,2),h=b[0],O=b[1],m=Object(_.a)(),p=m.register,x=m.handleSubmit,v=m.formState.errors,g=function(e){O(Object(l.a)(Object(l.a)({},h),Object(X.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){var t=K.a.parse(e.history.location.search).id;t&&(P(t).then((function(e){O(e[0])})).catch((function(e){console.log(e)})),s("update"),d("Update"))}),[e.history.location.search]),Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("h4",{className:"headingForm",children:["Video ",a]}),Object(j.jsx)("div",{className:"videosForm",children:Object(j.jsx)("form",{onSubmit:x((function(e){var t=new FormData;t.append("title",e.title),t.append("description",e.description),t.append("videoLink",e.videoLink),t.append("time",e.time),t.append("id",h.id),z(t).then((function(e){window.openNotification("success","Success!","Video")})).catch((function(e){window.openNotification("error","Error","Video")}))})),children:Object(j.jsxs)("div",{className:"videoDetailsForm",children:[Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Title"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},p("title",{required:!0})),{},{value:h.title,className:"form-control",placeholder:"Title",name:"title",onChange:g})),v.title&&Object(j.jsx)("p",{className:"errorMsg",children:"Title is required."})]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Description"})}),Object(j.jsx)("textarea",Object(l.a)(Object(l.a)({},p("description")),{},{className:"form-control",value:h.description,placeholder:"Description",name:"description",onChange:g}))]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"YouTube Link"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},p("videoLink")),{},{value:h.videoLink,className:"form-control",placeholder:"YouTube link",name:"videoLink",onChange:g}))]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Time"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},p("time")),{},{value:h.time,type:"date",className:"form-control",name:"time",onChange:g}))]}),Object(j.jsx)("button",{type:"submit",className:"submitButton",children:o})]})})})]})},ne=(n(124),function(){var e=Object(r.g)(),t=Object(_.a)(),n=t.register,a=t.handleSubmit,s=t.formState.errors;return Object(c.useEffect)((function(){}),[]),Object(j.jsxs)("div",{className:"signIn",children:[Object(j.jsx)("h3",{children:"Login"}),Object(j.jsxs)("div",{className:"signInBox shadow bg-white rounded",children:[Object(j.jsx)("div",{className:"loginIcon",children:Object(j.jsx)("img",{src:"".concat("","./logo.png"),width:"150",height:"150",alt:"logo"})}),Object(j.jsx)("div",{className:"loginForm",children:Object(j.jsxs)("form",{onSubmit:a((function(t){console.log("dddd",t),E(t).then((function(t){localStorage.setItem("authToken",t.access_token),e.push("/users")})).then((function(e){console.log(e)}))})),children:[Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Email"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},n("email",{required:!0})),{},{type:"email",className:"form-control",placeholder:"Email"})),s.email&&Object(j.jsx)("p",{className:"errorMsg",children:"Email is required."})]}),Object(j.jsxs)("div",{className:"eachRow",children:[Object(j.jsx)("label",{children:Object(j.jsx)("b",{children:"Password"})}),Object(j.jsx)("input",Object(l.a)(Object(l.a)({},n("password",{required:!0})),{},{className:"form-control",placeholder:"Password",type:"password"})),s.password&&Object(j.jsx)("p",{className:"errorMsg",children:"Password is required."})]}),Object(j.jsx)("button",{type:"submit",className:"loginButton",children:"Login"})]})})]})]})}),ce=function(){return localStorage.clear(),window.location.href="/",Object(j.jsx)("div",{className:"logout",children:Object(j.jsx)("span",{})})},ae=(n(125),"https://api-whitelist.plethori.com"),se=n(38),ie=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"15",className:"trash",children:Object(j.jsx)("path",{d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"})})};var re=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){S.a.get("".concat(ae)).then((function(e){console.log("responsive....",e),200===e.status&&a(e.data)}))}),[]),Object(j.jsx)("main",{className:"main",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"pledge-list",children:[Object(j.jsx)("div",{className:"form-submit",children:Object(j.jsx)(i.b,{to:"/",className:"btn-submit",children:"Back"})}),Object(j.jsx)("div",{className:"lists",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"No"}),Object(j.jsx)("th",{children:"Social Site"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Amount"}),Object(j.jsx)("th",{children:"Comments"}),Object(j.jsx)("th",{})]})}),Object(j.jsx)("tbody",{children:n.length>0?n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t+1}),Object(j.jsx)("td",{children:e.social}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.amount}),Object(j.jsx)("td",{children:e.comments}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{onClick:function(){var t;t=e.id,S.a.get("".concat(ae,"/delete/").concat(t)).then((function(e){console.log(e),200===e.status&&(se.a.success("Successfully deleted."),a(n.filter((function(e){return e.id!==t}))))}))},children:Object(j.jsx)(ie,{})})})]},"list-"+t)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"6",className:"no-data",children:"There is no available data."})})})]})})]})})})},oe=n(63),le=n.n(oe);n(129);var je=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("main",{className:"main",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"pledge-list",children:[Object(j.jsx)("div",{className:"form-submit",children:Object(j.jsx)("div",{className:"btn-submit",children:"Wallet Connect"})}),Object(j.jsxs)("div",{className:"toggle-container",children:[Object(j.jsx)(le.a,{id:"cheese-status",defaultChecked:n,onChange:function(){a(!n)}}),Object(j.jsx)("label",{htmlFor:"cheese-status",className:"fee-title",children:"Staking Fee OFF/ON"})]})]})})})};var de=function(){return Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"contentContainer",children:[Object(j.jsx)(F,{}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(d,{path:"/users",component:D}),Object(j.jsx)(d,{path:"/news",component:V}),Object(j.jsx)(d,{path:"/events",component:H}),Object(j.jsx)(d,{path:"/videos",component:J}),Object(j.jsx)(d,{path:"/newsForm",component:Q}),Object(j.jsx)(d,{path:"/eventsForm",component:ee}),Object(j.jsx)(d,{path:"/videosForm",component:te}),Object(j.jsx)(d,{path:"/whitelist",component:re}),Object(j.jsx)(d,{path:"/fee",component:je}),Object(j.jsx)(d,{path:"/logout",component:ce})]})]})]})},ue=function(){return window.openNotification=function(e,t,n){switch(e){case"info":o.NotificationManager.info("Info message");break;case"success":o.NotificationManager.success(t,n);break;case"warning":o.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":o.NotificationManager.error("Error message","Click me!",5e3,(function(){alert("callback")}))}},Object(c.useEffect)((function(){}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(i.a,{children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(r.a,{to:"/signin"})}),Object(j.jsx)(u,{path:"/signin",component:ne}),Object(j.jsx)(de,{})]})}),Object(j.jsx)(o.NotificationContainer,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(130),n(131);s.a.render(Object(j.jsx)(ue,{}),document.getElementById("root")),be()},70:function(e,t,n){},71:function(e,t,n){},83:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.464a59a8.chunk.js.map