import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAccountVerified: {
      type: Boolean,
      default: false,
    },

    verifyOtp: {
      type: String,
      default: "",
    },

    verifyOtpExpiredAt: {
      type: Number,
      default: 0,
    },

    resetOtp: {
      type: String,
      default: "",
    },

    resetOtpExpiredAt: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const userModel =
  mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;