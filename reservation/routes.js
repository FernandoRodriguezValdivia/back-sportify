const reservationRouter = require('express').Router()
const isAuth = require('../middleware/auth')
const controller = require('./controller')

reservationRouter.post('/create/:id',isAuth,controller.create)
reservationRouter.post('/', controller.getAll)

module.exports = reservationRouter