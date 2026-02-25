import{j as a,F as B,a as p}from"./jsx-runtime-c9381026.js";import{r as H}from"./index-8b3efc3f.js";import{r as m,a as r}from"./styled-components.browser.esm-f7e1e14e.js";import{I as o}from"./Icon-e1e4d749.js";import"./_commonjsHelpers-de833af9.js";const M={square:m`
    border-radius: ${e=>e.theme.radii.none}
  `,rounded:m`
    border-radius: ${e=>e.theme.radii.lg}
  `,pill:m`
    border-radius: ${e=>e.theme.radii.full}
  `},O=r.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
`,G=r.label`
  display: block;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.neutral[700]};
  margin-bottom: ${e=>e.theme.spacing[1]}px;
`,J=r.div`
  
  
  position: relative;
  display: flex;
  align-items: center;

  transition: all 0.2s ease;
  border: 2px solid ${e=>e.$error?e.theme.colors.semantic.error:e.theme.colors.neutral[300]};

  color: ${e=>e.theme.colors.neutral[900]};
  background-color: ${e=>e.theme.colors.neutral[0]};
 

  &:focus-within {
    border-color:${e=>e.$error?e.theme.colors.semantic.error:e.theme.colors.neutral[300]}
    box-shadow: 0 0 0 3px ${e=>e.$error?e.theme.colors.semantic.error:e.theme.colors.neutral[300]}
    
  }

  &:hover:not(:focus-within){
    border-color:${e=>e.$error?e.theme.colors.semantic.error:"#d1d5db"}
  }

  &:disabled{
    background: ${e=>e.theme.colors.neutral[50]};
    cursor: not-allowed;
  }

  ${e=>M[e.$shape]}
  
`,K=r.input`
  flex: 1;
  border: none;
  
  background: transparent;
  color: ${e=>e.theme.colors.neutral[900]};

  padding: ${e=>e.theme.spacing[3]}px;
  font-size: ${e=>e.theme.typography.fontSize.base};

  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
`,b=r.div`
  display: flex;
  align-items:center;
  justify-content: center;
  color: ${e=>e.$error?e.theme.colors.semantic.error:e.theme.colors.neutral[900]};
  padding-left: ${e=>e.$position==="left"?"12px":"0"};
  padding-right: ${e=>e.$position==="right"?"12px":"0"};   
