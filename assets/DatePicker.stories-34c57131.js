import{a as u,j as t}from"./jsx-runtime-c9381026.js";import{r as n}from"./index-8b3efc3f.js";import{C as Z}from"./Calendar-a6f11d6d.js";import{a as c}from"./styled-components.browser.esm-f7e1e14e.js";import"./_commonjsHelpers-de833af9.js";const ee=c.div`position: relative; width: 100%;`,te=c.label`
  display: block; 
  font-size: ${e=>e.theme.typography.fontSize.sm}; 
  font-weight: ${e=>e.theme.typography.fontWeight.medium}; 
  color: ${e=>e.theme.colors.neutral[700]}; 
  margin-bottom: ${e=>e.theme.spacing[1]}px;
`,ae=c.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing[3]}px;
  background-color: ${e=>e.$disabled?e.theme.colors.neutral[50]:e.theme.colors.neutral[0]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.semantic.error:e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.radii.lg};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-family: ${e=>e.theme.typography.fontFamily.sans};
  color: ${e=>e.theme.colors.neutral[900]};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all ${e=>e.theme.transitions.duration.base};
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${e=>e.$hasError?e.theme.colors.semantic.error:e.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.semantic.error:e.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(239, 68, 68, 0.1)":"rgba(14, 165, 233, 0.1)"};
  }
