import{aa as R,l as k,W as h,V as p,ab as T,Q as F,ac as B,r as d,U as D,h as G,j as M,m as $,ad as E,z as N,H as U,ae as v,G as O,g as _}from"./index-DpNrWbZp.js";import{s as A}from"./Container-C8A8Y2Dq.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],W=R(),z=A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function H(e){return E({props:e,name:"MuiStack",defaultTheme:W})}function I(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const Q=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],q=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},h({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=T(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=F(n,h({theme:s},m,(o,r)=>e.useFlexGap?{gap:v(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Q(r?t[r]:e.direction)}`]:v(a,o)}}))}return n=B(s.breakpoints,n),n};function J(e={}){const{createStyledComponent:s=z,useThemeProps:n=H,componentName:a="MuiStack"}=e,c=()=>N({root:["root"]},o=>U(a,o),{}),t=s(q);return d.forwardRef(function(o,r){const i=n(o),l=D(i),{component:u="div",direction:x="column",spacing:j=0,divider:y,children:g,className:P,useFlexGap:S=!1}=l,C=G(l,L),V={direction:x,spacing:j,useFlexGap:S},b=c();return M.jsx(t,k({as:u,ownerState:V,ref:r,className:$(b.root,P)},C,{children:y?I(g,y):g}))})}const K=J({createStyledComponent:O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>_({props:e,name:"MuiStack"})}),Z=K;export{Z as S};
