(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},53:function(t,e,n){t.exports={ListTable:"ContactsList_ListTable__1Ytcg"}},55:function(t,e,n){t.exports={Form:"ContactForm_Form__pQevV",FormLabel:"ContactForm_FormLabel__BVSMM",FormInput:"ContactForm_FormInput__32Wq3"}},56:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),o=n.n(a),u=n(5),s=(n(33),n(34),n(8)),b=n.n(s),i=n(3),j=Object(i.b)("contacts/fetchContactsRequest"),l=Object(i.b)("contacts/fetchContactsSuccess"),O=Object(i.b)("contacts/fetchContactsError"),f=Object(i.b)("contacts/addContactsRequest"),d=Object(i.b)("contacts/addContactsSuccess"),p=Object(i.b)("contacts/addContactsError"),m=Object(i.b)("contacts/deleteContactRequest"),h=Object(i.b)("contacts/deleteContactSuccess"),y=Object(i.b)("contacts/deleteContactError"),x=Object(i.b)("contacts/changeFilter");b.a.defaults.baseURL="http://localhost:4000";var v=n(10),C=function(t){return t.contacts.items},g=Object(v.a)([C,function(t){return t.contacts.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),F=(n(53),n(1)),L=function(){var t=Object(u.b)(),e=Object(u.c)(g);return Object(c.useEffect)((function(){t((function(t){t(j()),b.a.get("/contacts").then((function(e){var n=e.data;return t(l(n))})).catch((function(e){return t(O(e.message))}))}))}),[t]),Object(F.jsx)("table",{className:"List-table",children:Object(F.jsx)("tbody",{children:e.map((function(e){var n=e.name,c=e.number,r=e.id;return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:n}),Object(F.jsx)("td",{children:c}),Object(F.jsx)("td",{children:Object(F.jsx)("button",{type:"button",onClick:function(){return t(function(t){return function(e){e(m()),b.a.delete("/contacts/".concat(t)).then((function(){return e(h(t))})).catch((function(t){return e(y(t.message))}))}}(r))},children:"del"})})]},r)}))})})},_=n(15);n(55);var w=function(){var t=Object(u.b)(),e=Object(c.useState)(""),n=Object(_.a)(e,2),r=n[0],a=n[1],o=Object(c.useState)(""),s=Object(_.a)(o,2),i=s[0],j=s[1],l=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":j(c);break;default:return}},O=Object(u.c)((function(t){return C(t)}));return Object(F.jsxs)("form",{className:"Form",onSubmit:function(e){if(e.preventDefault(),""!==r.trim()&&""!==i.trim()){var n,c=function(){var t=r.toLowerCase();return O.find((function(e){return e.name.toLowerCase()===t}))}();if(c)alert("".concat(c.name," is already in contacts."));else t((n={name:r,number:i},function(t){t(f()),b.a.post("/contacts",n).then((function(e){var n=e.data;return t(d(n))})).catch((function(e){return t(p(e.message))}))})),a(""),j("")}else alert("Fill all fields!")},children:[Object(F.jsxs)("label",{className:"Form-label",children:["Name",Object(F.jsx)("input",{className:"Form-input",type:"text",name:"name",value:r,onChange:l})]}),Object(F.jsxs)("label",{className:"Form-label",children:["Number",Object(F.jsx)("input",{className:"Form-input",type:"text",name:"number",value:i,onChange:l})]}),Object(F.jsx)("button",{type:"submit",children:"Add contact"})]})},N=function(){var t=Object(u.b)();return Object(F.jsx)("label",{children:Object(F.jsx)("input",{type:"text",name:"filter",onChange:function(e){return t(x(e.target.value))}})})};var S,k,E,q=function(){var t=Object(u.c)((function(t){return function(t){return t.contacts.error}(t)})),e=Object(u.c)((function(t){return function(t){return t.contacts.loading}(t)}));return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(w,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(F.jsx)(N,{}),e&&Object(F.jsx)("p",{children:" Loading... "}),t&&Object(F.jsx)("p",{children:" Sorry, something goes wrong: "+t}),Object(F.jsx)(L,{})]})},R=n(2),T=n(16),A=n(6),I=Object(i.c)([],(S={},Object(R.a)(S,l.type,(function(t,e){return e.payload})),Object(R.a)(S,d.type,(function(t,e){return[].concat(Object(T.a)(t),[e.payload])})),Object(R.a)(S,h.type,(function(t,e){var n=t.filter((function(t){return t.id!==e.payload}));return Object(T.a)(n)})),S)),M=Object(i.c)("",Object(R.a)({},x.type,(function(t,e){return e.payload}))),B=Object(i.c)(!1,(k={},Object(R.a)(k,j.type,(function(){return!0})),Object(R.a)(k,l.type,(function(){return!1})),Object(R.a)(k,O.type,(function(){return!1})),Object(R.a)(k,f.type,(function(){return!0})),Object(R.a)(k,d.type,(function(){return!1})),Object(R.a)(k,p.type,(function(){return!1})),Object(R.a)(k,m.type,(function(){return!0})),Object(R.a)(k,h.type,(function(){return!1})),Object(R.a)(k,y.type,(function(){return!1})),k)),J=Object(i.c)("",(E={},Object(R.a)(E,O.type,(function(t,e){return e.payload})),Object(R.a)(E,p.type,(function(t,e){return e.payload})),Object(R.a)(E,y.type,(function(t,e){return e.payload})),Object(R.a)(E,j.type,(function(){return""})),Object(R.a)(E,f.type,(function(){return""})),Object(R.a)(E,m.type,(function(){return""})),E)),V=Object(A.b)({items:I,filter:M,loading:B,error:J}),D=Object(i.a)({reducer:{contacts:V},devTools:!1});o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(u.a,{store:D,children:Object(F.jsx)(q,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b48c82d2.chunk.js.map