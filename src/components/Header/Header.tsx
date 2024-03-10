import Authorblog from "./Authorblog/Authorblog";

export default function Header({timeStamp,header,describe,author}:{timeStamp:string,header:string,describe:string,author:{name:string,email:string}}) {

  console.log(author)
  return (
    <div className="my-[40px] border-b-2 pb-[40px]">
        <h1 className="text-5xl md:text-6xl font-bold">{header}</h1>
        <p className="text-lg md:text-2xl my-[20px] font-semibold text-[#2b2b2ba5]">{describe}</p>
        <div className=''>
            <Authorblog author={author} timeStamp={timeStamp}/>
        </div>
    </div>
  )
}
