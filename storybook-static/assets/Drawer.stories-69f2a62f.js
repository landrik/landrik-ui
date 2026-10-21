import{a as t,F as p,j as n}from"./jsx-runtime-c9381026.js";import{r as i}from"./index-8b3efc3f.js";import{r as Z}from"./index-a38d0dca.js";import{l as f,a as c,r as m}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const ee=f`from { opacity: 0; } to { opacity: 1; }`,ne=c.div`position: fixed; inset: 0; background-color: rgba(0, 0, 0, 0.5); z-index: ${({theme:e})=>e.zIndices.modal}; animation: ${ee} ${({theme:e})=>e.transitions.duration.base}; display: ${e=>e.$open?"block":"none"};`,re=f`from { transform: translateX(-100%); } to { transform: translateX(0); }`,te=f`from { transform: translateX(100%); } to { transform: translateX(0); }`,oe=f`from { transform: translateY(-100%); } to { transform: translateY(0); }`,ie=f`from { transform: translateY(100%); } to { transform: translateY(0); }`,le={left:m`top: 0; left: 0; bottom: 0; animation: ${re} ${({theme:e})=>e.transitions.duration.base} ${({theme:e})=>e.transitions.preset.base};`,right:m`top: 0; right: 0; bottom: 0; animation: ${te} ${({theme:e})=>e.transitions.duration.base} ${({theme:e})=>e.transitions.preset.base};`,top:m`top: 0; left: 0; right: 0; animation: ${oe} ${({theme:e})=>e.transitions.duration.base} ${({theme:e})=>e.transitions.preset.base};`,bottom:m`bottom: 0; left: 0; right: 0; animation: ${ie} ${({theme:e})=>e.transitions.duration.base} ${({theme:e})=>e.transitions.preset.base};`},ae=(e,r)=>{const a={sm:"320px",md:"448px",lg:"640px",xl:"1024px",full:"100%"};return e==="left"||e==="right"?m`width: ${a[r]}; max-width: 100%;`:m`height: ${a[r]}; max-height: 100%;`},se=c.div`
position: fixed;
z-index: ${({theme:e})=>e.zIndices.modal+1};
background-color: ${({theme:e})=>e.color.neutral[0]};
box-shadow: ${({theme:e})=>e.shadows.xl};
display: ${e=>e.$open?"flex":"none"};
flex-direction: column;

${e=>le[e.$placement]}
${e=>ae(e.$placement,e.$size)}
`,de=c.div`display: flex; align-items: center; justify-content: space-between; padding: ${({theme:e})=>e.spacing[6]}px; border-bottom: 1px solid ${({theme:e})=>e.color.neutral[200]}; flex-shrink: 0;`,pe=c.h2`margin: 0; font-size: ${({theme:e})=>e.typography.size.xl}; font-weight: ${({theme:e})=>e.typography.weight.semibold}; color: ${({theme:e})=>e.color.neutral[900]};`,ce=c.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
padding: 0;
background-color: transparent;
border: none;
border-radius: ${({theme:e})=>e.radius.md};
color: ${({theme:e})=>e.color.neutral[600]};
cursor: pointer;
transition: all ${({theme:e})=>e.transitions.duration.base};

&:hover {
background-color: ${({theme:e})=>e.color.neutral[100]};
color: ${({theme:e})=>e.color.neutral[900]};
}

