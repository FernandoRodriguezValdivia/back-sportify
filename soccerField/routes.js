const controller = require('./controller')
const soccerFieldRouter = require('express').Router()
const isAuth =require('../middleware/auth')

soccerFieldRouter.post('/create',isAuth,controller.create)
soccerFieldRouter.patch('/update/:id',isAuth,controller.update)
soccerFieldRouter.delete('/delete/:id',isAuth,controller.delete)
soccerFieldRouter.get('/',isAuth, controller.getOwner)
soccerFieldRouter.get('/all', controller.getAll)

module.exports = soccerFieldRouter