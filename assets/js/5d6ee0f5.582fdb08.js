"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[611],{9600:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(6687);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),g=i,y=m["".concat(p,".").concat(g)]||m[g]||c[g]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7375),i=(r(6687),r(9600));const a={},l="Extras",o={unversionedId:"plugins/extras",id:"plugins/extras",title:"Extras",description:"lang.json",source:"@site/docs/plugins/extras.md",sourceDirName:"plugins",slug:"/plugins/extras",permalink:"/plugins/extras",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Plugins",permalink:"/plugins/"}},p={},s=[{value:"<code>lang.json</code>",id:"langjson",level:2},{value:"<code>lang.typescript</code>",id:"langtypescript",level:2},{value:"<code>ui.mini-starter</code>",id:"uimini-starter",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extras"},"Extras"),(0,i.kt)("h2",{id:"langjson"},(0,i.kt)("code",null,"lang.json")),(0,i.kt)("p",null,"To use this, add it to your ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'require("lazy").setup({\n  spec = {\n    { "folke/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.json" },\n    { import = "plugins" },\n  },\n})\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/b0o/SchemaStore.nvim"},"SchemaStore.nvim"))),(0,i.kt)("h2",{id:"langtypescript"},(0,i.kt)("code",null,"lang.typescript")),(0,i.kt)("p",null,"To use this, add it to your ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'require("lazy").setup({\n  spec = {\n    { "folke/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.typescript" },\n    { import = "plugins" },\n  },\n})\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim"))),(0,i.kt)("h2",{id:"uimini-starter"},(0,i.kt)("code",null,"ui.mini-starter")),(0,i.kt)("p",null,"To use this, add it to your ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'require("lazy").setup({\n  spec = {\n    { "folke/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ui.mini-starter" },\n    { import = "plugins" },\n  },\n})\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.starter"},"mini.starter"))))}m.isMDXComponent=!0}}]);