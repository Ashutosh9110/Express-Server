const express = require("express")
const app = express()


app.use("/library", (req, res, next) => {
  res.send("Entry to library");
  next()
})


const libraryEntry = (req, res, next) => {
  req.user = "Guest"
  next()
} 

app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders")
})

app.post("/orders", (req, res) => {
  res.send("A new order has been created.")
})

app.get("/users", (req, res) => {
  res.send("Here is the list of all users.")
})

app.post("/users", (req, res) => {
  res.send("A new user has been added.")
})


app.listen(3000, () => {
  console.log("Server running on PORT 3000");
})