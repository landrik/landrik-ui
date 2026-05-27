import{j as e,a as d}from"./jsx-runtime-c9381026.js";import{r as i,a as v}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const h={sm:i`max-width: 640px;`,md:i`max-width: 768px;`,lg:i`max-width: 1024px;`,xl:i`max-width: 1280px;`,full:i`max-width: 100%;`},x=v.div`

  width: 100%; 
  ${n=>n.$px!==void 0&&`
    padding-left: ${n.theme.spacing[n.$px]}px;
    padding-right: ${n.theme.spacing[n.$px]}px;
  `} 

  ${n=>n.$center&&`
    margin-left: auto;
    margin-right: auto;
  `}
  ${n=>h[n.$size]}

`,r=({children:n,size:p="lg",center:g=!0,px:f=4,...y})=>e(x,{$size:p,$center:g,$px:f,children:n});try{r.displayName="Container",r.__docgenInfo={description:"",displayName:"Container",props:{size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},center:{defaultValue:{value:"true"},description:"",name:"center",required:!1,type:{name:"boolean | undefined"}},px:{defaultValue:{value:"4"},description:"",name:"px",required:!1,type:{name:"number | undefined"}}}}}catch{}const $={title:"Layout/Container",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e("div",{style:{background:"#f3f4f6"},children:e(r,{children:e("div",{style:{background:"#e0f2fe",padding:"2rem",borderRadius:"0.5rem"},children:"Container content"})})})},t={render:()=>d("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",background:"#f3f4f6",padding:"2rem"},children:[d("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Small (640px)"}),e(r,{size:"sm",children:e("div",{style:{background:"#e0f2fe",padding:"1rem",borderRadius:"0.5rem"},children:"Small container content"})})]}),d("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Medium (768px)"}),e(r,{size:"md",children:e("div",{style:{background:"#dbeafe",padding:"1rem",borderRadius:"0.5rem"},children:"Medium container content"})})]}),d("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"Large (1024px)"}),e(r,{size:"lg",children:e("div",{style:{background:"#bae6fd",padding:"1rem",borderRadius:"0.5rem"},children:"Large container content"})})]}),d("div",{children:[e("h4",{style:{marginBottom:"1rem"},children:"XL (1280px)"}),e(r,{size:"xl",children:e("div",{style:{background:"#7dd3fc",padding:"1rem",borderRadius:"0.5rem"},children:"XL container content"})})]})]})};var o,l,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#f3f4f6'
  }}>\r
      <Container>\r
        <div style={{
        background: '#e0f2fe',
        padding: '2rem',
        borderRadius: '0.5rem'
      }}>\r
          Container content\r
        </div>\r
      </Container>\r
    </div>
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    background: '#f3f4f6',
    padding: '2rem'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Small (640px)</h4>\r
        <Container size="sm">\r
          <div style={{
          background: '#e0f2fe',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>\r
          Small container content\r
          </div>\r
        </Container>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Medium (768px)</h4>\r
        <Container size="md">\r
          <div style={{
          background: '#dbeafe',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>\r
          Medium container content\r
          </div>\r
        </Container>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Large (1024px)</h4>\r
        <Container size="lg">\r
          <div style={{
          background: '#bae6fd',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>\r
          Large container content\r
          </div>\r
        </Container>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>XL (1280px)</h4>\r
        <Container size="xl">\r
          <div style={{
          background: '#7dd3fc',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>\r
          XL container content\r
          </div>\r
        </Container>\r
      </div>\r
    </div>
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["Default","AllSizes"];export{t as AllSizes,a as Default,R as __namedExportsOrder,$ as default};
