import './config/instrument.js'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import express from 'express'
import * as Sentry from "@sentry/node";

//init express
const app=express()

//connect to db
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>res.send("api working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  

//port
const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})