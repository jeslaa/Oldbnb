import express from 'express'
import { getUsers, postUsers, loginUser, logoutUser} from '../controllers/userController.mjs'

const router = express.Router()

//Fetch users
router.get('/', getUsers)

//Post users
router.post('/', postUsers)

router.post('/Login', loginUser)

router.post('/Logout', logoutUser)  

export default router;