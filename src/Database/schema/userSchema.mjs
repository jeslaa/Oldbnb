import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, 'Please enter a user name']
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique:true
        },
        password: {
            type: String,
            required: [true, 'Please enter a password']
        }
        
    }
)

const User = mongoose.model('User', userSchema)

export default User