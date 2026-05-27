import{j as l,a as N,F as O}from"./jsx-runtime-c9381026.js";import{I as g}from"./Icon-b2c83d77.js";import{B as F}from"./Button-97923509.js";import{r as a,a as H}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./polished.esm-014be949.js";const R={primary:a`
    color: ${({theme:e})=>e.color.accent[600]};
    &:hover {
      color: ${({theme:e})=>e.color.accent[700]};
    }
    &:active {
      color: ${({theme:e})=>e.color.accent[800]};
    }
  `,secondary:a`
    color: ${({theme:e})=>e.color.accent[100]};
    &:hover {
      color: ${({theme:e})=>e.color.accent[300]};
    }
  `,subtle:a`
    color: ${({theme:e})=>e.color.neutral[700]};
    &:hover {
      color: ${({theme:e})=>e.color.neutral[900]};
    }
  `,danger:a`
    color: ${({theme:e})=>e.color.danger[600]};
    &:hover {
      color: ${({theme:e})=>e.color.danger[600]};
    }
  `},T={sm:a`font-size: ${({theme:e})=>e.typography.size.sm}; gap: ${({theme:e})=>e.spacing[4]}px;`,md:a`font-size: ${({theme:e})=>e.typography.size.base}; gap: ${({theme:e})=>e.spacing[12]}px;`,lg:a`font-size: ${({theme:e})=>e.typography.size.lg}; gap: ${({theme:e})=>e.spacing[12]}px;`},A=H.a`
  display: flex;
  align-items: center;
  vertical-align: middle;
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
  text-decoration: ${e=>e.$underline?"underline":"none"};
  transition: all ${({theme:e})=>e.transitions.duration.base} ${({theme:e})=>e.transitions.preset.base};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.accent[500]};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radius.sm};
  }
  &:hover {
    text-decoration: ${e=>e.$underline?"underline":"none"};
  }  

  ${({$disabled:e})=>e&&a`opacity: 0.5; pointer-events: none; cursor: not-allowed`}

  ${e=>R[e.$variant]}
  ${e=>T[e.$size]}
  
