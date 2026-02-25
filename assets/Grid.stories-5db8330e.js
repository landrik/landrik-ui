import{j as r,a as o}from"./jsx-runtime-c9381026.js";import{a as C}from"./styled-components.browser.esm-f7e1e14e.js";import{B as _}from"./Box-ee3f246f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const w=C.div`
  display: grid;

  ${e=>{if(typeof e.$columns=="number")return`grid-template-columns: repeat(${e.$columns}, 1fr);`;{const a=e.$minColumnWidth||"250px";return`grid-template-columns: repeat(${e.$columns}, minmax(${a}, 1fr));`}}}

  ${e=>e.$gap!==void 0&&`gap: ${e.theme.spacing[e.$gap]}px;`}
  ${e=>e.$rowGap!==void 0&&`row-gap: ${e.theme.spacing[e.$rowGap]}px;`}
  ${e=>e.$columnGap!==void 0&&`column-gap: ${e.theme.spacing[e.$columnGap]}px;`}
`,n=({children:e,columns:a=3,minColumnWidth:$,gap:f=4,rowGap:y,columnGap:x,...b})=>r(w,{$columns:a,$minColumnWidth:$,$gap:f,$rowGap:y,$columnGap:x,children:e});try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:{value:"3"},description:"",name:"columns",required:!1,type:{name:'number | "auto-fit" | "auto-fill"'}},minColumnWidth:{defaultValue:null,description:"",name:"minColumnWidth",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"number"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"number"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"number"}}}}}catch{}const T={title:"Layout/Grid",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t=({children:e})=>r(_,{p:4,bg:"#e0f2fe",radius:"md",style:{border:"1px solid #212121",textAlign:"center"},children:e}),m={render:()=>o(n,{columns:2,gap:4,children:[r(t,{children:"Item 1"}),r(t,{children:"Item 2"}),r(t,{children:"Item 3"}),r(t,{children:"Item 4"})]})},i={render:()=>o(n,{columns:3,gap:4,children:[r(t,{children:"Item 1"}),r(t,{children:"Item 2"}),r(t,{children:"Item 3"}),r(t,{children:"Item 4"}),r(t,{children:"Item 5"}),r(t,{children:"Item 6"})]})},d={render:()=>o(n,{columns:4,gap:4,children:[r(t,{children:"1"}),r(t,{children:"2"}),r(t,{children:"3"}),r(t,{children:"4"}),r(t,{children:"5"})]})};var s,l,c;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Grid columns={2} gap={4}>\r
      <GridItem>Item 1</GridItem>\r
      <GridItem>Item 2</GridItem>\r
      <GridItem>Item 3</GridItem>\r
      <GridItem>Item 4</GridItem>\r
    </Grid>
}`,...(c=(l=m.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,G;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap={4}>\r
      <GridItem>Item 1</GridItem>\r
      <GridItem>Item 2</GridItem>\r
      <GridItem>Item 3</GridItem>\r
      <GridItem>Item 4</GridItem>\r
      <GridItem>Item 5</GridItem>\r
      <GridItem>Item 6</GridItem>\r
    </Grid>
}`,...(G=(p=i.parameters)==null?void 0:p.docs)==null?void 0:G.source}}};var I,g,h;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid columns={4} gap={4}>\r
      <GridItem>1</GridItem>\r
      <GridItem>2</GridItem>\r
      <GridItem>3</GridItem>\r
      <GridItem>4</GridItem>\r
      <GridItem>5</GridItem>\r
    </Grid>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const j=["TwoColumns","ThreeColumns","FourColumns"];export{d as FourColumns,i as ThreeColumns,m as TwoColumns,j as __namedExportsOrder,T as default};
