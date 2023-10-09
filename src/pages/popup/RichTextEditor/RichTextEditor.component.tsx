import React from "react";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/react";
import {
  commonmark,
  headingAttr,
  paragraphAttr,
} from "@milkdown/preset-commonmark";
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

        // Add attributes to nodes and marks
        ctx.set(headingAttr.key, (node) => {
          const level = node.attrs.level;

          switch (level) {
            case 1: {
              return { class: "text-4xl", "data-el-type": "h1" };
            }
            case 2: {
              return { class: "text-3xl", "data-el-type": "h2" };
            }
            case 3: {
              return { class: "text-2xl", "data-el-type": "h3" };
            }
            case 4: {
              return { class: "text-xl", "data-el-type": "h4" };
            }
            case 5: {
              return { class: "text-lg", "data-el-type": "h5" };
            }
            case 6: {
              return { class: "text-base", "data-el-type": "h6" };
            }
            default: {
              return { class: "text-base", "data-el-type": "h6" };
            }
          }
        });

        ctx.set(paragraphAttr.key, () => ({ class: "text-lg" }));
      })
      .use(commonmark)
      .use(tooltip)
  );

  return <Milkdown />;
};
