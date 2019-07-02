const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const nodeSES = require('node-ses');
require('dotenv').config(); 

const htmlTemplate = (data) => {
  return `
    <div>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Message:</strong> ${data.message}</p>
    </div>
  `;
};

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
      }
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