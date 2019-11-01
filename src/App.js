import React, {useState, useEffect} from 'react';
import data from './data';
import api from './api';
import {SearchProvider} from './context/SearchContext';
import {useVision} from './hooks/Vision';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import TheImageList from './components/ImageList';

//An array of images
const imagesArray = data;


const App = () => {
  
    const [ images, setImages ] = useState([]);
    const [ selectedImage, setSelectedImage ] = useState('');
    useVision(imagesArray, []);
    
    useEffect( () => {
        return imagesArray.forEach(index => {getLabels(index)});
    }, []);


  //Fetches data and triggers buildDataObject() with response as params
  const getLabels = (path) => {
    const url = api.getGoogleVisionUrl();
    fetch((url), {
      method: 'POST',
      body: JSON.stringify(api.createRequestJSON([path]))
    }).then(response => response.json())
      .catch((err) => { console.log('error!', err); })
      .then(data => data = data.responses[0])
      .then(obj => buildDataObject(path, obj));
  }

  //Uses response params to construct state
  const buildDataObject = (str, object) => {

    const labels = object.labelAnnotations;

    if (Object.keys(object).length > 1) {
      const faces = object.faceAnnotations;
        setImages(prevImages => [ ...prevImages, 
            {
              name: str,
              labels: ["All", object.labelAnnotations.map(obj => obj.description)].flat(),
              id: labels[0].mid,
              faces: faces.map(face => face.boundingPoly)
            }]
          )
          
    } else {
      setImages(images => [ ...images,
          {
            name: str,
            labels: ["All", object.labelAnnotations.map(obj => obj.description)].flat(),
            id: labels[0].mid,
            face: null
          }]
        )
    }
  };


    return (
        <div className="App">
            <SearchProvider>
                <Header/>
                <SearchForm />
                <TheImageList data={images} selectedImage={selectedImage}/>
                <Footer/>
            </SearchProvider>
        </div>
    );
  
}

export default App;