import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // This connects to your local machine and creates/uses the "kariani" database
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'mern-auth', 
        });
        console.log("✅ Local MongoDB Connected (mern-auth)");
    } catch (error) {
        console.error("❌ Local MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;