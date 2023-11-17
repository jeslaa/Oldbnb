import express from 'express'
import { postBooking } from '../controllers/bookingController.mjs'

const router = express.Router()

//Post bookings
router.post('/', postBooking)

export default router;