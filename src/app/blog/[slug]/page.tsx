import { getPost } from '@/app/action'
import Header from '@/components/Header/Header'
import dynamic from 'next/dynamic'
import WrapMaxWidth from '@/components/WrapMaxWidth/WrapMaxWidth'
const Editor = dynamic(() => import("../../../components/Texteditor/Textblog"), { ssr: false });


const getData = async (header:string) =>{
  const json = await getPost(header)
  return json
}

export default async function page({ params }: { params: { slug: string } }) {
  
  const data = await getData(params.slug)

  return (
    <WrapMaxWidth className=''>
        <div>
            <Header timeStamp={data?.createdAt} header={data?.header} describe={data?.describe} author={data?.author as {name:string,email:string}}/>
        </div>
        <Editor blog={data?.content}/>
    </WrapMaxWidth>
  )
}
