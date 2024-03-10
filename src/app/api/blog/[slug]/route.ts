import connectDB from "../../../../lib/connectToDb"
import { Post } from "../../../../lib/model"

export async function GET(request: Request,
    { params }: { params: { slug: string } }) {

    try{
        await connectDB()
        const post = await Post.findOne({header:params.slug})
        return Response.json({post})
    }catch{
        console.log("error")
    }

  }