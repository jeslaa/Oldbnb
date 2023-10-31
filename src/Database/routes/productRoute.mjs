import express from 'express'
import { getProducts, postProducts, getProductsById, updateProducts, deleteProducts } from '../controllers/productController.mjs'

const router = express.Router()

//Fetch products
router.get('/', getProducts)

//Fetch products by id
router.get('/:id', getProductsById)

//Post products
router.post('/', postProducts)

//Update product
router.put('/:id', updateProducts)

//Delete by id
router.delete('/:id', deleteProducts)

export default router;