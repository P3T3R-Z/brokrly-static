(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{4049:function(e,s,a){"use strict";a.d(s,{Z:function(){return l}});var t=a(5893),n=a(9008),i=a.n(n);function l(){return(0,t.jsx)("div",{children:(0,t.jsxs)(i(),{children:[(0,t.jsx)("meta",{name:"renderer",content:"webkit"}),(0,t.jsx)("title",{children:"brokrly"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"}),(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"})]})})}},2781:function(e,s,a){"use strict";a.d(s,{Z:function(){return y}});var t=a(5893),n=a(4049),i=a(4367),l=a(1577),c=a(4199),o=a.n(c),r=a(5256),m=a.n(r),u=a(3416),d=a(3659),_=a(6738),p=a(1163),h=a.n(p),x=a(7294),g=a(7937),v=(0,x.forwardRef)(function(e,s){let{state:a,setState:n}=(0,u.Z)(),[i,c]=(0,x.useState)(!1),o=()=>{n({aprtNo:null,streetName:null}),c(!0)},r=()=>{c(!1)},p=e=>{console.log(e),n({...e}),r(),h().push("/workspace/image")};return(0,x.useImperativeHandle)(s,()=>({open:o,close:r})),i?(0,t.jsxs)("div",{className:"".concat(m().listingModal),children:[(0,t.jsx)(g.Z,{className:m().close,onClick:r}),(0,t.jsxs)("div",{className:m().modal,children:[(0,t.jsxs)("div",{className:m().left,children:[(0,t.jsx)("div",{className:m().title,children:"Name your listing"}),(0,t.jsx)("div",{className:m().desc,children:"Name your listing after the address"}),(0,t.jsxs)(d.Z,{name:"form",onFinish:p,autoComplete:"off",children:[(0,t.jsx)(d.Z.Item,{name:"aprtNo",rules:[{required:!0,message:"Please input your aprtNo!"}],children:(0,t.jsx)(_.Z,{placeholder:"aprt no."})}),(0,t.jsx)(d.Z.Item,{name:"streetName",rules:[{required:!0,message:"Please input your streetName!"}],children:(0,t.jsx)(_.Z,{placeholder:"Street name etc"})}),(0,t.jsx)(d.Z.Item,{children:(0,t.jsx)(l.ZP,{type:"primary",htmlType:"submit",style:{float:"right"},children:"Get started"})})]})]}),(0,t.jsx)("div",{className:m().right,children:e.children})]})]}):null}),j=a(882);let f={home:"/my-listing",workspace:"/workspace",image:"/workspace/image",copy:"/workspace/copy",assets:"/assets",assets_image:"/assets/image",assets_copy:"/assets/copy"};function y(e){let s=(0,p.useRouter)(),a=(0,x.useRef)(null),{state:c,setState:r,resetState:m}=(0,u.Z)(),d=s.pathname;(0,x.useEffect)(()=>{c.streetName||"/my-listing"===d||s.replace("/my-listing"),d.indexOf(f.workspace)>-1&&r({menuStatus:{...c.menuStatus,workspace:!0}})},[]);let[_,h]=(0,x.useState)(!1),g=()=>{d!==f.home&&(d.indexOf(f.workspace)>-1&&h(!0),setTimeout(()=>{localStorage.setItem("tempWorkspace",JSON.stringify(c)),m(),h(!1),s.replace(f.home)},1e3))};return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[(0,t.jsx)(n.Z,{}),(0,t.jsx)(i.Z,{position:"relative",children:(0,t.jsxs)(t.Fragment,{children:[d===f.home?(0,t.jsx)(l.ZP,{type:"primary",className:o().mr2,onClick:()=>{var e;null===(e=a.current)||void 0===e||e.open()},children:"Create a listing"}):null,(0,t.jsx)(l.ZP,{type:"link",children:"Log out"})]})}),(0,t.jsxs)("div",{className:o().layout,children:[(0,t.jsxs)("div",{className:o().menu,children:[(0,t.jsxs)("div",{className:o().userInfo,children:[(0,t.jsx)("span",{className:o().avatar,children:"EM"}),(0,t.jsxs)("div",{className:o().infoDetail,children:[(0,t.jsx)("span",{children:"Email address"}),(0,t.jsx)("span",{children:"free"})]})]}),(0,t.jsxs)("div",{className:"".concat(o().menulist," ").concat(d===f.home?o().on:""),onClick:g,children:[(0,t.jsx)("img",{src:"/brokrly-static/brokrly-static/brokrly-static/images/home.png",alt:""}),(0,t.jsx)("span",{children:"Home"})]}),c.streetName?(0,t.jsxs)("div",{className:o().workspace,children:[(0,t.jsxs)("p",{children:[c.streetName,",",(0,t.jsx)("br",{}),c.aprtNo]}),(0,t.jsxs)("div",{className:"".concat(o().menulist2," ").concat(d.indexOf(f.workspace)>-1?o().on:""," ").concat(c.menuStatus.workspace?o().active:""),children:[(0,t.jsxs)("div",{className:o().menulist,onClick:()=>{r({menuStatus:{...c.menuStatus,workspace:!c.menuStatus.workspace}})},children:[(0,t.jsx)("img",{src:"/brokrly-static/brokrly-static/brokrly-static/images/workspace.png",alt:""}),(0,t.jsx)("span",{children:"Workspace"}),(0,t.jsx)(j.Z,{className:o().arrow})]}),(0,t.jsx)("div",{className:"".concat(o().subMenulist," ").concat(d===f.image?o().on:""),onClick:()=>s.replace(f.image),children:"Image"}),(0,t.jsx)("div",{className:"".concat(o().subMenulist," ").concat(d===f.copy?o().on:""),onClick:()=>s.replace(f.copy),children:"Copy"})]}),(0,t.jsxs)("div",{className:"".concat(o().menulist2," ").concat(d.indexOf(f.assets)>-1?o().on:""," ").concat(c.menuStatus.assets?o().active:""),children:[(0,t.jsxs)("div",{className:o().menulist,onClick:()=>{r({menuStatus:{...c.menuStatus,assets:!c.menuStatus.assets}})},children:[(0,t.jsx)("img",{src:"/brokrly-static/brokrly-static/brokrly-static/images/assets.png",alt:""}),(0,t.jsx)("span",{children:"My assets"}),(0,t.jsx)(j.Z,{className:o().arrow})]}),(0,t.jsx)("div",{className:"".concat(o().subMenulist," ").concat(d===f.assets_image?o().on:""),onClick:()=>s.replace(f.assets_image),children:"Image"}),(0,t.jsx)("div",{className:"".concat(o().subMenulist," ").concat(d===f.assets_copy?o().on:""),onClick:()=>s.replace(f.assets_copy),children:"Copy"})]})]}):null]}),(0,t.jsxs)("div",{className:o().content,children:[_?(0,t.jsx)("div",{className:o().warn,children:"Your progress is automatically saved."}):null,e.children]})]}),(0,t.jsx)(v,{ref:a})]})}},4367:function(e,s,a){"use strict";var t=a(5893),n=a(7618),i=a.n(n),l=a(7294),c=a(1163),o=a.n(c);s.Z=(0,l.memo)(function(e){let{initVisible:s=!0,hideDomContainer:a,position:n="fixed"}=e,[c,r]=(0,l.useState)(!1),m=()=>{let e=0;if(a){let s=document.querySelector(a);e=s.clientHeight-100}let t=document.documentElement.scrollTop||document.body.scrollTop;t>e&&!c?r(!0):t<=e&&r(!1)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[]),(0,t.jsxs)("div",{className:"".concat(i().nav," ").concat(c?i().on:s?i().on:i().hide),style:{position:n},children:[(0,t.jsx)("img",{src:"/brokrly-static/brokrly-static/brokrly-static/images/brokrly.png",alt:"logo",className:i().logo,onClick:()=>{o().push("/")}}),(0,t.jsx)("div",{className:i().btn,children:e.children})]})})},4199:function(e){e.exports={mr2:"Layout_mr2__ABH6D",layout:"Layout_layout__zN6p1",menu:"Layout_menu__wvrib",userInfo:"Layout_userInfo__Xaofe",avatar:"Layout_avatar__JaJ7S",infoDetail:"Layout_infoDetail__YWULw",menulist:"Layout_menulist__Z77g8",on:"Layout_on__BPwXB",arrow:"Layout_arrow__Pk_IS",menulist2:"Layout_menulist2__eNg50",active:"Layout_active__mQK7U",content:"Layout_content__Jzno4",workspace:"Layout_workspace__TsTew",subMenulist:"Layout_subMenulist__kooKT",warn:"Layout_warn__H9XfW",fadeToBottom:"Layout_fadeToBottom__V_8b8"}},5256:function(e){e.exports={listingModal:"ListingModal_listingModal__S2F9q",modal:"ListingModal_modal__Q6ssT",fadeIn:"ListingModal_fadeIn__uOfyv",right:"ListingModal_right__dB_Uf",left:"ListingModal_left__XwcFk",title:"ListingModal_title__FBph5",desc:"ListingModal_desc__L9m9v",close:"ListingModal_close__4aDkm"}},7618:function(e){e.exports={btn:"Nav_btn__3YCF3",nav:"Nav_nav__p3b3B",show:"Nav_show__35xXm",hide:"Nav_hide__EdAIO",on:"Nav_on__ErdCq",logo:"Nav_logo__ge0Qr"}}}]);