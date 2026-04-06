import jwt from "jsonwebtoken"
const userAuth = async (req, res, next) => {
    // 1. Get the token from the user's browser cookies
    const { token } = req.cookies;

    // 2. Check: Does the token even exist?
    if (!token) {
        return res.json({ success: false, message: 'Not authorized, login again' });
    }

    try {
        // 3. Verify: Is this token valid and not tampered with?
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Extract ID: If the token is valid, it contains the User's ID
            // This covers both 'id' and '_id' if you aren't sure which one you signed with
            const userId = tokenDecode.id || tokenDecode._id;

            if (userId) {
                req.userId = userId;
            } else {
                return res.json({ success: false, message: 'Not authorized, login again' });
            }

        // 6. SUCCESS: Move to the controller/route handler
        next(); 
            
    } catch (error) {
        // If the token is fake or expired, jwt.verify throws an error
        return res.json({ success: false, message: error.message });
    }
}


export default userAuth