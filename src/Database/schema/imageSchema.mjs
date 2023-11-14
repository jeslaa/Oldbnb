import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: [true, 'Image']
        }
    },
    {
        timestamps: true
    }
)

const Image = mongoose.model('Image', imageSchema);

export default Image;