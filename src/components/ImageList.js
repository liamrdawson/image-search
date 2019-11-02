import React, {useContext, useState} from 'react';
import {SearchContext} from '../context/SearchContext';


//Components
import Image from './Image';

const TheImageList = (props) => {

    const [searchTerm] = useContext(SearchContext);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageclick = e => {
        setSelectedImage(e.target.src);
    }

    const results = props.data;
    const images = results.filter(image => image.labels.indexOf(searchTerm) > -1)
        .map(finding =>  <Image url={finding.name} key={finding.id + finding.name} handleImageclick={handleImageclick}/> 
    );
    
    return (
        <React.Fragment>
            {selectedImage !== '' ?
                <div className="image-main">
                    <Image url={selectedImage}/>
                    <button>Find Faces</button> 
                    <button>Download</button>
                </div> : null}
            <div className="image-list">
                {images}
            </div>
        </React.Fragment>
    );

}


export default TheImageList;