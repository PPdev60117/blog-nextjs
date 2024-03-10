'use client'
import WrapMaxWidth from "@/components/WrapMaxWidth/WrapMaxWidth";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useState } from "react";
import { createContent } from "../../action";
import { Button } from "@/components/ui/button";
import { useParams } from 'next/navigation'

export default function page() {

  const params = useParams<{ slug: string}>()
  const [data,setData] = useState<any>(null)
  const createContentWithdata = createContent.bind(null,{content:JSON.stringify(data),params:params.slug})
  const editor: BlockNoteEditor = useBlockNote({
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) => {
      // Converts the editor's contents from Block objects to HTML and saves
      // them.
      const saveBlocksAsHTML = async () => {
        setData(editor.topLevelBlocks)
      };
      saveBlocksAsHTML();
  }})

  
  return (
    <>
    <WrapMaxWidth className="">
      <form action={createContentWithdata}>
        <div>
        <input type="text"
          className="text-7xl font-semibold w-full my-5 outline-0" placeholder="Please fill your header" name="header"/>   
        <input type="text" 
          className="text-4xl font-semibold w-full my-5 text-[#343434b1] outline-0" placeholder="please fill your description" name="describe"/> 
        </div>
        <div>
          <BlockNoteView editor={editor} />
        </div>
        <Button>Submit</Button>
      </form>
    </WrapMaxWidth>
    </>
  )
}
