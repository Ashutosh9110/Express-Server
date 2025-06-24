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

app.get("/welcome", libraryEntry, (req, res) => {
  res.send(`<h1>Welcome ${req.user}</h1>`);
})
  

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
})