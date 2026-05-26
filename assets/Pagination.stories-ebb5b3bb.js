import{a as n,j as r}from"./jsx-runtime-c9381026.js";import{r as E}from"./index-8b3efc3f.js";import{a as S,r as m}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const T=S.nav`
  display: flex; 
  align-items: center; 
  gap: ${e=>e.theme.spacing[1]}px;
`,F={sm:m`min-width: 32px; height: 32px; padding: 0 ${e=>e.theme.spacing[2]}px; font-size: ${e=>e.theme.typography.fontSize.sm};`,md:m`min-width: 40px; height: 40px; padding: 0 ${e=>e.theme.spacing[3]}px; font-size: ${e=>e.theme.typography.fontSize.base};`,lg:m`min-width: 48px; height: 48px; padding: 0 ${e=>e.theme.spacing[4]}px; font-size: ${e=>e.theme.typography.fontSize.lg};`},G={default:m`
    background-color: ${e=>e.$active?e.theme.colors.primary[600]:e.theme.colors.neutral[0]};
    color: ${e=>e.$active?e.theme.colors.neutral[0]:e.theme.colors.neutral[700]};
    border: 1px solid ${e=>e.$active?e.theme.colors.primary[600]:e.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.colors.primary[700]:e.theme.colors.neutral[50]};
      border-color: ${e=>e.$active?e.theme.colors.primary[700]:e.theme.colors.neutral[400]};
    }

  `,outlined:m`
    background-color: transparent;
    color: ${e=>e.$active?e.theme.colors.primary[600]:e.theme.colors.neutral[700]};
    border: 2px solid ${e=>e.$active?e.theme.colors.primary[600]:e.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      border-color: ${e=>e.$active?e.theme.colors.primary[700]:e.theme.colors.neutral[400]};
      background-color: ${e=>e.$active?e.theme.colors.primary[50]:e.theme.colors.neutral[50]};
    }

  `,minimal:m`
    background-color: ${e=>e.$active?e.theme.colors.primary[100]:"transparent"};
    color: ${e=>e.$active?e.theme.colors.primary[700]:e.theme.colors.neutral[700]};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.colors.primary[200]:e.theme.colors.neutral[100]};
    }

  `},h=S.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  border-radius: ${e=>e.theme.radii.md};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all ${e=>e.theme.transitions.duration.base};
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: 2px;
  }

  ${e=>F[e.$size]}
  ${e=>G[e.$variant]}
`,H=S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.neutral[500]};

  ${e=>F[e.$size]}
`,v=(e,a)=>{const c=a-e+1;return Array.from({length:c},(i,o)=>o+e)},b=({currentPage:e,totalPages:a,onPageChange:c,size:i="md",variant:o="default",siblingCount:s=1,showFirstLast:B=!0,showPrevNext:k=!0,disabled:d=!1,...J})=>{const O=E.useMemo(()=>{if(s+5>=a)return v(1,a);const p=Math.max(e-s,1),C=Math.min(e+s,a),P=p>2,z=C<a-1;if(!P&&z){const g=3+2*s;return[...v(1,g),"dots",a]}if(P&&!z){const g=3+2*s;return[1,"dots",...v(a-g+1,a)]}return P&&z?[1,"dots",...v(p,C),"dots",a]:[]},[e,a,s]),u=t=>{t>=1&&t<=a&&!d&&c(t)};return n(T,{children:[B&&r(h,{$size:i,$variant:o,onClick:()=>u(1),disabled:d||e===1,"aria-label":"First page",children:"«"}),k&&r(h,{$size:i,$variant:o,onClick:()=>u(e-1),disabled:d||e===1,"aria-label":"Previous page",children:"‹"}),O.map((t,p)=>t==="dots"?r(H,{$size:i,children:"…"},`dots-${p}`):r(h,{$size:i,$variant:o,$active:t===e,onClick:()=>u(Number(t)),disabled:d,"aria-label":`Page ${t}`,"aria-current":t===e?"page":void 0,children:t},t)),k&&r(h,{$size:i,$variant:o,onClick:()=>u(e+1),disabled:d||e===a,"aria-label":"Next page",children:"›"}),B&&r(h,{$size:i,$variant:o,onClick:()=>u(a),disabled:d||e===a,"aria-label":"Last page",children:"»"})]})};try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"minimal"'}]}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number"}},showFirstLast:{defaultValue:{value:"true"},description:"",name:"showFirstLast",required:!1,type:{name:"boolean"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Components/Pagination",component:b,parameters:{layout:"centered"},tags:["autodocs"]},l=({totalPages:e,variant:a,size:c})=>{const[i,o]=E.useState(1);return n("div",{children:[r(b,{currentPage:i,totalPages:e,onPageChange:o,variant:a,size:c}),n("p",{style:{marginTop:"1rem",color:"#6b7280"},children:["Current page: ",i]})]})},f={render:()=>r(l,{totalPages:10})},y={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Default"}),r(l,{totalPages:10,variant:"default"})]}),n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Outlined"}),r(l,{totalPages:10,variant:"outlined"})]}),n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Minimal"}),r(l,{totalPages:10,variant:"minimal"})]})]})},$={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Small"}),r(l,{totalPages:10,size:"sm"})]}),n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Medium"}),r(l,{totalPages:10,size:"md"})]}),n("div",{children:[r("h4",{style:{marginBottom:"1rem"},children:"Large"}),r(l,{totalPages:10,size:"lg"})]})]})},x={render:()=>r(l,{totalPages:100})};var V,_,w;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <PaginationWrapper totalPages={10} />
}`,...(w=(_=f.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var D,W,q;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Default</h4>\r
        <PaginationWrapper totalPages={10} variant="default" />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Outlined</h4>\r
        <PaginationWrapper totalPages={10} variant="outlined" />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Minimal</h4>\r
        <PaginationWrapper totalPages={10} variant="minimal" />\r
      </div>\r
    </div>
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var M,R,j;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Small</h4>\r
        <PaginationWrapper totalPages={10} size="sm" />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Medium</h4>\r
        <PaginationWrapper totalPages={10} size="md" />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '1rem'
      }}>Large</h4>\r
        <PaginationWrapper totalPages={10} size="lg" />\r
      </div>\r
    </div>
}`,...(j=(R=$.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,I,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <PaginationWrapper totalPages={100} />
}`,...(L=(I=x.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Z=["Default","AllVariants","AllSizes","ManyPages"];export{$ as AllSizes,y as AllVariants,f as Default,x as ManyPages,Z as __namedExportsOrder,Y as default};
