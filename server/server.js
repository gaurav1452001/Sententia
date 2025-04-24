import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import 'dotenv/config';
import './config/instrument.js';
import connectDB from './config/db.js';
import webhookRouter from './routes/webhook.route.js';
import { clerkMiddleware} from '@clerk/express';
import cors from 'cors';

//init express
const app = express()

//middlewares
app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/users", userRouter);
app.use("/posts", postRouter);

//port
const PORT = process.env.PORT || 5000

//try catching error
app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack,
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})