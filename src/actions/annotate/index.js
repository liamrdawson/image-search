export const createRequestJSON = paths => ({
  requests: paths.map(path => ({
    image: {
      source: {
        // DO NOT CHANGE! this is where the demo images are hosted
        imageUri: `gs://${path}`,
      },
    },
    // Hint: You need to ask for some features.
    // See https://cloud.google.com/vision/docs/request#json_request_format
  features: [
    {
      "type":"LABEL_DETECTION",
      "maxResults": 10
    }
  ],
  })),
});

export const getGoogleVisionUrl = () => {
  return `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_VISION_API_KEY}`;
};

const url = getGoogleVisionUrl();

const getLabels = (path) => {
  fetch((url), {
    method: 'POST',
    body: JSON.stringify(createRequestJSON([path]))
  }).then(response => response.json())
    .catch((err) => { console.log('error!', err); })
    .then(data => data = data.responses[0].labelAnnotations)
    .then(res => console.log(res));
}

getLabels('interview-resources/office-images/sendai_img_gallery04.jpg');