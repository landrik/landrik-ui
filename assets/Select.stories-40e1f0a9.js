import{a as l,F as B,j as r}from"./jsx-runtime-c9381026.js";import{r as v}from"./index-8b3efc3f.js";import{a as t}from"./styled-components.browser.esm-f7e1e14e.js";import{I as y}from"./Icon-e1e4d749.js";import"./_commonjsHelpers-de833af9.js";const M=t.div`position: relative; width: 100%;`,Y=t.button`
  width: 100%;
  padding: 10px 16px;
  background: white;
  border: 2px solid ${e=>e.$error?"#ef4444":e.$isOpen?e.$color:"#e5e7eb"};
  border-radius: ${e=>{switch(e.$shape){case"pill":return"999px";case"rounded":return"8px";case"square":return"4px"}}};
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  color: ${e=>e.color||"#1a1a1a"};

&:hover {
  border-color: ${e=>e.$error?"#ef4444":e.$color};
}

&:focus {
  outline: none;
  border-color: ${e=>e.$error?"#ef4444":e.$color};
  box-shadow: 0 0 0 3px ${e=>e.$error?"#fee2e2":`${e.$color}20`};
}

&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`,G=t.div`
  display: flex; 
  color: #6b7280; 
  transition: transform 0.2s ease; 
  transform: rotate(${e=>e.$isOpen?"180deg":"0deg"});
`,H=t.div`
  position: absolute; 
  top: calc(100% + 4px); 
  left: 0; 
  right: 0; 
  background: white; 
  border: 1px solid #e5e7eb; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-height: 240px; 
  overflow-y: auto; 
  z-index: 1000; 
  opacity: ${e=>e.$isOpen?1:0}; 
  visibility: ${e=>e.$isOpen?"visible":"hidden"}; 
  transform: translateY(${e=>e.$isOpen?"0":"-8px"}); 
  transition: all 0.2s ease;
`,J=t.div`
  padding: 10px 16px; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  transition: background 0.15s ease; 
  color: ${e=>e.$selected?e.$color:"#1a1a1a"}; 
  background: ${e=>e.$selected?`${e.$color}10`:"transparent"};

  &:hover {
    background: ${e=>e.$selected?`${e.$color}10`:"#f9fafb"};
  }
`,K=t.span`
  font-size: 12px; 
  color: #ef4444; 
  margin-top: 4px; 
  display: block;
`,n=({options:e,value:m,onChange:R,placeholder:F="Select an option",disabled:$=!1,error:g,color:b="#3b82f6",shape:L="rounded"})=>{const[s,h]=v.useState(!1),f=v.useRef(null),x=e.find(a=>a.value===m);v.useEffect(()=>{const a=A=>{f.current&&!f.current.contains(A.target)&&h(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const N=a=>{R(a),h(!1)};return l(B,{children:[l(M,{ref:f,children:[l(Y,{type:"button",$isOpen:s,$color:b,$error:!!g,$shape:L,onClick:()=>!$&&h(!s),disabled:$,children:[r("span",{children:x?x.label:F}),r(G,{$isOpen:s,children:r(y,{name:"arrowdown"})})]}),r(H,{$isOpen:s,children:e.map(a=>l(J,{$selected:a.value===m,$color:b,onClick:()=>N(a.value),children:[a.label,a.value===m&&r(y,{name:"check"})]},a.value))})]}),g&&r(K,{children:g})]})};try{n.displayName="Select",n.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOptionProps[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},placeholder:{defaultValue:{value:"Select an option"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string"}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"pill"'}]}}}}}catch{}const ee={title:"Components/Select",component:n,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r("div",{style:{width:"300px"},children:r(e,{})})]},o=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],c={args:{options:o,value:"",placeholder:"Select a framework",onChange:e=>console.log(e)}},i={args:{options:o,value:"react",onChange:e=>console.log(e)}},d={args:{options:o,value:"",error:"Please select an option",onChange:e=>console.log(e)}},u={args:{options:o,value:"react",disabled:!0,onChange:e=>console.log(e)}},p={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[r(n,{options:o,value:"react",shape:"rounded",onChange:()=>{}}),r(n,{options:o,value:"react",shape:"square",onChange:()=>{}}),r(n,{options:o,value:"react",shape:"pill",onChange:()=>{}})]})};var S,w,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    placeholder: 'Select a framework',
    onChange: value => console.log(value)
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var O,k,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options,
    value: 'react',
    onChange: value => console.log(value)
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var V,_,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options,
    value: '',
    error: 'Please select an option',
    onChange: value => console.log(value)
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var D,j,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options,
    value: 'react',
    disabled: true,
    onChange: value => console.log(value)
  }
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var W,z,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Select options={options} value="react" shape="rounded" onChange={() => {}} />\r
      <Select options={options} value="react" shape="square" onChange={() => {}} />\r
      <Select options={options} value="react" shape="pill" onChange={() => {}} />\r
    </div>
}`,...(P=(z=p.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const ae=["Default","WithValue","WithError","Disabled","Shapes"];export{c as Default,u as Disabled,p as Shapes,d as WithError,i as WithValue,ae as __namedExportsOrder,ee as default};
