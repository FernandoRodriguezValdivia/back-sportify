const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
    const token = req.headers.authorization.slice(7)
    const { id } = jwt.verify(token, "apple")
    req.id = id
    next()
}

module.exports = isAuth