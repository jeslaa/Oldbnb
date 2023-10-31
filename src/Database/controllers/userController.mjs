import User from "../schema/userSchema.mjs";
import bcrypt from 'bcrypt';

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
        const { userName, email, password } = req.body;
        const saltRounds = 10

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const user = await User.create({
            userName,
            email,
            password: hashedPassword
        });

        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}


export { getUsers, postUsers }