"use client"

import {useState,useEffect,MouseEvent} from 'react'
import {useRouter} from 'next/navigation';
import Link from 'next/link'
import Input from '@/app/components/Input'
import{ToastContainer, toast,cssTransition,Bounce} from "react-toastify"
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addUser } from '@/redux/userSlice';


const Slide = cssTransition({
    enter: "slideIn",
    exit: "slideOut",
    collapseDuration: 50,
  });

const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [user,setUser]= useState({
        email:"",
        password: "",
    })
    const [loading,setLoading]= useState(false);
    const [disabled,setDisabled]= useState(true);
    
    //const formRef = useRef<HTMLFormElement>(null);
    const handleLogin = async (e:MouseEvent<HTMLButtonElement>) => {

     e.preventDefault();
     
     //const ref = useRef<HTMLFormElement>(null);
     try{
       setLoading(true);
        const response = await fetch('http://localhost:3000/api/users/login',{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email:user.email,
                password: user.password,
            })
        });
        const data = await response.json();
        if(response.ok){
            const loggedData = data.loggedData;
            dispatch(addUser(loggedData))
            toast.success("You&apos;r in!",{transition: Bounce})
            
            router.push("/profile")
        }else{
            toast.error(data.error);
            
        }
        
        //formRef.current?.reset();
     } catch(error) {
        toast.error("Login failed");
     } finally{
        setLoading(false);
     }

    }
    useEffect (() => {
        if(user.email.length > 0 && user.password.length > 0){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    },[user])
    return(
        <>
        <div className="bg-gray-100 p-2 justify-center place-items-center">
            <form>
            <Input 
            name="email"
            label="Email"
            className="text-gray-200"
            placeholder="youremail@gmail.com"
            inputType="email"
            value={user.email} 
            onChange={(e)=>setUser({...user, email:e.target.value})}
            />
            <Input 
            name="password"
            label="Password"
            className="text-gray-200"
            placeholder="your password"
            inputType="password"
            value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})}
            />
            {disabled?
            <button className="rounded-md border border-blue-200" onClick={(e)=>{e.preventDefault()}}>Fill in all fields</button>
               : 
            <button className="rounded-md border border-blue-400" onClick={handleLogin}>Login</button>
            }
            </form>
        </div>
        <button className="rounded-md border border-blue-200"><Link href="/register">Don&apos;t have an account? Click here to register</Link></button>
        <ToastContainer />
        </>
    )
}
export default LoginForm;
