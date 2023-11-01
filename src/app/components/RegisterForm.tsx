"use client"

import {useState,useEffect,MouseEvent} from 'react'
import {useRouter} from 'next/navigation';
import Input from '@/app/components/Input'
import{ToastContainer, toast,cssTransition,Bounce} from "react-toastify"
import Link from 'next/link';


const Slide = cssTransition({
    enter: "slideIn",
    exit: "slideOut",
    collapseDuration: 50,
  });

const RegistrationForm = () => {
    const router = useRouter()
    const [user,setUser]= useState({
        username:"",
        email:"",
        password: "",
    })
    const [loading,setLoading]= useState(false);
    const [disabled,setDisabled]= useState(true);
    
    //const formRef = useRef<HTMLFormElement>(null);
    const handleReg = async (e:MouseEvent<HTMLButtonElement>) => {

     e.preventDefault();
     
     //const ref = useRef<HTMLFormElement>(null);
     try{
       
        setLoading(true);
        const response = await fetch(process.env.DOMAIN+'/api/users/register',{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                username:user.username,
                email:user.email,
                password: user.password,
            })
        });
        const data = await response.json();
        if(response.ok){
            toast.success("Success!",{transition: Bounce})
            //router.push("/")
            
        }else{
            toast.error(data.error);
            //console.log('reg form error data',data);
        }
        //console.log('data: ',data);
        
        //formRef.current?.reset();
     } catch(error) {
        toast.error("Signup failed");
     } finally{
        setLoading(false);
     }

    }
    useEffect (() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
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
            name="username"
            label="Full Name"
            className="text-gray-200"
            placeholder="Your Name"
            inputType="text" 
            value={user.username} 
            onChange={(e)=>setUser({...user,username:e.target.value})}
            />
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
            <button className="rounded-md border border-blue-400" onClick={handleReg}>Create an account</button>
            }
            </form>
        </div>
        <button className="rounded-md border border-blue-200"><Link href="/">Already have an account? Click here to login</Link></button>
        
        <ToastContainer />
        </>
    )
}
export default RegistrationForm;
