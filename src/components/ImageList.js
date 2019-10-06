import React, {Component} from 'react';

//Components
import Image from './Image';

class TheImageList extends Component {

    state = {
        selectedImage: ''
    }

    storageBase = 'https://storage.googleapis.com/';


    handleImageclick = e => {
        this.setState({
            selectedImage: e.target.src
        });
    }

    handleFindFaces = () => {
        
    }


    render() {
        const results = this.props.data;
        const searchText = this.props.searchTerm;
        const images = results.filter(image => image.labels.indexOf(searchText) > -1).map(finding => 
            // <Image url={this.storageBase + finding.name} key={finding.id + finding.name} handleImageclick={this.handleImageclick}/> 
            <Image url={finding.name} key={finding.id + finding.name} handleImageclick={this.handleImageclick}/> 
            );
    
        return (
            <React.Fragment>

                {this.state.selectedImage !== '' ?
                    <div className="image-main">
                        <Image url={this.state.selectedImage}/>
                        <button>Find Faces</button> 
                        <button>Download</button>
                    </div> : null}
                <div className="image-list">
                    {images}
                </div>
            </React.Fragment>
        );
    }

}


export default TheImageList;