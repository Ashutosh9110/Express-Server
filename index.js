  const express = require("express")
  const app = express()
  // const booksRouter = require("./routes/orders")
  // const userRouter = require("./routes/users")
  const booksRouter = require("./routes/booksRoutes")


  app.use("/books", booksRouter)




  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


