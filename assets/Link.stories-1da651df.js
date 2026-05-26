import{j as l,a as P,F as j}from"./jsx-runtime-c9381026.js";import{I as h}from"./Icon-e1e4d749.js";import{B as F}from"./Button-287f5874.js";import{r as a,a as _}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const R={primary:a`
    color: ${e=>e.theme.colors.primary[600]};
    &:hover {
      color: ${e=>e.theme.colors.primary[700]};
    }
    &:active {
      color: ${e=>e.theme.colors.primary[800]};
    }
  `,secondary:a`
    color: ${e=>e.theme.colors.primary[100]};
    &:hover {
      color: ${e=>e.theme.colors.primary[300]};
    }
  `,subtle:a`
    color: ${e=>e.theme.colors.neutral[700]};
    &:hover {
      color: ${e=>e.theme.colors.neutral[900]};
    }
  `,danger:a`
    color: ${e=>e.theme.colors.semantic.error};
    &:hover {
      color: ${e=>e.theme.colors.semantic.error};
    }
  `},T={sm:a`font-size: ${e=>e.theme.typography.fontSize.sm}; gap: ${e=>e.theme.spacing[1]}px;`,md:a`font-size: ${e=>e.theme.typography.fontSize.base}; gap: ${e=>e.theme.spacing[2]}px;`,lg:a`font-size: ${e=>e.theme.typography.fontSize.lg}; gap: ${e=>e.theme.spacing[2]}px;`},A=_.a`
  display: flex;
  align-items: center;
  vertical-align: middle;
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-decoration: ${e=>e.$underline?"underline":"none"};
  transition: all ${e=>e.theme.transitions.duration.base} ${e=>e.theme.transitions.timing.easeInOut};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: 2px;
    border-radius: ${e=>e.theme.radii.sm};
  }
  &:hover {
    text-decoration: ${e=>e.$underline?"underline":"none"};
  }  

  ${({$disabled:e})=>e&&a`opacity: 0.5; pointer-events: none; cursor: not-allowed`}

  ${e=>R[e.$variant]}
  ${e=>T[e.$size]}
  
`,g=_.span`display: inline-flex; align-items: center;`,s=e=>{const{children:H,variant:v="primary",size:c="md",underline:L=!1,disabled:D=!1,isExternal:E=!1,iconPosition:d="right",icon:r,isButton:N=!1,...m}=e,O=E?{target:"_blank",rel:"noopener noreferrer"}:{},p=P(j,{children:[r&&d==="left"&&l(g,{children:l(h,{name:r})}),H,r&&d==="right"&&l(g,{children:l(h,{name:r})})]});return N?l(F,{variant:v,size:c,disabled:D,...m,children:p}):l(A,{$variant:v,$size:c,$underline:L,...O,...m,children:p})};try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"subtle"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"sync"'},{value:'"search"'},{value:'"alert"'},{value:'"button"'},{value:'"document"'},{value:'"form"'},{value:'"grid"'},{value:'"link"'},{value:'"menu"'},{value:'"timer"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"download"'},{value:'"type"'},{value:'"outline"'},{value:'"user"'},{value:'"useralt"'},{value:'"useradd"'},{value:'"users"'},{value:'"profile"'},{value:'"facehappy"'},{value:'"faceneutral"'},{value:'"facesad"'},{value:'"accessibility"'},{value:'"accessibilityalt"'},{value:'"arrowup"'},{value:'"arrowdown"'},{value:'"arrowleft"'},{value:'"arrowright"'},{value:'"arrowupalt"'},{value:'"arrowdownalt"'},{value:'"arrowleftalt"'},{value:'"arrowrightalt"'},{value:'"expandalt"'},{value:'"collapse"'},{value:'"expand"'},{value:'"unfold"'},{value:'"transfer"'},{value:'"redirect"'},{value:'"undo"'},{value:'"reply"'},{value:'"upload"'},{value:'"back"'},{value:'"proceed"'},{value:'"refresh"'},{value:'"globe"'},{value:'"compass"'},{value:'"pin"'},{value:'"dashboard"'},{value:'"home"'},{value:'"admin"'},{value:'"info"'},{value:'"question"'},{value:'"support"'},{value:'"phone"'},{value:'"unlink"'},{value:'"bell"'},{value:'"rss"'},{value:'"sharealt"'},{value:'"share"'},{value:'"circlehollow"'},{value:'"bookmarkhollow"'},{value:'"bookmark"'},{value:'"diamond"'},{value:'"hearthollow"'},{value:'"heart"'},{value:'"starhollow"'},{value:'"star"'},{value:'"certificate"'},{value:'"verified"'},{value:'"thumbsup"'},{value:'"shield"'},{value:'"basket"'},{value:'"beaker"'},{value:'"hourglass"'},{value:'"flag"'},{value:'"cloudhollow"'},{value:'"cloud"'},{value:'"edit"'},{value:'"cog"'},{value:'"nut"'},{value:'"wrench"'},{value:'"ellipsis"'},{value:'"check"'},{value:'"batchdeny"'},{value:'"batchaccept"'},{value:'"controls"'},{value:'"plus"'},{value:'"closeAlt"'},{value:'"cross"'},{value:'"trash"'},{value:'"pinalt"'},{value:'"unpin"'},{value:'"add"'},{value:'"subtract"'},{value:'"close"'},{value:'"delete"'},{value:'"passed"'},{value:'"changed"'},{value:'"failed"'},{value:'"clear"'},{value:'"comment"'},{value:'"commentadd"'},{value:'"requestchange"'},{value:'"comments"'},{value:'"lock"'},{value:'"unlock"'},{value:'"key"'},{value:'"outbox"'},{value:'"credit"'},{value:'"pointerdefault"'},{value:'"pointerhand"'},{value:'"browser"'},{value:'"tablet"'},{value:'"mobile"'},{value:'"watch"'},{value:'"sidebar"'},{value:'"sidebaralt"'},{value:'"sidebaralttoggle"'},{value:'"sidebartoggle"'},{value:'"bottombar"'},{value:'"bottombartoggle"'},{value:'"cpu"'},{value:'"database"'},{value:'"memory"'},{value:'"structure"'},{value:'"box"'},{value:'"power"'},{value:'"photo"'},{value:'"component"'},{value:'"photodrag"'},{value:'"zoom"'},{value:'"zoomout"'},{value:'"zoomreset"'},{value:'"eye"'},{value:'"eyeclose"'},{value:'"lightning"'},{value:'"lightningoff"'},{value:'"contrast"'},{value:'"switchalt"'},{value:'"mirror"'},{value:'"grow"'},{value:'"paintbrush"'},{value:'"ruler"'},{value:'"stop"'},{value:'"camera"'},{value:'"video"'},{value:'"speaker"'},{value:'"play"'},{value:'"playback"'},{value:'"playnext"'},{value:'"rewind"'},{value:'"fastforward"'},{value:'"stopalt"'},{value:'"sidebyside"'},{value:'"stacked"'},{value:'"sun"'},{value:'"moon"'},{value:'"book"'},{value:'"category"'},{value:'"folder"'},{value:'"print"'},{value:'"graphline"'},{value:'"calendar"'},{value:'"graphbar"'},{value:'"menualt"'},{value:'"filter"'},{value:'"docchart"'},{value:'"doclist"'},{value:'"markup"'},{value:'"bold"'},{value:'"italic"'},{value:'"paperclip"'},{value:'"listordered"'},{value:'"listunordered"'},{value:'"paragraph"'},{value:'"markdown"'},{value:'"repository"'},{value:'"commit"'},{value:'"branch"'},{value:'"pullrequest"'},{value:'"merge"'},{value:'"apple"'},{value:'"linux"'},{value:'"ubuntu"'},{value:'"windows"'},{value:'"storybook"'},{value:'"azuredevops"'},{value:'"bitbucket"'},{value:'"chrome"'},{value:'"chromatic"'},{value:'"componentdriven"'},{value:'"discord"'},{value:'"facebook"'},{value:'"figma"'},{value:'"gdrive"'},{value:'"github"'},{value:'"gitlab"'},{value:'"google"'},{value:'"graphql"'},{value:'"medium"'},{value:'"redux"'},{value:'"twitter"'},{value:'"youtube"'},{value:'"linkedin"'},{value:'"vscode"'}]}},isButton:{defaultValue:null,description:"",name:"isButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"white"'}]}},htmlType:{defaultValue:null,description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Link",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{children:"Website Homepage",href:"http://www.globaldata.com"}},u={args:{children:"Website Homepage",href:"http://www.globaldata.com",icon:"arrowrightalt"}},o={args:{isButton:!0,children:"Website Homepage",onClick:()=>alert("Clicked Button")}},n={args:{disabled:!0,children:"Website Homepage",href:"http://www.globaldata.com",icon:"arrowrightalt"}},i={args:{icon:"arrowrightalt",isButton:!0,children:"Website Homepage",onClick:()=>alert("Clicked Button")}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Website Homepage",
    href: 'http://www.globaldata.com'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,k,$;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Website Homepage",
    href: 'http://www.globaldata.com',
    icon: 'arrowrightalt'
  }
}`,...($=(k=u.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var x,q,V;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isButton: true,
    children: "Website Homepage",
    onClick: () => alert('Clicked Button')
  }
}`,...(V=(q=o.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var B,z,W;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Website Homepage",
    href: 'http://www.globaldata.com',
    icon: 'arrowrightalt'
  }
}`,...(W=(z=n.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var C,I,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: 'arrowrightalt',
    isButton: true,
    children: "Website Homepage",
    onClick: () => alert('Clicked Button')
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const Y=["Default","withIcon","asButton","asDisabledLink","asButtonWithIcon"];export{t as Default,Y as __namedExportsOrder,o as asButton,i as asButtonWithIcon,n as asDisabledLink,X as default,u as withIcon};
