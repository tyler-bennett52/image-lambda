const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  let fileInfo = {
    Bucket: 'ttb-d51-lab17-bucket',
    Key: 'images.json',
  };

  let imageArray = null;
  try {
    let data = await s3.getObject(fileInfo).promise();
    imageArray = JSON.parse(data.Body.toString());
    console.log(imageArray);
  } catch (error) {
    imageArray = [];
  }

  const metaData = {
    name: event.Records[0].s3.object.key,
    size: event.Records[0].s3.object.size,
    type: '.png',
  };

  let isDuplicate = false;
  let duplicateIndex = null;
  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].name === metaData.name) {
      isDuplicate = true;
      duplicateIndex = i;
    }
  }

  if (isDuplicate) {
    imageArray[duplicateIndex] = metaData;
    console.log(`Image name ${imageArray[duplicateIndex].name} already exists, updating instead of inserting`);
    fileInfo.Body = JSON.stringify(imageArray);
  } else {
    imageArray.push(metaData);
    fileInfo.Body = JSON.stringify(imageArray);
  }
  await s3.putObject(fileInfo).promise();

  const response = {
    statusCode: 200,
    body: imageArray,
  };
  return response;
};
