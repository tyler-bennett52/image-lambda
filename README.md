# image-lambda (Lab 17)

Repo to house a copy of an AWS lambda.

## Author: Tyler Bennett

### Problem Domain

Build a lambda function that updates a list of images in a JSON file.

### Access to the file and how it updates

Check out the images.json file here => [Images JSON Object File (Download)](https://ttb-d51-lab17-bucket.s3.amazonaws.com/images.json).

The name of my publically accessible bucket is 'ttb-d51-lab17-bucket'. I don't know which link to share so I will try [this one](https://ttb-d51-lab17-bucket.s3.amazonaws.com/).

Lambda function is set to trigger whenever a .png file is uploaded. I chose .png because of the absurd number of screencaps I have and those are .png at least on Windows. You will know if the function worked by going to the images.json file after an upload and checking for your file name amongst the other images.

### Attribution

Borrowed heavily from demo code to get the basic functionality of the lambda function (Is saying lambda function like saying ATM machine??).