&:focus-visible {
outline: 2px solid ${({theme:e})=>e.color.accent[500]};
outline-offset: 2px;
}
`,ue=c.div`flex: 1; overflow-y: auto; padding: ${({theme:e})=>e.spacing[6]}px;`,me=c.div`padding: ${({theme:e})=>e.spacing[6]}px; border-top: 1px solid ${({theme:e})=>e.color.neutral[200]}; flex-shrink: 0;`,he=()=>n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),o=({open:e,onClose:r,children:a,placement:s="right",size:h="md",title:l,footer:u,closeOnOverlayClick:d=!0,closeOnEscape:D=!0,showCloseButton:k=!0})=>{i.useEffect(()=>{if(!e)return;const S=Q=>{D&&Q.key==="Escape"&&r()};return document.body.style.overflow="hidden",document.addEventListener("keydown",S),()=>{document.body.style.overflow="",document.removeEventListener("keydown",S)}},[e,D,r]);const K=()=>{d&&r()};return typeof window>"u"?null:Z.createPortal(t(p,{children:[n(ne,{$open:e,onClick:K,"aria-hidden":"true"}),t(se,{$open:e,$placement:s,$size:h,role:"dialog","aria-modal":"true","aria-labelledby":l?"drawer-title":void 0,children:[(l||k)&&t(de,{children:[l&&n(pe,{id:"drawer-title",children:l}),k&&n(ce,{onClick:r,"aria-label":"Close drawer",children:n(he,{})})]}),n(ue,{children:a}),u&&n(me,{children:u})]})]}),document.body)};try{o.displayName="Drawer",o.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"Whether drawer is visible",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when drawer should close",name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Drawer content",name:"children",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"right"},description:"Side from which drawer appears",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"md"},description:"Drawer size",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},title:{defaultValue:null,description:"Drawer title",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"Close on overlay click",name:"closeOnOverlayClick",required:!1,type:{name:"boolean | undefined"}},closeOnEscape:{defaultValue:{value:"true"},description:"Close on Escape key",name:"closeOnEscape",required:!1,type:{name:"boolean | undefined"}},showCloseButton:{defaultValue:{value:"true"},description:"Show close button",name:"showCloseButton",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Oe={title:"Components/Drawer",component:o,tags:["autodocs"]},b={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Drawer"}),t(o,{open:e,onClose:()=>r(!1),title:"Drawer Title",children:[n("p",{children:"This is the drawer content. You can put any React elements here."}),n("p",{children:"Click the overlay or press Escape to close."})]})]})}},w={render:()=>{const[e,r]=i.useState(!1),[a,s]=i.useState(!1),[h,l]=i.useState(!1),[u,d]=i.useState(!1);return t("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[n("button",{onClick:()=>r(!0),children:"Open Left"}),n("button",{onClick:()=>s(!0),children:"Open Right"}),n("button",{onClick:()=>l(!0),children:"Open Top"}),n("button",{onClick:()=>d(!0),children:"Open Bottom"}),n(o,{open:e,onClose:()=>r(!1),placement:"left",title:"Left Drawer",children:n("p",{children:"This drawer slides in from the left."})}),n(o,{open:a,onClose:()=>s(!1),placement:"right",title:"Right Drawer",children:n("p",{children:"This drawer slides in from the right."})}),n(o,{open:h,onClose:()=>l(!1),placement:"top",title:"Top Drawer",children:n("p",{children:"This drawer slides in from the top."})}),n(o,{open:u,onClose:()=>d(!1),placement:"bottom",title:"Bottom Drawer",children:n("p",{children:"This drawer slides in from the bottom."})})]})}},g={render:()=>{const[e,r]=i.useState(!1),[a,s]=i.useState(!1),[h,l]=i.useState(!1),[u,d]=i.useState(!1);return t("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[n("button",{onClick:()=>r(!0),children:"Small (320px)"}),n("button",{onClick:()=>s(!0),children:"Medium (448px)"}),n("button",{onClick:()=>l(!0),children:"Large (640px)"}),n("button",{onClick:()=>d(!0),children:"Full Width"}),n(o,{open:e,onClose:()=>r(!1),size:"sm",title:"Small Drawer",children:n("p",{children:"This is a small drawer (320px wide)."})}),n(o,{open:a,onClose:()=>s(!1),size:"md",title:"Medium Drawer",children:n("p",{children:"This is a medium drawer (448px wide)."})}),n(o,{open:h,onClose:()=>l(!1),size:"lg",title:"Large Drawer",children:n("p",{children:"This is a large drawer (640px wide)."})}),n(o,{open:u,onClose:()=>d(!1),size:"full",title:"Full Width Drawer",children:n("p",{children:"This drawer takes up the full width of the screen."})})]})}},y={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Drawer with Footer"}),t(o,{open:e,onClose:()=>r(!1),title:"Confirm Action",footer:t("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[n("button",{onClick:()=>r(!1),style:{padding:"0.5rem 1rem"},children:"Cancel"}),n("button",{onClick:()=>r(!1),style:{padding:"0.5rem 1rem",background:"#0284c7",color:"white",border:"none",borderRadius:"0.5rem"},children:"Confirm"})]}),children:[n("p",{children:"Are you sure you want to proceed with this action?"}),n("p",{children:"This cannot be undone."})]})]})}},O={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Form Drawer"}),n(o,{open:e,onClose:()=>r(!1),title:"Create New User",footer:t("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[n("button",{onClick:()=>r(!1),children:"Cancel"}),n("button",{style:{background:"#0284c7",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"0.5rem"},children:"Save"})]}),children:t("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t("div",{children:[n("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Full Name"}),n("input",{type:"text",style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},placeholder:"John Doe"})]}),t("div",{children:[n("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Email"}),n("input",{type:"email",style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},placeholder:"john@example.com"})]}),t("div",{children:[n("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Role"}),t("select",{style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},children:[n("option",{children:"Admin"}),n("option",{children:"User"}),n("option",{children:"Guest"})]})]}),t("div",{children:[n("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Bio"}),n("textarea",{rows:4,style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},placeholder:"Tell us about yourself..."})]})]})})]})}},C={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Drawer with Long Content"}),n(o,{open:e,onClose:()=>r(!1),title:"Terms and Conditions",children:t("div",{children:[n("h3",{children:"1. Introduction"}),n("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),n("h3",{children:"2. User Agreement"}),n("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),n("h3",{children:"3. Privacy Policy"}),n("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),n("h3",{children:"4. Terms of Service"}),n("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n("h3",{children:"5. Data Collection"}),n("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),n("h3",{children:"6. User Rights"}),n("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),n("h3",{children:"7. Limitation of Liability"}),n("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),n("h3",{children:"8. Governing Law"}),n("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})]})}},x={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Drawer"}),n(o,{open:e,onClose:()=>r(!1),title:"No Close Button",showCloseButton:!1,children:n("p",{children:"This drawer has no close button. Click the overlay or press Escape to close."})})]})}},v={render:()=>{const[e,r]=i.useState(!1);return t(p,{children:[n("button",{onClick:()=>r(!0),children:"Open Drawer"}),t(o,{open:e,onClose:()=>r(!1),children:[n("h2",{style:{marginTop:0},children:"Custom Header"}),n("p",{children:"This drawer has no built-in title, but you can add your own header in the content."})]})]})}};var $,T,L;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
    <button onClick={() => setOpen(true)}>Open Drawer</button>\r
\r
    <Drawer open={open} onClose={() => setOpen(false)} title="Drawer Title">\r
      <p>This is the drawer content. You can put any React elements here.</p>\r
      <p>Click the overlay or press Escape to close.</p>\r
    </Drawer>\r
  </>;
  }
}`,...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,q,B;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);
    const [topOpen, setTopOpen] = useState(false);
    const [bottomOpen, setBottomOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>\r
    <button onClick={() => setLeftOpen(true)}>Open Left</button>\r
    <button onClick={() => setRightOpen(true)}>Open Right</button>\r
    <button onClick={() => setTopOpen(true)}>Open Top</button>\r
    <button onClick={() => setBottomOpen(true)}>Open Bottom</button>\r
\r
    <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} placement="left" title="Left Drawer">\r
      <p>This drawer slides in from the left.</p>\r
    </Drawer>\r
