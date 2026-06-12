import{a as f,j as r}from"./jsx-runtime-c9381026.js";import{r as q}from"./index-8b3efc3f.js";import{a as o,r as c}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const L=o.div`display: inline-flex; align-items: center; gap: ${({theme:e})=>e.spacing[12]}px;`,k=o.div`display: inline-flex; gap: ${({theme:e})=>e.spacing[4]}px;`,B={sm:c`width: 16px; height: 16px;`,md:c`width: 24px; height: 24px;`,lg:c`width: 32px; height: 32px;`},H=o.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${e=>e.$readOnly?"default":"pointer"};
  transition: transform ${({theme:e})=>e.transitions.preset.fast};

  &:hover:not(:disabled) {
    transform: ${e=>e.$readOnly?"none":"scale(1.1)"};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.accent[500]};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radius.sm};
  }

  ${e=>B[e.$size]}

`,N=o.svg`
  width: 100%;
  height: 100%;

  .star-bg {
    fill: ${({theme:e})=>e.color.neutral[300]};
  }

  .star-fill {
    fill: ${e=>e.$color};
    clip-path: ${e=>`inset(0 ${100-e.$filled}% 0 0)`};
  }
`,j=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm}; 
  font-weight: ${({theme:e})=>e.typography.weight.medium}; 
  color: ${({theme:e})=>e.color.neutral[700]};
`,O=({filled:e,color:l})=>f(N,{viewBox:"0 0 20 20",$filled:e,$color:l,children:[r("path",{className:"star-bg",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}),r("path",{className:"star-fill",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]}),p=({value:e,max:l=5,onChange:m,readOnly:s=!1,size:w="md",allowHalf:g=!1,color:C="#f59e0b",showValue:M=!1})=>{const[h,v]=q.useState(null),$=(t,a)=>{if(s||!m)return;const n=a?t+.5:t+1;m(n)},_=(t,a)=>{if(s||!g)return;const n=a.currentTarget.getBoundingClientRect(),d=a.clientX-n.left<n.width/2;v(d?t+.5:t+1)},z=()=>{v(null)},R=h!==null?h:e;return f(L,{children:[r(k,{onMouseLeave:z,children:Array.from({length:l},(t,a)=>{const n=a+1,d=Math.min(Math.max((R-a)*100,0),100);return r(H,{$size:w,$readOnly:s,onClick:i=>{if(!g){$(a,!1);return}const y=i.currentTarget.getBoundingClientRect(),S=i.clientX-y.left<y.width/2;$(a,S)},onMouseMove:i=>_(a,i),disabled:s,"aria-label":`Rate ${n} out of ${l}`,children:r(O,{filled:d,color:C})},a)})}),M&&f(j,{children:[e.toFixed(1)," / ",l]})]})};try{p.displayName="Rating",p.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:null,description:"Current rating value",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"5"},description:"Maximum rating",name:"max",required:!1,type:{name:"number | undefined"}},onChange:{defaultValue:null,description:"Callback when rating changes",name:"onChange",required:!1,type:{name:"((value: number) => void) | undefined"}},readOnly:{defaultValue:{value:"false"},description:"Read-only mode",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},allowHalf:{defaultValue:{value:"false"},description:"Allow half stars",name:"allowHalf",required:!1,type:{name:"boolean | undefined"}},color:{defaultValue:{value:"#f59e0b"},description:"Custom color for filled stars",name:"color",required:!1,type:{name:"string | undefined"}},showValue:{defaultValue:{value:"false"},description:"Show numeric value",name:"showValue",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const X={title:"Components/Rating",component:p,parameters:{layout:"centered"},tags:["autodocs"]},u={args:{}};var b,x,V;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(V=(x=u.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const F=["Default"];export{u as Default,F as __namedExportsOrder,X as default};
