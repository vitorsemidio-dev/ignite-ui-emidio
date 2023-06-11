import{d as v,B as y,e as i,T as e,f as s,A as C}from"./index.47baf22c.js";import{j as o,a as l,F as a}from"./index.1e9d1671.js";import"./extends.819b8d5d.js";import"./index.71f4bfc6.js";import"./_commonjsHelpers.b8add541.js";const V={title:"Overlay/Tooltip",component:v,args:{},argTypes:{children:{control:{type:null}},open:{control:{type:null}}},decorators:[E=>o(y,{css:{display:"flex",flexDirection:"column",gap:"$2",height:"50vh",justifyContent:"center",alignItems:"center"},children:E()})]},t={args:{children:l(a,{children:[o(i,{children:o(e,{children:"Lorem ipsum dolor."})}),o(s,{children:o(e,{children:"Eu sou Tooltip content"})})]})}},r={args:{children:l(a,{children:[o(i,{children:o(e,{children:"Eu sou tooltip trigger"})}),o(s,{children:o(e,{children:"Eu sou Tooltip content"})})]}),open:!0}},n={args:{children:l(a,{children:[o(i,{children:o(e,{children:"Vitor Em\xEDdio"})}),o(s,{children:o(C,{src:"https://github.com/vitorsemidio-dev.png",alt:"Vitor Emidio"})})]}),open:!0},argTypes:{children:{control:{type:null}}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <TooltipTrigger>
          <Text>Lorem ipsum dolor.</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Text>Eu sou Tooltip content</Text>
        </TooltipContent>
      </>
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var T,g,u;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <>
        <TooltipTrigger>
          <Text>Eu sou tooltip trigger</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Text>Eu sou Tooltip content</Text>
        </TooltipContent>
      </>,
    open: true
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <TooltipTrigger>
          <Text>Vitor Em\xEDdio</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Avatar src="https://github.com/vitorsemidio-dev.png" alt="Vitor Emidio" />
        </TooltipContent>
      </>,
    open: true
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const D=["Base","TooltipOpen","WithAvatar"];export{t as Base,r as TooltipOpen,n as WithAvatar,D as __namedExportsOrder,V as default};
//# sourceMappingURL=Tooltip.stories.5fc0b365.js.map
