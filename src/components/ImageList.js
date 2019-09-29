import React, {Component} from 'react';

//Components
import Image from './Image';

class TheImageList extends Component {

    state = {
        selectedImage: ' '
    }

    storageBase = 'https://storage.googleapis.com/';


    handleImageclick = e => {
        this.setState({
            selectedImage: e.target.url
        })
    }

    render() {
        const results = this.props.data;
        const searchText = this.props.searchTerm;
        const images = results.filter(image => image.labels.indexOf(searchText) > -1).map(finding => 
            <Image url={this.storageBase + finding.name} key={finding.id + finding.name} handleImageclick={this.handleImageclick}/> 
            );
    
        return (
            <React.Fragment>
                <div className="image-main">
                    <Image url={this.state.selectedImage}/>
                </div>
                <div className="image-list">
                    {images}
                </div>
            </React.Fragment>
        );
    }

}


export default TheImageList;