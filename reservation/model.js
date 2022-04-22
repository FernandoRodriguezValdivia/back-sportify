const {Schema, model} = require('mongoose')
const schema = {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Owner'
    },
    soccerFieldId: {
        type: Schema.Types.ObjectId,
        ref: 'SoccerField'
    },
    day:{
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    time: 
        {
            type: Number,
            required: true
        },
    nameLocal: String,
    direction: String,
    nameUser: String
}

const modelSchema = Schema(schema)

const Reservation = model('Reservation', modelSchema)

module.exports = Reservation