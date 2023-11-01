import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/dbconfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

connect();

export const POST = async (request: NextRequest) => {

  try {
    const reqBody = await request.json();
    console.log('login reqBody',reqBody);
    const { email, password } = await reqBody;
    // Checking if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {error: "User does not exist!"},
        { status: 400 }
      );
    }else{console.log('login user',user)}

    // Validation of Email
    const emailValidation = () => {
      return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    if (!emailValidation()) {
      return NextResponse.json(
        {
          error: "Email is Not Valid!",
        },
        { status: 400 }
      );
    }
    // Validating the password
    const validPassword = await bcrypt.compare(password,user.password);
    if(!validPassword){
        return NextResponse.json(
            {error:"invalid password"},
            {status:400}
        );
    }
    //creating the login Session
    const loggedData={
        id:user._id,
        username:user.username,
        email:user.email
    };
    console.log('login loggedData',loggedData);
    return NextResponse.json({
            message:'User logged in',
            success:true,
            loggedData
        });
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};