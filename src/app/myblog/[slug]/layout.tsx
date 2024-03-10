import { getallmyblog } from "@/app/action"
import Contentlist from "@/components/myblog/Contentlist"
import Link from "next/link"

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const allblog = await getallmyblog()
  
    return (
        <>
        <div className='grid grid-cols-[350px_minmax(900px,_1fr)] overflow-hidden border-t-2 w-full h-[calc(100vh-57.6px)]'>
          <div className='border-r-2'>
            <ul className="w-full px-10 overflow-y-auto flex flex-col gap-y-3 h-[calc(100vh-57.6px)] mt-5">
              {allblog?.map((data:any)=>{
                return <Contentlist header={data.header as string} id={data.id} name={data.author.name}/>
              })}
            </ul>
          </div> 
          <div className="overflow-y-auto"> 
            {children}
          </div>
        </div>
          
        </>   
    )
  }