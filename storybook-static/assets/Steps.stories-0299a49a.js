import{j as t,a}from"./jsx-runtime-c9381026.js";import{r as $}from"./index-8b3efc3f.js";import{a as o,r as d}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const N=o.div`display: flex; flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"}; gap: ${e=>e.$direction==="horizontal"?e.theme.spacing[0]:e.theme.spacing[4]}px;`,q=o.div`display: flex; flex-direction: ${e=>e.$direction==="horizontal"?"column":"row"}; flex: ${e=>e.$direction==="horizontal"&&!e.$isLast?1:"none"}; align-items: ${e=>e.$direction==="horizontal"?"center":"flex-start"}; cursor: ${e=>e.$clickable?"pointer":"default"}; position: relative;`,L=o.div`display: flex; align-items: center; width: 100%; margin-bottom: ${e=>e.$direction==="horizontal"?e.theme.spacing[2]:0}px; margin-right: ${e=>e.$direction==="vertical"?e.theme.spacing[3]:0}px;`,T={wait:d`background-color: ${({theme:e})=>e.color.neutral[0]}; border: 2px solid ${({theme:e})=>e.color.neutral[300]}; color: ${({theme:e})=>e.color.neutral[500]};`,process:d`background-color: ${({theme:e})=>e.color.accent[600]}; border: 2px solid ${({theme:e})=>e.color.accent[600]}; color: ${({theme:e})=>e.color.neutral[0]};`,finish:d`background-color: ${({theme:e})=>e.color.accent[600]}; border: 2px solid ${({theme:e})=>e.color.accent[600]}; color: ${({theme:e})=>e.color.neutral[0]};`,error:d`background-color: ${({theme:e})=>e.color.danger[600]}; border: 2px solid ${({theme:e})=>e.color.danger[600]}; color: ${({theme:e})=>e.color.neutral[0]};`},j=o.div`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: ${({theme:e})=>e.radius.full};
font-weight: ${({theme:e})=>e.typography.weight.semibold};
font-size: ${({theme:e})=>e.typography.size.sm};
transition: all ${({theme:e})=>e.transitions.duration.base};
flex-shrink: 0;

${e=>T[e.$status]}
`,v=o.div`
flex: 1;
height: ${e=>e.$direction==="horizontal"?"2px":"auto"};
width: ${e=>e.$direction==="vertical"?"2px":"auto"};
background-color: ${e=>e.$status==="finish"?e.theme.color.accent[600]:e.theme.color.neutral[300]};
margin: 0 ${({theme:e})=>e.spacing[12]}px;
transition: background-color ${({theme:e})=>e.transitions.duration.base};

${e=>e.$direction==="vertical"&&d`position: absolute; left: 15px; top: 40px; bottom: -${e.theme.spacing[4]}px;`}
`,P=o.div`flex: 1;`,A=o.div`font-size: ${({theme:e})=>e.typography.size.base}; font-weight: ${({theme:e})=>e.typography.weight.medium}; color: ${e=>e.$status==="wait"?e.theme.color.neutral[500]:e.theme.color.neutral[900]}; margin-bottom: ${({theme:e})=>e.spacing[4]}px;`,E=o.div`font-size: ${({theme:e})=>e.typography.size.sm}; color: ${({theme:e})=>e.color.neutral[600]};`,D=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),s=({current:e,steps:r,direction:i="horizontal",onChange:f,clickable:b=!1})=>{const V=n=>n<e?"finish":n===e?"process":"wait",I=n=>{b&&f&&f(n)};return t(N,{$direction:i,children:r.map((n,c)=>{const l=V(c),h=c===r.length-1;return a(q,{$direction:i,$isLast:h,$clickable:b,onClick:()=>I(c),children:[a(L,{$direction:i,children:[t(j,{$status:l,children:n.icon?n.icon:l==="finish"?t(D,{}):c+1}),!h&&i==="horizontal"&&t(v,{$status:l,$direction:i})]}),i==="vertical"&&!h&&t(v,{$status:l,$direction:i}),a(P,{children:[t(A,{$status:l,children:n.title}),n.description&&t(E,{children:n.description})]})]},c)})})};try{s.displayName="Steps",s.__docgenInfo={description:"",displayName:"Steps",props:{current:{defaultValue:null,description:"Current active step (0-indexed)",name:"current",required:!0,type:{name:"number"}},steps:{defaultValue:null,description:"Array of steps",name:"steps",required:!0,type:{name:"Step[]"}},direction:{defaultValue:{value:"horizontal"},description:"Direction of steps",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},onChange:{defaultValue:null,description:"Callback when step is clicked",name:"onChange",required:!1,type:{name:"((step: number) => void) | undefined"}},clickable:{defaultValue:{value:"false"},description:"Allow clicking on steps",name:"clickable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const W={title:"Components/Steps",component:s,tags:["autodocs"]},g=[{title:"Account Info",description:"Enter your details"},{title:"Verification",description:"Verify your email"},{title:"Complete",description:"Setup complete"}],u={render:()=>{const[e,r]=$.useState(1);return a("div",{children:[t(s,{current:e,steps:g}),a("div",{style:{marginTop:"2rem",display:"flex",gap:"0.5rem"},children:[t("button",{onClick:()=>r(Math.max(0,e-1)),disabled:e===0,children:"Previous"}),t("button",{onClick:()=>r(Math.min(2,e+1)),disabled:e===2,children:"Next"})]})]})}},p={render:()=>{const[e,r]=$.useState(1);return a("div",{children:[t(s,{current:e,steps:g,direction:"vertical"}),a("div",{style:{marginTop:"2rem",display:"flex",gap:"0.5rem"},children:[t("button",{onClick:()=>r(Math.max(0,e-1)),disabled:e===0,children:"Previous"}),t("button",{onClick:()=>r(Math.min(2,e+1)),disabled:e===2,children:"Next"})]})]})}},m={render:()=>{const[e,r]=$.useState(1);return t(s,{current:e,steps:g,onChange:r,clickable:!0})}};var x,y,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div>\r
    <Steps current={current} steps={basicSteps} />\r
    <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '0.5rem'
      }}>\r
      <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>\r
        Previous\r
      </button>\r
      <button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>\r
        Next\r
      </button>\r
    </div>\r
  </div>;
  }
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,k,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div>\r
    <Steps current={current} steps={basicSteps} direction="vertical" />\r
    <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '0.5rem'
      }}>\r
      <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>\r
        Previous\r
      </button>\r
      <button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>\r
        Next\r
      </button>\r
    </div>\r
  </div>;
  }
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,_,M;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <Steps current={current} steps={basicSteps} onChange={setCurrent} clickable />;
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const F=["Horizontal","Vertical","Clickable"];export{m as Clickable,u as Horizontal,p as Vertical,F as __namedExportsOrder,W as default};
