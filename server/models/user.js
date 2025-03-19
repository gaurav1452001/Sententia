import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema=new Schema({
    clerkUserId:{
        type:String,
        required:true,
        unique:true,
    },

    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    blogName:{
        type:String
    },
    img:{
        type:String,
    }
},{timestamps:true})

export default mongoose.model("User",userSchema);