'use client'
import connectDB from "@/lib/connectToDb";
import { Post } from "@/lib/model";
import {BlockNoteEditor } from "@blocknote/core";
import { useBlockNote,BlockNoteView } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useParams } from "next/navigation";

export default function TextUpdate() {

    const params = useParams()

  // Creates a new editor instance.
  let editor: BlockNoteEditor = useBlockNote({
    // Makes the editor non-editable.
    onEditorReady(editor) {
      const setdata =async () => {
        // try{
        //   const data = await JSON.parse(blog.blog.content)
        //   editor.replaceBlocks(editor.topLevelBlocks,data)
        //   console.log(blog.blog)
        // }catch(error){
        //   console.log(error)
        // }
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