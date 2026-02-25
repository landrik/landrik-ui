import{j as e,a as m}from"./jsx-runtime-c9381026.js";import{u as p,K as a}from"./styled-components.browser.esm-f7e1e14e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i={colors:{primary:{50:"#6c53ff",100:"#4b2bff",200:"#2903ff",300:"#2100da",400:"#1b00b0",500:"#1a0596",600:"#19087c",700:"#170a62",800:"#140a4a",900:"#100934"},neutral:{0:"#ffffff",50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},semantic:{success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"}},typography:{fontFamily:{sans:'"Averta", -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, sans-serif',mono:"ui-monospace, Menlo, Monaco, monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeight:{normal:400,medium:500,semibold:600,bold:700},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}},spacing:[0,4,8,12,16,20,24,32,40,48,64,80,96],radii:{none:"0rem",sm:"0.25rem",md:"0.375rem",base:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",base:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},transitions:{duration:{shortest:150,shorter:200,short:250,base:300,complex:375,enteringScreen:225,leavingScreen:195},easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},timing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},fast:"150ms cubic-bezier(0.4, 0, 0.2, 1)",base:"200ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"300ms cubic-bezier(0.4, 0, 0.2, 1)"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndices:{base:0,dropdown:1e3,sticky:1100,fixed:1200,modal:1300,popover:1400,tooltip:1500}},n=""+new URL("AvertaRegular-f1b62760.ttf",import.meta.url).href,o=""+new URL("AvertaBold-fe8c285e.ttf",import.meta.url).href,l=p`

  @font-face {
    font-family: "Averta";
    src: local(${n}),
      url(${n}) format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Averta";
    src: local(${o}),
      url(${o}) format("truetype");
    font-weight: Bold;
  }

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${r=>r.theme.typography.fontFamily.sans};
    line-height: ${r=>r.theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${r=>r.theme.colors.neutral[900]};
    background-color: ${r=>r.theme.colors.neutral[0]};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${r=>r.theme.typography.fontWeight.bold};
    line-height: ${r=>r.theme.typography.lineHeight.tight};
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`,t=({children:r,theme:s=i})=>e(a,{theme:s,children:r});try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:`{\r
\r
  colors: {\r
    primary: {\r
      50: "#6c53ff",\r
     100: "#4b2bff",\r
     200: "#2903ff",\r
     300: "#2100da",\r
     400: "#1b00b0",\r
     500: "#1a0596",\r
     600: "#19087c",\r
     700: "#170a62",\r
     800: "#140a4a",\r
     900: "#100934"\r
    },\r
    neutral: {\r
      0: '#ffffff',\r
      50: '#f9fafb',\r
      100: '#f3f4f6',\r
      200: '#e5e7eb',\r
      300: '#d1d5db',\r
      400: '#9ca3af',\r
      500: '#6b7280',\r
      600: '#4b5563',\r
      700: '#374151',\r
      800: '#1f2937',\r
      900: '#111827',\r
    },\r
    semantic: {\r
      success: '#10b981',\r
      warning: '#f59e0b',\r
      error: '#ef4444',\r
      info: '#3b82f6',\r
    }\r
  },\r
  typography: {\r
    fontFamily: {\r
      sans: '"Averta", -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, sans-serif',\r
      mono: 'ui-monospace, Menlo, Monaco, monospace',\r
    },\r
    fontSize: {\r
      xs: '0.75rem',\r
      sm: '0.875rem',\r
      base: '1rem',\r
      lg: '1.125rem',\r
      xl: '1.25rem',\r
      '2xl': '1.5rem',\r
      '3xl': '1.875rem',\r
      '4xl': '2.25rem',\r
      '5xl': '3rem',\r
    },\r
    fontWeight: {\r
      normal: 400,\r
      medium: 500,\r
      semibold: 600,\r
      bold: 700,\r
    },\r
    lineHeight:{\r
      none: 1,\r
      tight: 1.25,\r
      snug:1.375,\r
      normal: 1.5,\r
      relaxed: 1.625,\r
      loose:2,\r
    },\r
    letterSpacing:{\r
      tighter:'-0.05em',\r
      tight: '-0.025em',\r
      normal: '0',\r
      wide: '0.025em',\r
      wider: '0.05em',\r
      widest: '0.1em'\r
    }\r
  },\r
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96],\r
  radii: {\r
    none:'0rem',\r
    sm: '0.25rem',\r
    md: '0.375rem',\r
    base: '0.375rem',\r
    lg: '0.5rem',\r
    xl: '0.75rem',\r
    '2xl': '1rem',\r
    full: '9999px',\r
  },\r
  shadows: {\r
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',\r
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',\r
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',\r
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',\r
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',\r
  },\r
  transitions: {\r
    duration:{\r
      shortest: 150,\r
      shorter: 200,\r
      short: 250,\r
      base: 300,\r
      complex: 375,\r
      enteringScreen: 225,\r
      leavingScreen: 195,\r
    },\r
    easing:{\r
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',\r
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',\r
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',\r
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',\r
    },\r
    timing:{\r
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',\r
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',\r
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',\r
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',\r
    },\r
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',\r
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',\r
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',\r
  },\r
  breakpoints: {\r
    sm: '640px',\r
    md: '768px',\r
    lg: '1024px',\r
    xl: '1280px',\r
    '2xl': '1536px',\r
  },\r
  zIndices: {\r
    base: 0,\r
    dropdown: 1000,\r
    sticky: 1100,\r
    fixed: 1200,\r
    modal: 1300,\r
    popover: 1400,\r
    tooltip: 1500,\r
  },\r
  \r
\r
}`},description:"",name:"theme",required:!1,type:{name:"Theme"}}}}}catch{}const g={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[r=>m(a,{theme:i,children:[e(l,{}),e(r,{})]})]};export{g as default};