`,h=H.span`display: inline-flex; align-items: center;`,s=e=>{const{children:c,variant:d="primary",size:p="md",underline:j=!1,disabled:L=!1,isExternal:S=!1,iconPosition:v="right",icon:u,isButton:P=!1,...m}=e,D=S?{target:"_blank",rel:"noopener noreferrer"}:{},E=N(O,{children:[u&&v==="left"&&l(h,{children:l(g,{name:u})}),c,u&&v==="right"&&l(h,{children:l(g,{name:u})})]});return P?l(F,{variant:d,size:p,disabled:L,iconPosition:v,icon:u,...m,children:c}):l(A,{$variant:d,$size:p,$underline:j,...D,...m,children:E})};try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"subtle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean | undefined"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"symbol"'},{value:'"size"'},{value:'"enter"'},{value:'"button"'},{value:'"checkbox"'},{value:'"grid"'},{value:'"group"'},{value:'"heading"'},{value:'"link"'},{value:'"slider"'},{value:'"switch"'},{value:'"table"'},{value:'"timer"'},{value:'"text"'},{value:'"copy"'},{value:'"move"'},{value:'"square"'},{value:'"reset"'},{value:'"accessibility"'},{value:'"activity-log"'},{value:'"align-baseline"'},{value:'"align-bottom"'},{value:'"align-center-horizontally"'},{value:'"align-center-vertically"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-horizontal-centers"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"align-start"'},{value:'"align-stretch"'},{value:'"align-top"'},{value:'"align-vertical-centers"'},{value:'"all-sides"'},{value:'"angle"'},{value:'"archive"'},{value:'"arrow-bottom-left"'},{value:'"arrow-bottom-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-top-left"'},{value:'"arrow-top-right"'},{value:'"arrow-up"'},{value:'"aspect-ratio"'},{value:'"avatar"'},{value:'"backpack"'},{value:'"badge"'},{value:'"bar-chart"'},{value:'"bell"'},{value:'"blending-mode"'},{value:'"bookmark-filled"'},{value:'"bookmark"'},{value:'"border-all"'},{value:'"border-bottom"'},{value:'"border-dashed"'},{value:'"border-dotted"'},{value:'"border-left"'},{value:'"border-none"'},{value:'"border-right"'},{value:'"border-solid"'},{value:'"border-split"'},{value:'"border-style"'},{value:'"border-top"'},{value:'"border-width"'},{value:'"box-model"'},{value:'"box"'},{value:'"calendar"'},{value:'"camera"'},{value:'"card-stack-minus"'},{value:'"card-stack-plus"'},{value:'"card-stack"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"caret-sort"'},{value:'"caret-up"'},{value:'"chat-bubble"'},{value:'"check-circled"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle-backslash"'},{value:'"circle"'},{value:'"clipboard-copy"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"code"'},{value:'"codesandbox-logo"'},{value:'"color-wheel"'},{value:'"column-spacing"'},{value:'"columns"'},{value:'"commit"'},{value:'"component-1"'},{value:'"component-boolean"'},{value:'"component-instance"'},{value:'"component-none"'},{value:'"component-placeholder"'},{value:'"container"'},{value:'"cookie"'},{value:'"corner-bottom-left"'},{value:'"corner-bottom-right"'},{value:'"corner-top-left"'},{value:'"corner-top-right"'},{value:'"corners"'},{value:'"countdown-timer"'},{value:'"counter-clockwise-clock"'},{value:'"crop"'},{value:'"cross-circled"'},{value:'"cross"'},{value:'"crosshair"'},{value:'"crumpled-paper"'},{value:'"cube"'},{value:'"cursor-arrow"'},{value:'"cursor-text"'},{value:'"dash"'},{value:'"dashboard"'},{value:'"database"'},{value:'"desktop"'},{value:'"dimensions"'},{value:'"disc"'},{value:'"discord-logo"'},{value:'"divider-horizontal"'},{value:'"divider-vertical"'},{value:'"dot-filled"'},{value:'"dot-solid"'},{value:'"dot"'},{value:'"dots-horizontal"'},{value:'"dots-vertical"'},{value:'"double-arrow-down"'},{value:'"double-arrow-left"'},{value:'"double-arrow-right"'},{value:'"double-arrow-up"'},{value:'"download"'},{value:'"drag-handle-dots-1"'},{value:'"drag-handle-dots-2"'},{value:'"drag-handle-horizontal"'},{value:'"drag-handle-vertical"'},{value:'"drawing-pin-filled"'},{value:'"drawing-pin-solid"'},{value:'"drawing-pin"'},{value:'"dropdown-menu"'},{value:'"enter-full-screen"'},{value:'"envelope-closed"'},{value:'"envelope-open"'},{value:'"eraser"'},{value:'"exclamation-circled"'},{value:'"exclamation-mark"'},{value:'"exclamation-triangle"'},{value:'"exit-full-screen"'},{value:'"exit"'},{value:'"external-link"'},{value:'"eye-closed"'},{value:'"eye-none"'},{value:'"eye-open"'},{value:'"face"'},{value:'"figma-logo"'},{value:'"file-minus"'},{value:'"file-plus"'},{value:'"file-text"'},{value:'"file"'},{value:'"filter"'},{value:'"font-bold"'},{value:'"font-family"'},{value:'"font-italic"'},{value:'"font-roman"'},{value:'"font-size"'},{value:'"font-style"'},{value:'"frame"'},{value:'"framer-logo"'},{value:'"gear"'},{value:'"github-logo"'},{value:'"globe"'},{value:'"half"'},{value:'"hamburger-menu"'},{value:'"hand"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"height"'},{value:'"hobby-knife"'},{value:'"home"'},{value:'"iconjar-logo"'},{value:'"id-card"'},{value:'"image"'},{value:'"info-circled"'},{value:'"inner-shadow"'},{value:'"input"'},{value:'"instagram-logo"'},{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'},{value:'"justify-stretch"'},{value:'"keyboard"'},{value:'"lap-timer"'},{value:'"laptop"'},{value:'"layers"'},{value:'"layout"'},{value:'"letter-case-capitalize"'},{value:'"letter-case-lowercase"'},{value:'"letter-case-toggle"'},{value:'"letter-case-uppercase"'},{value:'"letter-spacing"'},{value:'"lightning-bolt"'},{value:'"line-height"'},{value:'"link-break"'},{value:'"link-none"'},{value:'"linkedin-logo"'},{value:'"list-bullet"'},{value:'"lock-closed"'},{value:'"lock-open"'},{value:'"loop"'},{value:'"magic-wand"'},{value:'"magnifying-glass"'},{value:'"margin"'},{value:'"mask-off"'},{value:'"mask-on"'},{value:'"minimize"'},{value:'"minus-circled"'},{value:'"minus"'},{value:'"mix"'},{value:'"mixer-horizontal"'},{value:'"mixer-vertical"'},{value:'"mobile"'},{value:'"modulz-logo"'},{value:'"moon"'},{value:'"notion-logo"'},{value:'"opacity"'},{value:'"open-in-new-window"'},{value:'"outer-shadow"'},{value:'"overline"'},{value:'"padding"'},{value:'"panel-bottom-minimized"'},{value:'"panel-bottom"'},{value:'"panel-left-minimized"'},{value:'"panel-left"'},{value:'"panel-right-minimized"'},{value:'"panel-right"'},{value:'"paper-plane"'},{value:'"pause"'},{value:'"pencil"'},{value:'"people"'},{value:'"person"'},{value:'"pie-chart"'},{value:'"pilcrow"'},{value:'"pin-bottom"'},{value:'"pin-left"'},{value:'"pin-right"'},{value:'"pin-top"'},{value:'"play"'},{value:'"plus-circled"'},{value:'"plus"'},{value:'"question-mark-circled"'},{value:'"question-mark"'},{value:'"quote"'},{value:'"radiobutton"'},{value:'"reader"'},{value:'"reload"'},{value:'"resume"'},{value:'"rocket"'},{value:'"rotate-counter-clockwise"'},{value:'"row-spacing"'},{value:'"rows"'},{value:'"ruler-horizontal"'},{value:'"ruler-square"'},{value:'"scissors"'},{value:'"section"'},{value:'"server"'},{value:'"sewing-pin-filled"'},{value:'"sewing-pin-solid"'},{value:'"sewing-pin"'},{value:'"shadow-inner"'},{value:'"shadow-none"'},{value:'"shadow-outer"'},{value:'"shadow"'},{value:'"share"'},{value:'"shuffle"'},{value:'"sketch-logo"'},{value:'"slash"'},{value:'"space-between-horizontally"'},{value:'"space-between-vertically"'},{value:'"space-evenly-horizontally"'},{value:'"space-evenly-vertically"'},{value:'"speaker-loud"'},{value:'"speaker-moderate"'},{value:'"speaker-off"'},{value:'"speaker-quiet"'},{value:'"stack"'},{value:'"star-filled"'},{value:'"star"'},{value:'"stitches-logo"'},{value:'"stop"'},{value:'"stopwatch"'},{value:'"stretch-horizontally"'},{value:'"stretch-vertically"'},{value:'"strikethrough"'},{value:'"sun"'},{value:'"target"'},{value:'"text-align-bottom"'},{value:'"text-align-center"'},{value:'"text-align-justify"'},{value:'"text-align-left"'},{value:'"text-align-middle"'},{value:'"text-align-right"'},{value:'"text-align-top"'},{value:'"text-none"'},{value:'"thick-arrow-down"'},{value:'"thick-arrow-left"'},{value:'"thick-arrow-right"'},{value:'"thick-arrow-up"'},{value:'"tokens"'},{value:'"track-next"'},{value:'"track-previous"'},{value:'"transform"'},{value:'"transparency-grid"'},{value:'"trash"'},{value:'"triangle-down"'},{value:'"triangle-left"'},{value:'"triangle-right"'},{value:'"triangle-up"'},{value:'"twitter-logo"'},{value:'"underline"'},{value:'"update"'},{value:'"upload"'},{value:'"value-none"'},{value:'"value"'},{value:'"vercel-logo"'},{value:'"video"'},{value:'"view-grid"'},{value:'"view-horizontal"'},{value:'"view-none"'},{value:'"view-vertical"'},{value:'"width"'},{value:'"zoom-in"'},{value:'"zoom-out"'}]}},isButton:{defaultValue:null,description:"",name:"isButton",required:!1,type:{name:"boolean | undefined"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"default"'},{value:'"white"'}]}},htmlType:{defaultValue:null,description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Y={title:"Components/Link",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:"Website Homepage",href:"http://www.globaldata.com"}},o={args:{children:"Website Homepage",href:"http://www.globaldata.com",icon:"arrow-right"}},n={args:{isButton:!0,children:"Website Homepage",onClick:()=>alert("Clicked Button")}},t={args:{disabled:!0,children:"Website Homepage",href:"http://www.globaldata.com",icon:"arrow-right"}},i={args:{icon:"arrow-right",iconPosition:"right",isButton:!0,children:"Website Homepage",onClick:()=>alert("Clicked Button")}};var f,b,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Website Homepage",
    href: 'http://www.globaldata.com'
  }
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,k,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Website Homepage",
    href: 'http://www.globaldata.com',
    icon: 'arrow-right'
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var z,$,q;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isButton: true,
    children: "Website Homepage",
    onClick: () => alert('Clicked Button')
  }
}`,...(q=($=n.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,B,W;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Website Homepage",
    href: 'http://www.globaldata.com',
    icon: 'arrow-right'
  }
}`,...(W=(B=t.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var C,I,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: 'arrow-right',
    iconPosition: 'right',
    isButton: true,
    children: "Website Homepage",
    onClick: () => alert('Clicked Button')
  }
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const Z=["Default","withIcon","asButton","asDisabledLink","asButtonWithIcon"];export{r as Default,Z as __namedExportsOrder,n as asButton,i as asButtonWithIcon,t as asDisabledLink,Y as default,o as withIcon};
