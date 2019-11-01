import React, {useState, useEffect} from 'react';
import data from '../data';
import api from '../api';

// Example custom hook...
export const useVision = (imageUrl, dependencies) => {

    const imagesArray = data;
    const [ images, setImages ] = useState([]);
    const [ fetchedData, setFetchedData ] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
            .then(data => data.json())
            .then(data => setFetchedData(data))
     }, dependencies);
     console.log(fetchedData)

    return fetchedData;

    
};