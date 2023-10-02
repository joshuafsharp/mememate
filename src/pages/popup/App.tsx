import React from "react";
import { MilkdownProvider } from "@milkdown/react";
import Popup from "./Popup";

export function App() {
  return (
    <MilkdownProvider>
      <Popup />
    </MilkdownProvider>
  );
}
