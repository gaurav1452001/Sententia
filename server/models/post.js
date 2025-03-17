import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    readTime: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    wordCount: {
        type: Number,
        required: true
    },
    sentenceCount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);