import{d as u,aV as n,a_ as i,b8 as o}from"./DV7eKLeG.js";import{u as d}from"./QA-ib-BQ.js";import"./Cp7Md9uy.js";const h=u({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchReleases:t}=d(),{data:r,refresh:e,pending:s}=await n(`github-releases-${i(a.query)}`,()=>t(a.query));return{releases:r,refresh:e,pending:s}},render({releases:a,refresh:t,pending:r}){var s;const e=o();return(s=e==null?void 0:e.default)==null?void 0:s.call(e,{releases:a,refresh:t,pending:r})}});export{h as default};