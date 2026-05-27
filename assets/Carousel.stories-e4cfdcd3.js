import{a as i,F as $,j as a}from"./jsx-runtime-c9381026.js";import{r as k}from"./index-8b3efc3f.js";import{a as t}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const ve=t.div`position: relative; width: 100%; height: ${e=>e.$height||"400px"}; overflow: hidden; border-radius: 12px; background: #000;`,xe=t.div`position: relative; width: 100%; height: 100%; display: flex; transition: transform 0.3s ease-in-out;`,we=t.img`width: 100%; height: 100%; object-fit: ${e=>e.$objectFit}; flex-shrink: 0;`,d=t.button`
position: absolute; 
top: 50%; 
${e=>e.$position}: 16px; 
transform: translateY(-50%); 
background: ${e=>`${e.$color}cc`};
color: white;
border: none;
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.2s ease;
z-index: 2;

&:hover:not(:disabled) {
background: ${e=>e.$color};
transform: translateY(-50%) scale(1.1);
}

&:disabled {
opacity: 0.3;
cursor: not-allowed;
}
`,Ce=t.div`position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 2;`,ye=t.button`
width: 8px;
height: 8px;
border-radius: 50%;
border: none;
background: ${e=>e.$active?e.$color:"rgba(255, 255, 255, 0.5)"};
cursor: pointer;
transition: all 0.2s ease;
padding: 0;

&:hover {
background: ${e=>e.$active?e.$color:"rgba(255, 255, 255, 0.8)"};
transform: scale(1.2);
}
`,$e=t.div`position: absolute; top: 16px; right: 16px; background: rgba(0, 0, 0, 0.7); color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; z-index: 2;`,ke=t.div`
display: flex;
gap: 8px;
margin-top: 12px;
overflow-x: auto;
padding: 4px 0;

&::-webkit-scrollbar {
height: 6px;
}

&::-webkit-scrollbar-track {
background: #f1f1f1;
border-radius: 3px;
}

&::-webkit-scrollbar-thumb {
background: #888;
border-radius: 3px;
}

&::-webkit-scrollbar-thumb:hover {
background: #555;
}
`,Ie=t.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid ${e=>e.$active?e.$color:"transparent"};
  opacity: ${e=>e.$active?1:.6};
  transition: all 0.2s ease;

  &:hover {
  opacity: 1;
  transform: scale(1.05);
  }
