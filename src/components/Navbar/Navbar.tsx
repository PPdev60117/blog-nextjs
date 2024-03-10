'use client'
import Link from "next/link"
import WrapMaxWidth from "../WrapMaxWidth/WrapMaxWidth"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import { Button } from "../ui/button";
import {usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { logOut } from "@/app/action";

interface Navbar {
    name:string,
    link:string
}

export default function Navbar():JSX.Element {
    const router = usePathname()
    const [isopen,setIsopen] = useState<boolean>(false)
    const session = useSession()


    const navbar = [{name:'Myblog',link:`/myblog/${session.data?.user?.name}`},
    {name:'Create',link:`/create/${session.data?.user?.name}`}
    ]

  return (
    <>
        {router === '/login' ? <></>:router === '/register' ? <></>:<WrapMaxWidth className={`bg-[#FFFFFF] z-[9999999] sticky top-0 left-0 right-0 flex justify-between `} >
            <div className="flex">
                <h1 className="m-auto text-2xl font-semibold"><Link href={'/'}>LOGO</Link></h1>
            </div>
            <div className="flex">
                <ul className="hidden md:flex py-2 ">
                    {session.data&&navbar.map((data:Navbar)=>{
                        return(
                            <>
                                <Link key={data.name} href={data.link} className="font-medium text-gray-600 hover:text-gray-950 px-4 mx-2 py-2"><li>{data.name}</li></Link>
                            </>
                        )
                    })}

                    {session.data?<form action={logOut}><Button><li className="mx-2 primary-button">logout</li></Button></form>
                    :<>
                    <Link href={'/register'} className="font-medium text-gray-600 hover:text-gray-950 px-4 mx-2 py-2"><li>register</li></Link>
                    <Button className="ml-4"><Link key={'login'} href={"/login"} className="mx-2 primary-button"><li>login</li></Link></Button>
                    </>}
                </ul>
                {!isopen ?<FiMenu className="text-3xl m-auto ml-4 md:hidden" onClick={()=>setIsopen((prev)=>!prev)}/>:
                <ul className="md:hidden w-[50%] right-0 top-0 z-50 h-screen flex-col bg-black fixed flex py-2 ">
                    <li key={'x'} className="flex justify-end">
                        <MdClear onClick={()=>setIsopen((prev:boolean)=>!prev)} className="text-[#ffffff] text-3xl mx-5  "/>
                    </li>
                    {session.data && navbar.map((data:Navbar)=>{
                        return(
                            <>
                                <Link key={data.name} href={data.link} className="font-medium text-gray-600 hover:text-gray-950 px-4 mx-2 py-2"><li>{data.name}</li></Link>
                            </>
                        )
                    })}
                    {session.data?<form action={logOut}><button type="submit" className="font-medium text-[#a3a3a3] hover:text-gray-950 px-4 rounded-lg bg-[#343434] mx-2 py-2"><li>logout</li></button></form>:
                    <>
                    <Link href={'/register'} className="font-medium text-gray-600 hover:text-gray-950 px-4 mx-2 py-2"><li>register</li></Link>
                    <Link key={'login'} href={"/login"} className="font-medium text-[#a3a3a3] hover:text-gray-950 px-4 rounded-lg bg-[#343434] mx-2 py-2"><li>login</li></Link>
                    </>}
                </ul>}
            </div>
        </WrapMaxWidth>}
    </>
  )
}
