(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{8910:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/copy",function(){return t(8091)}])},1079:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var l=t(5893),a=t(2168),o=t.n(a),c=t(6706),i=t(7937);function n(e){let{imglist:s=[],del:t=()=>{},child:a=null,showName:n=!0}=e;return(0,l.jsx)("div",{className:"".concat(o().imgwrap),children:s.map((e,s)=>(0,l.jsxs)("div",{className:"".concat(o().imgcard," ").concat(a?"":o().nofoot),children:[n?(0,l.jsxs)("span",{className:o().imgtitle,children:[e.name,t&&(0,l.jsx)(c.Z,{title:"Delete the image",description:"Are you sure to delete this image?",okText:"Yes",cancelText:"No",onConfirm:()=>t(s),children:(0,l.jsx)(i.Z,{className:o().imgdel})})]}):null,(0,l.jsx)("img",{src:e.url,alt:""}),a?(0,l.jsx)("div",{className:o().cardfoot,children:a(e,s)}):null]},Math.random()))})}},5871:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var l=t(5893),a=t(324),o=t.n(a),c=t(1577),i=t(3606);function n(e){let{step:s=4,current:t=0,rightClick:a=()=>{},leftClick:n=()=>{},leftText:r="Back",rightText:d="Next",leftbtnShow:p="unset"}=e;return(0,l.jsxs)("div",{className:o()["norem-foot"],children:[(0,l.jsx)("div",{className:o().step,children:[...Array(s).keys()].map(e=>(0,l.jsx)("span",{className:"".concat(e+1===t+1?o().on:""," \n                        ").concat(e+1<=t?o().c:""),children:e+1<=t?(0,l.jsx)(i.Z,{className:o().successIcon}):null},e))}),(0,l.jsxs)("div",{className:o().setbtn,children:[(0,l.jsx)(c.ZP,{type:"link",onClick:n,style:{visibility:p},children:r}),(0,l.jsx)(c.ZP,{type:"primary",onClick:a,children:d})]})]})}},8091:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return I}});var l=t(5893),a=t(2781),o=t(1530),c=t.n(o),i=t(1693),n=t(6549),r=t(1577),d=t(5081),p=t(6713),m=t(6738),u=t(6158),_=t(1904),h=t(3062),x=t(3089),y=t(3416),g=t(5871),j=t(7294),f=t(9502),N=t(1079),v=t(2690),k=t.n(v);t(1163);var b=t(7937),C=t(6171),w=(0,j.forwardRef)(function(e,s){let{state:t,setState:a}=(0,y.Z)(),[o,c]=(0,j.useState)(!1),[i,n]=(0,j.useState)(!1),d=()=>{c(!0),n(!1)},p=()=>{c(!1)};return(0,j.useImperativeHandle)(s,()=>({open:d,close:p})),o?(0,l.jsxs)("div",{className:"".concat(k().listingModal),children:[(0,l.jsx)(b.Z,{className:k().close,onClick:p}),(0,l.jsxs)("div",{className:k().modal,children:[(0,l.jsx)("div",{className:k().left,children:i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:k().title,children:[(0,l.jsx)(C.Z,{className:k().arrow,onClick:()=>n(!1)}),"Credit card info"]}),(0,l.jsxs)("p",{className:k().tips,children:["We never store your card number or CVC number",(0,l.jsx)("br",{}),"Secured by Stripe."]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:k().title,children:"Check out"}),(0,l.jsxs)("div",{className:"".concat(k().ckitem," ").concat(k().mt171),children:[(0,l.jsx)("span",{children:"Virtual Staging x2"}),(0,l.jsx)("span",{children:"$ 60.00"})]}),(0,l.jsxs)("div",{className:k().ckitem,children:[(0,l.jsx)("span",{children:"Virtual Staging Declutter x1"}),(0,l.jsx)("span",{children:"$ 10.00"})]}),(0,l.jsxs)("div",{className:"".concat(k().ckitem," ").concat(k().black),children:[(0,l.jsx)("span",{children:"Total"}),(0,l.jsx)("span",{children:"$ 70.00"})]}),(0,l.jsx)("p",{className:k().ckline}),(0,l.jsx)(r.ZP,{type:"primary",style:{float:"right"},onClick:()=>{n(!0)},children:"Next"})]})}),(0,l.jsx)("div",{className:k().right,children:e.children})]})]}):null});let{Dragger:S}=i.Z;function I(){let{state:e,setState:s}=(0,y.Z)(),t=(0,j.useRef)(null),[o,i]=(0,j.useState)(!1),v=e.copyStep+1,k=[{title:"Room",dataIndex:"room",key:"room",width:"20%"},{title:"Number",dataIndex:"number",key:"number",render:(e,t,a)=>(0,l.jsx)(m.Z,{value:e,placeholder:"Please fill in the blank",onInput:e=>{s(s=>{s.roomInfolist[a]={...t,number:e.target.value}})}}),width:"20%"},{title:"Width",dataIndex:"width",key:"width",render:(e,t,a)=>(0,l.jsx)(m.Z,{value:e,onInput:e=>{s(s=>{s.roomInfolist[a]={...t,width:e.target.value}})}}),width:"20%"},{title:"Length",dataIndex:"length",key:"length",render:(e,t,a)=>(0,l.jsx)(m.Z,{value:e,onInput:e=>{s(s=>{s.roomInfolist[a]={...t,length:e.target.value}})}}),width:"20%"},{title:"Area",dataIndex:"area",key:"area",render:(e,t,a)=>(0,l.jsx)(m.Z,{value:e,onInput:e=>{s(s=>{s.roomInfolist[a]={...t,area:e.target.value}})}}),width:"20%"}];return(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:c().workbox,children:[(0,l.jsxs)("div",{className:c().scrollbox,children:[0===v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:"".concat(c().title," ").concat(c().mb24),children:["We use AI to help you",(0,l.jsx)("br",{}),"generate amazing copy"]}),(0,l.jsx)(r.ZP,{type:"primary",style:{display:"block"},onClick:()=>{s({copyStep:0})},children:"Next"}),(0,l.jsx)(r.ZP,{type:"link",style:{display:"block"},onClick:()=>{var e;null==t||null===(e=t.current)||void 0===e||e.open()},children:"Skip"})]}),1===v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().title,children:"Choose type of copy"}),(0,l.jsx)("p",{className:c().mt65}),(0,l.jsx)("div",{className:c().copyTypeWrap,children:f.tT.map((t,a)=>{var o;return(0,l.jsxs)("div",{className:"".concat(c().copyTypebox," ").concat((null===(o=e.copyTypeKey)||void 0===o?void 0:o.includes(a))?c().on:""),onClick:()=>{s(e=>{let s=e.copyTypeKey.indexOf(a);s>-1?e.copyTypeKey.splice(a,1):e.copyTypeKey.push(a)})},children:[(0,l.jsx)("img",{src:t.url,alt:""}),(0,l.jsx)("span",{className:c().copyTypeName,children:t.name})]},t.name)})})]}),2===v&&(0,l.jsxs)("div",{className:"".concat(c().step1box," ").concat(e.imageUploadlist.length?c().unflex:""),children:[(0,l.jsx)("p",{className:c().title,children:"Let us know if you have more"}),(0,l.jsx)("p",{className:"".concat(c().desc),children:"More images help our AI understand your listing better for better copy"}),(0,l.jsx)(S,{accept:"image/*",name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76_123",onChange(e){let{status:t}=e.file;"uploading"!==t?(console.log(e.file,e.fileList),i(!1)):i(!0),"done"===t?n.ZP.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&(n.ZP.error("".concat(e.file.name," file upload failed.")),s({imageUploadlist2:[{url:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",name:"demo1.png",status:!0},{url:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",name:"demo2.png",status:!1},{url:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",name:"demo3.png",status:!0}]}))},onDrop(e){console.log("Dropped files",e.dataTransfer.files)},className:"".concat(c().uploadbox," ").concat(e.imageUploadlist2.length?c().short:""),children:(0,l.jsx)(d.Z,{spinning:o,children:(0,l.jsxs)("div",{className:c().uploadCenter,children:[e.imageUploadlist2.length?null:(0,l.jsx)("img",{src:"/brokrly-static/brokrly-static/images/cloud.png",className:c().uploadIcon}),e.imageUploadlist2.length?(0,l.jsx)("p",{children:(0,l.jsxs)(p.Z,{size:18,children:[(0,l.jsx)("span",{children:"Drop file here to upload or"}),(0,l.jsx)(r.ZP,{type:"primary",children:"Select files"})]})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["Drop file here to upload ",(0,l.jsx)("br",{}),"or"]}),(0,l.jsx)(r.ZP,{type:"primary",children:"Select files"})]}),(0,l.jsx)("div",{className:c().format,children:"image format, size requirement"})]})})}),(0,l.jsx)(N.Z,{imglist:e.imageUploadlist2,del:e=>{s(s=>{s.imageUploadlist2.splice(e,1)})},child:(e,s)=>(0,l.jsx)("span",{className:"".concat(c().imgStatus," ").concat(e.status?c().success:c().error),children:e.status?"Uploaded successfully":"error message"})})]}),3===v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().title,children:"Complete room info"}),(0,l.jsx)("p",{className:"".concat(c().desc),children:"More information about the listing will help us write better copies"}),(0,l.jsx)(u.Z,{columns:k,dataSource:e.roomInfolist,size:"small",className:c().roominfotable,pagination:!1})]}),4===v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().title,children:"Any other selling points?"}),(0,l.jsxs)("div",{className:c().mt65,children:[e.sellingPoints.map((e,t)=>(0,l.jsxs)("div",{className:c().sellingPointsBox,children:[(0,l.jsx)("span",{children:t+1}),(0,l.jsx)(m.Z,{placeholder:"Please fill in the blank",value:e,onChange:e=>{s(s=>{s.sellingPoints[t]=e.target.value})}}),(0,l.jsx)(x.Z,{onClick:()=>{s(e=>{e.sellingPoints.splice(t,1)})}})]},t)),(0,l.jsx)("div",{className:c().sellingPointsBox,children:(0,l.jsx)("span",{style:{cursor:"pointer"},onClick:()=>{s(e=>{e.sellingPoints.push("")})},children:"+"})})]})]}),5===v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:c().title,children:"Summary"}),(0,l.jsx)("div",{className:"".concat(c().mt65),children:(0,l.jsxs)("div",{className:c().summarytitle,children:[(0,l.jsx)("img",{src:"/brokrly-static/brokrly-static/images/edit.png",alt:"",className:c().editBtn,onClick:()=>{s({copyStep:0})}}),(0,l.jsx)("span",{children:"Copy Type"})]})}),(0,l.jsx)(l.Fragment,{children:e.copyTypeKey.map(e=>{var s;return(0,l.jsx)(_.Z,{color:"#015EEA",defaultChecked:!0,children:(null===f.tT||void 0===f.tT?void 0:null===(s=f.tT[e])||void 0===s?void 0:s.name)||""})})}),(0,l.jsx)("div",{className:"".concat(c().mt32),children:(0,l.jsxs)("div",{className:c().summarytitle,children:[(0,l.jsx)("img",{src:"/brokrly-static/brokrly-static/images/edit.png",alt:"",className:c().editBtn,onClick:()=>{s({copyStep:2})}}),(0,l.jsx)("span",{children:"Room Information"})]})}),(0,l.jsx)(u.Z,{columns:k,dataSource:e.roomInfolist,size:"small",className:c().roominfotable,pagination:!1,style:{pointerEvents:"none"}}),(0,l.jsx)("div",{className:"".concat(c().mt32),children:(0,l.jsxs)("div",{className:c().summarytitle,children:[(0,l.jsx)("img",{src:"/brokrly-static/brokrly-static/images/edit.png",alt:"",className:c().editBtn,onClick:()=>{s({copyStep:3})}}),(0,l.jsx)("span",{children:"Selling Points"})]})}),(0,l.jsx)("div",{className:c().mt16,style:{pointerEvents:"none"},children:e.sellingPoints.map((e,s)=>(0,l.jsxs)("div",{className:c().sellingPointsBox,children:[(0,l.jsx)("span",{children:s+1}),(0,l.jsx)(m.Z,{placeholder:"Please fill in the blank",value:e})]},s))}),(0,l.jsx)("div",{className:"".concat(c().mt32),children:(0,l.jsxs)("div",{className:c().summarytitle,children:[(0,l.jsx)(h.Z,{placement:"topLeft",title:"To upload more images or edit images",arrow:{arrowPointAtCenter:!0},overlayStyle:{whiteSpace:"nowrap"},overlayInnerStyle:{borderRadius:10},children:(0,l.jsx)("img",{src:"/brokrly-static/brokrly-static/images/edit.png",alt:"",className:c().editBtn,onClick:()=>{s({imageStep:1})}})}),(0,l.jsx)("span",{children:"Room Images"})]})}),(0,l.jsx)("div",{className:c().mt16,children:(0,l.jsx)(N.Z,{imglist:e.imageUploadlist2,showName:!1})})]})]}),v>0?(0,l.jsx)(g.Z,{current:e.copyStep,step:4,rightClick:()=>{if(e.copyStep+1===5){var l;null==t||null===(l=t.current)||void 0===l||l.open()}else s({copyStep:e.copyStep+1>5?5:e.copyStep+1})},leftClick:()=>{s({copyStep:e.copyStep-1<-1?-1:e.copyStep-1})},leftText:(e.copyStep,"Back"),rightText:e.copyStep+1===5?"Confirm":"Next"}):null,(0,l.jsx)(w,{ref:t})]})})}},2690:function(e){e.exports={listingModal:"CheckoutModal_listingModal__p2jGI",modal:"CheckoutModal_modal__bkG74",fadeIn:"CheckoutModal_fadeIn__3pM8E",right:"CheckoutModal_right__B_brP",left:"CheckoutModal_left__HIvYb",title:"CheckoutModal_title__aK8ca",desc:"CheckoutModal_desc__twTZS",close:"CheckoutModal_close__AlU3R",ckitem:"CheckoutModal_ckitem__jnPo8",black:"CheckoutModal_black__A_BoD",ckline:"CheckoutModal_ckline__8kf3I",mt171:"CheckoutModal_mt171__XnBAf",arrow:"CheckoutModal_arrow__9OaWD",tips:"CheckoutModal_tips__EOjP0"}},2168:function(e){e.exports={imgwrap:"ImageCardList_imgwrap__dVGk8",imgcard:"ImageCardList_imgcard__kX7Fl",nofoot:"ImageCardList_nofoot__GkzBJ",imgtitle:"ImageCardList_imgtitle__ibzMT",imgdel:"ImageCardList_imgdel__in3YK",cardfoot:"ImageCardList_cardfoot__IfwOb",summaryCardfoot:"ImageCardList_summaryCardfoot__i49eq"}},324:function(e){e.exports={"norem-foot":"StepFoot_norem-foot__GAAT5",step:"StepFoot_step__P6iEY",on:"StepFoot_on___aorx",c:"StepFoot_c__FaMjw",successIcon:"StepFoot_successIcon__TdzY7",setbtn:"StepFoot_setbtn__vu_Fu"}},1530:function(e){e.exports={workbox:"copy_workbox__z0bVr",scrollbox:"copy_scrollbox__myL3o",title:"copy_title__NYDEh",mb24:"copy_mb24__HJwfR",mt65:"copy_mt65__fhOUV",mb32:"copy_mb32__bBzYc",desc:"copy_desc__mmrP_",copyTypeWrap:"copy_copyTypeWrap__6L75w",copyTypebox:"copy_copyTypebox__l_RgO",copyTypeName:"copy_copyTypeName__slojk",on:"copy_on___RNo6",step1box:"copy_step1box__EH83i",uploadbox:"copy_uploadbox__5m6mu",short:"copy_short__3xTBj",unflex:"copy_unflex__Xyfe3",uploadCenter:"copy_uploadCenter__yRk5G",uploadIcon:"copy_uploadIcon__6RqYN",format:"copy_format__kpua3",imgStatus:"copy_imgStatus__SxfiH",success:"copy_success__YI6lw",error:"copy_error__FcV5w",roominfotable:"copy_roominfotable__rryKj",sellingPointsBox:"copy_sellingPointsBox__92tvz",summarytitle:"copy_summarytitle___XrzN",editBtn:"copy_editBtn__3MDi4",summaryCardfoot:"copy_summaryCardfoot__8hrOo",mb16:"copy_mb16__4RG6O",mt32:"copy_mt32__Lif6T"}}},function(e){e.O(0,[523,986,549,706,903,698,781,774,888,179],function(){return e(e.s=8910)}),_N_E=e.O()}]);