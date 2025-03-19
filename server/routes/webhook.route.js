import express from 'express'
import {clerkWebhooks} from '../controllers/webhooks.js'
import bodyParser from 'body-parser';
const router = express.Router()

router.post('/clerk',bodyParser.raw({ type: 'application/json' }),clerkWebhooks);

export default router