`,Fe=t.div`position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.95); z-index: 9999; display: ${e=>e.$visible?"flex":"none"}; align-items: center; justify-content: center;`,je=t.img`max-width: 90vw; max-height: 90vh; object-fit: contain;`,Pe=t.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,B=()=>a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a("polyline",{points:"15 18 9 12 15 6"})}),L=()=>a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a("polyline",{points:"9 18 15 12 9 6"})}),Te=()=>a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),I=({images:e,autoPlay:F=!1,autoPlayInterval:j=3e3,showThumbnails:de=!1,showIndicators:pe=!0,showCounter:me=!1,showNavButtons:P=!0,enableFullscreen:T=!1,objectFit:he="cover",height:ge,color:l="#3b82f6",loop:u=!0})=>{var N,W;const[o,c]=k.useState(0),[fe,C]=k.useState(!1);k.useEffect(()=>{if(!F)return;const r=setInterval(()=>{y()},j);return()=>clearInterval(r)},[o,F,j]);const y=()=>{o===e.length-1?u&&c(0):c(r=>r+1)},q=()=>{o===0?u&&c(e.length-1):c(r=>r-1)},S=r=>{c(r)},be=()=>{T&&C(!0)},V=u||o>0,_=u||o<e.length-1;return i($,{children:[i("div",{children:[i(ve,{$height:ge,children:[a(xe,{style:{transform:`translateX(-${o*100}%)`},children:e.map((r,s)=>a(we,{src:r.src,alt:r.alt,$objectFit:he,onClick:be,style:{cursor:T?"pointer":"default"}},s))}),P&&i($,{children:[a(d,{$position:"left",$color:l,onClick:q,disabled:!V,"aria-label":"Previous image",children:a(B,{})}),a(d,{$position:"right",$color:l,onClick:y,disabled:!_,"aria-label":"Next image",children:a(L,{})})]}),pe&&a(Ce,{children:e.map((r,s)=>a(ye,{$active:s===o,$color:l,onClick:()=>S(s),"aria-label":`Go to slide ${s+1}`},s))}),me&&i($e,{children:[o+1," / ",e.length]})]}),de&&a(ke,{children:e.map((r,s)=>a(Ie,{src:r.src,alt:r.alt,$active:s===o,$color:l,onClick:()=>S(s)},s))})]}),i(Fe,{$visible:fe,onClick:()=>C(!1),children:[a(Pe,{onClick:()=>C(!1),"aria-label":"Close fullscreen",children:a(Te,{})}),a(je,{src:(N=e[o])==null?void 0:N.src,alt:(W=e[o])==null?void 0:W.alt,onClick:r=>r.stopPropagation()}),P&&i($,{children:[a(d,{$position:"left",$color:l,onClick:r=>{r.stopPropagation(),q()},disabled:!V,"aria-label":"Previous image",children:a(B,{})}),a(d,{$position:"right",$color:l,onClick:r=>{r.stopPropagation(),y()},disabled:!_,"aria-label":"Next image",children:a(L,{})})]})]})]})};try{I.displayName="Carousel",I.__docgenInfo={description:"",displayName:"Carousel",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"CarouselImage[]"}},autoPlay:{defaultValue:{value:"false"},description:"",name:"autoPlay",required:!1,type:{name:"boolean | undefined"}},autoPlayInterval:{defaultValue:{value:"3000"},description:"",name:"autoPlayInterval",required:!1,type:{name:"number | undefined"}},showThumbnails:{defaultValue:{value:"false"},description:"",name:"showThumbnails",required:!1,type:{name:"boolean | undefined"}},showIndicators:{defaultValue:{value:"true"},description:"",name:"showIndicators",required:!1,type:{name:"boolean | undefined"}},showCounter:{defaultValue:{value:"false"},description:"",name:"showCounter",required:!1,type:{name:"boolean | undefined"}},showNavButtons:{defaultValue:{value:"true"},description:"",name:"showNavButtons",required:!1,type:{name:"boolean | undefined"}},enableFullscreen:{defaultValue:{value:"false"},description:"",name:"enableFullscreen",required:!1,type:{name:"boolean | undefined"}},objectFit:{defaultValue:{value:"cover"},description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"cover"'},{value:'"contain"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string | undefined"}},loop:{defaultValue:{value:"true"},description:"",name:"loop",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Ne={title:"Components/Carousel",component:I,parameters:{layout:"centered"},tags:["autodocs"]},n=[{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",alt:"Mountain landscape"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",alt:"Forest path"},{src:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",alt:"Flower field"},{src:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",alt:"Beach sunset"}],p={args:{images:n}},m={args:{images:n,showThumbnails:!0}},h={args:{images:n,showCounter:!0}},g={args:{images:n,autoPlay:!0,autoPlayInterval:2e3}},f={args:{images:n,showIndicators:!1}},b={args:{images:n,enableFullscreen:!0,showCounter:!0}},v={args:{images:n,objectFit:"contain"}},x={args:{images:n,loop:!1}},w={args:{images:n,height:"600px",showThumbnails:!0}};var z,M,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  }
}`,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var G,R,A;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    showThumbnails: true
  }
}`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,H,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    showCounter: true
  }
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var X,Y,J;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    autoPlay: true,
    autoPlayInterval: 2000
  }
}`,...(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    showIndicators: false
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    enableFullscreen: true,
    showCounter: true
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    objectFit: 'contain'
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ne,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    loop: false
  }
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,ue;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    height: '600px',
    showThumbnails: true
  }
}`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const We=["Default","WithThumbnails","WithCounter","AutoPlay","WithoutIndicators","Fullscreen","ContainMode","NoLoop","CustomHeight"];export{g as AutoPlay,v as ContainMode,w as CustomHeight,p as Default,b as Fullscreen,x as NoLoop,h as WithCounter,m as WithThumbnails,f as WithoutIndicators,We as __namedExportsOrder,Ne as default};
