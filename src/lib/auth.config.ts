import GitHub from "next-auth/providers/github"
import type { NextAuthConfig,User} from "next-auth";
import credentials from "next-auth/providers/credentials";
import connectDB from "./connectToDb";
import { User as Userauth}  from "./model";
import bcrypt from 'bcryptjs'



const login = async (credential:{email:string,password:string}) => {
    const {email,password} = credential

    await connectDB()
    const user = await Userauth.findOne({email:email})
    const isPassword = await bcrypt.compare(password,user.password)
    const returnUser = {name:user.name,image:null,email:user.email,role:'admin'}
    if(isPassword) return returnUser
    return null
}

export default {
    pages:{signIn:'/login'},
    providers:[GitHub,
        credentials({
        async authorize(credentials, request) {
            try{
                const user = await login(credentials as {email:string,password:string})
                return user
            }catch{
                return null
            }
        },
    })],
    callbacks:{
        async jwt({token,user}) {
            if(user) {
                token.id = user.id
                token.isAdmin = 'Admin'
            }
            
            return token
        },
        async session({session,token}) {
            if(token){
                session.user.id = token.id as string
                session.user.image = null
            }
            return session
        },
        authorized({auth,request}){
            const user = auth?.user
            const isOnloginpage = request.nextUrl?.pathname.startsWith('/login')
            const isOnUser = request.nextUrl?.pathname.startsWith('/myblog')
            const isOncreate = request.nextUrl?.pathname.startsWith('/create')

            if(isOnUser && !user){
                return false
            }

            if(isOncreate && !user){
                return false
            }

            if(isOnloginpage && user){
                return Response.redirect(new URL("/",request.nextUrl))
            }

            return true

        }
    }
} satisfies NextAuthConfig
