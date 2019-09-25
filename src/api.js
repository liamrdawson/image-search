import React, {Component} from 'react';
import data from './data';


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


//  2 Fetches data and triggers buildDataObject() with response as params
const getLabels = (path) => {
    const url = getGoogleVisionUrl();
    fetch((url), {
        method: 'POST',
        body: JSON.stringify(createRequestJSON([path]))
    }).then(response => response.json())
        .catch((err) => { console.log('error!', err); })
        .then(data => data.responses[0].labelAnnotations)
        .then(arr => this.buildDataObject(path, arr));
    }

//  3 Uses response params to construct state
const buildDataObject = (str, arr) => {
        this.setState(prevState => ({
            images: [
            ...prevState.images,
            {
                name: str,
                labels: arr.map(obj => obj.description),
                id: arr[0].mid
            }
            ]
        }));
    };
    
const api = {
    createRequestJSON, 
    getLabels, 
    buildDataObject
}

export default api;