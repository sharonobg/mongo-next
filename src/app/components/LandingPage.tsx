"use client"

import {Audio} from 'react-loader-spinner';
import Container from '@/app/components/Container'
export const LandingPage=() => {

    return(
        <>
        <div className="flex flex-col place-items-center">
        {/*<Audio
          height="80"
          width="80"
          color="green"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
    />*/}<h2>Landing Page Content</h2>

        </div>
        <Container className="">
            <div>
                <h2> Landing Page </h2> 
            </div>
            
        </Container>
        </>
    )
}