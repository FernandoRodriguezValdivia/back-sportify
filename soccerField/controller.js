const Owner = require('../owner/model')
const SoccerField = require('../soccerField/model')
const cloudinary = require('../config/cloudinary')

exports.create = async (req, res)=>{
    const id = req.id
    const {image, data} = req.body
    const img = await cloudinary.uploader.upload(image, {upload_preset: 'cgdgrspt'});
    const owner = await Owner.findById(id)
    const document = {
        ...data,
        ownerId: id,
        image: img.url,
        imageId: img.public_id,
        direction: owner.ubication
    }
    const model = new SoccerField(document)
    const saved = await model.save()
    const update = owner.soccerField.concat(saved._id)
    await Owner.findByIdAndUpdate(id, {soccerField: update})
    res.status(200).json({succes: true, soccerField: saved})
}

exports.update = async (req, res)=>{
    const ownerId = req.id
    const { id } = req.params
    const data = req.body
    const document = {
        ...data
    }
    const owner = await Owner.findById(ownerId)
    const soccerId = owner.SoccerField
    if(!soccerId.includes(id)){
        res.status(400).json({
            "message": "no auth",
        })
    }else{
        await SoccerField.findByIdAndUpdate(id, document)
        res.status(200).json({succes: true})
    }
}

exports.delete = async (req, res) => {
    const ownerId = req.id
    const { id } = req.params
    const owner = await Owner.findById(ownerId)
    const soccerId = owner.SoccerField
    if(!soccerId.includes(id)){
        res.status(400).json({
            "message": "no auth",
        })
    }else{
        await SoccerField.findByIdAndDelete(id)
        const soccerField = soccerId.filter(x => x.toString() !== id)
        await Owner.findByIdAndUpdate(ownerId, {soccerField})
        res.status(200).json({succes: true})
    }
}

exports.getOwner = async (req, res)=>{
    const ownerId = req.id
    const soccer = await SoccerField.find({ownerId})

    res.status(200).json(soccer)
}

exports.getAll =async (req, res)=>{
    const soccer = await SoccerField.find({})

    res.status(200).json(soccer)
}

