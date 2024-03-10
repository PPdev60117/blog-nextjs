"use server"

import { Post, User } from '@/lib/model'
import connectDB from '../lib/connectToDb'
import { redirect } from 'next/navigation'
import { signIn, signOut } from '@/lib/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';


export const createUser = async (prevState: any, formData: FormData) => {
    
    const name = formData.get("name") 
    const email = formData.get("email") 
    const password = formData.get("password") 
    const confirm = formData.get("confirm") 

    try{
        await connectDB()
        if(await User.findOne({name:name})){
            return {name:'outline outline-offset-2 outline-pink-500',message:'name has been used'}
        }
        if(await User.findOne({email:email})){
            return {email:'outline outline-offset-2 outline-pink-500',message:'email has been used'}
        }
        if(password !== confirm){
            console.log('please enter true password')
            return {confirm:'outline outline-offset-2 outline-pink-500',message:'peerapat'}
        }

        const hash = await bcrypt.hash(password as string, 10);
        const user = await User.create({
            name:name,
            email:email,
            password:hash,
        })
    }
    catch(err){
        console.log(err)
    }
}

export const createContent = async (data:any,formData:FormData) => {
    const header = formData.get("header") 
    const describe = formData.get("describe")
    const {content,params} = data
    const author = await User.findOne({name:params})
    console.log(author)
    try{
        await connectDB()
        const postuser = await Post.create({
            header:header,
            describe:describe,
            author:author,
            content:content,
            type:[
                {name:'peerapat'}
            ],
            like:[
                {user:'peerapat'}
            ]
            
        })
        
    }
    catch(err){
        console.log(err)
    }
    redirect('/')
}

export const updateContent = async (data:any,formData:FormData) => {
    const header = formData.get("header")  as string
    const describe = formData.get("describe") as string
    const {content,params} = data
    try{
        await connectDB()
        const postuser = await Post.findOneAndUpdate({header:params},{
            header:header,
            describe:describe,
            content:content,      
        })
    }
    catch(err){
        console.log(err)
    }
    redirect('/')
}


export const deleteContent = async (formData:FormData) => {
    const postid = formData.get("id") as string
    console.log(postid)
    try{
       await connectDB() 
       const deletepost = await Post.findByIdAndDelete({_id:postid})
       console.log(deletepost)
       revalidatePath('/myblog/**')
    }catch(err){
        console.log(err)
    }
}

export const getPosts = async () => {
    try{
        await connectDB()
        const post = await Post.find({}).limit(8).select('-content')
        return post
    }catch(err){
        console.log(err)
    }
}

export const getPost = async (header:string) =>{
    try{
        await connectDB()
        const post = await Post.findOne({
        header:header
    })
    return post
    }catch(err){
        console.log(err)
    }
}


export const loginCredential = async (formData:any) => {
    const email = formData.get('email')
    const password = formData.get('password')

    try{
        await signIn('credentials',{
            email,password,redirectTo:'/'
        })
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return {error : 'Invalid credential'}
                default:
                    return {error:'have someting wrong'}
            }
        }
    }
}

export const logOut = async () => {
    await signOut()
}


export const getallmyblog = async () => {
    await connectDB()
    try{
        const allblog = await Post.find({
            "author.name":"Peekub123"
        })
        return allblog
    }catch(err){
        console.log(err)
    }
}