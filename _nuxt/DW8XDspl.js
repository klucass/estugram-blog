import{a as i,u as c,C as m,P,s as h,D as v,E as b,c as L,b as k,G as r,H as g,I as S,J as l,K as R,L as T,S as j,T as O,M as _,N as x,O as d}from"./DkGNbQKl.js";const A=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),H=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=c(),a=m(P),n=a===h()?v():a,u=b(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=d(e.fallback)),s}),y=L();o.expose({layoutRef:y});const p=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",p);k().beforeEach(s)}return()=>{const s=u.value&&u.value in r,f=n.meta.layoutTransition??g;return S(O,s&&f,{default:()=>l(j,{suspensible:!0,onResolve:()=>{T(p)}},{default:()=>l(B,{layoutProps:R(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!f},o.slots)})}).default()}}}),B=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&_(x,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(A,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{H as _};