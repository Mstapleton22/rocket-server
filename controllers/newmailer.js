var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
// var pdfcrowd = require("pdfcrowd");
const PDFDocument =require('pdfkit')


module.exports.sendMailOne = (sender, receivers, data) => {
    
const doc = new PDFDocument();

doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
doc.end();

//     var pdfcrowd = require("pdfcrowd");

// // create the API client instance
// var client = new pdfcrowd.HtmlToPdfClient("demo", "ce544b6ea52a5621fb9d55f8b542d14d");

// // run the conversion and write the result to a file
// client.convertStringToFile(
//     "<html><body><h1>Hello World!</h1></body></html>",
//     "HelloWorld.pdf",
//     function(err, fileName) {
//         if (err) return console.error("Pdfcrowd Error: " + err);
//         console.log("Success: the file was created " + fileName);
//     });



var mailOptions = {
  from: sender,
  to: receivers,
  text: 'This is some text',
  html: '<b>This is some HTML</b>',
  attachments: [
    {   // encoded string as an attachment
        filename: 'text1.pdf',
        content: doc,
        encoding: 'base64'
    },
    {
        // use pregenerated MIME node
        raw: 'Content-Type: application/pdf\r\n' +
             'Content-Disposition: attachment;\r\n' +
             '\r\n' +
             doc
    },
    {   // define custom content type for the attachment
        filename: 'text3.pdf',
        content: doc,
        contentType: ' application/pdf  '
    },
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