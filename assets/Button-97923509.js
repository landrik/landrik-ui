import{a as w,j as a}from"./jsx-runtime-c9381026.js";import{l as k,r as l,a as r}from"./styled-components.browser.esm-f7e1e14e.js";import{c as x}from"./polished.esm-014be949.js";import{I as d}from"./Icon-b2c83d77.js";const $=k`to { transform: rotate(360deg); }`,z={sm:l`
    padding: ${({theme:e})=>e.spacing[12]}px ${({theme:e})=>e.spacing[3]}px;
    font-size: ${({theme:e})=>e.typography.size.sm};
    border-radius: ${({theme:e})=>e.radius.md};
  `,md:l`
    padding: ${({theme:e})=>e.spacing[3]}px ${({theme:e})=>e.spacing[4]}px;
    font-size: ${({theme:e})=>e.typography.size.base};
    border-radius: ${({theme:e})=>e.radius.lg};
  `,lg:l`
    padding: ${({theme:e})=>e.spacing[4]}px ${({theme:e})=>e.spacing[6]}px;
    font-size: ${({theme:e})=>e.typography.size.lg};
    border-radius: ${({theme:e})=>e.radius.lg};
  `},q={primary:l`
    background: ${({theme:e})=>e.color.accent.bgDefault};
    color: ${({theme:e})=>e.color.accent.onFill};


    &:hover:not(:disabled) {
      background-color: ${({theme:e})=>e.color.accent.bgDefault};
    }

    &:active:not(:disabled) {
      background-color: ${({theme:e})=>e.color.accent.bgActive};
    }
  `,secondary:l`
    background-color: ${({theme:e})=>e.color.neutral.bgSubtle};
    color: ${({theme:e})=>e.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme:e})=>e.color.neutral.bgHover};
    }

    &:active:not(:disabled) {
      background-color: ${({theme:e})=>e.color.neutral.bgActive};
    }
  `,outline:l`
    background-color: transparent;
    color: ${({theme:e})=>e.color.neutral.bgDefault};
    border: 2px solid ${({theme:e})=>e.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme:e})=>e.color.neutral.bgSubtle};
      border-color: ${({theme:e})=>e.color.neutral.bgDefault};
    }
  `,ghost:l`
    background-color: transparent;
    color: ${({theme:e})=>e.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme:e})=>e.color.neutral.bgSubtle};
    }
  `,danger:l`
    background-color: ${({theme:e})=>e.color.danger.bgDefault};
    color: ${({theme:e})=>e.color.neutral.bgSubtle};

    &:hover:not(:disabled) {
      background-color: ${({theme:e})=>x(.2,e.color.danger.bgDefault)};
    }

    &:active:not(:disabled) {
      background-color: ${({theme:e})=>e.color.danger.bgDefault};
    }
  `},V=r.span`
  display: inline-block; 
  width: 1em; 
  height: 1em; 
  border: 2px solid currentColor; 
  border-right-color: transparent; 
  border-radius: 50%; 
  animation: ${$} 0.6s linear infinite;
`;r.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;const D=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
    
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.accent.bgDefault};
    outline-offset: 2px;
  }


  ${e=>z[e.$size]}
  ${e=>q[e.$variant]}


`,c=r.span`
  display: flex;
  align-items: center
