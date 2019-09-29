import React, {Component} from 'react';

export default class SearchForm extends Component {

    state = {
        value: ''
    };


    handleValueChange = (e) => {
        this.setState( {value: e.target.value} )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSearchTerm(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input  className="search-input"
                        placeholder="Filter by keyword (e.g. people, plants, chairs)"
                        type="search"
                        name="search"
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        />
                <button className="search-button" type="submit" id="submit">Search</button>
            </form>
        );
    }
    
}