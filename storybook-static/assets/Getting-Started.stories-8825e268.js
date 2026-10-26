import{M as s}from"./chunk-HLWAVYOI-e23c327e.js";import{j as n,a as t,F as l}from"./jsx-runtime-c9381026.js";import{u as a}from"./index-4811e648.js";import"./iframe-8093625c.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-440219b3.js";import"./index-a38d0dca.js";import"./index-1b441bc2.js";import"./polished.esm-014be949.js";import"./index-8fd8397b.js";import"./index-4949fe86.js";function o(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},a(),r.components);return t(l,{children:[n(s,{title:"Overview/Getting Started"}),`
`,n(e.h1,{id:"landrik-design-system-react-components",children:"landrik Design System React Components"}),`
`,n(e.p,{children:"landrik-ui is a set of React component libraries i created, it consists of working code, design tools and resources, and human interface guidelines. It is a project based on my experience as UI designer and developer, following the principles of accessibility, usability, and maintainability."}),`
`,n(e.h2,{id:"requirement",children:"Requirement"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Node.js 20.9.0 (",n(e.a,{href:"https://github.com/creationix/nvm#usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"installation with nvm"}),")"]}),`
`,n(e.li,{children:"Npm 10.8.2+"}),`
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

`})})]})}function c(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n(e,{...r,children:n(o,{...r})}):o(r)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const i={title:"Overview/Getting Started",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:c};const j=["__page"];export{j as __namedExportsOrder,d as __page,i as default};
