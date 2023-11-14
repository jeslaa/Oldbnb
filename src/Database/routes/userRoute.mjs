import express from 'express'
import { getUsers, postUsers, loginUser, logoutUser} from '../controllers/userController.mjs'

const router = express.Router()

//Fetch users
router.get('/', getUsers)

//Post users
router.post('/', postUsers)

//Login users
router.post('/Login', loginUser)

//Logout users
router.post('/Logout', logoutUser)  

export default router;