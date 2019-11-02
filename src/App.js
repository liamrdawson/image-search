import React, {useState} from 'react';
import data from './data';
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