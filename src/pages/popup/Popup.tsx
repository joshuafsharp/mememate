import React, { useEffect, useRef } from "react";
import "@pages/popup/Popup.css";

import { BookmarkIcon, CloudIcon } from "@heroicons/react/24/outline";

import withSuspense from "@src/shared/hoc/withSuspense";
import { RichTextEditor } from "./RichTextEditor";

function Popup() {
  // const save = () => {
  //   // Save the contents of the WYSIWYG editor to a file
  //   const content = editorRef.current.getContent();
  //   // ...
  // };

  // const upload = () => {
  //   // Upload the contents of the WYSIWYG editor to a server
  //   const content = editorRef.current.getContent();
  //   // ...
  // };

  // const handleImageClick = (event) => {
  //   // Create a new text box at the clicked location
  //   // ...
  // };

  const onEditorStateChange = (editorState) => {
    // Update the state with the new editor value
    // ...
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://source.unsplash.com/random)`,
        width: "100%",
        height: "22rem",
      }}
      className="App"
      // onClick={handleImageClick}
    >
      <div className="flex justify-between fixed bottom-0 h-12 inset-x-0 divide-x">
        <button className="flex items-center justify-center w-1/2 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
          <BookmarkIcon className="h-5 w-5 mr-2" />
          Save
        </button>

        <button className="flex items-center justify-center w-1/2 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
          <CloudIcon className="h-5 w-5 mr-2" />
          Upload
        </button>
      </div>

      <RichTextEditor />
    </div>
  );
}

export default withSuspense(Popup);
