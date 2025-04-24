import Post from '../models/post.js'
const increaseVisit = async (req, res, next) => {
    const slug=req.params.slug;
    await Post.findOneAndUpdate(
        { slug },
        { $inc: { visit: 1 } }
    )
    next();
};
export default increaseVisit;