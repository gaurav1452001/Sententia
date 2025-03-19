import express from 'express'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import cors from 'cors'
import 'dotenv/config'
import './config/instrument.js'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import webhookRouter from './routes/webhook.route.js'

//init express
const app=express()

//middlewares
app.use(cors())
app.use("/webhooks",webhookRouter);

//routes
// app.get('/',(req,res)=>res.send("api working"))
// app.get("/debug-sentry", function mainHandler(req, res) { 
    //     throw new Error("My first Sentry error!");
    //   });
  app.use(express.json())
    
  app.use("/users",userRouter);
  app.use("/posts",postRouter);
  app.use("/comments",commentRouter);

//port
const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

//try catching error
app.use((error,req, res, next) => {
    res.status(error.status||500);

    res.json({
        message:error.message||"Something went wrong!",
        status:error.status,
        stack:error.stack,
    });
});

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on ${PORT}`);
})