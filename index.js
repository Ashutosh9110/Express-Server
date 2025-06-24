  const express = require("express")
  const app = express()
  // const booksRouter = require("./routes/orders")
  // const userRouter = require("./routes/users")
  // const booksRouter = require("./routes/booksRoutes")
  const studentRouter = require("./routes/studentsRoutes")
  const courseRouter = require("./routes/coursesRoutes")


  app.use("/students", studentRouter)
  app.use("/courses", courseRouter)

  app.get("/", (req, res) => {
    res.send("Welcome Home")
  })

  app.use((req, res) => {
    res.send("Page not found")
  })


  app.listen(4000, () => {
    console.log("Server running on PORT 4000");
  })


