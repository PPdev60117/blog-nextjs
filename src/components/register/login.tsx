import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa";
import { auth, signIn } from "@/lib/auth";
import { loginCredential } from "@/app/action";



export default async function Login() {

    const session = await auth()
    console.log(session)

    async function loginGithub() {
        'use server'
        await signIn("github")

    }

    return (
      <>
          <div className="max-w-96 h-full flex flex-col justify-center mx-auto" >
            <div className="text-center">
                <h1 className="mb-2 text-3xl font-semibold">Create your account</h1>
                <p className="text-[#4040408a]">Enter your email below to create your account</p>
            </div>
            <form action={loginCredential}>
                <div className=" max-w-96 flex flex-col justify-self-center">
                    <div className="my-2">
                        <p>Email</p>
                        <Input type="Email" name="email" placeholder="michel@gmail.com"/>
                    </div>
                    <div className="my-2">
                        <p>Password</p>
                        <Input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
                <Button type="submit" className="mt-2 w-full">Submit</Button>
            </form>
                <form action={loginGithub}><Button className="mt-2 w-full"><FaGithub className="text-2xl"/></Button></form>
          </div>
          
      </>
    )
  }
  