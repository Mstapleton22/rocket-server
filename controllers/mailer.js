const AWS = require('aws-sdk'); // Load the SDK for JavaScript
// const nodeSES = require('node-ses');
const PDFDocument =require('pdfkit')
// const doc = new PDFDocument
// var doc = new jsPDF()
// import mailcomposer from 'mailcomposer';
require('dotenv').config(); 

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



// doc.fontSize(8)

// const documentSending = (data) =>
// doc.text(`This text is centered. ${data.naem}`, {
//   width: 410,
//   align:'left'
// })


module.exports.sendMail = (sender, receivers, data) => {

  AWS.config.update({region: 'us-east-1'});

  const params = {
    Destination: {
      ToAddresses: receivers
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Website Enquiry'
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlTemplate(data)
        }
      },
      // Attachments: [
        
      //     documentSending(data)
        
      // ]
    },
    Source: sender,
  };

  const sendPromise = new AWS.SES().sendEmail(params).promise();

  return sendPromise
    .then((data) => data,
    console.log('the data', data, data.name)
    )
    .catch((err) => {
      throw new Error(err);
    });
};