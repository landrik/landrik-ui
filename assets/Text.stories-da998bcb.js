import{j as i,a as t}from"./jsx-runtime-c9381026.js";import{r as n,a as J}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const K={xs:n`font-size: ${({theme:e})=>e.typography.size.xs};`,sm:n`font-size: ${({theme:e})=>e.typography.size.sm};`,base:n`font-size: ${({theme:e})=>e.typography.size.base};`,lg:n`font-size: ${({theme:e})=>e.typography.size.lg};`,xl:n`font-size: ${({theme:e})=>e.typography.size.xl};`},P={normal:n`font-weight: ${({theme:e})=>e.typography.weight.normal};`,medium:n`font-weight: ${({theme:e})=>e.typography.weight.medium};`,semibold:n`font-weight: ${({theme:e})=>e.typography.weight.semibold};`,bold:n`font-weight: ${({theme:e})=>e.typography.weight.bold};`},Q=J.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.family.sans};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  text-align: ${e=>e.$align};

  color: ${e=>e.$variant==="primary"?e.theme.color.accent[600]:e.$variant==="secondary"?e.theme.color.accent[200]:e.$variant==="muted"?e.theme.color.neutral[600]:e.$variant==="error"?e.theme.color.danger:e.$variant==="success"?e.theme.color.success:e.theme.color.neutral[900]};

  ${e=>K[e.$size]}
  ${e=>P[e.$weight]}

  ${e=>e.$truncate&&n`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`}

  ${e=>e.$lineClamp&&n`display: -webkit-box; -webkit-line-clamp: ${e.$lineClamp}; -webkit-box-orient: vertical; overflow: hidden;`}
`,a=({children:e,as:N="p",size:I="base",weight:B="normal",align:H="left",variant:O="default",truncate:F=!1,italic:R=!1,lineClamp:G,...U})=>i(Q,{as:N,$size:I,$weight:B,$align:H,$variant:O,$truncate:F,$lineClamp:G,children:e});try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"label"'},{value:'"p"'},{value:'"span"'},{value:'"div"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"base"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"normal"'},{value:'"semibold"'},{value:'"bold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"error"'},{value:'"muted"'},{value:'"subtle"'}]}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"boolean | undefined"}},lineClamp:{defaultValue:null,description:"",name:"lineClamp",required:!1,type:{name:"number | undefined"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const ae={title:"Components/Text",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["p","span","div","label"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},variant:{control:"select",options:["default","subtle","muted","error","success","warning"]},align:{control:"select",options:["left","center","right","justify"]}}},r="The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate text styling.",l={args:{children:r}},s={args:{...l.args},render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t(a,{size:"xs",children:["Extra Small Text (xs) - ",r]}),t(a,{size:"sm",children:["Small Text (sm) - ",r]}),t(a,{size:"base",children:["Medium Text (md) - ",r]}),t(a,{size:"lg",children:["Large Text (lg) - ",r]}),t(a,{size:"xl",children:["Extra Large Text (xl) - ",r]})]})},o={args:{...l.args},render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t(a,{weight:"normal",children:["Normal Weight - ",r]}),t(a,{weight:"medium",children:["Medium Weight - ",r]}),t(a,{weight:"semibold",children:["Semibold Weight - ",r]}),t(a,{weight:"bold",children:["Bold Weight - ",r]})]})},d={args:{...l.args},render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t(a,{variant:"default",children:["Default - ",r]}),t(a,{variant:"subtle",children:["Subtle - ",r]}),t(a,{variant:"muted",children:["Muted - ",r]}),t(a,{variant:"error",children:["Error - ",r]}),t(a,{variant:"success",children:["Success - ",r]}),t(a,{variant:"warning",children:["Warning - ",r]})]})},m={args:{...l.args},render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i(a,{align:"left",children:r}),i(a,{align:"center",children:r}),i(a,{align:"right",children:r}),i(a,{align:"justify",children:r})]})},c={args:{children:r,italic:!0}},u={args:{...l.args},render:()=>i("div",{style:{maxWidth:"300px",border:"1px solid #e5e7eb",padding:"1rem"},children:i(a,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"})})},p={args:{...l.args},render:()=>t("div",{children:[i(a,{as:"label",weight:"medium",size:"sm",children:"Email Address"}),i("input",{type:"email",style:{marginTop:"0.5rem",padding:"0.5rem",width:"100%"}})]})};var g,x,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: sampleText
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,v,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,b,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,z,S;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,W,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var V,_,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const re=["Default","AllSizes","AllWeights","AllVariants","Alignment","Italic","Truncate","AsLabel"];export{m as Alignment,s as AllSizes,d as AllVariants,o as AllWeights,p as AsLabel,l as Default,c as Italic,u as Truncate,re as __namedExportsOrder,ae as default};
