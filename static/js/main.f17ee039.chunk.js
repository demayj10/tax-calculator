(this["webpackJsonptax-calculator"]=this["webpackJsonptax-calculator"]||[]).push([[0],{76:function(a,t,e){},82:function(a,t,e){},84:function(a,t,e){},85:function(a,t,e){},86:function(a,t,e){},87:function(a,t,e){},88:function(a,t,e){},90:function(a,t,e){},91:function(a,t,e){"use strict";e.r(t);var i,o=e(0),n=e.n(o),l=e(28),u=e.n(l),r=(e(76),e(18)),T=(e(82),r.c),m=142800,s=.062,c=.0145,x={minimumToQualify:0,taxRate:.1,taxTotalToThisBracket:0},h={minimumToQualify:9876,taxRate:.12,taxTotalToThisBracket:987.5},d={minimumToQualify:40126,taxRate:.22,taxTotalToThisBracket:4617.5},f={minimumToQualify:85526,taxRate:.24,taxTotalToThisBracket:14605.5},y={minimumToQualify:163301,taxRate:.32,taxTotalToThisBracket:33271.5},j={minimumToQualify:207351,taxRate:.35,taxTotalToThisBracket:47367.5},R={minimumToQualify:518401,taxRate:.37,taxTotalToThisBracket:156235},b=[x,h,d,f,y,j,R];!function(a){a.Single="Single",a.MarriedJointly="Married filing jointly",a.MarriedSeparately="Married filing separately",a.DefaultForTesting="Default for testing"}(i||(i={}));var k,Q=[i.Single,i.MarriedJointly,i.MarriedSeparately],B={minimumToQualify:0,taxRate:.1,taxTotalToThisBracket:0},v={minimumToQualify:19751,taxRate:.12,taxTotalToThisBracket:1975},O={minimumToQualify:80251,taxRate:.22,taxTotalToThisBracket:9235},g={minimumToQualify:171051,taxRate:.24,taxTotalToThisBracket:29211},I={minimumToQualify:326601,taxRate:.32,taxTotalToThisBracket:66543},S={minimumToQualify:414701,taxRate:.35,taxTotalToThisBracket:94735},A={minimumToQualify:622051,taxRate:.37,taxTotalToThisBracket:167307.5},p=[B,v,O,g,I,S,A],C={minimumToQualify:0,taxRate:.1,taxTotalToThisBracket:0},D={minimumToQualify:9876,taxRate:.12,taxTotalToThisBracket:987.5},N={minimumToQualify:85526,taxRate:.24,taxTotalToThisBracket:14605.5},w={minimumToQualify:163301,taxRate:.32,taxTotalToThisBracket:33271.5},M={minimumToQualify:207351,taxRate:.35,taxTotalToThisBracket:47367.5},H={minimumToQualify:311026,taxRate:.37,taxTotalToThisBracket:83653.75},W=[C,D,{minimumToQualify:40126,taxRate:.22,taxTotalToThisBracket:4617.5},N,w,M,H],F=function(a,t){var e=function(a,t){var e=x;return t.forEach((function(t){a>t.minimumToQualify&&t.minimumToQualify>e.minimumToQualify&&(e=t)})),e}(a,function(a){switch(a){case i.Single:return b;case i.MarriedJointly:return p;case i.MarriedSeparately:return W;default:return[]}}(t)),o=e.minimumToQualify,n=e.taxRate;return{taxRate:n,taxAmount:(a-o)*n+e.taxTotalToThisBracket}},P=function(a,t){var e=F(a,t),i=e.taxRate,o=e.taxAmount,n=function(a){return a>m?8853.6:a*s}(a),l=function(a){return a*c}(a);return{federalIncomeTaxRate:i,federalIncomeTaxAmount:o,socialSecurityTaxRate:s,socialSecurityTaxAmount:n,medicareTaxRate:c,medicareTaxAmount:l,totalFederalTaxAmount:o+n+l}};!function(a){a.Alabama="Alabama",a.Alaska="Alaska",a.Arizona="Arizona",a.Arkansas="Arkansas",a.Florida="Florida",a.Georgia="Georgia",a.Illinois="Illinois",a.Indiana="Indiana",a.Iowa="Iowa",a.Kansas="Kansas",a.Louisiana="Louisiana",a.Michigan="Michigan",a.Minnesota="Minnesota",a.Mississippi="Mississippi",a.Nebraska="Nebraska",a.Nevada="Nevada",a.NewMexico="New Mexico",a.NorthDakota="North Dakota",a.NorthCarolina="North Carolina",a.Ohio="Ohio",a.Oklahoma="Oklahoma",a.Pennsylvania="Pennsylvania",a.SouthCarolina="South Carolina",a.SouthDakota="South Dakota",a.Tennessee="Tennessee",a.Texas="Texas",a.Washington="Washington",a.Wisconsin="Wisconsin",a.Wyoming="Wyoming"}(k||(k={}));var L,G=[k.Alaska,k.Florida,k.Nevada,k.SouthDakota,k.Tennessee,k.Texas,k.Washington,k.Wyoming],E=[k.Alabama,k.Alaska,k.Arizona,k.Arkansas,k.Florida,k.Georgia,k.Illinois,k.Indiana,k.Iowa,k.Kansas,k.Michigan,k.Minnesota,k.Mississippi,k.Louisiana,k.Nebraska,k.NewMexico,k.Nevada,k.NorthDakota,k.NorthCarolina,k.Ohio,k.Oklahoma,k.Pennsylvania,k.SouthCarolina,k.SouthDakota,k.Tennessee,k.Texas,k.Washington,k.Wisconsin,k.Wyoming],z={minimumToQualify:0,taxRate:.02,taxTotalToThisBracket:0},J={minimumToQualify:500,taxRate:.04,taxTotalToThisBracket:10},U={minimumToQualify:3e3,taxRate:.05,taxTotalToThisBracket:110},V={minimumToQualify:1e3,taxRate:.04,taxTotalToThisBracket:20},K={minimumToQualify:6e3,taxRate:.05,taxTotalToThisBracket:220},$=[z,J,U],Y=[z,V,K],q={minimumToQualify:0,taxRate:.02,taxTotalToThisBracket:0},X={minimumToQualify:4e3,taxRate:.04,taxTotalToThisBracket:80},Z={minimumToQualify:8e3,taxRate:.059,taxTotalToThisBracket:240},_={minimumToQualify:79300,taxRate:.066,taxTotalToThisBracket:4446.7},aa=[q,X,Z,_],ta={minimumToQualify:0,taxRate:.0259,taxTotalToThisBracket:0},ea={minimumToQualify:27809,taxRate:.0334,taxTotalToThisBracket:720},ia={minimumToQualify:55616,taxRate:.0417,taxTotalToThisBracket:1649},oa={minimumToQualify:166844,taxRate:.045,taxTotalToThisBracket:6287},na={minimumToQualify:250001,taxRate:.01,taxTotalToThisBracket:10029},la={minimumToQualify:55616,taxRate:.0334,taxTotalToThisBracket:1440},ua={minimumToQualify:111230,taxRate:.0417,taxTotalToThisBracket:3298},ra={minimumToQualify:333685,taxRate:.045,taxTotalToThisBracket:12574},Ta={minimumToQualify:500001,taxRate:.01,taxTotalToThisBracket:20059},ma=[ta,ea,ia,oa,na],sa=[ta,la,ua,ra,Ta],ca={minimumToQualify:0,taxRate:.01,taxTotalToThisBracket:0},xa={minimumToQualify:750,taxRate:.02,taxTotalToThisBracket:7.5},ha={minimumToQualify:2250,taxRate:.03,taxTotalToThisBracket:37.5},da={minimumToQualify:3750,taxRate:.04,taxTotalToThisBracket:82.5},fa={minimumToQualify:5250,taxRate:.05,taxTotalToThisBracket:142.5},ya={minimumToQualify:7e3,taxRate:.0575,taxTotalToThisBracket:230},ja={minimumToQualify:1e3,taxRate:.02,taxTotalToThisBracket:20},Ra={minimumToQualify:3e3,taxRate:.03,taxTotalToThisBracket:60},ba={minimumToQualify:5e3,taxRate:.04,taxTotalToThisBracket:120},ka={minimumToQualify:7e3,taxRate:.05,taxTotalToThisBracket:200},Qa={minimumToQualify:1e4,taxRate:.0575,taxTotalToThisBracket:350},Ba=[ca,xa,ha,da,fa,ya],va=[ca,ja,Ra,ba,ka,Qa],Oa={minimumToQualify:0,taxRate:.0033,taxTotalToThisBracket:0},ga={minimumToQualify:1666,taxRate:.0067,taxTotalToThisBracket:5.5},Ia={minimumToQualify:3332,taxRate:.0225,taxTotalToThisBracket:16.66},Sa={minimumToQualify:6664,taxRate:.0414,taxTotalToThisBracket:91.63},Aa={minimumToQualify:14994,taxRate:.0563,taxTotalToThisBracket:436.49},pa={minimumToQualify:24990,taxRate:.0596,taxTotalToThisBracket:999.26},Ca={minimumToQualify:33320,taxRate:.0625,taxTotalToThisBracket:1495.73},Da={minimumToQualify:49980,taxRate:.0744,taxTotalToThisBracket:2536.98},Na={minimumToQualify:74971,taxRate:.0853,taxTotalToThisBracket:4396.24},wa=[Oa,ga,Ia,Sa,Aa,pa,Ca,Da,Na],Ma={minimumToQualify:0,taxRate:.0495,taxTotalToThisBracket:0},Ha=[Ma],Wa={minimumToQualify:0,taxRate:.0323,taxTotalToThisBracket:0},Fa=[Wa],Pa={minimumToQualify:0,taxRate:.031,taxTotalToThisBracket:0},La={minimumToQualify:15001,taxRate:.0525,taxTotalToThisBracket:465},Ga={minimumToQualify:30001,taxRate:.057,taxTotalToThisBracket:2039.9475},Ea={minimumToQualify:30001,taxRate:.0525,taxTotalToThisBracket:930},za={minimumToQualify:60001,taxRate:.057,taxTotalToThisBracket:2504.9475},Ja=[Pa,La,Ga],Ua=[Pa,Ea,za],Va={minimumToQualify:0,taxRate:.02,taxTotalToThisBracket:0},Ka={minimumToQualify:12501,taxRate:.04,taxTotalToThisBracket:250},$a={minimumToQualify:50001,taxRate:.06,taxTotalToThisBracket:1750},Ya={minimumToQualify:25001,taxRate:.04,taxTotalToThisBracket:500},qa={minimumToQualify:100001,taxRate:.06,taxTotalToThisBracket:3500},Xa=[Va,Ka,$a],Za=[Va,Ya,qa],_a={minimumToQualify:0,taxRate:.0425,taxTotalToThisBracket:0},at=[_a],tt={minimumToQualify:0,taxRate:.0535,taxTotalToThisBracket:0},et={minimumToQualify:27231,taxRate:.068,taxTotalToThisBracket:1456.805},it={minimumToQualify:89441,taxRate:.0785,taxTotalToThisBracket:5687.017},ot={minimumToQualify:166041,taxRate:.0985,taxTotalToThisBracket:11700.0385},nt={minimumToQualify:39811,taxRate:.068,taxTotalToThisBracket:2129.835},lt={minimumToQualify:158141,taxRate:.0785,taxTotalToThisBracket:10176.207},ut={minimumToQualify:276201,taxRate:.0985,taxTotalToThisBracket:19443.8385},rt=[tt,et,it,ot],Tt=[tt,nt,lt,ut],mt={minimumToQualify:0,taxRate:0,taxTotalToThisBracket:0},st={minimumToQualify:1001,taxRate:.03,taxTotalToThisBracket:0},ct={minimumToQualify:5001,taxRate:.04,taxTotalToThisBracket:120},xt={minimumToQualify:10001,taxRate:.05,taxTotalToThisBracket:320},ht=[mt,st,ct,xt],dt={minimumToQualify:0,taxRate:.0525,taxTotalToThisBracket:0},ft=[dt],yt={minimumToQualify:0,taxRate:.011,taxTotalToThisBracket:0},jt={minimumToQualify:39450,taxRate:.0204,taxTotalToThisBracket:434.049},Rt={minimumToQualify:95500,taxRate:.0227,taxTotalToThisBracket:1577.4486},bt={minimumToQualify:199250,taxRate:.0264,taxTotalToThisBracket:3932.5509},kt={minimumToQualify:433200,taxRate:.029,taxTotalToThisBracket:10108.8045},Qt={minimumToQualify:65900,taxRate:.0204,taxTotalToThisBracket:720.489},Bt={minimumToQualify:159200,taxRate:.0227,taxTotalToThisBracket:2623.7886},vt={minimumToQualify:242550,taxRate:.0264,taxTotalToThisBracket:4515.8109},Ot={minimumToQualify:433200,taxRate:.029,taxTotalToThisBracket:9548.9445},gt=[yt,jt,Rt,bt,kt],It=[yt,Qt,Bt,vt,Ot],St={minimumToQualify:0,taxRate:.0246,taxTotalToThisBracket:0},At={minimumToQualify:3051,taxRate:.0351,taxTotalToThisBracket:75.03},pt={minimumToQualify:18281,taxRate:.0501,taxTotalToThisBracket:609.5679},Ct={minimumToQualify:29461,taxRate:.0684,taxTotalToThisBracket:1169.6358},Dt={minimumToQualify:6091,taxRate:.0351,taxTotalToThisBracket:149.814},Nt={minimumToQualify:36571,taxRate:.0501,taxTotalToThisBracket:1219.6269},wt={minimumToQualify:58921,taxRate:.0684,taxTotalToThisBracket:2339.3118},Mt=[St,At,pt,Ct],Ht=[St,Dt,Nt,wt],Wt={minimumToQualify:0,taxRate:.017,taxTotalToThisBracket:0},Ft={minimumToQualify:5501,taxRate:.032,taxTotalToThisBracket:93.5},Pt={minimumToQualify:11001,taxRate:.047,taxTotalToThisBracket:269.468},Lt={minimumToQualify:16001,taxRate:.049,taxTotalToThisBracket:504.421},Gt={minimumToQualify:8001,taxRate:.032,taxTotalToThisBracket:136},Et={minimumToQualify:16001,taxRate:.047,taxTotalToThisBracket:391.968},zt={minimumToQualify:24001,taxRate:.049,taxTotalToThisBracket:767.921},Jt={minimumToQualify:4001,taxRate:.032,taxTotalToThisBracket:68},Ut={minimumToQualify:8001,taxRate:.047,taxTotalToThisBracket:195.968},Vt={minimumToQualify:12001,taxRate:.049,taxTotalToThisBracket:383.921},Kt=[Wt,Ft,Pt,Lt],$t=[Wt,Gt,Et,zt],Yt=[Wt,Jt,Ut,Vt],qt={minimumToQualify:0,taxRate:.00495,taxTotalToThisBracket:0},Xt={minimumToQualify:5200,taxRate:.0099,taxTotalToThisBracket:25.74},Zt={minimumToQualify:10400,taxRate:.0198,taxTotalToThisBracket:77.22},_t={minimumToQualify:15650,taxRate:.02476,taxTotalToThisBracket:180.18},ae={minimumToQualify:20900,taxRate:.02969,taxTotalToThisBracket:310.17},te={minimumToQualify:41700,taxRate:.03465,taxTotalToThisBracket:466.04},ee={minimumToQualify:83350,taxRate:.0396,taxTotalToThisBracket:1186.76},ie={minimumToQualify:104250,taxRate:.04597,taxTotalToThisBracket:2836.1},oe={minimumToQualify:208500,taxRate:.04997,taxTotalToThisBracket:3796.88},ne=[qt,Xt,Zt,_t,ae,te,ee,ie,oe],le={minimumToQualify:0,taxRate:.005,taxTotalToThisBracket:0},ue={minimumToQualify:1e3,taxRate:.01,taxTotalToThisBracket:5},re={minimumToQualify:2500,taxRate:.02,taxTotalToThisBracket:20},Te={minimumToQualify:3750,taxRate:.03,taxTotalToThisBracket:45},me={minimumToQualify:4900,taxRate:.04,taxTotalToThisBracket:79.5},se={minimumToQualify:7200,taxRate:.05,taxTotalToThisBracket:171.5},ce={minimumToQualify:2e3,taxRate:.01,taxTotalToThisBracket:10},xe={minimumToQualify:5e3,taxRate:.02,taxTotalToThisBracket:40},he={minimumToQualify:7500,taxRate:.03,taxTotalToThisBracket:90},de={minimumToQualify:9800,taxRate:.04,taxTotalToThisBracket:159},fe={minimumToQualify:12200,taxRate:.05,taxTotalToThisBracket:255},ye=[le,ue,re,Te,me,se],je=[le,ce,xe,he,de,fe],Re={minimumToQualify:0,taxRate:.0307,taxTotalToThisBracket:0},be=[Re],ke={minimumToQualify:0,taxRate:0,taxTotalToThisBracket:0},Qe={minimumToQualify:3071,taxRate:.03,taxTotalToThisBracket:0},Be={minimumToQualify:6151,taxRate:.04,taxTotalToThisBracket:92.37},ve={minimumToQualify:9231,taxRate:.05,taxTotalToThisBracket:215.53},Oe={minimumToQualify:12311,taxRate:.06,taxTotalToThisBracket:369.48},ge={minimumToQualify:15401,taxRate:.07,taxTotalToThisBracket:554.82},Ie=[ke,Qe,Be,ve,Oe,ge],Se={minimumToQualify:0,taxRate:.04,taxTotalToThisBracket:0},Ae={minimumToQualify:11091,taxRate:.0584,taxTotalToThisBracket:443.6},pe={minimumToQualify:22191,taxRate:.0627,taxTotalToThisBracket:1091.7816},Ce={minimumToQualify:244271,taxRate:.0765,taxTotalToThisBracket:15016.1349},De={minimumToQualify:14791,taxRate:.0584,taxTotalToThisBracket:591.6},Ne={minimumToQualify:29581,taxRate:.0627,taxTotalToThisBracket:1455.2776},we={minimumToQualify:325701,taxRate:.0765,taxTotalToThisBracket:20021.9389},Me=[Se,Ae,pe,Ce],He=[Se,De,Ne,we],We=function(a,t,e){if(G.includes(a))return{stateIncomeTaxRate:0,stateIncomeTaxAmount:0,totalStateTaxAmount:0,hasStateIncomeTax:!1};var o=function(a,t){var e=t.minimumToQualify,i=t.taxRate;return{taxRate:i,taxAmount:(a-e)*i+t.taxTotalToThisBracket}}(e,function(a,t){var e=t[0];return t.forEach((function(t){a>t.minimumToQualify&&t.minimumToQualify>e.minimumToQualify&&(e=t)})),e}(e,function(a,t){switch(a){case k.Alabama:switch(t){case i.Single:return $;default:return Y}case k.Arizona:switch(t){case i.Single:return ma;default:return sa}case k.Arkansas:return aa;case k.Georgia:switch(t){case i.Single:return Ba;default:return va}case k.Illinois:return Ha;case k.Indiana:return Fa;case k.Iowa:return wa;case k.Kansas:switch(t){case i.Single:return Ja;default:return Ua}case k.Louisiana:switch(t){case i.Single:return Xa;default:return Za}case k.Michigan:return at;case k.Minnesota:switch(t){case i.Single:return rt;default:return Tt}case k.Mississippi:return ht;case k.Nebraska:switch(t){case i.Single:return Mt;default:return Ht}case k.NewMexico:switch(t){case i.Single:return Kt;case i.MarriedSeparately:return Yt;default:return $t}case k.NorthDakota:switch(t){case i.Single:return gt;default:return It}case k.NorthCarolina:return ft;case k.Ohio:return ne;case k.Oklahoma:switch(t){case i.Single:return ye;default:return je}case k.Pennsylvania:return be;case k.SouthCarolina:return Ie;case k.Wisconsin:switch(t){case i.Single:return Me;default:return He}default:return[]}}(a,t))),n=o.taxRate,l=o.taxAmount;return{stateIncomeTaxRate:n,stateIncomeTaxAmount:l,totalStateTaxAmount:l,hasStateIncomeTax:!0}},Fe=e(17),Pe=e(34),Le=Object(Pe.b)({name:"resultData",initialState:{federal:{federalIncomeTaxRate:0,federalIncomeTaxAmount:0,socialSecurityTaxRate:0,socialSecurityTaxAmount:0,medicareTaxRate:0,medicareTaxAmount:0,totalFederalTaxAmount:0},state:{stateIncomeTaxRate:0,stateIncomeTaxAmount:0,totalStateTaxAmount:0,hasStateIncomeTax:!0},grossAnnualIncome:0,totalTaxes:0,netAnnualIncome:0,showContent:!1},reducers:{updateResultData:function(a,t){return t.payload},toggleContent:function(a,t){return Object(Fe.a)(Object(Fe.a)({},a),{},{showContent:t.payload})}}}),Ge=Le.actions,Ee=Ge.updateResultData,ze=Ge.toggleContent,Je=function(a){return a.resultDataReducer},Ue=Le.reducer,Ve=e(122),Ke=e(5);!function(a){a.Hourly="Hourly",a.Salary="Salary"}(L||(L={}));var $e,Ye={grossAnnualIncome:"",maritalStatus:"",selectedState:"",hourly:{hourlyRate:"",averageHoursWorked:"",overtimeRate:"",averageOvertimeHoursWorked:""},isHourly:!1},qe=Object(Pe.b)({name:"inputForm",initialState:Ye,reducers:{handleTextChange:function(a,t){var e=t.payload,i=e.field,o=e.value;switch(e.type){case L.Hourly:return Object(Fe.a)(Object(Fe.a)({},a),{},{hourly:Object(Fe.a)(Object(Fe.a)({},a.hourly),{},Object(Ke.a)({},i,o))});default:return Object(Fe.a)(Object(Fe.a)({},a),{},Object(Ke.a)({},i,o))}},handleRadioChange:function(a,t){var e=t.payload.value;return Object(Fe.a)(Object(Fe.a)({},a),{},{isHourly:e===L.Hourly})},resetInput:function(a){return a.isHourly?Object(Fe.a)(Object(Fe.a)({},Ye),{},{isHourly:a.isHourly}):Object(Fe.a)({},Ye)}}}),Xe=qe.actions,Ze=Xe.handleTextChange,_e=Xe.handleRadioChange,ai=Xe.resetInput,ti=function(a){return a.inputFormReducer},ei=qe.reducer,ii=e(123),oi=e(1),ni=function(a){var t=a.label,e=a.id,i=a.optionList,o=a.handleInputChange,n=a.testId,l=a.value;return Object(oi.jsxs)("div",{className:"input-row",children:[Object(oi.jsx)(ii.a,{variant:"h6",children:t}),Object(oi.jsx)("div",{className:"input-value-item",children:Object(oi.jsxs)("select",{name:e,"data-testid":n,id:e,value:l,onChange:function(a){return o(a)},children:[Object(oi.jsx)("option",{value:"",label:"Select",disabled:!0}),i.map((function(a){return Object(oi.jsx)("option",{value:a,children:a},a)}))]})})]})},li=(e(84),e(11)),ui=e(118),ri=e(121),Ti=e(119),mi=e(124),si=e(115),ci=function(a){var t=a.label,e=a.id,i=a.handleInputChange,o=a.testId,n=a.value;return Object(oi.jsxs)("div",{className:"input-row",children:[Object(oi.jsx)(ii.a,{variant:"h6",children:t}),Object(oi.jsx)("div",{className:"input-value-item",children:Object(oi.jsx)("input",{name:e,"aria-label":e,id:e,placeholder:"0","data-testid":o,value:n,onChange:function(a){return i(a)}})})]})},xi=function(){var a=T(ti).hourly,t=a.hourlyRate,e=a.averageHoursWorked,i=a.overtimeRate,o=a.averageOvertimeHoursWorked,n=Object(r.b)(),l=function(a){var t=a.target,e=t.name,i=t.value;if(""===i||/^[1-9]\d*(\.\d*)?$/.test(i)){var o={field:e,value:i,type:L.Hourly};n(Ze(o))}};return Object(oi.jsxs)("div",{className:"income-input-container","data-testid":"hourly-input-container",children:[Object(oi.jsxs)("div",{children:[Object(oi.jsx)(ci,{label:"Hourly Rate",id:"hourlyRate",handleInputChange:l,testId:"hourly-rate-field",value:t}),Object(oi.jsx)(ci,{label:"Average Hours/Week",id:"averageHoursWorked",handleInputChange:l,testId:"average-hours-field",value:e})]}),Object(oi.jsxs)("div",{children:[Object(oi.jsx)(ci,{label:"Overtime Rate",id:"overtimeRate",handleInputChange:l,testId:"overtime-rate-field",value:i}),Object(oi.jsx)(ci,{label:"Average Overtime Hours/Week",id:"averageOvertimeHoursWorked",handleInputChange:l,testId:"average-overtime-hours-field",value:o})]})]})};!function(a){a.Salary="Salary",a.Hourly="Hourly"}($e||($e={}));var hi,di=[$e.Salary,$e.Hourly],fi=function(){var a=T(ti),t=a.grossAnnualIncome,e=a.isHourly,i=Object(r.b)(),o=n.a.useState(e?$e.Hourly:$e.Salary),l=Object(li.a)(o,2),u=l[0],m=l[1],s=function(a){var t=a.target,e=t.value,o=t.name;if("income-radio-buttons-group"===o){m(e),i(_e({field:"isHourly",value:e}))}else{if(""===e||/^[1-9]\d*(\.\d*)?$/.test(e))i(Ze({field:o,value:e}))}};return Object(oi.jsxs)("div",{children:[Object(oi.jsxs)(ui.a,{component:"fieldset",children:[Object(oi.jsx)(ri.a,{component:"legend",children:"How are you paid?"}),Object(oi.jsx)(Ti.a,{row:!0,"aria-label":"grossIncome","data-testid":"income-radio-buttons-group",value:u,name:"income-radio-buttons-group",onChange:function(a){return s(a)},children:di.map((function(a){return Object(oi.jsx)(mi.a,{value:a,control:Object(oi.jsx)(si.a,{}),label:a},a)}))})]}),e?Object(oi.jsx)(xi,{}):Object(oi.jsx)("div",{className:"income-input-container",children:Object(oi.jsx)(ci,{label:"Gross Annual Income",id:"grossAnnualIncome",handleInputChange:s,testId:"grossAnnualIncomeInput",value:t})})]})},yi=function(a){var t=T(ti),e=Object(r.b)(),i=t.grossAnnualIncome,o=t.selectedState,n=t.maritalStatus,l=t.hourly,u=l.hourlyRate,m=l.averageHoursWorked,s=(i.length>0||u.length>0&&m.length>0)&&o.length>0&&n.length>0,c=function(a){var t=a.target,i=t.name,o=t.value;e(Ze({field:i,value:o}))};return Object(oi.jsxs)("div",{id:"formContainer","data-testid":"input-form",children:[Object(oi.jsxs)("div",{id:"input-items",children:[Object(oi.jsx)(fi,{}),Object(oi.jsx)(ni,{label:"Which State do you live in?",id:"selectedState",optionList:E,handleInputChange:c,testId:"stateSelect",value:o}),Object(oi.jsx)(ni,{label:"What is your filing status?",id:"maritalStatus",optionList:Q,handleInputChange:c,testId:"maritalStatusSelect",value:n})]}),Object(oi.jsx)("br",{}),Object(oi.jsx)(Ve.a,{variant:"contained",id:"submit",size:"small",disabled:!s,onClick:function(i){return function(i){i.preventDefault(),e(ai("")),a.submitInput(t)}(i)},children:"Submit"})]})},ji=(e(85),e(128)),Ri=e(114),bi=e(129),ki=(e(86),e(125));!function(a){a.Percentage="PERCENTAGE",a.DollarAmount="DOLLAR AMOUNT",a.DefaultForTesting="Default"}(hi||(hi={}));var Qi,Bi,vi,Oi=function(a){var t,e=a.title,i=a.value,o=a.type,n=a.isSublist,l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});switch(o){case hi.DollarAmount:t=l.format(i);break;case hi.Percentage:t="".concat(parseFloat((100*i).toFixed(3)),"%");break;default:t=i.toString()}return n?Object(oi.jsxs)("li",{className:"dataItem",children:[Object(oi.jsx)("p",{className:"dataItemTitle","data-testid":"dataItemTitle",children:"".concat(e,":")}),Object(oi.jsx)("p",{className:"dataItemValue subListValue","data-testid":"dataItemValue",children:t})]}):Object(oi.jsx)(ki.a,{children:Object(oi.jsxs)("div",{className:"paper-item",children:[Object(oi.jsx)(ii.a,{fontWeight:"bold",variant:"h5",children:"".concat(e,":")}),Object(oi.jsx)(ii.a,{fontWeight:"bold",className:"dataItemValue",variant:"h5","data-testid":"dataItemValue",children:t})]})})},gi=(e(87),e(20)),Ii=e(6),Si=e(126),Ai=(e(88),function(a){var t=a.title,e=a.amount,i=a.ariaControls,o=Object(Ii.a)(Si.a)(Qi||(Qi=Object(gi.a)(["\n    & .MuiAccordionSummary-content {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n    }\n  "]))),n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(oi.jsxs)(o,{"aria-controls":i,className:"accordion-summary",children:[Object(oi.jsx)(ii.a,{fontWeight:"bold",align:"left",variant:"h5",children:t}),Object(oi.jsx)(ii.a,{fontWeight:"bold",align:"right",variant:"h5",children:n.format(e)})]})}),pi=e(117),Ci=Object(Ii.a)(pi.a)(Bi||(Bi=Object(gi.a)(["\n    & .MuiCollapse-wrapper {\n        margin: 0;\n    }\n    \n    & .MuiCollapse-wrapperInner {\n        margin: 0;\n    }\n  "]))),Di=e(127),Ni=Object(Ii.a)(Di.a)(vi||(vi=Object(gi.a)(["\n    padding: 0;\n    margin: 0;\n    \n    div {\n      color: red;\n    }\n  "]))),wi=function(a){var t=a.federalTaxData,e=t.federalIncomeTaxRate,i=t.federalIncomeTaxAmount,o=t.socialSecurityTaxRate,n=t.socialSecurityTaxAmount,l=t.medicareTaxRate,u=t.medicareTaxAmount,r=t.totalFederalTaxAmount;return Object(oi.jsxs)(Ci,{id:"federalResultDataContainer",children:[Object(oi.jsx)(Ai,{title:"Federal Taxes",amount:r,ariaControls:"federalTaxPanel"}),Object(oi.jsxs)(Ni,{children:[Object(oi.jsx)(Oi,{title:"Federal Income Tax Rate",value:e,type:hi.Percentage,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Federal Income Tax Amount",value:i,type:hi.DollarAmount,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Medicare Tax Rate",value:l,type:hi.Percentage,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Medicare Tax Amount",value:u,type:hi.DollarAmount,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Social Security Tax Rate",value:o,type:hi.Percentage,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Social Security Tax Amount",value:n,type:hi.DollarAmount,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Total Federal Tax Amount",value:r,type:hi.DollarAmount,isSublist:!0})]})]})},Mi=(e(90),function(a){var t=a.stateIncomeTaxRate,e=a.stateIncomeTaxAmount,i=a.totalStateTaxAmount;return a.hasStateIncomeTax?Object(oi.jsxs)(Ci,{id:"stateResultDataContainer","data-testid":"state-result-data",children:[Object(oi.jsx)(Ai,{title:"State Taxes",amount:i,ariaControls:"stateTaxPanel"}),Object(oi.jsxs)(Ni,{children:[Object(oi.jsx)(Oi,{title:"State Income Tax Rate",value:t,type:hi.Percentage,isSublist:!0}),Object(oi.jsx)(Oi,{title:"State Income Tax Amount",value:e,type:hi.DollarAmount,isSublist:!0}),Object(oi.jsx)(Oi,{title:"Total State Tax Amount",value:i,type:hi.DollarAmount,isSublist:!0})]})]}):Object(oi.jsx)(Ci,{id:"stateResultDataContainer",disabled:!0,children:Object(oi.jsx)(Si.a,{"aria-controls":"stateTaxPanel",children:"Your state has no income tax!"})})}),Hi=function(a){var t=a.federal,e=a.state,i=e.stateIncomeTaxRate,o=e.stateIncomeTaxAmount,n=e.totalStateTaxAmount,l=e.hasStateIncomeTax,u=a.grossAnnualIncome,r=a.totalTaxes,T=a.netAnnualIncome;return Object(oi.jsxs)("div",{className:"panel-content",children:[Object(oi.jsx)(Oi,{title:"Gross Annual Income",value:u,type:hi.DollarAmount,isSublist:!1}),Object(oi.jsx)(wi,{federalTaxData:t}),Object(oi.jsx)(Mi,{stateIncomeTaxRate:i,stateIncomeTaxAmount:o,totalStateTaxAmount:n,hasStateIncomeTax:l}),Object(oi.jsx)(Oi,{title:"Total Taxes",value:r,type:hi.DollarAmount,isSublist:!1}),Object(oi.jsx)(Oi,{title:"Net Annual Income",value:T,type:hi.DollarAmount,isSublist:!1})]})},Wi=function(a){var t=a.children,e=a.value,i=a.index;return Object(oi.jsx)("div",{hidden:e!==i,children:e===i&&Object(oi.jsx)(oi.Fragment,{children:t})})},Fi=function(a){var t=a.federal,e=t.federalIncomeTaxRate,i=t.federalIncomeTaxAmount,o=t.socialSecurityTaxRate,n=t.socialSecurityTaxAmount,l=t.medicareTaxRate,u=t.medicareTaxAmount,r=t.totalFederalTaxAmount,T=a.state,m=T.stateIncomeTaxRate,s=T.stateIncomeTaxAmount,c=T.totalStateTaxAmount,x=T.hasStateIncomeTax,h=a.grossAnnualIncome,d=a.totalTaxes,f=a.netAnnualIncome,y={federalIncomeTaxRate:e,federalIncomeTaxAmount:i/12,socialSecurityTaxRate:o,socialSecurityTaxAmount:n/12,medicareTaxRate:l,medicareTaxAmount:u/12,totalFederalTaxAmount:r/12};return Object(oi.jsxs)("div",{className:"panel-content",children:[Object(oi.jsx)(Oi,{title:"Gross Monthly Income",value:h/12,type:hi.DollarAmount,isSublist:!1}),Object(oi.jsx)(wi,{federalTaxData:y}),Object(oi.jsx)(Mi,{stateIncomeTaxRate:m,stateIncomeTaxAmount:s/12,totalStateTaxAmount:c/12,hasStateIncomeTax:x}),Object(oi.jsx)(Oi,{title:"Total Taxes",value:d/12,type:hi.DollarAmount,isSublist:!1}),Object(oi.jsx)(Oi,{title:"Net Monthly Income",value:f/12,type:hi.DollarAmount,isSublist:!1})]})},Pi=function(){var a=T(Je),t=a.federal,e=a.state,i=a.grossAnnualIncome,o=a.totalTaxes,l=a.netAnnualIncome,u=n.a.useState(0),r=Object(li.a)(u,2),m=r[0],s=r[1];return Object(oi.jsxs)("div",{id:"resultContainer","data-testid":"result-data",children:[Object(oi.jsx)("h1",{children:Object(oi.jsx)("u",{children:"Results"})}),Object(oi.jsx)(ji.a,{children:Object(oi.jsxs)(Ri.a,{value:m,onChange:function(a,t){s(t)},className:"tab","data-testid":"tab-menu",children:[Object(oi.jsx)(bi.a,{label:"Annual","data-testid":"annual-tab"}),Object(oi.jsx)(bi.a,{label:"Monthly","data-testid":"monthly-tab"})]})}),Object(oi.jsxs)("div",{id:"resultData",children:[Object(oi.jsx)(Wi,{index:0,value:m,children:Object(oi.jsx)(Hi,{federal:t,state:e,grossAnnualIncome:i,totalTaxes:o,netAnnualIncome:l})}),Object(oi.jsx)(Wi,{index:1,value:m,children:Object(oi.jsx)(Fi,{federal:t,state:e,grossAnnualIncome:i,totalTaxes:o,netAnnualIncome:l})})]})]})},Li=function(a){return""===a?0:parseFloat(a)},Gi=function(){var a=T(Je),t=Object(r.b)(),e=a.showContent;return Object(oi.jsxs)("div",{className:"App",children:[Object(oi.jsx)(yi,{submitInput:function(a){var e=a.grossAnnualIncome,i=a.selectedState,o=a.maritalStatus,n=a.hourly,l=function(a,t,e){var i=P(t,e),o=We(a,e,t),n=i.totalFederalTaxAmount+o.totalStateTaxAmount;return{federal:i,state:o,grossAnnualIncome:t,totalTaxes:n,netAnnualIncome:t-n}}(i,a.isHourly?function(a){var t=a.hourlyRate,e=a.averageHoursWorked,i=a.overtimeRate,o=a.averageOvertimeHoursWorked;return 52*(Li(i)*Li(o)+Li(t)*Li(e))}(n):parseInt(e,10),o);t(Ee(l)),t(ze(!0))}}),Object(oi.jsx)("br",{}),e?Object(oi.jsx)(Pi,{}):null]})},Ei=function(a){a&&e.e(3).then(e.bind(null,130)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,n=t.getLCP,l=t.getTTFB;e(a),i(a),o(a),n(a),l(a)}))},zi=e(23),Ji=Object(zi.b)({inputFormReducer:ei,resultDataReducer:Ue}),Ui=Object(Pe.a)({reducer:Ji});u.a.render(Object(oi.jsx)(n.a.StrictMode,{children:Object(oi.jsx)(r.a,{store:Ui,children:Object(oi.jsx)(Gi,{})})}),document.getElementById("root")),Ei()}},[[91,1,2]]]);
//# sourceMappingURL=main.f17ee039.chunk.js.map