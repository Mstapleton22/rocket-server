let aws = require('aws-sdk'); 
// const nodeSES = require('node-ses');
const PDFDocument =require('pdfkit')
// const doc = new PDFDocument
// var doc = new jsPDF()
// import mailcomposer from 'mailcomposer';
require('dotenv').config(); 
// const SES = require('aws-sdk/clients/ses')
const mailcomposer = require('mailcomposer')
// import mailcomposer from 'mailcomposer';
let nodemailer = require("nodemailer")


const htmlTemplate = (data) => {
  return `
    <head>
    <title></title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
    <script>
      var element = document.getElementById('element-to-print');
      html2pdf(element);
    </script>
    </head>
    <body>
    <div id="element-to-print">
     <h3>Hello, this is a H3 tag</h3>

    <p>a pararaph</p>
    </div>
<div id="editor">
<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
</div>
<button id="cmd">Generate PDF</button>

    </body>
  `;
};


// var doc = new jsPDF({
//   orientation: 'landscape',
//   unit: 'in',
//   format: [4, 2]
// })
 
// doc.text('Hello world!', 1, 1)
// doc.save('two-by-four.pdf')

// // let pdfConverted = doc(htmlTemplate)
// let buff = new Buffer(doc);  

// let base64data = buff.toString('base64');


// doc.fontSize(8)

// const documentSending = (data) =>
// doc.text(`This text is centered. ${data.naem}`, {
//   width: 410,
//   align:'left'
// })


module.exports.sendMail = (sender, receivers, data) => {
  
  const doc = new PDFDocument();

  aws.config.update({region: 'us-east-1'});
  doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
  doc.end();
  // stream.on('finish', function() {
  //   iframe.src = stream.toBlobURL('application/pdf');
  // });

   
  doc.text('Hello world!', 1, 1)
  // doc.save('two-by-four.pdf')
  // let buff = new Buffer(doc);  

  // let base64data = buff.toString('base64');

  // var ses = new AWS.SES();

  // return Promise.resolve().then(() => {
  //   var params = {
  //     RawMessage: { /* required */
  //       Data: Buffer.from('htssdfdsf')
  //       // Data: 'maybe this works'
  //       /* Strings will be Base-64 encoded on your behalf */ /* required */
  //     },
  //     // ConfigurationSetName: 'STRING_VALUE',
  //     Destinations: ['jculver1900@gmail.com'],
  //     // [
  //     //   receivers,
  //     //   /* more items */
  //     // ],
  //     // FromArn: 'jculver1900@gmail.com',
  //     // ReturnPathArn: 'jculver1900@gmail.com',
  //     Source: 'jculver1900@gmail.com',
  //     // SourceArn: 'jculver1900@gmail.com',
  //     // Tags: [
  //     //   {
  //     //     Name: 'STRING_VALUE', /* required */
  //     //     Value: 'STRING_VALUE' /* required */
  //     //   },
  //     //   /* more items */
  //     // ]
  //   };
  //   ses.sendRawEmail(params, function(err, data) {
  //     if (err) console.log(err, err.stack, 'booo'); // an error occurred
  //     else     console.log(data, 'it worked!');           // successful response
  //   });


  // const params = {
  //   Destination: {
  //     ToAddresses: receivers
  //   },
  //   Message: {
  //     Subject: {
  //       Charset: 'UTF-8',
  //       Data: 'Website Enquiry'
  //     },
  //     Body: {
  //       Html: {
  //         Charset: "UTF-8",
  //         Data: htmlTemplate(data)
  //       }
  //     },
  //   },
  //   Source: sender,
  // };

  // const sendPromise = new AWS.SES().sendEmail(params).promise();

  // return sendPromise
  //   .then((data) => data,
  //   console.log('the data', data, data.name)
  //   )
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
  // })

  let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});
transporter.sendMail({
  from: 'jculver1900@gmail.com',
  to: 'jculver1900@gmail.com',
  subject: data.name,
  text: 'I hope this message gets sent!',
  ses: { // optional extra arguments for SendRawEmail
      Tags: [{
          Name: 'tag name',
          Value: 'tag value'
      }]
  }
}, (err, info) => {
  console.log(info.envelope);
  console.log(info.messageId);
});

}
