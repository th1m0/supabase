import{d as s,aV as n,a_ as i,b8 as f}from"./DV7eKLeG.js";import{u as d}from"./QA-ib-BQ.js";import"./Cp7Md9uy.js";const y=s({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchRelease:r}=d();if(!a.query.tag)return;const{data:u,refresh:e,pending:t}=await n(`github-release-${i(a.query)}`,()=>r(a.query));return{release:u,refresh:e,pending:t}},render({release:a,refresh:r,pending:u}){var t;const e=f();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{release:a,refresh:r,pending:u})}});export{y as default};