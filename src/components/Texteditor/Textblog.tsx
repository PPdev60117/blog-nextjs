'use client'
import { useState,useEffect } from "react";
import { Block,BlockNoteEditor } from "@blocknote/core";
import { useBlockNote,BlockNoteView } from "@blocknote/react";
import "@blocknote/react/style.css";

export default function Textblog(blog:any) {
  // Creates a new editor instance.
  let editor: BlockNoteEditor = useBlockNote({
    // Makes the editor non-editable.
    editable:false,
    onEditorReady(editor) {
      const setdata =async () => {
        try{
          const data = await JSON.parse(blog.blog)
          editor.replaceBlocks(editor.topLevelBlocks,data)
        }catch(error){
          console.log(error)
        }
      }  
      setdata()
    },
  })



  // Renders a text area for you to write/paste HTML in, and the editor instance
  // below, which displays the current HTML as blocks.
  return (
    <div className="">
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
}
