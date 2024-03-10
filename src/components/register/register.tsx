'use client'
import { useFormState } from "react-dom"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { createUser } from "@/app/action"

const initialState:any = {
    name:'',
    email:'',
    password:'',
    confirm:'',
    message:''
}

export default function Register() {

    const [state, formAction] = useFormState(createUser, initialState);
    
    return (
      <>
          <form action={formAction} className={"max-w-96 h-full flex flex-col justify-center mx-auto"} >
            <div className="text-center">
                <h1 className="mb-2 text-3xl font-semibold">Create your account</h1>
                <p className="text-[#4040408a]">Enter your email below to create your account</p>
            </div>
            <div className=" max-w-96 flex flex-col justify-self-center">
                <div className="my-2">
                    <p>Name</p>
                    <Input type="text" placeholder="michel" name="name" className={`${state?.name}`}/>
                </div>
                <div className="my-2">
                    <p>Email</p>
                    <Input type="Email" placeholder="michel@gmail.com" name="email" className={`${state?.email}`}/>
                </div>
                <div className="my-2">
                    <p>Password</p>
                    <Input type="password" placeholder="password" name="password" className={`${state?.password}`}/>
                </div>
                <div className="my-2">
                    <p>Confirm Password</p>
                    <Input type="password" placeholder="confirm" name="confirm" className={`${state?.confirm}`}/>
                </div>
            </div>
            <p className="text-sm text-pink-500 text-end">{state?.message}</p>
            <Button className="mt-2">Submit</Button>
          </form>

      </>
    )
  }
  