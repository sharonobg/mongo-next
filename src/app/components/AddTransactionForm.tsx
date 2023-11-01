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

const AddTransactionForm = () => {
    const router = useRouter()
    const [transaction,setTransaction]= useState({
        description:"",
        amount:"",
        category_id: "",
        
    })
    const [loading,setLoading]= useState(false);
    const [disabled,setDisabled]= useState(true);
    
    //const formRef = useRef<HTMLFormElement>(null);
    const addTransaction = async (e:MouseEvent<HTMLButtonElement>) => {

     e.preventDefault();
     
     //const ref = useRef<HTMLFormElement>(null);
     try{
       
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/users/transactions',{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                description:transaction.description,
                amount:transaction.amount,
                category_id: transaction.category_id,
            })
        });
        const data = await response.json();
        if(response.ok){
            toast.success("Success!",{transition: Bounce})
            //router.push("/")
            
        }else{
            toast.error(data.error);
            //console.log('add a transaction form error data',data);
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
        if(transaction.description.length > 0 && transaction.amount.length > 0 && transaction.category_id.length > 0){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    },[transaction])
    return(
        <>
        <div className="bg-gray-100 p-2 justify-center place-items-center">
            <form>
            <Input 
            name="description"
            label="Description"
            className="text-gray-200"
            placeholder="Description"
            inputType="text" 
            value={transaction.description} 
            onChange={(e)=>setTransaction({...transaction,description:e.target.value})}
            />
            <Input 
            name="amount"
            label="Amount"
            className="text-gray-200"
            placeholder="amount"
            inputType="email"
            value={transaction.amount} 
            onChange={(e)=>setTransaction({...transaction, amount:e.target.value})}
            />
            <Input 
            name="categoryid"
            label="Category"
            className="text-gray-200"
            placeholder="category"
            inputType="password"
            value={transaction.category_id} 
            onChange={(e)=>setTransaction({...transaction,category_id:e.target.value})}
            />
            {disabled?
            <button className="rounded-md border border-blue-200" onClick={(e)=>{e.preventDefault()}}>Fill in all fields</button>
               : 
            <button className="rounded-md border border-blue-400" onClick={addTransaction}>Create an account</button>
            }
            </form>
        </div>
        <button className="rounded-md border border-blue-200"><Link href="/">Already have an account? Click here to login</Link></button>
        
        <ToastContainer />
        </>
    )
}
export default AddTransactionForm;
