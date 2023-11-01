"use client"

import * as React from 'react';
import{useState,useEffect}from 'react';
import Link from "next/link"
import '@/app/globals.css';
import { navListItem } from '../constants';
import {useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/navigation';
import { removeUser } from '@/redux/userSlice';


export const Nav=() => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleSignout =(e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(removeUser());
        router.push("/")
    }
    const gotoSignin =(e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        router.push("/")
    }
    const userInfo = useSelector((state:any)=>state.mongo.userInfo)
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
                <li className="hover:cursor-pointer hover:text-blue-200">Your email is {userInfo? userInfo.email :"unavailable" } </li>
                <li className="hover:cursor-pointer hover:text-blue-200">
                {userInfo? <span onClick={handleSignout}>SignOut</span> : <span onClick={gotoSignin}>SignIn</span>}</li>
                
            </ul>
           
        </nav>
        
       
        </>
    )
}