import{Schema,model,models} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide an email address"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps: true}
);
const User = models.User || model("User",userSchema);
export default User;