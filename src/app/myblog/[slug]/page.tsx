import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
const Editor = dynamic(() => import("../../../components/Texteditor/Textfix"), { ssr: false });


export default async function page() {


   return (
    <>
      <div className="overflow-y-scroll">
        <Editor/>
      </div>
    </>
  )
}
