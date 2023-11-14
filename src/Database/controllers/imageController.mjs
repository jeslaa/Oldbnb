import Image from "../schema/imageSchema.mjs";

//Fetch images
const getImages = async(req,res) => {
    try {
        const images = await Image.find({})
        res.status(200).json(images)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Fetch products by id
const getImageById = async(req,res) => {
    try {
        const {id} = req.params
        const image = await Image.findById(id)
        res.status(200).json(image)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Post Images
const postImages = async(req, res) => {
    try {
        const image = await Image.create(req.body)
        res.status(200).json(image)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

//Update images by id
const updateImages = async(req,res) => {
    try {
        const { id } = req.params
        const image = await Image.findByIdAndUpdate(id, req.body)
        if(!image){
            return res.status(404).json({message: `cannot find any images with this id ${id}`})
        }
        const updatedImage = await Image.findById(id)
        res.status(200).json(updatedImage)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Delete images by id
const deleteImages =  async(req,res) => {
    try {
        const { id } = req.params
        const image = await Image.findByIdAndDelete(id)
        if(!image){
            return res.status(404).json({message: `cannot find a image with this id ${id}`})
        }
        res.status(200).json(image)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getImages, getImageById ,postImages, updateImages, deleteImages}