import{a as r,j as t}from"./jsx-runtime-c9381026.js";import{r as E}from"./index-8b3efc3f.js";import{g as w,f as i}from"./styled-components.browser.esm-7ac89e16.js";import"./_commonjsHelpers-de833af9.js";const T=w.nav`
  display: flex; 
  align-items: center; 
  gap: ${({theme:e})=>e.spacing[4]}px;
`,O={sm:i`min-width: 32px; height: 32px; padding: 0 ${({theme:e})=>e.spacing[2]}px; font-size: ${({theme:e})=>e.typography.size.sm};`,md:i`min-width: 40px; height: 40px; padding: 0 ${({theme:e})=>e.spacing[3]}px; font-size: ${({theme:e})=>e.typography.size.base};`,lg:i`min-width: 48px; height: 48px; padding: 0 ${({theme:e})=>e.spacing[4]}px; font-size: ${({theme:e})=>e.typography.size.lg};`},G={default:i`
    background-color: ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[0]};
    color: ${e=>e.$active?e.theme.color.neutral[0]:e.theme.color.neutral[700]};
    border: 1px solid ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[50]};
      border-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[400]};
    }

  `,outlined:i`
    background-color: transparent;
    color: ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[700]};
    border: 2px solid ${e=>e.$active?e.theme.color.accent[600]:e.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      border-color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[400]};
      background-color: ${e=>e.$active?e.theme.color.accent[50]:e.theme.color.neutral[50]};
    }

  `,minimal:i`
    background-color: ${e=>e.$active?e.theme.color.accent[100]:"transparent"};
    color: ${e=>e.$active?e.theme.color.accent[700]:e.theme.color.neutral[700]};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${e=>e.$active?e.theme.color.accent[200]:e.theme.color.neutral[100]};
    }

  `},H={default:i`
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    box-shadow: 0 1px 3px ${({theme:e})=>e.color.accent[600]}55;
  `,outlined:i`
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.color.accent[600]};
  `,minimal:i`
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    position: relative;

    /* underline indicator */
    &::after {
      content: '';
      position: absolute;
      left: 25%;
      right: 25%;
      bottom: 4px;
      height: 2px;
      border-radius: 1px;
      background-color: ${({theme:e})=>e.color.accent[600]};
    }
  `},h=w.button`
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
  ${e=>e.$active&&i`
      cursor: default;
      ${H[e.$variant]}
    `}
  `,J=w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.neutral[500]};

  ${e=>O[e.$size]}
`,f=(e,a)=>{const m=a-e+1;return Array.from({length:m},(o,l)=>l+e)},b=({currentPage:e,totalPages:a,onPageChange:m,size:o="md",variant:l="default",siblingCount:d=1,showFirstLast:S=!0,showPrevNext:B=!0,disabled:c=!1,...K})=>{const F=E.useMemo(()=>{if(d+5>=a)return f(1,a);const g=Math.max(e-d,1),k=Math.min(e+d,a),P=g>2,z=k<a-1;if(!P&&z){const p=3+2*d;return[...f(1,p),"dots",a]}if(P&&!z){const p=3+2*d;return[1,"dots",...f(a-p+1,a)]}return P&&z?[1,"dots",...f(g,k),"dots",a]:[]},[e,a,d]),u=n=>{n>=1&&n<=a&&!c&&m(n)};return r(T,{children:[S&&t(h,{$size:o,$variant:l,onClick:()=>u(1),disabled:c||e===1,"aria-label":"First page",children:"«"}),B&&t(h,{$size:o,$variant:l,onClick:()=>u(e-1),disabled:c||e===1,"aria-label":"Previous page",children:"‹"}),F.map((n,g)=>n==="dots"?t(J,{$size:o,children:"…"},`dots-${g}`):t(h,{$size:o,$variant:l,$active:n===e,onClick:()=>u(Number(n)),disabled:c,"aria-label":`Page ${n}`,"aria-current":n===e?"page":void 0,children:n},n)),B&&t(h,{$size:o,$variant:l,onClick:()=>u(e+1),disabled:c||e===a,"aria-label":"Next page",children:"›"}),S&&t(h,{$size:o,$variant:l,onClick:()=>u(a),disabled:c||e===a,"aria-label":"Last page",children:"»"})]})};try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"outlined"'},{value:'"minimal"'}]}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number | undefined"}},showFirstLast:{defaultValue:{value:"true"},description:"",name:"showFirstLast",required:!1,type:{name:"boolean | undefined"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Z={title:"Components/Pagination",component:b,parameters:{layout:"centered"},tags:["autodocs"]},s=({totalPages:e,variant:a,size:m})=>{const[o,l]=E.useState(1);return r("div",{children:[t(b,{currentPage:o,totalPages:e,onPageChange:l,variant:a,size:m}),r("p",{style:{marginTop:"1rem",color:"#6b7280"},children:["Current page: ",o]})]})},v={render:()=>t(s,{totalPages:10})},$={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Default"}),t(s,{totalPages:10,variant:"default"})]}),r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Outlined"}),t(s,{totalPages:10,variant:"outlined"})]}),r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Minimal"}),t(s,{totalPages:10,variant:"minimal"})]})]})},y={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Small"}),t(s,{totalPages:10,size:"sm"})]}),r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Medium"}),t(s,{totalPages:10,size:"md"})]}),r("div",{children:[t("h4",{style:{marginBottom:"1rem"},children:"Large"}),t(s,{totalPages:10,size:"lg"})]})]})},x={render:()=>t(s,{totalPages:100})};var C,V,_;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <PaginationWrapper totalPages={10} />
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,q,M;$.parameters={...$.parameters,docs:{...(D=$.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(I=x.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const ee=["Default","AllVariants","AllSizes","ManyPages"];export{y as AllSizes,$ as AllVariants,v as Default,x as ManyPages,ee as __namedExportsOrder,Z as default};
