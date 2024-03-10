import Image from "next/image"
import Author from "./Author"
import Link from "next/link"


export default function Card(data:any):JSX.Element {

  return (
    <>
    <Link href={`/blog/${data?.data?.header}`}>
    <div>
        <div className="w-full h-64 rounded-md hover:cursor-pointer">
            <Image className="w-full h-full object-cover rounded-md" width={600} height={600} alt="" src={'https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        </div>
        <div>
            <div className="mt-3">
                <span className=" font-semibold">{data?.data?.type[0]?.name}</span>
            </div>
            <div className="mt-2 overflow-hidden">
                <h1 className="text-3xl font-semibold mb-2">{data?.data?.header}</h1>
                <p className="w-full  text-md text-[#3939397a]">{data?.data?.describe}</p>
            </div>
        </div>
        <Author author={data?.data?.author} createdAt={data?.data?.createdAt}/>
    </div>
    </Link>
    </>
  )
}
