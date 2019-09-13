import React, {Component} from 'react';

export default class SearchForm extends Component {

    render() {
        return (
            <form clasName="search-form">
                <input className="search-input"/>
                <button className="search-button">Search</button>
            </form>
        );
    }
    
}