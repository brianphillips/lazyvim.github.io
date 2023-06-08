# edgy.nvim

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.ui.edgy" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [edgy.nvim](https://github.com/folke/edgy.nvim)

 edgy


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  bottom = {
    {
      ft = "toggleterm",
      size = { height = 0.4 },
      filter = function(buf, win)
        return vim.api.nvim_win_get_config(win).relative == ""
      end,
    },
    {
      ft = "noice",
      -- size = { height = 0.4 },
      filter = function(buf, win)
        return vim.api.nvim_win_get_config(win).relative == ""
      end,
    },
    {
      ft = "lazyterm",
      title = "LazyTerm",
      size = { height = 0.4 },
      filter = function(buf)
        return not vim.b[buf].lazyterm_cmd
      end,
    },
    "Trouble",
    { ft = "qf", title = "QuickFix" },
    {
      ft = "help",
      size = { height = 20 },
      -- don't open help files in edgy that we're editing
      filter = function(buf)
        return vim.bo[buf].buftype == "help"
      end,
    },
    { ft = "spectre_panel", size = { height = 0.4 } },
  },
  left = {
    {
      title = "Neo-Tree",
      ft = "neo-tree",
      filter = function(buf)
        return vim.b[buf].neo_tree_source == "filesystem"
      end,
      size = { height = 0.5 },
    },
    {
      title = "Neo-Tree Git",
      ft = "neo-tree",
      filter = function(buf)
        return vim.b[buf].neo_tree_source == "git_status"
      end,
      pinned = true,
      open = "Neotree position=right git_status",
    },
    {
      title = "Neo-Tree Buffers",
      ft = "neo-tree",
      filter = function(buf)
        return vim.b[buf].neo_tree_source == "buffers"
      end,
      pinned = true,
      open = "Neotree position=top buffers",
    },
    {
      ft = "Outline",
      pinned = true,
      open = "SymbolsOutline",
    },
    "neo-tree",
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  event = "VeryLazy",
  keys = {
    -- stylua: ignore
    { "<leader>ue", function() require("edgy").select() end, desc = "Edgy Select Window" },
  },
  opts = {
    bottom = {
      {
        ft = "toggleterm",
        size = { height = 0.4 },
        filter = function(buf, win)
          return vim.api.nvim_win_get_config(win).relative == ""
        end,
      },
      {
        ft = "noice",
        -- size = { height = 0.4 },
        filter = function(buf, win)
          return vim.api.nvim_win_get_config(win).relative == ""
        end,
      },
      {
        ft = "lazyterm",
        title = "LazyTerm",
        size = { height = 0.4 },
        filter = function(buf)
          return not vim.b[buf].lazyterm_cmd
        end,
      },
      "Trouble",
      { ft = "qf", title = "QuickFix" },
      {
        ft = "help",
        size = { height = 20 },
        -- don't open help files in edgy that we're editing
        filter = function(buf)
          return vim.bo[buf].buftype == "help"
        end,
      },
      { ft = "spectre_panel", size = { height = 0.4 } },
    },
    left = {
      {
        title = "Neo-Tree",
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source == "filesystem"
        end,
        size = { height = 0.5 },
      },
      {
        title = "Neo-Tree Git",
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source == "git_status"
        end,
        pinned = true,
        open = "Neotree position=right git_status",
      },
      {
        title = "Neo-Tree Buffers",
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source == "buffers"
        end,
        pinned = true,
        open = "Neotree position=top buffers",
      },
      {
        ft = "Outline",
        pinned = true,
        open = "SymbolsOutline",
      },
      "neo-tree",
    },
  },
}
```

</TabItem>

</Tabs>

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)

 prevent neo-tree from opening files in edgy windows


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types
    or { "terminal", "Trouble", "qf", "Outline" }
  table.insert(opts.open_files_do_not_replace_types, "edgy")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neo-tree/neo-tree.nvim",
  optional = true,
  opts = function(_, opts)
    opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types
      or { "terminal", "Trouble", "qf", "Outline" }
    table.insert(opts.open_files_do_not_replace_types, "edgy")
  end,
}
```

</TabItem>

</Tabs>

## [bufferline.nvim](https://github.com/akinsho/bufferline.nvim)

 Fix bufferline offsets when edgy is loaded


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local Offset = require("bufferline.offset")
  if not Offset.edgy then
    local get = Offset.get
    Offset.get = function()
      if package.loaded.edgy then
        local layout = require("edgy.config").layout
        local ret = { left = "", left_size = 0, right = "", right_size = 0 }
        for _, pos in ipairs({ "left", "right" }) do
          local sb = layout[pos]
          if sb and #sb.wins > 0 then
            local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)
            ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#│%*"
            ret[pos .. "_size"] = sb.bounds.width
          end
        end
        ret.total_size = ret.left_size + ret.right_size
        if ret.total_size > 0 then
          return ret
        end
      end
      return get()
    end
    Offset.edgy = true
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "akinsho/bufferline.nvim",
  optional = true,
  opts = function()
    local Offset = require("bufferline.offset")
    if not Offset.edgy then
      local get = Offset.get
      Offset.get = function()
        if package.loaded.edgy then
          local layout = require("edgy.config").layout
          local ret = { left = "", left_size = 0, right = "", right_size = 0 }
          for _, pos in ipairs({ "left", "right" }) do
            local sb = layout[pos]
            if sb and #sb.wins > 0 then
              local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)
              ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#│%*"
              ret[pos .. "_size"] = sb.bounds.width
            end
          end
          ret.total_size = ret.left_size + ret.right_size
          if ret.total_size > 0 then
            return ret
          end
        end
        return get()
      end
      Offset.edgy = true
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->