`,x=r.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  color: ${e=>e.$error?e.theme.colors.semantic.error:e.theme.colors.neutral[900]};
`,Q=r.button`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.neutral[900]};
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${e=>e.theme.colors.neutral[900]};
  }
  &:focus {
    outline: none;
  }
`,U=r.span`
  display: block;
  margin-top: ${e=>e.theme.spacing[1]}px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.semantic.error};
`,u=({type:e,shape:L="rounded",labelText:D,id:h,value:F,placeholder:_="",isDisabled:R=!1,isRequired:N=!1,error:l=!1,errorText:E,onChangeInput:j,iconPosition:f="left",icon:n,success:g,color:X,showPasswordToggle:s=!1,...Y})=>{const[i,A]=H.useState(!1);return a(B,{children:p(O,{children:[p(G,{htmlFor:h,children:[D," ",a("span",{children:N?"*":""})]}),p(J,{$shape:L,$error:!!l,children:[n&&f==="left"&&a(b,{$error:l,$position:"left",children:a(o,{name:n})}),a(K,{id:h,type:s?i?"text":"password":e,autoComplete:"off",disabled:R,placeholder:_,value:F,onChange:W=>{j(W.target.value)}}),n&&f==="right"&&!l&&!g&&!s&&a(b,{$error:l,$position:"right",children:a(o,{name:n})}),s&&a(Q,{type:"button",onClick:()=>A(!i),"aria-label":i?"Hide password":"Show password",children:i?a(o,{name:"eyeclose"}):a(o,{name:"eye"})}),l&&a(x,{$error:l,children:a(o,{name:"alert"})}),g&&!l&&!s&&a(x,{$error:!l,children:a(o,{name:"check"})})]}),l&&a(U,{children:E})]})})};try{u.displayName="TextField",u.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},labelText:{defaultValue:null,description:"",name:"labelText",required:!0,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},warnText:{defaultValue:null,description:"",name:"warnText",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:{value:"false"},description:"",name:"isRequired",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"sync"'},{value:'"search"'},{value:'"alert"'},{value:'"button"'},{value:'"document"'},{value:'"form"'},{value:'"grid"'},{value:'"link"'},{value:'"menu"'},{value:'"timer"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"download"'},{value:'"type"'},{value:'"outline"'},{value:'"user"'},{value:'"useralt"'},{value:'"useradd"'},{value:'"users"'},{value:'"profile"'},{value:'"facehappy"'},{value:'"faceneutral"'},{value:'"facesad"'},{value:'"accessibility"'},{value:'"accessibilityalt"'},{value:'"arrowup"'},{value:'"arrowdown"'},{value:'"arrowleft"'},{value:'"arrowright"'},{value:'"arrowupalt"'},{value:'"arrowdownalt"'},{value:'"arrowleftalt"'},{value:'"arrowrightalt"'},{value:'"expandalt"'},{value:'"collapse"'},{value:'"expand"'},{value:'"unfold"'},{value:'"transfer"'},{value:'"redirect"'},{value:'"undo"'},{value:'"reply"'},{value:'"upload"'},{value:'"back"'},{value:'"proceed"'},{value:'"refresh"'},{value:'"globe"'},{value:'"compass"'},{value:'"pin"'},{value:'"dashboard"'},{value:'"home"'},{value:'"admin"'},{value:'"info"'},{value:'"question"'},{value:'"support"'},{value:'"phone"'},{value:'"unlink"'},{value:'"bell"'},{value:'"rss"'},{value:'"sharealt"'},{value:'"share"'},{value:'"circlehollow"'},{value:'"bookmarkhollow"'},{value:'"bookmark"'},{value:'"diamond"'},{value:'"hearthollow"'},{value:'"heart"'},{value:'"starhollow"'},{value:'"star"'},{value:'"certificate"'},{value:'"verified"'},{value:'"thumbsup"'},{value:'"shield"'},{value:'"basket"'},{value:'"beaker"'},{value:'"hourglass"'},{value:'"flag"'},{value:'"cloudhollow"'},{value:'"cloud"'},{value:'"edit"'},{value:'"cog"'},{value:'"nut"'},{value:'"wrench"'},{value:'"ellipsis"'},{value:'"check"'},{value:'"batchdeny"'},{value:'"batchaccept"'},{value:'"controls"'},{value:'"plus"'},{value:'"closeAlt"'},{value:'"cross"'},{value:'"trash"'},{value:'"pinalt"'},{value:'"unpin"'},{value:'"add"'},{value:'"subtract"'},{value:'"close"'},{value:'"delete"'},{value:'"passed"'},{value:'"changed"'},{value:'"failed"'},{value:'"clear"'},{value:'"comment"'},{value:'"commentadd"'},{value:'"requestchange"'},{value:'"comments"'},{value:'"lock"'},{value:'"unlock"'},{value:'"key"'},{value:'"outbox"'},{value:'"credit"'},{value:'"pointerdefault"'},{value:'"pointerhand"'},{value:'"browser"'},{value:'"tablet"'},{value:'"mobile"'},{value:'"watch"'},{value:'"sidebar"'},{value:'"sidebaralt"'},{value:'"sidebaralttoggle"'},{value:'"sidebartoggle"'},{value:'"bottombar"'},{value:'"bottombartoggle"'},{value:'"cpu"'},{value:'"database"'},{value:'"memory"'},{value:'"structure"'},{value:'"box"'},{value:'"power"'},{value:'"photo"'},{value:'"component"'},{value:'"photodrag"'},{value:'"zoom"'},{value:'"zoomout"'},{value:'"zoomreset"'},{value:'"eye"'},{value:'"eyeclose"'},{value:'"lightning"'},{value:'"lightningoff"'},{value:'"contrast"'},{value:'"switchalt"'},{value:'"mirror"'},{value:'"grow"'},{value:'"paintbrush"'},{value:'"ruler"'},{value:'"stop"'},{value:'"camera"'},{value:'"video"'},{value:'"speaker"'},{value:'"play"'},{value:'"playback"'},{value:'"playnext"'},{value:'"rewind"'},{value:'"fastforward"'},{value:'"stopalt"'},{value:'"sidebyside"'},{value:'"stacked"'},{value:'"sun"'},{value:'"moon"'},{value:'"book"'},{value:'"category"'},{value:'"folder"'},{value:'"print"'},{value:'"graphline"'},{value:'"calendar"'},{value:'"graphbar"'},{value:'"menualt"'},{value:'"filter"'},{value:'"docchart"'},{value:'"doclist"'},{value:'"markup"'},{value:'"bold"'},{value:'"italic"'},{value:'"paperclip"'},{value:'"listordered"'},{value:'"listunordered"'},{value:'"paragraph"'},{value:'"markdown"'},{value:'"repository"'},{value:'"commit"'},{value:'"branch"'},{value:'"pullrequest"'},{value:'"merge"'},{value:'"apple"'},{value:'"linux"'},{value:'"ubuntu"'},{value:'"windows"'},{value:'"storybook"'},{value:'"azuredevops"'},{value:'"bitbucket"'},{value:'"chrome"'},{value:'"chromatic"'},{value:'"componentdriven"'},{value:'"discord"'},{value:'"facebook"'},{value:'"figma"'},{value:'"gdrive"'},{value:'"github"'},{value:'"gitlab"'},{value:'"google"'},{value:'"graphql"'},{value:'"medium"'},{value:'"redux"'},{value:'"twitter"'},{value:'"youtube"'},{value:'"linkedin"'},{value:'"vscode"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChangeInput:{defaultValue:null,description:"",name:"onChangeInput",required:!0,type:{name:"(value: string) => void"}},showPasswordToggle:{defaultValue:{value:"false"},description:"",name:"showPasswordToggle",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Components/TextField",component:u,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{labelText:"Label text",placeholder:"Placeholder",id:"test-for",isRequired:!0,shape:"rounded",type:"text",isDisabled:!1,error:!1,errorText:"Error message",icon:"useralt",iconPosition:"left",helperText:"test helper text",size:"medium",warnText:"text warning text",onChangeInput:()=>{},className:"none"}},d={args:{...t.args,labelText:"Label text",placeholder:"Placeholder",isRequired:!0,icon:"lock",iconPosition:"left",type:"password",showPasswordToggle:!0}},c={args:{...t.args,labelText:"Label text",placeholder:"Placeholder",isRequired:!0,error:!0,errorText:"Input field can't be empty!",icon:"alert",iconPosition:"right"}},v={args:{...t.args},render:()=>p("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(u,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"rounded"}),a(u,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"square"}),a(u,{labelText:"Label Text",placeholder:"Placeholder",onChangeInput:()=>{},shape:"pill"})]})};var y,w,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    icon: 'useralt',
    iconPosition: 'left',
    helperText: 'test helper text',
    size: 'medium',
    warnText: 'text warning text',
    onChangeInput: () => void {},
    className: 'none'
  }
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var $,q,k;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder',
    isRequired: true,
    icon: 'lock',
    iconPosition: 'left',
    type: 'password',
    showPasswordToggle: true
  }
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var I,P,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder',
    isRequired: true,
    error: true,
    errorText: \`Input field can't be empty!\`,
    icon: 'alert',
    iconPosition: 'right'
  }
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,S,z;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(S=v.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const ue=["Default","withIcon","Invalid","AllShapes"];export{v as AllShapes,t as Default,c as Invalid,ue as __namedExportsOrder,oe as default,d as withIcon};
