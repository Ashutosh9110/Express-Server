  const express = require("express")
  const app = express()
  const productRouter = require("./routes/productsRoutes")
  const userRouter = require("./routes/userRoutes")
  // const cartRouter = require("./routes/cartRoutes")

  // app.use("/users", userRouter)


  app.use(express.static("public"))
  app.use(express.json())

  app.use("/api/products", productRouter)
  app.use("/users", userRouter)

  // app.use("/cart", cartRouter)

  app.get("/", (req, res) => {
    res.send("Welcome Home")
  })

  app.use((req, res) => {
    res.send("Page not found")
  })


  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


