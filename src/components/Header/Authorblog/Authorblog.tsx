import Image from "next/image"

const datas = [{image:'https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
header:'Header',
content:' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
author:{
    image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'User'
},
date:'March 19 2544'}
]

export default function Authorblog({author,timeStamp}:{author:{name:string,email:string},timeStamp:string}) {

    console.log(author.name)
  return (
    <div className="flex w-full mt-3">
        <div className="flex">
            <Image className="m-auto h-14 w-14 rounded-full" width={600} height={600} alt="" src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></Image>
        </div>
        <div className="flex flex-col mx-2 justify-center">
            <div>
                <h1 className="text-xl font-medium">{author.name}</h1>
            </div>
            <div>
                <p className="text-lg font-normal text-[#22222268]">{`${timeStamp}`}</p>
            </div>
        </div>
    </div>
  )
}
