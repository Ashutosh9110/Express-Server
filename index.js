const express = require("express")
const app = express()


app.get("/welcome/:username", (req, res) => {
  const username = req.params.username
  const role = req.query.role

  res.send(`Hello ${username}, your role is ${role}`)
})

app.listen(4000, () => {
  console.log("Server running on PORT 4000");
})


