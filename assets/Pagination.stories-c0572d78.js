import{a as t,j as a}from"./jsx-runtime-c9381026.js";import{r as E}from"./index-8b3efc3f.js";import{a as S,r as c}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const T=S.nav`
  display: flex; 
  align-items: center; 
  gap: ${({theme:e})=>e.spacing[4]}px;
`,O={sm:c`min-width: 32px; height: 32px; padding: 0 ${({theme:e})=>e.spacing[12]}px; font-size: ${({theme:e})=>e.typography.size.sm};`,md:c`min-width: 40px; height: 40px; padding: 0 ${({theme:e})=>e.spacing[3]}px; font-size: ${({theme:e})=>e.typography.size.base};`,lg:c`min-width: 48px; height: 48px; padding: 0 ${({theme:e})=>e.spacing[4]}px; font-size: ${({theme:e})=>e.typography.size.lg};`},G={default:c`
    background-color: ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[0]};
    color: ${e=>e.$active?e.theme.color.neutral[0]:e.theme.color.neutral[700]};
    border: 1px solid ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[50]};
      border-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[400]};
    }

  `,outlined:c`
    background-color: transparent;
    color: ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[700]};
    border: 2px solid ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      border-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[400]};
      background-color: ${e=>e.$active?e.theme.color.accent[50]:e.theme.color.neutral[50]};
    }

  `,minimal:c`
    background-color: ${e=>e.$active?e.theme.color.accent[100]:"transparent"};
    color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[700]};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.color.accent[200]:e.theme.color.neutral[100]};
    }

  `},h=S.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.family.sans};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all ${({theme:e})=>e.transitions.duration.base};
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.accent[500]};
    outline-offset: 2px;
  }

  ${e=>O[e.$size]}
  ${e=>G[e.$variant]}
`,H=S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.neutral[500]};

  ${e=>O[e.$size]}
`,v=(e,n)=>{const m=n-e+1;return Array.from({length:m},(o,i)=>i+e)},b=({currentPage:e,totalPages:n,onPageChange:m,size:o="md",variant:i="default",siblingCount:s=1,showFirstLast:B=!0,showPrevNext:k=!0,disabled:d=!1,...J})=>{const F=E.useMemo(()=>{if(s+5>=n)return v(1,n);const p=Math.max(e-s,1),w=Math.min(e+s,n),P=p>2,z=w<n-1;if(!P&&z){const g=3+2*s;return[...v(1,g),"dots",n]}if(P&&!z){const g=3+2*s;return[1,"dots",...v(n-g+1,n)]}return P&&z?[1,"dots",...v(p,w),"dots",n]:[]},[e,n,s]),u=r=>{r>=1&&r<=n&&!d&&m(r)};return t(T,{children:[B&&a(h,{$size:o,$variant:i,onClick:()=>u(1),disabled:d||e===1,"aria-label":"First page",children:"«"}),k&&a(h,{$size:o,$variant:i,onClick:()=>u(e-1),disabled:d||e===1,"aria-label":"Previous page",children:"‹"}),F.map((r,p)=>r==="dots"?a(H,{$size:o,children:"…"},`dots-${p}`):a(h,{$size:o,$variant:i,$active:r===e,onClick:()=>u(Number(r)),disabled:d,"aria-label":`Page ${r}`,"aria-current":r===e?"page":void 0,children:r},r)),k&&a(h,{$size:o,$variant:i,onClick:()=>u(e+1),disabled:d||e===n,"aria-label":"Next page",children:"›"}),B&&a(h,{$size:o,$variant:i,onClick:()=>u(n),disabled:d||e===n,"aria-label":"Last page",children:"»"})]})};try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"outlined"'},{value:'"default"'},{value:'"minimal"'}]}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number | undefined"}},showFirstLast:{defaultValue:{value:"true"},description:"",name:"showFirstLast",required:!1,type:{name:"boolean | undefined"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Y={title:"Components/Pagination",component:b,parameters:{layout:"centered"},tags:["autodocs"]},l=({totalPages:e,variant:n,size:m})=>{const[o,i]=E.useState(1);return t("div",{children:[a(b,{currentPage:o,totalPages:e,onPageChange:i,variant:n,size:m}),t("p",{style:{marginTop:"1rem",color:"#6b7280"},children:["Current page: ",o]})]})},f={render:()=>a(l,{totalPages:10})},$={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Default"}),a(l,{totalPages:10,variant:"default"})]}),t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Outlined"}),a(l,{totalPages:10,variant:"outlined"})]}),t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Minimal"}),a(l,{totalPages:10,variant:"minimal"})]})]})},y={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Small"}),a(l,{totalPages:10,size:"sm"})]}),t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Medium"}),a(l,{totalPages:10,size:"md"})]}),t("div",{children:[a("h4",{style:{marginBottom:"1rem"},children:"Large"}),a(l,{totalPages:10,size:"lg"})]})]})},x={render:()=>a(l,{totalPages:100})};var C,V,_;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <PaginationWrapper totalPages={10} />
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,q,M;$.parameters={...$.parameters,docs:{...(D=$.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(q=$.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,R,j;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(R=y.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,I,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <PaginationWrapper totalPages={100} />
}`,...(L=(I=x.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Z=["Default","AllVariants","AllSizes","ManyPages"];export{y as AllSizes,$ as AllVariants,f as Default,x as ManyPages,Z as __namedExportsOrder,Y as default};
