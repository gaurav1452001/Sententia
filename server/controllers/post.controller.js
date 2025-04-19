import ImageKit from 'imagekit';
import Post from '../models/post.js';
import User from '../models/user.js';

export const getPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const query = {}
    const author = req.query.author;
    const searchQuery = req.query.search;
    const sortQuery = req.query.sort;

    if (searchQuery) {
        query.title = { $regex: searchQuery, $options: "i" };
    }
    if (author) {
        const user = await User.findOne({ username: author }).select("_id");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        query.user = user._id;
    }
    let sortObj = { createdAt: -1 };
    if (sortQuery) {
        if (sortQuery === "oldest") {
            sortObj = { createdAt: 1 };
        } else if (sortQuery === "newest") {
            sortObj = { createdAt: -1 };
        } else if (sortQuery === "popular") {
            sortObj = { visit: -1 };
        }
    }

    const posts = await Post.find(query)
        .populate("user")
        .limit(limit)
        .skip((page - 1) * limit)
        .sort(sortObj);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug }).populate("user");
    res.status(200).json(post);
};

export const getUserPost = async (req, res) => {
    try {
        const user = await User.findOne({ clerkUserId: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const posts = await Post.find({ user: user._id })
            .populate("user")
            .sort({ createdAt: -1 }); // Keep sorting by newest first

        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching user posts:", error);
        res.status(500).json({ message: "Error fetching user posts", error: error.message });
    }
};

export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Unauthorized");
    }
    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found");
    }
    let slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    let existingPost = await Post.findOne({ slug });
    let counter = 2;
    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({ slug });
        counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...req.body });
    const post = await newPost.save();
    res.status(200).json(post);
};

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Unauthorized");
    }
    const user = await User.findOne({ clerkUserId });
    if (!user) {
        return res.status(404).json("User not found");
    }
    const deletedPost = await Post.findOneAndDelete({ _id: req.params.id, user: user._id, });
    if (!deletedPost) {
        return res.status(403).json("You are not allowed to delete this post");
    }
    res.status(200).json("Post has been deleted");
}


export const uploadAuth = async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IK_URL_ENDPOINT,
        publicKey: process.env.IK_PUBLIC_KEY,
        privateKey: process.env.IK_PRIVATE_KEY,
    });
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
}