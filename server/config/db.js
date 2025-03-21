import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`database connected`);   
    }catch(err){
        console.log(err);
    }
}
export default connectDB;
// import mongoose from "mongoose";

// const connectDB=async()=>{
//     mongoose.connection.on(`connected`,()=>console.log(`database connected`))
//     await mongoose.connect(`${process.env.MONGODB_URI}/blog-list`)
// }
// export default connectDB