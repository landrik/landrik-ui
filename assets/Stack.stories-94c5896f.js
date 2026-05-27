import{j as e,a as n}from"./jsx-runtime-c9381026.js";import{a as J}from"./styled-components.browser.esm-f7e1e14e.js";import{B as M}from"./Box-833ae923.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const V={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},q={start:"flex-start",center:"center",end:"flex-end",between:"space-between",around:"space-around",evenly:"space-evenly"},T=J.div`
  display: flex; 
  flex-direction: ${o=>o.$direction}; 
  gap: ${({theme:o,$gap:s=0})=>o.spacing[s]}px; 
  align-items: ${o=>V[o.$align]}; 
  justify-content: ${o=>q[o.$justify]}; 
  flex-wrap: ${o=>o.$wrap?"wrap":"nowrap"};
`,t=({children:o,direction:s="column",gap:C="4",align:_="stretch",justify:A="start",wrap:G=!1,...W})=>e(T,{$direction:s,$gap:C,$align:_,$justify:A,$wrap:G,children:o});try{t.displayName="Stack",t.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"0"'},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'}]}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const F={title:"Layout/Stack",parameters:{layout:"centered"},component:t,tags:["autodocs"]},r=({children:o})=>e(M,{p:4,bg:"#e0f2fe",radius:"md",style:{border:"1px solid #bae6fd"},children:o}),a={render:()=>n(t,{direction:"column",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})},i={render:()=>n(t,{direction:"row",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})},d={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 2 (8px)"}),n(t,{direction:"row",gap:2,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 4 (16px)"}),n(t,{direction:"row",gap:4,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Gap 8 (32px)"}),n(t,{direction:"row",gap:8,children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]})]})},m={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align Start"}),n(t,{direction:"row",gap:4,align:"start",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align Center"}),n(t,{direction:"row",gap:4,align:"center",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Align End"}),n(t,{direction:"row",gap:4,align:"end",style:{height:"120px",border:"1px dashed #212121"},children:[e(r,{children:"Short"}),n(r,{children:["Medium",e("br",{}),"Height"]}),n(r,{children:["Tall",e("br",{}),"Content",e("br",{}),"Here"]})]})]})]})},l={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Start"}),n(t,{direction:"row",gap:4,justify:"start",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Center"}),n(t,{direction:"row",gap:4,justify:"center",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]}),n("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Justify Between"}),n(t,{direction:"row",gap:4,justify:"between",style:{border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]})]})]})},c={render:()=>n(t,{direction:"row",gap:4,wrap:!0,style:{maxWidth:"400px",border:"1px dashed #212121",padding:"1rem"},children:[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"}),e(r,{children:"Item 4"}),e(r,{children:"Item 5"}),e(r,{children:"Item 6"})]})};var p,h,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={4}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
    </Stack>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,g,B;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap={4}>\r
      <DemoBox>Item 1</DemoBox>\r
      <DemoBox>Item 2</DemoBox>\r
      <DemoBox>Item 3</DemoBox>\r
    </Stack>
}`,...(B=(g=i.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var D,y,v;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,I,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var b,w,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,H,$;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...($=(H=c.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const K=["Vertical","Horizontal","DifferentGaps","Alignment","Justify","Wrap"];export{m as Alignment,d as DifferentGaps,i as Horizontal,l as Justify,a as Vertical,c as Wrap,K as __namedExportsOrder,F as default};
