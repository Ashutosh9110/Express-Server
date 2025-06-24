
const express = require("express")
const router = express.Router()
// const { getProducts, getProductById, addProduct } = require("../controllers/productController")
const productController = require("../controllers/productController")

router.get("/", productController.getProducts)
router.get("/:id", productController.getProductById)
router.post("/", productController.addProduct)






module.exports = router