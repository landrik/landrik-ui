import{j as a,F as B,a as p}from"./jsx-runtime-c9381026.js";import{r as H}from"./index-8b3efc3f.js";import{r as m,a as r}from"./styled-components.browser.esm-f7e1e14e.js";import{I as o}from"./Icon-b2c83d77.js";import"./_commonjsHelpers-de833af9.js";const M={square:m`
    border-radius: ${e=>e.theme.radius.none}
  `,rounded:m`
    border-radius: ${e=>e.theme.radius.lg}
  `,pill:m`
    border-radius: ${e=>e.theme.radius.full}
  `},O=r.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
`,G=r.label`
  display: block;
  font-size: ${e=>e.theme.typography.size.sm};
  font-weight: ${e=>e.theme.typography.weight.medium};
  color: ${e=>e.theme.color.neutral[700]};
  margin-bottom: ${e=>e.theme.spacing[1]}px;
`,J=r.div`
  
  
  position: relative;
  display: flex;
  align-items: center;

  transition: all 0.2s ease;
  border: 2px solid ${e=>e.$error?e.theme.color.danger:e.theme.color.neutral[300]};

  color: ${e=>e.theme.color.neutral[900]};
  background-color: ${e=>e.theme.color.neutral[0]};
 

  &:focus-within {
    border-color:${e=>e.$error?e.theme.color.danger:e.theme.color.neutral[300]}
    box-shadow: 0 0 0 3px ${e=>e.$error?e.theme.color.danger:e.theme.color.neutral[300]}
    
  }

  &:hover:not(:focus-within){
    border-color:${e=>e.$error?e.theme.color.danger.border:"#d1d5db"}
  }

  &:disabled{
    background: ${e=>e.theme.color.neutral[50]};
    cursor: not-allowed;
  }

  ${e=>M[e.$shape]}
  
`,K=r.input`
  flex: 1;
  border: none;
  
  background: transparent;
  color: ${e=>e.theme.color.neutral[900]};

  padding: ${e=>e.theme.spacing[3]}px;
  font-size: ${e=>e.theme.typography.size.base};

  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
`,b=r.div`
  display: flex;
  align-items:center;
  justify-content: center;
  color: ${e=>e.$error?e.theme.color.danger:e.theme.color.neutral[900]};
  padding-left: ${e=>e.$position==="left"?"12px":"0"};
  padding-right: ${e=>e.$position==="right"?"12px":"0"};   
