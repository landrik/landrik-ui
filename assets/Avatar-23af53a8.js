import{a as h,j as i}from"./jsx-runtime-c9381026.js";import{r as f}from"./index-8b3efc3f.js";import{r as a,a as t}from"./styled-components.browser.esm-f7e1e14e.js";const g={xs:a`width: 24px; height: 24px; font-size: ${({theme:e})=>e.typography.size.xs};`,sm:a`width: 32px; height: 32px; font-size: ${({theme:e})=>e.typography.size.sm};`,md:a`width: 40px; height: 40px; font-size: ${({theme:e})=>e.typography.size.base};`,lg:a`width: 48px; height: 48px; font-size: ${({theme:e})=>e.typography.size.lg};`,xl:a`width: 64px; height: 64px; font-size: ${({theme:e})=>e.typography.size.xl};`,"2xl":a`width: 96px; height: 96px; font-size: ${({theme:e})=>e.typography.size["2xl"]};`},x={circle:a`border-radius: ${({theme:e})=>e.radius.full};`,rounded:a`border-radius: ${({theme:e})=>e.radius.lg};`,square:a`border-radius: ${({theme:e})=>e.radius.none};`},m=t.div`

  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${e=>g[e.$size]} 
`,$=t.div`
  width: 100%; 
  height: 100%; 
  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${e=>x[e.$shape]} 
  overflow: hidden;
`,v=t.img`width: 100%; height: 100%; object-fit: cover;`,y=t.div`
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: ${({theme:e})=>e.color.accent.bgDefault}; 
  color: ${({theme:e})=>e.color.text.onFill}; 
  font-weight: ${({theme:e})=>e.typography.weight.semibold}; 
  user-select: none;
  
`,b={online:a`background-color: ${({theme:e})=>e.color.success.bgDefault}`,offline:a`background-color: ${({theme:e})=>e.color.neutral.bgActive}`,away:a`background-color: ${({theme:e})=>e.color.warning.bgDefault}`,busy:a`background-color: ${({theme:e})=>e.color.danger.bgDefault}`},z=t.div`
  position: absolute; 
  bottom: 0; 
  right: 0; 
  width: ${e=>e.$size==="xs"?"6px":e.$size==="sm"?"8px":e.$size==="md"?"10px":e.$size==="lg"?"12px":e.$size==="xl"?"14px":"18px"}; 
  height: ${e=>e.$size==="xs"?"6px":e.$size==="sm"?"8px":e.$size==="md"?"10px":e.$size==="lg"?"12px":e.$size==="xl"?"14px":"18px"}; 
  border-radius: ${({theme:e})=>e.radius.full}; 
  ${e=>b[e.$status]}; 
  border: 2px solid ${({theme:e})=>e.color.neutral[0]};
`,o=({src:e,alt:s="",size:l="md",shape:n="circle",status:r,initials:u,fallback:d,...w})=>{const[c,p]=f.useState(!1);return h(m,{$size:l,children:[i($,{$shape:n,children:!e||c?i(y,{children:d||u||s.charAt(0).toUpperCase()}):i(v,{src:e,alt:s,onError:()=>p(!0)})}),r&&i(z,{$status:r,$size:l,$statusColor:r})]})};try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"rounded"'},{value:'"square"'},{value:'"circle"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}export{o as A};
