import{a,j as e,F as T}from"./jsx-runtime-c9381026.js";import{r as k}from"./index-8b3efc3f.js";import{I as n,i as w}from"./Icon-b2c83d77.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f7e1e14e.js";const _={title:"Components/Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"select",options:["home","User","Settings","Mail","Heart","Star","Bell","Search"]}}},s={args:{name:"heart",size:"lg"}},t={render:()=>a("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(n,{name:"heart",size:"xs"}),e(n,{name:"heart",size:"sm"}),e(n,{name:"heart",size:"md"}),e(n,{name:"heart",size:"lg"}),e(n,{name:"heart",size:"xl"})]})},o={render:()=>a("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(n,{name:"heart",size:"md",color:"primary"}),e(n,{name:"heart",size:"md",color:"#ef4444"}),e(n,{name:"heart",size:"md",color:"#3b82f6"}),e(n,{name:"heart",size:"md",color:"#10b981"}),e(n,{name:"heart",size:"md",color:"#f59e0b"}),e(n,{name:"heart",size:"md",color:"#8b5cf6"})]})},i={args:{name:"heart"}},c={args:{name:"heart"}},l={render:()=>{const m=Object.keys(w);return k.useState(m.map(r=>({value:r,label:r}))),a(T,{children:[a("div",{style:{display:"flex",gap:"5px",boxSizing:"border-box",padding:"10px"},children:[e("span",{children:"Total number of Icons"})," "," "," ",e("span",{children:m.length})]}),e("div",{style:{display:"flex",gap:20},children:e("div",{style:{display:"flex",gap:4,width:"860px",flexDirection:"column"},children:e("ul",{style:{display:"grid",gap:"1rem",margin:"0px",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",listStyle:"0",padding:"0px",listStylePosition:"unset",textAlign:"center"},children:m.map(r=>a("li",{style:{display:"flex",padding:"16px 0px",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:10},children:[e(n,{name:r}),r]},r))})})})]})}};var p,d,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "heart",
    size: 'lg'
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,h,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Icon name='heart' size='xs' />\r
      <Icon name='heart' size='sm' />\r
      <Icon name='heart' size='md' />\r
      <Icon name='heart' size='lg' />\r
      <Icon name='heart' size='xl' />\r
    </div>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,f,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      \r
      <Icon name='heart' size='md' color='primary' />\r
      <Icon name='heart' size='md' color='#ef4444' />\r
      <Icon name='heart' size='md' color='#3b82f6' />\r
      <Icon name='heart' size='md' color='#10b981' />\r
      <Icon name='heart' size='md' color='#f59e0b' />\r
      <Icon name='heart' size='md' color='#8b5cf6' />\r
    </div>
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var z,S,b;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: "heart"
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,j,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "heart"
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,D,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  //args: {name: "watch"}
  render: () => {
    const iconList = Object.keys(icons) as IconName[];
    const [filterOptions] = useState<OptionProps[]>(iconList.map((icon: any) => ({
      value: icon,
      label: icon
    })));
    return <>\r
        <div style={{
        display: 'flex',
        gap: '5px',
        boxSizing: 'border-box',
        padding: '10px'
      }}>\r
          <span>Total number of Icons</span> {' '} <span>{iconList.length}</span>\r
        </div>\r
\r
        <div style={{
        display: 'flex',
        gap: 20
      }}>\r
          <div style={{
          display: 'flex',
          gap: 4,
          width: '860px',
          flexDirection: 'column'
        }}>\r
            <ul style={{
            display: 'grid',
            gap: '1rem',
            margin: '0px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            listStyle: '0',
            padding: '0px',
            listStylePosition: 'unset',
            textAlign: 'center'
          }}>\r
\r
            {iconList.map(iconName => <li key={iconName} style={{
              display: 'flex',
              padding: '16px 0px',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: 10
            }}>\r
                  <Icon name={iconName} />\r
                  {iconName}\r
                 </li>)}\r
            </ul>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const B=["Default","Sizes","Colors","Interactive","SearchIcon","ListIcon"];export{o as Colors,s as Default,i as Interactive,l as ListIcon,c as SearchIcon,t as Sizes,B as __namedExportsOrder,_ as default};
