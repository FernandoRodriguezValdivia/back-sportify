const {Schema, model} = require('mongoose')
const schema = {
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Owner'
    },
    name: {
        type: String,
        required: true
    },
    reservation: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    }],
    start: {
            type: Number,
            required: true
    },
    end: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    }
}

const modelSchema = Schema(schema)

const SoccerField = model('SoccerField', modelSchema)

module.exports = SoccerField