var fs = require('fs');
var gcloud = require('gcloud');

// Your Google Project ID
var PROJECT_ID = 'bbh-ikea-dashboard';

// Your Service Account Key (created in https://console.cloud.google.com/apis/credentials and put into this directory)
var KEYFILE_NAME = 'keyfile.json';

// Initialize Google Cloud Storage API
var gcs = gcloud.storage({
	projectId: PROJECT_ID,
	keyFilename: KEYFILE_NAME, 
});

// Your Cloud Storage Bucket name
var BUCKET_NAME = 'cdn-test.bbh-labs.com.sg';

// Reference the bucket
var bucket = gcs.bucket(BUCKET_NAME);

// Choose the name of the file to be uploaded
var FILE_NAME = 'test.jpg';

// Upload the file to the bucket (the file will be publicly readable at https://storage.googleapis.com/[BUCKET_NAME]/[FILE_NAME])
bucket.upload(FILE_NAME, { predefinedAcl: 'publicRead' }, function(error, file) {
	if (error)
		console.error('Failed to upload file to Google Cloud Storage');
	else
		console.log('Successfully uploaded file to Google Cloud Storage');
});
