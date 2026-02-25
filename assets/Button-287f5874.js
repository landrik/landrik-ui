import{a as $,j as a}from"./jsx-runtime-c9381026.js";import{l as k,r as l,a as r}from"./styled-components.browser.esm-f7e1e14e.js";import{I as s}from"./Icon-e1e4d749.js";const w=k`to { transform: rotate(360deg); }`,x={sm:l`
    padding: ${e=>e.theme.spacing[2]}px ${e=>e.theme.spacing[3]}px;
    font-size: ${e=>e.theme.typography.fontSize.sm};
    border-radius: ${e=>e.theme.radii.md};
  `,md:l`
    padding: ${e=>e.theme.spacing[3]}px ${e=>e.theme.spacing[4]}px;
    font-size: ${e=>e.theme.typography.fontSize.base};
    border-radius: ${e=>e.theme.radii.lg};
  `,lg:l`
    padding: ${e=>e.theme.spacing[4]}px ${e=>e.theme.spacing[6]}px;
    font-size: ${e=>e.theme.typography.fontSize.lg};
    border-radius: ${e=>e.theme.radii.lg};
  `},q={primary:l`
    background-color: ${e=>e.theme.colors.primary[600]};
    color: ${e=>e.theme.colors.neutral[0]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary[700]};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary[800]};
    }
  `,secondary:l`
    background-color: ${e=>e.theme.colors.neutral[200]};
    color: ${e=>e.theme.colors.neutral[900]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.neutral[300]};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.neutral[400]};
    }
  `,outline:l`
    background-color: transparent;
    color: ${e=>e.theme.colors.neutral[700]};
    border: 2px solid ${e=>e.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.neutral[50]};
      border-color: ${e=>e.theme.colors.neutral[400]};
    }
  `,ghost:l`
    background-color: transparent;
    color: ${e=>e.theme.colors.neutral[700]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.neutral[100]};
    }
  `,danger:l`
    background-color: ${e=>e.theme.colors.semantic.error};
    color: ${e=>e.theme.colors.neutral[0]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.semantic.error};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.semantic.error};
    }
  `},z=r.span`
  display: inline-block; 
  width: 1em; 
  height: 1em; 
  border: 2px solid currentColor; 
  border-right-color: transparent; 
  border-radius: 50%; 
  animation: ${w} 0.6s linear infinite;
`;r.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;const V=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  width: ${e=>e.$fullWidth?"100%":"auto"};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
    
  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: 2px;
  }


  ${e=>x[e.$size]}
  ${e=>q[e.$variant]}


`,d=r.span`
  display: flex;
  align-items: center
