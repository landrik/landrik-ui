import{a as d,j as o}from"./jsx-runtime-c9381026.js";import{r as b}from"./index-8b3efc3f.js";import{a as i}from"./styled-components.browser.esm-f7e1e14e.js";const z=i.div`
  width: 320px; 
  background-color: ${({theme:e})=>e.color.neutral.bgSubtle}; 
  border: 1px solid ${({theme:e})=>e.color.neutral.bgDefault}; 
  border-radius: ${({theme:e})=>e.radius.lg}; 
  padding: ${({theme:e})=>e.spacing[4]}px; 
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,N=i.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: ${({theme:e})=>e.spacing[4]}px;
`,M=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({theme:e})=>e.color.neutral.bgActive};
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.duration.base};

  &:hover {
    background-color: ${({theme:e})=>e.color.neutral.bgSubtle};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,j=i.div`
  font-size: ${({theme:e})=>e.typography.size.base}; 
  font-weight: ${({theme:e})=>e.typography.weight.semibold}; 
  color: ${({theme:e})=>e.color.neutral.bgActive};
`,q=i.div`
  display: grid; 
  grid-template-columns: repeat(7, 1fr); 
  gap: ${({theme:e})=>e.spacing[4]}px;
`,A=i.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 32px; 
  font-size: ${({theme:e})=>e.typography.size.xs}; 
  font-weight: ${({theme:e})=>e.typography.weight.semibold}; 
  color: ${({theme:e})=>e.color.neutral.bgDefault}; 
  text-transform: uppercase;
`,V=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border: none;

  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${e=>e.$isSelected?e.theme.typography.weight.semibold:e.theme.typography.weight.normal};
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all ${({theme:e})=>e.transitions.duration.base};

  &:hover:not(:disabled) {
    background-color: ${e=>e.$isSelected?e.theme.color.accent.bgActive:e.theme.color.neutral.bgSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.accent.bgDefault};
    outline-offset: -2px;
  }


  background-color: ${e=>e.$isSelected?e.theme.color.accent.bgDefault:e.$isToday?e.theme.color.accent.bgSubtle:"transparent"};

  color: ${e=>e.$isSelected||e.$isDisabled?e.theme.color.neutral.bgSubtle:e.$isOtherMonth?e.theme.color.neutral.bgDefault:e.theme.color.neutral.bgActive};

`,R=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),H=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],W=["January","February","March","April","May","June","July","August","September","October","November","December"],$=({value:e,onChange:p,minDate:u,maxDate:c,disabledDates:m=[],firstDayOfWeek:s=0})=>{const[a,y]=b.useState(e?new Date(e.getFullYear(),e.getMonth(),1):new Date(new Date().getFullYear(),new Date().getMonth(),1)),v=b.useMemo(()=>s===0?f:[...f.slice(1),f[0]],[s]),D=t=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),x=t=>{const n=new Date(t.getFullYear(),t.getMonth(),1).getDay();return s===1?n===0?6:n-1:n},h=(t,n)=>t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear(),g=t=>u&&t<u||c&&t>c?!0:m.some(n=>h(n,t)),S=b.useMemo(()=>{const t=[],n=D(a),Y=x(a),T=D(new Date(a.getFullYear(),a.getMonth()-1,1));for(let r=Y-1;r>=0;r--){const l=T-r,w=new Date(a.getFullYear(),a.getMonth()-1,l);t.push({date:w,day:l,isOtherMonth:!0,isToday:!1,isSelected:!1,isDisabled:g(w)})}const O=new Date;for(let r=1;r<=n;r++){const l=new Date(a.getFullYear(),a.getMonth(),r);t.push({date:l,day:r,isOtherMonth:!1,isToday:h(l,O),isSelected:e?h(l,e):!1,isDisabled:g(l)})}const _=42-t.length;for(let r=1;r<=_;r++){const l=new Date(a.getFullYear(),a.getMonth()+1,r);t.push({date:l,day:r,isOtherMonth:!0,isToday:!1,isSelected:!1,isDisabled:g(l)})}return t},[a,e,u,c,m,s]),C=()=>{y(new Date(a.getFullYear(),a.getMonth()-1,1))},F=()=>{y(new Date(a.getFullYear(),a.getMonth()+1,1))},k=(t,n)=>{n||!p||p(t)};return d(z,{children:[d(N,{children:[o(M,{onClick:C,"aria-label":"Previous month",children:o(R,{})}),d(j,{children:[W[a.getMonth()]," ",a.getFullYear()]}),o(M,{onClick:F,"aria-label":"Next month",children:o(H,{})})]}),d(q,{children:[v.map(t=>o(A,{children:t},t)),S.map((t,n)=>o(V,{$isToday:t.isToday,$isSelected:t.isSelected,$isDisabled:t.isDisabled,$isOtherMonth:t.isOtherMonth,onClick:()=>k(t.date,t.isDisabled),disabled:t.isDisabled,"aria-label":t.date.toDateString(),"aria-selected":t.isSelected,children:t.day},n))]})]})};try{$.displayName="Calendar",$.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"Currently selected date",name:"value",required:!1,type:{name:"Date | undefined"}},onChange:{defaultValue:null,description:"Callback when date is selected",name:"onChange",required:!1,type:{name:"((date: Date) => void) | undefined"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date | undefined"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date | undefined"}},disabledDates:{defaultValue:{value:"[]"},description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[] | undefined"}},showWeekNumbers:{defaultValue:null,description:"Show week numbers",name:"showWeekNumbers",required:!1,type:{name:"boolean | undefined"}},firstDayOfWeek:{defaultValue:{value:"0"},description:"First day of week (0 = Sunday, 1 = Monday)",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"0"},{value:"1"}]}}}}}catch{}export{$ as C};
