import express from 'express'
import { getUsers, postUsers } from '../controllers/userController.mjs'

const router = express.Router()

//Fetch users
router.get('/', getUsers)

//Post users
router.post('/', postUsers)

export default router;