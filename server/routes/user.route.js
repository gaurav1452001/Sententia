import express from 'express'
import { getUser, updateUser } from '../controllers/user.controller.js'

const router = express.Router()

// Get user information
router.get('/:clerkUserId', getUser)

// Update user information
router.patch('/:clerkUserId', updateUser)

export default router