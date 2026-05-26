import{a as s,j as t}from"./jsx-runtime-c9381026.js";import{a as v,r as n}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const S=v.div`position: relative; display: inline-flex;`,z={default:n`background-color: ${e=>e.theme.colors.neutral[600]}; color: ${e=>e.theme.colors.neutral[0]};`,success:n`background-color: ${e=>e.theme.colors.semantic.success}; color: ${e=>e.theme.colors.neutral[0]};`,warning:n`background-color: ${e=>e.theme.colors.semantic.warning}; color: ${e=>e.theme.colors.neutral[0]};`,error:n`background-color: ${e=>e.theme.colors.semantic.error}; color: ${e=>e.theme.colors.neutral[0]};`,info:n`background-color: ${e=>e.theme.colors.semantic.info}; color: ${e=>e.theme.colors.neutral[0]};`},W={sm:n`
      min-width: ${e=>e.$dot?"8px":"16px"}; 
      height: ${e=>e.$dot?"8px":"16px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[1]}px`}; 
      font-size: ${e=>e.theme.typography.fontSize.xs}; 
  `,md:n`
      min-width: ${e=>e.$dot?"10px":"20px"}; 
      height: ${e=>e.$dot?"10px":"20px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[1]}px`}; 
      font-size: ${e=>e.theme.typography.fontSize.xs}; 
    `,lg:n`
      min-width: ${e=>e.$dot?"12px":"24px"}; 
      height: ${e=>e.$dot?"12px":"24px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[2]}px`}; 
      font-size: ${e=>e.theme.typography.fontSize.sm}; 
    `},V={"top-right":n`top: 0; right: 0; transform: translate(50%, -50%);`,"top-left":n`top: 0; left: 0; transform: translate(-50%, -50%);`,"bottom-right":n`bottom: 0; right: 0; transform: translate(50%, 50%);`,"bottom-left":n`bottom: 0; left: 0; transform: translate(-50%, 50%);`},_=v.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>e.theme.radii.full};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: 1;
  border: 2px solid ${e=>e.theme.colors.neutral[0]};
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: all ${e=>e.theme.transitions.duration.base};

  ${e=>z[e.$variant]}
  ${e=>W[e.$size]}
  ${e=>V[e.$position]}
`,r=({content:e,children:$,variant:y="error",size:x="md",position:I="top-right",dot:d=!1,show:w=!0})=>s(S,{children:[$,t(_,{$variant:y,$size:x,$position:I,$dot:d,$show:w,children:!d&&e})]});try{r.displayName="Indicator",r.__docgenInfo={description:"",displayName:"Indicator",props:{content:{defaultValue:null,description:"Content to show in indicator",name:"content",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Element to attach indicator to",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"error"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:{value:"md"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},position:{defaultValue:{value:"top-right"},description:"Position relative to child",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},dot:{defaultValue:{value:"false"},description:"Show as dot (no content)",name:"dot",required:!1,type:{name:"boolean"}},show:{defaultValue:{value:"true"},description:"Show indicator",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Indicator",component:r,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>s("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{content:"5",children:t("button",{style:{padding:"0.5rem 1rem"},children:"Messages"})}),t(r,{content:"99+",children:t("button",{style:{padding:"0.5rem 1rem"},children:"Notifications"})})]})},a={render:()=>s("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{dot:!0,children:t("button",{style:{padding:"0.5rem 1rem"},children:"Inbox"})}),t(r,{dot:!0,variant:"success",children:t("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"#e5e7eb"}})})]})},i={render:()=>s("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{content:"5",variant:"default",children:t("button",{children:"Default"})}),t(r,{content:"5",variant:"success",children:t("button",{children:"Success"})}),t(r,{content:"5",variant:"warning",children:t("button",{children:"Warning"})}),t(r,{content:"5",variant:"error",children:t("button",{children:"Error"})}),t(r,{content:"5",variant:"info",children:t("button",{children:"Info"})})]})};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>\r
    <Indicator content="5">\r
      <button style={{
        padding: '0.5rem 1rem'
      }}>Messages</button>\r
    </Indicator>\r
\r
\r
  <Indicator content="99+">\r
    <button style={{
        padding: '0.5rem 1rem'
      }}>Notifications</button>\r
  </Indicator>\r
  </div>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>\r
    <Indicator dot>\r
      <button style={{
        padding: '0.5rem 1rem'
      }}>Inbox</button>\r
    </Indicator>\r
\r
\r
  <Indicator dot variant="success">\r
    <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: '#e5e7eb'
      }} />\r
  </Indicator>\r
  </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>\r
    <Indicator content="5" variant="default">\r
      <button>Default</button>\r
    </Indicator>\r
    <Indicator content="5" variant="success">\r
      <button>Success</button>\r
    </Indicator>\r
    <Indicator content="5" variant="warning">\r
      <button>Warning</button>\r
    </Indicator>\r
    <Indicator content="5" variant="error">\r
      <button>Error</button>\r
    </Indicator>\r
    <Indicator content="5" variant="info">\r
      <button>Info</button>\r
    </Indicator>\r
  </div>
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const E=["WithNumbers","DotIndicator","AllVariants"];export{i as AllVariants,a as DotIndicator,o as WithNumbers,E as __namedExportsOrder,D as default};
