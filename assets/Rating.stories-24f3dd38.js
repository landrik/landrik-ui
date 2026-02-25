import{a as m,j as r}from"./jsx-runtime-c9381026.js";import{r as q}from"./index-8b3efc3f.js";import{a as o,r as d}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const L=o.div`display: inline-flex; align-items: center; gap: ${e=>e.theme.spacing[2]}px;`,k=o.div`display: inline-flex; gap: ${e=>e.theme.spacing[1]}px;`,B={sm:d`width: 16px; height: 16px;`,md:d`width: 24px; height: 24px;`,lg:d`width: 32px; height: 32px;`},H=o.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${e=>e.$readOnly?"default":"pointer"};
  transition: transform ${e=>e.theme.transitions.fast};

  &:hover:not(:disabled) {
    transform: ${e=>e.$readOnly?"none":"scale(1.1)"};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: 2px;
    border-radius: ${e=>e.theme.radii.sm};
  }

  ${e=>B[e.$size]}

`,N=o.svg`
  width: 100%;
  height: 100%;

  .star-bg {
    fill: ${e=>e.theme.colors.neutral[300]};
  }

  .star-fill {
    fill: ${e=>e.$color};
    clip-path: ${e=>`inset(0 ${100-e.$filled}% 0 0)`};
  }
`,j=o.span`
  font-size: ${e=>e.theme.typography.fontSize.sm}; 
  font-weight: ${e=>e.theme.typography.fontWeight.medium}; 
  color: ${e=>e.theme.colors.neutral[700]};
`,O=({filled:e,color:n})=>m(N,{viewBox:"0 0 20 20",$filled:e,$color:n,children:[r("path",{className:"star-bg",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}),r("path",{className:"star-fill",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]}),f=({value:e,max:n=5,onChange:p,readOnly:s=!1,size:w="md",allowHalf:h=!1,color:C="#f59e0b",showValue:M=!1})=>{const[g,v]=q.useState(null),y=(t,a)=>{if(s||!p)return;const l=a?t+.5:t+1;p(l)},S=(t,a)=>{if(s||!h)return;const l=a.currentTarget.getBoundingClientRect(),u=a.clientX-l.left<l.width/2;v(u?t+.5:t+1)},_=()=>{v(null)},z=g!==null?g:e;return m(L,{children:[r(k,{onMouseLeave:_,children:Array.from({length:n},(t,a)=>{const l=a+1,u=Math.min(Math.max((z-a)*100,0),100);return r(H,{$size:w,$readOnly:s,onClick:i=>{if(!h){y(a,!1);return}const $=i.currentTarget.getBoundingClientRect(),R=i.clientX-$.left<$.width/2;y(a,R)},onMouseMove:i=>S(a,i),disabled:s,"aria-label":`Rate ${l} out of ${n}`,children:r(O,{filled:u,color:C})},a)})}),M&&m(j,{children:[e.toFixed(1)," / ",n]})]})};try{f.displayName="Rating",f.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:null,description:"Current rating value",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"5"},description:"Maximum rating",name:"max",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when rating changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},readOnly:{defaultValue:{value:"false"},description:"Read-only mode",name:"readOnly",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},allowHalf:{defaultValue:{value:"false"},description:"Allow half stars",name:"allowHalf",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#f59e0b"},description:"Custom color for filled stars",name:"color",required:!1,type:{name:"string"}},showValue:{defaultValue:{value:"false"},description:"Show numeric value",name:"showValue",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Components/Rating",component:f,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{}};var b,x,V;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(V=(x=c.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const F=["Default"];export{c as Default,F as __namedExportsOrder,X as default};
