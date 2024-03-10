import Image from "next/image"

export default function Author({author,createdAt}:any) {

  return (
    <div className="flex w-full mt-3">
        <div className="flex">
            <Image className="m-auto h-10 w-10 rounded-full" width={600} height={600} alt="" src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></Image>
        </div>
        <div className="flex flex-col mx-2">
            <div>
                <h1 className="text-sm font-medium">{author?.name}</h1>
            </div>
            <div>
                <h1 className="text-xs font-normal text-[#22222268]">{`${createdAt}`}</h1>
            </div>
        </div>
    </div>
  )
}
