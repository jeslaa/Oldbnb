import User from "../schema/userSchema.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const jwtSecret = 'akmfoanfokadpflapfo39+49s,fs'

//Fetch users
const getUsers = async(req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            // User not found
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, userDoc.password);
        
        if (passwordMatch) {
            // Password is correct
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {expiresIn: '1h'}, (error, token) => {
                if (error) throw error
                return res.cookie('token', token).json(userDoc);
            })
            
        } else {
            // Password is incorrect
            return res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Logout
const logoutUser = async (req, res) => {
    try {
        // Clearing the token
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


//Register User
const postUsers = async(req, res) => {
    try {
        const { userName, email, password } = req.body;
        const saltRounds = 10

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const userDoc = await User.create({
            userName,
            email,
            password: hashedPassword
        });

        res.status(200).json(userDoc)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}


export { getUsers, postUsers, loginUser, logoutUser }