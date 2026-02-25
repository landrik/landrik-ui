import{j as n,a as R}from"./jsx-runtime-c9381026.js";import{a as o}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const k=o.div`
  display: flex; 
  flex-direction: 
  column; gap: 8px;
`,q=o.label`
  display: flex; 
  align-items: center; 
  gap: 8px; 
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"}; 
  opacity: ${e=>e.$disabled?.5:1}; 
  user-select: none;
`,O=o.input.attrs({type:"radio"})`
  position: absolute; 
  opacity: 0; 
  width: 0; 
  height: 0;
`,_=o.div`
  width: ${e=>e.$size==="sm"?"16px":e.$size==="lg"?"24px":"20px"};
  height: ${e=>e.$size==="sm"?"16px":e.$size==="lg"?"24px":"20px"};
  border: 2px solid ${e=>e.$checked?e.$color:"#d1d5db"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    border-color: ${e=>e.$color};
  }

  ${O}:focus + & {
    box-shadow: 0 0 0 3px ${e=>`${e.$color}20`};
  }
`,w=o.div`
  width: ${e=>e.$size==="sm"?"8px":e.$size==="lg"?"12px":"10px"};
  height: ${e=>e.$size==="sm"?"8px":e.$size==="lg"?"12px":"10px"};
  border-radius: 50%;
  background: ${e=>e.$color};
  transform: scale(0);
  transition: transform 0.2s ease;

  ${_}[data-checked=“true”] & {
    transform: scale(1);
  }
`,V=o.span`
  font-size: ${e=>e.$size==="sm"?"13px":e.$size==="lg"?"16px":"14px"}; 
  color: #1a1a1a;
`,l=({name:e,options:B,value:d,onChange:D,color:c="#3b82f6",size:u="md"})=>n(k,{role:"radiogroup",children:B.map(a=>R(q,{$disabled:a.disabled,children:[n(O,{name:e,value:a.value,checked:d===a.value,onChange:S=>D(S.target.value),disabled:a.disabled}),n(_,{$checked:d===a.value,$color:c,$size:u,"data-checked":d===a.value,children:n(w,{$color:c,$size:u})}),n(V,{$size:u,children:a.label})]},a.value))});try{l.displayName="RadioButton",l.__docgenInfo={description:"",displayName:"RadioButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOptionProps[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const G={title:"Components/RadioButton",component:l,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{name:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",onChange:e=>console.log(e)}},r={args:{name:"color",options:[{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"blue",label:"Blue"}],value:"green",color:"#10b981",onChange:e=>console.log(e)}},t={args:{name:"disabled",options:[{value:"enabled1",label:"Enabled Option 1"},{value:"disabled",label:"Disabled Option",disabled:!0},{value:"enabled2",label:"Enabled Option 2"}],value:"enabled1",onChange:e=>console.log(e)}},i={render:()=>R("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n(l,{name:"small",options:[{value:"1",label:"Small"}],value:"1",size:"sm",onChange:()=>{}}),n(l,{name:"medium",options:[{value:"1",label:"Medium"}],value:"1",size:"md",onChange:()=>{}}),n(l,{name:"large",options:[{value:"1",label:"Large"}],value:"1",size:"lg",onChange:()=>{}})]})};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'default',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    value: 'option1',
    onChange: value => console.log(value)
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'color',
    options: [{
      value: 'red',
      label: 'Red'
    }, {
      value: 'green',
      label: 'Green'
    }, {
      value: 'blue',
      label: 'Blue'
    }],
    value: 'green',
    color: '#10b981',
    onChange: value => console.log(value)
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var $,x,f;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    options: [{
      value: 'enabled1',
      label: 'Enabled Option 1'
    }, {
      value: 'disabled',
      label: 'Disabled Option',
      disabled: true
    }, {
      value: 'enabled2',
      label: 'Enabled Option 2'
    }],
    value: 'enabled1',
    onChange: value => console.log(value)
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,z,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <RadioButton name="small" options={[{
      value: '1',
      label: 'Small'
    }]} value="1" size="sm" onChange={() => {}} />\r
      <RadioButton name="medium" options={[{
      value: '1',
      label: 'Medium'
    }]} value="1" size="md" onChange={() => {}} />\r
      <RadioButton name="large" options={[{
      value: '1',
      label: 'Large'
    }]} value="1" size="lg" onChange={() => {}} />\r
    </div>
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const M=["Default","CustomColor","WithDisabled","Sizes"];export{r as CustomColor,s as Default,i as Sizes,t as WithDisabled,M as __namedExportsOrder,G as default};
