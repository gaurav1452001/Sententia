import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app=express()

//mwares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>res.send("api working"))

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})