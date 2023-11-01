import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/dbconfig";
import Transaction from "@/models/transactionModel";
import bcrypt from "bcryptjs";

connect();

export const POST = async (request: NextRequest) => {
  try {
    //const currUser = 
    const reqBody = await request.json();
    console.log('transaction reqBody',reqBody);
    const { description, amount, category_id } = await reqBody;
    
    // Checking if user exists
    //const user = await Transaction.findOne({ email });
    //}

    // Validation of Email
    //};
    //}
    // Encrypting the password
    //const salt = await bcrypt.genSalt(10);
    //const encryptedPassword = await bcrypt.hash(password, salt);
//const userId = ObjectId("507c7f79bcf86cd7994f6c0e").valueOf()
    const newTransaction = new Transaction({
      description,
      amount,
      category_id,

    });
    const savedTransaction = await newTransaction.save();

    return NextResponse.json({
      message: "Transaction saved",
      success: true,
      savedTransaction,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};