import React from 'react';
import {SearchProvider} from './context/SearchContext';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import TheImageList from './components/ImageList';


const App = () => {
  
    return (
        <div className="App">
            <SearchProvider>
                <Header/>
                <SearchForm />
                <TheImageList />
                <Footer/>
            </SearchProvider>
        </div>
    );
}

export default App;