`,x=r.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  color: ${e=>e.$error?e.theme.color.danger:e.theme.color.neutral[900]};
`,Q=r.button`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: ${e=>e.theme.color.neutral[900]};
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${e=>e.theme.color.neutral[900]};
  }
  &:focus {
    outline: none;
  }
`,U=r.span`
  display: block;
  margin-top: ${e=>e.theme.spacing[1]}px;
  font-size: ${e=>e.theme.typography.size.sm};
  color: ${({theme:e})=>e.color.danger[600]};
`,n=({type:e,shape:S="rounded",labelText:D,id:h,value:j,placeholder:F="",isDisabled:_=!1,isRequired:R=!1,error:l=!1,errorText:N,onChangeInput:E,iconPosition:g="left",icon:u,success:f,color:X,showPasswordToggle:i=!1,...Y})=>{const[s,A]=H.useState(!1);return a(B,{children:p(O,{children:[p(G,{htmlFor:h,children:[D," ",a("span",{children:R?"*":""})]}),p(J,{$shape:S,$error:!!l,children:[u&&g==="left"&&a(b,{$error:l,$position:"left",children:a(o,{name:u})}),a(K,{id:h,type:i?s?"text":"password":e,autoComplete:"off",disabled:_,placeholder:F,value:j,onChange:W=>{E(W.target.value)}}),u&&g==="right"&&!l&&!f&&!i&&a(b,{$error:l,$position:"right",children:a(o,{name:u})}),i&&a(Q,{type:"button",onClick:()=>A(!s),"aria-label":s?"Hide password":"Show password",children:s?a(o,{name:"eye-closed"}):a(o,{name:"eye-open"})}),l&&a(x,{$error:l,children:a(o,{name:"exclamation-triangle"})}),f&&!l&&!i&&a(x,{$error:!l,children:a(o,{name:"check"})})]}),l&&a(U,{children:N})]})})};try{n.displayName="TextField",n.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | undefined"}},labelText:{defaultValue:null,description:"",name:"labelText",required:!0,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string | undefined"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},warnText:{defaultValue:null,description:"",name:"warnText",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"symbol"'},{value:'"size"'},{value:'"enter"'},{value:'"button"'},{value:'"checkbox"'},{value:'"grid"'},{value:'"group"'},{value:'"heading"'},{value:'"link"'},{value:'"slider"'},{value:'"switch"'},{value:'"table"'},{value:'"timer"'},{value:'"text"'},{value:'"copy"'},{value:'"move"'},{value:'"square"'},{value:'"reset"'},{value:'"accessibility"'},{value:'"activity-log"'},{value:'"align-baseline"'},{value:'"align-bottom"'},{value:'"align-center-horizontally"'},{value:'"align-center-vertically"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-horizontal-centers"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"align-start"'},{value:'"align-stretch"'},{value:'"align-top"'},{value:'"align-vertical-centers"'},{value:'"all-sides"'},{value:'"angle"'},{value:'"archive"'},{value:'"arrow-bottom-left"'},{value:'"arrow-bottom-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-top-left"'},{value:'"arrow-top-right"'},{value:'"arrow-up"'},{value:'"aspect-ratio"'},{value:'"avatar"'},{value:'"backpack"'},{value:'"badge"'},{value:'"bar-chart"'},{value:'"bell"'},{value:'"blending-mode"'},{value:'"bookmark-filled"'},{value:'"bookmark"'},{value:'"border-all"'},{value:'"border-bottom"'},{value:'"border-dashed"'},{value:'"border-dotted"'},{value:'"border-left"'},{value:'"border-none"'},{value:'"border-right"'},{value:'"border-solid"'},{value:'"border-split"'},{value:'"border-style"'},{value:'"border-top"'},{value:'"border-width"'},{value:'"box-model"'},{value:'"box"'},{value:'"calendar"'},{value:'"camera"'},{value:'"card-stack-minus"'},{value:'"card-stack-plus"'},{value:'"card-stack"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"caret-sort"'},{value:'"caret-up"'},{value:'"chat-bubble"'},{value:'"check-circled"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle-backslash"'},{value:'"circle"'},{value:'"clipboard-copy"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"code"'},{value:'"codesandbox-logo"'},{value:'"color-wheel"'},{value:'"column-spacing"'},{value:'"columns"'},{value:'"commit"'},{value:'"component-1"'},{value:'"component-boolean"'},{value:'"component-instance"'},{value:'"component-none"'},{value:'"component-placeholder"'},{value:'"container"'},{value:'"cookie"'},{value:'"corner-bottom-left"'},{value:'"corner-bottom-right"'},{value:'"corner-top-left"'},{value:'"corner-top-right"'},{value:'"corners"'},{value:'"countdown-timer"'},{value:'"counter-clockwise-clock"'},{value:'"crop"'},{value:'"cross-circled"'},{value:'"cross"'},{value:'"crosshair"'},{value:'"crumpled-paper"'},{value:'"cube"'},{value:'"cursor-arrow"'},{value:'"cursor-text"'},{value:'"dash"'},{value:'"dashboard"'},{value:'"database"'},{value:'"desktop"'},{value:'"dimensions"'},{value:'"disc"'},{value:'"discord-logo"'},{value:'"divider-horizontal"'},{value:'"divider-vertical"'},{value:'"dot-filled"'},{value:'"dot-solid"'},{value:'"dot"'},{value:'"dots-horizontal"'},{value:'"dots-vertical"'},{value:'"double-arrow-down"'},{value:'"double-arrow-left"'},{value:'"double-arrow-right"'},{value:'"double-arrow-up"'},{value:'"download"'},{value:'"drag-handle-dots-1"'},{value:'"drag-handle-dots-2"'},{value:'"drag-handle-horizontal"'},{value:'"drag-handle-vertical"'},{value:'"drawing-pin-filled"'},{value:'"drawing-pin-solid"'},{value:'"drawing-pin"'},{value:'"dropdown-menu"'},{value:'"enter-full-screen"'},{value:'"envelope-closed"'},{value:'"envelope-open"'},{value:'"eraser"'},{value:'"exclamation-circled"'},{value:'"exclamation-mark"'},{value:'"exclamation-triangle"'},{value:'"exit-full-screen"'},{value:'"exit"'},{value:'"external-link"'},{value:'"eye-closed"'},{value:'"eye-none"'},{value:'"eye-open"'},{value:'"face"'},{value:'"figma-logo"'},{value:'"file-minus"'},{value:'"file-plus"'},{value:'"file-text"'},{value:'"file"'},{value:'"filter"'},{value:'"font-bold"'},{value:'"font-family"'},{value:'"font-italic"'},{value:'"font-roman"'},{value:'"font-size"'},{value:'"font-style"'},{value:'"frame"'},{value:'"framer-logo"'},{value:'"gear"'},{value:'"github-logo"'},{value:'"globe"'},{value:'"half"'},{value:'"hamburger-menu"'},{value:'"hand"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"height"'},{value:'"hobby-knife"'},{value:'"home"'},{value:'"iconjar-logo"'},{value:'"id-card"'},{value:'"image"'},{value:'"info-circled"'},{value:'"inner-shadow"'},{value:'"input"'},{value:'"instagram-logo"'},{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'},{value:'"justify-stretch"'},{value:'"keyboard"'},{value:'"lap-timer"'},{value:'"laptop"'},{value:'"layers"'},{value:'"layout"'},{value:'"letter-case-capitalize"'},{value:'"letter-case-lowercase"'},{value:'"letter-case-toggle"'},{value:'"letter-case-uppercase"'},{value:'"letter-spacing"'},{value:'"lightning-bolt"'},{value:'"line-height"'},{value:'"link-break"'},{value:'"link-none"'},{value:'"linkedin-logo"'},{value:'"list-bullet"'},{value:'"lock-closed"'},{value:'"lock-open"'},{value:'"loop"'},{value:'"magic-wand"'},{value:'"magnifying-glass"'},{value:'"margin"'},{value:'"mask-off"'},{value:'"mask-on"'},{value:'"minimize"'},{value:'"minus-circled"'},{value:'"minus"'},{value:'"mix"'},{value:'"mixer-horizontal"'},{value:'"mixer-vertical"'},{value:'"mobile"'},{value:'"modulz-logo"'},{value:'"moon"'},{value:'"notion-logo"'},{value:'"opacity"'},{value:'"open-in-new-window"'},{value:'"outer-shadow"'},{value:'"overline"'},{value:'"padding"'},{value:'"panel-bottom-minimized"'},{value:'"panel-bottom"'},{value:'"panel-left-minimized"'},{value:'"panel-left"'},{value:'"panel-right-minimized"'},{value:'"panel-right"'},{value:'"paper-plane"'},{value:'"pause"'},{value:'"pencil"'},{value:'"people"'},{value:'"person"'},{value:'"pie-chart"'},{value:'"pilcrow"'},{value:'"pin-bottom"'},{value:'"pin-left"'},{value:'"pin-right"'},{value:'"pin-top"'},{value:'"play"'},{value:'"plus-circled"'},{value:'"plus"'},{value:'"question-mark-circled"'},{value:'"question-mark"'},{value:'"quote"'},{value:'"radiobutton"'},{value:'"reader"'},{value:'"reload"'},{value:'"resume"'},{value:'"rocket"'},{value:'"rotate-counter-clockwise"'},{value:'"row-spacing"'},{value:'"rows"'},{value:'"ruler-horizontal"'},{value:'"ruler-square"'},{value:'"scissors"'},{value:'"section"'},{value:'"server"'},{value:'"sewing-pin-filled"'},{value:'"sewing-pin-solid"'},{value:'"sewing-pin"'},{value:'"shadow-inner"'},{value:'"shadow-none"'},{value:'"shadow-outer"'},{value:'"shadow"'},{value:'"share"'},{value:'"shuffle"'},{value:'"sketch-logo"'},{value:'"slash"'},{value:'"space-between-horizontally"'},{value:'"space-between-vertically"'},{value:'"space-evenly-horizontally"'},{value:'"space-evenly-vertically"'},{value:'"speaker-loud"'},{value:'"speaker-moderate"'},{value:'"speaker-off"'},{value:'"speaker-quiet"'},{value:'"stack"'},{value:'"star-filled"'},{value:'"star"'},{value:'"stitches-logo"'},{value:'"stop"'},{value:'"stopwatch"'},{value:'"stretch-horizontally"'},{value:'"stretch-vertically"'},{value:'"strikethrough"'},{value:'"sun"'},{value:'"target"'},{value:'"text-align-bottom"'},{value:'"text-align-center"'},{value:'"text-align-justify"'},{value:'"text-align-left"'},{value:'"text-align-middle"'},{value:'"text-align-right"'},{value:'"text-align-top"'},{value:'"text-none"'},{value:'"thick-arrow-down"'},{value:'"thick-arrow-left"'},{value:'"thick-arrow-right"'},{value:'"thick-arrow-up"'},{value:'"tokens"'},{value:'"track-next"'},{value:'"track-previous"'},{value:'"transform"'},{value:'"transparency-grid"'},{value:'"trash"'},{value:'"triangle-down"'},{value:'"triangle-left"'},{value:'"triangle-right"'},{value:'"triangle-up"'},{value:'"twitter-logo"'},{value:'"underline"'},{value:'"update"'},{value:'"upload"'},{value:'"value-none"'},{value:'"value"'},{value:'"vercel-logo"'},{value:'"video"'},{value:'"view-grid"'},{value:'"view-horizontal"'},{value:'"view-none"'},{value:'"view-vertical"'},{value:'"width"'},{value:'"zoom-in"'},{value:'"zoom-out"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},onChangeInput:{defaultValue:null,description:"",name:"onChangeInput",required:!0,type:{name:"(value: string) => void"}},showPasswordToggle:{defaultValue:{value:"false"},description:"",name:"showPasswordToggle",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const oe={title:"Components/TextField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{labelText:"Label text",placeholder:"Placeholder",id:"test-for",isRequired:!0,shape:"rounded",type:"text",isDisabled:!1,error:!1,errorText:"Error message",icon:"person",iconPosition:"left",helperText:"test helper text",size:"medium",warnText:"text warning text",onChangeInput:()=>{},className:"none"}},d={args:{...t.args,labelText:"Label text",placeholder:"Placeholder",isRequired:!0,icon:"lock-closed",iconPosition:"left",type:"password",showPasswordToggle:!0}},v={args:{...t.args,labelText:"Label text",placeholder:"Placeholder",isRequired:!0,error:!0,errorText:"Input field can't be empty!",icon:"exclamation-triangle",iconPosition:"right"}},c={args:{...t.args},render:()=>p("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(n,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"rounded"}),a(n,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"square"}),a(n,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"pill"})]})};var y,w,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    labelText: 'Label text',
    placeholder: 'Placeholder',
    id: 'test-for',
    isRequired: true,
    shape: 'rounded',
    type: 'text',
    isDisabled: false,
    error: false,
    errorText: 'Error message',
    icon: 'person',
    iconPosition: 'left',
    helperText: 'test helper text',
    size: 'medium',
    warnText: 'text warning text',
    onChangeInput: () => void {},
    className: 'none'
  }
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,$,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder',
    isRequired: true,
    icon: 'lock-closed',
    iconPosition: 'left',
    type: 'password',
    showPasswordToggle: true
  }
}`,...(q=($=d.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,I,P;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder',
    isRequired: true,
    error: true,
    errorText: \`Input field can't be empty!\`,
    icon: 'exclamation-triangle',
    iconPosition: 'right'
  }
}`,...(P=(I=v.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var V,C,L;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='rounded' />\r
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='square' />\r
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='pill' />\r
    </div>
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const ne=["Default","withIcon","Invalid","AllShapes"];export{c as AllShapes,t as Default,v as Invalid,ne as __namedExportsOrder,oe as default,d as withIcon};
