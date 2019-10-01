import React, {Component} from 'react';
import data from './data';

const images = data;


//  1A Specify data to be returned by API, use in getLabels
const createRequestJSON = paths => ({
    requests: paths.map(path => ({
        image: {
        source: {
            // DO NOT CHANGE! this is where the demo images are hosted
            imageUri: `gs://${path}`,
        },
        },
        //REQUEST FEATURES FROM VISION API
        features: [
        {
            "type":"LABEL_DETECTION",
            "maxResults": 50
        }
        ]
    }))
});

//  1B Provides url for each image in data, is used by getLabels
const getGoogleVisionUrl = () => {
    return `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_VISION_API_KEY}`;
};
    

const api = {
    getGoogleVisionUrl,
    createRequestJSON
}

export default api;