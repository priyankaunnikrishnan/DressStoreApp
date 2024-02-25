const mongoose = require('mongoose')

const categoryschema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        }
    }
)

const Category = mongoose.model('categories', categoryschema)
module.exports = Category

