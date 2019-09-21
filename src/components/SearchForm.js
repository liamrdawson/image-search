import React, {Component} from 'react';

export default class SearchForm extends Component {

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
      }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {

        return (
            <form className="search-form">
                <input  className="search-input"
                        onChange={this.onSearchChange}
                        placeholder="Filter by keyword (e.g. people, plants, chairs)"
                        type="search"
                        name="search"
                        ref={(input) => this.query = input}
                        />
                <button className="search-button"type="submit" id="submit">Search</button>
            </form>
        );
    }
    
}