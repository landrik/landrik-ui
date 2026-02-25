import{a as o,j as n}from"./jsx-runtime-c9381026.js";import{r as a}from"./index-8b3efc3f.js";import{a as r,r as E}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const X=r.div`
border-radius: ${e=>e.theme.radii.lg};
overflow: hidden;

${e=>e.$bordered&&E`border: 1px solid ${e.theme.colors.neutral[200]};`}
`,Y=r.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${e=>e.theme.spacing[4]}px;
  background-color: ${e=>e.theme.colors.neutral[0]};
  border: none;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.neutral[900]};
  text-align: left;
  transition: background-color ${e=>e.theme.transitions.duration.base};
  opacity: ${e=>e.$disabled?.5:1};

  ${e=>!e.$bordered&&E`border-bottom: 1px solid ${e.theme.colors.neutral[200]};`}

  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.neutral[50]};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: -2px;
  }
`,Z=r.span`flex: 1;`,ee=r.span`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  margin-left: ${e=>e.theme.spacing[2]}px; 
  color: ${e=>e.theme.colors.neutral[500]}; 
  transform: rotate(${e=>e.$isOpen?"180deg":"0deg"}); 
  transition: transform ${e=>e.theme.transitions.duration.base};
`,ne=r.div`
  max-height: ${e=>e.$isOpen?`${e.$maxHeight}px`:"0"}; 
  overflow: hidden; 
  transition: max-height ${e=>e.theme.transitions.duration.shorter} ${e=>e.theme.transitions.timing.easeInOut};
`,te=r.div`
  padding: ${e=>e.theme.spacing[4]}px; 
  background-color: ${e=>e.theme.colors.neutral[0]};
`,oe=()=>n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:n("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}),t=({title:e,children:s,isOpen:y,defaultOpen:z=!1,onToggle:f,disabled:g=!1,showIcon:Q=!0,icon:U,bordered:C=!0})=>{const[G,J]=a.useState(z),$=y!==void 0,l=$?y:G,b=a.useRef(null),[K,P]=a.useState(1e3);return a.useEffect(()=>{b.current&&P(b.current.scrollHeight)},[s,l]),o(X,{$bordered:C,children:[o(Y,{onClick:()=>{if(g)return;const x=!l;$||J(x),f==null||f(x)},disabled:g,$disabled:g,$bordered:C,"aria-expanded":l,children:[n(Z,{children:e}),Q&&n(ee,{$isOpen:l,children:U||n(oe,{})})]}),n(ne,{$isOpen:l,$maxHeight:K,children:n(te,{ref:b,children:s})})]})};try{t.displayName="Collapse",t.__docgenInfo={description:"",displayName:"Collapse",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Components/Collapse",component:t,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{title:"Click to expand",children:n("p",{children:"This is the collapsed content. It can contain any React elements, including text, images, or other components."})}},c={args:{title:"Default open",defaultOpen:!0,children:n("p",{children:"This collapse is open by default."})}},d={args:{title:"No border variant",bordered:!1,children:n("p",{children:"This collapse has no border."})}},p={args:{title:"Disabled collapse",disabled:!0,children:n("p",{children:"This content cannot be accessed."})}},u={render:()=>{const[e,s]=a.useState(!1);return o("div",{children:[o("button",{onClick:()=>s(!e),style:{marginBottom:"1rem",padding:"0.5rem 1rem"},children:["Toggle from outside: ",e?"Close":"Open"]}),n(t,{title:"Controlled collapse",isOpen:e,onToggle:s,children:n("p",{children:"This collapse is controlled from outside."})})]})}},m={render:()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n(t,{title:"Section 1",children:n("p",{children:"Content for section 1"})}),n(t,{title:"Section 2",children:n("p",{children:"Content for section 2"})}),n(t,{title:"Section 3",children:n("p",{children:"Content for section 3"})})]})},h={args:{title:"FAQ: How does this work?",children:o("div",{children:[n("p",{style:{marginBottom:"1rem"},children:"This component uses CSS transitions to smoothly animate the height."}),o("ul",{style:{marginLeft:"1.5rem"},children:[n("li",{children:"It measures content height dynamically"}),n("li",{children:"Supports controlled and uncontrolled modes"}),n("li",{children:"Fully accessible with ARIA attributes"})]})]})}};var O,v,S;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand',
    children: <p>\r
      This is the collapsed content. It can contain any React elements,\r
      including text, images, or other components.\r
      </p>
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var I,w,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Default open',
    defaultOpen: true,
    children: <p>This collapse is open by default.</p>
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,D,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'No border variant',
    bordered: false,
    children: <p>This collapse has no border.</p>
  }
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,q,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Disabled collapse',
    disabled: true,
    children: <p>This content cannot be accessed.</p>
  }
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,V,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>\r
        <button onClick={() => setIsOpen(!isOpen)} style={{
        marginBottom: '1rem',
        padding: '0.5rem 1rem'
      }}>\r
          Toggle from outside: {isOpen ? 'Close' : 'Open'}\r
        </button>\r
        <Collapse title="Controlled collapse" isOpen={isOpen} onToggle={setIsOpen}>\r
          <p>This collapse is controlled from outside.</p>\r
        </Collapse>\r
      </div>;
  }
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var j,A,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Collapse title="Section 1">\r
        <p>Content for section 1</p>\r
      </Collapse>\r
      <Collapse title="Section 2">\r
        <p>Content for section 2</p>\r
      </Collapse>\r
      <Collapse title="Section 3">\r
        <p>Content for section 3</p>\r
      </Collapse>\r
    </div>
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var L,M,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'FAQ: How does this work?',
    children: <div>\r
        <p style={{
        marginBottom: '1rem'
      }}>\r
          This component uses CSS transitions to smoothly animate the height.\r
        </p>\r
        <ul style={{
        marginLeft: '1.5rem'
      }}>\r
          <li>It measures content height dynamically</li>\r
          <li>Supports controlled and uncontrolled modes</li>\r
          <li>Fully accessible with ARIA attributes</li>\r
        </ul>\r
      </div>
  }
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const de=["Default","DefaultOpen","NoBorder","Disabled","Controlled","Multiple","WithRichContent"];export{u as Controlled,i as Default,c as DefaultOpen,p as Disabled,m as Multiple,d as NoBorder,h as WithRichContent,de as __namedExportsOrder,ce as default};
