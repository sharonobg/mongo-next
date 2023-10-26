// types/global.d.ts
import React from 'react';
export {}

declare global {

interface ChildProps {
  children: React.ReactElement | React.ReactElement[];
  className:string;
}

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?:string | null |undefined;
    
} | undefined
type Newuser = {
  name?: string | null | undefined;
  email?: string | null | undefined;
} | undefined
type UserProps={user:User,}
type NewuserProps={newuser:Newuser,}
//type Props = {user:User,pagename:string}
type PageProps = {
  //user:User,
  pagename: string,
}
interface UserData {
    username: string;
    id: string;
    email:string;
  }
interface transactionData {
    description: string;
    amount: string,
    transactionuser:string,
    category_id:string,
  }
}