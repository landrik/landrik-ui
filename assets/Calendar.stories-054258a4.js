import{a,j as e}from"./jsx-runtime-c9381026.js";import{r as i}from"./index-8b3efc3f.js";import{C as o}from"./Calendar-a6f11d6d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f7e1e14e.js";const oe={title:"Components/Calendar",component:o,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>{const[t,r]=i.useState(new Date);return a("div",{children:[e(o,{value:t,onChange:r}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Date:"})," ",t.toDateString()]})]})}},m={render:()=>{const[t,r]=i.useState();return a("div",{children:[e(o,{value:t,onChange:r}),t?a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Date:"})," ",t.toDateString()]}):e("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:"No date selected"})]})}},D={render:()=>{const[t,r]=i.useState(),n=new Date,d=new Date(n.getFullYear(),n.getMonth(),n.getDate()),s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+30);return a("div",{children:[a("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e("strong",{children:"Constraint:"})," Can only select dates within the next 30 days"]}),e(o,{value:t,onChange:r,minDate:d,maxDate:s}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Date:"})," ",t.toDateString()]})]})}},u={render:()=>{const[t,r]=i.useState(),n=new Date,d=[];for(let s=-10;s<=30;s++){const l=new Date(n.getFullYear(),n.getMonth(),n.getDate()+s),c=l.getDay();(c===0||c===6)&&d.push(l)}return a("div",{children:[a("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e("strong",{children:"Constraint:"})," Weekends are disabled"]}),e(o,{value:t,onChange:r,disabledDates:d}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Date:"})," ",t.toDateString()]})]})}},h={render:()=>{const[t,r]=i.useState();return a("div",{children:[a("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e("strong",{children:"Week starts on:"})," Monday"]}),e(o,{value:t,onChange:r,firstDayOfWeek:1})]})}},y={render:()=>{const[t,r]=i.useState(),[n,d]=i.useState();return a("div",{children:[e("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:e("strong",{children:"Select a date range"})}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[a("div",{children:[e("h4",{style:{marginTop:0,marginBottom:"1rem"},children:"Start Date"}),e(o,{value:t,onChange:l=>{r(l),n&&l>n&&d(void 0)},maxDate:n})]}),a("div",{children:[e("h4",{style:{marginTop:0,marginBottom:"1rem"},children:"End Date"}),e(o,{value:n,onChange:d,minDate:t})]})]}),t&&n&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Range:"}),e("br",{}),"From: ",t.toDateString(),e("br",{}),"To: ",n.toDateString(),e("br",{}),"Duration: ",Math.ceil((n.getTime()-t.getTime())/(1e3*60*60*24))," days"]})]})}},p={render:()=>{const[t,r]=i.useState(),n=new Date,d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1),s=new Date(n.getFullYear(),n.getMonth()+3,n.getDate()),l=[new Date(n.getFullYear(),n.getMonth(),n.getDate()+3),new Date(n.getFullYear(),n.getMonth(),n.getDate()+7),new Date(n.getFullYear(),n.getMonth(),n.getDate()+14),new Date(n.getFullYear(),n.getMonth(),n.getDate()+21)];return a("div",{children:[a("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e("strong",{children:"Hotel Booking Calendar"}),e("br",{}),e("small",{children:"Select a check-in date (grayed out dates are already booked)"})]}),e(o,{value:t,onChange:r,minDate:d,maxDate:s,disabledDates:l}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#d1fae5",borderRadius:"0.5rem",border:"1px solid #10b981"},children:[e("strong",{children:"✓ Check-in Date:"})," ",t.toDateString()]})]})}},v={render:()=>{const[t,r]=i.useState(),n=new Date,d=new Date(n.getFullYear()-18,n.getMonth(),n.getDate()),s=new Date(n.getFullYear()-100,0,1);return a("div",{children:[a("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e("strong",{children:"Select Your Birthday"}),e("br",{}),e("small",{children:"Must be at least 18 years old"})]}),e(o,{value:t,onChange:r,minDate:s,maxDate:d}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Birthday:"})," ",t.toDateString(),e("br",{}),e("strong",{children:"Age:"})," ",Math.floor((n.getTime()-t.getTime())/(1e3*60*60*24*365.25))," years old"]})]})}},f={render:()=>{const[t,r]=i.useState();return a("div",{children:[e("div",{style:{marginBottom:"1rem",padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:e("strong",{children:"Two Month View"})}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(o,{value:t,onChange:r}),e(o,{value:t,onChange:r})]}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[e("strong",{children:"Selected Date:"})," ",t.toDateString()]})]})}},b={render:()=>{const[t,r]=i.useState();return a("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[a("div",{children:[e("h3",{style:{marginTop:0},children:"Standalone Calendar"}),e(o,{value:t,onChange:r})]}),a("div",{style:{flex:1,minWidth:"300px"},children:[e("h3",{style:{marginTop:0},children:"Event Details"}),t?a("div",{style:{padding:"1.5rem",background:"#f9fafb",borderRadius:"0.5rem",border:"1px solid #e5e7eb"},children:[e("h4",{style:{marginTop:0},children:"Selected Date"}),e("p",{style:{fontSize:"1.125rem",fontWeight:600,color:"#0284c7",margin:"0.5rem 0"},children:t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),e("p",{style:{margin:"1rem 0 0",color:"#6b7280"},children:"You can add event details here..."})]}):e("div",{style:{padding:"1.5rem",background:"#f9fafb",borderRadius:"0.5rem",border:"1px solid #e5e7eb"},children:e("p",{style:{margin:0,color:"#6b7280"},children:"Select a date to view details"})})]})]})}},S={render:()=>{const[t,r]=i.useState(),n=d=>{const s=d.toLocaleDateString("en-US",{weekday:"long"}),l=Math.floor((d.getTime()-new Date(d.getFullYear(),0,0).getTime())/864e5),c=Math.ceil(l/7);return{dayOfWeek:s,dayOfYear:l,weekNumber:c}};return a("div",{children:[e(o,{value:t,onChange:r}),t&&a("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f3f4f6",borderRadius:"0.5rem"},children:[a("div",{style:{marginBottom:"0.5rem"},children:[e("strong",{children:"Selected:"})," ",t.toDateString()]}),a("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:[a("div",{children:["Day: ",n(t).dayOfWeek]}),a("div",{children:["Day of Year: ",n(t).dayOfYear]}),a("div",{children:["Week: ",n(t).weekNumber]})]})]})]})}};var k,C,w;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    return <div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} />\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Date:</strong> {selectedDate.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,x,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    return <div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} />\r
    {selectedDate ? <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Date:</strong> {selectedDate.toDateString()}\r
      </div> : <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        No date selected\r
      </div>}\r
  </div>;
  }
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var R,Y,B;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Constraint:</strong> Can only select dates within the next 30 days\r
    </div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} minDate={minDate} maxDate={maxDate} />\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Date:</strong> {selectedDate.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(B=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var F,W,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const today = new Date();

    // Disable all weekends
    const disabledDates: Date[] = [];
    for (let i = -10; i <= 30; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const day = date.getDay();
      if (day === 0 || day === 6) {
        disabledDates.push(date);
      }
    }
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Constraint:</strong> Weekends are disabled\r
    </div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} disabledDates={disabledDates} />\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Date:</strong> {selectedDate.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var E,I,N;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Week starts on:</strong> Monday\r
    </div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} firstDayOfWeek={1} />\r
  </div>;
  }
}`,...(N=(I=h.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var U,z,L;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const handleStartDateChange = (date: Date) => {
      setStartDate(date);
      if (endDate && date > endDate) {
        setEndDate(undefined);
      }
    };
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Select a date range</strong>\r
    </div>\r
    <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>\r
      <div>\r
        <h4 style={{
            marginTop: 0,
            marginBottom: '1rem'
          }}>Start Date</h4>\r
        <Calendar value={startDate} onChange={handleStartDateChange} maxDate={endDate} />\r
      </div>\r
      <div>\r
        <h4 style={{
            marginTop: 0,
            marginBottom: '1rem'
          }}>End Date</h4>\r
        <Calendar value={endDate} onChange={setEndDate} minDate={startDate} />\r
      </div>\r
    </div>\r
    {startDate && endDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Range:</strong><br />\r
        From: {startDate.toDateString()}<br />\r
        To: {endDate.toDateString()}<br />\r
        Duration: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days\r
      </div>}\r
  </div>;
  }
}`,...(L=(z=y.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,V,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());

    // Some random blocked dates (already booked)
    const bookedDates = [new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 21)];
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Hotel Booking Calendar</strong><br />\r
      <small>Select a check-in date (grayed out dates are already booked)</small>\r
    </div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} minDate={minDate} maxDate={maxDate} disabledDates={bookedDates} />\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#d1fae5',
        borderRadius: '0.5rem',
        border: '1px solid #10b981'
      }}>\r
        <strong>✓ Check-in Date:</strong> {selectedDate.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var A,H,_;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, 0, 1);
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Select Your Birthday</strong><br />\r
      <small>Must be at least 18 years old</small>\r
    </div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} minDate={minDate} maxDate={maxDate} />\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Birthday:</strong> {selectedDate.toDateString()}<br />\r
        <strong>Age:</strong> {Math.floor((today.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years old\r
      </div>}\r
  </div>;
  }
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const today = new Date();
    return <div>\r
    <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem'
      }}>\r
      <strong>Two Month View</strong>\r
    </div>\r
    <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>\r
      <Calendar value={selectedDate} onChange={setSelectedDate} />\r
      <Calendar value={selectedDate} onChange={setSelectedDate} />\r
    </div>\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <strong>Selected Date:</strong> {selectedDate.toDateString()}\r
      </div>}\r
  </div>;
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    return <div style={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>\r
    <div>\r
      <h3 style={{
          marginTop: 0
        }}>Standalone Calendar</h3>\r
      <Calendar value={selectedDate} onChange={setSelectedDate} />\r
    </div>\r
\r
    <div style={{
        flex: 1,
        minWidth: '300px'
      }}>\r
      <h3 style={{
          marginTop: 0
        }}>Event Details</h3>\r
      {selectedDate ? <div style={{
          padding: '1.5rem',
          background: '#f9fafb',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>\r
          <h4 style={{
            marginTop: 0
          }}>Selected Date</h4>\r
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#0284c7',
            margin: '0.5rem 0'
          }}>\r
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}\r
          </p>\r
          <p style={{
            margin: '1rem 0 0',
            color: '#6b7280'
          }}>\r
            You can add event details here...\r
          </p>\r
        </div> : <div style={{
          padding: '1.5rem',
          background: '#f9fafb',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>\r
          <p style={{
            margin: 0,
            color: '#6b7280'
          }}>Select a date to view details</p>\r
        </div>}\r
    </div>\r
  </div>;
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const getDateInfo = (date: Date) => {
      const dayOfWeek = date.toLocaleDateString('en-US', {
        weekday: 'long'
      });
      const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
      const weekNumber = Math.ceil(dayOfYear / 7);
      return {
        dayOfWeek,
        dayOfYear,
        weekNumber
      };
    };
    return <div>\r
    <Calendar value={selectedDate} onChange={setSelectedDate} />\r
\r
    {selectedDate && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>\r
        <div style={{
          marginBottom: '0.5rem'
        }}>\r
          <strong>Selected:</strong> {selectedDate.toDateString()}\r
        </div>\r
        <div style={{
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>\r
          <div>Day: {getDateInfo(selectedDate).dayOfWeek}</div>\r
          <div>Day of Year: {getDateInfo(selectedDate).dayOfYear}</div>\r
          <div>Week: {getDateInfo(selectedDate).weekNumber}</div>\r
        </div>\r
      </div>}\r
  </div>;
  }
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const se=["Default","NoInitialValue","WithMinMaxDates","WithDisabledDates","MondayFirstDay","DateRangePicker","BookingCalendar","BirthdayPicker","MultipleCalendars","InlineUsage","CustomDateDisplay"];export{v as BirthdayPicker,p as BookingCalendar,S as CustomDateDisplay,y as DateRangePicker,g as Default,b as InlineUsage,h as MondayFirstDay,f as MultipleCalendars,m as NoInitialValue,u as WithDisabledDates,D as WithMinMaxDates,se as __namedExportsOrder,oe as default};
