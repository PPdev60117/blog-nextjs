import WrapMaxWidth from "../WrapMaxWidth/WrapMaxWidth";
import Link from "next/link";
import { Button } from "../ui/button";


export default function Hero() {
  return (
    <>
    <WrapMaxWidth className="flex flex-col my-[50px] justify-center">
        <div className="my-5">
            <h1 className="text-5xl md:text-7xl font-semibold text-center">Learn & Share</h1>
        </div>
        <p className=" text-center text-lg text-[#1c1c1c90] max-w-[80%] mx-auto">
           Lorem ipsum dolor sit a Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi eaque facere magni, rerum sint atque eligendi neque quod quas fuga, commodi hic odio harum cupiditate natus nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi eaque facere magni, rerum sint atque eligendi neque quod quas fuga.  
        </p>
        <div className="my-5 flex justify-center">
            <Button variant="outline" className="mr-2"><Link href={"/"} className="second-button mx-2">Learn Now</Link></Button>
            <Button><Link href={"/"} className="primary-button mx-2">Share Your Skill!</Link></Button>
        </div>
    </WrapMaxWidth>
    </>
  )
}
