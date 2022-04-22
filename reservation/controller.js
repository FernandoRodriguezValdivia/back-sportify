const Reservation = require('./model')
const User = require('../user/model')
const Owner = require('../owner/model')
const SoccerField = require('../soccerField/model')
const main =require('../utils/mailer')
const html = require('../utils/template')

const joinTime = (arr) => {
    let timeJoined = []
    for(let el of arr){
      timeJoined.push(el.time)
    }
    return timeJoined
  }

const availability = (start, end) => {
    const schedule = []
  
    for(let i = start; i < end; i++){
      schedule.push(i)
    }
    return schedule
}

const finalArray = (arr1,arr2) => {
  const final = []

  for(let el of arr1){
    const obj = {}
    obj.hour = el
    if (arr2.includes(el)){
      obj.state='busy'
    } else {
      obj.state = 'availableNoSelected'
    }
    final.push(obj)
  }

  return final
}

const addIdModels = async (model, idModel, idReservation)=>{
    const document = await model.findById(idModel)
    const reservation = document.reservation.concat(idReservation)
    await model.findByIdAndUpdate(idModel, {reservation},{new: true})
}

const removeIdModels = async (model, idModel, idReservation)=>{
  const document = await model.findById(idModel)
  const reservation = document.reservation.filter(x => idReservation !== x.toString())
  await model.findByIdAndUpdate(idModel, {reservation})
}

exports.create = async(req,res)=>{
    const userId = req.id
    const soccerFieldId = req.params.id
    const owner = await Owner.find({soccerField: soccerFieldId})
    const ownerId = owner[0]._id
    const {data} = req.body
    const user = await User.findById(userId)
    const soccer = await SoccerField.findById(soccerFieldId)
    for(let item of data){
      let document = {
        ...item,
        userId,
        soccerFieldId,
        ownerId,
        nameLocal: soccer.name,
        direction: soccer.direction,
        nameUser: `${user.name} ${user.surname}`
      }
      let reservation = new Reservation(document)
      let save = await reservation.save()
      await addIdModels(User, userId, save._id)
      await addIdModels(Owner, ownerId, save._id)
      await addIdModels(SoccerField, soccerFieldId, save._id)
      const date = new Date([item.year,item.month,item.day].join()).toLocaleDateString().split('/')
      const data = `${date[1]}/${date[0]}/${date[2]}`
      main({mail: user.email, bhtml: html, canchita: soccer.name, horario: item.time, fecha: data}).catch(console.error)
    }    
    res.status(200).json({sucess: "reserva exitosa"})
}

exports.getAll = async(req,res)=>{
    const {soccerFieldId, day, month, year} = req.body
    const soccerField = await SoccerField.findById(soccerFieldId)
    const schema = availability(soccerField.start, soccerField.end)
    const ocupate = await Reservation.find({soccerFieldId,day,month,year})
    const hoursOcupate = joinTime(ocupate)
    const data = finalArray(schema, hoursOcupate)
    res.status(200).json(data)
}

exports.getUser = async(req,res)=>{
  const userId = req.id
  const reservations = await Reservation.find({userId})
  res.status(200).json({data: reservations})
}

exports.getOwner = async(req,res)=>{
  const ownerId = req.id
  const reservations = await Reservation.find({ownerId})
  res.status(200).json({data: reservations})
}

exports.deleteUser = async(req, res)=>{
  const userId = req.id
  const {id} = req.params
  const reser = await Reservation.findByIdAndDelete(id)
  const { ownerId,soccerFieldId }  = reser
  await removeIdModels(User, userId, id)
  await removeIdModels(Owner, ownerId, id)
  await removeIdModels(SoccerField, soccerFieldId, id)
  res.status(200).json({"message": "delete is sucess"})
}