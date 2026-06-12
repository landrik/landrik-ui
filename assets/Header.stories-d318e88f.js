import{j as a,a as l}from"./jsx-runtime-c9381026.js";import{r as i,a as M}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const C={xs:i`font-size: ${({theme:e})=>e.typography.size.xs};`,sm:i`font-size: ${({theme:e})=>e.typography.size.sm};`,md:i`font-size: ${({theme:e})=>e.typography.size.base};`,lg:i`font-size: ${({theme:e})=>e.typography.size.lg};`,xl:i`font-size: ${({theme:e})=>e.typography.size.xl};`,"2xl":i`font-size: ${({theme:e})=>e.typography.size["2xl"]};`,"3xl":i`font-size: ${({theme:e})=>e.typography.size["3xl"]};`,"4xl":i`font-size: ${({theme:e})=>e.typography.size["4xl"]};`,"5xl":i`font-size: ${({theme:e})=>e.typography.size["5xl"]};`,"6xl":i`font-size: ${({theme:e})=>e.typography.size["6xl"]};`},X={normal:i`font-weight: ${({theme:e})=>e.typography.weight.normal};`,medium:i`font-weight: ${({theme:e})=>e.typography.weight.medium};`,semibold:i`font-weight: ${({theme:e})=>e.typography.weight.semibold};`,bold:i`font-weight: ${({theme:e})=>e.typography.weight.bold};`},E={left:i`align-items: left; text-align: left;`,center:i`align-items: center; text-align: center;`,right:i`align-items: right; text-align: right;`},V=M.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.family.sans};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: ${({theme:e})=>e.typography.letterSpacing.tight};
  color: ${e=>e.$variant==="primary"?e.theme.color.accent[700]:e.$variant==="secondary"?e.theme.color.accent[300]:e.$variant==="muted"?e.theme.color.neutral[600]:e.theme.color.neutral[900]};
  ${e=>E[e.$align]};
  ${e=>C[e.$size]};
  ${e=>X[e.$weight]}
`,r=({children:e,as:L="h2",size:j="2xl",weight:k="bold",variant:D="default",align:_="left"})=>a(V,{as:L,$size:j,$weight:k,$variant:D,$align:_,children:e});try{r.displayName="Header",r.__docgenInfo={description:"",displayName:"Header",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},size:{defaultValue:{value:"2xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'}]}},weight:{defaultValue:{value:"bold"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"normal"'},{value:'"semibold"'},{value:'"bold"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"muted"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}const R={title:"Components/Header",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},align:{control:"select",options:["left","center","right"]}}},n={args:{children:"The quick brown fox jumps over the lazy dog"}},t={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a(r,{size:"xs",children:"Extra Small Heading (xs)"}),a(r,{size:"sm",children:"Small Heading (sm)"}),a(r,{size:"md",children:"Medium Heading (md)"}),a(r,{size:"lg",children:"Large Heading (lg)"}),a(r,{size:"xl",children:"Extra Large Heading (xl)"}),a(r,{size:"2xl",children:"2XL Heading (2xl)"}),a(r,{size:"3xl",children:"3XL Heading (3xl)"}),a(r,{size:"4xl",children:"4XL Heading (4xl)"})]})},s={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a(r,{weight:"normal",children:"Normal - The quick brown fox jumps over the lazy dog."}),a(r,{weight:"medium",children:"Medium - The quick brown fox jumps over the lazy dog."}),a(r,{weight:"semibold",children:"Semibold - The quick brown fox jumps over the lazy dog."}),a(r,{weight:"bold",children:"Bold - The quick brown fox jumps over the lazy dog."})]})},d={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a(r,{as:"h1",size:"3xl",children:"H1 - Main Page Title"}),a(r,{as:"h2",size:"2xl",children:"H2 - Section Title"}),a(r,{as:"h3",size:"xl",children:"H3 - Subsection Title"}),a(r,{as:"h4",size:"lg",children:"H4 - Component Title"}),a(r,{as:"h5",size:"md",children:"H5 - Minor Title"}),a(r,{as:"h6",size:"sm",children:"H6 - Smallest Title"})]})},o={render:()=>l("div",{style:{minWidth:"800px",display:"flex",flexDirection:"column",gap:"1rem"},children:[a(r,{align:"left",children:"Left Aligned Heading"}),a(r,{align:"center",children:"Center Aligned Heading"}),a(r,{align:"right",children:"Right Aligned Heading"})]})},g={render:()=>l("div",{style:{textAlign:"center",padding:"3rem"},children:[a(r,{as:"h1",size:"4xl",align:"center",children:"Build amazing products"}),a(r,{as:"h2",size:"lg",weight:"normal",align:"center",style:{marginTop:"1rem",color:"#6b7280"},children:"Create beautiful user interfaces with our design system"})]})};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,p,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Header size="xs">Extra Small Heading (xs)</Header>\r
      <Header size="sm">Small Heading (sm)</Header>\r
      <Header size="md">Medium Heading (md)</Header>\r
      <Header size="lg">Large Heading (lg)</Header>\r
      <Header size="xl">Extra Large Heading (xl)</Header>\r
      <Header size="2xl">2XL Heading (2xl)</Header>\r
      <Header size="3xl">3XL Heading (3xl)</Header>\r
      <Header size="4xl">4XL Heading (4xl)</Header>\r
    </div>
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var H,y,f;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Header weight="normal">Normal - The quick brown fox jumps over the lazy dog.</Header>\r
      <Header weight="medium">Medium - The quick brown fox jumps over the lazy dog.</Header>\r
      <Header weight="semibold">Semibold - The quick brown fox jumps over the lazy dog.</Header>\r
      <Header weight="bold">Bold - The quick brown fox jumps over the lazy dog.</Header>\r
    </div>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,z,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Header as="h1" size="3xl">H1 - Main Page Title</Header>\r
      <Header as="h2" size="2xl">H2 - Section Title</Header>\r
      <Header as="h3" size="xl">H3 - Subsection Title</Header>\r
      <Header as="h4" size="lg">H4 - Component Title</Header>\r
      <Header as="h5" size="md">H5 - Minor Title</Header>\r
      <Header as="h6" size="sm">H6 - Smallest Title</Header>\r
    </div>
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var b,$,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    minWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Header align="left">Left Aligned Heading</Header>\r
      <Header align="center">Center Aligned Heading</Header>\r
      <Header align="right">Right Aligned Heading</Header>\r
    </div>
}`,...(S=($=o.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var T,q,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    textAlign: 'center',
    padding: '3rem'
  }}>\r
      <Header as="h1" size="4xl" align="center">\r
        Build amazing products\r
      </Header>\r
      <Header as='h2' size='lg' weight='normal' align='center' style={{
      marginTop: '1rem',
      color: '#6b7280'
    }}>\r
        Create beautiful user interfaces with our design system\r
      </Header>\r
    </div>
}`,...(A=(q=g.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const I=["Default","AllSizes","AllWeights","SemanticLevels","Alignment","HeroHeading"];export{o as Alignment,t as AllSizes,s as AllWeights,n as Default,g as HeroHeading,d as SemanticLevels,I as __namedExportsOrder,R as default};
