const aws = require('aws-sdk');
const express = require('express');
const authRequired = require('../middleware/authRequired');

const router = express.Router();

aws.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.S3_BUCKET;

router.post('/', authRequired, async (req, res) => {
  console.log(req.body);
  const s3 = new aws.S3();
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 5000,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      fileName,
      fileType,
    };

    res.json({ success: true, ...returnData });
  });
});

module.exports = router;
