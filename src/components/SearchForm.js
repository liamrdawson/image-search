import React, {Component} from 'react';

export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.state.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form">
                <input  className="search-input"
                        placeholder="Filter by keyword (e.g. people, plants, chairs)"
                        type="search"
                        name="search"/>
                <button className="search-button"type="submit" id="submit">Search</button>
            </form>
        );
    }
    
}