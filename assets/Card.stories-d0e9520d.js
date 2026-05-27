import{j as r,a}from"./jsx-runtime-c9381026.js";import{l as he,r as d,a as m}from"./styled-components.browser.esm-f7e1e14e.js";import{r as h,R as P}from"./index-8b3efc3f.js";import{c as b}from"./polished.esm-014be949.js";import{B as g}from"./Button-97923509.js";import{A as V}from"./Avatar-23af53a8.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-b2c83d77.js";const w=he`
  from { transform: translateY(0) scale(1); }
  to   { transform: translateY(-3px) scale(1.005); }
`,ye={elevated:d`
    background: ${({theme:e})=>e.color.neutral[200]};
    border: 1px solid ${({theme:e})=>e.color.neutral[200]};
    box-shadow:
      0 1px 3px ${({theme:e})=>e.shadows.base},
      0 4px 16px ${({theme:e})=>e.shadows.base};
  `,outlined:d`
    background: ${({theme:e})=>e.color.neutral[200]};
    border: 1.5px solid ${({theme:e})=>e.color.neutral[200]};
    box-shadow: none;
  `,filled:d`
    background: ${({theme:e})=>e.color.neutral[400]};
    border: 1px solid transparent;
    box-shadow: none;
  `,glass:d`
    background: ${({theme:e})=>e.color.neutral[400]};
    border: 1px solid ${({theme:e})=>e.color.neutral[400]};
    box-shadow:
      0 4px 24px ${({theme:e})=>e.shadows.base},
      inset 0 1px 0 ${({theme:e})=>e.shadows.base};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
  `},ve={elevated:d`
    &:hover {
      border-color: ${({theme:e})=>e.color.border.default};
      box-shadow:
        0 4px 12px ${({theme:e})=>e.shadows.base},
        0 12px 40px ${({theme:e})=>e.shadows.base};
      animation: ${w} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px) scale(1.002);
    }
  `,outlined:d`
    &:hover {
      border-color: ${({theme:e})=>e.color.border.default};
      box-shadow: 0 2px 12px ${({theme:e})=>e.shadows.base};
      animation: ${w} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `,filled:d`
    &:hover {
      background: #ece9e3;
      animation: ${w} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `,glass:d`
    &:hover {
      background: rgba(255, 255, 255, 0.68);
      border-color: rgba(255, 255, 255, 0.85);
      animation: ${w} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `},N={sm:d`
    padding: 0 ${({theme:e})=>e.spacing[3]}px;
    font-size: ${({theme:e})=>e.typography.size.xs};
    gap: ${({theme:e})=>e.spacing[4]}px;
  `,md:d`
    padding: 0 ${({theme:e})=>e.spacing[5]}px;
    font-size: ${({theme:e})=>e.typography.size.sm};
    gap: ${({theme:e})=>e.spacing[12]}px;
  `,lg:d`
    padding: 0 ${({theme:e})=>e.spacing[8]}px;
    font-size: ${({theme:e})=>e.typography.size.base};
    gap: ${({theme:e})=>e.spacing[3]}px;
  `},Ce=m.div`
  
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: ${({theme:e})=>e.color.neutral.bgDefault};
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  /* Width */
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  /* Radius */
  border-radius: ${({radius:e="lg"})=>({theme:n})=>n.radius[e]};

  /* Variant */
  ${({variant:e="elevated"})=>ye[e]}

  /* Interactive */
  ${({interactive:e,variant:n="elevated"})=>e&&d`
      cursor: pointer;
      user-select: none;
      ${ve[n]}
    `}

  /* Disabled */
  ${({disabled:e})=>e&&d`
      opacity: 0.48;
      pointer-events: none;
      cursor: not-allowed;
    `}
`,be=m.div`
  display: flex;
  flex-direction: column;
  ${e=>N[e.$size]}
  padding-top: 12px;
`,xe=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${e=>N[e.$size]}
`,we=m.div`
  
  display: flex;
  align-items: center;
  position: relative;
  ${e=>N[e.$size]};
  padding-bottom: 12px;
  padding-top: 12px;
  justify-content: ${({align:e="left"})=>({left:"flex-start",center:"center",right:"flex-end","space-between":"space-between"})[e]};

 

  &::before {
    content: '';
    display: block;
    height: 1px;
    background: ${({theme:e})=>e.color.border.subtle};
    position: absolute;
    left: 0;
    right: 0;
    top:0;
  }
