import React, { useState }  from 'react';
import data from '../data';

const getData = () => data;
const storageBase = 'https://storage.googleapis.com/';


const ImageList = () => {
    const images = getData();
    const [filteredImages] = useState(images);

    return (
        <div className="image-list">
            {filteredImages.map( image => (
                <img className="image-item" src={storageBase+image} key={image} alt={image}></img>
            ))}
        </div>
    )
}


export default ImageList;