import React, {Component} from 'react';
import data from './data';
import api from './api';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import TheImageList from './components/ImageList';

//An array of images
const images = data;


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
    const url = api.getGoogleVisionUrl();
    fetch((url), {
      method: 'POST',
      body: JSON.stringify(api.createRequestJSON([path]))
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
          <TheImageList data={this.state.images} searchTerm={this.state.searchTerm} selectedImage={this.state.selectedImage}/>
          <Footer/>
        </div>
    );
  }
}

export default App;