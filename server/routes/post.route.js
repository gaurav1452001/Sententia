import express from 'express'
import { getPosts,getPost,createPost,deletePost,uploadAuth, getUserPost } from '../controllers/post.controller.js'
const router = express.Router()

router.get('/upload-auth', uploadAuth);
router.get('/', getPosts);
router.get('/users/:userId', getUserPost);
router.get('/:slug', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);

export default router