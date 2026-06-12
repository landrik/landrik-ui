import{a as g,j as t,F as E}from"./jsx-runtime-c9381026.js";import{r as l}from"./index-8b3efc3f.js";import{a as s}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(...e)=>e.filter((a,c,f)=>!!a&&a.trim()!==""&&f.indexOf(a)===c).join(" ").trim();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,c,f)=>f?f.toUpperCase():c.toLowerCase());/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=e=>{const a=qe(e);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Be={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=l.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:f,className:d="",children:p,iconNode:b,...F},x)=>l.createElement("svg",{ref:x,...Be,width:a,height:a,stroke:e,strokeWidth:f?Number(c)*24/Number(a):c,className:Ce("lucide",d),...!p&&!Ve(F)&&{"aria-hidden":"true"},...F},[...b.map(([y,m])=>l.createElement(y,m)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,a)=>{const c=l.forwardRef(({className:f,...d},p)=>l.createElement(We,{ref:p,iconNode:a,className:Ce(`lucide-${Ee(O(e))}`,`lucide-${e}`,f),...d}));return c.displayName=O(e),c};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Oe=$("circle-alert",Re);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Te=$("circle-check-big",Ne);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],Ze=$("file",He);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ge=$("image",Ke);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],N=$("upload",Je),Qe=s.div`
  width: 100%; ${e=>e.$variant==="avatar"&&`
    width: 120px;
    height: 120px;
  `} 
`,ke=s.div`
  border: 2px dashed ${e=>e.$hasError?"#ef4444":e.$isDragging?e.$color:"#d1d5db"}; 
  border-radius: ${e=>e.$variant==="avatar"?"50%":"12px"}; 
  padding: ${e=>e.$variant==="compact"?"20px":e.$variant==="avatar"?"0":"40px"}; 
  text-align: center; 
  background: ${e=>e.$isDragging?`${e.$color}10`:"#fafafa"}; 
  cursor: pointer; 
  transition: all 0.2s ease; ${e=>e.$variant==="avatar"&&`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  `}

  &:hover {
    border-color: ${e=>e.$hasError?"#ef4444":e.$color};
    background: ${e=>e.$isDragging?`${e.$color}10`:"#f5f5f5"};
  }
`,Xe=s.input`display: none;`,T=s.div`
  color: ${e=>e.$color}; 
  margin: 0 auto 12px; 
  display: flex; 
  justify-content: center;
`,Ye=s.p`color: #374151; font-size: 14px; margin: 0 0 4px; font-weight: 500;`,er=s.p`color: #6b7280; font-size: 12px; margin: 0;`,rr=s.div`margin-top: 16px; display: flex; flex-direction: column; gap: 8px;`,tr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
  ${e=>e.$status==="error"&&"border-color: #ef4444; background: #fef2f2;"}
  ${e=>e.$status==="success"&&"border-color: #10b981; background: #f0fdf4;"}
`,ar=s.div`
  color: ${e=>e.$color}; 
  display: flex; 
  align-items: center; 
  flex-shrink: 0;
`,sr=s.div`flex: 1; min-width: 0;`,nr=s.div`
  font-size: 14px; 
  font-weight: 500; 
  color: #1a1a1a; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`,or=s.div`font-size: 12px; color: #6b7280; margin-top: 2px;`,ir=s.div`width: 100%; height: 4px; background: #e5e7eb; border-radius: 2px; margin-top: 8px; overflow: hidden;`,lr=s.div`
  height: 100%; 
  width: ${e=>e.$progress}%; 
  background: ${e=>e.$color}; 
  transition: width 0.3s ease;
`,cr=s.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #ef4444;
  }
`,H=s.div`color: #ef4444; font-size: 12px; margin-top: 8px;`,dr=s.img`width: 100%; height: 100%; object-fit: cover; border-radius: 50%;`,ur=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 50%;

  ${ke}:hover & {
    opacity: 1;
  }
