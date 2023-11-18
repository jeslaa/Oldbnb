import express from 'express'
import { postBooking, getBookings, getBookingsById } from '../controllers/bookingController.mjs'

const router = express.Router()

//Post bookings
router.post('/', postBooking)

//Get bookings
router.get('/', getBookings)

//Get bookings by id
router.get('/:id', getBookingsById)

export default router;