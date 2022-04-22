const userRouter = require('express').Router()
const controller = require('./controller')

userRouter.post('/signup', controller.create)
userRouter.post('/signin', controller.signin)

module.exports = userRouter