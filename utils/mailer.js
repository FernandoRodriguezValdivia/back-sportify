"use strict";
const nodemailer = require("nodemailer");

async function main({mail, bhtml, canchita, horario, fecha}) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
      auth: {
        user: 'rsantacruz839@gmail.com', 
        pass: 'gvpyojwrmgpkrkuv', 
      },
      logger: true,
transactionLog: true
    });
  transporter.verify().then(()=> console.log('email enviado'))
    let info = await transporter.sendMail({
      from: '"Sportify! ⚽" <rsantacruz839@gmail.com>', // sender address
      to: mail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: bhtml(canchita, horario,fecha), // html body
    });
  }

module.exports=main