\r
    <Drawer open={rightOpen} onClose={() => setRightOpen(false)} placement="right" title="Right Drawer">\r
      <p>This drawer slides in from the right.</p>\r
    </Drawer>\r
\r
    <Drawer open={topOpen} onClose={() => setTopOpen(false)} placement="top" title="Top Drawer">\r
      <p>This drawer slides in from the top.</p>\r
    </Drawer>\r
\r
    <Drawer open={bottomOpen} onClose={() => setBottomOpen(false)} placement="bottom" title="Bottom Drawer">\r
      <p>This drawer slides in from the bottom.</p>\r
    </Drawer>\r
  </div>;
  }
}`,...(B=(q=w.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var z,W,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [smOpen, setSmOpen] = useState(false);
    const [mdOpen, setMdOpen] = useState(false);
    const [lgOpen, setLgOpen] = useState(false);
    const [fullOpen, setFullOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>\r
      <button onClick={() => setSmOpen(true)}>Small (320px)</button>\r
      <button onClick={() => setMdOpen(true)}>Medium (448px)</button>\r
      <button onClick={() => setLgOpen(true)}>Large (640px)</button>\r
      <button onClick={() => setFullOpen(true)}>Full Width</button>\r
\r
      <Drawer open={smOpen} onClose={() => setSmOpen(false)} size="sm" title="Small Drawer">\r
        <p>This is a small drawer (320px wide).</p>\r
      </Drawer>\r
\r
      <Drawer open={mdOpen} onClose={() => setMdOpen(false)} size="md" title="Medium Drawer">\r
        <p>This is a medium drawer (448px wide).</p>\r
      </Drawer>\r
\r
      <Drawer open={lgOpen} onClose={() => setLgOpen(false)} size="lg" title="Large Drawer">\r
        <p>This is a large drawer (640px wide).</p>\r
      </Drawer>\r
\r
      <Drawer open={fullOpen} onClose={() => setFullOpen(false)} size="full" title="Full Width Drawer">\r
        <p>This drawer takes up the full width of the screen.</p>\r
      </Drawer>\r
    </div>;
  }
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var E,N,A;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
      <button onClick={() => setOpen(true)}>Open Drawer with Footer</button>\r
\r
      <Drawer open={open} onClose={() => setOpen(false)} title="Confirm Action" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>\r
            <button onClick={() => setOpen(false)} style={{
          padding: '0.5rem 1rem'
        }}>\r
              Cancel\r
            </button>\r
            <button onClick={() => setOpen(false)} style={{
          padding: '0.5rem 1rem',
          background: '#0284c7',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem'
        }}>\r
              Confirm\r
            </button>\r
          </div>}>\r
        <p>Are you sure you want to proceed with this action?</p>\r
        <p>This cannot be undone.</p>\r
      </Drawer>\r
    </>;
  }
}`,...(A=(N=y.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,j,I;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
      <button onClick={() => setOpen(true)}>Open Form Drawer</button>\r
\r
      <Drawer open={open} onClose={() => setOpen(false)} title="Create New User" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>\r
            <button onClick={() => setOpen(false)}>Cancel</button>\r
            <button style={{
          background: '#0284c7',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem'
        }}>\r
              Save\r
            </button>\r
          </div>}>\r
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
          <div>\r
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>\r
              Full Name\r
            </label>\r
            <input type="text" style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }} placeholder="John Doe" />\r
          </div>\r