`;m.div`
  padding-top: 12px;
  padding-bottom: ${e=>e.$size==="sm"?"12px":e.$size==="lg"?"28px":"20px"};
  
  border-top: 1px solid ${({theme:e})=>e.color.border.subtle};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  justify-content: ${({align:e="left"})=>({left:"flex-start",center:"center",right:"flex-end","space-between":"space-between"})[e]};
`;const Be=m.div`
  position: relative;
  width: 100%;
  height: ${({theme:e,$height:n})=>n!==void 0?`${e.spacing[n]}px`:void 0};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({$objectFit:e="cover"})=>e};
    display: block;
    transition: transform 0.4s ease;
  }
`,ze=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.color.border.default};
  margin: 0;
`,$e={default:d`
    background: ${e=>b(.2,e.theme.color.neutral.bgDefault)};
    color: ${({theme:e})=>e.color.neutral.bgDefault};
  `,primary:d`
    background: ${e=>b(.2,e.theme.color.accent.bgDefault)};
    color: ${({theme:e})=>e.color.accent.bgDefault};
  `,success:d`
    background: ${({theme:e})=>b(.2,e.color.success.bgDefault)};
    color: ${({theme:e})=>e.color.success.bgDefault};
  `,warning:d`
    background: ${e=>b(.2,e.theme.color.warning.bgDefault)};
    color: ${({theme:e})=>e.color.warning.bgDefault};
  `,danger:d`
    background: ${e=>b(.2,e.theme.color.danger.bgDefault)};
    color: ${({theme:e})=>e.color.danger.bgDefault};
  `},Se=m.span`
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  line-height: 1.5;

  ${({color:e="default"})=>$e[e]}
`,De=m.h3`
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.color.accent.bgDefault};
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
`,_e=m.p`
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.6;
`,o=h.forwardRef(({variant:e="elevated",size:n="md",radius:c="lg",interactive:p=!1,disabled:y=!1,fullWidth:A=!1,children:M,...ue},me)=>{const ge=P.Children.map(M,C=>P.isValidElement(C)&&[f,s,u,v,R,t,l,i].some(fe=>C.type===fe)?P.cloneElement(C,{size:n}):C);return r(Ce,{ref:me,$variant:e,$size:n,$radius:c,$interactive:p,$disabled:y,$fullWidth:A,role:p?"button":void 0,tabIndex:p&&!y?0:void 0,"aria-disabled":y||void 0,...ue,children:ge})});o.displayName="Card";const f=h.forwardRef(({children:e,size:n="md",...c},p)=>r(be,{ref:p,$size:n,...c,children:e}));f.displayName="CardHeader";const s=h.forwardRef(({children:e,size:n="md",...c},p)=>r(xe,{ref:p,$size:n,...c,children:e}));s.displayName="CardBody";const u=h.forwardRef(({align:e="left",children:n,size:c="md",...p},y)=>r(we,{ref:y,$align:e,$size:c,...p,children:n}));u.displayName="CardFooter";const v=h.forwardRef(({src:e,alt:n,height:c,objectFit:p,size:y,...A},M)=>r(Be,{ref:M,$height:c,$objectFit:p,...A,children:r("img",{src:e,alt:n,loading:"lazy"})}));v.displayName="CardMedia";const R=h.forwardRef((e,n)=>r(ze,{ref:n,...e}));R.displayName="CardDivider";const t=h.forwardRef(({color:e="default",children:n,...c},p)=>r(Se,{ref:p,$color:e,...c,children:n}));t.displayName="CardBadge";const l=h.forwardRef(({children:e,...n},c)=>r(De,{ref:c,...n,children:e}));l.displayName="CardTitle";const i=h.forwardRef(({children:e,...n},c)=>r(_e,{ref:c,...n,children:e}));i.displayName="CardDescription";try{o.displayName="Card",o.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"elevated"},description:"Visual style variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"outlined"'},{value:'"elevated"'},{value:'"glass"'}]}},size:{defaultValue:{value:"md"},description:"Controls internal padding of all sub-components",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},radius:{defaultValue:{value:"lg"},description:"Border radius preset",name:"radius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'},{value:'"full"'}]}},interactive:{defaultValue:{value:"false"},description:"Enables hover/focus lift interaction",name:"interactive",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"Disables the card visually and blocks pointer events",name:"disabled",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"Stretches the card to 100% of its container width",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{f.displayName="CardHeader",f.__docgenInfo={description:"",displayName:"CardHeader",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{s.displayName="CardBody",s.__docgenInfo={description:"",displayName:"CardBody",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{u.displayName="CardFooter",u.__docgenInfo={description:"",displayName:"CardFooter",props:{$align:{defaultValue:{value:'"left"'},description:"Horizontal alignment of footer children",name:"$align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"space-between"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{v.displayName="CardMedia",v.__docgenInfo={description:"",displayName:"CardMedia",props:{src:{defaultValue:null,description:"Image source URL — forwarded to the inner <img> only",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Accessible alt text for the inner <img>",name:"alt",required:!0,type:{name:"string"}},$height:{defaultValue:{value:"200"},description:"Height of the media area in px (number) or any CSS unit (string)",name:"$height",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'}]}},$objectFit:{defaultValue:{value:'"cover"'},description:"CSS object-fit for the image",name:"$objectFit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"cover"'},{value:'"contain"'},{value:'"fill"'},{value:'"scale-down"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{R.displayName="CardDivider",R.__docgenInfo={description:"",displayName:"CardDivider",props:{}}}catch{}try{t.displayName="CardBadge",t.__docgenInfo={description:"",displayName:"CardBadge",props:{color:{defaultValue:{value:"default"},description:"Color scheme",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"primary"'},{value:'"default"'}]}}}}}catch{}try{l.displayName="CardTitle",l.__docgenInfo={description:"",displayName:"CardTitle",props:{}}}catch{}try{i.displayName="CardDescription",i.__docgenInfo={description:"",displayName:"CardDescription",props:{}}}catch{}const x=m.div`display: flex; align-items: center; gap: 10px;`,pe=m.div`display: grid; grid-template-columns: repeat(${({cols:e=3})=>e}, 1fr); gap: 20px; padding: 24px; background: #f0ede7; border-radius: 12px;`,ke=m.div`background: linear-gradient(135deg, #c9622f 0%, #7c3c1e 50%, #1a0f08 100%); padding: 32px; border-radius: 12px;`,je={title:"Components/Card",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible compound Card component with sub-components for Header, Body, Footer, Media, Badge, Title, and Description. Supports multiple visual variants and interactive states."}}},argTypes:{variant:{control:"select",options:["elevated","outlined","filled","glass"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Controls internal padding"},radius:{control:"select",options:["none","sm","md","lg","xl","full"],description:"Border radius"},interactive:{control:"boolean",description:"Enables hover/focus interactions"},disabled:{control:"boolean",description:"Disables the card visually and functionally"},fullWidth:{control:"boolean",description:"Stretches card to 100% width"}}},B={args:{variant:"elevated",size:"md",radius:"lg"},render:e=>r("div",{style:{maxWidth:360},children:a(o,{...e,children:[a(f,{children:[r(l,{children:"Design System Card"}),r(i,{children:"A versatile card component for every layout need."})]}),r(s,{children:r("p",{children:"Cards group related content and actions about a single subject. They're flexible and can contain almost any kind of content."})}),a(u,{align:"space-between",children:[r(g,{size:"sm",children:"Confirm"}),r(g,{size:"sm",variant:"outline",children:"Cancel"})]})]})})},z={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:24,background:"#f0ede7",borderRadius:12},children:[["elevated","outlined","filled"].map(e=>r(o,{variant:e,style:{maxWidth:400},children:a(s,{children:[r(t,{color:"default",children:e}),a(l,{children:[e.charAt(0).toUpperCase()+e.slice(1)," Card"]}),a(i,{children:["This is the ",r("strong",{children:e})," variant. Each variant carries a distinct visual weight suited to different contexts."]})]})},e)),r(ke,{children:r(o,{variant:"glass",style:{maxWidth:400},children:a(s,{children:[r(t,{color:"default",children:"glass"}),r(l,{children:"Glass Card"}),r(i,{children:"The glass variant uses backdrop-filter blur for a frosted effect — looks best on rich backgrounds."})]})})})]}),parameters:{controls:{disable:!0}}},$={render:()=>a("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[a(o,{style:{width:320},children:[r(v,{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&auto=format",alt:"Mountain landscape",height:200}),a(f,{children:[a(x,{children:[r(t,{color:"success",children:"Travel"}),r(t,{color:"default",children:"Photography"})]}),r(l,{children:"Alpine Solitude"})]}),r(s,{children:r(i,{children:"Discover the serene beauty of high-altitude landscapes, where silence speaks louder than words."})}),a(u,{align:"space-between",children:[r("span",{style:{fontSize:"0.8rem",color:tokens.color.textMuted,fontFamily:tokens.font.body},children:"5 min read"}),r(g,{size:"sm",children:"Read More"})]})]}),a(o,{style:{width:320},children:[r(v,{src:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=640&auto=format",alt:"Colorful food bowl",height:200}),a(f,{children:[r(t,{color:"warning",children:"Recipe"}),r(l,{children:"Summer Grain Bowl"})]}),r(s,{children:r(i,{children:"A vibrant, nourishing bowl packed with roasted vegetables, ancient grains, and a tahini drizzle."})}),r(u,{align:"right",children:r(g,{size:"sm",children:"View Recipe"})})]})]}),parameters:{controls:{disable:!0}}},S={render:()=>r(pe,{cols:3,children:[{icon:"⚡",title:"Fast Delivery",desc:"Ships within 24 hours, anywhere in the world.",badge:"popular",badgeColor:"primary"},{icon:"🔒",title:"Secure Payments",desc:"256-bit encryption on every transaction.",badge:"new",badgeColor:"success"},{icon:"♻️",title:"Eco Packaging",desc:"100% recyclable materials, carbon neutral.",badge:"beta",badgeColor:"warning"}].map(e=>r(o,{interactive:!0,variant:"elevated",onClick:()=>alert(`Clicked: ${e.title}`),children:a(s,{children:[r("div",{style:{fontSize:28},children:e.icon}),r("div",{children:r(t,{color:e.badgeColor,children:e.badge})}),r(l,{children:e.title}),r(i,{children:e.desc})]})},e.title))}),parameters:{controls:{disable:!0}}},D={render:()=>a("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[a(o,{style:{width:300},children:[a(s,{children:[a(x,{children:[r(V,{size:"md",initials:"JA"}),a("div",{children:[r(l,{style:{fontSize:"1rem"},children:"Jordan Alvarez"}),r(i,{style:{fontSize:"0.8rem"},children:"Senior Product Designer"})]})]}),r(i,{children:"Crafting delightful digital experiences at the intersection of strategy and aesthetics. Open to collaborations."}),a(x,{children:[r(t,{color:"primary",children:"Figma"}),r(t,{children:"React"}),r(t,{children:"Motion"})]})]}),a(u,{align:"space-between",children:[r(g,{size:"sm",children:"Message"}),r(g,{size:"sm",variant:"outline",children:"Follow"})]})]}),a(o,{variant:"filled",style:{width:300},children:[a(s,{children:[a(x,{children:[r(V,{size:"md",initials:"ML"}),a("div",{children:[r(l,{style:{fontSize:"1rem"},children:"Morgan Lee"}),r(i,{style:{fontSize:"0.8rem"},children:"Full Stack Engineer"})]})]}),r(i,{children:"Building scalable systems and elegant APIs. Passionate about open source and developer tooling."}),a(x,{children:[r(t,{color:"success",children:"TypeScript"}),r(t,{children:"Go"}),r(t,{children:"K8s"})]})]}),a(u,{align:"space-between",children:[r(g,{size:"sm",children:"Message"}),r(g,{size:"sm",variant:"outline",children:"Follow"})]})]})]}),parameters:{controls:{disable:!0}}},_={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:20,maxWidth:400},children:["sm","md","lg"].map(e=>a(o,{size:e,children:[a(f,{children:[r(t,{children:e.toUpperCase()}),a(l,{children:[e==="sm"?"Compact":e==="md"?"Default":"Spacious"," Card "]})]}),r(s,{children:a(i,{children:[" This is the ",r("strong",{children:e})," size. Padding adjusts proportionally across header, body, and footer."]})}),r(u,{align:"right",children:r(g,{size:"sm",children:"Action"})})]},e))}),parameters:{controls:{disable:!0}}},k={render:()=>a("div",{style:{display:"flex",gap:20,maxWidth:720},children:[a(o,{interactive:!0,disabled:!0,style:{width:300},children:[a(f,{children:[r(t,{color:"danger",children:"Unavailable"}),r(l,{children:"Disabled Card"})]}),r(s,{children:r(i,{children:"This card is currently disabled. Interactions and hover effects are suppressed."})}),r(u,{align:"right",children:r(g,{size:"sm",disabled:!0,children:"Locked"})})]}),a(o,{interactive:!0,style:{width:300},children:[a(f,{children:[r(t,{color:"success",children:"Available"}),r(l,{children:"Active Card"})]}),r(s,{children:r(i,{children:"This card is enabled for comparison. Hover over it to see interactive effects."})}),r(u,{align:"right",children:r(g,{size:"sm",children:"Go"})})]})]}),parameters:{controls:{disable:!0}}},T={render:()=>r("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{plan:"Starter",price:"$9",period:"/mo",desc:"Perfect for individuals and small projects.",features:["5 Projects","10GB Storage","Community Support"],variant:"outlined",badge:void 0},{plan:"Pro",price:"$29",period:"/mo",desc:"For growing teams who need more power.",features:["Unlimited Projects","100GB Storage","Priority Support","Analytics"],variant:"elevated",badge:"Most Popular"},{plan:"Enterprise",price:"$99",period:"/mo",desc:"Advanced tools for large organizations.",features:["Everything in Pro","1TB Storage","24/7 Support","SLA"],variant:"filled",badge:void 0}].map(e=>a(o,{variant:e.variant,style:{width:240},children:[a(f,{children:[e.badge&&r(t,{color:"primary",children:e.badge}),r(l,{children:e.plan}),a("div",{style:{display:"flex",alignItems:"baseline",gap:2,fontFamily:tokens.font.heading},children:[r("span",{style:{fontSize:"2rem",fontWeight:700},children:e.price}),r("span",{style:{fontSize:"0.875rem",color:tokens.color.textMuted},children:e.period})]})]}),a(s,{children:[r(i,{children:e.desc}),r("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:6},children:e.features.map(n=>r("li",{style:{fontSize:"0.8125rem",color:tokens.color.textMuted,fontFamily:tokens.font.body},children:n},n))})]}),r(u,{children:a(g,{size:"sm",style:{width:"100%",justifyContent:"center"},children:["Choose ",e.plan," "]})})]},e.plan))}),parameters:{controls:{disable:!0}}},F={render:()=>r(pe,{cols:3,children:["none","sm","md","lg","xl"].map(e=>r(o,{radius:e,variant:"elevated",children:a(s,{children:[a(t,{children:["radius: ",e]}),a(i,{children:[" Border radius set to ",r("strong",{children:e}),"."]})]})},e))}),parameters:{controls:{disable:!0}}};var W,H,j;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    size: "md",
    radius: "lg"
  },
  render: args => <div style={{
    maxWidth: 360
  }}>\r
      <Card {...args}>\r
        <CardHeader>\r
          <CardTitle>Design System Card</CardTitle>\r
          <CardDescription>A versatile card component for every layout need.</CardDescription>\r
        </CardHeader>\r
        <CardBody>\r
          <p>Cards group related content and actions about a single subject. They're flexible and can contain almost any kind of content.\r
          </p>\r
        </CardBody>\r
        <CardFooter align="space-between">\r
          <Button size='sm'>Confirm</Button>\r
          <Button size='sm' variant='outline'>Cancel</Button>\r
        </CardFooter>\r
      </Card>\r
    </div>
}`,...(j=(H=B.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var G,I,E;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 24,
    background: "#f0ede7",
    borderRadius: 12
  }}>\r
    {(["elevated", "outlined", "filled"] as const).map(variant => <Card key={variant} variant={variant} style={{
      maxWidth: 400
    }}>\r
        <CardBody>\r
        <CardBadge color="default">{variant}</CardBadge>\r
        <CardTitle>\r
        {variant.charAt(0).toUpperCase() + variant.slice(1)} Card\r
        </CardTitle>\r
        <CardDescription>\r
        This is the <strong>{variant}</strong> variant. Each variant\r
        carries a distinct visual weight suited to different contexts.\r
        </CardDescription>\r
        </CardBody>\r
      </Card>)}\r
    <GlassBackground>\r
      <Card variant="glass" style={{
        maxWidth: 400
      }}>\r
        <CardBody>\r
          <CardBadge color="default">glass</CardBadge>\r
          <CardTitle>Glass Card</CardTitle>\r
          <CardDescription>\r
          The glass variant uses backdrop-filter blur for a frosted effect —\r
          looks best on rich backgrounds.\r
          </CardDescription>\r
        </CardBody>\r
      </Card>\r
    </GlassBackground>\r
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(I=z.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var q,L,U;$.parameters={...$.parameters,docs:{...(q=$.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  }}>\r
    <Card style={{
      width: 320
    }}>\r
      <CardMedia src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&auto=format" alt="Mountain landscape" height={200} />\r
      <CardHeader>\r
        <Row>\r
          <CardBadge color="success">Travel</CardBadge>\r
          <CardBadge color="default">Photography</CardBadge>\r
        </Row>\r
        <CardTitle>Alpine Solitude</CardTitle>\r
      </CardHeader>\r
      <CardBody>\r
        <CardDescription>\r
Discover the serene beauty of high-altitude landscapes, where silence\r
speaks louder than words.\r
        </CardDescription>\r
      </CardBody>\r
      <CardFooter align="space-between">\r
        <span style={{
          fontSize: "0.8rem",
          color: tokens.color.textMuted,
          fontFamily: tokens.font.body
        }}>\r
5 min read\r
        </span>\r
        <Button size='sm'>Read More</Button>\r
      </CardFooter>\r
    </Card>\r
\r
\r
  <Card style={{
      width: 320
    }}>\r
    <CardMedia src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=640&auto=format" alt="Colorful food bowl" height={200} />\r
    <CardHeader>\r
      <CardBadge color="warning">Recipe</CardBadge>\r
      <CardTitle>Summer Grain Bowl</CardTitle>\r
    </CardHeader>\r
    <CardBody>\r
      <CardDescription>\r
        A vibrant, nourishing bowl packed with roasted vegetables, ancient\r
        grains, and a tahini drizzle.\r
      </CardDescription>\r
    </CardBody>\r
    <CardFooter align="right">\r
      <Button size='sm'>View Recipe</Button>\r
    </CardFooter>\r
  </Card>\r
  </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(L=$.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var Y,J,O;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Grid cols={3}>\r
    {[{
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Ships within 24 hours, anywhere in the world.",
      badge: "popular",
      badgeColor: "primary" as const
    }, {
      icon: "🔒",
      title: "Secure Payments",
      desc: "256-bit encryption on every transaction.",
      badge: "new",
      badgeColor: "success" as const
    }, {
      icon: "♻️",
      title: "Eco Packaging",
      desc: "100% recyclable materials, carbon neutral.",
      badge: "beta",
      badgeColor: "warning" as const
    }].map(item => <Card key={item.title} interactive variant="elevated" onClick={() => alert(\`Clicked: \${item.title}\`)}>\r
      <CardBody>\r
        <div style={{
          fontSize: 28
        }}>{item.icon}</div>\r
        <div>\r
          <CardBadge color={item.badgeColor}>{item.badge}</CardBadge>\r
        </div>\r
        <CardTitle>{item.title}</CardTitle>\r
        <CardDescription>{item.desc}</CardDescription>\r
      </CardBody>\r
    </Card>)}\r
  </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(J=S.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var K,Q,X;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  }}>\r
  <Card style={{
      width: 300
    }}>\r
    <CardBody>\r
      <Row>\r
        <Avatar size='md' initials="JA" />\r
        <div>\r
          <CardTitle style={{
              fontSize: "1rem"
            }}>Jordan Alvarez</CardTitle>\r
          <CardDescription style={{
              fontSize: "0.8rem"
            }}>\r
          Senior Product Designer\r
          </CardDescription>\r
        </div>\r
      </Row>\r
      <CardDescription>\r
      Crafting delightful digital experiences at the intersection of\r
      strategy and aesthetics. Open to collaborations.\r
      </CardDescription>\r
      <Row>\r
        <CardBadge color="primary">Figma</CardBadge>\r
        <CardBadge>React</CardBadge>\r
        <CardBadge>Motion</CardBadge>\r
      </Row>\r
    </CardBody>\r
    <CardFooter align="space-between">\r
      <Button size='sm'>Message</Button>\r
      <Button size='sm' variant='outline'>Follow</Button>\r
    </CardFooter>\r
  </Card>\r
  <Card variant="filled" style={{
      width: 300
    }}>\r
    <CardBody>\r
      <Row>\r
        <Avatar size='md' initials="ML" />\r
        <div>\r
          <CardTitle style={{
              fontSize: "1rem"
            }}>Morgan Lee</CardTitle>\r
          <CardDescription style={{
              fontSize: "0.8rem"
            }}>\r
            Full Stack Engineer\r
          </CardDescription>\r
        </div>\r
      </Row>\r
      <CardDescription>\r
        Building scalable systems and elegant APIs. Passionate about\r
        open source and developer tooling.\r
      </CardDescription>\r
      <Row>\r
        <CardBadge color="success">TypeScript</CardBadge>\r
        <CardBadge>Go</CardBadge>\r
        <CardBadge>K8s</CardBadge>\r
      </Row>\r
    </CardBody>\r
    <CardFooter align="space-between">\r
      <Button size='sm'>Message</Button>\r
      <Button size='sm' variant='outline'>Follow</Button>\r
    </CardFooter>\r
  </Card>\r
  </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 400
  }}>\r
      {(["sm", "md", "lg"] as const).map(size => <Card key={size} size={size}>\r
          <CardHeader>\r
            <CardBadge>{size.toUpperCase()}</CardBadge>\r
            <CardTitle>{size === "sm" ? "Compact" : size === "md" ? "Default" : "Spacious"} Card </CardTitle>\r
          </CardHeader>\r
          <CardBody>\r
            <CardDescription> This is the <strong>{size}</strong> size. Padding adjusts proportionally across header, body, and footer.</CardDescription>\r
          </CardBody>\r
          <CardFooter align="right">\r
            <Button size='sm'>Action</Button>\r
          </CardFooter>\r
        </Card>)}\r
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20,
    maxWidth: 720
  }}>\r
    <Card interactive disabled style={{
      width: 300
    }}>\r
      <CardHeader>\r
        <CardBadge color="danger">Unavailable</CardBadge>\r
        <CardTitle>Disabled Card</CardTitle>\r
      </CardHeader>\r
      <CardBody>\r
        <CardDescription>\r
        This card is currently disabled. Interactions and hover effects are\r
        suppressed.\r
        </CardDescription>\r
      </CardBody>\r
      <CardFooter align="right">\r
        <Button size='sm' disabled>Locked</Button>\r
      </CardFooter>\r
    </Card>\r
    <Card interactive style={{
      width: 300
    }}>\r
      <CardHeader>\r
        <CardBadge color="success">Available</CardBadge>\r
        <CardTitle>Active Card</CardTitle>\r
      </CardHeader>\r
      <CardBody>\r
        <CardDescription>\r
          This card is enabled for comparison. Hover over it to see\r
          interactive effects.\r
        </CardDescription>\r
      </CardBody>\r
      <CardFooter align="right">\r
        <Button size='sm'>Go</Button>\r
      </CardFooter>\r
    </Card>\r
  </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,de,oe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  }}>\r
      {[{
      plan: "Starter",
      price: "$9",
      period: "/mo",
      desc: "Perfect for individuals and small projects.",
      features: ["5 Projects", "10GB Storage", "Community Support"],
      variant: "outlined" as const,
      badge: undefined
    }, {
      plan: "Pro",
      price: "$29",
      period: "/mo",
      desc: "For growing teams who need more power.",
      features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Analytics"],
      variant: "elevated" as const,
      badge: "Most Popular"
    }, {
      plan: "Enterprise",
      price: "$99",
      period: "/mo",
      desc: "Advanced tools for large organizations.",
      features: ["Everything in Pro", "1TB Storage", "24/7 Support", "SLA"],
      variant: "filled" as const,
      badge: undefined
    }].map(item => <Card key={item.plan} variant={item.variant} style={{
      width: 240
    }}>\r
        <CardHeader>\r
        {item.badge && <CardBadge color="primary">{item.badge}</CardBadge>}\r
        <CardTitle>{item.plan}</CardTitle>\r
        <div style={{
          display: "flex",
          alignItems: "baseline",
          gap: 2,
          fontFamily: tokens.font.heading
        }}>\r
        <span style={{
            fontSize: "2rem",
            fontWeight: 700
          }}>{item.price}</span>\r
        <span style={{
            fontSize: "0.875rem",
            color: tokens.color.textMuted
          }}>\r
        {item.period}\r
        </span>\r
        </div>\r
        </CardHeader>\r
        <CardBody>\r
          <CardDescription>{item.desc}</CardDescription>\r
          <ul style={{
          margin: 0,
          paddingLeft: 18,
          display: "flex",
          flexDirection: "column",
          gap: 6
        }}>\r
            {item.features.map(f => <li key={f} style={{
            fontSize: "0.8125rem",
            color: tokens.color.textMuted,
            fontFamily: tokens.font.body
          }}>\r
              {f}\r
              </li>)}\r
          </ul>\r
        </CardBody>\r
        <CardFooter>\r
          <Button size='sm' style={{
          width: "100%",
          justifyContent: "center"
        }}>Choose {item.plan} </Button>\r
        </CardFooter>\r
      </Card>)}\r
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var se,le,ce;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Grid cols={3}>\r
      {(["none", "sm", "md", "lg", "xl"] as const).map(r => <Card key={r} radius={r} variant="elevated">\r
        <CardBody>\r
          <CardBadge>radius: {r}</CardBadge>\r
          <CardDescription> Border radius set to <strong>{r}</strong>.</CardDescription>\r
        </CardBody>\r
      </Card>)}\r
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(le=F.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Ge=["Default","AllVariants","WithMedia","Interactive","ProfileCard","Sizes","Disabled","PricingCard","RadiusVariants"];export{z as AllVariants,B as Default,k as Disabled,S as Interactive,T as PricingCard,D as ProfileCard,F as RadiusVariants,_ as Sizes,$ as WithMedia,Ge as __namedExportsOrder,je as default};
