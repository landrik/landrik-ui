import{a as S,j as n}from"./jsx-runtime-c9381026.js";import{a as l}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const k=l.div`width: 100%;`,q=l.div`
  display: flex; 
  gap: ${e=>e.$variant==="pills"?"8px":"0"}; 
  border-bottom: ${e=>e.$variant==="line"?"2px solid #e5e7eb":"none"}; 
  background: ${e=>e.$variant==="enclosed"?"#f9fafb":"transparent"}; 
  padding: ${e=>e.$variant==="enclosed"?"4px":"0"}; 
  border-radius: ${e=>e.$variant==="enclosed"?"8px":"0"};
`,V=l.button`
  padding: 12px 20px;
  border: none;
  background: ${e=>e.$variant==="pills"&&e.$active?e.$color:e.$variant==="enclosed"&&e.$active?"white":"transparent"};
  color: ${e=>e.$variant==="pills"&&e.$active?"white":e.$active?e.$color:"#6b7280"};
  font-size: 14px;
  font-weight: ${e=>e.$active?600:500};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: ${e=>e.$variant==="pills"||e.$variant==="enclosed"?"6px":"0"};
  white-space: nowrap;
  box-shadow: ${e=>e.$variant==="enclosed"&&e.$active?"0 1px 3px rgba(0,0,0,0.1)":"none"};

  ${e=>e.$variant==="line"&&e.$active&&`&::after { 
      content: ''; 
      position: absolute; 
      bottom: -2px; 
      left: 0; 
      right: 0; 
      height: 2px; 
      background: ${e.$color}; 
    }`}

  &:hover {
    color: ${e=>e.$variant==="pills"&&e.$active?"white":e.$color};
    background: ${e=>e.$variant==="pills"&&!e.$active?`${e.$color}10`:e.$variant==="enclosed"&&!e.$active?"#f3f4f6":e.$active?void 0:"transparent"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,N=l.div`padding: 20px 0;`,d=({tabs:e,activeTab:c,onChange:D,color:P="#3b82f6",variant:u="line"})=>{var b;const v=(b=e.find(a=>a.value===c))==null?void 0:b.content;return S(k,{children:[n(q,{role:"tablist",$variant:u,children:e.map(a=>n(V,{role:"tab","aria-selected":c===a.value,$active:c===a.value,$color:P,$variant:u,onClick:()=>D(a.value),disabled:a.disabled,children:a.label},a.value))}),v&&n(N,{role:"tabpanel",children:v})]})};try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"[TabItemProps]"}},activeTab:{defaultValue:null,description:"",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"line"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"line"'},{value:'"enclosed"'},{value:'"pills"'}]}}}}}catch{}const W={title:"Components/Tabs",component:d,parameters:{layout:"padded"},tags:["autodocs"]},s=[{label:"Profile",value:"profile",content:n("div",{children:"Profile content goes here"})},{label:"Settings",value:"settings",content:n("div",{children:"Settings content goes here"})},{label:"Notifications",value:"notifications",content:n("div",{children:"Notifications content goes here"})}],t={args:{tabs:s,activeTab:"profile",variant:"line",onChange:e=>console.log(e)}},i={args:{tabs:s,activeTab:"profile",variant:"enclosed",onChange:e=>console.log(e)}},r={args:{tabs:s,activeTab:"profile",variant:"pills",onChange:e=>console.log(e)}},o={args:{tabs:[...s,{label:"Disabled",value:"disabled",disabled:!0,content:n("div",{children:"Disabled"})}],activeTab:"profile",onChange:e=>console.log(e)}};var p,g,$;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'line',
    onChange: value => console.log(value)
  }
}`,...($=(g=t.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var m,f,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'enclosed',
    onChange: value => console.log(value)
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,x,C;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'pills',
    onChange: value => console.log(value)
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,_,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabs: [...sampleTabs, {
      label: 'Disabled',
      value: 'disabled',
      disabled: true,
      content: <div>Disabled</div>
    }],
    activeTab: 'profile',
    onChange: value => console.log(value)
  }
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const z=["Line","Enclosed","Pills","WithDisabled"];export{i as Enclosed,t as Line,r as Pills,o as WithDisabled,z as __namedExportsOrder,W as default};
