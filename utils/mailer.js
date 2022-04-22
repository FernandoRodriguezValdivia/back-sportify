"use strict";
const nodemailer = require("nodemailer");

async function main({mail, bhtml, canchita, horario}) {
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
      html: bhtml(canchita, horario), // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

module.exports=main