import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
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
    },
    sentenceCount: {
        type: Number,
    }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);