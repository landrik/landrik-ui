import{a as d,j as a}from"./jsx-runtime-c9381026.js";import{r as O}from"./index-8b3efc3f.js";import{r as s,a as i}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const V={xs:s`width: 24px; height: 24px; font-size: ${e=>e.theme.typography.fontSize.xs};`,sm:s`width: 32px; height: 32px; font-size: ${e=>e.theme.typography.fontSize.sm};`,md:s`width: 40px; height: 40px; font-size: ${e=>e.theme.typography.fontSize.base};`,lg:s`width: 48px; height: 48px; font-size: ${e=>e.theme.typography.fontSize.lg};`,xl:s`width: 64px; height: 64px; font-size: ${e=>e.theme.typography.fontSize.xl};`,"2xl":s`width: 96px; height: 96px; font-size: ${e=>e.theme.typography.fontSize["2xl"]};`},L={circle:s`border-radius: ${e=>e.theme.radii.full};`,rounded:s`border-radius: ${e=>e.theme.radii.lg};`,square:s`border-radius: ${e=>e.theme.radii.none};`},W=i.div`

  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${e=>V[e.$size]} 
`,X=i.div`
  width: 100%; 
  height: 100%; 
  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${e=>L[e.$shape]} 
  overflow: hidden;
`,E=i.img`width: 100%; height: 100%; object-fit: cover;`,N=i.div`
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: ${e=>e.theme.colors.primary[500]}; 
  color: ${e=>e.theme.colors.neutral[100]}; 
  font-weight: ${e=>e.theme.typography.fontWeight.semibold}; 
  user-select: none;
  
`,U={online:s`background-color: ${e=>e.theme.colors.semantic.success}`,offline:s`background-color: #6b7280`,away:s`background-color: ${e=>e.theme.colors.semantic.warning}`,busy:s`background-color: ${e=>e.theme.colors.semantic.error}`},J=i.div`
  position: absolute; 
  bottom: 0; 
  right: 0; 
  width: ${e=>e.$size==="xs"?"6px":e.$size==="sm"?"8px":e.$size==="md"?"10px":e.$size==="lg"?"12px":e.$size==="xl"?"14px":"18px"}; 
  height: ${e=>e.$size==="xs"?"6px":e.$size==="sm"?"8px":e.$size==="md"?"10px":e.$size==="lg"?"12px":e.$size==="xl"?"14px":"18px"}; 
  border-radius: ${e=>e.theme.radii.full}; 
  ${e=>U[e.$status]}; 
  border: 2px solid ${e=>e.theme.colors.neutral[0]};
`,t=({src:e,alt:u="",size:m="md",shape:D="circle",status:p,initials:I,fallback:j,...M})=>{const[C,F]=O.useState(!1);return d(W,{$size:m,children:[a(X,{$shape:D,children:!e||C?a(N,{children:j||I||u.charAt(0).toUpperCase()}):a(E,{src:e,alt:u,onError:()=>F(!0)})}),p&&a(J,{$status:p,$size:m,$statusColor:p})]})};try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"square"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/Avatar",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User Avatar"}},n={render:()=>d("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[a(t,{size:"xs",initials:"XS"}),a(t,{size:"sm",initials:"SM"}),a(t,{size:"md",initials:"MD"}),a(t,{size:"lg",initials:"LG"}),a(t,{size:"xl",initials:"XL"}),a(t,{size:"2xl",initials:"2XL"})]})},l={render:()=>d("div",{style:{display:"flex",gap:"1rem"},children:[a(t,{shape:"circle",initials:"CI"}),a(t,{shape:"rounded",initials:"RO"}),a(t,{shape:"square",initials:"SQ"})]})},o={render:()=>d("div",{style:{display:"flex",gap:"1rem"},children:[a(t,{initials:"ON",status:"online"}),a(t,{initials:"OF",status:"offline"}),a(t,{initials:"AW",status:"away"}),a(t,{initials:"BU",status:"busy"})]})},c={args:{initials:"JD",alt:"John Doe"}};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Avatar size="xs" initials="XS" />\r
      <Avatar size="sm" initials="SM" />\r
      <Avatar size="md" initials="MD" />\r
      <Avatar size="lg" initials="LG" />\r
      <Avatar size="xl" initials="XL" />\r
      <Avatar size="2xl" initials="2XL" />\r
    </div>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var z,$,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Avatar shape="circle" initials="CI" />\r
      <Avatar shape="rounded" initials="RO" />\r
      <Avatar shape="square" initials="SQ" />\r
    </div>
}`,...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var b,S,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Avatar initials="ON" status="online" />\r
      <Avatar initials="OF" status="offline" />\r
      <Avatar initials="AW" status="away" />\r
      <Avatar initials="BU" status="busy" />\r
    </div>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,q,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    alt: 'John Doe'
  }
}`,...(_=(q=c.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const P=["Default","AllSizes","Shapes","WithStatus","Fallback"];export{n as AllSizes,r as Default,c as Fallback,l as Shapes,o as WithStatus,P as __namedExportsOrder,K as default};
