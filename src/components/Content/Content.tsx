import { getPosts } from '@/app/action'
import Card from '../Card/Card'
import WrapMaxWidth from '../WrapMaxWidth/WrapMaxWidth'

const getData = async () => {
  const data = await getPosts()
  return data
}

export default async function Content() {

  const datas = await getData()
  return (
    <>
    <WrapMaxWidth className='my-5'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold mt-[50px]'>Lasted</h1>
            <p className='self-end font-semibold text-[#4c4c4c9e]'>read more</p>
        </div>
        <div className='mt-[50px] '>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
                {datas?.map((data:any)=>{
                  return(
                  <>
                    <Card data={data}/>
                  </>
                  )
                })}
            </div>
        </div>
    </WrapMaxWidth>
    </>
  )
}
