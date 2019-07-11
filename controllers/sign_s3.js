require('dotenv').config(); 
var aws = require('aws-sdk');

aws.config.update({
  region: 'us-west-1', 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const S3_BUCKET = process.env.S3_BUCKET

exports.sign_s3 = (req, res) => {


  const s3 = new aws.S3();  
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 120,
    ContentType: fileType,
    ACL: 'public-read'
  };

s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      res.json({success: false, error: err})
      return;
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
     res.json({success:true, data:{returnData}});
  });
}
