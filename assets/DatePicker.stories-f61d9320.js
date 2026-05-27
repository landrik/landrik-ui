import{a as m,j as t}from"./jsx-runtime-c9381026.js";import{r as n}from"./index-8b3efc3f.js";import{C as Z}from"./Calendar-bfaffca8.js";import{a as c}from"./styled-components.browser.esm-f7e1e14e.js";import{I as ee}from"./Icon-b2c83d77.js";import"./_commonjsHelpers-de833af9.js";const te=c.div`position: relative; width: 100%;`,ae=c.label`
  display: block; 
  font-size: ${({theme:e})=>e.typography.size.sm}; 
  font-weight: ${({theme:e})=>e.typography.weight.medium}; 
  color: ${({theme:e})=>e.color.neutral[700]}; 
  margin-bottom: ${({theme:e})=>e.spacing[4]}px;
`,re=c.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]}px;
  background-color: ${e=>e.$disabled?e.theme.color.neutral[50]:e.theme.color.neutral[0]};
  border: 1px solid ${e=>e.$hasError?e.theme.color.danger:e.theme.color.neutral[300]};
  border-radius: ${({theme:e})=>e.radius.lg};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-family: ${({theme:e})=>e.typography.family.sans};
  color: ${({theme:e})=>e.color.neutral[900]};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all ${({theme:e})=>e.transitions.duration.base};
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${e=>e.$hasError?e.theme.color.danger:e.theme.color.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.color.danger:e.theme.color.accent[500]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(239, 68, 68, 0.1)":"rgba(14, 165, 233, 0.1)"};
  }