`,pr=s.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px;`,Se=s.div`
  position: relative; 
  width: 100px; 
  height: 100px; 
  border-radius: 8px; 
  overflow: hidden; 
  border: 2px solid #e5e7eb;
`,fr=s.img`width: 100%; height: 100%; object-fit: cover;`,mr=s.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Se}:hover & {
  opacity: 1;
  }

  &:hover {
  background: rgba(0, 0, 0, 0.9);
  }
`,gr=()=>g("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t("path",{d:"M16 16l-4-4-4 4"}),t("path",{d:"M12 12v9"}),t("path",{d:"M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"}),t("polyline",{points:"16 16 12 12 8 16"})]}),Z=()=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),u=({accept:e,multiple:a=!0,maxSize:c=5*1024*1024,maxFiles:f,files:d,onFilesChange:p,onUpload:b,disabled:F=!1,error:x,color:y="#3b82f6",variant:m="default",showPreview:q=!1})=>{const[Ue,I]=l.useState(!1),B=l.useRef(null),L=r=>{if(r===0)return"0 Bytes";const n=1024,i=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(r)/Math.log(n));return Math.round(r/Math.pow(n,o)*100)/100+" "+i[o]},Pe=r=>{if(c&&r.size>c)return`File size exceeds ${L(c)}`;if(e){const n=e.split(",").map(h=>h.trim()),i=r.type,o="."+r.name.split(".").pop();if(!n.some(h=>h.startsWith(".")?o===h:h.endsWith("/*")?i.startsWith(h.replace("/*","")):i===h))return`File type not accepted. Allowed: ${e}`}return null},V=async r=>{if(!r||F)return;const n=[],i=Array.from(r);if(f&&d.length+i.length>f){p([...d]);return}for(const o of i){const v=Pe(o),h={id:Math.random().toString(36).substr(2,9),name:o.name,size:o.size,type:o.type,status:v?"error":"uploading",progress:0,error:v||void 0,file:o};o.type.startsWith("image/")&&(h.url=URL.createObjectURL(o)),n.push(h)}p([...d,...n]);for(const o of n)if(!o.error&&b)try{await b(o.file),j(o.id,"success",100)}catch{j(o.id,"error",0,"Upload failed")}else o.error||ze(o.id)},ze=r=>{let n=0;const i=setInterval(()=>{n+=10,n>=100?(clearInterval(i),j(r,"success",100)):De(r,n)},200)},De=(r,n)=>{p(d.map(i=>i.id===r?{...i,progress:n}:i))},j=(r,n,i,o)=>{p(d.map(v=>v.id===r?{...v,status:n,progress:i,error:o}:v))},W=r=>{const n=d.find(i=>i.id===r);n!=null&&n.url&&URL.revokeObjectURL(n.url),p(d.filter(i=>i.id!==r))},Ae=r=>{r.preventDefault(),r.stopPropagation(),I(!0)},Me=r=>{r.preventDefault(),r.stopPropagation(),I(!1)},_e=r=>{r.preventDefault(),r.stopPropagation()},Ie=r=>{r.preventDefault(),r.stopPropagation(),I(!1),V(r.dataTransfer.files)},Le=()=>{var r;F||(r=B.current)==null||r.click()},w=d[0],je=e==null?void 0:e.includes("image/"),R=d.filter(r=>r.type.startsWith("image/")&&r.url);return g(Qe,{$variant:m,children:[g(ke,{$isDragging:Ue,$hasError:!!x,$color:y,$variant:m,onClick:Le,onDragEnter:Ae,onDragLeave:Me,onDragOver:_e,onDrop:Ie,children:[t(Xe,{ref:B,type:"file",accept:e,multiple:a&&m!=="avatar",onChange:r=>V(r.target.files),disabled:F}),m==="avatar"&&(w!=null&&w.url)?g(E,{children:[t(dr,{src:w.url,alt:"Avatar"}),t(ur,{children:t(T,{$color:"white",children:t(gr,{})})})]}):g(E,{children:[t(T,{$color:y,children:m==="compact"?t(N,{size:20}):t(N,{size:m==="avatar"?32:40})}),m!=="avatar"&&g(E,{children:[t(Ye,{children:m==="compact"?"Choose file":"Drop files here or click to upload"}),g(er,{children:[e?`Accepted: ${e}`:"All file types accepted",c&&` • Max ${L(c)}`]})]})]})]}),x&&t(H,{children:x}),q&&je&&R.length>0&&t(pr,{children:R.map(r=>g(Se,{children:[t(fr,{src:r.url,alt:r.name}),t(mr,{onClick:()=>W(r.id),children:t(Z,{})})]},r.id))}),m!=="avatar"&&!q&&d.length>0&&t(rr,{children:d.map(r=>g(tr,{$status:r.status,children:[g(ar,{$color:r.status==="error"?"#ef4444":r.status==="success"?"#10b981":y,children:[r.status==="error"&&t(Oe,{size:20}),r.status==="success"&&t(Te,{size:20}),r.status==="uploading"&&(r.type.startsWith("image/")?t(Ge,{size:20}):t(Ze,{size:20}))]}),g(sr,{children:[t(nr,{children:r.name}),t(or,{children:L(r.size)}),r.status==="uploading"&&t(ir,{children:t(lr,{$progress:r.progress||0,$color:y})}),r.error&&t(H,{children:r.error})]}),t(cr,{onClick:()=>W(r.id),children:t(Z,{})})]},r.id))})]})};try{u.displayName="FileUpload",u.__docgenInfo={description:"",displayName:"FileUpload",props:{accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string | undefined"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},maxSize:{defaultValue:{value:"5 * 1024 * 1024"},description:"",name:"maxSize",required:!1,type:{name:"number | undefined"}},maxFiles:{defaultValue:null,description:"",name:"maxFiles",required:!1,type:{name:"number | undefined"}},files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"UploadedFile[]"}},onFilesChange:{defaultValue:null,description:"",name:"onFilesChange",required:!0,type:{name:"(files: UploadedFile[]) => void"}},onUpload:{defaultValue:null,description:"",name:"onUpload",required:!1,type:{name:"((file: File) => Promise<void>) | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | undefined"}},color:{defaultValue:{value:"#3b82f6"},description:"",name:"color",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"avatar"'},{value:'"compact"'}]}},showPreview:{defaultValue:{value:"false"},description:"",name:"showPreview",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const xr={title:"Components/FileUpload",component:u,parameters:{layout:"padded"},tags:["autodocs"]},C={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a})}},k={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,accept:"image/*"})}},S={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,multiple:!1})}},U={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,maxSize:2*1024*1024})}},P={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,error:"Please upload at least one file"})}},z={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,variant:"compact"})}},D={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,variant:"avatar",accept:"image/*",multiple:!1})}},A={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,accept:"image/*",showPreview:!0})}},M={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,accept:".pdf,application/pdf"})}},_={render:()=>{const[e,a]=l.useState([]);return t(u,{files:e,onFilesChange:a,maxFiles:3})}};var K,G,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} />;
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} accept="image/*" />;
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} multiple={false} />;
  }
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,se,ne;U.parameters={...U.parameters,docs:{...(ae=U.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} maxSize={2 * 1024 * 1024} // 2MB
    />;
  }
}`,...(ne=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ie,le;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} error="Please upload at least one file" />;
  }
}`,...(le=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} variant="compact" />;
  }
}`,...(ue=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,fe,me;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} variant="avatar" accept="image/*" multiple={false} />;
  }
}`,...(me=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,he,ve;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} accept="image/*" showPreview />;
  }
}`,...(ve=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Fe,ye,xe;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} accept=".pdf,application/pdf" />;
  }
}`,...(xe=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var $e,be,we;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return <FileUpload files={files} onFilesChange={setFiles} maxFiles={3} />;
  }
}`,...(we=(be=_.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const $r=["Default","ImageOnly","SingleFile","WithMaxSize","WithError","Compact","Avatar","ImagePreview","PDFOnly","MaxFiles"];export{D as Avatar,z as Compact,C as Default,k as ImageOnly,A as ImagePreview,_ as MaxFiles,M as PDFOnly,S as SingleFile,P as WithError,U as WithMaxSize,$r as __namedExportsOrder,xr as default};
