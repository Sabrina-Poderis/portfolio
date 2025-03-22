"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{4436:(e,r,t)=>{t.d(r,{k5:()=>d});var o=t(2115),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){var o,n,l;o=e,n=r,l=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(n))in o?Object.defineProperty(o,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function d(e){return r=>o.createElement(u,i({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>o.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function u(e){var r=r=>{var t,{attr:n,size:l,title:a}=e,d=function(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(e,s),u=l||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),e.children)};return void 0!==l?o.createElement(l.Consumer,null,e=>r(e)):r(n)}},7635:(e,r,t)=>{t.d(r,{tv:()=>eV});var o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,n=e=>!e||"object"!=typeof e||0===Object.keys(e).length,l=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function s(e){let r=[];return function e(r,t){r.forEach(function(r){Array.isArray(r)?e(r,t):t.push(r)})}(e,r),r}var i=(...e)=>s(e).filter(Boolean),a=(e,r)=>{let t={},o=Object.keys(e),n=Object.keys(r);for(let l of o)if(n.includes(l)){let o=e[l],n=r[l];Array.isArray(o)||Array.isArray(n)?t[l]=i(n,o):"object"==typeof o&&"object"==typeof n?t[l]=a(o,n):t[l]=n+" "+o}else t[l]=e[l];for(let e of n)o.includes(e)||(t[e]=r[e]);return t},c=e=>e&&"string"==typeof e?e.replace(/\s+/g," ").trim():e;let d=e=>{let r=b(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),u(t,r)||f(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},u=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),n=o?u(e.slice(1),o):void 0;if(n)return n;if(0===r.validators.length)return;let l=e.join("-");return r.validators.find(({validator:e})=>e(l))?.classGroupId},p=/^\[(.+)\]$/,f=e=>{if(p.test(e)){let r=p.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},b=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)m(t[e],o,e,r);return o},m=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:g(r,e)).classGroupId=t;return}if("function"==typeof e){if(h(e)){m(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{m(n,g(r,e),t,o)})})},g=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},h=e=>e.isThemeGetter,y=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},v=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r;let t=[],o=0,n=0,l=0;for(let s=0;s<e.length;s++){let i=e[s];if(0===o&&0===n){if(":"===i){t.push(e.slice(l,s)),l=s+1;continue}if("/"===i){r=s;continue}}"["===i?o++:"]"===i?o--:"("===i?n++:")"===i&&n--}let s=0===t.length?e:e.substring(l),i=w(s);return{modifiers:t,hasImportantModifier:i!==s,baseClassName:i,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},w=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,x=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},k=e=>({cache:y(e.cacheSize),parseClassName:v(e),sortModifiers:x(e),...d(e)}),j=/\s+/,z=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],i=e.trim().split(j),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:f}=t(r);if(c){a=r+(a.length>0?" "+a:a);continue}let b=!!f,m=o(b?p.substring(0,f):p);if(!m){if(!b||!(m=o(p))){a=r+(a.length>0?" "+a:a);continue}b=!1}let g=l(d).join(":"),h=u?g+"!":g,y=h+m;if(s.includes(y))continue;s.push(y);let v=n(m,b);for(let e=0;e<v.length;++e){let r=v[e];s.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function O(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=C(e))&&(o&&(o+=" "),o+=r);return o}let C=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=C(e[o]))&&(t&&(t+=" "),t+=r);return t};function G(e,...r){let t,o,n;let l=function(i){return o=(t=k(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=z(e,t);return n(e,l),l}return function(){return l(O.apply(null,arguments))}}let M=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},P=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,N=/^\((?:(\w[\w-]*):)?(.+)\)$/i,A=/^\d+\/\d+$/,S=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,V=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,I=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,T=e=>A.test(e),_=e=>!!e&&!Number.isNaN(Number(e)),W=e=>!!e&&Number.isInteger(Number(e)),D=e=>e.endsWith("%")&&_(e.slice(0,-1)),q=e=>S.test(e),B=()=>!0,J=e=>$.test(e)&&!E.test(e),R=()=>!1,K=e=>V.test(e),F=e=>I.test(e),H=e=>!Q(e)&&!er(e),L=e=>ea(e,eb,R),Q=e=>P.test(e),U=e=>ea(e,em,J),X=e=>ea(e,eg,_),Y=e=>ea(e,ed,R),Z=e=>ea(e,ep,F),ee=e=>ea(e,R,K),er=e=>N.test(e),et=e=>ec(e,em),eo=e=>ec(e,eh),en=e=>ec(e,ed),el=e=>ec(e,eb),es=e=>ec(e,ep),ei=e=>ec(e,ey,!0),ea=(e,r,t)=>{let o=P.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},ec=(e,r,t=!1)=>{let o=N.exec(e);return!!o&&(o[1]?r(o[1]):t)},ed=e=>"position"===e,eu=new Set(["image","url"]),ep=e=>eu.has(e),ef=new Set(["length","size","percentage"]),eb=e=>ef.has(e),em=e=>"length"===e,eg=e=>"number"===e,eh=e=>"family-name"===e,ey=e=>"shadow"===e;Symbol.toStringTag;let ev=()=>{let e=M("color"),r=M("font"),t=M("text"),o=M("font-weight"),n=M("tracking"),l=M("leading"),s=M("breakpoint"),i=M("container"),a=M("spacing"),c=M("radius"),d=M("shadow"),u=M("inset-shadow"),p=M("drop-shadow"),f=M("blur"),b=M("perspective"),m=M("aspect"),g=M("ease"),h=M("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],w=()=>["auto","hidden","clip","visible","scroll"],x=()=>["auto","contain","none"],k=()=>[er,Q,a],j=()=>[T,"full","auto",...k()],z=()=>[W,"none","subgrid",er,Q],O=()=>["auto",{span:["full",W,er,Q]},er,Q],C=()=>[W,"auto",er,Q],G=()=>["auto","min","max","fr",er,Q],P=()=>["start","end","center","between","around","evenly","stretch","baseline"],N=()=>["start","end","center","stretch"],A=()=>["auto",...k()],S=()=>[T,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],$=()=>[e,er,Q],E=()=>[D,U],V=()=>["","none","full",c,er,Q],I=()=>["",_,et,U],J=()=>["solid","dashed","dotted","double"],R=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["","none",f,er,Q],F=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",er,Q],ea=()=>["none",_,er,Q],ec=()=>["none",_,er,Q],ed=()=>[_,er,Q],eu=()=>[T,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[q],breakpoint:[q],color:[B],container:[q],"drop-shadow":[q],ease:["in","out","in-out"],font:[H],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[q],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[q],shadow:[q],spacing:["px",_],text:[q],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",T,Q,er,m]}],container:["container"],columns:[{columns:[_,Q,er,i]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),Q,er]}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:x()}],"overscroll-x":[{"overscroll-x":x()}],"overscroll-y":[{"overscroll-y":x()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[W,"auto",er,Q]}],basis:[{basis:[T,"full","auto",i,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_,T,"auto","initial","none",Q]}],grow:[{grow:["",_,er,Q]}],shrink:[{shrink:["",_,er,Q]}],order:[{order:[W,"first","last","none",er,Q]}],"grid-cols":[{"grid-cols":z()}],"col-start-end":[{col:O()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":z()}],"row-start-end":[{row:O()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...P(),"normal"]}],"justify-items":[{"justify-items":[...N(),"normal"]}],"justify-self":[{"justify-self":["auto",...N()]}],"align-content":[{content:["normal",...P()]}],"align-items":[{items:[...N(),"baseline"]}],"align-self":[{self:["auto",...N(),"baseline"]}],"place-content":[{"place-content":P()}],"place-items":[{"place-items":[...N(),"baseline"]}],"place-self":[{"place-self":["auto",...N()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:S()}],w:[{w:[i,"screen",...S()]}],"min-w":[{"min-w":[i,"screen","none",...S()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...S()]}],h:[{h:["screen",...S()]}],"min-h":[{"min-h":["screen","none",...S()]}],"max-h":[{"max-h":["screen",...S()]}],"font-size":[{text:["base",t,et,U]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,er,X]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",D,Q]}],"font-family":[{font:[eo,Q,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,er,Q]}],"line-clamp":[{"line-clamp":[_,"none",er,X]}],leading:[{leading:[l,...k()]}],"list-image":[{"list-image":["none",er,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",er,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:[_,"from-font","auto",er,U]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[_,"auto",er,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",er,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",er,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),en,Y]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",el,L]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},W,er,Q],radial:["",er,Q],conic:[W,er,Q]},es,Z]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:E()}],"gradient-via-pos":[{via:E()}],"gradient-to-pos":[{to:E()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:V()}],"rounded-s":[{"rounded-s":V()}],"rounded-e":[{"rounded-e":V()}],"rounded-t":[{"rounded-t":V()}],"rounded-r":[{"rounded-r":V()}],"rounded-b":[{"rounded-b":V()}],"rounded-l":[{"rounded-l":V()}],"rounded-ss":[{"rounded-ss":V()}],"rounded-se":[{"rounded-se":V()}],"rounded-ee":[{"rounded-ee":V()}],"rounded-es":[{"rounded-es":V()}],"rounded-tl":[{"rounded-tl":V()}],"rounded-tr":[{"rounded-tr":V()}],"rounded-br":[{"rounded-br":V()}],"rounded-bl":[{"rounded-bl":V()}],"border-w":[{border:I()}],"border-w-x":[{"border-x":I()}],"border-w-y":[{"border-y":I()}],"border-w-s":[{"border-s":I()}],"border-w-e":[{"border-e":I()}],"border-w-t":[{"border-t":I()}],"border-w-r":[{"border-r":I()}],"border-w-b":[{"border-b":I()}],"border-w-l":[{"border-l":I()}],"divide-x":[{"divide-x":I()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":I()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...J(),"hidden","none"]}],"divide-style":[{divide:[...J(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...J(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_,er,Q]}],"outline-w":[{outline:["",_,et,U]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",d,ei,ee]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",er,Q,u]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:I()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[_,U]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":I()}],"inset-ring-color":[{"inset-ring":$()}],opacity:[{opacity:[_,er,Q]}],"mix-blend":[{"mix-blend":[...R(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":R()}],filter:[{filter:["","none",er,Q]}],blur:[{blur:K()}],brightness:[{brightness:[_,er,Q]}],contrast:[{contrast:[_,er,Q]}],"drop-shadow":[{"drop-shadow":["","none",p,er,Q]}],grayscale:[{grayscale:["",_,er,Q]}],"hue-rotate":[{"hue-rotate":[_,er,Q]}],invert:[{invert:["",_,er,Q]}],saturate:[{saturate:[_,er,Q]}],sepia:[{sepia:["",_,er,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",er,Q]}],"backdrop-blur":[{"backdrop-blur":K()}],"backdrop-brightness":[{"backdrop-brightness":[_,er,Q]}],"backdrop-contrast":[{"backdrop-contrast":[_,er,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_,er,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_,er,Q]}],"backdrop-invert":[{"backdrop-invert":["",_,er,Q]}],"backdrop-opacity":[{"backdrop-opacity":[_,er,Q]}],"backdrop-saturate":[{"backdrop-saturate":[_,er,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",_,er,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",er,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_,"initial",er,Q]}],ease:[{ease:["linear","initial",g,er,Q]}],delay:[{delay:[_,er,Q]}],animate:[{animate:["none",h,er,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,er,Q]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:ea()}],"rotate-x":[{"rotate-x":ea()}],"rotate-y":[{"rotate-y":ea()}],"rotate-z":[{"rotate-z":ea()}],scale:[{scale:ec()}],"scale-x":[{"scale-x":ec()}],"scale-y":[{"scale-y":ec()}],"scale-z":[{"scale-z":ec()}],"scale-3d":["scale-3d"],skew:[{skew:ed()}],"skew-x":[{"skew-x":ed()}],"skew-y":[{"skew-y":ed()}],transform:[{transform:[er,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",er,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",er,Q]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[_,et,U,X]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},ew=(e,{cacheSize:r,prefix:t,experimentalParseClassName:o,extend:n={},override:l={}})=>(ex(e,"cacheSize",r),ex(e,"prefix",t),ex(e,"experimentalParseClassName",o),ek(e.theme,l.theme),ek(e.classGroups,l.classGroups),ek(e.conflictingClassGroups,l.conflictingClassGroups),ek(e.conflictingClassGroupModifiers,l.conflictingClassGroupModifiers),ex(e,"orderSensitiveModifiers",l.orderSensitiveModifiers),ej(e.theme,n.theme),ej(e.classGroups,n.classGroups),ej(e.conflictingClassGroups,n.conflictingClassGroups),ej(e.conflictingClassGroupModifiers,n.conflictingClassGroupModifiers),ez(e,n,"orderSensitiveModifiers"),e),ex=(e,r,t)=>{void 0!==t&&(e[r]=t)},ek=(e,r)=>{if(r)for(let t in r)ex(e,t,r[t])},ej=(e,r)=>{if(r)for(let t in r)ez(e,r,t)},ez=(e,r,t)=>{let o=r[t];void 0!==o&&(e[t]=e[t]?e[t].concat(o):o)},eO=(e,...r)=>"function"==typeof e?G(ev,e,...r):G(()=>ew(ev(),e),...r),eC=G(ev);var eG={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},eM=e=>e||void 0,eP=(...e)=>eM(s(e).filter(Boolean).join(" ")),eN=null,eA={},eS=!1,e$=(...e)=>r=>r.twMerge?((!eN||eS)&&(eS=!1,eN=n(eA)?eC:eO({...eA,extend:{theme:eA.theme,classGroups:eA.classGroups,conflictingClassGroupModifiers:eA.conflictingClassGroupModifiers,conflictingClassGroups:eA.conflictingClassGroups,...eA.extend}})),eM(eN(eP(e)))):eP(e),eE=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=eP(e[t],r[t]):e[t]=r[t];return e},eV=(e,r)=>{let{extend:t=null,slots:s={},variants:d={},compoundVariants:u=[],compoundSlots:p=[],defaultVariants:f={}}=e,b={...eG,...r},m=null!=t&&t.base?eP(t.base,null==e?void 0:e.base):null==e?void 0:e.base,g=null!=t&&t.variants&&!n(t.variants)?a(d,t.variants):d,h=null!=t&&t.defaultVariants&&!n(t.defaultVariants)?{...t.defaultVariants,...f}:f;n(b.twMergeConfig)||l(b.twMergeConfig,eA)||(eS=!0,eA=b.twMergeConfig);let y=n(null==t?void 0:t.slots),v=n(s)?{}:{base:eP(null==e?void 0:e.base,y&&(null==t?void 0:t.base)),...s},w=y?v:eE({...null==t?void 0:t.slots},n(v)?{base:null==e?void 0:e.base}:v),x=n(null==t?void 0:t.compoundVariants)?u:i(null==t?void 0:t.compoundVariants,u),k=e=>{if(n(g)&&n(s)&&y)return e$(m,null==e?void 0:e.class,null==e?void 0:e.className)(b);if(x&&!Array.isArray(x))throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(p&&!Array.isArray(p))throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof p}`);let r=(e,r,t=[],o)=>{let n=t;if("string"==typeof r)n=n.concat(c(r).split(" ").map(r=>`${e}:${r}`));else if(Array.isArray(r))n=n.concat(r.reduce((r,t)=>r.concat(`${e}:${t}`),[]));else if("object"==typeof r&&"string"==typeof o){for(let t in r)if(r.hasOwnProperty(t)&&t===o){let l=r[t];if(l&&"string"==typeof l){let r=c(l);n[o]?n[o]=n[o].concat(r.split(" ").map(r=>`${e}:${r}`)):n[o]=r.split(" ").map(r=>`${e}:${r}`)}else Array.isArray(l)&&l.length>0&&(n[o]=l.reduce((r,t)=>r.concat(`${e}:${t}`),[]))}}return n},t=(t,l=g,s=null,i=null)=>{var a;let c=l[t];if(!c||n(c))return null;let d=null!=(a=null==i?void 0:i[t])?a:null==e?void 0:e[t];if(null===d)return null;let u=o(d),p=Array.isArray(b.responsiveVariants)&&b.responsiveVariants.length>0||!0===b.responsiveVariants,f=null==h?void 0:h[t],m=[];if("object"==typeof u&&p)for(let[e,t]of Object.entries(u)){let o=c[t];if("initial"===e){f=t;continue}Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(e)||(m=r(e,o,m,s))}let y=c[(null!=u&&"object"!=typeof u?u:o(f))||"false"];return"object"==typeof m&&"string"==typeof s&&m[s]?eE(m,y):m.length>0?(m.push(y),"base"===s?m.join(" "):m):y},l=(e,r)=>{if(!g||"object"!=typeof g)return null;let o=[];for(let n in g){let l=t(n,g,e,r),s="base"===e&&"string"==typeof l?l:l&&l[e];s&&(o[o.length]=s)}return o},i={};for(let r in e)void 0!==e[r]&&(i[r]=e[r]);let a=(r,t)=>{var o;let n="object"==typeof(null==e?void 0:e[r])?{[r]:null==(o=e[r])?void 0:o.initial}:{};return{...h,...i,...n,...t}},d=(e=[],r)=>{let t=[];for(let{class:o,className:n,...l}of e){let e=!0;for(let[t,o]of Object.entries(l)){let n=a(t,r)[t];if(Array.isArray(o)){if(!o.includes(n)){e=!1;break}}else{let r=e=>null==e||!1===e;if(r(o)&&r(n))continue;if(n!==o){e=!1;break}}}e&&(o&&t.push(o),n&&t.push(n))}return t},u=e=>{let r=d(x,e);if(!Array.isArray(r))return r;let t={};for(let e of r)if("string"==typeof e&&(t.base=e$(t.base,e)(b)),"object"==typeof e)for(let[r,o]of Object.entries(e))t[r]=e$(t[r],o)(b);return t},f=e=>{if(p.length<1)return null;let r={};for(let{slots:t=[],class:o,className:l,...s}of p){if(!n(s)){let r=!0;for(let t of Object.keys(s)){let o=a(t,e)[t];if(void 0===o||(Array.isArray(s[t])?!s[t].includes(o):s[t]!==o)){r=!1;break}}if(!r)continue}for(let e of t)r[e]=r[e]||[],r[e].push([o,l])}return r};if(!n(s)||!y){let e={};if("object"==typeof w&&!n(w))for(let r of Object.keys(w))e[r]=e=>{var t,o;return e$(w[r],l(r,e),(null!=(t=u(e))?t:[])[r],(null!=(o=f(e))?o:[])[r],null==e?void 0:e.class,null==e?void 0:e.className)(b)};return e}return e$(m,g?Object.keys(g).map(e=>t(e,g)):null,d(x),null==e?void 0:e.class,null==e?void 0:e.className)(b)};return k.variantKeys=(()=>{if(!(!g||"object"!=typeof g))return Object.keys(g)})(),k.extend=t,k.base=m,k.slots=w,k.variants=g,k.defaultVariants=h,k.compoundSlots=p,k.compoundVariants=x,k}}}]);