import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema=new Schema({
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
    image:{
        type:String,
    }
},{timestamps:true})

export default mongoose.model("User",userSchema);