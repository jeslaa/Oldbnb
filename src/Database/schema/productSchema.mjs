import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, 'Please enter a product name']
        },
        price: {
            type: Number,
            required: [true, 'Please enter a price']
        },
        description: {
            type: String,
            required: [true, 'You need to enter a description']
        },
        imageUrl: [{
            type: String,
            required: [true, 'Image']

        }]
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

export default Product;
