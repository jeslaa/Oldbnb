import Booking from "../schema/bookingSchema.mjs";

const postBooking = async(req, res) => {
    try {
        const { place, checkIn, checkOut, price} = req.body
        await Booking.create({
            place, checkIn, checkOut, price
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}