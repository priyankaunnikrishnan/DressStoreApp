const express = require('express')
const config = require('./config/config.js')
const cors = require('cors')
const mongoose = require('mongoose')
const productroute = require('./routes/product.routes.js')
const categoryroute = require('./routes/category.routes.js')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res, next) => {
    res.json({"message":"Welcome to DressStore Application."})
})

app.use('/api/products', productroute)
app.use('/api/category', categoryroute)

mongoose.connect(config.mongoUri)
.then(() =>{
    console.log('connected to mongoDB')

    app.listen(config.port, () =>{
        console.log(`Dress store app listening to port ${config.port}`)
    })

}).catch((error) =>{
    console.log(error)
})

