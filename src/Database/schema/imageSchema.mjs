import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
    {
        imageName: {
            type: String,
            required: [true]
        },

        image: [{
            type: String,
            required: [true, 'Image']
        }]
    },
    {
        timestamps: true
    }
)

const Image = mongoose.model('Image', imageSchema);

export default Image;