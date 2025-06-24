const express = require("express")
const router = express.Router()



router.get("/", (req, res) => {
  res.send(" List all courses.")
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  res.send(`The course ID is ${id}`)
})

module.exports = router