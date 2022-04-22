const {Schema, model} = require('mongoose')
const {hash} = require('bcrypt')

const schema = {
    'email': {
        type: String, 
        required: true
    },
    'password':{
        type: String, 
        required: true
    },
    'reservation': [{
        type: Schema.Types.ObjectId,
        ref: "Reservation"
    }],
    'name':{
        type: String, 
        required: true
    },
    'surname':{
        type: String, 
        required: true
    },
    'soccerField':[{
        type: Schema.Types.ObjectId,
        ref: "SoccerField"
    }],
    'localName':{
        type: String,
        required: true
    },
    'ubication':{
        type: String,
        required: true
    }
}

const ownerSchema = Schema(schema)

ownerSchema.pre('save', async function save(next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await hash(this.password, 10);
    }
    next();
  }
);

ownerSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        delete returnedObject.password
        delete returnedObject.__v
    }
})

const Owner = model('Owner',ownerSchema)

module.exports = Owner