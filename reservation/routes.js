const reservationRouter = require('express').Router()
const isAuth = require('../middleware/auth')
const controller = require('./controller')

reservationRouter.post('/create',isAuth,controller.create)
reservationRouter.get('/', controller.getAll)

module.exports = reservationRouter