const mongoose = require('mongoose')

const productschema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a product name"]
        },
        description:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        published:{
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ["Men", "Women", "Teens"]
        }
        
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('products', productschema)
module.exports = Product
