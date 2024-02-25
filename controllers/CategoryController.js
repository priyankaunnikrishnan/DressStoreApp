const Category = require("../models/categoryModel.js")
const app = require('../server.js')




const createCategory = async(req,res)=>{
    try {
        const addcategory = await Category.create(req.body)
        res.status(201).json(addcategory)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

module.exports = {createCategory}