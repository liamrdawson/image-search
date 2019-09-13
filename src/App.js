import React, {Component} from 'react';

//Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';


class App extends Component {

  render () {
    return (
        <div className="App">
          <Header/>
          <SearchForm/>
          <ImageList/>
        </div>
    );
  }
}

export default App;
