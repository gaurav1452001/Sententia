import express from 'express'
import { getPosts,getPost,createPost,deletePost,uploadAuth, getUserPost } from '../controllers/post.controller.js'
import increaseVisit from '../middleware/increaseVisit.js';
const router = express.Router()

router.get('/upload-auth', uploadAuth);
router.get('/', getPosts);
router.get('/users/:userId', getUserPost);
router.get('/:slug', increaseVisit,getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);

export default router