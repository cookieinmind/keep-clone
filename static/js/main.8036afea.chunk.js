/*! For license information please see main.8036afea.chunk.js.LICENSE.txt */
(this.webpackJsonplearning=this.webpackJsonplearning||[]).push([[0],{162:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(17),s=n.n(i),o=(n(162),n(22)),u=n(51),l=n(14),d=n(256),j=n(7),f=n(58),b=n(141),p=n.n(b),h=n(138),x=n.n(h),O=n(139),m=n.n(O),g=n(112),v=n.n(g),w=n(107),y=n.n(w),N=n(97),k=n.n(N),C=n(109),S=n.n(C),B=n(140),I=n.n(B),A=n(143),E=n.n(A),D=n(142),R=n.n(D),T=n(66),L=n.n(T),z=n(144),F=n.n(z),P=n(67),W=n.n(P),J=n(68),K=n.n(J),M=n(94),_=n.n(M),H=n(95),q=n.n(H),G=n(11),Q=n.n(G),U=n(19),V=n(88),X=n(269),Y=n(270),Z=n(29),$=n(268),ee="KEEP-CLONE__NOTES",te="KEEP-CLONE__TAGS",ne=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object($.a)(),t.id=n,e.next=4,ae();case 4:return a=e.sent,r=[t].concat(Object(Z.a)(a)),localStorage.setItem(ee,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(t)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e,t=localStorage.getItem(ee);if(t){var n=JSON.parse(t);e=n}else e=[];return new Promise((function(t){t(e)}))},re=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return n=e.sent,a=n.filter((function(e){return e.id!==t.id})),r=[].concat(Object(Z.a)(a),[t]),localStorage.setItem(ee,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(t)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return n=e.sent,a=n.filter((function(e){return e.id!==t.id})),localStorage.setItem(ee,JSON.stringify(a)),e.abrupt("return",new Promise((function(e){e(t)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e,t=localStorage.getItem(te);if(t){var n=JSON.parse(t);e=n}else e=[];return new Promise((function(t){t(e)}))},se=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){var t=Object($.a)();return e.id=t,e})),e.next=3,ie();case 3:return a=e.sent,r=[].concat(Object(Z.a)(n),Object(Z.a)(a)),localStorage.setItem(te,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(n)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(U.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ie());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(U.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ae());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ce(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.alive="alive",e.deleted="deleted",e.archived="archived"}(a||(a={}));var be,pe=n(2),he={tags:[],notes:[],createNote:function(){return console.log("loading context")},deleteNote:function(){return console.log("loading context")},archiveNote:function(){return console.log("loading context")}},xe=Object(r.createContext)(he),Oe=function(){return Object(r.useContext)(xe)},me=function(e){var t=e.children,n=Object(V.b)(),r=Object(X.a)("notes",le).data,c=Object(X.a)("tags",oe).data,i=Object(Y.a)(je).mutateAsync,s=Object(Y.a)(ue).mutateAsync,o=Object(Y.a)(fe).mutateAsync,u=Object(Y.a)(de,{onSuccess:function(){return l()}}).mutateAsync,l=function(){n.invalidateQueries("notes")},d=function(){var e=Object(U.a)(Q.a.mark((function e(t){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("creating"),e.next=3,i(t);case 3:if(l(),!((r=null===(a=t.tags)||void 0===a?void 0:a.filter((function(e){return console.log(c,e),!1===(null===c||void 0===c?void 0:c.some((function(t){return t.name===e.name})))})))&&r.length>0)){e.next=9;break}return e.next=8,s(r);case 8:n.invalidateQueries("tags");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={notes:r||[],tags:c||[],createNote:d,deleteNote:function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.status,e.next=e.t0===a.alive||e.t0===a.archived?3:e.t0===a.deleted?7:10;break;case 3:return t.status=a.deleted,e.next=6,o(t);case 6:return e.abrupt("break",11);case 7:return e.next=9,u(t);case 9:return e.abrupt("break",11);case 10:throw new Error("server context error");case 11:l();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),archiveNote:function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("server context","archiving"),t.status=a.archived,e.next=4,o(t);case 4:l();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return Object(pe.jsx)(xe.Provider,{value:j,children:t})},ge=n(145),ve=n.n(ge),we=n(37),ye=function(e){var t=e.toLowerCase(),n=t.charAt(0);return n=n.toUpperCase(),t=t.slice(1,t.length),console.log(t,n,e),n+t},Ne=240,ke=Object(d.a)((function(e){return Object(f.createStyles)({root:{display:"flex",height:"100%",width:"100%"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},homeButton:{textDecoration:"none",color:"#fff"},sidebarLink:{textDecoration:"none",color:"#121212",textTransform:"capitalize"},appBarShift:{marginLeft:Ne,width:"calc(100% - ".concat(Ne,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Ne,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Ne,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}})})),Ce={title:"loading layout context",setTitle:function(e){return console.log("called mock state from layout context ")}},Se=Object(r.createContext)(Ce),Be=function(e){var t,n,a=e.children,r=ke(),i=Object(f.useTheme)(),s=c.a.useState(!1),u=Object(o.a)(s,2),d=u[0],b=u[1],h=c.a.useState(""),O=Object(o.a)(h,2),g=O[0],w=O[1],N=Oe().tags,C={title:g,setTitle:w};return Object(pe.jsxs)("div",{className:r.root,children:[Object(pe.jsx)(x.a,{position:"fixed",className:Object(j.default)(r.appBar,Object(l.a)({},r.appBarShift,d)),children:Object(pe.jsxs)(m.a,{children:[Object(pe.jsx)(S.a,{color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},edge:"start",className:Object(j.default)(r.menuButton,Object(l.a)({},r.hide,d)),children:Object(pe.jsx)(I.a,{})}),Object(pe.jsx)(we.b,{to:"/",className:r.homeButton,children:Object(pe.jsx)(y.a,{variant:"h6",noWrap:!0,children:""!==g?ye(g):"Keep Clone"})})]})}),Object(pe.jsxs)(p.a,{variant:"permanent",className:Object(j.default)(r.drawer,(t={},Object(l.a)(t,r.drawerOpen,d),Object(l.a)(t,r.drawerClose,!d),t)),classes:{paper:Object(j.default)((n={},Object(l.a)(n,r.drawerOpen,d),Object(l.a)(n,r.drawerClose,!d),n))},children:[Object(pe.jsx)("div",{className:r.toolbar,children:Object(pe.jsx)(S.a,{onClick:function(){b(!1)},children:"rtl"===i.direction?Object(pe.jsx)(R.a,{}):Object(pe.jsx)(E.a,{})})}),Object(pe.jsx)(k.a,{}),Object(pe.jsxs)(v.a,{children:[Object(pe.jsx)(we.b,{to:"/",className:r.sidebarLink,children:Object(pe.jsxs)(L.a,{button:!0,children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(F.a,{})}),Object(pe.jsx)(K.a,{primary:"Keep Clone"})]})}),N&&N.length>0&&Object(pe.jsx)(k.a,{}),N&&N.map((function(e){return Object(pe.jsx)(we.b,{to:"/"+e.name,className:r.sidebarLink,children:Object(pe.jsxs)(L.a,{button:!0,children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(ve.a,{})}),Object(pe.jsx)(K.a,{primary:e.name})]})},e.name)}))]}),Object(pe.jsx)(k.a,{}),Object(pe.jsxs)(v.a,{children:[Object(pe.jsx)(we.b,{to:"/status/archived",className:r.sidebarLink,children:Object(pe.jsxs)(L.a,{button:!0,children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(_.a,{})}),Object(pe.jsx)(K.a,{primary:"Archived"})]})},"Archived"),Object(pe.jsx)(we.b,{to:"/status/deleted",className:r.sidebarLink,children:Object(pe.jsxs)(L.a,{button:!0,children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(q.a,{})}),Object(pe.jsx)(K.a,{primary:"Bin"})]})},"Deleted")]})]}),Object(pe.jsxs)("main",{className:r.content,children:[Object(pe.jsx)("div",{className:r.toolbar}),Object(pe.jsx)(Se.Provider,{value:C,children:a})]})]})},Ie=n(146),Ae=n(259),Ee=n(266),De=Object(d.a)({test:{backgroundColor:"#121212"},container:{width:"100%",gridColumn:"5/9",height:"50px",padding:"8px 16px",borderRadius:"5px"},input:{height:"100%",width:"100%"}}),Re=function(e){e.isInputFocused;var t=e.setIsInputFocused,n=De();return Object(pe.jsx)(Ae.a,{square:!0,className:n.container,children:Object(pe.jsx)(Ee.a,{className:n.input,placeholder:"Take a note...",onFocus:function(e){t(!0)}})})},Te=n(271),Le=n(261),ze=n(260),Fe=n(147),Pe=n.n(Fe),We=Object(d.a)({tagsContainer:{display:"flex",padding:"2px 8px",borderRadius:"50px",alignItems:"center"}}),Je=function(e){var t=e.tag,n=e.onDeletion,a=We();return Object(pe.jsxs)(Ae.a,{className:a.tagsContainer,children:[t,Object(pe.jsx)(ze.a,{"aria-label":"delete",size:"small",onClick:function(){n(t)},children:Object(pe.jsx)(Pe.a,{})})]})},Ke=Object(d.a)({tagsContainer:{flex:"1 1 auto",display:"flex",flexWrap:"wrap",gap:"1rem"}}),Me=function(e){var t=e.tags,n=e.onDeletion,a=Ke();return Object(pe.jsx)(Te.a,{className:a.tagsContainer,children:t.map((function(e){return Object(pe.jsx)(Je,{tag:e,onDeletion:n},e)}))})},_e=Object(d.a)((function(e){return{normal:{width:"100%",display:"flex",border:"0px solid black"},bolder:{width:"100%",display:"flex",border:"0px solid black",fontWeight:e.typography.fontWeightMedium}}})),He=function(e){var t=e.placeholder,n=e.submit,a=e.content,c=e.setContent,i=e.tags,s=e.setTags,o=e.onLostFocus,u=e.bold,l=e.inputRef,d=_e(),j=Object(r.useRef)(!1),f=Object(r.useRef)(""),b=function(){s([].concat(Object(Z.a)(i),[f.current]));var e=x(f.current,a);c(e),f.current=""},p=function(){""!==f.current&&b(),n()},h=function(e,t){var n=t;if("Backspace"===e){console.log(e,t),n.length<1&&(j.current=!1);var a=n.slice(0,n.length-1);n=a}else n+=e;return n},x=function(e,t){return t.replace(e,"").replace("#","").trim()+" "};return Object(pe.jsx)(Ee.a,{placeholder:t,multiline:!0,className:u?d.bolder:d.normal,onBlur:o,onChange:function(e){c(e.target.value)},inputRef:l||null,value:a,onKeyUp:function(e){if("Shift"!==e.key){var t="#"===e.key,n=" "===e.key;if(t)j.current=!0;else{n&&(j.current=!1);var a=""!==f.current;j.current?f.current=h(e.key,f.current):a&&b();var r="Enter"===e.code,c=e.nativeEvent.ctrlKey;r&&c&&p()}}}})},qe=Object(d.a)({root:{display:"flex",height:"auto",minHeight:"100px",flexDirection:"column",alignItems:"flex-end",padding:"1rem 1rem",gap:"1.5rem",gridColumn:"4/10",borderRadius:"5px"},inputsContainer:{width:"100%",display:"flex",height:"auto",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem",borderRadius:"5px"},footer:{width:"100%",display:"flex",justifyContent:"flex-end"},submitButton:{flex:"0"}}),Ge=function(e){var t=e.setIsInputFocused,n=e.addNote,c=function(){return t(!1)},i=qe(),s=Object(r.useRef)(null),u=Object(r.useState)(""),l=Object(o.a)(u,2),d=l[0],j=l[1],f=Object(r.useState)(""),b=Object(o.a)(f,2),p=b[0],h=b[1],x=Object(r.useState)([]),O=Object(o.a)(x,2),m=O[0],g=O[1],v=Object(r.useState)(!1),w=Object(o.a)(v,2),y=w[0],N=w[1];Object(r.useEffect)((function(){N(""!==d||""!==p)}),[d,p]),Object(r.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.focus()}),[s]);var k=function(){if(y){var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),r={title:p,content:d,date:t,tags:C(m),status:a.alive};n(r),c()}},C=function(e){return e.map((function(e){return{name:e}}))};return Object(pe.jsxs)(Ae.a,{square:!0,className:i.root,children:[Object(pe.jsxs)(Te.a,{className:i.inputsContainer,onBlur:function(e){null===e.relatedTarget&&c()},children:[Object(pe.jsx)(He,{bold:!0,placeholder:"Title",submit:k,content:p,setContent:h,tags:m,setTags:g}),Object(pe.jsx)(He,{placeholder:"Take a note...",submit:k,content:d,setContent:j,tags:m,setTags:g,inputRef:s})]}),Object(pe.jsxs)(Te.a,{className:i.footer,children:[(null===m||void 0===m?void 0:m.length)>0&&Object(pe.jsx)(Me,{tags:m,onDeletion:function(e){var t=m.filter((function(t){return t!==e}));g(t)}}),Object(pe.jsx)(Le.a,{className:i.submitButton,onClick:k,disabled:!y,children:"Save"})]})]})},Qe=n(20),Ue=n(262),Ve=Object(d.a)((function(e){return{root:{width:"100%",justifyContent:"center"}}})),Xe=function(){var e=Ve(),t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Oe(),s=Object(Qe.f)().tag,l=function(e){c(e)},d=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=j(t),null===i||void 0===i||i.createNote(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t;if(!e.tags||e.tags.length<1)t=Object(u.a)(Object(u.a)({},e),{},{tags:[]});else{var n,a=[],r=Object(Ie.a)(e.tags);try{for(r.s();!(n=r.n()).done;){var c={name:n.value.name.replace("#","")};a.push(c)}}catch(d){r.e(d)}finally{r.f()}t=Object(u.a)(Object(u.a)({},e),{},{tags:a})}var o=i.tags.find((function(e){return e.name===s}));if(o){var l=t.tags.length<1||t.tags.some((function(e){return e.name!==o.name}));o&&l&&t.tags.push(o)}return t};return Object(pe.jsx)(Ue.a,{container:!0,className:e.root,children:Object(pe.jsx)(Ue.a,{item:!0,xs:10,sm:8,md:6,lg:4,children:a?Object(pe.jsx)(Ge,{isInputFocused:a,setIsInputFocused:l,addNote:d}):Object(pe.jsx)(Re,{isInputFocused:a,setIsInputFocused:l})})})},Ye=n(264),Ze=n(263),$e=n(151),et=Object(d.a)({root:{backgroundColor:"#f2f2f2",borderRadius:"10px",fontVariant:"small-caps",fontWeight:"bold",fontSize:"0.688rem",padding:"0.25em 0.75em"}}),tt=function(e){var t=e.tag,n=et();return Object(pe.jsx)(Te.a,{className:n.root,children:t.name})},nt=Object(d.a)({root:{display:"flex",gap:"1rem",width:"100%"}}),at=function(e){var t=e.tags,n=nt();return Object(pe.jsx)(Te.a,{className:n.root,children:t.map((function(e){return Object(pe.jsx)(tt,{tag:e},e.name)}))})},rt=n(149),ct=n.n(rt),it=n(265),st=Object(d.a)((function(e){return{root:{display:"flex",gap:"1.5rem"},rootHide:{visibility:"hidden",display:"flex",gap:"1.5rem"},button:{padding:"0px"},more:{flex:"1 1 auto",display:"flex",placeContent:"end"}}})),ot=function(e){var t=e.visible,n=e.archiveNote,a=e.deleteNote,r=st();return Object(pe.jsxs)(Te.a,{className:t?r.root:r.rootHide,children:[Object(pe.jsx)(it.a,{title:"Archive",children:Object(pe.jsx)(ze.a,{className:r.button,onClick:n,children:Object(pe.jsx)(_.a,{fontSize:"small"})})}),Object(pe.jsx)(it.a,{title:"Delete",children:Object(pe.jsx)(ze.a,{className:r.button,onClick:a,children:Object(pe.jsx)(q.a,{fontSize:"small"})})})]})},ut=Object(f.makeStyles)((function(e){return Object(f.createStyles)({root:{cursor:"pointer",width:"15rem",padding:"2rem 1rem",display:"flex",flexDirection:"column",border:"1px solid #c4c4c4",borderRadius:"15px",gap:"1rem","&:hover":{boxShadow:"2px 2px 5px 0px rgba(0,0,0,0.1), -1px -1px 5px 0px rgba(0,0,0,0.1)"},"&:hover #headerButton":{visibility:"visible"}},headerContainer:{width:"100%",display:"flex",gap:"1rem",justifyContent:"flex-start",alignItems:"start"},title:{flex:"1 1 auto",fontSize:"1.375rem",fontWeight:e.typography.fontWeightMedium},content:{flex:"1 1 auto",fontSize:"0.875rem",fontWeight:e.typography.fontWeightRegular},headerButton:{padding:0,visibility:"hidden"},actionsContainer:{justifyContent:"flex-start"},noteTitle:{fontSize:"2rem"}})})),lt=function(e){var t=e.note,n=e.deteleteNote,a=e.archiveNote,c=ut(),i=Object(r.useState)(!1),s=Object(o.a)(i,2),u=s[0],l=s[1];return Object(pe.jsxs)(Te.a,{className:c.root,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[Object(pe.jsxs)(Te.a,{className:c.headerContainer,children:[t.title&&Object(pe.jsx)(Ze.a,{className:c.title,children:t.title}),!t.title&&Object(pe.jsx)(Ze.a,{className:c.content,children:t.content}),Object(pe.jsx)(ze.a,{className:c.headerButton,id:"headerButton",children:Object(pe.jsx)(ct.a,{})})]}),t.title&&Object(pe.jsx)(Ze.a,{className:c.content,children:t.content}),t.tags&&Object(pe.jsx)(at,{tags:t.tags}),Object(pe.jsx)(ot,{visible:u,deleteNote:function(){n(t)},archiveNote:function(){a(t)}})]})},dt=Object(d.a)({root:{display:"flex",width:"100%",flexDirection:"column",gap:"2rem"}}),jt={default:4,1100:3,700:2,450:1};!function(e){e.All="All",e.Archived="Archive",e.Bin="Bin"}(be||(be={}));var ft=function(e){var t=e.notes,n=e.deteleteNote,c=e.archiveNote,i=dt(),s=Object(Qe.f)(),u=s.tag,l=s.status,d=Object(r.useContext)(Se).setTitle,j=Object(r.useState)(be.All),f=Object(o.a)(j,2),b=f[0],p=f[1];Object(r.useEffect)((function(){if(u)d(u),p(be.All);else if(l)switch(l){case"archived":d(be.Archived),p(be.Archived);break;case"deleted":d(be.Bin),p(be.Bin);break;default:throw new Error("tried to update the style but the status passed was not found")}else d(""),p(be.All)}),[u,l,d]);var h=null===t||void 0===t?void 0:t.filter(u?function(e){var t=!u,n=e.tags&&e.tags.some((function(e){return e.name===u}));return e.status===a.alive&&(t||n)}:l?function(e){if(l){var t=a[l];return e.status===t}}:function(e){return e.status===a.alive});return Object(pe.jsxs)(Te.a,{className:i.root,children:[b===be.Bin&&Object(pe.jsx)(Ze.a,{align:"center",children:"Notes in the Recycle Bin are deleted after 7 days."}),Object(pe.jsx)($e.a,{breakpointCols:jt,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:h.map((function(e){return Object(pe.jsx)("div",{children:Object(pe.jsx)(lt,{note:e,deteleteNote:n,archiveNote:c})},e.id)}))})]})},bt=Object(d.a)({root:{display:"flex",flexDirection:"column",gap:"3rem",justifyContent:"center"}});var pt=function(){var e=bt(),t=Oe(),n=t.notes,a=t.deleteNote,c=t.archiveNote;return Object(r.useEffect)((function(){return console.log("this app is running with local storage")}),[]),Object(pe.jsx)(Be,{children:Object(pe.jsx)(Ye.a,{maxWidth:"lg",children:Object(pe.jsxs)(Qe.c,{children:[Object(pe.jsx)(Qe.a,{path:"/status/:status",exact:!0,children:Object(pe.jsx)(ft,{notes:n,deteleteNote:a,archiveNote:c})}),Object(pe.jsx)(Qe.a,{path:"/:tag?",children:Object(pe.jsxs)(Te.a,{className:e.root,children:[Object(pe.jsx)(Xe,{}),Object(pe.jsx)(ft,{notes:n,deteleteNote:a,archiveNote:c})]})})]})})})},ht=n(150),xt=n.n(ht),Ot=new(n(267).a);console.log("/keep-clone"),s.a.render(Object(pe.jsxs)(c.a.StrictMode,{children:[Object(pe.jsx)(xt.a,{}),Object(pe.jsx)(V.a,{client:Ot,children:Object(pe.jsx)(me,{children:Object(pe.jsx)(we.a,{basename:"/keep-clone",children:Object(pe.jsx)(pt,{})})})})]}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.8036afea.chunk.js.map