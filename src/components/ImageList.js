import React from 'react';

//Components
import Image from './Image';

const storageBase = 'https://storage.googleapis.com/';

const ImageList = props => {

    const results = props.data;
    const searchText = props.searchTerm;

    const images = results.filter(image => image.labels.indexOf(searchText) > -1).map(finding => 
        <Image url={storageBase + finding.name} key={finding.id + finding.name}/> 
        );
    return (
        <React.Fragment>
            <div className="image-main">
                {images[0]}
            </div>
            <div className="image-list">
                {images}
            </div>
        </React.Fragment>
    )
}


export default ImageList;