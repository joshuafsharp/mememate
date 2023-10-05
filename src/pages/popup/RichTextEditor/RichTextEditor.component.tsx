import React from "react";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import "@pages/popup/RichTextEditor/RichTextEditor.css";

export const RichTextEditor: React.FC = () => {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, "Enter your text here...");
      })
      .use(commonmark)
  );

  return <Milkdown />;
};
