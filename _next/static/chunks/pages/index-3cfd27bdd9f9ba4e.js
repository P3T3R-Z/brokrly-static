(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6171:function(e,s,l){"use strict";l.d(s,{Z:function(){return o}});var n=l(1413),a=l(7294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},i=l(2135),t=function(e,s){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:s,icon:r}))};t.displayName="LeftOutlined";var o=a.forwardRef(t)},8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(3355)}])},4049:function(e,s,l){"use strict";l.d(s,{Z:function(){return i}});var n=l(5893),a=l(9008),r=l.n(a);function i(){return(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{children:[(0,n.jsx)("meta",{name:"renderer",content:"webkit"}),(0,n.jsx)("title",{children:"brokrly"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"}),(0,n.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"})]})})}},4367:function(e,s,l){"use strict";var n=l(5893),a=l(7618),r=l.n(a),i=l(7294),t=l(1163),o=l.n(t);s.Z=(0,i.memo)(function(e){let{initVisible:s=!0,hideDomContainer:l,position:a="fixed",classname:t="",style:c={},type:d=""}=e,[m,_]=(0,i.useState)(!1),u=()=>{let e=0;if(l){let s=document.querySelector(l);e=s.clientHeight-100}let n=document.documentElement.scrollTop||document.body.scrollTop;n>e&&!m?_(!0):n<=e&&_(!1)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}),[]),(0,n.jsxs)("div",{className:"".concat(r()["norem-nav"]," ").concat(m?r().on:s?r().on:r().hide," ").concat(t),style:{position:a,...c},children:["nav2"===d?(0,n.jsx)("img",{src:"/brokrly-static/images/brokrly_white.png",alt:"logo",className:r().logo,onClick:()=>{o().push("/")}}):(0,n.jsx)("img",{src:"/brokrly-static/images/brokrly.png",alt:"logo",className:r().logo,onClick:()=>{o().push("/")}}),(0,n.jsx)("div",{className:r().btn,children:e.children})]})})},3355:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return B}});var n=l(5893),a=l(4049),r=l(5589),i=l.n(r),t=l(7294),o=l(3416),c=l(1577),d=l(6738),m=l(9653),_=l.n(m),u=l(4367),h=l(1012),p=l.n(h),g=l(3659),x=l(1163),j=l.n(x),v=l(7937),f=l(6171),N=(0,t.forwardRef)(function(e,s){(0,x.useRouter)();let{state:l,setState:a}=(0,o.Z)(),[r,i]=(0,t.useState)(!1),[m,_]=(0,t.useState)("login"),[u,h]=(0,t.useState)(""),[N]=g.Z.useForm(),[w,y]=(0,t.useState)(0),b=()=>{h(""),y(0),N.setFieldsValue({password:null,password2:null})},Z=e=>{let s=e.target.value;/^(?=.*[!@#$%^&*._?])(?=.*[1-9])(?=.*[a-zA-Z])[1-9a-zA-Z!@#$%^&*._?]{8,}$/.test(s)?y(3):/^(?=.*[1-9])(?=.*[a-zA-Z])[1-9a-zA-Z!@#$%^&*._?]{8,}$/.test(s)?y(2):/^(?=.*[1-9])[1-9a-zA-Z!@#$%^&*._?]{8,}$/.test(s)?y(1):y(0)},k=(e,s)=>s.length<8||!/^[1-9a-zA-Z!@#$%^&*._?]*$/.test(s)?Promise.reject("请输入8位含有数字,字母,符号的密码"):Promise.resolve(),B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";a({aprtNo:null,streetName:null}),_(e),i(!0)},C=()=>{h(""),N.resetFields(),y(0),i(!1)};return(0,t.useImperativeHandle)(s,()=>({open:B,close:C})),r?(0,n.jsxs)("div",{className:"".concat(p().listingModal),children:[(0,n.jsx)(v.Z,{className:p().close,onClick:C}),(0,n.jsxs)("div",{className:p().modal,children:[(0,n.jsxs)("div",{className:p().left,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/logo_white.png",alt:"logo"}),(0,n.jsx)("img",{src:"/brokrly-static/images/brokrly_white.png",alt:"brokrly_white"})]}),(0,n.jsxs)("div",{className:p().right,children:[""===u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:p().title,children:[(0,n.jsx)("p",{children:"Log in "}),(0,n.jsx)("p",{children:"or sign up "}),(0,n.jsx)("p",{children:"in seconds"})]}),(0,n.jsxs)(g.Z,{form:N,initialValues:{email:l.tempEmail},onFinish:()=>{"signup"===m?h("set-up-password"):h("password")},autoComplete:"off",children:[(0,n.jsx)(g.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,n.jsx)(d.Z,{placeholder:"Email"})}),(0,n.jsx)(g.Z.Item,{children:(0,n.jsx)(c.ZP,{type:"primary",htmlType:"submit",style:{float:"right"},children:"Continue"})})]})]}),"password"===u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:p().pwdtitle,style:{marginBottom:191},children:[(0,n.jsx)(f.Z,{style:{cursor:"pointer",marginRight:8},onClick:b})," ","Your password"]}),(0,n.jsxs)(g.Z,{form:N,initialValues:{password:null},onFinish:e=>{a({...e}),j().push("/my-listing")},autoComplete:"off",children:[(0,n.jsx)(g.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,n.jsx)(d.Z,{placeholder:"Password: 8+ characters"})}),(0,n.jsx)(g.Z.Item,{children:(0,n.jsx)(c.ZP,{type:"primary",htmlType:"submit",style:{float:"right"},children:"Continue"})})]})]}),"set-up-password"===u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:p().pwdtitle,children:[(0,n.jsx)(f.Z,{style:{cursor:"pointer",marginRight:8},onClick:b})," ","Set up password"]}),(0,n.jsxs)(g.Z,{form:N,initialValues:{password:null,password2:null},onFinish:()=>{C()},autoComplete:"off",children:[(0,n.jsx)(g.Z.Item,{name:"password",rules:[{required:!0,validator:k}],style:{marginBottom:0},children:(0,n.jsx)(d.Z,{placeholder:"Password: 8+ characters",onChange:Z,onInput:()=>{N.getFieldValue("password2")&&N.validateFields()}})}),(0,n.jsxs)("div",{className:p().pwdlevel,children:[1===w&&(0,n.jsx)("span",{className:p().orange,children:"Weak"}),2===w&&(0,n.jsx)("span",{className:p().yellow,children:"Medium"}),3===w&&(0,n.jsx)("span",{className:p().blue,children:"Strong"})]}),(0,n.jsx)(g.Z.Item,{name:"password2",rules:[{required:!0,validator:(e,s)=>(console.log(s,N.getFieldsValue()),s!=N.getFieldValue("password"))?Promise.reject("重复密码不一致"):Promise.resolve()}],children:(0,n.jsx)(d.Z,{placeholder:"Confirm your password"})}),(0,n.jsx)(g.Z.Item,{children:(0,n.jsx)(c.ZP,{type:"primary",htmlType:"submit",style:{float:"right"},children:"Continue"})})]})]})]})]})]}):null}),w=(0,t.forwardRef)(function(e,s){let l=(0,t.useRef)(null),{hideDomContainer:a,classname:r="",initVisible:i=!0,position:o="fixed",style:d={},type:m=""}=e,h=e=>null==l?void 0:l.current.open(e);return(0,t.useImperativeHandle)(s,()=>({openLogin:h})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{initVisible:i,hideDomContainer:a,position:o,classname:r,style:d,type:m,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.ZP,{type:"link",onClick:()=>{h()},className:_().login,children:"Log in"}),(0,n.jsx)(c.ZP,{type:"primary",className:"".concat(_().signup),onClick:()=>{h("signup")},children:"Sign up"})]})}),(0,n.jsx)(N,{ref:l})]})}),y=l(2581),b=l.n(y);function Z(e){return(0,n.jsxs)(n.Fragment,{children:[e.children,e.children]})}var k=(0,t.memo)(function(){var e,s;let l=(0,t.useRef)(null),a=(0,t.useRef)(null),r=(0,t.useRef)(null),[i,o]=(0,t.useState)("100%"),d=e=>{let s=e.pageX;o(s)};return(0,n.jsxs)("div",{onMouseMove:d,className:b().allwrap,ref:l,id:"allwrap",children:[(0,n.jsxs)("div",{className:"".concat(b().banner," ").concat(b().bg1),children:[(0,n.jsx)(w,{position:"absolute",classname:b().nav,ref:r}),(0,n.jsxs)("div",{className:b().slogan,children:[(0,n.jsx)("div",{children:"Ready to make your"}),(0,n.jsx)("div",{children:"listing?"})]}),(0,n.jsxs)("div",{className:b().desc,children:[(0,n.jsx)("div",{children:"Brokrly makes it easy for real estate professionals to create high-conversion"}),(0,n.jsx)("div",{children:"listing assets and share with teams."})]}),(0,n.jsx)(c.ZP,{type:"primary",className:b().signupbtn,onClick:()=>null==r?void 0:r.current.openLogin(),children:"Sign up for free"}),(0,n.jsx)("div",{className:b().photoWrap,children:(0,n.jsx)("div",{className:b().content,children:(0,n.jsx)(Z,{children:[...[,,,].keys()].map(e=>(0,n.jsxs)("div",{className:b().card,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/demo1.png"},Math.random()),(0,n.jsx)("p",{className:b().address,children:"Address"}),(0,n.jsx)("p",{className:b().price,children:"Priec"})]},Math.random()))})})})]}),(0,n.jsxs)("div",{className:b().dragwrap,style:{width:i},ref:a,onMouseMove:()=>{a.current.style.animation="none"},children:[(0,n.jsx)(w,{style:{width:(null===(e=l.current)||void 0===e?void 0:e.clientWidth)||"100vw"},classname:"".concat(b().nav," ").concat(b().nav2),position:"absolute",type:"nav2"}),(0,n.jsxs)("div",{className:"".concat(b().banner," ").concat(b().bg2),style:{width:(null===(s=l.current)||void 0===s?void 0:s.clientWidth)||"100vw"},children:[(0,n.jsxs)("div",{className:b().slogan,children:[(0,n.jsx)("div",{children:"Ready to make your"}),(0,n.jsx)("div",{children:"listing?"})]}),(0,n.jsxs)("div",{className:b().desc,children:[(0,n.jsx)("div",{children:"Brokrly makes it easy for real estate professionals to create high-conversion"}),(0,n.jsx)("div",{children:"listing assets and share with teams."})]}),(0,n.jsx)(c.ZP,{type:"primary",className:b().signupbtn,onClick:()=>null==r?void 0:r.current.openLogin(),children:"Sign up for free"}),(0,n.jsx)("div",{className:b().photoWrap,children:(0,n.jsx)("div",{className:b().content,children:(0,n.jsx)(Z,{children:[...[,,,].keys()].map(e=>(0,n.jsxs)("div",{className:b().card,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/demo2.png"},Math.random()),(0,n.jsx)("p",{className:b().address,children:"Address"}),(0,n.jsx)("p",{className:b().price,children:"Priec"})]},Math.random()))})})})]})]})]})});function B(){let{state:e,setState:s}=(0,o.Z)(),l=(0,t.useRef)(null);return(0,n.jsxs)("div",{className:i().home,children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(k,{}),(0,n.jsx)(w,{initVisible:!1,hideDomContainer:"#allwrap",ref:l}),(0,n.jsxs)("div",{className:i().home,children:[(0,n.jsx)("p",{className:i().title,children:"A perfect fit for every broker"}),(0,n.jsxs)("div",{className:i().levelbox,children:[(0,n.jsxs)("div",{className:i().levelItem,children:[(0,n.jsx)("div",{className:i().levelTitle,children:"Brokrly Free"}),(0,n.jsxs)("div",{className:i().levelDesc,children:["For any broker getting started on selling.",(0,n.jsx)("br",{}),"Get access to top-notch service, and",(0,n.jsx)("br",{}),"free design templates."]}),(0,n.jsx)(c.ZP,{type:"primary",className:i().levelBtn,onClick:()=>null==l?void 0:l.current.openLogin(),children:"Get Brokrly Free"})]}),(0,n.jsxs)("div",{className:i().levelItem,children:[(0,n.jsxs)("div",{className:i().levelTitle,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/crown.png",alt:"",className:i().levelIcon}),"Brokrly Pro"]}),(0,n.jsxs)("div",{className:i().levelDesc,children:["For brokers wanting access to exclusive",(0,n.jsx)("br",{}),"discount on services, with special tools to",(0,n.jsx)("br",{}),"grow your business."]}),(0,n.jsx)(c.ZP,{type:"primary",className:i().levelBtn,disabled:!0,children:"Coming soon"})]})]}),(0,n.jsxs)("div",{className:i().feature,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/feature1.png",alt:"",className:i().featureImg}),(0,n.jsx)("img",{src:"/brokrly-static/images/Rectangle .png",alt:"",className:i().bg}),(0,n.jsxs)("div",{className:"".concat(i().featureDesc," ").concat(i().ml88),children:[(0,n.jsxs)("p",{children:["Stage listings in any",(0,n.jsx)("br",{}),"style"]}),(0,n.jsxs)("div",{children:["Get affordable virtual staging with the most popular",(0,n.jsx)("br",{}),"interior styles to choose from, making your listing",(0,n.jsx)("br",{}),"appealing to drive conversion."]})]})]}),(0,n.jsxs)("div",{className:i().feature,children:[(0,n.jsxs)("div",{className:"".concat(i().featureDesc," ").concat(i().mr88," ").concat(i().ml72),children:[(0,n.jsxs)("p",{children:["Powerful copy that",(0,n.jsx)("br",{}),"converts"]}),(0,n.jsxs)("div",{children:["Create quality content with AI for every occasion: social",(0,n.jsx)("br",{}),"media posts, websites, MLS and what not. It's fast, easy and",(0,n.jsx)("br",{}),"persuasive."]})]}),(0,n.jsx)("img",{src:"/brokrly-static/images/feature2.png",alt:"",className:i().featureImg}),(0,n.jsx)("img",{src:"/brokrly-static/images/Rectangle .png",alt:"",className:i().bg,style:{transform:"translate(-50%, -50%) rotateY(180deg)"}})]}),(0,n.jsxs)("div",{className:i().feature,children:[(0,n.jsx)("img",{src:"/brokrly-static/images/feature3.png",alt:"",className:i().featureImg}),(0,n.jsx)("img",{src:"/brokrly-static/images/Rectangle .png",alt:"",className:i().bg,style:{transform:"translate(-50%, -50%) rotate(180deg)"}}),(0,n.jsxs)("div",{className:"".concat(i().featureDesc," ").concat(i().ml88),children:[(0,n.jsxs)("p",{children:["Ready templates for",(0,n.jsx)("br",{}),"anything"]}),(0,n.jsxs)("div",{children:["Whether you need a one-sheet for showing, or build a",(0,n.jsx)("br",{}),"personal website, there are thousands of professional",(0,n.jsx)("br",{}),"templates specially for real estate professionals to choose",(0,n.jsx)("br",{}),"from."]})]})]}),(0,n.jsx)(c.ZP,{type:"primary",className:i().mt60,onClick:()=>null==l?void 0:l.current.openLogin(),children:"Start Now"}),(0,n.jsxs)("div",{className:i().foot,children:[(0,n.jsxs)("p",{children:["Sign up now to create",(0,n.jsx)("br",{})," your high-conversion",(0,n.jsx)("br",{})," listings"]}),(0,n.jsxs)("div",{className:i().form,children:[(0,n.jsx)(d.Z,{className:i().Email,placeholder:"Your email",onChange:e=>{s({tempEmail:e.target.value})}}),(0,n.jsx)(c.ZP,{type:"primary",className:i().signupBtn,onClick:()=>null==l?void 0:l.current.openLogin(),children:"Sign up for free"})]}),(0,n.jsxs)("div",{className:i().footend,children:[(0,n.jsx)("span",{children:"Contact us"}),(0,n.jsx)("img",{src:"/brokrly-static/images/brokrly_white.png",alt:""})]})]})]})]})}},2581:function(e){e.exports={banner:"Banner_banner__6bOzj",slogan:"Banner_slogan__32sdI",fadeToTop:"Banner_fadeToTop__p6Not",desc:"Banner_desc__uZfOb",signupbtn:"Banner_signupbtn__lci8l",photoWrap:"Banner_photoWrap__jNSv1",content:"Banner_content__oKSVf",roll:"Banner_roll__jlTxG",card:"Banner_card__nPEZ0",address:"Banner_address__ItVDB",price:"Banner_price__Jw29q",bg1:"Banner_bg1__dB8Mo",bg2:"Banner_bg2__8kQmz",allwrap:"Banner_allwrap__lnU07",dragwrap:"Banner_dragwrap__p_FoR",slider:"Banner_slider__SNlqq",nav:"Banner_nav__sc4XB",nav2:"Banner_nav2__w136H"}},9653:function(e){e.exports={signup:"MainNav_signup__0ELBr",login:"MainNav_login__C_uzu"}},7618:function(e){e.exports={btn:"Nav_btn__3YCF3","norem-nav":"Nav_norem-nav___g6Ri",show:"Nav_show__35xXm",hide:"Nav_hide__EdAIO",on:"Nav_on__ErdCq",logo:"Nav_logo__ge0Qr"}},1012:function(e){e.exports={listingModal:"loginModal_listingModal___WWGG",modal:"loginModal_modal__up3pH",fadeIn:"loginModal_fadeIn__bkxbD",desc:"loginModal_desc__YxJWw",close:"loginModal_close__itLl6",left:"loginModal_left__slT6S",right:"loginModal_right__s_ESH",title:"loginModal_title__yAQq8",pwdtitle:"loginModal_pwdtitle__KJ_V1",pwdlevel:"loginModal_pwdlevel__OHUeg",orange:"loginModal_orange__xDjeW",yellow:"loginModal_yellow___Y50w",blue:"loginModal_blue__gNcqu"}},5589:function(e){e.exports={home:"Home_home__lipdu",title:"Home_title__q0Qg4",levelbox:"Home_levelbox__RL_au",levelItem:"Home_levelItem__vjH_6",levelTitle:"Home_levelTitle__CIdLb",levelDesc:"Home_levelDesc__XrNQS",levelBtn:"Home_levelBtn__pcnff",levelIcon:"Home_levelIcon__4NZo_",feature:"Home_feature__ZhERr",featureImg:"Home_featureImg__blEMP",bg:"Home_bg__6qLiw",featureDesc:"Home_featureDesc__6DDr5",ml88:"Home_ml88__1uw8O",mr88:"Home_mr88__kScA3",ml90:"Home_ml90__Ok8eR",ml72:"Home_ml72__dOWS_",mt60:"Home_mt60__iB_xi",foot:"Home_foot__OzoLW",Email:"Home_Email__uP1Sg",signupBtn:"Home_signupBtn__27R3w",form:"Home_form__eFLbn",footend:"Home_footend__wgCjY",fadeToTop:"Home_fadeToTop__MX_sE"}}},function(e){e.O(0,[523,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);