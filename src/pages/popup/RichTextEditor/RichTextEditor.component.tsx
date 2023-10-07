import React from "react";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import "@pages/popup/RichTextEditor/RichTextEditor.css";
import { usePluginViewFactory } from "@prosemirror-adapter/react";

import { tooltip, TooltipView } from "./Tooltip.component";

export const RichTextEditor: React.FC = () => {
  const pluginViewFactory = usePluginViewFactory();

  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);

        ctx.set(tooltip.key, {
          view: pluginViewFactory({
            component: TooltipView,
          }),
        });

        ctx.set(defaultValueCtx, "Enter your text here...");
      })
      .use(commonmark)
      .use(tooltip)
  );

  return <Milkdown />;
};
