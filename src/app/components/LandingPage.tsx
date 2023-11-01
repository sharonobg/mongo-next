"use client"
import {Audio} from 'react-loader-spinner';
import Container from '@/app/components/Container'
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';

export const LandingPage=() => {
const userInfo = useSelector((state:any)=>state.mongo.userInfo)

    return(
        <>
        <div className="flex flex-col place-items-center">
        {!userInfo && (
        <div><Audio
          height="80"
          width="80"
          color="green"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
    />
    <p>{userInfo? userInfo._id: "No id available"}</p>
 <p>{userInfo? userInfo.email: "No email available"}</p>
<p>{userInfo? userInfo.username: "No username available"}</p>
</div>)}
    
    <h2>Landing Page Content</h2>


        </div>
        <Container className="">
        {userInfo ?userInfo.username: <LoginForm />}
        
          <div>
                <h2>Landing Page</h2> 
            </div>
            
        </Container>
        </>
    )
}