import React, {Component} from 'react';
import data from './data';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';
import Footer from './components/Footer';
import TheImageList from './components/ImageList';

//An array of images
const images = data;

//Information will be sent in fetch request and specifies features being requested.
const createRequestJSON = paths => ({
  requests: paths.map(path => ({
      image: {
      source: {
          // DO NOT CHANGE! this is where the demo images are hosted
          imageUri: `gs://${path}`,
      },
      },
      //REQUEST FEATURES FROM VISION API
      features: [
      {
          "type":"LABEL_DETECTION",
          "maxResults": 50
      }
      ]
  }))
});

const getGoogleVisionUrl = () => {
  return `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_VISION_API_KEY}`;
};

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      images: [],
      searchTerm: '',
      selectedImage: ''
    }
  }

  componentDidMount() {
    images.forEach(index => this.getLabels(index));
  }

  handleAddSearchTerm = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  //Fetches data and triggers buildDataObject() with response as params
  getLabels = (path) => {
    const url = getGoogleVisionUrl();
    fetch((url), {
      method: 'POST',
      body: JSON.stringify(createRequestJSON([path]))
    }).then(response => response.json())
      .catch((err) => { console.log('error!', err); })
      .then(data => data.responses[0].labelAnnotations)
      .then(arr => this.buildDataObject(path, arr));
  }

  //Uses response params to construct state
  buildDataObject = (str, arr) => {
    this.setState(prevState => ({
      images: [
        ...prevState.images,
        {
          name: str,
          labels: arr.map(obj => obj.description),
          id: arr[0].mid
        }
      ]
    }));
  };

  render () {
    return (
        <div className="App">
          <Header/>
          <SearchForm addSearchTerm={this.handleAddSearchTerm} />
          {/* <ImageList data={this.state.images} searchTerm={this.state.searchTerm} selectedImage={this.state.selectedImage}/> */}
          <TheImageList data={this.state.images} searchTerm={this.state.searchTerm} selectedImage={this.state.selectedImage}/>
          <Footer/>
        </div>
    );
  }
}

export default App;