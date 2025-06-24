  const express = require("express")
  const app = express()
  const orderRouter = require("./routes/orders")
  const userRouter = require("./routes/users")
  // app.use((req, res, next) => {
  //   console.log(`${req.method} sent request to ${req.url}`);
  //   next()
  // })

  app.use("/products", orderRouter)
  app.use("/users", userRouter)




  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


