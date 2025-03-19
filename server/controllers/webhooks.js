import {Webhook} from "svix";
import User from "../models/user.js";
export const clerkWebhooks=async(req,res)=>{
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if(!WEBHOOK_SECRET){
        throw new Error("Webhook secret needed");
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message:"Webhook signature verification failed!",
        });
    }
    // console.log(evt.data);
    if (evt.type === "user.created") {
        const newUser = new User({
            clerkUserId:evt.data.id,
            username: evt.data.username||evt.data.email_addresses[0].email_address,
            email: evt.data.email_addresses[0].email_address,
            img: evt.data.profile_image_url,
        });
        await newUser.save();
        return res.status(200).json({
            message:"webhook received",
        })
    }
}
