const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');
const PDFDocument =require('pdfkit')
const emailTemplate = require('../emailTemplate')


module.exports.sendMailOne = (sender, receivers, data) => {

var mailOptions = {
  from: sender,
  to: receivers,
  text: `Waitlist application for ${data.parent_name[0]}`,
  html: `<b>Waitlist application for ${data.parent_name[0]}</b>`,
  attachments: [
    {   
        filename: `W.A. ${data.parent_name}`,
        content: emailTemplate.waitinglist(data),
        encoding: 'base64'
    }
  ]
};
function callback(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent: ' + info.response);
  }
}

// Send e-mail using AWS SES
mailOptions.subject = `W.A for ${data.parent_name[0]}`;
var sesTransporter = nodemailer.createTransport(sesTransport({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: 'us-east-1'
}));

let sendPromise = sesTransporter.sendMail(mailOptions)  

return sendPromise
    .then((data) => data,
    console.log('the data', data, data.name)
    )
    .catch((err) => {
      throw new Error(err);
    });
  

}