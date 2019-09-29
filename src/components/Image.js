import React from 'react';

const imageStyle = {
    maxWidth: '90%',
    margin: 'auto',
    boxShadow: '0 4px 7px 0.5px rgba(0, 0, 0, 0.1)'
}

const Image = props => {
    
    return (
        <div >
            <img src={props.url}  alt="" style={imageStyle}/>
        </div>
    )
}

export default Image;