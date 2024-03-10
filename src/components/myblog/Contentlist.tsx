import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image"
import { deleteContent } from "@/app/action";
import Link from "next/link";


const image = true

export default function Contentlist(props:{header:string,id:string,name:string}) {
  return (
    <li className="flex justify-between z-50 relative">
        <Link href={`/myblog/${props.name}/${props.header}`} className="flex">
          <div className="rounded-lg flex">
              {!image ? <Image width={600} height={600} alt="" src={""}
              className="w-10 h-10 object-cover"/>
              : <div className="w-7 h-7 m-auto rounded-lg bg-[#24242433]"></div>}
          </div>
          <h1 className="text-lg font-medium text-[#303030b1] hover:text-[#000000] px-2">
              {props.header}
          </h1>
        </Link>
        <form action={deleteContent} className="flex my-auto ">
          <input type="text" value={props.id} className="hidden" name="id"/>
          <button><FaRegTrashCan className="text-lg text-[#303030b1] hover:text-[#121212b1]"/></button>
        </form>
    </li>
  )
}
{/* <Link key={data.header} href={`/myblog/${data.author.name}/${data.header}`}></Link> */}