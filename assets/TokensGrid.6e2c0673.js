var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{a as s,j as e}from"./jsx-runtime.42412e94.js";function t({tokens:n,hasRemValue:r=!1}){return s("table",{className:"tokens-grid",children:[s("thead",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),r&&e("th",{children:"Pixels"})]}),e("tbody",{children:Object.entries(n).map(([d,i])=>s("tr",{children:[e("td",{children:d}),e("td",{children:i}),r&&s("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/pages/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/pages/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.6e2c0673.js.map
