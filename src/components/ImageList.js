import React from 'react';

//Components
import Image from './Image';

const storageBase = 'https://storage.googleapis.com/';

const ImageList = props => {

    const results = props.data;

    // let images = results.map(image =>  
    //     <Image url={storageBase + image.name} key={image.id + image.name}/> 
    // );

    let images = results.filter(image => image.labels.indexOf("Conversation") > -1).map(finding => 
        <Image url={storageBase + finding.name} key={finding.id + finding.name}/> 
        );

    return (
        <div className="image-list">
            {images}
        </div>
    )
}


export default ImageList;