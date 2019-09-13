import React, {Component} from 'react';

//Styles
import './scss/App.scss';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';
import Footer from './components/Footer';


class App extends Component {

  render () {
    return (
        <div className="App">
          <Header/>
          <SearchForm/>
          <ImageList/>
          <Footer/>
        </div>
    );
  }
}

export default App;
