import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        required: true,
    },
    failedAttempts: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;