import express  from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import productRoute from './Database/routes/productRoute.mjs'
import errorMiddleware from './Database/middleware/errorMiddleware.mjs';

const app = express()

app.use(express.json())
app.use(cors())

//Routes
app.use('/api/products', productRoute)

app.use(errorMiddleware)

//Connecting to mongodb
mongoose.connect('mongodb+srv://Admin:Bytmig123@oldbnbapi.8n47zpi.mongodb.net/Products?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log('Running on: http://localhost:3000')
    })
    console.log('Connected to mongodb')
}).catch(() => {
    console.log(Error)
})

export default app