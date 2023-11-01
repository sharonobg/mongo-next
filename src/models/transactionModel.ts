import mongoose, {Schema,model,models} from "mongoose";

const transactionSchema = new Schema({
    description:{
        type:String,
        required:[true,"Please provide a description"],
    },
    amount:{
        type:String,
        required:[true,"Please provide an amount"],
    },
    category_id:{
        type:String,
        required:[true,"Please select a category"],
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},
{timestamps: true}
);
const Transaction = models.Transaction || model("Transaction",transactionSchema);
export default Transaction;