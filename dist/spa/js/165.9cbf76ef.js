(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[165],{3165:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>fa});var t=l(9835);function o(e,a,l,o,n,s){const i=(0,t.up)("DetailsIndex",!0);return(0,t.wg)(),(0,t.j4)(i)}var n=l(799);const s={class:"q-pa-md q-mt-lg q-ml-lg"},i={class:"text-h6 page-title text-dark col-md-6"},d=(0,t.Uk)(" S1 APPLICATION - INDIVIDUAL"),m={class:"text-right col-md-6"},r=(0,t._)("div",{class:"col-md-6 col-lg-6 col-sm-12"},[(0,t._)("strong",{class:"text-red-14 bold"},"Submission Date: September 28, 2022")],-1),c={class:"col-md-6 col-lg-6 col-sm-12 text-right"},u=(0,t._)("strong",null,"UNPAID: ",-1),p={class:"row q-mt-md"},_={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},f={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},b=(0,t._)("hr",{class:"q-my-xl"},null,-1),g=(0,t._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),v=(0,t._)("strong",{class:"text-grey-14"},"INTERNAL",-1),w=(0,t._)("strong",{class:"text-grey-14"},"EXTERNAL",-1),q={class:"q-mt-md"},h={class:"row"},W={class:"col-12 col-md-6"},V={class:"form-group q-mb-md"},I={class:"form-group"};function D(e,a,l,o,D,y){const x=(0,t.up)("q-icon"),U=(0,t.up)("q-btn"),k=(0,t.up)("q-card-section"),C=(0,t.up)("q-separator"),S=(0,t.up)("q-badge"),A=(0,t.up)("q-section"),Z=(0,t.up)("q-input"),T=(0,t.up)("q-select"),Q=(0,t.up)("ClientInformation"),N=(0,t.up)("PresentorInformation"),E=(0,t.up)("MaterialInformation"),P=(0,t.up)("q-list"),$=(0,t.up)("q-tab"),R=(0,t.up)("q-tabs"),O=(0,t.up)("RichText"),z=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(z,{bordered:"",class:"my-card",elevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{class:"row"},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(x,{name:"list"}),d]),(0,t._)("div",m,[(0,t.Wm)(U,{label:"VIEW APPLICATION",elevated:"",class:"q-mr-sm position-right",size:"md",icon:"list",color:"red-14",onClick:y.backToList},null,8,["onClick"])])])),_:1}),(0,t.Wm)(C,{inset:""}),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"row"},{default:(0,t.w5)((()=>[r,(0,t._)("div",c,[(0,t.Wm)(S,{color:"yellow-14",class:"q-pa-sm text-dark"},{default:(0,t.w5)((()=>[u])),_:1})])])),_:1}),(0,t._)("div",p,[(0,t._)("div",_,[(0,t.Wm)(Z,{modelValue:e.application_type,"onUpdate:modelValue":a[0]||(a[0]=a=>e.application_type=a),label:"Application Type",outlined:""},null,8,["modelValue"])]),(0,t._)("div",f,[(0,t.Wm)(T,{modelValue:e.form_group,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form_group=a),label:"Submission Type",outlined:""},null,8,["modelValue"])])]),b,(0,t.Wm)(P,{class:"rounded-borders"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-mb-sm"}),(0,t.Wm)(C),(0,t.Wm)(N,{class:"q-mb-sm"}),(0,t.Wm)(C),(0,t.Wm)(E,{class:"q-mb-sm"})])),_:1})])),_:1}),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(z,{square:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=a=>e.tab=a),dense:"","indicator-color":"blue",class:"text-grey-14"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{name:"internal_comments_tab",label:"Internal Comments"}),(0,t.Wm)($,{name:"external_comments_tab",label:"External Comments"})])),_:1},8,["modelValue"]),g])),_:1}),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>["internal_comments_tab"==e.tab?((0,t.wg)(),(0,t.j4)(n.uT,{key:0,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[v,(0,t.Wm)(O,{modelValue:e.internal_comment_input,"onUpdate:modelValue":a[3]||(a[3]=a=>e.internal_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,t.kq)("",!0),"external_comments_tab"==e.tab?((0,t.wg)(),(0,t.j4)(n.uT,{key:1,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[w,(0,t.Wm)(O,{modelValue:e.external_comment_input,"onUpdate:modelValue":a[4]||(a[4]=a=>e.external_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,t.kq)("",!0),(0,t._)("div",q,[(0,t.Wm)(U,{label:"Save",size:"sm",icon:"comment_bank",color:y.disable_comment_btn?"grey-14":"red-14",disabled:y.disable_comment_btn,onClick:y.saveComment,class:"q-mr-sm"},null,8,["color","disabled","onClick"]),(0,t.Wm)(U,{label:"Cancel",size:"sm",icon:"cancel",color:y.disable_comment_btn?"grey-14":"red-14",disabled:y.disable_comment_btn},null,8,["color","disabled"])])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t._)("div",W,[(0,t._)("div",V,[(0,t.Wm)(T,{modelValue:e.decision_status,"onUpdate:modelValue":a[5]||(a[5]=a=>e.decision_status=a),options:e.decision_options,outlined:"",size:"sm",label:"DECISION"},null,8,["modelValue","options"])]),(0,t._)("div",I,[(0,t.Wm)(T,{modelValue:e.revwer_id,"onUpdate:modelValue":a[6]||(a[6]=a=>e.revwer_id=a),options:e.reviewer_options,outlined:"",size:"sm",label:"ASSIGN A REVIEWER","option-label":"fullname","option-value":"id"},null,8,["modelValue","options"]),(0,t.Wm)(U,{color:"red-14",label:"SCREENED",icon:"fact_check",onClick:a[7]||(a[7]=e=>y.decision(1004)),class:"q-mr-sm q-mt-sm",disable:!e.revwer_id||!e.decision_status},null,8,["disable"]),(0,t.Wm)(U,{color:"red-14",label:"RETURN TO AD SPECIALIST",icon:"assignment_return",onClick:a[8]||(a[8]=e=>y.reassign(1006)),class:"q-mr-sm q-mt-sm"})])])])])),_:1})])),_:1})])}const y=(0,t._)("div",{class:"row q-pa-none"},[(0,t._)("div",{class:"col-md-4"},[(0,t._)("strong",null,"Client Information")]),(0,t._)("div",{class:"col-md-4 text-grey-14"}," Affiliation and Company details ")],-1),x={class:"row items-center"},U={class:"row"},k={class:"col-md-7 col-lg-7 col-sm-12 q-pa-sm"},C={class:"col-md-5 col-lg-5 col-sm-12 q-pa-sm"},S={class:"row"},A={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},Z={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},T={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"};function Q(e,a,l,o,n,s){const i=(0,t.up)("q-avatar"),d=(0,t.up)("q-item-section"),m=(0,t.up)("q-icon"),r=(0,t.up)("q-select"),c=(0,t.up)("q-input"),u=(0,t.up)("q-form"),p=(0,t.up)("q-card-section"),_=(0,t.up)("q-card"),f=(0,t.up)("q-expansion-item");return(0,t.wg)(),(0,t.j4)(f,{"header-class":"text-dark bg-blue-2 shadow-3"},{header:(0,t.w5)((()=>[(0,t.Wm)(d,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,t.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(m,{name:"perm_contact_calendar",color:"dark",size:"24px"})])])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(_,{class:"text-dark bordere-dark q-mb-md",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t._)("div",U,[(0,t._)("div",k,[(0,t.Wm)(r,{outlined:"",label:"Client Company Name",modelValue:e.company_name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.company_name=a)},null,8,["modelValue"])]),(0,t._)("div",C,[(0,t.Wm)(r,{outlined:"",label:"Client Membership Affiliation",modelValue:e.affiliate,"onUpdate:modelValue":a[1]||(a[1]=a=>e.affiliate=a)},null,8,["modelValue"])])]),(0,t._)("div",S,[(0,t._)("div",A,[(0,t.Wm)(c,{outlined:"",label:"Brand",modelValue:s.parentData.brand,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.brand=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",Z,[(0,t.Wm)(c,{outlined:"",label:"Product",modelValue:s.parentData.product,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.product=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",T,[(0,t.Wm)(c,{outlined:"",label:"Category",modelValue:s.parentData.category,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.category=e),disable:""},null,8,["modelValue"])])])])),_:1})])),_:1})])),_:1})])),_:1})}const N={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){}};var E=l(1639),P=l(651),$=l(1233),R=l(1357),O=l(2857),z=l(4458),L=l(3190),M=l(8326),B=l(7887),F=l(6611),j=l(9984),G=l.n(j);const X=(0,E.Z)(N,[["render",Q]]),H=X;G()(N,"components",{QExpansionItem:P.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:O.Z,QCard:z.Z,QCardSection:L.Z,QForm:M.Z,QSelect:B.Z,QInput:F.Z});const Y=(0,t._)("div",{class:"row q-pa-none"},[(0,t._)("div",{class:"col-md-4"},[(0,t._)("strong",null,"Presentor Information")]),(0,t._)("div",{class:"col-md-4 text-grey-14"}," Personal Details ")],-1),J={class:"row items-center"},K={class:"row"},ee={class:"col-sm-12 q-pa-sm"},ae={class:"col-sm-12 q-pa-sm"},le={class:"col-sm-12 q-pa-sm"},te={class:"row"},oe={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},ne={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},se={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},ie={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"};function de(e,a,l,o,n,s){const i=(0,t.up)("q-avatar"),d=(0,t.up)("q-item-section"),m=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),c=(0,t.up)("q-form"),u=(0,t.up)("q-card-section"),p=(0,t.up)("q-card"),_=(0,t.up)("q-expansion-item");return(0,t.wg)(),(0,t.j4)(_,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,t.w5)((()=>[(0,t.Wm)(d,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,t.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,t.w5)((()=>[Y])),_:1}),(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t._)("div",J,[(0,t.Wm)(m,{name:"person",color:"dark",size:"24px"})])])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("div",K,[(0,t._)("div",ee,[(0,t.Wm)(r,{outlined:"",label:"Name of Applicant",modelValue:s.parentData.applicant_fullname,"onUpdate:modelValue":a[0]||(a[0]=e=>s.parentData.applicant_fullname=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",ae,[(0,t.Wm)(r,{outlined:"",label:"Company Name",modelValue:s.parentData.company_name,"onUpdate:modelValue":a[1]||(a[1]=e=>s.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",le,[(0,t.Wm)(r,{outlined:"",label:"Address",modelValue:s.parentData.address,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.address=e),disable:""},null,8,["modelValue"])])]),(0,t._)("div",te,[(0,t._)("div",oe,[(0,t.Wm)(r,{outlined:"",label:"Mobile Number",modelValue:s.parentData.company_phone,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.company_phone=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",ne,[(0,t.Wm)(r,{outlined:"",label:"Email Address",modelValue:s.parentData.company_email,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.company_email=e),type:"text-pass",disable:""},null,8,["modelValue"])]),(0,t._)("div",se,[(0,t.Wm)(r,{outlined:"",label:"Telephone Number",modelValue:s.parentData.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>s.parentData.phone=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",ie,[(0,t.Wm)(r,{outlined:"",label:"Alternate Telephone Number",disable:""})])])])),_:1})])),_:1})])),_:1})])),_:1})}const me={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){}},re=(0,E.Z)(me,[["render",de]]),ce=re;G()(me,"components",{QExpansionItem:P.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:O.Z,QCard:z.Z,QCardSection:L.Z,QForm:M.Z,QInput:F.Z});const ue=(0,t._)("div",{class:"row q-pa-none"},[(0,t._)("div",{class:"col-md-4"},[(0,t._)("strong",null,"Material Information")]),(0,t._)("div",{class:"col-md-4 text-grey-14"}," Ads Details ")],-1),pe={class:"row items-center"},_e={class:"row"},fe={class:"col-sm-12 q-pa-sm"},be={class:"col-sm-6 q-pa-sm"},ge={class:"col-sm-6 q-pa-sm"},ve=(0,t.Uk)(" Type of Medium "),we={class:"row"},qe={class:"col-sm-12 q-pa-sm"},he={class:"q-gutter-sm"},We={class:"row"},Ve={class:"col-sm-12 q-pa-sm"},Ie={class:"col-sm-4 q-pa-sm"},De={class:"col-sm-4 q-pa-sm"},ye={class:"col-sm-4 q-pa-sm"},xe=(0,t._)("p",{class:"text-center text-grey-14 q-ma-none"},"ORIGINAL",-1),Ue=(0,t._)("hr",null,null,-1),ke=(0,t._)("b",null,"ORIGINAL",-1),Ce=(0,t._)("br",null,null,-1),Se={class:"q-mt-sm"},Ae=(0,t.Uk)(" MAIN DOCUMENT "),Ze={class:"row"},Te=(0,t._)("div",{class:"col-sm-12 q-pa-sm"},[(0,t._)("div",{class:"q-gutter-sm"},[(0,t._)("div",{class:""},[(0,t._)("label",null,"File name:"),(0,t._)("br"),(0,t._)("label",{class:"text-grey-14"},"Sample-ORIGINAL-1-1-01-:35:55:881.pdf")])])],-1),Qe={class:"col-sm-12 q-pa-sm text-right"},Ne=(0,t.Uk)(" VIEW DOCUMENT "),Ee=(0,t._)("hr",null,null,-1),Pe={class:"q-mt-sm"},$e=(0,t.Uk)(" SUPPORT DOCUMENT "),Re={class:"row"},Oe=(0,t._)("div",{class:"col-sm-12 q-pa-sm"},[(0,t._)("div",{class:"q-gutter-sm"},[(0,t._)("div",{class:""},[(0,t._)("label",null,"File name:"),(0,t._)("br"),(0,t._)("label",{class:"text-grey-14"},"Sample-SUPPORTING-1-1-01-:35:55:881.pdf")])])],-1),ze={class:"col-sm-12 q-pa-sm text-right"},Le=(0,t.Uk)(" VIEW DOCUMENT ");function Me(e,a,l,o,n,s){const i=(0,t.up)("q-avatar"),d=(0,t.up)("q-item-section"),m=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),c=(0,t.up)("q-select"),u=(0,t.up)("q-card"),p=(0,t.up)("q-card-section"),_=(0,t.up)("q-radio"),f=(0,t.up)("q-btn"),b=(0,t.up)("q-form"),g=(0,t.up)("q-expansion-item");return(0,t.wg)(),(0,t.j4)(g,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,t.w5)((()=>[(0,t.Wm)(d,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,t.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,t.w5)((()=>[ue])),_:1}),(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t._)("div",pe,[(0,t.Wm)(m,{name:"ads_click",color:"dark",size:"24px"})])])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{bordered:"",square:!0,class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t._)("div",_e,[(0,t._)("div",fe,[(0,t.Wm)(r,{outlined:"",label:"Ad Title *",modelValue:s.parentData.ad_title,"onUpdate:modelValue":a[0]||(a[0]=e=>s.parentData.ad_title=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",be,[(0,t.Wm)(c,{outlined:"",label:"Reference Code of Previously-Approved Material",modelValue:s.parentData.referrence_code,"onUpdate:modelValue":a[1]||(a[1]=e=>s.parentData.referrence_code=e),disable:""},null,8,["modelValue"])]),(0,t._)("div",ge,[(0,t.Wm)(r,{type:"text",outlined:"",label:"Tagline",modelValue:s.parentData.tag_line,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.tag_line=e),disable:""},null,8,["modelValue"])])])])),_:1}),(0,t.Wm)(u,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),ve])),_:1}),(0,t._)("div",we,[(0,t._)("div",qe,[(0,t._)("div",he,[(0,t.Wm)(_,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.type_of_media=e),val:"single",label:"Single Media"},null,8,["modelValue"]),(0,t.Wm)(_,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.type_of_media=e),val:"multimedia",label:"Multimedia"},null,8,["modelValue"])])])]),(0,t._)("div",We,[(0,t._)("div",Ve,[(0,t.Wm)(c,{outlined:"",label:"Single Media *",modelValue:e.single_media,"onUpdate:modelValue":a[5]||(a[5]=a=>e.single_media=a)},null,8,["modelValue"])]),(0,t._)("div",Ie,[(0,t.Wm)(c,{outlined:"",label:"Execution *",modelValue:e.execution,"onUpdate:modelValue":a[6]||(a[6]=a=>e.execution=a)},null,8,["modelValue"])]),(0,t._)("div",De,[(0,t.Wm)(c,{outlined:"",label:"Language / Dialect",modelValue:e.language,"onUpdate:modelValue":a[7]||(a[7]=a=>e.language=a)},null,8,["modelValue"])]),(0,t._)("div",ye,[(0,t.Wm)(r,{outlined:"",label:"Size / Length (in seconds)",modelValue:e.size_length,"onUpdate:modelValue":a[8]||(a[8]=a=>e.size_length=a)},null,8,["modelValue"])])])])),_:1}),(0,t.Wm)(u,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[xe,Ue])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{bordered:"",class:"q-pa-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[ke,Ce,(0,t._)("div",Se,[(0,t.Wm)(m,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),Ae])])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",Ze,[Te,(0,t._)("div",Qe,[(0,t.Wm)(f,{color:"red-14",onClick:a[9]||(a[9]=e=>s.viewDoc(s.parentData.origMainDocUrl))},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"open_in_new"}),Ne])),_:1})])])])),_:1}),Ee,(0,t.Wm)(p,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[(0,t._)("div",Pe,[(0,t.Wm)(m,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),$e])])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",Re,[Oe,(0,t._)("div",ze,[(0,t.Wm)(f,{color:"red-14",onClick:a[10]||(a[10]=e=>s.viewDoc(s.parentData.subDocUrl))},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"open_in_new"}),Le])),_:1})])])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}const Be={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){},methods:{viewDoc(e){console.log(e),window.open(e,"_blank")}}};var Fe=l(1480),je=l(8879);const Ge=(0,E.Z)(Be,[["render",Me]]),Xe=Ge;function He(e,a,l,o,n,s){const i=(0,t.up)("q-icon"),d=(0,t.up)("q-item-section"),m=(0,t.up)("q-color"),r=(0,t.up)("q-item"),c=(0,t.up)("q-list"),u=(0,t.up)("q-btn-dropdown"),p=(0,t.up)("q-editor");return(0,t.wg)(),(0,t.j4)(p,{modelValue:n.editor,"onUpdate:modelValue":a[4]||(a[4]=e=>n.editor=e),"toolbar-bg":"grey-3",ref:"editor",toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"token","removeFormat","bold","italic","strike","underline","subscript","superscript","quote","unordered","ordered","outdent","indent","undo","redo"]],fonts:n.fonts},{token:(0,t.w5)((()=>[(0,t.Wm)(u,{dense:"","no-caps":"",ref:"token","no-wrap":"",unelevated:"",color:"white","text-color":"primary",label:"Higlight / Text Color",size:"sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{tag:"label",clickable:"",onClick:a[1]||(a[1]=e=>s.color("backColor",n.highlight))},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{name:"highlight"})])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:n.highlight,"onUpdate:modelValue":a[0]||(a[0]=e=>n.highlight=e),"default-view":"palette","no-header":"","no-footer":"",palette:["#ffccccaa","#ffe6ccaa","#ffffccaa","#ccffccaa","#ccffe6aa","#ccffffaa","#cce6ffaa","#ccccffaa","#e6ccffaa","#ffccffaa","#ff0000aa","#ff8000aa","#ffff00aa","##00ff00aa","#00ff80aa","#00ffffaa","#0080ffaa","#0000ffaa","#8000ffaa","#ff00ffaa"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(r,{tag:"label",clickable:"",onClick:a[3]||(a[3]=e=>s.color("foreColor",n.foreColor))},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{name:"format_paint"})])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:n.foreColor,"onUpdate:modelValue":a[2]||(a[2]=e=>n.foreColor=e),"no-header":"","no-footer":"","default-view":"palette",palette:["#ff0000","#ff8000","#ffff00","##00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","toolbar","fonts"])}G()(Be,"components",{QExpansionItem:P.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:O.Z,QCard:z.Z,QCardSection:L.Z,QForm:M.Z,QInput:F.Z,QSelect:B.Z,QRadio:Fe.Z,QBtn:je.Z});const Ye={data(){return{foreColor:"#000000",highlight:"#ffff00aa",editor:"Select some text, then select a highlight or text color!",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}}},methods:{color(e,a){const l=this.$refs.editor;this.$refs.token.hide(),l.caret.restore(),l.runCmd(e,a),l.focus()}}};var Je=l(4695),Ke=l(8479),ea=l(3246),aa=l(490),la=l(1819);const ta=(0,E.Z)(Ye,[["render",He]]),oa=ta;G()(Ye,"components",{QEditor:Je.Z,QBtnDropdown:Ke.Z,QList:ea.Z,QItem:aa.Z,QItemSection:$.Z,QIcon:O.Z,QColor:la.Z});var na=l(6827);l(3195);const sa={components:{ClientInformation:H,PresentorInformation:ce,MaterialInformation:Xe,RichText:oa},computed:{disable_comment_btn(){return("internal_comments_tab"!==this.tab||""===this.internal_comment_input)&&("external_comments_tab"!==this.tab||""===this.external_comment_input)},comment_type(){return"internal_comments_tab"==this.tab?"internal_comment":"external_comment"},selectedId(){return this.$route.params.id}},data:()=>({internal_comment_input:"",external_comment_input:"",tab:"internal_comments_tab",refresh_sec:0,id:42,form_type:"s1",form_group:"",referrence_code:null,application_type:"REGULAR",slugified_app_type:"regular",process_type:"ORIGINAL",brand:"BRAND D",product:"SAMPLE PRODUCT IN D",category:"SAVOURY FOODS & SEASONINGS",type_of_media:"MULTIMEDIA",hasBirFormFiled:0,isRejected:null,payment_status:"UNPAID",isPaidByApplicant:0,amount:null,ad_title:"ET EST QUIS MINUS Q",tag_line:"INCIDUNT QUIA CULPA",hasNoSubDocs:1,origMainDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",subDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",complianceMainDocUrl:null,complianceSubDocUrl:null,decisionFormURL:null,stampMaterialUrl:null,hasSubmitted:1,internal_comment:null,external_comment:null,applicant_status:"S1 APPLICATION SUBMITTED",internal_status:"S1 APPLICATION SUBMITTED",decision_status:null,release_status:null,isLocked:1,forCompliance:0,forS2:0,application_date:"2022-11-14T13:22:10.115Z",submission_date:"2022-11-14",submission_time:"20:56:36",decision_status_date:null,release_date:null,issued_date:null,valid_until_date:null,modified_at:"2022-11-16T18:25:13.000Z",archived_at:null,verifiedDateByEvaluator:null,verifiedDateByAdSpe:null,verifiedDateByScreener:null,verifiedDateByReviewer:null,revision_count:0,adSpe:null,decision_options:[],reviewer_options:[],revwer_id:null}),mounted(){this.initApp()},methods:{initApp(){this.getSpecific(),this.getAllUsers(),this.decision_options=[{label:"APPROVED FOR PRODUCTION",value:"APPROVED FOR PRODUCTION"},{label:"APPROVED WITH CAUTION",value:"APPROVED WITH CAUTION"},{label:"INCOMPLETE",value:"INCOMPLETE"},{label:"DISAPPROVED",value:"DISAPPROVED"}]},async getAllUsers(){let e=this;e.loading_list=!0;let a={page:1,size:1e3,order:"fname:asc",search:"",filter:"asc"},{data:l,status:t}=await e.$store.dispatch("admin_api/getAllUsers",a);e.reviewer_options=l.rows.filter((e=>"revwer"==e.type))},backToList(){this.$router.push({name:"individual-application-list"})},async getSpecific(){let e=this,a={id:e.selectedId},{data:l,status:t}=await e.$store.dispatch("asc_user/getSpecific",a);console.log(l);for(let o in l)e[o]=l[o];e.applicant_fullname=`${e.applicant.fname} ${e.applicant.mname} ${e.applicant.lname}`||"--",e.company_name=`${e.company.name}`||"--",e.address=`${e.company.address}`||"--",e.phone=`${e.applicant.phone}`||"--",e.company_phone=`${e.company.phone}`||"--",e.company_email=`${e.applicant.email}`||"--"},async saveComment(){let e=this,a={id:e.selectedId,data:{internal_comment:e.internal_comment_input}};"external_comment"===e.comment_type&&(a={id:e.selectedId,data:{external_comment:e.external_comment_input}});let{data:l,status:t}=await e.$store.dispatch("ascUser/comment",a);[200,201].includes(t)?na.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):na.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async decision(){let e=this,a={id:this.$route.params.id,data:{decision_status:e.decision_status.value,reviewerId:e.revwer_id.id}},{data:l,status:t}=await e.$store.dispatch("s1/passToReviewer",a);[200,201].includes(t)?(na.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):na.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async reassign(e){let a=this,l={id:this.$route.params.id,data:{assigned_userRole:e,assigned_user_id:this.adSpe.id}};1004==e&&(l.data.assigned_user_id=a.revwer_id.id);let{data:t,status:o}=await a.$store.dispatch("asc_user/reassign",l);[200,201].includes(o)?(na.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):na.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}}};var ia=l(926),da=l(990),ma=l(7817),ra=l(900);const ca=(0,E.Z)(sa,[["render",D]]),ua=ca;G()(sa,"components",{QCard:z.Z,QCardSection:L.Z,QIcon:O.Z,QBtn:je.Z,QSeparator:ia.Z,QBadge:da.Z,QInput:F.Z,QSelect:B.Z,QList:ea.Z,QTabs:ma.Z,QTab:ra.Z});const pa={data:()=>({}),components:{DetailsIndex:ua}},_a=(0,E.Z)(pa,[["render",o]]),fa=_a},3195:()=>{}}]);