
const getCartById = (req, res) => {
  const userId = req.params.id
  res.send(`Fetching cart for user with ID: ${userId}`)
}

const addProductsToCartById = (req, res) => {
  const userId = req.params.id
  res.send(`Adding product to cart for user with ID: ${userId}`)
}


module.exports = {
  getCartById, addProductsToCartById
}