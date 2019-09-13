import React, {Component} from 'react';
import data from './data';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';
import Footer from './components/Footer';


const images = data;
//let filteredImages = images;
//filteredImages.forEach(imagePath => getLabels(imagePath));

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
          "maxResults": 10
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
      images: []
    }
  }

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




  getLabels = (path) => {
    const url = getGoogleVisionUrl();
    fetch((url), {
      method: 'POST',
      body: JSON.stringify(createRequestJSON([path]))
    }).then(response => response.json())
      .catch((err) => { console.log('error!', err); })
      .then(data => data.responses[0].labelAnnotations)
      .then(arr => this.buildDataObject(path, arr));
      // .then(final => 
      //   this.setState([{
      //       labels: final.map(obj => obj.description),
      //       name: path,
      //       id: final[0].mid
      //     }])
      // );
  }

  componentDidMount() {
    images.forEach(index => this.getLabels(index));
  }

  render () {
    return (
        <div className="App">
          <Header/>
          <SearchForm/>
          <ImageList data={this.state.images}/>
          <Footer/>
        </div>
    );
  }
}

export default App;
