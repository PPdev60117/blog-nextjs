'use client'
import WrapMaxWidth from "@/components/WrapMaxWidth/WrapMaxWidth";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";
import { updateContent } from "../../../action";
import { Button } from "@/components/ui/button";
import { useParams } from 'next/navigation'

export default function page() {

  const params = useParams<{ slug: string,blog:string}>()
  const [alldata,setData] = useState({
    header:'',
    describe:''
  })
  const [content,setContent] = useState<any>(null)
  const updateContentWithdata = updateContent.bind(null,{content:JSON.stringify(content),params:params.blog})
  const editor: BlockNoteEditor = useBlockNote({
    // Listens for when the editor's contents change.
    onEditorReady: (editor) =>{
      const getData = async () => {
        const json = await fetch(`http://localhost:3000/api/blog/${params.blog}`)
        const data = await json.json()
        setData({header:data.post.header,describe:data.post.describe})
        const content = await JSON.parse(data.post.content)
        editor.replaceBlocks(editor.topLevelBlocks,content)
      }
      getData()
    },
    onEditorContentChange: (editor) => {
      // Converts the editor's contents from Block objects to HTML and saves
      // them.
      const saveBlocksAsHTML = async () => {
        setContent(editor.topLevelBlocks)
      };
      saveBlocksAsHTML();
  }})

  
  return (
    <>
    <WrapMaxWidth className="">
      <form action={updateContentWithdata}>
        <div>
        <input type="text"
          value={alldata.header}
          onChange={(e:any)=>setData({...alldata,header:e.target.value})}
          className="text-7xl font-semibold w-full my-5 outline-0" placeholder="Please fill your header" name="header"/>   
        <input type="text" 
          value={alldata.describe}
          onChange={(e:any)=>setData({...alldata,describe:e.target.value})}
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
