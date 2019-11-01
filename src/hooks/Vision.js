import React, {useState, useEffect} from 'react';
import data from '../data';
import api from '../api';

// Example custom hook...
export const useVision = (imageArray, dependencies) => {

    const [ fetchedData, setFetchedData ] = useState([]);
    const url = api.getGoogleVisionUrl();
    useEffect( () => {
        imageArray.forEach( img =>
            fetch((url), {
              method: 'POST',
              body: JSON.stringify(api.createRequestJSON([img]))
            }).then(response => response.json())
              .catch((err) => { console.log('error!', err); })
              .then(data => setFetchedData(prevData => [...prevData, data.responses[0]]))
        );
     }, dependencies);
     console.log(fetchedData)
    return fetchedData;
};