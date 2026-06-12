import{a as s,j as a}from"./jsx-runtime-c9381026.js";import{r as g,R as Ae}from"./index-8b3efc3f.js";import{l as Re,r as o,a as v}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const Ve=Re`
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
`,Ge=Re`
  from { transform: scale(0); opacity: 0.35; }
  to   { transform: scale(2.5); opacity: 0; }
`,M=o`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`,y=(e,n)=>e.color[n],Be=e=>o`
  --tag-bg:       ${({theme:n})=>y(n,e).bgSubtle};
  --tag-bg-hover: ${({theme:n})=>y(n,e).bgHover};
  --tag-border:   ${({theme:n})=>y(n,e).border};
  --tag-text:     ${({theme:n})=>y(n,e).text};
  --tag-solid:    ${({theme:n})=>y(n,e).bgDefault};
  --tag-contrast: ${({theme:n})=>y(n,e).onFill};
`,qe={sm:o`
    padding:       ${({theme:e})=>e.spacing[1]}px ${({theme:e})=>e.spacing[2]}px;
    font-size:     ${({theme:e})=>e.typography.size.xs};
    border-radius: ${({theme:e})=>e.radius.sm};
    gap:           ${({theme:e})=>e.spacing[4]}px;
  `,md:o`
    padding:       ${({theme:e})=>e.spacing[2]}px ${({theme:e})=>e.spacing[4]}px;
    font-size:     ${({theme:e})=>e.typography.size.sm};
    border-radius: ${({theme:e})=>e.radius.md};
    gap:           ${({theme:e})=>e.spacing[4]}px;
  `,lg:o`
    padding:       ${({theme:e})=>e.spacing[3]}px ${({theme:e})=>e.spacing[6]}px;
    font-size:     ${({theme:e})=>e.typography.size.base};
    border-radius: ${({theme:e})=>e.radius.lg};
    gap:           ${({theme:e})=>e.spacing[12]}px;
  `},_e={filled:o`
    background: var(--tag-solid);
    color:      var(--tag-contrast);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      filter: brightness(1.08);
    }
  `,soft:o`
    background: var(--tag-bg);
    color:      var(--tag-text);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg-hover);
    }
  `,outlined:o`
    background: transparent;
    color:      var(--tag-text);
    border:     1px solid var(--tag-border);

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg);
    }
  `,ghost:o`
    background: transparent;
    color:      var(--tag-text);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg);
    }
  `},Me=v.span`
  /* Color CSS vars */
  ${({$color:e})=>Be(e)}

  /* Layout */
  display:        inline-flex;
  align-items:    center;
  position:       relative;
  overflow:       hidden;
  white-space:    nowrap;
  user-select:    none;
  cursor:         default;
  vertical-align: middle;

  /* Sizing */
  ${({$size:e})=>qe[e]}

  /* Variant */
  ${({$variant:e})=>_e[e]}

  /* Font */
  font-family:     ${({theme:e})=>e.typography.family.sans};
  font-weight:     ${({theme:e})=>e.typography.weight.medium};
  line-height:     1;
  letter-spacing:  0.01em;

  /* Transitions */
  transition:
    background    ${({theme:e})=>e.transitions.preset.fast},
    color         ${({theme:e})=>e.transitions.preset.fast},
    border-color  ${({theme:e})=>e.transitions.preset.fast},
    filter        ${({theme:e})=>e.transitions.preset.fast},
    box-shadow    ${({theme:e})=>e.transitions.preset.fast};

  /* Entry animation */
  animation: ${Ve} ${({theme:e})=>e.transitions.duration.shorter}ms ease both;
  ${M}

  /* Selected state */
  ${({$selected:e,$variant:n})=>e&&o`
      ${n==="filled"?o`filter: brightness(1.12);`:o`
            background:   var(--tag-bg-hover);
            border-color: var(--tag-border);
          `}
      box-shadow: 0 0 0 2px var(--tag-border);
    `}

  /* Disabled state */
  ${({$disabled:e})=>e&&o`
      opacity:        0.45;
      pointer-events: none;
    `}

  /* Clickable (role=button) */
  &[role="button"] {
    cursor: pointer;
    &:focus-visible {
      outline:        2px solid var(--tag-border);
      outline-offset: 2px;
    }
  }
`,We=v.span`
  display:     inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity:     0.85;

  svg {
    width:  1em;
    height: 1em;
  }
`,Fe=v.span`
  display:     inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity:     0.85;

  svg {
    width:  1em;
    height: 1em;
  }
`,Ee=v.span`
  flex:          1 1 auto;
  overflow:      hidden;
  text-overflow: ellipsis;
`,Ne=v.button`
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  flex-shrink:     0;

  /* Reset */
  padding:       0;
  margin:        0;
  background:    none;
  border:        none;
  cursor:        pointer;
  color:         inherit;
  opacity:       0.6;
  border-radius: 50%;

  /* Size relative to font */
  width:  1.25em;
  height: 1.25em;

  position: relative;
  overflow: hidden;

  transition:
    opacity    ${({theme:e})=>e.transitions.preset.fast},
    background ${({theme:e})=>e.transitions.preset.fast};
  ${M}

  &:hover {
    opacity:    1;
    background: ${({theme:e})=>e.color.surface.overlay};
  }

  &:focus-visible {
    outline:        2px solid var(--tag-border);
    outline-offset: 1px;
    opacity:        1;
  }

  /* Ripple pseudo-element */
  &::after {
    content:       "";
    position:      absolute;
    inset:         0;
    margin:        auto;
    width:         100%;
    height:        100%;
    border-radius: 50%;
    background:    currentColor;
    pointer-events: none;
    opacity:       0;
  }

  &:active::after {
    animation: ${Ge} 400ms ease-out forwards;
    ${M}
  }

  svg {
    width:          0.75em;
    height:         0.75em;
    pointer-events: none;
  }
`,Oe={xs:o`gap: ${({theme:e})=>e.spacing[4]}px;`,sm:o`gap: ${({theme:e})=>e.spacing[12]}px;`,md:o`gap: ${({theme:e})=>e.spacing[6]}px;`},Pe=v.div`
  display:     flex;
  align-items: center;
  flex-wrap:   ${({$wrap:e})=>e?"wrap":"nowrap"};
  ${({$gap:e})=>Oe[e]}
`,je=v.span`
  display:         inline-flex;
  align-items:     center;
  padding:         0 ${({theme:e})=>e.spacing[4]}px;
  border-radius:   ${({theme:e})=>e.radius.md};
  font-size:       ${({theme:e})=>e.typography.size.sm};
  font-family:     ${({theme:e})=>e.typography.family.sans};
  font-weight:     ${({theme:e})=>e.typography.weight.medium};
  background:      ${({theme:e})=>e.color.neutral.bgSubtle};
  color:           ${({theme:e})=>e.color.neutral.text};
  border:          1px solid ${({theme:e})=>e.color.neutral.border};
  white-space:     nowrap;
  user-select:     none;
  animation:       ${Ve} ${({theme:e})=>e.transitions.duration.shorter}ms ease both;
  ${M}
`,Ue=()=>a("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:a("path",{d:"M9.5 2.5L2.5 9.5M2.5 2.5L9.5 9.5",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),Ie=g.createContext({}),r=g.forwardRef(({variant:e,size:n,color:i,iconLeft:l,iconRight:t,removable:d=!1,onRemove:c,selected:k=!1,disabled:u=!1,removeLabel:F="Remove",children:x,onClick:m,...h},T)=>{const S=g.useContext(Ie),b=e??S.variant??"soft",E=n??S.size??"md",N=i??S.color??"accent",z=!!m,De=f=>{f.stopPropagation(),c==null||c(f)};return s(Me,{ref:T,$variant:b,$size:E,$color:N,$selected:k,$disabled:u,$removable:d,"aria-disabled":u||void 0,"aria-pressed":z?k:void 0,role:z?"button":void 0,tabIndex:z&&!u?0:void 0,onClick:u?void 0:m,onKeyDown:z&&!u?f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),m==null||m(f))}:void 0,...h,children:[l&&a(We,{"aria-hidden":"true",children:l}),a(Ee,{children:x}),!d&&t&&a(Fe,{"aria-hidden":"true",children:t}),d&&a(Ne,{type:"button","aria-label":`${F}${typeof x=="string"?` ${x}`:""}`,disabled:u,onClick:De,tabIndex:-1,children:a(Ue,{})})]})});r.displayName="Tag";const p=g.forwardRef(({variant:e,size:n,color:i,maxVisible:l,overflowLabel:t,gap:d="sm",wrap:c=!0,children:k,"aria-label":u,...F},x)=>{const m=g.useMemo(()=>({variant:e,size:n,color:i}),[e,n,i]),h=Ae.Children.toArray(k),T=l!==void 0&&h.length>l,S=T?h.slice(0,l):h,b=T?h.length-l:0;return a(Ie.Provider,{value:m,children:s(Pe,{ref:x,$gap:d,$wrap:c,role:"list","aria-label":u,...F,children:[S.map((E,N)=>a("span",{role:"listitem",style:{display:"contents"},children:E},N)),T&&b>0&&a(je,{"aria-label":`${b} more items`,children:t?t(b):`+${b}`})]})})});p.displayName="TagGroup";try{r.displayName="Tag",r.__docgenInfo={description:"",displayName:"Tag",props:{variant:{defaultValue:null,description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"outlined"'},{value:'"soft"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:null,description:"Color — maps to theme.color.accent | theme.color.neutral | theme.color.[status]",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"accent"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'}]}},iconLeft:{defaultValue:null,description:"Left-side icon slot",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"Right-side icon slot (overridden by removable)",name:"iconRight",required:!1,type:{name:"ReactNode"}},removable:{defaultValue:{value:"false"},description:"Render a dismiss button",name:"removable",required:!1,type:{name:"boolean | undefined"}},onRemove:{defaultValue:null,description:"Called when the dismiss button is clicked",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}},selected:{defaultValue:{value:"false"},description:"Mark tag as selected (togglable)",name:"selected",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"Disable interaction",name:"disabled",required:!1,type:{name:"boolean | undefined"}},removeLabel:{defaultValue:{value:"Remove"},description:"Accessible label for the remove button",name:"removeLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}try{p.displayName="TagGroup",p.__docgenInfo={description:"",displayName:"TagGroup",props:{variant:{defaultValue:null,description:"Shared variant applied to all child Tags (overridable per-tag)",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"outlined"'},{value:'"soft"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"Shared size",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:null,description:"Shared color",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"accent"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'}]}},maxVisible:{defaultValue:null,description:"Maximum visible tags before overflow label",name:"maxVisible",required:!1,type:{name:"number | undefined"}},overflowLabel:{defaultValue:null,description:"Label renderer for overflow badge — receives hidden count",name:"overflowLabel",required:!1,type:{name:"((count: number) => ReactNode) | undefined"}},gap:{defaultValue:{value:"sm"},description:"Gap between tags",name:"gap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"xs"'}]}},wrap:{defaultValue:{value:"true"},description:"Wrap tags to multiple lines",name:"wrap",required:!1,type:{name:"boolean | undefined"}},"aria-label":{defaultValue:null,description:"ARIA label for the group",name:"aria-label",required:!1,type:{name:"string | undefined"}}}}}catch{}const Je={title:"Components/Tag",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","soft","outlined","ghost"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Tag size"},color:{control:"select",options:["accent","neutral","success","warning","danger","info"],description:"Color mapped to design tokens"},selected:{control:"boolean"},disabled:{control:"boolean"},removable:{control:"boolean"}}},_=()=>a("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:a("path",{d:"M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.9l-3.8 2-.7-4.3L.5 5.5l4.3-.6z"})}),W=()=>a("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:a("path",{d:"M3 8l3.5 3.5L13 4",strokeLinecap:"round",strokeLinejoin:"round"})}),w={args:{children:"Design System",variant:"soft",size:"md",color:"accent",selected:!1,disabled:!1,removable:!1}},$={render:()=>s("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[a(r,{variant:"filled",color:"accent",children:"Filled"}),a(r,{variant:"soft",color:"accent",children:"Soft"}),a(r,{variant:"outlined",color:"accent",children:"Outlined"}),a(r,{variant:"ghost",color:"accent",children:"Ghost"})]})},C={render:()=>s("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a(r,{size:"sm",color:"accent",children:"Small"}),a(r,{size:"md",color:"accent",children:"Medium"}),a(r,{size:"lg",color:"accent",children:"Large"})]})},L={render:()=>a("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["accent","neutral","success","warning","danger","info"].map(e=>a(r,{variant:"soft",color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},R={name:"Colors / Filled",render:()=>a("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["accent","neutral","success","warning","danger","info"].map(e=>a(r,{variant:"filled",color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},V={name:"Colors / Outlined",render:()=>a("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["accent","neutral","success","warning","danger","info"].map(e=>a(r,{variant:"outlined",color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},I={render:()=>s("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[a(r,{iconLeft:a(_,{}),color:"warning",variant:"soft",children:"Featured"}),a(r,{iconLeft:a(W,{}),color:"success",variant:"soft",children:"Verified"}),a(r,{iconRight:a(_,{}),color:"info",variant:"outlined",children:"Premium"}),a(r,{iconLeft:a(_,{}),iconRight:a(W,{}),color:"accent",variant:"filled",children:"Both Slots"})]})},D={render:()=>{const[e,n]=g.useState(["React","TypeScript","styled-components","Storybook","Accessibility"]);return a(p,{"aria-label":"Tech stack",gap:"sm",children:e.map(i=>a(r,{removable:!0,color:"accent",variant:"soft",onRemove:()=>n(l=>l.filter(t=>t!==i)),children:i},i))})}},A={render:()=>{const e=["Design","Engineering","Product","Marketing","Data"],[n,i]=g.useState(new Set(["Design","Engineering"])),l=t=>i(d=>{const c=new Set(d);return c.has(t)?c.delete(t):c.add(t),c});return a(p,{"aria-label":"Filter by department",gap:"sm",children:e.map(t=>s(r,{variant:"outlined",color:"accent",selected:n.has(t),onClick:()=>l(t),children:[n.has(t)&&a(W,{}),t]},t))})}},G={render:()=>a(p,{"aria-label":"Technologies",maxVisible:4,overflowLabel:e=>`+${e} more`,gap:"sm",children:["React","Vue","Angular","Svelte","Solid","Qwik","Astro","Remix"].map(e=>a(r,{color:"neutral",variant:"soft",children:e},e))})},B={render:()=>s("div",{style:{display:"flex",gap:8},children:[a(r,{disabled:!0,color:"accent",variant:"soft",children:"Disabled soft"}),a(r,{disabled:!0,color:"accent",variant:"filled",children:"Disabled filled"}),a(r,{disabled:!0,color:"danger",variant:"outlined",removable:!0,children:"Can't remove"})]})},q={name:"Kitchen Sink",render:()=>{const[e,n]=g.useState([{id:1,label:"Bug",color:"danger"},{id:2,label:"Feature",color:"success"},{id:3,label:"Enhancement",color:"info"},{id:4,label:"Question",color:"warning"}]);return s("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[s("section",{children:[a("p",{style:{marginBottom:8,fontSize:12,opacity:.6},children:"Issue labels (removable)"}),a(p,{gap:"sm",children:e.map(({id:i,label:l,color:t})=>a(r,{variant:"soft",color:t,removable:!0,iconLeft:a(_,{}),onRemove:()=>n(d=>d.filter(c=>c.id!==i)),children:l},i))})]}),s("section",{children:[a("p",{style:{marginBottom:8,fontSize:12,opacity:.6},children:"Status badges (filled, no interaction)"}),s(p,{gap:"sm",children:[a(r,{variant:"filled",color:"success",size:"sm",iconLeft:a(W,{}),children:"Active"}),a(r,{variant:"filled",color:"warning",size:"sm",children:"Pending"}),a(r,{variant:"filled",color:"danger",size:"sm",children:"Blocked"}),a(r,{variant:"filled",color:"neutral",size:"sm",children:"Archived"})]})]}),s("section",{children:[a("p",{style:{marginBottom:8,fontSize:12,opacity:.6},children:"Large outlined tags"}),s(p,{gap:"md",children:[a(r,{variant:"outlined",color:"accent",size:"lg",children:"React"}),a(r,{variant:"outlined",color:"info",size:"lg",children:"TypeScript"}),a(r,{variant:"outlined",color:"neutral",size:"lg",children:"Node.js"})]})]})]})}};var O,P,j,U,K;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Design System",
    variant: "soft",
    size: "md",
    color: "accent",
    selected: false,
    disabled: false,
    removable: false
  }
}`,...(j=(P=w.parameters)==null?void 0:P.docs)==null?void 0:j.source},description:{story:"Default playground — all controls wired",...(K=(U=w.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var Q,H,X,J,Y;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>\r
      <Tag variant="filled" color="accent">Filled</Tag>\r
      <Tag variant="soft" color="accent">Soft</Tag>\r
      <Tag variant="outlined" color="accent">Outlined</Tag>\r
      <Tag variant="ghost" color="accent">Ghost</Tag>\r
    </div>
}`,...(X=(H=$.parameters)==null?void 0:H.docs)==null?void 0:X.source},description:{story:"Renders both light and dark side-by-side using TokenThemeProvider directly",...(Y=(J=$.parameters)==null?void 0:J.docs)==null?void 0:Y.description}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 8
  }}>\r
      <Tag size="sm" color="accent">Small</Tag>\r
      <Tag size="md" color="accent">Medium</Tag>\r
      <Tag size="lg" color="accent">Large</Tag>\r
    </div>
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,te;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>\r
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map(c => <Tag key={c} variant="soft" color={c}>\r
          {c.charAt(0).toUpperCase() + c.slice(1)}\r
        </Tag>)}\r
    </div>
}`,...(te=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,le;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Colors / Filled",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>\r
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map(c => <Tag key={c} variant="filled" color={c}>\r
          {c.charAt(0).toUpperCase() + c.slice(1)}\r
        </Tag>)}\r
    </div>
}`,...(le=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ce,de;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Colors / Outlined",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>\r
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map(c => <Tag key={c} variant="outlined" color={c}>\r
          {c.charAt(0).toUpperCase() + c.slice(1)}\r
        </Tag>)}\r
    </div>
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,ge;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>\r
      <Tag iconLeft={<StarIcon />} color="warning" variant="soft">Featured</Tag>\r
      <Tag iconLeft={<CheckIcon />} color="success" variant="soft">Verified</Tag>\r
      <Tag iconRight={<StarIcon />} color="info" variant="outlined">Premium</Tag>\r
      <Tag iconLeft={<StarIcon />} iconRight={<CheckIcon />} color="accent" variant="filled">\r
        Both Slots\r
      </Tag>\r
    </div>
}`,...(ge=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,fe,ve;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript", "styled-components", "Storybook", "Accessibility"]);
    return <TagGroup aria-label="Tech stack" gap="sm">\r
        {tags.map(t => <Tag key={t} removable color="accent" variant="soft" onRemove={() => setTags(prev => prev.filter(x => x !== t))}>\r
            {t}\r
          </Tag>)}\r
      </TagGroup>;
  }
}`,...(ve=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,be,ye;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const options = ["Design", "Engineering", "Product", "Marketing", "Data"];
    const [selected, setSelected] = useState<Set<string>>(new Set(["Design", "Engineering"]));
    const toggle = (label: string) => setSelected(prev => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
    return <TagGroup aria-label="Filter by department" gap="sm">\r
        {options.map(o => <Tag key={o} variant="outlined" color="accent" selected={selected.has(o)} onClick={() => toggle(o)}>\r
            {selected.has(o) && <CheckIcon />}\r
            {o}\r
          </Tag>)}\r
      </TagGroup>;
  }
}`,...(ye=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,Te,Se;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <TagGroup aria-label="Technologies" maxVisible={4} overflowLabel={n => \`+\${n} more\`} gap="sm">\r
      {["React", "Vue", "Angular", "Svelte", "Solid", "Qwik", "Astro", "Remix"].map(t => <Tag key={t} color="neutral" variant="soft">{t}</Tag>)}\r
    </TagGroup>
}`,...(Se=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var we,$e,ke;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>\r
      <Tag disabled color="accent" variant="soft">Disabled soft</Tag>\r
      <Tag disabled color="accent" variant="filled">Disabled filled</Tag>\r
      <Tag disabled color="danger" variant="outlined" removable>Can't remove</Tag>\r
    </div>
}`,...(ke=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:ke.source}}};var ze,Ce,Le;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "Kitchen Sink",
  render: () => {
    const [labels, setLabels] = useState([{
      id: 1,
      label: "Bug",
      color: "danger" as const
    }, {
      id: 2,
      label: "Feature",
      color: "success" as const
    }, {
      id: 3,
      label: "Enhancement",
      color: "info" as const
    }, {
      id: 4,
      label: "Question",
      color: "warning" as const
    }]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>\r
        <section>\r
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          opacity: 0.6
        }}>\r
            Issue labels (removable)\r
          </p>\r
          <TagGroup gap="sm">\r
            {labels.map(({
            id,
            label,
            color
          }) => <Tag key={id} variant="soft" color={color} removable iconLeft={<StarIcon />} onRemove={() => setLabels(prev => prev.filter(x => x.id !== id))}>\r
                {label}\r
              </Tag>)}\r
          </TagGroup>\r
        </section>\r
\r
        <section>\r
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          opacity: 0.6
        }}>\r
            Status badges (filled, no interaction)\r
          </p>\r
          <TagGroup gap="sm">\r
            <Tag variant="filled" color="success" size="sm" iconLeft={<CheckIcon />}>Active</Tag>\r
            <Tag variant="filled" color="warning" size="sm">Pending</Tag>\r
            <Tag variant="filled" color="danger" size="sm">Blocked</Tag>\r
            <Tag variant="filled" color="neutral" size="sm">Archived</Tag>\r
          </TagGroup>\r
        </section>\r
\r
        <section>\r
          <p style={{
          marginBottom: 8,
          fontSize: 12,
          opacity: 0.6
        }}>\r
            Large outlined tags\r
          </p>\r
          <TagGroup gap="md">\r
            <Tag variant="outlined" color="accent" size="lg">React</Tag>\r
            <Tag variant="outlined" color="info" size="lg">TypeScript</Tag>\r
            <Tag variant="outlined" color="neutral" size="lg">Node.js</Tag>\r
          </TagGroup>\r
        </section>\r
      </div>;
  }
}`,...(Le=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};const Ye=["Playground","Variants","Sizes","Colors","ColorsFilled","ColorsOutlined","WithIcons","Removable","Selectable","Overflow","Disabled","KitchenSink"];export{L as Colors,R as ColorsFilled,V as ColorsOutlined,B as Disabled,q as KitchenSink,G as Overflow,w as Playground,D as Removable,A as Selectable,C as Sizes,$ as Variants,I as WithIcons,Ye as __namedExportsOrder,Je as default};
