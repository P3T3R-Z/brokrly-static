(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{4447:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list/[id]",function(){return i(3176)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,o=i(1598).Z,a=i(7273).Z,l=o(i(7294)),s=r(i(3121)),c=i(2675),u=i(139),d=i(8730);i(7238);var f=r(i(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,r,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:m,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:j,onLoad:C,onError:x}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,i,{width:o,height:r,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:m,style:n({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,v,h,_,E,S,b))},[v,h,_,E,S,x,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,h,_,E,S,b)},onError:e=>{j(!0),"blur"===h&&S(!0),x&&x(e)}})))}),w=l.forwardRef((e,t)=>{let i,r;var o,{src:p,sizes:w,unoptimized:b=!1,priority:y=!1,loading:_,className:E,quality:S,width:j,height:C,fill:x,style:z,onLoad:O,onLoadingComplete:R,placeholder:k="empty",blurDataURL:N,layout:P,objectFit:I,objectPosition:A,lazyBoundary:L,lazyRoot:M}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),T=l.useMemo(()=>{let e=g||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[D]),W=B,F=W.loader||f.default;delete W.loader;let G="__next_img_default"in F;if(G){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=F;F=e=>{let{config:t}=e,i=a(e,["config"]);return Z(i)}}if(P){"fill"===P&&(x=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];q&&(z=n({},z,q));let U={responsive:"100vw",fill:"100vw"}[P];U&&!w&&(w=U)}let V="",J=m(j),X=m(C);if("object"==typeof(o=p)&&(h(o)||void 0!==o.src)){let H=h(p)?p.default:p;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(!H.height||!H.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)));if(i=H.blurWidth,r=H.blurHeight,N=N||H.blurDataURL,V=H.src,!x){if(J||X){if(J&&!X){let $=J/H.width;X=Math.round(H.height*$)}else if(!J&&X){let K=X/H.height;J=Math.round(H.width*K)}}else J=H.width,X=H.height}}let Q=!y&&("lazy"===_||void 0===_);((p="string"==typeof p?p:V).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,Q=!1),T.unoptimized&&(b=!0),G&&p.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=l.useState(!1),[et,ei]=l.useState(!1),en=m(S),er=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},et?{}:{color:"transparent"},z),eo="blur"===k&&N&&!Y?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:X,blurWidth:i,blurHeight:r,blurDataURL:N}),'")')}:{},ea=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:r.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[u]})}}({config:T,src:p,unoptimized:b,width:J,quality:en,sizes:w,loader:F}),el=p,es={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:W.crossOrigin},ec=l.useRef(O);l.useEffect(()=>{ec.current=O},[O]);let eu=l.useRef(R);l.useEffect(()=>{eu.current=R},[R]);let ed=n({isLazy:Q,imgAttributes:ea,heightInt:X,widthInt:J,qualityInt:en,className:E,imgStyle:er,blurStyle:eo,loading:_,config:T,fill:x,unoptimized:b,placeholder:k,loader:F,srcString:el,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:ei},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ed,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},es))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o}=e,a=n||t,l=r||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3176:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return c},default:function(){return u}});var n=i(5893),r=i(690),o=i.n(r),a=i(5675),l=i.n(a),s=i(3416),c=!0;function u(e){let{state:t}=(0,s.Z)();return(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:o().name,children:t.count}),(0,n.jsx)(l(),{src:null==e?void 0:e.avatar,width:200,height:200,alt:""})]})}},690:function(e){e.exports={name:"list_name___mwv0"}},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4447)}),_N_E=e.O()}]);