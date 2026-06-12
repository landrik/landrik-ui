import{a as d,j as t}from"./jsx-runtime-c9381026.js";import{a as v,r as n}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const S=v.div`position: relative; display: inline-flex;`,z={default:n`background-color: ${({theme:e})=>e.color.neutral.bgDefault}; color: ${({theme:e})=>e.color.neutral.bgSubtle};`,success:n`background-color: ${({theme:e})=>e.color.success.bgDefault}; color: ${({theme:e})=>e.color.neutral.bgSubtle};`,warning:n`background-color: ${({theme:e})=>e.color.warning.bgDefault}; color: ${({theme:e})=>e.color.neutral.bgSubtle};`,error:n`background-color: ${({theme:e})=>e.color.danger.bgDefault}; color: ${({theme:e})=>e.color.neutral.bgSubtle};`,info:n`background-color: ${({theme:e})=>e.color.info.bgDefault}; color: ${({theme:e})=>e.color.neutral.bgSubtle};`},W={sm:n`
      min-width: ${e=>e.$dot?"8px":"16px"}; 
      height: ${e=>e.$dot?"8px":"16px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[1]}px`}; 
      font-size: ${({theme:e})=>e.typography.size.xs}; 
  `,md:n`
      min-width: ${e=>e.$dot?"10px":"20px"}; 
      height: ${e=>e.$dot?"10px":"20px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[1]}px`}; 
      font-size: ${({theme:e})=>e.typography.size.xs}; 
    `,lg:n`
      min-width: ${e=>e.$dot?"12px":"24px"}; 
      height: ${e=>e.$dot?"12px":"24px"}; 
      padding: ${e=>e.$dot?"0":`0 ${e.theme.spacing[2]}px`}; 
      font-size: ${({theme:e})=>e.typography.size.sm}; 
    `},V={"top-right":n`top: 0; right: 0; transform: translate(50%, -50%);`,"top-left":n`top: 0; left: 0; transform: translate(-50%, -50%);`,"bottom-right":n`bottom: 0; right: 0; transform: translate(50%, 50%);`,"bottom-left":n`bottom: 0; left: 0; transform: translate(-50%, 50%);`},_=v.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.radius.full};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1;
  border: 2px solid ${({theme:e})=>e.color.neutral.bgSubtle};
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: all ${({theme:e})=>e.transitions.duration.base};

  ${e=>z[e.$variant]}
  ${e=>W[e.$size]}
  ${e=>V[e.$position]}
`,r=({content:e,children:$,variant:y="error",size:x="md",position:I="top-right",dot:l=!1,show:w=!0})=>d(S,{children:[$,t(_,{$variant:y,$size:x,$position:I,$dot:l,$show:w,children:!l&&e})]});try{r.displayName="Indicator",r.__docgenInfo={description:"",displayName:"Indicator",props:{content:{defaultValue:null,description:"Content to show in indicator",name:"content",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Element to attach indicator to",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"error"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"default"'},{value:'"error"'}]}},size:{defaultValue:{value:"md"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},position:{defaultValue:{value:"top-right"},description:"Position relative to child",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},dot:{defaultValue:{value:"false"},description:"Show as dot (no content)",name:"dot",required:!1,type:{name:"boolean | undefined"}},show:{defaultValue:{value:"true"},description:"Show indicator",name:"show",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const j={title:"Components/Indicator",component:r,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>d("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{content:"5",children:t("button",{style:{padding:"0.5rem 1rem"},children:"Messages"})}),t(r,{content:"99+",children:t("button",{style:{padding:"0.5rem 1rem"},children:"Notifications"})})]})},a={render:()=>d("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{dot:!0,children:t("button",{style:{padding:"0.5rem 1rem"},children:"Inbox"})}),t(r,{dot:!0,variant:"success",children:t("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"#e5e7eb"}})})]})},i={render:()=>d("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[t(r,{content:"5",variant:"default",children:t("button",{children:"Default"})}),t(r,{content:"5",variant:"success",children:t("button",{children:"Success"})}),t(r,{content:"5",variant:"warning",children:t("button",{children:"Warning"})}),t(r,{content:"5",variant:"error",children:t("button",{children:"Error"})}),t(r,{content:"5",variant:"info",children:t("button",{children:"Info"})})]})};var s,c,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const E=["WithNumbers","DotIndicator","AllVariants"];export{i as AllVariants,a as DotIndicator,o as WithNumbers,E as __namedExportsOrder,j as default};