`,p=({size:e="md",backgroundColor:j,textColor:_,children:o="Button component",fullWidth:g=!1,disabled:m=!1,isLoading:t=!1,variant:f="primary",htmlType:C="button",shape:b="rounded",icon:u,iconPosition:s="left",iconOnly:n=!1,onClick:h,...y})=>{const v=!t&&u,i=n||!o&&u;return w(D,{$shape:b,$variant:f,$size:e,$fullWidth:g,$iconOnly:n,disabled:m||t,onClick:h,"aria-label":n&&typeof o=="string"?o:void 0,...y,children:[t&&a(V,{}),!i&&v&&s==="left"&&a(c,{children:a(d,{name:u})}),a("span",{className:"lk-button__text",children:i&&v?a(c,{children:a(d,{name:u})}):o}),!i&&v&&s==="right"&&a(c,{children:a(d,{name:u})})]})};try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ghost"'},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"default"'},{value:'"white"'}]}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"symbol"'},{value:'"size"'},{value:'"enter"'},{value:'"button"'},{value:'"checkbox"'},{value:'"grid"'},{value:'"group"'},{value:'"heading"'},{value:'"link"'},{value:'"slider"'},{value:'"switch"'},{value:'"table"'},{value:'"timer"'},{value:'"text"'},{value:'"copy"'},{value:'"move"'},{value:'"square"'},{value:'"reset"'},{value:'"accessibility"'},{value:'"activity-log"'},{value:'"align-baseline"'},{value:'"align-bottom"'},{value:'"align-center-horizontally"'},{value:'"align-center-vertically"'},{value:'"align-center"'},{value:'"align-end"'},{value:'"align-horizontal-centers"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"align-start"'},{value:'"align-stretch"'},{value:'"align-top"'},{value:'"align-vertical-centers"'},{value:'"all-sides"'},{value:'"angle"'},{value:'"archive"'},{value:'"arrow-bottom-left"'},{value:'"arrow-bottom-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-top-left"'},{value:'"arrow-top-right"'},{value:'"arrow-up"'},{value:'"aspect-ratio"'},{value:'"avatar"'},{value:'"backpack"'},{value:'"badge"'},{value:'"bar-chart"'},{value:'"bell"'},{value:'"blending-mode"'},{value:'"bookmark-filled"'},{value:'"bookmark"'},{value:'"border-all"'},{value:'"border-bottom"'},{value:'"border-dashed"'},{value:'"border-dotted"'},{value:'"border-left"'},{value:'"border-none"'},{value:'"border-right"'},{value:'"border-solid"'},{value:'"border-split"'},{value:'"border-style"'},{value:'"border-top"'},{value:'"border-width"'},{value:'"box-model"'},{value:'"box"'},{value:'"calendar"'},{value:'"camera"'},{value:'"card-stack-minus"'},{value:'"card-stack-plus"'},{value:'"card-stack"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"caret-sort"'},{value:'"caret-up"'},{value:'"chat-bubble"'},{value:'"check-circled"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle-backslash"'},{value:'"circle"'},{value:'"clipboard-copy"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"code"'},{value:'"codesandbox-logo"'},{value:'"color-wheel"'},{value:'"column-spacing"'},{value:'"columns"'},{value:'"commit"'},{value:'"component-1"'},{value:'"component-boolean"'},{value:'"component-instance"'},{value:'"component-none"'},{value:'"component-placeholder"'},{value:'"container"'},{value:'"cookie"'},{value:'"corner-bottom-left"'},{value:'"corner-bottom-right"'},{value:'"corner-top-left"'},{value:'"corner-top-right"'},{value:'"corners"'},{value:'"countdown-timer"'},{value:'"counter-clockwise-clock"'},{value:'"crop"'},{value:'"cross-circled"'},{value:'"cross"'},{value:'"crosshair"'},{value:'"crumpled-paper"'},{value:'"cube"'},{value:'"cursor-arrow"'},{value:'"cursor-text"'},{value:'"dash"'},{value:'"dashboard"'},{value:'"database"'},{value:'"desktop"'},{value:'"dimensions"'},{value:'"disc"'},{value:'"discord-logo"'},{value:'"divider-horizontal"'},{value:'"divider-vertical"'},{value:'"dot-filled"'},{value:'"dot-solid"'},{value:'"dot"'},{value:'"dots-horizontal"'},{value:'"dots-vertical"'},{value:'"double-arrow-down"'},{value:'"double-arrow-left"'},{value:'"double-arrow-right"'},{value:'"double-arrow-up"'},{value:'"download"'},{value:'"drag-handle-dots-1"'},{value:'"drag-handle-dots-2"'},{value:'"drag-handle-horizontal"'},{value:'"drag-handle-vertical"'},{value:'"drawing-pin-filled"'},{value:'"drawing-pin-solid"'},{value:'"drawing-pin"'},{value:'"dropdown-menu"'},{value:'"enter-full-screen"'},{value:'"envelope-closed"'},{value:'"envelope-open"'},{value:'"eraser"'},{value:'"exclamation-circled"'},{value:'"exclamation-mark"'},{value:'"exclamation-triangle"'},{value:'"exit-full-screen"'},{value:'"exit"'},{value:'"external-link"'},{value:'"eye-closed"'},{value:'"eye-none"'},{value:'"eye-open"'},{value:'"face"'},{value:'"figma-logo"'},{value:'"file-minus"'},{value:'"file-plus"'},{value:'"file-text"'},{value:'"file"'},{value:'"filter"'},{value:'"font-bold"'},{value:'"font-family"'},{value:'"font-italic"'},{value:'"font-roman"'},{value:'"font-size"'},{value:'"font-style"'},{value:'"frame"'},{value:'"framer-logo"'},{value:'"gear"'},{value:'"github-logo"'},{value:'"globe"'},{value:'"half"'},{value:'"hamburger-menu"'},{value:'"hand"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"height"'},{value:'"hobby-knife"'},{value:'"home"'},{value:'"iconjar-logo"'},{value:'"id-card"'},{value:'"image"'},{value:'"info-circled"'},{value:'"inner-shadow"'},{value:'"input"'},{value:'"instagram-logo"'},{value:'"justify-center"'},{value:'"justify-end"'},{value:'"justify-start"'},{value:'"justify-stretch"'},{value:'"keyboard"'},{value:'"lap-timer"'},{value:'"laptop"'},{value:'"layers"'},{value:'"layout"'},{value:'"letter-case-capitalize"'},{value:'"letter-case-lowercase"'},{value:'"letter-case-toggle"'},{value:'"letter-case-uppercase"'},{value:'"letter-spacing"'},{value:'"lightning-bolt"'},{value:'"line-height"'},{value:'"link-break"'},{value:'"link-none"'},{value:'"linkedin-logo"'},{value:'"list-bullet"'},{value:'"lock-closed"'},{value:'"lock-open"'},{value:'"loop"'},{value:'"magic-wand"'},{value:'"magnifying-glass"'},{value:'"margin"'},{value:'"mask-off"'},{value:'"mask-on"'},{value:'"minimize"'},{value:'"minus-circled"'},{value:'"minus"'},{value:'"mix"'},{value:'"mixer-horizontal"'},{value:'"mixer-vertical"'},{value:'"mobile"'},{value:'"modulz-logo"'},{value:'"moon"'},{value:'"notion-logo"'},{value:'"opacity"'},{value:'"open-in-new-window"'},{value:'"outer-shadow"'},{value:'"overline"'},{value:'"padding"'},{value:'"panel-bottom-minimized"'},{value:'"panel-bottom"'},{value:'"panel-left-minimized"'},{value:'"panel-left"'},{value:'"panel-right-minimized"'},{value:'"panel-right"'},{value:'"paper-plane"'},{value:'"pause"'},{value:'"pencil"'},{value:'"people"'},{value:'"person"'},{value:'"pie-chart"'},{value:'"pilcrow"'},{value:'"pin-bottom"'},{value:'"pin-left"'},{value:'"pin-right"'},{value:'"pin-top"'},{value:'"play"'},{value:'"plus-circled"'},{value:'"plus"'},{value:'"question-mark-circled"'},{value:'"question-mark"'},{value:'"quote"'},{value:'"radiobutton"'},{value:'"reader"'},{value:'"reload"'},{value:'"resume"'},{value:'"rocket"'},{value:'"rotate-counter-clockwise"'},{value:'"row-spacing"'},{value:'"rows"'},{value:'"ruler-horizontal"'},{value:'"ruler-square"'},{value:'"scissors"'},{value:'"section"'},{value:'"server"'},{value:'"sewing-pin-filled"'},{value:'"sewing-pin-solid"'},{value:'"sewing-pin"'},{value:'"shadow-inner"'},{value:'"shadow-none"'},{value:'"shadow-outer"'},{value:'"shadow"'},{value:'"share"'},{value:'"shuffle"'},{value:'"sketch-logo"'},{value:'"slash"'},{value:'"space-between-horizontally"'},{value:'"space-between-vertically"'},{value:'"space-evenly-horizontally"'},{value:'"space-evenly-vertically"'},{value:'"speaker-loud"'},{value:'"speaker-moderate"'},{value:'"speaker-off"'},{value:'"speaker-quiet"'},{value:'"stack"'},{value:'"star-filled"'},{value:'"star"'},{value:'"stitches-logo"'},{value:'"stop"'},{value:'"stopwatch"'},{value:'"stretch-horizontally"'},{value:'"stretch-vertically"'},{value:'"strikethrough"'},{value:'"sun"'},{value:'"target"'},{value:'"text-align-bottom"'},{value:'"text-align-center"'},{value:'"text-align-justify"'},{value:'"text-align-left"'},{value:'"text-align-middle"'},{value:'"text-align-right"'},{value:'"text-align-top"'},{value:'"text-none"'},{value:'"thick-arrow-down"'},{value:'"thick-arrow-left"'},{value:'"thick-arrow-right"'},{value:'"thick-arrow-up"'},{value:'"tokens"'},{value:'"track-next"'},{value:'"track-previous"'},{value:'"transform"'},{value:'"transparency-grid"'},{value:'"trash"'},{value:'"triangle-down"'},{value:'"triangle-left"'},{value:'"triangle-right"'},{value:'"triangle-up"'},{value:'"twitter-logo"'},{value:'"underline"'},{value:'"update"'},{value:'"upload"'},{value:'"value-none"'},{value:'"value"'},{value:'"vercel-logo"'},{value:'"video"'},{value:'"view-grid"'},{value:'"view-horizontal"'},{value:'"view-none"'},{value:'"view-vertical"'},{value:'"width"'},{value:'"zoom-in"'},{value:'"zoom-out"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{p as B};
