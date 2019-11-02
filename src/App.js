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
    const fetchedData = useVision(imagesArray, []);
 
  //Uses response params to construct state
    const buildDataObject = (array) => {
        const name = array.url;
        const labels = array.labels;

        setImages(images => [ ...images,
            {
                name: name,
                // labels: ["All", labels.map(obj => obj.description)].flat(),
                // id: labels[0].mid,
                // face: null
            }]
        )
        console.log(images);
    };

    // fetchedData.forEach(a => buildDataObject(a));
    console.log(images);



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