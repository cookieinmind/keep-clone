/*! For license information please see main.b851d8d4.chunk.js.LICENSE.txt */
(this.webpackJsonplearning=this.webpackJsonplearning||[]).push([[0],{162:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(17),s=n.n(i),o=(n(162),n(22)),u=n(49),l=n(14),d=n(255),j=n(7),f=n(65),b=n(140),p=n.n(b),h=n(137),x=n.n(h),O=n(138),m=n.n(O),g=n(111),v=n.n(g),w=n(106),y=n.n(w),N=n(96),k=n.n(N),C=n(110),S=n.n(C),I=n(139),B=n.n(I),A=n(142),E=n.n(A),D=n(141),T=n.n(D),R=n(66),L=n.n(R),z=n(143),F=n.n(z),P=n(67),W=n.n(P),J=n(68),K=n.n(J),M=n(93),_=n.n(M),H=n(94),q=n.n(H),G=n(11),Q=n.n(G),U=n(19),V=n(88),X=n(269),Y=n(270),Z=n(29),$=n(268),ee="KEEP-CLONE__NOTES",te="KEEP-CLONE__TAGS",ne=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object($.a)(),t.id=n,e.next=4,ae();case 4:return a=e.sent,r=[t].concat(Object(Z.a)(a)),localStorage.setItem(ee,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(t)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e,t=localStorage.getItem(ee);if(t){var n=JSON.parse(t);e=n}else e=[];return new Promise((function(t){t(e)}))},re=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return n=e.sent,a=n.filter((function(e){return e.id!==t.id})),r=[].concat(Object(Z.a)(a),[t]),localStorage.setItem(ee,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(t)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return n=e.sent,a=n.filter((function(e){return e.id!==t.id})),localStorage.setItem(ee,JSON.stringify(a)),e.abrupt("return",new Promise((function(e){e(t)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e,t=localStorage.getItem(te);if(t){var n=JSON.parse(t);e=n}else e=[];return new Promise((function(t){t(e)}))},se=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){var t=Object($.a)();return e.id=t,e})),e.next=3,ie();case 3:return a=e.sent,r=[].concat(Object(Z.a)(n),Object(Z.a)(a)),localStorage.setItem(te,JSON.stringify(r)),e.abrupt("return",new Promise((function(e){e(n)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(U.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ie());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(U.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ae());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ce(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.alive="alive",e.deleted="deleted",e.archived="archived"}(a||(a={}));var be,pe=n(2),he={tags:[],notes:[],createNote:function(){return console.log("loading context")},deleteNote:function(){return console.log("loading context")},archiveNote:function(){return console.log("loading context")}},xe=Object(r.createContext)(he),Oe=function(){return Object(r.useContext)(xe)},me=function(e){var t=e.children,n=Object(V.b)(),r=Object(X.a)("notes",le).data,c=Object(X.a)("tags",oe).data,i=Object(Y.a)(je).mutateAsync,s=Object(Y.a)(ue).mutateAsync,o=Object(Y.a)(fe).mutateAsync,u=Object(Y.a)(de,{onSuccess:function(){return l()}}).mutateAsync,l=function(){n.invalidateQueries("notes")},d=function(){var e=Object(U.a)(Q.a.mark((function e(t){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:if(l(),!((r=null===(a=t.tags)||void 0===a?void 0:a.filter((function(e){return!1===(null===c||void 0===c?void 0:c.some((function(t){return t.name===e.name})))})))&&r.length>0)){e.next=8;break}return e.next=7,s(r);case 7:n.invalidateQueries("tags");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={notes:r||[],tags:c||[],createNote:d,deleteNote:function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.status,e.next=e.t0===a.alive||e.t0===a.archived?3:e.t0===a.deleted?7:10;break;case 3:return t.status=a.deleted,e.next=6,o(t);case 6:return e.abrupt("break",11);case 7:return e.next=9,u(t);case 9:return e.abrupt("break",11);case 10:throw new Error("server context error");case 11:l();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),archiveNote:function(){var e=Object(U.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.status=a.archived,e.next=3,o(t);case 3:l();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return Object(pe.jsx)(xe.Provider,{value:j,children:t})},ge=n(144),ve=n.n(ge),we=n(20),ye=n(46),Ne=function(e){var t=e.toLowerCase(),n=t.charAt(0);return(n=n.toUpperCase())+(t=t.slice(1,t.length))},ke=240,Ce=Object(d.a)((function(e){return{root:{display:"flex",height:"100%",width:"100%"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},homeButton:{textDecoration:"none",color:e.palette.text.primary},sidebarLink:{textDecoration:"none",color:"#121212",textTransform:"capitalize"},appBarShift:{marginLeft:ke,width:"calc(100% - ".concat(ke,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{},hide:{display:"none"},drawer:{width:ke,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:ke,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:{gap:"36px"},offset:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})),Se={title:"loading layout context",setTitle:function(e){return console.log("called mock state from layout context ")}},Ie=Object(r.createContext)(Se),Be=function(e){var t,n,a=e.children,r=Object(f.useTheme)(),i=Ce(r),s=c.a.useState(!1),u=Object(o.a)(s,2),d=u[0],b=u[1],h=c.a.useState(""),O=Object(o.a)(h,2),g=O[0],w=O[1],N=Object(we.f)(),C=Oe().tags,I={title:g,setTitle:w},A=function(e){N.push(e)};return Object(pe.jsxs)("div",{className:i.root,children:[Object(pe.jsx)(x.a,{position:"fixed",color:"primary",className:Object(j.default)(i.appBar,Object(l.a)({},i.appBarShift,d)),children:Object(pe.jsxs)(m.a,{className:i.toolbar,children:[Object(pe.jsx)(S.a,{color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},edge:"start",className:Object(j.default)(i.menuButton,Object(l.a)({},i.hide,d)),children:Object(pe.jsx)(B.a,{})}),Object(pe.jsx)(ye.b,{to:"/",className:i.homeButton,children:Object(pe.jsx)(y.a,{variant:"h6",noWrap:!0,children:""!==g?Ne(g):"Keep Clone"})})]})}),Object(pe.jsxs)(p.a,{variant:"permanent",className:Object(j.default)(i.drawer,(t={},Object(l.a)(t,i.drawerOpen,d),Object(l.a)(t,i.drawerClose,!d),t)),classes:{paper:Object(j.default)((n={},Object(l.a)(n,i.drawerOpen,d),Object(l.a)(n,i.drawerClose,!d),n))},children:[Object(pe.jsx)("div",{className:i.offset,children:Object(pe.jsx)(S.a,{onClick:function(){b(!1)},children:"rtl"===r.direction?Object(pe.jsx)(T.a,{}):Object(pe.jsx)(E.a,{})})}),Object(pe.jsx)(k.a,{}),Object(pe.jsxs)(v.a,{children:[Object(pe.jsxs)(L.a,{button:!0,className:i.sidebarLink,onClick:function(e){return A("/")},children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(F.a,{})}),Object(pe.jsx)(K.a,{primary:"Keep Clone"})]}),C&&C.length>0&&Object(pe.jsx)(k.a,{}),C&&C.map((function(e){return Object(pe.jsxs)(L.a,{button:!0,className:i.sidebarLink,onClick:function(t){return A("/"+e.name)},children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(ve.a,{})}),Object(pe.jsx)(K.a,{primary:e.name})]},e.name)}))]}),Object(pe.jsx)(k.a,{}),Object(pe.jsxs)(v.a,{children:[Object(pe.jsxs)(L.a,{button:!0,onClick:function(e){return A("/status/archived")},className:i.sidebarLink,children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(_.a,{})}),Object(pe.jsx)(K.a,{primary:"Archived"})]},"Archived"),Object(pe.jsxs)(L.a,{button:!0,onClick:function(e){return A("/status/deleted")},className:i.sidebarLink,alignItems:"flex-start",children:[Object(pe.jsx)(W.a,{children:Object(pe.jsx)(q.a,{})}),Object(pe.jsx)(K.a,{primary:"Bin"})]},"Deleted")]})]}),Object(pe.jsxs)("main",{className:i.content,children:[Object(pe.jsx)("div",{className:i.offset}),Object(pe.jsx)(Ie.Provider,{value:I,children:a})]})]})},Ae=n(145),Ee=n(259),De=n(266),Te=Object(d.a)({test:{backgroundColor:"#121212"},container:{width:"100%",gridColumn:"5/9",height:"50px",padding:"8px 16px",borderRadius:"5px"},input:{height:"100%",width:"100%"}}),Re=function(e){e.isInputFocused;var t=e.setIsInputFocused,n=Te();return Object(pe.jsx)(Ee.a,{square:!0,className:n.container,children:Object(pe.jsx)(De.a,{className:n.input,placeholder:"Take a note...",onFocus:function(e){t(!0)}})})},Le=n(271),ze=n(261),Fe=n(260),Pe=n(146),We=n.n(Pe),Je=Object(d.a)({tagsContainer:{display:"flex",padding:"2px 8px",borderRadius:"50px",alignItems:"center"}}),Ke=function(e){var t=e.tag,n=e.onDeletion,a=Je();return Object(pe.jsxs)(Ee.a,{className:a.tagsContainer,children:[t,Object(pe.jsx)(Fe.a,{"aria-label":"delete",size:"small",onClick:function(){n(t)},children:Object(pe.jsx)(We.a,{})})]})},Me=Object(d.a)({tagsContainer:{flex:"1 1 auto",display:"flex",flexWrap:"wrap",gap:"1rem"}}),_e=function(e){var t=e.tags,n=e.onDeletion,a=Me();return Object(pe.jsx)(Le.a,{className:a.tagsContainer,children:t.map((function(e){return Object(pe.jsx)(Ke,{tag:e,onDeletion:n},e)}))})},He=Object(d.a)((function(e){return{normal:{width:"100%",display:"flex",border:"0px solid black"},bolder:{width:"100%",display:"flex",border:"0px solid black",fontWeight:e.typography.fontWeightMedium}}})),qe=function(e){var t=e.placeholder,n=e.submit,a=e.content,c=e.setContent,i=e.tags,s=e.setTags,o=e.onLostFocus,u=e.bold,l=e.inputRef,d=He(),j=Object(r.useRef)(!1),f=Object(r.useRef)(""),b=function(){s([].concat(Object(Z.a)(i),[f.current]));var e=x(f.current,a);c(e),f.current=""},p=function(){""!==f.current&&b(),n()},h=function(e,t){var n=t;if("Backspace"===e){n.length<1&&(j.current=!1);var a=n.slice(0,n.length-1);n=a}else n+=e;return n},x=function(e,t){return t.replace(e,"").replace("#","").trim()+" "};return Object(pe.jsx)(De.a,{placeholder:t,multiline:!0,className:u?d.bolder:d.normal,onBlur:o,onChange:function(e){c(e.target.value)},inputRef:l||null,value:a,onKeyUp:function(e){if("Shift"!==e.key){var t="#"===e.key,n=" "===e.key;if(t)j.current=!0;else{n&&(j.current=!1);var a=""!==f.current;j.current?f.current=h(e.key,f.current):a&&b();var r="Enter"===e.code,c=e.nativeEvent.ctrlKey;r&&c&&p()}}}})},Ge=Object(d.a)({root:{display:"flex",height:"auto",minHeight:"100px",flexDirection:"column",alignItems:"flex-end",padding:"1rem 1rem",gap:"1.5rem",gridColumn:"4/10",borderRadius:"5px"},inputsContainer:{width:"100%",display:"flex",height:"auto",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem",borderRadius:"5px"},footer:{width:"100%",display:"flex",justifyContent:"flex-end"},submitButton:{flex:"0"}}),Qe=function(e){var t=e.setIsInputFocused,n=e.addNote,c=function(){return t(!1)},i=Ge(),s=Object(r.useRef)(null),u=Object(r.useState)(""),l=Object(o.a)(u,2),d=l[0],j=l[1],f=Object(r.useState)(""),b=Object(o.a)(f,2),p=b[0],h=b[1],x=Object(r.useState)([]),O=Object(o.a)(x,2),m=O[0],g=O[1],v=Object(r.useState)(!1),w=Object(o.a)(v,2),y=w[0],N=w[1];Object(r.useEffect)((function(){N(""!==d||""!==p)}),[d,p]),Object(r.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.focus()}),[s]);var k=function(){if(y){var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),r={title:p,content:d,date:t,tags:C(m),status:a.alive};n(r),c()}},C=function(e){return e.map((function(e){return{name:e}}))};return Object(pe.jsxs)(Ee.a,{square:!0,className:i.root,children:[Object(pe.jsxs)(Le.a,{className:i.inputsContainer,onBlur:function(e){null===e.relatedTarget&&c()},children:[Object(pe.jsx)(qe,{bold:!0,placeholder:"Title",submit:k,content:p,setContent:h,tags:m,setTags:g}),Object(pe.jsx)(qe,{placeholder:"Take a note...",submit:k,content:d,setContent:j,tags:m,setTags:g,inputRef:s})]}),Object(pe.jsxs)(Le.a,{className:i.footer,children:[(null===m||void 0===m?void 0:m.length)>0&&Object(pe.jsx)(_e,{tags:m,onDeletion:function(e){var t=m.filter((function(t){return t!==e}));g(t)}}),Object(pe.jsx)(ze.a,{className:i.submitButton,onClick:k,disabled:!y,children:"Save"})]})]})},Ue=n(262),Ve=Object(d.a)((function(e){return{root:{width:"100%",justifyContent:"center"}}})),Xe=function(){var e=Ve(),t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Oe(),s=Object(we.g)().tag,l=function(e){c(e)},d=function(){var e=Object(U.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=j(t),null===i||void 0===i||i.createNote(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t;if(!e.tags||e.tags.length<1)t=Object(u.a)(Object(u.a)({},e),{},{tags:[]});else{var n,a=[],r=Object(Ae.a)(e.tags);try{for(r.s();!(n=r.n()).done;){var c={name:n.value.name.replace("#","")};a.push(c)}}catch(d){r.e(d)}finally{r.f()}t=Object(u.a)(Object(u.a)({},e),{},{tags:a})}var o=i.tags.find((function(e){return e.name===s}));if(o){var l=t.tags.length<1||t.tags.some((function(e){return e.name!==o.name}));o&&l&&t.tags.push(o)}return t};return Object(pe.jsx)(Ue.a,{container:!0,className:e.root,children:Object(pe.jsx)(Ue.a,{item:!0,xs:10,sm:8,md:6,lg:4,children:a?Object(pe.jsx)(Qe,{isInputFocused:a,setIsInputFocused:l,addNote:d}):Object(pe.jsx)(Re,{isInputFocused:a,setIsInputFocused:l})})})},Ye=n(264),Ze=n(263),$e=Object(d.a)({root:{backgroundColor:"#f2f2f2",borderRadius:"10px",fontVariant:"small-caps",fontWeight:"bold",fontSize:"0.688rem",padding:"0.25em 0.75em"}}),et=function(e){var t=e.tag,n=$e();return Object(pe.jsx)(Le.a,{className:n.root,children:t.name})},tt=Object(d.a)({root:{display:"flex",gap:"1rem",width:"100%"}}),nt=function(e){var t=e.tags,n=tt();return Object(pe.jsx)(Le.a,{className:n.root,children:t.map((function(e){return Object(pe.jsx)(et,{tag:e},e.name)}))})},at=n(148),rt=n.n(at),ct=n(265),it=Object(d.a)((function(e){return{root:{display:"flex",gap:"1.5rem"},rootHide:{visibility:"hidden",display:"flex",gap:"1.5rem"},button:{padding:"0px"},more:{flex:"1 1 auto",display:"flex",placeContent:"end"}}})),st=function(e){var t=e.visible,n=e.archiveNote,a=e.deleteNote,r=it();return Object(pe.jsxs)(Le.a,{className:t?r.root:r.rootHide,children:[Object(pe.jsx)(ct.a,{title:"Archive",children:Object(pe.jsx)(Fe.a,{className:r.button,onClick:n,children:Object(pe.jsx)(_.a,{fontSize:"small"})})}),Object(pe.jsx)(ct.a,{title:"Delete",children:Object(pe.jsx)(Fe.a,{className:r.button,onClick:a,children:Object(pe.jsx)(q.a,{fontSize:"small"})})})]})},ot=Object(f.makeStyles)((function(e){return Object(f.createStyles)({root:{cursor:"pointer",width:"15rem",padding:"2rem 1rem",display:"flex",flexDirection:"column",border:"1px solid #c4c4c4",borderRadius:"15px",gap:"1rem","&:hover":{boxShadow:"2px 2px 5px 0px rgba(0,0,0,0.1), -1px -1px 5px 0px rgba(0,0,0,0.1)"},"&:hover #headerButton":{visibility:"visible"}},headerContainer:{width:"100%",display:"flex",gap:"1rem",justifyContent:"flex-start",alignItems:"start"},title:{flex:"1 1 auto",fontSize:"1.375rem",fontWeight:e.typography.fontWeightMedium},content:{flex:"1 1 auto",fontSize:"0.875rem",fontWeight:e.typography.fontWeightRegular},headerButton:{padding:0,visibility:"hidden"},actionsContainer:{justifyContent:"flex-start"},noteTitle:{fontSize:"2rem"}})})),ut=function(e){var t=e.note,n=e.deteleteNote,a=e.archiveNote,c=ot(),i=Object(r.useState)(!1),s=Object(o.a)(i,2),u=s[0],l=s[1];return Object(pe.jsxs)(Le.a,{className:c.root,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[Object(pe.jsxs)(Le.a,{className:c.headerContainer,children:[t.title&&Object(pe.jsx)(Ze.a,{className:c.title,children:t.title}),!t.title&&Object(pe.jsx)(Ze.a,{className:c.content,children:t.content}),Object(pe.jsx)(Fe.a,{className:c.headerButton,id:"headerButton",children:Object(pe.jsx)(rt.a,{})})]}),t.title&&Object(pe.jsx)(Ze.a,{className:c.content,children:t.content}),t.tags&&Object(pe.jsx)(nt,{tags:t.tags}),Object(pe.jsx)(st,{visible:u,deleteNote:function(){n(t)},archiveNote:function(){a(t)}})]})},lt=Object(d.a)({root:{display:"flex",flexDirection:"column",gap:"2rem"}});!function(e){e.All="All",e.Archived="Archive",e.Bin="Bin"}(be||(be={}));var dt=function(e){var t=e.notes,n=e.deteleteNote,c=e.archiveNote,i=lt(),s=Object(we.g)(),u=s.tag,l=s.status,d=Object(r.useContext)(Ie).setTitle,j=Object(r.useState)(be.All),f=Object(o.a)(j,2),b=f[0],p=f[1];Object(r.useEffect)((function(){if(u)d(u),p(be.All);else if(l)switch(l){case"archived":d(be.Archived),p(be.Archived);break;case"deleted":d(be.Bin),p(be.Bin);break;default:throw new Error("tried to update the style but the status passed was not found")}else d(""),p(be.All)}),[u,l,d]);var h=null===t||void 0===t?void 0:t.filter(u?function(e){var t=!u,n=e.tags&&e.tags.some((function(e){return e.name===u}));return e.status===a.alive&&(t||n)}:l?function(e){if(l){var t=a[l];return e.status===t}}:function(e){return e.status===a.alive});return Object(pe.jsxs)(Le.a,{className:i.root,children:[b===be.Bin&&Object(pe.jsx)(Ze.a,{align:"center",children:"Notes in the Recycle Bin are deleted after 7 days."}),Object(pe.jsx)(Ue.a,{container:!0,spacing:3,children:h.map((function(e){return Object(pe.jsx)(Ue.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(pe.jsx)(ut,{note:e,deteleteNote:n,archiveNote:c})},e.id)}))})]})},jt=Object(d.a)({root:{display:"flex",flexDirection:"column",gap:"3rem",justifyContent:"center"}});var ft=function(){var e=jt(),t=Oe(),n=t.notes,a=t.deleteNote,c=t.archiveNote;return Object(r.useEffect)((function(){return console.log("this app is running with local storage","added a gap for the header")}),[]),Object(pe.jsx)(Be,{children:Object(pe.jsx)(Ye.a,{maxWidth:"lg",children:Object(pe.jsxs)(we.c,{children:[Object(pe.jsx)(we.a,{path:"/status/:status",exact:!0,children:Object(pe.jsx)(dt,{notes:n,deteleteNote:a,archiveNote:c})}),Object(pe.jsx)(we.a,{path:"/:tag?",children:Object(pe.jsxs)(Le.a,{className:e.root,children:[Object(pe.jsx)(Xe,{}),Object(pe.jsx)(dt,{notes:n,deteleteNote:a,archiveNote:c})]})})]})})})},bt=n(149),pt=n.n(bt),ht=n(267),xt=n(258),Ot=n(150),mt=new ht.a,gt=Object(Ot.a)({palette:{primary:{main:"#fdd835"},secondary:{main:"#311b92"}}});s.a.render(Object(pe.jsxs)(c.a.StrictMode,{children:[Object(pe.jsx)(pt.a,{}),Object(pe.jsx)(V.a,{client:mt,children:Object(pe.jsx)(me,{children:Object(pe.jsx)(ye.a,{basename:"/keep-clone",children:Object(pe.jsx)(xt.a,{theme:gt,children:Object(pe.jsx)(ft,{})})})})})]}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.b851d8d4.chunk.js.map