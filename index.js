  const express = require("express")
  const app = express()
  const productRouter = require("./routes/productsRoutes")


  app.use("/products", productRouter)

  app.get("/", (req, res) => {
    res.send("Welcome Home")
  })

  app.use((req, res) => {
    res.send("Page not found")
  })


  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


