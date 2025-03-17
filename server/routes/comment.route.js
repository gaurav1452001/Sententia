import express from 'express'

const router = express.Router()

router.get('/testing',(req,res)=>{
    res.status(200).send("User route")
})

export default router