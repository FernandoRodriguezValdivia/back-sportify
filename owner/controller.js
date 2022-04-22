const Model = require('./model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const verifiedPass = async (passwordSent, passwordStored) => {
    const isValid = await bcrypt.compare(passwordSent, passwordStored)
    return isValid
}

exports.create = async (req, res) =>{
    const document = req.body
    const model = new Model(document)
    const saved = await model.save()
    res.status(200).json(saved)
}

exports.signin = async (req, res) => {
    const { email, password } = req.body
    try{
        const document = await Model.findOne({email})
        const isVerified = await verifiedPass(password, document.password)

        if(isVerified){
            const token = jwt.sign({ id: document._id }, "apple")
            res.status(200).json({token, name: document.name, type: 'owner'})
        } else{
            res.status(403).json({"message": "Correo o contraseña incorrecta"})
        }
    } catch(e){
        res.status(403).json({"message": "Correo o contraseña incorrecta"})
    }
}
