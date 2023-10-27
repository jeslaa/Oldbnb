import express  from 'express'
import mongoose from 'mongoose';

const app = express()

//routes

app.get('/', (req, res) => {
    res.send('Hello node api')
})


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