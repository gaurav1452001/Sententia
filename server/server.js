import express from 'express'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import cors from 'cors'
import 'dotenv/config'
import './config/instrument.js'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import {clerkWebhooks} from './controllers/webhooks.js'

//init express
const app=express()

//connect to db


//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>res.send("api working"))
app.get("/debug-sentry", function mainHandler(req, res) { 
    throw new Error("My first Sentry error!");
  });
app.post('/webhooks',clerkWebhooks)
app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);


//port
const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);
app.listen(PORT, ()=>{
  connectDB()
    console.log(`Server is running on ${PORT}`);
})