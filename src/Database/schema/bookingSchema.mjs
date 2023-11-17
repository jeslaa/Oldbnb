import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        place: {
            type:mongoose.Schema.Types.ObjectId, 
            ref: 'Product',
            required: true,
        },
        checkIn: {
            type: Date, required:true
        },
        checkOut: {
            type: Date, required:true
        },
        numberOfGuests: {
            type: Number
        },
        price: Number
    }
)

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;