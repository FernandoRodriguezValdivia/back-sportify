require('./db')
const express = require('express')
const cors = require('cors')

const ownerRouter = require('./owner/routes')
const userRouter = require('./user/routes')
const reservationRouter = require('./reservation/routes')
const soccerFieldRouter = require('./soccerField/routes')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/soccerField', soccerFieldRouter)
app.use('/api/reservation',reservationRouter)

app.get('/', (req, res) => {
    const text = '<h1>Hola</h1>'
    res.send(text)
})

const server = app.listen(PORT, ( ) => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})