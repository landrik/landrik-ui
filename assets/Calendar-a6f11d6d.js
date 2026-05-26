import{a as d,j as l}from"./jsx-runtime-c9381026.js";import{r as g}from"./index-8b3efc3f.js";import{a as s}from"./styled-components.browser.esm-f7e1e14e.js";const z=s.div`
  width: 320px; 
  background-color: ${e=>e.theme.colors.neutral[0]}; 
  border: 1px solid ${e=>e.theme.colors.neutral[300]}; 
  border-radius: ${e=>e.theme.radii.lg}; 
  padding: ${e=>e.theme.spacing[4]}px; 
  box-shadow: ${e=>e.theme.shadows.lg};
`,N=s.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: ${e=>e.theme.spacing[4]}px;
`,$=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.neutral[700]};
  border-radius: ${e=>e.theme.radii.md};
  cursor: pointer;
  transition: all ${e=>e.theme.transitions.duration.base};

  &:hover {
    background-color: ${e=>e.theme.colors.neutral[100]};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,W=s.div`
  font-size: ${e=>e.theme.typography.fontSize.base}; 
  font-weight: ${e=>e.theme.typography.fontWeight.semibold}; 
  color: ${e=>e.theme.colors.neutral[900]};
`,j=s.div`
  display: grid; 
  grid-template-columns: repeat(7, 1fr); 
  gap: ${e=>e.theme.spacing[1]}px;
`,q=s.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 32px; 
  font-size: ${e=>e.theme.typography.fontSize.xs}; 
  font-weight: ${e=>e.theme.typography.fontWeight.semibold}; 
  color: ${e=>e.theme.colors.neutral[600]}; 
  text-transform: uppercase;
`,V=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border: none;

  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.$isSelected?e.theme.typography.fontWeight.semibold:e.theme.typography.fontWeight.normal};
  border-radius: ${e=>e.theme.radii.md};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all ${e=>e.theme.transitions.duration.base};

  &:hover:not(:disabled) {
    background-color: ${e=>e.$isSelected?e.theme.colors.primary[700]:e.theme.colors.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[500]};
    outline-offset: -2px;
  }


  background-color: ${e=>e.$isSelected?e.theme.colors.primary[600]:e.$isToday?e.theme.colors.primary[50]:"transparent"};

  color: ${e=>e.$isSelected?e.theme.colors.neutral[0]:e.$isDisabled?e.theme.colors.neutral[400]:e.$isOtherMonth?e.theme.colors.neutral[500]:e.theme.colors.neutral[900]};

`,R=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:l("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),H=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:l("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["January","February","March","April","May","June","July","August","September","October","November","December"],w=({value:e,onChange:f,minDate:c,maxDate:u,disabledDates:y=[],firstDayOfWeek:i=0})=>{const[r,b]=g.useState(e?new Date(e.getFullYear(),e.getMonth(),1):new Date(new Date().getFullYear(),new Date().getMonth(),1)),x=g.useMemo(()=>i===0?p:[...p.slice(1),p[0]],[i]),D=t=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),v=t=>{const a=new Date(t.getFullYear(),t.getMonth(),1).getDay();return i===1?a===0?6:a-1:a},h=(t,a)=>t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear(),m=t=>c&&t<c||u&&t>u?!0:y.some(a=>h(a,t)),C=g.useMemo(()=>{const t=[],a=D(r),Y=v(r),T=D(new Date(r.getFullYear(),r.getMonth()-1,1));for(let n=Y-1;n>=0;n--){const o=T-n,M=new Date(r.getFullYear(),r.getMonth()-1,o);t.push({date:M,day:o,isOtherMonth:!0,isToday:!1,isSelected:!1,isDisabled:m(M)})}const O=new Date;for(let n=1;n<=a;n++){const o=new Date(r.getFullYear(),r.getMonth(),n);t.push({date:o,day:n,isOtherMonth:!1,isToday:h(o,O),isSelected:e?h(o,e):!1,isDisabled:m(o)})}const _=42-t.length;for(let n=1;n<=_;n++){const o=new Date(r.getFullYear(),r.getMonth()+1,n);t.push({date:o,day:n,isOtherMonth:!0,isToday:!1,isSelected:!1,isDisabled:m(o)})}return t},[r,e,c,u,y,i]),S=()=>{b(new Date(r.getFullYear(),r.getMonth()-1,1))},F=()=>{b(new Date(r.getFullYear(),r.getMonth()+1,1))},k=(t,a)=>{a||!f||f(t)};return d(z,{children:[d(N,{children:[l($,{onClick:S,"aria-label":"Previous month",children:l(R,{})}),d(W,{children:[A[r.getMonth()]," ",r.getFullYear()]}),l($,{onClick:F,"aria-label":"Next month",children:l(H,{})})]}),d(j,{children:[x.map(t=>l(q,{children:t},t)),C.map((t,a)=>l(V,{$isToday:t.isToday,$isSelected:t.isSelected,$isDisabled:t.isDisabled,$isOtherMonth:t.isOtherMonth,onClick:()=>k(t.date,t.isDisabled),disabled:t.isDisabled,"aria-label":t.date.toDateString(),"aria-selected":t.isSelected,children:t.day},a))]})]})};try{w.displayName="Calendar",w.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"Currently selected date",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Callback when date is selected",name:"onChange",required:!1,type:{name:"((date: Date) => void)"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:{value:"[]"},description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[]"}},showWeekNumbers:{defaultValue:null,description:"Show week numbers",name:"showWeekNumbers",required:!1,type:{name:"boolean"}},firstDayOfWeek:{defaultValue:{value:"0"},description:"First day of week (0 = Sunday, 1 = Monday)",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}}}catch{}export{w as C};
