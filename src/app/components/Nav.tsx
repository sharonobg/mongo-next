"use client"

import * as React from 'react';
import Link from "next/link"
import '@/app/globals.css';
import { navListItem } from '../constants';
import {useSelector} from 'react-redux'



export const Nav=() => {
    const userInfo = useSelector((state:any)=>state.mongo.userInfo)
    console.log(userInfo)

    const thisemail = <div>User Email</div>;
    const greetNav = <div>Welcome! and Please sign in</div>
/*
    const userImage = user?.image ? (
            <Image 
            src={user?.image}
            alt={user?.name ?? "Profile Pic"}
            width={250}
            height={250}
            />

        ):null*/
   

    return(
        <>
        <nav className="flex justify-around">
            <ul className="hidden md:flex flex-row text-white">
                {navListItem.map(({title,href}) => ((
                <li key={title}><Link href={href}>{title}</Link></li>
               ))
                )}
            
            </ul>
            <ul className="flex flex-row text-white justify-end">
                <li className="hover:cursor-pointer hover:text-blue-200">Email</li>
                <li className="hover:cursor-pointer hover:text-blue-200"><span>SignIn/Sign Out</span></li>
                
            </ul>
           
        </nav>
        
       
        </>
    )
}