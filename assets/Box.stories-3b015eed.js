import{a as n,j as r}from"./jsx-runtime-c9381026.js";import{B as e}from"./Box-833ae923.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f7e1e14e.js";const H={title:"Layout/Box",component:e,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"This is a box",p:4,bg:"#f3f4f6"}},d={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r(e,{p:2,bg:"#f3f4f6",children:"Padding 2 (8px)"}),r(e,{p:4,bg:"#f3f4f6",children:"Padding 4 (16px)"}),r(e,{p:6,bg:"#f3f4f6",children:"Padding 6 (24px)"}),r(e,{p:8,bg:"#f3f4f6",children:"Padding 8 (32px)"})]})},i={render:()=>n("div",{style:{border:"1px dashed #ccc"},children:[r(e,{m:4,p:4,bg:"#f3f4f6",children:"Box with margin 4 (16px) "}),r(e,{m:8,p:4,bg:"#e5e7eb",children:"Box with margin 8 (32px)"})]})},o={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r(e,{px:6,py:2,bg:"#f3f4f6",children:"Horizontal padding 6, Vertical padding 2"}),r(e,{px:2,py:6,bg:"#e5e7eb",children:"Horizontal padding 2, Vertical padding 6"})]})},s={render:()=>n("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r(e,{p:4,bg:"#f3f4f6",radius:"none",children:"None"}),r(e,{p:4,bg:"#f3f4f6",radius:"sm",children:"Small"}),r(e,{p:4,bg:"#f3f4f6",radius:"md",children:"Medium"}),r(e,{p:4,bg:"#f3f4f6",radius:"lg",children:"Large"}),r(e,{p:4,bg:"#f3f4f6",radius:"xl",children:"XL"}),r(e,{p:4,bg:"#f3f4f6",radius:"full",children:"Full"})]})},p={render:()=>n(e,{as:"article",p:6,bg:"#ffffff",radius:"lg",style:{border:"1px solid #e5e7eb",maxWidth:"400px"},children:[r("h3",{style:{margin:"0 0 1rem 0"},children:"Card Title"}),r("p",{style:{margin:"0",color:"#6b7280"},children:"This is a card-like component created using the Box component with padding, background, and border radius."})]})};var f,l,c;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a box',
    p: 4,
    bg: '#f3f4f6'
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var t,g,x;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Box p={2} bg="#f3f4f6">Padding 2 (8px)</Box>\r
      <Box p={4} bg="#f3f4f6">Padding 4 (16px)</Box>\r
      <Box p={6} bg="#f3f4f6">Padding 6 (24px)</Box>\r
      <Box p={8} bg="#f3f4f6">Padding 8 (32px)</Box>\r
    </div>
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var m,u,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px dashed #ccc'
  }}>\r
      <Box m={4} p={4} bg="#f3f4f6">Box with margin 4 (16px) </Box>\r
      <Box m={8} p={4} bg="#e5e7eb">Box with margin 8 (32px)</Box>\r
    </div>
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,B,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Box px={6} py={2} bg="#f3f4f6">\r
        Horizontal padding 6, Vertical padding 2\r
      </Box>\r
      <Box px={2} py={6} bg="#e5e7eb">\r
        Horizontal padding 2, Vertical padding 6\r
      </Box>\r
    </div>
}`,...(y=(B=o.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var v,P,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Box p={4} bg="#f3f4f6" radius="none">None</Box>\r
      <Box p={4} bg="#f3f4f6" radius="sm">Small</Box>\r
      <Box p={4} bg="#f3f4f6" radius="md">Medium</Box>\r
      <Box p={4} bg="#f3f4f6" radius="lg">Large</Box>\r
      <Box p={4} bg="#f3f4f6" radius="xl">XL</Box>\r
      <Box p={4} bg="#f3f4f6" radius="full">Full</Box>\r
    </div>
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var w,D,W;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Box as="article" p={6} bg="#ffffff" radius="lg" style={{
    border: '1px solid #e5e7eb',
    maxWidth: '400px'
  }}>\r
      <h3 style={{
      margin: '0 0 1rem 0'
    }}>Card Title</h3>\r
      <p style={{
      margin: '0',
      color: '#6b7280'
    }}>\r
      This is a card-like component created using the Box component with padding, background, and border radius.\r
      </p>\r
    </Box>
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const M=["Default","WithPadding","WithMargin","DirectionalSpacing","BorderRadius","AsCard"];export{p as AsCard,s as BorderRadius,a as Default,o as DirectionalSpacing,i as WithMargin,d as WithPadding,M as __namedExportsOrder,H as default};