`,p=({size:e="md",backgroundColor:_,textColor:C,children:o="Button component",fullWidth:m=!1,disabled:h=!1,isLoading:t=!1,variant:b="primary",htmlType:S="button",shape:f="rounded",icon:u,iconPosition:c="left",iconOnly:n=!1,onClick:g,...y})=>{const v=!t&&u,i=n||!o&&u;return $(V,{$shape:f,$variant:b,$size:e,$fullWidth:m,$iconOnly:n,disabled:h||t,onClick:g,"aria-label":n&&typeof o=="string"?o:void 0,...y,children:[t&&a(z,{}),!i&&v&&c==="left"&&a(d,{children:a(s,{name:u})}),a("span",{className:"lk-button__text",children:i&&v?a(d,{children:a(s,{name:u})}):o}),!i&&v&&c==="right"&&a(d,{children:a(s,{name:u})})]})};try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"outline"'},{value:'"ghost"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"white"'}]}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"sync"'},{value:'"search"'},{value:'"alert"'},{value:'"button"'},{value:'"document"'},{value:'"form"'},{value:'"grid"'},{value:'"link"'},{value:'"menu"'},{value:'"timer"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"download"'},{value:'"type"'},{value:'"outline"'},{value:'"user"'},{value:'"useralt"'},{value:'"useradd"'},{value:'"users"'},{value:'"profile"'},{value:'"facehappy"'},{value:'"faceneutral"'},{value:'"facesad"'},{value:'"accessibility"'},{value:'"accessibilityalt"'},{value:'"arrowup"'},{value:'"arrowdown"'},{value:'"arrowleft"'},{value:'"arrowright"'},{value:'"arrowupalt"'},{value:'"arrowdownalt"'},{value:'"arrowleftalt"'},{value:'"arrowrightalt"'},{value:'"expandalt"'},{value:'"collapse"'},{value:'"expand"'},{value:'"unfold"'},{value:'"transfer"'},{value:'"redirect"'},{value:'"undo"'},{value:'"reply"'},{value:'"upload"'},{value:'"back"'},{value:'"proceed"'},{value:'"refresh"'},{value:'"globe"'},{value:'"compass"'},{value:'"pin"'},{value:'"dashboard"'},{value:'"home"'},{value:'"admin"'},{value:'"info"'},{value:'"question"'},{value:'"support"'},{value:'"phone"'},{value:'"unlink"'},{value:'"bell"'},{value:'"rss"'},{value:'"sharealt"'},{value:'"share"'},{value:'"circlehollow"'},{value:'"bookmarkhollow"'},{value:'"bookmark"'},{value:'"diamond"'},{value:'"hearthollow"'},{value:'"heart"'},{value:'"starhollow"'},{value:'"star"'},{value:'"certificate"'},{value:'"verified"'},{value:'"thumbsup"'},{value:'"shield"'},{value:'"basket"'},{value:'"beaker"'},{value:'"hourglass"'},{value:'"flag"'},{value:'"cloudhollow"'},{value:'"cloud"'},{value:'"edit"'},{value:'"cog"'},{value:'"nut"'},{value:'"wrench"'},{value:'"ellipsis"'},{value:'"check"'},{value:'"batchdeny"'},{value:'"batchaccept"'},{value:'"controls"'},{value:'"plus"'},{value:'"closeAlt"'},{value:'"cross"'},{value:'"trash"'},{value:'"pinalt"'},{value:'"unpin"'},{value:'"add"'},{value:'"subtract"'},{value:'"close"'},{value:'"delete"'},{value:'"passed"'},{value:'"changed"'},{value:'"failed"'},{value:'"clear"'},{value:'"comment"'},{value:'"commentadd"'},{value:'"requestchange"'},{value:'"comments"'},{value:'"lock"'},{value:'"unlock"'},{value:'"key"'},{value:'"outbox"'},{value:'"credit"'},{value:'"pointerdefault"'},{value:'"pointerhand"'},{value:'"browser"'},{value:'"tablet"'},{value:'"mobile"'},{value:'"watch"'},{value:'"sidebar"'},{value:'"sidebaralt"'},{value:'"sidebaralttoggle"'},{value:'"sidebartoggle"'},{value:'"bottombar"'},{value:'"bottombartoggle"'},{value:'"cpu"'},{value:'"database"'},{value:'"memory"'},{value:'"structure"'},{value:'"box"'},{value:'"power"'},{value:'"photo"'},{value:'"component"'},{value:'"photodrag"'},{value:'"zoom"'},{value:'"zoomout"'},{value:'"zoomreset"'},{value:'"eye"'},{value:'"eyeclose"'},{value:'"lightning"'},{value:'"lightningoff"'},{value:'"contrast"'},{value:'"switchalt"'},{value:'"mirror"'},{value:'"grow"'},{value:'"paintbrush"'},{value:'"ruler"'},{value:'"stop"'},{value:'"camera"'},{value:'"video"'},{value:'"speaker"'},{value:'"play"'},{value:'"playback"'},{value:'"playnext"'},{value:'"rewind"'},{value:'"fastforward"'},{value:'"stopalt"'},{value:'"sidebyside"'},{value:'"stacked"'},{value:'"sun"'},{value:'"moon"'},{value:'"book"'},{value:'"category"'},{value:'"folder"'},{value:'"print"'},{value:'"graphline"'},{value:'"calendar"'},{value:'"graphbar"'},{value:'"menualt"'},{value:'"filter"'},{value:'"docchart"'},{value:'"doclist"'},{value:'"markup"'},{value:'"bold"'},{value:'"italic"'},{value:'"paperclip"'},{value:'"listordered"'},{value:'"listunordered"'},{value:'"paragraph"'},{value:'"markdown"'},{value:'"repository"'},{value:'"commit"'},{value:'"branch"'},{value:'"pullrequest"'},{value:'"merge"'},{value:'"apple"'},{value:'"linux"'},{value:'"ubuntu"'},{value:'"windows"'},{value:'"storybook"'},{value:'"azuredevops"'},{value:'"bitbucket"'},{value:'"chrome"'},{value:'"chromatic"'},{value:'"componentdriven"'},{value:'"discord"'},{value:'"facebook"'},{value:'"figma"'},{value:'"gdrive"'},{value:'"github"'},{value:'"gitlab"'},{value:'"google"'},{value:'"graphql"'},{value:'"medium"'},{value:'"redux"'},{value:'"twitter"'},{value:'"youtube"'},{value:'"linkedin"'},{value:'"vscode"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{p as B};
