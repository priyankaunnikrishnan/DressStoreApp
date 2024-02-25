const express = require('express')
const {getallProducts, createProduct, deleteallProducts, getproductbyid, updateproductbyid, deleteproductbyid, getproductContainKW} = require('../controllers/ProductController.js')


const router = express.Router()
router.route('/').get(getallProducts).post(createProduct).delete(deleteallProducts)
router.route('/:id').get(getproductbyid).put(updateproductbyid).delete(deleteproductbyid)
router.route('/search/value').get(getproductContainKW)

module.exports = router