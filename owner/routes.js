const ownerRouter = require('express').Router()
const controller = require('./controller')

ownerRouter.post('/signup', controller.create)
ownerRouter.post('/signin', controller.signin)

module.exports = ownerRouter