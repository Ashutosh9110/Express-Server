const { sendErrorResponse, noResonseError } = require("../utils/response")

const getAllUser = (req, res, next) => {

    try {
      const user = req.params.id
      if(user > 10) {
        throw err
        // return sendErrorResponse(res, {message:"User not found", statusCode:404})
    } 
    return noResonseError(res, user, 200)
  }  catch (error) {

    return sendErrorResponse(res, err)

  }
}

const addUser = (req, res, next) => {
  try {
    const { name, email } = req.body
    if(!name || !email ) {
      let err = new Error("Name and email are requierd")
      err.statusCode = 400
      throw err
        // return sendErrorResponse(res, { message:"Name and email are requierd", statusCode:400})
        }
      const user = { id: 1, name, email }
      return noResonseError(res, user, 201)
  } catch (error) {
      return sendErrorResponse(res, error)
  }

}

const getUserById = (req, res) => {
  const id = req.params.id
  res.send(`Fetching user with ID: ${id}`)
}


module.exports = {
  getAllUser,
  addUser,
  getUserById
}