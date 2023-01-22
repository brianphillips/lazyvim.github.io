"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),s=t(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),s=t(7294),l=t(6010),r=t(2389),i=t(7392),o=t(7094),p=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:n,block:t,defaultValue:r,values:c,groupId:d,className:f}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(g,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,o.U)(),[_,T]=(0,s.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==_&&g.some((n=>n.value===e))&&T(e)}const w=e=>{const n=e.currentTarget,t=N.indexOf(n),a=g[t].value;a!==_&&(x(n),T(a),null!=d&&k(d,String(a)))},S=e=>{let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},f)},g.map((e=>{let{value:n,label:t,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>N.push(e),onKeyDown:S,onClick:w},r,{className:(0,l.Z)("tabs__item",m,r?.className,{"tabs__item--active":_===n})}),t??n)}))),n?(0,s.cloneElement)(v.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function d(e){const n=(0,r.Z)();return s.createElement(c,(0,a.Z)({key:String(n)},e))}},965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(7462),s=(t(7294),t(3905)),l=t(5488),r=t(5162);const i={},o="LSP",p={unversionedId:"plugins/lsp",id:"plugins/lsp",title:"LSP",description:"\u2328\ufe0f Customizing LSP Keymaps",source:"@site/docs/plugins/lsp.md",sourceDirName:"plugins",slug:"/plugins/lsp",permalink:"/plugins/lsp",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/lsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mini Starter",permalink:"/plugins/extras/ui.mini-starter"},next:{title:"TreeSitter",permalink:"/plugins/treesitter"}},u={},m=[{value:"\u2328\ufe0f Customizing LSP Keymaps",id:"\ufe0f-customizing-lsp-keymaps",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"neoconf.nvim",id:"neoconfnvim",level:2},{value:"neodev.nvim",id:"neodevnvim",level:2},{value:"mason-lspconfig.nvim",id:"mason-lspconfignvim",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"null-ls.nvim",id:"null-lsnvim",level:2},{value:"mason.nvim",id:"masonnvim",level:2}],c={toc:m};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp"},"LSP"),(0,s.kt)("h2",{id:"\ufe0f-customizing-lsp-keymaps"},"\u2328\ufe0f Customizing ",(0,s.kt)("a",{parentName:"h2",href:"/keymaps#lsp"},"LSP Keymaps")),(0,s.kt)("p",null,"The syntax for adding, deleting and changing ",(0,s.kt)("a",{parentName:"p",href:"/keymaps#lsp"},"LSP Keymaps"),",\nis the same as for ",(0,s.kt)("a",{parentName:"p",href:"/configuration/plugins#%EF%B8%8F-adding--disabling-plugin-keymaps"},"plugin keymaps"),",\nbut you need to configure it using the ",(0,s.kt)("inlineCode",{parentName:"p"},"init()")," method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- LSP keymaps\n{\n  "neovim/nvim-lspconfig",\n  init = function()\n    local keys = require("lazyvim.plugins.lsp.keymaps").get()\n    -- change a keymap\n    keys[#keys + 1] = { "K", "<cmd>echo \'hello\'<cr>" }\n    -- disable a keymap\n    keys[#keys + 1] = { "K", false }\n    -- add a keymap\n    keys[#keys + 1] = { "H", "<cmd>echo \'hello\'<cr>" }\n  end,\n}\n')),(0,s.kt)("h2",{id:"nvim-lspconfig"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,s.kt)("p",null,"lspconfig"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- options for vim.diagnostic.config()\n  diagnostics = {\n    underline = true,\n    update_in_insert = false,\n    virtual_text = { spacing = 4, prefix = "\u25cf" },\n    severity_sort = true,\n  },\n  -- Automatically format on save\n  autoformat = true,\n  -- options for vim.lsp.buf.format\n  -- `bufnr` and `filter` is handled by the LazyVim formatter,\n  -- but can be also overriden when specified\n  format = {\n    formatting_options = nil,\n    timeout_ms = nil,\n  },\n  -- LSP Server Settings\n  ---@type lspconfig.options\n  servers = {\n    jsonls = {},\n    sumneko_lua = {\n      -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n      settings = {\n        Lua = {\n          workspace = {\n            checkThirdParty = false,\n          },\n          completion = {\n            callSnippet = "Replace",\n          },\n        },\n      },\n    },\n  },\n  -- you can do any additional lsp server setup here\n  -- return true if you don\'t want this server to be setup with lspconfig\n  ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n  setup = {\n    -- example to setup with typescript.nvim\n    -- tsserver = function(_, opts)\n    --   require("typescript").setup({ server = opts })\n    --   return true\n    -- end,\n    -- Specify * to use this function as a fallback for any server\n    -- ["*"] = function(server, opts) end,\n  },\n}\n'))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  event = "BufReadPre",\n  dependencies = {\n    { "folke/neoconf.nvim", cmd = "Neoconf", config = true },\n    { "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } },\n    "mason.nvim",\n    "williamboman/mason-lspconfig.nvim",\n    "hrsh7th/cmp-nvim-lsp",\n  },\n  ---@class PluginLspOpts\n  opts = {\n    -- options for vim.diagnostic.config()\n    diagnostics = {\n      underline = true,\n      update_in_insert = false,\n      virtual_text = { spacing = 4, prefix = "\u25cf" },\n      severity_sort = true,\n    },\n    -- Automatically format on save\n    autoformat = true,\n    -- options for vim.lsp.buf.format\n    -- `bufnr` and `filter` is handled by the LazyVim formatter,\n    -- but can be also overriden when specified\n    format = {\n      formatting_options = nil,\n      timeout_ms = nil,\n    },\n    -- LSP Server Settings\n    ---@type lspconfig.options\n    servers = {\n      jsonls = {},\n      sumneko_lua = {\n        -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n        settings = {\n          Lua = {\n            workspace = {\n              checkThirdParty = false,\n            },\n            completion = {\n              callSnippet = "Replace",\n            },\n          },\n        },\n      },\n    },\n    -- you can do any additional lsp server setup here\n    -- return true if you don\'t want this server to be setup with lspconfig\n    ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n    setup = {\n      -- example to setup with typescript.nvim\n      -- tsserver = function(_, opts)\n      --   require("typescript").setup({ server = opts })\n      --   return true\n      -- end,\n      -- Specify * to use this function as a fallback for any server\n      -- ["*"] = function(server, opts) end,\n    },\n  },\n  ---@param opts PluginLspOpts\n  config = function(plugin, opts)\n    if plugin.servers then\n      require("lazyvim.util").deprecate("lspconfig.servers", "lspconfig.opts.servers")\n    end\n    if plugin.setup_server then\n      require("lazyvim.util").deprecate("lspconfig.setup_server", "lspconfig.opts.setup[SERVER]")\n    end\n\n    -- setup autoformat\n    require("lazyvim.plugins.lsp.format").autoformat = opts.autoformat\n    -- setup formatting and keymaps\n    require("lazyvim.util").on_attach(function(client, buffer)\n      require("lazyvim.plugins.lsp.format").on_attach(client, buffer)\n      require("lazyvim.plugins.lsp.keymaps").on_attach(client, buffer)\n    end)\n\n    -- diagnostics\n    for name, icon in pairs(require("lazyvim.config").icons.diagnostics) do\n      name = "DiagnosticSign" .. name\n      vim.fn.sign_define(name, { text = icon, texthl = name, numhl = "" })\n    end\n    vim.diagnostic.config(opts.diagnostics)\n\n    local servers = opts.servers\n    local capabilities = require("cmp_nvim_lsp").default_capabilities(vim.lsp.protocol.make_client_capabilities())\n\n    local function setup(server)\n      local server_opts = servers[server] or {}\n      server_opts.capabilities = capabilities\n      if opts.setup[server] then\n        if opts.setup[server](server, server_opts) then\n          return\n        end\n      elseif opts.setup["*"] then\n        if opts.setup["*"](server, server_opts) then\n          return\n        end\n      end\n      require("lspconfig")[server].setup(server_opts)\n    end\n\n    local mlsp = require("mason-lspconfig")\n    local available = mlsp.get_available_servers()\n\n    local ensure_installed = {} ---@type string[]\n    for server, server_opts in pairs(servers) do\n      if server_opts then\n        server_opts = server_opts == true and {} or server_opts\n        -- run manual setup if mason=false or if this is a server that cannot be installed with mason-lspconfig\n        if server_opts.mason == false or not vim.tbl_contains(available, server) then\n          setup(server)\n        else\n          ensure_installed[#ensure_installed + 1] = server\n        end\n      end\n    end\n\n    require("mason-lspconfig").setup({ ensure_installed = ensure_installed })\n    require("mason-lspconfig").setup_handlers({ setup })\n  end,\n}\n')))),(0,s.kt)("h2",{id:"neoconfnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/folke/neoconf.nvim"},"neoconf.nvim")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neoconf.nvim", cmd = "Neoconf", config = true }\n')))),(0,s.kt)("h2",{id:"neodevnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/folke/neodev.nvim"},"neodev.nvim")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { experimental = { pathStrict = true } }\n"))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } }\n')))),(0,s.kt)("h2",{id:"mason-lspconfignvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig.nvim")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'"williamboman/mason-lspconfig.nvim"\n')))),(0,s.kt)("h2",{id:"cmp-nvim-lsp"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-nvim-lsp"\n')))),(0,s.kt)("h2",{id:"null-lsnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"null-ls.nvim")),(0,s.kt)("p",null,"formatters"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local nls = require("null-ls")\n  return {\n    sources = {\n      -- nls.builtins.formatting.prettierd,\n      nls.builtins.formatting.stylua,\n      nls.builtins.diagnostics.flake8,\n    },\n  }\nend\n'))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "jose-elias-alvarez/null-ls.nvim",\n  event = "BufReadPre",\n  dependencies = { "mason.nvim" },\n  opts = function()\n    local nls = require("null-ls")\n    return {\n      sources = {\n        -- nls.builtins.formatting.prettierd,\n        nls.builtins.formatting.stylua,\n        nls.builtins.diagnostics.flake8,\n      },\n    }\n  end,\n}\n')))),(0,s.kt)("h2",{id:"masonnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,s.kt)("p",null,"cmdline tools and lsp servers"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ensure_installed = {\n    "stylua",\n    "shellcheck",\n    "shfmt",\n    "flake8",\n  },\n}\n'))),(0,s.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n\n  "williamboman/mason.nvim",\n  cmd = "Mason",\n  keys = { { "<leader>cm", "<cmd>Mason<cr>", desc = "Mason" } },\n  opts = {\n    ensure_installed = {\n      "stylua",\n      "shellcheck",\n      "shfmt",\n      "flake8",\n    },\n  },\n  ---@param opts MasonSettings | {ensure_installed: string[]}\n  config = function(plugin, opts)\n    if plugin.ensure_installed then\n      require("lazyvim.util").deprecate("treesitter.ensure_installed", "treesitter.opts.ensure_installed")\n    end\n    require("mason").setup(opts)\n    local mr = require("mason-registry")\n    for _, tool in ipairs(opts.ensure_installed) do\n      local p = mr.get_package(tool)\n      if not p:is_installed() then\n        p:install()\n      end\n    end\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);