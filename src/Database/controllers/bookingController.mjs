import Booking from "../schema/bookingSchema.mjs";
import Product from "../schema/productSchema.mjs";

function calculateNumberOfNights(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const timeDifference = checkOut.getTime() - checkIn.getTime();
  const numberOfNights = Math.round(timeDifference / oneDay);

  return numberOfNights;
}

const postBooking = async (req, res) => {
  try {
    const { place, checkIn, checkOut, numberOfGuests } = req.body;

    // Validation
    if (!place || !checkIn || !checkOut || !numberOfGuests || isNaN(numberOfGuests)) {
      return res.status(400).json({ message: 'Invalid request. Missing or invalid fields.' });
    }

    // Calculate the number of nights
    const numberOfNights = calculateNumberOfNights(checkIn, checkOut);

    // Fetch the product details to get the nightly price
    const product = await Product.findById(place);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Calculate the total price
    const totalPrice = numberOfNights * product.price;

    // Create the booking
    const booking = await Booking.create({
      place,
      checkIn,
      checkOut,
      numberOfNights,
      numberOfGuests,
      price: totalPrice
    });

    // Send a success response
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Fetch products
const getBookings = async(req,res) => {
  try {
      const bookings = await Booking.find({})
      res.status(200).json(bookings)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}

//Fetch bookings by id
const getBookingsById = async(req,res) => {
  try {
      const {id} = req.params
      const booking = await Booking.findById(id)
      res.status(200).json(booking)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}

export { postBooking, getBookings, getBookingsById }
