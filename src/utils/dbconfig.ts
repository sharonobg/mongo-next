import mongoose from 'mongoose';

export const connect =async () => {
    try{
        // await for the asynchronous connection to return
        const con = await mongoose.connect(process.env.MONGODB_URI);
        //console.log(`Connected to database at: ${con.connection.host}`);
       
    } catch(error){
        console.log('no connection',error)
    }
}