`,re=c.span`color: ${e=>e.theme.colors.neutral[400]};`,ne=c.span`color: ${e=>e.theme.colors.neutral[900]}; font-weight: ${e=>e.theme.typography.fontWeight.medium};`,oe=c.div`display: flex; align-items: center; gap: ${e=>e.theme.spacing[2]}px;`,se=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.neutral[500]};
  cursor: pointer;
  border-radius: ${e=>e.theme.radii.sm};
  transition: all ${e=>e.theme.transitions.fast};

  &:hover {
    background-color: ${e=>e.theme.colors.neutral[100]};
    color: ${e=>e.theme.colors.neutral[700]};
  }
`,de=c.div`
  position: absolute; 
  top: calc(100% + 8px); 
  left: 0; 
  z-index: ${e=>e.theme.zIndices.dropdown}; 
  opacity: ${e=>e.$isOpen?1:0}; 
  visibility: ${e=>e.$isOpen?"visible":"hidden"}; 
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"}; 
  transition: all ${e=>e.theme.transitions.duration.base};
`,ie=c.span`
  display: block; 
  margin-top: ${e=>e.theme.spacing[1]}px; 
  font-size: ${e=>e.theme.typography.fontSize.sm}; 
  color: ${e=>e.theme.colors.semantic.error};
`,le=()=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),ce=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),o=({value:e,onChange:r,placeholder:a="Select date",minDate:d,maxDate:s,disabledDates:i,disabled:h=!1,error:l,label:m,clearable:G=!0,dateFormat:k="medium"})=>{const[$,x]=n.useState(!1),w=n.useRef(null),J=p=>{const X=k==="short"?{month:"numeric",day:"numeric",year:"numeric"}:k==="long"?{weekday:"long",year:"numeric",month:"long",day:"numeric"}:{year:"numeric",month:"short",day:"numeric"};return p.toLocaleDateString("en-US",X)},K=p=>{r==null||r(p),x(!1)},Q=p=>{p.stopPropagation(),r==null||r(void 0)},C=p=>{w.current&&!w.current.contains(p.target)&&x(!1)};return n.useEffect(()=>(document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}),[]),u(ee,{ref:w,children:[m&&t(te,{children:m}),u(ae,{onClick:()=>!h&&x(!$),disabled:h,$hasError:!!l,$disabled:h,type:"button",children:[e?t(ne,{children:J(e)}):t(re,{children:a}),u(oe,{children:[G&&e&&!h&&t(se,{onClick:Q,type:"button",children:t(ce,{})}),t(le,{})]})]}),l&&t(ie,{children:l}),t(de,{$isOpen:$,children:t(Z,{value:e,onChange:K,minDate:d,maxDate:s,disabledDates:i})})]})};try{o.displayName="DatePicker",o.__docgenInfo={description:"",displayName:"DatePicker",props:{value:{defaultValue:null,description:"Currently selected date",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Callback when date is selected",name:"onChange",required:!1,type:{name:"((date: Date) => void)"}},placeholder:{defaultValue:{value:"Select date"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:null,description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[]"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error state",name:"error",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"Show clear button",name:"clearable",required:!1,type:{name:"boolean"}},dateFormat:{defaultValue:{value:"medium"},description:"Date format for display",name:"dateFormat",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"short"'},{value:'"long"'}]}}}}}catch{}const ge={title:"Components/DatePicker",component:o,parameters:{layout:"centered"},tags:["autodocs"]},D={render:()=>{const[e,r]=n.useState();return u("div",{style:{padding:"2rem",maxWidth:"400px"},children:[t(o,{value:e,onChange:r,label:"Select Date",placeholder:"Choose a date"}),e&&u("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:["Selected: ",e.toDateString()]})]})}},g={render:()=>{const[e,r]=n.useState(),[a,d]=n.useState("");return t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:e,onChange:i=>{r(i),d(i?"":"Date is required")},label:"Birth Date *",placeholder:"Select your birth date",error:a})})}},f={render:()=>{const[e,r]=n.useState(new Date),[a,d]=n.useState(new Date),[s,i]=n.useState(new Date);return u("div",{style:{padding:"2rem",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[t(o,{value:e,onChange:r,label:"Short Format",dateFormat:"short"}),t(o,{value:a,onChange:d,label:"Medium Format (Default)",dateFormat:"medium"}),t(o,{value:s,onChange:i,label:"Long Format",dateFormat:"long"})]})}},b={render:()=>t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:new Date,label:"Disabled Date Picker",disabled:!0})})},y={render:()=>{const[e,r]=n.useState(),a=new Date,d=new Date(a.getFullYear(),a.getMonth(),a.getDate()),s=new Date(a.getFullYear(),a.getMonth(),a.getDate()+30);return u("div",{style:{padding:"2rem",maxWidth:"400px"},children:[t(o,{value:e,onChange:r,label:"Select Appointment Date",placeholder:"Next 30 days only",minDate:d,maxDate:s}),t("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"#6b7280"},children:"Only dates within the next 30 days are available"})]})}},v={render:()=>{const[e,r]=n.useState(),[a,d]=n.useState(),[s,i]=n.useState({});return u("form",{onSubmit:l=>{l.preventDefault();const m={};e||(m.start="Start date is required"),a||(m.end="End date is required"),e&&a&&e>a&&(m.end="End date must be after start date"),i(m),Object.keys(m).length===0&&alert(`Booking confirmed!
From: ${e==null?void 0:e.toDateString()}
To: ${a==null?void 0:a.toDateString()}`)},style:{padding:"2rem",maxWidth:"400px"},children:[t("h3",{style:{marginTop:0},children:"Book Your Stay"}),t("div",{style:{marginBottom:"1.5rem"},children:t(o,{value:e,onChange:l=>{r(l),i({...s,start:void 0})},label:"Check-in Date *",placeholder:"Select check-in",error:s.start,minDate:new Date})}),t("div",{style:{marginBottom:"1.5rem"},children:t(o,{value:a,onChange:l=>{d(l),i({...s,end:void 0})},label:"Check-out Date *",placeholder:"Select check-out",error:s.end,minDate:e||new Date})}),t("button",{type:"submit",style:{width:"100%",padding:"0.75rem",background:"#0284c7",color:"white",border:"none",borderRadius:"0.5rem",fontSize:"1rem",fontWeight:600,cursor:"pointer"},children:"Book Now"})]})}},S={render:()=>{const[e,r]=n.useState(new Date);return t("div",{style:{padding:"2rem",maxWidth:"400px"},children:t(o,{value:e,onChange:r,label:"Date (Not Clearable)",clearable:!1})})}};var E,P,F;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(P=D.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var W,q,V;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var z,B,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,R,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    maxWidth: '400px'
  }}>\r
    <DatePicker value={new Date()} label="Disabled Date Picker" disabled />\r
  </div>
}`,...(M=(R=b.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var N,_,T;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(_=y.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var Y,j,I;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(I=(j=v.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var H,A,U;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div style={{
      padding: '2rem',
      maxWidth: '400px'
    }}>\r
    <DatePicker value={date} onChange={setDate} label="Date (Not Clearable)" clearable={false} />\r
  </div>;
  }
}`,...(U=(A=S.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const fe=["Default","WithValidation","DateFormats","DisabledState","WithConstraints","FormExample","NotClearable"];export{f as DateFormats,D as Default,b as DisabledState,v as FormExample,S as NotClearable,y as WithConstraints,g as WithValidation,fe as __namedExportsOrder,ge as default};
