import{a as V,j as a}from"./jsx-runtime-c9381026.js";import{I as h}from"./Icon-b2c83d77.js";import{a as o}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const A=o.label`
  display: inline-flex; 
  align-items: center; 
  gap: 8px; 
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"}; 
  opacity: ${e=>e.$disabled?.5:1}; 
  user-select: none;
`,w=o.input.attrs({type:"checkbox"})`
  position: absolute; 
  opacity: 0; 
  width: 0; 
  height: 0;
`,L=o.div`
  width: ${e=>e.$size==="sm"?"16px":e.$size==="lg"?"24px":"20px"};
  height: ${e=>e.$size==="sm"?"16px":e.$size==="lg"?"24px":"20px"};
  border: 2px solid ${e=>e.$checked||e.$indeterminate?e.$color:"#d1d5db"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: ${e=>e.$checked||e.$indeterminate?e.$color:"white"};

  &:hover {
    border-color: ${e=>e.$color};
  }

  ${w}:focus + & {
    box-shadow: 0 0 0 3px ${e=>`${e.$color}20`};
  }
`,M=o.div`
  color: white; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  opacity: ${e=>e.$visible?1:0}; 
  transform: scale(${e=>e.$visible?1:.5}); 
  transition: all 0.2s ease;
`,N=o.span`
  font-size: ${e=>e.$size==="sm"?"13px":e.$size==="lg"?"16px":"14px"}; 
  color: #1a1a1a;
`,n=({label:e,checked:i,onChange:B,disabled:m=!1,indeterminate:u=!1,color:I="#3b82f6",size:c="md"})=>V(A,{$disabled:m,children:[a(w,{checked:i,onChange:j=>B(j.target.checked),disabled:m}),a(L,{$checked:i,$indeterminate:u,$color:I,$size:c,children:a(M,{$visible:u||i,$size:c,children:u?a(h,{name:"minus",size:c}):a(h,{name:"check",size:c})})}),e&&a(N,{$size:c,children:e})]});try{n.displayName="CheckBox",n.__docgenInfo={description:"",displayName:"CheckBox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean | undefined"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const G={title:"Components/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{label:"Accept terms and conditions",checked:!1,onChange:e=>console.log(e)}},r={args:{label:"Already accepted",checked:!0,onChange:e=>console.log(e)}},s={args:{label:"Select all",checked:!1,indeterminate:!0,onChange:e=>console.log(e)}},t={args:{label:"Disabled option",checked:!1,disabled:!0,onChange:e=>console.log(e)}},d={render:()=>V("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(n,{label:"Small checkbox",checked:!0,size:"sm",onChange:()=>{}}),a(n,{label:"Medium checkbox",checked:!0,size:"md",onChange:()=>{}}),a(n,{label:"Large checkbox",checked:!0,size:"lg",onChange:()=>{}})]})};var p,g,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    onChange: checked => console.log(checked)
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,f,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Already accepted',
    checked: true,
    onChange: checked => console.log(checked)
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var $,C,y;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    checked: false,
    indeterminate: true,
    onChange: checked => console.log(checked)
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,z,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    checked: false,
    disabled: true,
    onChange: checked => console.log(checked)
  }
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var _,D,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
    <CheckBox label="Small checkbox" checked size="sm" onChange={() => {}} />\r
    <CheckBox label="Medium checkbox" checked size="md" onChange={() => {}} />\r
    <CheckBox label="Large checkbox" checked size="lg" onChange={() => {}} />\r
  </div>
}`,...(q=(D=d.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const J=["Default","Checked","Indeterminate","Disabled","Sizes"];export{r as Checked,l as Default,t as Disabled,s as Indeterminate,d as Sizes,J as __namedExportsOrder,G as default};
