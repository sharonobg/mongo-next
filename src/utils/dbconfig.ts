import mongoose from 'mongoose';

export const connect =async () => {
    try{
        //await mongoose.connect(process.env.MONGODB_URI);
        //const connection = mongoose.connection;
        //connection.on("connected", () => {
        //    console.log('connected to mongo')
        //});
        //connection.on('error',(error:any) => {
        //    console.log('Connection error: please check if MongoDB is running');
        //});
        //process.exit();
        //new trytry {
            // await for the asynchronous connection to return
            const con = await mongoose.connect(process.env.MONGODB_URI);
            console.log(`Connected to database at: ${con.connection.host}`);
        //new try } catch (error) {
        //new try     throw error;
        //new try }
    } catch(error){
        console.log('no connection',error)
    }
}