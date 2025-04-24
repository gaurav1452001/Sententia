import User from "../models/user.js";
import Post from "../models/post.js";
import { Webhook } from "svix";

export const clerkWebhooks = async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("Webhook secret needed!");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        return res.status(400).json({
            message: "Webhook verification failed!",
        });
    }

    try {
        if (evt.type === "user.created") {
            const newUser = new User({
                clerkUserId: evt.data.id,
                username: evt.data.username || evt.data.email_addresses[0]?.email_address,
                email: evt.data.email_addresses[0]?.email_address,
                profileimg: evt.data.image_url || "",
                blogName: evt.data.first_name || "Untitled Blog",
            });

            await newUser.save();
        } else if (evt.type === "user.deleted") {
            const deletedUser = await User.findOneAndDelete({
                clerkUserId: evt.data.id,
            });

            if (!deletedUser) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            await Post.deleteMany({ user: deletedUser._id });
        }

        // Send a success response after processing the event
        res.status(200).json({
            message: "Webhook processed successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
};
