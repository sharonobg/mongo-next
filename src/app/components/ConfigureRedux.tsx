"use client"

import {useRouter} from "next/navigation";
import {useEffect,ReactNode} from "react";
import {useSelector} from "react-redux";

const ConfigureUserRedux = ({children}:{children:ReactNode}) => {
    const userInfo = useSelector((state:any)=>state.mongo.userInfo);
    const router = useRouter()
    useEffect( () => {
        if(!userInfo){
            router.replace('/'|| '/register')
        }
    },[userInfo,router]);
    
    return <>{children}</>
}

export default ConfigureUserRedux
