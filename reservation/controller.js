const Reservation = require('./model')
const User = require('../user/model')
const Owner = require('../owner/model')
const SoccerField = require('../soccerField/model')

const joinTime = (arr) => {
    let timeJoined = []
    for(let el of arr){
      timeJoined.push(...el.time)
    }
    return timeJoined
  }

const availability = (start, end) => {
    const schedule = []
  
    for(let i = start; i <= end; i++){
      const obj = {}
      obj.hour = i
      obj.isUsed = false
      schedule.push(obj)
    }
  
    return schedule
  }

const addIdModels = async (model, idModel, idReservation)=>{
    const document = await model.findById(idModel)
    const reservation = document.reservation.concat(idReservation)
    await model.findByIdAndUpdate(idModel, {reservation},{new: true})
}

exports.create = async(req,res)=>{
    const userId = req.id
    const {ownerId, soccerFieldId} = req.body
    const document = {
        ...body,
        userId
    }
    const reservation = new Reservation(document)
    const save = await reservation.save()
    await addIdModels(User, userId, save._id)
    await addIdModels(Owner, ownerId, save._id)
    await addIdModels(SoccerField, soccerFieldId, save._id)
    res.status(200).json({succes: true, save})
}

exports.getAll = async(req,res)=>{
    const {soccerFieldId, day, month, year} = req.body
    const soccerField = await SoccerField.findById(soccerFieldId)
    const schema = availability(soccerField.start, soccerField.end)
    const ocupate = await Reservation.find({soccerFieldId,day,month,year})
    const hoursOcupate = joinTime(ocupate)

}