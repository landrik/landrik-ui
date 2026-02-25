import{a as A,j as d}from"./jsx-runtime-c9381026.js";import{B as l}from"./Button-287f5874.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f7e1e14e.js";import"./Icon-e1e4d749.js";const Q={title:"Components/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{variant:"primary",shape:"rounded",size:"md",onClick:()=>{}}},a={args:{...r.args,variant:"primary",children:"Click Me"}},e={args:{...r.args,variant:"secondary",children:"Click Me"}},n={args:{variant:"primary",children:"Loading",isLoading:!0}},s={args:{...r.args,variant:"primary",children:"Click Me",icon:"plus"}},i={args:{...r.args,variant:"primary",children:"Click Me",icon:"plus",iconOnly:!0,shape:"pill"}},o={args:{variant:"primary",children:"Click Me",onClick:()=>alert("Clicked!")}},t={args:{variant:"primary",children:"Click Me",disabled:!0}},c={render:()=>A("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[d(l,{size:"sm",children:"Small Button"}),d(l,{size:"md",children:"Medium Button"}),d(l,{size:"lg",children:"Large Button"})]})};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    shape: 'rounded',
    size: 'md',
    onClick: () => void {}
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'primary',
    children: 'Click Me'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,C,k;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'secondary',
    children: 'Click Me'
  }
}`,...(k=(C=e.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var B,S,M;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Loading',
    isLoading: true
  }
}`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var f,x,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'primary',
    children: 'Click Me',
    icon: 'plus'
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var D,L,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'primary',
    children: 'Click Me',
    icon: 'plus',
    iconOnly: true,
    shape: 'pill'
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var W,b,I;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Click Me',
    onClick: () => alert('Clicked!')
  }
}`,...(I=(b=o.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var j,w,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Click Me',
    disabled: true
  }
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,E,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Button size='sm'>Small Button</Button>\r
      <Button size='md'>Medium Button</Button>\r
      <Button size='lg'>Large Button</Button>\r
    </div>
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const R=["Default","Primary","Secondary","Loading","WithIcon","WithIconOnly","WithOnClick","Disabled","Sizes"];export{r as Default,t as Disabled,n as Loading,a as Primary,e as Secondary,c as Sizes,s as WithIcon,i as WithIconOnly,o as WithOnClick,R as __namedExportsOrder,Q as default};
