import express from 'express'
import { getUsers, postUsers, loginUser} from '../controllers/userController.mjs'

const router = express.Router()

//Fetch users
router.get('/', getUsers)

//Post users
router.post('/', postUsers)

router.post('/Login', loginUser)

export default router;