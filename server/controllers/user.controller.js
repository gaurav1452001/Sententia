import User from '../models/user.js';

export const getUser = async (req, res) => {
    try {
        const { clerkUserId } = req.params;
        const user = await User.findOne({ clerkUserId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
        
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { clerkUserId } = req.params;
        const requestingUserId = req.auth.userId;

        // Check if the requesting user matches the user being updated
        if (clerkUserId !== requestingUserId) {
            return res.status(403).json({
                message: "Unauthorized: You can only update your own profile"
            });
        }

        const updates = req.body;

        const user = await User.findOneAndUpdate(
            { clerkUserId },
            updates,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
}