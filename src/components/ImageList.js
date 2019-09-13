import React, { useState }  from 'react';
import data from '../data';

//Components
import Image from './Image';

const getData = () => data;
const storageBase = 'https://storage.googleapis.com/';


const ImageList = props => {

    const results = props.data;

    let images = results.map(image =>  
        <Image url={storageBase + image.name}/> 
    );

    return (
        <div className="image-list">
            {images}
        </div>
    )
}


export default ImageList;