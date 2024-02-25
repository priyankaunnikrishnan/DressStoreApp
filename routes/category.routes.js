const express = require('express')
const {createCategory} = require('../controllers/CategoryController.js')


const router = express.Router()
router.route('/').post(createCategory)
module.exports = router