`,ne=c.span`color: ${({theme:e})=>e.color.neutral[400]};`,oe=c.span`color: ${({theme:e})=>e.color.neutral[900]}; font-weight: ${({theme:e})=>e.typography.weight.medium};`,de=c.div`display: flex; align-items: center; gap: ${({theme:e})=>e.spacing[12]}px;`,se=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.color.neutral[500]};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radius.sm};
  transition: all ${({theme:e})=>e.transitions.preset.fast};

  &:hover {
    background-color: ${({theme:e})=>e.color.neutral[100]};
    color: ${({theme:e})=>e.color.neutral[700]};
  }
`,ie=c.div`
  position: absolute; 
  top: calc(100% + 8px); 
  left: 0; 
  z-index: ${({theme:e})=>e.zIndices.dropdown}; 
  opacity: ${e=>e.$isOpen?1:0}; 
  visibility: ${e=>e.$isOpen?"visible":"hidden"}; 
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"}; 
  transition: all ${({theme:e})=>e.transitions.duration.base};
`,le=c.span`
  display: block; 
  margin-top: ${({theme:e})=>e.spacing[4]}px; 
  font-size: ${({theme:e})=>e.typography.size.sm}; 
  color: ${({theme:e})=>e.color.danger[600]};
`,ce=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),o=({value:e,onChange:r,placeholder:a="Select date",minDate:s,maxDate:d,disabledDates:i,disabled:h=!1,error:l,label:u,clearable:H=!0,dateFormat:k="medium"})=>{const[$,x]=n.useState(!1),w=n.useRef(null),J=p=>{const X=k==="short"?{month:"numeric",day:"numeric",year:"numeric"}:k==="long"?{weekday:"long",year:"numeric",month:"long",day:"numeric"}:{year:"numeric",month:"short",day:"numeric"};return p.toLocaleDateString("en-US",X)},K=p=>{r==null||r(p),x(!1)},Q=p=>{p.stopPropagation(),r==null||r(void 0)},C=p=>{w.current&&!w.current.contains(p.target)&&x(!1)};return n.useEffect(()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}),[]),m(te,{ref:w,children:[u&&t(ae,{children:u}),m(re,{onClick:()=>!h&&x(!$),disabled:h,$hasError:!!l,$disabled:h,type:"button",children:[e?t(oe,{children:J(e)}):t(ne,{children:a}),m(de,{children:[H&&e&&!h&&t(se,{onClick:Q,type:"button",children:t(ce,{})}),t(ee,{name:"calendar"})]})]}),l&&t(le,{children:l}),t(ie,{$isOpen:$,children:t(Z,{value:e,onChange:K,minDate:s,maxDate:d,disabledDates:i})})]})};try{o.displayName="DatePicker",o.__docgenInfo={description:"",displayName:"DatePicker",props:{value:{defaultValue:null,description:"Currently selected date",name:"value",required:!1,type:{name:"Date | undefined"}},onChange:{defaultValue:null,description:"Callback when date is selected",name:"onChange",required:!1,type:{name:"((date: Date | undefined) => void) | undefined"}},placeholder:{defaultValue:{value:"Select date"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string | undefined"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date | undefined"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date | undefined"}},disabledDates:{defaultValue:null,description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[] | undefined"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error state",name:"error",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string | undefined"}},clearable:{defaultValue:{value:"true"},description:"Show clear button",name:"clearable",required:!1,type:{name:"boolean | undefined"}},dateFormat:{defaultValue:{value:"medium"},description:"Date format for display",name:"dateFormat",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"short"'},{value:'"medium"'},{value:'"long"'}]}}}}}catch{}const fe={title:"Components/DatePicker",component:o,parameters:{layout:"centered"},tags:["autodocs"]},D={render:()=>{const[e,r]=n.useState();return m("div",{style:{padding:"2rem",maxWidth:"400px"},children:[t(o,{value:e,onChange:r,label:"Select Date",placeholder:"Choose a date"}),e&&m("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:["Selected: ",e.toDateString()]})]})}},g={render:()=>{const[e,r]=n.useState(),[a,s]=n.useState("");return t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:e,onChange:i=>{r(i),s(i?"":"Date is required")},label:"Birth Date *",placeholder:"Select your birth date",error:a})})}},f={render:()=>{const[e,r]=n.useState(new Date),[a,s]=n.useState(new Date),[d,i]=n.useState(new Date);return m("div",{style:{padding:"2rem",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[t(o,{value:e,onChange:r,label:"Short Format",dateFormat:"short"}),t(o,{value:a,onChange:s,label:"Medium Format (Default)",dateFormat:"medium"}),t(o,{value:d,onChange:i,label:"Long Format",dateFormat:"long"})]})}},b={render:()=>t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:new Date,label:"Disabled Date Picker",disabled:!0})})},y={render:()=>{const[e,r]=n.useState(),a=new Date,s=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(a.getFullYear(),a.getMonth(),a.getDate()+30);return m("div",{style:{padding:"2rem",maxWidth:"400px"},children:[t(o,{value:e,onChange:r,label:"Select Appointment Date",placeholder:"Next 30 days only",minDate:s,maxDate:d}),t("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"#6b7280"},children:"Only dates within the next 30 days are available"})]})}},v={render:()=>{const[e,r]=n.useState(),[a,s]=n.useState(),[d,i]=n.useState({});return m("form",{onSubmit:l=>{l.preventDefault();const u={};e||(u.start="Start date is required"),a||(u.end="End date is required"),e&&a&&e>a&&(u.end="End date must be after start date"),i(u),Object.keys(u).length===0&&alert(`Booking confirmed!
From: ${e==null?void 0:e.toDateString()}
To: ${a==null?void 0:a.toDateString()}`)},style:{padding:"2rem",maxWidth:"400px"},children:[t("h3",{style:{marginTop:0},children:"Book Your Stay"}),t("div",{style:{marginBottom:"1.5rem"},children:t(o,{value:e,onChange:l=>{r(l),i({...d,start:void 0})},label:"Check-in Date *",placeholder:"Select check-in",error:d.start,minDate:new Date})}),t("div",{style:{marginBottom:"1.5rem"},children:t(o,{value:a,onChange:l=>{s(l),i({...d,end:void 0})},label:"Check-out Date *",placeholder:"Select check-out",error:d.end,minDate:e||new Date})}),t("button",{type:"submit",style:{width:"100%",padding:"0.75rem",background:"#0284c7",color:"white",border:"none",borderRadius:"0.5rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"},children:"Book Now"})]})}},S={render:()=>{const[e,r]=n.useState(new Date);return t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:e,onChange:r,label:"Date (Not Clearable)",clearable:!1})})}};var E,P,F;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <div style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <DatePicker value={date} onChange={setDate} label="Select Date" placeholder="Choose a date" />\r
    {date && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        Selected: {date.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(F=(P=D.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var W,q,B;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const [error, setError] = useState('');
    const handleChange = (newDate: Date | undefined) => {
      setDate(newDate);
      if (!newDate) {
        setError('Date is required');
      } else {
        setError('');
      }
    };
    return <div style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <DatePicker value={date} onChange={handleChange} label="Birth Date *" placeholder="Select your birth date" error={error} />\r
  </div>;
  }
}`,...(B=(q=g.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var V,z,O;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>(new Date());
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [date3, setDate3] = useState<Date | undefined>(new Date());
    return <div style={{
      padding: '2rem',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>\r
    <DatePicker value={date1} onChange={setDate1} label="Short Format" dateFormat="short" />\r
    <DatePicker value={date2} onChange={setDate2} label="Medium Format (Default)" dateFormat="medium" />\r
    <DatePicker value={date3} onChange={setDate3} label="Long Format" dateFormat="long" />\r
  </div>;
  }
}`,...(O=(z=f.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var L,N,_;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    maxWidth: '400px'
  }}>\r
    <DatePicker value={new Date()} label="Disabled Date Picker" disabled />\r
  </div>
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var M,R,I;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    return <div style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <DatePicker value={date} onChange={setDate} label="Select Appointment Date" placeholder="Next 30 days only" minDate={minDate} maxDate={maxDate} />\r
    <p style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>\r
      Only dates within the next 30 days are available\r
    </p>\r
  </div>;
  }
}`,...(I=(R=y.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,Y,j;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [errors, setErrors] = useState<{
      start?: string;
      end?: string;
    }>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: {
        start?: string;
        end?: string;
      } = {};
      if (!startDate) newErrors.start = 'Start date is required';
      if (!endDate) newErrors.end = 'End date is required';
      if (startDate && endDate && startDate > endDate) {
        newErrors.end = 'End date must be after start date';
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        alert(\`Booking confirmed!\\nFrom: \${startDate?.toDateString()}\\nTo: \${endDate?.toDateString()}\`);
      }
    };
    return <form onSubmit={handleSubmit} style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <h3 style={{
        marginTop: 0
      }}>Book Your Stay</h3>\r
\r
    <div style={{
        marginBottom: '1.5rem'
      }}>\r
      <DatePicker value={startDate} onChange={date => {
          setStartDate(date);
          setErrors({
            ...errors,
            start: undefined
          });
        }} label="Check-in Date *" placeholder="Select check-in" error={errors.start} minDate={new Date()} />\r
    </div>\r
\r
    <div style={{
        marginBottom: '1.5rem'
      }}>\r
      <DatePicker value={endDate} onChange={date => {
          setEndDate(date);
          setErrors({
            ...errors,
            end: undefined
          });
        }} label="Check-out Date *" placeholder="Select check-out" error={errors.end} minDate={startDate || new Date()} />\r
    </div>\r
\r
    <button type="submit" style={{
        width: '100%',
        padding: '0.75rem',
        background: '#0284c7',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer'
      }}>\r
      Book Now\r
    </button>\r
  </form>;
  }
}`,...(j=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var A,U,G;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <DatePicker value={date} onChange={setDate} label="Date (Not Clearable)" clearable={false} />\r
  </div>;
  }
}`,...(G=(U=S.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const be=["Default","WithValidation","DateFormats","DisabledState","WithConstraints","FormExample","NotClearable"];export{f as DateFormats,D as Default,b as DisabledState,v as FormExample,S as NotClearable,y as WithConstraints,g as WithValidation,be as __namedExportsOrder,fe as default};
