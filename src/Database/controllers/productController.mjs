import Product from '../models/productModel.mjs'

//Fetch products
const getProducts = async(req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Fetch products by id
const getProductsById = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Post products
const postProducts = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

//Update product by id
const updateProducts = async(req,res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any products with this id ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Delete products by id
const deleteProducts =  async(req,res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `cannot find a product with this id ${id}`})
        }
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export { getProducts, getProductsById, postProducts, updateProducts, deleteProducts };