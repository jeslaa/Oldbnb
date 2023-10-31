import express  from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import productRoute from './Database/routes/productRoute.mjs'
import userRoute from './Database/routes/userRoute.mjs'
import errorMiddleware from './Database/middleware/errorMiddleware.mjs';

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

//Routes
app.use('/api/products', productRoute)

app.use('/api/users', userRoute)

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