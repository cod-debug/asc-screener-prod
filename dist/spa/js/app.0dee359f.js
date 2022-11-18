(()=>{var t={4647:(t,e,a)=>{"use strict";a(8964),a(702);var o=a(799),n=a(1947),r=a(499),s=a(9835);function i(t,e,a,o,n,r){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});var c=a(1639);const u=(0,c.Z)(l,[["render",i]]),d=u;var p=a(1925),m=a(3340),h=a(8910);const f=[{name:"home",path:"/",requiresAuth:!1,component:()=>Promise.all([a.e(736),a.e(268)]).then(a.bind(a,4268)),children:[{name:"home-page",path:"",component:()=>Promise.all([a.e(736),a.e(71)]).then(a.bind(a,71))},{name:"redirect-page",path:"/redirect",component:()=>a.e(797).then(a.bind(a,5797))}]},{name:"dashboard",path:"/asc/page/",component:()=>Promise.all([a.e(736),a.e(449)]).then(a.bind(a,7449)),children:[{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list",path:"application/s1/lists",component:()=>Promise.all([a.e(736),a.e(56)]).then(a.bind(a,4056))},{name:"individual-application-update",path:"application/s1/update/:id",component:()=>Promise.all([a.e(736),a.e(165)]).then(a.bind(a,3165))},{name:"multiple-application-list",path:"application/s1/multiple",component:()=>Promise.all([a.e(736),a.e(822)]).then(a.bind(a,2822))},{name:"special-application-list",path:"application/s1/special",component:()=>Promise.all([a.e(736),a.e(38)]).then(a.bind(a,9038))},{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list-s2",path:"application/s2/lists",component:()=>a.e(359).then(a.bind(a,6987))},{name:"announcement-view",path:"announcement",component:()=>a.e(337).then(a.bind(a,2337))}]}],v=f;var g=a(3703);const A=(0,m.BC)((function({store:t,ssrContext:e}){const a=h.PO,o=localStorage.getItem("token"),n=localStorage.getItem("user_email");t.commit("auth/setToken",o),t.commit("auth/setUserDetails",n);const r=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:a("/")});return r.beforeEach(((t,e,a)=>{t.requiresAuth&&!o?a({name:"home"}):a()})),r}));async function y(t,e){const o=t(d);o.use(n.Z,e);const s="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:i}=await Promise.resolve().then(a.bind(a,1925)),l=(0,r.Xl)("function"===typeof A?await A({store:s}):A);return s.$router=l,{app:o,store:s,storeKey:i,router:l}}var _=a(6827),b=a(3527);const w={config:{},plugins:{LocalStorage:g.Z,Notify:_.Z,Dialog:b.Z}},P="/";async function S({app:t,router:e,store:a,storeKey:o},n){let r=!1;const s=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(r=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=s(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===r&&u<n.length;u++)try{await n[u]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:P})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&(t.use(e),t.use(a,o),t.mount("#q-app"))}y(o.ri,w).then((t=>Promise.all([Promise.resolve().then(a.bind(a,6288)),Promise.resolve().then(a.bind(a,1569)),Promise.resolve().then(a.bind(a,958))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));S(t,a)}))))},1569:(t,e,a)=>{"use strict";a.r(e),a.d(e,{api:()=>s,default:()=>i});var o=a(3340),n=a(9981),r=a.n(n);const s=r().create({baseURL:"http://localhost:3006"}),i=(0,o.xr)((({app:t})=>{t.config.globalProperties.$axios=r(),t.config.globalProperties.$api=s}))},6288:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var o=a(3340),n=a(9991);const r={failed:"Action failed",success:"Action was successful"},s={"en-US":r},i=(0,o.xr)((({app:t})=>{const e=(0,n.o)({locale:"en-US",messages:s});t.use(e)}))},958:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s,rules:()=>r});var o=a(6827),n=a(3340);const r={required(t){return console.log(t,"value"),[t=>t&&t.length>0||"This field is required!"]},requiredSelect(t){return[t=>t||"This field is required!"]},validateEmail(t){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(t)||"Invalid email format"},confirmPassword(t,e){return t===e||"Confirm password does not  match!"},validateContact(t){var e=/^\(?([0-9]{11})\)?$/;return e.test(t)||"Invalid contact number format"},fileSizeRestrict(t){console.log(t.size);const e=3145728;return t.size<e||"Maximum of 3mb only"},fileTypeRestrict(t){return console.log(t),"application/pdf"==t.type||"Accepts PDF file only"},imageRestriction(t){o.Z.create({type:"negative",message:`${t.length} Images does not pass on validation`})},filterSelect(t,e,a){""!==t||e((()=>{a.value=stringOptions}))},update(){const t=val.toLowerCase();options.value=stringOptions.filter((e=>e.toLowerCase().indexOf(t)>-1))}},s=(0,n.xr)((({app:t})=>{t.config.globalProperties.$rules=r}))},6011:()=>{},2400:()=>{},343:()=>{},3315:()=>{},7320:()=>{},9432:()=>{},4200:()=>{},7221:()=>{},1925:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>re});var o={};a.r(o),a.d(o,{getToken:()=>g,getUserDetails:()=>v,isAuthenticated:()=>f});var n={};a.r(n),a.d(n,{removeToken:()=>y,setToken:()=>A,setUserDetails:()=>_});var r={};a.r(r),a.d(r,{getAllEmployees:()=>U,getEnv:()=>I,login:()=>R,registerApplicant:()=>B});var s={};a.r(s),a.d(s,{approveUser:()=>z});var i={};a.r(i),a.d(i,{getAllUsers:()=>J,getEnv:()=>H});var l={};a.r(l),a.d(l,{addCompany:()=>ct,getAllAffiliation:()=>ut,getAllCompanies:()=>lt,getEnv:()=>it});var c={};a.r(c),a.d(c,{getEnv:()=>Pt,getS1Applications:()=>St,passToReviewer:()=>Lt,updateApp:()=>Et,verifyApp:()=>$t});var u={};a.r(u),a.d(u,{comment:()=>Mt,getEnv:()=>Dt,getSpecific:()=>Ft,lockApp:()=>Zt,reassign:()=>qt});var d={};a.r(d),a.d(d,{getAllUsers:()=>oe,getEnv:()=>ae});var p=a(3340),m=a(3100);function h(){return{isAuthenticated:!1,token:"",userDetails:{}}}const f=(t,e)=>t.isAuthenticated,v=(t,e)=>t.userDetails,g=(t,e)=>t.token,A=(t,e)=>{t.token=e,t.isAuthenticated=!0},y=(t,e)=>{t.token="",t.isAuthenticated=!1,t.userDetails={}},_=(t,e)=>{t.userDetails=e};var b,w,P=a(9981),S=a.n(P);const{LocalStorage:$,Notify:E}=a(9066),L={API_BASE_URL:(null===(b=window)||void 0===b||null===(w=b.appConfig)||void 0===w?void 0:w.API_BASE_URL)||"http://18.140.158.179:4545"};function I(t){return L[t]}const U=async({commit:t},e)=>{let a=await S()({url:"http://127.0.0.1:8000/all-employees/",method:"get"});return a},B=async({commit:t},e)=>{let a=await S()({url:`${I("API_BASE_URL")}/users/register/applicant`,data:e,method:"post"});return a},R=async({commit:t},e)=>{let a=null;try{a=await S()({url:`${I("API_BASE_URL")}/users/login`,data:e,method:"post"})}catch(o){a.data=o,a.status=400}return a},k={namespaced:!0,state:h,getters:o,mutations:n,actions:r};var C=a(4182),T=a.n(C),O=a(3376),j=a(5407);const{LocalStorage:N,Notify:x}=a(9066),z=async({commit:t},e)=>{let a=await S()({url:process.env.API_URL+`/apprv/${e.id}`,method:"post",headers:{authorization:`Bearer ${N.get("token")}`}});return a},D={namespaced:!0,state:T(),getters:O,mutations:j,actions:s};function q(){return{}}var Z,M,F=a(6011),K=a(2400);const{LocalStorage:Q,Notify:X}=a(9066),G={API_BASE_URL:(null===(Z=window)||void 0===Z||null===(M=Z.appConfig)||void 0===M?void 0:M.API_BASE_URL)||"http://18.140.158.179:4545"};function H(t){return G[t]}const J=async({commit:t},e)=>{let a=await S()({url:`${H("API_BASE_URL")}/users/all/`,data:e,method:"get"});return a},V={namespaced:!0,state:q,getters:F,mutations:K,actions:i};function W(){return{}}var Y,tt,et=a(4200),at=a(7221);const{LocalStorage:ot,Notify:nt}=a(9066),rt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},st={API_BASE_URL:(null===(Y=window)||void 0===Y||null===(tt=Y.appConfig)||void 0===tt?void 0:tt.API_BASE_URL)||"http://18.140.158.179:4545"};function it(t){return st[t]}const lt=async({commit:t},e)=>{let a=await S()({method:"get",url:`${it("API_BASE_URL")}/company/getall/`,params:e,headers:rt});return a},ct=async({commit:t},e)=>{let a=await S()({method:"post",url:`${it("API_BASE_URL")}/company/create/`,data:e,headers:rt});return a},ut=async({commit:t},e)=>{let a=null;try{a=await S()({url:`${it("API_BASE_URL")}/affiliate/getall/`,params:e,method:"get",headers:rt})}catch(o){a.data=o,a.status=400}return a},dt={namespaced:!0,state:W,getters:et,mutations:at,actions:l};function pt(){return{}}var mt,ht,ft=a(2796),vt=a(6764);a(8964);const{LocalStorage:gt,Notify:At}=a(9066);let yt="/api/v1",_t=localStorage.getItem("token")||"";const bt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${_t.replace("__q_strn|","")}`},wt={API_BASE_URL:(null===(mt=window)||void 0===mt||null===(ht=mt.appConfig)||void 0===ht?void 0:ht.API_BASE_URL)||"http://18.140.158.179:4545"};function Pt(t){return wt[t]}const St=async({commit:t},e)=>{let a={};try{a=await S()({method:"post",url:`${Pt("API_BASE_URL")}${yt}/screener/get-applications/`,data:e.data,params:e.params,headers:bt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},$t=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Pt("API_BASE_URL")}${yt}/screener/verify-applications/${e.id}`,data:e.data,headers:bt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Et=async({commit:t},e)=>{let a={};try{a=await S()({method:"post",url:`${Pt("API_BASE_URL")}${yt}/screener/update-applications/${e.id}`,data:e.data,headers:bt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Lt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Pt("API_BASE_URL")}${yt}/screener/screened-applications/${e.id}`,data:e.data,headers:bt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},It={namespaced:!0,state:pt,getters:ft,mutations:vt,actions:c};function Ut(){return{}}var Bt,Rt,kt=a(7320),Ct=a(9432);const{LocalStorage:Tt,Notify:Ot}=a(9066);let jt="/api/v1",Nt=localStorage.getItem("token")||"";const xt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Nt.replace("__q_strn|","")}`},zt={API_BASE_URL:(null===(Bt=window)||void 0===Bt||null===(Rt=Bt.appConfig)||void 0===Rt?void 0:Rt.API_BASE_URL)||"http://18.140.158.179:4545"};function Dt(t){return zt[t]}const qt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Dt("API_BASE_URL")}${jt}/asc-user/reassign-application/${e.id}`,data:e.data,params:e.params,headers:xt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Zt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Dt("API_BASE_URL")}${jt}/asc-user/lock-application/${e.id}`,data:e,headers:xt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Mt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Dt("API_BASE_URL")}${jt}/asc-user/make-comment/${e.id}`,data:e.data,headers:xt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ft=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${Dt("API_BASE_URL")}${jt}/asc-user/view-application/${e.id}`,headers:xt})}catch(r){var o,n;a.data=(null===r||void 0===r||null===(o=r.response)||void 0===o?void 0:o.data)||null,a.status=(null===r||void 0===r||null===(n=r.response)||void 0===n?void 0:n.status)||null}return a},Kt={namespaced:!0,state:Ut,getters:kt,mutations:Ct,actions:u};function Qt(){return{}}var Xt,Gt,Ht=a(343),Jt=a(3315);const{LocalStorage:Vt,Notify:Wt}=a(9066);let Yt=localStorage.getItem("token")||"";const te={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Yt.replace("__q_strn|","")}`},ee={ADMIN_API_BASE_URL:(null===(Xt=window)||void 0===Xt||null===(Gt=Xt.appConfig)||void 0===Gt?void 0:Gt.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function ae(t){return ee[t]}const oe=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${ae("ADMIN_API_BASE_URL")}/users/getall/`,params:e,headers:te})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ne={namespaced:!0,state:Qt,getters:Ht,mutations:Jt,actions:d},re=(0,p.h)((function(){const t=(0,m.MT)({modules:{auth:k,users:D,account:V,company:dt,s1:It,asc_user:Kt,admin_api:ne},strict:!1});return t}))},2796:()=>{},6764:()=>{},3376:()=>{},5407:()=>{},4182:()=>{}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,a),r.exports}a.m=t,(()=>{var t=[];a.O=(e,o,n,r)=>{if(!o){var s=1/0;for(u=0;u<t.length;u++){for(var[o,n,r]=t[u],i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((t=>a.O[t](o[l])))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,n,r]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,o)=>(a.f[o](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{38:"75e7d3d7",56:"549136a8",71:"d5a87409",160:"d495359a",165:"9cbf76ef",268:"91c506ba",337:"aab3eea3",359:"0ffb19c3",449:"0344899a",797:"8729ae70",822:"cf2089e4"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+{143:"app",736:"vendor"}[t]+"."+{143:"642b0249",736:"d1e7d5b3"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="borough-fe:";a.l=(o,n,r,s)=>{if(t[o])t[o].push(n);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+r),i.src=o),t[o]=[n];var p=(e,a)=>{i.onerror=i.onload=null,clearTimeout(m);var n=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((t=>t(a))),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t={143:0};a.f.j=(e,o)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise(((a,o)=>n=t[e]=[a,o]));o.push(n[2]=r);var s=a.p+a.u(e),i=new Error,l=o=>{if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,o)=>{var n,r,[s,i,l]=o,c=0;if(s.some((e=>0!==t[e]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(o);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},o=self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(4647)));o=a.O(o)})();