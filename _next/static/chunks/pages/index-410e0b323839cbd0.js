(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8446)}])},2624:function(e){e.exports={ciFillImage:"normalize_styles_ciFillImage__0TEto",ciResponsiveImage:"normalize_styles_ciResponsiveImage__W3Ifq",ciFixedImage:"normalize_styles_ciFixedImage__0jtRq",ciIntrinsicImage:"normalize_styles_ciIntrinsicImage__nJEY1",ciSsgImage:"normalize_styles_ciSsgImage__poJl_",ciBackgroundWrapper:"normalize_styles_ciBackgroundWrapper__5lqyT",ciBackgroundContent:"normalize_styles_ciBackgroundContent__7AdRV"}},8446:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return E}});var r=i(5893),a=i(7294),n=i(9008);var t=function(){return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsxs)("div",{className:"header-logo",children:[(0,r.jsx)("a",{href:"https://www.scaleflex.com/en/home",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{width:170,height:43,src:"https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/Logo.svg",alt:"scaleflex logo"})}),(0,r.jsx)("a",{className:"cloud-img-title",href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:"Next.js Cloudimage Responsive"})]}),(0,r.jsx)("div",{className:"navbar",children:(0,r.jsxs)("a",{className:"git-button",href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("img",{className:"github-icons",width:20,height:17,src:"https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/github-icon.svg",alt:"github-icon"}),"GitHub"]})})]})},c=i(1799),o=i(9396),l=i(2161),d=i(603),h=i(5675),m=i(7257),x=i(3523),u={position:"relative"},p={opacity:1},g=function(e,s,i,r){return(0,c.Z)({transitionTimingFunction:"ease",willChange:"opacity, transform",transitionDuration:s,transitionDelay:"100ms",transitionProperty:"opacity, transform",opacity:0},i?{objectFit:i}:{},r?{objectPosition:r}:{},e?p:{})},j=function(e,s,i){var r={};return e!==x.Cs.FILL&&s&&i&&(r.width=s,r.height=i),r},f=i(2624);var v=function(e){var s,i=e.config,n=void 0===i?{}:i,t=n.customDomain,l=n.domain,p=n.token,v=n.apiVersion,b=n.doNotReplaceURL,w=n.baseURL,N=n.params,y=n.quality,k=n.layout,_=n.objectFit,R=n.lowPreviewQuality,C=n.transitionDuration,z=n.ssr,I=n.objectPosition,L=n.lazyload,E=e.quality,F=void 0===E?y:E,S=e.src,D=e.params,P=void 0===D?N:D,W=e.layout,T=void 0===W?k:W,V=e.objectFit,M=void 0===V?_:V,Z=e.lowPreviewQuality,G=void 0===Z?R:Z,q=e.onImgLoad,B=e.width,H=e.height,U=e.doNotReplaceURL,A=void 0===U?b:U,O=e.className,X=e.alt,J=e.transitionDuration,Y=void 0===J?C:J,Q=e.style,K=void 0===Q?{}:Q,$=e.ssr,ee=void 0===$?z:$,se=e.children,ie=e.background,re=e.objectPosition,ae=void 0===re?I:re,ne=e.lazyload,te=void 0===ne?L:ne,ce=(0,a.useState)(!1),oe=ce[0],le=ce[1],de=(0,a.useState)(""),he=de[0],me=de[1],xe=(0,a.useState)(""),ue=xe[0],pe=xe[1],ge=(0,a.useRef)(),je=t?l:"".concat(p,".").concat(l),fe=function(e){var s=e;return!!e&&"object"===typeof e&&(s=Object.entries(e).map((function(e){var s=(0,d.Z)(e,2),i=s[0],r=s[1];return"".concat(i,"=").concat(r)})).join("&")),s}(P),ve=(0,d.Z)((0,m.K8)(S,w),1)[0],be=X||(0,m.so)(S),we=function(e,s){var i=e.width;return function(e){var s=e.cName,i=e.doNotReplaceURL,r=e.apiVersion,a=e.src,n=e.width,t=e.params,c=e.lowPreview,o=r&&!i,l=x.GA.some((function(e){return a.includes(e)})),d=c&&t?t.replace(x.jf,""):t;return[!i&&s?"https://".concat(s):"",o?"/".concat(r,"/"):"",a,a.includes("?")?"&":"?",n&&!l?"w=".concat(n,"&"):"",c?"blur=80&":"",d||""].join("")}({cName:je,doNotReplaceURL:A,apiVersion:v,src:ve,width:s?i/(100/G):i,params:fe,lowPreview:s})},Ne=function(e){le(!0),"function"===typeof q&&q(e)},ye=function(e,s){var i={src:S,width:B,params:P,doNotReplaceURL:A,config:(0,o.Z)((0,c.Z)({},n),{params:void 0})},r=(0,m.oo)(i,ge.current,e,s,n,!1)||{},a=r.cloudimgSRCSET,t=r.cloudimgURL;if(a&&t){var l=a.map((function(e){var s=e.dpr,i=e.url;return"".concat(i," ").concat(s,"x")})).join(", ");me(t),pe(l)}},ke=function(){var e=window.innerWidth;s&&s!==e&&(ye(!0,e>s),s=e)},_e=ie?f.ciBackgroundWrapper:f[function(e){switch(e){case x.Cs.FIXED:return"ciFixedImage";case x.Cs.RESPONSIVE:return"ciResponsiveImage";case x.Cs.INTRINSIC:return"ciIntrinsicImage";default:return"ciFillImage"}}(T)];return(0,a.useEffect)((function(){if(!ee)return s=window.innerWidth,ye(),window.addEventListener("resize",ke),function(){window.removeEventListener("resize",ke)}}),[]),(0,r.jsxs)("div",{ref:ge,style:(0,c.Z)({},u,K),className:"".concat(_e).concat(O?" ".concat(O):""),children:[(0,r.jsx)(h,(0,c.Z)({src:S,loader:function(e){return we(e,!0)},layout:"fill",priority:!0,objectFit:M,objectPosition:ae,alt:"low-preview-".concat(be)},j(T,B,H))),ee?(0,r.jsx)(h,(0,c.Z)({src:S,layout:T,loader:we,quality:F,objectFit:M,objectPosition:ae,style:g(oe,Y),onLoad:Ne,loading:te?"lazy":"eager",alt:be},j(T,B,H))):(0,r.jsx)("img",{src:he,srcSet:ue,alt:be,onLoad:Ne,style:g(oe,Y,M,ae),className:f.ciSsgImage,loading:te?"lazy":"eager"}),ie&&(0,r.jsx)("div",{className:f.ciBackgroundContent,children:se})]})};function b(e){var s=(0,a.useContext)(l.j);return(0,r.jsx)(v,(0,o.Z)((0,c.Z)({},e),{config:s}))}function w(e){var s=(0,a.useContext)(l.j);return(0,r.jsx)(v,(0,o.Z)((0,c.Z)({background:!0},e),{config:s}))}var N=function(){var e=(0,a.useState)(0),s=e[0],i=e[1],n=(0,a.useRef)(),t=function(){i(n.current.offsetWidth)};return(0,a.useEffect)((function(){return i(n.current.offsetWidth),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)("span",{children:"Responsive images"})," ","now easier than ever"]}),(0,r.jsxs)("h2",{className:"content-text",children:["With Cloudimage's responsive plugin, 1 high-quality original image is all it needs. Save storage space and create image variants on-the-fly. The responsive image plugin will"," ",(0,r.jsx)("strong",{children:"resize, compress, and accelerate"})," ","images across the world, on all devices."," ",(0,r.jsx)("strong",{children:"Lazyload"})," ","with fancy animation on image load? The plugin takes care of it."]}),(0,r.jsxs)("div",{className:"github-sandbox-buttons-wrapper",children:[(0,r.jsx)("a",{className:"github-button transition-filled-button",href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:"View on GitHub"}),(0,r.jsx)("a",{className:"code-sand-box-button",href:"https://codesandbox.io/s/next-cloudimage-responsive-example-srp27e",target:"_blank",rel:"noreferrer",children:"Edit in CodeSandbox"})]}),(0,r.jsxs)("div",{className:"sea-coast container",ref:n,children:[(0,r.jsx)(b,{params:"ci_info=2",src:"Main+image.jpg",width:500,height:500}),(0,r.jsx)("div",{className:"image-size-wrapper",children:(0,r.jsxs)("p",{className:"text",children:[s||"000","px"]})}),(0,r.jsx)("div",{className:"green-blur-circle hide-in-mobile"}),(0,r.jsx)("div",{className:"blue-blur-circle hide-in-mobile"})]}),(0,r.jsxs)("div",{className:"features-wrapper container",children:[(0,r.jsx)("h2",{children:"Features"}),(0,r.jsxs)("div",{className:"features",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("span",{className:"checkbox-container features-content",children:[(0,r.jsx)("strong",{children:"Resize large images"})," ","and"," ",(0,r.jsx)("strong",{children:"generate multiple images"})," ","for different device screen size.",(0,r.jsx)("span",{className:"checkmark"})]})}),(0,r.jsx)("div",{className:"features-content",children:(0,r.jsxs)("span",{className:"checkbox-container features-content",children:[(0,r.jsx)("span",{className:"features-text",children:"Strip all unnecessary"}),"metadata and",(0,r.jsx)("strong",{children:"optimize JPEG, PNG and GIF compression."}),(0,r.jsx)("span",{className:"checkmark"})]})}),(0,r.jsx)("div",{className:"features-content",children:(0,r.jsxs)("span",{className:"checkbox-container features-content",children:[(0,r.jsx)("span",{className:"features-text",children:"Efficiently"}),(0,r.jsx)("strong",{children:" lazy load images"})," ","to speed up initial page load and save bandwidth.",(0,r.jsx)("span",{className:"checkmark"})]})}),(0,r.jsx)("div",{className:"features-content",children:(0,r.jsxs)("span",{className:"checkbox-container features-content",children:[(0,r.jsxs)("span",{className:"features-text",children:[(0,r.jsx)("strong",{children:'Show a "blur-up" preview'})," ","of the image"," ",(0,r.jsx)("strong",{children:"while loading."})]}),(0,r.jsx)("span",{className:"checkmark"})]})}),(0,r.jsx)("div",{className:"features-content",children:(0,r.jsxs)("span",{className:"checkbox-container features-content",children:[(0,r.jsx)("strong",{children:"Maintain the image's position"})," ","so your page doesn't jump while images load.",(0,r.jsx)("span",{className:"checkmark"})]})})]})]})]})};var y=function(){return(0,r.jsx)("section",{className:"usage-section",children:(0,r.jsxs)("div",{className:"usage-content container-fluid",children:[(0,r.jsx)("h2",{children:"How it works"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:["The plugin smartly detects the width of the image's container and pixel ratio density of your device to load the exact image size you'll need. Images are processed via Cloudimage.io service, which offers comprehensive automated image optimization solutions."," "]}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"Upon upload, Cloudimage's resizing servers will automatically download your origin image from the origin server, resize and deliver it to your user via lightning-fast Content Delivery Networks (CDNs). Once the image is resized in the format of your choice, Cloudimage sends it again to a CDN, which in turn delivers it rocket fast to your visitors, responsively across various screen sizes."}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:["Find out more about",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"https://www.cloudimage.io/en/home",target:"_blank",rel:"noreferrer",children:"Cloudimage.io."})]})]})]})]})})};var k=function(){var e=(0,a.useState)({house:0,church:0,girl:0,clothes:0}),s=e[0],i=e[1],n=(0,a.useRef)(),t=(0,a.useRef)(),l=(0,a.useRef)(),d=(0,a.useRef)(),h=function(){n.current&&i((0,o.Z)((0,c.Z)({},s),{house:n.current.offsetWidth,church:t.current.offsetWidth,girl:l.current.offsetWidth,clothes:d.current.offsetWidth}))};return(0,a.useEffect)((function(){return h(),window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]),(0,r.jsx)("section",{className:"demo-gallery",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("div",{className:"demo-gallery-title",children:[(0,r.jsx)("h2",{children:"Responsive images, in real-time!"}),(0,r.jsx)("p",{className:"demo-gallery-text",children:"Change the size of your browser's window to test out how the Cloudimage Responsive plugin delivers an optimized image for your screen size"})]}),(0,r.jsxs)("div",{className:"image-wrapper",children:[(0,r.jsxs)("div",{ref:n,className:"first-column-image",children:[(0,r.jsx)(b,{src:"House+img.jpg"}),(0,r.jsx)("div",{className:"image-size-wrapper",children:(0,r.jsxs)("div",{className:"text",children:[s.house||"000"," ","px"]})})]}),(0,r.jsxs)("div",{className:"right-column",children:[(0,r.jsxs)("div",{className:"square-with-circle-img",children:[(0,r.jsxs)("div",{ref:t,className:"second-column-image hide-in-mobile",children:[(0,r.jsx)(b,{src:"Church+square+img.jpg"}),(0,r.jsx)("div",{className:"image-size-wrapper",children:(0,r.jsxs)("p",{className:"text",children:[s.church||"000"," ","px"]})})]}),(0,r.jsxs)("div",{ref:l,className:"circle-image-wrapper",children:[(0,r.jsx)(b,{src:"Girl+img.jpg",params:"w=265&h=265&gravity=north"}),(0,r.jsx)("div",{className:"circle-image-text-wrapper",children:(0,r.jsx)("div",{className:"image-size-wrapper",children:(0,r.jsxs)("p",{className:"text",children:[s.girl||"000"," ","px"]})})})]})]}),(0,r.jsxs)("div",{ref:d,className:"horizontal-image",children:[(0,r.jsx)(b,{src:"Dresses+img.jpg"}),(0,r.jsx)("div",{className:"image-size-wrapper",children:(0,r.jsxs)("p",{className:"text",children:[s.clothes||"000"," ","px"]})})]})]})]})]})})};var _=function(){return(0,r.jsx)("section",{className:"crop-images-section",children:(0,r.jsxs)("div",{className:"crop-images-wrapper container-fluid",children:[(0,r.jsx)("h2",{children:"Crop images, your way"}),(0,r.jsx)("p",{className:"crop-section-title",children:"Resize your browser window to see how it works."}),(0,r.jsxs)("div",{className:"crop-options",children:[(0,r.jsxs)("div",{className:"crop-options-content",children:[(0,r.jsx)("h3",{children:"Original Image"}),(0,r.jsx)("p",{children:"Resize your browser's window to see how it works."}),(0,r.jsx)(b,{src:"shayna-douglas-VibRcV8tMDM-unsplash.jpg",params:"func=fit&w=400&h=400&bg_colour=f2f7fa&ci_info=0"}),(0,r.jsxs)("pre",{className:"original-image-code-block",children:["<",(0,r.jsx)("strong",{className:"code-yellow-color",children:"Img"})," ",(0,r.jsx)("span",{className:"code-yellow-color",children:"src"}),'="',(0,r.jsx)("strong",{className:"code-blue-color",children:"https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/shayna-douglas-VibRcV8tMDM-unsplash.jpg"}),'"'," />"," "]})]}),(0,r.jsxs)("div",{className:"crop-options-content",children:[(0,r.jsx)("h3",{children:"Simple Crop"}),(0,r.jsx)("p",{children:"A simple crop cuts the same part from every side."}),(0,r.jsx)(b,{src:"shayna-douglas-VibRcV8tMDM-unsplash.jpg",params:"func=crop&w=400&h=400&ci_info=0"}),(0,r.jsxs)("pre",{className:"original-image-code-block",children:["<",(0,r.jsx)("span",{className:"code-yellow-color",children:"Img"})," ",(0,r.jsx)("span",{className:"code-yellow-color",children:"src"}),'="',(0,r.jsx)("span",{className:"code-blue-color",children:"unsplash.jpg"}),'"',(0,r.jsx)("span",{className:"code-yellow-color",children:"params"}),'="func=crop&w=400&h=400" />']})]}),(0,r.jsxs)("div",{className:"crop-options-content",children:[(0,r.jsx)("h3",{children:"Auto Crop"}),(0,r.jsx)("p",{children:"Artificial intelligence finds the main object and smartly crops the image to ensure it turns out strictly in the center."}),(0,r.jsx)(b,{src:"shayna-douglas-VibRcV8tMDM-unsplash.jpg",params:"w=400&h=400&func=crop&gravity=auto&ci_info=0"}),(0,r.jsxs)("pre",{className:"original-image-code-block",children:[(0,r.jsx)("span",{className:"code-yellow-color",children:"<Img"})," ",(0,r.jsx)("span",{className:"code-yellow-color",children:"src"}),'="',(0,r.jsx)("span",{className:"code-blue-color",children:"unsplash.jpg"}),'"',(0,r.jsx)("span",{className:"code-yellow-color",children:"params"}),'="func=crop&w=400&h=400&gravity=auto" />']})]})]})]})})};var R=function(){return(0,r.jsxs)("section",{className:"numbers-section container-fluid",children:[(0,r.jsxs)("div",{className:"numbers-section-title",children:[(0,r.jsx)("h2",{children:"Let's look at the numbers!"}),(0,r.jsxs)("p",{children:["Using an example of our original image stored via CDN with 6240x4160 px resolution and 8.7mb size:",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg",rel:"noreferrer",children:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg,"})," ","let's explore in the table below, what size and resolution will be loaded depending on the image's container."]})]}),(0,r.jsxs)("div",{className:"images-dimensions-table",children:[(0,r.jsxs)("div",{className:"table-header",children:[(0,r.jsx)("p",{children:"Container size"}),(0,r.jsx)("p",{children:"Pixel Ratio Density"}),(0,r.jsx)("p",{children:"Calculated Width"}),(0,r.jsx)("p",{children:"Result: Dimensions | Size | Link"})]}),(0,r.jsxs)("div",{className:"table-row",children:[(0,r.jsx)("p",{className:"table-content",children:(0,r.jsx)("span",{className:"yellow-color",children:"400 px"})}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"1"}),(0,r.jsx)("p",{children:"2"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"400 px"}),(0,r.jsx)("p",{children:"800 px"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsxs)("p",{children:["400 x 267 | 42.3 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=400",className:"cyan-color",rel:"noreferrer",children:"Link"})]}),(0,r.jsxs)("p",{children:["800 x 533 | 159 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=800",className:"cyan-color",rel:"noreferrer",children:"Link"})]})]})]}),(0,r.jsxs)("div",{className:"table-row",children:[(0,r.jsx)("p",{className:"table-content",children:(0,r.jsx)("span",{className:"yellow-color",children:"570 px"})}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"1"}),(0,r.jsx)("p",{children:"2"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"600 px"}),(0,r.jsx)("p",{children:"1200 px"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsxs)("p",{children:["600 x 400 | 91.5 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=600",className:"cyan-color",rel:"noreferrer",children:"Link"})]}),(0,r.jsxs)("p",{children:["1200 x 800 | 337 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1200",className:"cyan-color",rel:"noreferrer",children:"Link"})]})]})]}),(0,r.jsxs)("div",{className:"table-row",children:[(0,r.jsx)("p",{className:"table-content",children:(0,r.jsx)("span",{className:"yellow-color",children:"720 px"})}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"1"}),(0,r.jsx)("p",{children:"2"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"800 px"}),(0,r.jsx)("p",{children:"1600 px"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsxs)("p",{children:["800 x 533 | 159 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=800",className:"cyan-color",rel:"noreferrer",children:"Link"})]}),(0,r.jsxs)("p",{children:["1600 x 1066 | 569 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1600",className:"cyan-color",rel:"noreferrer",children:"Link"})]})]})]}),(0,r.jsxs)("div",{className:"table-row",children:[(0,r.jsx)("p",{className:"table-content",children:(0,r.jsx)("span",{className:"yellow-color",children:"1170 px"})}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"1"}),(0,r.jsx)("p",{children:"2"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsx)("p",{children:"1200 px"}),(0,r.jsx)("p",{children:"2400 px"})]}),(0,r.jsxs)("div",{className:"table-content",children:[(0,r.jsxs)("p",{children:["1200 x 800 | 337 kb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1200",className:"cyan-color",rel:"noreferrer",children:"Link"})]}),(0,r.jsxs)("p",{children:["2400 x 1600 | 1.2 mb |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=2400",className:"cyan-color",rel:"noreferrer",children:"Link"})]})]})]})]}),(0,r.jsx)("p",{className:"table-text",children:"* The plugin rounds up the container width to the next possible value which can be divided by 100 (configurable) without the remainder. It's done for caching reasons so that we don't cache images that are different by 1px, but only 100px, 200px, and 300px..."})]})};var C=function(){var e='\n  <BackgroundImg\n    src="ameen-fahmy.jpg"\n    params="func=crop"\n  >\n    ...your content...\n  </BackgroundImg>\n  ';return(0,r.jsx)(w,{className:"background-images-section",src:"BG+image.jpg",params:"ci_info=0",children:(0,r.jsxs)("div",{className:"images-content",children:[(0,r.jsx)("h2",{children:"Use with background images"}),(0,r.jsxs)("div",{className:"images-code-wrapper",children:[(0,r.jsxs)("div",{role:"button",tabIndex:"0",className:"copy-wrapper",onClick:function(s){var i,r=s.currentTarget.getElementsByTagName("p")[0];i=e,navigator.clipboard.writeText(i),r.innerHTML="Copied",setTimeout((function(){r.innerHTML="Copy"}),500)},children:[(0,r.jsx)("img",{src:"https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/copy-icon.svg",alt:"copy"}),(0,r.jsx)("p",{children:"Copy"})]}),(0,r.jsx)("pre",{className:"code",children:e})]})]})})};var z=function(){return(0,r.jsxs)("section",{className:"questions",children:[(0,r.jsx)("h2",{children:"Any questions?"}),(0,r.jsxs)("p",{children:["Contact us at"," ",(0,r.jsx)("span",{children:"hello@cloudimage.io"}),", our experts will be happy to help!"]}),(0,r.jsx)("div",{className:"github-issue",children:(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive/issues/new",target:"_blank",className:"transition-filled-button",rel:"noreferrer",children:"Submit GitHub issue"})})]})};var I=function(e){var s=e.footerRef;return(0,r.jsxs)("section",{className:"footer",ref:s,children:[(0,r.jsxs)("div",{className:"accordion-wrapper",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"filerobot-accordion",children:[(0,r.jsx)("button",{"data-accordion":"2",type:"button",children:"Info"}),(0,r.jsx)("img",{"data-accordion":"2",src:"https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/down-arrow-icon.png",alt:"down-arrow"})]}),(0,r.jsx)("div",{className:"accordion-content","data-accordion-content":"2",children:(0,r.jsxs)("div",{className:"footer-info-content",children:[(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:"View GitHub"}),(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive/issues/",target:"_blank",rel:"noreferrer",children:"Current Issues"}),(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive#table_of_contents",target:"_blank",rel:"noreferrer",children:"Documentation"})]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"filerobot-accordion",children:[(0,r.jsx)("button",{type:"button","data-accordion":"1",children:"Filerobot"}),(0,r.jsx)("img",{"data-accordion":"1",src:"https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/down-arrow-icon.png",alt:"down-arrow"})]}),(0,r.jsx)("div",{className:"accordion-content","data-accordion-content":"1",children:(0,r.jsxs)("div",{className:"footer-filerobot-content",children:[(0,r.jsx)("a",{href:"https://scaleflex.cloudimg.io/v7/plugins/filerobot-widget/demo/index.html?func=proxy&fmaw_path=/",target:"_blank",rel:"noreferrer",children:"Filerobot Media Asset Widget"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/filerobot-image-editor/",target:"_blank",rel:"noreferrer",children:"Filerobot Image Editor"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/js-cloudimage-responsive/",target:"_blank",rel:"noreferrer",children:"Cloudimage Responsive"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/js-cloudimage-360-view/",target:"_blank",rel:"noreferrer",children:"Cloudimage 360 view"})]})})]})]}),(0,r.jsx)("div",{className:"navbar",children:(0,r.jsxs)("a",{className:"github",href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("img",{src:"https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/github-icon.svg",alt:"github-icon"}),(0,r.jsx)("p",{children:"GitHub"})]})}),(0,r.jsxs)("div",{className:"footer-logo",children:[(0,r.jsx)("a",{href:"https://www.scaleflex.com/en/home",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:"https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/Logo.svg",alt:"scaleflex-logo"})}),(0,r.jsxs)("p",{children:["Made with \u2764 by the",(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:" https://scaleflex.com/en/home",target:"_blank",children:" Scaleflex "})}),"team, the guys behind",(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("a",{href:" https://cloudimage.io/en/home",target:"_blank",children:"Cloudimage.io"})]}),". Powered by",(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("a",{href:"https://filerobot.com/en/home",target:"_blank",rel:"noreferrer",children:"Filerobot"})]}),". All rights reserved."]}),(0,r.jsx)("div",{className:"footer-blur-circle"})]}),(0,r.jsxs)("div",{className:"footer-wrapper",children:[(0,r.jsxs)("div",{className:"footer-info",children:[(0,r.jsx)("p",{children:"Info"}),(0,r.jsxs)("div",{className:"footer-info-content",children:[(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive",target:"_blank",rel:"noreferrer",children:"View GitHub"}),(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive/issues/",target:"_blank",rel:"noreferrer",children:"Current Issues"}),(0,r.jsx)("a",{href:"https://github.com/scaleflex/next-cloudimage-responsive#table_of_contents",target:"_blank",rel:"noreferrer",children:"Documentation"})]})]}),(0,r.jsxs)("div",{className:"footer-filerobot",children:[(0,r.jsx)("h4",{children:"Filerobot UI Family"}),(0,r.jsxs)("div",{className:"footer-filerobot-content",children:[(0,r.jsx)("a",{href:"https://scaleflex.cloudimg.io/v7/plugins/filerobot-widget/demo/index.html?func=proxy&fmaw_path=/",target:"_blank",rel:"noreferrer",children:"Filerobot Media Asset Widget"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/filerobot-image-editor/",target:"_blank",rel:"noreferrer",children:"Filerobot Image Editor"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/js-cloudimage-responsive/",target:"_blank",rel:"noreferrer",children:"Cloudimage Responsive"}),(0,r.jsx)("a",{href:"https://scaleflex.github.io/js-cloudimage-360-view",target:"_blank",rel:"noreferrer",children:"Cloudimage 360 view"})]})]})]})]})};var L=function(e){var s=e.footerRef,i=(0,a.useState)(0),n=i[0],t=i[1],c=(0,a.useState)(0),o=c[0],l=c[1],d=(0,a.useState)({}),h=d[0],m=d[1],x=function(){var e=s.current.getBoundingClientRect().bottom-250<=window.innerHeight;m(e?{transform:"translateX(336px)"}:{transform:"translate(0)"})},u=function(){t(window.innerWidth)};return(0,a.useEffect)((function(){return t(window.innerWidth),l(window.devicePixelRatio),window.addEventListener("scroll",x),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u),window.removeEventListener("scroll",x)}}),[]),(0,r.jsxs)("div",{className:"device-pixel-ratio",style:h,children:[(0,r.jsxs)("div",{className:"label",children:["Your device pixel ratio:",(0,r.jsx)("div",{className:"window-width-box",children:(0,r.jsx)("span",{children:o})})]}),(0,r.jsxs)("div",{className:"label",children:["Your device width:",(0,r.jsx)("div",{className:"window-width-box",children:(0,r.jsxs)("span",{children:[n,"px"]})})]})]})};function E(){var e=(0,a.useRef)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"Next Cloudimage Responsive"})}),(0,r.jsxs)("section",{className:"content-wrapper",children:[(0,r.jsx)(t,{}),(0,r.jsx)(N,{}),(0,r.jsx)(y,{}),(0,r.jsx)(k,{}),(0,r.jsx)(_,{}),(0,r.jsx)(C,{}),(0,r.jsx)(R,{}),(0,r.jsx)(z,{}),(0,r.jsx)(L,{footerRef:e}),(0,r.jsx)(I,{footerRef:e})]})]})}}},function(e){e.O(0,[422,774,888,179],(function(){return s=5557,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=index-410e0b323839cbd0.js.map