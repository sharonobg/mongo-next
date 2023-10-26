import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/dbconfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { email, password } = await reqBody;
    // Checking if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exist!",
        },
        { status: 400 }
      );
    }else{console.log(user)}

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
    //const salt = await bcrypt.genSalt(10);
    //const encryptedPassword = await bcrypt.hash(password, salt);
    //creating login session

    const loggedData={
        id:user._id,
        username:user.username,
        email:user.email
    };
    console.log(loggedData);
    return NextResponse.json(
    
        {
            message:'It went through',
            success:true,
            loggedData
        }
    );
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};