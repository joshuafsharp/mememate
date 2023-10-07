import React from "react";
import { MilkdownProvider } from "@milkdown/react";
import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/react";
import Popup from "./Popup";

export function App() {
  return (
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <Popup />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  );
}
