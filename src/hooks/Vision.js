import {useState, useEffect} from 'react';
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
              .then(data => setFetchedData(prevData => [...prevData,  
                {   
                    labels: data.responses[0].labelAnnotations,
                    url:img 
                }]))
        );
     }, [imageArray, url]);
    return fetchedData;
};