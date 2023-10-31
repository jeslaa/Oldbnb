import User from "../models/userModel.mjs";

//Fetch users
const getUsers = async(req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Register User
const postUsers = async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}


export { getUsers, postUsers}