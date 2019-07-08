var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
// var pdfcrowd = require("pdfcrowd");
const PDFDocument =require('pdfkit')
const emailTemplate = require('../emailTemplate')


module.exports.sendMailOne = (sender, receivers, data) => {

var mailOptions = {
  from: sender,
  to: receivers,
  text: 'This is some text',
  html: '<b>This is some HTML</b>',
  attachments: [
    {   // encoded string as an attachment
        filename: 'text1.pdf',
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
mailOptions.subject = 'Nodemailer SES transporter';
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