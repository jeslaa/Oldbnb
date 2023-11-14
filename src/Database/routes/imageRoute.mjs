import express from 'express'
import { getImages, getImageById, postImages, updateImages, deleteImages} from '../controllers/imageController.mjs'

const router = express.Router()

//Fetch Images
router.get('/', getImages)

//Fetch Images by id
router.get('/:id', getImageById)

//Post Images
router.post('/', postImages)

//Update Images
router.put('/:id', updateImages)

//Delete Images by id
router.delete('/:id', deleteImages)

export default router;