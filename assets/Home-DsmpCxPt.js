import{r as i,A as c,a as p,j as t,B as x,T as e,b as d,L as l}from"./index-DpNrWbZp.js";import{C as n}from"./Container-C8A8Y2Dq.js";import{S as m}from"./Stack-DAyZ95M_.js";function h(){return t.jsxs(e,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright © The Movies DB ",new Date().getFullYear()]})}function j(){const o=i.useContext(c),a=o.user!==p,r="Explore movies today with us!";return t.jsxs(x,{sx:{bgcolor:"background.paper",pt:8,pb:8},children:[t.jsxs(n,{maxWidth:"sm",children:[t.jsx(e,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Welcome"}),t.jsx(e,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:a?`${o.user.name}, ${r.toLowerCase()}`:r}),t.jsx(m,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:t.jsx(d,{component:l,to:"/movies",variant:"contained",color:"secondary",children:"Explore"})})]}),t.jsx(n,{maxWidth:"md",component:"footer",sx:{borderTop:s=>`1px solid ${s.palette.divider}`,mt:8,py:[3,6]},children:t.jsx(h,{})})]})}export{j as default};