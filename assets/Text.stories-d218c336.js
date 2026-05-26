import{j as i,a as r}from"./jsx-runtime-c9381026.js";import{r as n,a as J}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const K={xs:n`font-size: ${e=>e.theme.typography.fontSize.xs};`,sm:n`font-size: ${e=>e.theme.typography.fontSize.sm};`,base:n`font-size: ${e=>e.theme.typography.fontSize.base};`,lg:n`font-size: ${e=>e.theme.typography.fontSize.lg};`,xl:n`font-size: ${e=>e.theme.typography.fontSize.xl};`},P={normal:n`font-weight: ${e=>e.theme.typography.fontWeight.normal};`,medium:n`font-weight: ${e=>e.theme.typography.fontWeight.medium};`,semibold:n`font-weight: ${e=>e.theme.typography.fontWeight.semibold};`,bold:n`font-weight: ${e=>e.theme.typography.fontWeight.bold};`},Q=J.p`
  margin: 0;
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  text-align: ${e=>e.$align};

  color: ${e=>e.$variant==="primary"?e.theme.colors.primary[600]:e.$variant==="secondary"?e.theme.colors.primary[200]:e.$variant==="muted"?e.theme.colors.neutral[600]:e.$variant==="error"?e.theme.colors.semantic.error:e.$variant==="success"?e.theme.colors.semantic.success:e.theme.colors.neutral[900]};

  ${e=>K[e.$size]}
  ${e=>P[e.$weight]}

  ${e=>e.$truncate&&n`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`}

  ${e=>e.$lineClamp&&n`display: -webkit-box; -webkit-line-clamp: ${e.$lineClamp}; -webkit-box-orient: vertical; overflow: hidden;`}
`,a=({children:e,as:N="p",size:I="base",weight:B="normal",align:F="left",variant:H="default",truncate:O=!1,italic:R=!1,lineClamp:G,...U})=>i(Q,{as:N,$size:I,$weight:B,$align:F,$variant:H,$truncate:O,$lineClamp:G,children:e});try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'},{value:'"div"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"base"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"normal"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"subtle"'},{value:'"default"'},{value:'"muted"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"boolean"}},lineClamp:{defaultValue:null,description:"",name:"lineClamp",required:!1,type:{name:"number"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Text",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["p","span","div","label"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},variant:{control:"select",options:["default","subtle","muted","error","success","warning"]},align:{control:"select",options:["left","center","right","justify"]}}},t="The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate text styling.",l={args:{children:t}},s={args:{...l.args},render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r(a,{size:"xs",children:["Extra Small Text (xs) - ",t]}),r(a,{size:"sm",children:["Small Text (sm) - ",t]}),r(a,{size:"base",children:["Medium Text (md) - ",t]}),r(a,{size:"lg",children:["Large Text (lg) - ",t]}),r(a,{size:"xl",children:["Extra Large Text (xl) - ",t]})]})},o={args:{...l.args},render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r(a,{weight:"normal",children:["Normal Weight - ",t]}),r(a,{weight:"medium",children:["Medium Weight - ",t]}),r(a,{weight:"semibold",children:["Semibold Weight - ",t]}),r(a,{weight:"bold",children:["Bold Weight - ",t]})]})},m={args:{...l.args},render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r(a,{variant:"default",children:["Default - ",t]}),r(a,{variant:"subtle",children:["Subtle - ",t]}),r(a,{variant:"muted",children:["Muted - ",t]}),r(a,{variant:"error",children:["Error - ",t]}),r(a,{variant:"success",children:["Success - ",t]}),r(a,{variant:"warning",children:["Warning - ",t]})]})},d={args:{...l.args},render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i(a,{align:"left",children:t}),i(a,{align:"center",children:t}),i(a,{align:"right",children:t}),i(a,{align:"justify",children:t})]})},c={args:{children:t,italic:!0}},u={args:{...l.args},render:()=>i("div",{style:{maxWidth:"300px",border:"1px solid #e5e7eb",padding:"1rem"},children:i(a,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"})})},p={args:{...l.args},render:()=>r("div",{children:[i(a,{as:"label",weight:"medium",size:"sm",children:"Email Address"}),i("input",{type:"email",style:{marginTop:"0.5rem",padding:"0.5rem",width:"100%"}})]})};var g,x,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: sampleText
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,T,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Text size="xs">Extra Small Text (xs) - {sampleText}</Text>\r
      <Text size="sm">Small Text (sm) - {sampleText}</Text>\r
      <Text size="base">Medium Text (md) - {sampleText}</Text>\r
      <Text size="lg">Large Text (lg) - {sampleText}</Text>\r
      <Text size="xl">Extra Large Text (xl) - {sampleText}</Text>\r
    </div>
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var y,b,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Text weight="normal">Normal Weight - {sampleText}</Text>\r
      <Text weight="medium">Medium Weight - {sampleText}</Text>\r
      <Text weight="semibold">Semibold Weight - {sampleText}</Text>\r
      <Text weight="bold">Bold Weight - {sampleText}</Text>\r
    </div>
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,z,S;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Text variant="default">Default - {sampleText}</Text>\r
      <Text variant="subtle">Subtle - {sampleText}</Text>\r
      <Text variant="muted">Muted - {sampleText}</Text>\r
      <Text variant="error">Error - {sampleText}</Text>\r
      <Text variant="success">Success - {sampleText}</Text>\r
      <Text variant="warning">Warning - {sampleText}</Text>\r
    </div>
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,W,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Text align="left">{sampleText}</Text>\r
      <Text align="center">{sampleText}</Text>\r
      <Text align="right">{sampleText}</Text>\r
      <Text align="justify">{sampleText}</Text>\r
    </div>
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var V,_,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: sampleText,
    italic: true
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,j,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    maxWidth: '300px',
    border: '1px solid #e5e7eb',
    padding: '1rem'
  }}>\r
      <Text truncate>\r
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width\r
      </Text>\r
    </div>
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,M,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div>\r
      <Text as="label" weight="medium" size="sm">\r
      Email Address\r
      </Text>\r
      <input type="email" style={{
      marginTop: '0.5rem',
      padding: '0.5rem',
      width: '100%'
    }} />\r
    </div>
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const te=["Default","AllSizes","AllWeights","AllVariants","Alignment","Italic","Truncate","AsLabel"];export{d as Alignment,s as AllSizes,m as AllVariants,o as AllWeights,p as AsLabel,l as Default,c as Italic,u as Truncate,te as __namedExportsOrder,ae as default};
