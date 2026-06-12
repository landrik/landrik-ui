import{j as n,a as p}from"./jsx-runtime-c9381026.js";import{u as x,K as h}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i="/assets/AvertaRegular-f1b62760.ttf",b="/assets/AvertaBold-fe8c285e.ttf",A=x`

  @font-face {
    font-family: "Averta";
    src: local(${i}),
      url(${i}) format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Averta";
    src: local(${b}),
      url(${b}) format("truetype");
    font-weight: Bold;
  }

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    /* ── Background ──────────────────────────── */
    --color-bg-page:        ${({theme:e})=>e.color.surface.page};
    --color-bg-subtle:      ${({theme:e})=>e.color.surface.default};
    --color-bg-overlay:     ${({theme:e})=>e.color.surface.overlay};

    /* ── Surface ─────────────────────────────── */
    --color-surface:        ${({theme:e})=>e.color.surface.default};
    --color-surface-raised: ${({theme:e})=>e.color.surface.raised};
    --color-surface-overlay:${({theme:e})=>e.color.surface.overlay};
    --color-surface-sunken: ${({theme:e})=>e.color.surface.sunken};

    /* ── Border ──────────────────────────────── */
    --color-border:         ${({theme:e})=>e.color.border.default};
    --color-border-strong:  ${({theme:e})=>e.color.border.strong};
    --color-border-focus:   ${({theme:e})=>e.color.border.focus};
    --color-border-subtle:  ${({theme:e})=>e.color.border.subtle};

    /* ── Text ────────────────────────────────── */
    --color-text:           ${({theme:e})=>e.color.text.default};
    --color-text-muted:     ${({theme:e})=>e.color.text.muted};
    --color-text-disabled:  ${({theme:e})=>e.color.text.disabled};
    --color-text-on-accent: ${({theme:e})=>e.color.text.onFill};
    --color-text-link:      ${({theme:e})=>e.color.text.link};

    /* ── Accent ──────────────────────────────── */
    --color-accent:         ${({theme:e})=>e.color.accent.bgDefault};
    --color-accent-hover:   ${({theme:e})=>e.color.accent.bgHover};
    --color-accent-subtle:  ${({theme:e})=>e.color.accent.bgSubtle};

    /* ── Status ──────────────────────────────── */
    --color-success:        ${({theme:e})=>e.color.success.bgDefault};
    --color-success-subtle: ${({theme:e})=>e.color.success.bgSubtle};
    --color-warning:        ${({theme:e})=>e.color.warning.bgDefault};
    --color-warning-subtle: ${({theme:e})=>e.color.warning.bgSubtle};
    --color-danger:         ${({theme:e})=>e.color.danger.bgDefault};
    --color-danger-subtle:  ${({theme:e})=>e.color.danger.bgSubtle};
    --color-info:           ${({theme:e})=>e.color.info.bgDefault};
    --color-info-subtle:    ${({theme:e})=>e.color.info.bgSubtle};
  }

   
  html {
    font-family: ${({theme:e})=>e.typography.family.sans};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({theme:e})=>e.typography.family.sans};
    font-size: ${({theme:e})=>e.typography.size.base};
    color: ${({theme:e})=>e.color.text.default};
    background: ${({theme:e})=>e.color.surface.page};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`,u={primary:{neutral:{0:"#ffffff",50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},accent:{50:"#6c53ff",100:"#4b2bff",200:"#2903ff",300:"#2100da",400:"#1b00b0",500:"#1a0596",600:"#19087c",700:"#170a62",800:"#140a4a",900:"#100934"},overlay:{blackA10:"rgba(0,0,0,0.10)",blackA30:"rgba(0,0,0,0.30)",blackA60:"rgba(0,0,0,0.60)",whiteA10:"rgba(255,255,255,0.10)",whiteA20:"rgba(255,255,255,0.20)"}},semantic:{success:{50:"#EDFAF3",200:"#A8DFC4",400:"#7EC8A4",600:"#3A9E70",800:"#1A5C3E",950:"#0C1F17"},warning:{50:"#FFF8E6",200:"#F5D47A",400:"#E6A817",600:"#B07D0A",800:"#6B4A00",950:"#1A1200"},danger:{50:"#FDEFEF",200:"#F0AAAA",400:"#E07070",600:"#C03A3A",800:"#7A1A1A",950:"#200A0A"},info:{50:"#EDF5FA",200:"#AACDE0",400:"#7AABCF",600:"#3A7EA8",800:"#1A4E6E",950:"#0A1820"}}},y=[0,4,8,12,16,20,24,32,40,48,64,80,96],$={none:"0rem",sm:"0.25rem",md:"0.375rem",base:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},F={family:{sans:'"Averta", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',mono:"ui-monospace, Menlo, Monaco, monospace"},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},weight:{normal:400,medium:500,semibold:600,bold:700},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}},v={sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",base:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},k={duration:{shortest:150,shorter:200,short:250,base:300,complex:375,enteringScreen:225,leavingScreen:195},easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},preset:{fast:"150ms cubic-bezier(0.4, 0, 0.2, 1)",base:"200ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"300ms cubic-bezier(0.4, 0, 0.2, 1)"}},w={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},D={base:0,dropdown:1e3,sticky:1100,fixed:1200,modal:1300,popover:1400,tooltip:1500},{neutral:o,accent:r,overlay:g}=u.primary,{success:t,warning:l,danger:a,info:c}=u.semantic,d={color:{surface:{page:o[0],default:o[50],raised:o[0],sunken:o[100],overlay:g.blackA60},border:{subtle:o[100],default:o[200],strong:o[300],focus:o[500]},text:{default:o[900],muted:o[400],disabled:o[300],onFill:o[0],icon:o[500],link:r[500],linkHover:r[300]},accent:{bgSubtle:r[50],bgDefault:r[500],bgHover:r[400],bgActive:r[600],border:r[500],text:r[500],onFill:o[0]},neutral:{bgSubtle:o[100],bgDefault:o[400],bgHover:o[500],bgActive:o[600],border:o[300],text:o[600],onFill:o[900]},success:{bgSubtle:t[50],bgDefault:t[400],border:t[200],text:t[600],icon:t[600],onFill:o[0]},warning:{bgSubtle:l[50],bgDefault:l[400],border:l[200],text:l[600],icon:l[600],onFill:o[0]},danger:{bgSubtle:a[50],bgDefault:a[400],border:a[200],text:a[600],icon:a[600],onFill:o[0]},info:{bgSubtle:c[50],bgDefault:c[400],border:c[200],text:c[600],icon:c[600],onFill:o[0]}},spacing:y,radius:$,typography:F,shadows:v,transitions:k,breakpoints:w,zIndices:D},S={...d,color:{surface:{page:o[900],default:o[900],raised:o[800],sunken:o[900],overlay:g.blackA60},border:{subtle:o[800],default:o[700],strong:o[600],focus:r[400]},text:{default:o[100],muted:o[500],disabled:o[700],onFill:o[900],icon:o[400],link:r[300],linkHover:r[200]},accent:{bgSubtle:r[900],bgDefault:r[500],bgHover:r[400],bgActive:r[600],border:r[400],text:r[200],onFill:o[0]},neutral:{bgSubtle:o[800],bgDefault:o[600],bgHover:o[500],bgActive:o[400],border:o[700],text:o[400],onFill:o[100]},success:{bgSubtle:t[950],bgDefault:t[400],border:t[200],text:t[200],icon:t[400],onFill:o[900]},warning:{bgSubtle:l[950],bgDefault:l[400],border:l[200],text:l[200],icon:l[400],onFill:o[900]},danger:{bgSubtle:a[950],bgDefault:a[400],border:a[200],text:a[200],icon:a[400],onFill:o[900]},info:{bgSubtle:c[950],bgDefault:c[400],border:c[200],text:c[200],icon:c[400],onFill:o[900]}}},E=(e,f)=>{var s;const m=((s=f.globals.backgrounds)==null?void 0:s.value)==="#0A0A0A"?S:d;return n(h,{theme:m,children:p("div",{style:{padding:"32px",transition:"background 0.2s ease"},children:[n(A,{}),n(e,{})]})})},T={decorators:[E],parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"},{name:"dark",value:"#0A0A0A"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i},sort:"requiredFirst"},a11y:{config:{rules:[{id:"color-contrast",enabled:!0},{id:"button-name",enabled:!0}]}},docs:{toc:!0}},globalTypes:{themeMode:{name:"Theme",description:"Global theme mode",defaultValue:"light",toolbar:{icon:"circlehollow",items:[{value:"light",icon:"sun",title:"Light"},{value:"dark",icon:"moon",title:"Dark"}],showName:!0,dynamicTitle:!0}},locale:{description:"Locale for i18n",defaultValue:"en",toolbar:{icon:"globe",items:["en","fr"],showName:!0}}}};export{T as default};
