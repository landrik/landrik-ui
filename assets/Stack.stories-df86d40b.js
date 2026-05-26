import{j as e,a as n}from"./jsx-runtime-c9381026.js";import{a as J}from"./styled-components.browser.esm-f7e1e14e.js";import{B as M}from"./Box-ee3f246f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const V={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},q={start:"flex-start",center:"center",end:"flex-end",between:"space-between",around:"space-around",evenly:"space-evenly"},T=J.div`
  display: flex; 
  flex-direction: ${t=>t.$direction}; 
  gap: ${t=>t.theme.spacing[t.$gap]}px; 
  align-items: ${t=>V[t.$align]}; 
  justify-content: ${t=>q[t.$justify]}; 
  flex-wrap: ${t=>t.$wrap?"wrap":"nowrap"};
`,o=({children:t,direction:H="column",gap:C=4,align:_="stretch",justify:A="start",wrap:G=!1,...W})=>e(T,{$direction:H,$gap:C,$align:_,$justify:A,$wrap:G,children:t});try{o.displayName="Stack",o.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"number"}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"stretch"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Layout/Stack",parameters:{layout:"centered"},component:o,tags:["autodocs"]},r=({children:t})=>e(M,{p:4,bg:"#e0f2fe",radius:"md",style:{border:"1px solid #bae6fd"},children:t}),i={render:()=>n(o,{direction:"column",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})},a={render:()=>n(o,{direction:"row",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})},d={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 2 (8px)"}),n(o,{direction:"row",gap:2,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 4 (16px)"}),n(o,{direction:"row",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 8 (32px)"}),n(o,{direction:"row",gap:8,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]})]})},m={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align Start"}),n(o,{direction:"row",gap:4,align:"start",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align Center"}),n(o,{direction:"row",gap:4,align:"center",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align End"}),n(o,{direction:"row",gap:4,align:"end",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]})]})},l={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Start"}),n(o,{direction:"row",gap:4,justify:"start",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Center"}),n(o,{direction:"row",gap:4,justify:"center",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Between"}),n(o,{direction:"row",gap:4,justify:"between",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]})]})},c={render:()=>n(o,{direction:"row",gap:4,wrap:!0,style:{maxWidth:"400px",border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"}),e(r,{children:"Item 4"}),e(r,{children:"Item 5"}),e(r,{children:"Item 6"})]})};var s,p,h;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={4}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
    </Stack>
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,u,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap={4}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
    </Stack>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var B,D,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Gap 2 (8px)</h4>\r
        <Stack direction="row" gap={2}>\r
        <DemoBox>Item 1</DemoBox>\r
        <DemoBox>Item 2</DemoBox>\r
        <DemoBox>Item 3</DemoBox>\r
        </Stack>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Gap 4 (16px)</h4>\r
        <Stack direction="row" gap={4}>\r
        <DemoBox>Item 1</DemoBox>\r
        <DemoBox>Item 2</DemoBox>\r
        <DemoBox>Item 3</DemoBox>\r
        </Stack>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Gap 8 (32px)</h4>\r
        <Stack direction="row" gap={8}>\r
        <DemoBox>Item 1</DemoBox>\r
        <DemoBox>Item 2</DemoBox>\r
        <DemoBox>Item 3</DemoBox>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(y=(D=d.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var f,I,v;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Align Start</h4>\r
        <Stack direction="row" gap={4} align="start" style={{
        height: '120px',
        border: '1px dashed #212121'
      }}>\r
          <DemoBox>Short</DemoBox>\r
          <DemoBox>Medium<br />Height</DemoBox>\r
          <DemoBox>Tall<br />Content<br />Here</DemoBox>\r
        </Stack>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Align Center</h4>\r
        <Stack direction="row" gap={4} align="center" style={{
        height: '120px',
        border: '1px dashed #212121'
      }}>\r
          <DemoBox>Short</DemoBox>\r
          <DemoBox>Medium<br />Height</DemoBox>\r
          <DemoBox>Tall<br />Content<br />Here</DemoBox>\r
        </Stack>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Align End</h4>\r
        <Stack direction="row" gap={4} align="end" style={{
        height: '120px',
        border: '1px dashed #212121'
      }}>\r
          <DemoBox>Short</DemoBox>\r
          <DemoBox>Medium<br />Height</DemoBox>\r
          <DemoBox>Tall<br />Content<br />Here</DemoBox>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,b,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
    <div>\r
      <h4 style={{
        marginBottom: '1rem'
      }}>Justify Start</h4>\r
      <Stack direction="row" gap={4} justify="start" style={{
        border: '1px dashed #212121',
        padding: '1rem'
      }}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
      </Stack>\r
    </div>\r
    <div>\r
    <h4 style={{
        marginBottom: '1rem'
      }}>Justify Center</h4>\r
    <Stack direction="row" gap={4} justify="center" style={{
        border: '1px dashed #212121',
        padding: '1rem'
      }}>\r
    <DemoBox>Item 1</DemoBox>\r
    <DemoBox>Item 2</DemoBox>\r
    <DemoBox>Item 3</DemoBox>\r
    </Stack>\r
    </div>\r
    <div>\r
    <h4 style={{
        marginBottom: '1rem'
      }}>Justify Between</h4>\r
    <Stack direction="row" gap={4} justify="between" style={{
        border: '1px dashed #212121',
        padding: '1rem'
      }}>\r
    <DemoBox>Item 1</DemoBox>\r
    <DemoBox>Item 2</DemoBox>\r
    <DemoBox>Item 3</DemoBox>\r
    </Stack>\r
    </div>\r
  </div>
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var k,j,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap={4} wrap style={{
    maxWidth: '400px',
    border: '1px dashed #212121',
    padding: '1rem'
  }}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
      <DemoBox>Item 4</DemoBox>\r
      <DemoBox>Item 5</DemoBox>\r
      <DemoBox>Item 6</DemoBox>\r
    </Stack>
}`,...($=(j=c.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};const K=["Vertical","Horizontal","DifferentGaps","Alignment","Justify","Wrap"];export{m as Alignment,d as DifferentGaps,a as Horizontal,l as Justify,i as Vertical,c as Wrap,K as __namedExportsOrder,F as default};
