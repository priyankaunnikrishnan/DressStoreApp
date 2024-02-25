const Product = require('../models/productsModel.js')
const app = require('../server.js')

//getall products
const getallProducts = async(req, res)=>{           
    try {
        const getproducts = await Product.find({}) //{} to get all values
        res.status(200).json(getproducts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//add new product 
const createProduct = async(req,res)=>{
    try {
        const addproduct = await Product.create(req.body)
        res.status(201).json(addproduct)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

//delete all products
const deleteallProducts = async(req,res)=>{
    try {
        const removeproduct = await Product.deleteMany({})
        res.status(200).json(removeproduct)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const getproductbyid = async(req,res)=>{
    try {
        const {id} = req.params
        const productbyid = await Product.findById(id)
        res.status(200).json(productbyid)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const updateproductbyid = async(req,res)=>{
    try {
        const {id} = req.params
        const getproduct = await Product.findByIdAndUpdate(id,req.body)
        if (!getproduct){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        const updateproduct = await Product.findById(id)
        res.status(200).json(updateproduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const deleteproductbyid = async(req,res)=>{
    try {
        const {id} = req.params
        const deleteproduct = await Product.findByIdAndDelete(id,req.body)
        if (!deleteproduct){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        res.status(200).json(deleteproduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

const getproductContainKW = async (req, res) => {
    try {
      const  keyw = req.query.name
      const query = { name: { $regex: keyw, $options: 'i' } }
      const products = await Product.find(query)
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

module.exports = {getallProducts, createProduct, deleteallProducts, getproductbyid, updateproductbyid, deleteproductbyid, getproductContainKW}
