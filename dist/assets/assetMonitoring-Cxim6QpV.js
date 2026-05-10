import{r,y as Z,d as K,j as e,a7 as X,a6 as G,R as S,C as k,B as z,a as u,b as F,aj as J,ak as Q,s as E}from"./main-Dmb5oj2W.js";import{A as ee}from"./Alert-lCjh3mKN.js";import"./Anchor-DMcfSGTE.js";const H=r.forwardRef(({bsPrefix:s,className:n,striped:o,bordered:x,borderless:p,hover:m,size:d,variant:f,responsive:b,...y},j)=>{const l=Z(s,"table"),c=K(n,l,f&&`${l}-${f}`,d&&`${l}-${d}`,o&&`${l}-${typeof o=="string"?`striped-${o}`:"striped"}`,x&&`${l}-bordered`,p&&`${l}-borderless`,m&&`${l}-hover`),v=e.jsx("table",{...y,className:c,ref:j});if(b){let i=`${l}-responsive`;return typeof b=="string"&&(i=`${i}-${b}`),e.jsx("div",{className:i,children:v})}return v});H.displayName="Table";/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(...s)=>s.filter((n,o,x)=>!!n&&n.trim()!==""&&x.indexOf(n)===o).join(" ").trim();/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,o,x)=>x?x.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=s=>{const n=se(s);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=s=>{for(const n in s)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1},ne=r.createContext({}),re=()=>r.useContext(ne),ie=r.forwardRef(({color:s,size:n,strokeWidth:o,absoluteStrokeWidth:x,className:p="",children:m,iconNode:d,...f},b)=>{const{size:y=24,strokeWidth:j=2,absoluteStrokeWidth:l=!1,color:c="currentColor",className:v=""}=re()??{},i=x??l?Number(o??j)*24/Number(n??y):o??j;return r.createElement("svg",{ref:b,...M,width:n??y??M.width,height:n??y??M.height,stroke:s??c,strokeWidth:i,className:O("lucide",v,p),...!m&&!ae(f)&&{"aria-hidden":"true"},...f},[...d.map(([_,A])=>r.createElement(_,A)),...Array.isArray(m)?m:[m]])});/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(s,n)=>{const o=r.forwardRef(({className:x,...p},m)=>r.createElement(ie,{ref:m,iconNode:n,className:O(`lucide-${te(W(s))}`,`lucide-${s}`,x),...p}));return o.displayName=W(s),o};/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],I=g("activity",oe);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],de=g("archive",le);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],T=g("calendar",ce);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],pe=g("chart-column",xe);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],me=g("circle-check-big",he);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],P=g("clock",ge);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],U=g("plus",fe);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],ye=g("power",ue);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],je=g("triangle-alert",be);/**
 * @license lucide-react v1.12.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ne=g("x",ve);function _e(){var B;const s=new URLSearchParams(window.location.search).get("id"),n=X(),[o,x]=r.useState(null),[p,m]=r.useState([]),[d,f]=r.useState([]),[b,y]=r.useState(!0),[j,l]=r.useState(null),[c,v]=r.useState(""),[i,_]=r.useState(""),A=r.useRef(null),D=r.useRef(null);r.useEffect(()=>{s&&(async()=>{try{const h=(await E.from("monitoring_master").select("*").eq("asset_id",s)).data||[];x(h)}catch(a){console.error("Unable to fetch asset data:",a)}})()},[s]),r.useEffect(()=>{s&&(async()=>{y(!0),l(null);try{const N=((await E.from("monitoring_master").select("*")).data||[]).filter(w=>w.asset_id===s);m(N),f(N),N.length===0&&l("No monitoring logs found for this asset")}catch(a){console.error("Unable to fetch monitoring logs:",a),l("Failed to load monitoring data")}finally{y(!1)}})()},[s]),r.useEffect(()=>{if(!p.length){f([]);return}let t=[...p];(c||i)&&(t=t.filter(a=>{const h=a.monitoring_date||a.created_at;if(!h)return!1;const N=new Date(h);if(isNaN(N.getTime()))return!1;if(c){const w=new Date(c);if(w.setHours(0,0,0,0),N<w)return!1}if(i){const w=new Date(i);if(w.setHours(23,59,59,999),N>w)return!1}return!0})),f(t)},[c,i,p]);const R=()=>{n(`/add-monitoring-log?id=${s}`)},$=()=>{v(""),_("")},C=t=>{if(!t)return"N/A";const a=new Date(t);return isNaN(a.getTime())?"Invalid Date":a.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})},V=t=>{switch((t||"").toLowerCase()){case"operational":case"running":return{variant:"success",icon:e.jsx(me,{size:14}),label:"Running"};case"maintenance":case"repair":return{variant:"warning",icon:e.jsx(je,{size:14}),label:"Maintenance"};case"spare":return{variant:"secondary",icon:e.jsx(de,{size:14}),label:"Spare"};case"offline":case"inactive":return{variant:"danger",icon:e.jsx(ye,{size:14}),label:"Offline"};default:return{variant:"info",icon:e.jsx(I,{size:14}),label:t||"Unknown"}}},q=d.length,L=d.length>0?d.reduce((t,a)=>new Date(a.monitoring_date||a.created_at)>new Date(t.monitoring_date||t.created_at)?a:t):null,Y=d.reduce((t,a)=>{const h=a.monitoring_status||"unknown";return t[h]=(t[h]||0)+1,t},{});return e.jsxs("div",{style:{background:"radial-gradient(circle at 10% 30%, #254252 0%, #171C2D 100%)",minHeight:"100vh",padding:"65px 24px",position:"relative",overflow:"auto"},children:[e.jsx("div",{style:{position:"fixed",width:"600px",height:"600px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.03)",top:"-200px",right:"-200px",animation:"float 25s infinite ease-in-out",zIndex:0}}),e.jsx("div",{style:{position:"fixed",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.03)",bottom:"-150px",left:"-150px",animation:"float 20s infinite ease-in-out reverse",zIndex:0}}),e.jsx("div",{style:{position:"fixed",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.02)",top:"50%",left:"20%",animation:"float 18s infinite ease-in-out",zIndex:0}}),e.jsxs(G,{fluid:!0,style:{position:"relative",zIndex:2,maxWidth:"2000px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs(S,{className:"mb-4 g-3 align-items-start align-items-md-center",children:[e.jsx(k,{xs:12,md:8,lg:9,children:e.jsxs("div",{style:{textAlign:"center"},className:"text-md-start",children:[e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"700",color:"#EAB56F",textShadow:"0 4px 20px rgba(234, 181, 111, 0.2)",margin:0,letterSpacing:"-0.5px"},children:"Asset Monitoring Dashboard"}),e.jsxs("p",{style:{color:"#c1cbd4",marginBottom:0,fontSize:window.innerWidth<768?"0.875rem":"1rem"},children:["Monitoring logs for Asset ID: ",e.jsx("strong",{className:"text-primary",children:s})]})]})}),e.jsx(k,{xs:12,md:4,lg:3,children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},className:"justify-content-md-end",children:e.jsxs(z,{variant:"primary",onClick:R,style:{background:"linear-gradient(135deg, #EAB56F, #F9982F)",border:"none",borderRadius:"12px",padding:"14px 28px",fontSize:"0.95rem",fontWeight:"600",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",boxShadow:"0 4px 15px rgba(233, 150, 40, 0.3)",transition:"all 0.2s ease"},onMouseEnter:t=>{t.target.style.transform="translateY(-2px)",t.target.style.boxShadow="0 8px 25px rgba(233, 150, 40, 0.4)"},onMouseLeave:t=>{t.target.style.transform="translateY(0)",t.target.style.boxShadow="0 4px 15px rgba(233, 150, 40, 0.3)"},children:[e.jsx(U,{size:window.innerWidth<768?16:18,className:"me-2"}),"Add Monitoring Log"]})})})]}),e.jsxs(S,{className:"mb-4",children:[e.jsx(k,{md:4,className:"mb-3",children:e.jsx(u,{className:"h-100 shadow-sm",style:{border:"2px solid #ff7300",background:"#ff910010",borderRadius:"25px"},children:e.jsx(u.Body,{children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",style:{color:"#EAB56F"},children:"Total Logs"}),e.jsx("div",{className:"mb-0",style:{fontSize:"2rem",fontWeight:"700",color:"#bd7100"},children:q})]}),e.jsx("div",{className:"bg-primary bg-opacity-10 rounded p-2",children:e.jsx(pe,{size:24,className:"text-primary"})})]})})})}),e.jsx(k,{md:4,className:"mb-3",children:e.jsx(u,{className:"h-100 shadow-sm",style:{border:"2px solid #09ff00",background:"#00ff2a10",borderRadius:"25px"},children:e.jsx(u.Body,{children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",style:{color:"#a7fdb2"},children:"Latest Record"}),e.jsx("div",{className:"mb-0 fw-semibold",style:{fontSize:"2rem",fontWeight:"700",color:"#2a9226"},children:L?C(L.monitoring_date||L.created_at):"N/A"})]}),e.jsx("div",{className:"bg-success bg-opacity-10 rounded p-2",children:e.jsx(T,{size:24,className:"text-success"})})]})})})}),e.jsx(k,{md:4,className:"mb-3",children:e.jsx(u,{className:"h-100 shadow-sm",style:{border:"2px solid rgb(212, 0, 255)",background:"#9900ff10",borderRadius:"25px"},children:e.jsx(u.Body,{children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",style:{color:"#cb72ff"},children:"Common Status"}),e.jsx("div",{className:"mb-0 fw-semibold",style:{fontSize:"2rem",fontWeight:"700",color:"#8114ca"},children:((B=Object.entries(Y).sort((t,a)=>a[1]-t[1])[0])==null?void 0:B[0])||"N/A"})]}),e.jsx("div",{className:"rounded p-2",style:{background:"#8a04d833"},children:e.jsx(P,{size:24,color:"#9900ff"})})]})})})})]}),e.jsx(S,{className:"mb-4",children:e.jsx(k,{children:e.jsx("div",{children:e.jsx("div",{className:"d-flex flex-wrap align-items-center justify-content-end gap-3",children:e.jsxs("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"1rem",fontWeight:"600",color:"#ffae00"},children:"Filter by Monitoring Date:"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",background:"rgba(0,0,0,0.3)",borderRadius:"40px",padding:"8px 16px",gap:"8px",border:"2px solid #53535375",transition:"all 0.2s"},onClick:()=>{var t;return(t=A.current)==null?void 0:t.showPicker()},onFocus:t=>{t.target.closest("div").style.borderColor="#E37239"},onBlur:t=>{t.target.closest("div").style.borderColor="#53535375"},children:[e.jsx(F,{icon:"calendar",size:16,color:"rgb(255, 153, 0)"}),e.jsx("input",{ref:A,type:"date",value:c,onChange:t=>v(t.target.value),style:{border:"none",background:"transparent",color:"#fff",padding:"2px 8px",outline:"none",fontSize:"14px",cursor:"pointer"},placeholder:"From Date"}),e.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.8rem"},children:"From"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",background:"rgba(0,0,0,0.3)",borderRadius:"40px",padding:"8px 16px",gap:"8px",border:"2px solid #53535375",transition:"all 0.2s"},onClick:()=>{var t;return(t=D.current)==null?void 0:t.showPicker()},onFocus:t=>{t.target.closest("div").style.borderColor="#E37239"},onBlur:t=>{t.target.closest("div").style.borderColor="#53535375"},children:[e.jsx(F,{icon:"calendar",size:16,color:"rgb(255, 153, 0)"}),e.jsx("input",{ref:D,type:"date",value:i,onChange:t=>_(t.target.value),style:{border:"none",background:"transparent",color:"#fff",padding:"2px 8px",outline:"none",fontSize:"14px",cursor:"pointer"},placeholder:"To Date"}),e.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.8rem"},children:"To"})]}),(c||i)&&e.jsxs(z,{variant:"outline-secondary",onClick:$,size:"sm",style:{borderRadius:"40px",borderColor:"rgba(234, 181, 111, 0.5)",color:"#EAB56F",padding:"8px 20px"},children:[e.jsx(Ne,{size:16,className:"me-1"}),"Clear"]})]})})})})}),e.jsx(S,{children:e.jsx(k,{children:e.jsxs(u,{className:"shadow-sm border-0",style:{borderRadius:"29px"},children:[e.jsx(u.Body,{className:"p-0",children:b?e.jsxs("div",{className:"text-center py-5",children:[e.jsx(J,{variant:"primary",animation:"border"}),e.jsx("p",{className:"mt-3 text-muted",children:"Loading monitoring logs..."})]}):j?e.jsx("div",{className:"text-center py-5",children:e.jsx(ee,{variant:"warning",className:"m-3",children:j})}):d.length===0?e.jsxs("div",{className:"text-center py-5",children:[e.jsx(I,{size:48,className:"text-muted mb-3"}),e.jsx("h5",{className:"text-muted",children:p.length>0?"No logs found for selected date range":"No monitoring logs found"}),p.length===0&&e.jsxs(z,{variant:"primary",onClick:R,className:"mt-3",children:[e.jsx(U,{size:16,className:"me-1"}),"Add First Log"]}),(c||i)&&e.jsx(z,{variant:"outline-secondary",onClick:$,className:"mt-3 ms-2",children:"Clear Filters"})]}):e.jsx("div",{className:"table-responsive",style:{borderRadius:"25px"},children:e.jsxs(H,{hover:!0,className:"mb-0",children:[e.jsx("thead",{style:{backgroundColor:"#1E293B"},children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"#"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Monitoring Date"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Time"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Status"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Running Hours"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Created At"}),e.jsx("th",{style:{padding:"16px",color:"#fff"},children:"Created By"})]})}),e.jsx("tbody",{children:d.map((t,a)=>{const h=V(t.monitoring_status);return e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"16px",verticalAlign:"middle"},children:a+1}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle"},children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(T,{size:14,className:"text-muted"}),C(t.monitoring_date)]})}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle"},children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(P,{size:14,className:"text-muted"}),t.monitoring_time||"—"]})}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle"},children:e.jsx(Q,{bg:h.variant,children:e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[h.icon,h.label]})})}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle"},children:t.monitoring_running_hours||"—"}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle",fontSize:"0.85rem"},children:C(t.created_at)}),e.jsx("td",{style:{padding:"16px",verticalAlign:"middle",fontSize:"0.85rem"},children:t.created_by||"—"})]},t.id_master||a)})})]})})}),d.length>0&&e.jsx(u.Footer,{className:"bg-white text-muted",style:{borderRadius:"25px"},children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap",children:[e.jsxs("small",{children:["Showing ",d.length," of ",p.length," monitoring log(s)"]}),e.jsxs("div",{children:[c&&e.jsxs("small",{className:"me-2",children:["📅 From: ",C(c)]}),i&&e.jsxs("small",{children:["📅 To: ",C(i)]})]})]})})]})})})]}),e.jsx("style",{children:`
                    @keyframes float {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        33% { transform: translate(40px, -40px) rotate(120deg); }
                        66% { transform: translate(-20px, 20px) rotate(240deg); }
                    }
                    /* Hide the default calendar icon in all browsers */
                    input[type="date"]::-webkit-calendar-picker-indicator {
                        opacity: 0;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        cursor: pointer;
                        z-index: 2;
                    }

                    input[type="date"] {
                        position: relative;
                        cursor: pointer;
                    }

                    input[type="date"]::-ms-clear,
                    input[type="date"]::-ms-reveal {
                        display: none;
                    }

                    input[type="date"] {
                        -webkit-appearance: none;
                        appearance: none;
                    }
                `})]})}export{_e as default};
