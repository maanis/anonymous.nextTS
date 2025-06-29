import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    text: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    name: { type: String, required: [true, "Username is required"], unique: true, trim: true },
    email: { type: String, required: [true, "Email is required"], match: [/\S+@\S+\.\S+/, "Email is not valid"], unique: true },
    password: String,
    verifyCode: { type: String, required: [true, "Verify code is required"] },
    isAcceptingMessage: { type: Boolean, default: true },
    messages: [MessageSchema],
    verifyCodeExpiry: { type: Date, required: [true, "Verify code expiry is required"] },
})

const userModel = mongoose.models.User || mongoose.model<User>("User", UserSchema)

export default userModel