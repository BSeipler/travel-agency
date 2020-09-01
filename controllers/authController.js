const jwt = require('jsonwebtoken')

exports.verifyToken = async headers => {
  try {
    // extract the token from the header
    const token = headers.split(' ')[1]
    // verified the token and decoded it
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    console.log(error.message)
  }
}

exports.createToken = async (id, admin) => {
  try {
    // create the payload for the token
    let payload
    if (admin) {
      payload = {
        id,
        admin
      }
    } else {
      payload = {
        id
      }
    }
    // create the token
    const token = await jwt.sign(payload, process.env.JWT_SECRET)
    return token
  } catch (error) {
    console.log(error.message)
  }
}
