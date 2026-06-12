import{M as l}from"./chunk-HLWAVYOI-86ee6d8e.js";import{j as n,a as i,F as s}from"./jsx-runtime-c9381026.js";import{u as a}from"./index-4811e648.js";import"./iframe-4662727d.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-440219b3.js";import"./index-a38d0dca.js";import"./polished.esm-014be949.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},a(),r.components);return i(s,{children:[n(l,{title:"Overview/Getting Started"}),`
`,n(e.h1,{id:"landrik-design-system-react-components",children:"landrik Design System React Components"}),`
`,n(e.p,{children:"landrik-ui is a set of React component libraries i created for KubeSphere console."}),`
`,n(e.h2,{id:"requirement",children:"Requirement"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Node.js 20.9.0 (",n(e.a,{href:"https://github.com/creationix/nvm#usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"installation with nvm"}),")"]}),`
`,n(e.li,{children:"Yarn 1.22.4+"}),`
`]}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-shell",children:`npm i @landrik-ui
`})}),`
`,n(e.h2,{id:"example",children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`@import { Button } from '@landrik/ui'\r

`})}),`
`,n(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { ThemeProvider, Button, TextField } from '@landrik/ui';\r
\r
function App() {\r
  return (\r
    <ThemeProvider>\r
      <Button variant="primary">Click me</Button>\r
      <TextField label="Email" type="email" />\r
    </ThemeProvider>\r
  );\r
}
`})}),`
`,n(e.h2,{id:"running-storybook",children:"Running Storybook"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`npm run storybook\r

`})})]})}function c(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n(e,{...r,children:n(o,{...r})}):o(r)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const t={title:"Overview/Getting Started",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:c};const w=["__page"];export{w as __namedExportsOrder,d as __page,t as default};
