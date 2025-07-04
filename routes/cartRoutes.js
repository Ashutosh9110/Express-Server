const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cartController")

router.get("/:id", cartController.getCartById)
router.post("/:id", cartController.addProductsToCartById)


module.exports = router