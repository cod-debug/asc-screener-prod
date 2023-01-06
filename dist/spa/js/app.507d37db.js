(()=>{var e={4647:(e,t,a)=>{"use strict";a(8964),a(702);var o=a(799),r=a(1947),n=a(499),s=a(9835);function i(e,t,a,o,r,n){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});var c=a(1639);const u=(0,c.Z)(l,[["render",i]]),d=u;var p=a(1870),m=a(3340),h=a(8910);const g=[{name:"home",path:"/",requiresAuth:!1,component:()=>Promise.all([a.e(736),a.e(268)]).then(a.bind(a,4268)),children:[{name:"home-page",path:"",component:()=>Promise.all([a.e(736),a.e(71)]).then(a.bind(a,71))},{name:"redirect-page",path:"/redirect",component:()=>a.e(797).then(a.bind(a,5797))}]},{name:"dashboard",path:"/asc/page/",component:()=>Promise.all([a.e(736),a.e(183)]).then(a.bind(a,183)),children:[{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list",path:"application/s1/lists",component:()=>Promise.all([a.e(736),a.e(410)]).then(a.bind(a,2410))},{name:"individual-application-update",path:"application/s1/update/:id",component:()=>Promise.all([a.e(736),a.e(253)]).then(a.bind(a,7253))},{name:"multiple-application-list",path:"application/s1/multiple",component:()=>Promise.all([a.e(736),a.e(964)]).then(a.bind(a,4964))},{name:"special-application-list",path:"application/s1/special",component:()=>Promise.all([a.e(736),a.e(494)]).then(a.bind(a,9494))},{name:"for-release-list",path:"application/s1/for-release",meta:{requiresAuth:!0},component:()=>Promise.all([a.e(736),a.e(576)]).then(a.bind(a,5576))},{name:"released-list",path:"application/s1/released",meta:{requiresAuth:!0},component:()=>Promise.all([a.e(736),a.e(866)]).then(a.bind(a,866))},{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list-s2",path:"application/s2/lists",component:()=>a.e(359).then(a.bind(a,6987))},{name:"announcement-view",path:"announcement",component:()=>Promise.all([a.e(736),a.e(617)]).then(a.bind(a,9617))}]},{path:"/account",name:"account",component:()=>Promise.all([a.e(736),a.e(183)]).then(a.bind(a,183)),children:[{path:"user-profile",name:"user-profile",component:()=>Promise.all([a.e(736),a.e(917)]).then(a.bind(a,4917))}]}],v=g;var f=a(3703);const A=(0,m.BC)((function({store:e,ssrContext:t}){const a=h.PO,o=localStorage.getItem("token"),r=localStorage.getItem("user_email");e.commit("auth/setToken",o),e.commit("auth/setUserDetails",r);const n=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:a("/")});return n.beforeEach(((e,t,a)=>{e.requiresAuth&&!o?a({name:"home"}):a()})),n}));async function _(e,t){const o=e(d);o.use(r.Z,t);const s="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:i}=await Promise.resolve().then(a.bind(a,1870)),l=(0,n.Xl)("function"===typeof A?await A({store:s}):A);return s.$router=l,{app:o,store:s,storeKey:i,router:l}}var y=a(6827),w=a(3527);const S={config:{},plugins:{LocalStorage:f.Z,Notify:y.Z,Dialog:w.Z}},P="/";async function b({app:e,router:t,store:a,storeKey:o},r){let n=!1;const s=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<r.length;u++)try{await r[u]({app:e,router:t,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:P})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.use(a,o),e.mount("#q-app"))}_(o.ri,S).then((e=>Promise.all([Promise.resolve().then(a.bind(a,6288)),Promise.resolve().then(a.bind(a,1569)),Promise.resolve().then(a.bind(a,958))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));b(e,a)}))))},1569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{api:()=>s,default:()=>i});var o=a(3340),r=a(9981),n=a.n(r);const s=n().create({baseURL:"http://localhost:3006"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=s}))},6288:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var o=a(3340),r=a(9991);const n={failed:"Action failed",success:"Action was successful"},s={"en-US":n},i=(0,o.xr)((({app:e})=>{const t=(0,r.o)({locale:"en-US",messages:s});e.use(t)}))},958:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s,rules:()=>n});var o=a(6827),r=a(3340);const n={required(e){return console.log(e,"value"),[e=>e&&e.length>0||"This field is required!"]},requiredSelect(e){return[e=>e||"This field is required!"]},validateEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email format"},confirmPassword(e,t){return e===t||"Confirm password does not  match!"},validateContact(e){var t=/^\(?([0-9]{11})\)?$/;return t.test(e)||"Invalid contact number format"},fileSizeRestrict(e){console.log(e.size);const t=3145728;return e.size<t||"Maximum of 3mb only"},fileTypeRestrict(e){return console.log(e),"application/pdf"==e.type||"Accepts PDF file only"},imageRestriction(e){o.Z.create({type:"negative",message:`${e.length} Images does not pass on validation`})},filterSelect(e,t,a){""!==e||t((()=>{a.value=stringOptions}))},update(){const e=val.toLowerCase();options.value=stringOptions.filter((t=>t.toLowerCase().indexOf(e)>-1))}},s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$rules=n}))},6011:()=>{},2400:()=>{},343:()=>{},3315:()=>{},7320:()=>{},9432:()=>{},4200:()=>{},7221:()=>{},1870:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Dt});var o={};a.r(o),a.d(o,{getToken:()=>y,getUserDetails:()=>_,isAuthenticated:()=>A});var r={};a.r(r),a.d(r,{removeToken:()=>S,setToken:()=>w,setUserDetails:()=>P});var n={};a.r(n),a.d(n,{getAllEmployees:()=>C,getEnv:()=>R,login:()=>N,registerApplicant:()=>k});var s={};a.r(s),a.d(s,{approveUser:()=>z});var i={};a.r(i),a.d(i,{getAllUsers:()=>ee,getEnv:()=>Y,updateESign:()=>oe,updatePassword:()=>ae,updateProfile:()=>te});var l={};a.r(l),a.d(l,{addCompany:()=>ve,getAllAffiliation:()=>fe,getAllCompanies:()=>ge,getEnv:()=>he});var c={};a.r(c),a.d(c,{getEnv:()=>Ue,getS1Applications:()=>Re,passToReviewer:()=>Ne,updateApp:()=>ke,verifyApp:()=>Ce});var u={};a.r(u),a.d(u,{comment:()=>Je,getCountByRole:()=>Ye,getCountByUser:()=>We,getEnv:()=>Qe,getPerReleaseStatus:()=>et,getSpecific:()=>Ve,lockApp:()=>Ge,reassign:()=>Xe});var d={};a.r(d),a.d(d,{getAllAnnouncements:()=>_t,getAllDialects:()=>vt,getAllExecutionTypes:()=>ht,getAllMediums:()=>gt,getAllReasons:()=>At,getAllUsers:()=>mt,getEnv:()=>pt,getOne:()=>yt,getSpecificAffiliation:()=>ft});var p={};a.r(p),a.d(p,{get_details:()=>Pt});var m={};a.r(m),a.d(m,{set_details:()=>bt});var h={};a.r(h),a.d(h,{_user_logged:()=>kt,getEnv:()=>Ct,save_sessions:()=>Nt});var g=a(3340),v=a(3100);function f(){return{isAuthenticated:!1,token:"",userDetails:{}}}const A=(e,t)=>e.isAuthenticated,_=(e,t)=>e.userDetails,y=(e,t)=>e.token,w=(e,t)=>{e.token=t,e.isAuthenticated=!0},S=(e,t)=>{e.token="",e.isAuthenticated=!1,e.userDetails={}},P=(e,t)=>{e.userDetails=t};var b,I,E=a(9981),$=a.n(E);const{LocalStorage:L,Notify:B}=a(9066),U={API_BASE_URL:(null===(b=window)||void 0===b||null===(I=b.appConfig)||void 0===I?void 0:I.API_BASE_URL)||"http://18.140.158.179:4545"};function R(e){return U[e]}const C=async({commit:e},t)=>{let a=await $()({url:"http://127.0.0.1:8000/all-employees/",method:"get"});return a},k=async({commit:e},t)=>{let a=await $()({url:`${R("API_BASE_URL")}/users/register/applicant`,data:t,method:"post"});return a},N=async({commit:e},t)=>{let a=null;try{a=await $()({url:`${R("API_BASE_URL")}/users/login`,data:t,method:"post"})}catch(o){a.data=o,a.status=400}return a},T={namespaced:!0,state:f,getters:o,mutations:r,actions:n};var D=a(4182),O=a.n(D),j=a(3376),M=a(5407);const{LocalStorage:x,Notify:q}=a(9066),z=async({commit:e},t)=>{let a=await $()({url:process.env.API_URL+`/apprv/${t.id}`,method:"post",headers:{authorization:`Bearer ${x.get("token")}`}});return a},Z={namespaced:!0,state:O(),getters:j,mutations:M,actions:s};function F(){return{}}var K,H,Q=a(6011),X=a(2400);const{LocalStorage:G,Notify:J}=a(9066),V={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},W={API_BASE_URL:(null===(K=window)||void 0===K||null===(H=K.appConfig)||void 0===H?void 0:H.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function Y(e){return W[e]}const ee=async({commit:e},t)=>{let a=await $()({url:`${Y("API_BASE_URL")}/users/all/`,data:t,method:"get"});return a},te=async({commit:e},t)=>{let a={};try{a=await $()({method:"post",url:`${Y("API_BASE_URL")}/users/update/`,data:t.data,params:t.params,headers:V})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ae=async({commit:e},t)=>{let a={};try{a=await $()({method:"post",url:`${Y("API_BASE_URL")}/users/update/password/`,data:t,headers:V})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},oe=async({commit:e},t)=>{let a={};try{a=await $()({method:"post",url:`${Y("API_BASE_URL")}/users/upload/`,data:t,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},re={namespaced:!0,state:F,getters:Q,mutations:X,actions:i};function ne(){return{}}var se,ie,le=a(4200),ce=a(7221);const{LocalStorage:ue,Notify:de}=a(9066),pe={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},me={API_BASE_URL:(null===(se=window)||void 0===se||null===(ie=se.appConfig)||void 0===ie?void 0:ie.API_BASE_URL)||"http://18.140.158.179:4545"};function he(e){return me[e]}const ge=async({commit:e},t)=>{let a=await $()({method:"get",url:`${he("API_BASE_URL")}/company/getall/`,params:t,headers:pe});return a},ve=async({commit:e},t)=>{let a=await $()({method:"post",url:`${he("API_BASE_URL")}/company/create/`,data:t,headers:pe});return a},fe=async({commit:e},t)=>{let a=null;try{a=await $()({url:`${he("API_BASE_URL")}/affiliate/getall/`,params:t,method:"get",headers:pe})}catch(o){a.data=o,a.status=400}return a},Ae={namespaced:!0,state:ne,getters:le,mutations:ce,actions:l};function _e(){return{}}var ye,we,Se=a(2796),Pe=a(6764);a(8964);const{LocalStorage:be,Notify:Ie}=a(9066);let Ee="/api/v1",$e=localStorage.getItem("token")||"";const Le={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${$e.replace("__q_strn|","")}`},Be={API_BASE_URL:(null===(ye=window)||void 0===ye||null===(we=ye.appConfig)||void 0===we?void 0:we.API_BASE_URL)||"http://18.140.158.179:4545"};function Ue(e){return Be[e]}const Re=async({commit:e},t)=>{let a={};try{a=await $()({method:"post",url:`${Ue("API_BASE_URL")}${Ee}/screener/get-applications/`,data:t.data,params:t.params,headers:Le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ce=async({commit:e},t)=>{let a={};try{a=await $()({method:"put",url:`${Ue("API_BASE_URL")}${Ee}/screener/verify-applications/${t.id}`,data:t.data,headers:Le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ke=async({commit:e},t)=>{let a={};try{a=await $()({method:"post",url:`${Ue("API_BASE_URL")}${Ee}/screener/update-applications/${t.id}`,data:t.data,headers:Le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ne=async({commit:e},t)=>{let a={};try{a=await $()({method:"put",url:`${Ue("API_BASE_URL")}${Ee}/screener/screened-applications/${t.id}`,data:t.data,headers:Le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Te={namespaced:!0,state:_e,getters:Se,mutations:Pe,actions:c};function De(){return{}}var Oe,je,Me=a(7320),xe=a(9432);const{LocalStorage:qe,Notify:ze}=a(9066);let Ze="/api/v1",Fe=localStorage.getItem("token")||"";const Ke={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Fe.replace("__q_strn|","")}`},He={API_BASE_URL:(null===(Oe=window)||void 0===Oe||null===(je=Oe.appConfig)||void 0===je?void 0:je.API_BASE_URL)||"http://18.140.158.179:4545"};function Qe(e){return He[e]}const Xe=async({commit:e},t)=>{let a={};try{a=await $()({method:"put",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/reassign-application/${t.id}`,data:t.data,params:t.params,headers:Ke})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ge=async({commit:e},t)=>{let a={};try{a=await $()({method:"put",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/lock-application/${t.id}`,data:t,headers:Ke})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Je=async({commit:e},t)=>{let a={};try{a=await $()({method:"put",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/make-comment/${t.id}`,data:t.data,headers:Ke})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ve=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/view-application/${t.id}`,headers:Ke})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},We=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/view-counts/per-user/`,headers:Ke})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},Ye=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/view-counts/per-role/`,headers:Ke})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},et=async({commit:e},t)=>{let a={};try{a=await $()({method:"POST",url:`${Qe("API_BASE_URL")}${Ze}/asc-user/view-application/per-release-status/`,data:t.data,headers:Ke})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},tt={namespaced:!0,state:De,getters:Me,mutations:xe,actions:u};function at(){return{}}var ot,rt,nt=a(343),st=a(3315);const{LocalStorage:it,Notify:lt}=a(9066);let ct=localStorage.getItem("token")||"";const ut={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${ct.replace("__q_strn|","")}`},dt={ADMIN_API_BASE_URL:(null===(ot=window)||void 0===ot||null===(rt=ot.appConfig)||void 0===rt?void 0:rt.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function pt(e){return dt[e]}const mt=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/users/getall/`,params:t,headers:ut})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ht=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/execution-type/getall/`,params:t,headers:ut})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},gt=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/medium-type/getall/`,params:t,headers:ut})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},vt=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/dialect/getall/`,params:t,headers:ut})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ft=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/affiliate/getone/`,params:t,headers:ut})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},At=async({commit:e},t)=>{let a={};try{a=await $()({method:"get",url:`${pt("ADMIN_API_BASE_URL")}/reason-type/getall/`,params:t,headers:ut})}catch(o){a.data=o.response.data,a.status=o.response.status}return a},_t=async({commit:e},t)=>{let a=await $()({url:`${pt("ADMIN_API_BASE_URL")}/announce/getall`,params:t,method:"get",headers:ut});return a},yt=async({commit:e},t)=>{let a=null;try{a=await $()({url:`${pt("ADMIN_API_BASE_URL")}/users/getone`,params:t,method:"get",headers:ut})}catch(o){a.data=o,a.status=400}return a},wt={namespaced:!0,state:at,getters:nt,mutations:st,actions:d};function St(){return{user_logged_details:null}}const Pt=e=>e.user_logged_details,bt=(e,t)=>{e.user_logged_details=t};var It,Et;const{LocalStorage:$t,Notify:Lt}=a(9066);let Bt=localStorage.getItem("token")||"";const Ut={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Bt.replace("__q_strn|","")}`},Rt={ADMIN_API_BASE_URL:(null===(It=window)||void 0===It||null===(Et=It.appConfig)||void 0===Et?void 0:Et.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function Ct(e){return Rt[e]}const kt=async e=>{let t=await $()({url:`${Ct("ADMIN_API_BASE_URL")}/users/logged-in`,data:null,method:"get",headers:Ut});return t},Nt=async(e,t)=>{},Tt={namespaced:!0,state:St,getters:p,mutations:m,actions:h},Dt=(0,g.h)((function(){const e=(0,v.MT)({modules:{auth:T,users:Z,account:re,company:Ae,s1:Te,asc_user:tt,admin_api:wt,sessions:Tt},strict:!1});return e}))},2796:()=>{},6764:()=>{},3376:()=>{},5407:()=>{},4182:()=>{}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,o,r,n)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,n]=e[u],i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((e=>a.O[e](o[l])))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{71:"78d91266",160:"cc2d86ed",183:"b28ac58c",253:"d26aea44",268:"0d98a2c1",359:"b9c51ab7",410:"89892fef",494:"2aca85a3",576:"e3c6b2db",617:"a2bbb291",797:"c9735736",866:"c7c90a12",917:"71a5e39e",964:"d05bd4d5"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"069bfbbb",736:"d1e7d5b3",917:"2533e3f2"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="borough-fe:";a.l=(o,r,n,s)=>{if(e[o])e[o].push(r);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[r];var p=(t,a)=>{i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=n=>{if(r.onerror=r.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=a[o],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],n=r.getAttribute("data-href");if(n===e||n===t)return r}},o=o=>new Promise(((r,n)=>{var s=a.miniCssF(o),i=a.p+s;if(t(s,i))return r();e(o,i,r,n)})),r={143:0};a.f.miniCss=(e,t)=>{var a={917:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=o(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((a,o)=>r=e[t]=[a,o]));o.push(r[2]=n);var s=a.p+a.u(t),i=new Error,l=o=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[s,i,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(4647)));o=a.O(o)})();