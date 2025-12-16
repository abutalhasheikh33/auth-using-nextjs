import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true
    },
email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    },
    isVerified: {
    type: Boolean,
    default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});

const User = mongoose.model.users || mongoose.model("User", userSchema);

export default User;