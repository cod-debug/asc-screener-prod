(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[46],{6046:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>tt});var l=t(9835);function o(e,a,t,o,i,n){const s=(0,l.up)("DetailsIndex",!0);return(0,l.wg)(),(0,l.j4)(s)}var i=t(6970),n=t(799);const s={class:"q-pa-md q-mt-lg q-ml-lg"},d={key:0,class:"text-center q-pa-lg"},m={class:"loading-page"},r={class:"text-h6 page-title text-dark col-md-6"},c=(0,l.Uk)(" S1 APPLICATION - INDIVIDUAL"),u={class:"text-right col-md-6"},p=(0,l._)("div",{class:"col-md-6 col-lg-6 col-sm-12"},[(0,l._)("strong",{class:"text-red-14 bold"},"Submission Date: September 28, 2022")],-1),_={class:"col-md-6 col-lg-6 col-sm-12 text-right"},f={class:"row q-mt-md"},g={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},h={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},b=(0,l._)("hr",{class:"q-my-xl"},null,-1),y={key:1,class:"text-center"},v=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),w=(0,l._)("strong",{class:"text-grey-14"},"INTERNAL",-1),D=(0,l._)("strong",{class:"text-grey-14"},"EXTERNAL",-1),q={class:"q-mt-md"},I={class:"row"},V={class:"col-12 col-md-6"},W={class:"form-group q-mb-md"},k={class:"form-group"};function A(e,a,t,o,A,x){const U=(0,l.up)("q-spinner-ios"),S=(0,l.up)("q-icon"),T=(0,l.up)("q-btn"),E=(0,l.up)("q-card-section"),C=(0,l.up)("q-separator"),M=(0,l.up)("q-badge"),N=(0,l.up)("q-section"),z=(0,l.up)("q-input"),Z=(0,l.up)("q-select"),O=(0,l.up)("ClientInformation"),L=(0,l.up)("PresentorInformation"),Q=(0,l.up)("MaterialInformation"),P=(0,l.up)("q-list"),R=(0,l.up)("q-spinner-hourglass"),$=(0,l.up)("q-tab"),B=(0,l.up)("q-tabs"),F=(0,l.up)("RichText"),G=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",s,[e.is_loading?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",m,[(0,l.Wm)(U,{color:"white",size:"3rem"})])])):(0,l.kq)("",!0),(0,l.Wm)(G,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(S,{name:"list"}),c]),(0,l._)("div",u,[(0,l.Wm)(T,{label:"VIEW APPLICATION",elevated:"",class:"q-mr-sm position-right",size:"md",icon:"list",color:"red-14",onClick:x.backToList},null,8,["onClick"])])])),_:1}),(0,l.Wm)(C,{inset:""}),(0,l.Wm)(E,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,{class:"row"},{default:(0,l.w5)((()=>[p,(0,l._)("div",_,[(0,l.Wm)(M,{color:x.paymentStatusColor(e.payment_status).bg,class:(0,i.C_)(`q-pa-sm text-${x.paymentStatusColor(e.payment_status).text}`)},{default:(0,l.w5)((()=>[(0,l._)("strong",null,(0,i.zw)(e.payment_status)+": "+(0,i.zw)(x.intFormatter(e.amount)),1)])),_:1},8,["color","class"])])])),_:1}),(0,l._)("div",f,[(0,l._)("div",g,[(0,l.Wm)(z,{modelValue:e.application_type,"onUpdate:modelValue":a[0]||(a[0]=a=>e.application_type=a),label:"Application Type",disable:"",outlined:""},null,8,["modelValue"])]),(0,l._)("div",h,[(0,l.Wm)(Z,{modelValue:e.form_group,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form_group=a),label:"Submission Type",disable:"",outlined:""},null,8,["modelValue"])])]),b,e.is_loading?((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(R,{color:"primary",size:"5rem"})])):((0,l.wg)(),(0,l.j4)(P,{key:0,class:"rounded-borders"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"q-mb-sm"}),(0,l.Wm)(C),(0,l.Wm)(L,{class:"q-mb-sm"}),(0,l.Wm)(C),(0,l.Wm)(Q,{appId:e.$route.params.id,class:"q-mb-sm"},null,8,["appId"])])),_:1}))])),_:1}),(0,l.Wm)(E,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{square:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(E,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=a=>e.tab=a),dense:"","indicator-color":"blue",class:"text-grey-14"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{name:"internal_comments_tab",label:"Internal Comments"}),(0,l.Wm)($,{name:"external_comments_tab",label:"External Comments"})])),_:1},8,["modelValue"]),v])),_:1}),(0,l.Wm)(E,null,{default:(0,l.w5)((()=>["internal_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(n.uT,{key:0,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[w,(0,l.Wm)(F,{modelValue:e.internal_comment_input,"onUpdate:modelValue":a[3]||(a[3]=a=>e.internal_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),"external_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(n.uT,{key:1,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[D,(0,l.Wm)(F,{modelValue:e.external_comment_input,"onUpdate:modelValue":a[4]||(a[4]=a=>e.external_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),(0,l._)("div",q,[(0,l.Wm)(T,{label:"Save",size:"sm",icon:"comment_bank",color:x.disable_comment_btn?"grey-14":"red-14",disabled:x.disable_comment_btn,onClick:x.saveComment,class:"q-mr-sm"},null,8,["color","disabled","onClick"]),(0,l.Wm)(T,{label:"Cancel",size:"sm",icon:"cancel",color:x.disable_comment_btn?"grey-14":"red-14",disabled:x.disable_comment_btn},null,8,["color","disabled"])])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(E,null,{default:(0,l.w5)((()=>[(0,l._)("div",I,[(0,l._)("div",V,[(0,l._)("div",W,[(0,l.Wm)(Z,{modelValue:e.decision_status,"onUpdate:modelValue":a[5]||(a[5]=a=>e.decision_status=a),options:e.decision_options,outlined:"",size:"sm",label:"DECISION"},null,8,["modelValue","options"])]),(0,l._)("div",k,[(0,l.Wm)(Z,{modelValue:e.revwer_id,"onUpdate:modelValue":a[6]||(a[6]=a=>e.revwer_id=a),options:e.reviewer_options,outlined:"",size:"sm",label:"ASSIGN A REVIEWER","option-label":"fullname","option-value":"id"},null,8,["modelValue","options"]),(0,l.Wm)(T,{color:"red-14",label:"SCREENED",icon:"fact_check",onClick:a[7]||(a[7]=e=>x.decision(1004)),class:"q-mr-sm q-mt-sm",disable:!e.revwer_id||!e.decision_status},null,8,["disable"]),(0,l.Wm)(T,{color:"red-14",label:"RETURN TO AD SPECIALIST",icon:"assignment_return",onClick:a[8]||(a[8]=e=>x.reassign(1006)),class:"q-mr-sm q-mt-sm"})])])])])),_:1})])),_:1})])}const x=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Client Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Affiliation and Company details ")],-1),U={class:"row items-center"},S={class:"row"},T={class:"col-md-7 col-lg-7 col-sm-12 q-pa-sm"},E={class:"col-md-5 col-lg-5 col-sm-12 q-pa-sm"},C={class:"row"},M={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},N={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},z={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"};function Z(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-select"),c=(0,l.up)("q-input"),u=(0,l.up)("q-form"),p=(0,l.up)("q-card-section"),_=(0,l.up)("q-card"),f=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(f,{"header-class":"text-dark bg-blue-2 shadow-3"},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",U,[(0,l.Wm)(m,{name:"perm_contact_calendar",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"text-dark bordere-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l._)("div",T,[(0,l.Wm)(r,{outlined:"",label:"Client Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",E,[(0,l.Wm)(r,{outlined:"",label:"Client Membership Affiliation",modelValue:n.parentData.affiliate_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.affiliate_name=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",C,[(0,l._)("div",M,[(0,l.Wm)(c,{outlined:"",label:"Brand",modelValue:n.parentData.brand,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.brand=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",N,[(0,l.Wm)(c,{outlined:"",label:"Product",modelValue:n.parentData.product,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.product=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",z,[(0,l.Wm)(c,{outlined:"",label:"Category",modelValue:n.parentData.category,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.category=e),disable:""},null,8,["modelValue"])])])])),_:1})])),_:1})])),_:1})])),_:1})}const O={data:()=>({company_name:"",affiliation_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){let e=this;e.initApp()},methods:{initApp(){this.getAffiliation()},async getAffiliation(){if(this.parentData.company.affiliateID){let e=this,a={id:this.parentData.company.affiliateID},{data:t,status:l}=await e.$store.dispatch("admin_api/getSpecificAffiliation",a);[200,201].includes(l)&&(e.affiliation_name=t.name)}}}};var L=t(1639),Q=t(651),P=t(1233),R=t(1357),$=t(2857),B=t(4458),F=t(3190),G=t(8326),j=t(7887),H=t(6611),X=t(9984),Y=t.n(X);const K=(0,L.Z)(O,[["render",Z]]),J=K;Y()(O,"components",{QExpansionItem:Q.Z,QItemSection:P.Z,QAvatar:R.Z,QIcon:$.Z,QCard:B.Z,QCardSection:F.Z,QForm:G.Z,QSelect:j.Z,QInput:H.Z});const ee=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Presentor Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Personal Details ")],-1),ae={class:"row items-center"},te={class:"row"},le={class:"col-sm-12 q-pa-sm"},oe={class:"col-sm-12 q-pa-sm"},ie={class:"col-sm-12 q-pa-sm"},ne={class:"row"},se={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},de={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},me={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},re={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"};function ce(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-input"),c=(0,l.up)("q-form"),u=(0,l.up)("q-card-section"),p=(0,l.up)("q-card"),_=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(_,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[ee])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",ae,[(0,l.Wm)(m,{name:"person",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",te,[(0,l._)("div",le,[(0,l.Wm)(r,{outlined:"",label:"Name of Applicant",modelValue:n.parentData.applicant_fullname,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.applicant_fullname=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",oe,[(0,l.Wm)(r,{outlined:"",label:"Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ie,[(0,l.Wm)(r,{outlined:"",label:"Address",modelValue:n.parentData.address,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.address=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",ne,[(0,l._)("div",se,[(0,l.Wm)(r,{outlined:"",label:"Mobile Number",modelValue:n.parentData.company_phone,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.company_phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",de,[(0,l.Wm)(r,{outlined:"",label:"Email Address",modelValue:n.parentData.company_email,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.company_email=e),type:"text-pass",disable:""},null,8,["modelValue"])]),(0,l._)("div",me,[(0,l.Wm)(r,{outlined:"",label:"Telephone Number",modelValue:n.parentData.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>n.parentData.phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",re,[(0,l.Wm)(r,{outlined:"",label:"Alternate Telephone Number",disable:""})])])])),_:1})])),_:1})])),_:1})])),_:1})}const ue={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){}},pe=(0,L.Z)(ue,[["render",ce]]),_e=pe;Y()(ue,"components",{QExpansionItem:Q.Z,QItemSection:P.Z,QAvatar:R.Z,QIcon:$.Z,QCard:B.Z,QCardSection:F.Z,QForm:G.Z,QInput:H.Z});const fe=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Material Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Ads Details ")],-1),ge={class:"row items-center"},he={class:"row"},be={class:"col-sm-12 q-pa-sm"},ye={class:"col-sm-6 q-pa-sm"},ve={class:"col-sm-6 q-pa-sm"},we=(0,l.Uk)(" Type of Medium "),De={class:"row"},qe={class:"col-sm-12 q-pa-sm"},Ie={class:"q-gutter-sm"},Ve={key:0},We={key:0,class:"col-12 col-md-12 q-pa-sm"},ke={key:1,class:"col-4 col-md-4 q-pa-sm"},Ae={key:2,class:"col-4 col-md-4 q-pa-sm"},xe={key:3,class:"col-4 col-md-4 q-pa-sm"},Ue={key:4,class:"col-4 col-md-4 q-pa-sm"},Se={key:5,class:"col-4 col-md-4 q-pa-sm"},Te={key:1},Ee={class:"col-sm-12 q-pa-sm"},Ce={class:"q-gutter-sm"},Me={class:"col-12"},Ne={class:"table w-100"},ze={width:"50%"},Ze={key:0,width:"50%",class:"q-pa-sm"},Oe={key:1,width:"50%"},Le=(0,l._)("p",{class:"text-center text-grey-14 q-ma-none"},"ORIGINAL",-1),Qe=(0,l._)("hr",null,null,-1),Pe=(0,l._)("b",null,"ORIGINAL",-1),Re=(0,l._)("br",null,null,-1),$e={class:"q-mt-sm"},Be=(0,l.Uk)(" MAIN DOCUMENT "),Fe={class:"row"},Ge={class:"col-sm-12 q-pa-sm"},je={class:"q-gutter-sm"},He={class:""},Xe=(0,l._)("label",null,"File Path:",-1),Ye=(0,l._)("br",null,null,-1),Ke={class:"text-grey-14"},Je={class:"col-sm-12 q-pa-sm text-right"},ea=(0,l.Uk)(" VIEW DOCUMENT "),aa={key:0},ta={class:"q-mt-sm"},la=(0,l.Uk)(" SUPPORT DOCUMENT "),oa={class:"row"},ia={class:"col-sm-12 q-pa-sm"},na={class:"q-gutter-sm"},sa={class:""},da=(0,l._)("label",null,"File Path:",-1),ma=(0,l._)("br",null,null,-1),ra={class:"text-grey-14"},ca={class:"col-sm-12 q-pa-sm text-right"},ua=(0,l.Uk)(" VIEW DOCUMENT "),pa={key:3,class:"q-ma-md"},_a={class:"q-mt-sm"},fa=(0,l.Uk)(" REVISION LETTER "),ga={class:"row"},ha={class:"col-sm-12 q-pa-sm"},ba={class:"q-gutter-sm"},ya={class:""},va=(0,l._)("label",null,"File Path:",-1),wa=(0,l._)("br",null,null,-1),Da={class:"text-grey-14"},qa={class:"col-sm-12 q-pa-sm text-right"},Ia=(0,l.Uk)(" VIEW DOCUMENT ");function Va(e,a,t,o,n,s){const d=(0,l.up)("q-avatar"),m=(0,l.up)("q-item-section"),r=(0,l.up)("q-icon"),c=(0,l.up)("q-input"),u=(0,l.up)("q-select"),p=(0,l.up)("q-card"),_=(0,l.up)("q-card-section"),f=(0,l.up)("q-radio"),g=(0,l.up)("q-checkbox"),h=(0,l.up)("q-btn"),b=(0,l.up)("q-td"),y=(0,l.up)("q-tr"),v=(0,l.up)("q-table"),w=(0,l.up)("q-form"),D=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(D,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(m,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(m,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[fe])),_:1}),(0,l.Wm)(m,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",ge,[(0,l.Wm)(r,{name:"ads_click",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",he,[(0,l._)("div",be,[(0,l.Wm)(c,{outlined:"",label:"Ad Title *",modelValue:s.parentData.ad_title,"onUpdate:modelValue":a[0]||(a[0]=e=>s.parentData.ad_title=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ye,[(0,l.Wm)(u,{outlined:"",label:"Reference Code of Previously-Approved Material",modelValue:s.parentData.referrence_code,"onUpdate:modelValue":a[1]||(a[1]=e=>s.parentData.referrence_code=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ve,[(0,l.Wm)(c,{type:"text",outlined:"",label:"Tagline",modelValue:s.parentData.tag_line,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.tag_line=e),disable:""},null,8,["modelValue"])])])])),_:1}),(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),we])),_:1}),(0,l._)("div",De,[(0,l._)("div",qe,[(0,l._)("div",Ie,[(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.type_of_media=e),val:"SINGLE MEDIA",label:"Single Media",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.type_of_media=e),val:"MULTIMEDIA",label:"Multimedia",disable:""},null,8,["modelValue"])])])]),"SINGLE MEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",Ve,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.parentData.type_of_medium,((a,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"row"},[0==t?((0,l.wg)(),(0,l.iD)("div",We,[(0,l.Wm)(u,{outlined:"",label:"Single Media *",modelValue:a.type_of_medium,"onUpdate:modelValue":e=>a.type_of_medium=e,options:e.medium_options,"option-label":"desc","option-value":"desc",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.execution&&0==t?((0,l.wg)(),(0,l.iD)("div",ke,[(0,l.Wm)(u,{outlined:"",label:"Execution *",modelValue:a.execution,"onUpdate:modelValue":e=>a.execution=e,options:e.execution_options,"option-label":"type","option-value":"type",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.language&&0==t?((0,l.wg)(),(0,l.iD)("div",Ae,[(0,l.Wm)(u,{outlined:"",label:"Language / Dialect",modelValue:a.dialect,"onUpdate:modelValue":e=>a.dialect=e,options:e.language_options,"option-label":"dialect","option-value":"dialect",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.length&&0==t?((0,l.wg)(),(0,l.iD)("div",xe,[(0,l.Wm)(c,{outlined:"",label:"Duration (in seconds)",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.size&&0==t?((0,l.wg)(),(0,l.iD)("div",Ue,[(0,l.Wm)(c,{outlined:"",label:"Size / Length",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,hint:"e.i format: 8 x 11 inches",disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.others&&0==t?((0,l.wg)(),(0,l.iD)("div",Se,[(0,l.Wm)(c,{outlined:"",label:"Others",modelValue:a.others,"onUpdate:modelValue":e=>a.others=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0),"MULTIMEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",Te,[(0,l._)("div",Ee,[(0,l._)("div",Ce,[(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[5]||(a[5]=a=>e.isMoving=a),val:!0,label:"MULTIMEDIA-MOVING",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[6]||(a[6]=a=>e.isMoving=a),val:!1,label:"MULTIMEDIA-STATIC (MAX OF 5 LAYOUT)",disable:""},null,8,["modelValue"])])]),(0,l._)("div",Me,[(0,l._)("div",null,[(0,l._)("table",Ne,[(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.type_of_medium_options,((t,o)=>((0,l.wg)(),(0,l.iD)("tr",{key:o,class:"row"},[(0,l._)("td",ze,[(0,l.Wm)(g,{label:t.val,val:t.type_of_medium,modelValue:e.type_of_mediums_updated,"onUpdate:modelValue":a[7]||(a[7]=a=>e.type_of_mediums_updated=a),disable:""},null,8,["label","val","modelValue"])]),e.isMoving||"DIGITAL STATIC"==t.val?e.isMoving&&0==o?((0,l.wg)(),(0,l.iD)("td",Oe,[(0,l.Wm)(c,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("td",Ze,[(0,l.Wm)(c,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]))])))),128))])])])])])):(0,l.kq)("",!0),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[Le,Qe])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{bordered:"",class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[Pe,Re,(0,l._)("div",$e,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),Be])])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",Fe,[(0,l._)("div",Ge,[(0,l._)("div",je,[(0,l._)("div",He,[Xe,Ye,(0,l._)("label",Ke,(0,i.zw)(s.parentData.origMainDocUrl),1)])])]),(0,l._)("div",Je,[(0,l.Wm)(h,{color:"red-14",onClick:a[8]||(a[8]=e=>s.viewDoc(s.parentData.origMainDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),ea])),_:1})])])])),_:1}),s.parentData.subDocUrl?((0,l.wg)(),(0,l.iD)("hr",aa)):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:1,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",ta,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),la])])),_:1})):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:2},{default:(0,l.w5)((()=>[(0,l._)("div",oa,[(0,l._)("div",ia,[(0,l._)("div",na,[(0,l._)("div",sa,[da,ma,(0,l._)("label",ra,(0,i.zw)(s.parentData.subDocUrl),1)])])]),(0,l._)("div",ca,[(0,l.Wm)(h,{color:"red-14",onClick:a[9]||(a[9]=e=>s.viewDoc(s.parentData.subDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),ua])),_:1})])])])),_:1})):(0,l.kq)("",!0),e.doc_types_current.length>0?((0,l.wg)(),(0,l.iD)("div",pa,[(0,l.Wm)(v,{dense:"",columns:e.doc_types_columns,rows:e.doc_types_current,square:""},{body:(0,l.w5)((a=>[(0,l.Wm)(y,{props:a,hover:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{key:"type_of_document",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.type_of_document||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"input",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.input||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"variant",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.variant||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"expiration_date",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.expiration_date||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"date_launch",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.date_launch?a.row.date_launch:"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"remarks",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.row.remarks||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"actions",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{size:"sm",color:"red-14",icon:"delete",onClick:t=>e.removeDoc(a.row.id,a.pageIndex)},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])):(0,l.kq)("",!0),s.parentData.revision_letter?((0,l.wg)(),(0,l.j4)(_,{key:4,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",_a,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),fa])])),_:1})):(0,l.kq)("",!0),s.parentData.revision_letter?((0,l.wg)(),(0,l.j4)(_,{key:5},{default:(0,l.w5)((()=>[(0,l._)("div",ga,[(0,l._)("div",ha,[(0,l._)("div",ba,[(0,l._)("div",ya,[va,wa,(0,l._)("label",Da,(0,i.zw)(s.parentData.revision_letter),1)])])]),(0,l._)("div",qa,[(0,l.Wm)(h,{color:"red-14",onClick:a[10]||(a[10]=e=>s.viewDoc(s.parentData.revision_letter))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),Ia])),_:1})])])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Wa=t(6827);const ka={props:["appId"],data:()=>({company_name:"",single_media:"",language:null,type_of_medium_options:[],type_of_mediums_updated:[],type_of_mediums_length:[],size:0,length:0,execution:"",others:[],execution_options:[],medium_options:[],language_options:[],multimedia_options:[],multimedia_moving_static:[],isMoving:null,is_moving_length:"",doc_types_columns:[{name:"type_of_document",align:"left",label:"TYPE OF DOCUMENT",field:"type_of_document",sortable:!0},{name:"input",align:"left",label:"INPUT",field:"input",sortable:!0},{name:"variant",align:"left",label:"VARIANT",field:"variant",sortable:!0},{name:"expiration_date",align:"left",label:"EXPIRES ON",field:"expiration_date",sortable:!0},{name:"date_launch",align:"left",label:"BASED ON",field:"date_launch",sortable:!0},{name:"remarks",align:"left",label:"REMARKS",field:"remarks",sortable:!0}],doc_types_current:[]}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},watch:{isMoving(e,a){let t=this;[!0,!1].includes(e)&&(this.type_of_medium_options=this.multimedia_options.filter((a=>a.isMoving==e)),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,this.type_of_medium_options.map((e=>{t.parentData.type_of_medium.map((a=>{if(e.type_of_medium==a.type_of_medium)return{...e,lengthSize:a.lengthSize}}))}))))}},mounted(){this.initApp()},methods:{async saveUpdate(){let e=this,a={form_group:this.parentData.form_group,type_of_media:this.parentData.type_of_media,ad_title:this.parentData.ad_title,tag_line:this.parentData.tag_line,application_type:this.parentData.application_type,type_of_mediums:[]};this.type_of_medium_options.map(((e,t)=>this.type_of_mediums_updated.map(((t,l)=>{e.type_of_medium==t&&(e.type_of_medium=t,delete e.val,a.type_of_mediums.push(e))})))),"SINGLE MEDIA"==this.parentData.type_of_media&&(console.log(this.parentData.type_of_medium,"CURRENT TYPE OF MEDIUM"),a.type_of_mediums=this.parentData.type_of_medium.map((e=>({...e,type_of_medium:e.type_of_medium.desc})))),a={data:a,id:this.appId},e.parentData.type_of_medium_parsed=a.data.type_of_mediums.map((e=>e.type_of_medium)),console.log(a,"UPDATE PAYLOAD");let{data:t,status:l}=await e.$store.dispatch("s1/updateApp",a);[200,201].includes(l)?(Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.initApp()):Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},viewDoc(e){window.open(e,"_blank")},initApp(){var e,a,t;let l=this;l.doc_types_current=l.parentData.document_type,this.parentData.type_of_media,this.getAllExecution(),this.getAllMediums(),this.getAllLanguage(),this.multimedia_options=[{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"CINEMA",type_of_medium:"CINEMA"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"COLLATERALSC",type_of_medium:"COLLATERALSC"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"DIGITAL VIDEO",type_of_medium:"DIGITAL VIDEO"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"E-OOH",type_of_medium:""},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"TELEVISION",type_of_medium:"TELEVISION"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"COLLATERALS",type_of_medium:"COLLATERALS"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"DIGITAL STATIC",type_of_medium:"DIGITAL STATIC"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"OOH",type_of_medium:"OOH"},{dialect:"",exececution:"",isMoving:0,length:"",lengthSize:"",others:"",val:"PRINT",type_of_medium:"PRINT"}],this.isMoving=!(null===(e=this.parentData)||void 0===e||!e.type_of_medium)&&0!=(null===(a=this.parentData)||void 0===a||null===(t=a.type_of_medium[0])||void 0===t?void 0:t.isMoving),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,console.log(this.type_of_mediums_updated,"MULTIMEDIA!!!")),this.type_of_medium_options=this.multimedia_options.filter((e=>e.isMoving==l.isMoving)),this.parentData.type_of_medium_new.map((e=>{this.type_of_medium_options.map(((a,t)=>{e.type_of_medium==a.type_of_medium&&(l.type_of_medium_options[t].lengthSize=e.lengthSize)}))})),console.log(this.parentData.type_of_medium_parsed,"CHECK MEDIUMS"),this.type_of_mediums_updated=this.parentData.type_of_medium_parsed},async getAllExecution(){let e=this,a={page:1,size:1e3,order:"type:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllExecutionTypes",a);e.execution_options=t.rows},async getAllMediums(){let e=this,a={page:1,size:1e3,order:"desc:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllMediums",a);e.medium_options=t.rows;let o=e.parentData.type_of_medium_parsed[0];"SINGLE MEDIA"==e.parentData.type_of_media&&t.rows.map(((a,t)=>{o==a.desc&&(e.parentData.type_of_medium[0].type_of_medium=a,console.log(a))}))},async getAllLanguage(){let e=this,a={page:1,size:1e3,order:"dialect:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllDialects",a);e.language_options=t.rows}}};var Aa=t(1480),xa=t(1221),Ua=t(8879),Sa=t(1463),Ta=t(9546),Ea=t(7220);const Ca=(0,L.Z)(ka,[["render",Va]]),Ma=Ca;function Na(e,a,t,o,i,n){const s=(0,l.up)("q-icon"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-color"),r=(0,l.up)("q-item"),c=(0,l.up)("q-list"),u=(0,l.up)("q-btn-dropdown"),p=(0,l.up)("q-editor");return(0,l.wg)(),(0,l.j4)(p,{modelValue:i.editor,"onUpdate:modelValue":a[4]||(a[4]=e=>i.editor=e),"toolbar-bg":"grey-3",ref:"editor",toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"token","removeFormat","bold","italic","strike","underline","subscript","superscript","quote","unordered","ordered","outdent","indent","undo","redo"]],fonts:i.fonts},{token:(0,l.w5)((()=>[(0,l.Wm)(u,{dense:"","no-caps":"",ref:"token","no-wrap":"",unelevated:"",color:"white","text-color":"primary",label:"Higlight / Text Color",size:"sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{dense:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[1]||(a[1]=e=>n.color("backColor",i.highlight))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"highlight"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.highlight,"onUpdate:modelValue":a[0]||(a[0]=e=>i.highlight=e),"default-view":"palette","no-header":"","no-footer":"",palette:["#ffccccaa","#ffe6ccaa","#ffffccaa","#ccffccaa","#ccffe6aa","#ccffffaa","#cce6ffaa","#ccccffaa","#e6ccffaa","#ffccffaa","#ff0000aa","#ff8000aa","#ffff00aa","##00ff00aa","#00ff80aa","#00ffffaa","#0080ffaa","#0000ffaa","#8000ffaa","#ff00ffaa"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[3]||(a[3]=e=>n.color("foreColor",i.foreColor))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"format_paint"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.foreColor,"onUpdate:modelValue":a[2]||(a[2]=e=>i.foreColor=e),"no-header":"","no-footer":"","default-view":"palette",palette:["#ff0000","#ff8000","#ffff00","##00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","toolbar","fonts"])}Y()(ka,"components",{QExpansionItem:Q.Z,QItemSection:P.Z,QAvatar:R.Z,QIcon:$.Z,QCard:B.Z,QCardSection:F.Z,QForm:G.Z,QInput:H.Z,QSelect:j.Z,QRadio:Aa.Z,QCheckbox:xa.Z,QBtn:Ua.Z,QTable:Sa.Z,QTr:Ta.Z,QTd:Ea.Z});const za={data(){return{foreColor:"#000000",highlight:"#ffff00aa",editor:"Select some text, then select a highlight or text color!",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}}},methods:{color(e,a){const t=this.$refs.editor;this.$refs.token.hide(),t.caret.restore(),t.runCmd(e,a),t.focus()}}};var Za=t(4695),Oa=t(8479),La=t(3246),Qa=t(490),Pa=t(7741);const Ra=(0,L.Z)(za,[["render",Na]]),$a=Ra;Y()(za,"components",{QEditor:Za.Z,QBtnDropdown:Oa.Z,QList:La.Z,QItem:Qa.Z,QItemSection:P.Z,QIcon:$.Z,QColor:Pa.Z});t(3195);const Ba={components:{ClientInformation:J,PresentorInformation:_e,MaterialInformation:Ma,RichText:$a},computed:{disable_comment_btn(){return("internal_comments_tab"!==this.tab||""===this.internal_comment_input)&&("external_comments_tab"!==this.tab||""===this.external_comment_input)},comment_type(){return"internal_comments_tab"==this.tab?"internal_comment":"external_comment"},selectedId(){return this.$route.params.id}},data:()=>({is_loading:!0,internal_comment_input:"",external_comment_input:"",tab:"internal_comments_tab",refresh_sec:0,id:42,form_type:"s1",form_group:"",referrence_code:null,application_type:"REGULAR",slugified_app_type:"regular",process_type:"ORIGINAL",brand:"BRAND D",product:"SAMPLE PRODUCT IN D",category:"SAVOURY FOODS & SEASONINGS",type_of_media:"MULTIMEDIA",hasBirFormFiled:0,isRejected:null,payment_status:"UNPAID",isPaidByApplicant:0,amount:null,ad_title:"ET EST QUIS MINUS Q",tag_line:"INCIDUNT QUIA CULPA",hasNoSubDocs:1,origMainDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",subDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",complianceMainDocUrl:null,complianceSubDocUrl:null,decisionFormURL:null,stampMaterialUrl:null,hasSubmitted:1,internal_comment:null,external_comment:null,applicant_status:"S1 APPLICATION SUBMITTED",internal_status:"S1 APPLICATION SUBMITTED",decision_status:null,release_status:null,isLocked:1,forCompliance:0,forS2:0,application_date:"2022-11-14T13:22:10.115Z",submission_date:"2022-11-14",submission_time:"20:56:36",decision_status_date:null,release_date:null,issued_date:null,valid_until_date:null,modified_at:"2022-11-16T18:25:13.000Z",archived_at:null,verifiedDateByEvaluator:null,verifiedDateByAdSpe:null,verifiedDateByScreener:null,verifiedDateByReviewer:null,revision_count:0,adSpe:null,type_of_medium_parsed:[],type_of_medium_new:[],affiliate_id:null,decision_options:[],reviewer_options:[],affiliate_name:"",revwer_id:null}),mounted(){this.initApp()},methods:{paymentStatusColor(e){switch(e){case"FOR PAYMENT":return{bg:"yellow-5",text:"dark"};case"PAID":return{bg:"green-5",text:"white"};case"UNPAID":return{bg:"red-14",text:"white"};default:return{bg:"grey",text:"white"}}},intFormatter(e){const a=Intl.NumberFormat("en-US",{style:"currency",currency:"PHP"});return e/=100,a.format(e)},initApp(){this.getSpecific(),this.getAllUsers(),this.decision_options=[{label:"APPROVED FOR PRODUCTION",value:"APPROVED FOR PRODUCTION"},{label:"APPROVED WITH CAUTION",value:"APPROVED WITH CAUTION"},{label:"INCOMPLETE",value:"INCOMPLETE"},{label:"DISAPPROVED",value:"DISAPPROVED"}]},async getAllUsers(){let e=this;e.loading_list=!0;let a={page:1,size:1e3,order:"fname:asc",search:"",filter:"asc"},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllUsers",a);e.reviewer_options=t.rows.filter((e=>"revwer"==e.type))},backToList(){this.$router.push({name:"individual-application-list"})},async getSpecific(){var e,a;let t=this;t.is_loading=!0;let l={id:t.selectedId},{data:o,status:i}=await t.$store.dispatch("asc_user/getSpecific",l);console.log(o);for(let n in o)t[n]=o[n];t.applicant_fullname=`${t.applicant.fname} ${t.applicant.mname} ${t.applicant.lname}`||"--",t.company_name=`${t.company.name}`||"--",t.affiliate_name=(null===(e=o.company)||void 0===e||null===(a=e.affiliate)||void 0===a?void 0:a.name)||"--",t.address=`${t.company.address}`||"--",t.phone=`${t.applicant.phone}`||"--",t.company_phone=`${t.company.phone}`||"--",t.company_email=`${t.applicant.email}`||"--",t.internal_comment_input=`${null!=t.internal_comment?t.internal_comment:""}`||"",t.external_comment_input=`${null!=t.external_comment?t.external_comment:""}`||"",t.type_of_medium_parsed=t.type_of_medium.map((e=>e.type_of_medium)),t.type_of_medium_new=o.type_of_medium,t.affiliate_id=o.company.affiliateID,t.$nextTick((()=>{t.is_loading=!1}))},async saveComment(){let e=this,a={id:e.selectedId,data:{internal_comment:e.internal_comment_input}};"external_comment"===e.comment_type&&(a={id:e.selectedId,data:{external_comment:e.external_comment_input}});let{data:t,status:l}=await e.$store.dispatch("asc_user/comment",a);[200,201].includes(l)?Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async decision(){let e=this,a={id:this.$route.params.id,data:{decision_status:e.decision_status.value,reviewerId:e.revwer_id.id}},{data:t,status:l}=await e.$store.dispatch("s1/passToReviewer",a);[200,201].includes(l)?(Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):Wa.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async reassign(e){let a=this,t={id:this.$route.params.id,data:{assigned_userRole:e,assigned_user_id:this.adSpe.id}};1004==e&&(t.data.assigned_user_id=a.revwer_id.id);let{data:l,status:o}=await a.$store.dispatch("asc_user/reassign",t);[200,201].includes(o)?(Wa.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):Wa.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}}};var Fa=t(8359),Ga=t(926),ja=t(990),Ha=t(3358),Xa=t(7817),Ya=t(900);const Ka=(0,L.Z)(Ba,[["render",A]]),Ja=Ka;Y()(Ba,"components",{QSpinnerIos:Fa.Z,QCard:B.Z,QCardSection:F.Z,QIcon:$.Z,QBtn:Ua.Z,QSeparator:Ga.Z,QBadge:ja.Z,QInput:H.Z,QSelect:j.Z,QList:La.Z,QSpinnerHourglass:Ha.Z,QTabs:Xa.Z,QTab:Ya.Z});const et={data:()=>({}),components:{DetailsIndex:Ja}},at=(0,L.Z)(et,[["render",o]]),tt=at},3195:()=>{}}]);