(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{45:(e,a,t)=>{Promise.resolve().then(t.bind(t,7550))},230:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var s=t(5155),l=t(1013),i=t(9911);let c=[{key:"github",title:"Github",value:"Github",href:"https://github.com/Sabrina-Poderis",icon:(0,s.jsx)(i.hL4,{})},{key:"email",title:"Email",value:"sabrina.poderis@gmail.com",href:"mailto:sabrina.poderis@gmail.com",icon:(0,s.jsx)(l.ko4,{})},{key:"phone",title:"Telefone",value:"5511959403583".replace(/^55(\d{2})(\d)(\d{4})(\d{4})$/,"($1) $2 $3-$4"),href:"https://api.whatsapp.com/send?phone=5511959403583",icon:(0,s.jsx)(i.EcP,{})},{key:"linkedIn",title:"LinkedIn",value:"LinkedIn",href:"https://www.linkedin.com/in/sabrina-poderis",icon:(0,s.jsx)(i.QEs,{})},{key:"website",title:"Portfolio",value:"Portfolio",href:"https://sabrina-poderis.github.io/portfolio",icon:(0,s.jsx)(i.f35,{})}]},3989:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var s=t(5155),l=t(7635),i=t(2115);let c=(0,l.tv)({base:"px-6 py-2 rounded-md transition-opacity duration-200 focus:outline-none cursor-pointer md:text-lg lg:text-2xl",variants:{variant:{default:"bg-primary text-white hover:text-tertiary",dark:"bg-secondary text-white"},disabled:{true:"opacity-50 cursor-not-allowed"}}}),r=e=>{let{children:a,variant:t="default",disabled:l,onClick:r,...n}=e,[o,d]=(0,i.useState)(!1);return(0,s.jsx)("button",{...n,disabled:l,"aria-disabled":l,className:"".concat(c({variant:t,disabled:l})," ").concat(o?"opacity-80":""),onFocus:()=>d(!0),onBlur:()=>d(!1),onClick:r,children:a})}},6216:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var s=t(5155);let l=e=>{let a=e.split(/\n/),t=[],l=[],i=null;return a.forEach((e,a)=>{let c=e.replace(/\*(.*?)\*/g,"<b>$1</b>").replace(/_(.*?)_/g,"<i>$1</i>").replace(/~(.*?)~/g,"<s>$1</s>");/^- /.test(e)?("ul"!==i&&(l.length>0&&(t.push((0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"list-decimal",children:l})},"list-".concat(a))),l=[]),i="ul"),l.push((0,s.jsx)("li",{className:"mb-1",dangerouslySetInnerHTML:{__html:c.slice(2).trim()}},"item-".concat(a)))):/^\d+\. /.test(e)?("ol"!==i&&(l.length>0&&(t.push((0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:"list-disc",children:l})},"list-".concat(a))),l=[]),i="ol"),l.push((0,s.jsx)("li",{className:"mb-1",dangerouslySetInnerHTML:{__html:c.replace(/^\d+\. /,"").trim()}},"item-".concat(a)))):(l.length>0&&(t.push((0,s.jsx)("div",{children:"ul"===i?(0,s.jsx)("ul",{className:"list-disc",children:l}):(0,s.jsx)("ol",{className:"list-decimal",children:l})},"list-".concat(a))),l=[],i=null),c.trim().length>0&&t.push((0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:c}},"paragraph-".concat(a))))}),l.length>0&&t.push((0,s.jsx)("div",{children:"ul"===i?(0,s.jsx)("ul",{className:"list-disc",children:l}):(0,s.jsx)("ol",{className:"list-decimal",children:l})},"final-list")),t}},7550:(e,a,t)=>{"use strict";t.d(a,{default:()=>p});var s=t(5155),l=t(230),i=t(3989),c=t(2115),r=t(7402),n=t(4608),o=t(4573);let d=(e,a)=>{let t;let s=new Date(e),l=a?new Date(a):new Date,i=(0,r.GP)(s,"MMMM 'de' yyyy",{locale:o.F}),c=a?(0,r.GP)(l,"MMMM 'de' yyyy",{locale:o.F}):"o momento",d=(0,n.W)(l,s)+1;if(d>=12){let e=Math.round(d/12);t="".concat(e," ").concat(1===e?"ano":"anos")}else t="".concat(d," ").concat(1===d?"m\xeas":"meses");return"".concat(i," at\xe9 ").concat(c," (").concat(t,")")};var x=t(6216);let h=e=>{let{name:a,role:t,contacts:l,about:i,experiences:c,college:r}=e;return(0,s.jsxs)("div",{className:"flex flex-col w-full max-w-4xl mx-auto space-y-6",children:[(0,s.jsxs)("header",{className:"space-y-2",children:[(0,s.jsx)("h1",{className:"text-4xl text-black-tertiary font-bold",children:a}),(0,s.jsx)("h2",{className:"text-xl text-gray-600",children:t})]}),(0,s.jsxs)("section",{id:"Contato",className:"space-y-2",children:[(0,s.jsx)("h2",{className:"text-2xl text-black-tertiary font-bold mb-2",children:"Contato"}),(0,s.jsx)("div",{className:"flex flex-col",children:l.map(e=>(0,s.jsx)("p",{children:(0,s.jsx)("a",{className:"text-primary underline",href:e.href,children:e.value})},"contact".concat(e.title)))})]}),(0,s.jsxs)("section",{id:"SobreMim",className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary",children:"Sobre mim"}),(0,s.jsx)("div",{className:"text-gray-700 mx-5",children:(0,x.A)(i)})]}),(0,s.jsxs)("section",{id:"ExperienciaProfissional",className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary",children:"Experi\xeancia Profissional"}),c.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-bold text-gray-900",children:e.role}),(0,s.jsxs)("p",{className:"text-gray-600",children:[(0,s.jsx)("span",{className:"font-semibold",children:e.companyName})," -"," ",(0,s.jsx)("a",{className:"text-primary underline",href:e.website,children:e.website})]}),(0,s.jsx)("p",{className:"text-gray-600 italic",children:d(e.startDate,e.endDate)}),(0,s.jsx)("div",{className:"text-gray-700 mx-5",children:(0,x.A)(e.description)}),(0,s.jsxs)("p",{className:"text-gray-700",children:[(0,s.jsx)("strong",{children:"Stack:"})," ",e.stack.join(", ")]})]},a))]}),(0,s.jsxs)("section",{id:"Forma\xe7aoAcademica",className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl w-fit font-bold text-black-tertiary pb-1 border-b-6 border-primary",children:"Forma\xe7\xe3o Acad\xeamica"}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("h3",{className:"font-bold text-gray-900",children:r.courseName}),(0,s.jsx)("p",{className:"text-gray-600",children:(0,s.jsx)("span",{className:"font-semibold",children:r.name})}),(0,s.jsx)("p",{className:"text-gray-600 italic",children:d(r.startDate,r.endDate)})]})]})]})};var m=t(6609);let p=e=>{let{dict:a}=e,t=(0,c.useRef)(null),r=(0,m.useReactToPrint)({contentRef:t});return(0,s.jsxs)("div",{className:"flex justify-center items-start p-8 bg-gray-500 gap-5",children:[(0,s.jsx)("div",{ref:t,className:"bg-white p-6 w-[800px]",children:(0,s.jsx)(h,{name:a.name,role:a.role,contacts:l.A,about:a.aboutMe,experiences:a.experiences,college:a.college})}),(0,s.jsxs)("div",{className:"w-fit flex flex-col gap-5",children:[(0,s.jsx)(i.A,{onClick:()=>{r()},children:"Exportar PDF"}),(0,s.jsx)(i.A,{onClick:()=>{window.location.href="/"},children:"Voltar pra home"})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[711,512,938,41,441,684,358],()=>a(45)),_N_E=e.O()}]);