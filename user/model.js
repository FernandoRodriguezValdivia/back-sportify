const mongoose = require('mongoose')
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
    'name':{
        type: String, 
        required: true
    },
    'surname':{
        type: String, 
        required: true
    },
    'reservation': [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation"
    }]
}

const userSchema = mongoose.Schema(schema)

userSchema.pre('save', async function save(next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await hash(this.password, 10);
    }
    next();
  }
);

userSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        delete returnedObject.password
        delete returnedObject.__v
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User