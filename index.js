  const express = require("express")
  const app = express()
  const cartRouter = require("./routes/cartRoutes")
  const productRouter = require("./routes/productsRoutes")
  const userRouter = require("./routes/usersRoutes")


  app.use("/cart", cartRouter)
  app.use("/products", productRouter)
  app.use("/users", userRouter)

  app.get("/", (req, res) => {
    res.send("Welcome Home")
  })

  app.use((req, res) => {
    res.send("Page not found")
  })


  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


