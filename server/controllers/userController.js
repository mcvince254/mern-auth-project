import userModel from "../models/userModels.js"
export const getUserData = async (req, res) => {
    try {
        const userId = req.userId; 

        const user = await userModel.findById(userId);

        if (!user) {
            // Send the ID back to Postman so you can see it in the error
            return res.json({ 
                success: false, 
                message: "User not found",
                debug_id_received: userId // <--- This will show up in Postman
            });
        }

        return res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}