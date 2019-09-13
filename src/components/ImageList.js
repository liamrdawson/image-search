import React from 'react';

//Components
import Image from './Image';

const storageBase = 'https://storage.googleapis.com/';

const ImageList = props => {

    const results = props.data;

    let images = results.map(image =>  
        <Image url={storageBase + image.name} key={image.id + image.name}/> 
    );

    return (
        <div className="image-list">
            {images}
        </div>
    )
}


export default ImageList;