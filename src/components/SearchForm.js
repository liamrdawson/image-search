import React, {useContext, useState} from 'react';
import {SearchContext} from '../context/SearchContext';

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState('');

    const handleValueChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchValue);
        setSearchValue('');
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input  className="search-input"
                    placeholder="Filter by keyword (e.g. people, plants, chairs)"
                    type="search"
                    name="search"
                    value={searchValue}
                    onChange={handleValueChange}
                    />
            <button className="search-button" type="submit" id="submit">Search</button>
        </form>
    );
    
}

export default SearchForm;