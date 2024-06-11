import{c as k,t as h,v as V,x as e,y as r,L as i,M as B,d as T,N,r as u,O as U,G as f,i as b,z as p,P as v,B as S,Q as z,R as A,S as I}from"./CF0isSqs.js";const P={class:"car-card"},L=["src"],M={class:"car-card__title"},E={class:"car-card__vin"},F={class:"car-card__footer"},G={class:"car-card__count"},O={class:"car-card__date"},Q={__name:"CarCard",props:["card"],setup(x){const c=x,_=k(()=>{var t=new Date,s=Math.abs(t.getTime()-new Date(Date(c.card.created_at)).getTime()),g=Math.ceil(s/(1e3*3600*24));return g});return(t,s)=>(h(),V("div",P,[e("img",{src:c.card.preview,alt:"car image",class:"car-card__image"},null,8,L),e("h2",M,r(c.card.vehicle_name),1),e("p",E," WDB "+r(c.card.vin),1),e("div",F,[e("div",G,r(c.card.angles_count)+"/30",1),e("div",O,r(i(_))+" days left",1)])]))}},W=B("/plus-white.svg"),j={class:"vechicles"},q={class:"vechicles__page-header"},H={class:"vechicles__search"},J={class:"vechicles__pagination-size"},K=e("button",{class:"vechicles__add-button"},[e("img",{src:W,alt:"link icon"}),S(" Add Vechicle ")],-1),X={class:"vechicles__page-body"},Y={class:"vechicles__page-footer"},Z={class:"vechicles__pagination-info"},ee={class:"vechicles__pagination-setting"},te=T({__name:"index",async setup(x){let c,_;const t=N(),s=u(""),g=[9,12,15],a=u(1),n=u(9);[c,_]=U(()=>t.getSearchResponse({per_page:n.value,page:a.value,search:s.value})),await c,_();const d=u(t.searchResponse.meta.last_page),w=()=>{a.value<d.value&&(a.value+=1)},R=()=>{a.value>1&&(a.value-=1)};f(a,()=>{t.getSearchResponse({per_page:n.value,page:a.value,search:s.value})}),f(n,()=>{t.getSearchResponse({per_page:n.value,page:a.value,search:s.value})});let y;const C=()=>{clearTimeout(y),y=setTimeout(function(){t.getSearchResponse({per_page:n.value,page:a.value,search:s.value})},1e3)};return f(s,()=>{C()}),(ae,l)=>{const m=b("InputText"),D=b("Dropdown"),$=Q;return h(),V("div",j,[e("div",q,[e("div",H,[p(m,{type:"text",modelValue:i(s),"onUpdate:modelValue":l[0]||(l[0]=o=>v(s)?s.value=o:null),placeholder:"Search VIN"},null,8,["modelValue"]),e("div",J,[S(" Select vehicles per page: "),p(D,{modelValue:i(n),"onUpdate:modelValue":l[1]||(l[1]=o=>v(n)?n.value=o:null),options:g},null,8,["modelValue"])])]),K]),e("div",X,[(h(!0),V(z,null,A(i(t).searchResponse.data,o=>(h(),I($,{card:o,key:o.id},null,8,["card"]))),128))]),e("div",Y,[e("div",Z,"Showing "+r(i(a))+" out of "+r(i(t).searchResponse.meta.total),1),e("div",ee,[e("button",{class:"vechicles__pagination-button",onClick:R}," < "),p(m,{type:"number",modelValue:i(a),"onUpdate:modelValue":l[2]||(l[2]=o=>v(a)?a.value=o:null),class:"vechicles__pagination-input"},null,8,["modelValue"]),S(" of "),p(m,{type:"text",modelValue:i(d),"onUpdate:modelValue":l[3]||(l[3]=o=>v(d)?d.value=o:null),disabled:"",class:"vechicles__pagination-input"},null,8,["modelValue"]),e("button",{class:"vechicles__pagination-button",onClick:w}," > ")])])])}}});export{te as default};
