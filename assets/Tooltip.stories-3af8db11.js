import{a as s,j as e}from"./jsx-runtime-c9381026.js";import{r as a}from"./index-8b3efc3f.js";import{l as _,a as v,r}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const I=_`from { opacity: 0; } to { opacity: 1; }`,H=v.div`position: relative; display: inline-flex;`,w={top:r`
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);


  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${t=>t.theme.colors.neutral[900]};
  }
`,bottom:r`
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);


  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-bottom-color: ${t=>t.theme.colors.neutral[900]};
  }


`,left:r`
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);


  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-left-color: ${t=>t.theme.colors.neutral[900]};
  }
`,right:r`
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);


  &::after {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${t=>t.theme.colors.neutral[900]};
  }
`},E=v.div`
  position: absolute;
  z-index: ${t=>t.theme.zIndices.tooltip};
  padding: ${t=>t.theme.spacing[2]}px ${t=>t.theme.spacing[3]}px;
  background-color: ${t=>t.theme.colors.neutral[900]};
  color: ${t=>t.theme.colors.neutral[0]};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  border-radius: ${t=>t.theme.radii.md};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${t=>t.$visible?1:0};
  visibility: ${t=>t.$visible?"visible":"hidden"};
  transition: opacity ${t=>t.theme.transitions.fast},
  visibility ${t=>t.theme.transitions.fast};
  animation: ${t=>t.$visible?I:"none"} ${t=>t.theme.transitions.fast};

  ${t=>w[t.$placement]}

`,o=({content:t,children:T,placement:y="top",delay:x=200})=>{const[$,p]=a.useState(!1),n=a.useRef(),c=()=>{n.current=setTimeout(()=>{p(!0)},x)},m=()=>{n.current&&clearTimeout(n.current),p(!1)};return a.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),s(H,{onMouseEnter:c,onMouseLeave:m,onFocus:c,onBlur:m,children:[T,e(E,{$placement:y,$visible:$,role:"tooltip",children:t})]})};try{o.displayName="Tooltip",o.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"Content to show in tooltip",name:"content",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Element that triggers tooltip",name:"children",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"Placement of tooltip",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},delay:{defaultValue:{value:"200"},description:"Delay before showing (ms)",name:"delay",required:!1,type:{name:"number"}}}}}catch{}const D={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>s("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"2rem"},children:[e(o,{content:"Tooltip on top",placement:"top",children:e("button",{children:"Hover me (top)"})}),e(o,{content:"Tooltip on right",placement:"right",children:e("button",{children:"Hover me (right)"})}),e(o,{content:"Tooltip on bottom",placement:"bottom",children:e("button",{children:"Hover me (bottom)"})}),e(o,{content:"Tooltip on left",placement:"left",children:e("button",{children:"Hover me (left)"})})]})},l={render:()=>e("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"2rem"},children:s("p",{children:["This is some text with a helpful tooltip"," ",e(o,{content:"This provides additional information",children:e("span",{style:{cursor:"help",color:"#3b82f6",textDecoration:"underline"},children:"ⓘ"})})]})})};var d,u,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '2rem'
  }}>\r
\r
      <Tooltip content="Tooltip on top" placement="top">\r
      <button>Hover me (top)</button>\r
      \r
      </Tooltip>\r
\r
      <Tooltip content="Tooltip on right" placement="right">\r
      <button>Hover me (right)</button>\r
      </Tooltip>\r
\r
\r
      <Tooltip content="Tooltip on bottom" placement="bottom">\r
        <button>Hover me (bottom)</button>\r
      </Tooltip>\r
\r
      <Tooltip content="Tooltip on left" placement="left">\r
        <button>Hover me (left)</button>\r
      </Tooltip>\r
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,b,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '2rem'
  }}>\r
      <p>\r
        This is some text with a helpful tooltip{' '}\r
        <Tooltip content="This provides additional information">\r
          <span style={{
          cursor: 'help',
          color: '#3b82f6',
          textDecoration: 'underline'
        }}>\r
          ⓘ\r
          </span>\r
        </Tooltip>\r
      </p>\r
    </div>
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const N=["AllPlacements","WithIcon"];export{i as AllPlacements,l as WithIcon,N as __namedExportsOrder,D as default};