\r
          <div>\r
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>\r
              Email\r
            </label>\r
            <input type="email" style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }} placeholder="john@example.com" />\r
          </div>\r
\r
          <div>\r
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>\r
              Role\r
            </label>\r
            <select style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }}>\r
              <option>Admin</option>\r
              <option>User</option>\r
              <option>Guest</option>\r
            </select>\r
          </div>\r
\r
          <div>\r
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 500
            }}>\r
              Bio\r
            </label>\r
            <textarea rows={4} style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }} placeholder="Tell us about yourself..." />\r
          </div>\r
        </form>\r
      </Drawer>\r
    </>;
  }
}`,...(I=(j=O.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var M,V,_;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
      <button onClick={() => setOpen(true)}>Open Drawer with Long Content</button>\r
\r
      <Drawer open={open} onClose={() => setOpen(false)} title="Terms and Conditions">\r
        <div>\r
          <h3>1. Introduction</h3>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r
\r
          <h3>2. User Agreement</h3>\r
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
\r
          <h3>3. Privacy Policy</h3>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r
\r
          <h3>4. Terms of Service</h3>\r
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
\r
          <h3>5. Data Collection</h3>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r
\r
          <h3>6. User Rights</h3>\r
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
\r
          <h3>7. Limitation of Liability</h3>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r
\r
          <h3>8. Governing Law</h3>\r
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </div>\r
      </Drawer>\r
    </>;
  }
}`,...(_=(V=C.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,Y,G;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
      <button onClick={() => setOpen(true)}>Open Drawer</button>\r
\r
      <Drawer open={open} onClose={() => setOpen(false)} title="No Close Button" showCloseButton={false}>\r
        <p>This drawer has no close button. Click the overlay or press Escape to close.</p>\r
      </Drawer>\r
    </>;
  }
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var X,H,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
      <button onClick={() => setOpen(true)}>Open Drawer</button>\r
\r
      <Drawer open={open} onClose={() => setOpen(false)}>\r
        <h2 style={{
          marginTop: 0
        }}>Custom Header</h2>\r
        <p>This drawer has no built-in title, but you can add your own header in the content.</p>\r
      </Drawer>\r
    </>;
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Ce=["Default","AllPlacements","AllSizes","WithFooter","WithForm","WithLongContent","NoCloseButton","NoTitle"];export{w as AllPlacements,g as AllSizes,b as Default,x as NoCloseButton,v as NoTitle,y as WithFooter,O as WithForm,C as WithLongContent,Ce as __namedExportsOrder,Oe as default};
