import {useState, useEffect} from 'react';

// Example custom hook...
export const useVision = (imageArray, dependencies) => {

    const [ fetchedData, setFetchedData ] = useState([]);

    const createRequestJSON = paths => ({
        requests: paths.map(path => ({
            image: {
            source: {
                // DO NOT CHANGE! this is where the demo images are hosted
               // imageUri: `${path}`
                imageUri: path,
            },
            },
            //REQUEST FEATURES FROM VISION API
            features: [
            {
                "type":"LABEL_DETECTION",
                "maxResults": 200
            },
            {
                "maxResults": 50,
                "type": "FACE_DETECTION"
            }
            ]
        }))
    });

    const getGoogleVisionUrl = () => {
        return `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_VISION_API_KEY}`;
    };
    const url = getGoogleVisionUrl();

    useEffect( () => {
        function fetchApi(imageArray)  {
            imageArray.forEach( img =>
                fetch((url), {
                  method: 'POST',
                  body: JSON.stringify(createRequestJSON([img]))
                }).then(response => response.json())
                  .catch((err) => { console.log('error!', err); })
                  .then(data => setFetchedData(prevData => [...prevData,  
                    {   
                        name: img, 
                        labels: ["All", data.responses[0].labelAnnotations.map(obj => obj.description)].flat(),
                        id: data.responses[0].labelAnnotations[0].mid,
                        face: null
                    }]))
            );
        }
        fetchApi(imageArray);
     }, []);
     return fetchedData;
};