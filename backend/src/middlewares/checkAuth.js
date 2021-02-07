const jwt = require('jsonwebtoken')
const JWT_KEY = 'itssecretso'

module.exports = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.header('auth'), JWT_KEY)
    req.userData = decoded
    next()
  } catch (error) {
    return res.status(401).json('Auth failed')
  }
}